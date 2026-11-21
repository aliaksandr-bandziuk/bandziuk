// scripts/dataforseo/longtail-inventory.cjs
//
// Инвентарь длинного хвоста. Ни одного обращения к API: всё берётся из уже
// оплаченных ответов в research/dataforseo/raw, из фикстур и из выгрузок
// Search Console.
//
// Зачем отдельный скрипт. Парсер ниш сводил каждую фразу к одному слову-хвосту
// («сантехник», «dentystów») и сами фразы выбрасывал. Для низкочастотного
// продвижения нужно обратное: сама фраза, её частота, конкуренция, и ответ на
// вопрос, есть ли под неё страница. В кеше таких фраз больше двадцати тысяч.
//
// Что на выходе:
//   research/dataforseo/longtail-inventory.csv   — все фразы с полями
//   research/dataforseo/striking-distance.csv    — запросы GSC на позициях 11–50
//   research/dataforseo/longtail-inventory.md    — сводка по рынкам
//
//   node scripts/dataforseo/longtail-inventory.cjs
//   node scripts/dataforseo/longtail-inventory.cjs --min 10 --words 3

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "dataforseo");
const RAW = path.join(OUT, "raw");
const FIX = path.join(ROOT, "src", "dev-fixtures");
const GSC = path.join(ROOT, "research", "search-console");

const argVal = (f, d) => { const i = process.argv.indexOf(f); return i > -1 ? process.argv[i + 1] : d; };
const MIN_VOLUME = Number(argVal("--min", 10));
const MIN_WORDS = Number(argVal("--words", 3));
// Хвост, а не голова: головные запросы нам не взять, и он сам это сказал.
const MAX_VOLUME = Number(argVal("--max", 1000));

const MARKET = {
  "2840|en": "EN/US", "2826|en": "EN/UK", "2616|pl": "PL/PL", "2616|ru": "RU/PL",
  "2398|ru": "RU/KZ", "2196|en": "EN/CY", "2196|el": "EL/CY", "2784|en": "EN/AE",
};
const marketOf = (it) => MARKET[`${it.location_code}|${it.language_code}`] || `${it.location_code}/${it.language_code}`;

// ---------------------------------------------------------------- фикстуры --
// Индекс того, что у нас уже есть: slug, metaTitle и H1 каждой страницы.
const STOP = new Set(["the","a","an","and","or","for","to","in","of","with","my","your","our","best","top","cheap","near","me","i","is","are","how","what","why","dla","i","w","na","do","od","z","za","się","jest","czy","jak","co","для","и","в","на","с","по","под","от","как","что","чтобы","это","сайт","сайта","site","website","strona","strony"]);
const stem = (w) => (w.length > 5 ? w.slice(0, 5) : w);
const words = (s) => String(s).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").split(" ").filter((w) => w && !STOP.has(w));

function fixtureIndex() {
  const idx = [];
  for (const f of fs.readdirSync(FIX)) {
    if (!/\.(en|pl|ru)\.ts$/.test(f)) continue;
    const src = fs.readFileSync(path.join(FIX, f), "utf8");
    const pick = (re) => { const m = src.match(re); return m ? m[1] : ""; };
    const blob = [
      pick(/slug:\s*"([^"]+)"/).replace(/-/g, " "),
      pick(/metaTitle:\s*"([^"]+)"/),
      pick(/h1:\s*"([^"]+)"/),
      pick(/title:\s*"([^"]+)"/),
    ].join(" ");
    idx.push({ file: f, lang: f.match(/\.(en|pl|ru)\.ts$/)[1], set: new Set(words(blob).map(stem)) });
  }
  return idx;
}

// Фраза считается покрытой, только если все её значимые слова есть в одной
// странице. Иначе «сайт для стоматолога в варшаве» зачлась бы странице про
// стоматологов без Варшавы, и мы бы не увидели городской хвост.
function coverage(idx, phrase, lang) {
  const w = words(phrase).map(stem);
  if (!w.length) return null;
  for (const page of idx) {
    if (page.lang !== lang) continue;
    if (w.every((x) => page.set.has(x))) return page.file;
  }
  return null;
}

