// scripts/fix-what-is-geo-links.cjs
//
// Repairs what apply-what-is-geo-links.cjs did to the three «GEO vs SEO»
// articles. Those documents got two inserts in one patch (the link sentence and
// the related-article reference). The Sanity client keeps only one «insert»
// per patch and merged the two: the reference to «What is GEO» was inserted
// into the article text after the GEO definition, the link sentence was lost,
// and «Related articles» was not changed. The usage figures were set correctly.
//
// Per language this script:
//   1. removes the stray reference from the text;
//   2. inserts the link sentence after the GEO definition paragraph;
//   3. puts «What is GEO» first in «Related articles».
// Each change is a separate patch in one transaction, so no two inserts share
// a patch. Idempotent; aborts on drafts.
//
// Usage: node scripts/fix-what-is-geo-links.cjs           dry run
//        node scripts/fix-what-is-geo-links.cjs --apply   write

const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const key = () => crypto.randomBytes(6).toString("hex");
const plain = (b) => (b.children || []).map((c) => c.text).join("");
function para(...segments) {
  const markDefs = [];
  const children = segments.map((s) => {
    if (typeof s === "string") return { _type: "span", _key: key(), text: s, marks: [] };
    const mk = key();
    markDefs.push({ _type: "link", _key: mk, href: s[1] });
    return { _type: "span", _key: key(), text: s[0], marks: [mk] };
  });
  return { _type: "block", _key: key(), style: "normal", markDefs, children };
}

const L = [
  { doc: "blog-geo-vs-seo", art: "blog-what-is-geo", url: "/blog/what-is-generative-engine-optimization",
    para: () => para("The full definition — where the term comes from, how AI engines pick their sources and what the research says works — is in ", ["what is generative engine optimization", "/blog/what-is-generative-engine-optimization"], ".") },
  { doc: "blog-geo-vs-seo.pl", art: "blog-what-is-geo.pl", url: "/pl/blog/geo-co-to-jest",
    para: () => para("Pełna definicja — skąd termin, jak silniki AI wybierają źródła i co według badań działa — jest w artykule ", ["GEO co to jest", "/pl/blog/geo-co-to-jest"], ".") },
  { doc: "blog-geo-vs-seo.ru", art: "blog-what-is-geo.ru", url: "/ru/blog/chto-takoe-geo",
    para: () => para("Полное определение — откуда взялся термин, как ИИ-движки выбирают источники и что работает по данным исследований — в статье ", ["что такое GEO", "/ru/blog/chto-takoe-geo"], ".") },
];
const ANCHOR = "GEO (generative engine optimization)";

async function main() {
  const ids = L.map((l) => l.doc);
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: ids.map((i) => `drafts.${i}`) });
  if (drafts.length) { console.log(`Aborting — drafts exist: ${drafts.join(", ")}`); process.exit(1); }
  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, contentBlocks, relatedArticles}`, { ids });

  const tx = client.transaction();
  let n = 0;
  for (const l of L) {
    const doc = docs.find((d) => d._id === l.doc);
    if (!doc) throw new Error(`${l.doc} not found`);
    const ops = [];
    const texts = (doc.contentBlocks || []).filter((b) => b._type === "textContent");

    for (const b of texts) for (const x of b.content || []) {
      if (x._type === "reference") ops.push([`remove stray reference ${x._ref} from the text`, (p) => p.unset([`contentBlocks[_key=="${b._key}"].content[_key=="${x._key}"]`])]);
    }

    if (JSON.stringify(doc.contentBlocks).includes(`"href":"${l.url}"`)) console.log(`skip  ${l.doc}: already links ${l.url}`);
    else {
      let found = null;
      for (const b of texts) { const a = (b.content || []).find((x) => x._type === "block" && plain(x).startsWith(ANCHOR)); if (a) { found = { b, a }; break; } }
      if (!found) throw new Error(`${l.doc}: GEO definition paragraph not found`);
      const p0 = l.para();
      ops.push([`insert after «${plain(found.a).slice(0, 50)}…»: ${plain(p0)}`, (p) => p.insert("after", `contentBlocks[_key=="${found.b._key}"].content[_key=="${found.a._key}"]`, [p0])]);
    }

    const refs = doc.relatedArticles || [];
    if (refs.some((r) => r._ref === l.art)) console.log(`skip  ${l.doc}: related already lists ${l.art}`);
    else {
      const item = { _key: key(), _type: "reference", _ref: l.art };
      ops.push([`related: ${l.art} first`, (p) => (refs.length ? p.insert("before", "relatedArticles[0]", [item]) : p.setIfMissing({ relatedArticles: [] }).append("relatedArticles", [item]))]);
    }

    ops.forEach(([msg, op], i) => {
      console.log(`${l.doc}: ${msg}`);
      tx.patch(l.doc, (p) => op(i === 0 ? p.ifRevisionId(doc._rev) : p));
      n++;
    });
  }
  // Report: the same merge could have happened in earlier link scripts. List
  // every reference sitting inside article text and every text block sitting
  // in a list of references, across all documents.
  const stray = await client.fetch(`*[!(_id in path("drafts.**")) && defined(contentBlocks)]{
    _id, "inText": contentBlocks[_type == "textContent"].content[][_type == "reference"]._ref,
    "inLists": contentBlocks[].items[][_type == "block"]._key }[count(inText) > 0 || count(inLists) > 0]`);
  const other = stray.filter((s) => !ids.includes(s._id));
  console.log(other.length ? `\nOther documents with the same damage (fix by hand or tell Claude):\n${other.map((s) => `  ${s._id}: ${JSON.stringify(s)}`).join("\n")}` : "\nNo other documents have references inside text or text inside reference lists.");

  if (!n) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${n} change(s), nothing written. Add --apply to write.`);
  await tx.commit();
  console.log("\nWritten. The webhook revalidates these pages.");
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
