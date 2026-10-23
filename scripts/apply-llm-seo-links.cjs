// scripts/apply-llm-seo-links.cjs
//
// Run after the «LLM SEO» article is published and deployed:
//   /blog/llm-seo, /pl/blog/pozycjonowanie-w-llm, /ru/blog/llm-seo
//
// 1. LLM SEO service pages EN / PL / RU: a sentence at the end of the section
//    «What LLM SEO is: training data and live search» (and its PL / RU twins).
// 2. «What is GEO» EN / PL / RU: a sentence after the one that links «What is AEO».
// 3. Related articles: «LLM SEO» goes first in «What is GEO», «What is AEO» and llms.txt.
//
// A section ends at the next H2 in the same text block, or at the block's end.
// One patch per change (a Sanity patch holds one insert). Idempotent; aborts on
// drafts; one transaction.
//
// Usage: node scripts/apply-llm-seo-links.cjs           dry run
//        node scripts/apply-llm-seo-links.cjs --apply   write

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
const norm = (t) => t.replace(/[‘’]/g, "'").trim().toLowerCase();
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
  en: { id: "blog-llm-seo", url: "/blog/llm-seo" },
  pl: { id: "blog-llm-seo.pl", url: "/pl/blog/pozycjonowanie-w-llm" },
  ru: { id: "blog-llm-seo.ru", url: "/ru/blog/llm-seo" },
};
const AEO = { en: "/blog/what-is-answer-engine-optimization", pl: "/pl/blog/aeo-answer-engine-optimization", ru: "/ru/blog/chto-takoe-aeo" };

const TEXT = [
  { id: "singlepage-llm-seo-services", label: "EN LLM SEO page", lang: "en", section: "What LLM SEO is",
    para: para("A longer guide — where each model searches the web, why most AI crawlers ignore JavaScript, and one question tested in four assistants — is in ", ["LLM SEO: how to optimize your website for ChatGPT, Claude, Gemini and Perplexity", ART.en.url], ".") },
  { id: "singlepage-llm-seo-services.pl", label: "PL LLM SEO page", lang: "pl", section: "Czym jest LLM SEO",
    para: para("Szerszy poradnik — gdzie szuka każdy model, dlaczego większość robotów AI ignoruje JavaScript i jedno pytanie sprawdzone w czterech asystentach — jest w artykule ", ["pozycjonowanie w LLM", ART.pl.url], ".") },
  { id: "singlepage-llm-seo-services.ru", label: "RU LLM SEO page", lang: "ru", section: "Что такое LLM SEO",
    para: para("Подробный разбор — где ищет каждая модель, почему большинство ИИ-роботов не выполняют JavaScript и один вопрос, проверенный в четырёх ассистентах, — в статье ", ["LLM SEO: как оптимизировать сайт под ChatGPT, Claude, Gemini и Perplexity", ART.ru.url], ".") },
  { id: "blog-what-is-geo", label: "EN What is GEO", lang: "en", afterHref: AEO.en,
    para: para("The same work seen from the models' side — training data, each model's search index and its crawler — is in ", ["LLM SEO", ART.en.url], ".") },
  { id: "blog-what-is-geo.pl", label: "PL What is GEO", lang: "pl", afterHref: AEO.pl,
    para: para("Ta sama praca od strony samych modeli — dane treningowe, indeks wyszukiwania i robot każdego modelu — opisana jest w artykule ", ["pozycjonowanie w LLM", ART.pl.url], ".") },
  { id: "blog-what-is-geo.ru", label: "RU What is GEO", lang: "ru", afterHref: AEO.ru,
    para: para("Та же работа со стороны самих моделей — обучающие данные, поисковый индекс и робот каждой модели — в статье ", ["LLM SEO", ART.ru.url], ".") },
];
const RELATED = [["blog-what-is-geo", "en"], ["blog-what-is-geo.pl", "pl"], ["blog-what-is-geo.ru", "ru"], ["blog-what-is-aeo", "en"], ["blog-what-is-aeo.pl", "pl"], ["blog-what-is-aeo.ru", "ru"], ["blog-llms-txt", "en"], ["blog-llms-txt.pl", "pl"], ["blog-llms-txt.ru", "ru"]];

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
      const c = b.content || [];
      if (t.section) {
        const i = c.findIndex((x) => x.style === "h2" && norm(plain(x)).startsWith(norm(t.section)));
        if (i === -1) continue;
        let j = c.findIndex((x, k) => k > i && x.style === "h2");
        if (j === -1) j = c.length;
        found = { b, a: c[j - 1], where: `end of «${plain(c[i])}»` };
      } else {
        const a = c.find((x) => x._type === "block" && (x.markDefs || []).some((m) => m.href === t.afterHref));
        if (a) found = { b, a, where: "after the link to What is AEO" };
      }
      if (found) break;
    }
    if (!found) throw new Error(`${t.label}: anchor (${t.section || t.afterHref}) not found`);
    console.log(`\n${t.label} — ${found.where}, after «${plain(found.a).slice(0, 60)}…»:\n  ${plain(t.para)}`);
    patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.insert("after", `contentBlocks[_key=="${found.b._key}"].content[_key=="${found.a._key}"]`, [t.para]) });
  }

  console.log("");
  for (const [id, lang] of RELATED) {
    const doc = docs.find((d) => d._id === id);
    if (!doc) { console.log(`note: ${id} not found`); continue; }
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
