// scripts/list-landings.cjs — one-off inventory of all landing singlepages
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
  const docs = await client.fetch(`*[_type == "singlepage" && pageType == "page" && language == "en"]{ _id, title, "slug": slug.en.current, previewImage }`);
  docs.sort((a, b) => a._id.localeCompare(b._id));
  console.log(JSON.stringify(docs, null, 2));
  console.log(`\nTotal: ${docs.length}`);
}
main().catch((e) => { console.error(e); process.exit(1); });
