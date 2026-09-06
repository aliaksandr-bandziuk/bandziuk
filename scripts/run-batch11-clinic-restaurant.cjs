const path = require("path");
const fs = require("fs");
const { parseTaggedContent } = require("./parse-tagged-content.cjs");
const {
  client, ref, key,
  benefitsBlock, gridBlock, stepsBlock, faqBlock, textContent,
} = require("./create-batch1-warsaw.cjs");

const SERVICES_HUB = { pl: "631d883e-6f87-4346-9c6d-48b596c2daa7", ru: "3774c0a1-8857-4149-be24-9a357af4be00" };

const LOCAL_SEO = { pl: "/pl/oferty/pozycjonowanie-lokalne", ru: "/ru/uslugi/lokalnoe-seo-prodvizhenie" };
const AI_SEARCH = { pl: "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai", ru: "/ru/uslugi/podgotovka-saita-k-ii-poisku" };
const ONLINE_BOOKING = { pl: "/pl/strona-z-rezerwacja-online", ru: "/ru/sait-s-onlain-zapisyu" };

function insertLink(body, phrase, linkId) {
  const idx = body.indexOf(phrase);
  if (idx === -1) throw new Error(`Anchor phrase not found: "${phrase}"`);
  if (body.indexOf(phrase, idx + 1) !== -1) throw new Error(`Anchor phrase not unique: "${phrase}"`);
  return body.slice(0, idx) + `[[${phrase}|${linkId}]]` + body.slice(idx + phrase.length);
}

function trailerBlock(sentences) {
  // sentences: array of { text, href } OR { text } (no link) segments forming one paragraph
  const markDefs = [];
  const children = [];
  for (const seg of sentences) {
    if (seg.href) {
      const defKey = key();
      markDefs.push({ _key: defKey, _type: "link", href: seg.href });
      children.push({ _key: key(), _type: "span", marks: [defKey], text: seg.text });
    } else {
      children.push({ _key: key(), _type: "span", marks: [], text: seg.text });
    }
  }
  return { _key: key(), _type: "block", style: "normal", markDefs, children };
}

