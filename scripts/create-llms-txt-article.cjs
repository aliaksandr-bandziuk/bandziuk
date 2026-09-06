const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const BASE_ID = "blog-llms-txt";
const PUBLISHED_AT = "2026-08-14T12:00:00Z";

const CATEGORY = {
  en: "c5f6ed68-8b92-4f9d-81b4-2db766b752e1",
  pl: "fbbcc050-0f47-4289-97f5-f2b62b16c5cd",
  ru: "2c48e7d6-6853-4190-8fd2-b48f481362e9",
};

const AUTHOR = {
  en: "author-aliaksandr-bandziuk",
  pl: "author-aliaksandr-bandziuk.pl",
  ru: "author-aliaksandr-bandziuk.ru",
};

const SERVICE_OFFERED = {
  en: ["831dc620-2863-4d55-baa0-aa874a7374ac", "42a469a6-28f3-4015-8b88-414c8eb3d4fa"],
  pl: ["3a759a28-4135-4731-a318-cffee1b512f0", "77c5f5df-a6f3-49ca-8f42-f1439e3490c6"],
  ru: ["1c0a4ea3-2dd6-4081-a0a0-58ee87633f71", "6a81eab0-6993-41a6-adc3-d9047a3b35a0"],
};

const RELATED_BASE_IDS = [
  "blog-ai-brand-audit",
  "blog-chatgpt-recommendations",
  "blog-ai-distorts-marketing-message",
];
function relatedArticleIds(lang) {
  const suffix = lang === "en" ? "" : `.${lang}`;
  return RELATED_BASE_IDS.map((id) => `${id}${suffix}`);
}

const SLUG = {
  en: "does-your-site-need-llms-txt",
  pl: "czy-strona-potrzebuje-pliku-llms-txt",
  ru: "nuzhen-li-saitu-fail-llms-txt",
};

const TITLE = {
  en: "Does Your Site Need an llms.txt File? An Honest Answer",
  pl: "Czy Twoja strona potrzebuje pliku llms.txt? Uczciwa odpowiedź",
  ru: "Нужен ли сайту файл llms.txt: честный ответ",
};

const META_TITLE = {
  en: "Does Your Site Need an llms.txt File? An Honest Answer",
  pl: "Czy Twoja strona potrzebuje pliku llms.txt? Uczciwa odpowiedź",
  ru: "Нужен ли сайту файл llms.txt: честный ответ на 2026 год",
};

const META_DESCRIPTION = {
  en: "Does llms.txt help you get cited by AI assistants? What the evidence shows, who actually reads the file, and the one implementation mistake worth avoiding.",
  pl: "Czy llms.txt pomaga trafiać do odpowiedzi asystentów AI? Co pokazują pomiary, kto naprawdę czyta ten plik i jakiego błędu wdrożenia lepiej nie popełniać.",
  ru: "Помогает ли llms.txt попадать в ответы ИИ-ассистентов? Что показывают измерения, кто на самом деле читает файл и какую ошибку внедрения стоит не допустить.",
};

const EXCERPT = {
  en: "Whether an llms.txt file helps your site get cited by AI assistants — what the measurements show, which systems genuinely read it, and who should ship one.",
  pl: "Czy plik llms.txt pomaga trafiać do odpowiedzi asystentów AI: co pokazują pomiary, które systemy naprawdę go czytają i komu warto go wdrożyć.",
  ru: "Помогает ли файл llms.txt попадать в ответы ИИ-ассистентов: что показывают измерения, какие системы его действительно читают и кому его стоит ставить.",
};

const ALT = {
  en: "An llms.txt file being fetched by an AI agent rather than a search crawler",
  pl: "Plik llms.txt pobierany przez agenta AI, a nie przez robota wyszukiwarki",
  ru: "Файл llms.txt, который запрашивает ИИ-агент, а не поисковый робот",
};

function docId(lang) {
  return lang === "en" ? BASE_ID : `${BASE_ID}.${lang}`;
}

async function main() {
  const portableText = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../drafts/llms-txt-portabletext.json"), "utf8")
  );

  console.log("Uploading cover image...");
  const asset = await client.assets.upload(
    "image",
    fs.createReadStream(path.resolve(__dirname, "../drafts/llmstxt.jpg")),
    { filename: "llmstxt.jpg" }
  );
  console.log("Uploaded asset:", asset._id);

  const tx = client.transaction();

  for (const lang of ["en", "pl", "ru"]) {
    const id = docId(lang);
    tx.create({
      _id: id,
      _type: "blog",
      language: lang,
      title: TITLE[lang],
      slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: SLUG[lang] } },
      seo: { metaTitle: META_TITLE[lang], metaDescription: META_DESCRIPTION[lang] },
      publishedAt: PUBLISHED_AT,
      category: { _type: "reference", _ref: CATEGORY[lang] },
      author: { _type: "reference", _ref: AUTHOR[lang] },
      previewImage: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
        alt: ALT[lang],
      },
      excerpt: EXCERPT[lang],
      contentBlocks: [
        {
          _key: "body",
          _type: "textContent",
          content: portableText[lang],
          textAlign: "left",
        },
      ],
      serviceOffered: SERVICE_OFFERED[lang].map((ref) => ({
        _type: "reference",
        _ref: ref,
        _key: ref,
      })),
      relatedArticles: relatedArticleIds(lang).map((ref) => ({
        _type: "reference",
        _ref: ref,
        _key: ref,
      })),
    });
  }

  tx.create({
    _id: `${BASE_ID}.i18n`,
    _type: "translation.metadata",
    documentId: BASE_ID,
    translations: [
      { _key: "en", value: { _type: "reference", _ref: docId("en") } },
      { _key: "pl", value: { _type: "reference", _ref: docId("pl") } },
      { _key: "ru", value: { _type: "reference", _ref: docId("ru") } },
    ],
  });

  const result = await tx.commit();
  console.log("Transaction committed:", JSON.stringify(result.results.map((r) => r.id), null, 1));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
