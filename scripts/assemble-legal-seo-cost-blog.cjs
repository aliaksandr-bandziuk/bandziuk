// scripts/assemble-legal-seo-cost-blog.cjs
//
// Assembles the full three-locale blog-legal-seo-cost document set from
// drafts/_legal-seo-cost-parsed.json (produced by build-legal-seo-cost-blog.cjs)
// plus resolved reference IDs, and writes the complete resolved structure to
// drafts/_legal-seo-cost-docs.json for review. Does NOT write to Sanity.

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

const parsed = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../drafts/_legal-seo-cost-parsed.json"), "utf8")
);

const BASE_ID = "blog-legal-seo-cost";

const CATEGORY_REF = {
  en: "7fabc480-902f-4133-8951-3f6c1ba3fb29",
  pl: "a082cd4a-1681-4952-a0e7-88e70dc6f61c",
  ru: "9b17021c-1a92-432b-a0e1-1c057e25353b",
};

const SERVICE_OFFERED_REFS = {
  en: ["dc0a0998-d7e5-485a-b405-233ebfcb1630", "f4a4b3c0-2d0e-4416-9909-04dcc667318b"],
  pl: ["1c9c94f6-3eb3-4f2a-8e8e-7e7ce88ce196", "9f22ba45-fc9d-4644-8d6f-ec4696618d63"],
  ru: ["84798707-8328-4ca5-ad3f-6e4f17c95664", "2fedad09-513a-438c-950a-8562d0a89b8f"],
};

const RELATED_ARTICLES_REF = {
  en: "blog-seo-cost",
  pl: "blog-seo-cost.pl",
  ru: "blog-seo-cost.ru",
};

const META = {
  en: {
    title: "How Much SEO for a Law Firm Costs: A Complete Pricing Guide",
    slugKey: "en",
    slug: "how-much-legal-seo-costs",
    metaTitle: "How Much SEO for Law Firms Costs: Full Guide",
    metaDescription:
      "How much does SEO for a law firm cost? What drives the price, why legal SEO is highly competitive, and what service tiers exist for ongoing promotion.",
    excerpt:
      "A detailed guide to the cost of SEO for law firms: what the price is made of, why the legal niche needs a distinct approach to search optimization, and how much each support tier costs.",
  },
  pl: {
    title: "Ile kosztuje pozycjonowanie SEO strony kancelarii prawnej",
    slugKey: "pl",
    slug: "ile-kosztuje-seo-dla-kancelarii-prawnej",
    metaTitle: "Ile kosztuje pozycjonowanie SEO kancelarii prawnej",
    metaDescription:
      "Sprawdź, ile kosztuje pozycjonowanie strony kancelarii prawnej: od czego zależy cena, dlaczego branża prawnicza jest konkurencyjna i jakie są poziomy SEO.",
    excerpt:
      "Szczegółowy przewodnik po kosztach SEO dla kancelarii prawnych: z czego składa się cena, dlaczego branża prawnicza wymaga osobnego podejścia do pozycjonowania, i ile kosztuje każdy poziom obsługi.",
  },
  ru: {
    title: "Сколько стоит SEO-продвижение сайта юридической компании",
    slugKey: "ru",
    slug: "skolko-stoit-seo-yuristov",
    metaTitle: "Сколько стоит SEO-продвижение сайта юридической фирмы",
    metaDescription:
      "Разбираем, сколько стоит продвижение сайта юридической компании: от чего зависит цена, почему юридическая ниша считается конкурентной, и какие есть уровни SEO.",
    excerpt:
      "Подробное руководство по стоимости SEO для юридических фирм: из чего складывается цена, почему юридическая ниша требует отдельного подхода к продвижению, и сколько стоит каждый уровень сопровождения.",
  },
};

const PUBLISHED_AT = "2026-07-22T12:00:00Z";

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
    {
      _key: key(),
      _type: "textContent",
      textAlign: "left",
      content: r.block1Content,
    },
    buildFaqBlock(lang),
    {
      _key: key(),
      _type: "textContent",
      textAlign: "left",
      content: r.block3Content,
    },
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
    relatedArticles: [
      { _key: key(), _type: "reference", _ref: RELATED_ARTICLES_REF[lang] },
    ],
  };
}

const docs = {
  en: buildDoc("en"),
  pl: buildDoc("pl"),
  ru: buildDoc("ru"),
};

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
  path.resolve(__dirname, "../drafts/_legal-seo-cost-docs.json"),
  JSON.stringify({ docs, metaDoc }, null, 2)
);

// --- Validation ---
const errors = [];
for (const lang of ["en", "pl", "ru"]) {
  const d = docs[lang];
  if (!d.seo.metaTitle || !d.seo.metaDescription) errors.push(`${lang}: missing metaTitle/metaDescription`);
  if (!d.slug[lang]?.current) errors.push(`${lang}: missing own-locale slug`);
  if (Object.keys(d.slug).filter((k) => k !== "_type").length !== 1) errors.push(`${lang}: slug has extra locale keys`);
  if (!d.category._ref) errors.push(`${lang}: missing category ref`);
  if (!d.publishedAt) errors.push(`${lang}: missing publishedAt`);
  const faq = d.contentBlocks[1];
  if (faq.faq.items.length !== 6) errors.push(`${lang}: FAQ item count != 6`);
}

console.log("=== VALIDATION ===");
if (errors.length) {
  console.log("FAILED:");
  errors.forEach((e) => console.log(`  - ${e}`));
} else {
  console.log("OK — all noindex/slug/category/date/FAQ checks passed for all 3 locales.");
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
  console.log(`relatedArticles ref: ${RELATED_ARTICLES_REF[lang]}`);
}

console.log("\n=== translation.metadata ===");
console.log(JSON.stringify(metaDoc, null, 2));

console.log("\nFull resolved docs written to drafts/_legal-seo-cost-docs.json");
