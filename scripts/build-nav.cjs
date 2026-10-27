// scripts/build-nav.cjs
//
// Rebuilds the header mega menu and the footer in all three languages
// (owner's brief of 27.10.2026: Sprava-style grouped menu, every item editable
// in the admin — header.megaMenu, footer.footerColumns and footer brand fields).
//
// What goes where:
//   header  Services (mega: AI search, SEO, websites, technology, markets; PL also
//           16 cities), Industries (mega: 6 sectors, each industry links to its
//           website page with an «SEO» tag to its SEO page), Portfolio (cases +
//           the AI study card), Blog, Pricing, About (small dropdown).
//   footer  services, AI search, the long tail of industry pages that are not in
//           the header, markets / cities / Warsaw pages per language, resources,
//           about; brand block (about text, WhatsApp, contact button).
//
// Every page is named by its slug in ONE language (English by default, «pl:» or
// «ru:» prefix otherwise) and translated through the Sanity translation
// metadata, then checked against the live sitemap: a page with no version in a
// language, or one not in the sitemap, is dropped — never guessed. When an entry
// lists several candidates, the first one that resolves wins. All links are
// stored as full paths with the language prefix.
//
// Usage:
//   node scripts/build-nav.cjs --dry-run              prints the menus, writes nothing
//   node scripts/build-nav.cjs [--base http://localhost:3000]

const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const DRY = process.argv.includes("--dry-run");
const baseArg = process.argv.indexOf("--base");
const BASE = baseArg > -1 ? process.argv[baseArg + 1] : "http://localhost:3000";
const LANGS = ["en", "pl", "ru"];

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const key = () => crypto.randomBytes(6).toString("hex");
const GOOGLE_PROFILE = "https://www.google.com/search?kgmid=/g/11nw1z00dz";
const PHONE = "+48 786 517 446";
const WHATSAPP = "48786517446";

// [en, pl, ru] labels; an empty label drops the entry in that language.
const t = (en, pl, ru) => ({ en, pl, ru });

// ----------------------------------------------------------------- services --
// [labels, candidates]
const AI = [
  [t("Generative engine optimization (GEO)", "Optymalizacja GEO i AI SEO", "AI SEO и GEO-оптимизация"), ["ai-ready-seo-and-geo-optimization"]],
  [t("Answer engine optimization (AEO)", "Pozycjonowanie w AI i ChatGPT", ""), ["answer-engine-optimization-services"]],
  [t("AI SEO services", "Usługi AI SEO", "AI SEO-продвижение"), ["ai-seo-services"]],
  [t("ChatGPT SEO", "Pozycjonowanie w ChatGPT", "Продвижение в ChatGPT"), ["chatgpt-seo-services"]],
  [t("LLM SEO", "LLM SEO", "LLM SEO"), ["llm-seo-services"]],
  [t("AI visibility audit", "Audyt widoczności w AI", "Аудит видимости в ИИ"), ["ai-visibility-audit"]],
  [t("AI brand monitoring", "Monitoring marki w AI", "Мониторинг бренда в ИИ"), ["ai-brand-monitoring"]],
  [t("Fixing wrong AI answers", "Poprawa błędnych danych w AI", "Исправление неверных данных в ИИ"), ["fix-ai-misinformation"]],
  [t("Preparing a site for AI search", "Przygotowanie strony do AI", "Подготовка сайта к ИИ-поиску"), ["ai-search-readiness"]],
  [t("AI SEO consultant", "Ekspert AI SEO", "AI SEO-консультант"), ["ai-seo-consultant"]],
];
const SEO = [
  [t("", "", "Продвижение сайта"), ["ru:prodvizhenie-saita"]],
  [t("SEO strategy and optimization", "Strategia i optymalizacja SEO", "SEO-оптимизация и стратегия"), ["seo-optimization-and-strategy"]],
  [t("SEO audit", "Audyt SEO", "SEO-аудит"), ["seo-audit"]],
  [t("Technical SEO", "SEO techniczne", "Техническое SEO"), ["technical-seo-services"]],
  [t("Local SEO", "Pozycjonowanie lokalne", "Локальное продвижение"), ["local-seo-services"]],
  [t("E-commerce SEO", "Pozycjonowanie sklepów", "Продвижение интернет-магазина"), ["ecommerce-seo-services"]],
  [t("Shopify SEO", "", ""), ["shopify-seo-services"]],
  [t("International SEO", "SEO międzynarodowe", "Международное SEO"), ["international-seo"]],
  [t("Traffic drop recovery", "Odzyskanie pozycji po spadku ruchu", "Восстановление после падения трафика"), ["traffic-drop-recovery"]],
  [t("SEO consultant", "Freelancer SEO", "Частный SEO-специалист"), ["seo-consultant"]],
  [t("", "Konsultacje SEO", "SEO-консультация"), ["pl:konsultacje-seo"]],
];
const WEB = [
  [t("Website development", "Tworzenie stron internetowych", "Разработка сайтов"), ["website-development"]],
  [t("Landing pages", "Landing page", "Лендинги"), ["landing-page-development"]],
  [t("", "Strona wizytówka", "Сайт-визитка"), ["pl:strona-wizytowka"]],
  [t("Multilingual websites", "Strony wielojęzyczne", "Многоязычные сайты"), ["multilingual-website-development"]],
  [t("Website redesign", "Przebudowa strony", "Редизайн сайта"), ["website-redesign-services"]],
  [t("Catalog websites with filters", "Katalog z filtrami", "Каталог с фильтрами"), ["catalog-website-with-filters"]],
  [t("Websites with online booking", "Rezerwacje online", "Онлайн-запись на сайте"), ["website-with-online-booking"]],
  [t("Platform migration", "Migracja platformy", "Переезд на другую платформу"), ["website-platform-migration"]],
  [t("Conversion rate optimization", "Optymalizacja konwersji", "Оптимизация конверсии"), ["conversion-rate-optimization-services"]],
];
const TECH = [
  [t("Next.js development", "Strony w Next.js", "Разработка на Next.js"), ["nextjs-development-services"]],
  [t("WordPress development", "Strony na WordPress", "Сайт на WordPress"), ["wordpress-development-services"]],
  [t("CMS and API integration", "Integracja CMS i API", "Интеграция CMS и API"), ["cms-integration-and-api-work"]],
  [t("Performance and code audit", "Audyt wydajności i kodu", "Ускорение сайта и аудит кода"), ["website-performance-and-code-audit"]],
  [t("Website maintenance", "Utrzymanie strony", "Поддержка сайта"), ["website-maintenance-services"]],
];
const TOOLS = [
  [t("AI visibility checker", "Sprawdź widoczność w AI", "Проверка видимости в ИИ"), ["path:/tools/ai-visibility-checker"]],
  [t("llms.txt generator", "Generator llms.txt", "Генератор llms.txt"), ["path:/tools/llms-txt-generator"]],
];
const MARKETS = {
  en: [
    ["United States", ["seo-for-us-market"]], ["United Kingdom", ["seo-for-uk-market"]], ["Germany", ["seo-for-german-market"]],
    ["France", ["seo-for-french-market"]], ["Switzerland", ["seo-for-swiss-market"]], ["Netherlands", ["seo-for-dutch-market"]],
    ["Cyprus", ["web-development-cyprus"]], ["Warsaw", ["web-development-warsaw"]],
  ],
  pl: [
    ["Rynek niemiecki", ["seo-for-german-market"]], ["Rynek brytyjski", ["seo-for-uk-market"]], ["Rynek amerykański", ["seo-for-us-market"]],
    ["Rynek francuski", ["seo-for-french-market"]], ["Rynek szwajcarski", ["seo-for-swiss-market"]], ["Rynek holenderski", ["seo-for-dutch-market"]],
  ],
  ru: [
    ["Кипр", ["web-development-cyprus"]], ["ОАЭ", ["website-development-uae"]], ["Испания", ["website-development-spain"]],
    ["Португалия", ["website-development-portugal"]], ["Грузия", ["website-development-georgia"]], ["Черногория", ["website-development-montenegro"]],
    ["Германия", ["seo-for-german-market"]], ["Франция", ["seo-for-french-market"]], ["Швейцария", ["seo-for-swiss-market"]],
    ["США", ["seo-for-us-market"]], ["Великобритания", ["seo-for-uk-market"]],
    ["Варшава", ["ru:prodvizhenie-saitov-varshava"], "сайты", ["web-development-warsaw"]],
  ],
};
const CITIES = [
  ["Warszawa", "warszawa"], ["Kraków", "krakow"], ["Wrocław", "wroclaw"], ["Poznań", "poznan"], ["Gdańsk", "gdansk"], ["Łódź", "lodz"],
  ["Katowice", "katowice"], ["Szczecin", "szczecin"], ["Bydgoszcz", "bydgoszcz"], ["Lublin", "lublin"], ["Toruń", "torun"],
  ["Rzeszów", "rzeszow"], ["Białystok", "bialystok"], ["Opole", "opole"], ["Częstochowa", "czestochowa"], ["Radom", "radom"],
];

