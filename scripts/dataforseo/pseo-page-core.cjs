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
