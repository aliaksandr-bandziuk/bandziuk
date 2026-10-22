// scripts/dataforseo/pseo-core.cjs
//
// Семантическое ядро: одна строка — одна будущая страница.
//
// Сводит воедино три источника: матрицу спроса (grid-<lang>.csv),
// инвентаризацию сайта (site-inventory.csv) и правила владельца о языковых
// версиях. До сих пор они жили порознь, и сопоставление считалось по старым
// файлам кластеризатора, а не по матрице — здесь это исправлено.
//
// Что делает:
//   1. сворачивает фразы в страницы. «pozycjonowanie stron poznań»,
//      «tworzenie stron internetowych poznań» и «agencja seo poznań» —
//      три фразы и одна страница про Познань
//   2. связывает страницы трёх языков общим ключом: отрасли через
//      pseo-industries.cjs, международные города через pseo-cities.cjs
//   3. применяет правила владельца о языках:
//      — отрасль со спросом хоть на одном языке получает страницы на всех трёх
//      — польские и казахские города не переводятся
//      — города с русскоязычным бизнесом получают и английскую, и русскую
//   4. сверяет каждую страницу с тем, что на сайте уже есть
//
// Колонка status:
//   создать           на сайте ничего похожего нет
//   переформулировать страница по теме есть, но названа другими словами
//   есть              страница уже названа этой фразой
//
// Колонка reason отличает страницы с измеренным спросом от тех, что добавлены
// по правилу трёх языков: во вторых частота нулевая, и это не ошибка.
//
// API не вызывается, денег не стоит.
//
//   node scripts/dataforseo/pseo-core.cjs
//   node scripts/dataforseo/pseo-core.cjs --min-volume 50

const fs = require("fs");
const path = require("path");
const { tokenSet, jaccard, normalize, stem } = require("./pseo-lang.cjs");
const { byForm, INDUSTRY_TABLE } = require("./pseo-industries.cjs");
const { langsFor, cityKey, formFor } = require("./pseo-cities.cjs");
const { CITY, COUNTRIES, SEEDS, CITIES_RU } = require("./pseo-seeds.cjs");
const { serviceGroup } = require("./pseo-vocab.cjs");

const ROOT = path.resolve(__dirname, "../..");
const DIR = path.join(ROOT, "research", "pseo");

const argv = process.argv.slice(2);
const flag = (n, d) => {
  const i = argv.indexOf("--" + n);
  return i > -1 && argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : d;
};
const MIN_VOLUME = Number(flag("min-volume", 10));
const LANGS = ["pl", "ru", "en"];

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

// ------------------------------------------------------- сверка с сайтом --

function geoStems(lang) {
  const out = new Set();
  const known = CITY[lang];
  const add = (name) => {
    for (const w of normalize(name).split(" ")) if (w.length >= 4) out.add(stem(w, lang));
  };
  for (const c of COUNTRIES[lang] || []) for (const w of normalize(c).split(" ")) if (w) out.add(stem(w, lang));
  // Кириллические города: словарь локаций DataForSEO латинский, «астана» в нём
  // нет. Без этой строки барьер не срабатывал, и «создание сайта астана»
  // сматчилось с общей страницей «Разработка вебсайтов».
  if (lang === "ru") for (const c of CITIES_RU) add(c);
  const f = path.join(DIR, "cities.json");
  if (fs.existsSync(f)) {
    try {
      for (const name of JSON.parse(fs.readFileSync(f, "utf8"))) {
        const n = normalize(name);
        if (n.length < 5 && !(known && known.test(n))) continue;
        add(name);
      }
    } catch (e) { /* словарь не обязателен */ }
  }
  // слова услуг географией быть не могут: польский городок Stronie Śląskie
  // иначе отрезает все запросы со словом «strona»
  for (const seed of Object.values(SEEDS[lang] || {}).flat()) {
    for (const w of normalize(seed).split(" ")) {
      if (!w || (known && known.test(w))) continue;
      out.delete(stem(w, lang));
    }
  }
  return out;
}

