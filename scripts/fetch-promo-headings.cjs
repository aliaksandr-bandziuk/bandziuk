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

const MARKETS = ["germany", "uk", "usa", "france", "italy", "switzerland", "netherlands", "ireland", "australia", "baltics"];

async function main() {
  const ids = [];
  for (const m of MARKETS) {
    ids.push(`singlepage-seo-${m}`, `singlepage-seo-${m}.pl`, `singlepage-seo-${m}.ru`);
  }

  const query = `*[_id in $ids]{
    _id,
    language,
    title,
    "metaTitle": seo.metaTitle,
    "gridTitle": contentBlocks[_type == "gridBlock"][0].title,
    "stepsTitle": contentBlocks[_type == "stepsBlock"][0].title,
    "faqTitle": contentBlocks[_type == "faqBlock"][0].faq.title
  }`;

  const docs = await client.fetch(query, { ids });
  console.log(JSON.stringify(docs, null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