async function main() {
  const draftsDir = path.resolve(__dirname, "../drafts");
  const clinic = parseTaggedContent(path.join(draftsDir, "warsaw-medical-clinic-seo-tagged-content.md"));
  const restaurant = parseTaggedContent(path.join(draftsDir, "warsaw-restaurant-seo-tagged-content.md"));

  const clinicBanner = await client.assets
    .upload("image", fs.createReadStream(path.join(draftsDir, "warsaw-medical-clinic-banner.jpg")), { filename: "warsaw-medical-clinic-banner.jpg" })
    .then((a) => a._id);
  const restaurantBanner = await client.assets
    .upload("image", fs.createReadStream(path.join(draftsDir, "warsaw-restaurant-banner.jpg")), { filename: "warsaw-restaurant-banner.jpg" })
    .then((a) => a._id);
  console.log("Banners:", { clinicBanner, restaurantBanner });

  const ALT = {
    clinic: { pl: "Pozycjonowanie strony przychodni w Warszawie", ru: "Продвижение сайта медицинской клиники в Варшаве" },
    restaurant: { pl: "Pozycjonowanie strony restauracji w Warszawie", ru: "Продвижение сайта ресторана в Варшаве" },
  };

  const tx = client.transaction();

  // ---- MEDICAL CLINIC (PL + RU) — no inline anchors specified in [RELATED]; ----
  // ---- reciprocal links (dental, medtourism, Local SEO, Warsaw geo-landing) added as trailer paragraphs below. ----
  for (const lang of ["pl", "ru"]) {
    const docId = lang === "pl" ? "singlepage-seo-przychodnia-warszawa.pl" : "singlepage-seo-przychodnia-warszawa.ru";
    const doc = {
      _id: docId,
      _type: "singlepage",
      language: lang,
      pageType: "service",
      title: clinic.hero[lang].headline,
      slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: clinic.slug[lang] } },
      seo: { metaTitle: clinic.meta[lang].metaTitle, metaDescription: clinic.meta[lang].metaDescription },
      excerpt: clinic.hero[lang].excerpt,
      areaServed: ["Poland"],
      parentPage: ref(SERVICES_HUB[lang]),
      previewImage: { _type: "image", asset: ref(clinicBanner), alt: ALT.clinic[lang] },
      allowIntroBlock: true,
      contentBlocks: [
        benefitsBlock(clinic.pain[lang].title, clinic.pain[lang].items),
        gridBlock(clinic.features[lang].title, clinic.features[lang].items),
        textContent(clinic.seoText[lang].title, clinic.seoText[lang].body, {}),
        stepsBlock(clinic.steps[lang].title, clinic.steps[lang].items),
        faqBlock(clinic.faq[lang].title, clinic.faq[lang].items),
      ],
    };
    tx.create(doc);
  }

  // ---- RESTAURANT (PL + RU) — 3 inline anchors (Local SEO, AI search readiness, online booking); ----
  // ---- restaurant dev-landing + Warsaw geo-landing added as trailer paragraph below (no anchor given). ----
  for (const lang of ["pl", "ru"]) {
    const docId = lang === "pl" ? "singlepage-seo-restauracja-warszawa.pl" : "singlepage-seo-restauracja-warszawa.ru";
    let seoBody = restaurant.seoText[lang].body;
    if (lang === "pl") {
      seoBody = insertLink(seoBody, "wizytówka w mapach jest w gastronomii ważniejsza niż strona internetowa", "LOCALSEO");
      seoBody = insertLink(seoBody, "asystent AI może powtórzyć, gdy ktoś zapyta, gdzie w okolicy zjeść konkretną rzecz", "AISEARCH");
      seoBody = insertLink(seoBody, "Możliwość rezerwacji bez pośrednika", "BOOKING");
    } else {
      seoBody = insertLink(seoBody, "карточка в картах в общепите важнее сайта", "LOCALSEO");
      seoBody = insertLink(seoBody, "ИИ-ассистент может повторить, когда спрашивают, где поблизости съесть что-то конкретное", "AISEARCH");
      seoBody = insertLink(seoBody, "Возможность брони без посредника", "BOOKING");
    }
    const doc = {
      _id: docId,
      _type: "singlepage",
      language: lang,
      pageType: "service",
      title: restaurant.hero[lang].headline,
      slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: restaurant.slug[lang] } },
      seo: { metaTitle: restaurant.meta[lang].metaTitle, metaDescription: restaurant.meta[lang].metaDescription },
      excerpt: restaurant.hero[lang].excerpt,
      areaServed: ["Poland"],
      parentPage: ref(SERVICES_HUB[lang]),
      previewImage: { _type: "image", asset: ref(restaurantBanner), alt: ALT.restaurant[lang] },
      allowIntroBlock: true,
      contentBlocks: [
        benefitsBlock(restaurant.pain[lang].title, restaurant.pain[lang].items),
        gridBlock(restaurant.features[lang].title, restaurant.features[lang].items),
        textContent(restaurant.seoText[lang].title, seoBody, {
          LOCALSEO: LOCAL_SEO[lang],
          AISEARCH: AI_SEARCH[lang],
          BOOKING: ONLINE_BOOKING[lang],
        }),
        stepsBlock(restaurant.steps[lang].title, restaurant.steps[lang].items),
        faqBlock(restaurant.faq[lang].title, restaurant.faq[lang].items),
      ],
    };
    tx.create(doc);
  }

  tx.create({
    _id: "singlepage-seo-przychodnia-warszawa.i18n", _type: "translation.metadata",
    documentId: "singlepage-seo-przychodnia-warszawa",
    translations: [
      { _key: "pl", value: { _type: "reference", _ref: "singlepage-seo-przychodnia-warszawa.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-seo-przychodnia-warszawa.ru" } },
    ],
  });
  tx.create({
    _id: "singlepage-seo-restauracja-warszawa.i18n", _type: "translation.metadata",
    documentId: "singlepage-seo-restauracja-warszawa",
    translations: [
      { _key: "pl", value: { _type: "reference", _ref: "singlepage-seo-restauracja-warszawa.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "singlepage-seo-restauracja-warszawa.ru" } },
    ],
  });

  const result = await tx.commit();
  console.log("Committed:", JSON.stringify(result.results.map((r) => r.id), null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
