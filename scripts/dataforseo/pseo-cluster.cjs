// scripts/dataforseo/pseo-cluster.cjs
//
// Превращает выгрузку запросов в список посадочных страниц.
//
// Почему не «свёртка по похожести». Первая версия этого скрипта сворачивала
// запросы по совпадению подписи и подбирала порог похожести. Это тупик:
// «pozycjonowanie stron» и «pozycjonowanie stron internetowych» — одна
// страница, а «pozycjonowanie stron» и «pozycjonowanie stron gorzów» — две,
// хотя в обоих случаях разница ровно в одном слове. Порога, который различает
// эти два случая, не существует, потому что дело не в похожести.
//
// Различает их ТИП добавленного слова. Город, платформа, цена, сегмент
// («dla fotografa») дают отдельную страницу. Слова вроде «internetowych»,
// «www», «profesjonalne» не дают ничего. Поэтому скрипт не сворачивает список,
// а разбирает каждый запрос на базовую услугу и модификатор, и страницей
// считает пару «услуга + модификатор».
//
// Типы страниц на выходе:
//   base      базовая услуга без уточнений
//   city      услуга в городе — отдельная страница на каждый город
//   segment   услуга для кого-то: «strona internetowa dla fotografa»
//   platform  услуга на платформе: «pozycjonowanie sklepu prestashop»
//   price     запрос про стоимость: «ile kosztuje pozycjonowanie»
//   info      вопрос «что это» и «как» — материал для блога, не для лендинга
//
// Города берутся из research/pseo/cities.json, который сохраняет
// pseo-discover.cjs из бесплатного эндпоинта локаций. Руками такой список не
// составить: именно на этом первая версия и сломалась, слив семьдесят польских
// городов в одну строку. Слова, встречающиеся в сидах, городом считаться не
// могут — иначе американские города Mobile, Reading и Industry поломают разбор.
//
// API не вызывается, деньги не тратятся.
//
//   node scripts/dataforseo/pseo-cluster.cjs
//   node scripts/dataforseo/pseo-cluster.cjs --lang pl --min-volume 10

const fs = require("fs");
const path = require("path");
const { SEEDS, CITY, CITIES_RU, SEGMENT_STOP } = require("./pseo-seeds.cjs");

const ROOT = path.resolve(__dirname, "../..");
const DIR = path.join(ROOT, "research", "pseo");

const argv = process.argv.slice(2);
const flag = (n, d) => {
  const i = argv.indexOf("--" + n);
  return i > -1 && argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : d;
};
const ONLY_LANG = flag("lang", null);
const MIN_VOLUME = Number(flag("min-volume", 10));
const LANGS = ONLY_LANG ? [ONLY_LANG] : ["pl", "ru", "en"];

// ------------------------------------------------------------------ словари --

const FUNCTION_WORDS = {
  pl: new Set(["w", "we", "na", "do", "i", "z", "ze", "o", "od", "po", "za", "bez", "przy", "oraz", "lub", "a", "jest", "sie", "się"]),
  ru: new Set(["в", "во", "на", "и", "с", "со", "по", "от", "до", "за", "без", "при", "или", "а", "это", "же"]),
  en: new Set(["a", "an", "the", "in", "of", "to", "and", "or", "on", "with", "at", "by", "is", "are", "does", "my", "your", "it"]),
};

// Предлог, после которого идёт сегмент: «dla fotografa», «для юриста»,
// «for small business». Из FUNCTION_WORDS исключён намеренно.
const SEGMENT_PREP = { pl: "dla", ru: "для", en: "for" };

const PLATFORM = new Set([
  "wordpress", "woocommerce", "prestashop", "presta", "shoper", "shopify", "magento",
  "drupal", "joomla", "wix", "webflow", "squarespace", "tilda", "тильда", "bitrix",
  "битрикс", "opencart", "sanity", "strapi", "contentful", "nextjs", "next", "react",
  "vue", "laravel", "symfony", "shopware", "idosell", "baselinker", "squarespace",
]);

