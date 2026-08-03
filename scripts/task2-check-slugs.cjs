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

const GEO_IDS = {
  en: "831dc620-2863-4d55-baa0-aa874a7374ac",
  pl: "3a759a28-4135-4731-a318-cffee1b512f0",
  ru: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71",
};

async function main() {
  for (const [lang, id] of Object.entries(GEO_IDS)) {
    const doc = await client.fetch(`*[_id == $id][0]{"slug": slug, "parent": parentPage->{"slug": slug, "parent": parentPage->slug}}`, { id });
    console.log(lang, JSON.stringify(doc));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
