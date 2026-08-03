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

function ref(id) { return { _key: Math.random().toString(16).slice(2, 14), _type: "reference", _ref: id }; }

const PLAN = {
  "4de72361-ec2a-469d-8b56-813ddbf3adca": { // EN /services
    industryTitle: "Website development by industry",
    capabilityTitle: "Website development by capability",
    industryAdd: ["61a47860-d61d-499c-8606-1831231b222e", "636f4976-f588-4f6c-a386-23feb6570fbf"],
    capabilityAdd: ["ab99b964-1aa8-4ad8-a8a3-7fb0863cf549", "26f33bcc-eaa6-4cbc-96a1-9135cf55431f"],
    locationAdd: ["d629bed8-f17a-47df-9ced-ba4c8236a463"],
    seoTitle: "SEO and AI-search services",
    seoItems: ["923390d3-cf00-427c-bef1-2fdf903a7808", "5869ba72-348b-498e-b419-861e52ccb6ef", "9b8d7d33-0df4-4d4f-967c-9ff454a07a39", "dc0a0998-d7e5-485a-b405-233ebfcb1630"],
  },
  "631d883e-6f87-4346-9c6d-48b596c2daa7": { // PL /pl/oferty
    industryTitle: "Tworzenie stron – według branży",
    capabilityTitle: "Tworzenie stron – według funkcji",
    industryAdd: ["f62631da-bb64-44fb-8a41-6f2ee35d13c5", "fc3bbb10-9408-4ceb-9d00-3a2f22b32b21"],
    capabilityAdd: ["5ddf5532-8ec3-4bb8-a031-6fd3967aefc3", "1166b8b4-0d4c-4dc3-a0c2-452422445008"],
    locationAdd: [],
    seoTitle: "SEO i widoczność w AI",
    seoItems: ["55f6003b-f543-4591-8bea-d1a327144c73", "6d8ed7b1-9fac-49b9-b25f-632f52e94ae3", "34295d10-118c-4e25-aacd-599fab92f23f", "1c9c94f6-3eb3-4f2a-8e8e-7e7ce88ce196"],
  },
  "3774c0a1-8857-4149-be24-9a357af4be00": { // RU /ru/uslugi
    industryTitle: "Разработка сайтов – по отраслям",
    capabilityTitle: "Разработка сайтов – по возможностям",
    industryAdd: ["d0a6b052-1ea6-41ba-9e6f-4bb873946e29", "835b0b35-29d4-4854-9d8a-bb3c52c0e468"],
    capabilityAdd: ["fe3ab5a9-816f-4562-b412-602ef6bd1bb1", "24354662-e684-4a9c-ad37-3e196d3b40c4"],
    locationAdd: ["c524242b-5bfe-41a3-ae41-9acd93f64559"],
    seoTitle: "SEO и видимость в ИИ-поиске",
    seoItems: ["4238514d-8c66-4766-8b78-71675a466b7a", "79ec90f6-dd97-4c3d-8378-83a4512cc676", "078241d2-78f2-4f3c-a919-022e1de7b2da", "84798707-8328-4ca5-ad3f-6e4f17c95664"],
  },
};

async function main() {
  for (const [hubId, plan] of Object.entries(PLAN)) {
    const doc = await client.fetch(`*[_id == $id][0]{contentBlocks}`, { id: hubId });
    const blocks = doc.contentBlocks.map((b) => ({ ...b }));
    const industryIdx = blocks.findIndex((b) => b._type === "relatedServicesBlock" && (b.items || []).length >= 15);
    const capabilityIdx = blocks.findIndex((b, i) => b._type === "relatedServicesBlock" && i !== industryIdx && (b.items || []).length === 4);
    const locationIdx = blocks.findIndex((b, i) => b._type === "relatedServicesBlock" && i !== industryIdx && i !== capabilityIdx);

    blocks[industryIdx] = { ...blocks[industryIdx], title: plan.industryTitle, items: [...blocks[industryIdx].items, ...plan.industryAdd.map(ref)] };
    blocks[capabilityIdx] = { ...blocks[capabilityIdx], title: plan.capabilityTitle, items: [...blocks[capabilityIdx].items, ...plan.capabilityAdd.map(ref)] };
    if (plan.locationAdd.length) {
      blocks[locationIdx] = { ...blocks[locationIdx], items: [...blocks[locationIdx].items, ...plan.locationAdd.map(ref)] };
    }

    const seoBlock = {
      _key: Math.random().toString(16).slice(2, 14),
      _type: "relatedServicesBlock",
      title: plan.seoTitle,
      items: plan.seoItems.map(ref),
    };
    // Insert the new SEO group right after the capability group, before location.
    blocks.splice(capabilityIdx + 1, 0, seoBlock);

    console.log(`\n${APPLY ? "PATCHING" : "WOULD PATCH"} ${hubId}`);
    console.log(`  industry[${industryIdx}] "${plan.industryTitle}" -> ${blocks[industryIdx].items.length} items`);
    console.log(`  capability[${capabilityIdx}] "${plan.capabilityTitle}" -> ${blocks[capabilityIdx].items.length} items`);
    console.log(`  NEW seo "${plan.seoTitle}" -> ${seoBlock.items.length} items`);
    if (plan.locationAdd.length) console.log(`  location -> +${plan.locationAdd.length} item(s)`);

    if (APPLY) {
      await client.patch(hubId).set({ contentBlocks: blocks }).commit();
      console.log(`  PATCHED ${hubId}`);
    }
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