const PRICE = {
  pl: ["cena", "ceny", "cennik", "koszt", "kosztuje", "ile", "promocja", "tanio"],
  ru: ["цена", "цены", "стоимость", "сколько", "стоит", "прайс", "тариф", "тарифы", "недорого"],
  en: ["price", "pricing", "cost", "costs", "cheap", "affordable", "budget", "rates", "fee", "fees", "much"],
};

const INFO = {
  pl: ["co", "to", "jak", "dlaczego", "czym", "znaczy", "przykład", "przyklad", "przykłady", "poradnik", "krok"],
  ru: ["что", "такое", "как", "почему", "зачем", "пример", "примеры", "инструкция", "гайд"],
  en: ["what", "how", "why", "guide", "tutorial", "meaning", "means", "example", "examples", "definition", "checklist"],
};

// Слова, которые ничего не меняют: страницу они не различают.
const FILLER = {
  pl: ["internetow", "www", "profesjonaln", "najlepsz", "dobre", "dobry", "skuteczn"],
  ru: ["профессиональн", "лучш", "качественн"],
  en: ["best", "top", "good", "great", "professional", "expert"],
};

const SUFFIXES = {
  pl: ["owania", "owanie", "owych", "ego", "emu", "ami", "ach", "owie", "ow", "om", "em", "ie", "ia", "ych", "y", "a", "e", "i", "u", "ą", "ę"],
  ru: ["ование", "ования", "ами", "ями", "ого", "ему", "ому", "ых", "их", "ов", "ев", "ей", "ам", "ям", "ах", "ях", "ом", "ем", "ую", "ая", "ое", "ые", "ый", "ий", "а", "я", "ы", "и", "у", "ю", "о", "е", "ь"],
  en: ["ization", "isation", "ing", "ies", "ers", "er", "es", "s"],
};

const DIACRITICS = { ł: "l", ó: "o", ą: "a", ć: "c", ę: "e", ń: "n", ś: "s", ź: "z", ż: "z", ё: "е", й: "и" };

// Английские города, чьи названия совпадают с обычными словами. Без этого
// «mobile seo» и «website reading» разъехались бы по городам.
const CITY_FALSE = new Set([
  "mobile", "reading", "industry", "normal", "commerce", "enterprise", "independence",
  "orange", "sunrise", "surprise", "union", "liberty", "general", "national", "progress",
  "hope", "home", "page", "design", "media", "web", "search", "university", "college",
  "centre", "center", "village", "springs", "valley", "park", "hill", "lake", "river",
  // Добавлено после прогона: в словаре 39 310 названий, и короткие слова в нём
  // совпадают с обычными. Нидерландский город Best превратил
  // «best headless cms» в городскую страницу.
  "best", "local", "small", "speed", "trends", "trend", "figma", "price", "cost",
  "audit", "expert", "agency", "google", "sanity", "single", "simple", "modern",
]);

function normalize(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[łóąćęńśźżёй]/g, (c) => DIACRITICS[c] || c)
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stem(word, lang) {
  if (word.length <= 4) return word;
  for (const suf of SUFFIXES[lang] || []) {
    if (word.endsWith(suf) && word.length - suf.length >= 4) return word.slice(0, -suf.length).slice(0, 6);
  }
  return word.slice(0, 6);
}

const startsWithAny = (word, list) => list.some((p) => word.startsWith(p));

// Словари сравниваются с уже нормализованным текстом, поэтому и сами должны
// быть нормализованы: без этого «сайта» в стоп-листе не ловит «саита»,
// в которое normalize() превращает слово (й→и).
const normList = (list) => (list || []).map(normalize);
const normSet = (set) => new Set([...set].map(normalize));
for (const lang of ["pl", "ru", "en"]) {
  if (PRICE[lang]) PRICE[lang] = normList(PRICE[lang]);
  if (INFO[lang]) INFO[lang] = normList(INFO[lang]);
  if (FILLER[lang]) FILLER[lang] = normList(FILLER[lang]);
  if (SEGMENT_STOP[lang]) SEGMENT_STOP[lang] = normList(SEGMENT_STOP[lang]);
  if (FUNCTION_WORDS[lang]) FUNCTION_WORDS[lang] = normSet(FUNCTION_WORDS[lang]);
}
const PLATFORM_N = normSet(PLATFORM);

