// scripts/dataforseo/pseo-seeds.cjs
//
// Сиды для программного сбора запросов под лендинги (pseo-discover.cjs).
// Отдельный файл, потому что это единственное, что придётся править руками
// между прогонами: качество сидов определяет весь результат.
//
// Почему сиды такие, а не «сайт» / «website» / «strona internetowa».
// Предыдущий сбор (research/dataforseo/keywords-*.csv, 1312 строк) шёл от
// однословных сидов, и keyword_ideas уехал туда, где у этого слова больше
// всего спроса: «одноклассники сайт», «жгу сайт», «how to harvard reference
// a website». Запросов много, к услугам Бандзюка не относится ни один.
// Поэтому здесь: минимум два слова, коммерческий или сервисный смысл,
// и расчёт на phrase-match (keyword_suggestions возвращает только фразы,
// содержащие сид целиком).
//
// Группы нужны не для красоты: группа переносится в CSV и становится
// черновиком кластера, то есть будущей посадочной страницей или её разделом.

const SEEDS = {
  pl: {
    "pozycjonowanie": [
      "pozycjonowanie stron",
      "pozycjonowanie sklepu",
      "pozycjonowanie lokalne",
      "pozycjonowanie w google",
    ],
    "audyt i optymalizacja": [
      "audyt seo",
      "audyt strony internetowej",
      "optymalizacja strony",
      "seo techniczne",
    ],
    // «strona internetowa dla» — самый продуктивный шаблон: ловит «сайт для
    // фотографа», «для юриста», «для biura nieruchomości». А «sklep internetowy
    // dla» в первом прогоне притащил покупателей вместо владельцев магазинов
    // («bluzki dla puszystych sklep internetowy»), поэтому заменён на запрос
    // от лица заказчика.
    "tworzenie stron": [
      "tworzenie stron internetowych",
      "projektowanie stron",
      "strona internetowa dla",
      "wykonanie sklepu internetowego",
    ],
    "wydajność": [
      "przyspieszenie strony",
      "szybkość strony",
      "core web vitals",
      "optymalizacja wydajności strony",
    ],
    "migracje i integracje": [
      "migracja strony",
      "integracja api",
      "headless cms",
      "strona wielojęzyczna",
    ],
    "ai i geo": [
      "optymalizacja pod ai",
      "widoczność w chatgpt",
      "seo dla ai",
    ],
    "wykonawca": [
      "specjalista seo",
      "konsultacje seo",
      "freelancer seo",
      "agencja seo warszawa",
    ],
    "ceny": [
      "ile kosztuje pozycjonowanie",
      "ile kosztuje strona internetowa",
      "cennik pozycjonowania",
    ],
  },

  ru: {
    "продвижение": [
      "продвижение сайта",
      "seo продвижение",
      "продвижение интернет магазина",
      "раскрутка сайта",
    ],
    "аудит и оптимизация": [
      "seo аудит",
      "аудит сайта",
      "оптимизация сайта",
      "техническое seo",
    ],
    // «сайт для» заменён: шаблон слишком широк и притащил «сайт для знакомств»,
    // «сайт для просмотра фильмов» и украинские «сайт для пошуку роботи».
    // Уточнённые формы сохраняют тот же смысл, но от лица заказчика.
    "разработка": [
      "создание сайта",
      "разработка сайта",
      "заказать сайт",
      "разработка сайта для",
      "заказать сайт для",
    ],
    "скорость": [
      "скорость сайта",
      "ускорить сайт",
      "core web vitals",
      "оптимизация скорости сайта",
    ],
    "миграции и интеграции": [
      "миграция сайта",
      "интеграция api",
      "headless cms",
      "многоязычный сайт",
    ],
    "ai и geo": [
      "оптимизация под ии",
      "продвижение в chatgpt",
      "seo для нейросетей",
    ],
    "исполнитель": [
      "seo специалист",
      "seo консультант",
      "seo фрилансер",
    ],
    "цены": [
      "сколько стоит продвижение сайта",
      "сколько стоит сайт",
      "цена разработки сайта",
    ],
    // Направление, где у сайта уже есть реальные показы (Франция, Кипр):
    // статьи о стоимости и порядке действий при переезде бизнеса.
    "релокация бизнеса": [
      "регистрация фирмы в польше",
      "бизнес в польше",
      "открыть фирму в",
    ],
  },

  en: {
    "seo services": [
      "seo audit",
      "technical seo",
      "seo consultant",
      "ecommerce seo",
      "local seo",
    ],
    "performance": [
      "website performance audit",
      "core web vitals",
      "page speed optimization",
      "website speed",
    ],
    // «website for» убран после первого прогона: в английском этот шаблон
    // принадлежит потребителю, а не заказчику сайта. Он вернул «website for
    // realtor.com» (1 000 000), «google translate for website» (823 000),
    // «website for downloading movies» (90 500). Польский аналог «strona
    // internetowa dla» работает прекрасно — там шаблон означает другое.
    "development": [
      "next js developer",
      "headless cms",
      "sanity cms",
      "api integration",
      "website for small business",
      "website redesign",
    ],
    // Дизайн — это этап начала работ, с него заказчик и начинает искать.
    "design": [
      "website design",
      "web design",
      "web design for",
      "website design for",
    ],
    "migration and i18n": [
      "website migration",
      "multilingual website",
      "hreflang",
    ],
    "ai and geo": [
      "generative engine optimization",
      "answer engine optimization",
      "ai search optimization",
      "chatgpt visibility",
      "llm seo",
    ],
    "pricing": [
      "how much does seo cost",
      "how much does a website cost",
      "seo pricing",
    ],
  },
};

