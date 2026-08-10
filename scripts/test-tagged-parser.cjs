const fs = require("fs");
const path = require("path");
const {
  splitSections, parseLocaleBlocks, getSection, parseKeyValues, parseNumberedItems, parseTitledMarkdown,
} = require("./lib/tagged-content-parser.cjs");

const file = process.argv[2];
const raw = fs.readFileSync(path.resolve(__dirname, "..", file), "utf8");
const sections = splitSections(raw);
console.log("SECTION COUNT:", sections.length);
sections.forEach((s, i) => console.log(i, s.slice(0, 40).replace(/\n/g, "\n")));

const slugSection = getSection(sections, "SLUG");
console.log("\nSLUG:", slugSection);

const metaSection = getSection(sections, "META");
const metaLocales = parseLocaleBlocks(metaSection);
console.log("\nMETA EN:", JSON.stringify(parseKeyValues(metaLocales.en)));

const heroSection = getSection(sections, "HERO");
const heroLocales = parseLocaleBlocks(heroSection);
console.log("\nHERO EN:", JSON.stringify(parseKeyValues(heroLocales.en)));

const painSection = getSection(sections, "PAIN");
const painLocales = parseLocaleBlocks(painSection);
console.log("\nPAIN EN:", JSON.stringify(parseNumberedItems(painLocales.en), null, 1));

const seoSection = getSection(sections, "SEO_TEXT");
const seoLocales = parseLocaleBlocks(seoSection);
const seoParsed = parseTitledMarkdown(seoLocales.en);
console.log("\nSEO_TEXT EN title:", seoParsed.title);
console.log("SEO_TEXT EN body (first 300 chars):", seoParsed.body.slice(0, 300));

const faqSection = getSection(sections, "FAQ");
const faqLocales = parseLocaleBlocks(faqSection);
console.log("\nFAQ EN:", JSON.stringify(parseNumberedItems(faqLocales.en), null, 1).slice(0, 500));

const ctaSection = getSection(sections, "CTA");
const ctaLocales = parseLocaleBlocks(ctaSection);
console.log("\nCTA EN:", JSON.stringify(parseKeyValues(ctaLocales.en)));
