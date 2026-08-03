// scripts/assemble-blog-batch1.cjs
// Batch 1 (articles 1-3): psychologist checklist, auto-repair cost, construction cost.
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { markdownToPortableText } = require("./lib/markdown-to-portable-text.cjs");

function key() { return crypto.randomBytes(6).toString("hex"); }

const DRAFTS = path.resolve(__dirname, "../drafts");

function readFile(name) {
  return fs.readFileSync(path.join(DRAFTS, name), "utf8");
}

// --- deliverables-header parsers, one per locale (label text differs) ---
function parseHeaderEN(raw) {
  const metaTitle = raw.match(/meta-title \([^)]*\):\s*(.+)/)[1].trim();
  const metaDescription = raw.match(/meta-description \([^)]*\):\s*(.+)/)[1].trim();
  const excerpt = raw.match(/^excerpt:\s*(.+)/m)[1].trim();
  const coverAlt = raw.match(/- Cover:\s*"([^"]+)"/)[1];
  return { metaTitle, metaDescription, excerpt, coverAlt };
}
function parseHeaderPL(raw) {
  const metaTitle = raw.match(/meta-title \([^)]*\):\s*(.+)/)[1].trim();
  const metaDescription = raw.match(/meta-description \([^)]*\):\s*(.+)/)[1].trim();
  const excerpt = raw.match(/^excerpt:\s*(.+)/m)[1].trim();
  const coverAlt = raw.match(/- Okładka:\s*„([^"]+)"/)[1];
  return { metaTitle, metaDescription, excerpt, coverAlt };
}
function parseHeaderRU(raw) {
  const metaTitle = raw.match(/meta-title \([^)]*\):\s*(.+)/)[1].trim();
  const metaDescription = raw.match(/meta-description \([^)]*\):\s*(.+)/)[1].trim();
  const excerpt = raw.match(/^excerpt:\s*(.+)/m)[1].trim();
  const coverAlt = raw.match(/- Обложка:\s*«([^»]+)»/)[1];
  return { metaTitle, metaDescription, excerpt, coverAlt };
}

