// scripts/build-nav.cjs
//
// Rebuilds the header menu and the footer columns in all three languages.
//
// Why: the header carried five links (one of them broken) and the footer nine,
// on a site of ~130 pages per language. About thirty industry pages sit at the
// root with no hub above them at all, which is part of why 68 live pages had
// never been crawled (drafts/gsc-24-09-analysis.md).
//
// Two rules the site already has, and this script obeys:
//   — header links are stored WITHOUT the language prefix: NavLinks adds it.
//   — footer links are stored WITH the full path: the Footer renders href as
//     given. That is why "/about" in the Polish footer used to send Polish
//     readers to the English page.
//
// Every path is resolved against the live sitemap, so a slug that does not
// exist in a language is dropped rather than guessed, and nothing points at a
// redirect. Run with --dry-run first: it prints the menus and writes nothing.
//
// Usage:
//   node scripts/build-nav.cjs --dry-run
//   node scripts/build-nav.cjs [--base http://localhost:3000]

const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const DRY = process.argv.includes("--dry-run");
const baseArg = process.argv.indexOf("--base");
const BASE = baseArg > -1 ? process.argv[baseArg + 1] : "http://localhost:3000";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// ---------------------------------------------------------------- the pages --
// key → the slug in each language. Resolved to a real path below; a missing
// translation (three market pages have no Polish version) is skipped.
const SLUG = {
  servicesHub:      { en: "services",        pl: "oferty",     ru: "uslugi" },
  locationsHub:     { en: "locations",       pl: "lokalizacje", ru: "lokacii" },
  portfolio:        { en: "portfolio",       pl: "portfolio",  ru: "portfolio" },
  blog:             { en: "blog",            pl: "blog",       ru: "blog" },

  webDev:      { en: "website-development", pl: "tworzenie-stron-internetowych", ru: "razrabotka-saitov" },
  landing:     { en: "landing-page-development", pl: "tworzenie-landing-page", ru: "razrabotka-lendingov" },
  multilang:   { en: "multilingual-website-development", pl: "tworzenie-stron-wielojezycznych", ru: "razrabotka-multiyazychnogo-saita" },
  seoStrategy: { en: "seo-optimization-and-strategy", pl: "strategia-i-optymalizacja-seo", ru: "seo-optimizaciya-i-strategiya" },
  techSeo:     { en: "technical-seo-services", pl: "seo-techniczne", ru: "tehnicheskoe-seo" },
  aiReady:     { en: "ai-search-readiness", pl: "przygotowanie-strony-do-wyszukiwania-ai", ru: "podgotovka-saita-k-ii-poisku" },
  localSeo:    { en: "local-seo-services", pl: "pozycjonowanie-lokalne", ru: "lokalnoe-seo-prodvizhenie" },
  ecomSeo:     { en: "ecommerce-seo-services", pl: "pozycjonowanie-sklepow-internetowych", ru: "prodvizhenie-internet-magazina" },
  maintenance: { en: "website-maintenance-services", pl: "utrzymanie-strony-internetowej", ru: "podderzhka-saita" },
  redesign:    { en: "website-redesign-services", pl: "przebudowa-strony-internetowej", ru: "redizayn-sayta" },

  // industries — header set
  realEstate:  { en: "real-estate-agency-website", pl: "strona-dla-agencji-nieruchomosci", ru: "sait-dlya-agentstva-nedvizhimosti" },
  lawyer:      { en: "lawyer-website-development", pl: "strona-internetowa-dla-adwokata", ru: "sozdanie-saita-dlya-advokata" },
  dental:      { en: "dental-clinic-website", pl: "strona-dla-gabinetu-stomatologicznego", ru: "sait-dlya-stomatologicheskoy-kliniki" },
  restaurant:  { en: "restaurant-website", pl: "strona-dla-restauracji", ru: "sait-dlya-restorana" },
  hotel:       { en: "hotel-website", pl: "strona-dla-hotelu", ru: "sait-dlya-otelya" },
  recruitment: { en: "recruitment-agency-website", pl: "strona-dla-agencji-rekrutacyjnej", ru: "sait-dlya-kadrovogo-agentstva" },
  travel:      { en: "travel-agency-website", pl: "strona-dla-biura-podrozy", ru: "sait-dlya-turagentstva" },
  beauty:      { en: "seo-for-beauty-salons", pl: "seo-salonu-kosmetycznego", ru: "seo-salona-krasoty" },
  auto:        { en: "garage-and-auto-repair-website", pl: "tworzenie-stron-dla-warsztatow-samochodowych", ru: "sozdanie-saita-dlya-avtoservisa" },
  psychology:  { en: "website-for-psychologists-therapists", pl: "strona-dla-psychologow-terapeutow", ru: "sait-dlya-psihologov-terapevtov" },

  // industries — footer set, deliberately different pages
  accounting:  { en: "accounting-firm-website", pl: "strona-dla-biura-rachunkowego", ru: "sait-dlya-buhgalterskoy-firmy" },
  architecture:{ en: "architecture-studio-website", pl: "strona-dla-biura-architektonicznego", ru: "sait-dlya-arhitekturnogo-byuro" },
  cleaning:    { en: "cleaning-company-website", pl: "strona-dla-firmy-sprzatajacej", ru: "sait-dlya-kliningovoy-kompanii" },
  fitness:     { en: "fitness-studio-website", pl: "strona-dla-studia-fitness", ru: "sait-dlya-fitnes-studii" },
  langSchool:  { en: "language-school-website", pl: "strona-dla-szkoly-jezykowej", ru: "sait-dlya-yazykovoy-shkoly" },
  logistics:   { en: "logistics-company-website", pl: "strona-dla-firmy-transportowej", ru: "sait-dlya-transportnoy-kompanii" },
  manufacturing:{ en: "manufacturing-company-website", pl: "strona-dla-firmy-produkcyjnej", ru: "sait-dlya-proizvodstvennoy-kompanii" },
  photographer:{ en: "photographer-website", pl: "strona-dla-fotografa", ru: "sait-dlya-fotografa" },
  startup:     { en: "startup-website", pl: "strona-dla-startupu", ru: "sait-dlya-startapa" },
  vet:         { en: "veterinary-clinic-website", pl: "strona-dla-przychodni-weterynaryjnej", ru: "sait-dlya-veterinarnoy-kliniki" },

  // markets
  mUS:   { en: "seo-for-us-market", pl: "pozycjonowanie-na-rynek-amerykanski", ru: "prodvizhenie-na-amerikanskiy-rynok" },
  mUK:   { en: "seo-for-uk-market", pl: "pozycjonowanie-na-rynek-brytyjski", ru: "prodvizhenie-na-britanskiy-rynok" },
  mDE:   { en: "seo-for-german-market", pl: "pozycjonowanie-na-rynek-niemiecki", ru: "prodvizhenie-na-nemetskiy-rynok" },
  mES:   { en: "website-development-spain", pl: null, ru: "razrabotka-saitov-ispaniya" },
  mUAE:  { en: "website-development-uae", pl: null, ru: "razrabotka-saitov-oae" },
  mPT:   { en: "website-development-portugal", pl: null, ru: "razrabotka-saitov-portugaliya" },
  mRealEstate: { en: "seo-for-real-estate", pl: "seo-dla-stron-nieruchomosci", ru: "seo-dlya-nedvizhimosti" },

  pricing:  { en: "pricing", pl: "cennik", ru: "ceny" },
  about:    { en: "about", pl: "o-mnie", ru: "obo-mne" },
  contacts: { en: "contacts", pl: "kontakt", ru: "kontakty" },
  privacy:  { en: "privacy-policy", pl: "polityka-prywatnosci", ru: "politika-konfidencialnosti" },
  aiStudy:  { en: "ai-assistant-recommendations-study", pl: "pozycjonowanie-w-ai-badanie", ru: "issledovanie-otvetov-ii-assistentov" },
};

