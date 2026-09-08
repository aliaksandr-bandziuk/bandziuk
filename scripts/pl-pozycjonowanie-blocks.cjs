// scripts/pl-pozycjonowanie-blocks.cjs
//
// Перенацеливание польской сервисной страницы на головной коммерческий термин.
//
// Что показали данные:
//   — «pozycjonowanie stron» — 6600 запросов в месяц, сайт не ранжируется вообще;
//     в выгрузке это строка «— нет страницы под ядро»;
//   — на сайте 20+ польских страниц со словом «pozycjonowanie» в slug И в title,
//     но все они длиннохвостые: ниши Варшавы и зарубежные рынки. Родительской
//     страницы под сам термин нет;
//   — общая сервисная страница называется «Strategia i optymalizacja SEO»
//     и слово «pozycjonowanie» встречается на ней ровно один раз, в придаточном
//     предложении про AI-поиск. Под этот запрос она ранжироваться не может.
//
// Поэтому: не новая страница (это создало бы каннибализацию с существующей
// общей услугой), а перенацеливание существующей — title, H1, meta, excerpt
// плюс три раздела, которых на ней нет. Документ тот же, hreflang-тройка цела,
// URL не меняется, редирект не нужен.
//
// Slug остаётся прежним намеренно: смена slug.pl потребует 301 и обсуждается
// отдельно. Title и H1 весят больше.
//
// Чего НЕ пишем, потому что уже покрыто:
//   — цены и от чего они зависят: /pl/cennik (3500 / 5500 / 13 000 zł в месяц,
//     разовые 1000–3000 zł) и статья /pl/blog/ile-kosztuje-pozycjonowanie-strony.
//     На странице — только вход в вилку и две ссылки;
//   — состав работ, этапы, GEO/AI — уже есть в теле страницы.
//
// Чего на сайте нет и что добавляется:
//   — сравнение с Google Ads: «Google Ads» встречается на трёх польских
//     страницах, ни одна не отвечает на вопрос «SEO или реклама»;
//   — сроки и опережающие индикаторы: сроки есть на нишевых страницах,
//     на общей услуге — нет;
//   — связка с восемью варшавскими нишевыми лендингами. Они дети /pl/oferty
//     и выводятся там списком, но сам /pl/oferty Google отклонил, так что
//     второй, контекстный вход им нужен.
module.exports = {
  docId: null, // проставляется скриптом по slug+language, чтобы не зашивать id вручную
  lang: "pl",
  slug: "strategia-i-optymalizacja-seo",
  page: "/pl/oferty/strategia-i-optymalizacja-seo",
  marker: "czym różni się od reklamy w Google",

  fields: {
    title: "Pozycjonowanie stron internetowych",
    excerpt:
      "Pozycjonowanie stron w Google i w wyszukiwarkach opartych na AI: audyt, strategia, optymalizacja techniczna i treści. Warszawa i cała Polska — pracujesz bezpośrednio ze mną, bez agencji i pośredników.",
    "seo.metaTitle": "Pozycjonowanie stron internetowych — Warszawa | Bandziuk",
    "seo.metaDescription":
      "Pozycjonowanie stron internetowych: audyt, strategia, optymalizacja techniczna i treści. Stała współpraca od 3500 zł/mies. Warszawa i cała Polska.",
  },

  links: [
    { text: "ile to kosztuje i od czego zależy cena", href: "/pl/blog/ile-kosztuje-pozycjonowanie-strony" },
    { text: "od 3500 zł miesięcznie", href: "/pl/cennik" },
    { text: "kancelarii prawnej", href: "/pl/oferty/pozycjonowanie-strony-kancelarii-prawnej-warszawa" },
    { text: "gabinetu stomatologicznego", href: "/pl/oferty/pozycjonowanie-strony-gabinetu-stomatologicznego-warszawa" },
    { text: "przychodni lekarskiej", href: "/pl/oferty/pozycjonowanie-strony-przychodni-warszawa" },
    { text: "warsztatu samochodowego", href: "/pl/oferty/pozycjonowanie-strony-warsztatu-samochodowego-warszawa" },
    { text: "salonu kosmetycznego", href: "/pl/oferty/pozycjonowanie-strony-salonu-kosmetycznego-warszawa" },
    { text: "restauracji", href: "/pl/oferty/pozycjonowanie-strony-restauracji-warszawa" },
    { text: "firmy budowlanej", href: "/pl/oferty/pozycjonowanie-strony-firmy-budowlanej-warszawa" },
    { text: "firmy sprzątającej", href: "/pl/oferty/pozycjonowanie-strony-firmy-sprzatajacej-warszawa" },
    { text: "rynkami zagranicznymi", href: "/pl/oferty/lokalizacje" },
  ],

  md: `## Czym jest pozycjonowanie stron i czym różni się od reklamy w Google

Pozycjonowanie stron to praca nad tym, żeby wasza strona pojawiała się w bezpłatnych wynikach wyszukiwania na zapytania, które wpisują wasi klienci. Reklama w Google Ads kupuje miejsce na czas trwania kampanii: przestajecie płacić i ruch znika tego samego dnia. Pozycjonowanie buduje pozycję, która zostaje, ale buduje ją miesiącami i nie da się jej włączyć w piątek po południu.

Stąd praktyczny podział. Reklama jest właściwym wyborem, gdy zapytania są potrzebne w tym tygodniu, gdy testujecie nową ofertę albo gdy sprzedaż jest sezonowa. Pozycjonowanie jest właściwym wyborem, gdy chcecie, żeby ten sam strumień zapytań kosztował za rok mniej niż dzisiaj, a nie tyle samo co dzisiaj pomnożone przez stawkę za kliknięcie.

To nie są kanały konkurencyjne i najczęściej pracują razem: kampania w kilka tygodni pokazuje, które zapytania faktycznie przynoszą klientów, a pozycjonowanie przejmuje te zapytania na stałe.

## Ile trwa pozycjonowanie i po czym poznać, że działa

Uczciwa odpowiedź brzmi: pierwsze zmiany widać zwykle po jednym do trzech miesięcy, a stabilny efekt na konkurencyjnych frazach liczy się w kwartałach, nie w tygodniach. Ile dokładnie — zależy od stanu, w jakim zastaję stronę, i od tego, przeciw komu stoicie w wynikach.

Ważniejsze jest jednak to, po czym rozpoznać, że proces idzie w dobrą stronę, zanim pojawią się pierwsze zapytania. Kolejność sygnałów jest niemal zawsze ta sama. Najpierw rośnie liczba podstron, które Google faktycznie zaindeksował. Potem rosną wyświetlenia w Search Console, przy wciąż odległych pozycjach. Potem pozycje przesuwają się z trzeciej i czwartej strony wyników na drugą. I dopiero wtedy zaczynają się kliknięcia, a po nich zapytania.

Te wskaźniki warto śledzić właśnie w tej kolejności, bo pozwalają zauważyć w drugim miesiącu to, co inaczej wychodzi na jaw w szóstym: jeśli nie ruszył żaden z nich, problemem nie jest to, że „jeszcze za wcześnie" — problemem jest założenie. Osobno opisałem, ile to kosztuje i od czego zależy cena; orientacyjnie stała współpraca zaczyna się od 3500 zł miesięcznie, a jednorazowy audyt od 1000 zł.

## Pozycjonowanie stron w Warszawie — branże, w których pracuję

Część zapytań rozstrzyga się lokalnie: pacjent szuka lekarza w swojej dzielnicy, a nie w całym kraju, i wyniki wyglądają wtedy inaczej dla kogoś z Mokotowa niż dla kogoś z Białołęki. Dla takich firm prowadzę osobne strony, opisujące pozycjonowanie w konkretnej branży w Warszawie — z realiami tej branży, a nie z uniwersalną listą działań.

Opisałem w ten sposób pozycjonowanie dla kancelarii prawnej, gabinetu stomatologicznego, przychodni lekarskiej, warsztatu samochodowego, salonu kosmetycznego, restauracji, firmy budowlanej i firmy sprzątającej.

Jeśli waszej branży nie ma na tej liście, nie znaczy to, że w niej nie pracuję — znaczy tylko, że nie napisałem jeszcze osobnej strony. A jeśli wasi klienci są poza Polską, zajmuję się także rynkami zagranicznymi, dla których wyszukiwarka wygląda zupełnie inaczej niż nad Wisłą.`,
};