// ------------------------------------------------------------------- кеш --
const KW_FILES = /^(dataforseo_labs_google_keyword_suggestions_live|dataforseo_labs_google_keyword_ideas_live|dataforseo_labs_google_related_keywords_live|keywords_data_google_ads_keywords_for_keywords_live|keywords_data_google_ads_search_volume_live|dataforseo_labs_google_ranked_keywords_live)__/;

function readCache() {
  const rows = new Map();
  if (!fs.existsSync(RAW)) return rows;
  for (const f of fs.readdirSync(RAW)) {
    if (!KW_FILES.test(f)) continue;
    let body;
    try { body = JSON.parse(fs.readFileSync(path.join(RAW, f), "utf8")); } catch { continue; }
    for (const task of body.tasks || []) {
      for (const res of task.result || []) {
        const items = res.items || (res.keyword ? [res] : []);
        for (const raw of items) {
          // ranked_keywords прячет фразу на уровень глубже
          const it = raw.keyword_data || raw;
          const kw = it.keyword;
          if (!kw) continue;
          const info = it.keyword_info || {};
          const props = it.keyword_properties || {};
          const intent = (it.search_intent_info || {}).main_intent || null;
          const volume = info.search_volume ?? it.search_volume ?? 0;
          const comp = info.competition != null ? Math.round(info.competition * 100) : (it.competition_index ?? null);
          const cpc = info.cpc ?? it.cpc ?? null;
          const kd = props.keyword_difficulty ?? null;
          const key = `${kw}|${it.location_code}|${it.language_code}`;
          const prev = rows.get(key);
          const row = {
            keyword: kw, market: marketOf(it), lang: it.language_code,
            volume: Number(volume) || 0, competition: comp, cpc: cpc != null ? Number(cpc) : null,
            difficulty: kd, intent,
          };
          // Берём запись с большей известностью: частота, сложность, интент.
          if (!prev || (row.volume > prev.volume) || (prev.difficulty == null && kd != null)) rows.set(key, { ...prev, ...row });
        }
      }
    }
  }
  return rows;
}

// --------------------------------------------------------------- интенты --
// Заказчицкий запрос: ищут исполнителя или цену. Информационный: ищут, как
// сделать самому. Третье — инструменты и обучение: это не наш клиент.
// Латинская \b после кириллицы не срабатывает, поэтому границы слов здесь
// заданы вручную (ошибка найдена 22.11.2026: по RU/PL выходило ноль заказчицких).
const BUY = /(agency|agencja|agencji|freelancer|specjalista|specialist|consultant|konsultant|service|services|usługi|uslugi|услуги|специалист|фрилансер|агентство|студия|заказать|zamów|zlecenie|hire|cost|price|pricing|cennik|cena|ceny|стоимость|цена|цены|прайс|сколько стоит|ile kosztuje|wycena|смета|под ключ|na zamówienie|оферта|oferta)/i;
const DIY = /(how to|tutorial|guide|course|courses|kurs|szkolenie|darmowy|free|template|templates|szablon|самостоятельно|своими руками|бесплатно|инструкция|урок|обучение|checklist|przykłady|examples?)/i;
const TOOL = /(tool|tools|software|plugin|wtyczka|narzędzi|generator|checker|ai writer|плагин|инструмент|программа|расширение)/i;

// Фраза относится к нашим услугам, только если называет саму услугу. Без этого
// в инвентарь попадают данные других проектов из того же кеша.
const SERVICE = /(seo|geo|aeo|llm|web design|webdesign|website|web development|web developer|landing|pozycjonowan|strona|strony|stron |www|sklep internetowy|audyt|сайт|сайта|сайтов|сайты|продвижен|раскрутк|лендинг|веб|разработк|создание сайт|оптимизац)/i;
// Темы других проектов и потребительский мусор, который лежит в том же кеше.
const OFFTOPIC = /(вид на жительство|внж|виза|визы|visa|residence permit|relocat|переезд|гражданств|знакомств|dating|скачать|download|flights?|airline|airfare|internal revenue|\birs\b|usps|vacanc|резюме|анкета|бланк|образец|секции для детей|сравнения роста|porn|adult)/i;

