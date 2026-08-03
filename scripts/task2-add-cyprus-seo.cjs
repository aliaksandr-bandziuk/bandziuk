const path = require("path");
const { createClient } = require("@sanity/client");
const { insertInlineLink } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
const APPLY = process.argv.includes("--apply");

function ref(id) { return { _key: Math.random().toString(16).slice(2, 14), _type: "reference", _ref: id }; }

const HUB_ADD = {
  "4de72361-ec2a-469d-8b56-813ddbf3adca": "3399fa5f-8de5-4b6c-8b31-6b5068b9692f", // EN
  "631d883e-6f87-4346-9c6d-48b596c2daa7": "c8cf5d0e-433d-4b3c-b080-2ceaef128848", // PL
  "3774c0a1-8857-4149-be24-9a357af4be00": "d0eb4a85-35a0-4738-be86-148e6cbdb398", // RU
};

const CROSS_LINKS = [
  { doc: "d629bed8-f17a-47df-9ced-ba4c8236a463", matchText: "Property businesses require advanced listing structures, filtering systems, multilingual content, and strong credibility signals.", href: "/seo-for-real-estate-in-cyprus" },
  { doc: "c524242b-5bfe-41a3-ae41-9acd93f64559", matchText: "сайт — это не просто визитка. Это витрина объектов, фильтрация, доверие и скорость реакции.", href: "/ru/seo-dlya-nedvizhimosti-na-kipre" },
];

function textOf(arr) { return (arr || []).filter(b => b._type === "block").map(b => (b.children || []).map(c => c.text).join("")).join(""); }

async function main() {
  console.log("=== Hub: add Cyprus SEO to SEO group ===");
  for (const [hubId, itemId] of Object.entries(HUB_ADD)) {
    const doc = await client.fetch(`*[_id == $id][0]{contentBlocks}`, { id: hubId });
    const blocks = doc.contentBlocks.map(b => ({ ...b }));
    const seoIdx = blocks.findIndex(b => b._type === "relatedServicesBlock" && /SEO/i.test(b.title));
    blocks[seoIdx] = { ...blocks[seoIdx], items: [...blocks[seoIdx].items, ref(itemId)] };
    console.log(`${APPLY ? "PATCHING" : "WOULD PATCH"} ${hubId} seo[${seoIdx}] -> ${blocks[seoIdx].items.length} items`);
    if (APPLY) { await client.patch(hubId).set({ contentBlocks: blocks }).commit(); console.log("  PATCHED"); }
  }

  console.log("\n=== Cross-links: Cyprus dev -> Cyprus SEO ===");
  for (const link of CROSS_LINKS) {
    const doc = await client.fetch(`*[_id == $id][0]{_id, contentBlocks}`, { id: link.doc });
    const tcIdx = doc.contentBlocks.findIndex(b => b._type === "textContent" && textOf(b.content).includes(link.matchText));
    if (tcIdx === -1) { console.log("MATCH NOT FOUND", link.doc); continue; }
    try {
      const newContent = insertInlineLink(doc.contentBlocks[tcIdx].content, link.matchText, link.href);
      doc.contentBlocks[tcIdx] = { ...doc.contentBlocks[tcIdx], content: newContent };
      console.log(`${APPLY ? "APPLYING" : "WOULD APPLY"} ${link.doc} -> ${link.href}`);
      if (APPLY) { await client.patch(link.doc).set({ contentBlocks: doc.contentBlocks }).commit(); console.log("  PATCHED"); }
    } catch (err) { console.log("FAIL", link.doc, err.message); }
  }
}
main().catch(e => { console.error(e); process.exit(1); });
