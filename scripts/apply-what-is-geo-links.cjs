// scripts/apply-what-is-geo-links.cjs
//
// Run after the «What is GEO» article is published and deployed:
//   /blog/what-is-generative-engine-optimization, /pl/blog/geo-co-to-jest,
//   /ru/blog/chto-takoe-geo
//
// 1. EN GEO hub: title → «Generative Engine Optimization Services (GEO) &
//    AI-Ready SEO». The bare query «generative engine optimization» now belongs
//    to the article; the hub keeps services / agency / company. The meta title
//    already says «Services» and stays.
// 2. GEO hubs EN / PL / RU: one sentence linking the article, right after the
//    sentence that links the «GEO vs SEO» article.
// 3. «GEO vs SEO» EN / PL / RU:
//    - one sentence linking the article after the GEO definition paragraph;
//    - the usage paragraph («The scale is no longer a niche…») gets 2026
//      figures: AI Mode > 1 bn monthly users and Gemini 950 m (Alphabet,
//      22 Jul 2026), ChatGPT > 900 m weekly users (OpenAI via TechCrunch,
//      27 Feb 2026). It replaced 2025 figures.
// 4. Related articles: the new article goes first in «GEO vs SEO», the
//    141-answer study and llms.txt, in each language.
//
// Idempotent; aborts on drafts; one transaction.
//
// Usage: node scripts/apply-what-is-geo-links.cjs           dry run
//        node scripts/apply-what-is-geo-links.cjs --apply   write

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
const norm = (t) => t.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').trim();
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
  en: { id: "blog-what-is-geo", url: "/blog/what-is-generative-engine-optimization" },
  pl: { id: "blog-what-is-geo.pl", url: "/pl/blog/geo-co-to-jest" },
  ru: { id: "blog-what-is-geo.ru", url: "/ru/blog/chto-takoe-geo" },
};
const VS = { en: "/blog/geo-vs-seo", pl: "/pl/blog/geo-vs-seo-roznice", ru: "/ru/blog/geo-vs-seo-raznica" };

const HUB_ID = "831dc620-2863-4d55-baa0-aa874a7374ac";
const HUB_OLD = "Generative Engine Optimization (GEO) and AI-Ready SEO";
const HUB_NEW = "Generative Engine Optimization Services (GEO) & AI-Ready SEO";

// inserted after the paragraph whose links include `afterHref`, or whose text starts with `afterText`
const TEXT = [
  { id: HUB_ID, label: "EN GEO hub", lang: "en", afterHref: VS.en,
    para: para("What generative engine optimization is, where the term comes from and how AI engines choose their sources is explained step by step in ", ["what is generative engine optimization (GEO)", ART.en.url], ".") },
  { id: "3a759a28-4135-4731-a318-cffee1b512f0", label: "PL GEO hub", lang: "pl", afterHref: VS.pl,
    para: para("Czym jest generative engine optimization, skąd pochodzi termin i jak silniki AI wybierają źródła, wyjaśniam krok po kroku w artykule ", ["GEO co to jest", ART.pl.url], ".") },
  { id: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71", label: "RU GEO hub", lang: "ru", afterHref: VS.ru,
    para: para("Что такое генеративная оптимизация, откуда взялся термин и как ИИ-движки выбирают источники, я по шагам разбираю в статье ", ["что такое GEO", ART.ru.url], ".") },
  { id: "blog-geo-vs-seo", label: "EN GEO vs SEO", lang: "en", afterText: "GEO (generative engine optimization)",
    para: para("The full definition — where the term comes from, how AI engines pick their sources and what the research says works — is in ", ["what is generative engine optimization", ART.en.url], ".") },
  { id: "blog-geo-vs-seo.pl", label: "PL GEO vs SEO", lang: "pl", afterText: "GEO (generative engine optimization)",
    para: para("Pełna definicja — skąd termin, jak silniki AI wybierają źródła i co według badań działa — jest w artykule ", ["GEO co to jest", ART.pl.url], ".") },
  { id: "blog-geo-vs-seo.ru", label: "RU GEO vs SEO", lang: "ru", afterText: "GEO (generative engine optimization)",
    para: para("Полное определение — откуда взялся термин, как ИИ-движки выбирают источники и что работает по данным исследований — в статье ", ["что такое GEO", ART.ru.url], ".") },
];

const STATS = [
  { id: "blog-geo-vs-seo", label: "EN GEO vs SEO", start: "The scale is no longer a niche.",
    text: "The scale is no longer a niche. In July 2026 Alphabet reported more than 1 billion monthly users of AI Mode, Google's conversational search, and 950 million monthly users of the Gemini app; in February 2026 OpenAI said ChatGPT had more than 900 million weekly users." },
  { id: "blog-geo-vs-seo.pl", label: "PL GEO vs SEO", start: "Skala nie jest już niszowa.",
    text: "Skala nie jest już niszowa. W lipcu 2026 roku Alphabet podał, że z trybu AI w Google korzysta ponad miliard osób miesięcznie, a z aplikacji Gemini 950 milionów; w lutym 2026 roku OpenAI poinformował, że ChatGPT ma ponad 900 milionów użytkowników tygodniowo." },
  { id: "blog-geo-vs-seo.ru", label: "RU GEO vs SEO", start: "Масштаб уже не нишевый.",
    text: "Масштаб уже не нишевый. В июле 2026 года Alphabet сообщил, что режимом ИИ в Google пользуются больше миллиарда человек в месяц, а приложением Gemini — 950 миллионов; в феврале 2026 года OpenAI заявила, что у ChatGPT больше 900 миллионов пользователей в неделю." },
];

