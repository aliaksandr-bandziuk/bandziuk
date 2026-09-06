const path = require("path");
const fs = require("fs");
const { parseTaggedContent } = require("./parse-tagged-content.cjs");
const {
  client, ref, key,
  benefitsBlock, gridBlock, stepsBlock, faqBlock, textContent, uploadImage,
} = require("./create-batch1-warsaw.cjs");

const GEO_HUB = { en: ref("singlepage-locations"), ru: ref("singlepage-locations.ru") };
const GERMANY_GEO = { en: ref("singlepage-seo-germany"), ru: ref("singlepage-seo-germany.ru") };

const GERMANY_GEO_URL = { en: "/services/locations/seo-for-german-market", ru: "/ru/uslugi/lokacii/prodvizhenie-na-nemetskiy-rynok" };
const UAE_DEV = { en: "/services/locations/website-development-uae", ru: "/ru/uslugi/lokacii/razrabotka-saitov-oae" };
const SPAIN_DEV = { en: "/services/locations/website-development-spain", ru: "/ru/uslugi/lokacii/razrabotka-saitov-ispaniya" };
const SWISS_AUTO = { en: "/services/locations/seo-for-swiss-market/seo-for-car-business-switzerland", ru: "/ru/uslugi/lokacii/prodvizhenie-na-shveytsarskiy-rynok/prodvizhenie-saitov-avtobiznesa-shveytsariya" };
const GERMANY_AUTO_URL = { en: "/services/locations/seo-for-german-market/seo-for-car-exporters-germany", ru: "/ru/uslugi/lokacii/prodvizhenie-na-nemetskiy-rynok/prodvizhenie-saitov-avtoeksporta-germaniya" };
const AI_SEARCH_READY = { en: "/services/ai-search-readiness", ru: "/ru/uslugi/podgotovka-saita-k-ii-poisku" };
const CYPRUS_CASE = { en: "/portfolio/build-and-optimize-a-multilingual-real-estate-platform", ru: "/ru/portfolio/razrabotka-saita-dlya-agentstva-elitnoi-nedvizhimosti-na-kipre" };

function insertLink(body, phrase, linkId) {
  const idx = body.indexOf(phrase);
  if (idx === -1) throw new Error(`Anchor phrase not found: "${phrase}"`);
  if (body.indexOf(phrase, idx + 1) !== -1) throw new Error(`Anchor phrase not unique: "${phrase}"`);
  return body.slice(0, idx) + `[[${phrase}|${linkId}]]` + body.slice(idx + phrase.length);
}

