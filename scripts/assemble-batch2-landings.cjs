// scripts/assemble-batch2-landings.cjs
// Batch 2: veterinary-clinic, accounting-firm. See assemble-batch1-landings.cjs for notes.
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

const parsed = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../drafts/_batch2-parsed.json"), "utf8"));

const LANDINGS = [
  {
    name: "veterinary-clinic",
    baseId: "singlepage-veterinary-clinic",
    slug: { en: "veterinary-clinic-website", pl: "strona-dla-przychodni-weterynaryjnej", ru: "sait-dlya-veterinarnoy-kliniki" },
  },
  {
    name: "accounting-firm",
    baseId: "singlepage-accounting-firm",
    slug: { en: "accounting-firm-website", pl: "strona-dla-biura-rachunkowego", ru: "sait-dlya-buhgalterskoy-firmy" },
  },
];

function docIdFor(baseId, lang) {
  return lang === "en" ? baseId : `${baseId}.${lang}`;
}

function buildBenefitsBlock(r, lang) {
  return { _key: key(), _type: "benefitsBlock", title: r.PAIN[lang].title, benefits: r.PAIN[lang].items.map((it) => ({ _key: key(), title: it.title, description: it.description })) };
}
function buildGridBlock(r, lang) {
  return { _key: key(), _type: "gridBlock", title: r.FEATURES[lang].title, items: r.FEATURES[lang].items.map((it) => ({ _key: key(), title: it.title, description: it.description })) };
}
function buildTextContent(r, lang) {
  return { _key: key(), _type: "textContent", textAlign: "left", content: r.SEO_TEXT[lang].content };
}
function buildStepsBlock(r, lang) {
  return { _key: key(), _type: "stepsBlock", title: r.STEPS[lang].title, steps: r.STEPS[lang].items.map((it, i) => ({ _key: key(), stepNumber: i + 1, title: it.title, description: it.description })) };
}
function buildFaqBlock(r, lang) {
  return {
    _key: key(), _type: "faqBlock", title: r.FAQ[lang].title,
    faq: { _type: "accordionBlock", items: r.FAQ[lang].items.map((it) => ({ _key: key(), question: it.title, answer: [{ _key: key(), _type: "block", children: [{ _key: key(), _type: "span", marks: [], text: it.description }], markDefs: [], style: "normal" }] })) },
  };
}
function buildLandingCtaBlock(r, lang) {
  return { _key: key(), _type: "landingCtaBlock", title: r.CTA[lang].title };
}

function buildDoc(landing, lang) {
  const r = parsed[landing.name];
  const contentBlocks = [buildBenefitsBlock(r, lang), buildGridBlock(r, lang), buildTextContent(r, lang), buildStepsBlock(r, lang), buildFaqBlock(r, lang), buildLandingCtaBlock(r, lang)];
  return {
    _id: docIdFor(landing.baseId, lang), _type: "singlepage", language: lang, pageType: "page", allowIntroBlock: true,
    title: r.HERO[lang].headline, excerpt: r.HERO[lang].subheadline,
    slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: landing.slug[lang] } },
    seo: { metaTitle: r.META[lang].metaTitle, metaDescription: r.META[lang].metaDescription },
    contentBlocks,
  };
}

const output = {};
for (const landing of LANDINGS) {
  const docs = { en: buildDoc(landing, "en"), pl: buildDoc(landing, "pl"), ru: buildDoc(landing, "ru") };
  const metaDoc = {
    _id: `${landing.baseId}.i18n`, _type: "translation.metadata", documentId: landing.baseId,
    translations: [
      { _key: "en", value: { _type: "reference", _ref: docIdFor(landing.baseId, "en") } },
      { _key: "pl", value: { _type: "reference", _ref: docIdFor(landing.baseId, "pl") } },
      { _key: "ru", value: { _type: "reference", _ref: docIdFor(landing.baseId, "ru") } },
    ],
  };
  output[landing.name] = { docs, metaDoc };
}

fs.writeFileSync(path.resolve(__dirname, "../drafts/_batch2-docs.json"), JSON.stringify(output, null, 2));

const errors = [];
for (const landing of LANDINGS) {
  const { docs } = output[landing.name];
  for (const lang of ["en", "pl", "ru"]) {
    const d = docs[lang];
    if (!d.seo.metaTitle || !d.seo.metaDescription) errors.push(`${landing.name}/${lang}: missing metaTitle/metaDescription`);
    if (!d.title) errors.push(`${landing.name}/${lang}: missing title`);
    if (!d.slug[lang]?.current) errors.push(`${landing.name}/${lang}: missing own-locale slug`);
    if (Object.keys(d.slug).filter((k) => k !== "_type").length !== 1) errors.push(`${landing.name}/${lang}: slug has extra locale keys`);
    const types = d.contentBlocks.map((b) => b._type);
    const expected = ["benefitsBlock", "gridBlock", "textContent", "stepsBlock", "faqBlock", "landingCtaBlock"];
    if (JSON.stringify(types) !== JSON.stringify(expected)) errors.push(`${landing.name}/${lang}: block order mismatch: ${types.join(",")}`);
  }
}

console.log("=== VALIDATION ===");
if (errors.length) { console.log("FAILED:"); errors.forEach((e) => console.log(`  - ${e}`)); }
else console.log("OK — all noindex/slug/block-order checks passed for both landings x 3 locales.");

console.log("\n=== DOC SUMMARY ===");
for (const landing of LANDINGS) {
  const { docs, metaDoc } = output[landing.name];
  console.log(`\n### ${landing.name} ###`);
  for (const lang of ["en", "pl", "ru"]) {
    const d = docs[lang];
    console.log(`--- ${lang.toUpperCase()} (${d._id}) ---`);
    console.log(`  title: ${d.title}`);
    console.log(`  slug: ${lang} -> ${d.slug[lang].current}`);
    console.log(`  metaTitle: ${d.seo.metaTitle}`);
    console.log(`  benefitsBlock: "${d.contentBlocks[0].title}" (${d.contentBlocks[0].benefits.length} items)`);
    console.log(`  gridBlock: "${d.contentBlocks[1].title}" (${d.contentBlocks[1].items.length} items)`);
    console.log(`  textContent: ${d.contentBlocks[2].content.length} PT blocks`);
    console.log(`  stepsBlock: "${d.contentBlocks[3].title}" (${d.contentBlocks[3].steps.length} steps)`);
    console.log(`  faqBlock: "${d.contentBlocks[4].title}" (${d.contentBlocks[4].faq.items.length} Q&A)`);
    console.log(`  landingCtaBlock: "${d.contentBlocks[5].title}"`);
  }
  console.log(`i18n: ${metaDoc._id}`);
}
console.log("\nFull resolved docs written to drafts/_batch2-docs.json");
