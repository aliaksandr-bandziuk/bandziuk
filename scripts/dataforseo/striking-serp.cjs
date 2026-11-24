// scripts/dataforseo/striking-serp.cjs
//
// Отбор запросов, которые реально довести до топ-5. Берём те, где сайт уже
// стоит на 11–20 позиции (research/search-console/striking-distance.csv), и
// по каждому смотрим живую выдачу: кто в топ-10, сколько там каталогов и
// насколько сильны домены конкурентов по числу ссылающихся доменов.
//
// Смысл отбора: на позицию 11–20 влияет текст страницы, а вот пробиться в
// топ-5 можно только там, где выдача слабая. Запрос, у которого в топ-10
// стоят clutch, designrush и агентства с тысячами доноров, мы не возьмём
// никаким текстом — у сайта 74 ссылающихся домена.
//
//   node scripts/dataforseo/striking-serp.cjs --dry-run
//   node scripts/dataforseo/striking-serp.cjs --limit 85 --budget 1
//   node scripts/dataforseo/striking-serp.cjs --ru-markets ua,pl,il,lv
//   node scripts/dataforseo/striking-serp.cjs --ru-markets all --budget 4
//
// Вывод: research/dataforseo/striking-serp.{csv,md}

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "dataforseo");
const RAW = path.join(OUT, "raw");
const OUR = "bandziuk.com";

const LOGIN = process.env.DATAFORSEO_API_LOGIN;
const PASSWORD = process.env.DATAFORSEO_API_PASSWORD;
const DRY_RUN = process.argv.includes("--dry-run");
const CACHE_ONLY = process.argv.includes("--cache-only");
const argVal = (f, d) => { const i = process.argv.indexOf(f); return i > -1 ? process.argv[i + 1] : d; };
const BUDGET_USD = Number(argVal("--budget", 1.5));
const LIMIT = Number(argVal("--limit", 85));

// Рынок по языку запроса. Search Console страну запроса в выгрузке не даёт,
// поэтому для русского мы раньше брали одну страну — Казахстан. Это оказалось
// неверно: 22.11.2026 у юридического запроса 458 показов из 535 пришли с
// Украины, то есть выдачу мы проверяли не там, где спрос. Теперь русские
// запросы прогоняются по списку стран с большой русскоязычной аудиторией, и в
// отчёт попадает по строке на страну — видно, где выдача слабая, а где занята.
//
// location_code страны у DataForSEO = 2000 + числовой код страны по ISO 3166-1
// (Польша 616 -> 2616, Украина 804 -> 2804), поэтому коды ниже сверяются по
// справочнику ISO, без обращения к API.
const RU_MARKETS = {
  ua: { location_code: 2804, label: "RU/UA" },
  pl: { location_code: 2616, label: "RU/PL" },
  de: { location_code: 2276, label: "RU/DE" },
  cy: { location_code: 2196, label: "RU/CY" },
  il: { location_code: 2376, label: "RU/IL" },
  kz: { location_code: 2398, label: "RU/KZ" },
  lv: { location_code: 2428, label: "RU/LV" },
  lt: { location_code: 2440, label: "RU/LT" },
  ee: { location_code: 2233, label: "RU/EE" },
  md: { location_code: 2498, label: "RU/MD" },
  ge: { location_code: 2268, label: "RU/GE" },
  am: { location_code: 2051, label: "RU/AM" },
  cz: { location_code: 2203, label: "RU/CZ" },
  es: { location_code: 2724, label: "RU/ES" },
  ae: { location_code: 2784, label: "RU/AE" },
  uz: { location_code: 2860, label: "RU/UZ" },

  // Страны, которые называются в самих запросах («продвижение сайта во
  // Франции»). Нужны потому, что состав топ-10 от страны почти не зависит, а
  // наша собственная позиция — зависит: в польской выдаче по французским
  // запросам сайта нет даже в сотне при позициях 12–19 в Search Console.
  //
  // ВАЖНО, прежде чем предлагать такой прогон (решение владельца 24.11.2026):
  // язык страницы тут ни при чём, запросы русские. Ограничение в том, на чём
  // делается сама работа. Продвигать сайт во Франции — значит писать
  // французские тексты, читать французскую выдачу и собирать французскую
  // семантику. Мы работаем на английском, польском и русском, поэтому
  // французский, нидерландский, швейцарский, немецкий и итальянский кластеры
  // не наши, сколько бы показов они ни набирали. США остаются: работа там
  // английская.
  fr: { location_code: 2250, label: "RU/FR" },
  nl: { location_code: 2528, label: "RU/NL" },
  ch: { location_code: 2756, label: "RU/CH" },
  us: { location_code: 2840, label: "RU/US" },
  it: { location_code: 2380, label: "RU/IT" },
};