// keyword_ideas уезжает в сторону самого частотного смысла слова, поэтому
// ему даются только те сиды, где слово само по себе уже означает услугу.
// Всё остальное собирается через phrase-match.
const IDEAS_SEEDS = {
  pl: ["pozycjonowanie stron internetowych", "audyt seo", "tworzenie stron internetowych"],
  ru: ["продвижение сайта", "seo аудит сайта", "разработка сайта"],
  en: ["seo audit", "technical seo audit", "generative engine optimization"],
};

// Фразы, которые делают запрос бесполезным для Бандзюка, даже если частота есть.
// Проверяется по вхождению подстроки в нормализованный запрос.
// Намеренно короткий и консервативный список: всё отсеянное пишется
// в rejected-<lang>.csv, чтобы решение можно было перепроверить.
// Вторая группа в каждом списке — потребительские запросы: человек ищет, где
// купить, а не кому заказать сайт. Добавлены после первого прогона, где сид
// «sklep internetowy dla» притащил «bluzki dla puszystych» и «tk maxx».
const STOP = {
  pl: [
    "darmo", "darmowy", "darmowa", "za darmo", "kurs", "szkolenie", "praca", "zarobki",
    "wix", "shopify", "wordpress.com", "allegro", "olx", "canva", "chatgpt login",
    "tk maxx", "ubranka", "bluzki", "niemowl", "dla puszystych", "dla plastyk", "dla domu",
    // Чужие отрасли: сид «agencja seo warszawa» притянул по фразе рекламное
    // агентство, PR, брендинг и платную рекламу. Это не услуги Бандзюка.
    "reklamow", "prasow", "brandin", "interaktywn", "promocyjn", "social media",
    "google ads", "agencja pr", "narzędzia", "narzedzia", "znaczek", "smolar",
  ],
  ru: [
    "бесплатн", "курс", "обучение", "вакансии", "работа", "зарплата",
    "вконтакте", "одноклассники", "госуслуги", "wix", "тильда", "конструктор сайтов", "авито",
    "купить", "отзывы покупателей", "детск", "одежда", "обувь",
    "знакомств", "фильм", "сериал", "кино", "бюджетн", "учителей", "переселенц", "торрент",
  ],
  en: [
    "free", "course", "tutorial", "salary", "jobs", "hiring", "certification",
    "wix", "squarespace", "godaddy", "fiverr", "upwork", "reddit", "login",
    "for sale", "coupon", "discount code", "amazon",
    "download", "movie", "anime", "pirated", "watch", "unblocked", "torrent",
    "citation", "apa ", "harvard", "speed test", "promo code", "translate",
    "realtor.com", "webmaster tools",
    // Добавлено после второго прогона: ищут картинки и инструменты, не услугу.
    "images for", "image for", "pictures for", "picture for", "photo for",
    "how to search", "search or enter", "ahrefs", "semrush", "moz ",
    "extension", "small seo", "template", "mockup", "font", "icon",
  ],
};