// --------------------------------------------------------------- industries --
// [labels, website candidates, SEO candidates]
const SECTORS = [
  { title: t("Health and medicine", "Medycyna i zdrowie", "Медицина и здоровье"), icon: "med", items: [
    [t("Dental clinics", "Gabinety stomatologiczne", "Стоматологии"), ["dental-website-design", "dental-clinic-website"], ["dentist-seo"]],
    [t("Medical practices", "Lekarze i przychodnie", "Клиники и врачи"), ["medical-website-design"], ["medical-seo", "healthcare-seo"]],
    [t("Psychologists and therapists", "Psycholodzy i terapeuci", "Психологи и терапевты"), ["website-for-psychologists-therapists"], ["seo-for-therapists"]],
    [t("Med spas", "Medycyna estetyczna", "Косметология"), ["med-spa-website-design"], ["med-spa-seo"]],
    [t("Plastic surgeons", "Chirurdzy plastyczni", "Пластические хирурги"), ["plastic-surgeon-website-design"], ["seo-for-plastic-surgeons"]],
    [t("Dermatologists", "Dermatolodzy", "Дерматологи"), ["dermatology-website-design"], ["seo-for-dermatologists"]],
    [t("Chiropractors", "Fizjoterapeuci", "Остеопаты"), ["chiropractor-website-design"], ["seo-for-chiropractors"]],
    [t("Orthodontists", "Ortodonci", "Ортодонты"), ["orthodontist-website-design"], ["seo-for-orthodontists"]],
    [t("Optometrists", "Salony optyczne", "Салоны оптики"), ["optometrist-website-design"], ["optometry-seo"]],
    [t("Veterinary clinics", "Kliniki weterynaryjne", "Ветклиники"), ["veterinary-website-design", "veterinary-clinic-website"], ["veterinary-seo"]],
  ] },
  { title: t("Law, finance and real estate", "Prawo, finanse, nieruchomości", "Право, финансы, недвижимость"), icon: "law", items: [
    [t("Law firms", "Kancelarie prawne", "Юристы и адвокаты"), ["law-firm-website-design", "lawyer-website-development"], ["seo-for-law-firms"]],
    [t("Realtors", "Agenci nieruchomości", "Риелторы"), ["realtor-website-design"], ["seo-for-realtors"]],
    [t("Real estate agencies", "Biura nieruchomości", "Агентства недвижимости"), ["real-estate-agency-website"], ["seo-for-real-estate"]],
    [t("Property developers", "Deweloperzy", "Застройщики"), ["property-developer-website"], ["seo-for-real-estate-developers"]],
    [t("Financial advisors", "Doradcy finansowi", "Финансовые консультанты"), ["financial-advisor-website-design"], ["financial-advisor-seo"]],
    [t("Insurance agencies", "Agenci ubezpieczeniowi", "Страховые агенты"), ["insurance-agency-website-design"], ["insurance-agency-seo"]],
    [t("Mortgage brokers", "Pośrednicy kredytowi", "Ипотечные брокеры"), ["mortgage-broker-website-design"], ["mortgage-broker-seo"]],
    [t("Accounting firms", "Biura rachunkowe", "Бухгалтерские фирмы"), ["accounting-firm-website"], []],
  ] },
  { title: t("Hotels, food and travel", "Hotele, gastronomia, turystyka", "Отели, еда, туризм"), icon: "hotel", items: [
    [t("Hotels", "Hotele", "Отели"), ["hotel-website-design", "hotel-website"], ["hotel-seo"]],
    [t("Restaurants", "Restauracje", "Рестораны"), ["restaurant-website-design", "restaurant-website"], ["restaurant-seo"]],
    [t("Cafes", "Kawiarnie", "Кафе"), ["cafe-website"], ["cafe-seo"]],
    [t("Bakeries", "Piekarnie", "Пекарни"), ["bakery-website-design"], ["bakery-seo"]],
    [t("Catering", "Catering", "Кейтеринг"), ["catering-website-design"], ["catering-seo"]],
    [t("Vacation rentals", "Apartamenty na wynajem", "Апартаменты посуточно"), ["vacation-rental-website-design"], []],
    [t("Bed and breakfasts", "Pensjonaty", "Гостевые дома"), ["bed-and-breakfast-website-design"], []],
    [t("Travel agencies", "Biura podróży", "Турагентства"), ["travel-agency-website"], ["seo-for-tour-operators"]],
    [t("Wineries", "Winnice", "Винодельни"), ["winery-website-design"], ["winery-seo"]],
    [t("Farms", "Gospodarstwa", "Фермы"), ["farm-website-design"], []],
  ] },
  { title: t("Construction and home services", "Budownictwo i dom", "Стройка и услуги для дома"), icon: "build", items: [
    [t("Construction companies", "Firmy budowlane", "Строительные компании"), ["construction-website-design", "construction-company-website"], ["seo-for-construction-companies"]],
    [t("Contractors", "", "Ремонт квартир"), ["contractor-website-design", "website-for-contractors"], ["seo-for-contractors"]],
    [t("Roofing", "", ""), ["roofing-website-design"], ["roofing-seo"]],
    [t("HVAC", "", ""), ["hvac-website-design"], ["hvac-seo"]],
    [t("Plumbers", "", ""), ["plumbing-website-design"], ["seo-for-plumbers"]],
    [t("Electricians", "", ""), ["electrician-website-design"], ["seo-for-electricians"]],
    [t("Home builders", "Budowa domów", "Строительство домов"), ["home-builder-website-design"], ["seo-for-home-builders"]],
    [t("Interior designers", "Projektanci wnętrz", "Дизайнеры интерьера"), ["interior-designer-website-design"], ["seo-for-interior-designers"]],
    [t("Carpenters", "Stolarze i meble na wymiar", "Столярные мастерские"), ["carpentry-website-design"], []],
    [t("Handyman services", "Złota rączka", "Мастер на час"), ["handyman-website-design"], []],
    [t("Cleaning companies", "Firmy sprzątające", "Клининговые компании"), ["cleaning-company-website"], []],
    [t("Solar installers", "Fotowoltaika", "Солнечные панели"), [], ["solar-seo"]],
    [t("Moving companies", "Firmy przeprowadzkowe", "Переезды"), [], ["seo-for-moving-companies"]],
  ] },
  { title: t("Business and tech", "Firmy i technologie", "Бизнес и технологии"), icon: "biz", items: [
    [t("Small business", "Małe firmy", "Малый бизнес"), ["small-business-website-design"], ["seo-services-for-small-business"]],
    [t("Startups", "Startupy", "Стартапы"), ["startup-website-design", "startup-website"], ["seo-for-startups"]],
    [t("SaaS companies", "Firmy SaaS", "SaaS"), ["saas-website-design"], ["saas-seo"]],
    [t("B2B companies", "Firmy B2B", "B2B-компании"), ["b2b-website-design"], ["b2b-seo"]],
    [t("IT companies", "Firmy IT", "IT-компании"), ["it-company-website-design"], ["seo-for-it-companies"]],
    [t("Manufacturers", "Producenci", "Производители"), ["manufacturing-website-design", "manufacturing-company-website"], ["manufacturing-seo"]],
    [t("Lingerie brands", "Producenci bielizny", "Производители белья"), ["website-development-for-lingerie-manufacturers"], ["seo-for-lingerie-manufacturers"]],
    [t("Recruitment agencies", "Agencje pracy", "Кадровые агентства"), ["recruitment-agency-website"], ["seo-for-recruitment-agencies"]],
    [t("Nonprofits", "Fundacje", "НКО и фонды"), ["nonprofit-website-design"], ["nonprofit-seo"]],
    [t("Logistics companies", "Firmy transportowe", "Транспортные компании"), ["logistics-company-website"], []],
  ] },
  { title: t("Beauty, sport and creative", "Uroda, sport, twórczość", "Красота, спорт, творчество"), icon: "art", items: [
    [t("Beauty salons", "Salony kosmetyczne", "Салоны красоты"), ["website-development-for-beauty-professionals", "beauty-salon-website"], ["seo-for-beauty-salons"]],
    [t("Hair salons", "Salony fryzjerskie", "Парикмахерские"), ["hair-salon-website-design"], []],
    [t("Spas", "Spa", "Спа"), ["spa-website-design"], []],
    [t("Fitness studios and gyms", "Studia fitness i siłownie", "Фитнес-студии и спортзалы"), ["fitness-studio-website"], ["gym-seo"]],
    [t("Personal trainers", "Trenerzy personalni", "Фитнес-тренеры"), ["personal-trainer-website-design"], []],
    [t("Photographers", "Fotografowie", "Фотографы"), ["photographer-website"], ["pl:pozycjonowanie-strony-fotografa"]],
    [t("Artists", "Artyści", "Художники"), ["artist-website-design"], []],
    [t("Musicians and bands", "Zespoły muzyczne", "Музыканты и группы"), ["band-website-design"], []],
    [t("Authors", "Pisarze", "Писатели"), ["author-website-design"], []],
    [t("Life coaches", "Coachowie", "Коучи"), ["life-coach-website-design"], []],
    [t("Makeup artists", "Wizażystki", "Визажисты"), ["makeup-artist-website-design"], []],
    [t("Tattoo studios", "Studia tatuażu", "Тату-салоны"), ["tattoo-website-design"], []],
    [t("Auto repair shops", "Warsztaty samochodowe", "Автосервисы"), ["garage-and-auto-repair-website"], ["seo-for-auto-repair-shop"]],
    [t("Car dealers", "Komisy i salony samochodowe", "Автосалоны"), ["car-dealer-website-design"], ["car-dealer-seo"]],
  ] },
];

