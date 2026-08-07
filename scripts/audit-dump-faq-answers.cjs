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
const IDS = process.argv.slice(2);
async function main() {
  for (const id of IDS) {
    const doc = await client.fetch(`*[_id == $id][0]{title, contentBlocks}`, { id });
    const faq = (doc.contentBlocks || []).find(b => b._type === "faqBlock");
    console.log(`\n##### ${doc.title} #####`);
    console.log(JSON.stringify(faq, null, 1).slice(0, 4000));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
