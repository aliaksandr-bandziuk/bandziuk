// scripts/inventory-for-linking.cjs — read-only inventory for the Phase 2 interlinking pass.
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

function slugFor(doc) {
  const lang = doc.language;
  return doc.slug?.[lang]?.current || null;
}

async function main() {
  const singlepages = await client.fetch(`*[_type == "singlepage"]{ _id, language, pageType, title, "slug": slug, "parentSlug": parentPage->slug }`);
  const blogs = await client.fetch(`*[_type == "blog"]{ _id, language, title, "slug": slug, "categoryTitle": category->title }`);
  const portfolios = await client.fetch(`*[_type == "portfolio"]{ _id, language, title, fullTitle, "slug": slug, "clientName": keyFeatures.clientName }`);

  // group by base id (strip .pl/.ru suffix) for compact printing
  function baseIdOf(id) {
    return id.replace(/\.(pl|ru)$/, "");
  }

  console.log("=== SINGLEPAGE (grouped by base id) ===");
  const spGroups = {};
  for (const d of singlepages) {
    const base = baseIdOf(d._id);
    spGroups[base] = spGroups[base] || {};
    spGroups[base][d.language] = { id: d._id, pageType: d.pageType, title: d.title, slug: slugFor(d), parentSlug: d.parentSlug?.[d.language]?.current || null };
  }
  for (const [base, langs] of Object.entries(spGroups).sort()) {
    console.log(`\n${base}`);
    for (const lang of ["en", "pl", "ru"]) {
      if (langs[lang]) {
        const l = langs[lang];
        console.log(`  [${lang}] ${l.slug}  (${l.pageType})${l.parentSlug ? `  parent=${l.parentSlug}` : ""}  "${l.title}"`);
      }
    }
  }
  console.log(`\nTotal singlepage: ${singlepages.length}, base groups: ${Object.keys(spGroups).length}`);

  console.log("\n\n=== BLOG (grouped by base id) ===");
  const blogGroups = {};
  for (const d of blogs) {
    const base = baseIdOf(d._id);
    blogGroups[base] = blogGroups[base] || {};
    blogGroups[base][d.language] = { id: d._id, title: d.title, slug: slugFor(d), category: d.categoryTitle };
  }
  for (const [base, langs] of Object.entries(blogGroups).sort()) {
    console.log(`\n${base}`);
    for (const lang of ["en", "pl", "ru"]) {
      if (langs[lang]) {
        const l = langs[lang];
        console.log(`  [${lang}] ${l.slug}  (cat: ${l.category})  "${l.title}"`);
      }
    }
  }
  console.log(`\nTotal blog: ${blogs.length}, base groups: ${Object.keys(blogGroups).length}`);

  console.log("\n\n=== PORTFOLIO (grouped by base id) ===");
  const pfGroups = {};
  for (const d of portfolios) {
    const base = baseIdOf(d._id);
    pfGroups[base] = pfGroups[base] || {};
    pfGroups[base][d.language] = { id: d._id, title: d.title, fullTitle: d.fullTitle, slug: slugFor(d), client: d.clientName };
  }
  for (const [base, langs] of Object.entries(pfGroups).sort()) {
    console.log(`\n${base}`);
    for (const lang of ["en", "pl", "ru"]) {
      if (langs[lang]) {
        const l = langs[lang];
        console.log(`  [${lang}] ${l.slug}  (client: ${l.client})  "${l.title}"`);
      }
    }
  }
  console.log(`\nTotal portfolio: ${portfolios.length}, base groups: ${Object.keys(pfGroups).length}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
