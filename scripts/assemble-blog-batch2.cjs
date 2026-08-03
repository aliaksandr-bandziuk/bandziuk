// scripts/assemble-blog-batch2.cjs
// Batch 2 (articles 4-6): how-to-choose-developer, freelancer-vs-agency, platform-choice.
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

function ref(id) { return { _type: "reference", _ref: id }; }
function refKeyed(id) { return { _key: key(), _type: "reference", _ref: id }; }

const ARTICLES = [
  {
    baseId: "blog-how-to-choose-developer",
    files: {
      en: "blog-how-to-choose-a-web-developer-EN.md",
      pl: "blog-jak-wybrac-wykonawce-strony-PL.md",
      ru: "blog-kak-vybrat-razrabotchika-saita-RU.md",
    },
    slug: {
      en: "how-to-choose-a-web-developer",
      pl: "jak-wybrac-wykonawce-strony-internetowej",
      ru: "kak-vybrat-razrabotchika-saita",
    },
    imageFile: "HOW-TO-CHOOSE-A-WEB-DEVELOPER.jpg",
    serviceOffered: {
      en: ["singlepage-web-development-warsaw", "singlepage-startup-website"],
      pl: ["singlepage-web-development-warsaw.pl", "singlepage-startup-website.pl"],
      ru: ["singlepage-web-development-warsaw.ru", "singlepage-startup-website.ru"],
    },
    relatedArticles: {
      en: ["blog-freelancer-vs-agency", "blog-platform-choice", "blog-website-build-timeline"],
      pl: ["blog-freelancer-vs-agency.pl", "blog-platform-choice.pl", "blog-website-build-timeline.pl"],
      ru: ["blog-freelancer-vs-agency.ru", "blog-platform-choice.ru", "blog-website-build-timeline.ru"],
    },
    publishedAt: { en: "2026-07-17T12:00:00Z", pl: "2026-07-17T12:00:00Z", ru: "2026-07-17T12:00:00Z" },
  },
  {
    baseId: "blog-freelancer-vs-agency",
    files: {
      en: "blog-freelancer-vs-agency-EN.md",
      pl: "blog-freelancer-czy-agencja-PL.md",
      ru: "blog-frilanser-ili-agentstvo-RU.md",
    },
    slug: {
      en: "freelancer-vs-agency-web-development",
      pl: "freelancer-czy-agencja",
      ru: "frilanser-ili-agentstvo",
    },
    imageFile: "FREELANCER-VS-AGENCY.jpg",
    serviceOffered: {
      en: ["singlepage-web-development-warsaw", "singlepage-multilingual-website"],
      pl: ["singlepage-web-development-warsaw.pl", "singlepage-multilingual-website.pl"],
      ru: ["singlepage-web-development-warsaw.ru", "singlepage-multilingual-website.ru"],
    },
    relatedArticles: {
      en: ["blog-how-to-choose-developer", "blog-website-build-timeline", "blog-platform-choice"],
      pl: ["blog-how-to-choose-developer.pl", "blog-website-build-timeline.pl", "blog-platform-choice.pl"],
      ru: ["blog-how-to-choose-developer.ru", "blog-website-build-timeline.ru", "blog-platform-choice.ru"],
    },
    publishedAt: { en: "2026-07-17T13:00:00Z", pl: "2026-07-17T13:00:00Z", ru: "2026-07-17T13:00:00Z" },
  },
  {
    baseId: "blog-platform-choice",
    files: {
      en: "blog-what-to-build-a-business-website-on-EN.md",
      pl: "blog-na-czym-zbudowac-strone-firmowa-PL.md",
      ru: "blog-na-chem-delat-sait-biznesu-RU.md",
    },
    slug: {
      en: "what-to-build-a-business-website-on",
      pl: "na-czym-zbudowac-strone-firmowa",
      ru: "na-chem-delat-sait-biznesu",
    },
    imageFile: "WHAT-TO-BUILD-A-BUSINESS-WEBSITE-ON.jpg",
    serviceOffered: {
      en: ["singlepage-platform-migration", "singlepage-startup-website"],
      pl: ["singlepage-platform-migration.pl", "singlepage-startup-website.pl"],
      ru: ["singlepage-platform-migration.ru", "singlepage-startup-website.ru"],
    },
    relatedArticles: {
      en: ["blog-builder-vs-custom", "blog-slow-website", "blog-how-to-choose-developer"],
      pl: ["blog-builder-vs-custom.pl", "blog-slow-website.pl", "blog-how-to-choose-developer.pl"],
      ru: ["blog-builder-vs-custom.ru", "blog-slow-website.ru", "blog-how-to-choose-developer.ru"],
    },
    publishedAt: { en: "2026-07-17T14:00:00Z", pl: "2026-07-17T14:00:00Z", ru: "2026-07-17T14:00:00Z" },
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

fs.writeFileSync(path.resolve(__dirname, "../drafts/_blog-batch2-docs.json"), JSON.stringify(output, null, 2));

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
console.log("\nFull resolved docs written to drafts/_blog-batch2-docs.json");