// ------------------------------------------------------------------- города --

function loadCities(lang) {
  const file = path.join(DIR, "cities.json");
  const set = new Set();
  const known = CITY[lang];

  // Словарь DataForSEO — на латинице, поэтому для русского он бесполезен:
  // «астана» там записана как astana. Кириллические названия берутся из
  // списка CITIES_RU.
  if (lang === "ru") {
    for (const name of CITIES_RU) set.add(normalize(name));
  }

  if (fs.existsSync(file)) {
    try {
      for (const name of JSON.parse(fs.readFileSync(file, "utf8"))) {
        const n = normalize(name);
        // Названия короче пяти знаков берутся только если это заведомо город
        // из списка CITY: в словаре на 39 310 записей короткие названия
        // сталкиваются с обычными словами.
        if (n.length < 5 && !(known && known.test(n))) continue;
        if (n.length >= 4) set.add(n);
      }
    } catch (e) {
      console.warn("  ! cities.json не прочитан:", e.message);
    }
  }
  // Слова из сидов городами быть не могут: сиды описывают услугу. Но из этого
  // правила изъяты настоящие города из списка CITY — иначе сид «agencja seo
  // warszawa» выбрасывал Варшаву из словаря, и варшавские запросы уезжали
  // в базовые вместо городских.
  for (const seed of Object.values(SEEDS[lang] || {}).flat()) {
    for (const w of normalize(seed).split(" ")) {
      if (known && known.test(w)) continue;
      set.delete(w);
    }
  }
  for (const w of CITY_FALSE) set.delete(w);
  return set;
}

// ------------------------------------------------------------------- разбор --

/**
 * Разбирает запрос на базовую услугу и модификатор.
 * Возвращает { type, value, base } — base это подпись услуги без модификаторов.
 */
function parse(keyword, lang, cities) {
  const words = normalize(keyword).split(" ").filter(Boolean);
  const fw = FUNCTION_WORDS[lang] || new Set();
  const prep = SEGMENT_PREP[lang];

  // Город: сначала двусловные названия («zielona gora», «bielsko biala»),
  // потом однословные — иначе «zielona» и «gora» разъедутся.
  let city = "";
  const cityAt = new Set();
  for (let i = 0; i < words.length - 1; i++) {
    const pair = words[i] + " " + words[i + 1];
    if (cities.has(pair)) { city = pair; cityAt.add(i); cityAt.add(i + 1); break; }
  }
  if (!city) {
    for (let i = 0; i < words.length; i++) {
      if (cities.has(words[i])) { city = words[i]; cityAt.add(i); break; }
    }
  }

  let platform = "";
  let price = false;
  let info = false;
  const used = new Set(cityAt);
  const priceList = PRICE[lang] || [];
  const infoList = INFO[lang] || [];

  words.forEach((w, i) => {
    if (used.has(i)) return;
    if (!platform && PLATFORM_N.has(w)) { platform = w; used.add(i); return; }
    if (priceList.includes(w)) { price = true; used.add(i); return; }
    if (infoList.includes(w)) { info = true; used.add(i); return; }
  });

  // Сегмент: слова после предлога, кроме уже разобранных и служебных.
  // Ключ сегмента считается по основам, чтобы «dla firm» и «dla firmy»
  // не разъехались на две страницы; в value остаётся исходное написание.
  let segment = "";
  let segmentKey = "";
  const prepAt = words.indexOf(prep);
  if (prepAt > -1) {
    const tail = [];
    for (let i = prepAt + 1; i < words.length && tail.length < 3; i++) {
      if (used.has(i) || fw.has(words[i])) continue;
      if (startsWithAny(words[i], FILLER[lang] || [])) continue;
      if ((SEGMENT_STOP[lang] || []).includes(words[i])) continue;
      tail.push(words[i]);
      used.add(i);
    }
    if (tail.length) { segment = tail.join(" "); segmentKey = tail.map((w) => stem(w, lang)).join(" "); used.add(prepAt); }
  }

  // База: всё остальное, без служебных слов, наполнителей и предлога сегмента.
  const base = [...new Set(
    words
      .filter((w, i) => !used.has(i) && w !== prep && !fw.has(w) && !startsWithAny(w, FILLER[lang] || []))
      .map((w) => stem(w, lang)),
  )].sort().join(" ");

  // Порядок важен: город главнее всего, информационный запрос — в самом низу,
  // потому что «ile kosztuje X» это страница про цену, а не статья.
  if (city) return { type: "city", value: city, base };
  if (segment) return { type: "segment", value: segment, key: segmentKey, base };
  if (platform) return { type: "platform", value: platform, base };
  if (price) return { type: "price", value: "", base };
  if (info) return { type: "info", value: "", base };
  return { type: "base", value: "", base };
}

