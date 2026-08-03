// scripts/build-dental-clinic-landing.cjs
//
// Dry-run builder for the singlepage-dental-clinic-website landing (EN/PL/RU),
// following PAGE_CREATION.md's landing-page block mapping. Parses the tagged
// content file and prints the fully resolved structure for review. Does NOT
// write to Sanity.
//
// Known precedent (confirmed live on the psychologist landing, owner
// approved proceeding anyway): benefitsBlock and landingCtaBlock components
// ignore their Sanity fields and render hardcoded generic content. Fields
// are still populated here for consistency with existing pages and schema
// correctness -- they just won't visibly render until those components are
// fixed (out of scope for this task, per owner's explicit choice).
//
// relatedServicesBlock (7th block, singlepage-only refs) links the
// psychologist/therapist landing. The two blog articles (builder-vs-custom,
// SEO cost) are NOT linked anywhere on this page -- no schema field accepts
// blog references from a singlepage document (owner's explicit choice).
//
// Usage: node scripts/build-dental-clinic-landing.cjs

const fs = require("fs");
const path = require("path");
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

const raw = fs.readFileSync(
  path.resolve(__dirname, "../drafts/landing-dental-clinic-tagged-content.md"),
  "utf8"
);

// Extract a top-level [TAG] section's raw body (from the tag line to the next "---").
function extractSection(tagLine) {
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

// --- HERO ---
const heroBody = splitByLocale(extractSection("[HERO]"));
const HERO = {};
for (const lang of ["en", "pl", "ru"]) {
  HERO[lang] = {
    headline: firstLineValue(heroBody[lang], "headline"),
    subheadline: firstLineValue(heroBody[lang], "subheadline"),
  };
}

// --- META ---
const metaBody = splitByLocale(extractSection("[META]"));
const META = {};
for (const lang of ["en", "pl", "ru"]) {
  META[lang] = {
    metaTitle: firstLineValue(metaBody[lang], "metaTitle"),
    metaDescription: firstLineValue(metaBody[lang], "metaDescription"),
  };
}

// --- PAIN -> benefitsBlock ---
const painBody = splitByLocale(extractSection("[PAIN] → benefitsBlock"));
const PAIN = {};
for (const lang of ["en", "pl", "ru"]) {
  const title = firstLineValue(painBody[lang], "title");
  const rest = painBody[lang].replace(/^title:.*$/m, "").trim();
  const items = parseNumberedItems(rest);
  PAIN[lang] = { title, items };
}

// --- FEATURES -> gridBlock ---
const featuresBody = splitByLocale(extractSection("[FEATURES] → gridBlock"));
const FEATURES = {};
for (const lang of ["en", "pl", "ru"]) {
  const title = firstLineValue(featuresBody[lang], "title");
  const rest = featuresBody[lang].replace(/^title:.*$/m, "").trim();
  const items = parseNumberedItems(rest);
  FEATURES[lang] = { title, items };
}

// --- SEO_TEXT -> textContent ---
const seoTextBody = splitByLocale(extractSection("[SEO_TEXT] → textContent"));
const SEO_TEXT = {};
for (const lang of ["en", "pl", "ru"]) {
  const title = firstLineValue(seoTextBody[lang], "title");
  const rest = seoTextBody[lang].replace(/^title:.*$/m, "").trim();
  const paragraphs = rest.split(/\n\s*\n/).map((p) => p.trim().replace(/\s+/g, " ")).filter(Boolean);
  const content = [block("h2", title), ...paragraphs.map((p) => block("normal", p))];
  SEO_TEXT[lang] = { content };
}

// --- STEPS -> stepsBlock ---
const stepsBody = splitByLocale(extractSection("[STEPS] → stepsBlock"));
const STEPS = {};
for (const lang of ["en", "pl", "ru"]) {
  const title = firstLineValue(stepsBody[lang], "title");
  const rest = stepsBody[lang].replace(/^title:.*$/m, "").trim();
  const items = parseNumberedItems(rest);
  STEPS[lang] = { title, items };
}

// --- FAQ -> faqBlock ---
const faqBody = splitByLocale(extractSection("[FAQ] → faqBlock"));
const FAQ = {};
for (const lang of ["en", "pl", "ru"]) {
  const title = firstLineValue(faqBody[lang], "title");
  const rest = faqBody[lang].replace(/^title:.*$/m, "").trim();
  const items = parseNumberedItems(rest);
  FAQ[lang] = { title, items };
}

// --- CTA -> landingCtaBlock ---
const ctaBody = splitByLocale(extractSection("[CTA] → landingCtaBlock"));
const CTA = {};
for (const lang of ["en", "pl", "ru"]) {
  CTA[lang] = {
    title: firstLineValue(ctaBody[lang], "title"),
    text: firstLineValue(ctaBody[lang], "text"),
    button: firstLineValue(ctaBody[lang], "button"),
  };
}

const result = { HERO, META, PAIN, FEATURES, SEO_TEXT, STEPS, FAQ, CTA };

fs.writeFileSync(
  path.resolve(__dirname, "../drafts/_dental-clinic-parsed.json"),
  JSON.stringify(result, null, 2)
);

for (const lang of ["en", "pl", "ru"]) {
  console.log(`\n========== ${lang.toUpperCase()} ==========`);
  console.log(`HERO: headline="${HERO[lang].headline}"`);
  console.log(`      subheadline="${HERO[lang].subheadline}"`);
  console.log(`META: metaTitle="${META[lang].metaTitle}"`);
  console.log(`      metaDescription="${META[lang].metaDescription}"`);
  console.log(`PAIN (benefitsBlock): title="${PAIN[lang].title}", items=${PAIN[lang].items.length}`);
  PAIN[lang].items.forEach((it, i) => console.log(`  ${i + 1}. ${it.title}`));
  console.log(`FEATURES (gridBlock): title="${FEATURES[lang].title}", items=${FEATURES[lang].items.length}`);
  FEATURES[lang].items.forEach((it, i) => console.log(`  ${i + 1}. ${it.title}`));
  console.log(`SEO_TEXT (textContent): ${SEO_TEXT[lang].content.length} PT blocks (1 h2 + ${SEO_TEXT[lang].content.length - 1} paragraphs)`);
  console.log(`STEPS (stepsBlock): title="${STEPS[lang].title}", items=${STEPS[lang].items.length}`);
  STEPS[lang].items.forEach((it, i) => console.log(`  ${i + 1}. ${it.title}`));
  console.log(`FAQ (faqBlock): title="${FAQ[lang].title}", items=${FAQ[lang].items.length}`);
  FAQ[lang].items.forEach((it, i) => console.log(`  q${i + 1}: ${it.title}`));
  console.log(`CTA (landingCtaBlock): title="${CTA[lang].title}"`);
  console.log(`  (text="${CTA[lang].text}" / button="${CTA[lang].button}" -- no schema field for these, dropped)`);
}

console.log("\nParsed JSON written to drafts/_dental-clinic-parsed.json");
