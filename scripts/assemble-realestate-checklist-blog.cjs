// scripts/assemble-realestate-checklist-blog.cjs
//
// Assembles the full three-locale blog-real-estate-agency-checklist document
// set from drafts/_realestate-checklist-parsed.json plus resolved reference
// IDs, and writes the complete resolved structure to
// drafts/_realestate-checklist-docs.json for review. Does NOT write to Sanity.
//
// STRUCTURAL DIFFERENCE: contentBlocks is a single textContent entry, no
// faqBlock.

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

const parsed = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../drafts/_realestate-checklist-parsed.json"), "utf8")
);

const BASE_ID = "blog-real-estate-agency-checklist";

const CATEGORY_REF = {
  en: "7fabc480-902f-4133-8951-3f6c1ba3fb29",
  pl: "a082cd4a-1681-4952-a0e7-88e70dc6f61c",
  ru: "9b17021c-1a92-432b-a0e1-1c057e25353b",
};

// serviceOffered: the real-estate agency landing only -- no separate
// real-estate SEO landing exists in Sanity (confirmed via search).
const SERVICE_OFFERED_REFS = {
  en: ["singlepage-real-estate-agency-website"],
  pl: ["singlepage-real-estate-agency-website.pl"],
  ru: ["singlepage-real-estate-agency-website.ru"],
};

const RELATED_ARTICLES_REF = {
  en: ["blog-agency-website-cost", "blog-developer-website-cost", "blog-found-via-chatgpt"],
  pl: ["blog-agency-website-cost.pl", "blog-developer-website-cost.pl", "blog-found-via-chatgpt.pl"],
  ru: ["blog-agency-website-cost.ru", "blog-developer-website-cost.ru", "blog-found-via-chatgpt.ru"],
};

const META = {
  en: {
    title: "What a Real Estate Agency Website Needs: A Checklist",
    slugKey: "en",
    slug: "what-a-real-estate-agency-website-needs",
    metaTitle: "What a Real Estate Agency Website Needs: Checklist",
    metaDescription:
      "A point-by-point checklist of what a real estate agency website must have: a filterable catalogue, full property pages, location pages and lead capture that works.",
    excerpt:
      "A practical checklist for a real estate agency website: which sections and features are essential, what separates a working catalogue from a good-looking brochure, and the mistakes that most often cost agencies enquiries.",
  },
  pl: {
    title: "Co powinno być na stronie biura nieruchomości: checklista",
    slugKey: "pl",
    slug: "co-powinno-byc-na-stronie-biura-nieruchomosci",
    metaTitle: "Co powinno być na stronie biura nieruchomości",
    metaDescription:
      "Sprawdź punkt po punkcie, co musi znaleźć się na stronie biura nieruchomości: katalog z filtrami, karta oferty, podstrony dzielnic i skuteczne pozyskiwanie zapytań.",
    excerpt:
      "Praktyczna checklista strony biura nieruchomości: jakie sekcje i funkcje są niezbędne, co odróżnia działający katalog od ładnej wizytówki, i jakie błędy najczęściej kosztują biuro zapytań.",
  },
  ru: {
    title: "Что должно быть на сайте агентства недвижимости: чек-лист",
    slugKey: "ru",
    slug: "chto-dolzhno-byt-na-saite-agentstva-nedvizhimosti",
    metaTitle: "Что должно быть на сайте агентства недвижимости",
    metaDescription:
      "Разбираем по пунктам, что обязательно должно быть на сайте агентства недвижимости: каталог с фильтрами, карточка объекта, мультиязычность и захват заявок.",
    excerpt:
      "Практический чек-лист по сайту агентства недвижимости: какие разделы и функции обязательны, что отличает работающий каталог от красивой витрины, и какие ошибки чаще всего стоят агентству заявок.",
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
  path.resolve(__dirname, "../drafts/_realestate-checklist-docs.json"),
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
  if (d.serviceOffered.length !== 1) errors.push(`${lang}: serviceOffered count != 1`);
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

console.log("\nFull resolved docs written to drafts/_realestate-checklist-docs.json");