// Семья запроса: по ней видно, какой шаблон страницы его закрывает.
const CITIES = /(warszaw|krakow|kraków|wrocław|wroclaw|poznań|poznan|gdańsk|gdansk|gdyni|łódź|lodz|katowic|lublin|szczecin|bydgoszcz|toruń|torun|białystok|rzeszów|алматы|астан|шымкент|караганд|limassol|nicosia|larnaca|paphos|warsaw|dubai|abu dhabi|варшав|лимасол|дубай)/i;
const COUNTRY = /(w niemczech|w uk|w anglii|w usa|w szwajcarii|w holandii|w belgii|we francji|w czechach|za granicą|за границей|во франции|францию|франция|в сша|америк|нидерланд|швейцари|германи|испани|итали|польше|казахстан|кипр|cyprus|in germany|in the uk|in usa|in switzerland|in netherlands|in france|abroad)/i;
const PRICE = /(cena|ceny|cennik|koszt|ile kosztuje|price|pricing|cost|how much|стоимость|цена|цены|сколько стоит|прайс|wycena|смета)/i;
const ENGINE = /(chatgpt|perplexity|gemini|claude|copilot|ai overview|llm|нейросет|ии)/i;
const PLATFORM = /(wordpress|shopify|woocommerce|prestashop|wix|webflow|next\.?js|tilda|joomla|magento|shoper|allegro)/i;
const AUDIENCE = /( for | dla | для )/i;

function familyOf(kw) {
  if (ENGINE.test(kw)) return "движок ИИ";
  if (PRICE.test(kw)) return "цена";
  if (CITIES.test(kw)) return "город";
  if (COUNTRY.test(kw)) return "страна";
  if (PLATFORM.test(kw)) return "платформа";
  if (AUDIENCE.test(kw)) return "ниша";
  return "прочее";
}

function intentOf(row) {
  if (TOOL.test(row.keyword)) return "инструмент";
  if (DIY.test(row.keyword)) return "сделать самому";
  if (BUY.test(row.keyword)) return "ищет исполнителя";
  if (row.intent) return { commercial: "коммерческий", transactional: "ищет исполнителя", informational: "информационный", navigational: "навигационный" }[row.intent] || row.intent;
  return "неясный";
}

// ------------------------------------------------- Search Console: 11–50 --
function strikingDistance() {
  if (!fs.existsSync(GSC)) return [];
  const file = fs.readdirSync(GSC).filter((f) => /^gsc-queries.*\.csv$/.test(f)).sort().pop();
  if (!file) return [];
  const rows = fs.readFileSync(path.join(GSC, file), "utf8").split(/\r?\n/).slice(1).filter(Boolean);
  const out = [];
  for (const line of rows) {
    const m = line.match(/^("([^"]*)"|[^,]*),([^,]*),([^,]*),([^,]*),(.*)$/);
    if (!m) continue;
    const kw = (m[2] ?? m[1] ?? "").trim();
    const clicks = Number(m[3] || 0), impressions = Number(m[4] || 0);
    const position = Number(String(m[6]).replace(/[^\d.]/g, "") || 0);
    if (!kw || !position) continue;
    if (position < 11 || position > 50) continue;
    const lang = /[а-яё]/i.test(kw) ? "ru" : /[ąęśćżźłń]|pozycjon|stron|internetow|cennik|firmy|dla /i.test(kw) ? "pl" : "en";
    out.push({ keyword: kw, clicks, impressions, position, lang, wordCount: kw.split(/\s+/).length });
  }
  out.sort((a, b) => b.impressions - a.impressions);
  return out;
}

// ------------------------------------------------------------------ вывод --
const csv = (rows, head) => [head.join(","), ...rows.map((r) => head.map((h) => {
  const v = r[h];
  return v == null ? "" : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v);
}).join(","))].join("\n");

