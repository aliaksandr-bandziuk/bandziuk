const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
const { parseMarkdownBody } = require("./cluster-md-to-portable-text.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");

function key() {
  return Math.random().toString(16).slice(2, 14);
}
function refArr(ids) {
  return ids.map((id) => ({ _key: key(), _type: "reference", _ref: id }));
}

const PUBLISHED_AT = "2026-08-10T12:00:00Z";
const IMAGE_FILE = path.resolve(__dirname, "../drafts/celebrities.jpg");

const AUTHOR = {
  en: "author-aliaksandr-bandziuk",
  pl: "author-aliaksandr-bandziuk.pl",
  ru: "author-aliaksandr-bandziuk.ru",
};

const CATEGORY = {
  en: "79c9a689-22de-413b-ac24-a00aa192206d", // SEO Strategy
  pl: "4c02f912-80b8-4121-a549-b3ba93004717", // Strategia SEO
  ru: "3de42d3b-9502-4c80-bcb0-7e438073df9b", // SEO-стратегия
};

const SERVICE_OFFERED = {
  en: ["42a469a6-28f3-4015-8b88-414c8eb3d4fa", "831dc620-2863-4d55-baa0-aa874a7374ac"],
  pl: ["77c5f5df-a6f3-49ca-8f42-f1439e3490c6", "3a759a28-4135-4731-a318-cffee1b512f0"],
  ru: ["6a81eab0-6993-41a6-adc3-d9047a3b35a0", "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71"],
};

const RELATED_ARTICLES = {
  en: ["blog-found-via-chatgpt", "blog-branded-traffic-bought-links", "blog-ai-brand-audit"],
  pl: ["blog-found-via-chatgpt.pl", "blog-branded-traffic-bought-links.pl", "blog-ai-brand-audit.pl"],
  ru: ["blog-found-via-chatgpt.ru", "blog-branded-traffic-bought-links.ru", "blog-ai-brand-audit.ru"],
};

const LOCALES = {
  en: {
    id: "blog-high-value-clients-search",
    mdFile: "drafts/blog-high-value-clients-dont-click-ads-EN.md",
    slug: "high-value-clients-dont-click-ads",
    title: "High-Value Clients Don't Click Ads: How They Find a Contractor in Google",
    metaTitle: "High-Value Clients Don't Click Ads: How They Search",
    metaDescription:
      "Why clients with large budgets don't click ads but search themselves, how their path differs from mass-market buyers, and what they check before making contact.",
    excerpt:
      "Why clients with large budgets don't click ads but search for themselves, how their path differs from mass-market demand, and exactly what they check on a site before writing.",
    imageAlt: "A high-value client's path from a referral to checking the site in search",
  },
  pl: {
    id: "blog-high-value-clients-search.pl",
    mdFile: "drafts/blog-drodzy-klienci-nie-klikaja-w-reklamy-PL.md",
    slug: "drodzy-klienci-nie-klikaja-w-reklamy",
    title: "Drodzy klienci nie klikają w reklamy: jak szukają wykonawcy w Google",
    metaTitle: "Drodzy klienci nie klikają w reklamy: jak szukają w Google",
    metaDescription:
      "Dlaczego klienci z dużymi budżetami nie klikają w reklamy, tylko szukają sami, czym ich droga różni się od masowej i co sprawdzają na stronie przed kontaktem.",
    excerpt:
      "Dlaczego klienci z dużymi budżetami nie klikają w reklamy, tylko szukają samodzielnie, czym ich droga różni się od masowego popytu i co dokładnie sprawdzają na stronie przed napisaniem.",
    imageAlt: "Droga zamożnego klienta od polecenia do sprawdzenia strony w wyszukiwarce",
  },
  ru: {
    id: "blog-high-value-clients-search.ru",
    mdFile: "drafts/blog-premialnye-klienty-ishut-v-google-RU.md",
    slug: "dorogie-klienty-ne-klikayut-po-reklame",
    title: "Дорогие клиенты не кликают по рекламе: как они находят подрядчика в Гугле",
    metaTitle: "Дорогие клиенты не кликают по рекламе: как они ищут",
    metaDescription:
      "Почему клиенты с крупными бюджетами не кликают по рекламе, а ищут сами, чем их путь отличается от массового и что они проверяют на сайте перед обращением.",
    excerpt:
      "Почему клиенты с большими бюджетами тоже приходят из поиска, чем их путь отличается от массового спроса и что именно они проверяют на сайте, прежде чем написать.",
    imageAlt: "Путь дорогого клиента от рекомендации до проверки сайта в поиске",
  },
};

async function main() {
  console.log(`${APPLY ? "Uploading" : "Would upload"} cover image: ${IMAGE_FILE}`);
  let imageAssetId = "PENDING_UPLOAD";
  if (APPLY) {
    const asset = await client.assets.upload("image", fs.createReadStream(IMAGE_FILE), {
      filename: path.basename(IMAGE_FILE),
    });
    imageAssetId = asset._id;
    console.log(`  asset id: ${imageAssetId}`);
  }

  const docs = [];
  for (const [lang, loc] of Object.entries(LOCALES)) {
    const mdPath = path.resolve(__dirname, "..", loc.mdFile);
    const blocks = parseMarkdownBody(fs.readFileSync(mdPath, "utf8"));

    const doc = {
      _id: loc.id,
      _type: "blog",
      language: lang,
      title: loc.title,
      slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: loc.slug } },
      seo: { metaTitle: loc.metaTitle, metaDescription: loc.metaDescription },
      excerpt: loc.excerpt,
      publishedAt: PUBLISHED_AT,
      category: { _type: "reference", _ref: CATEGORY[lang] },
      author: { _type: "reference", _ref: AUTHOR[lang] },
      previewImage: {
        _type: "image",
        alt: loc.imageAlt,
        asset: { _type: "reference", _ref: imageAssetId },
      },
      contentBlocks: [{ _key: key(), _type: "textContent", content: blocks, textAlign: "left" }],
      serviceOffered: refArr(SERVICE_OFFERED[lang]),
      relatedArticles: refArr(RELATED_ARTICLES[lang]),
    };
    docs.push(doc);
    console.log(
      `PREPARED ${loc.id} (${lang}) — ${doc.contentBlocks[0].content.length} blocks, slug=${loc.slug}`
    );
  }

  const i18nDoc = {
    _id: "blog-high-value-clients-search.i18n",
    _type: "translation.metadata",
    documentId: LOCALES.en.id,
    translations: Object.entries(LOCALES).map(([lang, loc]) => ({
      _key: lang,
      value: { _type: "reference", _ref: loc.id },
    })),
  };

  if (!APPLY) {
    console.log("\nDry run only — re-run with --apply.");
    return;
  }

  console.log("\nCommitting transaction: 3 blog docs + 1 i18n doc...");
  let tx = client.transaction();
  for (const doc of docs) tx = tx.createOrReplace(doc);
  tx = tx.createOrReplace(i18nDoc);
  const result = await tx.commit();
  console.log("COMMITTED. Document IDs:", result.results.map((r) => r.id).join(", "));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