// ---------------------------------------------------------------- the labels --
const L = {
  en: {
    services: "Services", industries: "Industries", portfolio: "Portfolio", blog: "Blog",
    pricing: "Pricing", about: "About", contacts: "Contacts", privacy: "Privacy policy",
    webDev: "Website development", landing: "Landing pages", multilang: "Multilingual websites",
    seoStrategy: "SEO strategy", techSeo: "Technical SEO", aiReady: "Visibility in AI search",
    localSeo: "Local SEO", ecomSeo: "E-commerce SEO", maintenance: "Website maintenance",
    redesign: "Website redesign", locationsHub: "SEO by market",
    realEstate: "Real estate agencies", lawyer: "Law firms", dental: "Dental clinics",
    restaurant: "Restaurants", hotel: "Hotels", recruitment: "Recruitment agencies",
    travel: "Travel agencies", beauty: "Beauty salons", auto: "Auto repair shops",
    psychology: "Psychologists and therapists",
    accounting: "Accounting firms", architecture: "Architecture studios", cleaning: "Cleaning companies",
    fitness: "Fitness studios", langSchool: "Language schools", logistics: "Logistics companies",
    manufacturing: "Manufacturers", photographer: "Photographers", startup: "Startups",
    vet: "Veterinary clinics",
    mUS: "United States", mUK: "United Kingdom", mDE: "Germany", mES: "Spain", mUAE: "UAE",
    mPT: "Portugal", mRealEstate: "Real estate SEO",
    aiStudy: "Study: what AI assistants answer", googleProfile: "Google Business Profile",
    colServices: "Services", colIndustries: "More industries", colMarkets: "Markets",
    colResources: "Resources", colAbout: "About",
  },
  pl: {
    services: "Usługi", industries: "Branże", portfolio: "Portfolio", blog: "Blog",
    pricing: "Cennik", about: "O mnie", contacts: "Kontakt", privacy: "Polityka prywatności",
    webDev: "Tworzenie stron", landing: "Landing page", multilang: "Strony wielojęzyczne",
    seoStrategy: "Strategia SEO", techSeo: "SEO techniczne", aiReady: "Widoczność w AI",
    localSeo: "Pozycjonowanie lokalne", ecomSeo: "SEO sklepów", maintenance: "Utrzymanie strony",
    redesign: "Przebudowa strony", locationsHub: "SEO na rynki zagraniczne",
    realEstate: "Agencje nieruchomości", lawyer: "Kancelarie prawne", dental: "Stomatologia",
    restaurant: "Restauracje", hotel: "Hotele", recruitment: "Agencje rekrutacyjne",
    travel: "Biura podróży", beauty: "Salony kosmetyczne", auto: "Warsztaty samochodowe",
    psychology: "Psycholodzy i terapeuci",
    accounting: "Biura rachunkowe", architecture: "Biura architektoniczne", cleaning: "Firmy sprzątające",
    fitness: "Studia fitness", langSchool: "Szkoły językowe", logistics: "Firmy transportowe",
    manufacturing: "Producenci", photographer: "Fotografowie", startup: "Startupy",
    vet: "Kliniki weterynaryjne",
    mUS: "Rynek amerykański", mUK: "Rynek brytyjski", mDE: "Rynek niemiecki", mES: "Hiszpania",
    mUAE: "ZEA", mPT: "Portugalia", mRealEstate: "SEO nieruchomości",
    aiStudy: "Badanie: co odpowiadają asystenci AI", googleProfile: "Profil w Google",
    colServices: "Usługi", colIndustries: "Kolejne branże", colMarkets: "Rynki",
    colResources: "Materiały", colAbout: "O mnie",
  },
  ru: {
    services: "Услуги", industries: "Отрасли", portfolio: "Портфолио", blog: "Блог",
    pricing: "Цены", about: "Обо мне", contacts: "Контакты", privacy: "Политика конфиденциальности",
    webDev: "Разработка сайтов", landing: "Лендинги", multilang: "Многоязычные сайты",
    seoStrategy: "SEO-стратегия", techSeo: "Техническое SEO", aiReady: "Видимость в ИИ-поиске",
    localSeo: "Локальное продвижение", ecomSeo: "SEO интернет-магазинов", maintenance: "Поддержка сайта",
    redesign: "Редизайн сайта", locationsHub: "Продвижение по рынкам",
    realEstate: "Агентства недвижимости", lawyer: "Юристы и адвокаты", dental: "Стоматологии",
    restaurant: "Рестораны", hotel: "Отели", recruitment: "Кадровые агентства",
    travel: "Турагентства", beauty: "Салоны красоты", auto: "Автосервисы",
    psychology: "Психологи и терапевты",
    accounting: "Бухгалтерские фирмы", architecture: "Архитектурные бюро", cleaning: "Клининговые компании",
    fitness: "Фитнес-студии", langSchool: "Языковые школы", logistics: "Транспортные компании",
    manufacturing: "Производственные компании", photographer: "Фотографы", startup: "Стартапы",
    vet: "Ветклиники",
    mUS: "США", mUK: "Великобритания", mDE: "Германия", mES: "Испания", mUAE: "ОАЭ",
    mPT: "Португалия", mRealEstate: "SEO недвижимости",
    aiStudy: "Исследование: что отвечают ИИ-ассистенты", googleProfile: "Профиль в Google",
    colServices: "Услуги", colIndustries: "Ещё отрасли", colMarkets: "Рынки",
    colResources: "Материалы", colAbout: "Обо мне",
  },
};

