// scripts/apply-what-is-aeo-links.cjs
//
// Run after the «What is AEO» article is published and deployed:
//   /blog/what-is-answer-engine-optimization, /pl/blog/aeo-answer-engine-optimization,
//   /ru/blog/chto-takoe-aeo
//
// 1. AEO service pages EN / PL: a sentence after the one that links «GEO vs SEO»
//    (end of the «AEO vs SEO vs GEO» section). There is no RU AEO page.
// 2. «What is GEO» EN / PL / RU: a sentence after the paragraph on AEO, LLMO and
//    AIO as alternative names (the one that links «GEO vs SEO»).
// 3. «GEO vs SEO» EN / PL / RU: a sentence after the AEO definition paragraph.
// 4. Related articles: «What is AEO» goes first in «What is GEO» and «GEO vs SEO».
//
// One patch per change (a Sanity patch holds one insert). Idempotent; aborts on
// drafts; one transaction.
//
// Usage: node scripts/apply-what-is-aeo-links.cjs           dry run
//        node scripts/apply-what-is-aeo-links.cjs --apply   write

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

const ART = {
  en: { id: "blog-what-is-aeo", url: "/blog/what-is-answer-engine-optimization" },
  pl: { id: "blog-what-is-aeo.pl", url: "/pl/blog/aeo-answer-engine-optimization" },
  ru: { id: "blog-what-is-aeo.ru", url: "/ru/blog/chto-takoe-aeo" },
};
const VS = { en: "/blog/geo-vs-seo", pl: "/pl/blog/geo-vs-seo-roznice", ru: "/ru/blog/geo-vs-seo-raznica" };

const TEXT = [
  { id: "singlepage-answer-engine-optimization", label: "EN AEO page", lang: "en", afterHref: VS.en,
    para: para("What AEO is, how Google and AI tools choose one answer, and how to do it step by step is explained in ", ["what is answer engine optimization", ART.en.url], ".") },
  { id: "singlepage-answer-engine-optimization.pl", label: "PL AEO page", lang: "pl", afterHref: VS.pl,
    para: para("Czym jest AEO, jak Google i narzędzia AI wybierają jedną odpowiedź i jak robić to krok po kroku, wyjaśniam w artykule ", ["AEO: answer engine optimization", ART.pl.url], ".") },
  { id: "blog-what-is-geo", label: "EN What is GEO", lang: "en", afterHref: VS.en, afterText: "A second naming problem",
    para: para("Answer engine optimization on its own — how one answer is chosen and how to become its source — is covered in ", ["what is AEO", ART.en.url], ".") },
  { id: "blog-what-is-geo.pl", label: "PL What is GEO", lang: "pl", afterHref: VS.pl, afterText: "Drugi kłopot z nazwami",
    para: para("Samo answer engine optimization — jak wybierana jest jedna odpowiedź i jak zostać jej źródłem — opisuję w artykule ", ["AEO: answer engine optimization", ART.pl.url], ".") },
  { id: "blog-what-is-geo.ru", label: "RU What is GEO", lang: "ru", afterHref: VS.ru, afterText: "Вторая путаница с названиями",
    para: para("Отдельно об оптимизации под ответы — как выбирается один ответ и как стать его источником — в статье ", ["что такое AEO", ART.ru.url], ".") },
  { id: "blog-geo-vs-seo", label: "EN GEO vs SEO", lang: "en", afterText: "AEO (answer engine optimization)",
    para: para("How answer engines choose one answer, with a live test and a step-by-step method, is in ", ["what is answer engine optimization", ART.en.url], ".") },
  { id: "blog-geo-vs-seo.pl", label: "PL GEO vs SEO", lang: "pl", afterText: "AEO (answer engine optimization)",
    para: para("Jak silniki odpowiedzi wybierają jedną odpowiedź, z testem na żywo i metodą krok po kroku, opisuję w artykule ", ["AEO: answer engine optimization", ART.pl.url], ".") },
  { id: "blog-geo-vs-seo.ru", label: "RU GEO vs SEO", lang: "ru", afterText: "AEO (answer engine optimization)",
    para: para("Как движки ответов выбирают один ответ — с живым тестом и пошаговым методом — в статье ", ["что такое AEO", ART.ru.url], ".") },
];
const RELATED = [["blog-what-is-geo", "en"], ["blog-what-is-geo.pl", "pl"], ["blog-what-is-geo.ru", "ru"], ["blog-geo-vs-seo", "en"], ["blog-geo-vs-seo.pl", "pl"], ["blog-geo-vs-seo.ru", "ru"]];

async function main() {
  const art = await client.fetch(`*[_id in $ids]._id`, { ids: Object.values(ART).map((a) => a.id) });
  if (art.length !== 3) { console.log(`Aborting — article not published in all languages: have ${art.join(", ") || "none"}`); process.exit(1); }
  const touched = [...new Set([...TEXT.map((t) => t.id), ...RELATED.map((r) => r[0])])];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) { console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`); process.exit(1); }
  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, contentBlocks, relatedArticles}`, { ids: touched });
  const get = (id, label) => { const d = docs.find((x) => x._id === id); if (!d) throw new Error(`${label} (${id}) not found`); return d; };
  const patches = [];

  for (const t of TEXT) {
    const doc = get(t.id, t.label);
    const url = ART[t.lang].url;
    if (JSON.stringify(doc.contentBlocks || []).includes(`"href":"${url}"`)) { console.log(`skip  ${t.label}: already links ${url}`); continue; }
    let found = null;
    for (const b of (doc.contentBlocks || []).filter((x) => x._type === "textContent")) {
      const a = (b.content || []).find((x) => x._type === "block" &&
        (!t.afterText || plain(x).startsWith(t.afterText)) &&
        (!t.afterHref || (x.markDefs || []).some((m) => m.href === t.afterHref)));
      if (a) { found = { b, a }; break; }
    }
    if (!found) throw new Error(`${t.label}: anchor paragraph (${[t.afterText, t.afterHref].filter(Boolean).join(" + ")}) not found`);
    console.log(`\n${t.label} — after «${plain(found.a).slice(0, 70)}…»:\n  ${plain(t.para)}`);
    patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.insert("after", `contentBlocks[_key=="${found.b._key}"].content[_key=="${found.a._key}"]`, [t.para]) });
  }

  console.log("");
  for (const [id, lang] of RELATED) {
    const doc = get(id, id);
    const artId = ART[lang].id;
    const refs = doc.relatedArticles || [];
    if (refs.some((x) => x._ref === artId)) { console.log(`skip  related ${id}: already lists the article`); continue; }
    const item = { _key: key(), _type: "reference", _ref: artId };
    console.log(`add   related ${id}: ${artId} first`);
    patches.push({ id: doc._id, rev: doc._rev,
      op: (p) => (refs.length ? p.insert("before", "relatedArticles[0]", [item]) : p.setIfMissing({ relatedArticles: [] }).append("relatedArticles", [item])) });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${patches.length} change(s), nothing written. Add --apply to write.`);
  // One patch per change: a Sanity patch holds a single «insert».
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

main().catch((err) => { console.error(err.message || err); process.exit(1); });
