// scripts/build-redesign-traffic-loss-blog.cjs
//
// Dry-run builder for the blog-redesign-traffic-loss post (EN/PL/RU).
// Parses the three draft markdown files into the exact PortableText shape
// used by prior cost/case articles (quick-answer blockquote textContent ->
// faqBlock -> closing textContent). No images in this post.
// Prints the fully resolved structure for review. Does NOT write to Sanity.
//
// Usage: node scripts/build-redesign-traffic-loss-blog.cjs

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

// Find a block whose text contains `phrase` in full, and wrap that phrase in
// a link markDef (preserving any existing marks on the span it's found in).
function linkify(blocks, phrase, href) {
  for (const b of blocks) {
    if (!b.children) continue;
    for (let i = 0; i < b.children.length; i++) {
      const span = b.children[i];
      const idx = span.text.indexOf(phrase);
      if (idx !== -1) {
        const before = span.text.slice(0, idx);
        const after = span.text.slice(idx + phrase.length);
        const linkKey = key();
        b.markDefs = b.markDefs || [];
        b.markDefs.push({ _key: linkKey, _type: "link", href });
        const newSpans = [];
        if (before) newSpans.push({ _key: key(), _type: "span", marks: [...span.marks], text: before });
        newSpans.push({ _key: key(), _type: "span", marks: [...span.marks, linkKey], text: phrase });
        if (after) newSpans.push({ _key: key(), _type: "span", marks: [...span.marks], text: after });
        b.children.splice(i, 1, ...newSpans);
        return true;
      }
    }
  }
  return false;
}

const VIBECODING_URL = {
  en: "https://www.bandziuk.com/blog/how-vibecoding-almost-killed-a-website",
  pl: "https://www.bandziuk.com/pl/blog/jak-vibecoding-prawie-zabil-strone",
  ru: "https://www.bandziuk.com/ru/blog/kak-vaibkoding-pochti-ubil-sait",
};

const AUDIT_URL = {
  en: "https://www.bandziuk.com/services/seo-audit",
  pl: "https://www.bandziuk.com/pl/oferty/audyt-seo-strony-internetowej",
  ru: "https://www.bandziuk.com/ru/uslugi/seo-audit-saita",
};

// Exact anchor phrases per locale (must match source text verbatim).
const LINK_PHRASES = {
  en: {
    vibe1: "I published a separate breakdown of that case",
    vibe2: "I published a detailed breakdown of that case separately",
    auditBold: "Technical audit",
    auditFaq: "A technical audit starts at €250",
  },
  pl: {
    vibe1: "analizę tego przypadku opisywałem osobno",
    vibe2: "Szczegółową analizę tego przypadku opisywałem osobno",
    auditBold: "Audyt techniczny",
    auditFaq: "Audyt techniczny kosztuje od 250 €",
  },
  ru: {
    vibe1: "разбор этого случая я публиковал отдельно",
    vibe2: "Подробный разбор этого случая я публиковал отдельно",
    auditBold: "Технический аудит",
    auditFaq: "Технический аудит стоит от 250 €",
  },
};

const LOCALES = {
  en: {
    file: "blog-website-redesign-without-losing-traffic-EN.md",
    h1: "# Website Redesign Without Losing Traffic: What to Check Before, During and After",
    faqHeading: "## FAQ",
    closingHeading: "## Where to start",
  },
  pl: {
    file: "blog-redesign-strony-bez-utraty-ruchu-PL.md",
    h1: "# Redesign strony bez utraty ruchu: co sprawdzić przed, w trakcie i po",
    faqHeading: "## Częste pytania",
    closingHeading: "## Od czego zacząć",
  },
  ru: {
    file: "blog-redizayn-sayta-bez-poteri-trafika-RU.md",
    h1: "# Редизайн сайта без потери трафика: что проверить до, во время и после",
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
  const closingIdx = afterH1.indexOf(cfg.closingHeading, faqIdx);
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

  // Apply the four required in-body links.
  const p = LINK_PHRASES[lang];
  const linkResults = {
    vibe1: linkify(block1Content, p.vibe1, VIBECODING_URL[lang]),
    vibe2: linkify(block1Content, p.vibe2, VIBECODING_URL[lang]),
    auditBold: linkify(block1Content, p.auditBold, AUDIT_URL[lang]),
  };
  // auditFaq lives inside the FAQ answer about audit cost -- find that QA item.
  const auditFaqItem = qaItems.find((qa) => qa.answer[0].children.some((c) => c.text.includes(p.auditFaq)));
  linkResults.auditFaq = auditFaqItem ? linkify(auditFaqItem.answer, p.auditFaq, AUDIT_URL[lang]) : false;

  for (const [name, ok] of Object.entries(linkResults)) {
    if (!ok) throw new Error(`link phrase not found for ${lang}/${name}: "${p[name]}"`);
  }

  result[lang] = {
    block1Content,
    faqTitle: faqTitleLine,
    qaItems: qaItems.map((qa) => ({ _key: key(), question: qa.question, answer: qa.answer })),
    block3Content,
    linkResults,
  };
}

fs.writeFileSync(
  path.resolve(__dirname, "../drafts/_redesign-traffic-loss-parsed.json"),
  JSON.stringify(result, null, 2)
);

for (const [lang, r] of Object.entries(result)) {
  console.log(`\n========== ${lang.toUpperCase()} ==========`);
  console.log(`Block 1 (textContent) — ${r.block1Content.length} blocks`);
  console.log(`  first: [${r.block1Content[0].style}] "${r.block1Content[0].children.map((s) => s.text).join("").slice(0, 100)}"`);
  console.log(`  last:  [${r.block1Content[r.block1Content.length - 1].style}] "${r.block1Content[r.block1Content.length - 1].children.map((s) => s.text).join("").slice(0, 100)}"`);
  console.log(`Block 2 (faqBlock) — title: "${r.faqTitle}", items: ${r.qaItems.length}`);
  r.qaItems.forEach((qa, i) => console.log(`  q${i + 1}: ${qa.question}`));
  console.log(`Block 3 (textContent) — ${r.block3Content.length} blocks`);
  console.log(`Link placements: ${JSON.stringify(r.linkResults)}`);
}

console.log("\nParsed JSON written to drafts/_redesign-traffic-loss-parsed.json");
