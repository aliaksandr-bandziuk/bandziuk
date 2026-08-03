// scripts/build-builder-vs-custom-blog.cjs
//
// Dry-run builder for the blog-builder-vs-custom post (EN/PL/RU). No
// faqBlock -- the entire body (quick-answer blockquote through the closing
// section) is a SINGLE textContent block. Parses the three draft markdown
// files and prints the fully resolved structure for review. Does NOT write
// to Sanity.
//
// Usage: node scripts/build-builder-vs-custom-blog.cjs

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
    file: "blog-website-builder-vs-custom-development-EN.md",
    h1: "# Website Builder vs Custom Development: How to Choose and Not Pay Twice",
  },
  pl: {
    file: "blog-kreator-czy-strona-na-zamowienie-PL.md",
    h1: "# Kreator stron czy strona na zamówienie: jak wybrać i nie zapłacić dwa razy",
  },
  ru: {
    file: "blog-konstruktor-ili-razrabotka-RU.md",
    h1: "# Конструктор или индивидуальная разработка: как выбрать и не переплатить дважды",
  },
};

const result = {};

for (const [lang, cfg] of Object.entries(LOCALES)) {
  const full = fs.readFileSync(path.resolve(__dirname, "../drafts", cfg.file), "utf8");
  const h1Idx = full.indexOf(cfg.h1);
  if (h1Idx === -1) throw new Error(`H1 not found for ${lang}`);
  const afterH1 = full.slice(h1Idx + cfg.h1.length).trim();

  const content = parseBodyBlocks(afterH1);

  if (content.some((b) => b.style === "h1")) throw new Error(`h1 style leaked into body for ${lang}`);

  result[lang] = { content };
}

fs.writeFileSync(
  path.resolve(__dirname, "../drafts/_builder-vs-custom-parsed.json"),
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

console.log("\nParsed JSON written to drafts/_builder-vs-custom-parsed.json");
