const path = require("path");
const fs = require("fs");
const { parseTaggedContent } = require("./parse-tagged-content.cjs");
const {
  client, ref, key, SERVICES_HUB,
  benefitsBlock, gridBlock, stepsBlock, faqBlock, textContent, uploadImage, linkifyBlock,
} = require("./create-batch1-warsaw.cjs");

const WARSAW_DEV = { pl: "/pl/tworzenie-stron-internetowych-warszawa", ru: "/ru/razrabotka-saitov-varshava" };
const DENTAL_DEV = { pl: "/pl/strona-dla-gabinetu-stomatologicznego", ru: "/ru/sait-dlya-stomatologicheskoy-kliniki" };
const CONSTRUCTION_COST = { pl: "/pl/blog/ile-kosztuje-strona-dla-firmy-budowlanej", ru: "/ru/blog/skolko-stoit-sait-dlya-stroitelnoy-kompanii" };

function insertLink(body, phrase, linkId) {
  const idx = body.indexOf(phrase);
  if (idx === -1) throw new Error(`Anchor phrase not found: "${phrase}"`);
  if (body.indexOf(phrase, idx + 1) !== -1) throw new Error(`Anchor phrase not unique: "${phrase}"`);
  return body.slice(0, idx) + `[[${phrase}|${linkId}]]` + body.slice(idx + phrase.length);
}

function buildFullDoc({ parsed, id, lang, areaServed, bannerAssetId, altText, seoLinks, anchors }) {
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
    parentPage: ref(SERVICES_HUB[lang]),
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
  const dental = parseTaggedContent(path.join(draftsDir, "warsaw-dental-seo-tagged-content.md"));
  const construction = parseTaggedContent(path.join(draftsDir, "warsaw-construction-seo-tagged-content.md"));

  const cachePath = path.resolve(__dirname, "../drafts/.batch2-banner-cache.json");
  let cache = {};
  try { cache = JSON.parse(fs.readFileSync(cachePath, "utf8")); } catch {}
  async function uploadCached(name, file) {
    if (cache[name]) return cache[name];
    const id = await uploadImage(file);
    cache[name] = id;
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 1));
    return id;
  }
  const dentalBanner = await uploadCached("dental", "warsaw-dental-banner.jpg");
  const constructionBanner = await uploadCached("construction", "warsaw-construction-banner.jpg");
  console.log("Banners:", { dentalBanner, constructionBanner });

  const ALT = {
    dental: { pl: "Pozycjonowanie strony gabinetu stomatologicznego w Warszawie", ru: "Продвижение сайта стоматологии в Варшаве" },
    construction: { pl: "Pozycjonowanie strony firmy budowlanej w Warszawie", ru: "Продвижение сайта строительной компании в Варшаве" },
  };

  const tx = client.transaction();

  for (const lang of ["pl", "ru"]) {
    const doc = buildFullDoc({
      parsed: dental,
      id: `singlepage-seo-stomatologia-warszawa.${lang}`,
      lang, areaServed: ["Poland"],
      bannerAssetId: dentalBanner,
      altText: ALT.dental[lang],
      seoLinks: { DEV: DENTAL_DEV[lang], GEO: WARSAW_DEV[lang] },
      anchors: lang === "pl"
        ? [
            ["Większość gabinetów ma jedną stronę i jeden sposób mówienia", "DEV"],
            ["W Warszawie znaczna część pacjentów szuka w innym języku", "GEO"],
          ]
        : [
            ["У большинства клиник один сайт и одна манера говорить", "DEV"],
            ["В Варшаве заметная часть пациентов ищет на другом языке", "GEO"],
          ],
    });
    tx.create(doc);
  }

  for (const lang of ["pl", "ru"]) {
    const doc = buildFullDoc({
      parsed: construction,
      id: `singlepage-seo-budowlana-warszawa.${lang}`,
      lang, areaServed: ["Poland"],
      bannerAssetId: constructionBanner,
      altText: ALT.construction[lang],
      seoLinks: { GEO: WARSAW_DEV[lang], COST: CONSTRUCTION_COST[lang] },
      anchors: lang === "pl"
        ? [["Przebudowa strony w tej branży bywa kosztowna", "GEO"]]
        : [["Пересборка сайта в этой отрасли обходится дорого", "GEO"]],
    });
    // Construction cost article: no clean natural body host distinct from the
    // GEO anchor's paragraph — linkify the FAQ price answer instead (item 0).
    const faqObj = doc.contentBlocks.find((b) => b._type === "faqBlock");
    const costPhrase = lang === "pl" ? "Audyt od 1000 zł" : "Аудит — от 250 €";
    faqObj.faq.items[0].answer = linkifyBlock(faqObj.faq.items[0].answer, costPhrase, CONSTRUCTION_COST[lang]);
    tx.create(doc);
  }

  tx.create({
    _id: "singlepage-seo-stomatologia-warszawa.i18n",
    _type: "translation.metadata",
    documentId: "singlepage-seo-stomatologia-warszawa",
    translations: [
      { _key: "pl", value: { _type: "reference", _ref: "singlepage-seo-stomatologia-warszawa.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-seo-stomatologia-warszawa.ru" } },
    ],
  });
  tx.create({
    _id: "singlepage-seo-budowlana-warszawa.i18n",
    _type: "translation.metadata",
    documentId: "singlepage-seo-budowlana-warszawa",
    translations: [
      { _key: "pl", value: { _type: "reference", _ref: "singlepage-seo-budowlana-warszawa.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-seo-budowlana-warszawa.ru" } },
    ],
  });

  const result = await tx.commit();
  console.log("Committed:", JSON.stringify(result.results.map((r) => r.id), null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
