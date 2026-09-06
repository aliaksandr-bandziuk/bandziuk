const path = require("path");
const fs = require("fs");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const diff = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../drafts/promo-headings-diff.json"), "utf8"));

async function patchDoc(id, newVals) {
  const blocks = await client.fetch(`*[_id == $id][0].contentBlocks[]{_key, _type}`, { id });
  const grid = blocks.find((b) => b._type === "gridBlock");
  const steps = blocks.find((b) => b._type === "stepsBlock");
  const faq = blocks.find((b) => b._type === "faqBlock");
  if (!grid || !steps || !faq) throw new Error(`${id}: missing expected block types, found ${JSON.stringify(blocks)}`);

  const patch = {
    title: newVals.title,
    "seo.metaTitle": newVals.metaTitle,
    [`contentBlocks[_key=="${grid._key}"].title`]: newVals.gridTitle,
    [`contentBlocks[_key=="${steps._key}"].title`]: newVals.stepsTitle,
    [`contentBlocks[_key=="${faq._key}"].faq.title`]: newVals.faqTitle,
  };

  await client.patch(id).set(patch).commit();
  console.log(`patched ${id}`);
}

async function main() {
  for (const entry of diff) {
    await patchDoc(entry.en._id, entry.enNew);
    await patchDoc(entry.pl._id, entry.plNew);
    await patchDoc(entry.ru._id, entry.ruNew);
  }
  console.log("done — 30 documents patched");
}

main().catch((e) => { console.error(e); process.exit(1); });
