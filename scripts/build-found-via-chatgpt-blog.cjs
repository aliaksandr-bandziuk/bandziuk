// scripts/build-found-via-chatgpt-blog.cjs
//
// Dry-run builder for the blog-found-via-chatgpt post (EN/PL/RU).
// Parses the three draft markdown files into the exact PortableText shape
// used by prior cost articles (quick-answer blockquote textContent ->
// faqBlock -> closing textContent), with special handling for the four
// screenshot placeholders inside block 1. Prints the fully resolved
// structure for review. Does NOT write to Sanity.
//
// Screenshot placeholders are extracted (query/result/caption/alt) but
// emitted as a distinct marker object (__screenshot) rather than a real
// Sanity image, pending the owner's decision on caption handling (the
// inline image type in contentBlock.ts only has an `alt` field, no caption).
//
// Usage: node scripts/build-found-via-chatgpt-blog.cjs

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

// Strip a leading label ("Caption:" / "Podpis:" / "Подпись:" / "Alt:") and any
// surrounding quote marks (straight ", curly „ ", or guillemets « »), plus a
// trailing "]" if present (closing the whole placeholder bracket).
function stripLabelAndQuotes(line) {
  let s = line.trim().replace(/^[A-ZА-ЯЁa-zа-яё]+:\s*/, "");
  if (s.endsWith("]")) s = s.slice(0, -1);
  s = s.trim();
  s = s.replace(/^[„"«]/, "").replace(/[”"»]$/, "");
  return s.trim();
}

// Matches a screenshot placeholder group: 3 lines, first starts with
// [SCREENSHOT / [ZRZUT / [СКРИНШОТ
function parseScreenshotGroup(g) {
  const firstLine = g[0].trim();
  const m = firstLine.match(/^\[(?:SCREENSHOT|ZRZUT|СКРИНШОТ)\s+(\d+)\s*—\s*(.+)$/i);
  if (!m) return null;
  return {
    __screenshot: true,
    number: parseInt(m[1], 10),
    queryAndResult: m[2].trim(),
    caption: stripLabelAndQuotes(g[1]),
    alt: stripLabelAndQuotes(g[2]),
  };
}

function parseBodyBlocks(raw) {
  const groups = groupLines(raw);
  const blocks = [];
  for (const g of groups) {
    if (g.length === 3 && /^\[(SCREENSHOT|ZRZUT|СКРИНШОТ)/i.test(g[0].trim())) {
      const shot = parseScreenshotGroup(g);
      if (shot) {
        blocks.push(shot);
        continue;
      }
    }
    if (g.length === 2 && /^\*\*.+\*\*$/.test(g[0].trim())) {
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

const LOCALES = {
  en: {
    file: "blog-how-clients-find-you-through-chatgpt-EN.md",
    h1: "# How Clients Find Specialists Through ChatGPT: A Real Case and How It Works",
    faqHeading: "## Frequently asked questions",
    closingHeading: "## Where to start",
  },
  pl: {
    file: "blog-jak-klienci-znajduja-przez-chatgpt-PL.md",
    h1: "# Jak klienci znajdują specjalistów przez ChatGPT: prawdziwy case i rozbiór mechaniki",
    faqHeading: "## Najczęstsze pytania",
    closingHeading: "## Od czego zacząć",
  },
  ru: {
    file: "blog-kak-klienty-nahodyat-cherez-chatgpt-RU.md",
    h1: "# Как клиенты находят специалистов через ChatGPT: реальный кейс и разбор механики",
    faqHeading: "## Частые вопросы",
    closingHeading: "## С чего начать",
  },
};

const result = {};

for (const [lang, cfg] of Object.entries(LOCALES)) {
  const full = fs.readFileSync(path.resolve(__dirname, "../drafts", cfg.file), "utf8");
  const h1Idx = full.indexOf(cfg.h1);
  if (h1Idx === -1) throw new Error(`H1 not found for ${lang}`);
  const afterH1 = full.slice(h1Idx + cfg.h1.length);

  const faqIdx = afterH1.indexOf(cfg.faqHeading);
  // closingHeading appears twice for PL/RU ("## Od czego zacząć" for both the
  // last practical-steps intro line doesn't repeat, but "## С чего начать" is
  // unique) -- use lastIndexOf to get the true closing section, not a substring hit.
  const closingIdx = afterH1.lastIndexOf(cfg.closingHeading);
  if (faqIdx === -1 || closingIdx === -1) throw new Error(`section marker missing for ${lang}`);

  const preFaq = afterH1.slice(0, faqIdx).trim();
  const faqSection = afterH1.slice(faqIdx, closingIdx).trim();
  const closingSection = afterH1.slice(closingIdx).trim();

  const block1Content = parseBodyBlocks(preFaq);

  const faqGroups = groupLines(faqSection);
  const faqTitleLine = faqGroups[0].join(" ").trim().replace(/^##\s+/, "");
  const faqBodyRaw = faqSection.slice(faqSection.indexOf("\n")).trim();
  const faqParsed = parseBodyBlocks(faqBodyRaw);
  const qaItems = faqParsed.filter((b) => b.__qa);
  if (qaItems.length !== 7) {
    throw new Error(`expected 7 FAQ pairs for ${lang}, got ${qaItems.length}`);
  }

  const block3Content = parseBodyBlocks(closingSection);

  const screenshots = block1Content.filter((b) => b.__screenshot);
  if (screenshots.length !== 4) {
    throw new Error(`expected 4 screenshot placeholders for ${lang}, got ${screenshots.length}`);
  }

  result[lang] = {
    block1Content,
    faqTitle: faqTitleLine,
    qaItems: qaItems.map((qa) => ({ _key: key(), question: qa.question, answer: qa.answer })),
    block3Content,
  };
}

fs.writeFileSync(
  path.resolve(__dirname, "../drafts/_found-via-chatgpt-parsed.json"),
  JSON.stringify(result, null, 2)
);

for (const [lang, r] of Object.entries(result)) {
  console.log(`\n========== ${lang.toUpperCase()} ==========`);
  console.log(`Block 1 (textContent) — ${r.block1Content.length} items (blocks + screenshot markers)`);
  r.block1Content.forEach((b, i) => {
    if (b.__screenshot) {
      console.log(`  [${i}] SCREENSHOT ${b.number} — query/result: "${b.queryAndResult.slice(0, 70)}..."`);
      console.log(`        caption: "${b.caption}"`);
      console.log(`        alt: "${b.alt}"`);
    } else {
      console.log(`  [${i}] [${b.style}] "${b.children.map((s) => s.text).join("").slice(0, 80)}"`);
    }
  });
  console.log(`Block 2 (faqBlock) — title: "${r.faqTitle}", items: ${r.qaItems.length}`);
  r.qaItems.forEach((qa, i) => console.log(`  q${i + 1}: ${qa.question}`));
  console.log(`Block 3 (textContent) — ${r.block3Content.length} blocks`);
  r.block3Content.forEach((b) => console.log(`  [${b.style}] "${b.children.map((s) => s.text).join("").slice(0, 90)}"`));
}

console.log("\nParsed JSON written to drafts/_found-via-chatgpt-parsed.json");
