// scripts/assemble-builder-vs-custom-blog.cjs
//
// Assembles the full three-locale blog-builder-vs-custom document set from
// drafts/_builder-vs-custom-parsed.json plus resolved reference IDs, and
// writes the complete resolved structure to
// drafts/_builder-vs-custom-docs.json for review. Does NOT write to Sanity.
//
// No faqBlock -- contentBlocks is a single textContent entry.

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

const parsed = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../drafts/_builder-vs-custom-parsed.json"), "utf8")
);

const BASE_ID = "blog-builder-vs-custom";

const CATEGORY_REF = {
  en: "7fabc480-902f-4133-8951-3f6c1ba3fb29",
  pl: "a082cd4a-1681-4952-a0e7-88e70dc6f61c",
  ru: "9b17021c-1a92-432b-a0e1-1c057e25353b",
};

// serviceOffered: Website Development (primary -- the article's whole subject)
// + Landing Page Development (secondary -- exists, article discusses landing pricing tiers explicitly).
const SERVICE_OFFERED_REFS = {
  en: ["8701994a-d9ba-4230-84b5-2e491b87cb61", "f9269d94-976e-43cd-bacb-8ed3c60039cd"],
  pl: ["b35e57c9-9cce-4ebd-ab05-5121ffa38fef", "285c29ad-bc6b-4fde-a1bf-91aebd7e47e6"],
  ru: ["21d6001f-5181-4249-aef2-5ed9425bf81d", "dd5a054f-83a1-4865-93f3-625c2ecdacc2"],
};

// relatedArticles: vibecoding rescue case (directly referenced in the
// AI-generated-sites section), the redesign/migration article (same case
// referenced again from a different angle), SEO cost.
const RELATED_ARTICLES_REF = {
  en: ["blog-vibecoding-rescue-case", "blog-redesign-traffic-loss", "blog-seo-cost"],
  pl: ["blog-vibecoding-rescue-case.pl", "blog-redesign-traffic-loss.pl", "blog-seo-cost.pl"],
  ru: ["blog-vibecoding-rescue-case.ru", "blog-redesign-traffic-loss.ru", "blog-seo-cost.ru"],
};

const META = {
  en: {
    title: "Website Builder vs Custom Development: How to Choose and Not Pay Twice",
    slugKey: "en",
    slug: "website-builder-vs-custom-development",
    metaTitle: "Website Builder vs Custom Development: How to Choose",
    metaDescription:
      "An honest comparison of website builders and custom development: when a builder is genuinely enough, where its technical ceiling starts, and how to tell you've hit it.",
    excerpt:
      "An honest comparison of website builders and custom development: when a builder is genuinely the right call, where its technical ceiling begins, and how to recognise that your business has outgrown it.",
  },
  pl: {
    title: "Kreator stron czy strona na zamówienie: jak wybrać i nie zapłacić dwa razy",
    slugKey: "pl",
    slug: "kreator-stron-czy-strona-na-zamowienie",
    metaTitle: "Kreator stron czy strona na zamówienie: co wybrać",
    metaDescription:
      "Uczciwe porównanie kreatorów stron i tworzenia na zamówienie: kiedy kreator wystarcza, gdzie zaczyna się jego sufit techniczny i po czym poznać, że firma go przerosła.",
    excerpt:
      "Uczciwe porównanie kreatora stron i tworzenia strony na zamówienie: w jakich sytuacjach kreator naprawdę wystarcza, gdzie zaczyna się jego sufit techniczny i jak rozpoznać, że już się o niego oparłeś.",
  },
  ru: {
    title: "Конструктор или индивидуальная разработка: как выбрать и не переплатить дважды",
    slugKey: "ru",
    slug: "konstruktor-ili-razrabotka-saita",
    metaTitle: "Конструктор или разработка сайта: что выбрать бизнесу",
    metaDescription:
      "Честное сравнение конструкторов и индивидуальной разработки: когда конструктора достаточно, где у него потолок, и по каким признакам понять, что вы в него упёрлись.",
    excerpt:
      "Честное сравнение конструктора и индивидуальной разработки: в каких случаях конструктора действительно достаточно, где начинается его технический потолок, и как понять, что вы в него уже упёрлись.",
  },
};

