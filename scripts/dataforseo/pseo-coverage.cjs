// scripts/dataforseo/pseo-coverage.cjs
//
// Сопоставляет найденный спрос с тем, что на сайте уже стоит.
//
// Зачем. Инвентаризация показала 95 страниц, из них 132 темы из 158 уже на всех
// трёх языках. То есть пробел не в том, что страниц нет. Пробел в формулировках:
// страница `/pl/oferty/strona-dla-fotografa` называется «Tworzenie strony dla
// fotografa», а ищут «strona internetowa dla fotografa» (140/мес). Тема одна,
// фраза другая, и страница не отвечает на запрос ровно теми словами, которыми
// он задан.
//
// Поэтому каждая тема спроса раскладывается в один из трёх разрядов:
//
//   закрыта     — существующая страница уже названа этой фразой, делать нечего
//   формулировка — страница по этой теме есть, но названа иначе. Самая дешёвая
//                  работа: правятся заголовок, title и подзаголовки, новая
//                  страница не нужна. Именно так в начале работы была
//                  переориентирована /pl/oferty/strategia-i-optymalizacja-seo
//                  с «Strategia i optymalizacja SEO» на «Pozycjonowanie stron
//                  internetowych».
//   нет         — ничего похожего на сайте нет, нужна новая страница
//
// Как считается близость. Сравниваются множества основ слов, причём синонимы
// услуги сводятся к одному виду (tworzenie / wykonanie / projektowanie →
// одно), иначе «tworzenie strony dla fotografa» и «strona internetowa dla
// fotografa» разошлись бы по разным темам.
//
// Мера — Жаккар: пересечение, делённое на объединение. Доля общего
// относительно меньшего множества здесь не годится, и это проверено: по ней
// запрос «pozycjonowanie stron» из двух слов «целиком входил» в любой длинный
// заголовок, где эти два слова встретились, и городской запрос
// «pozycjonowanie stron toruń» сматчился со статьёй блога про брендовый
// трафик. Жаккар учитывает и длину заголовка.
//
// Сравнение идёт только со страницами (singlepage); блог и портфолио
// добавляются в набор лишь для информационных запросов, потому что лендинговый
// спрос должен закрываться лендингом, а не статьёй.
//
// Ни Sanity, ни DataForSEO не вызываются: читаются только готовые файлы
// research/pseo/. Денег не стоит, запускать можно сколько угодно.
//
// Нужны: site-inventory.csv (pseo-inventory.cjs) и pages-<lang>.csv
// (pseo-cluster.cjs).
//
//   node scripts/dataforseo/pseo-coverage.cjs
//   node scripts/dataforseo/pseo-coverage.cjs --lang pl --min-volume 50

const fs = require("fs");
const path = require("path");
const { tokenSet, jaccard, stem, normalize } = require("./pseo-lang.cjs");
const { CITIES_RU, COUNTRIES, CITY, SEEDS } = require("./pseo-seeds.cjs");

const ROOT = path.resolve(__dirname, "../..");
const DIR = path.join(ROOT, "research", "pseo");

const argv = process.argv.slice(2);
const flag = (n, d) => {
  const i = argv.indexOf("--" + n);
  return i > -1 && argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : d;
};
const ONLY_LANG = flag("lang", null);
const MIN_VOLUME = Number(flag("min-volume", 10));
const COVERED_AT = Number(flag("covered", 0.7));
const RELATED_AT = Number(flag("related", 0.4));
const LANGS = ONLY_LANG ? [ONLY_LANG] : ["pl", "ru", "en"];

// ------------------------------------------------------------------- города --
//
// Город обязан быть барьером: торуньский запрос варшавской страницей не
// закрывается, и это проверено — без барьера «pozycjonowanie stron toruń»
// сматчился с «Pozycjonowanie stron w Warszawie» и попал в «формулировку».

function geoStems(lang) {
  const out = new Set();
  const add = (name) => {
    const n = normalize(name);
    if (n.length >= 4) for (const w of n.split(" ")) if (w.length >= 4) out.add(stem(w, lang));
  };
  if (lang === "ru") for (const c of CITIES_RU) add(c);
  // Страны добавляются без порога длины: список выверен руками, столкновений
  // с обычными словами в нём нет. Иначе «USA» в заголовке «Pozycjonowanie
  // stron w USA» не попадает в барьер и ловит общий запрос.
  for (const c of COUNTRIES[lang] || []) {
    for (const w of normalize(c).split(" ")) if (w) out.add(stem(w, lang));
  }

  const known = CITY[lang];
  const f = path.join(DIR, "cities.json");
  if (fs.existsSync(f)) {
    try {
      for (const name of JSON.parse(fs.readFileSync(f, "utf8"))) {
        const n = normalize(name);
        // Порог длины отсекает короткие названия, совпадающие с обычными
        // словами (нидерландский город Best). Но известные города из списка
        // CITY проходят независимо от длины — иначе выпадает Łódź.
        if (n.length < 5 && !(known && known.test(n))) continue;
        add(name);
      }
    } catch (e) { /* словарь не обязателен */ }
  }

  // Слова, которыми описаны услуги, географией быть не могут. Без этой
  // защиты польский городок Stronie Śląskie даёт основу «stron» — ту же, что
  // у слова «strony», и любой запрос про страницу перестаёт совпадать со
  // страницами, где это слово есть в заголовке. Известные города из списка
  // CITY из защиты изъяты: иначе сид «agencja seo warszawa» выбрасывает
  // Варшаву.
  for (const seed of Object.values(SEEDS[lang] || {}).flat()) {
    for (const w of normalize(seed).split(" ")) {
      if (!w || (known && known.test(w))) continue;
      out.delete(stem(w, lang));
    }
  }
  return out;
}

