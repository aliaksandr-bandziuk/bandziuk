// scripts/dataforseo/pseo-intent.cjs
//
// Одно намерение или два? Проверка по пересечению выдачи.
//
// Зачем. Правило «разработка, дизайн и SEO — разные страницы» верно для
// покупателя, но решает Google: если по двум запросам в топ-10 стоят одни и те
// же адреса, поисковик видит одно намерение, и вторая страница будет отбирать
// позиции у первой. Пример: «web design for restaurants» (2 900) и «website for
// restaurants» (14 800), под второй уже есть /restaurant-website.
//
// Как читать результат (обычная практика, решение принимает человек):
//   4 и больше общих адресов в топ-10 — одно намерение, одна страница;
//   2–3 — пограничный случай, смотреть глазами, какие адреса общие;
//   0–1 — разные намерения, разные страницы.
//
// Выдача: en — США (2840), pl и ru — Польша (2616), как в pseo-serp.cjs.
// Цена: около $0.006 за запрос; одинаковые запросы в разных парах
// запрашиваются один раз.
//
//   node scripts/dataforseo/pseo-intent.cjs --dry-run
//   node scripts/dataforseo/pseo-intent.cjs

const fs = require("fs");
const path = require("path");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const DIR = path.resolve(__dirname, "../../research/pseo");
const DRY = process.argv.includes("--dry-run");

const LOC = {
  en: { location_code: 2840, language_code: "en" },
  pl: { location_code: 2616, language_code: "pl" },
  ru: { location_code: 2616, language_code: "ru" },
};

// [тема, язык, запрос новой страницы, запрос страницы, с которой она может конфликтовать]
const PAIR_SETS = {};
PAIR_SETS.restaurant = [
  ["1 дизайн ресторана", "en", "web design for restaurants", "website for restaurants"],
  ["1 дизайн ресторана", "en", "restaurant website design", "restaurant website"],
  ["1 дизайн ресторана", "pl", "projektowanie strony dla restauracji", "strona internetowa dla restauracji"],
  ["1 дизайн ресторана", "ru", "дизайн сайта для ресторана", "сайт для ресторана"],
  ["2 SEO ресторана", "en", "seo for restaurants", "website for restaurants"],
  ["2 SEO ресторана", "ru", "продвижение сайта ресторана", "сайт для ресторана"],
  ["3 дизайн стройка", "en", "web design for construction companies", "construction company website"],
  ["4 SEO стройка", "en", "seo for construction companies", "web design for construction companies"],
  ["4 SEO стройка", "ru", "продвижение сайта строительной компании", "сайт для строительной компании"],
  ["5 разработка стройка", "pl", "strona internetowa dla firmy budowlanej", "projektowanie strony dla firmy budowlanej"],
];

// 22.10.2026: food-service venues (research/pseo/page-core/food-venues.md).
// Merge or split, design vs development, and conflicts with restaurant pages.
PAIR_SETS.food = [
  ["кафе = кофейня?", "en", "cafe website", "coffee shop website"],
  ["кафе: дизайн vs разработка", "en", "cafe website design", "cafe website"],
  ["кафе vs ресторан", "en", "cafe website", "restaurant website"],
  ["пекарня: дизайн vs разработка", "en", "bakery website design", "bakery website"],
  ["пекарня vs кафе", "en", "bakery website", "cafe website"],
  ["кейтеринг: дизайн vs разработка", "en", "catering website design", "catering website"],
  ["кейтеринг: SEO vs разработка", "en", "catering seo", "catering website"],
  ["фудтрак: дизайн vs разработка", "en", "food truck website design", "food truck website"],
  ["пиццерия: это вообще про сайты?", "en", "pizza website", "restaurant website"],
  ["бар: это вообще про сайты?", "en", "bar website", "restaurant website"],
  ["кафе = кофейня?", "ru", "сайт кафе", "сайт кофейни"],
  ["кафе vs ресторан", "ru", "сайт кафе", "сайт для ресторана"],
  ["пекарня = кондитерская?", "ru", "сайт пекарни", "сайт кондитерской"],
  ["пиццерия vs ресторан", "ru", "сайт пиццерии", "сайт для ресторана"],
];

// 22.10.2026: construction — whose demand, and where development, design
// and SEO split (research/pseo/page-core/construction.md).
PAIR_SETS.construction = [
  ["стройка: дизайн vs разработка", "en", "construction website design", "construction company website"],
  ["стройка = подрядчик? (дизайн)", "en", "construction website design", "contractor website design"],
  ["стройка: SEO vs разработка", "en", "construction seo", "construction company website"],
  ["стройка = подрядчик? (SEO)", "en", "construction seo", "seo for contractors"],
  ["стройка: разработка vs дизайн", "pl", "strona internetowa dla firmy budowlanej", "projektowanie stron dla firm budowlanych"],
  ["стройка: разработка vs SEO", "pl", "strona internetowa dla firmy budowlanej", "pozycjonowanie firmy budowlanej"],
  ["стройка: разработка vs дизайн", "ru", "сайт строительной компании", "дизайн сайта строительной компании"],
  ["стройка: разработка vs SEO", "ru", "сайт строительной компании", "продвижение сайта строительной компании"],
];

// 22.10.2026: is a property developer page the same intent as a
// construction company page? And is «marketing firmy budowlanej» SEO intent?
PAIR_SETS.developer = [
  ["застройщик vs стройка", "en", "real estate developer website", "construction company website"],
  ["застройщик vs стройка (дизайн)", "en", "home builder website design", "construction website design"],
  ["застройщик vs стройка", "pl", "strona dla dewelopera", "strona internetowa dla firmy budowlanej"],
  ["маркетинг = SEO?", "pl", "marketing firmy budowlanej", "pozycjonowanie strony firmy budowlanej"],
  ["застройщик vs стройка", "ru", "сайт застройщика", "сайт для строительной компании"],
  ["застройщик vs стройка (SEO)", "ru", "продвижение сайта застройщика", "продвижение сайта строительной компании"],
];

