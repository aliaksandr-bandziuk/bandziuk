const fs = require("fs");
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

const HUB_IDS = {
  en: "4de72361-ec2a-469d-8b56-813ddbf3adca",
  pl: "631d883e-6f87-4346-9c6d-48b596c2daa7",
  ru: "3774c0a1-8857-4149-be24-9a357af4be00",
};

async function main() {
  const out = {};
  for (const [lang, id] of Object.entries(HUB_IDS)) {
    const doc = await client.fetch(`*[_id == $id][0]{title, "slug": slug[$lang].current, contentBlocks}`, { id, lang });
    const groups = (doc.contentBlocks || [])
      .filter((b) => b._type === "relatedServicesBlock")
      .map((b) => ({ title: b.title, itemIds: (b.items || []).map((i) => i._ref) }));
    out[lang] = { hubId: id, hubSlug: doc.slug, groups };
  }
  fs.writeFileSync(process.argv[2], JSON.stringify(out, null, 1));
  console.log(JSON.stringify(out, null, 1));
}
main().catch((e) => { console.error(e); process.exit(1); });
