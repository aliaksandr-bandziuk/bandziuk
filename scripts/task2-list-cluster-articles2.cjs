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
    const docs = await client.fetch(`*[_id in [$id, $id+"-pl", $id+"-ru", $id+"-en"]]{_id, language, title, "slug": slug}`, { id });
    console.log(`\n${id}:`);
    docs.forEach((d) => console.log(" ", d._id, "|", d.language, "|", JSON.stringify(d.slug)));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