function parseTitle(raw) {
  // First markdown H1 after the header.
  const afterHeader = raw.replace(/^---\n[\s\S]*?\n---\n/, "");
  const m = afterHeader.match(/^\s*#\s+(.+)/m);
  return m[1].trim();
}

const CATEGORY = {
  en: "7fabc480-902f-4133-8951-3f6c1ba3fb29",
  pl: "a082cd4a-1681-4952-a0e7-88e70dc6f61c",
  ru: "9b17021c-1a92-432b-a0e1-1c057e25353b",
};
const AUTHOR = {
  en: "author-aliaksandr-bandziuk",
  pl: "author-aliaksandr-bandziuk.pl",
  ru: "author-aliaksandr-bandziuk.ru",
};

function ref(id) { return { _type: "reference", _ref: id }; }
function refKeyed(id) { return { _key: key(), _type: "reference", _ref: id }; }

const ARTICLES = [
  {
    baseId: "blog-psychologist-website-checklist",
    files: {
      en: "blog-what-a-psychologist-website-needs-EN.md",
      pl: "blog-co-powinno-byc-na-stronie-psychologa-PL.md",
      ru: "blog-chto-dolzhno-byt-na-saite-psihologa-RU.md",
    },
    slug: {
      en: "what-a-psychologist-website-needs",
      pl: "co-powinno-byc-na-stronie-psychologa",
      ru: "chto-dolzhno-byt-na-saite-psihologa",
    },
    imageFile: "WHAT-A-PSYCHOLOGIST-WEBSITE-NEEDS.jpg",
    serviceOffered: {
      en: ["singlepage-psychologists-therapists", "singlepage-online-booking"],
      pl: ["singlepage-psychologists-therapists.pl", "singlepage-online-booking.pl"],
      ru: ["singlepage-psychologists-therapists.ru", "singlepage-online-booking.ru"],
    },
    relatedArticles: {
      en: ["blog-psychologist-website-cost", "singlepage-dental-clinic-website", "blog-website-no-leads"],
      pl: ["blog-psychologist-website-cost.pl", "singlepage-dental-clinic-website.pl", "blog-website-no-leads.pl"],
      ru: ["blog-psychologist-website-cost.ru", "singlepage-dental-clinic-website.ru", "blog-website-no-leads.ru"],
    },
    publishedAt: { en: "2026-07-10T12:00:00Z", pl: "2026-07-10T12:00:00Z", ru: "2026-07-10T12:00:00Z" },
  },
  {
    baseId: "blog-auto-repair-website-cost",
    files: {
      en: "blog-auto-repair-shop-website-cost-EN.md",
      pl: "blog-ile-kosztuje-strona-dla-warsztatu-PL.md",
      ru: "blog-skolko-stoit-sait-avtoservisa-RU.md",
    },
    slug: {
      en: "auto-repair-shop-website-cost",
      pl: "ile-kosztuje-strona-dla-warsztatu-samochodowego",
      ru: "skolko-stoit-sait-dlya-avtoservisa",
    },
    imageFile: "HOW-MUCH-AN-AUTO-REPAIR-SHOP-WEBSITE-COSTS.jpg",
    serviceOffered: {
      en: ["singlepage-web-development-warsaw", "singlepage-platform-migration"],
      pl: ["singlepage-web-development-warsaw.pl", "singlepage-platform-migration.pl"],
      ru: ["singlepage-web-development-warsaw.ru", "singlepage-platform-migration.ru"],
    },
    relatedArticles: {
      en: ["blog-platform-choice", "blog-slow-website", "blog-construction-website-cost"],
      pl: ["blog-platform-choice.pl", "blog-slow-website.pl", "blog-construction-website-cost.pl"],
      ru: ["blog-platform-choice.ru", "blog-slow-website.ru", "blog-construction-website-cost.ru"],
    },
    publishedAt: { en: "2026-07-10T13:00:00Z", pl: "2026-07-10T13:00:00Z", ru: "2026-07-10T13:00:00Z" },
  },
  {
    baseId: "blog-construction-website-cost",
    files: {
      en: "blog-construction-company-website-cost-EN.md",
      pl: "blog-ile-kosztuje-strona-dla-firmy-budowlanej-PL.md",
      ru: "blog-skolko-stoit-sait-stroitelnoy-kompanii-RU.md",
    },
    slug: {
      en: "construction-company-website-cost",
      pl: "ile-kosztuje-strona-dla-firmy-budowlanej",
      ru: "skolko-stoit-sait-dlya-stroitelnoy-kompanii",
    },
    imageFile: "HOW-MUCH-A-CONSTRUCTION-COMPANY-WEBSITE-COSTS.jpg",
    serviceOffered: {
      en: ["singlepage-platform-migration", "singlepage-web-development-warsaw"],
      pl: ["singlepage-platform-migration.pl", "singlepage-web-development-warsaw.pl"],
      ru: ["singlepage-platform-migration.ru", "singlepage-web-development-warsaw.ru"],
    },
    relatedArticles: {
      en: ["blog-auto-repair-website-cost", "blog-redesign-traffic-loss", "blog-how-to-choose-developer"],
      pl: ["blog-auto-repair-website-cost.pl", "blog-redesign-traffic-loss.pl", "blog-how-to-choose-developer.pl"],
      ru: ["blog-auto-repair-website-cost.ru", "blog-redesign-traffic-loss.ru", "blog-how-to-choose-developer.ru"],
    },
    publishedAt: { en: "2026-07-10T14:00:00Z", pl: "2026-07-10T14:00:00Z", ru: "2026-07-10T14:00:00Z" },
  },
];

function docIdFor(baseId, lang) {
  return lang === "en" ? baseId : `${baseId}.${lang}`;
}

const PARSE_HEADER = { en: parseHeaderEN, pl: parseHeaderPL, ru: parseHeaderRU };

const output = {};
for (const art of ARTICLES) {
  const docs = {};
  for (const lang of ["en", "pl", "ru"]) {
    const raw = readFile(art.files[lang]);
    const { metaTitle, metaDescription, excerpt, coverAlt } = PARSE_HEADER[lang](raw);
    const title = parseTitle(raw);
    const content = markdownToPortableText(raw);

    docs[lang] = {
      _id: docIdFor(art.baseId, lang),
      _type: "blog",
      language: lang,
      title,
      slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: art.slug[lang] } },
      seo: { metaTitle, metaDescription },
      publishedAt: art.publishedAt[lang],
      category: ref(CATEGORY[lang]),
      author: ref(AUTHOR[lang]),
      excerpt,
      contentBlocks: [{ _key: key(), _type: "textContent", content }],
      serviceOffered: art.serviceOffered[lang].map(refKeyed),
      relatedArticles: art.relatedArticles[lang].map(refKeyed),
      _coverAlt: coverAlt, // stripped before writing; used for previewImage.alt
      _imageFile: art.imageFile,
    };
  }
  const metaDoc = {
    _id: `${art.baseId}.i18n`,
    _type: "translation.metadata",
    documentId: art.baseId,
    translations: [
      { _key: "en", value: ref(docIdFor(art.baseId, "en")) },
      { _key: "pl", value: ref(docIdFor(art.baseId, "pl")) },
      { _key: "ru", value: ref(docIdFor(art.baseId, "ru")) },
    ],
  };
  output[art.baseId] = { docs, metaDoc };
}

