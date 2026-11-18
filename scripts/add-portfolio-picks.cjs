// scripts/add-portfolio-picks.cjs
//
// Вставляет блок с подборкой кейсов (portfolioPickBlock) в уже опубликованные
// посадочные страницы, у которых его нет. Аудит 18.11.2026: из 699 адресов
// блок есть у 469, у 66 коммерческих лендингов нет ничего.
//
// МЕСТО ВСТАВКИ — как на /restaurant-website-design: сразу после блока,
// который перечисляет, что входит в работу (offerListBlock или gridBlock),
// то есть перед формой и задолго до FAQ. Если такого блока нет — перед
// первым quoteFormBlock, иначе перед faqBlock, иначе в конец.
//
// Кейсы задаются английскими слагами; для польской и русской версии страницы
// берётся перевод того же кейса через translation.metadata — так же, как это
// делает create-landing.cjs.
//
//   node scripts/add-portfolio-picks.cjs                      сухой прогон
//   node scripts/add-portfolio-picks.cjs --apply              запись
//   node scripts/add-portfolio-picks.cjs --only hotel,dental  только эти темы
//   node scripts/add-portfolio-picks.cjs --lang en            только один язык
//
// Пишет всё одной транзакцией: либо все страницы, либо ни одной.

const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const argv = process.argv.slice(2);
const APPLY = argv.includes("--apply");
const flag = (n) => { const i = argv.indexOf(`--${n}`); return i >= 0 ? argv[i + 1] : undefined; };
const ONLY = (flag("only") || "").split(",").map((s) => s.trim()).filter(Boolean);
const LANGS = (flag("lang") || "en,pl,ru").split(",").map((s) => s.trim()).filter(Boolean);

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-03",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

let n = 0;
const key = (p) => `${p}${(++n).toString(36).padStart(6, "0")}`;

// Кейсы портфолио (английские слаги)
const C = {
  auto: "auto-repair-seo-and-ux-boost",
  cyprus: "build-and-optimize-a-multilingual-real-estate-platform",
  agency: "proscore-agency-website-development",
  students: "full-multilingual-website-development-and-seo-for-student-services",
  dj: "official-website-for-dj-and-producer-sasha-dith",
  video: "e-commerce-landing-page-with-secured-video-access",
  isp: "web-development-a-website-for-internet-prowider",
  felgi: "felgilab-wordpress-rebuild",
  spam: "anti-spam-protection-for-website-forms",
  scan: "architecture-website-rebuild-and-seo-scan",
  personal: "develop-and-optimize-a-personal-website-with-seo",
  invest: "investment-platform-with-ai-guided-learning",
  eduseo: "seo-case-study-education-agency",
  psy: "psychotherapist-website-milan",
  residency: "residency-by-investment-guide-with-sourced-figures",
  renovation: "renovation-and-investment-website-with-premium-design",
  tyre: "tyre-storage-landing-page-with-editable-seo",
  consultant: "consultant-website-design-retail-analytics",
};

const EYEBROW = { en: "Portfolio", pl: "Portfolio", ru: "Портфолио" };

