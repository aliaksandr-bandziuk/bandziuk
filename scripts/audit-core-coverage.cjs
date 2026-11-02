// scripts/audit-core-coverage.cjs
//
// Только чтение. Сверяет семантическое ядро (research/pseo/core.csv) с тем, что
// действительно есть на сайте. Написан 02.11.2026 после того, как привязки в
// ядре дважды за день ввели в заблуждение:
//
//   * строки «продвижение сайта маркетингового агентства» и «дизайн сайта для
//     маркетингового агентства» указывали на страницу агентства НЕДВИЖИМОСТИ;
//   * «продвижение сайта» 12 100 и «seo продвижение сайта» 5 400 числились за
//     страницей юристов, хотя своя страница существует и сделана как надо
//     (/ru/uslugi/prodvizhenie-saita, 16 H2).
//
// Из-за этого список «что не закрыто», посчитанный прямо по `page_slug`,
// недостоверен в обе стороны: показывает дыру там, где страница есть, и молчит
// там, где дыра настоящая. Планировать по нему нельзя.
//
// Категории в выводе:
//   ok          строка указывает на существующую страницу, и тема совпадает
//   mismatch    страница существует, но её тема не похожа на запрос
//   broken      указанной страницы на сайте нет
//   stale-gap   привязки нет, но подходящая страница на сайте есть
//   gap         привязки нет и подходящей страницы нет — настоящая дыра
//
// КАК ОПРЕДЕЛЯЕТСЯ СОВПАДЕНИЕ ТЕМЫ, и почему именно так.
// Сравнивать запрос с текстом страницы целиком бесполезно: «продвижение сайта»
// встречается на сотнях страниц, и по нему совпадёт что угодно. Поэтому:
//   1. у каждой страницы берётся H1, title, метатайтл и все H2/H3;
//   2. слова нормализуются до первых шести букв — грубая замена лемматизации,
//      которая склеивает «автосервиса» и «автосервис», «kancelarii» и
//      «kancelaria». Для русского и польского этого хватает, для английского
//      тем более;
//   3. считается, на какой доле страниц языка встречается каждый ключ;
//   4. из запроса берутся только РЕДКИЕ ключи — те, что встречаются не чаще
//      чем на 15% страниц. Это и есть различающие слова;
//   5. страница считается подходящей, если содержит ВСЕ редкие ключи запроса.
//
// Метод грубый и даёт ошибки в обе стороны: синонимы он не ловит («раскрутка»
// и «продвижение» для него разные слова), а у запроса из одних частых слов
// редких ключей не остаётся вовсе — такие строки помечаются отдельно как
// `no-rare-keys` и требуют глаз, а не скрипта. Поэтому вывод — материал для
// решения, а не готовое решение.
//
// Использование:
//   node scripts/audit-core-coverage.cjs                     сводка
//   node scripts/audit-core-coverage.cjs --show gap          строки одной категории
//   node scripts/audit-core-coverage.cjs --min-volume 100    только с объёмом
//   node scripts/audit-core-coverage.cjs --out drafts/core-coverage.csv

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
const SHOW = arg("--show");
const MIN_VOL = Number(arg("--min-volume") || 0);
const OUT = arg("--out");
const RARE_SHARE = 0.15;   // ключ считается редким, если он не чаще чем на 15% страниц языка
const KEY_LEN = 6;         // до скольки букв обрезается слово вместо лемматизации

const PREFIX = { en: "", pl: "/pl", ru: "/ru" };

// ── Разбор CSV без зависимостей: поля в кавычках, запятые внутри кавычек ─────
function parseCsv(text) {
  const rows = [];
  let row = [], field = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else q = false; }
      else field += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
    else if (c !== "\r") field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const head = rows.shift();
  return rows.filter((r) => r.length > 1).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ""])));
}

const STOP = new Set([
  "для","под","или","как","что","это","при","без","the","for","and","with","your","you","our","from",
  "dla","oraz","jest","czy","jak","sie","się","się","www","seo","geo",
]);

