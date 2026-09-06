const path = require("path");
const fs = require("fs");
const { parseTaggedContent } = require("./parse-tagged-content.cjs");
const {
  client, ref, key, SERVICES_HUB,
  benefitsBlock, gridBlock, stepsBlock, faqBlock, textContent, uploadImage,
} = require("./create-batch1-warsaw.cjs");

const WARSAW_DEV = { en: "/web-development-warsaw", pl: "/pl/tworzenie-stron-internetowych-warszawa", ru: "/ru/razrabotka-saitov-varshava" };
const GEO_HUB = { en: "/services/locations", pl: "/pl/oferty/lokacii", ru: "/ru/uslugi/lokacii" };
const FELGILAB = { en: "/portfolio/felgilab-wordpress-rebuild", pl: "/pl/portfolio/przebudowa-strony-felgilab-wordpress", ru: "/ru/portfolio/pererabotka-saita-felgilab-wordpress" };
const CYPRUS_CASE = { en: "/portfolio/build-and-optimize-a-multilingual-real-estate-platform", pl: "/pl/portfolio/rozwoj-wielojezycznej-platformy-nieruchomosci-premium", ru: "/ru/portfolio/razrabotka-saita-dlya-agentstva-elitnoi-nedvizhimosti-na-kipre" };
const AI_SEARCH_READY = { en: "/services/ai-search-readiness", pl: "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai", ru: "/ru/uslugi/podgotovka-saita-k-ii-poisku" };
const MULTILINGUAL_WEB = { en: "/multilingual-website-development", pl: "/pl/tworzenie-stron-wielojezycznych", ru: "/ru/razrabotka-multiyazychnogo-saita" };
const PLATFORM_MIGRATION = { en: "/website-platform-migration", pl: "/pl/migracja-strony-na-inna-platforme", ru: "/ru/perenos-saita-na-druguyu-platformu" };
const SEO_AUDIT = { en: "/services/seo-audit", pl: "/pl/oferty/audyt-seo-strony-internetowej", ru: "/ru/uslugi/seo-audit-saita" };
const BLOG_NO_LEADS = { en: "/blog/why-my-website-gets-no-leads", pl: "/pl/blog/dlaczego-strona-nie-generuje-zapytan", ru: "/ru/blog/pochemu-sait-ne-prinosit-zayavok" };
const BLOG_REDESIGN = { en: "/blog/website-redesign-without-losing-traffic", pl: "/pl/blog/redesign-strony-bez-utraty-ruchu", ru: "/ru/blog/redizayn-sayta-bez-poteri-trafika" };

// Self-references within this batch (resolved after creation, but URLs are
// deterministic from slug + parent = services hub, so safe to hardcode here)
const LOCAL_SEO_URL = { en: "/services/local-seo-services", pl: "/pl/oferty/pozycjonowanie-lokalne", ru: "/ru/uslugi/lokalnoe-seo-prodvizhenie" };
const INTL_SEO_URL = { en: "/services/international-seo", pl: "/pl/oferty/seo-miedzynarodowe", ru: "/ru/uslugi/mezhdunarodnoe-seo" };
const TRAFFIC_DROP_URL = { en: "/services/traffic-drop-recovery", pl: "/pl/oferty/odzyskanie-pozycji-po-spadku-ruchu", ru: "/ru/uslugi/vosstanovlenie-pozitsiy-posle-padeniya-trafika" };

function insertLink(body, phrase, linkId) {
  const idx = body.indexOf(phrase);
  if (idx === -1) throw new Error(`Anchor phrase not found: "${phrase}"`);
  if (body.indexOf(phrase, idx + 1) !== -1) throw new Error(`Anchor phrase not unique: "${phrase}"`);
  return body.slice(0, idx) + `[[${phrase}|${linkId}]]` + body.slice(idx + phrase.length);
}

