// scripts/dataforseo/pseo-stage1.cjs
//
// План первого этапа: что именно править на существующих страницах.
//
// Берёт из ядра строки со статусом «переформулировать» и прогоняет их через
// два фильтра, без которых список использовать нельзя.
//
// Фильтр первый — СЕМЕЙСТВО УСЛУГИ. Запрос и страница обязаны говорить об
// одном: продвижение, разработка, аудит, скорость, миграция, CMS и API,
// цена, AI. Без этого «pozycjonowanie stron» село бы на страницу про
// «tworzenie stron internetowych», и страница про разработку превратилась бы
// в страницу про продвижение. Такие пары не правятся — им нужна своя
// страница, и они уходят в отдельный список.
//
// Фильтр второй — «УЖЕ СОДЕРЖИТ». Если все слова запроса уже стоят в
// заголовке, править нечего: «audyt seo» против «Audyt SEO strony
// internetowej» — фраза на месте, просто с двумя лишними словами. Сверка
// относит такие пары к переформулировке только из-за меры близости.
//
// На выходе три списка:
//   править        — заголовок не содержит запроса, услуга та же
//   уже содержит   — трогать не нужно
//   новая страница — услуга другая, переформулировка была бы ошибкой
//
// Предлагаемые заголовки — ЧЕРНОВИК по шаблону. Их нужно прочесть глазами:
// заголовок обязан называть предмет и действие целиком и быть понятным вне
// контекста, а это машина не гарантирует.
//
// API не вызывается, ничего не меняет.
//
//   node scripts/dataforseo/pseo-stage1.cjs

const fs = require("fs");
const path = require("path");
const { tokenSet, normalize, stem } = require("./pseo-lang.cjs");
const { INDUSTRY_TABLE } = require("./pseo-industries.cjs");
const { CITY, COUNTRIES, SEEDS, CITIES_RU } = require("./pseo-seeds.cjs");

const ROOT = path.resolve(__dirname, "../..");
const DIR = path.join(ROOT, "research", "pseo");

// ------------------------------------------------------- семейства услуг --
//
// Проверяются по вхождению корня в нормализованную строку. Порядок важен:
// «цена» и «сколько стоит» — это модификатор, а не услуга, поэтому семейство
// price учитывается отдельно и совпадением не считается.

const FAMILIES = {
  seo: ["pozycjonowan", "seo", "optymalizacj", "продвижен", "раскрутк", "сео", "оптимизац", "promotion", "ranking"],
  // Услугу определяет действие, а не существительное. Слова «strona», «сайт»,
  // «website» отсюда убраны намеренно: они есть почти в любом запросе, в том
  // числе про продвижение, и из-за них «pozycjonowanie strony hotelu» прошло
  // как разработка и село на страницу «Tworzenie strony dla hotelu».
  development: ["tworzen", "projektowan", "wykonan", "budow", "создан", "разработ", "заказат", "сделат", "development", "develop", "web design", "webdesign", "website design", "landing", "лендинг", "wizytow", "визитк", "под ключ"],
  audit: ["audyt", "аудит", "audit"],
  performance: ["szybkos", "wydajnos", "przyspiesz", "скорост", "ускор", "speed", "core web vitals", "performance"],
  migration: ["migracj", "przebudow", "миграц", "редизайн", "migration", "redesign"],
  cms: ["cms", "api", "headless", "integracj", "интеграц", "wordpress", "shopify", "prestashop", "sanity"],
  ai: ["chatgpt", "sztuczn", "pod ai", "dla ai", "ии", "нейросет", "generative", "answer engine", "llm", "ai search", "ai seo"],
  ecommerce: ["sklep", "магазин", "ecommerce", "e-commerce"],
  maintenance: ["utrzyman", "opiek", "поддержк", "сопровожд", "maintenance"],
};

// ------------------------------------------------------- отрасль-барьер --
//
// Отрасль различает страницы так же жёстко, как город. Без этого
// «strona internetowa dla psychologa» сматчилась со страницей про адвоката,
// хотя страница про психологов на сайте есть отдельно.

const INDUSTRY_STEMS = {};
for (const lang of ["pl", "ru", "en"]) {
  INDUSTRY_STEMS[lang] = INDUSTRY_TABLE.map((row) => ({
    key: row.key,
    stems: new Set(
      normalize(row[lang] || "").split(" ").filter((w) => w.length >= 4).map((w) => stem(w, lang)),
    ),
  })).filter((x) => x.stems.size);
}

