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

const PUBLISHED_AT = "2026-08-07T12:00:00Z";
const IMAGE_FILE = path.resolve(__dirname, "../drafts/bad-seo.jpg");

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
  en: ["42a469a6-28f3-4015-8b88-414c8eb3d4fa", "0e071d28-ee05-42a2-81a6-5be75b4264bc"],
  pl: ["77c5f5df-a6f3-49ca-8f42-f1439e3490c6", "8b7c6b4c-412c-4fa1-b8f8-ec0a1b2816b5"],
  ru: ["6a81eab0-6993-41a6-adc3-d9047a3b35a0", "0ba09f41-cdc6-40b1-8b57-e56ac656e979"],
};

const RELATED_ARTICLES = {
  en: ["blog-how-to-choose-developer", "blog-website-no-leads", "blog-seo-cost"],
  pl: ["blog-how-to-choose-developer.pl", "blog-website-no-leads.pl", "blog-seo-cost.pl"],
  ru: ["blog-how-to-choose-developer.ru", "blog-website-no-leads.ru", "blog-seo-cost.ru"],
};

const LOCALES = {
  en: {
    id: "blog-branded-traffic-bought-links",
    mdFile: "drafts/blog-branded-traffic-and-bought-links-EN.md",
    slug: "branded-traffic-and-bought-links-seo-reports",
    title: "Branded Traffic and Bought Links: Three Substitutions in SEO Reports",
    metaTitle: "Branded Traffic and Bought Links: SEO Report Swaps",
    metaDescription:
      "How agencies pass off branded traffic, impressions and link counts as SEO results — and how to check any report yourself in twenty minutes in Search Console.",
    excerpt:
      "How SEO reports substitute activity for results: branded traffic, impressions instead of clicks, and link counts. What to check yourself in Search Console and what to ask your agency.",
    imageAlt: "An SEO report where the growth comes entirely from branded queries",
  },
  pl: {
    id: "blog-branded-traffic-bought-links.pl",
    mdFile: "drafts/blog-ruch-brandowy-i-kupione-linki-PL.md",
    slug: "ruch-brandowy-i-kupione-linki-w-raportach-seo",
    title: "Ruch brandowy i kupione linki: trzy podmiany w raportach z pozycjonowania strony",
    metaTitle: "Ruch brandowy i kupione linki: podmiany w raportach SEO",
    metaDescription:
      "Sprawdź, jak wykonawcy podają za efekt SEO ruch brandowy, wyświetlenia i liczbę kupionych linków. Jak zweryfikować raport samodzielnie w dwadzieścia minut.",
    excerpt:
      "Jak w raportach SEO podmienia się wynik: ruch brandowy, wyświetlenia zamiast kliknięć i liczba kupionych linków. Co sprawdzić samemu w Search Console i o co zapytać wykonawcę.",
    imageAlt: "Raport SEO, w którym wzrost zapewniają zapytania markowe",
  },
  ru: {
    id: "blog-branded-traffic-bought-links.ru",
    mdFile: "drafts/blog-brendovyi-trafik-i-zakupka-ssylok-RU.md",
    slug: "brendovyi-trafik-i-kuplennye-ssylki-v-otchetah-seo",
    title: "Брендовый трафик и купленные ссылки: три подмены в отчётах по SEO-продвижению сайта",
    metaTitle: "Брендовый трафик и купленные ссылки: подмены в отчётах",
    metaDescription:
      "Разбираем, как подрядчики выдают за результат SEO брендовый трафик, показы и количество купленных ссылок. Как проверить отчёт за двадцать минут.",
    excerpt:
      "Как в отчётах по SEO подменяют результат: брендовый трафик, показы вместо кликов и количество закупленных ссылок. Что проверить в Search Console самому и какие вопросы задать подрядчику.",
    imageAlt: "Отчёт по продвижению, в котором рост обеспечен брендовыми запросами",
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
    _id: "blog-branded-traffic-bought-links.i18n",
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
