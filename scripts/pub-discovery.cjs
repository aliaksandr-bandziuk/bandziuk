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

async function main() {
  console.log("=== blog-seo-cost (category check) ===");
  const seoCost = await client.fetch(`*[_id in ["blog-seo-cost","blog-seo-cost.pl","blog-seo-cost.ru"]]{_id, language, title, "category": category->{_id,title}}`);
  console.log(JSON.stringify(seoCost, null, 1));

  console.log("\n=== Author docs (Aliaksandr Bandziuk) ===");
  const authors = await client.fetch(`*[_type == "author" && title match "Aliaksandr*" ]{_id, language, title}`);
  console.log(JSON.stringify(authors, null, 1));

  console.log("\n=== All published blog dates (en) ===");
  const pubDates = await client.fetch(`*[_type == "blog" && language == "en"]{_id, title, publishedAt} | order(publishedAt asc)`);
  pubDates.forEach(d => console.log(d.publishedAt, "|", d._id, "|", d.title));

  console.log("\n=== relatedArticles targets ===");
  const targets = await client.fetch(`*[_id in ["blog-how-to-choose-developer","blog-how-to-choose-developer.pl","blog-how-to-choose-developer.ru","blog-website-no-leads","blog-website-no-leads.pl","blog-website-no-leads.ru","blog-seo-cost","blog-seo-cost.pl","blog-seo-cost.ru"]]{_id, language, title, "relatedArticles": relatedArticles[]->{_id,title}}`);
  console.log(JSON.stringify(targets, null, 1));

  console.log("\n=== serviceOffered targets ===");
  const seoStrategy = await client.fetch(`*[_id in ["42a469a6-28f3-4015-8b88-414c8eb3d4fa","singlepage-web-development-warsaw","singlepage-web-development-warsaw.pl","singlepage-web-development-warsaw.ru"]]{_id, language, title}`);
  console.log(JSON.stringify(seoStrategy, null, 1));

  console.log("\n=== SEO Strategy service page locale variants (need pl/ru ids) ===");
  const meta = await client.fetch(`*[_type == "translation.metadata" && documentId == "42a469a6-28f3-4015-8b88-414c8eb3d4fa"][0]`);
  console.log(JSON.stringify(meta, null, 1));

  console.log("\n=== all categories ===");
  const cats = await client.fetch(`*[_type == "category"]{_id, language, title}`);
  console.log(JSON.stringify(cats, null, 1));
}
main().catch((e) => { console.error(e); process.exit(1); });