/** Какие отрасли названы в тексте. Отрасль засчитывается при полном вхождении. */
function industriesIn(lang, text) {
  const t = new Set(normalize(text).split(" ").filter(Boolean).map((w) => stem(w, lang)));
  const out = new Set();
  for (const ind of INDUSTRY_STEMS[lang] || []) {
    let all = true;
    for (const s of ind.stems) if (!t.has(s)) { all = false; break; }
    if (all) out.add(ind.key);
  }
  return out;
}

/** Отрасли запроса и страницы обязаны совпадать, иначе это разные страницы. */
function sameIndustry(lang, query, page) {
  const a = industriesIn(lang, query);
  const b = industriesIn(lang, page);
  if (!a.size && !b.size) return { ok: true, why: "" };
  // Нужно полное совпадение набора, а не пересечение. Иначе «sklep
  // internetowy dla drukarni» (интернет-магазин + типография) проходит на
  // страницу про интернет-магазины, и типография садится на чужую страницу.
  const sa = [...a].sort().join(",");
  const sb = [...b].sort().join(",");
  if (sa === sb) return { ok: true, why: sa };
  if (!a.size) return { ok: false, why: `страница про ${sb}, запрос общий` };
  if (!b.size) return { ok: false, why: `запрос про ${sa}, страница общая` };
  return { ok: false, why: `${sa} против ${sb}` };
}

// ---------------------------------------------------------- гео-барьер --
//
// Город и страна различают страницы так же жёстко, как отрасль. Без этого
// «стоимость продвижения сайта» села бы на страницу «Продвижение сайта в
// Великобритании».

const GEO = {};
for (const lang of ["pl", "ru", "en"]) {
  const set = new Set();
  const known = CITY[lang];
  const add = (name) => {
    for (const w of normalize(name).split(" ")) if (w.length >= 4) set.add(stem(w, lang));
  };
  for (const c of COUNTRIES[lang] || []) for (const w of normalize(c).split(" ")) if (w) set.add(stem(w, lang));
  if (lang === "ru") for (const c of CITIES_RU) add(c);
  // Города из словаря матрицы: «londyn» есть в польском списке, но в
  // латинском словаре локаций он записан как «london» и барьером не ловился.
  for (const c of (require("./pseo-vocab.cjs").CITIES || {})[lang] || []) add(c);
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
  for (const seed of Object.values(SEEDS[lang] || {}).flat()) {
    for (const w of normalize(seed).split(" ")) {
      if (!w || (known && known.test(w))) continue;
      set.delete(stem(w, lang));
    }
  }
  GEO[lang] = set;
}

function geoIn(lang, text) {
  const t = normalize(text).split(" ").filter(Boolean).map((w) => stem(w, lang));
  return new Set(t.filter((w) => GEO[lang].has(w)));
}

function sameGeo(lang, query, page) {
  const a = [...geoIn(lang, query)].sort().join(",");
  const b = [...geoIn(lang, page)].sort().join(",");
  if (a === b) return { ok: true, why: "" };
  return { ok: false, why: `география: «${a || "нет"}» против «${b || "нет"}»` };
}

const PRICE = ["cena", "ceny", "cennik", "koszt", "ile kosztuje", "цена", "цены", "стоимост", "сколько стоит", "price", "pricing", "cost"];

function families(text) {
  const t = normalize(text);
  const out = new Set();
  for (const [name, roots] of Object.entries(FAMILIES)) {
    if (roots.some((r) => t.includes(r))) out.add(name);
  }
  return out;
}

const hasPrice = (text) => PRICE.some((p) => normalize(text).includes(p));

