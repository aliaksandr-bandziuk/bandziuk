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
  console.log("=== schema type names containing 'author' ===");
  const authorDocs = await client.fetch(`*[_type == "author"]{_id, language, name, title}`);
  console.log(JSON.stringify(authorDocs, null, 1));

  console.log("\n=== check what field an existing article uses for author ===");
  const sample = await client.fetch(`*[_id == "blog-seo-cost"]{"author": author->{_id, language, name, title}}`);
  console.log(JSON.stringify(sample, null, 1));

  console.log("\n=== all published dates, all locales (deduped) ===");
  const allDates = await client.fetch(`*[_type == "blog"]{publishedAt} | order(publishedAt asc)`);
  const uniqueDates = [...new Set(allDates.map(d => d.publishedAt))].sort();
  uniqueDates.forEach(d => console.log(d));
}
main().catch((e) => { console.error(e); process.exit(1); });
