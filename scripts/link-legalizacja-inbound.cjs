// scripts/link-legalizacja-inbound.cjs
//
// Adds inbound links to the legalisation article: appends it to the
// relatedArticles of the existing posts it belongs next to, in each language.
// Without inbound links a new URL is an orphan, and an orphan is what Google
// never crawls — the lesson from /pl/o-mnie in drafts/gsc-24-09-analysis.md.
//
// relatedArticles is the only structural link field on this site: the blog
// schema has it and the blog post page renders it. singlepage has no such
// field, so a link from a service page would have to be a sentence inside its
// body — that is a copy change to a live page and is not done here.
//
// Run AFTER the three articles are published: these are strong references, and
// a strong reference to a document that exists only as a draft is rejected.
// The script is idempotent — a second run changes nothing.
//
// Usage: node scripts/link-legalizacja-inbound.cjs [--dry-run]

const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const DRY = process.argv.includes("--dry-run");
const ARTICLE = { en: "blog-legalizacja-cudzoziemcy", pl: "blog-legalizacja-cudzoziemcy.pl", ru: "blog-legalizacja-cudzoziemcy.ru" };

// The posts that gain a link to the new article. Chosen for topical closeness,
// so the link makes sense to a reader and not only to a crawler.
const INBOUND = {
  pl: [
    "d7c4dc47-ce4c-4324-b334-46300222b521", // Dlaczego prawnikowi potrzebna jest strona internetowa
    "blog-agency-website-cost.pl",          // Ile kosztuje strona dla agencji nieruchomości
    "blog-ai-assistant-study.pl",           // Pozycjonowanie w AI — badanie
  ],
  ru: [
    "blog-ai-assistant-study.ru",           // Исследование ответов ИИ-ассистентов
    "blog-agency-website-cost.ru",          // Сколько стоит сайт агентства недвижимости
    "2f9b4f91-19e4-41c0-8208-9ec3a7cd1856", // Кейс сайта агентства недвижимости на Кипре
  ],
  en: [
    "53f4a797-8b17-4427-9b13-74b8c4db71e0", // Why Every Lawyer Needs a Website
    "blog-agency-website-cost",             // Real estate agency website cost
    "blog-ai-assistant-study",              // AI assistant recommendations study
  ],
};

(async () => {
  // 1. the article must be published in every language
  const published = await client.fetch("*[_id in $ids]._id", { ids: Object.values(ARTICLE) });
  const missing = Object.entries(ARTICLE).filter(([, id]) => !published.includes(id));
  if (missing.length) {
    console.error(`Not published yet: ${missing.map(([l, id]) => `${l} (${id})`).join(", ")}`);
    console.error("Publish all three in Studio first. Nothing was written.");
    process.exitCode = 1;
    return;
  }

  let added = 0, already = 0;
  for (const [lang, targets] of Object.entries(INBOUND)) {
    const ref = ARTICLE[lang];
    console.log(`\n=== ${lang.toUpperCase()} → ${ref}`);
    for (const target of targets) {
      const doc = await client.fetch("*[_id == $id][0]{_id,title,relatedArticles}", { id: target });
      if (!doc) { console.log(`   ! missing target: ${target}`); continue; }
      const has = (doc.relatedArticles || []).some((r) => r._ref === ref);
      if (has) { already++; console.log(`   = already linked: ${doc.title.slice(0, 54)}`); continue; }
      if (DRY) { added++; console.log(`   + would link from: ${doc.title.slice(0, 54)}`); continue; }
      await client
        .patch(target)
        .setIfMissing({ relatedArticles: [] })
        .append("relatedArticles", [{ _type: "reference", _key: ref, _ref: ref }])
        .commit();
      added++;
      console.log(`   + linked from: ${doc.title.slice(0, 54)}`);
    }
  }

  console.log(`\n${DRY ? "Would add" : "Added"} ${added} inbound links (${already} already there).`);
  if (!DRY && added) {
    console.log("These are edits to published documents, so they go live on the next revalidation.");
    console.log("The blog listing and the category page link the article on their own — no patch needed for those.");
  }
})().catch((e) => { console.error("\n" + (e.message || e)); process.exitCode = 1; });