// Footer long tail — pages not in the header. Entries that resolve to a link the
// header already carries are dropped automatically.
const MORE_WEB = [
  [t("Architecture studios", "Biura architektoniczne", "Архитектурные бюро"), ["architecture-website-design", "architecture-studio-website"]],
  [t("Language schools", "Szkoły językowe", "Языковые школы"), ["language-school-website"]],
  [t("Pest control", "Zwalczanie szkodników", "Борьба с вредителями"), ["pest-control-website-design"]],
  [t("Pressure washing", "Mycie ciśnieniowe", "Мойка высоким давлением"), ["pressure-washing-website-design"]],
  [t("Landscaping", "", ""), ["landscaping-website-design"]],
  [t("Lawn care", "", ""), ["lawn-care-website"]],
  [t("Florists", "Kwiaciarnie", "Цветочные магазины"), ["florist-website-design"]],
  [t("Food trucks", "Food trucki", "Фудтраки"), ["food-truck-website-design"]],
  [t("Auto detailing", "Detailing samochodowy", "Детейлинг"), ["auto-detailing-website-design"]],
  [t("Charities", "", ""), ["charity-website-design"]],
  [t("Senior living", "Domy opieki", "Пансионаты для пожилых"), ["senior-living-website-design"]],
  [t("Daycares and preschools", "Przedszkola i żłobki", "Детские сады"), ["daycare-website-design"]],
  [t("Cafe website design", "", ""), ["cafe-website-design"]],
  [t("Restaurant websites", "", "Сайт для ресторана"), ["restaurant-website", "restaurant-website-design"]],
  [t("Hotel websites", "", ""), ["hotel-website"]],
  [t("Dental clinic websites", "", ""), ["dental-clinic-website"]],
  [t("Veterinary clinic websites", "", ""), ["veterinary-clinic-website"]],
  [t("Lawyer websites", "", ""), ["lawyer-website-development"]],
  [t("Construction company websites", "", "Сайт строительной компании"), ["construction-company-website"]],
  [t("Websites for contractors", "", ""), ["website-for-contractors"]],
  [t("Websites for plumbers", "", ""), ["website-for-plumbers"]],
  [t("Websites for electricians", "", ""), ["website-for-electricians"]],
  [t("Roofing websites", "", ""), ["roofing-websites"]],
  [t("HVAC websites", "", ""), ["hvac-websites"]],
  [t("Startup websites", "", ""), ["startup-website"]],
  [t("Manufacturing company websites", "", ""), ["manufacturing-company-website"]],
];
const MORE_SEO = [
  [t("Locksmiths", "Ślusarze", "Вскрытие замков"), ["locksmith-seo"]],
  [t("Junk removal", "Wywóz śmieci", "Вывоз мусора"), ["junk-removal-seo"]],
  [t("Carpet cleaning", "Pranie dywanów", "Химчистка ковров"), ["carpet-cleaning-seo"]],
  [t("Flooring companies", "Firmy posadzkarskie", "Напольные покрытия"), ["seo-for-flooring-companies"]],
  [t("Tree service", "Wycinka drzew", "Спил деревьев"), ["tree-service-seo"]],
  [t("Garage doors", "Bramy garażowe", "Гаражные ворота"), ["garage-door-seo"]],
  [t("Appliance repair", "Naprawa AGD", "Ремонт техники"), ["appliance-repair-seo"]],
  [t("Water damage restoration", "Osuszanie po zalaniu", "Последствия затопления"), ["restoration-seo"]],
  [t("Home inspectors", "Inspektorzy budowlani", "Технадзор"), ["seo-for-home-inspectors"]],
  [t("Pest control", "Zwalczanie szkodników", "Борьба с вредителями"), ["pest-control-seo"]],
  [t("Landscaping", "", ""), ["landscaping-seo"]],
  [t("Painting contractors", "", ""), ["seo-for-painting-contractors"]],
  [t("Senior living", "Domy opieki", "Пансионаты для пожилых"), ["senior-living-seo"]],
  [t("Jewelry stores", "Sklepy jubilerskie", "Ювелирные магазины"), ["jewelry-store-seo"]],
  [t("Florists", "Kwiaciarnie", "Цветочные магазины"), ["florist-seo"]],
  [t("Car rental", "Wypożyczalnie samochodów", "Прокат автомобилей"), ["car-rental-seo"]],
  [t("Architects", "Architekci", "Архитекторы"), ["seo-for-architects"]],
  [t("Local SEO for contractors", "", ""), ["local-seo-for-contractors"]],
  [t("Local SEO for plumbers", "", ""), ["local-seo-for-plumbers"]],
  [t("Local SEO for dentists", "", ""), ["local-seo-for-dentists"]],
  [t("Local SEO for lawyers", "", ""), ["local-seo-for-lawyers"]],
  [t("Personal injury SEO", "", ""), ["personal-injury-seo"]],
  [t("SEO for doctors", "", ""), ["seo-for-doctors"]],
  [t("Local SEO for small business", "", ""), ["local-seo-for-small-business"]],
  [t("", "", "Продвижение сайта адвоката"), ["ru:prodvizhenie-saita-advokata"]],
];
const WARSAW_NICHES = {
  pl: [
    ["Firmy budowlane", "pozycjonowanie-strony-firmy-budowlanej-warszawa"], ["Kancelarie prawne", "pozycjonowanie-strony-kancelarii-prawnej-warszawa"],
    ["Przychodnie", "pozycjonowanie-strony-przychodni-warszawa"], ["Restauracje", "pozycjonowanie-strony-restauracji-warszawa"],
    ["Salony kosmetyczne", "pozycjonowanie-strony-salonu-kosmetycznego-warszawa"], ["Firmy sprzątające", "pozycjonowanie-strony-firmy-sprzatajacej-warszawa"],
    ["Gabinety stomatologiczne", "pozycjonowanie-strony-gabinetu-stomatologicznego-warszawa"], ["Warsztaty samochodowe", "pozycjonowanie-strony-warsztatu-samochodowego-warszawa"],
  ],
  ru: [
    ["Разработка сайтов в Варшаве", "razrabotka-saitov-varshava"], ["Строительные компании", "prodvizhenie-saita-stroitelnoy-kompanii-varshava"],
    ["Юристы", "prodvizhenie-saita-yurista-varshava"], ["Медицинские клиники", "prodvizhenie-saita-medicinskoy-kliniki-varshava"],
    ["Рестораны", "prodvizhenie-saita-restorana-varshava"], ["Салоны красоты", "prodvizhenie-saita-salona-krasoty-varshava"],
    ["Клининг", "prodvizhenie-saita-kliningovoy-kompanii-varshava"], ["Стоматологии", "prodvizhenie-saita-stomatologii-varshava"],
    ["Автосервисы", "prodvizhenie-saita-avtoservisa-varshava"],
  ],
};
const MORE_MARKETS = [
  [t("Italy", "Rynek włoski", "Италия"), ["seo-for-italian-market"]],
  [t("Ireland", "Rynek irlandzki", "Ирландия"), ["seo-for-irish-market"]],
  [t("Australia", "Rynek australijski", "Австралия"), ["seo-for-australian-market"]],
  [t("Baltic states", "Rynki bałtyckie", "Страны Балтии"), ["seo-for-baltic-markets"]],
  [t("", "", "Нидерланды"), ["seo-for-dutch-market"]],
  [t("Spain", "", ""), ["website-development-spain"]],
  [t("UAE", "", ""), ["website-development-uae"]],
  [t("Portugal", "", ""), ["website-development-portugal"]],
  [t("Georgia", "", ""), ["website-development-georgia"]],
  [t("Montenegro", "", ""), ["website-development-montenegro"]],
  [t("Thailand", "", "Таиланд"), ["website-development-thailand"]],
  [t("Real estate SEO in Cyprus", "SEO nieruchomości na Cyprze", "Продвижение недвижимости на Кипре"), ["seo-for-real-estate-in-cyprus"]],
  [t("Real estate SEO in Spain", "", "Продвижение недвижимости в Испании"), ["seo-for-real-estate-spain"]],
  [t("Real estate SEO in the UAE", "", "Продвижение недвижимости в ОАЭ"), ["seo-for-real-estate-uae"]],
  [t("Car exporters in Germany", "", "Автоэкспорт из Германии"), ["seo-for-car-exporters-germany"]],
  [t("Car exporters in the UAE", "", "Автоэкспорт из ОАЭ"), ["seo-for-car-exporters-uae"]],
  [t("Car business in Switzerland", "", "Автобизнес в Швейцарии"), ["seo-for-car-business-switzerland"]],
  [t("Consulting firms in Switzerland", "", "Консалтинг в Швейцарии"), ["seo-for-consulting-firms-switzerland"]],
  [t("Polish clinics for German patients", "Kliniki dla pacjentów z Niemiec", "Польские клиники для пациентов из Германии"), ["seo-for-polish-clinics-targeting-german-patients"]],
  [t("All markets", "Wszystkie rynki", "Все рынки"), ["slugs:en=locations|pl=lokalizacje|ru=lokacii"]],
];

