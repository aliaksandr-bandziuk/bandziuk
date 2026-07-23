// scripts/assemble-beauty-salon-cost-blog.cjs
//
// Assembles the full three-locale blog-beauty-salon-website-cost document
// set from drafts/_beauty-salon-cost-parsed.json plus resolved reference
// IDs, and writes the complete resolved structure to
// drafts/_beauty-salon-cost-docs.json for review. Does NOT write to Sanity.

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

const parsed = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../drafts/_beauty-salon-cost-parsed.json"), "utf8")
);

const BASE_ID = "blog-beauty-salon-website-cost";

const CATEGORY_REF = {
  en: "7fabc480-902f-4133-8951-3f6c1ba3fb29",
  pl: "a082cd4a-1681-4952-a0e7-88e70dc6f61c",
  ru: "9b17021c-1a92-432b-a0e1-1c057e25353b",
};

// Both beauty development landings, per locale (resolved via translation.metadata in a prior session).
const SERVICE_OFFERED_REFS = {
  en: ["dab61d1a-28d8-4a10-a2c4-de17399cdbe7", "405bd22d-5aee-45a3-8f9b-108821d9006a"],
  pl: ["a2b00f93-6d28-4b36-b2c9-e5c01867b5b4", "a095405f-8a0a-4f89-ba80-8e287923e2a8"],
  ru: ["4128719c-e187-4191-9120-eee3f5f9fa6f", "ec128e15-9d97-47df-9aaa-d5b0db480966"],
};

const RELATED_ARTICLES_REF = {
  en: ["blog-psychologist-website-cost", "blog-seo-cost", "blog-vibecoding-rescue-case"],
  pl: ["blog-psychologist-website-cost.pl", "blog-seo-cost.pl", "blog-vibecoding-rescue-case.pl"],
  ru: ["blog-psychologist-website-cost.ru", "blog-seo-cost.ru", "blog-vibecoding-rescue-case.ru"],
};

const META = {
  en: {
    title: "How Much a Beauty Salon Website Costs: A Complete Pricing Guide",
    slugKey: "en",
    slug: "beauty-salon-website-cost",
    metaTitle: "How Much a Beauty Salon Website Costs: Full Guide",
    metaDescription:
      "How much does a beauty salon website cost? What drives the price, what each tier includes, and why Instagram alone doesn't bring in new clients from search.",
    excerpt:
      "A detailed guide to the cost of a website for a beauty salon or independent beauty professional: what the price is made of, how a simple landing page differs from a full salon site with online booking, and why social media doesn't replace a website.",
  },
  pl: {
    title: "Ile kosztuje strona dla salonu kosmetycznego: kompletny przewodnik po cenie",
    slugKey: "pl",
    slug: "ile-kosztuje-strona-dla-salonu-kosmetycznego",
    metaTitle: "Ile kosztuje strona dla salonu kosmetycznego: cennik",
    metaDescription:
      "Sprawdź, ile kosztuje strona dla salonu kosmetycznego i specjalisty beauty: od czego zależy cena, co wchodzi w każdy poziom i dlaczego Instagram nie zastąpi strony.",
    excerpt:
      "Szczegółowy przewodnik po kosztach strony dla salonu kosmetycznego i prywatnego specjalisty beauty: z czego składa się cena, czym prosty landing różni się od pełnej strony salonu z rezerwacją online, i dlaczego social media nie zastępują strony.",
  },
  ru: {
    title: "Сколько стоит сайт салона красоты: полное руководство по цене",
    slugKey: "ru",
    slug: "skolko-stoit-sait-salona-krasoty",
    metaTitle: "Сколько стоит сайт салона красоты: цены и что входит",
    metaDescription:
      "Разбираем, сколько стоит сайт для салона красоты и бьюти-мастера: от чего зависит цена, что входит в каждый уровень и почему Instagram не заменяет сайт.",
    excerpt:
      "Подробное руководство по стоимости сайта для салона красоты и частного бьюти-мастера: из чего складывается цена, чем простой лендинг отличается от полноценного салонного сайта с онлайн-записью, и почему соцсети не заменяют сайт.",
  },
};

