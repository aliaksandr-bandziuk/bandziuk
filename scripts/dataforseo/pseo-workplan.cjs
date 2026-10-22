// scripts/dataforseo/pseo-workplan.cjs
//
// План работ: каждая тема из ядра получает ровно одно действие.
//
// Заменяет pseo-stage1.cjs, в котором была дыра: темы, отвергнутые как
// переформулировка, не попадали ни в список правок, ни в список на создание —
// просто исчезали. Здесь это исключено устройством: на выходе печатается
// сверка, и сумма действий обязана совпасть с числом строк ядра.
//
// Четыре действия:
//   ничего не делать  страница уже названа этим запросом
//   уже содержит      заголовок содержит запрос целиком, правка не нужна
//   править           заголовок не содержит запроса, но страница та же
//   создать           страницы нет либо найденная страница про другое
//
// Переформулировка принимается только если совпали ВСЕ четыре признака:
//
//   услуга     продвижение, разработка, аудит, скорость, миграция, CMS, AI.
//              Услугу определяет действие (tworzenie, создание, development),
//              а не существительное «сайт» — иначе «pozycjonowanie strony
//              hotelu» проходит как разработка и садится на страницу
//              «Tworzenie strony dla hotelu»
//   отрасль    наборы отраслей обязаны совпасть ПОЛНОСТЬЮ. Пересечения мало:
//              «sklep internetowy dla drukarni» — это интернет-магазин плюс
//              типография, и на общую страницу про магазины она не садится
//   география  город и страна. Без этого одна страница про Великобританию
//              назначалась целью для пяти разных запросов
//   частота    нулевая частота означает страницу, добавленную по правилу трёх
//              языков. Такую создают, а не правят
//
// Не прошедший признак — не повод выбросить тему. Она уходит в «создать» с
// указанием причины в колонке reason.
//
// API не вызывается, ничего не меняет.
//
//   node scripts/dataforseo/pseo-workplan.cjs

const fs = require("fs");
const path = require("path");
const { tokenSet, normalize, stem } = require("./pseo-lang.cjs");
const { INDUSTRY_TABLE } = require("./pseo-industries.cjs");
const { CITY, COUNTRIES, SEEDS, CITIES_RU } = require("./pseo-seeds.cjs");
// Списки городов живут в словаре матрицы, а не в seeds. Импорт из seeds
// молча возвращал пустоту, и «pozycjonowanie stron londyn» проходило мимо
// географического барьера.
const { CITIES } = require("./pseo-vocab.cjs");

const ROOT = path.resolve(__dirname, "../..");
const DIR = path.join(ROOT, "research", "pseo");

// ------------------------------------------------------------- адреса --
//
// Разделы взяты из инвентаризации, а не придуманы: у отраслевых и городских
// страниц родителя нет, они лежат в корне языка; у страниц услуг родитель —
// раздел услуг.

const SECTION = {
  service: { en: "/services/", pl: "/pl/oferty/", ru: "/ru/uslugi/" },
  root: { en: "/", pl: "/pl/", ru: "/ru/" },
};

const TRANSLIT = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i",
  й: "i", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t",
  у: "u", ф: "f", х: "h", ц: "c", ч: "ch", ш: "sh", щ: "sch", ъ: "", ы: "y", ь: "",
  э: "e", ю: "yu", я: "ya",
};
const PL_MAP = { ł: "l", ó: "o", ą: "a", ć: "c", ę: "e", ń: "n", ś: "s", ź: "z", ż: "z" };

function slugify(phrase) {
  return String(phrase || "").toLowerCase()
    .replace(/[а-яё]/g, (c) => TRANSLIT[c] ?? c)
    .replace(/[łóąćęńśźż]/g, (c) => PL_MAP[c] || c)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .split("-").slice(0, 7).join("-");
}

function urlFor(lang, axis, head) {
  const where = axis === "service-only" ? "service" : "root";
  return `${SECTION[where][lang]}${slugify(head)}`;
}

// ------------------------------------------------------- признаки темы --