// ---------------------------------------------------------------------- csv --

function parseLine(line) {
  const out = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQ && line[i + 1] === '"') { cur += '"'; i++; }
      else inQ = !inQ;
    } else if (c === "," && !inQ) { out.push(cur); cur = ""; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

function readCsv(file) {
  const lines = fs.readFileSync(file, "utf8").replace(/^﻿/, "").split(/\r?\n/).filter((l) => l.trim() !== "");
  const head = parseLine(lines[0]);
  return lines.slice(1).map((l) => {
    const cells = parseLine(l);
    const row = {};
    head.forEach((h, i) => { row[h] = cells[i] == null ? "" : cells[i]; });
    return row;
  });
}

function writeCsv(file, cols, rows) {
  const esc = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  fs.writeFileSync(file, [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n", "utf8");
}

// --------------------------------------------------------------------- main --

const PAGE_COLS = ["type", "base", "value", "head", "volume", "difficulty", "difficulty_median", "intent", "group", "members", "variants"];
const TYPES = ["base", "segment", "city", "platform", "price", "info"];

function build(lang) {
  const file = path.join(DIR, `keywords-${lang}.csv`);
  if (!fs.existsSync(file)) return null;

  const cities = loadCities(lang);
  const rows = readCsv(file);
  const pages = new Map();

  for (const r of rows) {
    const vol = Number(r.volume);
    if (!r.keyword || !Number.isFinite(vol) || vol < MIN_VOLUME) continue;
    const p = parse(r.keyword, lang, cities);
    if (!p.base) continue;
    const key = `${p.type}\u0000${p.base}\u0000${p.key || p.value}`;
    if (!pages.has(key)) pages.set(key, { ...p, members: [] });
    pages.get(key).members.push({ ...r, vol });
  }

  const out = [...pages.values()].map((p) => {
    const m = p.members.sort((a, b) => b.vol - a.vol || a.keyword.length - b.keyword.length);
    // Сложность берётся по ГЛАВНОМУ запросу, а не минимумом по кластеру:
    // минимум выбирает самое оптимистичное значение из всех и тем усиливает
    // ошибку источника. Медиана печатается рядом как грубая проверка разброса.
    const diffs = m.map((x) => Number(x.difficulty)).filter(Number.isFinite).sort((a, b) => a - b);
    const median = diffs.length ? diffs[Math.floor(diffs.length / 2)] : "";
    return {
      type: p.type,
      base: p.base,
      value: p.value,
      head: m[0].keyword,
      volume: m[0].vol,
      difficulty: m[0].difficulty,
      difficulty_median: median,
      intent: m[0].intent,
      group: m[0].group,
      members: m.length,
      variants: m.slice(1).map((x) => x.keyword).join(" | "),
    };
  }).sort((a, b) => b.volume - a.volume);

  return { lang, rowCount: rows.length, pages: out, cityCount: cities.size };
}

function main() {
  const lines = [];
  const say = (l = "") => { console.log(l); lines.push(l); };

  say("# Посадочные страницы из выгрузки запросов");
  say("");
  say(`Разобрано: ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC. Порог частоты: ${MIN_VOLUME}/мес.`);
  say("");

  const all = [];
  for (const lang of LANGS) {
    const r = build(lang);
    if (!r) { console.warn(`! нет research/pseo/keywords-${lang}.csv, пропускаю`); continue; }
    writeCsv(path.join(DIR, `pages-${lang}.csv`), PAGE_COLS, r.pages);
    all.push(r);
  }
  if (!all.length) { console.error("Нет ни одного файла с запросами. Сначала pseo-discover.cjs."); process.exit(1); }

  if (!fs.existsSync(path.join(DIR, "cities.json"))) {
    say("> ВНИМАНИЕ: cities.json отсутствует, города не распознаны. Запустите");
    say("> pseo-discover.cjs — он сохраняет список городов на шаге 0 бесплатно.");
    say("");
  }

  say("| язык | запросов | страниц | " + TYPES.join(" | ") + " |");
  say("| --- | --- | --- |" + TYPES.map(() => " --- |").join(""));
  for (const r of all) {
    const by = (t) => r.pages.filter((p) => p.type === t).length;
    say(`| ${r.lang} | ${r.rowCount} | ${r.pages.length} | ` + TYPES.map(by).join(" | ") + " |");
  }
  say("");

  const flat = all.flatMap((r) => r.pages);
  const landing = flat.filter((p) => p.type !== "info");
  const work = landing.filter((p) => p.volume >= 10 && p.volume < 200 && p.difficulty !== "" && Number(p.difficulty) <= 20);
  say(`Всего страниц: ${flat.length}. Из них лендингов: ${landing.length}, материалов для блога: ${flat.length - landing.length}.`);
  say(`Рабочая выборка (10–199 в месяц, difficulty до 20, без info): ${work.length}.`);
  say(`Городов в словаре: ${all[0].cityCount}.`);
  say("");

  for (const r of all) {
    say(`## ${r.lang}: по сколько страниц каждого типа`);
    say("");
    for (const t of TYPES) {
      const sel = r.pages.filter((p) => p.type === t).slice(0, 4);
      if (!sel.length) continue;
      say(`**${t}** — ${r.pages.filter((p) => p.type === t).length} шт. Примеры:`);
      say("");
      for (const p of sel) {
        const val = p.value ? ` · ${p.value}` : "";
        say(`- \`${p.head}\` — ${p.volume}/мес, difficulty ${p.difficulty}, формулировок ${p.members}${val}`);
      }
      say("");
    }
  }

  say("## Как читать pages-<lang>.csv");
  say("");
  say("Одна строка — одна страница. `head` — главный запрос, под него пишется H1 и");
  say("title. `variants` — формулировки на ту же страницу, их место в тексте и");
  say("подзаголовках, а не в отдельном URL.");
  say("");
  say("`type` говорит, что это за страница: base — услуга, city — услуга в городе,");
  say("segment — услуга для конкретного заказчика, platform — услуга на платформе,");
  say("price — страница про стоимость, info — тема для блога, не для лендинга.");
  say("");
  say("`difficulty` — оценка по главному запросу, `difficulty_median` — медиана по");
  say("кластеру. Нули, которые были в прошлой версии, давал минимум по кластеру:");
  say("он выбирал самое оптимистичное значение из всех. По главному запросу числа");
  say("правдоподобны — «pozycjonowanie stron» 56, «seo audit» 77. Но перед первой");
  say("партией десяток значений всё равно стоит сверить с живой выдачей.");

  fs.writeFileSync(path.join(DIR, "pages.md"), lines.join("\n") + "\n", "utf8");
  console.log(`\nЗаписано: research/pseo/pages-*.csv, pages.md`);
}

main();
