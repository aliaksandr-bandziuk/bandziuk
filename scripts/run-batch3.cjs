const path = require("path");
const fs = require("fs");
const { parseTaggedContent } = require("./parse-tagged-content.cjs");
const {
  client, ref, key, SERVICES_HUB,
  benefitsBlock, gridBlock, stepsBlock, faqBlock, textContent, uploadImage,
} = require("./create-batch1-warsaw.cjs");

const WARSAW_DEV = { pl: "/pl/tworzenie-stron-internetowych-warszawa", ru: "/ru/razrabotka-saitov-varshava" };
const CLEANING_DEV = { pl: "/pl/strona-dla-firmy-sprzatajacej", ru: "/ru/sait-dlya-kliningovoy-kompanii" };
const CONSTRUCTION = { pl: "/pl/oferty/pozycjonowanie-strony-firmy-budowlanej-warszawa", ru: "/ru/uslugi/prodvizhenie-saita-stroitelnoy-kompanii-varshava" };

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
  const cleaning = parseTaggedContent(path.join(draftsDir, "warsaw-cleaning-seo-tagged-content.md"));

  const cachePath = path.resolve(__dirname, "../drafts/.batch3-banner-cache.json");
  let cache = {};
  try { cache = JSON.parse(fs.readFileSync(cachePath, "utf8")); } catch {}
  async function uploadCached(name, file) {
    if (cache[name]) return cache[name];
    const id = await uploadImage(file);
    cache[name] = id;
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 1));
    return id;
  }
  const cleaningBanner = await uploadCached("cleaning", "warsaw-cleaning-banner.jpg");
  console.log("Banner:", cleaningBanner);

  const ALT = { pl: "Pozycjonowanie strony firmy sprzątającej w Warszawie", ru: "Продвижение сайта клининговой компании в Варшаве" };

  const tx = client.transaction();

  for (const lang of ["pl", "ru"]) {
    const doc = buildFullDoc({
      parsed: cleaning,
      id: `singlepage-seo-sprzatanie-warszawa.${lang}`,
      lang, areaServed: ["Poland"],
      bannerAssetId: cleaningBanner,
      altText: ALT[lang],
      seoLinks: { DEV: CLEANING_DEV[lang], GEO: WARSAW_DEV[lang], CONSTR: CONSTRUCTION[lang] },
      anchors: lang === "pl"
        ? [
            ["W większości usług lokalnych klient ocenia rezultat", "DEV"],
            ["W Warszawie część zapytań przychodzi w innym języku", "GEO"],
            ["klientami po remoncie, którzy szukają wykonawcy zaraz po zakończeniu prac budowlanych", "CONSTR"],
          ]
        : [
            ["В большинстве местных услуг клиент оценивает результат", "DEV"],
            ["В Варшаве часть запросов приходит на другом языке", "GEO"],
            ["клиентами после ремонта, которые ищут исполнителя сразу по окончании строительных работ", "CONSTR"],
          ],
    });
    tx.create(doc);
  }

  tx.create({
    _id: "singlepage-seo-sprzatanie-warszawa.i18n",
    _type: "translation.metadata",
    documentId: "singlepage-seo-sprzatanie-warszawa",
    translations: [
      { _key: "pl", value: { _type: "reference", _ref: "singlepage-seo-sprzatanie-warszawa.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-seo-sprzatanie-warszawa.ru" } },
    ],
  });

  const result = await tx.commit();
  console.log("Committed:", JSON.stringify(result.results.map((r) => r.id), null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