// По умолчанию ОДНА страна, хотя стран в списке шестнадцать. Причина — замер,
// а не экономия на всякий случай. Прогон 24.11.2026 собрал выдачу по четырём
// странам (UA, PL, CY, DE) для 39 русских запросов и сравнил топ-10 попарно:
// в среднем совпадает 9.9 позиции из 10. Разошёлся ровно один запрос («сайта
// нет в поиске», 8.7 из 10), а локальный «продвижение сайта варшава» оказался
// в Польше и на Кипре одинаковым до последней строчки. То есть для
// русскоязычного запроса Google отдаёт практически один и тот же результат
// независимо от страны спрашивающего, и четыре страны — это четырёхкратная
// цена за тот же ответ.
//
// Польша, а не Украина: показов больше с Украины, но выдача одна и та же, а
// там, где страна всё-таки важна (запросы с городом), нужна та, в которой мы
// продаём. Казахстан, стоявший тут раньше, не подходил ни по одному из двух
// признаков.
//
// Несколько стран имеют смысл, когда проверяется именно география, и тогда:
//   --ru-markets ua,pl   или   --ru-markets all
const RU_DEFAULT = ["pl"];
const ruSelected = (() => {
  const raw = String(argVal("--ru-markets", RU_DEFAULT.join(","))).toLowerCase();
  const keys = raw === "all" ? Object.keys(RU_MARKETS) : raw.split(/[,\s]+/).filter(Boolean);
  const unknown = keys.filter((k) => !RU_MARKETS[k]);
  if (unknown.length) throw new Error(`Неизвестные страны в --ru-markets: ${unknown.join(", ")}. Доступны: ${Object.keys(RU_MARKETS).join(", ")}`);
  return keys.length ? keys : RU_DEFAULT;
})();

// Произвольные запросы вместо выборки из striking-distance.csv. Нужно, когда
// проверяется достижимость запроса, который в диапазон 11–20 не попадает:
// главные кипрские запросы стоят на 27,5 и 16,3, и скрипт их не видел.
//
//   --queries "web development cyprus|website development cyprus" --country cy
//
// Код страны у DataForSEO = 2000 + числовой код ISO 3166-1, как и выше.
const COUNTRY = { cy: 2196, pl: 2616, ua: 2804, de: 2276, gb: 2826, us: 2840, fr: 2250, nl: 2528, ch: 2756, it: 2380, es: 2724, il: 2376, kz: 2398 };
const QUERIES = String(argVal("--queries", "")).split("|").map((q) => q.trim()).filter(Boolean);
const Q_LANG = String(argVal("--language", "en")).toLowerCase();
const Q_COUNTRY = String(argVal("--country", "")).toLowerCase() || { en: "us", pl: "pl", ru: "pl" }[Q_LANG] || "us";
if (QUERIES.length && !COUNTRY[Q_COUNTRY]) {
  throw new Error(`Неизвестная страна в --country: ${Q_COUNTRY}. Доступны: ${Object.keys(COUNTRY).join(", ")}`);
}

const MARKET = {
  en: [{ location_code: 2840, language_code: "en", label: "EN/US" }],
  pl: [{ location_code: 2616, language_code: "pl", label: "PL/PL" }],
  ru: ruSelected.map((k) => ({ ...RU_MARKETS[k], language_code: "ru" })),
};

const AGGREGATOR = /^(www\.)?(clutch\.co|designrush\.com|themanifest\.com|sortlist\.com|semrush\.com|agencies\.semrush\.com|upwork\.com|fiverr\.com|freelancer\.com|yelp\.com|builtin\.com|goodfirms\.co|trustpilot\.com|oferteo\.pl|fixly\.pl|olx\.|kaspi\.kz|profi\.kz|ratingruneta\.ru|yandex\.|google\.|youtube\.com|facebook\.com|linkedin\.com|instagram\.com|reddit\.com|quora\.com|medium\.com|wikipedia\.org|hh\.|rabota\.|indeed\.)/i;

