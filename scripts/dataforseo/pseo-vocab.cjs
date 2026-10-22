// scripts/dataforseo/pseo-vocab.cjs
//
// Словари для построения матрицы: услуги, отрасли, города.
//
// Матрица строится перемножением осей и проверяется массовой выгрузкой частот
// (keywords_data/google_ads/search_volume/live — 1000 фраз за вызов, $0.09).
// Поэтому формулировки здесь уже готовые, а не сиды для поиска: открытие тут
// не нужно, нужна проверка спроса у заранее заданной сетки.
//
// ВАЖНО про формы слов. В русском и польском отрасль стоит в той форме, в
// которой она встаёт в шаблон: «продвижение сайта ресторана», «strona
// internetowa dla restauracji». Поэтому отрасли записаны в родительном падеже
// (ru) и в форме после dla (pl), а в английском — во множественном числе.
// Писать их в именительном нельзя: получится «продвижение сайта ресторан».
//
// Рынки отобраны по языкам сайта. Россия исключена: владелец не работает с
// теми, кто там живёт и ведёт дела, и данных Keyword Planner по ней всё равно
// нет. Индия и Пакистан исключены как не его рынок.

// ---------------------------------------------------------------- услуги --
//
// Шаблон получает отрасль и возвращает готовую фразу. Несколько шаблонов на
// услугу — это разные способы, которыми один и тот же заказчик её ищет.

const SERVICE_TEMPLATES = {
  pl: [
    { key: "pozycjonowanie", t: (i) => `pozycjonowanie strony ${i}` },
    { key: "pozycjonowanie", t: (i) => `pozycjonowanie dla ${i}` },
    { key: "seo", t: (i) => `seo dla ${i}` },
    { key: "seo-lokalne", t: (i) => `pozycjonowanie lokalne dla ${i}` },
    { key: "audyt", t: (i) => `audyt seo dla ${i}` },
    { key: "strona", t: (i) => `strona internetowa dla ${i}` },
    { key: "strona", t: (i) => `strona dla ${i}` },
    { key: "tworzenie", t: (i) => `tworzenie stron internetowych dla ${i}` },
    { key: "projektowanie", t: (i) => `projektowanie strony dla ${i}` },
    { key: "sklep", t: (i) => `sklep internetowy dla ${i}` },
    { key: "landing", t: (i) => `landing page dla ${i}` },
    { key: "wizytowka", t: (i) => `strona wizytówka dla ${i}` },
    { key: "redesign", t: (i) => `przebudowa strony dla ${i}` },
    { key: "wordpress", t: (i) => `strona na wordpress dla ${i}` },
    { key: "cena", t: (i) => `ile kosztuje strona dla ${i}` },
    { key: "cena-seo", t: (i) => `ile kosztuje pozycjonowanie dla ${i}` },
  ],
  ru: [
    { key: "prodvizhenie", t: (i) => `продвижение сайта ${i}` },
    { key: "prodvizhenie", t: (i) => `seo продвижение ${i}` },
    { key: "seo", t: (i) => `seo для ${i}` },
    { key: "seo-local", t: (i) => `локальное seo для ${i}` },
    { key: "audit", t: (i) => `seo аудит сайта ${i}` },
    { key: "sozdanie", t: (i) => `создание сайта для ${i}` },
    { key: "razrabotka", t: (i) => `разработка сайта для ${i}` },
    { key: "sait", t: (i) => `сайт для ${i}` },
    { key: "zakaz", t: (i) => `заказать сайт для ${i}` },
    { key: "magazin", t: (i) => `интернет магазин для ${i}` },
    { key: "landing", t: (i) => `лендинг для ${i}` },
    { key: "vizitka", t: (i) => `сайт визитка для ${i}` },
    { key: "redesign", t: (i) => `редизайн сайта ${i}` },
    { key: "wordpress", t: (i) => `сайт на wordpress для ${i}` },
    { key: "cena", t: (i) => `сколько стоит сайт для ${i}` },
    { key: "cena-seo", t: (i) => `стоимость продвижения сайта ${i}` },
  ],
  en: [
    { key: "seo", t: (i) => `seo for ${i}` },
    { key: "seo", t: (i) => `${i} seo` },
    { key: "seo-services", t: (i) => `seo services for ${i}` },
    { key: "seo-local", t: (i) => `local seo for ${i}` },
    { key: "audit", t: (i) => `seo audit for ${i}` },
    { key: "website", t: (i) => `website for ${i}` },
    { key: "website-design", t: (i) => `${i} website design` },
    { key: "web-design", t: (i) => `web design for ${i}` },
    { key: "development", t: (i) => `website development for ${i}` },
    { key: "ecommerce", t: (i) => `ecommerce website for ${i}` },
    { key: "landing", t: (i) => `landing page for ${i}` },
    { key: "redesign", t: (i) => `website redesign for ${i}` },
    { key: "wordpress", t: (i) => `wordpress website for ${i}` },
    { key: "cost", t: (i) => `${i} website cost` },
    { key: "cost-seo", t: (i) => `seo cost for ${i}` },
  ],
};

