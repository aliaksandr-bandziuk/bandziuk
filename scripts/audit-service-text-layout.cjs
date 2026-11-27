// Read-only: how the textContent blocks on service pages are laid out, and how
// much text each page carries. Decides whether the "guide" layout (contents
// list beside the text) can become the default for service pages.
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

const words = (blocks) =>
  (blocks || []).reduce(
    (n, b) => n + ((b.children || []).map((c) => c.text || "").join(" ").split(/\s+/).filter(Boolean).length),
    0,
  );

(async () => {
  const docs = await client.fetch(
    `*[_type == "singlepage" && pageType == "service" && !(_id in path("drafts.**"))]{
       language,
       "text": contentBlocks[_type == "textContent"]{ layout, "c": content }
     }`,
  );

  const layout = {};
  const h2buckets = { "0-1": 0, "2-3": 0, "4-6": 0, "7+": 0 };
  const wordBuckets = { "<200": 0, "200-500": 0, "500-1000": 0, "1000+": 0 };
  let totalBlocks = 0;

  for (const d of docs) {
    let h2 = 0;
    let w = 0;
    for (const t of d.text || []) {
      totalBlocks++;
      const key = t.layout || "(unset)";
      layout[key] = (layout[key] || 0) + 1;
      const blocks = t.c || [];
      h2 += blocks.filter((b) => b.style === "h2").length;
      w += words(blocks);
    }
    h2buckets[h2 <= 1 ? "0-1" : h2 <= 3 ? "2-3" : h2 <= 6 ? "4-6" : "7+"]++;
    wordBuckets[w < 200 ? "<200" : w < 500 ? "200-500" : w < 1000 ? "500-1000" : "1000+"]++;
  }

  console.log("service pages:", docs.length, " textContent blocks:", totalBlocks);
  console.log("\nlayout value on those blocks:");
  for (const [k, v] of Object.entries(layout).sort((a, b) => b[1] - a[1])) console.log("  ", k.padEnd(10), v);
  console.log("\nH2 headings per page (across its textContent blocks):");
  for (const [k, v] of Object.entries(h2buckets)) console.log("  ", k.padEnd(10), v);
  console.log("\nwords of body text per page:");
  for (const [k, v] of Object.entries(wordBuckets)) console.log("  ", k.padEnd(10), v);
})();
