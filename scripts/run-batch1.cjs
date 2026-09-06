const path = require("path");
const { parseTaggedContent } = require("./parse-tagged-content.cjs");
const {
  client, ref, key, SERVICES_HUB,
  benefitsBlock, gridBlock, stepsBlock, faqBlock, textContent, uploadImage, linkifyBlock,
} = require("./create-batch1-warsaw.cjs");

// Real relative site paths (the "link" annotation's href is a plain URL
// string field, not a Sanity reference — confirmed from the geo-promo
// pages' actual markDefs). All targets confirmed top-level (no parentPage)
// or flat /portfolio, /blog — verified via direct query, not assumed.
const HEAD = {
  salon: { pl: "/pl/seo-salonu-kosmetycznego", ru: "/ru/seo-salona-krasoty" },
  auto: { pl: "/pl/seo-dla-warsztatu-samochodowego", ru: "/ru/seo-prodvizhenie-avtoservisa" },
  law: { pl: "/pl/seo-dla-kancelarii-prawnych", ru: "/ru/seo-dlya-yuridicheskogo-sayta" },
};
const WARSAW_DEV = { pl: "/pl/tworzenie-stron-internetowych-warszawa", ru: "/ru/razrabotka-saitov-varshava" };
const FELGILAB = { pl: "/pl/portfolio/przebudowa-strony-felgilab-wordpress", ru: "/ru/portfolio/pererabotka-saita-felgilab-wordpress" };
const ART_LEGAL_COST = { pl: "/pl/blog/ile-kosztuje-seo-dla-kancelarii-prawnej", ru: "/ru/blog/skolko-stoit-seo-yuristov" };
const ART_HIGH_VALUE = { pl: "/pl/blog/drodzy-klienci-nie-klikaja-w-reklamy", ru: "/ru/blog/dorogie-klienty-ne-klikayut-po-reklame" };

function insertLink(body, phrase, linkId, occurrence = 1) {
  const idx = body.indexOf(phrase);
  if (idx === -1) throw new Error(`Anchor phrase not found: "${phrase}"`);
  if (body.indexOf(phrase, idx + 1) !== -1) throw new Error(`Anchor phrase not unique: "${phrase}"`);
  return body.slice(0, idx) + `[[${phrase}|${linkId}]]` + body.slice(idx + phrase.length);
}