/** Совпадают ли услуги. Цена и ecommerce — уточнения, сами по себе не решают. */
function sameService(queryText, pageText) {
  const a = families(queryText);
  const b = families(pageText);
  const core = (s) => [...s].filter((f) => f !== "ecommerce" && f !== "maintenance");
  const ca = core(a);
  const cb = core(b);
  if (!ca.length || !cb.length) return { ok: true, why: "семейство не определено" };
  const common = ca.filter((f) => cb.includes(f));
  if (common.length) return { ok: true, why: common.join("+") };
  return { ok: false, why: `${ca.join("+")} против ${cb.join("+")}` };
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

// ------------------------------------------------------------- заголовки --

const PREFIX = { en: "", pl: "/pl/", ru: "/ru/" };

// Разделы, под которыми живут страницы услуг на сайте.
const SECTION = { en: "/services/", pl: "/pl/oferty/", ru: "/ru/uslugi/" };

// Транслитерация кириллицы для адресов.
const TRANSLIT = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i",
  й: "i", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t",
  у: "u", ф: "f", х: "h", ц: "c", ч: "ch", ш: "sh", щ: "sch", ъ: "", ы: "y", ь: "",
  э: "e", ю: "yu", я: "ya",
};
const PL_MAP = { ł: "l", ó: "o", ą: "a", ć: "c", ę: "e", ń: "n", ś: "s", ź: "z", ż: "z" };