function buildMatcher(lang, inventory) {
  const geo = geoStems(lang);
  const pages = inventory
    .filter((r) => r.type === "singlepage" && (r[`title_${lang}`] || r[`slug_${lang}`]))
    .map((r) => ({
      title: r[`title_${lang}`] || "",
      slug: r[`slug_${lang}`] || "",
      titleTokens: tokenSet(r[`title_${lang}`] || "", lang, true),
      slugTokens: tokenSet((r[`slug_${lang}`] || "").replace(/-/g, " "), lang, true),
      // Заголовки внутри страницы и meta title. Нужны, чтобы запрос, на
      // который страница уже отвечает разделом H2, не попадал в работу.
      inner: [
        ...(r[`headings_${lang}`] || "").split(" | ").filter(Boolean),
        r[`meta_${lang}`] || "",
      ].filter(Boolean),
    }));

  const sameGeo = (a, b) => {
    const pick = (s) => [...s].filter((t) => geo.has(t)).sort().join(",");
    return pick(a) === pick(b);
  };

  return function match(phrase) {
    const dt = tokenSet(phrase, lang, true);
    let best = null;
    let score = 0;
    let full = false;
    for (const p of pages) {
      for (const pt of [p.titleTokens, p.slugTokens]) {
        if (!pt.size) continue;
        let inter = 0;
        for (const t of dt) if (pt.has(t)) inter++;
        if (inter < 2 && dt.size > 1) continue;
        if (!sameGeo(dt, pt)) continue;
        const isFull = inter === dt.size && pt.size - dt.size <= 1;
        const j = jaccard(dt, pt);
        const better = isFull !== full ? isFull : j > score;
        if (better) { score = j; best = p; full = isFull; }
      }
    }
    // Заголовки внутри страниц здесь НЕ проверяются. Первая версия этой
    // проверки смотрела заголовки всех страниц сайта, и подзаголовок
    // «Translating the site into German» на странице про автоэкспорт «закрывал»
    // запрос «website for translators». Заголовки сверяются в плане работ —
    // только у страницы, которая подошла по теме и прошла барьеры услуги,
    // отрасли и географии.
    const status = (full || score >= 0.7) ? "есть" : score >= 0.4 ? "переформулировать" : "создать";
    return { status, page: best, score };
  };
}

// ------------------------------------------------------------- сборка ядра --

// Услуга входит в ключ страницы наравне с отраслью и городом. Разработка,
// дизайн и продвижение — разные страницы: «создание сайта для адвоката»,
// «веб-дизайн сайта адвоката» и «SEO-продвижение сайта адвоката» покупают
// разные люди. Пока ключ состоял только из отрасли, все три схлопывались в
// одну строку, и две из них уходили в «формулировки на ту же страницу».
function pageKey(lang, row) {
  const svc = serviceGroup(row.service);
  if (row.axis === "service-industry") {
    const ind = byForm(lang, row.industry);
    const k = ind ? ind.key : `${lang}:${row.industry}`;
    return `industry:${k}:${svc}`;
  }
  if (row.axis === "service-city") return `city:${cityKey(lang, row.city)}:${svc}`;
  if (row.axis === "industry-city") {
    const ind = byForm(lang, row.industry);
    return `ic:${ind ? ind.key : row.industry}:${cityKey(lang, row.city)}`;
  }
  // service-only: каждая услуга — своя страница, ключ по основам фразы
  return `service:${[...tokenSet(row.keyword, lang, true)].sort().join(" ")}`;
}

const COLS = [
  "lang", "status", "axis", "key", "head", "volume", "volume_sum", "phrases",
  "industry_key", "city_key", "service_group", "page_slug", "page_title", "reason", "variants",
];