// Слово → ключ. Цифры и короткие слова отбрасываются: они ничего не различают.
function keys(text) {
  return [...new Set(
    String(text || "")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .split(/\s+/)
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
  const corePath = path.resolve(__dirname, "../research/pseo/core.csv");
  const core = parseCsv(fs.readFileSync(corePath, "utf8"));

  const docs = await client.fetch(
    `*[_type == "singlepage" && !(_id in path("drafts.**"))]{
      language, heading, title, contentBlocks,
      "metaTitle": seo.metaTitle,
      "s": select(language == "en" => slug.en.current, language == "pl" => slug.pl.current, slug.ru.current),
      "p1": select(language == "en" => parentPage->slug.en.current, language == "pl" => parentPage->slug.pl.current, parentPage->slug.ru.current),
      "p2": select(language == "en" => parentPage->parentPage->slug.en.current, language == "pl" => parentPage->parentPage->slug.pl.current, parentPage->parentPage->slug.ru.current)
    }`,
  );

  // Страница → её ключи и полный адрес.
  const pages = docs.filter((d) => d.s).map((d) => {
    const text = [d.heading, d.title, d.metaTitle, ...collectHeadings(d.contentBlocks || [], [])].join(" ");
    const seg = [d.p2, d.p1, d.s].filter(Boolean).join("/");
    return { lang: d.language, slug: d.s, url: `${PREFIX[d.language] ?? ""}/${seg}`, keys: new Set([...keys(text), ...keys(d.s.replace(/-/g, " "))]) };
  });

  const byLang = {};
  for (const p of pages) (byLang[p.lang] ||= []).push(p);
  const bySlug = new Map(pages.map((p) => [`${p.lang}|${p.slug}`, p]));

  // Доля страниц языка, содержащих ключ.
  const share = {};
  for (const [lang, list] of Object.entries(byLang)) {
    const df = new Map();
    for (const p of list) for (const k of p.keys) df.set(k, (df.get(k) || 0) + 1);
    share[lang] = new Map([...df].map(([k, n]) => [k, n / list.length]));
  }

  const rareKeys = (lang, head) => {
    const s = share[lang] || new Map();
    return keys(head).filter((k) => (s.get(k) ?? 0) <= RARE_SHARE);
  };
  const matches = (page, rk) => rk.length > 0 && rk.every((k) => page.keys.has(k));

  const res = [];
  for (const r of core) {
    const lang = r.lang, head = r.head, vol = Number(r.volume || 0);
    if (vol < MIN_VOL) continue;
    const rk = rareKeys(lang, head);
    const assigned = r.page_slug.trim() ? bySlug.get(`${lang}|${r.page_slug.trim()}`) : null;

    let verdict, note = "";
    if (!rk.length) {
      verdict = "no-rare-keys";
      note = r.page_slug.trim() ? (assigned ? `указывает на ${assigned.url}` : "указанной страницы нет") : "привязки нет";
    } else if (r.page_slug.trim()) {
      if (!assigned) { verdict = "broken"; note = `страницы ${r.page_slug} в языке ${lang} нет`; }
      else if (matches(assigned, rk)) { verdict = "ok"; note = assigned.url; }
      else {
        const better = (byLang[lang] || []).filter((p) => matches(p, rk));
        verdict = "mismatch";
        note = `указано ${assigned.url}; подходит: ${better.length ? better.slice(0, 3).map((p) => p.url).join(", ") : "ничего"}`;
      }
    } else {
      const found = (byLang[lang] || []).filter((p) => matches(p, rk));
      if (found.length) { verdict = "stale-gap"; note = `страница есть: ${found.slice(0, 3).map((p) => p.url).join(", ")}`; }
      else { verdict = "gap"; note = `редкие ключи: ${rk.join(" ")}`; }
    }
    res.push({ lang, vol, status: r.status, axis: r.axis, head, page_slug: r.page_slug, verdict, note });
  }

  const counts = {};
  const vols = {};
  for (const r of res) { counts[r.verdict] = (counts[r.verdict] || 0) + 1; vols[r.verdict] = (vols[r.verdict] || 0) + r.vol; }

  console.log(`строк ядра проверено: ${res.length}${MIN_VOL ? ` (объём ≥ ${MIN_VOL})` : ""}`);
  console.log(`страниц на сайте: ${pages.length}\n`);
  const order = ["ok", "stale-gap", "mismatch", "broken", "gap", "no-rare-keys"];
  for (const v of order) {
    if (!counts[v]) continue;
    console.log(`  ${v.padEnd(13)} ${String(counts[v]).padStart(5)} строк   объём ${String(vols[v]).padStart(8)}`);
  }
  console.log("\nок — привязка верна. stale-gap и mismatch — ядро врёт, надо править ядро.");
  console.log("gap — настоящая дыра. no-rare-keys — запрос из частых слов, решается глазами.\n");

  if (SHOW) {
    const list = res.filter((r) => r.verdict === SHOW).sort((a, b) => b.vol - a.vol);
    console.log(`## ${SHOW}: ${list.length}\n`);
    for (const r of list.slice(0, 120)) {
      console.log(`  ${r.lang}  ${String(r.vol).padStart(6)}  «${r.head}»`);
      console.log(`         ${r.note}`);
    }
    if (list.length > 120) console.log(`\n  … и ещё ${list.length - 120}`);
  } else {
    console.log("Список одной категории: --show gap | stale-gap | mismatch | broken | no-rare-keys");
  }

  if (OUT) {
    const dest = path.resolve(__dirname, "..", OUT);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const esc = (s) => `"${String(s ?? "").replace(/"/g, '""')}"`;
    const lines = ["verdict,lang,volume,status,axis,head,page_slug,note"];
    for (const r of res.sort((a, b) => b.vol - a.vol)) {
      lines.push([r.verdict, r.lang, r.vol, esc(r.status), esc(r.axis), esc(r.head), esc(r.page_slug), esc(r.note)].join(","));
    }
    fs.writeFileSync(dest, lines.join("\n") + "\n", "utf8");
    console.log(`\n${res.length} строк → ${OUT}`);
  } else {
    console.log("Машинный вывод: --out drafts/core-coverage.csv");
  }
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