const CASES = [
  [t("Property platform in Cyprus", "Serwis nieruchomości na Cyprze", "Платформа недвижимости на Кипре"),
   t("From zero to about 2,500 organic visits a month, 10% of them from AI assistants, no bought links",
     "Od zera do ok. 2500 wizyt z Google miesięcznie, 10% z asystentów AI, bez kupowania linków",
     "С нуля до ~2 500 визитов из поиска в месяц, 10% из ИИ-ассистентов, без покупки ссылок"),
   ["build-and-optimize-a-multilingual-real-estate-platform"]],
  [t("ScanM2, 3D laser scanning", "ScanM2, skanowanie 3D", "ScanM2, 3D-сканирование"),
   t("Organic traffic grew 29× after the rebuild, leads every week", "Ruch z wyszukiwarki wzrósł 29 razy po przebudowie", "Трафик из поиска вырос в 29 раз после переделки сайта"),
   ["architecture-website-rebuild-and-seo-scan"]],
  [t("Psychotherapist in Milan", "Psychoterapeuta w Mediolanie", "Психотерапевт в Милане"),
   t("468 posts moved with redirects, new pages quoted in ChatGPT answers", "468 wpisów przeniesionych z przekierowaniami, nowe strony w odpowiedziach ChatGPT", "468 статей перенесены с редиректами, новые страницы цитирует ChatGPT"),
   ["psychotherapist-website-milan"]],
  [t("Landi Room, beauty salon", "Landi Room, salon urody", "Landi Room, салон красоты"),
   t("100+ course sales from the first campaign, Stripe checkout", "Ponad 100 sprzedanych kursów z pierwszej kampanii", "Более 100 продаж курса с первой рекламной кампании"),
   ["e-commerce-landing-page-with-secured-video-access"]],
  [t("Education agency", "Agencja edukacyjna", "Образовательное агентство"),
   t("One site grew from one country to ten", "Jedna strona: z jednego kraju do dziesięciu", "Один сайт вырос с одной страны до десяти"),
   ["full-multilingual-website-development-and-seo-for-student-services"]],
  [t("Retail analytics consultant", "Konsultantka analityki handlu", "Консультант по аналитике ритейла"),
   t("153 pages in three languages, built to be quoted by AI", "153 strony w trzech językach, pisane pod cytowanie przez AI", "153 страницы на трёх языках, написаны для цитирования ИИ"),
   ["consultant-website-design-retail-analytics"]],
];

