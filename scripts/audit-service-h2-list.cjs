// Read-only: service pages ranked by how many H2 headings their textContent
// blocks carry, with the pages that have none — the two lists needed to decide
// the guide layout and to find pages whose body text has no subheadings.
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
    (n, b) => n + (b.children || []).map((c) => c.text || "").join(" ").split(/\s+/).filter(Boolean).length,
    0,
  );

(async () => {
  const docs = await client.fetch(
    `*[_type == "singlepage" && pageType == "service" && !(_id in path("drafts.**"))]{
       language, "slugs": slug,
       "text": contentBlocks[_type == "textContent"]{ layout, "c": content } }`,
  );
  const rows = docs.map((d) => {
    let h2 = 0, w = 0;
    for (const t of d.text || []) {
      h2 += (t.c || []).filter((b) => b.style === "h2").length;
      w += words(t.c);
    }
    const slugs = d.slugs || {};
    const slug = (slugs[d.language] && slugs[d.language].current) || "(no slug)";
    return { lang: d.language, slug, h2, w };
  });

  console.log("TOP 12 by H2 (best pages to look at the guide layout on):");
  for (const r of [...rows].sort((a, b) => b.h2 - a.h2).slice(0, 12))
    console.log(`  ${String(r.h2).padStart(2)} H2  ${String(r.w).padStart(4)} w  ${r.lang}  ${r.slug}`);

  const bare = rows.filter((r) => r.h2 <= 1 && r.w >= 400).sort((a, b) => b.w - a.w);
  console.log(`\n${bare.length} pages carry 400+ words with one H2 or none:`);
  for (const r of bare) console.log(`  ${String(r.h2)} H2  ${String(r.w).padStart(4)} w  ${r.lang}  ${r.slug}`);
})();