const PUBLISHED_AT = "2026-07-15T12:00:00Z";

function docIdFor(lang) {
  return lang === "en" ? BASE_ID : `${BASE_ID}.${lang}`;
}

function buildFaqBlock(lang) {
  const r = parsed[lang];
  return {
    _key: key(),
    _type: "faqBlock",
    title: r.faqTitle,
    faq: {
      _type: "accordionBlock",
      items: r.qaItems.map((qa) => ({
        _key: qa._key,
        question: qa.question,
        answer: qa.answer,
      })),
    },
  };
}

function buildDoc(lang) {
  const m = META[lang];
  const r = parsed[lang];

  const contentBlocks = [
    { _key: key(), _type: "textContent", textAlign: "left", content: r.block1Content },
    buildFaqBlock(lang),
    { _key: key(), _type: "textContent", textAlign: "left", content: r.block3Content },
  ];

  return {
    _id: docIdFor(lang),
    _type: "blog",
    language: lang,
    title: m.title,
    slug: {
      _type: "localizedSlug",
      [m.slugKey]: { _type: "slug", current: m.slug },
    },
    seo: {
      metaTitle: m.metaTitle,
      metaDescription: m.metaDescription,
    },
    publishedAt: PUBLISHED_AT,
    category: { _type: "reference", _ref: CATEGORY_REF[lang] },
    excerpt: m.excerpt,
    contentBlocks,
    serviceOffered: SERVICE_OFFERED_REFS[lang].map((ref) => ({
      _key: key(),
      _type: "reference",
      _ref: ref,
    })),
    relatedArticles: RELATED_ARTICLES_REF[lang].map((ref) => ({
      _key: key(),
      _type: "reference",
      _ref: ref,
    })),
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
  path.resolve(__dirname, "../drafts/_beauty-salon-cost-docs.json"),
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
  const faq = d.contentBlocks[1];
  if (faq.faq.items.length !== 7) errors.push(`${lang}: FAQ item count != 7`);
  if (d.serviceOffered.length !== 2) errors.push(`${lang}: serviceOffered count != 2`);
  if (d.relatedArticles.length !== 3) errors.push(`${lang}: relatedArticles count != 3`);
}

console.log("=== VALIDATION ===");
if (errors.length) {
  console.log("FAILED:");
  errors.forEach((e) => console.log(`  - ${e}`));
} else {
  console.log("OK — all noindex/slug/category/date/FAQ/refs checks passed for all 3 locales.");
}

console.log("\n=== DOC SUMMARY ===");
for (const lang of ["en", "pl", "ru"]) {
  const d = docs[lang];
  console.log(`\n--- ${lang.toUpperCase()} (${d._id}) ---`);
  console.log(`title: ${d.title}`);
  console.log(`slug: ${lang} -> ${d.slug[lang].current} (only key: ${Object.keys(d.slug).filter(k=>k!=='_type').join(",")})`);
  console.log(`metaTitle: ${d.seo.metaTitle}`);
  console.log(`metaDescription: ${d.seo.metaDescription}`);
  console.log(`excerpt: ${d.excerpt}`);
  console.log(`publishedAt: ${d.publishedAt}`);
  console.log(`category ref: ${d.category._ref}`);
  console.log(`contentBlocks: [${d.contentBlocks.map((b) => b._type).join(" -> ")}]`);
  console.log(`  block1 (textContent) blocks: ${d.contentBlocks[0].content.length}`);
  console.log(`  block2 (faqBlock) title: "${d.contentBlocks[1].title}", items: ${d.contentBlocks[1].faq.items.length}`);
  console.log(`  block3 (textContent) blocks: ${d.contentBlocks[2].content.length}`);
  console.log(`serviceOffered refs: ${SERVICE_OFFERED_REFS[lang].join(", ")}`);
  console.log(`relatedArticles refs: ${RELATED_ARTICLES_REF[lang].join(", ")}`);
}

console.log("\n=== translation.metadata ===");
console.log(JSON.stringify(metaDoc, null, 2));

console.log("\nFull resolved docs written to drafts/_beauty-salon-cost-docs.json");