const THEMES = [
  {
    id: "architecture-studio",
    slugs: { en: "architecture-studio-website", pl: "strona-dla-biura-architektonicznego", ru: "sait-dlya-arhitekturnogo-byuro" },
    picks: [C.scan, C.renovation, C.consultant, C.agency, C.personal],
    en: { title: "Portfolio: sites where the project itself has to sell the studio",
      sub: "What these have in common with an architecture studio: the work is judged from the screen, the enquiry arrives from people who already saw the images, and the growth came from structure and content rather than bought links." },
    pl: { title: "Portfolio: serwisy, w których projekt sam musi sprzedać pracownię",
      sub: "Co łączy je z pracownią architektoniczną: pracę ocenia się z ekranu, zapytanie przychodzi od osób, które już obejrzały wizualizacje, a wzrost dała struktura i treść, nie kupione linki." },
    ru: { title: "Портфолио: сайты, на которых проект продаёт бюро сам",
      sub: "Что общего у этих работ с архитектурным бюро: о работе судят с экрана, заявка приходит от тех, кто уже посмотрел изображения, а рост дали структура и тексты, а не покупные ссылки." },
  },
  {
    id: "catalog-filters",
    slugs: { en: "catalog-website-with-filters", pl: "strona-katalogowa-z-filtrami", ru: "sait-katalog-s-filtrami" },
    picks: [C.cyprus, C.isp, C.invest, C.video, C.students],
    en: { title: "Portfolio: catalogues where filters decide whether anything is found",
      sub: "What these have in common with a filtered catalogue: thousands of items behind a search, pages that have to stay indexable under every filter, and editing the owner can do without a developer." },
    pl: { title: "Portfolio: katalogi, w których filtry decydują o tym, czy coś da się znaleźć",
      sub: "Co łączy je ze stroną katalogową: tysiące pozycji za wyszukiwarką, podstrony, które muszą pozostać indeksowalne przy każdym filtrze, i edycja możliwa bez programisty." },
    ru: { title: "Портфолио: каталоги, в которых от фильтров зависит, найдут ли товар",
      sub: "Что общего у этих работ с сайтом-каталогом: тысячи позиций за поиском, страницы, которые должны оставаться индексируемыми при любом фильтре, и редактирование без программиста." },
  },
  {
    id: "cleaning",
    slugs: { en: "cleaning-company-website", pl: "strona-dla-firmy-sprzatajacej", ru: "sait-dlya-kliningovoy-kompanii" },
    picks: [C.tyre, C.auto, C.felgi, C.spam, C.personal],
    en: { title: "Portfolio: local services that take their orders through the site",
      sub: "What these have in common with a cleaning company: the client compares two or three local firms, decides on price and availability, and leaves through a form that has to work on a phone." },
    pl: { title: "Portfolio: usługi lokalne, które przyjmują zlecenia przez stronę",
      sub: "Co łączy je z firmą sprzątającą: klient porównuje dwie, trzy lokalne firmy, decyduje po cenie i dostępności i wychodzi przez formularz, który musi działać na telefonie." },
    ru: { title: "Портфолио: локальные услуги, которые принимают заказы через сайт",
      sub: "Что общего у этих работ с клининговой компанией: клиент сравнивает две-три местные фирмы, решает по цене и свободным датам и уходит через форму, которая обязана работать с телефона." },
  },
  {
    id: "dental",
    slugs: { en: "dental-clinic-website", pl: "strona-dla-gabinetu-stomatologicznego", ru: "sait-dlya-stomatologicheskoy-kliniki" },
    picks: [C.psy, C.auto, C.tyre, C.felgi, C.consultant],
    en: { title: "Portfolio: practices where the visitor chooses a person, not a price",
      sub: "What these have in common with a dental practice: the decision is made out of anxiety rather than comparison shopping, the site has to answer what happens at the first visit, and the booking is the only metric that counts." },
    pl: { title: "Portfolio: gabinety, w których pacjent wybiera człowieka, nie cenę",
      sub: "Co łączy je z gabinetem stomatologicznym: decyzję podejmuje się z niepokoju, a nie z porównywarki, strona musi odpowiedzieć, co dzieje się na pierwszej wizycie, a liczy się wyłącznie umówiona wizyta." },
    ru: { title: "Портфолио: практики, где выбирают человека, а не цену",
      sub: "Что общего у этих работ со стоматологией: решение принимают из тревоги, а не из сравнения прайсов, сайт обязан объяснить, что будет на первом приёме, и единственная метрика — записи." },
  },
  {
    id: "hotel",
    slugs: { en: "hotel-website", pl: "strona-dla-hotelu", ru: "sait-dlya-otelya" },
    picks: [C.cyprus, C.renovation, C.residency, C.students, C.video],
    en: { title: "Portfolio: sites that take the booking instead of the platform",
      sub: "What these have in common with a hotel: the guest arrives from several languages at once, compares you with an aggregator, and the whole point of the site is to close the booking without a commission." },
    pl: { title: "Portfolio: serwisy, które przyjmują rezerwację zamiast platformy",
      sub: "Co łączy je z hotelem: gość przychodzi od razu z kilku języków, porównuje obiekt z pośrednikiem, a cały sens strony polega na domknięciu rezerwacji bez prowizji." },
    ru: { title: "Портфолио: сайты, которые забирают бронь у площадки",
      sub: "Что общего у этих работ с отелем: гость приходит сразу с нескольких языков, сравнивает вас с агрегатором, и весь смысл сайта — закрыть бронь без комиссии." },
  },
  {
    id: "logistics",
    slugs: { en: "logistics-company-website", pl: "strona-dla-firmy-transportowej", ru: "sait-dlya-transportnoy-kompanii" },
    picks: [C.isp, C.auto, C.felgi, C.tyre, C.spam],
    en: { title: "Portfolio: B2B services checked by address and by route",
      sub: "What these have in common with a transport company: the enquiry starts from a point on the map, the buyer wants a figure and a deadline before a conversation, and the form has to collect enough to quote." },
    pl: { title: "Portfolio: usługi B2B sprawdzane po adresie i po trasie",
      sub: "Co łączy je z firmą transportową: zapytanie zaczyna się od punktu na mapie, klient chce liczby i terminu przed rozmową, a formularz musi zebrać tyle, żeby dało się wycenić." },
    ru: { title: "Портфолио: B2B-услуги, которые проверяют по адресу и по маршруту",
      sub: "Что общего у этих работ с транспортной компанией: заявка начинается с точки на карте, заказчику нужны цифра и срок до разговора, а форма обязана собрать достаточно для расчёта." },
  },
  {
    id: "booking",
    slugs: { en: "website-with-online-booking", pl: "strona-z-rezerwacja-online", ru: "sait-s-onlain-zapisyu" },
    picks: [C.tyre, C.auto, C.psy, C.felgi, C.video],
    en: { title: "Portfolio: sites where the visit ends in a booking, not a phone call",
      sub: "What these have in common with online booking: the slot is the product, the form replaces a phone call nobody wants to make, and every extra field costs a booking." },
    pl: { title: "Portfolio: serwisy, w których wizyta kończy się rezerwacją, nie telefonem",
      sub: "Co łączy je z rezerwacją online: produktem jest termin, formularz zastępuje telefon, którego nikt nie chce wykonać, a każde dodatkowe pole kosztuje jedną rezerwację." },
    ru: { title: "Портфолио: сайты, где визит заканчивается записью, а не звонком",
      sub: "Что общего у этих работ с онлайн-записью: продаётся слот, форма заменяет звонок, который никто не хочет делать, и каждое лишнее поле стоит одной записи." },
  },
  {
    id: "photographer",
    slugs: { en: "photographer-website", pl: "strona-dla-fotografa", ru: "sait-dlya-fotografa" },
    picks: [C.dj, C.personal, C.consultant, C.agency, C.video],
    en: { title: "Portfolio: personal brands where the portfolio is the product",
      sub: "What these have in common with a photographer: the visitor decides from the site alone, the images have to stay sharp without sinking the page, and the name has to be findable on its own." },
    pl: { title: "Portfolio: marki osobiste, w których portfolio jest produktem",
      sub: "Co łączy je z fotografem: odwiedzający decyduje wyłącznie na podstawie strony, zdjęcia muszą zostać ostre, nie topiąc strony, a nazwisko musi być możliwe do znalezienia." },
    ru: { title: "Портфолио: личные бренды, где портфолио и есть продукт",
      sub: "Что общего у этих работ с фотографом: посетитель решает только по сайту, изображения должны остаться резкими и не утопить страницу, а имя обязано находиться само по себе." },
  },
  {
    id: "recruitment",
    slugs: { en: "recruitment-agency-website", pl: "strona-dla-agencji-rekrutacyjnej", ru: "sait-dlya-kadrovogo-agentstva" },
    picks: [C.students, C.eduseo, C.consultant, C.agency, C.personal],
    en: { title: "Portfolio: sites that serve two audiences from one address",
      sub: "What these have in common with a recruitment agency: candidates and employers read the same site with opposite questions, the content has to be produced weekly, and the team edits it without a developer." },
    pl: { title: "Portfolio: serwisy obsługujące dwie publiczności pod jednym adresem",
      sub: "Co łączy je z agencją rekrutacyjną: kandydaci i pracodawcy czytają tę samą stronę z przeciwnymi pytaniami, treść trzeba produkować co tydzień, a zespół edytuje ją bez programisty." },
    ru: { title: "Портфолио: сайты, которые обслуживают две аудитории с одного адреса",
      sub: "Что общего у этих работ с кадровым агентством: кандидаты и работодатели читают один сайт с противоположными вопросами, контент нужен еженедельно, а правит его команда без программиста." },
  },
  {
    id: "migration",
    slugs: { en: "website-platform-migration", pl: "migracja-strony-na-inna-platforme", ru: "perenos-saita-na-druguyu-platformu" },
    picks: [C.felgi, C.scan, C.auto, C.isp, C.cyprus],
    en: { title: "Portfolio: rebuilds where the positions survived the move",
      sub: "What these have in common with a platform migration: an existing site with existing traffic was rebuilt, the addresses and the structure were carried across deliberately, and the search results were measured before and after." },
    pl: { title: "Portfolio: przebudowy, po których pozycje przetrwały przeprowadzkę",
      sub: "Co łączy je z migracją strony: istniejący serwis z istniejącym ruchem przebudowano, adresy i strukturę przeniesiono świadomie, a wyniki w wyszukiwarce zmierzono przed i po." },
    ru: { title: "Портфолио: переделки, после которых позиции пережили переезд",
      sub: "Что общего у этих работ с переносом сайта: существующий сайт с существующим трафиком пересобрали, адреса и структуру перенесли осознанно, а выдачу замерили до и после." },
  },
  {
    id: "startup",
    slugs: { en: "startup-website", pl: "strona-dla-startupu", ru: "sait-dlya-startapa" },
    picks: [C.invest, C.agency, C.consultant, C.personal, C.isp],
    en: { title: "Portfolio: first sites that had to explain a product nobody knew",
      sub: "What these have in common with a startup: the product needed explaining before it could be sold, the site had to go live fast and change weekly, and the founders edit it themselves." },
    pl: { title: "Portfolio: pierwsze strony, które musiały wyjaśnić nieznany produkt",
      sub: "Co łączy je ze startupem: produkt trzeba było najpierw wytłumaczyć, strona musiała ruszyć szybko i zmieniać się co tydzień, a założyciele edytują ją sami." },
    ru: { title: "Портфолио: первые сайты, которым пришлось объяснять незнакомый продукт",
      sub: "Что общего у этих работ со стартапом: продукт сначала нужно было объяснить, сайт должен был выйти быстро и меняться еженедельно, а правят его основатели сами." },
  },
  {
    id: "restaurant",
    slugs: { en: "restaurant-website", pl: "strona-dla-restauracji", ru: "sait-dlya-restorana" },
    picks: [C.tyre, C.auto, C.video, C.felgi, C.psy],
    en: { title: "Portfolio: local businesses found on a phone, five minutes before they are needed",
      sub: "What these have in common with a restaurant: the visitor is nearby and in a hurry, the page has to load at once and answer hours, address and price, and the booking happens in two taps or not at all." },
    pl: { title: "Portfolio: lokalne firmy znajdowane na telefonie pięć minut przed potrzebą",
      sub: "Co łączy je z restauracją: odwiedzający jest blisko i w pośpiechu, strona musi wczytać się natychmiast i podać godziny, adres i cenę, a rezerwacja dzieje się w dwa kliknięcia albo wcale." },
    ru: { title: "Портфолио: локальный бизнес, который находят с телефона за пять минут до визита",
      sub: "Что общего у этих работ с рестораном: посетитель рядом и торопится, страница обязана открыться мгновенно и дать часы, адрес и цену, а бронь происходит в два касания или не происходит." },
  },
  {
    id: "travel",
    slugs: { en: "travel-agency-website", pl: "strona-dla-biura-podrozy", ru: "sait-dlya-turagentstva" },
    picks: [C.residency, C.students, C.cyprus, C.eduseo, C.renovation],
    en: { title: "Portfolio: sites that sell a decision taken months in advance",
      sub: "What these have in common with a travel agency: the buyer researches for weeks across several languages, compares you with large platforms, and needs figures and sources before trusting anyone." },
    pl: { title: "Portfolio: serwisy sprzedające decyzję podejmowaną z wielomiesięcznym wyprzedzeniem",
      sub: "Co łączy je z biurem podróży: klient szuka tygodniami w kilku językach, porównuje was z dużymi platformami i potrzebuje liczb oraz źródeł, zanim komukolwiek zaufa." },
    ru: { title: "Портфолио: сайты, которые продают решение, принимаемое за месяцы",
      sub: "Что общего у этих работ с турагентством: покупатель изучает тему неделями на нескольких языках, сравнивает вас с крупными платформами и требует цифр и источников, прежде чем поверить." },
  },
  {
    id: "veterinary",
    slugs: { en: "veterinary-clinic-website", pl: "strona-dla-przychodni-weterynaryjnej", ru: "sait-dlya-veterinarnoy-kliniki" },
    picks: [C.psy, C.auto, C.tyre, C.felgi, C.eduseo],
    en: { title: "Portfolio: clinics found in the middle of an emergency",
      sub: "What these have in common with a veterinary clinic: half the visits are urgent, the owner is frightened and reads on a phone, and the page has to give hours, address and what happens next before anything else." },
    pl: { title: "Portfolio: przychodnie znajdowane w środku nagłego wypadku",
      sub: "Co łączy je z przychodnią weterynaryjną: połowa wejść jest pilna, właściciel jest przestraszony i czyta na telefonie, a strona musi najpierw podać godziny, adres i to, co stanie się dalej." },
    ru: { title: "Портфолио: клиники, которые находят в разгар срочной ситуации",
      sub: "Что общего у этих работ с ветклиникой: половина визитов срочные, хозяин напуган и читает с телефона, и страница обязана сначала дать часы, адрес и порядок действий." },
  },
  {
    id: "warsaw-dev",
    slugs: { en: "web-development-warsaw", pl: "tworzenie-stron-internetowych-warszawa", ru: "razrabotka-saitov-varshava" },
    picks: [C.felgi, C.tyre, C.renovation, C.auto, C.agency],
    en: { title: "Portfolio: sites built and launched for businesses in and around Warsaw",
      sub: "What these have in common: a working site rather than a design file, measurable results after launch, and owners who edit their own pages afterwards." },
    pl: { title: "Portfolio: strony zbudowane i uruchomione dla firm w Warszawie i okolicach",
      sub: "Co je łączy: działający serwis, a nie plik z projektem, mierzalny wynik po starcie i właściciele, którzy później sami edytują swoje podstrony." },
    ru: { title: "Портфолио: сайты, собранные и запущенные для бизнеса в Варшаве и рядом",
      sub: "Что их объединяет: работающий сайт, а не макет, измеримый результат после запуска и владельцы, которые дальше правят страницы сами." },
  },
  {
    id: "fitness",
    slugs: { en: "fitness-studio-website", pl: "strona-dla-studia-fitness", ru: "sait-dlya-fitnes-studii" },
    picks: [C.tyre, C.auto, C.psy, C.video, C.personal],
    en: { title: "Portfolio: sites selling a schedule and a membership, not a product",
      sub: "What these have in common with a fitness studio: the visitor buys a timetable and a person, the first visit decides everything, and the site has to show the price before anyone asks." },
    pl: { title: "Portfolio: serwisy sprzedające grafik i karnet, a nie produkt",
      sub: "Co łączy je ze studiem fitness: odwiedzający kupuje harmonogram i człowieka, pierwsza wizyta decyduje o wszystkim, a strona musi pokazać cenę, zanim ktokolwiek zapyta." },
    ru: { title: "Портфолио: сайты, которые продают расписание и абонемент, а не товар",
      sub: "Что общего у этих работ с фитнес-студией: посетитель покупает расписание и человека, первое занятие решает всё, а сайт обязан показать цену до того, как о ней спросят." },
  },
  {
    id: "language-school",
    slugs: { en: "language-school-website", pl: "strona-dla-szkoly-jezykowej", ru: "sait-dlya-yazykovoy-shkoly" },
    picks: [C.students, C.eduseo, C.psy, C.personal, C.consultant],
    en: { title: "Portfolio: education sites that fill a group before the term starts",
      sub: "What these have in common with a language school: enrolment is seasonal and capped, the parent or student compares levels and prices, and the traffic has to arrive before the intake, not after." },
    pl: { title: "Portfolio: serwisy edukacyjne, które zapełniają grupę przed startem semestru",
      sub: "Co łączy je ze szkołą językową: nabór jest sezonowy i ograniczony, rodzic albo kursant porównuje poziomy i ceny, a ruch musi przyjść przed naborem, nie po nim." },
    ru: { title: "Портфолио: образовательные сайты, которые набирают группу до начала курса",
      sub: "Что общего у этих работ с языковой школой: набор сезонный и ограниченный, родитель или студент сравнивает уровни и цены, а трафик нужен до набора, а не после." },
  },
  {
    id: "cyprus-realestate",
    slugs: { en: "seo-for-real-estate-in-cyprus", pl: "seo-dla-nieruchomosci-na-cyprze", ru: "seo-dlya-nedvizhimosti-na-kipre" },
    picks: [C.cyprus, C.spam, C.residency, C.renovation, C.scan],
    en: { title: "Portfolio: property sites grown without bought links",
      sub: "What these have in common with a Cyprus property business: buyers arrive from several countries and languages, the catalogue is large and changes daily, and the growth came from structure, speed and content." },
    pl: { title: "Portfolio: serwisy nieruchomościowe rozwinięte bez kupionych linków",
      sub: "Co łączy je z nieruchomościami na Cyprze: kupujący przychodzą z kilku krajów i języków, katalog jest duży i zmienia się codziennie, a wzrost dała struktura, szybkość i treść." },
    ru: { title: "Портфолио: сайты недвижимости, выросшие без покупных ссылок",
      sub: "Что общего у этих работ с недвижимостью на Кипре: покупатели приходят из нескольких стран и языков, каталог большой и меняется ежедневно, а рост дали структура, скорость и тексты." },
  },
  {
    id: "manufacturing",
    slugs: { en: "manufacturing-company-website", pl: "strona-dla-firmy-produkcyjnej", ru: "sait-dlya-proizvodstvennoy-kompanii" },
    picks: [C.scan, C.isp, C.felgi, C.consultant, C.invest],
    en: { title: "Portfolio: technical B2B sites whose buyers cannot inspect the work",
      sub: "What these have in common with a manufacturer: the buyer is an engineer or a purchaser, the decision rests on specifications and proof, and the enquiry is worth enough to justify explaining everything in writing." },
    pl: { title: "Portfolio: techniczne serwisy B2B, których klient nie jest w stanie ocenić pracy",
      sub: "Co łączy je z firmą produkcyjną: kupującym jest inżynier albo zaopatrzeniowiec, decyzja opiera się na specyfikacji i dowodach, a wartość zapytania uzasadnia opisanie wszystkiego na piśmie." },
    ru: { title: "Портфолио: технические B2B-сайты, работу которых заказчик не может проверить",
      sub: "Что общего у этих работ с производством: покупатель — инженер или снабженец, решение держится на характеристиках и доказательствах, а цена заявки оправдывает подробное письменное объяснение." },
  },
  {
    id: "adult-seo",
    slugs: { en: "adult-seo", pl: "pozycjonowanie-stron-dla-branzy-adult", ru: "seo-dlya-adalt-saitov" },
    picks: [C.video, C.invest, C.spam, C.isp, C.cyprus],
    en: { title: "Portfolio: projects with paid access, closed content and heavy traffic",
      sub: "What these have in common: content behind payment or a login, forms that survive automated abuse, and growth achieved in niches where the usual advertising channels are closed." },
    pl: { title: "Portfolio: projekty z płatnym dostępem, zamkniętą treścią i dużym ruchem",
      sub: "Co je łączy: treść za płatnością albo logowaniem, formularze odporne na automatyczne nadużycia i wzrost osiągnięty w niszach, w których zwykłe kanały reklamowe są zamknięte." },
    ru: { title: "Портфолио: проекты с платным доступом, закрытым контентом и большим трафиком",
      sub: "Что их объединяет: контент за оплатой или логином, формы, выдерживающие автоматические атаки, и рост в нишах, где обычные рекламные каналы закрыты." },
  },
  {
    id: "adult-web",
    slugs: { en: "adult-website-design", pl: "strona-internetowa-dla-branzy-adult", ru: "sait-dlya-adalt-proekta" },
    picks: [C.video, C.invest, C.spam, C.isp, C.agency],
    en: { title: "Portfolio: builds with payment, access control and content protection",
      sub: "What these have in common: paid or restricted access built into the site, protection against automated abuse, and a structure the owner can extend without a developer." },
    pl: { title: "Portfolio: wdrożenia z płatnościami, kontrolą dostępu i ochroną treści",
      sub: "Co je łączy: płatny albo ograniczony dostęp wbudowany w serwis, ochrona przed automatycznymi nadużyciami i struktura, którą właściciel rozbuduje bez programisty." },
    ru: { title: "Портфолио: проекты с оплатой, контролем доступа и защитой контента",
      sub: "Что их объединяет: платный или ограниченный доступ, встроенный в сайт, защита от автоматических атак и структура, которую владелец расширяет без программиста." },
  },
];

