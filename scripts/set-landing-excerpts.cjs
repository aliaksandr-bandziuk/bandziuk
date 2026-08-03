// scripts/set-landing-excerpts.cjs
// Patches only the `excerpt` field (hero paragraph under H1) on all 20 landings x 3 locales.
// title (H1) and seo.metaTitle/metaDescription are left untouched.
const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");

const LANDINGS = {
  "singlepage-multilingual-website": {
    en: "I build multilingual websites for businesses selling across borders — with correct hreflang, a separate SEO structure for each market, and locale routing that survives a redesign.",
    pl: "Tworzę strony wielojęzyczne dla firm sprzedających za granicę — z poprawnym hreflang, osobną strukturą SEO pod każdy rynek i routingiem, który przetrwa przebudowę.",
    ru: "Разрабатываю мультиязычные сайты для бизнеса, работающего за рубежом: корректный hreflang, отдельная SEO-структура под каждый рынок и маршрутизация, которая переживает редизайн.",
  },
  "singlepage-catalog-website": {
    en: "I build catalogue websites where visitors can filter instantly and search engines have real pages to index — with automatic sync from wherever your items already live.",
    pl: "Tworzę strony katalogowe, w których odwiedzający filtrują natychmiast, a wyszukiwarki mają realne podstrony do zaindeksowania — z automatyczną synchronizacją z Waszą bazą.",
    ru: "Разрабатываю сайты-каталоги, где посетитель фильтрует мгновенно, а поисковым системам есть что индексировать, — с автосинхронизацией из вашей базы.",
  },
  "singlepage-online-booking": {
    en: "I build websites with booking built into them rather than bolted on — real calendar availability, automatic reminders and deposits, so clients book without calling.",
    pl: "Tworzę strony z rezerwacją wbudowaną, a nie doklejoną — realną dostępnością w kalendarzu, automatycznymi przypomnieniami i zadatkami, żeby klienci rezerwowali bez telefonu.",
    ru: "Разрабатываю сайты со встроенной, а не приклеенной записью: реальная доступность в календаре, автоматические напоминания и предоплата, чтобы клиенты записывались без звонка.",
  },
  "singlepage-dental-clinic-website": {
    en: "I build websites for dental clinics: online booking, local search visibility, a page for every treatment, and a structure built around how patients actually choose a dentist.",
    pl: "Tworzę strony dla gabinetów stomatologicznych: rezerwacja online, widoczność w lokalnym wyszukiwaniu, podstrona dla każdego zabiegu i struktura oparta na tym, jak pacjenci wybierają dentystę.",
    ru: "Разрабатываю сайты для стоматологических клиник: онлайн-запись, видимость в локальном поиске, страница под каждую услугу и структура, построенная вокруг того, как пациенты выбирают стоматолога.",
  },
  "singlepage-veterinary-clinic": {
    en: "I build websites for veterinary clinics: urgent contact and opening status visible first, pages by species and specialisation, and preventive care content that brings owners in early.",
    pl: "Tworzę strony dla przychodni weterynaryjnych: pilny kontakt i status otwarcia widoczne od razu, podstrony według gatunków i specjalizacji oraz treści o profilaktyce.",
    ru: "Разрабатываю сайты для ветеринарных клиник: срочный контакт и статус работы сразу на виду, страницы по видам животных и специализациям, контент о профилактике.",
  },
  "singlepage-accounting-firm": {
    en: "I build websites for accounting firms: services split by client type, pricing you're willing to state, secure document exchange, and content that answers questions before people look for an accountant.",
    pl: "Tworzę strony dla biur rachunkowych: usługi podzielone według typu klienta, cennik na tyle, na ile jesteście gotowi, bezpieczna wymiana dokumentów i treści odpowiadające na pytania o przepisy.",
    ru: "Разрабатываю сайты для бухгалтерских фирм: услуги по типам клиентов, цены настолько, насколько вы готовы, безопасный обмен документами и контент, отвечающий на вопросы до поиска бухгалтера.",
  },
  "singlepage-architecture-studio": {
    en: "I build websites for architecture studios: portfolios that stay fast at full image quality, a page for every project, and a clear explanation of how the work is staged.",
    pl: "Tworzę strony dla biur architektonicznych: portfolio pozostające szybkim przy pełnej jakości zdjęć, podstrona dla każdego projektu i jasny opis etapów pracy.",
    ru: "Разрабатываю сайты для архитектурных бюро: портфолио, остающееся быстрым при полном качестве изображений, страница под каждый проект и понятное описание этапов работы.",
  },
  "singlepage-photographer": {
    en: "I build websites for photographers: portfolios separated by genre, galleries that load fast, package pricing, date enquiries and private galleries for delivering finished work.",
    pl: "Tworzę strony dla fotografów: portfolio rozdzielone według gatunków, szybkie galerie, pakiety cenowe, zapytania o terminy i prywatne galerie do przekazywania zdjęć.",
    ru: "Разрабатываю сайты для фотографов: портфолио по жанрам, быстрые галереи, пакеты с ценами, запрос свободных дат и приватные галереи для выдачи снимков.",
  },
  "singlepage-language-school": {
    en: "I build websites for language schools: a page per course, enrolment and payment completed on site, a level test that qualifies visitors, and timetables your team keeps current.",
    pl: "Tworzę strony dla szkół językowych: podstrona na każdy kurs, zapisy i płatność domykane online, test poziomujący i grafiki, które Wasz zespół sam aktualizuje.",
    ru: "Разрабатываю сайты для языковых школ: страница на каждый курс, запись и оплата прямо на сайте, тест на уровень и расписание, которое ваша команда обновляет сама.",
  },
  "singlepage-fitness-studio": {
    en: "I build websites for fitness studios: a live class schedule your team updates, a trial class path separate from memberships, and passes laid out so people can compare them.",
    pl: "Tworzę strony dla studiów fitness: aktualny grafik zajęć, ścieżka treningu próbnego oddzielona od karnetów i karnety ułożone tak, żeby dało się je porównać.",
    ru: "Разрабатываю сайты для фитнес-студий: живое расписание занятий, путь пробного занятия отдельно от абонементов и абонементы, разложенные для сравнения.",
  },
  "singlepage-cleaning-company": {
    en: "I build websites for cleaning companies: a calculator that returns a price before any contact, separate paths for homes and businesses, and photo-based estimates for harder jobs.",
    pl: "Tworzę strony dla firm sprzątających: kalkulator podający cenę przed kontaktem, osobne ścieżki dla mieszkań i firm oraz wycena na podstawie zdjęć przy trudniejszych zleceniach.",
    ru: "Разрабатываю сайты для клининговых компаний: калькулятор, дающий цену до обращения, отдельные пути для квартир и бизнеса и оценка по фото для сложных заказов.",
  },
  "singlepage-logistics-company": {
    en: "I build websites for transport companies: quote requests that capture route and cargo in one step, shipment status lookup, and a recruitment section that actually reaches drivers.",
    pl: "Tworzę strony dla firm transportowych: zapytania zbierające trasę i ładunek w jednym kroku, sprawdzanie statusu przesyłki i sekcja rekrutacyjna docierająca do kierowców.",
    ru: "Разрабатываю сайты для транспортных компаний: запросы, собирающие маршрут и груз одним шагом, проверка статуса груза и раздел найма, который доходит до водителей.",
  },
  "singlepage-hotel-website": {
    en: "I build websites for hotels and guesthouses that take bookings directly: booking engine integration, room pages that let guests compare, and proper multilingual setup.",
    pl: "Tworzę strony dla hoteli i pensjonatów przyjmujące rezerwacje bezpośrednio: integracja silnika rezerwacji, podstrony pokoi do porównania i poprawna wielojęzyczność.",
    ru: "Разрабатываю сайты для отелей и гостевых домов, принимающие брони напрямую: интеграция системы бронирования, страницы номеров для сравнения и корректная мультиязычность.",
  },
  "singlepage-travel-agency": {
    en: "I build websites for travel agencies: destination content that reaches people before they look for an agency, offers they can compare, and financial protection stated where it matters.",
    pl: "Tworzę strony dla biur podróży: treści o kierunkach docierające do ludzi, zanim zaczną szukać biura, oferty do porównania i zabezpieczenia pokazane tam, gdzie mają znaczenie.",
    ru: "Разрабатываю сайты для турагентств: контент о направлениях, доходящий до людей до поиска агентства, предложения для сравнения и гарантии там, где они решают.",
  },
  "singlepage-restaurant": {
    en: "I build websites for restaurants: menus as real pages your team updates the same day, accurate opening hours, table reservations and a proper path for private events.",
    pl: "Tworzę strony dla restauracji: menu jako prawdziwe podstrony aktualizowane tego samego dnia, aktualne godziny otwarcia, rezerwacja stolików i osobna ścieżka dla imprez.",
    ru: "Разрабатываю сайты для ресторанов: меню как настоящие страницы, обновляемые в тот же день, точные часы работы, бронирование столиков и отдельный путь для мероприятий.",
  },
  "singlepage-recruitment-agency": {
    en: "I build websites for recruitment agencies: job pages with the structured data job search needs, separate paths for employers and candidates, and applications handled discreetly.",
    pl: "Tworzę strony dla agencji rekrutacyjnych: podstrony ofert z danymi strukturalnymi, osobne ścieżki dla pracodawców i kandydatów oraz dyskretnie obsługiwane aplikacje.",
    ru: "Разрабатываю сайты для кадровых агентств: страницы вакансий с разметкой, которую требует поиск работы, отдельные пути для работодателей и кандидатов и деликатная обработка откликов.",
  },
  "singlepage-manufacturing-company": {
    en: "I build websites for manufacturers: products described by specification rather than by company history, technical documentation published openly, and quote requests that arrive complete.",
    pl: "Tworzę strony dla firm produkcyjnych: produkty opisane parametrami, a nie historią firmy, otwarcie opublikowana dokumentacja techniczna i kompletne zapytania ofertowe.",
    ru: "Разрабатываю сайты для производственных компаний: продукция описана параметрами, а не историей предприятия, техдокументация опубликована открыто, запросы приходят полными.",
  },
  "singlepage-startup-website": {
    en: "I build websites for startups: quick to launch, editable by whoever owns positioning, with technical SEO and AI-search readiness from day one — on a stack you can take over.",
    pl: "Tworzę strony dla startupów: szybkie uruchomienie, edycja przez osobę odpowiedzialną za pozycjonowanie, techniczne SEO od pierwszego dnia — na stacku, który możecie przejąć.",
    ru: "Разрабатываю сайты для стартапов: быстрый запуск, редактирование тем, кто отвечает за позиционирование, техническое SEO с первого дня — на стеке, который вы можете забрать.",
  },
  "singlepage-web-development-warsaw": {
    en: "I build websites and run the SEO for businesses in Warsaw — registered here, invoicing in Poland, working in Polish, English and Russian, available to meet when a project warrants it.",
    pl: "Tworzę strony i prowadzę SEO dla firm z Warszawy — działalność zarejestrowana tutaj, faktura VAT, praca po polsku, angielsku i rosyjsku, spotkanie na żywo, gdy projekt tego wymaga.",
    ru: "Разрабатываю сайты и веду SEO для бизнеса в Варшаве: деятельность зарегистрирована здесь, счета в Польше, работа на польском, английском и русском, встреча вживую при необходимости.",
  },
  "singlepage-platform-migration": {
    en: "I move websites to a new platform without losing what they've earned in search: URL structure preserved or fully mapped, markup and language versions carried over, everything staged before launch.",
    pl: "Przenoszę strony na nową platformę bez utraty tego, co wypracowały w wyszukiwarce: zachowana lub zmapowana struktura adresów, przeniesione znaczniki i wersje językowe, wszystko najpierw na środowisku testowym.",
    ru: "Переношу сайты на другую платформу без потери того, что они заработали в поиске: структура адресов сохранена или размечена, разметка и языковые версии перенесены, всё сначала на тестовом окружении.",
  },
};

