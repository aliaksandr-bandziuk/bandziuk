// scripts/assemble-dental-clinic-landing.cjs
//
// Assembles the full three-locale singlepage-dental-clinic-website document
// set from drafts/_dental-clinic-parsed.json, and writes the complete
// resolved structure to drafts/_dental-clinic-docs.json for review. Does NOT
// write to Sanity.
//
// Block sequence: benefitsBlock -> gridBlock -> textContent -> stepsBlock ->
// faqBlock -> landingCtaBlock -> relatedServicesBlock (7th, psychologist
// landing only, per owner's explicit choice).

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

const parsed = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../drafts/_dental-clinic-parsed.json"), "utf8")
);

const BASE_ID = "singlepage-dental-clinic-website";

const SLUG = {
  en: "dental-clinic-website",
  pl: "strona-dla-gabinetu-stomatologicznego",
  ru: "sait-dlya-stomatologicheskoy-kliniki",
};

const PSYCHOLOGIST_LANDING_REF = {
  en: "singlepage-psychologists-therapists",
  pl: "singlepage-psychologists-therapists.pl",
  ru: "singlepage-psychologists-therapists.ru",
};

function docIdFor(lang) {
  return lang === "en" ? BASE_ID : `${BASE_ID}.${lang}`;
}

function buildBenefitsBlock(lang) {
  const { HERO, PAIN } = parsed;
  void HERO;
  return {
    _key: key(),
    _type: "benefitsBlock",
    title: PAIN[lang].title,
    benefits: PAIN[lang].items.map((it) => ({
      _key: key(),
      title: it.title,
      description: it.description,
    })),
  };
}

function buildGridBlock(lang) {
  const { FEATURES } = parsed;
  return {
    _key: key(),
    _type: "gridBlock",
    title: FEATURES[lang].title,
    items: FEATURES[lang].items.map((it) => ({
      _key: key(),
      title: it.title,
      description: it.description,
    })),
  };
}

function buildTextContent(lang) {
  const { SEO_TEXT } = parsed;
  return {
    _key: key(),
    _type: "textContent",
    textAlign: "left",
    content: SEO_TEXT[lang].content,
  };
}

function buildStepsBlock(lang) {
  const { STEPS } = parsed;
  return {
    _key: key(),
    _type: "stepsBlock",
    title: STEPS[lang].title,
    steps: STEPS[lang].items.map((it, i) => ({
      _key: key(),
      stepNumber: i + 1,
      title: it.title,
      description: it.description,
    })),
  };
}

function buildFaqBlock(lang) {
  const { FAQ } = parsed;
  return {
    _key: key(),
    _type: "faqBlock",
    title: FAQ[lang].title,
    faq: {
      _type: "accordionBlock",
      items: FAQ[lang].items.map((it) => ({
        _key: key(),
        question: it.title,
        answer: [
          {
            _key: key(),
            _type: "block",
            children: [{ _key: key(), _type: "span", marks: [], text: it.description }],
            markDefs: [],
            style: "normal",
          },
        ],
      })),
    },
  };
}

function buildLandingCtaBlock(lang) {
  const { CTA } = parsed;
  return {
    _key: key(),
    _type: "landingCtaBlock",
    title: CTA[lang].title,
  };
}

function buildRelatedServicesBlock(lang) {
  return {
    _key: key(),
    _type: "relatedServicesBlock",
    items: [{ _key: key(), _type: "reference", _ref: PSYCHOLOGIST_LANDING_REF[lang] }],
  };
}

function buildDoc(lang) {
  const { HERO, META } = parsed;

  const contentBlocks = [
    buildBenefitsBlock(lang),
    buildGridBlock(lang),
    buildTextContent(lang),
    buildStepsBlock(lang),
    buildFaqBlock(lang),
    buildLandingCtaBlock(lang),
    buildRelatedServicesBlock(lang),
  ];

  return {
    _id: docIdFor(lang),
    _type: "singlepage",
    language: lang,
    pageType: "page",
    title: HERO[lang].headline,
    excerpt: HERO[lang].subheadline,
    slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: SLUG[lang] } },
    seo: { metaTitle: META[lang].metaTitle, metaDescription: META[lang].metaDescription },
    contentBlocks,
  };
}

