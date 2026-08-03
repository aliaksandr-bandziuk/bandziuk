// scripts/inventory-step0.cjs
// Site-wide internal linking pass — Step 0 inventory.
const fs = require("fs");
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

const SLUG_PROJ = `select(language=='en'=>slug.en.current, language=='pl'=>slug.pl.current, language=='ru'=>slug.ru.current)`;

async function main() {
  const blogs = await client.fetch(`
    *[_type == "blog" && defined(slug)] | order(language asc, publishedAt asc) {
      _id,
      _createdAt,
      language,
      title,
      "slug": ${SLUG_PROJ},
      publishedAt,
      "category": category->title,
      excerpt,
      "serviceOffered": serviceOffered[]->{_id, _type, title, "slug": ${SLUG_PROJ}},
      "relatedArticles": relatedArticles[]->{_id, _type, title, "slug": ${SLUG_PROJ}},
      contentBlocks
    }
  `);

  const singlepages = await client.fetch(`
    *[_type == "singlepage" && defined(slug)] | order(language asc, pageType asc, title asc) {
      _id,
      _createdAt,
      language,
      title,
      "slug": ${SLUG_PROJ},
      pageType,
      "parentPage": parentPage->{_id, title, "slug": ${SLUG_PROJ}},
      contentBlocks
    }
  `);

  console.log(`\n=== COUNTS ===`);
  console.log(`blog docs: ${blogs.length}`);
  console.log(`singlepage docs: ${singlepages.length}`);
  console.log(`blogs with null slug: ${blogs.filter((b) => !b.slug).length}`);
  console.log(`singlepages with null slug: ${singlepages.filter((d) => !d.slug).length}`);
  console.log(`  by language: ${JSON.stringify(
    singlepages.reduce((acc, d) => { acc[d.language] = (acc[d.language] || 0) + 1; return acc; }, {})
  )}`);
  console.log(`  by pageType: ${JSON.stringify(
    singlepages.reduce((acc, d) => { acc[d.pageType] = (acc[d.pageType] || 0) + 1; return acc; }, {})
  )}`);

  fs.writeFileSync(path.resolve(__dirname, "../drafts/_inventory-blogs.json"), JSON.stringify(blogs, null, 2));
  fs.writeFileSync(path.resolve(__dirname, "../drafts/_inventory-singlepages.json"), JSON.stringify(singlepages, null, 2));
  console.log("\nWritten to drafts/_inventory-blogs.json and drafts/_inventory-singlepages.json");
}

main().catch((err) => { console.error(err); process.exit(1); });
