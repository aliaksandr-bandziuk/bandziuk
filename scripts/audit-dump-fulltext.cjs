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

const IDS = process.argv.slice(2);

function renderBlock(b) {
  const lines = [`--- ${b._type} (key=${b._key}) ---`];
  if (b._type === "serviceFeaturesBlock") {
    lines.push(`title: ${b.title || ""}`);
    (b.features||[]).forEach(f => lines.push(`  * ${f.title}: ${f.description||""}`));
  } else if (b._type === "textContent") {
    for (const c of b.content||[]) {
      if (c._type === "block") lines.push(`[${c.style}] ${(c.children||[]).map(s=>s.text).join("")}`);
    }
  } else if (b._type === "tableBlock") {
    lines.push(`columns: ${JSON.stringify(b.columns)}`);
    (b.rows||[]).forEach(r => lines.push(`  row: ${JSON.stringify(r.cells)}`));
  } else if (b._type === "faqBlock") {
    lines.push(`faqTitle: ${b.faq && b.faq.title || ""}`);
    ((b.faq && b.faq.items) || []).forEach(item => {
      const q = item.question || (item.content && item.content[0] && item.content[0].children.map(s=>s.text).join(""));
      lines.push(`  Q: ${q}`);
    });
  } else if (b._type === "doubleTextBlock") {
    lines.push(JSON.stringify(b).slice(0, 500));
  } else if (b._type === "relatedServicesBlock") {
    lines.push(`title: ${b.title}, items: ${(b.items||[]).length}`);
  } else {
    lines.push(`(unrendered block type)`);
  }
  return lines.join("\n");
}

async function main() {
  for (const id of IDS) {
    const doc = await client.fetch(`*[_id == $id][0]{title, excerpt, seo, "slug": slug, contentBlocks}`, { id });
    if (!doc) { console.log(`\n\n##### ${id} NOT FOUND #####`); continue; }
    console.log(`\n\n##### ${id} — ${doc.title} #####`);
    console.log(`excerpt: ${doc.excerpt}`);
    console.log(`metaTitle: ${doc.seo && doc.seo.metaTitle}`);
    console.log(`metaDescription: ${doc.seo && doc.seo.metaDescription}`);
    for (const b of doc.contentBlocks || []) console.log(renderBlock(b));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