const RELATED_EN = ["blog-geo-vs-seo", "blog-ai-assistant-study", "blog-llms-txt"];

async function main() {
  const art = await client.fetch(`*[_id in $ids]._id`, { ids: Object.values(ART).map((a) => a.id) });
  if (art.length !== 3) {
    console.log(`Aborting — article not published in all languages: have ${art.join(", ") || "none"}`);
    process.exit(1);
  }
  const rel = await client.fetch(
    `*[_id in $ids]{ _id, "tr": *[_type == "translation.metadata" && references(^._id)][0].translations[]{ "lang": _key, "id": value._ref } }`,
    { ids: RELATED_EN },
  );
  const relTargets = [];
  for (const r of rel) for (const t of r.tr || []) if (ART[t.lang]) relTargets.push({ id: t.id, lang: t.lang });

  const touched = [...new Set([HUB_ID, ...TEXT.map((t) => t.id), ...STATS.map((s) => s.id), ...relTargets.map((r) => r.id)])];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) {
    console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`);
    process.exit(1);
  }
  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, title, contentBlocks, relatedArticles}`, { ids: touched });
  const get = (id, label) => { const d = docs.find((x) => x._id === id); if (!d) throw new Error(`${label} (${id}) not found`); return d; };
  const patches = [];

  // 1. hub title
  const hub = get(HUB_ID, "EN GEO hub");
  if (hub.title === HUB_NEW) console.log("skip  EN GEO hub title: already renamed");
  else if (hub.title !== HUB_OLD) throw new Error(`EN GEO hub title is «${hub.title}», expected «${HUB_OLD}» — check by hand`);
  else {
    console.log(`title EN GEO hub: «${HUB_OLD}» → «${HUB_NEW}»`);
    patches.push({ id: hub._id, rev: hub._rev, op: (p) => p.set({ title: HUB_NEW }) });
  }

  // 2–3a. link sentences
  for (const t of TEXT) {
    const doc = get(t.id, t.label);
    const url = ART[t.lang].url;
    if (JSON.stringify(doc.contentBlocks || []).includes(`"href":"${url}"`)) { console.log(`skip  ${t.label}: already links ${url}`); continue; }
    let found = null;
    for (const b of (doc.contentBlocks || []).filter((x) => x._type === "textContent")) {
      const a = (b.content || []).find((x) =>
        t.afterHref ? (x.markDefs || []).some((m) => m.href === t.afterHref) : norm(plain(x)).startsWith(norm(t.afterText)));
      if (a) { found = { b, a }; break; }
    }
    if (!found) throw new Error(`${t.label}: anchor paragraph (${t.afterHref || t.afterText}) not found`);
    console.log(`\n${t.label} — after «${plain(found.a).slice(0, 70)}…»:\n  ${plain(t.para)}`);
    patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.insert("after", `contentBlocks[_key=="${found.b._key}"].content[_key=="${found.a._key}"]`, [t.para]) });
  }

  // 3b. usage figures
  console.log("");
  for (const s of STATS) {
    const doc = get(s.id, s.label);
    let found = null;
    for (const b of (doc.contentBlocks || []).filter((x) => x._type === "textContent")) {
      const a = (b.content || []).find((x) => plain(x).startsWith(s.start));
      if (a) { found = { b, a }; break; }
    }
    if (!found) throw new Error(`${s.label}: paragraph «${s.start}…» not found`);
    if (plain(found.a) === s.text) { console.log(`skip  ${s.label} figures: already updated`); continue; }
    if ((found.a.markDefs || []).length) throw new Error(`${s.label}: the figures paragraph has links — update it by hand`);
    console.log(`figs  ${s.label}:\n  was: ${plain(found.a)}\n  now: ${s.text}`);
    const base = `contentBlocks[_key=="${found.b._key}"].content[_key=="${found.a._key}"]`;
    patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.set({ [`${base}.children`]: [{ _type: "span", _key: key(), text: s.text, marks: [] }] }) });
  }

  // 4. related
  console.log("");
  for (const r of relTargets) {
    const doc = docs.find((d) => d._id === r.id);
    if (!doc) { console.log(`note: ${r.id} not found`); continue; }
    const artId = ART[r.lang].id;
    const refs = doc.relatedArticles || [];
    if (refs.some((x) => x._ref === artId)) { console.log(`skip  related ${r.id}: already lists the article`); continue; }
    const item = { _key: key(), _type: "reference", _ref: artId };
    console.log(`add   related ${r.id}: ${artId} first`);
    patches.push({ id: doc._id, rev: doc._rev,
      op: (p) => (refs.length ? p.insert("before", "relatedArticles[0]", [item]) : p.setIfMissing({ relatedArticles: [] }).append("relatedArticles", [item])) });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${patches.length} change(s), nothing written. Add --apply to write.`);
  const byDoc = new Map();
  for (const p of patches) {
    if (!byDoc.has(p.id)) byDoc.set(p.id, { rev: p.rev, ops: [] });
    byDoc.get(p.id).ops.push(p.op);
  }
  const tx = client.transaction();
  for (const [id, { rev, ops }] of byDoc) tx.patch(id, (q) => ops.reduce((acc, op) => op(acc), q.ifRevisionId(rev)));
  await tx.commit();
  console.log(`\nWritten: ${[...byDoc.keys()].join(", ")}`);
  console.log("The webhook revalidates these pages.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