function main() {
  const inventory = readCsv(path.join(DIR, "site-inventory.csv"));
  if (!inventory) { console.error("Нет research/pseo/site-inventory.csv. Сначала pseo-inventory.cjs."); process.exit(1); }

  const matchers = {};
  for (const lang of LANGS) matchers[lang] = buildMatcher(lang, inventory);

  // 1. свёртка фраз в страницы
  const pages = new Map(); // `${lang}\u0000${key}` → страница
  for (const lang of LANGS) {
    const grid = readCsv(path.join(DIR, `grid-${lang}.csv`));
    if (!grid) { console.warn(`! нет grid-${lang}.csv, пропускаю`); continue; }
    for (const row of grid) {
      const vol = Number(row.volume);
      if (!Number.isFinite(vol) || vol < MIN_VOLUME) continue;
      const key = pageKey(lang, row);
      const id = `${lang}\u0000${key}`;
      if (!pages.has(id)) {
        pages.set(id, { lang, key, axis: row.axis, industry: row.industry, city: row.city, rows: [] });
      }
      pages.get(id).rows.push({ keyword: row.keyword, volume: vol });
    }
  }

  // 2. правило трёх языков для отраслей
  const industryLangs = new Map(); // ключ отрасли → Set языков со спросом
  for (const p of pages.values()) {
    if (!p.key.startsWith("industry:")) continue;
    const k = p.key.split(":").slice(1).join(":"); // ключ отрасли плюс услуга
    if (!industryLangs.has(k)) industryLangs.set(k, new Set());
    industryLangs.get(k).add(p.lang);
  }
  let addedIndustry = 0;
  for (const [k, langs] of industryLangs) {
    const indKey = k.split(":")[0];
    const row = INDUSTRY_TABLE.find((r) => r.key === indKey);
    if (!row) continue;
    for (const lang of LANGS) {
      if (langs.has(lang)) continue;
      const id = `${lang}\u0000industry:${k}`;
      pages.set(id, {
        lang, key: `industry:${k}`, axis: "service-industry",
        industry: row[lang] || "", city: "", rows: [],
        reason: "правило трёх языков: спрос есть на " + [...langs].join(", "),
      });
      addedIndustry += 1;
    }
  }

  // 3. правило языков для городов
  let addedCity = 0;
  for (const p of [...pages.values()]) {
    if (!p.key.startsWith("city:") || !p.city) continue;
    for (const lang of langsFor(p.lang, p.city)) {
      if (lang === p.lang) continue;
      const id = `${lang}\u0000${p.key}`;
      if (pages.has(id)) continue;
      const k = p.key.split(":")[1]; // ключ города без хвоста услуги
      pages.set(id, {
        lang, key: p.key, axis: "service-city",
        industry: "", city: formFor(k, lang) || p.city, rows: [],
        reason: `правило городов: международный город, спрос измерен на ${p.lang}`,
      });
      addedCity += 1;
    }
  }

  // 4. сверка с сайтом и сборка строк
  const out = [];
  for (const p of pages.values()) {
    p.rows.sort((a, b) => b.volume - a.volume || a.keyword.length - b.keyword.length);
    const head = p.rows.length ? p.rows[0].keyword : buildFallbackHead(p);
    const m = matchers[p.lang](head);
    out.push({
      lang: p.lang,
      status: m.status,
      axis: p.axis,
      key: p.key,
      head,
      volume: p.rows.length ? p.rows[0].volume : 0,
      volume_sum: p.rows.reduce((n, r) => n + r.volume, 0),
      phrases: p.rows.length,
      industry_key: p.key.startsWith("industry:") ? p.key.split(":")[1] : "",
      city_key: p.key.startsWith("city:") ? p.key.split(":")[1] : "",
      service_group: p.key.includes(":") ? p.key.split(":").slice(2).join(":") : "",
      page_slug: m.page ? m.page.slug : "",
      page_title: m.page ? m.page.title : "",
      reason: p.reason || "измеренный спрос",
      variants: p.rows.slice(1).map((r) => r.keyword).join(" | "),
    });
  }

  out.sort((a, b) => b.volume - a.volume || a.lang.localeCompare(b.lang));
  writeCsv(path.join(DIR, "core.csv"), COLS, out);

  // ------------------------------------------------------------ отчёт --
  const lines = [];
  const say = (l = "") => { console.log(l); lines.push(l); };

  say("# Семантическое ядро: страницы сайта");
  say("");
  say(`Собрано: ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC. Порог ${MIN_VOLUME}/мес.`);
  say(`Всего страниц: ${out.length}. Из них добавлено по правилам языковых версий: ${addedIndustry + addedCity} (отрасли ${addedIndustry}, города ${addedCity}).`);
  say("");

  say("| язык | создать | переформулировать | есть | всего |");
  say("| --- | --- | --- | --- | --- |");
  for (const lang of LANGS) {
    const sel = out.filter((r) => r.lang === lang);
    const n = (s) => sel.filter((r) => r.status === s).length;
    say(`| ${lang} | ${n("создать")} | ${n("переформулировать")} | ${n("есть")} | ${sel.length} |`);
  }
  const n = (s) => out.filter((r) => r.status === s).length;
  say(`| **всего** | **${n("создать")}** | **${n("переформулировать")}** | **${n("есть")}** | **${out.length}** |`);
  say("");

  say("## По осям");
  say("");
  say("| ось | создать | переформулировать | есть |");
  say("| --- | --- | --- | --- |");
  for (const axis of ["service-only", "service-industry", "service-city", "industry-city"]) {
    const sel = out.filter((r) => r.axis === axis);
    if (!sel.length) continue;
    const k = (s) => sel.filter((r) => r.status === s).length;
    say(`| ${axis} | ${k("создать")} | ${k("переформулировать")} | ${k("есть")} |`);
  }
  say("");

  const noDemand = out.filter((r) => r.volume === 0);
  say(`## Страницы без измеренного спроса: ${noDemand.length}`);
  say("");
  say("Это страницы, добавленные по правилам языковых версий. Частота у них");
  say("нулевая не потому, что спроса нет, а потому, что он не измерялся на этом");
  say("языке или лежит ниже порога источника.");
  say("");

  say("## Двадцать самых частотных страниц к созданию");
  say("");
  for (const r of out.filter((x) => x.status === "создать").slice(0, 20)) {
    say(`- **${r.head}** (${r.lang}, ${r.axis}) — ${r.volume}/мес, формулировок ${r.phrases}`);
  }
  say("");

  say("Полные данные: research/pseo/core.csv");
  say("");
  say("Колонки: `head` — главный запрос под H1 и title; `variants` — формулировки");
  say("на ту же страницу, их место в подзаголовках и тексте, а не в отдельном URL;");
  say("`industry_key` и `city_key` связывают версии одной темы на трёх языках;");
  say("`reason` отличает измеренный спрос от страниц, добавленных по правилу.");

  fs.writeFileSync(path.join(DIR, "core.md"), lines.join("\n") + "\n", "utf8");
  console.log("\nЗаписано: research/pseo/core.csv, core.md");
}

