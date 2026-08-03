// scripts/apply-batchB-links.cjs
// Batch B: industry landings -> capability pages (Step 2 forward) + service-page link + /pricing link.
const path = require("path");
const { createClient } = require("@sanity/client");
const { insertInlineLink, replaceText } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");

const HREF = {
  multilingual: { en: "/multilingual-website-development", pl: "/pl/tworzenie-stron-wielojezycznych", ru: "/ru/razrabotka-multiyazychnogo-saita" },
  catalog: { en: "/catalog-website-with-filters", pl: "/pl/strona-katalogowa-z-filtrami", ru: "/ru/sait-katalog-s-filtrami" },
  onlineBooking: { en: "/website-with-online-booking", pl: "/pl/strona-z-rezerwacja-online", ru: "/ru/sait-s-onlain-zapisyu" },
  platformMigration: { en: "/website-platform-migration", pl: "/pl/migracja-strony-na-inna-platforme", ru: "/ru/perenos-saita-na-druguyu-platformu" },
  websiteDev: { en: "/website-development", pl: "/pl/tworzenie-stron-internetowych", ru: "/ru/razrabotka-saitov" },
  seoStrategy: { en: "/seo-optimization-and-strategy", pl: "/pl/strategia-i-optymalizacja-seo", ru: "/ru/seo-optimizaciya-i-strategiya" },
  aiReadySeo: { en: "/ai-ready-seo-and-geo-optimization", pl: "/pl/ai-seo-and-geo-optymalizacja", ru: "/ru/ai-seo-i-geo-optimizaciya" },
  pricing: { en: "/pricing", pl: "/pl/cennik", ru: "/ru/ceny" },
};

const WD_SENTENCE = {
  en: " This is what website development looks like when the structure comes first.",
  pl: " Tak wygląda tworzenie strony internetowej, kiedy struktura jest na pierwszym miejscu.",
  ru: " Так выглядит разработка сайта, когда структура стоит на первом месте.",
};
const WD_ANCHOR = { en: "website development", pl: "tworzenie strony internetowej", ru: "разработка сайта" };

