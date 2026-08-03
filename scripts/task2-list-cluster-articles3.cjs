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

const IDS = ["blog-ai-brand-audit", "blog-correct-ai-misinformation", "blog-ai-misattribution-competitor", "blog-ai-brand-monitoring"];

async function main() {
  for (const id of IDS) {
    const meta = await client.fetch(`*[_type == "translation.metadata" && documentId == $id][0]{translations[]{_key, "id": value._ref}}`, { id });
    console.log(`\n${id}: metaFound=${!!meta}`);
    if (!meta) continue;
    for (const t of meta.translations) {
      const doc = await client.fetch(`*[_id == $id][0]{_id, language, title, "slug": slug}`, { id: t.id });
      console.log(" ", t._key, "->", t.id, doc ? JSON.stringify(doc.slug) : "NOT FOUND", doc ? doc.title : "");
    }
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
