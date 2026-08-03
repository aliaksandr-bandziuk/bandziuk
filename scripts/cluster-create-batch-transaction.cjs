// Creates multiple cluster articles (each already configured via a JSON config file) inside a
// single Sanity transaction, so mutual relatedArticles references between them resolve.
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
const configPaths = process.argv.slice(2).filter((a) => a !== "--apply");

function key() { return Math.random().toString(16).slice(2, 14); }
function refArr(ids) { return ids.map((id) => ({ _key: key(), _type: "reference", _ref: id })); }

async function buildLocaleDoc(loc, imageAssetId, publishedAt) {
  const mdPath = path.resolve(__dirname, "..", loc.mdFile);
  let blocks = parseMarkdownBody(fs.readFileSync(mdPath, "utf8"));
  for (const link of loc.inBodyLinks) blocks = insertInlineLink(blocks, link.matchText, link.href);

  return {
    _id: loc.id,
    _type: "blog",
    language: loc.language,
    title: loc.title,
    slug: { _type: "localizedSlug", [loc.language]: { _type: "slug", current: loc.slug } },
    seo: { metaTitle: loc.metaTitle, metaDescription: loc.metaDescription },
    excerpt: loc.excerpt,
    publishedAt,
    category: { _type: "reference", _ref: loc.categoryId },
    author: { _type: "reference", _ref: loc.authorId },
    previewImage: { _type: "image", alt: loc.imageAlt, asset: { _type: "reference", _ref: imageAssetId } },
    contentBlocks: [{ _key: key(), _type: "textContent", content: blocks, textAlign: "left" }],
    serviceOffered: refArr(loc.serviceOffered),
    relatedArticles: refArr(loc.relatedArticles),
  };
}

async function main() {
  const allDocs = [];
  const allI18n = [];

  for (const configPath of configPaths) {
    const cfg = JSON.parse(fs.readFileSync(configPath, "utf8"));
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

    for (const loc of cfg.locales) {
      const doc = await buildLocaleDoc(loc, imageAssetId, cfg.publishedAt);
      allDocs.push(doc);
      console.log(`PREPARED ${loc.id} (${loc.language}) — ${doc.contentBlocks[0].content.length} blocks, slug=${loc.slug}`);
    }
    allI18n.push({
      _id: cfg.i18nId,
      _type: "translation.metadata",
      documentId: cfg.locales.find((l) => l.language === "en").id,
      translations: cfg.locales.map((l) => ({ _key: l.language, value: { _type: "reference", _ref: l.id } })),
    });
  }

  if (!APPLY) {
    console.log(`\nDry run only — ${allDocs.length} docs + ${allI18n.length} i18n docs prepared. Re-run with --apply.`);
    return;
  }

  console.log(`\nCommitting single transaction: ${allDocs.length} docs + ${allI18n.length} i18n docs...`);
  let tx = client.transaction();
  for (const doc of allDocs) tx = tx.createOrReplace(doc);
  for (const doc of allI18n) tx = tx.createOrReplace(doc);
  const result = await tx.commit();
  console.log("COMMITTED. Document IDs:", result.results.map((r) => r.id).join(", "));
}

main().catch((e) => { console.error(e); process.exit(1); });
