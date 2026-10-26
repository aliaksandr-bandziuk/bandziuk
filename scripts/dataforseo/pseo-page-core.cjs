// scripts/dataforseo/pseo-page-core.cjs
//
// Semantic core of ONE landing page, in all three languages, before its text
// is finalised and localised.
//
// Why. The pSEO matrix holds only head phrases per cell (service × industry ×
// city). A page also needs the tails people type, the neighbouring wordings
// and the questions Google shows under "People also ask" — that is what the
// H2s, H3s and FAQ are built from. For PL and RU this is the only honest
// source: a translated English heading rarely matches what the market types.
//
// Sources per language:
//   keyword_suggestions  phrases containing the seed (no location: same basis
//                        as the matrix volumes)
//   related_keywords     Google's "searches related to" graph, depth 1, with a
//                        market location (en US, pl Poland, ru Kazakhstan —
//                        Labs has no Poland+Russian pair)
//   SERP top-10          People also ask + related searches (en US, pl/ru Poland)
//
// Every call is cached in research/pseo/raw/, a rerun costs nothing.
//
//   node scripts/dataforseo/pseo-page-core.cjs --topic restaurant-website-design --dry-run
//   node scripts/dataforseo/pseo-page-core.cjs --topic restaurant-website-design
//
// Output: research/pseo/page-core/<topic>.csv and <topic>.md

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "pseo", "page-core");
const RAW = path.join(ROOT, "research", "pseo", "raw");
const LOGIN = process.env.DATAFORSEO_API_LOGIN;
const PASSWORD = process.env.DATAFORSEO_API_PASSWORD;

const argv = process.argv.slice(2);
const flag = (n, d) => {
  const i = argv.indexOf("--" + n);
  return i > -1 && argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : d;
};
const DRY = argv.includes("--dry-run");
const BUDGET = Number(flag("budget", 1.5));
const TOPIC = flag("topic", "restaurant-website-design");