function buildFullDoc({ parsed, id, lang, areaServed, parentRef, bannerAssetId, altText, seoLinks, anchors }) {
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
    areaServed,
    parentPage: parentRef,
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
  const deAuto = parseTaggedContent(path.join(draftsDir, "germany-auto-export-tagged-content.md"));
  const uaeAuto = parseTaggedContent(path.join(draftsDir, "uae-auto-export-tagged-content.md"));
  const uaeRE = parseTaggedContent(path.join(draftsDir, "uae-real-estate-seo-tagged-content.md"));
  const esRE = parseTaggedContent(path.join(draftsDir, "spain-real-estate-seo-tagged-content.md"));

  const cachePath = path.resolve(__dirname, "../drafts/.batch5-banner-cache.json");
  let cache = {};
  try { cache = JSON.parse(fs.readFileSync(cachePath, "utf8")); } catch {}
  async function uploadCached(name, file) {
    if (cache[name]) return cache[name];
    const id = await uploadImage(file);
    cache[name] = id;
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 1));
    return id;
  }
  const deAutoBanner = await uploadCached("deAuto", "auto-export-germany-banner.jpg");
  const uaeAutoBanner = await uploadCached("uaeAuto", "auto-export-uae-banner.jpg");
  const uaeREBanner = await uploadCached("uaeRE", "real-estate-uae-banner.jpg");
  const esREBanner = await uploadCached("esRE", "real-estate-spain-banner.jpg");
  console.log("Banners:", { deAutoBanner, uaeAutoBanner, uaeREBanner, esREBanner });

  const ALT = {
    deAuto: { en: "SEO for car exporters and dealers in Germany", ru: "Продвижение сайтов автоэкспорта в Германии" },
    uaeAuto: { en: "SEO for car exporters in the UAE", ru: "Продвижение сайтов автоэкспорта в ОАЭ" },
    uaeRE: { en: "SEO for real estate agencies in the UAE", ru: "Продвижение сайтов недвижимости в ОАЭ" },
    esRE: { en: "SEO for real estate agencies in Spain", ru: "Продвижение сайтов недвижимости в Испании" },
  };

  const tx = client.transaction();

  // ---- GERMANY AUTO ----
  for (const lang of ["en", "ru"]) {
    const doc = buildFullDoc({
      parsed: deAuto,
      id: lang === "en" ? "singlepage-germany-auto" : "singlepage-germany-auto.ru",
      lang, areaServed: ["Germany"], parentRef: GERMANY_GEO[lang],
      bannerAssetId: deAutoBanner, altText: ALT.deAuto[lang],
      seoLinks: { PARENT: GERMANY_GEO_URL[lang], SWISS: SWISS_AUTO[lang], AISEARCH: AI_SEARCH_READY[lang] },
      anchors: lang === "en"
        ? [
            ["Germany has the strongest used-vehicle marketplaces in Europe", "PARENT"],
            ["every vehicle page multiplies across language versions", "SWISS"],
            ["it's exactly the material an AI assistant will draw on when a buyer describes their situation", "AISEARCH"],
          ]
        : [
            ["В Германии сильнейшие в Европе площадки подержанных автомобилей", "PARENT"],
            ["каждая страница автомобиля умножается на языковые версии", "SWISS"],
            ["служит ровно тем материалом, к которому обратится ИИ-ассистент", "AISEARCH"],
          ],
    });
    tx.create(doc);
  }

  // ---- UAE AUTO ----
  for (const lang of ["en", "ru"]) {
    const doc = buildFullDoc({
      parsed: uaeAuto,
      id: lang === "en" ? "singlepage-uae-auto" : "singlepage-uae-auto.ru",
      lang, areaServed: ["United Arab Emirates"], parentRef: GEO_HUB[lang],
      bannerAssetId: uaeAutoBanner, altText: ALT.uaeAuto[lang],
      seoLinks: { DEV: UAE_DEV[lang], SWISS: SWISS_AUTO[lang], GERMANY: GERMANY_AUTO_URL[lang], AISEARCH: AI_SEARCH_READY[lang] },
      anchors: lang === "en"
        ? [
            ["Most vehicle markets sell to the person who will drive the car", "DEV"],
            ["Selling to a dealer is not selling to a driver", "SWISS"],
            ["Search reaches past them", "GERMANY"],
            ["in terms a buyer can check against their own requirements", "AISEARCH"],
          ]
        : [
            ["Большинство автомобильных рынков продаёт тому, кто будет ездить", "DEV"],
            ["Продажа дилеру — не продажа водителю", "SWISS"],
            ["Поиск достаёт дальше", "GERMANY"],
            ["в терминах, которые покупатель может сверить со своими требованиями", "AISEARCH"],
          ],
    });
    tx.create(doc);
  }

  // ---- UAE REAL ESTATE ----
  for (const lang of ["en", "ru"]) {
    const doc = buildFullDoc({
      parsed: uaeRE,
      id: lang === "en" ? "singlepage-uae-realestate" : "singlepage-uae-realestate.ru",
      lang, areaServed: ["United Arab Emirates"], parentRef: GEO_HUB[lang],
      bannerAssetId: uaeREBanner, altText: ALT.uaeRE[lang],
      seoLinks: { DEV: UAE_DEV[lang], AISEARCH: AI_SEARCH_READY[lang] },
      anchors: lang === "en"
        ? [
            ["In most property markets the buyer looks at something that exists", "DEV"],
            ["What gets repeated in those answers is anything stated as a checkable fact", "AISEARCH"],
          ]
        : [
            ["На большинстве рынков недвижимости покупатель смотрит на то, что существует", "DEV"],
            ["В таких ответах повторяется всё, сформулированное проверяемым фактом", "AISEARCH"],
          ],
    });
    tx.create(doc);
  }

  // ---- SPAIN REAL ESTATE ----
  for (const lang of ["en", "ru"]) {
    const doc = buildFullDoc({
      parsed: esRE,
      id: lang === "en" ? "singlepage-spain-realestate" : "singlepage-spain-realestate.ru",
      lang, areaServed: ["Spain"], parentRef: GEO_HUB[lang],
      bannerAssetId: esREBanner, altText: ALT.esRE[lang],
      seoLinks: { DEV: SPAIN_DEV[lang], AISEARCH: AI_SEARCH_READY[lang], CASE: CYPRUS_CASE[lang] },
      anchors: lang === "en"
        ? [
            ["An agency selling to foreign buyers usually builds its site as a catalogue", "DEV"],
            ["What gets repeated in those answers is anything stated as a checkable fact", "AISEARCH"],
            ["a four-language property catalogue drawing buyers from more than twenty countries", "CASE"],
          ]
        : [
            ["Агентство, продающее иностранным покупателям, обычно строит сайт как каталог", "DEV"],
            ["В таких ответах повторяется всё, сформулированное проверяемым фактом", "AISEARCH"],
            ["каталог недвижимости на четырёх языках, собирающий покупателей более чем из двадцати стран", "CASE"],
          ],
    });
    tx.create(doc);
  }

  tx.create({
    _id: "singlepage-germany-auto.i18n", _type: "translation.metadata", documentId: "singlepage-germany-auto",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "singlepage-germany-auto" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-germany-auto.ru" } },
    ],
  });
  tx.create({
    _id: "singlepage-uae-auto.i18n", _type: "translation.metadata", documentId: "singlepage-uae-auto",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "singlepage-uae-auto" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-uae-auto.ru" } },
    ],
  });
  tx.create({
    _id: "singlepage-uae-realestate.i18n", _type: "translation.metadata", documentId: "singlepage-uae-realestate",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "singlepage-uae-realestate" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-uae-realestate.ru" } },
    ],
  });
  tx.create({
    _id: "singlepage-spain-realestate.i18n", _type: "translation.metadata", documentId: "singlepage-spain-realestate",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "singlepage-spain-realestate" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-spain-realestate.ru" } },
    ],
  });

  const result = await tx.commit();
  console.log("Committed:", JSON.stringify(result.results.map((r) => r.id), null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