// --------------------------------------------------------------- отрасли --
//
// Порядок осмысленный: сначала те, по которым у владельца есть кейсы и
// клиенты, потом остальные. Формы — см. примечание в шапке.

const { forms } = require("./pseo-industries.cjs");

// Отрасли выводятся из таблицы pseo-industries.cjs и отдельным списком здесь
// не живут. Так было раньше, и формы разъехались: три независимых списка на
// 102, 94 и 97 строк, в которых «dentists», «gabinetu stomatologicznego» и
// «стоматологии» никак не связаны между собой. А связь нужна: отрасль со
// спросом хоть на одном языке получает страницы на всех трёх.
const INDUSTRIES = { pl: forms("pl"), ru: forms("ru"), en: forms("en") };

// ----------------------------------------------------------------- города --
//
// Рынки, где живут языки сайта. Россия, Индия и Пакистан исключены сознательно.

const CITIES = {
  pl: [
    // Польша — основной рынок
    "warszawa", "kraków", "łódź", "wrocław", "poznań", "gdańsk", "szczecin", "bydgoszcz",
    "lublin", "białystok", "katowice", "gdynia", "częstochowa", "radom", "toruń",
    "sosnowiec", "kielce", "rzeszów", "gliwice", "zabrze", "olsztyn", "bielsko-biała",
    "bytom", "zielona góra", "rybnik", "ruda śląska", "opole", "tychy", "gorzów",
    "dąbrowa górnicza", "płock", "elbląg", "wałbrzych", "włocławek", "tarnów", "chorzów",
    "koszalin", "kalisz", "legnica", "grudziądz", "słupsk", "jaworzno", "nowy sącz",
    "jelenia góra", "siedlce", "konin", "piotrków", "inowrocław", "lubin", "ostrów wielkopolski",
    "pruszków", "piaseczno", "wołomin", "legionowo", "otwock", "śląsk", "mazowsze",
    // польская диаспора
    "londyn", "dublin", "berlin", "chicago", "amsterdam",
  ],
  ru: [
    // Казахстан
    "астана", "алматы", "шымкент", "караганда", "актобе", "тараз", "павлодар",
    "усть-каменогорск", "атырау", "костанай", "кызылорда", "актау", "семей", "уральск",
    // Украина
    "киев", "харьков", "одесса", "днепр", "львов", "запорожье", "винница", "николаев",
    "полтава", "черкассы", "чернигов", "ивано-франковск", "тернополь", "ужгород",
    // Балтия, Кавказ, Средняя Азия
    "вильнюс", "каунас", "рига", "таллин", "тбилиси", "батуми", "ереван", "баку",
    "ташкент", "бишкек", "кишинев",
    // Европа и Ближний Восток
    "варшава", "краков", "вроцлав", "познань", "гданьск", "прага", "берлин", "мюнхен",
    "гамбург", "франкфурт", "лимассол", "никосия", "пафос", "ларнака", "дубай",
    "абу-даби", "стамбул", "анталия", "тель-авив", "хайфа", "будва", "белград",
    "барселона", "мадрид", "лиссабон", "милан", "лондон", "вена", "хельсинки", "стокгольм",
  ],
  en: [
    // Великобритания и Ирландия
    "london", "manchester", "birmingham", "leeds", "glasgow", "edinburgh", "liverpool",
    "bristol", "cardiff", "belfast", "sheffield", "nottingham", "leicester", "newcastle",
    "dublin", "cork", "galway", "limerick",
    // США и Канада
    "new york", "los angeles", "chicago", "houston", "phoenix", "philadelphia", "san diego",
    "dallas", "austin", "san francisco", "seattle", "denver", "boston", "atlanta", "miami",
    "toronto", "vancouver", "montreal", "calgary", "ottawa", "edmonton",
    // Австралия и Новая Зеландия
    "sydney", "melbourne", "brisbane", "perth", "adelaide", "canberra", "gold coast",
    "auckland", "wellington", "christchurch",
    // Ближний Восток, Азия, Африка
    "dubai", "abu dhabi", "sharjah", "doha", "riyadh", "singapore", "hong kong",
    "cape town", "johannesburg", "tel aviv",
    // Европа, где бизнес говорит по-английски
    "amsterdam", "rotterdam", "berlin", "munich", "frankfurt", "zurich", "geneva",
    "vienna", "brussels", "copenhagen", "stockholm", "oslo", "helsinki", "warsaw",
    "prague", "lisbon", "madrid", "barcelona", "milan", "rome", "athens", "nicosia",
    "limassol", "malta", "luxembourg", "tallinn", "riga", "vilnius",
  ],
};

