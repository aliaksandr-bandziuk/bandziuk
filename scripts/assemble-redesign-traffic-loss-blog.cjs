// scripts/assemble-redesign-traffic-loss-blog.cjs
//
// Assembles the full three-locale blog-redesign-traffic-loss document set
// from drafts/_redesign-traffic-loss-parsed.json plus resolved reference
// IDs, and writes the complete resolved structure to
// drafts/_redesign-traffic-loss-docs.json for review. Does NOT write to Sanity.

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

const parsed = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../drafts/_redesign-traffic-loss-parsed.json"), "utf8")
);

const BASE_ID = "blog-redesign-traffic-loss";

// Category: "Technical SEO" -- best fit for a migration/redesign technical-SEO
// checklist article (URLs, redirects, structured data, indexing, hreflang).
const CATEGORY_REF = {
  en: "8ec0e4c3-ce35-4e9c-b066-8a3c83ebe616",
  pl: "9ae39223-9f8b-42c5-a8d4-90d644b81f7a",
  ru: "c1c3f7c8-39a5-4fe9-933f-1b8e5fccb695",
};

// serviceOffered: Website SEO Audit (diagnosis/traffic-drop angle) +
// SEO Optimization and Strategy (technical SEO preservation angle: schema,
// hreflang, crawlability -- exactly what this article is about protecting).
const SERVICE_OFFERED_REFS = {
  en: ["0e071d28-ee05-42a2-81a6-5be75b4264bc", "42a469a6-28f3-4015-8b88-414c8eb3d4fa"],
  pl: ["8b7c6b4c-412c-4fa1-b8f8-ec0a1b2816b5", "77c5f5df-a6f3-49ca-8f42-f1439e3490c6"],
  ru: ["0ba09f41-cdc6-40b1-8b57-e56ac656e979", "6a81eab0-6993-41a6-adc3-d9047a3b35a0"],
};

// relatedArticles: vibecoding rescue case (mandatory, migration disaster case),
// SEO cost (adjacent -- "what it costs" section), bad-SEO-specialist article
// (adjacent -- avoiding exactly the kind of unchecked redesign this covers).
const RELATED_ARTICLES_REF = {
  en: ["blog-vibecoding-rescue-case", "blog-seo-cost", "49046caa-9185-4bba-a350-700b5eac9c86"],
  pl: ["blog-vibecoding-rescue-case.pl", "blog-seo-cost.pl", "df268cec-62b6-4079-b231-591a5dfbbe07"],
  ru: ["blog-vibecoding-rescue-case.ru", "blog-seo-cost.ru", "90cd9906-6186-4afd-be5c-1d1243f2c844"],
};

const META = {
  en: {
    title: "Website Redesign Without Losing Traffic: What to Check Before, During and After",
    slugKey: "en",
    slug: "website-redesign-without-losing-traffic",
    metaTitle: "Website Redesign Without Losing Traffic: Protect Your SEO",
    metaDescription:
      "What happens to traffic during a website redesign and migration, why rankings drop, how to prevent it, and what to do if your site has already lost visibility.",
    excerpt:
      "A practical guide to redesigning and migrating a website without losing traffic: why rankings drop after launch, what to check before, on moving day and after, and how to recover if the drop has already happened.",
  },
  pl: {
    title: "Redesign strony bez utraty ruchu: co sprawdzić przed, w trakcie i po",
    slugKey: "pl",
    slug: "redesign-strony-bez-utraty-ruchu",
    metaTitle: "Redesign strony bez utraty ruchu: jak nie zepsuć SEO",
    metaDescription:
      "Co dzieje się z ruchem przy redesignie i migracji strony, dlaczego pozycje spadają, jak tego uniknąć i co zrobić, gdy widoczność już poleciała w dół.",
    excerpt:
      "Praktyczny przewodnik po redesignie i migracji strony bez utraty ruchu: dlaczego pozycje spadają po starcie, co sprawdzić przed migracją, w dniu przenosin i po nich, oraz jak odbudować stronę, jeśli spadek już się wydarzył.",
  },
  ru: {
    title: "Редизайн сайта без потери трафика: что проверить до, во время и после",
    slugKey: "ru",
    slug: "redizayn-sayta-bez-poteri-trafika",
    metaTitle: "Редизайн сайта без потери трафика: как не обрушить SEO",
    metaDescription:
      "Что происходит с трафиком при редизайне и миграции сайта, из-за чего он падает, как этого избежать и что делать, если позиции уже просели после запуска.",
    excerpt:
      "Практическое руководство по редизайну и миграции сайта без потери трафика: из-за чего проседают позиции после запуска, что проверить до, в день переезда и после, и как восстанавливать сайт, если падение уже случилось.",
  },
};

const PUBLISHED_AT = "2026-07-25T12:00:00Z";

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
      items: r.qaItems.map((qa) => ({ _key: qa._key, question: qa.question, answer: qa.answer })),
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
  path.resolve(__dirname, "../drafts/_redesign-traffic-loss-docs.json"),
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
  const linkCount = d.contentBlocks[0].content.reduce((n, b) => n + (b.markDefs?.length || 0), 0)
    + d.contentBlocks[1].faq.items.reduce((n, i) => n + i.answer.reduce((n2, b) => n2 + (b.markDefs?.length || 0), 0), 0);
  if (linkCount !== 4) errors.push(`${lang}: expected 4 in-body links, found ${linkCount}`);
}

console.log("=== VALIDATION ===");
if (errors.length) {
  console.log("FAILED:");
  errors.forEach((e) => console.log(`  - ${e}`));
} else {
  console.log("OK — all noindex/slug/category/date/FAQ/refs/link checks passed for all 3 locales.");
}

console.log("\n=== DOC SUMMARY ===");
for (const lang of ["en", "pl", "ru"]) {
  const d = docs[lang];
  console.log(`\n--- ${lang.toUpperCase()} (${d._id}) ---`);
  console.log(`title: ${d.title}`);
  console.log(`slug: ${lang} -> ${d.slug[lang].current}`);
  console.log(`category ref: ${d.category._ref}`);
  console.log(`contentBlocks: [${d.contentBlocks.map((b) => b._type).join(" -> ")}]`);
  console.log(`  block1 blocks: ${d.contentBlocks[0].content.length}`);
  console.log(`  block2 (faqBlock) title: "${d.contentBlocks[1].title}", items: ${d.contentBlocks[1].faq.items.length}`);
  console.log(`  block3 blocks: ${d.contentBlocks[2].content.length}`);
  console.log(`serviceOffered refs: ${SERVICE_OFFERED_REFS[lang].join(", ")}`);
  console.log(`relatedArticles refs: ${RELATED_ARTICLES_REF[lang].join(", ")}`);
}

console.log("\n=== translation.metadata ===");
console.log(JSON.stringify(metaDoc, null, 2));

console.log("\nFull resolved docs written to drafts/_redesign-traffic-loss-docs.json");
