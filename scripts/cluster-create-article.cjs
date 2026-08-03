// Generic creator for one AI-brand-accuracy cluster article, all 3 locales + translation.metadata.
// Usage: node scripts/cluster-create-article.cjs <config.json> [--apply]
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
const { insertInlineLink } = require("./lib/portable-text-links.cjs");
const { parseMarkdownBody } = require("./cluster-md-to-portable-text.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const configPath = process.argv[2];
const cfg = JSON.parse(fs.readFileSync(configPath, "utf8"));

function key() { return Math.random().toString(16).slice(2, 14); }
function refArr(ids) { return ids.map((id) => ({ _key: key(), _type: "reference", _ref: id })); }

async function buildLocaleDoc(loc, imageAssetId) {
  const mdPath = path.resolve(__dirname, "..", loc.mdFile);
  let blocks = parseMarkdownBody(fs.readFileSync(mdPath, "utf8"));

  for (const link of loc.inBodyLinks) {
    blocks = insertInlineLink(blocks, link.matchText, link.href);
  }

  return {
    _id: loc.id,
    _type: "blog",
    language: loc.language,
    title: loc.title,
    slug: { _type: "localizedSlug", [loc.language]: { _type: "slug", current: loc.slug } },
    seo: { metaTitle: loc.metaTitle, metaDescription: loc.metaDescription },
    excerpt: loc.excerpt,
    publishedAt: cfg.publishedAt,
    category: { _type: "reference", _ref: loc.categoryId },
    author: { _type: "reference", _ref: loc.authorId },
    previewImage: { _type: "image", alt: loc.imageAlt, asset: { _type: "reference", _ref: imageAssetId } },
    contentBlocks: [{ _key: key(), _type: "textContent", content: blocks, textAlign: "left" }],
    serviceOffered: refArr(loc.serviceOffered),
    relatedArticles: refArr(loc.relatedArticles),
  };
}

async function main() {
  console.log(`\n=== ${cfg.title} ===`);

  let imageAssetId = cfg.existingImageAssetId;
  if (!imageAssetId) {
    const imagePath = path.resolve(__dirname, "..", cfg.imageFile);
    console.log(`${APPLY ? "Uploading" : "Would upload"} image: ${cfg.imageFile}`);
    if (APPLY) {
      const asset = await client.assets.upload("image", fs.createReadStream(imagePath), { filename: path.basename(imagePath) });
      imageAssetId = asset._id;
      console.log(`  asset id: ${imageAssetId}`);
    } else {
      imageAssetId = "PENDING_UPLOAD";
    }
  }

  const docs = [];
  for (const loc of cfg.locales) {
    const doc = await buildLocaleDoc(loc, imageAssetId);
    docs.push(doc);
    console.log(`${APPLY ? "WOULD CREATE (dry run)" : "PREPARED"} ${loc.id} (${loc.language}) — ${doc.contentBlocks[0].content.length} blocks, slug=${loc.slug}`);
  }

  if (APPLY) {
    for (const doc of docs) {
      await client.createOrReplace(doc);
      console.log(`  CREATED ${doc._id}`);
    }
    const i18nDoc = {
      _id: cfg.i18nId,
      _type: "translation.metadata",
      documentId: cfg.locales.find((l) => l.language === "en").id,
      translations: cfg.locales.map((l) => ({ _key: l.language, value: { _type: "reference", _ref: l.id } })),
    };
    await client.createOrReplace(i18nDoc);
    console.log(`  CREATED ${cfg.i18nId}`);
  } else {
    console.log("\nDry run only — nothing written. Re-run with --apply.");
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