const TXT = {
  services: t("Services", "Usługi", "Услуги"),
  industries: t("Industries", "Branże", "Отрасли"),
  portfolio: t("Portfolio", "Portfolio", "Портфолио"),
  blog: t("Blog", "Blog", "Блог"),
  pricing: t("Pricing", "Cennik", "Цены"),
  about: t("About", "O mnie", "Обо мне"),
  colAi: t("AI search: GEO and AEO", "Wyszukiwanie AI: GEO i AEO", "ИИ-поиск: GEO и AEO"),
  colSeo: t("SEO", "Pozycjonowanie", "SEO-продвижение"),
  colWeb: t("Website development", "Tworzenie stron", "Разработка сайтов"),
  colTech: t("Technology and support", "Technologie i wsparcie", "Технологии и поддержка"),
  tools: t("Free tools", "Darmowe narzędzia", "Бесплатные инструменты"),
  colMarkets: t("Markets", "Rynki zagraniczne", "Страны и города"),
  colCities: t("", "Miasta", ""),
  cityTag: t("", "strony", ""),
  allMarkets: t("All markets", "Wszystkie rynki", "Все рынки"),
  allServices: t("All services", "Wszystkie usługi", "Все услуги"),
  priceNote: t("SEO from 250 €, websites from 700 €, design included", "SEO od 1000 zł, strony od 3000 zł, projekt w cenie", "SEO от 250 €, сайты от 700 €, дизайн входит в цену"),
  allInd: t("All industries: 160+ pages", "Wszystkie branże", "Все отрасли"),
  indNote: t("The industry name opens the website page, the SEO tag opens the SEO page", "Nazwa branży prowadzi do strony o stronie www, znacznik SEO — do pozycjonowania", "Название отрасли ведёт на страницу о сайте, метка SEO — на продвижение"),
  allCases: t("All projects", "Całe portfolio", "Всё портфолио"),
  studyKicker: t("Study", "Badanie", "Исследование"),
  studyTitle: t("What ChatGPT, Perplexity and Google AI Mode recommend", "Co polecają ChatGPT, Perplexity i Google AI Mode", "Кого рекомендуют ChatGPT, Perplexity и Google AI Mode"),
  studyText: t("47 buying questions, 141 answers analysed: which sites get named and why.", "47 pytań zakupowych, 141 odpowiedzi: które strony są wymieniane i dlaczego.", "47 вопросов перед покупкой, 141 ответ: какие сайты называют и почему."),
  studyLink: t("Read the study", "Czytaj badanie", "Читать исследование"),
  aboutMe: t("About me", "O mnie", "Обо мне"),
  contacts: t("Contacts", "Kontakt", "Контакты"),
  aiStudy: t("Study: what AI assistants answer", "Badanie: co odpowiadają asystenci AI", "Исследование ответов ИИ-ассистентов"),
  googleProfile: t("Google Business Profile", "Profil w Google", "Профиль в Google"),
  privacy: t("Privacy policy", "Polityka prywatności", "Политика конфиденциальности"),
  fServices: t("Services", "Usługi", "Услуги"),
  fAi: t("AI search", "Wyszukiwanie AI", "ИИ-поиск"),
  fMoreWeb: t("More websites by industry", "Kolejne branże: strony", "Ещё отрасли: сайты"),
  fMoreSeo: t("More SEO by industry", "Kolejne branże: SEO", "Ещё отрасли: SEO"),
  fCitiesSeo: t("", "Pozycjonowanie w miastach", ""),
  fCitiesWeb: t("", "Tworzenie stron w miastach", ""),
  fWarsaw: t("", "Warszawa: SEO dla branż", "Варшава: сайты и продвижение"),
  fMarkets: t("Markets", "Rynki", "Ещё страны"),
  fResources: t("Resources", "Materiały", "Материалы"),
  fAbout: t("About", "O mnie", "Обо мне"),
  aboutText: t(
    "One specialist for web development, SEO and AI search. Based in Warsaw, working with clients worldwide in English, Polish and Russian.",
    "Jedna osoba od tworzenia stron, pozycjonowania i widoczności w AI. Warszawa, współpraca z firmami z całej Polski i z zagranicy.",
    "Один специалист по разработке сайтов, SEO и видимости в ИИ-поиске. Варшава, работаю с компаниями по всему миру на русском, английском и польском.",
  ),
  cta: t("Discuss a project", "Omówmy projekt", "Обсудить проект"),
};

