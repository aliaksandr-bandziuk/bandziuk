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
const APPLY = process.argv.includes("--apply");

// Excludes the 4 documents found mid-task to have been edited (by a different
// author) after creation, losing textContent/faqBlock — held for the owner's
// call rather than patched on top of unexplained content loss.
const IDS = [
  "service-ai-visibility-audit.pl", "service-ai-visibility-audit.ru",
  "service-ai-misinformation-correction.pl", "service-ai-misinformation-correction.ru",
  "service-ai-brand-monitoring.ru",
  "service-ai-search-readiness", "service-ai-search-readiness.pl", "service-ai-search-readiness.ru",
];

async function main() {
  for (const id of IDS) {
    const doc = await client.fetch(`*[_id == $id][0]{contentBlocks}`, { id });
    const before = doc.contentBlocks.map((b) => b._type);
    const filtered = doc.contentBlocks.filter((b) => b._type !== "landingCtaBlock");
    const removed = before.length - filtered.length;
    console.log(`${APPLY ? "PATCHING" : "WOULD PATCH"} ${id}: ${before.length} blocks -> ${filtered.length} (removed ${removed})`);
    if (removed !== 1) throw new Error(`${id}: expected exactly 1 landingCtaBlock, found ${removed}`);
    if (APPLY) {
      await client.patch(id).set({ contentBlocks: filtered }).commit();
    }
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
