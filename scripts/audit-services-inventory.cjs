// Read-only data dump for the /services section investigation.
// Fetches singlepage, blog, and portfolio docs and writes structured JSON to scratchpad
// for offline analysis. No writes to Sanity.
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

const OUT_DIR = process.argv[2] || ".";

// Recursively collects "content-ish" string values from a JSON blob, skipping
// structural/system keys. Good enough for a comparative word-count column.
const SKIP_KEYS = new Set([
  "_key", "_type", "_ref", "_id", "href", "url", "marks", "style", "listItem", "level",
  "dimensions", "width", "height", "lqip", "palette", "extension", "mimeType", "size",
  "assetId", "path", "uploadId", "sha1hash", "hotspot", "crop", "x", "y", "aspectRatio",
]);
function extractText(node, acc) {
  if (node == null) return;
  if (Array.isArray(node)) { node.forEach((n) => extractText(n, acc)); return; }
  if (typeof node === "object") {
    for (const [k, v] of Object.entries(node)) {
      if (SKIP_KEYS.has(k)) continue;
      if (typeof v === "string") acc.push(v);
      else extractText(v, acc);
    }
  }
}
function wordCount(node) {
  const acc = [];
  extractText(node, acc);
  return acc.join(" ").split(/\s+/).filter(Boolean).length;
}
function blockTypes(contentBlocks) {
  return (contentBlocks || []).map((b) => b._type);
}
// Collect internal link hrefs from any textContent-style block (markDefs).
function extractLinks(contentBlocks) {
  const links = [];
  for (const b of contentBlocks || []) {
    const content = b.content || (b.faq && b.faq.items) || [];
    for (const c of content) {
      if (c.markDefs) for (const m of c.markDefs) if (m._type === "link") links.push(m.href);
    }
    // faqBlock items may themselves contain portable text answers
    if (b._type === "faqBlock" && b.faq && b.faq.items) {
      for (const item of b.faq.items) {
        const inner = item.content || item.answer || [];
        for (const c of Array.isArray(inner) ? inner : []) {
          if (c.markDefs) for (const m of c.markDefs) if (m._type === "link") links.push(m.href);
        }
      }
    }
  }
  return links;
}

async function main() {
  console.log("Fetching singlepages...");
  const singlepages = await client.fetch(`*[_type == "singlepage"]{
    _id, language, pageType, title, "slug": slug, excerpt,
    seo{metaTitle, metaDescription},
    "parentPage": parentPage->{_id, title, "slug": slug},
    allowIntroBlock,
    contentBlocks,
    _createdAt, _updatedAt
  }`);
  console.log(`  ${singlepages.length} singlepage docs`);

  console.log("Fetching blogs...");
  const blogs = await client.fetch(`*[_type == "blog"]{
    _id, language, title, "slug": slug,
    "serviceOffered": serviceOffered[]->_id,
    "relatedArticles": relatedArticles[]->_id,
    "category": category->title,
    publishedAt,
    contentBlocks
  }`);
  console.log(`  ${blogs.length} blog docs`);

  console.log("Fetching portfolio...");
  const portfolio = await client.fetch(`*[_type == "portfolio"]{
    _id, language, title, "slug": slug, excerpt, contentBlocks
  }`);
  console.log(`  ${portfolio.length} portfolio docs`);

  console.log("Fetching translation.metadata...");
  const i18n = await client.fetch(`*[_type == "translation.metadata"]{_id, documentId, translations[]{_key, "id": value._ref}}`);
  console.log(`  ${i18n.length} i18n docs`);

  const singlepagesOut = singlepages.map((sp) => ({
    _id: sp._id,
    language: sp.language,
    pageType: sp.pageType,
    title: sp.title,
    slug: sp.slug && sp.slug[sp.language] && sp.slug[sp.language].current,
    excerpt: sp.excerpt,
    metaTitle: sp.seo && sp.seo.metaTitle,
    metaDescription: sp.seo && sp.seo.metaDescription,
    parentId: sp.parentPage && sp.parentPage._id,
    parentTitle: sp.parentPage && sp.parentPage.title,
    parentSlug: sp.parentPage && sp.parentPage.slug && sp.parentPage.slug[sp.language] && sp.parentPage.slug[sp.language].current,
    blockTypes: blockTypes(sp.contentBlocks),
    wordCount: wordCount(sp.contentBlocks) + wordCount(sp.excerpt),
    outboundLinks: extractLinks(sp.contentBlocks),
    createdAt: sp._createdAt,
    updatedAt: sp._updatedAt,
  }));

  const blogsOut = blogs.map((b) => ({
    _id: b._id,
    language: b.language,
    title: b.title,
    slug: b.slug && b.slug[b.language] && b.slug[b.language].current,
    category: b.category,
    publishedAt: b.publishedAt,
    serviceOffered: b.serviceOffered || [],
    relatedArticles: b.relatedArticles || [],
    wordCount: wordCount(b.contentBlocks),
    outboundLinks: extractLinks(b.contentBlocks),
  }));

  const portfolioOut = portfolio.map((p) => ({
    _id: p._id,
    language: p.language,
    title: p.title,
    slug: p.slug && p.slug[p.language] && p.slug[p.language].current,
    excerpt: p.excerpt,
    wordCount: wordCount(p.contentBlocks),
    outboundLinks: extractLinks(p.contentBlocks),
  }));

  fs.writeFileSync(path.join(OUT_DIR, "audit-singlepages.json"), JSON.stringify(singlepagesOut, null, 1));
  fs.writeFileSync(path.join(OUT_DIR, "audit-blogs.json"), JSON.stringify(blogsOut, null, 1));
  fs.writeFileSync(path.join(OUT_DIR, "audit-portfolio.json"), JSON.stringify(portfolioOut, null, 1));
  fs.writeFileSync(path.join(OUT_DIR, "audit-i18n.json"), JSON.stringify(i18n, null, 1));
  console.log("Done. Wrote audit-singlepages.json, audit-blogs.json, audit-portfolio.json, audit-i18n.json");
}
main().catch((e) => { console.error(e); process.exit(1); });
