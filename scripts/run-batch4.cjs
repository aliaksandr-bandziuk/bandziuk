const path = require("path");
const fs = require("fs");
const { parseTaggedContent } = require("./parse-tagged-content.cjs");
const {
  client, ref, key,
  benefitsBlock, gridBlock, stepsBlock, faqBlock, textContent, uploadImage,
} = require("./create-batch1-warsaw.cjs");

const SWITZERLAND = { en: ref("singlepage-seo-switzerland"), ru: ref("singlepage-seo-switzerland.ru") };
const SWITZERLAND_URL = { en: "/services/locations/seo-for-swiss-market", ru: "/ru/uslugi/lokacii/prodvizhenie-na-shveytsarskiy-rynok" };
const FELGILAB = { en: "/portfolio/felgilab-wordpress-rebuild", ru: "/ru/portfolio/pererabotka-saita-felgilab-wordpress" };
const MULTILINGUAL_WEB = { en: "/multilingual-website-development", ru: "/ru/razrabotka-multiyazychnogo-saita" };
const AI_SEARCH_READY = { en: "/services/ai-search-readiness", ru: "/ru/uslugi/podgotovka-saita-k-ii-poisku" };
const SEO_STRATEGY = { en: "/services/seo-optimization-and-strategy", ru: "/ru/uslugi/seo-optimizaciya-i-strategiya" };

function insertLink(body, phrase, linkId) {
  const idx = body.indexOf(phrase);
  if (idx === -1) throw new Error(`Anchor phrase not found: "${phrase}"`);
  if (body.indexOf(phrase, idx + 1) !== -1) throw new Error(`Anchor phrase not unique: "${phrase}"`);
  return body.slice(0, idx) + `[[${phrase}|${linkId}]]` + body.slice(idx + phrase.length);
}

function buildFullDoc({ parsed, id, lang, bannerAssetId, altText, seoLinks, anchors }) {
  let seoBody = parsed.seoText[lang].body;
  for (const [phrase, linkId] of anchors) seoBody = insertLink(seoBody, phrase, linkId);
  return {
    _id: id,
    _type: "singlepage",
    language: lang,
    pageType: "service",
    title: parsed.hero[lang].headline,
    slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: parsed.slug[lang] } },
    seo: { metaTitle: parsed.meta[lang].metaTitle, metaDescription: parsed.meta[lang].metaDescription },
    excerpt: parsed.hero[lang].excerpt,
    areaServed: ["Switzerland"],
    parentPage: SWITZERLAND[lang],
    previewImage: { _type: "image", asset: ref(bannerAssetId), alt: altText },
    allowIntroBlock: true,
    contentBlocks: [
      benefitsBlock(parsed.pain[lang].title, parsed.pain[lang].items),
      gridBlock(parsed.features[lang].title, parsed.features[lang].items),
      textContent(parsed.seoText[lang].title, seoBody, seoLinks),
      stepsBlock(parsed.steps[lang].title, parsed.steps[lang].items),
      faqBlock(parsed.faq[lang].title, parsed.faq[lang].items),
    ],
  };
}

