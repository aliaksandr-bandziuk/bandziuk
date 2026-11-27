// Read-only: which content blocks the live service pages are actually built
// from, by language. Needed before restyling anything: the fixtures in
// src/dev-fixtures are mostly landings, and the service pages predate them.
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

(async () => {
  const docs = await client.fetch(
    `*[_type == "singlepage" && pageType == "service" && !(_id in path("drafts.**"))]{
       _id, language, "slug": slug, "types": contentBlocks[]._type }`,
  );
  const byLang = {};
  const counts = {};
  const pagesWith = {};
  for (const d of docs) {
    byLang[d.language] = (byLang[d.language] || 0) + 1;
    const seen = new Set();
    for (const t of d.types || []) {
      counts[t] = (counts[t] || 0) + 1;
      seen.add(t);
    }
    for (const t of seen) pagesWith[t] = (pagesWith[t] || 0) + 1;
  }
  console.log("service pages:", docs.length, JSON.stringify(byLang));
  console.log("\nblock".padEnd(30), "pages", " uses");
  for (const [t, n] of Object.entries(pagesWith).sort((a, b) => b[1] - a[1])) {
    console.log(t.padEnd(30), String(n).padStart(5), String(counts[t]).padStart(6));
  }
  const noBlocks = docs.filter((d) => !(d.types || []).length).length;
  console.log("\npages with no contentBlocks:", noBlocks);
})();
