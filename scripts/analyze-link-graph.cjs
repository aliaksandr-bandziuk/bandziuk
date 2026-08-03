// scripts/analyze-link-graph.cjs
// Site-wide internal linking pass — Step 0 analysis.
// Builds a canonical URL map, extracts every existing internal link (reference-based and
// inline PortableText), and computes inbound-link counts / orphans.
const fs = require("fs");
const path = require("path");

const DRAFTS = path.resolve(__dirname, "../drafts");
const blogs = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_inventory-blogs.json"), "utf8"));
const singlepages = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_inventory-singlepages.json"), "utf8"));
const portfolio = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_inventory-portfolio.json"), "utf8"));

function localePrefix(lang) { return lang === "en" ? "" : `/${lang}`; }

// ---- 1. Build canonical URL map ----
const urlMap = {}; // path -> {id, type, lang, title}
const byId = {}; // id -> {path, type, lang, title, slug}

for (const b of blogs) {
  const p = `${localePrefix(b.language)}/blog/${b.slug}`;
  urlMap[p] = { id: b._id, type: "blog", lang: b.language, title: b.title };
  byId[b._id] = { path: p, type: "blog", lang: b.language, title: b.title, slug: b.slug, publishedAt: b.publishedAt, category: b.category };
}
for (const p of portfolio) {
  const pth = `${localePrefix(p.language)}/portfolio/${p.slug}`;
  urlMap[pth] = { id: p._id, type: "portfolio", lang: p.language, title: p.title };
  byId[p._id] = { path: pth, type: "portfolio", lang: p.language, title: p.title, slug: p.slug };
}
for (const s of singlepages) {
  const parentSlug = s.parentPage ? s.parentPage.slug : null;
  const p = parentSlug
    ? `${localePrefix(s.language)}/${parentSlug}/${s.slug}`
    : `${localePrefix(s.language)}/${s.slug}`;
  urlMap[p] = { id: s._id, type: "singlepage", lang: s.language, title: s.title };
  byId[s._id] = { path: p, type: "singlepage", lang: s.language, title: s.title, slug: s.slug, pageType: s.pageType, parentSlug };
  // Also register the flat (pre-redirect) form so old/flat inline links still resolve in the audit.
  if (parentSlug) {
    const flat = `${localePrefix(s.language)}/${s.slug}`;
    if (!urlMap[flat]) urlMap[flat] = { id: s._id, type: "singlepage", lang: s.language, title: s.title, viaRedirect: true };
  }
}

// ---- 2. Walk contentBlocks for inline PortableText links ----
// Safe/rendered rich-text locations: textContent.content, faqBlock.faq.items[].answer,
// doubleTextBlock.{leftContent,rightContent}.blockContent.content, reviewsFullBlock.reviews[].text
function extractLinksFromPTArray(ptArray, out, sourceId, fieldPath) {
  if (!Array.isArray(ptArray)) return;
  for (const block of ptArray) {
    if (!block || block._type !== "block" || !Array.isArray(block.markDefs)) continue;
    for (const md of block.markDefs) {
      if (md._type === "link" && md.href) {
        out.push({ sourceId, fieldPath, href: md.href, text: (block.children || []).map((c) => c.text).join("") });
      }
    }
  }
}

function walkContentBlocks(doc, docId) {
  const links = [];
  const relatedServicesRefs = [];
  const blockTypeCounts = {};
  for (const block of doc.contentBlocks || []) {
    blockTypeCounts[block._type] = (blockTypeCounts[block._type] || 0) + 1;
    if (block._type === "textContent") {
      extractLinksFromPTArray(block.content, links, docId, "textContent.content");
    } else if (block._type === "faqBlock") {
      for (const item of block.faq?.items || []) {
        extractLinksFromPTArray(item.answer, links, docId, "faqBlock.faq.items[].answer");
      }
    } else if (block._type === "doubleTextBlock") {
      for (const side of ["leftContent", "rightContent"]) {
        const bc = block[side]?.blockContent;
        if (bc?.content) extractLinksFromPTArray(bc.content, links, docId, `doubleTextBlock.${side}.blockContent.content`);
      }
    } else if (block._type === "reviewsFullBlock") {
      for (const r of block.reviews || []) {
        extractLinksFromPTArray(r.text, links, docId, "reviewsFullBlock.reviews[].text");
      }
    } else if (block._type === "relatedServicesBlock") {
      for (const item of block.items || []) {
        if (item?._ref) relatedServicesRefs.push(item._ref);
      }
    } else if (block._type === "accordionBlock") {
      // blog uses accordionBlock directly (not wrapped in faqBlock)
      for (const item of block.items || []) {
        extractLinksFromPTArray(item.answer, links, docId, "accordionBlock.items[].answer");
      }
    }
  }
  return { links, relatedServicesRefs, blockTypeCounts };
}

const allDocs = [...blogs.map((b) => ({ ...b, __type: "blog" })), ...singlepages.map((s) => ({ ...s, __type: "singlepage" }))];