// Topics: seeds per language, the stems a phrase must contain to belong to the
// topic, and the phrases that are the head (shown first in the report).
const TOPICS = {
  "restaurant-website-design": {
    relevant: /restaura|cafe|café|caf[eé]s|bistro|menu|kawiarni|ресторан|кафе|меню/i,
    // phrases about building / SEO belong to other pages; reported, not used here
    otherPage: {
      seo: /\bseo\b|pozycjonow|продвиж|marketing/i,
      development: /development|developer|build|builder|create|creat|make|tworzen|wykonan|stworz|создан|разработ|сделат|заказ/i,
    },
    seeds: {
      en: ["restaurant website design", "restaurant web design", "restaurant menu design", "restaurant website examples", "restaurant website template", "web design for restaurants"],
      pl: ["projektowanie stron dla restauracji", "strona internetowa restauracji", "strona dla restauracji", "projekt strony restauracji", "menu restauracji online", "szablon strony restauracji"],
      ru: ["дизайн сайта ресторана", "сайт ресторана", "сайт для ресторана", "меню ресторана онлайн", "шаблон сайта ресторана", "сайт для кафе"],
    },
    serp: {
      en: ["restaurant website design", "web design for restaurants"],
      pl: ["projektowanie stron dla restauracji", "strona internetowa dla restauracji"],
      ru: ["дизайн сайта ресторана", "сайт для ресторана"],
    },
  },
  // Topics 6–7 (23.10.2026): contractors, EN only. The construction survey
  // gave volumes but no PAA / related searches for contractor phrasing.
  // Trades (roofing, hvac, painting…) are reported as a group but deferred.
  "contractors": {
    relevant: /contractor|builder|remodel|construction/i,
    otherPage: {},
    groups: {
      "trades (deferred)": /roof|hvac|plumb|electric|paint|landscap|remodel|concrete|flooring|fencing|pool|siding|handyman|drywall|masonry/i,
      "SEO / marketing": /\bseo\b|marketing|leads|lead gen|google|advertis|ads\b/i,
      "design / examples": /design|template|theme|example|idea|inspiration|best|top/i,
      "website": /website|site\b|web\b|builder/i,
    },
    seeds: {
      en: ["contractor website design", "contractor websites", "general contractor website design", "website for contractors", "seo for contractors", "local seo for contractors", "contractor seo services", "contractor marketing"],
    },
    serp: {
      en: ["contractor website design", "seo for contractors"],
    },
  },
  // Topics 6–7 follow-up (23.10.2026): PL/RU for the contractor pages. A
  // homeowner's "contractor" is not «podwykonawca» / «подрядчик» there but a
  // renovation firm: «firma remontowa», «ekipa remontowa», «wykończenia»,
  // «ремонт квартир», «ремонтная компания». The construction survey had one PL
  // seed of this kind and no RU one, so this is the measurement the language
  // rule needs before deciding PL/RU versions of 6a/6b/7a/7b.
  "renovation-pl-ru": {
    relevant: /remont|wykończ|wykoncz|fachow|podwykonaw|wykonawc|ремонт|отдел|подряд/i,
    otherPage: {
      warsaw: /warsz|warsaw|варшав/i,
    },
    groups: {
      "SEO / promotion": /\bseo\b|marketing|pozycjon|reklam|продвиж|раскрут|маркетинг|реклам/i,
      "design / templates": /projektow|projekt strony|szablon|дизайн|шаблон|пример/i,
      "website / development": /strona|stron|witryn|сайт/i,
    },
    seeds: {
      pl: ["strona internetowa dla firmy remontowej", "strona dla firmy remontowej", "strona internetowa ekipy remontowej", "strona dla firmy wykończeniowej", "pozycjonowanie firmy remontowej", "pozycjonowanie strony firmy remontowej", "marketing firmy remontowej", "strona dla fachowca", "strona dla podwykonawcy"],
      ru: ["сайт ремонтной компании", "сайт для ремонта квартир", "сайт по ремонту квартир", "продвижение сайта ремонта квартир", "seo ремонт квартир", "раскрутка сайта ремонта квартир", "сайт для отделочной компании", "сайт для подрядчика", "продвижение сайта подрядчика"],
    },
    serp: {
      pl: ["strona internetowa dla firmy remontowej", "pozycjonowanie firmy remontowej"],
      ru: ["сайт ремонтной компании", "продвижение сайта ремонта квартир"],
    },
  },
  // Article (23.10.2026): «GEO vs SEO» — the definitive comparison article.
  // Measures the comparison cluster, definitions, «will GEO replace SEO» and
  // AEO on all three languages, with PAA / related searches for the outline.
  "geo-vs-seo": {
    relevant: /\bgeo\b|generative|\baeo\b|answer engine|ai search|ai seo|seo ai|llm|chatgpt|ai overview|нейросет|\bии\b|sztuczn/i,
    otherPage: {},
    groups: {
      "comparison / difference": /\bvs\b|versus|differen|compare|różnic|czym się różni|разниц|отлич|сравн/i,
      "replacing / future": /replac|dead|future|obsolete|zastąp|przyszł|умер|замен|будущ/i,
      "definition / what is": /what is|meaning|definition|explained|co to|czym jest|что такое|что это|значит/i,
      "aeo": /\baeo\b|answer engine/i,
      "how to / strategy": /how to|strategy|checklist|guide|jak |стратег|как /i,
    },
    seeds: {
      en: ["geo vs seo", "seo vs geo", "geo vs seo vs aeo", "difference between seo and geo", "is geo replacing seo", "generative engine optimization vs seo", "geo and seo", "is seo dead"],
      pl: ["geo vs seo", "geo seo", "czym jest geo", "geo a seo", "pozycjonowanie geo", "seo a ai"],
      ru: ["geo vs seo", "geo и seo", "geo оптимизация", "чем geo отличается от seo", "generative engine optimization", "seo умерло"],
    },
    serp: {
      en: ["geo vs seo", "is geo replacing seo"],
      pl: ["geo vs seo"],
      ru: ["geo оптимизация"],
    },
  },
  // Article «What is GEO» (24.10.2026): definition article. Comparisons belong
  // to the «GEO vs SEO» article, services/agency/tools to the GEO hub.
  "what-is-geo": {
    relevant: /\bgeo\b|generative|генератив|нейросет|\bии\b|\bai\b|sztuczn/i,
    otherPage: {
      "geo-vs-seo article": /\bvs\b|versus|differen|różnic|разниц|отлич/i,
      "GEO hub / services": /servic|agenc|compan|consult|usług|agencj|firma|услуг|агентств|компани|price|cost|cena|цена|стоимост/i,
    },
    groups: {
      "definition / what is": /what is|what's|meaning|definition|explained|co to|czym jest|co oznacza|что такое|что это|значит|означает/i,
      "how it works": /how does|how it works|how to|jak działa|jak |как работает|как /i,
      "strategy / best practices": /strateg|best practice|tactic|checklist|tips|стратег|чек-лист|metod|метод/i,
      "examples / case studies": /example|case stud|przykład|пример|кейс/i,
      "tools / software": /tool|software|platform|narzędz|инструмент|сервис/i,
      "statistics / research": /statist|study|research|paper|badani|исследован|статистик/i,
    },
    seeds: {
      en: ["what is generative engine optimization", "what is geo", "generative engine optimization", "how does generative engine optimization work", "generative engine optimization strategy", "what is geo in marketing", "generative engine optimization examples", "generative engine optimization best practices"],
      pl: ["generative engine optimization", "geo co to", "co to jest geo", "optymalizacja geo", "geo marketing", "optymalizacja pod ai", "geo pozycjonowanie"],
      ru: ["что такое geo", "generative engine optimization", "geo оптимизация", "geo продвижение", "генеративная оптимизация", "оптимизация под нейросети"],
    },
    serp: {
      en: ["what is generative engine optimization", "what is geo"],
      pl: ["generative engine optimization"],
      ru: ["что такое geo"],
    },
  },
  // Article «What is AEO» (24.10.2026): definition article. Comparisons belong
  // to the «GEO vs SEO» article, services/agency to the AEO service pages.
  "what-is-aeo": {
    relevant: /\baeo\b|answer engine|answer optimi|odpowiedzi ai|odpowiedź|ответ|featured snippet|zero.click|voice search/i,
    otherPage: {
      "geo-vs-seo article": /\bvs\b|versus|differen|różnic|разниц|отлич/i,
      "AEO service page": /servic|agenc|compan|consult|usług|agencj|firma|услуг|агентств|компани|price|cost|cena|цена|стоимост/i,
    },
    groups: {
      "definition / what is": /what is|what's|meaning|definition|explained|stand for|co to|czym jest|co oznacza|что такое|что это|значит|означает/i,
      "how it works / how to": /how does|how to|how it works|jak |как /i,
      "strategy / best practices": /strateg|best practice|tactic|checklist|tips|стратег|чек-лист|metod|метод/i,
      "examples": /example|case stud|przykład|пример|кейс/i,
      "tools": /tool|software|platform|narzędz|инструмент|сервис/i,
      "featured snippets / voice": /snippet|voice|zero.click|głos|голос/i,
    },
    seeds: {
      en: ["what is aeo", "what is answer engine optimization", "answer engine optimization", "aeo seo", "aeo marketing", "how to do answer engine optimization", "answer engine optimization strategy", "answer engine optimization examples"],
      pl: ["answer engine optimization", "aeo co to", "co to jest aeo", "aeo seo", "optymalizacja pod odpowiedzi ai"],
      ru: ["что такое aeo", "aeo оптимизация", "answer engine optimization", "aeo продвижение", "оптимизация под ответы ии"],
    },
    serp: {
      en: ["what is answer engine optimization", "what is aeo"],
      pl: ["answer engine optimization"],
      ru: ["что такое aeo"],
    },
  },
  // Article «LLM SEO» (24.10.2026). Services/agency/price belong to the LLM SEO
  // service pages, comparisons to «GEO vs SEO», ChatGPT-only phrases to the
  // ChatGPT SEO pages; the check is whether «llm seo» is a definition query or a
  // services query, and whether it is the same SERP as «generative engine optimization».
  "llm-seo-article": {
    relevant: /\bllm|large language model|llmo|language model|модел|model językow|нейросет|ai search|ai seo/i,
    otherPage: {
      "geo-vs-seo article": /\bvs\b|versus|differen|różnic|разниц|отлич/i,
      "LLM SEO service page": /servic|agenc|compan|consult|usług|agencj|firma|услуг|агентств|компани|price|cost|cena|цена|стоимост/i,
      "ChatGPT SEO page": /chatgpt|chat gpt/i,
    },
    groups: {
      "definition / what is": /what is|what's|meaning|definition|explained|co to|czym jest|что такое|что это|значит/i,
      "how to / strategy": /how to|how do|strateg|guide|checklist|best practice|tips|jak |как |стратег/i,
      "tools / tracking": /tool|software|platform|track|monitor|narzędz|инструмент|сервис|мониторинг/i,
      "specific models": /claude|gemini|perplexity|copilot|llama|mistral|deepseek|grok/i,
      "llms.txt": /llms\.?txt/i,
    },
    seeds: {
      en: ["llm seo", "what is llm seo", "llm optimization", "large language model optimization", "llmo", "seo for llms", "how to optimize for llms", "llm seo strategy", "llm seo tools"],
      pl: ["llm seo", "optymalizacja pod llm", "seo dla llm", "llmo", "pozycjonowanie w llm"],
      ru: ["llm seo", "оптимизация под llm", "seo для нейросетей", "llmo", "продвижение в нейросетях"],
    },
    serp: {
      en: ["llm seo", "what is llm seo"],
      pl: ["llm seo"],
      ru: ["llm seo"],
    },
  },
  // Stage 2, group 1 (24.10.2026): trades — plumbers and electricians (design,
  // website, SEO), plus HVAC, roofing, painting and landscaping SEO deferred on
  // 22.10. Template: the contractor pages 6a/6b/7a/7b. Also measures PL/RU for
  // the language rule (hydraulik / elektryk, сантехник / электрик).
  "trades": {
    relevant: /plumb|electric|hvac|heating|air condition|roof|painting|painter|landscap|hydraul|elektryk|instalac|dekar|сантех|электр|кровел|отоплен/i,
    otherPage: {},
    groups: {
      "plumbing": /plumb|hydraul|сантех/i,
      "electrical": /electric|elektryk|электр/i,
      "hvac / heating": /hvac|heating|air condition|instalac|отоплен|кондицион/i,
      "roofing": /roof|dekar|кровел/i,
      "painting": /paint|malar|маляр/i,
      "landscaping": /landscap|ogrod|ландшафт/i,
    },
    seeds: {
      en: ["seo for plumbers", "seo for electricians", "plumbing website design", "electrician website design", "website for plumbers", "website for electricians", "hvac seo", "roofing seo", "seo for painting contractors", "landscaping seo"],
      pl: ["strona internetowa dla hydraulika", "strona dla elektryka", "pozycjonowanie strony hydraulika", "pozycjonowanie strony elektryka", "strona dla firmy instalacyjnej", "strona dla firmy dekarskiej"],
      ru: ["сайт для электрика", "сайт для сантехника", "продвижение сайта сантехника", "продвижение сайта электрика", "сайт для кровельщика", "сайт сантехнических работ"],
    },
    serp: {
      en: ["seo for plumbers", "plumbing website design"],
      pl: ["strona internetowa dla hydraulika"],
      ru: ["сайт для сантехника"],
    },
  },
  // Stage 2, group 1b (24.10.2026): websites and design for roofers, HVAC,
  // landscapers and painters — the SEO side was measured in «trades»; this is
  // the development / design side for the same trades.
  "trades-sites": {
    relevant: /roof|hvac|heating|air condition|landscap|lawn|painting|painter/i,
    otherPage: {
      "trade SEO pages (group 1)": /\bseo\b|marketing|leads/i,
    },
    groups: {
      "roofing": /roof/i,
      "hvac": /hvac|heating|air condition/i,
      "landscaping / lawn": /landscap|lawn/i,
      "painting": /paint/i,
    },
    seeds: {
      en: ["roofing website design", "roofing company website", "roofing websites", "hvac website design", "hvac company website", "hvac websites", "landscaping website design", "lawn care website", "painting contractor website", "painting company website design"],
    },
    serp: {
      en: ["roofing website design", "hvac website design"],
    },
  },
  // Stage 2, group 2 (24.10.2026): dentists, doctors and clinics. Existing
  // pages: /dental-clinic-website (+ PL strona-dla-gabinetu-stomatologicznego,
  // RU sait-dlya-stomatologicheskoy-kliniki), PL Warsaw dental and clinic SEO,
  // /seo-for-polish-clinics-targeting-german-patients. Core: dentist SEO 8 420,
  // website for dentists 5 610, dentist website design 2 610, seo for doctors
  // 2 160, doctors website design 1 180, «website for doctors» 91 090 (suspect).
  "dental-medical": {
    relevant: /dent|stomat|стомат|doctor|physician|medical|medic|health|clinic|klinik|клиник|lekar|przychodn|gabinet|врач|медиц|orthodon|ortodon|ортодонт|chiroprac|dermatolog|plastic surg/i,
    otherPage: {
      "Warsaw pages (PL)": /warsz|warsaw|варшав/i,
    },
    groups: {
      "dental SEO / marketing": /(dent|stomat|стомат|orthodon|ortodon).*(seo|marketing|pozycjon|продвиж|реклам|раскрут)|(seo|marketing|pozycjon|продвиж|реклам|раскрут).*(dent|stomat|стомат|orthodon)/i,
      "dental website / design": /dent|stomat|стомат|orthodon|ortodon/i,
      "medical SEO / marketing": /(seo|marketing|pozycjon|продвиж|реклам|раскрут)/i,
      "medical website / design": /website|site|strona|сайт|design|projekt|дизайн/i,
    },
    seeds: {
      en: ["dentist seo", "seo for dentists", "dental website design", "website for dentists", "dental clinic website", "seo for doctors", "medical website design", "website for doctors", "medical practice seo", "healthcare seo"],
      pl: ["pozycjonowanie strony gabinetu stomatologicznego", "strona dla dentysty", "strona internetowa dla gabinetu stomatologicznego", "strona dla lekarza", "pozycjonowanie strony kliniki", "strona internetowa dla przychodni", "marketing gabinetu stomatologicznego"],
      ru: ["seo продвижение стоматологии", "продвижение сайта стоматологии", "сайт для стоматологии", "продвижение сайта клиники", "сайт для клиники", "сайт для врача", "продвижение медицинского сайта"],
    },
    serp: {
      en: ["dentist seo", "medical website design"],
      pl: ["pozycjonowanie strony gabinetu stomatologicznego"],
      ru: ["seo продвижение стоматологии"],
    },
  },
  // Stage 2, group 2b (24.10.2026): veterinary clinics. Existing page:
  // /veterinary-clinic-website (+ PL strona-dla-przychodni-weterynaryjnej, RU
  // sait-dlya-veterinarnoy-kliniki). The grid found no demand for the «for
  // veterinary clinics» form, so this measures the natural forms (vet seo,
  // veterinary website design, animal hospital…) on all three languages.
  "veterinary": {
    relevant: /vet\b|vets\b|veterin|animal hospital|animal clinic|pet clinic|weteryn|ветерин|ветклин|зоовет/i,
    otherPage: {},
    groups: {
      "SEO / marketing": /\bseo\b|marketing|pozycjon|reklam|продвиж|раскрут|реклам|маркетинг/i,
      "website / design": /website|site\b|web\b|design|template|strona|stron|projekt|сайт|дизайн|шаблон/i,
    },
    seeds: {
      en: ["veterinary seo", "seo for veterinarians", "vet seo", "local seo for veterinarians", "veterinary website design", "veterinary website", "vet clinic website", "animal hospital website", "veterinary marketing"],
      pl: ["pozycjonowanie strony weterynarza", "pozycjonowanie przychodni weterynaryjnej", "strona dla weterynarza", "strona internetowa dla gabinetu weterynaryjnego", "marketing gabinetu weterynaryjnego"],
      ru: ["продвижение ветеринарной клиники", "сайт ветеринарной клиники", "сайт для ветеринара", "seo для ветеринарной клиники", "продвижение сайта ветклиники"],
    },
    serp: {
      en: ["veterinary seo", "veterinary website design"],
      pl: ["pozycjonowanie strony weterynarza"],
      ru: ["продвижение ветеринарной клиники"],
    },
  },
  // Stage 2, group 3 (24.10.2026): hotels, guest houses and vacation rentals.
  // Existing pages: /hotel-website (+ PL strona-dla-hotelu, RU sait-dlya-otelya),
  // /travel-agency-website. Core: website for hotels 18 100 (suspect: guests
  // looking for booking sites?), hotel SEO 7 580, hotel website design 2 600.
  "hotels": {
    relevant: /hotel|motel|inn\b|resort|guest ?house|b&b|bed and breakfast|hostel|vacation rental|holiday rental|airbnb|short.?term rental|direct booking|booking engine|hotel|pensjonat|apartament|noclegi|agroturyst|отел|гостиниц|апартамент|хостел|гостев|мини-отел/i,
    otherPage: {},
    groups: {
      "SEO / marketing": /\bseo\b|marketing|pozycjon|reklam|продвиж|раскрут|реклам|маркетинг/i,
      "vacation rentals / apartments": /vacation|holiday|airbnb|short.?term|rental|apartament|апартамент|посуточ/i,
      "booking engine / direct booking": /booking|rezerwac|бронир/i,
      "website / design": /website|site\b|web\b|design|template|strona|stron|projekt|сайт|дизайн|шаблон/i,
    },
    seeds: {
      en: ["hotel seo", "seo for hotels", "hotel website design", "website for hotels", "hotel website", "hotel digital marketing", "vacation rental website", "vacation rental seo", "direct booking website for vacation rentals", "bed and breakfast website"],
      pl: ["pozycjonowanie strony hotelu", "strona internetowa dla hotelu", "strona dla pensjonatu", "strona dla apartamentów", "pozycjonowanie pensjonatu", "marketing hotelu"],
      ru: ["продвижение сайта отеля", "сайт для отеля", "сайт для гостиницы", "сайт для апартаментов", "продвижение гостиницы", "сайт для мини-отеля"],
    },
    serp: {
      en: ["hotel seo", "hotel website design"],
      pl: ["pozycjonowanie strony hotelu"],
      ru: ["продвижение сайта отеля"],
    },
  },
  // Stage 2, group 4 (25.10.2026): small business, startups, B2B. Existing:
  // /startup-website (+ PL strona-dla-startupu, RU sait-dlya-startapa). Core:
  // seo services for small business 20 800 (mapped to the ecommerce SEO page —
  // wrong), small business website design 8 800, website for small business
  // 4 880, startups seo 2 990, seo for b2b companies 930.
  "small-business": {
    relevant: /small business|small businesses|local business|startup|start-up|b2b|mał(ej|ych) firm|małego biznesu|startup|b2b|малого бизнес|малый бизнес|стартап|b2b/i,
    otherPage: {},
    groups: {
      "startups": /startup|start-up|стартап/i,
      "b2b": /b2b/i,
      "SEO / marketing": /\bseo\b|marketing|pozycjon|reklam|продвиж|раскрут|реклам|маркетинг/i,
      "website / design": /website|site\b|web\b|design|template|strona|stron|projekt|сайт|дизайн|шаблон/i,
    },
    seeds: {
      en: ["small business seo", "seo for small business", "local seo for small business", "small business website design", "website for small business", "small business website cost", "seo for startups", "startup website design", "seo for b2b companies", "b2b website design"],
      pl: ["pozycjonowanie dla małej firmy", "strona internetowa dla małej firmy", "strona dla startupu", "pozycjonowanie startupu", "pozycjonowanie firmy b2b", "strona dla firmy b2b"],
      ru: ["продвижение сайта малого бизнеса", "сайт для малого бизнеса", "seo для стартапа", "сайт для стартапа", "продвижение b2b", "сайт для b2b компании"],
    },
    serp: {
      en: ["small business seo", "small business website design"],
      pl: ["pozycjonowanie dla małej firmy"],
      ru: ["продвижение сайта малого бизнеса"],
    },
  },
  // Stage 2, group 5 — lawyers and law firms (25.10.2026). Existing pages: EN
  // /seo-for-law-firms, /lawyer-website-development; PL /pl/seo-dla-kancelarii-prawnych,
  // /pl/strona-internetowa-dla-adwokata, /pl/oferty/pozycjonowanie-strony-kancelarii-prawnej-warszawa;
  // RU /ru/seo-dlya-yuridicheskogo-sayta, /ru/sozdanie-saita-dlya-advokata.
  "lawyers": {
    relevant: /lawyer|law firm|law office|attorney|legal|solicitor|barrister|personal injury|family law|criminal defen|immigration law|estate planning|kancelari|adwokat|radc|prawn|prawnik|notariusz|юрист|юридич|адвокат|нотариус|правов/i,
    otherPage: {
      warsaw: /warsz|warsaw|варшав/i,
    },
    groups: {
      "practice areas": /personal injury|family law|divorce|criminal|immigration|estate|bankruptcy|employment|dui|rozwod|karn|rodzinn|развод|уголовн|миграц/i,
      "SEO / marketing": /\bseo\b|marketing|advertis|ppc|lead|pozycjon|reklam|marketing|продвиж|раскрут|реклам|маркетинг/i,
      "website / design": /website|site\b|web\b|design|template|strona|stron|projekt|сайт|дизайн|шаблон|лендинг/i,
    },
    seeds: {
      en: ["lawyer seo", "law firm seo", "attorney seo", "legal seo", "local seo for lawyers", "personal injury seo", "law firm marketing", "law firm website design", "web design for lawyers", "lawyer website", "law firm website development", "attorney website design"],
      pl: ["pozycjonowanie kancelarii prawnej", "pozycjonowanie strony adwokata", "marketing kancelarii prawnej", "strona internetowa dla kancelarii", "strona dla radcy prawnego", "strona internetowa adwokata"],
      ru: ["продвижение сайта юридической компании", "продвижение сайта адвоката", "seo для юристов", "сайт для юриста", "сайт для юридической компании", "сайт адвоката"],
    },
    serp: {
      en: ["lawyer seo", "law firm website design"],
      pl: ["pozycjonowanie kancelarii prawnej"],
      ru: ["продвижение сайта юридической компании"],
    },
  },
  // Stage 2, group 6 — nonprofits and manufacturers (25.10.2026). Existing pages:
  // EN /manufacturing-company-website, /b2b-seo, /b2b-website-design, lingerie
  // manufacturer SEO/website (EN/PL/RU); RU /ru/sait-dlya-proizvodstvennoy-kompanii.
  // No nonprofit pages yet.
  "nonprofits-manufacturers": {
    relevant: /nonprofit|non-profit|non profit|charit|ngo|foundation|church|ministr|manufactur|industrial|factory|machin|fabricat|cnc|fundacj|stowarzysz|organizacj|pozarząd|producent|produkcyj|przemysł|fabryk|некоммерч|нко|фонд|благотвор|производ|завод|фабрик|промышлен/i,
    otherPage: {},
    groups: {
      "nonprofits": /nonprofit|non-profit|non profit|charit|ngo|foundation|church|ministr|fundacj|stowarzysz|organizacj|pozarząd|некоммерч|нко|фонд|благотвор/i,
      "manufacturers": /manufactur|industrial|factory|machin|fabricat|cnc|producent|produkcyj|przemysł|fabryk|производ|завод|фабрик|промышлен/i,
      "SEO / marketing": /\bseo\b|marketing|pozycjon|reklam|продвиж|раскрут|реклам|маркетинг/i,
      "website / design": /website|site\b|web\b|design|template|strona|stron|projekt|сайт|дизайн|шаблон/i,
    },
    seeds: {
      en: ["nonprofit website design", "website for nonprofit", "nonprofit seo", "seo for nonprofits", "nonprofit website cost", "charity website design", "manufacturing seo", "seo for manufacturers", "manufacturing website design", "industrial website design", "manufacturing website development"],
      pl: ["strona internetowa dla fundacji", "strona dla stowarzyszenia", "pozycjonowanie fundacji", "pozycjonowanie firmy produkcyjnej", "strona internetowa dla firmy produkcyjnej", "strona dla producenta"],
      ru: ["сайт для некоммерческой организации", "сайт для фонда", "сайт благотворительного фонда", "продвижение сайта производителя", "сайт для завода", "сайт для производственной компании"],
    },
    serp: {
      en: ["nonprofit website design", "manufacturing seo"],
      pl: ["strona internetowa dla fundacji"],
      ru: ["продвижение сайта производителя"],
    },
  },
  // Stage 2, group 7 — professionals (25.10.2026): architects, photographers, IT
  // companies, plus four suspicious volumes to check before any page: consultants
  // seo 22,280, website for wedding planners 22,200, for translators 14,800, for
  // tutors 6,600. Existing: EN /architecture-studio-website, /photographer-website;
  // PL /pl/strona-dla-biura-architektonicznego, /pl/strona-dla-fotografa; RU /ru/sait-dlya-fotografa.
  "professionals": {
    relevant: /architect|photograph|\bit\b|software|tech compan|wedding planner|event planner|translat|interpret|tutor|consult|archite|fotograf|tłumacz|korepet|konsult|firm[ay] it|архитект|фотограф|it[- ]компан|переводчик|репетитор|консалт|консультант/i,
    otherPage: {},
    groups: {
      "architects": /architect|archite|архитект/i,
      "photographers": /photograph|fotograf|фотограф/i,
      "IT companies": /\bit\b|software|tech compan|firm[ay] it|it[- ]компан/i,
      "wedding planners": /wedding|event planner|ślub|свадеб/i,
      "translators": /translat|interpret|tłumacz|переводчик/i,
      "tutors": /tutor|korepet|репетитор/i,
      "consultants": /consult|konsult|консалт|консультант/i,
    },
    seeds: {
      en: ["seo for architects", "architecture website design", "seo for photographers", "photography website design", "website for photographers", "seo for it companies", "it company website design", "website for wedding planners", "website for translators", "website for tutors", "seo for consultants", "consultant website design"],
      pl: ["pozycjonowanie biura architektonicznego", "strona dla architekta", "pozycjonowanie fotografa", "strona dla fotografa", "strona dla firmy it", "strona dla tłumacza", "strona dla korepetytora"],
      ru: ["продвижение сайта архитектурного бюро", "сайт для архитектора", "продвижение сайта фотографа", "сайт фотографа", "сайт для it компании", "сайт для переводчика", "сайт для репетитора"],
    },
    serp: {
      en: ["seo for architects", "website for wedding planners"],
      pl: ["strona dla architekta"],
      ru: ["сайт для it компании"],
    },
  },
  // Stage 3 pilot — Polish city pages (25.10.2026): 15 largest cities by demand,
  // two services each (pozycjonowanie stron X, tworzenie stron internetowych X).
  // Warsaw already has both pages. E-commerce («sklep internetowy X») is not taken.
  "pl-cities": {
    relevant: /pozycjon|stron|seo|tworzen|projektow|agencj|audyt|witryn|www/i,
    otherPage: {
      ecommerce: /sklep|e-?commerce|woocommerce|shopify/i,
    },
    groups: {
      "SEO": /pozycjon|seo|audyt|agencj/i,
      "strony": /stron|witryn|www|projektow|tworzen/i,
    },
    seeds: {
      en: [],
      pl: ["pozycjonowanie stron poznań", "tworzenie stron internetowych poznań", "pozycjonowanie stron toruń", "tworzenie stron internetowych toruń", "pozycjonowanie stron wrocław", "tworzenie stron internetowych wrocław", "pozycjonowanie stron katowice", "tworzenie stron internetowych katowice", "pozycjonowanie stron kraków", "tworzenie stron internetowych kraków", "pozycjonowanie stron rzeszów", "tworzenie stron internetowych rzeszów", "pozycjonowanie stron szczecin", "tworzenie stron internetowych szczecin", "pozycjonowanie stron łódź", "tworzenie stron internetowych łódź", "pozycjonowanie stron bydgoszcz", "tworzenie stron internetowych bydgoszcz", "pozycjonowanie stron lublin", "tworzenie stron internetowych lublin", "pozycjonowanie stron opole", "tworzenie stron internetowych opole", "pozycjonowanie stron częstochowa", "tworzenie stron internetowych częstochowa", "pozycjonowanie stron gdańsk", "tworzenie stron internetowych gdańsk", "pozycjonowanie stron radom", "tworzenie stron internetowych radom", "pozycjonowanie stron białystok", "tworzenie stron internetowych białystok"],
      ru: [],
    },
    serp: {
      en: [],
      pl: ["pozycjonowanie stron poznań", "tworzenie stron internetowych kraków", "pozycjonowanie stron toruń"],
      ru: [],
    },
  },
  // Stage 2b, batch A — real estate agents and finance (26.10.2026). Existing:
  // /seo-for-real-estate (+PL/RU, Cyprus, Spain, UAE), /real-estate-agency-website
  // (+PL/RU), /property-developer-website (+PL). New candidates: realtors / real
  // estate agents (individual agents), financial advisors, insurance agents, mortgage brokers.
  "real-estate-finance": {
    relevant: /realtor|real estate|estate agent|realty|broker|mortgage|loan officer|financial advis|wealth|insurance|nieruchomo|pośrednik|doradc|kredyt|ubezpiecz|недвижим|риелтор|риэлтор|ипотек|финансов|страхов/i,
    otherPage: {},
    groups: {
      "realtors / agents": /realtor|real estate|estate agent|realty|nieruchomo|pośrednik nieruch|недвижим|риелтор|риэлтор/i,
      "financial advisors": /financial advis|wealth|advisor|doradc[ay] finans|финансов/i,
      "insurance": /insurance|ubezpiecz|страхов/i,
      "mortgage": /mortgage|loan officer|kredyt|ипотек/i,
    },
    seeds: {
      en: ["seo for realtors", "real estate seo", "realtor website design", "real estate agent website design", "website for realtors", "seo for real estate agents", "financial advisor seo", "financial advisor website design", "insurance agent seo", "insurance agency website design", "mortgage broker seo", "mortgage broker website design"],
      pl: ["strona dla agenta nieruchomości", "pozycjonowanie biura nieruchomości", "strona dla doradcy finansowego", "strona dla agenta ubezpieczeniowego", "pozycjonowanie pośrednika kredytowego"],
      ru: ["сайт для риелтора", "продвижение сайта риелтора", "сайт для финансового консультанта", "сайт страхового агента", "сайт ипотечного брокера"],
    },
    serp: {
      en: ["seo for realtors", "realtor website design", "financial advisor seo"],
      pl: ["strona dla agenta nieruchomości"],
      ru: ["сайт для риелтора"],
    },
  },
  // Stage 2b, batch B — medical practices (27.10.2026). Existing: /medical-seo,
  // /seo-for-doctors, /healthcare-seo, /medical-website-design (+PL/RU), /dentist-seo
  // (+PL/RU), /dental-website-design, /website-for-psychologists-therapists (+PL/RU),
  // beauty-salon pages EN/PL/RU. New candidates: therapists SEO, chiropractors /
  // physiotherapists, plastic surgeons, med spas / aesthetic medicine, orthodontists,
  // optometrists / opticians, assisted / senior living, dermatologists.
  "medical-practices": {
    relevant: /therap|psycholog|counsel|chiro|physio|physical therap|plastic surg|cosmetic surg|med ?spa|aesthetic|dermatolog|orthodont|optomet|optician|eye care|assisted living|senior living|nursing home|care home|psychoterap|fizjoter|kręgarz|osteopat|chirurg plast|medycyn[ay] estetyczn|klinik[ai] estetyczn|ortodont|optyk|okulist|dom opieki|dom seniora|dermatolog|психолог|психотерап|мануальн|остеопат|пластическ|косметолог|эстетическ|ортодонт|оптик|офтальмолог|пансионат|дом престарел|дерматолог/i,
    otherPage: {
      dental: /dentist|dental|stomatolog|стоматолог/i,
      "beauty salon": /beauty salon|salon kosmetyczn|салон красоты/i,
    },
    groups: {
      "therapists / psychologists": /therap|psycholog|counsel|psychoterap|психолог|психотерап/i,
      "chiropractors / physio": /chiro|physio|physical therap|fizjoter|kręgarz|osteopat|мануальн|остеопат/i,
      "plastic surgery / aesthetic": /plastic surg|cosmetic surg|med ?spa|aesthetic|chirurg plast|estetyczn|пластическ|косметолог|эстетическ/i,
      "dermatology": /dermatolog|дерматолог/i,
      "orthodontists": /orthodont|ortodont|ортодонт/i,
      "optometrists / opticians": /optomet|optician|eye care|optyk|okulist|оптик|офтальмолог/i,
      "senior living": /assisted living|senior living|nursing home|care home|dom opieki|dom seniora|пансионат|дом престарел/i,
    },
    seeds: {
      en: ["seo for therapists", "therapist website design", "seo for psychologists", "seo for chiropractors", "chiropractor website design", "seo for physical therapists", "seo for plastic surgeons", "plastic surgeon website design", "med spa seo", "med spa website design", "seo for dermatologists", "seo for orthodontists", "orthodontist website design", "optometrist website design", "optometry seo", "assisted living website design", "senior living seo"],
      pl: ["pozycjonowanie strony psychologa", "pozycjonowanie gabinetu fizjoterapii", "strona dla fizjoterapeuty", "pozycjonowanie kliniki medycyny estetycznej", "strona dla kliniki medycyny estetycznej", "pozycjonowanie chirurga plastycznego", "strona dla ortodonty", "strona dla salonu optycznego", "pozycjonowanie domu opieki", "strona dla domu seniora", "pozycjonowanie gabinetu dermatologicznego"],
      ru: ["продвижение сайта психолога", "продвижение сайта пластического хирурга", "сайт пластического хирурга", "продвижение клиники косметологии", "сайт для косметологии", "продвижение сайта мануального терапевта", "сайт для остеопата", "сайт ортодонта", "продвижение салона оптики", "сайт пансионата для пожилых", "продвижение дерматологической клиники"],
    },
    serp: {
      en: ["seo for therapists", "seo for chiropractors", "seo for plastic surgeons"],
      pl: ["pozycjonowanie kliniki medycyny estetycznej"],
      ru: ["продвижение клиники косметологии"],
    },
  },
  // Stage 2b, batch C — home services (27.10.2026). Existing: cleaning-company-website
  // (+PL/RU), PL Warsaw cleaning SEO, construction / contractor pages, trades (roofing,
  // HVAC, landscaping, painting…), logistics-company-website. New candidates: pest
  // control, movers, home builders, interior designers, handyman, locksmiths, carpet
  // cleaning, junk removal, flooring, appliance repair, tree service, pressure washing,
  // garage doors, restoration, home inspectors.
  "home-services": {
    relevant: /pest|extermin|mover|moving|home build|interior design|handyman|locksmith|carpet|junk|flooring|floor|appliance|tree service|arborist|pressure wash|power wash|garage door|restoration|water damage|home inspect|house clean|window clean|deratyz|dezynsek|szkodnik|przeprowadz|dom(y|ów) pod klucz|budow[ay] dom|projektant wnętrz|projektowanie wnętrz|złota rączka|złotej rączki|ślusarz|pranie dywan|wywóz|podłog|naprawa (agd|pralek)|wycinka drzew|bram[ay] garażow|osuszanie|inspektor budowlan|дезинсекц|дератизац|переезд|грузоперевоз|строительств[оа] дом|дизайн[а-я]* интерьер|муж на час|мастер на час|вскрытие замк|замочник|химчистк[а-я]* ковр|вывоз мусор|напольн|ремонт (бытовой )?техник|спил деревьев|гаражн|клининг|уборк/i,
    otherPage: {
      "cleaning company page": /cleaning company|cleaning business|firma sprzątając|клининговой компании/i,
      "construction / contractors pages": /construction compan|general contractor|firma budowlan|строительной компании/i,
    },
    groups: {
      "pest control": /pest|extermin|deratyz|dezynsek|szkodnik|дезинсекц|дератизац/i,
      "movers": /mover|moving|przeprowadz|переезд|грузоперевоз/i,
      "home builders": /home build|dom(y|ów) pod klucz|budow[ay] dom|строительств[оа] дом/i,
      "interior designers": /interior design|projektant wnętrz|projektowanie wnętrz|дизайн[а-я]* интерьер/i,
      "handyman": /handyman|złota rączka|złotej rączki|муж на час|мастер на час/i,
      "locksmiths": /locksmith|ślusarz|вскрытие замк|замочник/i,
      "cleaning (carpet / house / window)": /carpet|house clean|window clean|pranie dywan|химчистк|клининг|уборк/i,
      "junk removal": /junk|wywóz|вывоз мусор/i,
      "flooring": /floor|podłog|напольн/i,
      "appliance repair": /appliance|naprawa (agd|pralek)|ремонт (бытовой )?техник/i,
      "tree service": /tree service|arborist|wycinka drzew|спил деревьев/i,
      "pressure washing": /pressure wash|power wash/i,
      "garage doors": /garage door|bram[ay] garażow|гаражн/i,
      "restoration": /restoration|water damage|osuszanie/i,
      "home inspectors": /home inspect|inspektor budowlan/i,
    },
    seeds: {
      en: ["pest control seo", "pest control website design", "seo for moving companies", "seo for movers", "home builder website design", "seo for home builders", "website for interior designers", "seo for interior designers", "handyman website", "locksmith seo", "carpet cleaning seo", "junk removal seo", "seo for flooring companies", "appliance repair seo", "tree service seo", "pressure washing website", "garage door seo", "restoration seo", "seo for home inspectors"],
      pl: ["pozycjonowanie firmy przeprowadzkowej", "strona dla firmy przeprowadzkowej", "pozycjonowanie firmy deratyzacyjnej", "strona dla projektanta wnętrz", "pozycjonowanie projektanta wnętrz", "strona dla firmy budującej domy", "strona dla złotej rączki", "pozycjonowanie ślusarza", "pozycjonowanie firmy prania dywanów", "pozycjonowanie firmy montażu podłóg"],
      ru: ["продвижение сайта грузоперевозок", "сайт для компании по переездам", "продвижение сайта дезинсекции", "сайт дизайнера интерьера", "продвижение дизайнера интерьера", "сайт для строительства домов", "сайт мастера на час", "продвижение сайта вскрытия замков", "продвижение химчистки ковров", "продвижение сайта вывоза мусора"],
    },
    serp: {
      en: ["pest control seo", "seo for moving companies", "website for interior designers"],
      pl: ["pozycjonowanie firmy przeprowadzkowej"],
      ru: ["сайт дизайнера интерьера"],
    },
  },
  // Stage 2b, batch D — creative professions, leisure and services (27.10.2026). Existing:
  // fitness-studio-website (+PL/RU), beauty-salon pages EN/PL/RU, med-spa pages, photographer
  // pages, hotel / vacation-rental pages, travel-agency-website, accounting-firm-website.
  // Many «website for X» phrases here may be customers' or builders' demand — the SERP decides.
  // Funeral services are excluded by the owner (27.10.2026) — never build pages for them.
  "creative-leisure": {
    relevant: /gym|fitness|personal train|author|writer|artist|band|musician|podcast|\bdj|makeup|bed and breakfast|b&b|guest ?house|winer|vineyard|tour operator|coach|detailing|car deal|dealership|car rental|florist|flower shop|\bspa\b|hair salon|barber|funeral|siłowni|trener|pisarz|autor|artyst|zespoł|muzyk|wizaż|pensjonat|agroturyst|winnic|coach|komis|salon samochod|wypożyczaln|kwiaciar|fryzjer|barber|dom pogrzebow|zakład pogrzebow|фитнес|тренер|писател|автор|художник|групп|музыкант|подкаст|визажист|гостев|винодель|туроператор|коуч|детейлинг|автосалон|прокат авто|цвет|парикмахер|барбершоп|ритуальн/i,
    otherPage: {
      "fitness studio page": /fitness studio|studia fitness|фитнес.студ/i,
      "beauty salon pages": /beauty salon|salon kosmetyczn|салон красоты/i,
      "med spa pages": /med ?spa|medical spa/i,
      "hotel / vacation rental pages": /hotel|vacation rental|airbnb/i,
      "travel agency page": /travel agenc|biur[ao] podróży|турагентств/i,
    },
    groups: {
      "gyms / trainers": /gym|fitness|personal train|siłowni|trener|фитнес|тренер/i,
      "authors": /author|writer|pisarz|autor|писател|автор/i,
      "artists": /artist|artyst|художник/i,
      "bands / musicians / djs": /band|musician|\bdj|zespoł|muzyk|групп|музыкант/i,
      "podcasters": /podcast|подкаст/i,
      "makeup artists": /makeup|wizaż|визажист/i,
      "b&b / guesthouses": /bed and breakfast|b&b|guest ?house|pensjonat|agroturyst|гостев/i,
      "wineries": /winer|vineyard|winnic|винодель/i,
      "tour operators": /tour operator|туроператор/i,
      "coaches": /coach|коуч/i,
      "auto detailing / dealers / rental": /detailing|car deal|dealership|car rental|komis|salon samochod|wypożyczaln|детейлинг|автосалон|прокат авто/i,
      "florists": /florist|flower shop|kwiaciar|цвет/i,
      "spas / hair salons / barbers": /\bspa\b|hair salon|barber|fryzjer|парикмахер|барбершоп/i,
      "funeral homes": /funeral|pogrzeb|ритуальн/i,
    },
    seeds: {
      en: ["gym website design", "gym seo", "personal trainer website", "author website design", "artist website design", "band website design", "seo for musicians", "seo for podcasters", "bed and breakfast website design", "life coach website design", "seo for coaches", "winery seo", "winery website design", "seo for tour operators", "car dealer website design", "car dealer seo", "auto detailing website", "car rental seo", "florist website design", "florist seo", "spa seo", "hair salon website", "hair salon seo", "dj website", "makeup artist website", "funeral home seo"],
      pl: ["strona dla trenera personalnego", "strona dla siłowni", "strona dla pisarza", "strona dla artysty", "strona dla zespołu muzycznego", "strona dla pensjonatu", "strona dla coacha", "strona dla kwiaciarni", "strona dla salonu fryzjerskiego", "pozycjonowanie salonu fryzjerskiego", "strona dla komisu samochodowego", "strona dla zakładu pogrzebowego"],
      ru: ["сайт для фитнес клуба", "сайт для тренера", "сайт для писателя", "сайт для художника", "сайт для музыкальной группы", "сайт для гостевого дома", "сайт для коуча", "сайт цветочного магазина", "сайт для барбершопа", "продвижение автосалона", "сайт для детейлинга", "сайт ритуальных услуг"],
    },
    serp: {
      en: ["gym website design", "author website design", "seo for podcasters"],
      pl: ["strona dla trenera personalnego"],
      ru: ["сайт для тренера"],
    },
  },
  // Article «ChatGPT SEO» (24.10.2026). Services/agency/price belong to the
  // ChatGPT SEO service pages; «get recommended by ChatGPT» may belong to the
  // existing article /blog/how-to-get-recommended-by-chatgpt; «ChatGPT for SEO»
  // (using ChatGPT as an SEO tool) is a different intent.
  "chatgpt-seo-article": {
    relevant: /chatgpt|chat gpt|openai|gpt|czat ?gpt|чатгпт|чат gpt/i,
    otherPage: {
      "ChatGPT SEO service page": /servic|agenc|compan|consult|usług|agencj|firma|услуг|агентств|компани|price|cost|cena|цена|стоимост/i,
      "geo-vs-seo article": /\bvs\b|versus|differen|różnic|разниц|отлич/i,
    },
    groups: {
      "definition / what is": /what is|meaning|definition|co to|czym jest|что такое|что это/i,
      "rank / appear / get mentioned": /rank|appear|show up|mention|recommend|cite|visible|visibility|pojaw|polec|widoczn|попасть|рекоменд|видимост|появ/i,
      "ChatGPT as an SEO tool": /prompt|for seo|tool|write|keyword research|content|plugin|gpts|dla seo|для seo|промпт/i,
      "search / atlas / shopping": /search|atlas|shopping|wyszukiw|поиск/i,
      "how to": /how to|how do|jak |как /i,
    },
    seeds: {
      en: ["chatgpt seo", "what is chatgpt seo", "how to rank in chatgpt", "how to get mentioned in chatgpt", "how to show up in chatgpt", "seo for chatgpt", "chatgpt search optimization", "optimize for chatgpt", "chatgpt for seo"],
      pl: ["pozycjonowanie w chatgpt", "seo chatgpt", "jak pojawić się w chatgpt", "chatgpt seo", "widoczność w chatgpt"],
      ru: ["продвижение в chatgpt", "seo для chatgpt", "как попасть в chatgpt", "chatgpt seo", "оптимизация под chatgpt"],
    },
    serp: {
      en: ["chatgpt seo", "how to rank in chatgpt"],
      pl: ["pozycjonowanie w chatgpt"],
      ru: ["продвижение в chatgpt"],
    },
  },
  // Survey (22.10.2026): AI-search wording (GEO, AEO, AIO, «продвижение в
  // ChatGPT»). Owner's rule: every SEO page for every niche also covers AI
  // search. Shows which general phrases carry demand and whether any
  // «niche + AI» combination is searched at all.
  "ai-search": {
    relevant: /\bai\b|\bgeo\b|\baeo\b|\baio\b|\bllm|chatgpt|chat gpt|gpt|perplexity|gemini|generative|answer engine|ai overview|artificial intelligence|sztuczn|\bии\b|нейросет|искусственн|чатгпт|\bgeo-/i,
    otherPage: {},
    groups: {
      "restaurants / food": /restaura|cafe|café|food|gastronom|ресторан|кафе/i,
      "construction / contractors": /construct|contractor|builder|budowl|строител|подрядч/i,
      "law": /law|lawyer|attorney|legal|prawn|adwokat|юрист|адвокат/i,
      "medical / dental": /dental|dentist|medical|clinic|doctor|stomatolog|klinik|медиц|стомат|клиник/i,
      "real estate": /real estate|realtor|property|nieruchomo|недвиж|риелтор/i,
      "ecommerce": /ecommerce|e-commerce|shopify|store|shop\b|sklep|магазин/i,
      "local business": /local|lokaln|локальн|small business|малого бизнеса/i,
      "agency / services / price": /agency|agencja|агентств|services|usługi|услуг|company|firma|компани|cost|price|cena|цена|стоимост/i,
      "what is / how to": /what is|how to|meaning|definition|co to|jak |что такое|как /i,
    },
    seeds: {
      en: ["generative engine optimization", "answer engine optimization", "ai seo", "geo seo", "llm seo", "chatgpt seo", "ai search optimization", "seo for ai search", "ai overviews seo", "geo for local business"],
      pl: ["pozycjonowanie w ai", "seo ai", "pozycjonowanie w chatgpt", "geo seo", "optymalizacja pod ai", "widoczność w ai", "seo pod chatgpt"],
      ru: ["продвижение в chatgpt", "seo для ии", "geo оптимизация", "продвижение в нейросетях", "seo под ии", "оптимизация под ии", "aeo оптимизация"],
    },
    serp: {
      en: ["generative engine optimization", "ai seo"],
      pl: ["pozycjonowanie w ai"],
      ru: ["продвижение в нейросетях"],
    },
  },
  // Topic 3–5 survey (22.10.2026): construction — development, design and SEO
  // in one run, split by service. Only the Warsaw SEO pages (PL/RU) exist.
  "construction": {
    relevant: /construct|contractor|budowl|budownict|remont|wykończ|строител|стройк|ремонт|подрядч|застройщ/i,
    otherPage: {
      warsaw: /warsz|warsaw|варшав/i,
    },
    groups: {
      "SEO / promotion": /\bseo\b|marketing|pozycjon|reklam|продвиж|раскрут|маркетинг|реклам/i,
      "design / templates": /design|template|theme|example|idea|inspiration|projektow|projekt strony|szablon|дизайн|шаблон|пример/i,
      "website / development": /website|web site|site\b|strona|stron|сайт/i,
    },
    seeds: {
      en: ["construction company website", "construction website design", "construction company website design", "contractor website design", "general contractor website", "construction seo", "seo for contractors", "construction company seo"],
      pl: ["strona internetowa dla firmy budowlanej", "strona firmy budowlanej", "projektowanie stron dla firm budowlanych", "strona dla firmy remontowej", "pozycjonowanie firmy budowlanej", "marketing firmy budowlanej"],
      ru: ["сайт строительной компании", "сайт для строительной компании", "дизайн сайта строительной компании", "сайт для строительной фирмы", "продвижение сайта строительной компании", "раскрутка сайта строительной компании", "seo для строительной компании"],
    },
    serp: {
      en: ["construction website design", "construction company seo"],
      pl: ["strona internetowa dla firmy budowlanej"],
      ru: ["сайт строительной компании"],
    },
  },
  // Re-check (22.10.2026): PL construction SEO in the right form («pozycjonowanie
  // STRONY firmy budowlanej», plurals), more RU SEO phrasing, and the property
  // developer pages (/property-developer-website, /pl/strona-dla-dewelopera,
  // /ru/sait-dlya-zastroishchika) — EN demand was 0 in the grid, likely the
  // same «website for X» template gap.
  "construction-recheck": {
    relevant: /construct|contractor|builder|developer|budowl|deweloper|nieruchomo|строител|застройщ|девелопер|недвиж/i,
    otherPage: {
      warsaw: /warsz|warsaw|варшав/i,
    },
    groups: {
      "developer": /developer|home builder|deweloper|застройщ|девелопер/i,
      "construction SEO / promotion": /\bseo\b|marketing|pozycjon|reklam|продвиж|раскрут|маркетинг|реклам/i,
      "construction website": /website|site\b|strona|stron|www|сайт/i,
    },
    seeds: {
      en: ["property developer website", "real estate developer website", "real estate developer website design", "home builder website design", "home builder seo", "real estate developer seo"],
      pl: ["pozycjonowanie strony firmy budowlanej", "pozycjonowanie firm budowlanych", "seo dla firm budowlanych", "strony internetowe dla firm budowlanych", "strona www dla firmy budowlanej", "reklama firmy budowlanej", "strona dla dewelopera", "pozycjonowanie dewelopera"],
      ru: ["продвижение строительной компании", "seo продвижение строительной компании", "раскрутка строительной компании", "реклама строительной компании", "сайты строительных компаний", "сайт застройщика", "продвижение застройщика"],
    },
    serp: {
      en: ["real estate developer website"],
      pl: ["pozycjonowanie strony firmy budowlanej"],
      ru: ["продвижение строительной компании"],
    },
  },
  // Survey (22.10.2026): food-service venues next to restaurants. The matrix
  // never measured them — cafés, coffee shops, bars and pizzerias are not in
  // the industry dictionary, and its EN templates only build «website for
  // bakeries», never the natural «bakery website». Suggestions catch the real
  // phrasing. Restaurants themselves are excluded: already covered.
  "food-venues": {
    relevant: /caf[eé]|coffee|\bbar\b|\bbars\b|pub\b|bakery|bakeries|patisserie|pastry|cater|pizz|food truck|food-truck|kawiarn|\bbaru\b|\bbar[uó]w\b|pub[uó]?\b|piekarn|cukierni|cateringu|katering|pizzeri|food truck|кафе|кофейн|\bбар|паб|пекарн|кондитерск|кейтеринг|пиццери|фудтрак|фуд-трак/i,
    otherPage: {
      restaurant: /restaura|ресторан/i,
    },
    groups: {
      "cafés and coffee shops": /caf[eé]|coffee|kawiarn|кафе|кофейн/i,
      "bars and pubs": /\bbar\b|\bbars\b|pub\b|\bbaru\b|\bbar[uó]w\b|pub[uó]?\b|\bбар|паб/i,
      "bakeries and patisseries": /bakery|bakeries|patisserie|pastry|piekarn|cukierni|пекарн|кондитерск/i,
      "catering": /cater|cateringu|katering|кейтеринг/i,
      "pizzerias": /pizz|pizzeri|пиццери/i,
      "food trucks": /food truck|food-truck|фудтрак|фуд-трак/i,
    },
    seeds: {
      en: ["cafe website", "coffee shop website", "bar website", "bakery website", "catering website", "pizza website", "food truck website", "coffee shop seo", "bakery seo", "catering seo"],
      pl: ["strona dla kawiarni", "strona kawiarni", "strona dla baru", "strona dla piekarni", "strona dla cukierni", "strona dla cateringu", "strona pizzerii", "pozycjonowanie kawiarni"],
      ru: ["сайт кафе", "сайт для кафе", "сайт кофейни", "сайт для бара", "сайт пекарни", "сайт кондитерской", "сайт кейтеринга", "сайт пиццерии"],
    },
    serp: {
      en: ["coffee shop website", "catering website"],
      pl: ["strona dla kawiarni"],
      ru: ["сайт для кафе"],
    },
  },
  // RU re-check of topic 2 (22.10.2026): the first run seeded only
  // «продвижение / маркетинг», so SEO and «раскрутка» phrasing was never measured.
  "restaurant-seo-ru": {
    relevant: /ресторан|кафе|общепит|кофейн|бар\b/i,
    otherPage: {
      warsaw: /варшав/i,
      development: /создан|разработ|дизайн|шаблон|сделать сайт|заказать сайт|конструктор|тильд/i,
    },
    seeds: {
      ru: [
        "раскрутка сайта ресторана", "раскрутка ресторана", "seo продвижение ресторана",
        "seo для ресторана", "продвижение сайта ресторана", "seo ресторана",
        "продвижение сайта кафе", "раскрутка кафе",
      ],
    },
    serp: {
      ru: ["раскрутка сайта ресторана", "seo продвижение ресторана"],
    },
  },
  "restaurant-seo": {
    relevant: /restaura|cafe|café|bistro|kawiarni|gastronom|horeca|ресторан|кафе/i,
    // checked in this order; the first match wins
    otherPage: {
      // PL/RU already have Warsaw restaurant SEO pages
      warsaw: /warsz|warsaw|варшав/i,
      development: /develop|design|builder|\bbuild|creat|template|tworzen|projekt|stworz|szablon|создан|разработ|дизайн|шаблон|сделать сайт|заказать сайт/i,
    },
    seeds: {
      en: ["restaurant seo", "seo for restaurants", "local seo for restaurants", "restaurant seo services", "restaurant seo company", "google business profile restaurant"],
      pl: ["pozycjonowanie restauracji", "pozycjonowanie strony restauracji", "seo dla restauracji", "marketing restauracji", "wizytówka google restauracja", "pozycjonowanie lokalne restauracji"],
      ru: ["продвижение ресторана", "продвижение сайта ресторана", "seo продвижение ресторана", "продвижение ресторана в интернете", "продвижение ресторана в google", "маркетинг ресторана"],
    },
    serp: {
      en: ["restaurant seo", "seo for restaurants"],
      pl: ["pozycjonowanie restauracji", "seo dla restauracji"],
      ru: ["продвижение сайта ресторана", "seo продвижение ресторана"],
    },
  },
};

