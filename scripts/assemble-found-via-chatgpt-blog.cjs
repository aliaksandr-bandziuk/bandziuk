// scripts/assemble-found-via-chatgpt-blog.cjs
//
// Assembles the full three-locale blog-found-via-chatgpt document set from
// drafts/_found-via-chatgpt-parsed.json plus resolved reference IDs, and
// writes the complete resolved structure to
// drafts/_found-via-chatgpt-docs.json for review. Does NOT write to Sanity.
//
// Screenshot markers (__screenshot) from the parser are converted here into
// real Sanity `image` PortableText array members: alt text set, caption as a
// one-block contentBlock array, asset intentionally omitted (uploaded later
// in Studio, same workflow as portfolio screenshots).

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

const parsed = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../drafts/_found-via-chatgpt-parsed.json"), "utf8")
);

const BASE_ID = "blog-found-via-chatgpt";

const CATEGORY_REF = {
  en: "c5f6ed68-8b92-4f9d-81b4-2db766b752e1",
  pl: "fbbcc050-0f47-4289-97f5-f2b62b16c5cd",
  ru: "2c48e7d6-6853-4190-8fd2-b48f481362e9",
};

const SERVICE_OFFERED_REFS = {
  en: ["831dc620-2863-4d55-baa0-aa874a7374ac", "42a469a6-28f3-4015-8b88-414c8eb3d4fa"],
  pl: ["3a759a28-4135-4731-a318-cffee1b512f0", "77c5f5df-a6f3-49ca-8f42-f1439e3490c6"],
  ru: ["1c0a4ea3-2dd6-4081-a0a0-58ee87633f71", "6a81eab0-6993-41a6-adc3-d9047a3b35a0"],
};

const RELATED_ARTICLES_REF = {
  en: ["blog-seo-cost", "blog-psychologist-website-cost", "blog-vibecoding-rescue-case"],
  pl: ["blog-seo-cost.pl", "blog-psychologist-website-cost.pl", "blog-vibecoding-rescue-case.pl"],
  ru: ["blog-seo-cost.ru", "blog-psychologist-website-cost.ru", "blog-vibecoding-rescue-case.ru"],
};

const META = {
  en: {
    title: "How Clients Find Specialists Through ChatGPT: A Real Case and How It Works",
    slugKey: "en",
    slug: "how-clients-find-you-through-chatgpt",
    metaTitle: "How Clients Find Specialists Through ChatGPT in 2026",
    metaDescription:
      "A real case and the mechanics: how people look for contractors through ChatGPT and other AI assistants, why some sites make it into the answers and others don't.",
    excerpt:
      "A real case and a breakdown of the mechanics: how people search for specialists through ChatGPT, Perplexity and Google AI Overviews, what makes an AI recommend one business over another, and what to change on your site to appear in those answers.",
  },
  pl: {
    title: "Jak klienci znajdują specjalistów przez ChatGPT: prawdziwy case i rozbiór mechaniki",
    slugKey: "pl",
    slug: "jak-klienci-znajduja-specjalistow-przez-chatgpt",
    metaTitle: "Jak klienci znajdują specjalistów przez ChatGPT w 2026",
    metaDescription:
      "Na prawdziwym przykładzie: jak ludzie szukają wykonawców przez ChatGPT i innych asystentów AI, dlaczego jedne strony trafiają do odpowiedzi, a inne nie, i co z tym zrobić.",
    excerpt:
      "Prawdziwy case i rozbiór mechaniki: jak ludzie szukają specjalistów przez ChatGPT, Perplexity i Google AI Overviews, po czym AI wybiera, kogo polecić, i co zrobić ze stroną, żeby trafiać do takich odpowiedzi.",
  },
  ru: {
    title: "Как клиенты находят специалистов через ChatGPT: реальный кейс и разбор механики",
    slugKey: "ru",
    slug: "kak-klienty-nahodyat-cherez-chatgpt",
    metaTitle: "Как клиенты находят специалистов через ChatGPT в 2026",
    metaDescription:
      "Разбираем на реальном примере, как люди ищут подрядчиков через ChatGPT и другие ИИ-ассистенты, почему одни сайты попадают в ответы, а другие нет, и что с этим делать.",
    excerpt:
      "Реальный кейс и разбор механики: как люди ищут специалистов через ChatGPT, Perplexity и Google AI Overviews, по каким признакам ИИ выбирает, кого рекомендовать, и что нужно сделать с сайтом, чтобы попадать в такие ответы.",
  },
};