// 23.10.2026: contractor topics 6–7 — what «contractor websites» is, and
// whether marketing-agency and local-SEO phrasing share the SEO page.
PAIR_SETS.contractors = [
  ["подрядчик: сайты = дизайн?", "en", "contractor websites", "contractor website design"],
  ["подрядчик vs стройка (разработка)", "en", "contractor websites", "construction company website"],
  ["general contractor = contractor?", "en", "general contractor website design", "contractor website design"],
  ["SEO = маркетинговое агентство?", "en", "seo for contractors", "contractor marketing agency"],
  ["локальное SEO = SEO?", "en", "local seo for contractors", "seo for contractors"],
];
// 23.10.2026: RU «ремонт квартир» — whose demand (owners or homeowners) and
// whether it belongs to the existing RU construction pages.
PAIR_SETS.renovation = [
  ["ремонт: чей спрос", "ru", "сайт по ремонту квартир", "ремонт квартир под ключ"],
  ["ремонт vs стройка (сайт)", "ru", "сайт по ремонту квартир", "сайт для строительной компании"],
  ["готовый сайт vs стройка", "ru", "купить сайт по ремонту квартир", "сайт для строительной компании"],
  ["готовый сайт vs сайт ремонта", "ru", "купить сайт по ремонту квартир", "сайт по ремонту квартир"],
];
// 23.10.2026: AI SEO as a service. Existing EN pages: GEO
// (/services/ai-ready-seo-and-geo-optimization), AEO
// (/services/answer-engine-optimization-services), AI search optimization
// (/services/ai-search-readiness). Gaps: «ai seo services / agency / company»,
// «geo vs seo», «what is GEO / AEO». Which page owns what, and whether
// «ai seo» means AI-search SEO or SEO done with AI tools.
PAIR_SETS["ai-services"] = [
  ["ai seo = GEO-страница?", "en", "ai seo services", "generative engine optimization services"],
  ["ai seo = AI search optimization?", "en", "ai seo services", "ai search optimization services"],
  ["ai seo: услуги vs агентство", "en", "ai seo services", "ai seo agency"],
  ["ai seo agency vs GEO agency", "en", "ai seo agency", "generative engine optimization agency"],
  ["llm seo = GEO?", "en", "llm seo services", "generative engine optimization services"],
  ["chatgpt seo agency = ai seo agency?", "en", "chatgpt seo agency", "ai seo agency"],
  ["GEO vs AEO (услуги)", "en", "generative engine optimization services", "answer engine optimization services"],
  ["статья: geo vs seo = что такое GEO?", "en", "geo vs seo", "what is generative engine optimization"],
  ["статья: что такое GEO = что такое AEO?", "en", "what is generative engine optimization", "what is answer engine optimization"],
  ["статья: geo vs seo = geo vs aeo?", "en", "geo vs seo", "geo vs aeo"],
  ["PL: seo ai = pozycjonowanie w ai?", "pl", "seo ai", "pozycjonowanie w ai"],
  ["PL: pozycjonowanie w ai = w chatgpt?", "pl", "pozycjonowanie w ai", "pozycjonowanie w chatgpt"],
];
// Follow-up: consultant vs agency (a sole trader should not pose as an
// agency), LLM vs ChatGPT wording, company vs services.
PAIR_SETS["ai-services-2"] = [
  ["consultant vs agency", "en", "ai seo consultant", "ai seo agency"],
  ["expert = consultant?", "en", "ai seo expert", "ai seo consultant"],
  ["consultant vs services", "en", "ai seo consultant", "ai seo services"],
  ["company = services?", "en", "ai seo company", "ai seo services"],
  ["llm seo vs llm seo services", "en", "llm seo", "llm seo services"],
  ["llm seo = chatgpt seo?", "en", "llm seo services", "chatgpt seo services"],
  ["chatgpt seo vs services", "en", "chatgpt seo", "chatgpt seo services"],
];
// Article «GEO vs SEO» (23.10.2026): one comparison article with AEO inside,
// or separate articles for the AEO comparisons and «is SEO dead».
PAIR_SETS["geo-article"] = [
  ["geo vs seo = seo vs geo?", "en", "geo vs seo", "seo vs geo"],
  ["geo vs seo = тройка?", "en", "geo vs seo", "seo vs aeo vs geo"],
  ["geo vs seo = seo vs aeo?", "en", "geo vs seo", "seo vs aeo"],
  ["seo vs aeo = geo vs aeo?", "en", "seo vs aeo", "geo vs aeo"],
  ["тройка = geo vs aeo?", "en", "seo vs aeo vs geo", "geo vs aeo"],
  ["geo vs seo = seo and geo?", "en", "geo vs seo", "seo and geo"],
  ["geo vs seo = is seo dead?", "en", "geo vs seo", "is seo dead"],
];

// Article «What is GEO» (24.10.2026): which phrases one definition article
// takes, and where it stops (GEO hub, «GEO vs SEO» article).
PAIR_SETS["what-is-geo"] = [
  ["what is geo = what is generative engine optimization?", "en", "what is geo", "what is generative engine optimization"],
  ["what is GEO = generative engine optimization?", "en", "what is generative engine optimization", "generative engine optimization"],
  ["generative engine optimization = … services?", "en", "generative engine optimization", "generative engine optimization services"],
  ["what is GEO = geo seo?", "en", "what is generative engine optimization", "geo seo"],
  ["what is GEO = what is geo in marketing?", "en", "what is generative engine optimization", "what is geo in marketing"],
  ["what is GEO = how does it work?", "en", "what is generative engine optimization", "how does generative engine optimization work"],
  ["what is GEO = strategy?", "en", "what is generative engine optimization", "generative engine optimization strategy"],
  ["what is GEO = geo vs seo?", "en", "what is generative engine optimization", "geo vs seo"],
  ["pl: geo co to = generative engine optimization?", "pl", "geo co to", "generative engine optimization"],
  ["ru: что такое geo = geo оптимизация?", "ru", "что такое geo", "geo оптимизация"],
];

// Article «What is AEO» (24.10.2026): which phrases one definition article
// takes, and where it stops (AEO service page, «What is GEO», «GEO vs SEO»).
PAIR_SETS["what-is-aeo"] = [
  ["what is aeo = what is answer engine optimization?", "en", "what is aeo", "what is answer engine optimization"],
  ["what is AEO = answer engine optimization?", "en", "what is answer engine optimization", "answer engine optimization"],
  ["answer engine optimization = … services?", "en", "answer engine optimization", "answer engine optimization services"],
  ["what is AEO = aeo seo?", "en", "what is answer engine optimization", "aeo seo"],
  ["what is AEO = what is geo? (cannibalization)", "en", "what is answer engine optimization", "what is generative engine optimization"],
  ["what is AEO = how to do it?", "en", "what is answer engine optimization", "how to do answer engine optimization"],
  ["what is AEO = strategy?", "en", "what is answer engine optimization", "answer engine optimization strategy"],
  ["pl: aeo co to = answer engine optimization?", "pl", "aeo co to", "answer engine optimization"],
  ["ru: что такое aeo = aeo оптимизация?", "ru", "что такое aeo", "aeo оптимизация"],
];

// Article «LLM SEO» (24.10.2026): one article or not, and where it stops — the
// LLM SEO service pages, «What is GEO», the ChatGPT SEO pages.
PAIR_SETS["llm-seo-article"] = [
  ["llm seo = llm seo services? (service page)", "en", "llm seo", "llm seo services"],
  ["llm seo = what is llm seo?", "en", "llm seo", "what is llm seo"],
  ["llm seo = llm optimization?", "en", "llm seo", "llm optimization"],
  ["llm seo = llmo?", "en", "llm seo", "llmo"],
  ["llm seo = generative engine optimization? (What is GEO)", "en", "llm seo", "generative engine optimization"],
  ["llm seo = seo for llms?", "en", "llm seo", "seo for llms"],
  ["llm seo = llm seo tools?", "en", "llm seo", "llm seo tools"],
  ["llm seo = chatgpt seo?", "en", "llm seo", "chatgpt seo"],
  ["pl: llm seo = optymalizacja pod llm?", "pl", "llm seo", "optymalizacja pod llm"],
  ["ru: llm seo = продвижение в нейросетях?", "ru", "llm seo", "продвижение в нейросетях"],
];