// Городские шаблоны: услуга плюс город, без отрасли.
const CITY_TEMPLATES = {
  pl: [
    { key: "pozycjonowanie", t: (c) => `pozycjonowanie stron ${c}` },
    { key: "tworzenie", t: (c) => `tworzenie stron internetowych ${c}` },
    { key: "projektowanie", t: (c) => `projektowanie stron ${c}` },
    { key: "seo", t: (c) => `agencja seo ${c}` },
    { key: "audyt", t: (c) => `audyt seo ${c}` },
    { key: "sklep", t: (c) => `sklep internetowy ${c}` },
    { key: "seo", t: (c) => `specjalista seo ${c}` },
  ],
  ru: [
    { key: "prodvizhenie", t: (c) => `продвижение сайта ${c}` },
    { key: "sozdanie", t: (c) => `создание сайта ${c}` },
    { key: "razrabotka", t: (c) => `разработка сайта ${c}` },
    { key: "seo", t: (c) => `seo продвижение ${c}` },
    { key: "seo", t: (c) => `seo специалист ${c}` },
    { key: "zakaz", t: (c) => `заказать сайт ${c}` },
    { key: "magazin", t: (c) => `интернет магазин ${c}` },
  ],
  en: [
    { key: "seo", t: (c) => `seo ${c}` },
    { key: "seo-services", t: (c) => `seo services ${c}` },
    { key: "web-design", t: (c) => `web design ${c}` },
    { key: "website-design", t: (c) => `website design ${c}` },
    { key: "development", t: (c) => `website development ${c}` },
    { key: "seo", t: (c) => `seo consultant ${c}` },
    { key: "ecommerce", t: (c) => `ecommerce website ${c}` },
  ],
};

// Семейства услуг. Разработка, дизайн и продвижение — РАЗНЫЕ страницы:
// «создание сайта для адвоката», «веб-дизайн сайта адвоката» и
// «SEO-продвижение сайта адвоката» покупают разные люди с разным намерением.
// До введения этой карты ключ страницы состоял только из отрасли, и все три
// схлопывались в одну строку.
const SERVICE_GROUP = {
  pozycjonowanie: "seo", seo: "seo", "seo-lokalne": "seo", "seo-local": "seo",
  "seo-services": "seo", prodvizhenie: "seo",
  audyt: "audit", audit: "audit",
  strona: "development", tworzenie: "development", sozdanie: "development",
  razrabotka: "development", sait: "development", zakaz: "development",
  website: "development", development: "development",
  landing: "landing", wizytowka: "landing", vizitka: "landing",
  projektowanie: "design", "web-design": "design", "website-design": "design",
  sklep: "ecommerce", magazin: "ecommerce", ecommerce: "ecommerce",
  redesign: "redesign",
  wordpress: "platform",
  cena: "price", cost: "price",
  "cena-seo": "price-seo", "cena-seo-": "price-seo", "cost-seo": "price-seo",
};

