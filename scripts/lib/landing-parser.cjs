// scripts/lib/landing-parser.cjs
//
// Shared parser for landing-page tagged-content files (PAGE_CREATION.md
// format). Used across all 20-landing-project batches. Extracts [HERO],
// [META], [PAIN], [FEATURES], [SEO_TEXT], [STEPS], [FAQ], [CTA] per locale
// from a single tagged markdown file.

const fs = require("fs");
const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

function block(style, text) {
  return {
    _key: key(),
    _type: "block",
    children: [{ _key: key(), _type: "span", marks: [], text }],
    markDefs: [],
    style,
  };
}

// Extract a top-level [TAG] section's raw body (from the tag line to the next "---").
function extractSection(raw, tagLine) {
  const idx = raw.indexOf(tagLine);
  if (idx === -1) throw new Error(`section not found: ${tagLine}`);
  const afterTag = raw.slice(idx + tagLine.length);
  const endIdx = afterTag.indexOf("\n---");
  return (endIdx === -1 ? afterTag : afterTag.slice(0, endIdx)).trim();
}

// Split a section body into per-locale chunks keyed by "EN:", "PL:", "RU:" line markers.
function splitByLocale(sectionBody) {
  const re = /^(EN|PL|RU):[ \t]*$/gm;
  const positions = [];
  let m;
  while ((m = re.exec(sectionBody)) !== null) {
    positions.push({ lang: m[1].toLowerCase(), markerStart: m.index, markerEnd: re.lastIndex });
  }
  const out = {};
  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].markerEnd;
    const end = i + 1 < positions.length ? positions[i + 1].markerStart : sectionBody.length;
    out[positions[i].lang] = sectionBody.slice(start, end).trim();
  }
  return out;
}

// Parse "N. Title\n   Description" numbered items (blank-line separated) into {title, description}[].
function parseNumberedItems(text) {
  const chunks = text.split(/\n\s*\n/).map((c) => c.trim()).filter(Boolean);
  const items = [];
  for (const chunk of chunks) {
    const m = chunk.match(/^\d+\.\s*(.+?)\n\s*(.+)$/s);
    if (m) {
      items.push({ title: m[1].trim(), description: m[2].trim().replace(/\s+/g, " ") });
    }
  }
  return items;
}

function firstLineValue(text, label) {
  const re = new RegExp(`^${label}:\\s*(.+)$`, "m");
  const m = text.match(re);
  return m ? m[1].trim() : null;
}

// Parse a full tagged-content file into { HERO, META, PAIN, FEATURES, SEO_TEXT, STEPS, FAQ, CTA }.
function parseTaggedFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const LANGS = ["en", "pl", "ru"];

  const heroBody = splitByLocale(extractSection(raw, "[HERO]"));
  const HERO = {};
  for (const lang of LANGS) {
    HERO[lang] = {
      headline: firstLineValue(heroBody[lang], "headline"),
      subheadline: firstLineValue(heroBody[lang], "subheadline"),
    };
  }

  const metaBody = splitByLocale(extractSection(raw, "[META]"));
  const META = {};
  for (const lang of LANGS) {
    META[lang] = {
      metaTitle: firstLineValue(metaBody[lang], "metaTitle"),
      metaDescription: firstLineValue(metaBody[lang], "metaDescription"),
    };
  }

  const painBody = splitByLocale(extractSection(raw, "[PAIN] → benefitsBlock"));
  const PAIN = {};
  for (const lang of LANGS) {
    const title = firstLineValue(painBody[lang], "title");
    const rest = painBody[lang].replace(/^title:.*$/m, "").trim();
    PAIN[lang] = { title, items: parseNumberedItems(rest) };
  }

  const featuresBody = splitByLocale(extractSection(raw, "[FEATURES] → gridBlock"));
  const FEATURES = {};
  for (const lang of LANGS) {
    const title = firstLineValue(featuresBody[lang], "title");
    const rest = featuresBody[lang].replace(/^title:.*$/m, "").trim();
    FEATURES[lang] = { title, items: parseNumberedItems(rest) };
  }

  const seoTextBody = splitByLocale(extractSection(raw, "[SEO_TEXT] → textContent"));
  const SEO_TEXT = {};
  for (const lang of LANGS) {
    const title = firstLineValue(seoTextBody[lang], "title");
    const rest = seoTextBody[lang].replace(/^title:.*$/m, "").trim();
    const paragraphs = rest.split(/\n\s*\n/).map((p) => p.trim().replace(/\s+/g, " ")).filter(Boolean);
    SEO_TEXT[lang] = { content: [block("h2", title), ...paragraphs.map((p) => block("normal", p))] };
  }

  const stepsBody = splitByLocale(extractSection(raw, "[STEPS] → stepsBlock"));
  const STEPS = {};
  for (const lang of LANGS) {
    const title = firstLineValue(stepsBody[lang], "title");
    const rest = stepsBody[lang].replace(/^title:.*$/m, "").trim();
    STEPS[lang] = { title, items: parseNumberedItems(rest) };
  }

  const faqBody = splitByLocale(extractSection(raw, "[FAQ] → faqBlock"));
  const FAQ = {};
  for (const lang of LANGS) {
    const title = firstLineValue(faqBody[lang], "title");
    const rest = faqBody[lang].replace(/^title:.*$/m, "").trim();
    FAQ[lang] = { title, items: parseNumberedItems(rest) };
  }

  const ctaBody = splitByLocale(extractSection(raw, "[CTA] → landingCtaBlock"));
  const CTA = {};
  for (const lang of LANGS) {
    CTA[lang] = {
      title: firstLineValue(ctaBody[lang], "title"),
      text: firstLineValue(ctaBody[lang], "text"),
      button: firstLineValue(ctaBody[lang], "button"),
    };
  }

  return { HERO, META, PAIN, FEATURES, SEO_TEXT, STEPS, FAQ, CTA };
}

module.exports = { parseTaggedFile, key };