// Article «ChatGPT SEO» (24.10.2026): does the article take «chatgpt seo», or is
// that query about using ChatGPT for SEO; where it stops — the ChatGPT SEO
// service pages, the «get recommended by ChatGPT» article, «LLM SEO».
PAIR_SETS["chatgpt-seo-article"] = [
  ["chatgpt seo = chatgpt seo services? (service page)", "en", "chatgpt seo", "chatgpt seo services"],
  ["chatgpt seo = chatgpt for seo? (tool intent)", "en", "chatgpt seo", "chatgpt for seo"],
  ["chatgpt seo = how to rank in chatgpt?", "en", "chatgpt seo", "how to rank in chatgpt"],
  ["how to rank in chatgpt = how to get recommended by chatgpt? (existing article)", "en", "how to rank in chatgpt", "how to get recommended by chatgpt"],
  ["how to rank in chatgpt = how to show up in chatgpt?", "en", "how to rank in chatgpt", "how to show up in chatgpt"],
  ["chatgpt seo = llm seo?", "en", "chatgpt seo", "llm seo"],
  ["chatgpt seo = chatgpt search optimization?", "en", "chatgpt seo", "chatgpt search optimization"],
  ["pl: pozycjonowanie w chatgpt = jak pojawić się w chatgpt?", "pl", "pozycjonowanie w chatgpt", "jak pojawić się w chatgpt"],
  ["ru: продвижение в chatgpt = как попасть в рекомендации chatgpt?", "ru", "продвижение в chatgpt", "как попасть в рекомендации chatgpt"],
];

// Article on GEO / AEO / LLM SEO tools (29.10.2026), first in the blog queue.
// Three things to settle before writing: whether the tool phrasings are one
// article or several, whether «geo tools» means this subject at all or
// geography software, and whether the article would eat the service pages and
// the existing «what is GEO» and «LLM SEO» articles.
PAIR_SETS["geo-tools-article"] = [
  ["одна статья или две: GEO-инструменты = LLM SEO-инструменты?", "en", "generative engine optimization tools", "llm seo tools"],
  ["«geo tools» — про это или про геоданные?", "en", "geo tools", "generative engine optimization tools"],
  ["AEO-инструменты = GEO-инструменты?", "en", "aeo tools", "generative engine optimization tools"],
  ["инструменты видимости в ИИ = GEO-инструменты?", "en", "ai visibility tools", "generative engine optimization tools"],
  ["«ai seo tools» — инструменты ИИ для SEO, а не наоборот?", "en", "ai seo tools", "generative engine optimization tools"],
  ["мониторинг упоминаний = инструменты?", "en", "llm monitoring tools", "llm seo tools"],
  ["статья не съест ли статью «LLM SEO»?", "en", "llm seo tools", "llm seo"],
  ["статья не съест ли статью «what is GEO»?", "en", "generative engine optimization tools", "generative engine optimization"],
  ["статья не съест ли страницу услуги?", "en", "llm seo tools", "llm seo services"],
  ["pl: есть ли спрос на инструменты отдельно от самой темы?", "pl", "narzędzia do pozycjonowania w ai", "pozycjonowanie w chatgpt"],
  ["ru: есть ли спрос на инструменты отдельно от самой темы?", "ru", "инструменты для продвижения в ии", "продвижение в chatgpt"],
];

// Boundaries inside the tools cluster (29.10.2026). The first run proved the
// four term families are separate SERPs; the owner chose three articles, so
// these five pairs decide where each family ends — above all «ai search engine
// optimization tools» (1,900), the biggest phrase of the whole cluster, whose
// family is still unknown.
PAIR_SETS["geo-tools-cluster"] = [
  ["куда отнести 1900: к видимости в ИИ?", "en", "ai search engine optimization tools", "ai visibility tools"],
  ["куда отнести 1900: к GEO-инструментам?", "en", "ai search engine optimization tools", "generative engine optimization tools"],
  ["держится ли семейство видимости вместе?", "en", "ai visibility tools", "ai search visibility tools"],
  ["трекер ChatGPT — часть статьи про видимость?", "en", "chatgpt tracker", "ai visibility tools"],
  ["AEO-инструменты и LLM SEO-инструменты — вместе или врозь?", "en", "aeo tools", "llm seo tools"],
];

// Stage 2, group 1 (24.10.2026): trades. Whose demand «plumber website» is
// (owners or homeowners), whether design and development split as for
// contractors, one trades SEO page or one per trade, and whether trade SEO
// belongs to the existing /seo-for-contractors.
PAIR_SETS.trades = [
  ["сантехник: «plumber website» — чей спрос?", "en", "plumber website", "plumbing website design"],
  ["сантехник: сайт = дизайн?", "en", "website for plumbers", "plumbing website design"],
  ["электрик: «electrician website» — чей спрос?", "en", "electrician website", "electrician website design"],
  ["дизайн: сантехник = электрик?", "en", "plumbing website design", "electrician website design"],
  ["SEO: сантехник = электрик?", "en", "seo for plumbers", "seo for electricians"],
  ["SEO сантехника = SEO подрядчика?", "en", "seo for plumbers", "seo for contractors"],
  ["локальное SEO сантехника = SEO сантехника?", "en", "local seo for plumbers", "seo for plumbers"],
  ["HVAC SEO = SEO сантехника?", "en", "hvac seo", "seo for plumbers"],
  ["кровля SEO = SEO подрядчика?", "en", "roofing seo", "seo for contractors"],
  ["маляры SEO = SEO подрядчика?", "en", "seo for painting contractors", "seo for contractors"],
  ["ru: сайт для электрика — чей спрос?", "ru", "сайт для электрика", "сайт для строительной компании"],
];

// Stage 2, group 1b (24.10.2026): websites and design for roofers, HVAC,
// landscapers and painters — whose demand, design vs development, and whether
// they belong to the contractor or plumbing pages.
PAIR_SETS["trades-sites"] = [
  ["кровля: «roofing websites» — чей спрос?", "en", "roofing websites", "roofing website design"],
  ["кровля: сайт компании = дизайн?", "en", "roofing company website", "roofing website design"],
  ["кровля: дизайн = дизайн подрядчика?", "en", "roofing website design", "contractor website design"],
  ["HVAC: сайт = дизайн?", "en", "hvac websites", "hvac website design"],
  ["HVAC: дизайн = дизайн сантехника?", "en", "hvac website design", "plumbing website design"],
  ["HVAC: сайт компании — чей спрос?", "en", "hvac company website", "hvac website design"],
  ["ландшафт: дизайн сайта = сайт для газонов?", "en", "landscaping website design", "lawn care website"],
  ["маляры: сайт = дизайн подрядчика?", "en", "painting contractor website", "contractor website design"],
];

// Stage 2, group 2 (24.10.2026): dentists, doctors, clinics. Does «website for
// dentists» belong to the existing /dental-clinic-website; design vs
// development; dental vs medical; whose demand «website for doctors» is.
PAIR_SETS["dental-medical"] = [
  ["стоматология: сайт = существующая страница клиники?", "en", "website for dentists", "dental clinic website"],
  ["стоматология: сайт = дизайн?", "en", "website for dentists", "dental website design"],
  ["стоматология: SEO = локальное SEO?", "en", "dentist seo", "local seo for dentists"],
  ["стоматология: SEO = маркетинг?", "en", "dentist seo", "dental marketing"],
  ["врачи: «website for doctors» — чей спрос?", "en", "website for doctors", "medical website design"],
  ["врачи: SEO врача = медицинское SEO?", "en", "seo for doctors", "medical seo"],
  ["SEO: врачи = стоматологи?", "en", "seo for doctors", "dentist seo"],
  ["дизайн: медицина = стоматология?", "en", "medical website design", "dental website design"],
  ["pl: SEO стоматологии = Варшава?", "pl", "pozycjonowanie strony gabinetu stomatologicznego", "pozycjonowanie gabinetu stomatologicznego warszawa"],
  ["pl: сайт врача = сайт стоматолога?", "pl", "strona dla lekarza", "strona dla gabinetu stomatologicznego"],
  ["ru: SEO стоматологии = SEO клиники?", "ru", "seo продвижение стоматологии", "продвижение сайта клиники"],
  ["ru: сайт клиники = сайт стоматологии?", "ru", "сайт для клиники", "сайт для стоматологии"],
];