const serviceGroup = (key) => SERVICE_GROUP[key] || key || "";

// Отрасль плюс город — самая объёмная ось и самая важная для задачи «клиенты
// из разных городов». Шаблонов по два: больше умножать незачем, фразы начнут
// повторять друг друга, а платим мы за каждую.
const INDUSTRY_CITY_TEMPLATES = {
  pl: [
    (i, c) => `pozycjonowanie strony ${i} ${c}`,
    (i, c) => `strona internetowa dla ${i} ${c}`,
  ],
  ru: [
    (i, c) => `продвижение сайта ${i} ${c}`,
    (i, c) => `создание сайта для ${i} ${c}`,
  ],
  en: [
    (i, c) => `seo for ${i} in ${c}`,
    (i, c) => `${i} web design ${c}`,
  ],
};

// Услуги сами по себе, без отрасли и города: головные и окологоловные запросы.
const SERVICE_ONLY = {
  pl: [
    "pozycjonowanie stron", "pozycjonowanie stron internetowych", "pozycjonowanie sklepu internetowego",
    "pozycjonowanie lokalne", "audyt seo", "audyt strony internetowej", "seo techniczne",
    "optymalizacja strony", "tworzenie stron internetowych", "projektowanie stron internetowych",
    "strona wizytówka", "landing page", "sklep internetowy", "przebudowa strony internetowej",
    "migracja strony", "strona wielojęzyczna", "integracja api", "headless cms",
    "optymalizacja wydajności strony", "core web vitals", "utrzymanie strony internetowej",
    "pozycjonowanie w chatgpt", "optymalizacja pod ai", "seo międzynarodowe",
    "konsultacje seo", "specjalista seo", "freelancer seo", "agencja seo",
    "cennik pozycjonowania", "ile kosztuje strona internetowa", "ile kosztuje pozycjonowanie",
    "sklep na shopify", "sklep na prestashop", "strona na wordpress", "ux ui audyt",
  ],
  ru: [
    "продвижение сайта", "seo продвижение сайта", "продвижение интернет магазина",
    "локальное seo", "seo аудит", "аудит сайта", "техническое seo", "оптимизация сайта",
    "создание сайта", "разработка сайта", "сайт визитка", "лендинг", "интернет магазин",
    "редизайн сайта", "миграция сайта", "многоязычный сайт", "интеграция api",
    "headless cms", "оптимизация скорости сайта", "core web vitals", "поддержка сайта",
    "продвижение в chatgpt", "оптимизация под ии", "международное seo",
    "seo консультация", "seo специалист", "seo фрилансер", "seo агентство",
    "стоимость продвижения сайта", "сколько стоит сайт", "цена разработки сайта",
    "сайт на shopify", "сайт на wordpress", "ux ui аудит", "сайт под ключ",
  ],
  en: [
    "seo services", "seo consultant", "technical seo", "local seo", "seo audit",
    "website audit", "ecommerce seo", "international seo", "website development",
    "web design", "website design", "landing page development", "ecommerce website development",
    "website redesign", "website migration", "multilingual website", "api integration",
    "headless cms", "website performance optimization", "core web vitals",
    "website maintenance", "generative engine optimization", "answer engine optimization",
    "ai search optimization", "chatgpt visibility", "llm seo", "seo pricing",
    "website development cost", "shopify development", "wordpress development",
    "nextjs development", "sanity cms", "ux ui audit", "conversion rate optimization",
  ],
};

module.exports = { SERVICE_TEMPLATES, INDUSTRIES, CITIES, CITY_TEMPLATES, INDUSTRY_CITY_TEMPLATES, SERVICE_ONLY, SERVICE_GROUP, serviceGroup };