function buildFullDoc({ parsed, id, lang, areaServed, bannerAssetId, altText, seoLinks, anchors, trailer }) {
  let seoBody = parsed.seoText[lang].body;
  for (const [phrase, linkId] of anchors) seoBody = insertLink(seoBody, phrase, linkId);
  if (trailer) seoBody += "\n\n" + trailer;
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

// Trailer sentences for pairs with no natural anchor in the body (mandatory
// or explicitly-listed pairings only — not forced everywhere).
const TRAILERS = {
  localSeo: {
    en: (href) => `Recovering from a sudden traffic drop is a different, separate service — [[see traffic drop recovery|${"TRAFFICDROP"}]] if that's what's happening rather than a lack of local visibility.`,
    pl: () => `Odzyskiwanie po nagłym spadku ruchu to inna, osobna usługa — [[zobacz odzyskanie pozycji po spadku ruchu|TRAFFICDROP]], jeśli to Wasz przypadek, a nie brak widoczności lokalnej.`,
    ru: () => `Восстановление после внезапного падения трафика — отдельная услуга — [[смотрите восстановление позиций после падения трафика|TRAFFICDROP]], если это ваш случай, а не нехватка локальной видимости.`,
  },
  trafficDropLocalSeo: {
    en: () => `If the traffic was never really there to begin with, that's a different problem — [[local SEO|LOCALSEO]] is what addresses ongoing visibility rather than a one-off drop.`,
    pl: () => `Jeśli ruchu właściwie nigdy nie było, to inny problem — [[pozycjonowanie lokalne|LOCALSEO]] odpowiada za bieżącą widoczność, a nie jednorazowy spadek.`,
    ru: () => `Если трафика по сути никогда и не было, это другая задача — [[локальное SEO|LOCALSEO]] отвечает за постоянную видимость, а не разовое падение.`,
  },
  trafficDropAudit: {
    en: () => `Not sure which situation is yours? A [[technical SEO audit|SEOAUDIT]] looks at why a site has no traffic at all — this service is specifically for traffic that was there and then wasn't.`,
    pl: () => `Nie wiecie, który przypadek jest Waszym? [[Techniczny audyt SEO|SEOAUDIT]] sprawdza, dlaczego strona w ogóle nie ma ruchu — ta usługa dotyczy konkretnie ruchu, który był i zniknął.`,
    ru: () => `Не уверены, какой случай ваш? [[Технический SEO-аудит|SEOAUDIT]] смотрит, почему у сайта нет трафика вообще, — эта услуга именно про трафик, который был и пропал.`,
  },
};

async function main() {
  const draftsDir = path.resolve(__dirname, "../drafts");
  const localSeo = parseTaggedContent(path.join(draftsDir, "service-local-seo-tagged-content.md"));
  const intlSeo = parseTaggedContent(path.join(draftsDir, "service-international-seo-tagged-content.md"));
  const trafficDrop = parseTaggedContent(path.join(draftsDir, "service-traffic-drop-recovery-tagged-content.md"));

  const cachePath = path.resolve(__dirname, "../drafts/.batch8-banner-cache.json");
  let cache = {};
  try { cache = JSON.parse(fs.readFileSync(cachePath, "utf8")); } catch {}
  async function uploadCached(name, file) {
    if (cache[name]) return cache[name];
    const id = await uploadImage(file);
    cache[name] = id;
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 1));
    return id;
  }
  // No dedicated banners were listed for these three service pages in the
  // original 18-page banner set — using the fallback per the "use the
  // fallback and report it" instruction from the original batch task.
  const fallbackBanner = await uploadCached("fallback", "some-another-banner-1.jpg");
  console.log("Banner (fallback, none provided for these 3 pages):", fallbackBanner);

  const ALT = {
    localSeo: { en: "Local SEO for businesses with an address", pl: "Pozycjonowanie lokalne dla firm z adresem", ru: "Локальное SEO для бизнеса с адресом" },
    intlSeo: { en: "International and multilingual SEO", pl: "SEO międzynarodowe i wielojęzyczne", ru: "Международное и мультиязычное SEO" },
    trafficDrop: { en: "Traffic drop recovery", pl: "Odzyskanie pozycji po spadku ruchu", ru: "Восстановление позиций после падения трафика" },
  };

  const tx = client.transaction();

  // ---- LOCAL SEO ----
  for (const lang of ["en", "pl", "ru"]) {
    const links = { DEV: WARSAW_DEV[lang], CASE: FELGILAB[lang], HUB: GEO_HUB[lang], TRAFFICDROP: TRAFFIC_DROP_URL[lang] };
    const anchors = lang === "en"
      ? [
          ["I built a four-language site", "CASE"],
          ["for a Warsaw workshop where exactly that split applied", "DEV"],
          ["If your customers are in another country and find you by category rather than by proximity", "HUB"],
        ]
      : lang === "pl"
      ? [
          ["Zbudowałem czterojęzyczną stronę", "CASE"],
          ["dla warszawskiego warsztatu, gdzie właśnie ten podział obowiązywał", "DEV"],
          ["Jeśli Wasi klienci są w innym kraju i znajdują Was po kategorii, a nie po bliskości", "HUB"],
        ]
      : [
          ["Я делал четырёхъязычный сайт", "CASE"],
          ["для варшавской мастерской, где действовало ровно это разделение", "DEV"],
          ["Если ваши клиенты в другой стране и находят вас по категории, а не по близости", "HUB"],
        ];
    const doc = buildFullDoc({
      parsed: localSeo,
      id: lang === "en" ? "service-local-seo" : `service-local-seo.${lang}`,
      lang, areaServed: ["Poland", "European Union"],
      bannerAssetId: fallbackBanner, altText: ALT.localSeo[lang],
      seoLinks: links, anchors,
      trailer: TRAILERS.localSeo[lang](),
    });
    tx.create(doc);
  }

  // ---- INTERNATIONAL SEO ----
  for (const lang of ["en", "pl", "ru"]) {
    const links = { HUB: GEO_HUB[lang], MWEB: MULTILINGUAL_WEB[lang], CASE: CYPRUS_CASE[lang], AISEARCH: AI_SEARCH_READY[lang], TRAFFICDROP: TRAFFIC_DROP_URL[lang] };
    const anchors = lang === "en"
      ? [
          ["If you're entering one market, this isn't the service.", "HUB"],
          ["The structure, the routing, the markup, the measurement setup", "MWEB"],
          ["I built a four-language property catalogue on that basis", "CASE"],
          ["presence in AI assistant answers per language", "AISEARCH"],
          ["a site rebuilt with AI assistance where the language versions were wired to the wrong locales", "TRAFFICDROP"],
        ]
      : lang === "pl"
      ? [
          ["Jeśli wchodzicie na jeden rynek, to nie jest ta usługa.", "HUB"],
          ["Struktura, routing, znaczniki, ustawienie pomiaru", "MWEB"],
          ["Zbudowałem na tej zasadzie czterojęzyczny katalog nieruchomości", "CASE"],
          ["obecność w odpowiedziach asystentów AI per język", "AISEARCH"],
          ["stronę przebudowaną z pomocą AI, gdzie wersje językowe podpięto do niewłaściwych lokalizacji", "TRAFFICDROP"],
        ]
      : [
          ["Если вы заходите на один рынок, это не та услуга.", "HUB"],
          ["Структура, маршрутизация, разметка, настройка измерения", "MWEB"],
          ["Я строил на этом основании четырёхъязычный каталог недвижимости", "CASE"],
          ["присутствие в ответах ИИ-ассистентов по каждому языку", "AISEARCH"],
          ["сайт, пересобранный с помощью ИИ, где языковые версии подключили к неверным локалям", "TRAFFICDROP"],
        ];
    const doc = buildFullDoc({
      parsed: intlSeo,
      id: lang === "en" ? "service-international-seo" : `service-international-seo.${lang}`,
      lang, areaServed: ["Poland", "European Union"],
      bannerAssetId: fallbackBanner, altText: ALT.intlSeo[lang],
      seoLinks: links, anchors,
    });
    tx.create(doc);
  }

  // ---- TRAFFIC DROP RECOVERY ----
  for (const lang of ["en", "pl", "ru"]) {
    const links = { MIGRATION: PLATFORM_MIGRATION[lang], INTLSEO: INTL_SEO_URL[lang], LEADS: BLOG_NO_LEADS[lang], REDESIGN: BLOG_REDESIGN[lang], SEOAUDIT: SEO_AUDIT[lang], LOCALSEO: LOCAL_SEO_URL[lang] };
    const anchors = lang === "en"
      ? [
          ["Platform, domain or hosting changes go wrong in specific ways", "MIGRATION"],
          ["a site rebuilt with AI assistance where the language versions were wired to the wrong locales", "INTLSEO"],
          ["competitors moving in the same period", "LEADS"],
          ["By a wide margin the most common", "REDESIGN"],
        ]
      : lang === "pl"
      ? [
          ["Zmiany platformy, domeny albo hostingu psują się w konkretny sposób", "MIGRATION"],
          ["strony przebudowanej z pomocą AI, gdzie wersje językowe podpięto do niewłaściwych lokalizacji", "INTLSEO"],
          ["konkurenci ruszający się w tym samym okresie", "LEADS"],
          ["Zdecydowanie najczęstsze", "REDESIGN"],
        ]
      : [
          ["Смена платформы, домена или хостинга ломается конкретным образом", "MIGRATION"],
          ["сайта, пересобранного с помощью ИИ, где языковые версии подключили к неверным локалям", "INTLSEO"],
          ["конкуренты двигались в тот же период", "LEADS"],
          ["С большим отрывом самое частое", "REDESIGN"],
        ];
    const doc = buildFullDoc({
      parsed: trafficDrop,
      id: lang === "en" ? "service-traffic-drop-recovery" : `service-traffic-drop-recovery.${lang}`,
      lang, areaServed: ["Poland", "European Union"],
      bannerAssetId: fallbackBanner, altText: ALT.trafficDrop[lang],
      seoLinks: links, anchors,
      trailer: TRAILERS.trafficDropLocalSeo[lang]() + "\n\n" + TRAILERS.trafficDropAudit[lang](),
    });
    tx.create(doc);
  }

  tx.create({
    _id: "service-local-seo.i18n", _type: "translation.metadata", documentId: "service-local-seo",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "service-local-seo" } },
      { _key: "pl", value: { _type: "reference", _ref: "service-local-seo.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "service-local-seo.ru" } },
    ],
  });
  tx.create({
    _id: "service-international-seo.i18n", _type: "translation.metadata", documentId: "service-international-seo",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "service-international-seo" } },
      { _key: "pl", value: { _type: "reference", _ref: "service-international-seo.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "service-international-seo.ru" } },
    ],
  });
  tx.create({
    _id: "service-traffic-drop-recovery.i18n", _type: "translation.metadata", documentId: "service-traffic-drop-recovery",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "service-traffic-drop-recovery" } },
      { _key: "pl", value: { _type: "reference", _ref: "service-traffic-drop-recovery.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "service-traffic-drop-recovery.ru" } },
    ],
  });

  const result = await tx.commit();
  console.log("Committed:", JSON.stringify(result.results.map((r) => r.id), null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