// Stage 2, group 2b (24.10.2026): veterinary clinics, plus one pending pair
// from group 2 (medical seo vs healthcare seo, assumed to be one page).
PAIR_SETS.veterinary = [
  ["вет: «veterinary website» — чей спрос?", "en", "veterinary website", "veterinary website design"],
  ["вет: сайт клиники = дизайн?", "en", "vet clinic website", "veterinary website design"],
  ["вет: SEO = локальное SEO?", "en", "veterinary seo", "local seo for veterinarians"],
  ["вет: SEO = маркетинг?", "en", "veterinary seo", "veterinary marketing"],
  ["вет: SEO = healthcare SEO?", "en", "veterinary seo", "healthcare seo"],
  ["вет: дизайн = медицинский дизайн?", "en", "veterinary website design", "medical website design"],
  ["группа 2: medical seo = healthcare seo?", "en", "medical seo", "healthcare seo"],
  ["pl: сайт ветеринара = сайт ветклиники?", "pl", "strona dla weterynarza", "strona dla przychodni weterynaryjnej"],
  ["pl: SEO ветклиники — чей спрос?", "pl", "pozycjonowanie przychodni weterynaryjnej", "strona dla przychodni weterynaryjnej"],
  ["ru: «сайт ветеринарной клиники» — чей спрос?", "ru", "сайт ветеринарной клиники", "сайт для ветеринарной клиники"],
  ["ru: продвижение ветклиники = продвижение клиники?", "ru", "продвижение ветеринарной клиники", "продвижение сайта клиники"],
];

// Stage 2, group 3 (24.10.2026): hotels and vacation rentals.
PAIR_SETS.hotels = [
  ["отели: «website for hotels» — чей спрос?", "en", "website for hotels", "hotel website design"],
  ["отели: дизайн = существующая страница сайта отеля?", "en", "hotel website design", "hotel website"],
  ["отели: SEO = локальное SEO?", "en", "hotel seo", "local seo for hotels"],
  ["отели: SEO = digital marketing?", "en", "hotel seo", "hotel digital marketing"],
  ["апартаменты: «vacation rental website» — чей спрос?", "en", "vacation rental website", "vacation rental website design"],
  ["апартаменты: сайт = сайт отеля?", "en", "vacation rental website design", "hotel website design"],
  ["апартаменты: SEO = SEO отеля?", "en", "vacation rental seo", "hotel seo"],
  ["b&b: сайт = сайт отеля?", "en", "bed and breakfast website", "hotel website design"],
  ["pl: SEO отеля = сайт отеля?", "pl", "pozycjonowanie strony hotelu", "strona internetowa dla hotelu"],
  ["pl: пансионат = отель?", "pl", "strona dla pensjonatu", "strona internetowa dla hotelu"],
  ["ru: продвижение отеля = сайт отеля?", "ru", "продвижение сайта отеля", "сайт для отеля"],
  ["ru: апартаменты = отель?", "ru", "сайт для апартаментов", "сайт для отеля"],
];

// Stage 2, group 4 (25.10.2026): small business, startups, B2B.
PAIR_SETS["small-business"] = [
  ["малый бизнес: SEO = SEO-услуги?", "en", "small business seo", "seo services for small business"],
  ["малый бизнес: SEO = локальное SEO?", "en", "small business seo", "local seo for small business"],
  ["малый бизнес: сайт = дизайн?", "en", "website for small business", "small business website design"],
  ["малый бизнес: «website for small business» — чей спрос (конструкторы)?", "en", "website for small business", "best website builder for small business"],
  ["малый бизнес: стоимость сайта = статья?", "en", "small business website cost", "small business website design"],
  ["стартапы: SEO = SEO малого бизнеса?", "en", "seo for startups", "small business seo"],
  ["стартапы: дизайн = дизайн малого бизнеса?", "en", "startup website design", "small business website design"],
  ["b2b: SEO = SEO малого бизнеса?", "en", "seo for b2b companies", "small business seo"],
  ["b2b: дизайн = дизайн малого бизнеса?", "en", "b2b website design", "small business website design"],
  ["pl: SEO малой фирмы = сайт малой фирмы?", "pl", "pozycjonowanie dla małej firmy", "strona internetowa dla małej firmy"],
  ["ru: сайт малого бизнеса = продвижение?", "ru", "сайт для малого бизнеса", "продвижение сайта малого бизнеса"],
];

PAIR_SETS["lawyers"] = [
  ["юристы: lawyer seo = law firm seo?", "en", "lawyer seo", "law firm seo"],
  ["юристы: attorney seo = law firm seo?", "en", "attorney seo", "law firm seo"],
  ["юристы: law firm seo = local seo for lawyers?", "en", "law firm seo", "local seo for lawyers"],
  ["юристы: personal injury seo — отдельная страница?", "en", "personal injury seo", "law firm seo"],
  ["юристы: law firm marketing — статья или SEO-страница?", "en", "law firm marketing", "law firm seo"],
  ["юристы: дизайн = разработка?", "en", "law firm website design", "law firm website development"],
  ["юристы: web design for lawyers = law firm website design?", "en", "web design for lawyers", "law firm website design"],
  ["юристы: «lawyer website» — чей спрос?", "en", "lawyer website", "law firm website design"],
  ["pl: pozycjonowanie kancelarii = pozycjonowanie adwokata?", "pl", "pozycjonowanie kancelarii prawnej", "pozycjonowanie strony adwokata"],
  ["pl: strona kancelarii = strona adwokata?", "pl", "strona internetowa dla kancelarii", "strona internetowa adwokata"],
  ["pl: marketing kancelarii — статья или SEO-страница?", "pl", "marketing kancelarii prawnej", "pozycjonowanie kancelarii prawnej"],
  ["ru: продвижение юрфирмы = продвижение адвоката?", "ru", "продвижение сайта юридической компании", "продвижение сайта адвоката"],
  ["ru: сайт для юриста = сайт адвоката?", "ru", "сайт для юриста", "сайт адвоката"],
];

PAIR_SETS["nonprofits-manufacturers"] = [
  ["нко: сайт = дизайн?", "en", "website for nonprofit", "nonprofit website design"],
  ["нко: «website for nonprofit» — чей спрос (конструкторы, бесплатные программы)?", "en", "website for nonprofit", "best website builder for nonprofits"],
  ["нко: SEO = дизайн?", "en", "nonprofit seo", "nonprofit website design"],
  ["нко: charity = nonprofit?", "en", "charity website design", "nonprofit website design"],
  ["нко: стоимость сайта — статья?", "en", "nonprofit website cost", "nonprofit website design"],
  ["производители: manufacturing seo = seo for manufacturers?", "en", "manufacturing seo", "seo for manufacturers"],
  ["производители: manufacturing seo = b2b seo?", "en", "manufacturing seo", "b2b seo"],
  ["производители: дизайн = разработка?", "en", "manufacturing website design", "manufacturing website development"],
  ["производители: industrial = manufacturing?", "en", "industrial website design", "manufacturing website design"],
  ["производители: дизайн = b2b дизайн?", "en", "manufacturing website design", "b2b website design"],
  ["pl: fundacja = stowarzyszenie?", "pl", "strona internetowa dla fundacji", "strona dla stowarzyszenia"],
  ["pl: firma produkcyjna — SEO = strona?", "pl", "pozycjonowanie firmy produkcyjnej", "strona internetowa dla firmy produkcyjnej"],
  ["ru: НКО = фонд?", "ru", "сайт для некоммерческой организации", "сайт благотворительного фонда"],
  ["ru: производитель — продвижение = b2b?", "ru", "продвижение сайта производителя", "продвижение b2b"],
];

