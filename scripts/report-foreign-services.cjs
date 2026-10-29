// scripts/report-foreign-services.cjs
//
// Read-only inventory. Walks every published document in every language and finds
// each string that mentions a service or market the site is not supposed to name
// (2GIS, Яндекс, VK, Авито, Mail.ru, Россия…). Prints the DISTINCT strings, how many
// times each occurs and which pages they sit on, so a replacement map can be written
// against the real values rather than guessed from rendered HTML.
//
// Writes nothing, ever. There is no --apply.
//
// Usage: node scripts/report-foreign-services.cjs
//        node scripts/report-foreign-services.cjs --term 2gis     only that term
//        node scripts/report-foreign-services.cjs --full          do not trim long strings

const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const FULL = process.argv.includes("--full");
const ONLY = (() => { const i = process.argv.indexOf("--term"); return i > -1 ? process.argv[i + 1].toLowerCase() : null; })();

const TERMS = [
  ["2gis", /2\s?-?GIS|2\s?ГИС/i],
  ["yandex", /Яндекс|Yandex/i],
  ["vk", /ВКонтакте|Вконтакте|vk\.com/i],
  ["ok", /Одноклассник/i],
  ["avito", /Авито|Avito/i],
  ["mailru", /Mail\.ru/i],
  ["rambler", /Рамблер|Rambler/i],
  ["dzen", /Яндекс\.?Дзен/i],
  ["sber", /Сбербанк|\bСбер\b/i],
  ["tinkoff", /Тинькофф|Tinkoff/i],
  ["russia", /Росси[июя]|\bRussia\b|Rosj[ai]/i],
  ["belarus", /Беларус|Белорусс|\bBelarus\b|Białoru/i],
  ["india", /\bИндии?\b|\bИндия\b|\bIndia\b|\bIndie\b/i],
  ["pakistan", /Пакистан|Pakistan/i],
  ["ozon", /Wildberries|Вайлдберриз|\bOzon\b|\bОзон\b/i],
].filter(([k]) => !ONLY || k === ONLY);

// Strings the site legitimately contains that would otherwise trip a term above.
const ALLOW = [
  /индив/i,           // индивидуальный — contains «инди»
  /индикат/i,
  /индекс/i,          // индексация — not India
];

const hit = (s) => {
  if (typeof s !== "string" || s.length < 2) return null;
  if (ALLOW.some((r) => r.test(s)) && !TERMS.some(([k, r]) => k !== "india" && r.test(s))) {
    // only skip when the sole reason it matched was an allow-listed word
    const real = TERMS.filter(([, r]) => r.test(s)).map(([k]) => k);
    const spurious = real.length === 1 && real[0] === "india" && !/\bИнди[ияю]\b|\bIndia\b/i.test(s);
    if (spurious) return null;
  }
  const names = TERMS.filter(([, r]) => r.test(s)).map(([k]) => k);
  return names.length ? names : null;
};

function walk(node, out, pathStr = "") {
  if (node == null) return;
  if (typeof node === "string") {
    const names = hit(node);
    if (names) out.push({ text: node, terms: names, at: pathStr });
    return;
  }
  if (Array.isArray(node)) { node.forEach((v, i) => walk(v, out, `${pathStr}[${i}]`)); return; }
  if (typeof node === "object") {
    for (const [k, v] of Object.entries(node)) {
      if (k === "_id" || k === "_rev" || k === "_key" || k === "_type" || k === "_ref") continue;
      walk(v, out, pathStr ? `${pathStr}.${k}` : k);
    }
  }
}

(async () => {
  if (!process.env.SANITY_API_TOKEN) throw new Error("SANITY_API_TOKEN missing");
  const docs = await client.fetch(
    `*[!(_id in path("drafts.**")) && !(_type match "sanity.*") && !(_type match "translation.*")]{...}`,
  );
  console.log(`scanned ${docs.length} published documents\n`);

  // distinct string -> { count, terms, pages:Set, fields:Set }
  const index = new Map();
  let docsHit = new Set();
  for (const doc of docs) {
    const found = [];
    walk(doc, found);
    if (!found.length) continue;
    const lang = doc.language || "-";
    const slug = doc.slug?.[lang]?.current || doc.slug?.current || doc._id;
    const page = `${lang} ${slug}`;
    docsHit.add(page);
    for (const f of found) {
      const e = index.get(f.text) || { count: 0, terms: f.terms, pages: new Set(), fields: new Set() };
      e.count++; e.pages.add(page); e.fields.add(f.at.replace(/\[\d+\]/g, "[]"));
      index.set(f.text, e);
    }
  }

  const byTerm = {};
  for (const [, e] of index) for (const t of e.terms) byTerm[t] = (byTerm[t] || 0) + e.count;
  console.log("occurrences by term:");
  for (const [t, n] of Object.entries(byTerm).sort((a, b) => b[1] - a[1])) console.log(`  ${t}: ${n}`);
  console.log(`\ndistinct strings: ${index.size} · documents affected: ${docsHit.size}\n`);

  const rows = [...index.entries()].sort((a, b) => b[1].count - a[1].count || a[0].localeCompare(b[0]));
  for (const [text, e] of rows) {
    const t = FULL || text.length <= 300 ? text : text.slice(0, 300) + " …[+" + (text.length - 300) + "]";
    console.log(`── ×${e.count}  [${e.terms.join(",")}]  ${[...e.fields].slice(0, 3).join(" / ")}`);
    console.log(`   ${JSON.stringify(t)}`);
    console.log(`   pages: ${[...e.pages].slice(0, 6).join(", ")}${e.pages.size > 6 ? ` …+${e.pages.size - 6}` : ""}`);
  }
  console.log(`\nRead-only: nothing was written.`);
})().catch((e) => { console.error("\n" + (e.message || e)); process.exit(1); });
