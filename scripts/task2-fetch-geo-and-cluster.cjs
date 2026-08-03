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

const ARTICLE_ID_PATTERNS = [
  "blog-ai-brand-audit",
  "blog-correct-ai-misinformation",
  "blog-ai-misattribution-competitor",
  "blog-ai-brand-monitoring",
];

async function main() {
  for (const [lang, id] of Object.entries(GEO_IDS)) {
    const doc = await client.fetch(`*[_id == $id][0]{_id, contentBlocks}`, { id });
    console.log(`\n=== GEO ${lang} (${id}) ===`);
    doc.contentBlocks.forEach((b, i) => {
      console.log(`[${i}] _key=${b._key} _type=${b._type}`);
      if (b._type === "textContent") {
        b.content.forEach((c, j) => {
          if (c._type === "block") {
            const text = c.children.map((s) => s.text).join("");
            console.log(`    ${j} (${c.style}): ${text.slice(0, 100)}`);
          }
        });
      }
    });
  }

  console.log(`\n\n=== Cluster article slugs ===`);
  for (const pattern of ARTICLE_ID_PATTERNS) {
    const docs = await client.fetch(`*[_id in [$en,$pl,$ru]]{_id, language, "slug": slug}`, {
      en: `${pattern}-en`,
      pl: `${pattern}-pl`,
      ru: `${pattern}-ru`,
    });
    console.log(pattern, JSON.stringify(docs));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
