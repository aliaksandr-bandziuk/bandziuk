const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const CLUSTER_ID_BASES = [
  "blog-ai-brand-audit",
  "blog-chatgpt-recommendations",
  "blog-ai-distorts-marketing-message",
];

async function main() {
  console.log("projectId:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, "dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);

  // --- TASK 3a: direct id lookups for the three known cluster articles, all locale variants ---
  console.log("\n=== TASK 3a: direct _id lookups for known cluster articles ===");
  const idCandidates = [];
  for (const base of CLUSTER_ID_BASES) {
    idCandidates.push(base, `${base}.pl`, `${base}.ru`, `drafts.${base}`, `drafts.${base}.pl`, `drafts.${base}.ru`);
  }
  const directDocs = await client.fetch(
    `*[_id in $ids]{_id, _type, title, language, publishedAt, "categoryTitle": category->title, "categoryId": category->_id, "slug": slug}`,
    { ids: idCandidates }
  );
  console.log(JSON.stringify(directDocs, null, 1));

  // --- TASK 1: all en blog docs with category, to identify the full AI cluster ---
  console.log("\n=== TASK 1: all EN blog docs with category ===");
  const allEnBlogs = await client.fetch(
    `*[_type == "blog" && language == "en"]{_id, title, publishedAt, "categoryId": category->_id, "categoryTitle": category->title, "slugEn": slug.en.current}`
  );
  console.log(JSON.stringify(allEnBlogs, null, 1));

  // Identify category ids/titles matching "AI"
  const aiCategoryTitles = [...new Set(allEnBlogs.filter(b => b.categoryTitle && /ai/i.test(b.categoryTitle)).map(b => b.categoryTitle))];
  console.log("\n--- Distinct category titles containing 'AI' among EN blogs ---");
  console.log(JSON.stringify(aiCategoryTitles, null, 1));

  const clusterCategoryIds = [...new Set(allEnBlogs.filter(b => b.categoryTitle && /ai/i.test(b.categoryTitle)).map(b => b.categoryId))].filter(Boolean);
  console.log("\n--- Category _ids used by those EN blogs ---");
  console.log(JSON.stringify(clusterCategoryIds, null, 1));

  if (clusterCategoryIds.length) {
    console.log("\n--- Full category documents (all locales, by base id, matching _id or _id minus .pl/.ru) ---");
    const baseIds = clusterCategoryIds.map((id) => id.replace(/\.(pl|ru)$/, ""));
    const allLocaleCatIds = [];
    for (const b of baseIds) allLocaleCatIds.push(b, `${b}.pl`, `${b}.ru`, `drafts.${b}`, `drafts.${b}.pl`, `drafts.${b}.ru`);
    const catDocs = await client.fetch(`*[_id in $ids]{_id, _type, title, language, "slug": slug}`, { ids: allLocaleCatIds });
    console.log(JSON.stringify(catDocs, null, 1));

    console.log("\n--- ALL blog docs (any language) referencing these category ids ---");
    const clusterArticles = await client.fetch(
      `*[_type == "blog" && category._ref in $ids]{_id, title, language, publishedAt, "categoryId": category->_id, "categoryTitle": category->title}`,
      { ids: clusterCategoryIds }
    );
    console.log(JSON.stringify(clusterArticles, null, 1));
  }

  // --- TASK 2: all blog docs sorted by publishedAt desc ---
  console.log("\n=== TASK 2: ALL blog docs (language == en) sorted by publishedAt desc ===");
  const sortedBlogs = await client.fetch(
    `*[_type == "blog" && language == "en"] | order(publishedAt desc) {_id, title, publishedAt}`
  );
  console.log(JSON.stringify(sortedBlogs, null, 1));

  const dates = sortedBlogs.map(b => (b.publishedAt || "").slice(0, 10)).filter(Boolean);
  const distinctDates = [...new Set(dates)].sort().reverse();
  console.log("\n--- Most recent publishedAt ---");
  console.log(sortedBlogs[0] ? sortedBlogs[0].publishedAt : "none");
  console.log("\n--- Distinct dates with published articles (desc) ---");
  console.log(JSON.stringify(distinctDates, null, 1));

  // --- TASK 3b: service pages by title match ---
  console.log("\n=== TASK 3b: singlepage docs matching AI-Ready SEO / GEO or SEO Optimization ===");
  const servicePages = await client.fetch(
    `*[_type == "singlepage" && (
      seo.metaTitle match "*AI*" || seo.metaTitle match "*SEO Optimization*" ||
      pageBuilder[0].headline match "*AI*" || pageBuilder[0].headline match "*SEO Optimization*" ||
      pageBuilder[0].headline match "*GEO*"
    )]{_id, language, pageType, "slugEn": slug.en.current, "metaTitle": seo.metaTitle, "h1": pageBuilder[0].headline}`
  );
  console.log(JSON.stringify(servicePages, null, 1));

  console.log("\n=== TASK 3b (broader): ALL service-type singlepages, en, for manual scan ===");
  const allServicesEn = await client.fetch(
    `*[_type == "singlepage" && pageType == "service" && language == "en"]{_id, "slugEn": slug.en.current, "metaTitle": seo.metaTitle, "h1": pageBuilder[0].headline}`
  );
  console.log(JSON.stringify(allServicesEn, null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
