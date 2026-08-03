// scripts/build-realestate-checklist-blog.cjs
//
// Dry-run builder for the blog-real-estate-agency-checklist post (EN/PL/RU).
// STRUCTURAL DIFFERENCE from prior articles: no faqBlock -- the entire body
// (quick-answer blockquote through the closing section) is a SINGLE
// textContent block. Parses the three draft markdown files and prints the
// fully resolved structure for review. Does NOT write to Sanity.
//
// Usage: node scripts/build-realestate-checklist-blog.cjs

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

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

// No FAQ Q&A detection needed for this article (no faqBlock), so every group
// is just one paragraph -- join multi-line groups and detect heading/quote markers.
function parseBodyBlocks(raw) {
  const groups = groupLines(raw);
  const blocks = [];
  for (const g of groups) {
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

const LOCALES = {
  en: {
    file: "blog-what-a-real-estate-agency-website-needs-EN.md",
    h1: "# What a Real Estate Agency Website Needs: A Checklist",
  },
  pl: {
    file: "blog-co-powinno-byc-na-stronie-biura-nieruchomosci-PL.md",
    h1: "# Co powinno być na stronie biura nieruchomości: checklista",
  },
  ru: {
    file: "blog-chto-dolzhno-byt-na-saite-agentstva-RU.md",
    h1: "# Что должно быть на сайте агентства недвижимости: чек-лист",
  },
};

const result = {};

for (const [lang, cfg] of Object.entries(LOCALES)) {
  const full = fs.readFileSync(path.resolve(__dirname, "../drafts", cfg.file), "utf8");
  const h1Idx = full.indexOf(cfg.h1);
  if (h1Idx === -1) throw new Error(`H1 not found for ${lang}`);
  const afterH1 = full.slice(h1Idx + cfg.h1.length).trim();

  const content = parseBodyBlocks(afterH1);

  // Sanity check: no accidental h1 in the body, no ordered-list markers.
  if (content.some((b) => b.style === "h1")) throw new Error(`h1 style leaked into body for ${lang}`);

  result[lang] = { content };
}

fs.writeFileSync(
  path.resolve(__dirname, "../drafts/_realestate-checklist-parsed.json"),
  JSON.stringify(result, null, 2)
);

for (const [lang, r] of Object.entries(result)) {
  console.log(`\n========== ${lang.toUpperCase()} ==========`);
  console.log(`Single textContent block — ${r.content.length} PT blocks`);
  console.log(`  first: [${r.content[0].style}] "${r.content[0].children.map((s) => s.text).join("").slice(0, 100)}"`);
  console.log(`  last:  [${r.content[r.content.length - 1].style}] "${r.content[r.content.length - 1].children.map((s) => s.text).join("").slice(0, 100)}"`);
  const styleCounts = {};
  r.content.forEach((b) => { styleCounts[b.style] = (styleCounts[b.style] || 0) + 1; });
  console.log(`  style breakdown: ${JSON.stringify(styleCounts)}`);
}

console.log("\nParsed JSON written to drafts/_realestate-checklist-parsed.json");
