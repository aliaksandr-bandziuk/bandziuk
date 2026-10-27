// scripts/dump-ai-retrofit.cjs
//
// Read-only. For every page in research/pseo/ai-retrofit.csv with ai_headings == 0
// (64 SEO pages without an AI-search section, list of 22.10.2026) dumps what a
// writer needs to add a niche-specific AI-search section: H1, meta title, every
// text block as plain text with headings marked, FAQ questions, and the place
// where the section would go (the last paragraph of the main text block).
// Writes research/pseo/ai-retrofit-pages.json. Nothing is written to Sanity.
//
// Usage: node scripts/dump-ai-retrofit.cjs

const fs = require("fs");
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

const root = path.resolve(__dirname, "..");
const rows = fs.readFileSync(path.join(root, "research/pseo/ai-retrofit.csv"), "utf8").trim().split(/\r?\n/).slice(1)
  .map((l) => l.split(","))
  .filter((c) => c[c.length - 1].trim() === "0")
  .map((c) => ({ batch: c[0], lang: c[1], id: c[2], slug: c[3] }));

const plain = (b) => (b.children || []).map((c) => c.text || "").join("");
const AI = /chatgpt|ai overview|\bai\b|\bgeo\b|\baeo\b|нейросет|ии-поиск|\bии\b|sztuczn/i;

function textOf(content) {
  return (content || []).map((b) => {
    if (b._type !== "block") return "";
    const t = plain(b).trim();
    if (!t) return "";
    if (/^h[1-6]$/.test(b.style || "")) return `\n## ${t}`;
    return b.listItem ? `- ${t}` : t;
  }).filter(Boolean).join("\n");
}

async function main() {
  const out = [];
  for (const r of rows) {
    const d = await client.fetch(`*[_id == $id][0]`, { id: r.id });
    if (!d) { console.log(`missing ${r.id}`); out.push({ ...r, missing: true }); continue; }
    const blocks = d.contentBlocks || [];
    const texts = blocks.filter((b) => b._type === "textContent");
    const paras = (x) => (x.content || []).filter((y) => !/^h[1-6]$/.test(y.style || "")).length;
    const main = texts.find((x) => x.layout === "guide") || [...texts].sort((x, y) => paras(y) - paras(x))[0];
    const headings = blocks.flatMap((b) => (b.content || []).filter((y) => /^h[1-6]$/.test(y.style || "")).map(plain));
    const faq = blocks.filter((b) => b._type === "faqBlock").flatMap((b) => ((b.faq && b.faq.items) || b.items || []).map((q) => q.question)).filter(Boolean);
    const allText = texts.map((t) => textOf(t.content)).join("\n\n");
    out.push({
      ...r,
      type: d._type,
      h1: d.heading || (d.title && (d.title[r.lang] || d.title)) || "",
      metaTitle: (d.seo && d.seo.metaTitle) || "",
      blockOrder: blocks.map((b) => b._type + (b.layout ? `:${b.layout}` : "")).join(" → "),
      aiHeadingsNow: headings.filter((h) => AI.test(h)),
      mainBlockKey: main ? main._key : null,
      words: allText.split(/\s+/).filter(Boolean).length,
      faq,
      text: allText,
    });
    console.log(`ok  ${r.lang} ${r.slug}  (${out[out.length - 1].words} words, AI headings now: ${out[out.length - 1].aiHeadingsNow.length})`);
  }
  const file = path.join(root, "research/pseo/ai-retrofit-pages.json");
  fs.writeFileSync(file, JSON.stringify(out, null, 1));
  console.log(`\nWritten: research/pseo/ai-retrofit-pages.json — ${out.length} pages.`);
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