/** Множества географических основ должны совпадать, иначе это разные страницы. */
function sameGeo(a, b, cities) {
  const pick = (set) => [...set].filter((t) => cities.has(t)).sort().join(",");
  return pick(a) === pick(b);
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

const COLS = ["verdict", "type", "head", "volume", "page_title", "page_slug", "page_type", "closeness", "matched_on", "variants_count"];

function build(lang, inventory) {
  const pagesFile = path.join(DIR, `pages-${lang}.csv`);
  if (!fs.existsSync(pagesFile)) return null;

  // существующие страницы этого языка: заголовок и слаг вместе,
  // потому что фраза со спросом может стоять в одном и не стоять в другом
  const toPage = (r) => {
      const title = r[`title_${lang}`] || "";
      const slug = r[`slug_${lang}`] || "";
      return {
        title,
        slug,
        type: r.type,
        pageType: r.pageType || "",
        titleTokens: tokenSet(title, lang, true),
        slugTokens: tokenSet(slug.replace(/-/g, " "), lang, true),
      };
  };

  const withLang = inventory.filter((r) => r[`title_${lang}`] || r[`slug_${lang}`]);
  const landings = withLang.filter((r) => r.type === "singlepage").map(toPage).filter((p) => p.titleTokens.size || p.slugTokens.size);
  const everything = withLang.map(toPage).filter((p) => p.titleTokens.size || p.slugTokens.size);

  const cities = geoStems(lang);

  const demand = readCsv(pagesFile).filter((p) => {
    const v = Number(p.volume);
    return p.head && Number.isFinite(v) && v >= MIN_VOLUME;
  });

  const rows = demand.map((d) => {
    const dt = tokenSet(d.head, lang, true);
    // Информационный запрос может быть закрыт статьёй; остальные — только страницей.
    const pool = d.type === "info" ? everything : landings;
    let best = null;
    let bestScore = 0;
    let bestWhere = "";
    let bestFull = false;
    for (const p of pool) {
      // Заголовок и слаг сравниваются отдельно, берётся лучшее. Иначе старый
      // слаг тянет оценку вниз у страницы с уже исправленным заголовком:
      // так «Pozycjonowanie stron internetowych» на слаге
      // /strategia-i-optymalizacja-seo проиграла варшавской странице.
      for (const [where, pt] of [["заголовок", p.titleTokens], ["слаг", p.slugTokens]]) {
        if (!pt.size) continue;
        let inter = 0;
        for (const t of dt) if (pt.has(t)) inter++;
        // одно совпавшее слово — совпадение случайное, кроме однословных запросов
        if (inter < 2 && dt.size > 1) continue;
        if (!sameGeo(dt, pt, cities)) continue;
        // Запрос, целиком вошедший в заголовок с одним лишним словом, — это та
        // же страница: «pozycjonowanie stron» против «Pozycjonowanie stron
        // internetowych». Жаккар даёт там 0.67 и относит к «формулировке»,
        // поэтому такой случай помечается отдельно.
        const full = inter === dt.size && pt.size - dt.size <= 1;
        const score = jaccard(dt, pt);
        // Выбор однозначный: полное вхождение всегда предпочтительнее, при
        // равной полноте побеждает более высокая близость. Без этого кандидат
        // с полным вхождением и низкой оценкой перезаписывал лучшую оценку,
        // и «audyt seo» уезжал в разряд «нет» при существующей странице
        // «Audyt SEO strony internetowej».
        const better = full !== bestFull ? full : score > bestScore;
        if (better) { bestScore = score; best = p; bestWhere = where; bestFull = full; }
      }
    }
    const verdict = (bestFull || bestScore >= COVERED_AT) ? "закрыта" : bestScore >= RELATED_AT ? "формулировка" : "нет";
    return {
      verdict,
      type: d.type,
      head: d.head,
      volume: Number(d.volume),
      page_title: best ? best.title : "",
      page_slug: best ? best.slug : "",
      page_type: best ? best.type : "",
      closeness: bestScore.toFixed(2),
      matched_on: bestWhere,
      variants_count: d.members || "",
    };
  }).sort((a, b) => b.volume - a.volume);

  writeCsv(path.join(DIR, `coverage-${lang}.csv`), COLS, rows);
  return { lang, rows, existingCount: landings.length, demandCount: demand.length };
}

function main() {
  const invFile = path.join(DIR, "site-inventory.csv");
  if (!fs.existsSync(invFile)) {
    console.error("Нет research/pseo/site-inventory.csv. Сначала pseo-inventory.cjs.");
    process.exit(1);
  }
  const inventory = readCsv(invFile);

  const all = [];
  for (const lang of LANGS) {
    const r = build(lang, inventory);
    if (r) all.push(r);
    else console.warn(`! нет research/pseo/pages-${lang}.csv, пропускаю`);
  }
  if (!all.length) { console.error("Нет ни одного файла со спросом. Сначала pseo-cluster.cjs."); process.exit(1); }

  const lines = [];
  const say = (l = "") => { console.log(l); lines.push(l); };

  say("# Спрос против того, что на сайте уже есть");
  say("");
  say(`Сопоставлено: ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC. Порог частоты: ${MIN_VOLUME}/мес.`);
  say("");
  say("Разряды: **закрыта** — существующая страница уже названа этой фразой;");
  say("**формулировка** — страница по теме есть, но названа иначе, нужна правка");
  say("заголовков, а не новая страница; **нет** — на сайте ничего похожего.");
  say("");

  say("| язык | страниц на сайте | тем спроса | закрыта | формулировка | нет |");
  say("| --- | --- | --- | --- | --- | --- |");
  for (const r of all) {
    const n = (v) => r.rows.filter((x) => x.verdict === v).length;
    say(`| ${r.lang} | ${r.existingCount} | ${r.demandCount} | ${n("закрыта")} | ${n("формулировка")} | ${n("нет")} |`);
  }
  say("");

  say("## Та же картина по сумме частот, а не по числу тем");
  say("");
  say("Число тем обманчиво: тысяча тем по 10 запросов весит меньше десяти тем по 1000.");
  say("");
  say("| язык | закрыта | формулировка | нет |");
  say("| --- | --- | --- | --- |");
  for (const r of all) {
    const sum = (v) => r.rows.filter((x) => x.verdict === v).reduce((n, x) => n + x.volume, 0);
    const total = r.rows.reduce((n, x) => n + x.volume, 0) || 1;
    const pct = (v) => `${sum(v).toLocaleString("ru-RU")} (${Math.round((sum(v) / total) * 100)}%)`;
    say(`| ${r.lang} | ${pct("закрыта")} | ${pct("формулировка")} | ${pct("нет")} |`);
  }
  say("");

  for (const r of all) {
    const re = r.rows.filter((x) => x.verdict === "формулировка").slice(0, 20);
    if (!re.length) continue;
    say(`## ${r.lang}: страницы, которым нужна переориентация, 20 самых частотных`);
    say("");
    say("Слева запрос со спросом, справа страница, которая по теме подходит, но");
    say("названа другими словами. Это правка заголовка, title и подзаголовков.");
    say("");
    for (const x of re) {
      say(`- **${x.head}** — ${x.volume}/мес, тип ${x.type}, близость ${x.closeness}`);
      say(`  - есть: \`/${x.page_slug}\` — ${x.page_title}`);
    }
    say("");
  }

  for (const r of all) {
    const none = r.rows.filter((x) => x.verdict === "нет").slice(0, 20);
    if (!none.length) continue;
    say(`## ${r.lang}: чего на сайте нет, 20 самых частотных`);
    say("");
    for (const x of none) say(`- **${x.head}** — ${x.volume}/мес, тип ${x.type}`);
    say("");
  }

  say("## По типам страниц: где новое нужно, а где достаточно правки");
  say("");
  say("| язык | тип | закрыта | формулировка | нет |");
  say("| --- | --- | --- | --- | --- |");
  for (const r of all) {
    for (const type of [...new Set(r.rows.map((x) => x.type))]) {
      const sel = r.rows.filter((x) => x.type === type);
      const n = (v) => sel.filter((x) => x.verdict === v).length;
      say(`| ${r.lang} | ${type} | ${n("закрыта")} | ${n("формулировка")} | ${n("нет")} |`);
    }
  }
  say("");
  say("Полные данные: research/pseo/coverage-<lang>.csv");
  say("");
  say("Порог близости: закрыта от " + COVERED_AT + ", формулировка от " + RELATED_AT + ".");
  say("Меняется флагами --covered и --related, если разряды разложатся неверно.");

  fs.writeFileSync(path.join(DIR, "coverage.md"), lines.join("\n") + "\n", "utf8");
  console.log("\nЗаписано: research/pseo/coverage-*.csv, coverage.md");
}

main();