const insertAfter = new Set(["offerListBlock", "gridBlock", "benefitsBlock"]);
const stopAt = new Set(["quoteFormBlock", "formMinimalBlock", "formFullBlock", "faqBlock"]);

function positionFor(types) {
  const stop = types.findIndex((t) => stopAt.has(t));
  const limit = stop === -1 ? types.length : stop;
  let last = -1;
  for (let i = 0; i < limit; i++) if (insertAfter.has(types[i])) last = i;
  if (last >= 0) return { index: last + 1, why: `after ${types[last]}` };
  if (stop >= 0) return { index: stop, why: `before ${types[stop]}` };
  return { index: types.length, why: "appended" };
}

async function main() {
  if (!process.env.SANITY_API_TOKEN) throw new Error("SANITY_API_TOKEN not found in .env.local");
  const themes = ONLY.length ? THEMES.filter((t) => ONLY.includes(t.id)) : THEMES;

  // Кейсы: английский слаг -> id документа на каждом языке
  const allPicks = [...new Set(themes.flatMap((t) => t.picks))];
  const caseRows = await client.fetch(
    `*[_type == "portfolio" && language == "en" && !(_id in path("drafts.**")) && slug.en.current in $slugs]{
       "s": slug.en.current, "en": _id,
       "pl": *[_type=="translation.metadata" && references(^._id)][0].translations[_key=="pl"][0].value._ref,
       "ru": *[_type=="translation.metadata" && references(^._id)][0].translations[_key=="ru"][0].value._ref
     }`,
    { slugs: allPicks },
  );
  const caseId = {};
  for (const r of caseRows) caseId[r.s] = r;
  const missingCases = allPicks.filter((s) => !caseId[s]);
  if (missingCases.length) console.log(`!  portfolio cases not found: ${missingCases.join(", ")}`);

  const tx = client.transaction();
  let planned = 0, skipped = 0, notFound = 0;

  for (const theme of themes) {
    for (const lang of LANGS) {
      const slug = theme.slugs[lang];
      if (!slug) continue;
      const doc = await client.fetch(
        `*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug && !(_id in path("drafts.**"))][0]{
           _id, "types": contentBlocks[]._type }`,
        { lang, slug },
      );
      if (!doc) { console.log(`?? ${lang} /${slug} — document not found`); notFound++; continue; }
      const types = doc.types || [];
      if (types.includes("portfolioPickBlock")) { console.log(`=  ${lang} /${slug} — already has the block`); skipped++; continue; }

      const items = theme.picks
        .map((s) => caseId[s] && caseId[s][lang])
        .filter(Boolean)
        .map((ref, i) => ({ _type: "reference", _key: `pick${i + 1}`, _ref: ref }));
      if (items.length < 3) { console.log(`!  ${lang} /${slug} — only ${items.length} cases resolved, skipped`); skipped++; continue; }

      const block = {
        _type: "portfolioPickBlock",
        _key: key("b"),
        eyebrow: EYEBROW[lang],
        title: theme[lang].title,
        subtitle: theme[lang].sub,
        items,
      };
      const { index, why } = positionFor(types);
      console.log(`+  ${lang} /${slug} — ${items.length} cases, ${why} (position ${index} of ${types.length})`);
      planned++;
      if (APPLY) tx.patch(doc._id, { insert: index >= types.length ? { after: "contentBlocks[-1]", items: [block] } : { before: `contentBlocks[${index}]`, items: [block] } });
    }
  }

  console.log(`\nplanned ${planned} · already had it ${skipped} · not found ${notFound}`);
  if (!APPLY) return console.log("Dry run — nothing written. Add --apply.");
  await tx.commit();
  console.log("Written. The pages need a redeploy (dynamicParams = false).");
}

main().catch((e) => { console.error("\n" + (e.message || e)); process.exit(1); });