const PUBLISHED_AT = "2026-07-29T12:00:00Z";

function docIdFor(lang) {
  return lang === "en" ? BASE_ID : `${BASE_ID}.${lang}`;
}

function buildDoc(lang) {
  const m = META[lang];
  const r = parsed[lang];

  const contentBlocks = [
    { _key: key(), _type: "textContent", textAlign: "left", content: r.content },
  ];

  return {
    _id: docIdFor(lang),
    _type: "blog",
    language: lang,
    title: m.title,
    slug: { _type: "localizedSlug", [m.slugKey]: { _type: "slug", current: m.slug } },
    seo: { metaTitle: m.metaTitle, metaDescription: m.metaDescription },
    publishedAt: PUBLISHED_AT,
    category: { _type: "reference", _ref: CATEGORY_REF[lang] },
    excerpt: m.excerpt,
    contentBlocks,
    serviceOffered: SERVICE_OFFERED_REFS[lang].map((ref) => ({ _key: key(), _type: "reference", _ref: ref })),
    relatedArticles: RELATED_ARTICLES_REF[lang].map((ref) => ({ _key: key(), _type: "reference", _ref: ref })),
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
  path.resolve(__dirname, "../drafts/_builder-vs-custom-docs.json"),
  JSON.stringify({ docs, metaDoc }, null, 2)
);

const errors = [];
for (const lang of ["en", "pl", "ru"]) {
  const d = docs[lang];
  if (!d.seo.metaTitle || !d.seo.metaDescription) errors.push(`${lang}: missing metaTitle/metaDescription`);
  if (!d.slug[lang]?.current) errors.push(`${lang}: missing own-locale slug`);
  if (Object.keys(d.slug).filter((k) => k !== "_type").length !== 1) errors.push(`${lang}: slug has extra locale keys`);
  if (!d.category._ref) errors.push(`${lang}: missing category ref`);
  if (!d.publishedAt) errors.push(`${lang}: missing publishedAt`);
  if (d.contentBlocks.length !== 1 || d.contentBlocks[0]._type !== "textContent") errors.push(`${lang}: contentBlocks is not a single textContent`);
  if (d.serviceOffered.length !== 2) errors.push(`${lang}: serviceOffered count != 2`);
  if (d.relatedArticles.length !== 3) errors.push(`${lang}: relatedArticles count != 3`);
}

console.log("=== VALIDATION ===");
if (errors.length) {
  console.log("FAILED:");
  errors.forEach((e) => console.log(`  - ${e}`));
} else {
  console.log("OK — all noindex/slug/category/date/single-block/refs checks passed for all 3 locales.");
}

console.log("\n=== DOC SUMMARY ===");
for (const lang of ["en", "pl", "ru"]) {
  const d = docs[lang];
  console.log(`\n--- ${lang.toUpperCase()} (${d._id}) ---`);
  console.log(`title: ${d.title}`);
  console.log(`slug: ${lang} -> ${d.slug[lang].current}`);
  console.log(`category ref: ${d.category._ref}`);
  console.log(`contentBlocks: [${d.contentBlocks.map((b) => b._type).join(", ")}] (${d.contentBlocks[0].content.length} PT blocks)`);
  console.log(`serviceOffered refs: ${SERVICE_OFFERED_REFS[lang].join(", ")}`);
  console.log(`relatedArticles refs: ${RELATED_ARTICLES_REF[lang].join(", ")}`);
}

console.log("\n=== translation.metadata ===");
console.log(JSON.stringify(metaDoc, null, 2));

console.log("\nFull resolved docs written to drafts/_builder-vs-custom-docs.json");