const FAMILIES = {
  seo: ["pozycjonowan", "seo", "optymalizacj", "продвижен", "раскрутк", "сео", "оптимизац", "promotion"],
  // Двусловные признаки вернулись: голое «сайт» ничего не различает, а
  // «strona internetowa» и «website for» — различают. Без них запрос
  // «strona dla sklepu internetowego» не определялся вовсе, а неопределённое
  // семейство проходило на любую страницу.
  development: ["tworzen", "wykonan", "budow", "создан", "разработ", "заказат", "сделат",
    "development", "develop", "wizytow", "визитк", "под ключ",
    // «stron internetowych» не годится: оно стоит и в «pozycjonowanie stron
    // internetowych», и тогда SEO-страница считалась бы ещё и разработкой.
    "strona internetowa", "strona dla", "strony dla",
    // normalize() превращает «й» в «и», поэтому «сайт» здесь пишется «саит».
    // С буквой «й» признак не срабатывал никогда, и «сайт для интернет-магазина»
    // садился на страницу продвижения интернет-магазина.
    "саит для", "саита для", "website for"],
  // Дизайн — отдельная услуга, а не разновидность разработки. «web design
  // warsaw» и «website development in Warsaw» — две страницы, и пока дизайн
  // лежал внутри разработки, разбор предлагал слить их в одну.
  design: ["web design", "webdesign", "website design", "projektowan", "дизайн", "ux", "ui"],
  landing: ["landing", "лендинг"],
  audit: ["audyt", "аудит", "audit"],
  performance: ["szybkos", "wydajnos", "przyspiesz", "скорост", "ускор", "speed", "core web vitals", "performance"],
  migration: ["migracj", "przebudow", "миграц", "редизайн", "migration", "redesign"],
  cms: ["cms", "api", "headless", "integracj", "интеграц", "wordpress", "shopify", "prestashop", "sanity"],
  ai: ["chatgpt", "sztuczn", "pod ai", "dla ai", "ии", "нейросет", "generative", "answer engine", "llm", "ai search"],
  ecommerce: ["sklep", "магазин", "ecommerce", "e-commerce"],
  maintenance: ["utrzyman", "opiek", "поддержк", "сопровожд", "maintenance"],
};

// Короткие признаки (до трёх букв) ищутся только целым словом: подстрокой
// «ии» находилось в «компании» и «стоматологии», «ui» — в «build», «api» — в
// «rapid», и страница получала услуги, которых на ней нет.
function families(text) {
  const t = normalize(text);
  const words = new Set(t.split(" "));
  const out = new Set();
  for (const [name, roots] of Object.entries(FAMILIES)) {
    if (roots.some((r) => (r.length <= 3 ? words.has(r) : t.includes(r)))) out.add(name);
  }
  return out;
}

function sameService(query, page) {
    // ecommerce и maintenance — уточнения, а не услуги: «sklep internetowy dla
  // drukarni» не становится разработкой оттого, что в нём есть слово «sklep».
  const core = (s) => [...s].filter((f) => f !== "ecommerce" && f !== "maintenance");
  const a = core(families(query));
  const b = core(families(page));
  if (!a.length || !b.length) return { ok: true, why: "" };
  // Совпадать должны НАБОРЫ, а не пересечение. Иначе «оптимизация скорости
  // сайта» (продвижение + скорость) садится на страницу про продвижение, хотя
  // это запрос про скорость.
  // «Интернет-магазин» — уточнение, но обязательное к совпадению: если он
  // есть в запросе и нет на странице, это разные страницы.
  const fa = families(query);
  const fb = families(page);
  if (fa.has("ecommerce") !== fb.has("ecommerce")) {
    return { ok: false, why: "интернет-магазин есть только с одной стороны" };
  }
  // Все услуги запроса должны быть на странице; лишние на странице допустимы.
  // Точное равенство было слишком строгим: «website audit» не узнавал
  // «Website SEO Audit». А включение ловит нужное: «оптимизация скорости
  // сайта» (продвижение + скорость) на странице про продвижение не закрыта.
  const missing = a.filter((f) => !b.includes(f));
  return !missing.length
    ? { ok: true, why: a.join("+") }
    : { ok: false, why: `услуга: на странице нет «${missing.join("+")}» (запрос ${a.join("+")}, страница ${b.join("+")})` };
}