const inboundCount = {}; // id -> count
const edges = []; // {sourceId, targetId, kind, lang, resolvedHref, text}
const unresolvedLinks = []; // links that don't match any known page (external or broken)
const blockPresence = {}; // id -> {textContent, faqBlock, doubleTextBlock, reviewsFullBlock}

function addInbound(id) { inboundCount[id] = (inboundCount[id] || 0) + 1; }

for (const doc of allDocs) {
  const { links, relatedServicesRefs, blockTypeCounts } = walkContentBlocks(doc, doc._id);
  blockPresence[doc._id] = {
    textContent: !!blockTypeCounts.textContent,
    faqBlock: !!blockTypeCounts.faqBlock,
    doubleTextBlock: !!blockTypeCounts.doubleTextBlock,
    reviewsFullBlock: !!blockTypeCounts.reviewsFullBlock,
    allBlockTypes: blockTypeCounts,
  };

  // Inline body links
  for (const link of links) {
    let href = link.href.trim();
    // Normalize: strip protocol+domain if absolute
    href = href.replace(/^https?:\/\/(www\.)?bandziuk\.com/i, "");
    const match = urlMap[href];
    if (match && match.id !== doc._id) {
      edges.push({ sourceId: doc._id, targetId: match.id, kind: "inline-body", lang: doc.language, href, text: link.text });
      addInbound(match.id);
    } else if (!match) {
      unresolvedLinks.push({ sourceId: doc._id, href, text: link.text, lang: doc.language });
    }
  }

  // relatedServicesBlock refs
  for (const ref of relatedServicesRefs) {
    if (byId[ref]) {
      edges.push({ sourceId: doc._id, targetId: ref, kind: "relatedServicesBlock", lang: doc.language });
      addInbound(ref);
    }
  }
}

// relatedArticles + serviceOffered (already resolved with ids from the GROQ query, blogs only)
for (const b of blogs) {
  for (const ra of b.relatedArticles || []) {
    edges.push({ sourceId: b._id, targetId: ra._id, kind: "relatedArticles", lang: b.language });
    addInbound(ra._id);
  }
  for (const so of b.serviceOffered || []) {
    edges.push({ sourceId: b._id, targetId: so._id, kind: "serviceOffered", lang: b.language });
    addInbound(so._id);
  }
}

// ---- 3. Orphans: fewer than 3 inbound (across all edge kinds above) ----
const orphans = allDocs
  .map((d) => ({ id: d._id, type: d.__type, lang: d.language, title: d.title, slug: byId[d._id]?.path, inbound: inboundCount[d._id] || 0 }))
  .filter((d) => d.inbound < 3)
  .sort((a, b) => a.inbound - b.inbound);

// ---- 4. Outbound counts per doc (for the 8-link cap, tracked for context) ----
const outboundCount = {};
for (const e of edges) {
  if (e.kind === "inline-body" || e.kind === "relatedServicesBlock") {
    outboundCount[e.sourceId] = (outboundCount[e.sourceId] || 0) + 1;
  }
}

// ---- Output ----
fs.writeFileSync(path.join(DRAFTS, "_link-graph-urlmap.json"), JSON.stringify(byId, null, 2));
fs.writeFileSync(path.join(DRAFTS, "_link-graph-edges.json"), JSON.stringify(edges, null, 2));
fs.writeFileSync(path.join(DRAFTS, "_link-graph-orphans.json"), JSON.stringify(orphans, null, 2));
fs.writeFileSync(path.join(DRAFTS, "_link-graph-unresolved.json"), JSON.stringify(unresolvedLinks, null, 2));
fs.writeFileSync(path.join(DRAFTS, "_link-graph-blockpresence.json"), JSON.stringify(blockPresence, null, 2));
fs.writeFileSync(path.join(DRAFTS, "_link-graph-outbound.json"), JSON.stringify(outboundCount, null, 2));

console.log("=== SUMMARY ===");
console.log(`Total docs: ${allDocs.length} (${blogs.length} blog, ${singlepages.length} singlepage)`);
console.log(`Total edges found: ${edges.length}`);
console.log(`  by kind: ${JSON.stringify(edges.reduce((a, e) => { a[e.kind] = (a[e.kind]||0)+1; return a; }, {}))}`);
console.log(`Unresolved inline links (external or broken): ${unresolvedLinks.length}`);
console.log(`Orphans (<3 inbound): ${orphans.length}`);
console.log(`Docs exceeding 8 outbound (inline+relatedServicesBlock only): ${Object.entries(outboundCount).filter(([,c]) => c > 8).length}`);

console.log("\n=== UNRESOLVED LINKS (sample, first 30) ===");
for (const u of unresolvedLinks.slice(0, 30)) {
  console.log(`  [${u.lang}] ${u.sourceId} -> "${u.href}" (text: "${u.text.slice(0,40)}")`);
}

console.log("\nFull data written to drafts/_link-graph-*.json");
