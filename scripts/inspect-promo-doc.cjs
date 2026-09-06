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
  const doc = await client.getDocument("singlepage-seo-germany");
  console.log(JSON.stringify(doc, null, 2));
}
main().catch((e) => { console.error(e); process.exit(1); });
