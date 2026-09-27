// scripts/link-legalizacja-translations.cjs
//
// Creates the translation.metadata document that ties the three language
// versions of the legalisation article together. Without it the language
// switcher shows nothing and the pages carry no hreflang to each other.
//
// Run this AFTER all three documents are published in Studio: the metadata
// holds strong references, and a strong reference to a document that exists
// only as a draft is rejected by Sanity. The script checks that first and
// tells you which ones are still unpublished rather than failing halfway.
//
// Usage: node scripts/link-legalizacja-translations.cjs [--dry-run]

const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const BASE = "blog-legalizacja-cudzoziemcy";
const IDS = { en: BASE, pl: `${BASE}.pl`, ru: `${BASE}.ru` };
const DRY = process.argv.includes("--dry-run");

(async () => {
  const found = await client.fetch("*[_id in $ids]{_id,language,title}", { ids: Object.values(IDS) });
  const have = new Set(found.map((d) => d._id));
  const missing = Object.entries(IDS).filter(([, id]) => !have.has(id));

  for (const d of found) console.log(`  published: ${d._id} — ${d.title.slice(0, 60)}`);
  if (missing.length) {
    console.error(`\nNot published yet: ${missing.map(([l, id]) => `${l} (${id})`).join(", ")}`);
    console.error("Publish all three in Studio first, then run this again. Nothing was written.");
    // process.exit() here trips a libuv assertion on Windows while the client's
    // socket is still open; set the code and let Node unwind on its own.
    process.exitCode = 1;
    return;
  }

  const doc = {
    _id: `${BASE}.i18n`,
    _type: "translation.metadata",
    documentId: BASE,
    // Exactly the shape @sanity/document-internationalization v3 produces —
    // the site's GROQ reads translations[].value-> (CLAUDE.md §3).
    translations: Object.entries(IDS).map(([lang, id]) => ({
      _key: lang,
      value: { _type: "reference", _ref: id },
    })),
  };

  if (DRY) { console.log("\nDry run — would write:\n" + JSON.stringify(doc, null, 1)); return; }
  await client.createOrReplace(doc);
  console.log(`\nWritten: ${doc._id} — the three versions are now linked.`);
  console.log("The language switcher and hreflang need a rebuild or a webhook call to appear on the site.");
})().catch((e) => { console.error("\n" + (e.message || e)); process.exit(1); });
