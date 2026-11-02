// scripts/audit-query-coverage.cjs
//
// Только чтение. Берёт запросы, по которым сайт УЖЕ показывается (выгрузки
// Search Console и Bing Webmaster Tools), и отвечает на один вопрос: есть ли
// под этот запрос страница.
//
// Зачем отдельно от audit-core-coverage.cjs. То ядро собрано из частотных
// выгрузок: оно говорит, что люди ищут в принципе. Здесь другое — это запросы,
// по которым Google и Bing УЖЕ сочли сайт релевантным. Такой запрос с
// показами и без своей страницы — самая дешёвая работа, какая бывает:
// релевантность уже подтверждена поисковиком, не хватает только страницы.
//
// Метод совпадения тот же, что в audit-core-coverage.cjs, чтобы результаты
// были сопоставимы: H1, title, метатайтл и все H2/H3 страницы; слова режутся
// до шести букв вместо лемматизации; из запроса берутся только редкие ключи —
// те, что встречаются не чаще чем на 15% страниц языка; страница подходит,
// если содержит все редкие ключи.
//
// Язык запроса определяется по написанию: кириллица — русский, польские
// буквы или польские слова — польский, остальное — английский. Способ грубый,
// и запрос вроде «pozycjonowanie uk» без диакритики ловится только по слову.
//
// Вердикты:
//   есть        страница найдена; печатается её адрес и позиция из выгрузки
//   НЕТ         подходящей страницы нет — это и есть работа
//   частые      запрос из одних частых слов, редких ключей не осталось
//
// Отдельно печатается список «страница есть, но позиция хуже 30»: там работа
// не в создании страницы, а в самой странице.
//
//   node scripts/audit-query-coverage.cjs
//   node scripts/audit-query-coverage.cjs --min-impressions 5
//   node scripts/audit-query-coverage.cjs --src research/search-console/bing-queries-2026-11-02.csv
//   node scripts/audit-query-coverage.cjs --out drafts/query-coverage.csv

const path = require("path");
const fs = require("fs");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const arg = (n) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : null; };
const MIN = Number(arg("--min-impressions") || 1);
const OUT = arg("--out");
const SRCS = (arg("--src") || "research/search-console/gsc-queries-2026-11-02.csv,research/search-console/bing-queries-2026-11-02.csv").split(",");
const RARE_SHARE = 0.15;
const KEY_LEN = 6;
const PREFIX = { en: "", pl: "/pl", ru: "/ru" };

function parseCsv(text) {
  const rows = [];
  let row = [], field = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else q = false; } else field += c; }
    else if (c === '"') q = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
    else if (c !== "\r") field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const head = rows.shift();
  return rows.filter((r) => r.length > 1).map((r) => Object.fromEntries(head.map((h, i) => [h.trim(), r[i] ?? ""])));
}

const STOP = new Set([
  "для","под","или","как","что","это","при","без","the","for","and","with","your","you","our","from","what","does","how",
  "dla","oraz","jest","czy","jak","sie","się","www","seo","geo","are","can","should","have","this","that","need","just",
]);

// Польские слова без диакритики, по которым запрос всё равно опознаётся.
const PL_WORDS = /\b(pozycjonowanie|strona|strony|stron|tworzenie|projektowanie|sklep|sklepu|cena|cennik|ile|koszt|kosztuje|firmy|internetowych|internetowa|audyt|wolno|dlaczego|moja|mojej|marki|skad|narzedzia|oferty|polecasz)\b/i;

function detectLang(q) {
  if (/[Ѐ-ӿ]/.test(q)) return "ru";
  if (/[ąćęłńóśźż]/i.test(q) || PL_WORDS.test(q)) return "pl";
  return "en";
}

function keys(text) {
  return [...new Set(
    String(text || "").toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/)
      .filter((w) => w.length >= 4 && !STOP.has(w) && !/^\d+$/.test(w))
      .map((w) => w.slice(0, KEY_LEN)),
  )];
}

function collectHeadings(blocks, out) {
  if (!Array.isArray(blocks)) return out;
  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;
    if (b._type === "block" && Array.isArray(b.children) && (b.style === "h2" || b.style === "h3")) {
      out.push(b.children.map((c) => (c && typeof c.text === "string" ? c.text : "")).join(""));
    }
    for (const v of Object.values(b)) {
      if (Array.isArray(v)) collectHeadings(v, out);
      else if (v && typeof v === "object") collectHeadings([v], out);
    }
  }
  return out;
}

