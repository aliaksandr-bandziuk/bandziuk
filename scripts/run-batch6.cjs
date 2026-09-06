const path = require("path");
const fs = require("fs");
const { parseTaggedContent } = require("./parse-tagged-content.cjs");
const {
  client, ref, key, SERVICES_HUB,
  benefitsBlock, gridBlock, stepsBlock, faqBlock, textContent, uploadImage,
} = require("./create-batch1-warsaw.cjs");

const MULTILINGUAL_WEB = { en: "/multilingual-website-development", pl: "/pl/tworzenie-stron-wielojezycznych", ru: "/ru/razrabotka-multiyazychnogo-saita" };
const MANUFACTURING = { en: "/manufacturing-company-website", pl: "/pl/strona-dla-firmy-produkcyjnej", ru: "/ru/sait-dlya-proizvodstvennoy-kompanii" };
const AI_SEARCH_READY = { en: "/services/ai-search-readiness", pl: "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai", ru: "/ru/uslugi/podgotovka-saita-k-ii-poisku" };
const GERMANY_GEO = { en: "/services/locations/seo-for-german-market", pl: "/pl/oferty/pozycjonowanie-na-rynek-niemiecki", ru: "/ru/uslugi/lokacii/prodvizhenie-na-nemetskiy-rynok" };
const DENTAL_WARSAW = { pl: "/pl/oferty/pozycjonowanie-strony-gabinetu-stomatologicznego-warszawa", ru: "/ru/uslugi/prodvizhenie-saita-stomatologii-varshava" };

// Lingerie pair URLs (self-reference between the two pages in this batch)
const LINGERIE_WEBSITE_URL = { en: "/services/website-development-for-lingerie-manufacturers", pl: "/pl/oferty/strona-internetowa-dla-producenta-bielizny", ru: "/ru/uslugi/sozdanie-saita-dlya-proizvoditelya-nizhnego-belya" };
const LINGERIE_SEO_URL = { en: "/services/seo-for-lingerie-manufacturers", pl: "/pl/oferty/pozycjonowanie-strony-producenta-bielizny", ru: "/ru/uslugi/prodvizhenie-saita-proizvoditelya-nizhnego-belya" };

function insertLink(body, phrase, linkId) {
  const idx = body.indexOf(phrase);
  if (idx === -1) throw new Error(`Anchor phrase not found: "${phrase}"`);
  if (body.indexOf(phrase, idx + 1) !== -1) throw new Error(`Anchor phrase not unique: "${phrase}"`);
  return body.slice(0, idx) + `[[${phrase}|${linkId}]]` + body.slice(idx + phrase.length);
}

function buildFullDoc({ parsed, id, lang, areaServed, bannerAssetId, altText, seoLinks, anchors }) {
  let seoBody = parsed.seoText[lang].body;
  for (const [phrase, linkId] of anchors) seoBody = insertLink(seoBody, phrase, linkId);
  const doc = {
    _id: id,
    _type: "singlepage",
    language: lang,
    pageType: "service",
    title: parsed.hero[lang].headline,
    slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: parsed.slug[lang] } },
    seo: { metaTitle: parsed.meta[lang].metaTitle, metaDescription: parsed.meta[lang].metaDescription },
    excerpt: parsed.hero[lang].excerpt,
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
  if (areaServed) doc.areaServed = areaServed;
  return doc;
}

