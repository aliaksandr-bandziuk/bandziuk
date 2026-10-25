// scripts/fix-scanm2-wording.cjs
//
// The portfolio case `architecture-website-rebuild-and-seo-scan` is ScanM2 — a 3D
// laser scanning and BIM modeling company (portfolio industry tag «Architecture»).
// Its design was KEPT on the rebuild. Landing pages written in October 2026 call it
// «an architecture studio / biuro architektoniczne / архитектурное бюро», and two of
// them speak of «a new design». This script replaces those phrases.
//
// Pages written FOR architects (where «architecture studio» means the visitor) are
// skipped entirely — see SKIP_SLUGS.
//
// Usage:
//   node scripts/fix-scanm2-wording.cjs                     dry run on Sanity: prints every string before → after
//   node scripts/fix-scanm2-wording.cjs --apply             write to Sanity (one patch per document, guarded by _rev)
//   node scripts/fix-scanm2-wording.cjs --fixtures          dry run on src/dev-fixtures/*.ts (no network)
//   node scripts/fix-scanm2-wording.cjs --fixtures --apply  rewrite the fixture files
//
// Idempotent; aborts on drafts.

const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const FIXTURES = process.argv.includes("--fixtures");

const SKIP_SLUGS = new Set([
  "architecture-studio-website", "seo-for-architects", "architecture-website-design",
  "strona-dla-biura-architektonicznego", "pozycjonowanie-strony-biura-architektonicznego",
]);
const SKIP_FILES = new Set(["seo-for-architects.en.ts", "seo-for-architects.pl.ts", "architecture-website-design.en.ts"]);

// Most specific first. Plain string replacements, applied in order.
const RULES = {
  en: [
    ["a new design for an architecture studio", "a rebuild for a 3D laser scanning and BIM company that kept its design"],
    ["an architecture studio’s new design", "a 3D laser scanning and BIM company’s rebuild"],
    ["an architecture studio’s rebuild", "a rebuild for a 3D laser scanning and BIM company"],
    ["An architecture studio whose organic traffic", "A 3D laser scanning and BIM company whose organic traffic"],
    ["an architecture studio whose organic traffic", "a 3D laser scanning and BIM company whose organic traffic"],
    ["an architecture studio", "a 3D laser scanning and BIM company"],
  ],
  pl: [
    ["Biuro architektoniczne, którego ruch organiczny", "Firma skanowania laserowego 3D i modelowania BIM, której ruch organiczny"],
    ["biuro architektoniczne, którego ruch organiczny", "firma skanowania laserowego 3D i modelowania BIM, której ruch organiczny"],
    ["oraz strony biura architektonicznego, firmy", "oraz strony firmy skanowania laserowego 3D i BIM, firmy"],
    ["i biuro architektoniczne", "i firma skanowania laserowego 3D i BIM"],
    ["biuro architektoniczne, ", "firma skanowania laserowego 3D i BIM, "],
  ],
  ru: [
    ["Архитектурное бюро, органический трафик которого", "Компания 3D-лазерного сканирования и BIM-моделирования, органический трафик которой"],
    ["Архитектурное бюро, где органический трафик", "Компания 3D-лазерного сканирования и BIM, где органический трафик"],
    ["Архитектурное бюро, ", "Компания 3D-лазерного сканирования и BIM, "],
    ["сайт архитектурной студии, у которого", "сайт компании 3D-лазерного сканирования и BIM, у которого"],
    ["архитектурное бюро, органический трафик которого", "компания 3D-лазерного сканирования и BIM-моделирования, органический трафик которой"],
    ["и архитектурного бюро", "и компании 3D-лазерного сканирования и BIM"],
    ["архитектурное бюро", "компания 3D-лазерного сканирования и BIM"],
  ],
};

const fix = (lang, s) => {
  let out = s;
  for (const [a, b] of RULES[lang] || []) out = out.split(a).join(b);
  return out;
};

function walk(node, lang, at, out) {
  if (typeof node === "string") { const f = fix(lang, node); if (f !== node && at) out.push([at, node, f]); return; }
  if (Array.isArray(node)) { node.forEach((x, i) => walk(x, lang, `${at}[${x && x._key ? `_key=="${x._key}"` : i}]`, out)); return; }
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) {
      if (k.startsWith("_") || k === "slug" || k === "markDefs") continue;
      walk(v, lang, at ? `${at}.${k}` : k, out);
    }
  }
}

async function sanity() {
  const { createClient } = require("@sanity/client");
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2025-08-04",
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
  });
  const docs = await client.fetch(`*[_type == "singlepage" && !(_id in path("drafts.**"))]`);
  const plan = [];
  for (const d of docs) {
    const lang = d.language;
    const slug = d.slug?.[lang]?.current;
    if (!RULES[lang] || SKIP_SLUGS.has(slug)) continue;
    const changes = [];
    walk(d, lang, "", changes);
    if (changes.length) plan.push({ d, slug, lang, changes });
  }
  if (!plan.length) return console.log("Nothing to change.");
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: plan.map((p) => `drafts.${p.d._id}`) });
  if (drafts.length) { console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`); process.exit(1); }
  let n = 0;
  for (const p of plan) {
    console.log(`\n── ${p.lang.toUpperCase()} /${p.lang === "en" ? "" : p.lang + "/"}${p.slug}  (${p.d._id})`);
    for (const [at, a, b] of p.changes) { n++; console.log(`  ${at}\n    − ${a}\n    + ${b}`); }
  }
  if (!APPLY) return console.log(`\nDry run — ${n} string(s) in ${plan.length} page(s), nothing written. Add --apply to write.`);
  const tx = client.transaction();
  for (const p of plan) tx.patch(p.d._id, (q) => q.ifRevisionId(p.d._rev).set(Object.fromEntries(p.changes.map(([at, , b]) => [at, b]))));
  await tx.commit();
  console.log(`\nWritten: ${plan.length} page(s). The webhook revalidates them.`);
}

function fixtures() {
  const dir = path.resolve(__dirname, "../src/dev-fixtures");
  let total = 0;
  for (const f of fs.readdirSync(dir).filter((x) => /\.(en|pl|ru)\.ts$/.test(x))) {
    if (SKIP_FILES.has(f)) continue;
    const lang = f.match(/\.(en|pl|ru)\.ts$/)[1];
    const src = fs.readFileSync(path.join(dir, f), "utf8");
    // only string literals, never the header comments
    const out = src.split("\n").map((line) => (line.trim().startsWith("//") ? line : fix(lang, line))).join("\n");
    if (out === src) continue;
    const before = src.split("\n"), after = out.split("\n");
    console.log(`\n── ${f}`);
    before.forEach((l, i) => { if (l !== after[i]) { total++; console.log(`  − ${l.trim().slice(0, 220)}\n  + ${after[i].trim().slice(0, 220)}`); } });
    if (APPLY) fs.writeFileSync(path.join(dir, f), out);
  }
  console.log(total ? `\n${APPLY ? "Written" : "Dry run"} — ${total} line(s).` : "Nothing to change.");
}

if (FIXTURES) fixtures();
else sanity().catch((err) => { console.error(err.message || err); process.exit(1); });
