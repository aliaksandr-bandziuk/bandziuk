// scripts/find-doc.cjs — find a singlepage document in Sanity by language and
// slug, and print what sync-fixture-section.cjs needs to know about it: the
// real _id (fixture-derived ids do not match pages that were rewritten over an
// older document), whether an unpublished draft is in the way, and the H2
// headings already present in the guide text block.
//
// Usage:
//   node scripts/find-doc.cjs <lang> <slug>
//   node scripts/find-doc.cjs pl seo-dla-kancelarii-prawnych

const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const [lang, slug] = process.argv.slice(2);
if (!lang || !slug) {
  console.error("Usage: node scripts/find-doc.cjs <lang> <slug>");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const plain = (b) => (b.children || []).map((c) => c.text || "").join("");

async function main() {
  const docs = await client.fetch(
    `*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug]{
      _id, _rev, _updatedAt, title, pageType, contentBlocks
    }`,
    { lang, slug },
  );

  if (!docs.length) {
    console.log(`No singlepage with slug.${lang}.current == "${slug}"`);
    return;
  }

  for (const d of docs) {
    const isDraft = d._id.startsWith("drafts.");
    console.log(`${isDraft ? "DRAFT " : ""}_id: ${d._id}`);
    console.log(`  title: ${d.title}`);
    console.log(`  pageType: ${d.pageType}`);
    console.log(`  updated: ${d._updatedAt}`);
    console.log("  blocks:");
    for (const b of d.contentBlocks || []) {
      const extra = b.layout ? ` layout=${b.layout}` : "";
      const n = Array.isArray(b.content) ? ` items=${b.content.length}` : "";
      console.log(`    ${b._type}${extra}${n} _key=${b._key}`);
      const h2 = (b.content || []).filter((x) => x.style === "h2").map(plain);
      h2.forEach((t) => console.log(`        H2 ${t}`));
    }
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
