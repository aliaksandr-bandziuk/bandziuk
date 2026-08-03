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

const IDS = [
  // 5 SEO-for-X families
  "923390d3-cf00-427c-bef1-2fdf903a7808", "55f6003b-f543-4591-8bea-d1a327144c73", "4238514d-8c66-4766-8b78-71675a466b7a",
  "5869ba72-348b-498e-b419-861e52ccb6ef", "6d8ed7b1-9fac-49b9-b25f-632f52e94ae3", "79ec90f6-dd97-4c3d-8378-83a4512cc676",
  "9b8d7d33-0df4-4d4f-967c-9ff454a07a39", "34295d10-118c-4e25-aacd-599fab92f23f", "078241d2-78f2-4f3c-a919-022e1de7b2da",
  "3399fa5f-8de5-4b6c-8b31-6b5068b9692f", "c8cf5d0e-433d-4b3c-b080-2ceaef128848", "d0eb4a85-35a0-4738-be86-148e6cbdb398",
  "dc0a0998-d7e5-485a-b405-233ebfcb1630", "1c9c94f6-3eb3-4f2a-8e8e-7e7ce88ce196", "84798707-8328-4ca5-ad3f-6e4f17c95664",
  // 4 older general landings
  "61a47860-d61d-499c-8606-1831231b222e", "f62631da-bb64-44fb-8a41-6f2ee35d13c5", "d0a6b052-1ea6-41ba-9e6f-4bb873946e29",
  "846f8959-3006-4a60-9c88-926ea23c1d17", "03f667f1-56ac-4b36-8ed8-7bdd7829afc7", "bb3234da-2372-40fd-af96-8cd22170dec9",
  "636f4976-f588-4f6c-a386-23feb6570fbf", "fc3bbb10-9408-4ceb-9d00-3a2f22b32b21", "835b0b35-29d4-4854-9d8a-bb3c52c0e468",
  "d629bed8-f17a-47df-9ced-ba4c8236a463", "c524242b-5bfe-41a3-ae41-9acd93f64559",
  // 2 core sub-services
  "ab99b964-1aa8-4ad8-a8a3-7fb0863cf549", "5ddf5532-8ec3-4bb8-a031-6fd3967aefc3", "fe3ab5a9-816f-4562-b412-602ef6bd1bb1",
  "1166b8b4-0d4c-4dc3-a0c2-452422445008", "24354662-e684-4a9c-ad37-3e196d3b40c4", "26f33bcc-eaa6-4cbc-96a1-9135cf55431f",
  // comparison targets (existing hub-listed dev landings + core services)
  "website-development-for-beauty-professionals", "dab61d1a-28d8-4a10-a2c4-de17399cdbe7",
  "real-estate-agency-website", "property-developer-website", "lawyer-website-development",
  "singlepage-web-development-warsaw", "singlepage-photographer", "singlepage-catalog-website",
  "singlepage-online-booking", "singlepage-platform-migration", "singlepage-multilingual-website",
  "8701994a-d9ba-4230-84b5-2e491b87cb61", // seo-optimization-and-strategy
  "42a469a6-28f3-4015-8b88-414c8eb3d4fa", // SEO_SERVICE en (dup id check)
];

function wordCount(contentBlocks) {
  let words = 0, blockCount = (contentBlocks || []).length;
  for (const b of contentBlocks || []) {
    const collect = (arr) => (arr || []).filter(x => x._type === "block").forEach(x => {
      words += (x.children || []).map(c => c.text || "").join(" ").split(/\s+/).filter(Boolean).length;
    });
    if (b._type === "textContent") collect(b.content);
    if (b._type === "doubleTextBlock") { collect(b.leftContent?.blockContent?.content); collect(b.rightContent?.blockContent?.content); }
    if (b._type === "faqBlock") (b.faq?.items || []).forEach(item => collect(item.answer));
    if (b._type === "accordionBlock") (b.items || []).forEach(item => collect(item.content));
  }
  return { words, blockCount, blockTypes: (contentBlocks || []).map(b => b._type) };
}

async function main() {
  const out = {};
  for (const id of [...new Set(IDS)]) {
    const doc = await client.fetch(`*[_id == $id || slug.en.current == $id || slug.pl.current == $id || slug.ru.current == $id][0]{_id, title, language, pageType, contentBlocks, "slugEn": slug.en.current}`, { id });
    if (!doc) { console.log("NOT FOUND:", id); continue; }
    const wc = wordCount(doc.contentBlocks);
    out[doc._id] = { title: doc.title, language: doc.language, pageType: doc.pageType, words: wc.words, blockCount: wc.blockCount, blockTypes: wc.blockTypes };
  }
  fs.writeFileSync(path.resolve(__dirname, "../drafts/_task2-content-volume.json"), JSON.stringify(out, null, 2));
  console.log("Written", Object.keys(out).length, "docs");
  for (const [id, d] of Object.entries(out)) console.log(id, "|", d.language, "|", d.words, "words |", d.blockCount, "blocks |", d.title);
}
main().catch(e => { console.error(e); process.exit(1); });