const LOC_RELATED = { en: 2840, pl: 2616, ru: 2398 };
const LOC_SERP = { en: 2840, pl: 2616, ru: 2616 };
const ESTIMATE = {
  "dataforseo_labs/google/keyword_suggestions/live": 0.02,
  "dataforseo_labs/google/related_keywords/live": 0.02,
  "serp/google/organic/live/advanced": 0.006,
};

let spent = 0;
let planned = 0;
const failures = [];

async function call(endpoint, payload, label) {
  const h = crypto.createHash("sha1").update(endpoint + JSON.stringify(payload)).digest("hex").slice(0, 16);
  const file = path.join(RAW, `${endpoint.replace(/[^a-z0-9]+/gi, "_")}__${h}.json`);
  if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, "utf8"));
  const est = ESTIMATE[endpoint] ?? 0.03;
  if (DRY) { planned += est; console.log(`would call  ${label}  (~$${est.toFixed(3)})`); return null; }
  if (spent + est > BUDGET) throw new Error(`Budget ceiling $${BUDGET} reached at $${spent.toFixed(3)}; nothing more requested.`);
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await axios.post(`https://api.dataforseo.com/v3/${endpoint}`, [payload], {
        auth: { username: LOGIN, password: PASSWORD },
        timeout: 180000,
      });
      const body = res.data;
      spent += Number(body.cost || 0);
      const task = body.tasks && body.tasks[0];
      if (task && task.status_code === 40202 && attempt < 3) { await new Promise((r) => setTimeout(r, 7000 * attempt)); continue; }
      if (!(body.status_code === 20000 && task && task.status_code === 20000)) {
        const msg = task ? `${task.status_code} ${task.status_message}` : body.status_message;
        console.warn(`  ! ${label}: ${msg}`);
        failures.push({ label, msg });
        return null;
      }
      fs.mkdirSync(RAW, { recursive: true });
      fs.writeFileSync(file, JSON.stringify(body, null, 1));
      console.log(`paid  ${label}  $${Number(body.cost || 0).toFixed(4)}`);
      await new Promise((r) => setTimeout(r, 5500)); // 12 calls/min account limit
      return body;
    } catch (e) {
      if (attempt === 3) { failures.push({ label, msg: e.message }); return null; }
      await new Promise((r) => setTimeout(r, 7000 * attempt));
    }
  }
  return null;
}