// DataForSEO отдаёт часть выдачи замаскированной: domain равен google.com, а
// url выглядит как google.com/goto?url=… Настоящий хост виден в breadcrumb —
// тот же приём, что в identify() в pseo-intent.cjs (разбор в
// claude/dataforseo-goto-urls.md). Без этого весь топ-10 читается как
// «google.com» и любой отбор выдачи бессмыслен (ошибка найдена 22.11.2026).
function hostOf(item) {
  const u = String(item.url || "");
  const d = String(item.domain || "").toLowerCase().replace(/^www\./, "");
  const wrapped = /^(www\.)?google\./i.test(d) || /google\.[a-z.]+\/goto/i.test(u);
  if (!wrapped && d) return d;
  const m = String(item.breadcrumb || "").match(/^https?:\/\/([^\s\u203a/]+)/i);
  if (m) return m[1].toLowerCase().replace(/^www\./, "");
  // website_name — это имя сайта, а не домен («Kancelaria Herbert Kawecki»).
  // Если в список целей попадёт строка с пробелом, DataForSEO отклоняет весь
  // запрос целиком: 40501 Invalid Field: 'targets' (проверено 22.11.2026).
  const wn = String(item.website_name || "").trim().toLowerCase();
  return isDomain(wn) ? wn : "";
}
const isDomain = (h) => /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9-]+)*\.[a-z]{2,}$/i.test(String(h || ""));

// Цены замерены по кешу, а не взяты из головы: 124 вызова выдачи 24.11.2026
// обошлись в $1.400, то есть $0.0113 за вызов при depth 100 — вчетверо
// дороже прежней оценки 0.0025. Из-за заниженной цифры пробный прогон
// обещал $0.58, а настоящий упёрся в лимит $1.5, не доделав треть работы.
const ESTIMATE = { "serp/google/organic/live/advanced": 0.0113, "backlinks/bulk_referring_domains/live": 0.03 };
let spent = 0, cachedCost = 0, planned = 0, budgetStop = false;

const cacheKey = (e, p) => path.join(RAW, `${e.replace(/[^a-z0-9]+/gi, "_")}__${crypto.createHash("sha1").update(e + JSON.stringify(p)).digest("hex").slice(0, 16)}.json`);

async function call(endpoint, payload, label, retry = false) {
  const file = cacheKey(endpoint, payload);
  if (fs.existsSync(file)) {
    const cached = JSON.parse(fs.readFileSync(file, "utf8"));
    cachedCost += Number(cached.cost || 0);
    return cached;
  }
  const estimate = ESTIMATE[endpoint] ?? 0.05;
  if (DRY_RUN) { planned += estimate; return null; }
  if (CACHE_ONLY) return null;
  if (spent + estimate > BUDGET_USD) {
    // Не исключение: до этой правки упёршийся в лимит прогон терял всё
    // собранное и не писал отчёт, хотя деньги уже были потрачены.
    budgetStop = true;
    return null;
  }
  const res = await axios.post(`https://api.dataforseo.com/v3/${endpoint}`, [payload], { auth: { username: LOGIN, password: PASSWORD }, timeout: 180000 });
  const body = res.data;
  spent += Number(body.cost || 0);
  const task = body.tasks && body.tasks[0];
  if (body.status_code !== 20000 || (task && task.status_code !== 20000)) {
    console.warn(`  ! ${label}: ${task ? task.status_code + " " + task.status_message : body.status_message}`);
    // 40101 — ошибка на стороне поисковой выдачи, а не в нашем запросе, и
    // со второй попытки она обычно не повторяется. Прогон 24.11.2026 потерял
    // на ней около четверти вызовов.
    if (!retry && task && task.status_code === 40101) {
      await new Promise((r) => setTimeout(r, 1500));
      return call(endpoint, payload, label, true);
    }
  } else {
    fs.mkdirSync(RAW, { recursive: true });
    fs.writeFileSync(file, JSON.stringify(body, null, 1));
  }
  return body;
}
const result0 = (b) => (b && b.tasks && b.tasks[0] && b.tasks[0].result && b.tasks[0].result[0]) || null;