function main() {
  const idx = fixtureIndex();
  const cache = readCache();
  const rows = [];
  for (const row of cache.values()) {
    const wc = row.keyword.trim().split(/\s+/).length;
    const covered = coverage(idx, row.keyword, row.lang);
    rows.push({
      ...row, wordCount: wc, intentKind: intentOf(row),
      covered: covered ? "да" : "нет", coveredBy: covered || "",
      family: familyOf(row.keyword),
      // Шанс: это наша услуга, частота низкая но не нулевая, фраза длинная,
      // конкуренция не запредельная, страницы под неё нет.
      chance: SERVICE.test(row.keyword) && !OFFTOPIC.test(row.keyword)
        && row.volume >= MIN_VOLUME && row.volume <= MAX_VOLUME
        && wc >= MIN_WORDS && !covered
        && (row.competition == null || row.competition <= 60) ? "кандидат" : "",
    });
  }
  rows.sort((a, b) => (b.chance ? 1 : 0) - (a.chance ? 1 : 0) || b.volume - a.volume);
  fs.writeFileSync(path.join(OUT, "longtail-inventory.csv"),
    csv(rows, ["market", "keyword", "volume", "wordCount", "competition", "cpc", "difficulty", "intentKind", "family", "covered", "coveredBy", "chance"]));

  const sd = strikingDistance();
  fs.writeFileSync(path.join(OUT, "striking-distance.csv"),
    csv(sd.map((r) => ({ ...r, covered: coverage(idx, r.keyword, r.lang) || "" })), ["keyword", "lang", "impressions", "clicks", "position", "wordCount", "covered"]));

  const L = ["# Длинный хвост: что уже лежит в оплаченных данных", "",
    `Собрано ${new Date().toISOString().slice(0, 10)} из кеша DataForSEO, фикстур и Search Console. Ни одного нового запроса к API.`, "",
    `Всего фраз в кеше: ${rows.length}. Из них кандидатов (частота ≥ ${MIN_VOLUME}, слов ≥ ${MIN_WORDS}, конкуренция ≤ 60, страницы нет): ${rows.filter((r) => r.chance).length}.`, ""];
  const byMarket = {};
  for (const r of rows) { (byMarket[r.market] = byMarket[r.market] || []).push(r); }
  for (const [m, list] of Object.entries(byMarket).sort((a, b) => b[1].length - a[1].length)) {
    const cand = list.filter((r) => r.chance);
    const fam = {};
    for (const r of cand) fam[r.family] = (fam[r.family] || 0) + 1;
    L.push(`## ${m}`, "", `Фраз: ${list.length}. Кандидатов: ${cand.length}. По семьям: ${Object.entries(fam).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join(", ") || "нет"}.`, "");
    if (cand.length) {
      L.push("| Фраза | Частота | Слов | Конк. | CPC | Интент | Семья |", "|---|---|---|---|---|---|---|");
      for (const r of cand.slice(0, 60)) L.push(`| ${r.keyword} | ${r.volume} | ${r.wordCount} | ${r.competition ?? "—"} | ${r.cpc ?? "—"} | ${r.intentKind} | ${r.family} |`);
      L.push("");
    }
  }
  L.push("## Search Console: мы на 11–50 позиции", "", `Таких запросов: ${sd.length}. Это самый короткий путь: страница уже есть и уже показывается.`, "");
  L.push("| Запрос | Показы | Клики | Позиция | Слов |", "|---|---|---|---|---|");
  for (const r of sd.slice(0, 40)) L.push(`| ${r.keyword} | ${r.impressions} | ${r.clicks} | ${r.position.toFixed(1)} | ${r.wordCount} |`);
  fs.writeFileSync(path.join(OUT, "longtail-inventory.md"), L.join("\n") + "\n");

  console.log(`фраз в кеше: ${rows.length}, кандидатов: ${rows.filter((r) => r.chance).length}`);
  console.log(`запросов на позициях 11–50: ${sd.length}`);
  for (const [m, list] of Object.entries(byMarket)) console.log(`  ${m}: ${list.length} фраз, ${list.filter((r) => r.chance).length} кандидатов`);
  console.log("готово: research/dataforseo/longtail-inventory.{csv,md}, striking-distance.csv");
}
main();
