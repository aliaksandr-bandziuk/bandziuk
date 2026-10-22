// scripts/dataforseo/pseo-industries.cjs
//
// Отрасли одной таблицей: ключ и три языковые формы.
//
// Зачем отдельно от pseo-vocab.cjs. В словаре отрасли лежат тремя
// независимыми списками, и сопоставить «dentists» с «gabinetu
// stomatologicznego» и «стоматологии» программно невозможно. А это нужно:
// правило владельца — отрасль, у которой спрос нашёлся хоть на одном языке,
// получает страницы на всех трёх. Для трёхъязычного сайта это и правильнее:
// неполные языковые группы портят hreflang.
//
// Формы здесь — ровно те строки, которые уже стоят в pseo-vocab.cjs и уже
// прогнаны через выгрузку. Благодаря этому объединение по ключу делается
// поверх готовых данных, без повторных вызовов API.
//
// Формы слов: ru — родительный падеж, pl — форма после dla, en — множественное
// число. Иначе шаблон даёт «продвижение сайта ресторан».
//
// Целостность таблицы проверяется скриптом: каждая форма обязана найтись в
// словаре своего языка. Расхождение печатается, а не проходит молча.

const INDUSTRY_TABLE = [
  // — есть кейсы и клиенты —
  { key: "restaurants", en: "restaurants", pl: "restauracji", ru: "ресторана" },
  { key: "law-firms", en: "law firms", pl: "kancelarii prawnej", ru: "юридической компании" },
  { key: "lawyers", en: "lawyers", pl: "adwokata", ru: "адвоката" },
  { key: "real-estate", en: "real estate agencies", pl: "agencji nieruchomości", ru: "агентства недвижимости" },
  { key: "property-developers", en: "property developers", pl: "dewelopera", ru: "застройщика" },
  { key: "photographers", en: "photographers", pl: "fotografa", ru: "фотографа" },
  { key: "psychologists", en: "psychologists", pl: "psychologa", ru: "психолога" },
  { key: "dental-offices", en: "dentists", pl: "gabinetu stomatologicznego", ru: "стоматологии" },
  { key: "auto-repair", en: "auto repair shops", pl: "warsztatu samochodowego", ru: "автосервиса" },
  { key: "construction", en: "construction companies", pl: "firmy budowlanej", ru: "строительной компании" },
  { key: "cleaning", en: "cleaning companies", pl: "firmy sprzątającej", ru: "клининговой компании" },
  { key: "beauty-salons", en: "beauty salons", pl: "salonu kosmetycznego", ru: "салона красоты" },
  { key: "medical-centres", en: "medical clinics", pl: "przychodni", ru: "медицинского центра" },
  { key: "hotels", en: "hotels", pl: "hotelu", ru: "отеля" },
  { key: "travel-agencies", en: "travel agencies", pl: "biura podróży", ru: "турагентства" },
  { key: "accounting", en: "accounting firms", pl: "biura rachunkowego", ru: "бухгалтерской компании" },
  { key: "recruitment", en: "recruitment agencies", pl: "agencji rekrutacyjnej", ru: "кадрового агентства" },
  { key: "language-schools", en: "language schools", pl: "szkoły językowej", ru: "языковой школы" },
  { key: "fitness", en: "fitness studios", pl: "studia fitness", ru: "фитнес клуба" },
  { key: "logistics", en: "logistics companies", pl: "firmy transportowej", ru: "транспортной компании" },
  { key: "manufacturing", en: "manufacturers", pl: "firmy produkcyjnej", ru: "производственной компании" },
  { key: "veterinary", en: "veterinary clinics", pl: "przychodni weterynaryjnej", ru: "ветеринарной клиники" },
  { key: "architects", en: "architects", pl: "biura architektonicznego", ru: "архитектурного бюро" },
  { key: "startups", en: "startups", pl: "startupu", ru: "стартапа" },

  // — торговля —
  { key: "furniture-stores", en: "furniture stores", pl: "sklepu meblowego", ru: "мебельного магазина" },
  { key: "clothing-stores", en: "clothing stores", pl: "sklepu odzieżowego", ru: "магазина одежды" },
  { key: "shoe-stores", en: "shoe stores", pl: "sklepu obuwniczego", ru: "обувного магазина" },
  { key: "toy-stores", en: "toy stores", pl: "sklepu z zabawkami", ru: "магазина игрушек" },
  { key: "pet-stores", en: "pet stores", pl: "sklepu zoologicznego", ru: "зоомагазина" },
  { key: "grocery-stores", en: "grocery stores", pl: "sklepu spożywczego", ru: "продуктового магазина" },
  { key: "hardware-stores", en: "hardware stores", pl: "sklepu budowlanego", ru: "строительного магазина" },
  { key: "bike-shops", en: "bike shops", pl: "sklepu rowerowego", ru: "велосипедного магазина" },
  { key: "electronics-stores", en: "electronics stores", pl: "sklepu z elektroniką", ru: "магазина электроники" },
  { key: "tyre-shops", en: "tyre shops", pl: "sklepu z oponami", ru: "шинного магазина" },
  { key: "florists", en: "florists", pl: "kwiaciarni", ru: "цветочного магазина" },
  { key: "bakeries", en: "bakeries", pl: "piekarni", ru: "пекарни" },
  { key: "patisseries", en: "pastry shops", pl: "cukierni", ru: "кондитерской" },
  { key: "pharmacies", en: "pharmacies", pl: "apteki", ru: "аптеки" },
  { key: "opticians", en: "opticians", pl: "optyka", ru: "оптики" },
  { key: "jewellers", en: "jewellers", pl: "jubilera", ru: "ювелирного магазина" },

  // — производство —
  { key: "factories", en: "factories", pl: "fabryki", ru: "завода" },
  { key: "furniture-makers", en: "furniture manufacturers", pl: "producenta mebli", ru: "производителя мебели" },
  { key: "window-makers", en: "window manufacturers", pl: "producenta okien", ru: "производителя окон" },
  { key: "door-makers", en: "door manufacturers", pl: "producenta drzwi", ru: "производителя дверей" },
  { key: "packaging", en: "packaging manufacturers", pl: "producenta opakowań", ru: "производителя упаковки" },
  { key: "machinery", en: "machine manufacturers", pl: "producenta maszyn", ru: "производителя оборудования" },
  { key: "metalworks", en: "metal fabricators", pl: "zakładu metalowego", ru: "металлообрабатывающего завода" },
  { key: "printing", en: "printing companies", pl: "drukarni", ru: "типографии" },
  { key: "clothing-makers", en: "clothing manufacturers", pl: "producenta odzieży", ru: "производителя одежды" },
  { key: "cosmetics-makers", en: "cosmetics manufacturers", pl: "producenta kosmetyków", ru: "производителя косметики" },
  { key: "food-producers", en: "food producers", pl: "producenta żywności", ru: "пищевого производства" },
  { key: "lingerie-makers", en: "lingerie manufacturers", pl: "producenta bielizny", ru: "производителя белья" },

  // — медицина и красота —
  { key: "clinics", en: "clinics", pl: "kliniki", ru: "клиники" },
  { key: "dental-clinics", en: "dental clinics", pl: "kliniki stomatologicznej", ru: "стоматологической клиники" },
  { key: "doctors", en: "doctors", pl: "gabinetu lekarskiego", ru: "врача" },
  { key: "physiotherapists", en: "physiotherapists", pl: "fizjoterapeuty", ru: "физиотерапевта" },
  { key: "nutritionists", en: "nutritionists", pl: "dietetyka", ru: "диетолога" },
  { key: "personal-trainers", en: "personal trainers", pl: "trenera personalnego", ru: "персонального тренера" },
  { key: "massage", en: "massage therapists", pl: "masażysty", ru: "массажиста" },
  { key: "cosmetologists", en: "cosmetologists", pl: "kosmetologa", ru: "косметолога" },
  { key: "hair-salons", en: "hair salons", pl: "fryzjera", ru: "парикмахерской" },
  { key: "barbershops", en: "barbershops", pl: "barbera", ru: "барбершопа" },
  { key: "tattoo-studios", en: "tattoo studios", pl: "salonu tatuażu", ru: "тату салона" },
  { key: "nail-salons", en: "nail salons", pl: "studia paznokci", ru: "маникюрного салона" },
  { key: "spas", en: "spas", pl: "spa", ru: "спа салона" },

  // — профессиональные услуги —
  { key: "tax-advisors", en: "tax advisors", pl: "doradcy podatkowego", ru: "налогового консультанта" },
  { key: "notaries", en: "notaries", pl: "notariusza", ru: "нотариуса" },
  { key: "translators", en: "translators", pl: "tłumacza", ru: "переводчика" },
  { key: "translation-agencies", en: "translation agencies", pl: "biura tłumaczeń", ru: "бюро переводов" },
  { key: "marketing-agencies", en: "marketing agencies", pl: "agencji marketingowej", ru: "маркетингового агентства" },
  { key: "event-agencies", en: "event agencies", pl: "agencji eventowej", ru: "event агентства" },
  { key: "wedding-photographers", en: "wedding photographers", pl: "fotografa ślubnego", ru: "свадебного фотографа" },
  { key: "wedding-planners", en: "wedding planners", pl: "organizatora wesel", ru: "организатора свадеб" },
  { key: "catering", en: "catering companies", pl: "firmy cateringowej", ru: "кейтеринговой компании" },
  { key: "driving-schools", en: "driving schools", pl: "szkoły jazdy", ru: "автошколы" },
  { key: "kindergartens", en: "kindergartens", pl: "przedszkola", ru: "детского сада" },
  { key: "tutors", en: "tutors", pl: "korepetytora", ru: "репетитора" },
  { key: "coaches", en: "coaches", pl: "coacha", ru: "коуча" },
  { key: "insurance", en: "insurance companies", pl: "firmy ubezpieczeniowej", ru: "страховой компании" },
  { key: "couriers", en: "courier companies", pl: "firmy kurierskiej", ru: "курьерской службы" },
  { key: "warehouses", en: "warehouses", pl: "magazynu", ru: "склада" },
  { key: "security", en: "security companies", pl: "firmy ochroniarskiej", ru: "охранной компании" },
  { key: "it-companies", en: "it companies", pl: "firmy IT", ru: "it компании" },
  { key: "software-houses", en: "software houses", pl: "agencji software house", ru: "разработчиков" },
  { key: "consultants", en: "consultants", pl: "konsultanta", ru: "консультанта" },

  // — ремёсла и быт —
  { key: "farms", en: "farms", pl: "gospodarstwa rolnego", ru: "фермерского хозяйства" },
  { key: "solar", en: "solar companies", pl: "firmy fotowoltaicznej", ru: "солнечных панелей" },
  { key: "renovation", en: "renovation companies", pl: "firmy remontowej", ru: "ремонтной компании" },
  { key: "carpenters", en: "carpenters", pl: "stolarza", ru: "мастера" },
  { key: "electricians", en: "electricians", pl: "elektryka", ru: "электрика" },
  { key: "plumbers", en: "plumbers", pl: "hydraulika", ru: "сантехника" },
  { key: "car-washes", en: "car washes", pl: "myjni samochodowej", ru: "автомойки" },
  { key: "car-dealers", en: "car dealers", pl: "komisu samochodowego", ru: "автосалона" },
  { key: "car-rental", en: "car rental companies", pl: "wypożyczalni samochodów", ru: "проката автомобилей" },
  { key: "bike-service", en: "bike repair shops", pl: "serwisu rowerowego", ru: "веломастерской" },
  { key: "antique-shops", en: "antique shops", pl: "antykwariatu", ru: "антикварного магазина" },
  { key: "sawmills", en: "sawmills", pl: "tartaku", ru: "лесопилки" },
  { key: "steelworks", en: "steel mills", pl: "huty", ru: "металлургического завода" },
  { key: "woodworking", en: "woodworking companies", pl: "zakładu stolarskiego", ru: "деревообрабатывающего завода" },

  // — сегменты, а не отрасли, но ищут их так же —
  { key: "small-business", en: "small business", pl: "małej firmy", ru: "малого бизнеса" },
  { key: "b2b", en: "b2b companies", pl: "firmy b2b", ru: "b2b компании" },
  { key: "saas", en: "saas companies", pl: "firmy saas", ru: "saas компании" },
  { key: "ecommerce", en: "ecommerce stores", pl: "sklepu internetowego", ru: "интернет-магазина" },
  { key: "nonprofits", en: "nonprofits", pl: "organizacji pozarządowej", ru: "некоммерческой организации" },
  { key: "models", en: "models", pl: "modelki", ru: "модели" },
];

/** Отрасль по языковой форме. Нужна, чтобы найти ключ по строке из выгрузки. */
function byForm(lang, form) {
  const f = String(form || "").toLowerCase().trim();
  return INDUSTRY_TABLE.find((r) => String(r[lang] || "").toLowerCase() === f) || null;
}

const keys = () => INDUSTRY_TABLE.map((r) => r.key);
const forms = (lang) => INDUSTRY_TABLE.map((r) => r[lang]).filter(Boolean);

module.exports = { INDUSTRY_TABLE, byForm, keys, forms };