async function main() {
  const draftsDir = path.resolve(__dirname, "../drafts");
  const lingWeb = parseTaggedContent(path.join(draftsDir, "lingerie-manufacturer-website-tagged-content.md"));
  const lingSeo = parseTaggedContent(path.join(draftsDir, "lingerie-manufacturer-seo-tagged-content.md"));
  const medTour = parseTaggedContent(path.join(draftsDir, "medical-tourism-germany-poland-tagged-content.md"));

  const cachePath = path.resolve(__dirname, "../drafts/.batch6-banner-cache.json");
  let cache = {};
  try { cache = JSON.parse(fs.readFileSync(cachePath, "utf8")); } catch {}
  async function uploadCached(name, file) {
    if (cache[name]) return cache[name];
    const id = await uploadImage(file);
    cache[name] = id;
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 1));
    return id;
  }
  const lingWebBanner = await uploadCached("lingWeb", "lingerie-manufacturer-website-banner.jpg");
  const lingSeoBanner = await uploadCached("lingSeo", "lingerie-manufacturer-seo-banner.jpg");
  const medTourBanner = await uploadCached("medTour", "medical-tourism-germany-poland-banner.jpg");
  console.log("Banners:", { lingWebBanner, lingSeoBanner, medTourBanner });

  const ALT = {
    lingWeb: {
      en: "Website development for lingerie manufacturers",
      pl: "Strona internetowa dla producenta bielizny",
      ru: "Создание сайта для производителя нижнего белья",
    },
    lingSeo: {
      en: "SEO for lingerie manufacturers",
      pl: "Pozycjonowanie strony producenta bielizny",
      ru: "Продвижение сайта производителя нижнего белья",
    },
    medTour: {
      en: "SEO for Polish clinics targeting German patients",
      pl: "Pozycjonowanie kliniki na pacjentów z Niemiec",
      ru: "Продвижение клиники в Польше на немецких пациентов",
    },
  };

  const tx = client.transaction();

  // ---- LINGERIE WEBSITE (EN+PL+RU) ----
  for (const lang of ["en", "pl", "ru"]) {
    const doc = buildFullDoc({
      parsed: lingWeb,
      id: lang === "en" ? "singlepage-lingerie-website" : `singlepage-lingerie-website.${lang}`,
      lang, areaServed: null,
      bannerAssetId: lingWebBanner, altText: ALT.lingWeb[lang],
      seoLinks: { PAIR: LINGERIE_SEO_URL[lang], MWEB: MULTILINGUAL_WEB[lang], MFG: MANUFACTURING[lang] },
      anchors: lang === "en"
        ? [
            ["The two get confused constantly, and the cost of confusing them is a site that serves neither.", "PAIR"],
            ["A structure designed for it treats adding a market as a content task.", "MWEB"],
            ["A manufacturer's site is built around evaluation", "MFG"],
          ]
        : lang === "pl"
        ? [
            ["Te dwie rzeczy są nieustannie mylone, a kosztem pomylenia jest strona nieobsługująca żadnej z nich.", "PAIR"],
            ["Struktura zaprojektowana pod to traktuje dodanie rynku jako pracę z treścią.", "MWEB"],
            ["Strona producenta buduje się wokół oceny", "MFG"],
          ]
        : [
            ["Эти две вещи постоянно путают, и цена путаницы — сайт, не обслуживающий ни одну из них.", "PAIR"],
            ["Структура, спроектированная под это, считает добавление рынка работой с контентом.", "MWEB"],
            ["Сайт производителя строится вокруг оценки", "MFG"],
          ],
    });
    tx.create(doc);
  }

  // ---- LINGERIE SEO (EN+PL+RU) ----
  for (const lang of ["en", "pl", "ru"]) {
    const doc = buildFullDoc({
      parsed: lingSeo,
      id: lang === "en" ? "singlepage-lingerie-seo" : `singlepage-lingerie-seo.${lang}`,
      lang, areaServed: null,
      bannerAssetId: lingSeoBanner, altText: ALT.lingSeo[lang],
      seoLinks: { PAIR: LINGERIE_WEBSITE_URL[lang], AISEARCH: AI_SEARCH_READY[lang], MFG: MANUFACTURING[lang] },
      anchors: lang === "en"
        ? [
            ["Advertising for intimate apparel runs into platform restrictions.", "PAIR"],
            ["but being described unambiguously and corroborated by sources outside its own site", "AISEARCH"],
            ["A manufacturer whose site is written in consumer language", "MFG"],
          ]
        : lang === "pl"
        ? [
            ["Reklama bielizny intymnej napotyka ograniczenia platform.", "PAIR"],
            ["tylko jednoznaczny opis i potwierdzenie przez źródła spoza własnej strony", "AISEARCH"],
            ["Producent, którego strona napisana jest językiem konsumenckim", "MFG"],
          ]
        : [
            ["Реклама интимного белья упирается в ограничения площадок.", "PAIR"],
            ["а однозначное описание и подтверждения источниками вне собственного сайта", "AISEARCH"],
            ["Производитель, чей сайт написан потребительским языком", "MFG"],
          ],
    });
    tx.create(doc);
  }

  // ---- MEDICAL TOURISM (PL+RU+EN) ----
  for (const lang of ["pl", "ru", "en"]) {
    const links = { GERMANY: GERMANY_GEO[lang], AISEARCH: AI_SEARCH_READY[lang] };
    const anchorsBase = lang === "pl"
      ? [
          ["Skutek błędu jest cichy: strona rankuje na sformułowania opisowe, których nikt nie wpisuje", "GERMANY"],
          ["Powtarzane są fakty sprawdzalne: gdzie klinika się znajduje, jakimi zabiegami się zajmuje", "AISEARCH"],
        ]
      : lang === "ru"
      ? [
          ["Последствие ошибки тихое: сайт ранжируется по описательным формулировкам, которых никто не набирает", "GERMANY"],
          ["Повторяются проверяемые факты: где клиника находится, какими вмешательствами занимается", "AISEARCH"],
        ]
      : [
          ["The failure is silent: the site ranks for descriptive phrasings nobody types", "GERMANY"],
          ["What gets repeated is checkable fact: where the clinic is, which procedures it handles", "AISEARCH"],
        ];

    // Dental Warsaw only exists in PL/RU — never invent an EN target.
    if (lang === "pl" || lang === "ru") {
      links.DENTAL = DENTAL_WARSAW[lang];
      anchorsBase.push(
        lang === "pl"
          ? ["Reklama usług medycznych podlega ograniczeniom w Polsce", "DENTAL"]
          : ["Реклама медицинских услуг ограничена в Польше", "DENTAL"]
      );
    }

    const doc = buildFullDoc({
      parsed: medTour,
      id: lang === "pl" ? "singlepage-medtourism-de-pl" : `singlepage-medtourism-de-pl.${lang}`,
      lang, areaServed: ["Poland"],
      bannerAssetId: medTourBanner, altText: ALT.medTour[lang],
      seoLinks: links,
      anchors: anchorsBase,
    });
    tx.create(doc);
  }

  tx.create({
    _id: "singlepage-lingerie-website.i18n", _type: "translation.metadata", documentId: "singlepage-lingerie-website",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "singlepage-lingerie-website" } },
      { _key: "pl", value: { _type: "reference", _ref: "singlepage-lingerie-website.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-lingerie-website.ru" } },
    ],
  });
  tx.create({
    _id: "singlepage-lingerie-seo.i18n", _type: "translation.metadata", documentId: "singlepage-lingerie-seo",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "singlepage-lingerie-seo" } },
      { _key: "pl", value: { _type: "reference", _ref: "singlepage-lingerie-seo.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-lingerie-seo.ru" } },
    ],
  });
  tx.create({
    _id: "singlepage-medtourism-de-pl.i18n", _type: "translation.metadata", documentId: "singlepage-medtourism-de-pl",
    translations: [
      { _key: "pl", value: { _type: "reference", _ref: "singlepage-medtourism-de-pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-medtourism-de-pl.ru" } },
      { _key: "en", value: { _type: "reference", _ref: "singlepage-medtourism-de-pl.en" } },
    ],
  });

  const result = await tx.commit();
  console.log("Committed:", JSON.stringify(result.results.map((r) => r.id), null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