// Формы, по которым отрасль УЗНАЁТСЯ в заголовке, но под которые страницы не
// генерируются. Нужны потому, что в словаре стоит «юридической компании», а в
// заголовке страницы — «юридического сайта», и барьер их не связывал: общий
// запрос «стоимость продвижения сайта» садился на отраслевую страницу.
const INDUSTRY_HINTS = {
  pl: { "law-firms": ["kancelarii", "prawnej", "prawnik"], "real-estate": ["nieruchomosci"], "beauty-salons": ["kosmetycznego", "urody"], "auto-repair": ["samochodowego", "warsztatu"] },
  ru: { "law-firms": ["юридическ", "юриста"], lawyers: ["адвокат"], "real-estate": ["недвижимост"], "beauty-salons": ["красот"], "auto-repair": ["автосервис", "автомастерск"], "medical-centres": ["медицинск"], "dental-offices": ["стоматолог"] },
  en: { "law-firms": ["law firm", "legal"], lawyers: ["lawyer", "attorney"], "real-estate": ["real estate"], "beauty-salons": ["beauty"], "auto-repair": ["auto repair"] },
};

// Общие слова отрасль не распознают. Иначе любое «firm» или «company»
// давало отрасли «b2b» и «IT-компании», а русское «разработка» — отрасль
// «разработчики», и «сайт для ресторана» не узнавал «Разработку сайта для
// ресторана». Отрасли, у которых после этого не осталось своих слов
// (малый бизнес, b2b, saas, IT-компании), барьером не служат вовсе.
const GENERIC_STEMS = new Set(["firm", "firmy", "compan", "компан", "фирм", "бизнес", "busine",
  "разраб", "small", "organi", "организ", "stron", "websit", "сайт", "саит", "agencj", "агентс", "agency"]);

const INDUSTRY_STEMS = {};
for (const lang of ["pl", "ru", "en"]) {
  INDUSTRY_STEMS[lang] = INDUSTRY_TABLE.map((row) => ({
    key: row.key,
    stems: new Set(normalize(row[lang] || "").split(" ").filter((w) => w.length >= 4)
      .map((w) => stem(w, lang)).filter((s) => !GENERIC_STEMS.has(s))),
  })).filter((x) => x.stems.size);
}

function industriesIn(lang, text) {
  const raw = normalize(text);
  const t = new Set(raw.split(" ").filter(Boolean).map((w) => stem(w, lang)));
  const out = new Set();
  for (const [key, hints] of Object.entries(INDUSTRY_HINTS[lang] || {})) {
    if (hints.some((h) => raw.includes(h))) out.add(key);
  }
  for (const ind of INDUSTRY_STEMS[lang] || []) {
    let all = true;
    for (const s of ind.stems) if (!t.has(s)) { all = false; break; }
    if (all) out.add(ind.key);
  }
  return out;
}

function sameIndustry(lang, query, page) {
  const a = [...industriesIn(lang, query)].sort().join(",");
  const b = [...industriesIn(lang, page)].sort().join(",");
  if (a === b) return { ok: true, why: "" };
  if (!a) return { ok: false, why: `отрасль: страница про ${b}, запрос общий` };
  if (!b) return { ok: false, why: `отрасль: запрос про ${a}, страница общая` };
  return { ok: false, why: `отрасль: ${a} против ${b}` };
}