/** Адрес из запроса: латиница, дефисы, без служебных хвостов. */
function slugify(lang, phrase) {
  const s = String(phrase || "").toLowerCase()
    .replace(/[а-яё]/g, (c) => TRANSLIT[c] ?? c)
    .replace(/[łóąćęńśźż]/g, (c) => PL_MAP[c] || c)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${SECTION[lang] || "/"}${s}`;
}

function capitalize(s) {
  const t = String(s || "").trim();
  return t ? t[0].toUpperCase() + t.slice(1) : t;
}

/**
 * Черновик заголовка: запрос целиком плюс то, что отличало прежний заголовок.
 * Это именно черновик — читать глазами обязательно.
 */
function draftTitle(lang, query, oldTitle) {
  const q = tokenSet(query, lang, false);
  const extra = String(oldTitle || "")
    .split(/[:—–-]/)[0]
    .split(" ")
    .filter((w) => w && !q.has(normalize(w)) && normalize(w).length > 3);
  const tail = extra.slice(0, 3).join(" ").trim();
  const base = capitalize(query);
  return tail ? `${base} — ${tail.toLowerCase()}` : base;
}

// --------------------------------------------------------------------- main --

const COLS = [
  "lang", "action", "url", "current_title", "target_query", "volume",
  "draft_title", "service_match", "phrases", "variants_for_h2",
];

function main() {
  const core = readCsv(path.join(DIR, "core.csv"));
  if (!core) { console.error("Нет research/pseo/core.csv. Сначала pseo-core.cjs."); process.exit(1); }

  const edit = [];
  const already = [];
  const wrongService = [];

  for (const r of core) {
    if (r.status !== "переформулировать") continue;
    if (!r.page_slug) continue;

    const q = tokenSet(r.head, r.lang, false);
    const t = tokenSet(r.page_title, r.lang, false);
    let covered = true;
    for (const x of q) if (!t.has(x)) { covered = false; break; }

    const pageText = `${r.page_title} ${r.page_slug.replace(/-/g, " ")}`;
    const svc = sameService(r.head, pageText);
    const ind = sameIndustry(r.lang, r.head, pageText);
    const row = {
      lang: r.lang,
      url: `${PREFIX[r.lang] || ""}${r.page_slug}`,
      current_title: r.page_title,
      target_query: r.head,
      volume: Number(r.volume) || 0,
      phrases: r.phrases,
      variants_for_h2: r.variants,
      service_match: svc.why,
    };

    // Нулевая частота означает страницу, добавленную по правилу трёх языков.
    // Такую не правят — её создают, и в план правок она не попадает.
    if (!Number(r.volume)) { wrongService.push({ ...row, action: "новая страница", service_match: "нет измеренного спроса, правило языковых версий" }); continue; }
    if (!svc.ok) { wrongService.push({ ...row, action: "новая страница" }); continue; }
    if (!ind.ok) { wrongService.push({ ...row, action: "новая страница", service_match: ind.why }); continue; }
    const geo = sameGeo(r.lang, r.head, pageText);
    if (!geo.ok) { wrongService.push({ ...row, action: "новая страница", service_match: geo.why }); continue; }
    if (covered) { already.push({ ...row, action: "уже содержит", draft_title: r.page_title }); continue; }
    edit.push({ ...row, action: "править", draft_title: draftTitle(r.lang, r.head, r.page_title) });
  }

  const all = [...edit, ...already, ...wrongService].sort((a, b) => b.volume - a.volume);
  writeCsv(path.join(DIR, "stage1.csv"), COLS, all);

  const lines = [];
  const say = (l = "") => { console.log(l); lines.push(l); };

  say("# Первый этап: правка существующих страниц");
  say("");
  say(`Собрано: ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC.`);
  say("");
  say("| что делать | страниц |");
  say("| --- | --- |");
  say(`| править заголовки | ${edit.length} |`);
  say(`| уже содержит запрос, трогать не нужно | ${already.length} |`);
  say(`| услуга другая — это новая страница, а не правка | ${wrongService.length} |`);
  say("");

  if (wrongService.length) {
    say("## Пары, которые правкой закрывать нельзя");
    say("");
    say("Запрос и страница про разные услуги. Переформулировать здесь значит");
    say("испортить существующую страницу. Эти запросы идут в список на создание.");
    say("");
    for (const r of wrongService.sort((a, b) => b.volume - a.volume).slice(0, 25)) {
      say(`- **${r.target_query}** (${r.lang}, ${r.volume}/мес) ≠ \`${r.url}\` — ${r.current_title}`);
      say(`  - ${r.service_match}`);
    }
    say("");
  }

  say(`## Править: ${edit.length} страниц`);
  say("");
  say("Слева адрес и нынешний заголовок, справа запрос, под который страница");
  say("должна быть названа. Черновик заголовка — по шаблону, читать глазами.");
  say("");
  for (const r of edit.sort((a, b) => b.volume - a.volume)) {
    say(`### ${r.url}`);
    say("");
    say(`- было: **${r.current_title}**`);
    say(`- запрос: **${r.target_query}** — ${r.volume}/мес, услуга: ${r.service_match}`);
    say(`- черновик: ${r.draft_title}`);
    if (r.variants_for_h2) say(`- в подзаголовки: ${r.variants_for_h2.split(" | ").slice(0, 6).join(", ")}`);
    say("");
  }

  if (already.length) {
    say(`## Уже содержат запрос: ${already.length} страниц`);
    say("");
    say("Фраза в заголовке стоит, правка не нужна. В сверке они оказались в");
    say("переформулировке только из-за меры близости: у заголовка есть лишние");
    say("слова, и доля общего падает ниже порога.");
    say("");
    for (const r of already.sort((a, b) => b.volume - a.volume).slice(0, 30)) {
      say(`- \`${r.url}\` — «${r.current_title}» уже содержит «${r.target_query}» (${r.volume}/мес)`);
    }
    say("");
  }

  // ------------------------------------------------- страницы к созданию --
  const create = core
    .filter((r) => r.status === "создать" && Number(r.volume) > 0)
    .sort((a, b) => Number(b.volume) - Number(a.volume))
    .map((r) => ({
      lang: r.lang,
      axis: r.axis,
      volume: Number(r.volume),
      head: r.head,
      url: slugify(r.lang, r.head),
      phrases: r.phrases,
      variants_for_h2: r.variants,
      industry_key: r.industry_key,
      city_key: r.city_key,
    }));

  writeCsv(path.join(DIR, "stage-create.csv"),
    ["lang", "axis", "volume", "head", "url", "phrases", "industry_key", "city_key", "variants_for_h2"], create);

  say(`## Страницы к созданию с измеренным спросом: ${create.length}`);
  say("");
  say("Адреса предложены транслитерацией запроса и требуют проверки: слишком");
  say("длинные стоит укоротить, а совпадения с существующими — переименовать.");
  say("");
  say("| язык | запрос | в месяц | предлагаемый адрес |");
  say("| --- | --- | --- | --- |");
  for (const r of create.slice(0, 40)) {
    say(`| ${r.lang} | ${r.head} | ${r.volume} | \`${r.url}\` |`);
  }
  say("");
  say(`Остальные ${Math.max(0, create.length - 40)} — в research/pseo/stage-create.csv.`);
  say("");

  say("Полные данные: research/pseo/stage1.csv, research/pseo/stage-create.csv");

  fs.writeFileSync(path.join(DIR, "stage1.md"), lines.join("\n") + "\n", "utf8");
  console.log("\nЗаписано: research/pseo/stage1.csv, stage1.md");
}

main();