PAIR_SETS["professionals"] = [
  ["консультанты: «seo for consultants» = «seo consultant»?", "en", "seo for consultants", "seo consultant"],
  ["консультанты: сайт консультанта — чей спрос?", "en", "consultant website design", "website for consultants"],
  ["свадьбы: «website for wedding planners» — чей спрос (сайты пар)?", "en", "website for wedding planners", "wedding website"],
  ["свадьбы: сайт организатора = дизайн?", "en", "website for wedding planners", "wedding planner website design"],
  ["переводчики: «website for translators» — чей спрос (биржи)?", "en", "website for translators", "translator website design"],
  ["репетиторы: «website for tutors» — чей спрос (платформы)?", "en", "website for tutors", "tutoring website design"],
  ["архитекторы: SEO = дизайн сайта?", "en", "seo for architects", "architecture website design"],
  ["архитекторы: дизайн = разработка?", "en", "architecture website design", "website for architects"],
  ["фотографы: SEO = сайт?", "en", "seo for photographers", "website for photographers"],
  ["фотографы: «website for photographers» — чей спрос (конструкторы)?", "en", "website for photographers", "best website builder for photographers"],
  ["it: SEO = b2b seo?", "en", "seo for it companies", "b2b seo"],
  ["it: дизайн = b2b дизайн?", "en", "it company website design", "b2b website design"],
  ["pl: architekt — SEO = strona?", "pl", "pozycjonowanie biura architektonicznego", "strona dla architekta"],
  ["pl: fotograf — SEO = strona?", "pl", "pozycjonowanie fotografa", "strona dla fotografa"],
  ["ru: фотограф — продвижение = сайт?", "ru", "продвижение сайта фотографа", "сайт фотографа"],
  ["ru: сайт для it компании = b2b?", "ru", "сайт для it компании", "продвижение b2b"],
];

PAIR_SETS["pl-cities"] = [
  ["poznań: SEO = strony?", "pl", "pozycjonowanie stron poznań", "tworzenie stron internetowych poznań"],
  ["poznań: tworzenie = projektowanie?", "pl", "tworzenie stron internetowych poznań", "projektowanie stron poznań"],
  ["kraków: tworzenie = projektowanie?", "pl", "tworzenie stron internetowych kraków", "projektowanie stron kraków"],
  ["kraków: tworzenie stron = strony internetowe?", "pl", "tworzenie stron internetowych kraków", "strony internetowe kraków"],
  ["wrocław: pozycjonowanie = agencja seo?", "pl", "pozycjonowanie stron wrocław", "agencja seo wrocław"],
  ["katowice: pozycjonowanie = audyt seo?", "pl", "pozycjonowanie stron katowice", "audyt seo katowice"],
  ["trójmiasto: gdańsk = gdynia?", "pl", "pozycjonowanie stron gdańsk", "pozycjonowanie stron gdynia"],
  ["śląsk: katowice = gliwice?", "pl", "pozycjonowanie stron katowice", "pozycjonowanie stron gliwice"],
  ["kujawy: toruń = bydgoszcz?", "pl", "pozycjonowanie stron toruń", "pozycjonowanie stron bydgoszcz"],
  ["łódź: SEO = strony?", "pl", "pozycjonowanie stron łódź", "tworzenie stron internetowych łódź"],
];

PAIR_SETS["real-estate-finance"] = [
  ["риелторы: seo for realtors = real estate seo (наша /seo-for-real-estate)?", "en", "seo for realtors", "real estate seo"],
  ["риелторы: realtor seo = real estate agent seo?", "en", "seo for realtors", "seo for real estate agents"],
  ["риелторы: дизайн = сайт агентства (/real-estate-agency-website)?", "en", "realtor website design", "real estate agency website design"],
  ["риелторы: «realtor website» — чей спрос (IDX-конструкторы)?", "en", "realtor website", "best realtor website builder"],
  ["риелторы: дизайн = SEO?", "en", "realtor website design", "seo for realtors"],
  ["финансы: advisor SEO = дизайн?", "en", "financial advisor seo", "financial advisor website design"],
  ["финансы: «financial advisor website» — чей спрос (Twenty Over Ten, FMG)?", "en", "financial advisor website", "financial advisor website design"],
  ["страхование: agent seo = agency seo?", "en", "insurance agent seo", "insurance agency seo"],
  ["страхование: SEO = дизайн?", "en", "insurance agent seo", "insurance agency website design"],
  ["ипотека: SEO = дизайн?", "en", "mortgage broker seo", "mortgage broker website design"],
  ["ипотека: mortgage broker seo = loan officer seo?", "en", "mortgage broker seo", "mortgage seo"],
  ["pl: agent nieruchomości = biuro nieruchomości?", "pl", "strona dla agenta nieruchomości", "strona dla biura nieruchomości"],
  ["ru: сайт риелтора = сайт агентства недвижимости?", "ru", "сайт для риелтора", "сайт агентства недвижимости"],
];

PAIR_SETS["medical-practices"] = [
  ["терапевты: seo for therapists = seo for psychologists?", "en", "seo for therapists", "seo for psychologists"],
  ["терапевты: SEO = дизайн (/website-for-psychologists-therapists)?", "en", "seo for therapists", "therapist website design"],
  ["терапевты: «therapist website» — чей спрос (SimplePractice, Psychology Today)?", "en", "therapist website", "therapist website design"],
  ["хиропрактики: SEO = дизайн?", "en", "seo for chiropractors", "chiropractor website design"],
  ["хиропрактики: chiropractor seo = physical therapy seo?", "en", "seo for chiropractors", "seo for physical therapists"],
  ["пластика: SEO = дизайн?", "en", "seo for plastic surgeons", "plastic surgeon website design"],
  ["пластика: plastic surgeon seo = med spa seo?", "en", "seo for plastic surgeons", "med spa seo"],
  ["эстетика: med spa seo = dermatology seo?", "en", "med spa seo", "seo for dermatologists"],
  ["эстетика: med spa SEO = дизайн?", "en", "med spa seo", "med spa website design"],
  ["ортодонты: SEO = dentist seo (/dentist-seo)?", "en", "seo for orthodontists", "dentist seo"],
  ["ортодонты: дизайн = dental website design (/dental-website-design)?", "en", "orthodontist website design", "dental website design"],
  ["оптометристы: дизайн = SEO?", "en", "optometrist website design", "optometry seo"],
  ["сеньоры: assisted living = senior living (дизайн)?", "en", "assisted living website design", "senior living website design"],
  ["сеньоры: SEO = дизайн?", "en", "senior living seo", "assisted living website design"],
  ["pl: psycholog SEO = strona (/pl/strona-dla-psychologow-terapeutow)?", "pl", "pozycjonowanie strony psychologa", "strona dla psychologa"],
  ["pl: fizjoterapia SEO = strona?", "pl", "pozycjonowanie gabinetu fizjoterapii", "strona dla fizjoterapeuty"],
  ["pl: medycyna estetyczna SEO = strona?", "pl", "pozycjonowanie kliniki medycyny estetycznej", "strona dla kliniki medycyny estetycznej"],
  ["pl: medycyna estetyczna = chirurg plastyczny?", "pl", "pozycjonowanie kliniki medycyny estetycznej", "pozycjonowanie chirurga plastycznego"],
  ["pl: dom opieki SEO = strona?", "pl", "pozycjonowanie domu opieki", "strona dla domu seniora"],
  ["ru: психолог SEO = сайт (/ru/sait-dlya-psihologov-terapevtov)?", "ru", "продвижение сайта психолога", "сайт для психолога"],
  ["ru: косметология SEO = сайт?", "ru", "продвижение клиники косметологии", "сайт для косметологии"],
  ["ru: косметология = пластический хирург?", "ru", "продвижение клиники косметологии", "продвижение сайта пластического хирурга"],
];