const items = (body) => (body && body.tasks && body.tasks[0] && body.tasks[0].result && body.tasks[0].result[0] && body.tasks[0].result[0].items) || [];
const norm = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").trim();

async function main() {
  const topic = TOPICS[TOPIC];
  if (!topic) throw new Error(`Unknown topic ${TOPIC}. Known: ${Object.keys(TOPICS).join(", ")}`);
  if (!DRY && !LOGIN) throw new Error("DATAFORSEO_API_LOGIN missing in .env.local");

  const kw = new Map(); // lang|keyword → row
  const add = (lang, keyword, volume, source) => {
    const k = `${lang}|${norm(keyword)}`;
    const row = kw.get(k) || { lang, keyword: norm(keyword), volume: 0, sources: new Set() };
    row.volume = Math.max(row.volume, Number(volume) || 0);
    row.sources.add(source);
    kw.set(k, row);
  };
  const paa = { en: new Set(), pl: new Set(), ru: new Set() };
  const related = { en: new Set(), pl: new Set(), ru: new Set() };

  for (const lang of Object.keys(topic.seeds)) {
    for (const seed of topic.seeds[lang]) {
      const s = await call("dataforseo_labs/google/keyword_suggestions/live",
        { keyword: seed, language_code: lang, limit: 200, include_seed_keyword: true, filters: [["keyword_info.search_volume", ">=", 10]] },
        `${lang} suggestions «${seed}»`);
      for (const it of items(s)) add(lang, it.keyword, it.keyword_info && it.keyword_info.search_volume, "suggestions");
      const r = await call("dataforseo_labs/google/related_keywords/live",
        { keyword: seed, language_code: lang, location_code: LOC_RELATED[lang], depth: 1, limit: 100 },
        `${lang} related «${seed}»`);
      for (const it of items(r)) {
        const d = it.keyword_data || {};
        add(lang, d.keyword, d.keyword_info && d.keyword_info.search_volume, "related");
      }
    }
    for (const q of topic.serp[lang]) {
      const b = await call("serp/google/organic/live/advanced",
        { keyword: q, language_code: lang, location_code: LOC_SERP[lang], device: "desktop", depth: 10, people_also_ask_click_depth: 1 },
        `${lang} serp «${q}»`);
      for (const it of items(b)) {
        if (it.type === "people_also_ask") for (const e of it.items || []) if (e.title) paa[lang].add(e.title.trim());
        if (it.type === "related_searches") for (const e of it.items || []) related[lang].add(String(e).trim());
      }
    }
  }

  if (DRY) { console.log(`\nDry run. Estimate: ~$${planned.toFixed(2)} (budget $${BUDGET}).`); return; }

  // classify
  const rows = [...kw.values()].map((r) => {
    let fit = "this page";
    if (!topic.relevant.test(r.keyword)) fit = "off topic";
    else {
      const hit = Object.entries(topic.otherPage).find(([, re]) => re.test(r.keyword));
      if (hit) fit = `${hit[0]} page`;
    }
    return { ...r, sources: [...r.sources].join("+"), fit };
  }).sort((a, b) => a.lang.localeCompare(b.lang) || b.volume - a.volume);

  fs.mkdirSync(OUT, { recursive: true });
  const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  fs.writeFileSync(path.join(OUT, `${TOPIC}.csv`),
    ["lang,fit,volume,keyword,sources", ...rows.map((r) => [r.lang, r.fit, r.volume, r.keyword, r.sources].map(esc).join(","))].join("\n") + "\n");

  const lines = [];
  const say = (l = "") => { console.log(l); lines.push(l); };
  say(`# Semantic core: ${TOPIC}`);
  say("");
  say(`Collected ${new Date().toISOString().slice(0, 10)}. Spent $${spent.toFixed(3)}. Volumes: suggestions — all locations; related — en US, pl Poland, ru Kazakhstan.`);
  for (const lang of Object.keys(topic.seeds)) {
    const mine = rows.filter((r) => r.lang === lang && r.fit === "this page");
    const other = rows.filter((r) => r.lang === lang && r.fit !== "this page" && r.fit !== "off topic");
    say("");
    say(`## ${lang.toUpperCase()}`);
    say("");
    if (topic.groups) {
      // survey topics: phrases split by venue type, with each group's total
      const groups = Object.entries(topic.groups).map(([name, re]) => {
        const g = mine.filter((r) => re.test(r.keyword));
        return { name, g, sum: g.reduce((a, r) => a + r.volume, 0) };
      });
      const grouped = new Set(groups.flatMap((x) => x.g));
      groups.push({ name: "other", g: mine.filter((r) => !grouped.has(r)), sum: 0 });
      groups.sort((a, b) => b.sum - a.sum);
      say(`### On topic (${mine.length}), by group`);
      for (const { name, g, sum } of groups) {
        if (!g.length) continue;
        say("");
        say(`#### ${name} — ${g.length} phrases${sum ? `, sum ${sum}` : ""}`);
        for (const r of g.slice(0, 20)) say(`- ${r.volume} · ${r.keyword}`);
      }
    } else {
      say(`### For this page (${mine.length})`);
      for (const r of mine.slice(0, 60)) say(`- ${r.volume} · ${r.keyword}`);
    }
    say("");
    say(`### Belongs to other pages — do not target here (${other.length})`);
    for (const r of other.slice(0, 15)) say(`- ${r.volume} · ${r.keyword} → ${r.fit}`);
    say("");
    say(`### People also ask (${paa[lang].size})`);
    for (const q of paa[lang]) say(`- ${q}`);
    say("");
    say(`### Related searches (${related[lang].size})`);
    for (const q of related[lang]) say(`- ${q}`);
  }
  if (failures.length) { say(""); say("## Failed calls"); for (const f of failures) say(`- ${f.label}: ${f.msg}`); }
  fs.writeFileSync(path.join(OUT, `${TOPIC}.md`), lines.join("\n") + "\n");
  console.log(`\nWritten: research/pseo/page-core/${TOPIC}.csv and .md`);
}

main().catch((e) => { console.error("Error:", e.message); process.exit(1); });
