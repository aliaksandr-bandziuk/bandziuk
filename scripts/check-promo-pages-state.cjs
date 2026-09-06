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

const SLUGS_EN = [
  "seo-for-german-market",
  "seo-for-uk-market",
  "seo-for-us-market",
  "seo-for-french-market",
  "seo-for-italian-market",
  "seo-for-swiss-market",
  "seo-for-dutch-market",
  "seo-for-irish-market",
  "seo-for-australian-market",
  "seo-for-baltic-markets",
];

async function main() {
  console.log("projectId:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, "dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);

  const docs = await client.fetch(
    `*[_type == "singlepage" && slug.en.current in $slugs]{_id, language, "slug": slug.en.current, "metaTitle": seo.metaTitle, "h1": pageBuilder[0].headline}`,
    { slugs: SLUGS_EN }
  );
  console.log(JSON.stringify(docs, null, 1));

  const all = await client.fetch(
    `*[_type == "singlepage" && (slug.en.current match "seo-for-*" || slug.en.current match "seo-*market*")]{_id, language, "slug": slug.en.current}`
  );
  console.log("\n--- broader match ---");
  console.log(JSON.stringify(all, null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