// География — только выверенный набор: города из словаря матрицы, кириллические
// города, страны и известные города. Полный словарь локаций (38 тысяч названий)
// сюда не берётся: в многословных топонимах прячутся обычные слова — «with»,
// «real», «estate», «lead», — и барьер начинал считать их городами. Так
// «local seo» перестал узнавать «Local SEO for businesses with an address».
const REGIONS = {
  pl: ["bałtyk", "bałtyckie", "europa", "europie", "skandynawia", "skandynawii", "dach", "benelux"],
  ru: ["балтия", "балтии", "прибалтика", "прибалтики", "европа", "европы", "европе", "скандинавия", "скандинавии", "снг"],
  en: ["baltics", "baltic", "europe", "european", "scandinavia", "nordics", "dach", "benelux"],
};
const GEO = {};
for (const lang of ["pl", "ru", "en"]) {
  const set = new Set();
  const add = (name) => {
    const n = normalize(name);
    // многословный город добавляется только целиком, по словам — нет
    if (n.includes(" ")) return;
    if (n.length >= 3) set.add(stem(n, lang));
  };
  for (const c of COUNTRIES[lang] || []) add(c);
  // регионы: «SEO-продвижение на рынки Балтии» — тоже география
  for (const c of REGIONS[lang]) add(c);
  if (lang === "ru") for (const c of CITIES_RU) add(c);
  for (const c of (CITIES || {})[lang] || []) add(c);
  GEO[lang] = set;
}
// многословные города ищутся фразой
const GEO_PHRASES = {};
for (const lang of ["pl", "ru", "en"]) {
  GEO_PHRASES[lang] = [
    ...(COUNTRIES[lang] || []), ...((CITIES || {})[lang] || []), ...(lang === "ru" ? CITIES_RU : []),
  ].map((c) => normalize(c)).filter((c) => c.includes(" "));
}

function geoIn(lang, text) {
  const n = normalize(text);
  const out = new Set(n.split(" ").filter(Boolean).map((w) => stem(w, lang)).filter((w) => GEO[lang].has(w)));
  for (const p of GEO_PHRASES[lang]) if (n.includes(p)) out.add(p);
  return out;
}

function sameGeo(lang, query, page) {
  const a = [...geoIn(lang, query)].sort().join(",");
  const b = [...geoIn(lang, page)].sort().join(",");
  return a === b ? { ok: true, why: "" } : { ok: false, why: `география: «${a || "нет"}» против «${b || "нет"}»` };
}

// ---------------------------------------------------------------------- csv --