async function main() {
  // Запросы из всех указанных выгрузок. Колонки у Google и Bing разные.
  const queries = [];
  for (const src of SRCS) {
    const file = path.resolve(__dirname, "..", src.trim());
    if (!fs.existsSync(file)) { console.error(`нет файла ${src}`); continue; }
    const src_name = path.basename(file).split("-")[0];
    for (const r of parseCsv(fs.readFileSync(file, "utf8"))) {
      const head = (r["Top queries"] || r["Keyword"] || "").trim();
      if (!head) continue;
      const imp = Number(String(r["Impressions"] || 0).replace(/[^\d.]/g, "")) || 0;
      const pos = Number(String(r["Position"] || r["Avg. Position"] || 0).replace(/[^\d.]/g, "")) || 0;
      if (imp < MIN) continue;
      queries.push({ head, imp, pos, src: src_name, lang: detectLang(head) });
    }
  }

  const docs = await client.fetch(
    `*[_type in ["singlepage","post"] && !(_id in path("drafts.**"))]{
      _type, language, heading, title, contentBlocks, body,
      "metaTitle": seo.metaTitle,
      "s": select(language == "en" => slug.en.current, language == "pl" => slug.pl.current, slug.ru.current),
      "p1": select(language == "en" => parentPage->slug.en.current, language == "pl" => parentPage->slug.pl.current, parentPage->slug.ru.current),
      "p2": select(language == "en" => parentPage->parentPage->slug.en.current, language == "pl" => parentPage->parentPage->slug.pl.current, parentPage->parentPage->slug.ru.current)
    }`,
  );

  const pages = docs.filter((d) => d.s).map((d) => {
    const text = [d.heading, d.title, d.metaTitle, ...collectHeadings(d.contentBlocks || [], []), ...collectHeadings(d.body || [], [])].join(" ");
    const seg = d._type === "post" ? `blog/${d.s}` : [d.p2, d.p1, d.s].filter(Boolean).join("/");
    return { lang: d.language, url: `${PREFIX[d.language] ?? ""}/${seg}`, keys: new Set([...keys(text), ...keys(d.s.replace(/-/g, " "))]) };
  });

  const byLang = {};
  for (const p of pages) (byLang[p.lang] ||= []).push(p);

  const share = {};
  for (const [lang, list] of Object.entries(byLang)) {
    const df = new Map();
    for (const p of list) for (const k of p.keys) df.set(k, (df.get(k) || 0) + 1);
    share[lang] = new Map([...df].map(([k, n]) => [k, n / list.length]));
  }

  const res = [];
  for (const q of queries) {
    const s = share[q.lang] || new Map();
    const rk = keys(q.head).filter((k) => (s.get(k) ?? 0) <= RARE_SHARE);
    if (!rk.length) { res.push({ ...q, verdict: "частые", note: "" }); continue; }
    const found = (byLang[q.lang] || []).filter((p) => rk.every((k) => p.keys.has(k)));
    if (found.length) res.push({ ...q, verdict: "есть", note: found.slice(0, 2).map((p) => p.url).join(", ") });
    else res.push({ ...q, verdict: "НЕТ", note: `редкие ключи: ${rk.join(" ")}` });
  }

  const sum = (v) => res.filter((r) => r.verdict === v).reduce((a, r) => a + r.imp, 0);
  console.log(`запросов с показами ≥ ${MIN}: ${res.length}, страниц проверено: ${pages.length}\n`);
  for (const v of ["есть", "НЕТ", "частые"]) {
    const n = res.filter((r) => r.verdict === v).length;
    console.log(`  ${v.padEnd(7)} ${String(n).padStart(5)} запросов   показов ${String(sum(v)).padStart(7)}`);
  }

  console.log("\n## НЕТ страницы — топ 60 по показам:\n");
  for (const r of res.filter((x) => x.verdict === "НЕТ").sort((a, b) => b.imp - a.imp).slice(0, 60)) {
    console.log(`  ${r.lang} ${String(r.imp).padStart(5)} поз ${String(r.pos.toFixed(0)).padStart(3)} ${r.src}  «${r.head}»`);
  }

  console.log("\n## Страница есть, но позиция хуже 30 — топ 40 по показам:\n");
  for (const r of res.filter((x) => x.verdict === "есть" && x.pos > 30).sort((a, b) => b.imp - a.imp).slice(0, 40)) {
    console.log(`  ${r.lang} ${String(r.imp).padStart(5)} поз ${String(r.pos.toFixed(0)).padStart(3)}  «${r.head}»`);
    console.log(`         ${r.note}`);
  }

  if (OUT) {
    const dest = path.resolve(__dirname, "..", OUT);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const esc = (s) => `"${String(s ?? "").replace(/"/g, '""')}"`;
    const lines = ["verdict,lang,impressions,position,source,query,note"];
    for (const r of res.sort((a, b) => b.imp - a.imp)) lines.push([r.verdict, r.lang, r.imp, r.pos, r.src, esc(r.head), esc(r.note)].join(","));
    fs.writeFileSync(dest, lines.join("\n") + "\n", "utf8");
    console.log(`\n${res.length} строк → ${OUT}`);
  }
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