function queries() {
  // Режим произвольных запросов: позиций в Search Console у них может не быть
  // вовсе, поэтому показы и позиция пустые — смотрим только на выдачу.
  if (QUERIES.length) {
    return QUERIES.map((keyword) => ({ keyword, lang: "__custom", impressions: 0, position: 0 }));
  }
  const file = path.join(OUT, "striking-distance.csv");
  if (!fs.existsSync(file)) throw new Error("Нет research/dataforseo/striking-distance.csv — сначала node scripts/dataforseo/longtail-inventory.cjs");
  const rows = fs.readFileSync(file, "utf8").split(/\r?\n/).slice(1).filter(Boolean);
  const out = [];
  for (const line of rows) {
    const m = line.match(/^("([^"]*)"|[^,]*),([a-z]*),([^,]*),([^,]*),([^,]*),/);
    if (!m) continue;
    const keyword = (m[2] ?? m[1] ?? "").trim();
    const lang = m[3], impressions = Number(m[4] || 0), position = Number(m[6] || 0);
    if (!keyword || !MARKET[lang]) continue;
    if (position < 11 || position > 20) continue;
    out.push({ keyword, lang, impressions, position });
  }
  out.sort((a, b) => b.impressions - a.impressions);
  return out.slice(0, LIMIT);
}