PAIR_SETS["home-services"] = [
  ["дезинсекция: SEO = дизайн?", "en", "pest control seo", "pest control website design"],
  ["переезды: moving companies = movers?", "en", "seo for moving companies", "seo for movers"],
  ["переезды: SEO = сайт?", "en", "seo for moving companies", "moving company website design"],
  ["дома: home builder website = construction company website (наша)?", "en", "home builder website design", "construction company website design"],
  ["дома: home builder seo = construction seo (наша)?", "en", "seo for home builders", "seo for construction companies"],
  ["дома: SEO = сайт?", "en", "seo for home builders", "home builder website design"],
  ["интерьер: «website for interior designers» — чей спрос (конструкторы, портфолио)?", "en", "website for interior designers", "interior designer website design"],
  ["интерьер: SEO = сайт?", "en", "seo for interior designers", "interior designer website design"],
  ["мастер на час: «handyman website» — чей спрос?", "en", "handyman website", "handyman website design"],
  ["мастер на час: SEO = сайт?", "en", "handyman seo", "handyman website design"],
  ["замки: SEO = сайт?", "en", "locksmith seo", "locksmith website design"],
  ["ковры: carpet cleaning seo = cleaning company seo?", "en", "carpet cleaning seo", "cleaning company seo"],
  ["уборка: «house cleaning website» = cleaning company website (наша)?", "en", "house cleaning website", "cleaning company website"],
  ["мусор: SEO = сайт?", "en", "junk removal seo", "junk removal website"],
  ["полы: flooring seo = seo for contractors (наша)?", "en", "seo for flooring companies", "seo for contractors"],
  ["техника: SEO = сайт?", "en", "appliance repair seo", "appliance repair website"],
  ["деревья: tree service seo = landscaping seo (наша)?", "en", "tree service seo", "landscaping seo"],
  ["мойка: «pressure washing website» = дизайн?", "en", "pressure washing website", "pressure washing website design"],
  ["гаражные двери: garage door seo = seo for contractors?", "en", "garage door seo", "seo for contractors"],
  ["восстановление: restoration seo = water damage restoration seo?", "en", "restoration seo", "water damage restoration seo"],
  ["инспекторы: SEO = marketing?", "en", "seo for home inspectors", "home inspector marketing"],
  ["pl: przeprowadzki SEO = strona?", "pl", "pozycjonowanie firmy przeprowadzkowej", "strona dla firmy przeprowadzkowej"],
  ["pl: wnętrza strona = pozycjonowanie?", "pl", "strona dla projektanta wnętrz", "pozycjonowanie projektanta wnętrz"],
  ["pl: domy = firma budowlana (nasza)?", "pl", "strona dla firmy budującej domy", "strona dla firmy budowlanej"],
  ["ru: переезды SEO = сайт?", "ru", "продвижение сайта грузоперевозок", "сайт для компании по переездам"],
  ["ru: дизайнер интерьера сайт = продвижение?", "ru", "сайт дизайнера интерьера", "продвижение дизайнера интерьера"],
  ["ru: строительство домов = строительная компания (наша)?", "ru", "сайт для строительства домов", "сайт строительной компании"],
];

PAIR_SETS["creative-leisure"] = [
  ["залы: «website for gyms» — чей спрос?", "en", "website for gyms", "gym website design"],
  ["залы: gym website design = fitness studio website (наша)?", "en", "gym website design", "fitness studio website"],
  ["залы: SEO = дизайн?", "en", "gym seo", "gym website design"],
  ["тренеры: «website for personal trainers» — чей спрос?", "en", "website for personal trainers", "personal trainer website design"],
  ["авторы: «website for authors» — чей спрос?", "en", "website for authors", "author website design"],
  ["художники: «website for artists» — чей спрос?", "en", "website for artists", "artist website design"],
  ["группы: «website for bands» — чей спрос?", "en", "website for bands", "band website design"],
  ["музыканты: seo for musicians = band website design?", "en", "seo for musicians", "band website design"],
  ["подкасты: seo for podcasters = podcast seo (оптимизация самого подкаста)?", "en", "seo for podcasters", "podcast seo"],
  ["B&B: дизайн = vacation rental website design (наша)?", "en", "bed and breakfast website design", "vacation rental website design"],
  ["B&B: «website for bed and breakfast» — чей спрос?", "en", "website for bed and breakfast", "bed and breakfast website design"],
  ["коучи: «website for life coaches» — чей спрос?", "en", "website for life coaches", "life coach website design"],
  ["коучи: дизайн = SEO?", "en", "life coach website design", "seo for coaches"],
  ["винодельни: SEO = дизайн?", "en", "winery seo", "winery website design"],
  ["туроператоры: tour operator seo = travel agency website (наша)?", "en", "seo for tour operators", "travel agency website"],
  ["автосалоны: «website for car dealers» — чей спрос?", "en", "website for car dealers", "car dealer website design"],
  ["автосалоны: SEO = дизайн?", "en", "car dealer seo", "car dealer website design"],
  ["цветы: «website for florists» — чей спрос?", "en", "website for florists", "florist website design"],
  ["цветы: SEO = дизайн?", "en", "florist seo", "florist website design"],
  ["спа: spa seo = med spa seo (наша)?", "en", "spa seo", "med spa seo"],
  ["спа: SEO = дизайн?", "en", "spa seo", "spa website design"],
  ["парикмахерские: hair salon website = beauty salon website (наша)?", "en", "website for hair salons", "beauty salon website"],
  ["парикмахерские: hair salon seo = seo for beauty salons (наша)?", "en", "hair salon seo", "seo for beauty salons"],
  ["диджеи: «website for djs» — чей спрос?", "en", "website for djs", "dj website design"],
  ["визажисты: «website for makeup artists» — чей спрос?", "en", "website for makeup artists", "makeup artist website design"],
  ["детейлинг: «auto detailing website» = дизайн?", "en", "auto detailing website", "auto detailing website design"],
  ["прокат: car rental seo = car rental website design?", "en", "car rental seo", "car rental website design"],
  ["pl: trener personalny = siłownia?", "pl", "strona dla trenera personalnego", "strona dla siłowni"],
  ["pl: fryzjer strona = pozycjonowanie?", "pl", "strona dla salonu fryzjerskiego", "pozycjonowanie salonu fryzjerskiego"],
  ["ru: фитнес-клуб = тренер?", "ru", "сайт для фитнес клуба", "сайт для тренера"],
  ["ru: коуч = психолог (наша)?", "ru", "сайт для коуча", "сайт для психолога"],
];

