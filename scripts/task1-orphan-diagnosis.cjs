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

const DRAFTS = path.resolve(__dirname, "../drafts");
const orphans = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-orphans.json"), "utf8"));
const edges = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-edges.json"), "utf8"));
const urlmap = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-urlmap.json"), "utf8"));
const blogs = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_inventory-blogs.json"), "utf8"));
const singlepages = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_inventory-singlepages.json"), "utf8"));

const RECENT_LANDING_DATES = ["2026-07-29", "2026-07-31"];
const RECENT_ARTICLE_DATES = ["2026-08-02"];

const byId = {};
for (const b of blogs) byId[b._id] = b;
for (const s of singlepages) byId[s._id] = s;

const HUB_IDS = ["4de72361-ec2a-469d-8b56-813ddbf3adca", "631d883e-6f87-4346-9c6d-48b596c2daa7", "3774c0a1-8857-4149-be24-9a357af4be00"];

async function main() {
  const hubListings = {}; // targetId -> {hubId, blockTitle}
  for (const hubId of HUB_IDS) {
    const doc = await client.fetch(
      `*[_id == $id][0]{contentBlocks[_type=="relatedServicesBlock"]{title, "items": items[]->_id}}`,
      { id: hubId }
    );
    for (const block of doc.contentBlocks) {
      for (const itemId of block.items || []) {
        hubListings[itemId] = { hubId, blockTitle: block.title };
      }
    }
  }

  const rows = [];
  for (const o of orphans) {
    const doc = byId[o.id];
    const createdDate = doc?._createdAt?.slice(0, 10);
    let age = "older";
    if (RECENT_LANDING_DATES.includes(createdDate) && o.type === "singlepage") age = "recent-landing";
    if (RECENT_ARTICLE_DATES.includes(createdDate) && o.type === "blog") age = "recent-article";

    const inboundEdges = edges.filter((e) => e.targetId === o.id);
    const sources = inboundEdges.map((e) => `${e.sourceId} (${e.kind})`);

    const hub = hubListings[o.id];
    const navReachable = !!hub || o.slug === "/blog" || o.slug.endsWith("/blog");

    rows.push({
      id: o.id,
      slug: o.slug,
      lang: o.lang,
      type: o.type,
      title: o.title,
      age,
      createdDate,
      inbound: o.inbound,
      sources,
      hubListed: hub ? `yes (${hub.blockTitle})` : "no",
      navReachable: navReachable ? "yes (via hub)" : "no",
    });
  }

  fs.writeFileSync(path.join(DRAFTS, "_task1-orphan-table.json"), JSON.stringify(rows, null, 2));

  console.log("=== GROUPING ===");
  const groups = { "recent-landing": 0, "recent-article": 0, older: 0 };
  for (const r of rows) groups[r.age]++;
  console.log(groups);

  console.log("\nOf recent-landing orphans, hub-listed:", rows.filter(r => r.age === "recent-landing" && r.hubListed.startsWith("yes")).length, "/ not hub-listed:", rows.filter(r => r.age === "recent-landing" && r.hubListed === "no").length);
  console.log("Of recent-article orphans, count:", rows.filter(r => r.age === "recent-article").length);
  console.log("\nNav-unreachable orphans (no hub, not blog):", rows.filter(r => r.navReachable === "no").length);

  console.log("\nWritten to drafts/_task1-orphan-table.json");
}

main().catch((e) => { console.error(e); process.exit(1); });