fs.writeFileSync(path.resolve(__dirname, "../drafts/_blog-batch1-docs.json"), JSON.stringify(output, null, 2));

console.log("=== VALIDATION ===");
const errors = [];
for (const art of ARTICLES) {
  const { docs } = output[art.baseId];
  for (const lang of ["en", "pl", "ru"]) {
    const d = docs[lang];
    if (!d.seo.metaTitle) errors.push(`${art.baseId}/${lang}: missing metaTitle`);
    if (!d.seo.metaDescription) errors.push(`${art.baseId}/${lang}: missing metaDescription`);
    if (!d.excerpt) errors.push(`${art.baseId}/${lang}: missing excerpt`);
    if (!d.title) errors.push(`${art.baseId}/${lang}: missing title`);
    if (!d.publishedAt) errors.push(`${art.baseId}/${lang}: missing publishedAt`);
    if (!d.category?._ref) errors.push(`${art.baseId}/${lang}: missing category`);
    if (!d.author?._ref) errors.push(`${art.baseId}/${lang}: missing author`);
    if (!d.slug[lang]?.current) errors.push(`${art.baseId}/${lang}: missing own-locale slug`);
    if (Object.keys(d.slug).filter((k) => k !== "_type").length !== 1) errors.push(`${art.baseId}/${lang}: slug has extra locale keys`);
    if (d.contentBlocks.length !== 1 || d.contentBlocks[0]._type !== "textContent") errors.push(`${art.baseId}/${lang}: contentBlocks is not a single textContent block`);
    if (d.serviceOffered.length < 2) errors.push(`${art.baseId}/${lang}: serviceOffered has fewer than 2 entries`);
    if (d.relatedArticles.length !== 3) errors.push(`${art.baseId}/${lang}: relatedArticles does not have exactly 3 entries`);
    if (!d._coverAlt) errors.push(`${art.baseId}/${lang}: missing cover alt text`);
  }
}
if (errors.length) { console.log("FAILED:"); errors.forEach((e) => console.log(`  - ${e}`)); }
else console.log("OK — all required fields present, one slug per doc, single textContent block, 2+ serviceOffered, 3 relatedArticles.");

console.log("\n=== DOC SUMMARY ===");
for (const art of ARTICLES) {
  const { docs, metaDoc } = output[art.baseId];
  console.log(`\n### ${art.baseId} ###`);
  for (const lang of ["en", "pl", "ru"]) {
    const d = docs[lang];
    console.log(`--- ${lang.toUpperCase()} (${d._id}) ---`);
    console.log(`  title: ${d.title}`);
    console.log(`  slug: ${lang} -> ${d.slug[lang].current}`);
    console.log(`  metaTitle: ${d.seo.metaTitle}`);
    console.log(`  metaDescription: ${d.seo.metaDescription}`);
    console.log(`  excerpt: ${d.excerpt}`);
    console.log(`  publishedAt: ${d.publishedAt}`);
    console.log(`  category: ${d.category._ref}`);
    console.log(`  author: ${d.author._ref}`);
    console.log(`  cover: ${d._imageFile}  alt="${d._coverAlt}"`);
    console.log(`  textContent: ${d.contentBlocks[0].content.length} PT blocks`);
    console.log(`  serviceOffered: ${d.serviceOffered.map((r) => r._ref).join(", ")}`);
    console.log(`  relatedArticles: ${d.relatedArticles.map((r) => r._ref).join(", ")}`);
  }
  console.log(`i18n: ${metaDoc._id}`);
}
console.log("\nFull resolved docs written to drafts/_blog-batch1-docs.json");
