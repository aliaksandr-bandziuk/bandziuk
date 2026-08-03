// scripts/assemble-blog-batch3.cjs
// Batch 3 (articles 7-9): website-no-leads, slow-website, not-showing-in-google.
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { markdownToPortableText } = require("./lib/markdown-to-portable-text.cjs");

function key() { return crypto.randomBytes(6).toString("hex"); }

const DRAFTS = path.resolve(__dirname, "../drafts");
function readFile(name) { return fs.readFileSync(path.join(DRAFTS, name), "utf8"); }

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
  const afterHeader = raw.replace(/^---\n[\s\S]*?\n---\n/, "");
  return afterHeader.match(/^\s*#\s+(.+)/m)[1].trim();
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

// SEO Optimization and Strategy (general SEO service page)
const SEO_SERVICE = {
  en: "42a469a6-28f3-4015-8b88-414c8eb3d4fa",
  pl: "77c5f5df-a6f3-49ca-8f42-f1439e3490c6",
  ru: "6a81eab0-6993-41a6-adc3-d9047a3b35a0",
};
// AI-Ready SEO & GEO Optimization
const GEO_SERVICE = {
  en: "831dc620-2863-4d55-baa0-aa874a7374ac",
  pl: "3a759a28-4135-4731-a318-cffee1b512f0",
  ru: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71",
};

function ref(id) { return { _type: "reference", _ref: id }; }
function refKeyed(id) { return { _key: key(), _type: "reference", _ref: id }; }

const ARTICLES = [
  {
    baseId: "blog-website-no-leads",
    files: {
      en: "blog-why-my-website-gets-no-leads-EN.md",
      pl: "blog-dlaczego-strona-nie-generuje-zapytan-PL.md",
      ru: "blog-pochemu-sait-ne-prinosit-zayavok-RU.md",
    },
    slug: {
      en: "why-my-website-gets-no-leads",
      pl: "dlaczego-strona-nie-generuje-zapytan",
      ru: "pochemu-sait-ne-prinosit-zayavok",
    },
    imageFile: "WHY-MY-WEBSITE-GETS-NO-LEADS.jpg",
    serviceOffered: {
      en: [SEO_SERVICE.en, "singlepage-platform-migration"],
      pl: [SEO_SERVICE.pl, "singlepage-platform-migration.pl"],
      ru: [SEO_SERVICE.ru, "singlepage-platform-migration.ru"],
    },
    relatedArticles: {
      en: ["blog-not-showing-in-google", "blog-slow-website", "blog-seo-cost"],
      pl: ["blog-not-showing-in-google.pl", "blog-slow-website.pl", "blog-seo-cost.pl"],
      ru: ["blog-not-showing-in-google.ru", "blog-slow-website.ru", "blog-seo-cost.ru"],
    },
    publishedAt: { en: "2026-07-24T12:00:00Z", pl: "2026-07-24T12:00:00Z", ru: "2026-07-24T12:00:00Z" },
  },
  {
    baseId: "blog-slow-website",
    files: {
      en: "blog-why-is-my-website-slow-EN.md",
      pl: "blog-wolno-ladujaca-sie-strona-PL.md",
      ru: "blog-sait-medlenno-zagruzhaetsya-RU.md",
    },
    slug: {
      en: "why-is-my-website-slow",
      pl: "wolno-ladujaca-sie-strona",
      ru: "sait-medlenno-zagruzhaetsya",
    },
    imageFile: "WHY-IS-MY-WEBSITE-SLOW.jpg",
    serviceOffered: {
      en: ["singlepage-platform-migration", SEO_SERVICE.en],
      pl: ["singlepage-platform-migration.pl", SEO_SERVICE.pl],
      ru: ["singlepage-platform-migration.ru", SEO_SERVICE.ru],
    },
    relatedArticles: {
      en: ["blog-platform-choice", "blog-website-no-leads", "blog-not-showing-in-google"],
      pl: ["blog-platform-choice.pl", "blog-website-no-leads.pl", "blog-not-showing-in-google.pl"],
      ru: ["blog-platform-choice.ru", "blog-website-no-leads.ru", "blog-not-showing-in-google.ru"],
    },
    publishedAt: { en: "2026-07-24T13:00:00Z", pl: "2026-07-24T13:00:00Z", ru: "2026-07-24T13:00:00Z" },
  },
  {
    baseId: "blog-not-showing-in-google",
    files: {
      en: "blog-website-not-showing-in-google-EN.md",
      pl: "blog-strona-nie-pojawia-sie-w-google-PL.md",
      ru: "blog-saita-net-v-poiske-google-RU.md",
    },
    slug: {
      en: "website-not-showing-in-google",
      pl: "strona-nie-pojawia-sie-w-google",
      ru: "saita-net-v-poiske-google",
    },
    imageFile: "WEBSITE-NOT-SHOWING-IN-GOOGLE.jpg",
    serviceOffered: {
      en: [SEO_SERVICE.en, GEO_SERVICE.en],
      pl: [SEO_SERVICE.pl, GEO_SERVICE.pl],
      ru: [SEO_SERVICE.ru, GEO_SERVICE.ru],
    },
    relatedArticles: {
      en: ["blog-website-no-leads", "blog-seo-cost", "blog-chatgpt-recommendations"],
      pl: ["blog-website-no-leads.pl", "blog-seo-cost.pl", "blog-chatgpt-recommendations.pl"],
      ru: ["blog-website-no-leads.ru", "blog-seo-cost.ru", "blog-chatgpt-recommendations.ru"],
    },
    publishedAt: { en: "2026-07-24T14:00:00Z", pl: "2026-07-24T14:00:00Z", ru: "2026-07-24T14:00:00Z" },
  },
];

function docIdFor(baseId, lang) { return lang === "en" ? baseId : `${baseId}.${lang}`; }
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
      _coverAlt: coverAlt,
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

fs.writeFileSync(path.resolve(__dirname, "../drafts/_blog-batch3-docs.json"), JSON.stringify(output, null, 2));

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
    console.log(`  cover: ${d._imageFile}  alt="${d._coverAlt}"`);
    console.log(`  textContent: ${d.contentBlocks[0].content.length} PT blocks`);
    console.log(`  serviceOffered: ${d.serviceOffered.map((r) => r._ref).join(", ")}`);
    console.log(`  relatedArticles: ${d.relatedArticles.map((r) => r._ref).join(", ")}`);
  }
  console.log(`i18n: ${metaDoc._id}`);
}
console.log("\nFull resolved docs written to drafts/_blog-batch3-docs.json");