// Города и регионы. Нужны не для отсева, а для колонки geo в CSV: по ней
// видно, какая часть списка держится на географии, а какая на существе услуги.
// Это решение по стратегии, и принимать его надо глядя на число.
// Города на кириллице. Словарь локаций DataForSEO — на латинице, поэтому
// русские запросы по городам иначе не распознаются вовсе: «создание сайта
// астана» с 6600 запросов в месяц уезжало в базовые страницы.
// Список составлен по рынкам, где владелец сайта работает и где живёт его
// русскоязычная аудитория: Польша, Казахстан, Украина, Балтия, Кавказ,
// Германия, Кипр и крупные города для англоязычных направлений.
// Россия включена для РАСПОЗНАВАНИЯ: такие запросы нужно отделять, а не
// обслуживать — страниц под них не делаем.
const CITIES_RU = [
  "варшава", "варшаве", "варшаву", "краков", "кракове", "вроцлав", "вроцлаве",
  "познань", "познани", "гданьск", "гданьске", "катовице", "лодзь", "люблин",
  "щецин", "быдгощ", "белосток", "гдыня", "торунь", "ополе", "жешув", "ольштын",
  "астана", "астане", "алматы", "шымкент", "караганда", "актобе", "тараз",
  "павлодар", "усть-каменогорск", "атырау", "костанай", "кызылорда",
  "киев", "киеве", "харьков", "одесса", "одессе", "днепр", "львов", "львове",
  "запорожье", "винница", "николаев", "полтава",
  "вильнюс", "вильнюсе", "каунас", "рига", "риге", "таллин", "таллине",
  "тбилиси", "батуми", "ереван", "ереване", "кишинев", "баку", "ташкент", "бишкек",
  "берлин", "берлине", "мюнхен", "гамбург", "франкфурт", "кельн", "дюссельдорф",
  "лимассол", "лимассоле", "никосия", "никосии", "пафос", "ларнака", "ларнаке",
  "прага", "праге", "брно", "братислава", "будапешт", "вена", "вене", "белград",
  "лондон", "лондоне", "дублин", "амстердам", "барселона", "мадрид", "лиссабон",
  "милан", "рим", "париж", "дубай", "дубае", "стамбул", "анталия", "тель-авив",
  "нью-йорк", "торонто", "ванкувер", "сидней", "мельбурн", "окленд", "сингапур",
  "москва", "москве", "петербург", "спб", "новосибирск", "екатеринбург", "казань",
  "минск", "минске", "гомель", "брест", "гродно",
];