// Each entry operates on ONE document's textContent block. `replacements`/`links` apply in order.
const TEXTCONTENT_PLAN = [
  // --- dental ---
  { id: "singlepage-dental-clinic-website", lang: "en", replacements: [], links: [{ matchText: "a booking option", href: HREF.onlineBooking.en }] },
  { id: "singlepage-dental-clinic-website.pl", lang: "pl", replacements: [], links: [{ matchText: "możliwość rezerwacji", href: HREF.onlineBooking.pl }] },
  { id: "singlepage-dental-clinic-website.ru", lang: "ru", replacements: [], links: [{ matchText: "возможность записаться", href: HREF.onlineBooking.ru }] },
  { id: "singlepage-dental-clinic-website", lang: "en", replacements: [{ old: "builds more trust in this field than promotional language ever does.", new: "builds more trust in this field than promotional language ever does." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-dental-clinic-website.pl", lang: "pl", replacements: [{ old: "buduje w tej branży więcej zaufania niż język promocyjny.", new: "buduje w tej branży więcej zaufania niż język promocyjny." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-dental-clinic-website.ru", lang: "ru", replacements: [{ old: "в этой сфере вызывает больше доверия, чем рекламный язык.", new: "в этой сфере вызывает больше доверия, чем рекламный язык." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  // --- veterinary ---
  { id: "singlepage-veterinary-clinic", lang: "en", replacements: [{ old: "not behind a menu.", new: "not behind a menu. The same goes for booking the visit — it should be one tap away, not a phone call during business hours." }], links: [{ matchText: "booking the visit", href: HREF.onlineBooking.en }] },
  { id: "singlepage-veterinary-clinic.pl", lang: "pl", replacements: [{ old: "a nie za menu.", new: "a nie za menu. To samo dotyczy rezerwacji wizyty — powinna być o jedno kliknięcie, a nie telefon w godzinach pracy." }], links: [{ matchText: "rezerwacji wizyty", href: HREF.onlineBooking.pl }] },
  { id: "singlepage-veterinary-clinic.ru", lang: "ru", replacements: [{ old: "а не то, что спрятано за меню.", new: "а не то, что спрятано за меню. То же касается записи на приём — она должна занимать одно нажатие, а не звонок в рабочие часы." }], links: [{ matchText: "записи на приём", href: HREF.onlineBooking.ru }] },
  { id: "singlepage-veterinary-clinic", lang: "en", replacements: [{ old: "no amount of copy about compassion can.", new: "no amount of copy about compassion can." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-veterinary-clinic.pl", lang: "pl", replacements: [{ old: "więcej niż jakikolwiek akapit o empatii.", new: "więcej niż jakikolwiek akapit o empatii." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-veterinary-clinic.ru", lang: "ru", replacements: [{ old: "больше, чем любой абзац о сострадании.", new: "больше, чем любой абзац о сострадании." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  // --- language-school ---
  { id: "singlepage-language-school", lang: "en", replacements: [], links: [
    { matchText: "a way to sign up and pay without a phone call", href: HREF.onlineBooking.en },
  ]},
  { id: "singlepage-language-school.pl", lang: "pl", replacements: [], links: [
    { matchText: "możliwość zapisu i opłacenia bez telefonu", href: HREF.onlineBooking.pl },
  ]},
  { id: "singlepage-language-school.ru", lang: "ru", replacements: [], links: [
    { matchText: "возможность записаться и оплатить без звонка", href: HREF.onlineBooking.ru },
  ]},
  { id: "singlepage-language-school", lang: "en", replacements: [], links: [
    { matchText: "a multilingual structure question", href: HREF.multilingual.en },
  ]},
  { id: "singlepage-language-school.pl", lang: "pl", replacements: [], links: [
    { matchText: "kwestia struktury wielojęzycznej", href: HREF.multilingual.pl },
  ]},
  { id: "singlepage-language-school.ru", lang: "ru", replacements: [], links: [
    { matchText: "вопрос мультиязычной структуры", href: HREF.multilingual.ru },
  ]},
  { id: "singlepage-language-school", lang: "en", replacements: [{ old: "they come back next term, if at all.", new: "they come back next term, if at all." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-language-school.pl", lang: "pl", replacements: [{ old: "wraca w następnym semestrze, o ile w ogóle.", new: "wraca w następnym semestrze, o ile w ogóle." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-language-school.ru", lang: "ru", replacements: [{ old: "он возвращается в следующий поток, если вообще возвращается.", new: "он возвращается в следующий поток, если вообще возвращается." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  // --- fitness ---
  { id: "singlepage-fitness-studio", lang: "en", replacements: [], links: [{ matchText: "the class they book", href: HREF.onlineBooking.en }] },
  { id: "singlepage-fitness-studio.pl", lang: "pl", replacements: [], links: [{ matchText: "które rezerwują", href: HREF.onlineBooking.pl }] },
  { id: "singlepage-fitness-studio.ru", lang: "ru", replacements: [], links: [{ matchText: "которое они бронируют", href: HREF.onlineBooking.ru }] },
  { id: "singlepage-fitness-studio", lang: "en", replacements: [{ old: "Everything else on the site is secondary to that sequence.", new: "Everything else on the site is secondary to that sequence." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-fitness-studio.pl", lang: "pl", replacements: [{ old: "Cała reszta strony jest wobec tej sekwencji drugorzędna.", new: "Cała reszta strony jest wobec tej sekwencji drugorzędna." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-fitness-studio.ru", lang: "ru", replacements: [{ old: "Всё остальное на сайте по отношению к этой последовательности вторично.", new: "Всё остальное на сайте по отношению к этой последовательности вторично." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  // --- restaurant ---
  { id: "singlepage-restaurant", lang: "en", replacements: [], links: [{ matchText: "can I get a table", href: HREF.onlineBooking.en }] },
  { id: "singlepage-restaurant.pl", lang: "pl", replacements: [], links: [{ matchText: "czy będzie stolik", href: HREF.onlineBooking.pl }] },
  { id: "singlepage-restaurant.ru", lang: "ru", replacements: [], links: [{ matchText: "будет ли столик", href: HREF.onlineBooking.ru }] },
  { id: "singlepage-restaurant", lang: "en", replacements: [{ old: "which is the only way anyone books them.", new: "which is the only way anyone books them." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-restaurant.pl", lang: "pl", replacements: [{ old: "a tylko tak ktokolwiek je rezerwuje.", new: "a tylko tak ktokolwiek je rezerwuje." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-restaurant.ru", lang: "ru", replacements: [{ old: "а только так их и бронируют.", new: "а только так их и бронируют." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  // --- hotel ---
  { id: "singlepage-hotel-website", lang: "en", replacements: [], links: [{ matchText: "the booking path itself", href: HREF.onlineBooking.en }] },
  { id: "singlepage-hotel-website.pl", lang: "pl", replacements: [], links: [{ matchText: "ścieżki rezerwacji", href: HREF.onlineBooking.pl }] },
  { id: "singlepage-hotel-website.ru", lang: "ru", replacements: [], links: [{ matchText: "пути бронирования", href: HREF.onlineBooking.ru }] },
  { id: "singlepage-hotel-website", lang: "en", replacements: [], links: [{ matchText: "multilingual sites", href: HREF.multilingual.en }] },
  { id: "singlepage-hotel-website.pl", lang: "pl", replacements: [], links: [{ matchText: "strony wielojęzyczne", href: HREF.multilingual.pl }] },
  { id: "singlepage-hotel-website.ru", lang: "ru", replacements: [], links: [{ matchText: "мультиязычные сайты", href: HREF.multilingual.ru }] },
  { id: "singlepage-hotel-website", lang: "en", replacements: [{ old: "it's a line in the accounts.", new: "it's a line in the accounts." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-hotel-website.pl", lang: "pl", replacements: [{ old: "jest pozycją w rachunku.", new: "jest pozycją w rachunku." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-hotel-website.ru", lang: "ru", replacements: [{ old: "а строка в отчёте.", new: "а строка в отчёте." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  // --- travel-agency ---
  { id: "singlepage-travel-agency", lang: "en", replacements: [{ old: "exactly that structure is what brings the traffic.", new: "exactly that structure is what brings the traffic. The same applies to language versions for agencies serving international clients." }], links: [
    { matchText: "filterable catalogues", href: HREF.catalog.en },
    { matchText: "language versions", href: HREF.multilingual.en },
  ]},
  { id: "singlepage-travel-agency.pl", lang: "pl", replacements: [{ old: "dokładnie ta struktura przynosi ruch.", new: "dokładnie ta struktura przynosi ruch. To samo dotyczy wersji językowych dla biur obsługujących klientów zagranicznych." }], links: [
    { matchText: "katalogi z filtrowaniem", href: HREF.catalog.pl },
    { matchText: "wersji językowych", href: HREF.multilingual.pl },
  ]},
  { id: "singlepage-travel-agency.ru", lang: "ru", replacements: [{ old: "именно такая структура приносит трафик.", new: "именно такая структура приносит трафик. То же касается языковых версий для агентств, работающих с иностранными клиентами." }], links: [
    { matchText: "каталоги с фильтрами", href: HREF.catalog.ru },
    { matchText: "языковых версий", href: HREF.multilingual.ru },
  ]},
  { id: "singlepage-travel-agency", lang: "en", replacements: [{ old: "loses to the alternative by default.", new: "loses to the alternative by default." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-travel-agency.pl", lang: "pl", replacements: [{ old: "domyślnie przegrywa z alternatywą.", new: "domyślnie przegrywa z alternatywą." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-travel-agency.ru", lang: "ru", replacements: [{ old: "по умолчанию проигрывает альтернативе.", new: "по умолчанию проигрывает альтернативе." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  // --- logistics ---
  { id: "singlepage-logistics-company", lang: "en", replacements: [], links: [{ matchText: "Multilingual structure", href: HREF.multilingual.en }] },
  { id: "singlepage-logistics-company.pl", lang: "pl", replacements: [], links: [{ matchText: "Struktura wielojęzyczna", href: HREF.multilingual.pl }] },
  { id: "singlepage-logistics-company.ru", lang: "ru", replacements: [], links: [{ matchText: "Мультиязычная структура", href: HREF.multilingual.ru }] },
  { id: "singlepage-logistics-company", lang: "en", replacements: [{ old: "wastes half of what the site could do.", new: "wastes half of what the site could do." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-logistics-company.pl", lang: "pl", replacements: [{ old: "marnuje połowę możliwości strony.", new: "marnuje połowę możliwości strony." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-logistics-company.ru", lang: "ru", replacements: [{ old: "тратит впустую половину возможностей сайта.", new: "тратит впустую половину возможностей сайта." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  // --- recruitment ---
  { id: "singlepage-recruitment-agency", lang: "en", replacements: [{ old: "set up so the versions work independently rather than against each other.", new: "set up so the versions work independently rather than against each other. The same principle — dedicated, filterable pages — is what makes a job catalogue findable, and it's a multilingual structure question as much as a translation one." }], links: [
    { matchText: "a job catalogue", href: HREF.catalog.en },
    { matchText: "a multilingual structure question", href: HREF.multilingual.en },
  ]},
  { id: "singlepage-recruitment-agency.pl", lang: "pl", replacements: [{ old: "ustawionych tak, żeby wersje działały niezależnie, a nie przeciwko sobie.", new: "ustawionych tak, żeby wersje działały niezależnie, a nie przeciwko sobie. Ta sama zasada — dedykowane, filtrowalne podstrony — sprawia, że katalog ofert pracy daje się znaleźć, a to kwestia struktury wielojęzycznej, nie tylko tłumaczenia." }], links: [
    { matchText: "katalog ofert pracy", href: HREF.catalog.pl },
    { matchText: "struktury wielojęzycznej", href: HREF.multilingual.pl },
  ]},
  { id: "singlepage-recruitment-agency.ru", lang: "ru", replacements: [{ old: "и сайту нужны оба — настроенные так, чтобы версии работали независимо, а не друг против друга.", new: "и сайту нужны оба — настроенные так, чтобы версии работали независимо, а не друг против друга. Тот же принцип — выделенные, фильтруемые страницы — делает каталог вакансий находимым, и это вопрос мультиязычной структуры не меньше, чем перевода." }], links: [
    { matchText: "каталог вакансий", href: HREF.catalog.ru },
    { matchText: "мультиязычной структуры", href: HREF.multilingual.ru },
  ]},
  { id: "singlepage-recruitment-agency", lang: "en", replacements: [{ old: "it convinces neither.", new: "it convinces neither." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-recruitment-agency.pl", lang: "pl", replacements: [{ old: "nie przekonuje żadnej.", new: "nie przekonuje żadnej." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-recruitment-agency.ru", lang: "ru", replacements: [{ old: "это не убеждает никого.", new: "это не убеждает никого." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  // --- manufacturing ---
  { id: "singlepage-manufacturing-company", lang: "en", replacements: [{ old: "and can leave a site worse off than before.", new: "and can leave a site worse off than before. Getting that multilingual structure right is what makes the difference, the same way a filterable product catalogue makes a large range findable." }], links: [
    { matchText: "that multilingual structure", href: HREF.multilingual.en },
    { matchText: "a filterable product catalogue", href: HREF.catalog.en },
  ]},
  { id: "singlepage-manufacturing-company.pl", lang: "pl", replacements: [{ old: "i mogą zostawić stronę w gorszym stanie niż wcześniej.", new: "i mogą zostawić stronę w gorszym stanie niż wcześniej. Dopracowanie tej struktury wielojęzycznej robi różnicę, podobnie jak filtrowany katalog produktowy sprawia, że szeroki asortyment daje się znaleźć." }], links: [
    { matchText: "tej struktury wielojęzycznej", href: HREF.multilingual.pl },
    { matchText: "filtrowany katalog produktowy", href: HREF.catalog.pl },
  ]},
  { id: "singlepage-manufacturing-company.ru", lang: "ru", replacements: [{ old: "и могут оставить сайт в худшем состоянии, чем был.", new: "и могут оставить сайт в худшем состоянии, чем был. Выстроить эту мультиязычную структуру — и есть разница, так же как фильтруемый каталог продукции делает широкий ассортимент находимым." }], links: [
    { matchText: "эту мультиязычную структуру", href: HREF.multilingual.ru },
    { matchText: "фильтруемый каталог продукции", href: HREF.catalog.ru },
  ]},
  { id: "singlepage-manufacturing-company", lang: "en", replacements: [{ old: "persuaded by a description of your company's values.", new: "persuaded by a description of your company's values." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-manufacturing-company.pl", lang: "pl", replacements: [{ old: "nie da się jej przekonać opisem wartości firmy.", new: "nie da się jej przekonać opisem wartości firmy." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-manufacturing-company.ru", lang: "ru", replacements: [{ old: "его не убедить описанием ценностей компании.", new: "его не убедить описанием ценностей компании." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  // --- startup (Step2: platform-migration natural + multilingual bridge; Step5: ai-ready-seo natural, NOT website-development) ---
  { id: "singlepage-startup-website", lang: "en", replacements: [{ old: "Choosing a stack you'd be comfortable owning avoids that step entirely.", new: "Choosing a stack you'd be comfortable owning avoids that step entirely. The same forward planning applies to language versions — building the structure in from the start costs far less than adding it after the fact." }], links: [
    { matchText: "a migration", href: HREF.platformMigration.en },
    { matchText: "language versions", href: HREF.multilingual.en },
  ]},
  { id: "singlepage-startup-website.pl", lang: "pl", replacements: [{ old: "Wybór stacku, który spokojnie moglibyście posiadać, eliminuje ten krok w całości.", new: "Wybór stacku, który spokojnie moglibyście posiadać, eliminuje ten krok w całości. To samo wyprzedzające planowanie dotyczy wersji językowych — zbudowanie tej struktury od początku kosztuje dużo mniej niż dodanie jej później." }], links: [
    { matchText: "migrację", href: HREF.platformMigration.pl },
    { matchText: "wersji językowych", href: HREF.multilingual.pl },
  ]},
  { id: "singlepage-startup-website.ru", lang: "ru", replacements: [{ old: "Выбор стека, которым вы спокойно могли бы владеть, убирает этот шаг целиком.", new: "Выбор стека, которым вы спокойно могли бы владеть, убирает этот шаг целиком. То же дальновидное планирование касается языковых версий — заложить эту структуру с самого начала стоит намного дешевле, чем добавлять её потом." }], links: [
    { matchText: "миграцию", href: HREF.platformMigration.ru },
    { matchText: "языковых версий", href: HREF.multilingual.ru },
  ]},
  { id: "singlepage-startup-website", lang: "en", replacements: [], links: [{ matchText: "readiness for AI assistants", href: HREF.aiReadySeo.en }] },
  { id: "singlepage-startup-website.pl", lang: "pl", replacements: [], links: [{ matchText: "gotowości na asystentów AI", href: HREF.aiReadySeo.pl }] },
  { id: "singlepage-startup-website.ru", lang: "ru", replacements: [], links: [{ matchText: "готовности к ИИ-ассистентам", href: HREF.aiReadySeo.ru }] },

  // --- web-development-warsaw (Step2: platform-migration bridge; Step5: website-development) ---
  { id: "singlepage-web-development-warsaw", lang: "en", replacements: [{ old: "retrofitted after launch.", new: "retrofitted after launch. That same planning is what makes a platform migration safe when a business outgrows its current setup." }], links: [{ matchText: "a platform migration", href: HREF.platformMigration.en }] },
  { id: "singlepage-web-development-warsaw.pl", lang: "pl", replacements: [{ old: "doklejoną po starcie.", new: "doklejoną po starcie. To samo planowanie sprawia, że migracja na inną platformę jest bezpieczna, gdy firma wyrasta z obecnego rozwiązania." }], links: [{ matchText: "migracja na inną platformę", href: HREF.platformMigration.pl }] },
  { id: "singlepage-web-development-warsaw.ru", lang: "ru", replacements: [{ old: "а не пристроенной после запуска.", new: "а не пристроенной после запуска. То же планирование делает перенос на другую платформу безопасным, когда бизнес перерастает текущее решение." }], links: [{ matchText: "перенос на другую платформу", href: HREF.platformMigration.ru }] },
  { id: "singlepage-web-development-warsaw", lang: "en", replacements: [{ old: "friction when it's unfamiliar.", new: "friction when it's unfamiliar." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-web-development-warsaw.pl", lang: "pl", replacements: [{ old: "jest tarciem, gdy jest nieznane.", new: "jest tarciem, gdy jest nieznane." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-web-development-warsaw.ru", lang: "ru", replacements: [{ old: "это становится трением, когда незнакомо.", new: "это становится трением, когда незнакомо." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  // --- online-booking (Step5: website-development only; Step2 doesn't apply to itself) ---
  { id: "singlepage-online-booking", lang: "en", replacements: [{ old: "inheriting from a plugin's defaults.", new: "inheriting from a plugin's defaults." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-online-booking.pl", lang: "pl", replacements: [{ old: "a nie dziedziczyć z domyślnych ustawień wtyczki.", new: "a nie dziedziczyć z domyślnych ustawień wtyczki." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-online-booking.ru", lang: "ru", replacements: [{ old: "а не наследовать из настроек плагина по умолчанию.", new: "а не наследовать из настроек плагина по умолчанию." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  // --- multilingual, catalog, platform-migration -> seo-optimization-and-strategy (natural existing anchors) ---
  { id: "singlepage-multilingual-website", lang: "en", replacements: [], links: [{ matchText: "the hreflang and canonical setup", href: HREF.seoStrategy.en }] },
  { id: "singlepage-multilingual-website.pl", lang: "pl", replacements: [], links: [{ matchText: "konfiguracja hreflang i adresów kanonicznych", href: HREF.seoStrategy.pl }] },
  { id: "singlepage-multilingual-website.ru", lang: "ru", replacements: [], links: [{ matchText: "настройка hreflang и канонических адресов", href: HREF.seoStrategy.ru }] },

  { id: "singlepage-catalog-website", lang: "en", replacements: [], links: [{ matchText: "dedicated pages for the combinations that carry real demand", href: HREF.seoStrategy.en }] },
  { id: "singlepage-catalog-website.pl", lang: "pl", replacements: [], links: [{ matchText: "dedykowane podstrony pod kombinacje z realnym popytem", href: HREF.seoStrategy.pl }] },
  { id: "singlepage-catalog-website.ru", lang: "ru", replacements: [], links: [{ matchText: "отдельные страницы под комбинации с реальным спросом", href: HREF.seoStrategy.ru }] },

  { id: "singlepage-platform-migration", lang: "en", replacements: [], links: [{ matchText: "the old site's search equity", href: HREF.seoStrategy.en }] },
  { id: "singlepage-platform-migration.pl", lang: "pl", replacements: [], links: [{ matchText: "dorobek starej strony w wyszukiwarce", href: HREF.seoStrategy.pl }] },
  { id: "singlepage-platform-migration.ru", lang: "ru", replacements: [], links: [{ matchText: "поисковому активу старого сайта", href: HREF.seoStrategy.ru }] },

  // --- accounting, architecture, photographer, cleaning -> website-development (last paragraph, no Step2 links) ---
  { id: "singlepage-accounting-firm", lang: "en", replacements: [{ old: "says something about the firm that no amount of copy about professionalism can.", new: "says something about the firm that no amount of copy about professionalism can." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-accounting-firm.pl", lang: "pl", replacements: [{ old: "mówi o biurze więcej niż jakikolwiek akapit o profesjonalizmie.", new: "mówi o biurze więcej niż jakikolwiek akapit o profesjonalizmie." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-accounting-firm.ru", lang: "ru", replacements: [{ old: "говорит о фирме больше, чем любой абзац о профессионализме.", new: "говорит о фирме больше, чем любой абзац о профессионализме." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  { id: "singlepage-architecture-studio", lang: "en", replacements: [{ old: "long before they're ready to choose a studio.", new: "long before they're ready to choose a studio." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-architecture-studio.pl", lang: "pl", replacements: [{ old: "na długo przed wyborem pracowni.", new: "na długo przed wyborem pracowni." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-architecture-studio.ru", lang: "ru", replacements: [{ old: "задолго до выбора бюро.", new: "задолго до выбора бюро." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  { id: "singlepage-photographer", lang: "en", replacements: [{ old: "which they'll repeat to whoever asks them for a recommendation.", new: "which they'll repeat to whoever asks them for a recommendation." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-photographer.pl", lang: "pl", replacements: [{ old: "a to ostatnie wrażenie, które klient zabiera ze sobą i powtarza każdemu, kto poprosi go o polecenie.", new: "a to ostatnie wrażenie, które klient zabiera ze sobą i powtarza każdemu, kto poprosi go o polecenie." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-photographer.ru", lang: "ru", replacements: [{ old: "и повторяет каждому, кто попросит у него рекомендацию.", new: "и повторяет каждому, кто попросит у него рекомендацию." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },

  { id: "singlepage-cleaning-company", lang: "en", replacements: [{ old: "persuades neither and ranks for neither set of searches.", new: "persuades neither and ranks for neither set of searches." + WD_SENTENCE.en }], links: [{ matchText: WD_ANCHOR.en, href: HREF.websiteDev.en }] },
  { id: "singlepage-cleaning-company.pl", lang: "pl", replacements: [{ old: "nie przekonuje żadnego i nie rankuje na żaden z tych zestawów zapytań.", new: "nie przekonuje żadnego i nie rankuje na żaden z tych zestawów zapytań." + WD_SENTENCE.pl }], links: [{ matchText: WD_ANCHOR.pl, href: HREF.websiteDev.pl }] },
  { id: "singlepage-cleaning-company.ru", lang: "ru", replacements: [{ old: "не убеждает никого и не ранжируется ни по одному набору запросов.", new: "не убеждает никого и не ранжируется ни по одному набору запросов." + WD_SENTENCE.ru }], links: [{ matchText: WD_ANCHOR.ru, href: HREF.websiteDev.ru }] },
];

// pricing links (FAQ Q1 answer block, separate mechanism)
const PRICING_PLAN = [
  { id: "singlepage-accounting-firm", lang: "en", matchText: "From €2,000" },
  { id: "singlepage-accounting-firm.pl", lang: "pl", matchText: "Od 8500 zł" },
  { id: "singlepage-accounting-firm.ru", lang: "ru", matchText: "От 2000 €" },

  { id: "singlepage-architecture-studio", lang: "en", matchText: "From €2,000" },
  { id: "singlepage-architecture-studio.pl", lang: "pl", matchText: "Od 8500 zł" },
  { id: "singlepage-architecture-studio.ru", lang: "ru", matchText: "От 2000 €" },

  { id: "singlepage-catalog-website", lang: "en", matchText: "starts from €2,000" },
  { id: "singlepage-catalog-website.pl", lang: "pl", matchText: "zaczyna się od 8500 zł" },
  { id: "singlepage-catalog-website.ru", lang: "ru", matchText: "начинается от 2000 €" },

  { id: "singlepage-cleaning-company", lang: "en", matchText: "From €2,000" },
  { id: "singlepage-cleaning-company.pl", lang: "pl", matchText: "Od 8500 zł" },
  { id: "singlepage-cleaning-company.ru", lang: "ru", matchText: "От 2000 €" },

  { id: "singlepage-dental-clinic-website", lang: "en", matchText: "with full search optimisation starts from €2,000" },
  { id: "singlepage-dental-clinic-website.pl", lang: "pl", matchText: "zaczyna się od 8500 zł" },
  { id: "singlepage-dental-clinic-website.ru", lang: "ru", matchText: "Конверсионный лендинг с полной оптимизацией под поиск — от 2000 €" },

  { id: "singlepage-fitness-studio", lang: "en", matchText: "From €2,000" },
  { id: "singlepage-fitness-studio.pl", lang: "pl", matchText: "Od 8500 zł" },
  { id: "singlepage-fitness-studio.ru", lang: "ru", matchText: "От 2000 €" },

  { id: "singlepage-hotel-website", lang: "en", matchText: "From €2,000" },
  { id: "singlepage-hotel-website.pl", lang: "pl", matchText: "Od 8500 zł" },
  { id: "singlepage-hotel-website.ru", lang: "ru", matchText: "От 2000 €" },

  { id: "singlepage-language-school", lang: "en", matchText: "From €2,000" },
  { id: "singlepage-language-school.pl", lang: "pl", matchText: "Od 8500 zł" },
  { id: "singlepage-language-school.ru", lang: "ru", matchText: "От 2000 €" },

  { id: "singlepage-logistics-company", lang: "en", matchText: "From €2,000" },
  { id: "singlepage-logistics-company.pl", lang: "pl", matchText: "Od 8500 zł" },
  { id: "singlepage-logistics-company.ru", lang: "ru", matchText: "От 2000 €" },

  { id: "singlepage-manufacturing-company", lang: "en", matchText: "From €2,000" },
  { id: "singlepage-manufacturing-company.pl", lang: "pl", matchText: "Od 8500 zł" },
  { id: "singlepage-manufacturing-company.ru", lang: "ru", matchText: "От 2000 €" },

  { id: "singlepage-multilingual-website", lang: "en", matchText: "starts from €2,000" },
  { id: "singlepage-multilingual-website.pl", lang: "pl", matchText: "zaczyna się od 8500 zł" },
  { id: "singlepage-multilingual-website.ru", lang: "ru", matchText: "Многостраничный мультиязычный сайт — от 2000 €" },

  { id: "singlepage-online-booking", lang: "en", matchText: "From €2,000" },
  { id: "singlepage-online-booking.pl", lang: "pl", matchText: "Od 8500 zł" },
  { id: "singlepage-online-booking.ru", lang: "ru", matchText: "От 2000 €" },

  { id: "singlepage-photographer", lang: "en", matchText: "€700-1,400" },
  { id: "singlepage-photographer.pl", lang: "pl", matchText: "3000-6000 zł" },
  { id: "singlepage-photographer.ru", lang: "ru", matchText: "700-1400 €" },

  { id: "singlepage-platform-migration", lang: "en", matchText: "starts from €1,000" },
  { id: "singlepage-platform-migration.pl", lang: "pl", matchText: "zaczyna się od 4500 zł" },
  { id: "singlepage-platform-migration.ru", lang: "ru", matchText: "начинается от 1000 €" },

  { id: "singlepage-recruitment-agency", lang: "en", matchText: "From €2,000" },
  { id: "singlepage-recruitment-agency.pl", lang: "pl", matchText: "Od 8500 zł" },
  { id: "singlepage-recruitment-agency.ru", lang: "ru", matchText: "От 2000 €" },

  { id: "singlepage-restaurant", lang: "en", matchText: "€700-1,400" },
  { id: "singlepage-restaurant.pl", lang: "pl", matchText: "3000-6000 zł" },
  { id: "singlepage-restaurant.ru", lang: "ru", matchText: "700-1400 €" },

  { id: "singlepage-startup-website", lang: "en", matchText: "starts from €2,000" },
  { id: "singlepage-startup-website.pl", lang: "pl", matchText: "zaczyna się od 8500 zł" },
  { id: "singlepage-startup-website.ru", lang: "ru", matchText: "Конверсионный лендинг с полной технической настройкой — от 2000 €" },

  { id: "singlepage-travel-agency", lang: "en", matchText: "From €2,000" },
  { id: "singlepage-travel-agency.pl", lang: "pl", matchText: "Od 8500 zł" },
  { id: "singlepage-travel-agency.ru", lang: "ru", matchText: "От 2000 €" },

  { id: "singlepage-veterinary-clinic", lang: "en", matchText: "From €2,000" },
  { id: "singlepage-veterinary-clinic.pl", lang: "pl", matchText: "Od 8500 zł" },
  { id: "singlepage-veterinary-clinic.ru", lang: "ru", matchText: "От 2000 €" },

  { id: "singlepage-web-development-warsaw", lang: "en", matchText: "€700-1,400" },
  { id: "singlepage-web-development-warsaw.pl", lang: "pl", matchText: "3000-6000 zł" },
  { id: "singlepage-web-development-warsaw.ru", lang: "ru", matchText: "700-1400 €" },
];

async function main() {
  const tcIds = [...new Set(TEXTCONTENT_PLAN.map((e) => e.id))];
  const pricingIds = [...new Set(PRICING_PLAN.map((e) => e.id))];
  const allIds = [...new Set([...tcIds, ...pricingIds])];

  const docs = await client.fetch(`*[_id in $ids]{ _id, contentBlocks }`, { ids: allIds });
  const docMap = Object.fromEntries(docs.map((d) => [d._id, d]));
  const missing = allIds.filter((id) => !docMap[id]);
  if (missing.length) {
    console.log("Aborting — missing docs:", missing.join(", "));
    process.exit(1);
  }

  // working copy of contentBlocks per doc, mutated as we apply each plan entry in order
  const working = Object.fromEntries(allIds.map((id) => [id, JSON.parse(JSON.stringify(docMap[id].contentBlocks))]));
  const results = [];

  // 1) textContent edits, applied in order per document (so multiple edits to the same doc compose)
  for (const entry of TEXTCONTENT_PLAN) {
    const blocks = working[entry.id];
    const tcIndices = blocks.map((b, i) => (b._type === "textContent" ? i : -1)).filter((i) => i !== -1);
    if (tcIndices.length === 0) {
      results.push({ kind: "text", id: entry.id, ok: false, error: "no textContent block" });
      continue;
    }
    try {
      const needle = entry.replacements[0]?.old ?? entry.links[0]?.matchText;
      const targetIndex = tcIndices.find((i) =>
        blocks[i].content.some((block) => (block.children || []).map((c) => c.text || "").join("").includes(needle))
      );
      if (targetIndex === undefined) throw new Error(`no textContent block contains: "${needle}"`);
      let content = blocks[targetIndex].content;
      for (const r of entry.replacements) content = replaceText(content, r.old, r.new);
      for (const l of entry.links) content = insertInlineLink(content, l.matchText, l.href);
      blocks[targetIndex] = { ...blocks[targetIndex], content };
      results.push({ kind: "text", id: entry.id, ok: true });
    } catch (err) {
      results.push({ kind: "text", id: entry.id, ok: false, error: err.message });
    }
  }

  // 2) pricing links, applied to the faqBlock's first Q&A answer
  for (const entry of PRICING_PLAN) {
    const blocks = working[entry.id];
    const faqIndex = blocks.findIndex((b) => b._type === "faqBlock");
    if (faqIndex === -1) {
      results.push({ kind: "pricing", id: entry.id, ok: false, error: "no faqBlock" });
      continue;
    }
    try {
      const answer = blocks[faqIndex].faq.items[0].answer;
      const newAnswer = insertInlineLink(answer, entry.matchText, HREF.pricing[entry.lang]);
      const newItems = [...blocks[faqIndex].faq.items];
      newItems[0] = { ...newItems[0], answer: newAnswer };
      blocks[faqIndex] = { ...blocks[faqIndex], faq: { ...blocks[faqIndex].faq, items: newItems } };
      results.push({ kind: "pricing", id: entry.id, ok: true });
    } catch (err) {
      results.push({ kind: "pricing", id: entry.id, ok: false, error: err.message });
    }
  }

  console.log("=== VALIDATION ===");
  let okCount = 0;
  const failed = [];
  for (const r of results) {
    if (r.ok) {
      okCount++;
    } else {
      failed.push(r);
      console.log(`FAIL [${r.kind}] ${r.id} -- ${r.error}`);
    }
  }
  console.log(`${okCount}/${results.length} edits validated OK.`);
  if (failed.length) {
    console.log(`\n${failed.length} edit(s) failed. Aborting — nothing was patched.`);
    process.exit(1);
  }

  if (!APPLY) {
    console.log("\nAll transformations validated successfully. Dry run only (no --apply flag) — nothing was patched.");
    return;
  }

  console.log("\n=== PATCHING ===");
  for (const id of allIds) {
    await client.patch(id).set({ contentBlocks: working[id] }).commit();
    console.log(`Patched ${id}`);
  }
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