function docIdFor(baseId, lang) {
  return lang === "en" ? baseId : `${baseId}.${lang}`;
}

async function main() {
  const entries = Object.entries(LANDINGS);
  const allIds = entries.flatMap(([baseId]) => ["en", "pl", "ru"].map((l) => docIdFor(baseId, l)));

  const docs = await client.fetch(`*[_id in $ids]{ _id, title, excerpt }`, { ids: allIds });
  const docMap = Object.fromEntries(docs.map((d) => [d._id, d]));

  const missing = allIds.filter((id) => !docMap[id]);
  if (missing.length) {
    console.log("Aborting — missing docs:", missing.join(", "));
    process.exit(1);
  }

  console.log(`=== PLAN (${entries.length} landings -> ${allIds.length} docs) ===`);
  for (const [baseId, excerpts] of entries) {
    console.log(`\n${baseId}`);
    for (const lang of ["en", "pl", "ru"]) {
      const id = docIdFor(baseId, lang);
      const cur = docMap[id];
      console.log(`  ${id}`);
      console.log(`    title:   unchanged ("${cur.title}")`);
      console.log(`    excerpt: "${cur.excerpt}" -> "${excerpts[lang]}"`);
    }
  }

  if (!APPLY) {
    console.log("\nDry run only (no --apply flag) — nothing was patched.");
    return;
  }

  console.log("\n=== PATCHING ===");
  for (const [baseId, excerpts] of entries) {
    for (const lang of ["en", "pl", "ru"]) {
      const id = docIdFor(baseId, lang);
      await client.patch(id).set({ excerpt: excerpts[lang] }).commit();
      console.log(`Patched ${id}`);
    }
  }
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