async function main() {
  const draftsDir = path.resolve(__dirname, "../drafts");
  const auto = parseTaggedContent(path.join(draftsDir, "swiss-auto-export-tagged-content.md"));
  const consulting = parseTaggedContent(path.join(draftsDir, "swiss-consulting-export-tagged-content.md"));
  const premium = parseTaggedContent(path.join(draftsDir, "swiss-premium-goods-tagged-content.md"));

  const cachePath = path.resolve(__dirname, "../drafts/.batch4-banner-cache.json");
  let cache = {};
  try { cache = JSON.parse(fs.readFileSync(cachePath, "utf8")); } catch {}
  async function uploadCached(name, file) {
    if (cache[name]) return cache[name];
    const id = await uploadImage(file);
    cache[name] = id;
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 1));
    return id;
  }
  const autoBanner = await uploadCached("auto", "swiss-auto-export-banner.jpg");
  const consultingBanner = await uploadCached("consulting", "swiss-consulting-banner.jpg");
  const premiumBanner = await uploadCached("premium", "swiss-premium-goods-banner.jpg");
  console.log("Banners:", { autoBanner, consultingBanner, premiumBanner });

  const ALT = {
    auto: { en: "SEO for car dealers and exporters in Switzerland", ru: "Продвижение сайтов автобизнеса в Швейцарии" },
    consulting: { en: "SEO for consulting and professional firms in Switzerland", ru: "Продвижение сайтов консалтинга в Швейцарии" },
    premium: { en: "SEO for Swiss watchmakers, jewellers and premium makers", ru: "Продвижение сайтов часовых и ювелирных мастерских Швейцарии" },
  };

  const tx = client.transaction();

  for (const lang of ["en", "ru"]) {
    const doc = buildFullDoc({
      parsed: auto,
      id: lang === "en" ? "singlepage-swiss-auto" : "singlepage-swiss-auto.ru",
      lang, bannerAssetId: autoBanner, altText: ALT.auto[lang],
      seoLinks: { PARENT: SWITZERLAND_URL[lang], CASE: FELGILAB[lang], MWEB: MULTILINGUAL_WEB[lang], AISEARCH: AI_SEARCH_READY[lang] },
      anchors: lang === "en"
        ? [
            ["Switzerland is a small market surrounded by large ones", "PARENT"],
            ["mobile performance went from roughly 50 to 92", "CASE"],
            ["Multilingual structure that carries every language a car business needs", "MWEB"],
            ["matters more for AI assistants", "AISEARCH"],
          ]
        : [
            ["Швейцария — маленький рынок, окружённый крупными", "PARENT"],
            ["мобильный показатель производительности вырос примерно с 50 до 92", "CASE"],
            ["Мультиязычная структура, несущая все нужные автобизнесу языки", "MWEB"],
            ["ещё важнее для ИИ-ассистентов", "AISEARCH"],
          ],
    });
    tx.create(doc);
  }

  for (const lang of ["en", "ru"]) {
    const doc = buildFullDoc({
      parsed: consulting,
      id: lang === "en" ? "singlepage-swiss-consulting" : "singlepage-swiss-consulting.ru",
      lang, bannerAssetId: consultingBanner, altText: ALT.consulting[lang],
      seoLinks: { PARENT: SWITZERLAND_URL[lang], AISEARCH: AI_SEARCH_READY[lang], STRATEGY: SEO_STRATEGY[lang] },
      anchors: lang === "en"
        ? [
            ["Most search advice assumes traffic is the goal", "PARENT"],
            ["This is also what AI assistants can repeat", "AISEARCH"],
            ["Query research at the level this category actually searches", "STRATEGY"],
          ]
        : [
            ["Большинство советов по поиску предполагает, что цель", "PARENT"],
            ["Это же может повторить ИИ-ассистент", "AISEARCH"],
            ["Сбор запросов на том уровне, на котором эта категория действительно ищет", "STRATEGY"],
          ],
    });
    tx.create(doc);
  }

  for (const lang of ["en", "ru"]) {
    const doc = buildFullDoc({
      parsed: premium,
      id: lang === "en" ? "singlepage-swiss-premium" : "singlepage-swiss-premium.ru",
      lang, bannerAssetId: premiumBanner, altText: ALT.premium[lang],
      seoLinks: { PARENT: SWITZERLAND_URL[lang], AISEARCH: AI_SEARCH_READY[lang] },
      anchors: lang === "en"
        ? [
            ["The domestic market for a Swiss watchmaker, jeweller or premium workshop", "PARENT"],
            ["it's exactly the material an AI assistant will draw on when asked how to verify a piece", "AISEARCH"],
          ]
        : [
            ["Внутренний рынок для швейцарского часовщика, ювелира или премиальной мастерской", "PARENT"],
            ["именно на него будет опираться ИИ-ассистент, когда спросят, как проверить подлинность", "AISEARCH"],
          ],
    });
    tx.create(doc);
  }

  tx.create({
    _id: "singlepage-swiss-auto.i18n",
    _type: "translation.metadata",
    documentId: "singlepage-swiss-auto",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "singlepage-swiss-auto" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-swiss-auto.ru" } },
    ],
  });
  tx.create({
    _id: "singlepage-swiss-consulting.i18n",
    _type: "translation.metadata",
    documentId: "singlepage-swiss-consulting",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "singlepage-swiss-consulting" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-swiss-consulting.ru" } },
    ],
  });
  tx.create({
    _id: "singlepage-swiss-premium.i18n",
    _type: "translation.metadata",
    documentId: "singlepage-swiss-premium",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "singlepage-swiss-premium" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-swiss-premium.ru" } },
    ],
  });

  const result = await tx.commit();
  console.log("Committed:", JSON.stringify(result.results.map((r) => r.id), null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