// Страны и рынки. Нужны барьером при сопоставлении спроса с существующими
// страницами: без них запрос «pozycjonowanie stron» сматчился со страницей
// «Pozycjonowanie stron w Holandii». В cities.json стран нет — там только
// локации типа City.
const COUNTRIES = {
  pl: ["polska", "polsce", "holandia", "holandii", "niemcy", "niemczech", "niemiecki", "francja",
    "francji", "francuski", "wlochy", "wloszech", "wloski", "szwajcaria", "szwajcarii",
    "szwajcarski", "irlandia", "irlandii", "irlandzki", "australia", "australii", "australijski",
    "amerykanski", "brytyjski", "brytania", "litwa", "lotwa", "estonia", "baltyckie", "hiszpania",
    "hiszpanii", "portugalia", "czarnogora", "gruzja", "tajlandia", "emiraty", "cypr", "cyprze",
    "czechy", "slowacja", "wegry", "szwecja", "norwegia", "dania", "finlandia", "indie",
    "usa", "uk", "zea", "eu", "ue", "wielka brytania", "brytanii", "niderlandy", "austria", "belgia", "grecja"],
  ru: ["польша", "польше", "голландия", "нидерланды", "германия", "германии", "франция", "франции",
    "италия", "италии", "швейцария", "швейцарии", "ирландия", "австралия", "америка", "сша",
    "британия", "британии", "литва", "латвия", "эстония", "испания", "испании", "португалия",
    "черногория", "грузия", "таиланд", "эмираты", "кипр", "кипре", "казахстан", "украина",
    "чехия", "словакия", "венгрия", "швеция", "норвегия", "дания", "финляндия", "индия",
    "сша", "оаэ", "ес", "великобритания", "великобритании", "британский", "британском",
    "британскии", "нидерланды", "голландии", "австрии", "бельгии", "греции"],
  en: ["poland", "polish", "netherlands", "dutch", "germany", "german", "france", "french",
    "italy", "italian", "switzerland", "swiss", "ireland", "irish", "australia", "australian",
    "america", "american", "usa", "britain", "british", "lithuania", "latvia", "estonia", "baltic",
    "spain", "spanish", "portugal", "montenegro", "georgia", "thailand", "thai", "emirates",
    "uae", "cyprus", "czechia", "slovakia", "hungary", "sweden", "norway", "denmark", "finland",
    "india", "indian", "canada", "canadian", "singapore", "ukraine", "kazakhstan",
    "usa", "uk", "us", "eu"],
};

const CITY = {
  pl: /warszaw|krak[oó]w|krakow|wroc[lł]aw|pozna[nń]|gda[nń]sk|gdynia|toru[nń]|[lł][oó]d[zź]|katowic|lublin|szczecin|bydgoszcz|bia[lł]ystok|rzesz[oó]w|olsztyn|kielce|opole|radom|sosnowiec|gliwic|zabrze|cz[eę]stochow|pruszk[oó]w|piaseczno|mazowiec|[sś]l[aą]sk|ma[lł]opol/i,
  ru: /варшав|краков|вроцлав|познан|гданьск|польш|москв|петербург|минск|киев|алматы|астан|ташкент|тбилиси|ереван|лимассол|никоси|кипр|берлин|германи|франци|париж|прага|вильнюс|рига|таллин/i,
  en: /warsaw|poland|krakow|london|uk\b|united kingdom|new york|usa\b|united states|berlin|germany|dubai|singapore|toronto|canada|australia|sydney|amsterdam|netherlands|ireland|dublin/i,
};

// Слова, которые не могут быть сегментом: они не называют заказчика.
// Иначе «web design for website» даёт сегмент «website», а «оптимизация фото
// для сайта» — сегмент «сайта».
const SEGMENT_STOP = {
  pl: ["stron", "strony", "stronie", "witryny", "sklepu", "google", "seo"],
  ru: ["сайт", "сайта", "сайтов", "сайте", "страницы", "google", "seo", "поиска", "поисковиков", "чайников", "новичков"],
  en: ["website", "websites", "site", "sites", "web", "page", "pages", "google", "seo", "search",
    "design", "designs", "designer", "free", "cheap", "beginners", "dummies", "sale", "local"],
};

module.exports = { SEEDS, IDEAS_SEEDS, STOP, CITY, CITIES_RU, COUNTRIES, SEGMENT_STOP };