function buildFullDoc({ parsed, id, lang, pageType, areaServed, parentId, bannerAssetId, altText, seoLinks, anchors }) {
  let seoBody = parsed.seoText[lang].body;
  for (const [phrase, linkId] of anchors) {
    seoBody = insertLink(seoBody, phrase, linkId);
  }
  return {
    _id: id,
    _type: "singlepage",
    language: lang,
    pageType,
    title: parsed.hero[lang].headline,
    slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: parsed.slug[lang] } },
    seo: { metaTitle: parsed.meta[lang].metaTitle, metaDescription: parsed.meta[lang].metaDescription },
    excerpt: parsed.hero[lang].excerpt,
    areaServed,
    parentPage: ref(parentId),
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

  // ---- Parse all three ----
  const salon = parseTaggedContent(path.join(draftsDir, "warsaw-beauty-salon-seo-tagged-content.md"));
  const auto = parseTaggedContent(path.join(draftsDir, "warsaw-auto-service-seo-tagged-content.md"));
  const law = parseTaggedContent(path.join(draftsDir, "warsaw-law-firm-seo-tagged-content.md"));

  // ---- Upload banners (cached across retries so we don't re-upload) ----
  const fs = require("fs");
  const cachePath = path.resolve(__dirname, "../drafts/.batch1-banner-cache.json");
  let cache = {};
  try { cache = JSON.parse(fs.readFileSync(cachePath, "utf8")); } catch {}
  async function uploadCached(name, file) {
    if (cache[name]) return cache[name];
    const id = await uploadImage(file);
    cache[name] = id;
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 1));
    return id;
  }
  console.log("Uploading banners (cached)...");
  const salonBanner = await uploadCached("salon", "warsaw-beauty-salon-banner.jpg");
  const autoBanner = await uploadCached("auto", "warsaw-auto-service-banner.jpg");
  const lawBanner = await uploadCached("law", "warsaw-law-firm-banner.jpg");
  console.log("Banners:", { salonBanner, autoBanner, lawBanner });

  const ALT = {
    salon: { pl: "Pozycjonowanie strony salonu kosmetycznego w Warszawie", ru: "Продвижение сайта салона красоты в Варшаве" },
    auto: { pl: "Pozycjonowanie strony warsztatu samochodowego w Warszawie", ru: "Продвижение сайта автосервиса в Варшаве" },
    law: { pl: "Pozycjonowanie strony kancelarii prawnej w Warszawie", ru: "Продвижение сайта юридической компании в Варшаве" },
  };

  const tx = client.transaction();

  // ---- SALON ----
  for (const lang of ["pl", "ru"]) {
    const doc = buildFullDoc({
      parsed: salon,
      id: lang === "pl" ? "singlepage-seo-salon-warszawa.pl" : "singlepage-seo-salon-warszawa.ru",
      lang, pageType: "service", areaServed: ["Poland"],
      parentId: SERVICES_HUB[lang],
      bannerAssetId: salonBanner,
      altText: ALT.salon[lang],
      seoLinks: { HEAD: HEAD.salon[lang], GEO: WARSAW_DEV[lang] },
      anchors: lang === "pl"
        ? [["Salon kosmetyczny", "HEAD"], ["warszawskimi salonami", "GEO"]]
        : [["Салон красоты", "HEAD"], ["варшавскими салонами", "GEO"]],
    });
    tx.create(doc);
  }

  // ---- AUTO ----
  for (const lang of ["pl", "ru"]) {
    const doc = buildFullDoc({
      parsed: auto,
      id: lang === "pl" ? "singlepage-seo-warsztat-warszawa.pl" : "singlepage-seo-warsztat-warszawa.ru",
      lang, pageType: "service", areaServed: ["Poland"],
      parentId: SERVICES_HUB[lang],
      bannerAssetId: autoBanner,
      altText: ALT.auto[lang],
      seoLinks: { HEAD: HEAD.auto[lang], GEO: WARSAW_DEV[lang], CASE: FELGILAB[lang] },
      anchors: lang === "pl"
        ? [
            ["Klient warsztatu prawie nigdy nie wybiera na spokojnie", "HEAD"],
            ["warszawskiego warsztatu", "GEO"],
            ["wynik wydajności mobilnej wzrósł z około 50 do 92", "CASE"],
          ]
        : [
            ["Клиент автосервиса почти никогда не выбирает спокойно", "HEAD"],
            ["варшавской автомастерской", "GEO"],
            ["мобильный показатель производительности вырос примерно с 50 до 92", "CASE"],
          ],
    });
    tx.create(doc);
  }

  // ---- LAW ----
  for (const lang of ["pl", "ru"]) {
    const doc = buildFullDoc({
      parsed: law,
      id: lang === "pl" ? "singlepage-seo-kancelaria-warszawa.pl" : "singlepage-seo-kancelaria-warszawa.ru",
      lang, pageType: "service", areaServed: ["Poland"],
      parentId: SERVICES_HUB[lang],
      bannerAssetId: lawBanner,
      altText: ALT.law[lang],
      seoLinks: {
        HEAD: HEAD.law[lang],
        GEO: WARSAW_DEV[lang],
        HVC: ART_HIGH_VALUE[lang],
      },
      anchors: lang === "pl"
        ? [
            ["adwokata do sprawy sądowej", "HEAD"],
            ["W Warszawie część klientów szuka prawnika w innym języku", "GEO"],
            ["Klient wpisuje to nazwisko w wyszukiwarkę, zanim zadzwoni", "HVC"],
          ]
        : [
            ["адвокат для судебного дела", "HEAD"],
            ["В Варшаве часть клиентов ищет юриста на другом языке", "GEO"],
            ["Клиент вводит эту фамилию в поиск, прежде чем позвонить", "HVC"],
          ],
    });
    // Cost-guide article link lives in the FAQ's first answer (price),
    // not in the SEO_TEXT body — linkify it there instead.
    const faqBlockObj = doc.contentBlocks.find((b) => b._type === "faqBlock");
    const costPhrase = lang === "pl" ? "Audyt od 1000 zł" : "Аудит — от 250 €";
    faqBlockObj.faq.items[0].answer = linkifyBlock(faqBlockObj.faq.items[0].answer, costPhrase, ART_LEGAL_COST[lang]);
    tx.create(doc);
  }

  // ---- translation.metadata docs ----
  tx.create({
    _id: "singlepage-seo-salon-warszawa.i18n",
    _type: "translation.metadata",
    documentId: "singlepage-seo-salon-warszawa",
    translations: [
      { _key: "pl", value: { _type: "reference", _ref: "singlepage-seo-salon-warszawa.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-seo-salon-warszawa.ru" } },
    ],
  });
  tx.create({
    _id: "singlepage-seo-warsztat-warszawa.i18n",
    _type: "translation.metadata",
    documentId: "singlepage-seo-warsztat-warszawa",
    translations: [
      { _key: "pl", value: { _type: "reference", _ref: "singlepage-seo-warsztat-warszawa.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-seo-warsztat-warszawa.ru" } },
    ],
  });
  tx.create({
    _id: "singlepage-seo-kancelaria-warszawa.i18n",
    _type: "translation.metadata",
    documentId: "singlepage-seo-kancelaria-warszawa",
    translations: [
      { _key: "pl", value: { _type: "reference", _ref: "singlepage-seo-kancelaria-warszawa.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-seo-kancelaria-warszawa.ru" } },
    ],
  });

  const result = await tx.commit();
  console.log("Committed:", JSON.stringify(result.results.map((r) => r.id), null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