PAIR_SETS["adult"] = [
  ["adult: дизайн = SEO?", "en", "adult website design", "adult seo"],
  ["adult: adult seo = seo for adult websites?", "en", "adult seo", "seo for adult websites"],
  ["adult: adult seo = adult seo agency?", "en", "adult seo", "adult seo agency"],
  ["adult: website design = website development?", "en", "adult website design", "adult website development"],
  ["adult: дизайн = хостинг (adult website hosting)?", "en", "adult website design", "adult website hosting"],
  ["onlyfans: «onlyfans management agency» — чей спрос (креаторы ищут агентство)?", "en", "onlyfans management agency", "onlyfans agency website"],
  ["onlyfans: agency website = adult website design?", "en", "onlyfans agency website", "adult website design"],
  ["onlyfans: «onlyfans marketing agency» = management agency?", "en", "onlyfans marketing agency", "onlyfans management agency"],
  ["модели: model portfolio website = website for models (наша)?", "en", "model portfolio website", "website for models"],
  ["модели: model portfolio website = model website design?", "en", "model portfolio website", "model website design"],
  ["модели: model website design = adult website design?", "en", "model website design", "adult website design"],
  ["pl: strona dla modelki = strony dla dorosłych?", "pl", "strona dla modelki", "strony internetowe dla dorosłych"],
  ["pl: strony dla dorosłych = pozycjonowanie?", "pl", "strony internetowe dla dorosłych", "pozycjonowanie stron dla dorosłych"],
  ["ru: сайт для модели = сайты для взрослых?", "ru", "сайт для модели", "сайт для взрослых разработка"],
  ["ru: сайты для взрослых = продвижение?", "ru", "сайт для взрослых разработка", "продвижение сайтов для взрослых"],
];

PAIR_SETS["pl-ru-industries"] = [
  ["pl: elektryk strona = pozycjonowanie?", "pl", "strona internetowa dla elektryka", "pozycjonowanie firmy elektrycznej"],
  ["pl: hydraulik strona = pozycjonowanie?", "pl", "strona dla hydraulika", "pozycjonowanie hydraulika"],
  ["pl: firma remontowa = firma budowlana (nasza)?", "pl", "strona dla firmy remontowej", "strona dla firmy budowlanej"],
  ["pl: pozycjonowanie firmy remontowej = budowlanej (nasza)?", "pl", "pozycjonowanie firmy remontowej", "pozycjonowanie firmy budowlanej"],
  ["pl: dekarz strona = pozycjonowanie?", "pl", "strona dla firmy dekarskiej", "pozycjonowanie firmy dekarskiej"],
  ["pl: ogród strona = pozycjonowanie?", "pl", "strona dla firmy ogrodniczej", "pozycjonowanie firmy ogrodniczej"],
  ["pl: kancelaria odszkodowawcza = kancelaria prawna (nasza)?", "pl", "pozycjonowanie kancelarii odszkodowawczej", "pozycjonowanie kancelarii prawnej"],
  ["pl: apartamenty = pensjonat (nasza)?", "pl", "strona dla apartamentów na wynajem", "strona dla pensjonatu"],
  ["ru: электрик сайт = продвижение?", "ru", "сайт для электрика", "продвижение сайта электрика"],
  ["ru: сантехник сайт = продвижение?", "ru", "сайт для сантехника", "продвижение сайта сантехника"],
  ["ru: продвижение ремонта = сайт ремонта (наша)?", "ru", "продвижение сайта ремонта квартир", "сайт для ремонта квартир"],
  ["ru: фонд сайт = продвижение?", "ru", "сайт благотворительного фонда", "продвижение сайта фонда"],
  ["ru: it сайт = продвижение?", "ru", "сайт для it компании", "продвижение it компании"],
  ["ru: посуточная аренда = гостевой дом (наша)?", "ru", "сайт для посуточной аренды", "сайт гостевого дома"],
];

PAIR_SETS["general-services"] = [
  ["en: CRO — услуга или информация?", "en", "conversion rate optimization services", "conversion rate optimization"],
  ["en: wordpress development = website development (наша)?", "en", "wordpress development services", "website development services"],
  ["en: nextjs development = website development (наша)?", "en", "nextjs development services", "website development services"],
  ["en: shopify development = shopify seo (наша)?", "en", "shopify development services", "shopify seo services"],
  ["en: seo consultant = ai seo consultant (наша)?", "en", "seo consultant", "ai seo consultant"],
  ["en: seo consultant = seo services?", "en", "seo consultant", "seo services"],
  ["en: website development cost — услуга или статья (pricing)?", "en", "website development cost", "website development pricing"],
  ["pl: freelancer seo = specjalista seo?", "pl", "freelancer seo", "specjalista seo"],
  ["pl: specjalista seo = agencja seo?", "pl", "specjalista seo", "agencja seo"],
  ["pl: konsultacje seo = specjalista seo?", "pl", "konsultacje seo", "specjalista seo"],
  ["pl: strona wizytówka = tworzenie stron (nasza)?", "pl", "strona wizytówka", "tworzenie stron internetowych"],
  ["pl: strona na wordpress = tworzenie stron (nasza)?", "pl", "strona na wordpress", "tworzenie stron internetowych"],
  ["pl: ile kosztuje pozycjonowanie = cennik pozycjonowania?", "pl", "ile kosztuje pozycjonowanie", "cennik pozycjonowania"],
  ["ru: продвижение сайта = seo оптимизация сайта (наша)?", "ru", "продвижение сайта", "seo оптимизация сайта"],
  ["ru: раскрутка сайта = продвижение сайта?", "ru", "раскрутка сайта", "продвижение сайта"],
  ["ru: seo специалист = seo агентство?", "ru", "seo специалист", "seo агентство"],
  ["ru: seo консультация = seo специалист?", "ru", "seo консультация", "seo специалист"],
  ["ru: сайт визитка = создание сайта (наша)?", "ru", "сайт визитка", "создание сайта"],
  ["ru: сайт на wordpress = создание сайта (наша)?", "ru", "сайт на wordpress", "создание сайта"],
];

PAIR_SETS["food-developer"] = [
  ["en: developer SEO = realtor SEO (наша)?", "en", "real estate developer seo", "real estate seo"],
  ["en: developer SEO = developer website (наша)?", "en", "real estate developer seo", "real estate developer website"],
  ["pl: deweloper SEO = biuro nieruchomości SEO (nasza)?", "pl", "pozycjonowanie strony dewelopera", "pozycjonowanie biura nieruchomości"],
  ["ru: застройщик SEO = агентство недвижимости SEO (наша)?", "ru", "продвижение сайта застройщика", "продвижение сайта агентства недвижимости"],
  ["en: cafe SEO = restaurant SEO (наша)?", "en", "cafe seo", "restaurant seo"],
  ["en: catering SEO = restaurant SEO (наша)?", "en", "catering seo", "restaurant seo"],
  ["pl: kawiarnia = restauracja (strona)?", "pl", "strona dla kawiarni", "strona internetowa dla restauracji"],
  ["ru: кафе = ресторан (сайт)?", "ru", "сайт для кафе", "сайт для ресторана"],
];

