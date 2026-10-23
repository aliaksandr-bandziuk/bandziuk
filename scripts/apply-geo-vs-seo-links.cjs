// scripts/apply-geo-vs-seo-links.cjs
//
// Run after the «GEO vs SEO» article is published and deployed:
//   /blog/geo-vs-seo, /pl/blog/geo-vs-seo-roznice, /ru/blog/geo-vs-seo-raznica
//
// 1. GEO hubs EN / PL / RU: one sentence linking the article, added at the end
//    of the section «AI-ready SEO and GEO: two problems, four services».
// 2. AEO pages EN / PL: one sentence at the end of the «AEO vs SEO vs GEO»
//    section (there is no RU AEO page).
// 3. The four related articles (assistant study, ChatGPT recommendations,
//    AI brand audit, llms.txt) in each language: the new article goes first in
//    their «Related articles».
//
// A section ends at the next H2 in the same text block, or at the block's end.
// Idempotent (skips a page that already links the article); aborts on drafts;
// one transaction.
//
// Usage: node scripts/apply-geo-vs-seo-links.cjs           dry run
//        node scripts/apply-geo-vs-seo-links.cjs --apply   write

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
const norm = (t) => t.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').trim().toLowerCase();
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

const ART = {
  en: { id: "blog-geo-vs-seo", url: "/blog/geo-vs-seo" },
  pl: { id: "blog-geo-vs-seo.pl", url: "/pl/blog/geo-vs-seo-roznice" },
  ru: { id: "blog-geo-vs-seo.ru", url: "/ru/blog/geo-vs-seo-raznica" },
};

const TEXT = [
  {
    id: "831dc620-2863-4d55-baa0-aa874a7374ac", label: "EN GEO hub", lang: "en",
    section: "AI-ready SEO and Generative Engine Optimization",
    para: para("The difference between GEO and SEO — what each one optimizes, where they overlap and how each is measured — is laid out with data in ", ["GEO vs SEO: differences and overlap", ART.en.url], "."),
  },
  {
    id: "3a759a28-4135-4731-a318-cffee1b512f0", label: "PL GEO hub", lang: "pl",
    section: "AI-Ready SEO i GEO",
    para: para("Czym GEO różni się od SEO — co optymalizuje każde z nich, gdzie się pokrywają i jak mierzyć oba kanały — opisuję na danych w artykule ", ["GEO vs SEO: różnice i wspólne elementy", ART.pl.url], "."),
  },
  {
    id: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71", label: "RU GEO hub", lang: "ru",
    section: "AI-Ready SEO и GEO",
    para: para("Чем GEO отличается от SEO — что оптимизирует каждое, где они совпадают и как измерять оба канала, — разбираю на данных в статье ", ["GEO и SEO: в чём разница", ART.ru.url], "."),
  },
  {
    id: "singlepage-answer-engine-optimization", label: "EN AEO", lang: "en",
    section: "AEO vs SEO vs GEO",
    para: para("A longer comparison — with Google's own guidance, click studies and one question tested in three engines — is in ", ["SEO vs GEO vs AEO: how they really differ", ART.en.url], "."),
  },
  {
    id: "singlepage-answer-engine-optimization.pl", label: "PL AEO", lang: "pl",
    section: "AEO, GEO i SEO",
    para: para("Szersze porównanie — z wytycznymi Google, badaniami kliknięć i jednym pytaniem sprawdzonym w trzech wyszukiwarkach AI — jest w artykule ", ["SEO, GEO i AEO: czym się różnią", ART.pl.url], "."),
  },
];

const RELATED_EN = ["blog-ai-assistant-study", "blog-chatgpt-recommendations", "blog-ai-brand-audit", "blog-llms-txt"];

async function main() {
  const art = await client.fetch(`*[_id in $ids]._id`, { ids: Object.values(ART).map((a) => a.id) });
  if (art.length !== 3) {
    console.log(`Aborting — article not published in all languages: have ${art.join(", ") || "none"}`);
    process.exit(1);
  }

  // related articles in each language, via translation.metadata
  const rel = await client.fetch(
    `*[_id in $ids]{ _id, "tr": *[_type == "translation.metadata" && references(^._id)][0].translations[]{ "lang": _key, "id": value._ref } }`,
    { ids: RELATED_EN },
  );
  const relTargets = [];
  for (const r of rel) for (const t of r.tr || []) if (ART[t.lang]) relTargets.push({ id: t.id, lang: t.lang });
  const missingRel = RELATED_EN.filter((id) => !rel.some((r) => r._id === id));
  if (missingRel.length) console.log(`note: related articles not found: ${missingRel.join(", ")}`);

  const touched = [...TEXT.map((t) => t.id), ...relTargets.map((r) => r.id)];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) {
    console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`);
    process.exit(1);
  }

  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, title, contentBlocks, relatedArticles}`, { ids: touched });
  const patches = [];

  for (const t of TEXT) {
    const doc = docs.find((d) => d._id === t.id);
    if (!doc) throw new Error(`${t.label} (${t.id}) not found`);
    const url = ART[t.lang].url;
    if (JSON.stringify(doc.contentBlocks || []).includes(`"href":"${url}"`)) { console.log(`skip  ${t.label}: already links ${url}`); continue; }
    let target = null;
    for (const b of (doc.contentBlocks || []).filter((x) => x._type === "textContent")) {
      const c = b.content || [];
      const i = c.findIndex((x) => x.style === "h2" && norm(plain(x)).startsWith(norm(t.section)));
      if (i === -1) continue;
      let j = c.findIndex((x, k) => k > i && x.style === "h2");
      if (j === -1) j = c.length;
      target = { block: b, after: c[j - 1], heading: plain(c[i]) };
      break;
    }
    if (!target) throw new Error(`${t.label}: H2 «${t.section}…» not found in a text block`);
    console.log(`\n${t.label} — end of «${target.heading}», after «${plain(target.after).slice(0, 70)}…»:\n  ${plain(t.para)}`);
    patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.insert("after", `contentBlocks[_key=="${target.block._key}"].content[_key=="${target.after._key}"]`, [t.para]) });
  }

  console.log("");
  for (const r of relTargets) {
    const doc = docs.find((d) => d._id === r.id);
    if (!doc) { console.log(`note: ${r.id} not found`); continue; }
    const artId = ART[r.lang].id;
    const refs = doc.relatedArticles || [];
    if (refs.some((x) => x._ref === artId)) { console.log(`skip  related ${r.id}: already lists the article`); continue; }
    const item = { _key: key(), _type: "reference", _ref: artId };
    console.log(`add   related ${r.id} (${(doc.title || "").slice(0, 50)}): ${artId} first`);
    patches.push({
      id: doc._id, rev: doc._rev,
      op: (p) => (refs.length ? p.insert("before", "relatedArticles[0]", [item]) : p.setIfMissing({ relatedArticles: [] }).append("relatedArticles", [item])),
    });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${patches.length} change(s), nothing written. Add --apply to write.`);
  // One patch per change: a Sanity patch holds a single «insert», and two
  // inserts chained on one patch get merged into a wrong one.
  const tx = client.transaction();
  const seen = new Set();
  for (const p of patches) {
    const first = !seen.has(p.id); seen.add(p.id);
    tx.patch(p.id, (q) => p.op(first ? q.ifRevisionId(p.rev) : q));
  }
  await tx.commit();
  console.log(`\nWritten: ${[...seen].join(", ")}`);
  console.log("The webhook revalidates these pages.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