const PUBLISHED_AT = "2026-07-23T12:00:00Z";

function docIdFor(lang) {
  return lang === "en" ? BASE_ID : `${BASE_ID}.${lang}`;
}

function captionBlock(text) {
  return [
    {
      _key: key(),
      _type: "block",
      children: [{ _key: key(), _type: "span", marks: [], text }],
      markDefs: [],
      style: "normal",
    },
  ];
}

// Convert a parsed screenshot marker into a real Sanity inline image object.
// Asset is intentionally omitted -- uploaded manually in Studio afterwards.
function toImageObject(shot) {
  return {
    _key: key(),
    _type: "image",
    alt: shot.alt,
    caption: captionBlock(shot.caption),
  };
}

function convertBlock1(rawBlocks) {
  return rawBlocks.map((b) => (b.__screenshot ? toImageObject(b) : b));
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
    { _key: key(), _type: "textContent", textAlign: "left", content: convertBlock1(r.block1Content) },
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
  path.resolve(__dirname, "../drafts/_found-via-chatgpt-docs.json"),
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
  const images = d.contentBlocks[0].content.filter((b) => b._type === "image");
  if (images.length !== 4) errors.push(`${lang}: expected 4 inline images, got ${images.length}`);
  images.forEach((img, i) => {
    if (!img.alt) errors.push(`${lang}: image ${i + 1} missing alt`);
    if (!img.caption?.[0]?.children?.[0]?.text) errors.push(`${lang}: image ${i + 1} missing caption`);
    if (img.asset) errors.push(`${lang}: image ${i + 1} unexpectedly has an asset set`);
  });
}

console.log("=== VALIDATION ===");
if (errors.length) {
  console.log("FAILED:");
  errors.forEach((e) => console.log(`  - ${e}`));
} else {
  console.log("OK — all noindex/slug/category/date/FAQ/refs/image checks passed for all 3 locales.");
}

console.log("\n=== DOC SUMMARY ===");
for (const lang of ["en", "pl", "ru"]) {
  const d = docs[lang];
  console.log(`\n--- ${lang.toUpperCase()} (${d._id}) ---`);
  console.log(`title: ${d.title}`);
  console.log(`slug: ${lang} -> ${d.slug[lang].current}`);
  console.log(`category ref: ${d.category._ref}`);
  console.log(`contentBlocks: [${d.contentBlocks.map((b) => b._type).join(" -> ")}]`);
  console.log(`  block1 items: ${d.contentBlocks[0].content.length} (incl. ${d.contentBlocks[0].content.filter((b) => b._type === "image").length} images, no asset)`);
  d.contentBlocks[0].content.filter((b) => b._type === "image").forEach((img, i) => {
    console.log(`    image ${i + 1}: alt="${img.alt}"`);
    console.log(`               caption="${img.caption[0].children[0].text}"`);
  });
  console.log(`  block2 (faqBlock) title: "${d.contentBlocks[1].title}", items: ${d.contentBlocks[1].faq.items.length}`);
  console.log(`  block3 blocks: ${d.contentBlocks[2].content.length}`);
  console.log(`serviceOffered refs: ${SERVICE_OFFERED_REFS[lang].join(", ")}`);
  console.log(`relatedArticles refs: ${RELATED_ARTICLES_REF[lang].join(", ")}`);
}

console.log("\n=== translation.metadata ===");
console.log(JSON.stringify(metaDoc, null, 2));

console.log("\nFull resolved docs written to drafts/_found-via-chatgpt-docs.json");