/**
 * Заголовок для страницы, добавленной по правилу языковых версий: спроса на
 * этом языке нет, и запрос взять неоткуда. Шаблон зависит от услуги — иначе
 * страница про аудит, дизайн и платформу получает один и тот же заголовок.
 */
const FALLBACK = {
  pl: {
    seo: (i) => `pozycjonowanie strony ${i}`,
    development: (i) => `strona internetowa dla ${i}`,
    design: (i) => `projektowanie strony dla ${i}`,
    audit: (i) => `audyt seo dla ${i}`,
    landing: (i) => `landing page dla ${i}`,
    ecommerce: (i) => `sklep internetowy dla ${i}`,
    platform: (i) => `strona na wordpress dla ${i}`,
    redesign: (i) => `przebudowa strony dla ${i}`,
    price: (i) => `ile kosztuje strona dla ${i}`,
    "price-seo": (i) => `ile kosztuje pozycjonowanie dla ${i}`,
  },
  ru: {
    seo: (i) => `продвижение сайта ${i}`,
    development: (i) => `создание сайта для ${i}`,
    design: (i) => `дизайн сайта для ${i}`,
    audit: (i) => `seo аудит сайта ${i}`,
    landing: (i) => `лендинг для ${i}`,
    ecommerce: (i) => `интернет магазин для ${i}`,
    platform: (i) => `сайт на wordpress для ${i}`,
    redesign: (i) => `редизайн сайта ${i}`,
    price: (i) => `сколько стоит сайт для ${i}`,
    "price-seo": (i) => `стоимость продвижения сайта ${i}`,
  },
  en: {
    seo: (i) => `seo for ${i}`,
    development: (i) => `website for ${i}`,
    design: (i) => `web design for ${i}`,
    audit: (i) => `seo audit for ${i}`,
    landing: (i) => `landing page for ${i}`,
    ecommerce: (i) => `ecommerce website for ${i}`,
    platform: (i) => `wordpress website for ${i}`,
    redesign: (i) => `website redesign for ${i}`,
    price: (i) => `${i} website cost`,
    "price-seo": (i) => `seo cost for ${i}`,
  },
};

const CITY_FALLBACK = {
  pl: {
    seo: (c) => `pozycjonowanie stron ${c}`,
    development: (c) => `tworzenie stron internetowych ${c}`,
    design: (c) => `projektowanie stron ${c}`,
    audit: (c) => `audyt seo ${c}`,
    ecommerce: (c) => `sklep internetowy ${c}`,
  },
  ru: {
    seo: (c) => `продвижение сайта ${c}`,
    development: (c) => `создание сайта ${c}`,
    design: (c) => `дизайн сайта ${c}`,
    audit: (c) => `seo аудит ${c}`,
    ecommerce: (c) => `интернет магазин ${c}`,
  },
  en: {
    seo: (c) => `seo services ${c}`,
    development: (c) => `website development ${c}`,
    design: (c) => `web design ${c}`,
    audit: (c) => `seo audit ${c}`,
    ecommerce: (c) => `ecommerce website ${c}`,
  },
};

function buildFallbackHead(p) {
  const svc = p.key.includes(":") ? p.key.split(":").slice(2).join(":") : "";
  if (p.industry) {
    const map = FALLBACK[p.lang] || {};
    const f = map[svc] || map.development;
    return f ? f(p.industry) : p.key;
  }
  if (p.city) {
    const map = CITY_FALLBACK[p.lang] || {};
    const f = map[svc] || map.seo;
    return f ? f(p.city) : p.key;
  }
  return p.key;
}

main();