const GOOGLE_PROFILE = "https://www.google.com/search?kgmid=/g/11nw1z00dz";

// Shown at the bottom of the mobile menu. Same number the contacts page uses;
// the link goes to WhatsApp, which is where enquiries actually arrive.
const PHONE = "+48 786 517 446";
const WHATSAPP = "48786517446";

// ------------------------------------------------------------------ resolve --

async function sitemapPaths() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap ${res.status} from ${BASE} — is the dev server running?`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>https:\/\/www\.bandziuk\.com([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
}

function makeResolver(paths) {
  const dropped = [];
  return {
    dropped,
    // full path, with the language prefix — what the footer stores
    full(lang, key) {
      const slug = SLUG[key]?.[lang];
      if (!slug) { dropped.push(`${lang}:${key} (no translation)`); return null; }
      const prefix = lang === "en" ? "" : `/${lang}`;
      const hit = paths.find((p) => p.startsWith(prefix + "/") && p.split("/").pop() === slug);
      if (!hit) { dropped.push(`${lang}:${key} (/${slug} not in sitemap)`); return null; }
      return hit;
    },
    // without the language prefix — what the header stores
    bare(lang, key) {
      const f = this.full(lang, key);
      if (!f) return null;
      return lang === "en" ? f : f.slice(3);
    },
  };
}

// -------------------------------------------------------------------- build --

const k = (s) => s.replace(/[^a-z0-9]/gi, "").slice(0, 12) + Math.random().toString(36).slice(2, 6);

function buildHeader(lang, r) {
  const t = L[lang];
  const item = (label, key, children) => {
    const link = key ? r.bare(lang, key) : "";
    if (key && !link) return null;
    const kids = (children || [])
      .map(([lbl, ck]) => { const l = r.bare(lang, ck); return l ? { _key: k(ck), label: lbl, link: l } : null; })
      .filter(Boolean);
    return { _key: k(label), label, link, ...(kids.length ? { children: kids } : {}) };
  };

  return [
    item(t.services, "servicesHub", [
      [t.webDev, "webDev"], [t.landing, "landing"], [t.multilang, "multilang"],
      [t.seoStrategy, "seoStrategy"], [t.techSeo, "techSeo"], [t.aiReady, "aiReady"],
      [t.maintenance, "maintenance"], [t.locationsHub, "locationsHub"],
    ]),
    // There is no industries hub yet — those pages sit at the root with nothing
    // above them — so this points at the services hub for now. It also keeps
    // the item safe while the dropdown component is not deployed: the old
    // NavLinks turns an empty link into a dead anchor.
    item(t.industries, "servicesHub", [
      [t.realEstate, "realEstate"], [t.lawyer, "lawyer"], [t.dental, "dental"],
      [t.restaurant, "restaurant"], [t.hotel, "hotel"], [t.recruitment, "recruitment"],
      [t.travel, "travel"], [t.beauty, "beauty"], [t.auto, "auto"], [t.psychology, "psychology"],
    ]),
    item(t.portfolio, "portfolio"),
    item(t.blog, "blog"),
    item(t.pricing, "pricing"),
    item(t.about, "about"),
  ].filter(Boolean);
}

function buildFooter(lang, r) {
  const t = L[lang];
  const col = (title, entries) => ({
    _key: k(title),
    title,
    links: entries
      .map(([label, key]) => {
        if (key.startsWith("http")) return { _key: k(label), label, link: key };
        const link = r.full(lang, key);
        return link ? { _key: k(key), label, link } : null;
      })
      .filter(Boolean),
  });

  return [
    col(t.colServices, [
      [t.webDev, "webDev"], [t.landing, "landing"], [t.multilang, "multilang"],
      [t.seoStrategy, "seoStrategy"], [t.techSeo, "techSeo"], [t.localSeo, "localSeo"],
      [t.ecomSeo, "ecomSeo"], [t.redesign, "redesign"], [t.services, "servicesHub"],
    ]),
    col(t.colIndustries, [
      [t.accounting, "accounting"], [t.architecture, "architecture"], [t.cleaning, "cleaning"],
      [t.fitness, "fitness"], [t.langSchool, "langSchool"], [t.logistics, "logistics"],
      [t.manufacturing, "manufacturing"], [t.photographer, "photographer"],
      [t.startup, "startup"], [t.vet, "vet"],
    ]),
    col(t.colMarkets, [
      [t.mUS, "mUS"], [t.mUK, "mUK"], [t.mDE, "mDE"], [t.mES, "mES"], [t.mUAE, "mUAE"],
      [t.mPT, "mPT"], [t.mRealEstate, "mRealEstate"], [t.locationsHub, "locationsHub"],
    ]),
    col(t.colResources, [
      [t.blog, "blog"], [t.portfolio, "portfolio"], [t.pricing, "pricing"], [t.aiStudy, "aiStudy"],
    ]),
    col(t.colAbout, [
      [t.about, "about"], [t.contacts, "contacts"], [t.privacy, "privacy"],
      [t.googleProfile, GOOGLE_PROFILE],
    ]),
  ];
}

// --------------------------------------------------------------------- main --

(async () => {
  const paths = await sitemapPaths();
  console.log(`sitemap: ${paths.length} urls from ${BASE}\n`);
  const r = makeResolver(paths);

  for (const lang of ["en", "pl", "ru"]) {
    const nav = buildHeader(lang, r);
    const cols = buildFooter(lang, r);
    const navCount = nav.reduce((n, i) => n + 1 + (i.children?.length || 0), 0);
    const colCount = cols.reduce((n, c) => n + c.links.length, 0);

    console.log(`=== ${lang.toUpperCase()} — header ${navCount} links, footer ${colCount} links`);
    nav.forEach((i) => {
      console.log(`   ${i.label}${i.link ? "  " + i.link : "  (dropdown only)"}`);
      (i.children || []).forEach((c) => console.log(`      ${c.label.padEnd(34)} ${c.link}`));
    });
    cols.forEach((c) => {
      console.log(`   [${c.title}]`);
      c.links.forEach((l) => console.log(`      ${l.label.padEnd(34)} ${l.link}`));
    });

    if (!DRY) {
      const headerId = await client.fetch("*[_type=='header' && language==$l][0]._id", { l: lang });
      const footerId = await client.fetch("*[_type=='footer' && language==$l][0]._id", { l: lang });
      await client
        .patch(headerId)
        .set({ navLinks: nav, phone: PHONE, whatsappNumber: WHATSAPP })
        .commit();
      await client.patch(footerId).set({ footerColumns: cols }).commit();
      console.log(`   written: ${headerId}, ${footerId}`);
    }
    console.log("");
  }

  if (r.dropped.length) {
    console.log("skipped (no translation or not in the sitemap):");
    [...new Set(r.dropped)].forEach((d) => console.log("   " + d));
  }
  console.log(DRY ? "\nDry run — nothing was written." : "\nDone. Header and footer are not in the webhook filter, so the site picks this up on the next revalidation.");
})().catch((e) => { console.error("\n" + (e.message || e)); process.exitCode = 1; });
