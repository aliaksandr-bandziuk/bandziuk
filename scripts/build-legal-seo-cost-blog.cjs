// scripts/build-legal-seo-cost-blog.cjs
//
// Dry-run builder for the blog-legal-seo-cost post (EN/PL/RU).
// Parses the three draft markdown files into the exact PortableText shape
// used by blog-seo-cost (quick-answer blockquote textContent -> faqBlock ->
// closing textContent), and prints the fully resolved document structure
// for review. Does NOT write to Sanity — see apply-legal-seo-cost-blog.cjs
// for the write step, run only after explicit approval.
//
// Usage: node scripts/build-legal-seo-cost-blog.cjs

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

// --- inline **bold** parser -> array of spans ---
function parseInline(text) {
  const spans = [];
  const re = /\*\*(.+?)\*\*/g;
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      spans.push({ _key: key(), _type: "span", marks: [], text: text.slice(last, m.index) });
    }
    spans.push({ _key: key(), _type: "span", marks: ["strong"], text: m[1] });
    last = re.lastIndex;
  }
  if (last < text.length) {
    spans.push({ _key: key(), _type: "span", marks: [], text: text.slice(last) });
  }
  return spans;
}

function block(style, text) {
  return {
    _key: key(),
    _type: "block",
    children: parseInline(text),
    markDefs: [],
    style,
  };
}

// Split raw text into blank-line-separated groups, each group being an array of its raw lines.
function groupLines(raw) {
  const lines = raw.split("\n");
  const groups = [];
  let current = [];
  for (const line of lines) {
    if (line.trim() === "") {
      if (current.length) groups.push(current);
      current = [];
    } else {
      current.push(line);
    }
  }
  if (current.length) groups.push(current);
  return groups;
}

// Parse a body segment (markdown, no H1) into an array of PortableText blocks.
function parseBodyBlocks(raw) {
  const groups = groupLines(raw);
  const blocks = [];
  for (const g of groups) {
    if (g.length === 2 && /^\*\*.+\*\*$/.test(g[0].trim())) {
      // FAQ-style Q&A pair
      const question = g[0].trim().replace(/^\*\*(.+)\*\*$/, "$1");
      blocks.push({ __qa: true, question, answer: [block("normal", g[1].trim())] });
      continue;
    }
    const line = g.join(" ").trim();
    if (line.startsWith("### ")) {
      blocks.push(block("h3", line.slice(4).trim()));
    } else if (line.startsWith("## ")) {
      blocks.push(block("h2", line.slice(3).trim()));
    } else if (line.startsWith("> ")) {
      blocks.push(block("blockquote", line.slice(2).trim()));
    } else {
      blocks.push(block("normal", line));
    }
  }
  return blocks;
}

function extractSection(md, startMarker, endMarker) {
  const startIdx = md.indexOf(startMarker);
  if (startIdx === -1) throw new Error(`marker not found: ${startMarker}`);
  const afterStart = md.slice(startIdx);
  if (!endMarker) return afterStart;
  const endIdx = afterStart.indexOf(endMarker);
  if (endIdx === -1) throw new Error(`end marker not found: ${endMarker}`);
  return afterStart.slice(0, endIdx);
}

const LOCALES = {
  en: {
    file: "blog-how-much-legal-seo-costs-EN.md",
    h1: "# How Much SEO for a Law Firm Costs: A Complete Pricing Guide",
    faqHeading: "## Frequently asked questions",
    summaryHeading: "## Summary",
  },
  pl: {
    file: "blog-ile-kosztuje-seo-dla-prawnikow-PL.md",
    h1: "# Ile kosztuje pozycjonowanie SEO strony kancelarii prawnej",
    faqHeading: "## Najczęstsze pytania",
    summaryHeading: "## Podsumowanie",
  },
  ru: {
    file: "blog-skolko-stoit-seo-yuristov-RU.md",
    h1: "# Сколько стоит SEO-продвижение сайта юридической компании",
    faqHeading: "## Частые вопросы",
    summaryHeading: "## Итог",
  },
};

const result = {};

for (const [lang, cfg] of Object.entries(LOCALES)) {
  const full = fs.readFileSync(path.resolve(__dirname, "../drafts", cfg.file), "utf8");
  const h1Idx = full.indexOf(cfg.h1);
  if (h1Idx === -1) throw new Error(`H1 not found for ${lang}`);
  const afterH1 = full.slice(h1Idx + cfg.h1.length);

  const faqIdx = afterH1.indexOf(cfg.faqHeading);
  const summaryIdx = afterH1.indexOf(cfg.summaryHeading);
  if (faqIdx === -1 || summaryIdx === -1) throw new Error(`section marker missing for ${lang}`);

  const preFaq = afterH1.slice(0, faqIdx).trim();
  const faqSection = afterH1.slice(faqIdx, summaryIdx).trim();
  const summarySection = afterH1.slice(summaryIdx).trim();

  // Block 1: textContent
  const block1Content = parseBodyBlocks(preFaq);

  // Block 2: faqBlock
  const faqGroups = groupLines(faqSection);
  const faqTitleLine = faqGroups[0].join(" ").trim().replace(/^##\s+/, "");
  const faqBodyRaw = faqSection.slice(faqSection.indexOf("\n")).trim();
  const faqParsed = parseBodyBlocks(faqBodyRaw);
  const qaItems = faqParsed.filter((b) => b.__qa);
  if (qaItems.length !== 6) {
    throw new Error(`expected 6 FAQ pairs for ${lang}, got ${qaItems.length}`);
  }

  // Block 3: textContent (Summary)
  const block3Content = parseBodyBlocks(summarySection);

  result[lang] = {
    block1Content,
    faqTitle: faqTitleLine,
    qaItems: qaItems.map((qa) => ({
      _key: key(),
      question: qa.question,
      answer: qa.answer,
    })),
    block3Content,
  };
}

fs.writeFileSync(
  path.resolve(__dirname, "../drafts/_legal-seo-cost-parsed.json"),
  JSON.stringify(result, null, 2)
);

// --- human-readable preview ---
for (const [lang, r] of Object.entries(result)) {
  console.log(`\n========== ${lang.toUpperCase()} ==========`);
  console.log(`Block 1 (textContent) — ${r.block1Content.length} portable-text blocks`);
  console.log(`  first: [${r.block1Content[0].style}] "${r.block1Content[0].children.map((s) => s.text).join("")}"`.slice(0, 160));
  console.log(`  last:  [${r.block1Content[r.block1Content.length - 1].style}] "${r.block1Content[r.block1Content.length - 1].children.map((s) => s.text).join("")}"`.slice(0, 160));
  console.log(`Block 2 (faqBlock) — title: "${r.faqTitle}"`);
  r.qaItems.forEach((qa, i) => {
    console.log(`  q${i + 1}: ${qa.question}`);
    console.log(`  a${i + 1}: ${qa.answer[0].children.map((s) => s.text).join("").slice(0, 100)}...`);
  });
  console.log(`Block 3 (textContent) — ${r.block3Content.length} portable-text blocks`);
  r.block3Content.forEach((b) => {
    console.log(`  [${b.style}] "${b.children.map((s) => s.text).join("").slice(0, 100)}"`);
  });
}

console.log("\nParsed JSON written to drafts/_legal-seo-cost-parsed.json");