// ------------------------------------------------------------------ resolve --

async function load() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap ${res.status} from ${BASE} — is the dev server running?`);
  const xml = await res.text();
  const paths = [...xml.matchAll(/<loc>https:\/\/www\.bandziuk\.com([^<]*)<\/loc>/g)].map((m) => m[1] || "/");

  const docs = await client.fetch(
    `*[_type in ["singlepage", "portfolio", "blog"] && defined(language) && !(_id in path("drafts.**"))]{_id, language, slug}`,
  );
  // slug is a localizedSlug object ({en: {current}, pl: …}); inside a projection
  // `slug[language]` would look up slug.language, so the pick happens here.
  for (const d of docs) d.slug = d.slug?.[d.language]?.current;
  const meta = await client.fetch(`*[_type == "translation.metadata"]{"t": translations[]{"lang": _key, "id": value._ref}}`);
  const bySlug = new Map(docs.map((d) => [`${d.language}:${d.slug}`, d]));
  const byId = new Map(docs.map((d) => [d._id, d]));
  const group = new Map();
  for (const m of meta) for (const x of m.t || []) group.set(x.id, m.t);
  return { paths, bySlug, byId, group };
}

function makeResolver({ paths, bySlug, byId, group }) {
  const misses = new Set();
  const pathFor = (lang, slug) => {
    const pre = lang === "en" ? "" : `/${lang}`;
    return paths.find((p) => {
      if (lang === "en" ? p.startsWith("/pl/") || p.startsWith("/ru/") || p === "/pl" || p === "/ru" : !(p === pre || p.startsWith(pre + "/"))) return false;
      return p.split("/").pop() === slug;
    });
  };
  // one candidate → path in `lang` or null
  const one = (lang, cand) => {
    if (cand.startsWith("path:")) {
      const p = (lang === "en" ? "" : `/${lang}`) + cand.slice(5);
      return paths.includes(p) ? p : null;
    }
    // "slugs:en=about|pl=o-mnie|ru=obo-mne" — fixed pages named per language,
    // found in the sitemap by their last path segment.
    if (cand.startsWith("slugs:")) {
      const m = Object.fromEntries(cand.slice(6).split("|").map((x) => x.split("=")));
      if (!m[lang]) return null;
      const p = pathFor(lang, m[lang]);
      if (!p) misses.add(`${lang}:${m[lang]} (not in sitemap)`);
      return p || null;
    }
    const [src, slug] = cand.includes(":") ? cand.split(":") : ["en", cand];
    const doc = bySlug.get(`${src}:${slug}`);
    if (!doc) { misses.add(`${cand} (no ${src} document)`); return null; }
    let target = src === lang ? doc : null;
    if (!target) {
      const t = (group.get(doc._id) || []).find((x) => x.lang === lang);
      target = t && byId.get(t.id);
    }
    if (!target?.slug) return null;
    const p = pathFor(lang, target.slug);
    if (!p) misses.add(`${lang}:${target.slug} (not in sitemap)`);
    return p || null;
  };
  return { misses, first: (lang, cands) => { for (const c of cands || []) { const p = one(lang, c); if (p) return p; } return null; } };
}

// ------------------------------------------------------------------- build --

function build(lang, r) {
  const L = (o) => o[lang];
  const used = new Set();
  const link = (label, cands, extraLabel, extraCands) => {
    if (!label) return null;
    const href = r.first(lang, cands);
    if (!href) return null;
    used.add(href);
    const x = { _key: key(), _type: "megaLink", label, link: href };
    const extra = extraCands && r.first(lang, extraCands);
    if (extraLabel && extra && extra !== href) { x.extraLabel = extraLabel; x.extraLink = extra; used.add(extra); }
    return x;
  };
  const list = (rows) => rows.map(([labels, cands]) => link(L(labels), cands)).filter(Boolean);
  const col = (title, icon, links, extra = {}) => (links.length ? { _key: key(), _type: "megaColumn", title, icon, links, ...extra } : null);

  // Services
  const markets = (MARKETS[lang] || []).map(([label, cands, tag, tagCands]) => link(label, cands, tag, tagCands)).filter(Boolean);
  const allMarkets = link(L(TXT.allMarkets), ["slugs:en=locations|pl=lokalizacje|ru=lokacii"]);
  const cities = lang === "pl"
    ? CITIES.map(([name, s]) => link(name, [`pl:pozycjonowanie-stron-${s}`], L(TXT.cityTag), [`pl:tworzenie-stron-internetowych-${s}`])).filter(Boolean)
    : [];
  const servicesCols = [
    col(L(TXT.colAi), "ai", list(AI)),
    col(L(TXT.colSeo), "seo", list(SEO)),
    col(L(TXT.colWeb), "web", list(WEB)),
    col(L(TXT.colTech), "tech", list(TECH), { subTitle: L(TXT.tools), subLinks: list(TOOLS) }),
    col(L(TXT.colMarkets), "globe", [...markets, ...(allMarkets ? [allMarkets] : [])]),
    lang === "pl" ? col(L(TXT.colCities), "pin", cities) : null,
  ].filter(Boolean);

  // Industries
  const industryCols = SECTORS.map((s) => {
    const links = s.items.map(([labels, web, seo]) => {
      const label = L(labels);
      if (!label) return null;
      const w = r.first(lang, web);
      const se = r.first(lang, seo);
      if (!w && !se) return null;
      const x = { _key: key(), _type: "megaLink", label, link: w || se };
      used.add(x.link);
      if (w && se) { x.extraLabel = "SEO"; x.extraLink = se; used.add(se); }
      return x;
    }).filter(Boolean);
    return col(L(s.title), s.icon, links);
  }).filter(Boolean);

  const hub = r.first(lang, ["slugs:en=services|pl=oferty|ru=uslugi"]);
  const pricing = r.first(lang, ["slugs:en=pricing|pl=cennik|ru=ceny"]);
  const portfolioHub = r.first(lang, ["path:/portfolio"]);
  const blogHub = r.first(lang, ["path:/blog"]);
  const study = r.first(lang, ["slugs:en=ai-assistant-recommendations-study|pl=pozycjonowanie-w-ai-badanie|ru=issledovanie-otvetov-ii-assistentov"]);

  const cases = CASES.map(([title, result, cands]) => {
    const href = r.first(lang, cands);
    return href ? { _key: key(), _type: "megaCase", title: L(title), result: L(result), link: href } : null;
  }).filter(Boolean);

  const strip = (rows) => rows.filter(([, href]) => href).map(([label, href]) => ({ _key: key(), _type: "megaLink", label, link: href }));

  const megaMenu = [
    { _key: key(), _type: "megaItem", label: L(TXT.services), kind: "mega", columns: servicesCols,
      footerLinks: strip([[L(TXT.allServices), hub], [L(TXT.pricing), pricing]]), footerNote: L(TXT.priceNote) },
    { _key: key(), _type: "megaItem", label: L(TXT.industries), kind: "mega", columns: industryCols,
      footerLinks: strip([[L(TXT.allInd), hub]]), footerNote: L(TXT.indNote) },
    { _key: key(), _type: "megaItem", label: L(TXT.portfolio), kind: "cases", cases,
      promo: study ? { kicker: L(TXT.studyKicker), title: L(TXT.studyTitle), text: L(TXT.studyText), linkLabel: L(TXT.studyLink), link: study } : undefined,
      footerLinks: strip([[L(TXT.allCases), portfolioHub]]) },
    blogHub && { _key: key(), _type: "megaItem", label: L(TXT.blog), kind: "link", link: blogHub },
    pricing && { _key: key(), _type: "megaItem", label: L(TXT.pricing), kind: "link", link: pricing },
    { _key: key(), _type: "megaItem", label: L(TXT.about), kind: "list", columns: [col(L(TXT.about), undefined, [
      link(L(TXT.aboutMe), ["slugs:en=about|pl=o-mnie|ru=obo-mne"]), link(L(TXT.contacts), ["slugs:en=contacts|pl=kontakt|ru=kontakty"]), link(L(TXT.aiStudy), ["slugs:en=ai-assistant-recommendations-study|pl=pozycjonowanie-w-ai-badanie|ru=issledovanie-otvetov-ii-assistentov"]),
      { _key: key(), _type: "megaLink", label: L(TXT.googleProfile), link: GOOGLE_PROFILE },
    ].filter(Boolean))].filter(Boolean) },
  ].filter(Boolean);

  // Footer
  const fl = (label, href) => (label && href ? { _key: key(), label, link: href } : null);
  const fcol = (title, links) => {
    const l = links.filter(Boolean);
    return title && l.length ? { _key: key(), title, links: l } : null;
  };
  const fromRows = (rows, skipUsed) => rows.map(([labels, cands]) => {
    const href = r.first(lang, cands);
    if (!href || (skipUsed && used.has(href))) return null;
    return fl(L(labels), href);
  });
  // Order (owner, 28.10.2026): services, AI search, resources, about first;
  // cities / Warsaw / markets next; the industry long tail last.
  const footerColumns = [
    fcol(L(TXT.fServices), [
      ...fromRows([
        [t("Website development", "Tworzenie stron internetowych", "Разработка сайтов"), ["website-development"]],
        [t("Landing pages", "Landing page", "Лендинги"), ["landing-page-development"]],
        [t("", "Strona wizytówka", "Сайт-визитка"), ["pl:strona-wizytowka"]],
        [t("", "", "Продвижение сайта"), ["ru:prodvizhenie-saita"]],
        [t("SEO strategy", "Strategia SEO", "SEO-стратегия"), ["seo-optimization-and-strategy"]],
        [t("SEO audit", "Audyt SEO", "SEO-аудит"), ["seo-audit"]],
        [t("Technical SEO", "SEO techniczne", "Техническое SEO"), ["technical-seo-services"]],
        [t("Local SEO", "Pozycjonowanie lokalne", "Локальное продвижение"), ["local-seo-services"]],
        [t("E-commerce SEO", "Pozycjonowanie sklepów", "Продвижение интернет-магазина"), ["ecommerce-seo-services"]],
        [t("Website redesign", "Przebudowa strony", "Редизайн сайта"), ["website-redesign-services"]],
        [t("Website maintenance", "Utrzymanie strony", "Поддержка сайта"), ["website-maintenance-services"]],
      ]),
      fl(L(TXT.allServices), hub),
    ]),
    fcol(L(TXT.fAi), fromRows([
      [t("GEO services", "Optymalizacja GEO", "GEO-оптимизация"), ["ai-ready-seo-and-geo-optimization"]],
      [t("AEO services", "Pozycjonowanie w AI i ChatGPT", ""), ["answer-engine-optimization-services"]],
      [t("ChatGPT SEO", "Pozycjonowanie w ChatGPT", "Продвижение в ChatGPT"), ["chatgpt-seo-services"]],
      [t("AI visibility audit", "Audyt widoczności w AI", "Аудит видимости в ИИ"), ["ai-visibility-audit"]],
      [t("AI brand monitoring", "Monitoring marki w AI", "Мониторинг бренда в ИИ"), ["ai-brand-monitoring"]],
      [t("AI SEO consultant", "Ekspert AI SEO", "AI SEO-консультант"), ["ai-seo-consultant"]],
    ])),
    fcol(L(TXT.fResources), [
      fl(L(TXT.blog), blogHub), fl(L(TXT.portfolio), portfolioHub), fl(L(TXT.pricing), pricing), fl(L(TXT.aiStudy), study),
      ...fromRows(TOOLS),
    ]),
    fcol(L(TXT.fAbout), [
      fl(L(TXT.aboutMe), r.first(lang, ["slugs:en=about|pl=o-mnie|ru=obo-mne"])), fl(L(TXT.contacts), r.first(lang, ["slugs:en=contacts|pl=kontakt|ru=kontakty"])),
      fl(L(TXT.privacy), r.first(lang, ["slugs:en=privacy-policy|pl=polityka-prywatnosci|ru=politika-konfidencialnosti"])), fl(L(TXT.googleProfile), GOOGLE_PROFILE),
    ]),
    lang === "pl" ? fcol(L(TXT.fCitiesSeo), CITIES.map(([name, s]) => fl(name, r.first("pl", [`pl:pozycjonowanie-stron-${s}`])))) : null,
    lang === "pl" ? fcol(L(TXT.fCitiesWeb), CITIES.map(([name, s]) => fl(name, r.first("pl", [`pl:tworzenie-stron-internetowych-${s}`])))) : null,
    WARSAW_NICHES[lang] ? fcol(L(TXT.fWarsaw), WARSAW_NICHES[lang].map(([label, s]) => fl(label, r.first(lang, [`${lang}:${s}`])))) : null,
    fcol(L(TXT.fMarkets), fromRows(MORE_MARKETS, true)),
    fcol(L(TXT.fMoreWeb), fromRows(MORE_WEB, true)),
    fcol(L(TXT.fMoreSeo), fromRows(MORE_SEO, true)),
  ].filter(Boolean);

  return { megaMenu, footerColumns };
}

// --------------------------------------------------------------------- main --

(async () => {
  const data = await load();
  console.log(`sitemap: ${data.paths.length} urls from ${BASE}; ${data.bySlug.size} documents\n`);
  const r = makeResolver(data);

  for (const lang of LANGS) {
    const { megaMenu, footerColumns } = build(lang, r);
    const count = (m) => m.reduce((n, i) => n + (i.columns || []).reduce((a, c) => a + c.links.length + (c.subLinks?.length || 0) + c.links.filter((l) => l.extraLink).length, 0) + (i.cases?.length || 0) + (i.link ? 1 : 0), 0);
    const fCount = footerColumns.reduce((n, c) => n + c.links.length, 0);
    console.log(`=== ${lang.toUpperCase()} — header ${count(megaMenu)} links, footer ${fCount} links`);
    for (const i of megaMenu) {
      console.log(`  ${i.label} [${i.kind}]${i.link ? "  " + i.link : ""}`);
      for (const c of i.columns || []) {
        console.log(`    ${c.title} (${c.links.length})`);
        for (const l of c.links) console.log(`      ${l.label.padEnd(36)} ${l.link}${l.extraLink ? `  [${l.extraLabel} ${l.extraLink}]` : ""}`);
        for (const l of c.subLinks || []) console.log(`      · ${l.label.padEnd(34)} ${l.link}`);
      }
      for (const c of i.cases || []) console.log(`    case: ${c.title}  ${c.link}`);
      if (i.promo) console.log(`    promo: ${i.promo.link}`);
      for (const l of i.footerLinks || []) console.log(`    → ${l.label}  ${l.link}`);
    }
    console.log("  [footer]");
    for (const c of footerColumns) console.log(`    ${c.title}: ${c.links.map((l) => l.label).join(" · ")}`);

    if (!DRY) {
      const headerId = await client.fetch("*[_type=='header' && language==$l && !(_id in path('drafts.**'))][0]._id", { l: lang });
      const footerId = await client.fetch("*[_type=='footer' && language==$l && !(_id in path('drafts.**'))][0]._id", { l: lang });
      if (!headerId || !footerId) throw new Error(`${lang}: header or footer document not found`);
      await client.patch(headerId).set({ megaMenu, phone: PHONE, whatsappNumber: WHATSAPP }).commit();
      await client.patch(footerId).set({
        footerColumns,
        aboutText: TXT.aboutText[lang],
        phone: PHONE,
        whatsappNumber: WHATSAPP,
        ctaLabel: TXT.cta[lang],
      }).commit();
      console.log(`  written: ${headerId}, ${footerId}`);
    }
    console.log("");
  }

  if (r.misses.size) {
    console.log("not resolved (no translation, no document or not in the sitemap):");
    [...r.misses].sort().forEach((m) => console.log("  " + m));
  }
  console.log(DRY ? "\nDry run — nothing was written." : "\nDone. Header and footer revalidate within 60 seconds.");
})().catch((e) => { console.error("\n" + (e.message || e)); process.exitCode = 1; });