async function main() {
  if (!DRY_RUN && !CACHE_ONLY && (!LOGIN || !PASSWORD)) throw new Error("Нет доступов DATAFORSEO в .env.local");
  if (QUERIES.length) {
    MARKET.__custom = [{ location_code: COUNTRY[Q_COUNTRY], language_code: Q_LANG, label: `${Q_LANG.toUpperCase()}/${Q_COUNTRY.toUpperCase()}` }];
  }
  const list = queries();
  console.log(QUERIES.length ? `произвольных запросов: ${list.length}` : `запросов на позициях 11–20: ${list.length}`);
  const calls = list.reduce((n, q) => n + MARKET[q.lang].length, 0);
  if (!QUERIES.length) console.log(`рынки для русских запросов: ${MARKET.ru.map((m) => m.label).join(", ")}`);
  console.log(`вызовов выдачи: ${calls}`);

  const rows = [];
  const domains = new Set();
  for (const q of list) {
    // Русский запрос проверяется в нескольких странах сразу — показы у него
    // собраны со всех, и одной выдачей они не описываются.
    for (const m of MARKET[q.lang]) {
      const body = await call("serp/google/organic/live/advanced", {
        keyword: q.keyword, location_code: m.location_code, language_code: m.language_code, depth: 100, device: "desktop",
      }, `${m.label} · ${q.keyword}`);
      const res = result0(body);
      const items = ((res && res.items) || []).filter((it) => it.type === "organic");
      const hosts = items.map(hostOf);
      const top10 = hosts.slice(0, 10).filter(Boolean);
      const ours = hosts.findIndex((h) => h.includes(OUR));
      top10.forEach((d) => { if (isDomain(d)) domains.add(d); });
      rows.push({
        market: m.label, keyword: q.keyword, impressions: q.impressions,
        gscPosition: q.position, livePosition: ours > -1 ? ours + 1 : "",
        aggregators: top10.filter((d) => AGGREGATOR.test(d)).length,
        top10: top10.join(" "),
        // Пустая выдача — это не «слабая выдача», а несостоявшийся вызов:
        // не каждая пара «страна + язык» есть у DataForSEO. Помечаем, чтобы
        // такая строка не попала в «берём».
        empty: top10.length === 0,
      });
      console.log(`  ${m.label} ${String(q.impressions).padStart(4)} поз${String(q.position).padStart(5)}  ${q.keyword}${top10.length ? "" : "  (выдача не получена)"}`);
      if (budgetStop) break;
    }
    if (budgetStop) break;
  }
  if (budgetStop) console.log(`\n! лимит бюджета $${BUDGET_USD} исчерпан — отчёт собран по тому, что успели получить`);

  // Сила доменов из топ-10: одним вызовом на каждую сотню.
  const strength = {};
  const all = [...domains];
  for (let i = 0; i < all.length; i += 100) {
    const batch = all.slice(i, i + 100);
    const body = await call("backlinks/bulk_referring_domains/live", { targets: batch }, `сила доменов ${i + 1}–${i + batch.length}`);
    const res = result0(body);
    for (const it of (res && res.items) || []) strength[(it.target || "").replace(/^www\./, "")] = it.referring_main_domains ?? it.referring_domains ?? null;
  }

  for (const r of rows) {
    const vals = r.top10.split(" ").map((d) => strength[d]).filter((v) => typeof v === "number").sort((a, b) => a - b);
    r.medianStrength = vals.length ? vals[Math.floor(vals.length / 2)] : "";
    r.weakInTop10 = vals.filter((v) => v <= 200).length;
    // Берём, если выдача слабая: мало каталогов, есть домены нашего калибра
    // И медиана топ-10 в пределах досягаемости.
    //
    // Медиана добавлена 24.11.2026. До этого правило смотрело только на число
    // каталогов и слабых доменов, и в «берём» попадало, например,
    // «продвижение юридического сайта цена» с медианой 7366 ссылающихся
    // доменов: четыре слабых сайта в топ-10 там соседствуют с половиной
    // выдачи, до которой нам не дотянуться никаким текстом.
    //
    // Порог 800 — это примерно десятикратный запас к нашим 74 донорам.
    // Разрыв в десять раз контентом и структурой ещё закрывается, разрыв в
    // сто — нет.
    const REACHABLE_MEDIAN = 800;
    r.verdict = r.empty
      ? "выдача не получена"
      : r.aggregators >= 4
        ? "выдача занята каталогами"
        : r.aggregators <= 2 && r.weakInTop10 >= 3 && (r.medianStrength === "" || r.medianStrength <= REACHABLE_MEDIAN)
          ? "берём"
          : r.aggregators <= 2 && r.weakInTop10 >= 3
            ? `медиана топ-10 ${r.medianStrength} доноров — не дотянемся`
            : "домены сильнее нас";
  }
  rows.sort((a, b) => (a.verdict === "берём" ? -1 : 1) - (b.verdict === "берём" ? -1 : 1) || b.impressions - a.impressions);

  if (DRY_RUN) { console.log(`\nпробный прогон: вызовов на ~$${planned.toFixed(3)}, лимит $${BUDGET_USD}`); return; }

  const head = ["market", "keyword", "impressions", "gscPosition", "livePosition", "aggregators", "weakInTop10", "medianStrength", "verdict", "top10"];
  const stem = QUERIES.length ? "striking-serp-custom" : "striking-serp";
  fs.writeFileSync(path.join(OUT, `${stem}.csv`),
    [head.join(","), ...rows.map((r) => head.map((h) => {
      const v = r[h]; return v == null ? "" : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v);
    }).join(","))].join("\n"));

  const take = rows.filter((r) => r.verdict === "берём");
  const L = ["# Запросы на 11–20 позиции: какие можно довести до топ-5", "",
    `Собрано ${new Date().toISOString().slice(0, 10)}. Запросов разобрано ${rows.length}, пригодных ${take.length}.`, "",
    `«Берём» означает: в топ-10 не больше двух каталогов и минимум три домена с числом ссылающихся доменов до 200 — то есть нашего калибра (у нас 74).`, "",
    "| Запрос | Рынок | Показы | Поз. GSC | Поз. сейчас | Каталогов в топ-10 | Слабых в топ-10 | Медиана доноров |", "|---|---|---|---|---|---|---|---|"];
  for (const r of take) L.push(`| ${r.keyword} | ${r.market} | ${r.impressions} | ${r.gscPosition} | ${r.livePosition || "—"} | ${r.aggregators} | ${r.weakInTop10} | ${r.medianStrength} |`);
  fs.writeFileSync(path.join(OUT, `${stem}.md`), L.join("\n") + "\n");
  console.log(`\nготово: research/dataforseo/${stem}.{csv,md}`);
  console.log(`пригодных запросов ${take.length} из ${rows.length}, потрачено $${spent.toFixed(4)} (из кеша на $${cachedCost.toFixed(4)})`);
}
main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