PAIR_SETS["delta"] = [
  ["en: wedding planner website — владелец или невеста?", "en", "wedding planner website", "wedding planner website design"],
  ["en: tutoring website — репетитор или ученик?", "en", "tutoring website", "website for tutors"],
  ["en: car rental website — прокат или клиент?", "en", "car rental website", "car rental website design"],
  ["en: saas website = saas website design?", "en", "saas website", "saas website design"],
  ["en: podcast website = podcast seo?", "en", "podcast website", "podcast seo"],
  ["en: farm website — ферма или покупатель?", "en", "farm website", "farm website design"],
  ["en: tattoo website = tattoo website design?", "en", "tattoo website", "tattoo website design"],
  ["en: solar website = solar seo?", "en", "solar website", "solar seo"],
  ["en: dermatologist website — врач или пациент?", "en", "dermatologist website", "dermatology website design"],
  ["en: nutritionist website — нутрициолог или клиент?", "en", "nutritionist website", "dietitian website design"],
  ["en: woodworking website = carpentry website?", "en", "woodworking website", "carpentry website"],
  ["en: car wash website — владелец или клиент?", "en", "car wash website", "car wash website design"],
  ["en: daycare website — владелец или родители?", "en", "daycare website", "daycare website design"],
  ["en: recruitment agency seo = recruitment website (наша)?", "en", "seo for recruitment agencies", "recruitment agency website design"],
  ["en: nail salon website = hair salon website (наша)?", "en", "nail salon website", "hair salon website design"],
  ["en: mortgage broker website = mortgage broker seo (наша)?", "en", "mortgage broker website", "mortgage broker seo"],
  ["en: warehouse website = logistics website?", "en", "warehouse website", "logistics website design"],
  ["en: restoration website = restoration seo (наша)?", "en", "restoration website", "restoration seo"],
  ["en: junk removal website = junk removal seo (наша)?", "en", "junk removal website", "junk removal seo"],
  ["en: locksmith website = locksmith seo (наша)?", "en", "locksmith website", "locksmith seo"],
  ["ru: сайт для репетитора — репетитор или ученик?", "ru", "сайт для репетитора", "создание сайта для репетитора"],
  ["ru: продвижение ювелирного = продвижение интернет-магазина (наша)?", "ru", "продвижение сайта ювелирного магазина", "продвижение интернет магазина"],
];

PAIR_SETS["batch-h"] = [
  ["en: saas seo = seo for it companies (наша)?", "en", "saas seo", "seo for it companies"],
  ["en: saas website design = saas landing page design?", "en", "saas website design", "saas landing page design"],
  ["en: carpentry website = handyman website (наша)?", "en", "carpentry website", "handyman website design"],
  ["en: recruitment SEO = staffing agency SEO?", "en", "seo for recruitment agencies", "staffing agency seo"],
  ["en: dermatology website = medical website design (наша)?", "en", "dermatology website design", "medical website design"],
  ["en: dermatology website = med spa website design (наша)?", "en", "dermatology website design", "med spa website design"],
  ["en: daycare website = preschool website?", "en", "daycare website design", "preschool website design"],
  ["en: jewelry seo = ecommerce seo (наша)?", "en", "jewelry seo", "ecommerce seo services"],
  ["en: solar seo = construction seo (наша)?", "en", "solar seo", "construction seo"],
  ["pl: przedszkole = żłobek?", "pl", "strona internetowa dla przedszkola", "strona dla żłobka"],
];

const SET = (() => { const i = process.argv.indexOf("--set"); return i > -1 ? process.argv[i + 1] : "restaurant"; })();
const PAIRS = PAIR_SETS[SET];
if (!PAIRS) throw new Error(`Unknown --set ${SET}. Known: ${Object.keys(PAIR_SETS).join(", ")}`);

const norm = (u) => String(u || "").toLowerCase()
  .replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/[?#].*$/, "").replace(/\/+$/, "");
const host = (u) => norm(u).split("/")[0];

async function serp(lang, keyword) {
  const auth = Buffer.from(`${process.env.DATAFORSEO_API_LOGIN}:${process.env.DATAFORSEO_API_PASSWORD}`).toString("base64");
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const { data } = await axios.post(
        "https://api.dataforseo.com/v3/serp/google/organic/live/advanced",
        [{ keyword, ...LOC[lang], device: "desktop", depth: 10 }],
        { headers: { Authorization: `Basic ${auth}` }, timeout: 120000 },
      );
      const t = data.tasks && data.tasks[0];
      if (!t || t.status_code !== 20000) throw new Error(t ? `${t.status_code} ${t.status_message}` : "пустой ответ");
      const items = (t.result && t.result[0] && t.result[0].items) || [];
      return {
        urls: items.filter((i) => i.type === "organic").slice(0, 10).map((i) => norm(i.url)),
        aio: items.some((i) => i.type === "ai_overview"),
      };
    } catch (e) {
      if (attempt === 3) throw e;
      await new Promise((r) => setTimeout(r, 6500 * attempt));
    }
  }
}

async function main() {
  const queries = new Map();
  for (const [, lang, a, b] of PAIRS) { queries.set(`${lang}|${a}`, null); queries.set(`${lang}|${b}`, null); }
  console.log(`Пар: ${PAIRS.length}, разных запросов: ${queries.size}, оценка ~$${(queries.size * 0.006).toFixed(2)}.`);
  if (DRY) { console.log("Сухой прогон: ничего не запрошено."); return; }
  if (!process.env.DATAFORSEO_API_LOGIN) throw new Error("Нет DATAFORSEO_API_LOGIN в .env.local");

  for (const k of queries.keys()) {
    const [lang, kw] = k.split("|");
    // cached per query: a rerun after a failure pays only for what is missing
    const file = path.join(DIR, "raw", "intent", `${lang}-${kw.replace(/[^\p{L}\p{N}]+/gu, "-")}.json`);
    if (fs.existsSync(file)) { process.stdout.write("c"); queries.set(k, JSON.parse(fs.readFileSync(file, "utf8"))); continue; }
    process.stdout.write(".");
    try {
      const r = await serp(lang, kw);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, JSON.stringify(r), "utf8");
      queries.set(k, r);
    } catch (e) {
      console.log(`\n! «${kw}» (${lang}): ${e.message} — pair skipped, rerun later`);
      queries.set(k, null);
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  console.log("\n");

  const out = [];
  const say = (l = "") => { console.log(l); out.push(l); };
  say("# Одно намерение или два: пересечение топ-10");
  say("");
  say("4+ общих адресов — одна страница; 2–3 — смотреть глазами; 0–1 — разные страницы.");
  for (const [topic, lang, a, b] of PAIRS) {
    const A = queries.get(`${lang}|${a}`);
    const B = queries.get(`${lang}|${b}`);
    if (!A || !B) { say(""); say(`## ${topic} · ${lang}: «${a}» и «${b}»`); say("  нет данных — запрос не удался, перезапустить"); continue; }
    const common = A.urls.filter((u) => B.urls.includes(u));
    const commonHosts = [...new Set(A.urls.map(host))].filter((h) => B.urls.map(host).includes(h));
    say("");
    say(`## ${topic} · ${lang}: «${a}» и «${b}»`);
    say(`общих адресов: ${common.length} из 10 · общих доменов: ${commonHosts.length}${A.aio ? " · AI Overview по первому" : ""}${B.aio ? " · AI Overview по второму" : ""}`);
    for (const u of common) say(`  = ${u}`);
    say(`  только «${a}»: ${A.urls.filter((u) => !common.includes(u)).map(host).join(", ")}`);
    say(`  только «${b}»: ${B.urls.filter((u) => !common.includes(u)).map(host).join(", ")}`);
  }
  fs.writeFileSync(path.join(DIR, SET === "restaurant" ? "intent-check.md" : `intent-check-${SET}.md`), out.join("\n") + "\n", "utf8");
  say("");
  say(`Записано: research/pseo/${SET === "restaurant" ? "intent-check.md" : `intent-check-${SET}.md`}`);
}

main().catch((e) => { console.error("Ошибка:", e.message); process.exit(1); });
