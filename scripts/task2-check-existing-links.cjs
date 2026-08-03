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
    const doc = await client.fetch(`*[_id == $id][0]{contentBlocks}`, { id });
    let count = 0;
    doc.contentBlocks.forEach((b, i) => {
      const content = b.content || (b.faq && b.faq.items) || [];
      const scan = (arr, label) => {
        (arr || []).forEach((c) => {
          if (c.markDefs && c.markDefs.length) {
            c.markDefs.forEach((m) => { if (m._type === "link") { count++; console.log(`${lang} block[${i}] ${label} link -> ${m.href}`); } });
          }
        });
      };
      if (b._type === "textContent") scan(b.content, "textContent");
      if (b._type === "faqBlock" && b.faq && b.faq.items) {
        b.faq.items.forEach((item, j) => scan(item.content || item.answer, `faq[${j}]`));
      }
    });
    console.log(`${lang}: total existing links = ${count}`);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
