// scripts/fix-redesign-article-description.cjs
//
// /blog/website-redesign-without-losing-traffic is the largest impression
// block on the site: 918 impressions in 28 days, zero clicks, position 19.4.
// Measured 06.11.2026, 867 of those impressions come from queries carrying
// the exact phrase «without losing SEO»:
//   redesign website without losing seo 423 (18.7) ·
//   how to redesign website without losing seo 250 (21.3) ·
//   how to redesign a website without losing seo 101 (18.1) ·
//   redesign seo without losing seo 48 (21.2) ·
//   website redesign without losing seo 45 (16.0)
// The metaTitle, H1 and H2s were moved onto that phrase earlier today. The
// metaDescription was not: it still says «traffic» and never says SEO, so the
// snippet does not echo the query a searcher just typed.
//
// Changes one field on one document. Nothing else is touched.
//
// Usage:
//   node scripts/fix-redesign-article-description.cjs            dry run
//   node scripts/fix-redesign-article-description.cjs --apply    writes
const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const DOC_ID = "blog-redesign-traffic-loss";

const OLD_DESC =
  "What happens to traffic during a website redesign and migration, why rankings drop, how to prevent it, and what to do if your site has already lost visibility.";
const NEW_DESC =
  "How to redesign a website without losing SEO: what to capture before the move, what to check on launch day, which ranking dip is normal, and how to recover.";

async function main() {
  if (NEW_DESC.length > 160) {
    console.log(`Aborting — the new metaDescription is ${NEW_DESC.length} characters, the limit is 160.`);
    process.exit(1);
  }

  const draft = await client.getDocument(`drafts.${DOC_ID}`);
  if (draft) {
    console.log(`Aborting — ${DOC_ID} has an unpublished draft; publish or discard it first.`);
    process.exit(1);
  }

  const doc = await client.getDocument(DOC_ID);
  if (!doc) {
    console.log(`Aborting — document ${DOC_ID} not found.`);
    process.exit(1);
  }

  const current = (doc.seo && doc.seo.metaDescription) || "";
  if (current === NEW_DESC) {
    console.log("Nothing to do: already applied.");
    return;
  }
  if (current !== OLD_DESC) {
    console.log(`Aborting — the current metaDescription is neither the old nor the new version:\n  «${current}»`);
    process.exit(1);
  }

  console.log(`metaDescription (${NEW_DESC.length} chars)\n  «${current}»\n  -> «${NEW_DESC}»\n`);

  if (!APPLY) {
    console.log("Dry run — nothing written. Add --apply to write.");
    return;
  }

  await client.patch(DOC_ID).ifRevisionId(doc._rev).set({ "seo.metaDescription": NEW_DESC }).commit();

  const after = await client.getDocument(DOC_ID);
  if (((after.seo && after.seo.metaDescription) || "") !== NEW_DESC) {
    console.log("WARNING — re-read does not match what was written.");
    process.exit(1);
  }
  console.log("Written; self-check: the description re-reads as expected.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