const docs = { en: buildDoc("en"), pl: buildDoc("pl"), ru: buildDoc("ru") };

const metaDoc = {
  _id: `${BASE_ID}.i18n`,
  _type: "translation.metadata",
  documentId: BASE_ID,
  translations: [
    { _key: "en", value: { _type: "reference", _ref: docIdFor("en") } },
    { _key: "pl", value: { _type: "reference", _ref: docIdFor("pl") } },
    { _key: "ru", value: { _type: "reference", _ref: docIdFor("ru") } },
  ],
};

fs.writeFileSync(
  path.resolve(__dirname, "../drafts/_dental-clinic-docs.json"),
  JSON.stringify({ docs, metaDoc }, null, 2)
);

const errors = [];
for (const lang of ["en", "pl", "ru"]) {
  const d = docs[lang];
  if (!d.seo.metaTitle || !d.seo.metaDescription) errors.push(`${lang}: missing metaTitle/metaDescription`);
  if (!d.title) errors.push(`${lang}: missing title`);
  if (!d.slug[lang]?.current) errors.push(`${lang}: missing own-locale slug`);
  if (Object.keys(d.slug).filter((k) => k !== "_type").length !== 1) errors.push(`${lang}: slug has extra locale keys`);
  const types = d.contentBlocks.map((b) => b._type);
  const expected = ["benefitsBlock", "gridBlock", "textContent", "stepsBlock", "faqBlock", "landingCtaBlock", "relatedServicesBlock"];
  if (JSON.stringify(types) !== JSON.stringify(expected)) errors.push(`${lang}: block order mismatch: ${types.join(",")}`);
  if (d.contentBlocks[0].benefits.length !== 4) errors.push(`${lang}: benefitsBlock count != 4`);
  if (d.contentBlocks[1].items.length !== 6) errors.push(`${lang}: gridBlock count != 6`);
  if (d.contentBlocks[3].steps.length !== 4) errors.push(`${lang}: stepsBlock count != 4`);
  if (d.contentBlocks[4].faq.items.length !== 7) errors.push(`${lang}: faqBlock count != 7`);
}

console.log("=== VALIDATION ===");
if (errors.length) {
  console.log("FAILED:");
  errors.forEach((e) => console.log(`  - ${e}`));
} else {
  console.log("OK — all noindex/slug/block-order/count checks passed for all 3 locales.");
}

console.log("\n=== DOC SUMMARY ===");
for (const lang of ["en", "pl", "ru"]) {
  const d = docs[lang];
  console.log(`\n--- ${lang.toUpperCase()} (${d._id}) ---`);
  console.log(`title: ${d.title}`);
  console.log(`excerpt: ${d.excerpt}`);
  console.log(`slug: ${lang} -> ${d.slug[lang].current}`);
  console.log(`metaTitle: ${d.seo.metaTitle}`);
  console.log(`metaDescription: ${d.seo.metaDescription}`);
  console.log(`contentBlocks order: [${d.contentBlocks.map((b) => b._type).join(" -> ")}]`);
  console.log(`  benefitsBlock: "${d.contentBlocks[0].title}" (${d.contentBlocks[0].benefits.length} items)`);
  console.log(`  gridBlock: "${d.contentBlocks[1].title}" (${d.contentBlocks[1].items.length} items)`);
  console.log(`  textContent: ${d.contentBlocks[2].content.length} PT blocks`);
  console.log(`  stepsBlock: "${d.contentBlocks[3].title}" (${d.contentBlocks[3].steps.length} steps)`);
  console.log(`  faqBlock: "${d.contentBlocks[4].title}" (${d.contentBlocks[4].faq.items.length} Q&A)`);
  console.log(`  landingCtaBlock: "${d.contentBlocks[5].title}"`);
  console.log(`  relatedServicesBlock: -> ${d.contentBlocks[6].items[0]._ref}`);
}

console.log("\n=== translation.metadata ===");
console.log(JSON.stringify(metaDoc, null, 2));

console.log("\nFull resolved docs written to drafts/_dental-clinic-docs.json");