function parseLine(line) {
  const out = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') { if (inQ && line[i + 1] === '"') { cur += '"'; i++; } else inQ = !inQ; }
    else if (c === "," && !inQ) { out.push(cur); cur = ""; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

function readCsv(file) {
  if (!fs.existsSync(file)) return null;
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

const COLS = [
  "action", "lang", "axis", "volume", "head", "url", "existing_url", "existing_title",
  "reason", "phrases", "industry_key", "city_key", "variants_for_h2",
];

function main() {
  const core = readCsv(path.join(DIR, "core.csv"));
  if (!core) { console.error("Нет research/pseo/core.csv. Сначала pseo-core.cjs."); process.exit(1); }

  const inventory = readCsv(path.join(DIR, "site-inventory.csv")) || [];

  // Заголовки всех существующих страниц по языкам. Нужны для проверки
  // каннибализации: если запрос целиком стоит в заголовке ДРУГОЙ страницы,
  // переименовывать под него ещё одну нельзя — две свои страницы начнут
  // конкурировать. Так «generative engine optimization» (18 100/мес) чуть не
  // уехал на страницу AEO, хотя он уже закреплён за
  // /ai-ready-seo-and-geo-optimization.
  const titles = { pl: [], ru: [], en: [] };
  for (const r of inventory) {
    if (r.type !== "singlepage") continue;
    for (const lang of ["pl", "ru", "en"]) {
      const title = r[`title_${lang}`];
      const slug = r[`slug_${lang}`];
      const inner = [
        // настоящий H1: у части страниц он задан полем heading и отличается от title
        r[`h1_${lang}`] || "",
        ...(r[`headings_${lang}`] || "").split(" | ").filter(Boolean),
        r[`meta_${lang}`] || "",
      ].filter(Boolean);
      if (title) titles[lang].push({ title, slug, tokens: tokenSet(title, lang, false), inner,
        h1: r[`h1_${lang}`] || title, meta: r[`meta_${lang}`] || "" });
    }
  }

  function ownedByOther(lang, query, exceptSlug) {
    const q = tokenSet(query, lang, false);
    for (const p of titles[lang]) {
      if (p.slug === exceptSlug) continue;
      // Владелец тоже проходит барьеры. Иначе «сайт для автосервиса»
      // (разработка) считался закреплённым за «Продвижением сайта автосервиса
      // в Варшаве» — только потому, что все слова запроса там есть.
      const pt = `${p.title} ${String(p.slug || "").replace(/-/g, " ")}`;
      if (![sameService(query, pt), sameIndustry(lang, query, pt), sameGeo(lang, query, pt)].every((c) => c.ok)) continue;
      let all = true;
      for (const x of q) if (!p.tokens.has(x)) { all = false; break; }
      if (all) return p;
    }
    return null;
  }

  // Второй шаг сопоставления. Ядро выбирает ближайшую по словам страницу, и
  // если её отвергли барьеры, это ещё не значит, что страницы нет: «seo for
  // real estate agencies» ближе всего к /real-estate-agency-website (разработка),
  // а закрыт страницей /seo-for-real-estate. Ищем страницу, которая проходит все
  // барьеры и содержит запрос целиком в H1, названии или meta title.
  // Подзаголовки здесь не учитываются: раздел на чужой странице не закрывает
  // тему (так /about «владела» запросом «website development»).
  //
  // Ограничения, без которых шаг прилипал к общим страницам:
  //   — только H1 и название, без meta title: «техническое seo» садилось на
  //     «SEO-оптимизацию и стратегию», потому что слово было в meta;
  //   — страница «обо мне» (имя в названии) не закрывает услугу: «seo
  //     consultant» и «продвижение сайта» садились на неё;
  //   — запрос без отрасли и города требует ТОЧНОГО совпадения набора услуг:
  //     «seo services» иначе садился на страницу GEO (seo + ai).
  // «сайт», «website», «strona internetowa» тему не различают: «продвижение
  // сайта автосервиса» и «SEO-продвижение автосервиса» — одна страница. Услугу
  // и отрасль при этом всё равно сторожат барьеры.
  const WEAK = new Set(["саит", "site", "stron", "www", "web"]);
  function altPage(lang, query, exceptSlug, axis) {
    const q = new Set([...tokenSet(query, lang, true)].filter((x) => !WEAK.has(x)));
    if (!q.size) return null;
    for (const p of titles[lang]) {
      if (p.slug === exceptSlug) continue;
      if (/bandziuk|бандюк/i.test(`${p.title} ${p.h1}`)) continue;
      const pt = `${p.title} ${p.h1} ${String(p.slug || "").replace(/-/g, " ")}`;
      if (![sameService(query, pt), sameIndustry(lang, query, pt), sameGeo(lang, query, pt)].every((c) => c.ok)) continue;
      // Запросы без отрасли и города («seo services», «продвижение сайта») сюда
      // не допускаются: под общий запрос подходит любая страница с той же
      // услугой — «Technical SEO services», «SEO-продвижение на рынки Балтии».
      // Какая страница отвечает на головной запрос — решение, а не совпадение слов.
      if (axis === "service-only") return null;
      const have = tokenSet(`${p.title} ${p.h1}`, lang, true);
      let all = true;
      for (const x of q) if (!have.has(x)) { all = false; break; }
      if (all) return p;
    }
    return null;
  }
  const coveredBy = (base, p, why) => ({
    ...base, action: "ничего не делать", url: `${PREFIX[base.lang]}${p.slug}`,
    existing_url: `${PREFIX[base.lang]}${p.slug}`, existing_title: p.h1 || p.title,
    reason: `запрос закрыт другой страницей — «${p.h1 || p.title}» (${why})`,
  });

  const PREFIX = { en: "/", pl: "/pl/", ru: "/ru/" };
  const rows = [];

  for (const r of core) {
    const lang = r.lang;
    const vol = Number(r.volume) || 0;
    const existingUrl = r.page_slug ? `${PREFIX[lang]}${r.page_slug}` : "";
    const base = {
      lang, axis: r.axis, volume: vol, head: r.head,
      existing_url: existingUrl, existing_title: r.page_title,
      phrases: r.phrases, industry_key: r.industry_key, city_key: r.city_key,
      variants_for_h2: r.variants,
    };

    // Любая страница, претендующая на запрос, проходит барьеры — и та, что
    // ядро признало закрытой по совпадению названия, тоже. Иначе общая
    // страница /pl/tworzenie-stron-internetowych «закрывала» запрос
    // «tworzenie stron internetowych londyn».
    if (r.status === "есть") {
      const pt = `${r.page_title} ${String(r.page_slug || "").replace(/-/g, " ")}`;
      const bad = [sameService(r.head, pt), sameIndustry(lang, r.head, pt), sameGeo(lang, r.head, pt)].find((c) => !c.ok);
      if (bad) {
        const alt = altPage(lang, r.head, r.page_slug, r.axis);
        if (alt) { rows.push(coveredBy(base, alt, `ближайшая по словам отвергнута: ${bad.why}`)); continue; }
        rows.push({ ...base, action: "создать", url: urlFor(lang, r.axis, r.head), reason: `найденная страница про другое — ${bad.why}` });
      } else {
        rows.push({ ...base, action: "ничего не делать", url: existingUrl, reason: "страница уже названа этим запросом" });
      }
      continue;
    }

    if (r.status === "создать") {
      const alt = altPage(lang, r.head, "", r.axis);
      if (alt) { rows.push(coveredBy(base, alt, "ядро страницы не нашло")); continue; }
      rows.push({
        ...base, action: "создать", url: urlFor(lang, r.axis, r.head),
        reason: vol ? "измеренный спрос" : r.reason || "правило языковых версий",
      });
      continue;
    }

    // переформулировка: проверяем четыре признака
    const pageText = `${r.page_title} ${String(r.page_slug || "").replace(/-/g, " ")}`;
    const checks = [
      !vol ? { ok: false, why: r.reason || "нет измеренного спроса, правило языковых версий" } : { ok: true },
      sameService(r.head, pageText),
      sameIndustry(lang, r.head, pageText),
      sameGeo(lang, r.head, pageText),
    ];
    const failed = checks.find((c) => !c.ok);
    if (failed) {
      const alt = altPage(lang, r.head, r.page_slug, r.axis);
      if (alt) { rows.push(coveredBy(base, alt, `ближайшая по словам отвергнута: ${failed.why}`)); continue; }
      rows.push({
        ...base, action: "создать", url: urlFor(lang, r.axis, r.head),
        reason: `найденная страница про другое — ${failed.why}`,
      });
      continue;
    }

    // Каннибализация: запрос уже закреплён за другой страницей
    const owner = ownedByOther(lang, r.head, r.page_slug);
    if (owner) {
      rows.push({
        ...base, action: "ничего не делать", url: `${PREFIX[lang]}${owner.slug}`,
        existing_url: `${PREFIX[lang]}${owner.slug}`, existing_title: owner.title,
        reason: `запрос уже закреплён за другой страницей — «${owner.title}»`,
      });
      continue;
    }

    const q = tokenSet(r.head, lang, false);
    const t = tokenSet(r.page_title, lang, false);
    let covered = true;
    for (const x of q) if (!t.has(x)) { covered = false; break; }

    // Если не в названии — смотрим заголовки внутри страницы и meta title.
    // Страница может отвечать на запрос разделом H2 уже давно.
    if (!covered) {
      const self = titles[lang].find((p) => p.slug === r.page_slug);
      for (const line of (self && self.inner) || []) {
        const lt = tokenSet(line, lang, false);
        let all = q.size > 0;
        for (const x of q) if (!lt.has(x)) { all = false; break; }
        if (all) { covered = true; break; }
      }
    }

    rows.push(covered
      ? { ...base, action: "уже содержит", url: existingUrl, reason: "запрос стоит в заголовке целиком" }
      : { ...base, action: "править", url: existingUrl, reason: "та же страница, другая формулировка" });
  }

  // совпадения адресов
  const seen = new Map();
  for (const r of rows.filter((x) => x.action === "создать")) {
    if (!seen.has(r.url)) seen.set(r.url, []);
    seen.get(r.url).push(r);
  }
  let collisions = 0;
  for (const [url, list] of seen) {
    if (list.length < 2) continue;
    collisions += list.length - 1;
    list.slice(1).forEach((r, i) => { r.reason += ` · адрес совпал с другой строкой, нужен свой (${url})`; });
  }

  rows.sort((a, b) => b.volume - a.volume || a.lang.localeCompare(b.lang));
  writeCsv(path.join(DIR, "workplan.csv"), COLS, rows);

  // ------------------------------------------------------------ отчёт --
  const lines = [];
  const say = (l = "") => { console.log(l); lines.push(l); };
  const count = (a) => rows.filter((r) => r.action === a).length;

  say("# План работ: каждая тема получает одно действие");
  say("");
  say(`Собрано: ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC.`);
  say("");

  say("## Сверка");
  say("");
  say("| действие | тем |");
  say("| --- | --- |");
  for (const a of ["создать", "править", "уже содержит", "ничего не делать"]) say(`| ${a} | ${count(a)} |`);
  say(`| **сумма** | **${rows.length}** |`);
  say(`| строк в ядре | ${core.length} |`);
  say("");
  say(rows.length === core.length
    ? "Сумма сходится: ни одна тема не потеряна."
    : `РАСХОЖДЕНИЕ: ${core.length - rows.length} тем потеряно, это ошибка разбора.`);
  say("");

  say("## Откуда взялись страницы к созданию");
  say("");
  say("| причина | тем |");
  say("| --- | --- |");
  const createRows = rows.filter((r) => r.action === "создать");
  const byReason = new Map();
  for (const r of createRows) {
    const k = r.reason.startsWith("найденная страница про другое")
      ? "найденная страница про другое" : r.reason.split(" · ")[0];
    byReason.set(k, (byReason.get(k) || 0) + 1);
  }
  for (const [k, v] of [...byReason.entries()].sort((a, b) => b[1] - a[1])) say(`| ${k} | ${v} |`);
  say("");
  say(`Из них с измеренным спросом: ${createRows.filter((r) => r.volume > 0).length}.`);
  if (collisions) say(`Совпадений предложенных адресов: ${collisions} — отмечены в колонке reason.`);
  say("");

  say("## По языкам и осям");
  say("");
  say("| язык | создать | править | уже содержит | ничего не делать |");
  say("| --- | --- | --- | --- | --- |");
  for (const lang of ["en", "ru", "pl"]) {
    const sel = rows.filter((r) => r.lang === lang);
    const n = (a) => sel.filter((r) => r.action === a).length;
    say(`| ${lang} | ${n("создать")} | ${n("править")} | ${n("уже содержит")} | ${n("ничего не делать")} |`);
  }
  say("");
  say("| ось | создать | править |");
  say("| --- | --- | --- |");
  for (const axis of ["service-only", "service-industry", "service-city", "industry-city"]) {
    const sel = rows.filter((r) => r.axis === axis);
    if (!sel.length) continue;
    say(`| ${axis} | ${sel.filter((r) => r.action === "создать").length} | ${sel.filter((r) => r.action === "править").length} |`);
  }
  say("");

  const edits = rows.filter((r) => r.action === "править").sort((a, b) => b.volume - a.volume);
  say(`## Править: ${edits.length}`);
  say("");
  for (const r of edits) {
    say(`- \`${r.existing_url}\` — «${r.existing_title}»`);
    say(`  - запрос: **${r.head}**, ${r.volume}/мес`);
  }
  say("");

  say("## Создать: тридцать самых частотных");
  say("");
  say("| язык | запрос | в месяц | адрес | почему |");
  say("| --- | --- | --- | --- | --- |");
  for (const r of createRows.filter((x) => x.volume > 0).slice(0, 30)) {
    say(`| ${r.lang} | ${r.head} | ${r.volume} | \`${r.url}\` | ${r.reason.split(" · ")[0].slice(0, 44)} |`);
  }
  say("");
  say("Полный список: research/pseo/workplan.csv");

  fs.writeFileSync(path.join(DIR, "workplan.md"), lines.join("\n") + "\n", "utf8");
  console.log("\nЗаписано: research/pseo/workplan.csv, workplan.md");
}

main();
