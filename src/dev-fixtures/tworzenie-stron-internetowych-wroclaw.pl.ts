// Landing page fixture: Tworzenie stron internetowych we Wrocławiu (PL), group
// «tworzenie-stron-internetowych-wroclaw». City page, stage 3 pilot (BRIEF.md).
// Phrases (ref/city-keywords.md, ref/pl-cities.md, volumes/month, Poland):
// strony internetowe wrocław 720 · tworzenie stron internetowych wrocław 260 ·
// agencja interaktywna wrocław 170 · tworzenie stron internetowych wrocław
// cennik 10 · fabryka stron wrocław 0 (not targeted). Required by the brief:
// projektowanie stron Wrocław, cennik. PAA: Jaka jest cena projektowania stron
// internetowych? (H2 + FAQ).
// Intent (ref/intent-check-pl-cities.md): SEO vs websites 0 shared URLs →
// two pages; «tworzenie», «projektowanie», «strony internetowe» share 0–1
// URLs in the cities tested → one page carries all of them in H2/FAQ. SERP:
// local studios, interactive agencies, software houses, national firms with
// city pages, Oferteo.
// City part: IT and software houses, manufacturing and logistics in the zones
// around the city (Bielany Wrocławskie, Kobierzyce, Jelcz-Laskowice), services
// on new estates (Jagodno, Klecina, Maślice) and in gminy (Smolec, Siechnice,
// Długołęka), tourism around the Rynek; English, Ukrainian and German
// versions.
// NOT on this page: pozycjonowanie (/pl/pozycjonowanie-stron-wroclaw); sklepy
// internetowe and e-commerce (not offered); aplikacje webowe and SaaS products
// (not offered); Warsaw pages.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychWroclawPl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-wroclaw",
  slug: "tworzenie-stron-internetowych-wroclaw",
  title: "Tworzenie stron internetowych Wrocław",
  heading: "Tworzenie stron internetowych we Wrocławiu",
  excerpt:
    "Tworzenie stron internetowych we Wrocławiu dla firm IT, producentów, firm logistycznych i usługowych: projekt graficzny w cenie, podstrony usług, osiedli i gmin, wersje angielska, ukraińska i niemiecka, panel do samodzielnej edycji — od 3000 zł, z jedną osobą od projektu do uruchomienia.",
  seo: {
    metaTitle: "Strony internetowe Wrocław: od 3000 zł | Bandziuk",
    metaDescription:
      "Strony internetowe dla firm z Wrocławia: projekt graficzny w cenie, podstrony usług i osiedli, wersje EN, UA i DE, szybkie na telefonie. Od 3000 zł, ceny jawne.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Wersje PL · EN · UA · DE"],
  heroPhonePoints: ["Usługi i ceny", "Zapytanie ofertowe", "Dojazd: Wrocław i gminy", "Zadzwoń · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy z Wrocławia, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona z podstronami usług, osiedli i gmin, wersjami językowymi, formularzem zapytań i integracjami, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową we Wrocławiu",
      items: [
        { _key: k("o"), iconName: "image", title: "Projekt graficzny w cenie strony", text: "Najpierw na telefon, z Waszymi zdjęciami i realizacjami" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje angielska, ukraińska, niemiecka", text: "Osobne adresy podstron i oznaczenia dla Google" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług, osiedli i gmin", text: "Krzyki, Jagodno, Smolec, Siechnice — tam, gdzie pracujecie" },
        { _key: k("o"), iconName: "plug", title: "Integracje z Waszymi narzędziami", text: "CRM, kalendarz rezerwacji, formularz zapytań ofertowych" },
        { _key: k("o"), iconName: "gauge", title: "Szybka na telefonie i Wasza", text: "Kod, treści i domena należą do firmy" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty tekstem, dane strukturalne firmy" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmowa", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Usługi, osiedla, języki, integracje", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Strona firmy skanowania laserowego 3D i modelowania BIM przebudowana na WordPressie w trzech językach, wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów oraz strony lokalnych firm z Warszawy: firmy remontowo-inwestycyjnej, warsztatu samochodowego i przechowalni opon. Z firmą z Wrocławia łączy je to, czego wymaga tamtejszy rynek: klienci w kilku językach, dużo konkurencji i strona, która ma przynosić zapytania, a nie tylko ładnie wyglądać.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy z Wrocławia",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Czym zajmuje się firma?", options: ["Usługi dla mieszkańców Wrocławia", "IT lub usługi dla firm", "Produkcja lub logistyka", "Gastronomia lub turystyka"] },
        { _key: k("z"), question: "Ile wersji językowych potrzebujecie?", options: ["Tylko polską", "Polską i angielską", "Trzy lub więcej", "Jeszcze nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych we Wrocławiu prowadzę jako jeden wykonawca: planuję podstrony, projektuję, piszę teksty, programuję w Next.js albo WordPressie i uruchamiam stronę. Pracuję z Warszawy, a wrocławskie firmy prowadzę zdalnie — rozmowy wideo, projekt do komentowania w przeglądarce, etapy i terminy zapisane na początku. Cena jest stała i mieści się w widełkach z cennika, który każdy może zobaczyć przed pierwszą wiadomością."),

        h2("Strony internetowe Wrocław: strona firmowa zaprojektowana i zbudowana przez jedną osobę"),
        p("Rozmawiacie z tym, kto wykonuje pracę, więc uwaga zgłoszona rano bywa wdrożona po południu, bez spotkania i przekazywania zadania dalej. W cenie są: projekt na telefon i komputer, hosting z SSL i kopiami zapasowymi, domena, tytuły i opisy podstron, dane strukturalne, analityka uruchamiana po zgodzie, Search Console, formularz z klauzulą RODO i panel do edycji treści. Po uruchomieniu nie ma abonamentu, a domena, kod i treści należą do Was."),

        h2("Strona internetowa dla firmy IT i software house’u z Wrocławia"),
        p("Wrocław to jedno z największych skupisk firm IT w Polsce. Strona software house’u czy firmy doradczej konkuruje o klienta z całą Europą, więc musi przekonać kogoś, kto nigdy nie był we Wrocławiu i porównuje kilkanaście ofert. Pomagają w tym konkretne podstrony usług i technologii, opisy projektów z problemem, rozwiązaniem i efektem (bez nazw klientów, jeśli się na nie nie zgodzili), zespół z prawdziwymi zdjęciami i jasna ścieżka do rozmowy. Wersja angielska jest tu podstawowa, nie dodatkowa."),
        p("Firmy IT we Wrocławiu walczą też o ludzi, nie tylko o klientów. Podstrona kariery z opisem zespołu, sposobu pracy, technologii i procesu rekrutacji, w dwóch językach, często przynosi kandydatów taniej niż ogłoszenia na portalach — i jest pierwszym miejscem, które kandydat sprawdza po rozmowie z rekruterem."),
        p("Ta oferta dotyczy strony firmowej, a nie aplikacji czy produktu SaaS. Jeśli Wasz zespół sam programuje, strona może powstać w Next.js tak, żeby Wasi developerzy mogli ją potem rozwijać bez mojego udziału."),

        h2("Strona dla producenta i poddostawcy ze stref przemysłowych wokół Wrocławia"),
        p("W Bielanach Wrocławskich, Kobierzycach, Jelczu-Laskowicach i innych strefach wokół miasta działa wiele zakładów produkcyjnych, a obok nich firmy, które je obsługują: serwisy maszyn, obróbka metali, transport, magazynowanie, automatyka. Kupujący z działu zakupów chce szybko sprawdzić park maszynowy, certyfikaty, zakres i możliwości, a potem wysłać rysunek albo zapytanie."),
        li("podstrona dla każdej technologii lub usługi z parametrami zapisanymi tekstem"),
        li("formularz zapytania ofertowego z możliwością dołączenia pliku"),
        li("wersja angielska lub niemiecka dla odbiorców z zagranicy"),
        li("kontakt do konkretnego handlowca, a nie tylko ogólny adres e-mail"),
        p(
          "Więcej o stronach dla producentów na stronie ",
          link("strona internetowa dla firmy produkcyjnej", "/pl/strona-dla-firmy-produkcyjnej"),
          ".",
        ),

        h2("Strona dla firmy usługowej z wrocławskich osiedli i gmin podwrocławskich"),
        p("Wrocław szybko rośnie na obrzeżach: Jagodno, Klecina, Maślice, a za granicą miasta Smolec, Siechnice czy Długołęka. Nowi mieszkańcy szukają fryzjera, dentysty, przedszkola, fizjoterapeuty i ekipy wykończeniowej blisko domu, więc wpisują w Google nazwę osiedla. Firma usługowa, która tam pracuje, dostaje na stronie podstrony obszarów działania z prawdziwą treścią: co robicie w tej okolicy, jak szybko dojeżdżacie, jakie realizacje tam powstały. Kopii tej samej strony z podmienioną nazwą osiedla nie robię, bo Google ich nie pokazuje, a klienci od razu je rozpoznają."),
        p(
          "Gabinety stomatologiczne i medyczne z osiedli znajdą więcej na stronie ",
          link("strona dla gabinetu stomatologicznego", "/pl/strona-dla-gabinetu-stomatologicznego"),
          ".",
        ),

        h2("Strona restauracji, kawiarni lub hotelu przy wrocławskim Rynku i na Nadodrzu"),
        p("Rynek, Ostrów Tumski, Hala Stulecia i krasnale ściągają do Wrocławia turystów przez cały rok, a do tego dochodzą goście konferencji, koncertów i meczów. Lokale w centrum i na Nadodrzu konkurują o tych samych ludzi, którzy decydują na telefonie, często stojąc kilka ulic dalej. Strona takiego miejsca ma odpowiedzieć od razu: co i za ile, czy jest wolny stolik albo pokój, jak dojść i czy obsługa mówi po angielsku."),
        li("menu i ceny zapisane tekstem, edytowane przez Was w panelu"),
        li("rezerwacja stolika lub pokoju połączona z systemem, którego już używacie"),
        li("godziny otwarcia zgodne z wizytówką Google, także w święta"),
        li("wersja angielska i niemiecka z tą samą treścią co polska"),
        p("Rezerwacja bezpośrednia przez stronę omija prowizje portali, a zdjęcia Waszych dań i wnętrz mówią gościowi więcej niż kolejne ujęcie Rynku."),

        h2("Strona w kilku językach dla Wrocławia: angielski, ukraiński, niemiecki"),
        p("Wrocław to miasto wielu języków. Mieszka tu i pracuje dużo osób z Ukrainy, firmy IT zatrudniają specjalistów z całego świata, na uczelnie przyjeżdżają studenci z zagranicy, a do Rynku — turyści z Niemiec. Gabinet, szkoła, biuro rachunkowe czy warsztat, które obsługują te osoby, zyskują, gdy strona mówi do nich w ich języku."),
        h3("Jak buduję wersje językowe strony"),
        li("każda wersja ma własne adresy podstron i oznaczenia hreflang"),
        li("tłumaczone są podstrony, z których cudzoziemcy naprawdę korzystają, a nie cała strona na siłę"),
        li("klient z ukraińskiej wersji wypełnia formularz i czyta klauzulę RODO po ukraińsku, a nie po polsku"),
        li("przełącznik języka prowadzi do odpowiednika tej samej podstrony, a nie na stronę główną"),
        p(
          "Szczegóły na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Tworzenie stron internetowych Wrocław: agencja interaktywna, software house czy jeden wykonawca"),
        p("Wyniki dla tworzenia i projektowania stron we Wrocławiu są bardzo rozdrobnione: lokalne studia, agencje interaktywne, software house’y, które robią też strony, ogólnopolskie firmy z podstroną dla Wrocławia i Oferteo, gdzie po wysłaniu zapytania dostaje się kilka wycen. Agencja interaktywna ma sens przy kampanii, identyfikacji wizualnej i treściach w dużej skali. Software house — przy aplikacji albo systemie. Gdy potrzebna jest strona firmowa, która przyprowadza zapytania, jeden wykonawca oznacza krótszą drogę do decyzji i brak kosztów obsługi klienta w cenie. Nie robię sklepów internetowych ani logo."),

        h2("Projektowanie stron internetowych we Wrocławiu: projekt w cenie"),
        p("Projekt nie jest osobną pozycją na fakturze. Zaczynam od widoku na telefonie i od dwóch ekranów: strony głównej i najważniejszej podstrony — usługi, technologii albo produktu. Po Waszych uwagach projektuję resztę. Kolory i fonty biorę z identyfikacji firmy, jeśli ją macie, a jeśli nie — proponuję prosty, czytelny zestaw. Zamiast zdjęć ze stocku pokazuję Wasz zespół, halę, lokal albo realizacje, bo klient we Wrocławiu ma dziesiątki podobnych ofert i wybiera tę, za którą widzi prawdziwych ludzi."),

        h2("Strona internetowa, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Ludzie pytają asystentów AI: „firma od automatyki przemysłowej pod Wrocławiem”, „dentysta na Krzykach, który mówi po ukraińsku”, „software house z Wrocławia od aplikacji dla logistyki”. Asystent poleca firmy, o których może przeczytać fakty. Dlatego usługi, obszar działania, języki obsługi i godziny zapisuję tekstem, a nie na grafikach, każda wersja językowa ma te same fakty, a dane strukturalne opisują firmę tak samo jak wizytówka Google."),
        p(
          "Dalszą pracę nad widocznością w asystentach opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a pozycjonowanie w Google — na stronie ",
          link("pozycjonowanie stron we Wrocławiu", "/pl/pozycjonowanie-stron-wroclaw"),
          ".",
        ),

        h2("Jak powstaje strona dla firmy z Wrocławia przy pracy zdalnej"),
        ol("Brief: komu sprzedajecie, w jakich językach, co klienci pytają przed zakupem. Rozmowa wideo albo wypełniony krótki dokument."),
        ol("Lista podstron, wersji językowych i integracji oraz stała cena."),
        ol("Projekt strony głównej i jednej podstrony, uzgadniany w przeglądarce."),
        ol("Wykonanie, teksty i tłumaczenia; Wy sprawdzacie fakty, nazwy i terminologię branżową."),
        ol("Uruchomienie z domeną, analityką, Search Console i krótką instrukcją edycji."),

        h3("Przebudowa starej strony wrocławskiej firmy bez utraty pozycji w Google"),
        p("Jeśli firma ma już stronę, która przynosi trochę ruchu, nowa wersja zachowuje domenę i adresy, które Google zna, a każdy zmieniony adres dostaje przekierowanie. Przed uruchomieniem porównuję listę starych i nowych podstron, a po starcie przez kilka tygodni sprawdzam Search Console, żeby żadna ważna podstrona nie wypadła z wyników."),

        h2("Tworzenie stron internetowych Wrocław: cennik i cena projektowania strony"),
        li("Prosta strona wrocławskiej firmy — strona główna, kilka usług, o nas, kontakt z mapą i formularz zgodny z RODO: od 3000 do 6000 zł."),
        li("Pełna strona — podstrony usług, osiedli lub technologii, wersje językowe, zapytania ofertowe, integracje: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie, a widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Mój sposób pracy przy stronach firmowych opisuję szerzej na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strony internetowe we Wrocławiu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych we Wrocławiu?", "Prosta strona kosztuje od 3000 do 6000 zł, pełna — z wersjami językowymi, podstronami osiedli lub technologii i integracjami — od 8500 zł. Projekt graficzny jest w cenie. Po krótkim opisie firmy podaję stałą kwotę."],
          ["Ile kosztuje dodatkowa wersja językowa strony?", "Wersje językowe są częścią pełnej strony od 8500 zł. Ostateczna cena zależy od liczby tłumaczonych podstron, więc podaję ją po ustaleniu, które podstrony są potrzebne w danym języku."],
          ["Czy strona może być w Next.js, żeby rozwijał ją nasz zespół?", "Tak. Dla firm IT często buduję stronę w Next.js z czytelnym kodem, który Wasi developerzy mogą dalej rozwijać. Dla firm bez programistów zwykle lepszy jest WordPress z prostym panelem."],
          ["Ile trwa stworzenie strony internetowej?", "Prostą stronę uruchamiam zwykle w dwa–cztery tygodnie od briefu; pełna z kilkoma językami zajmuje około sześciu–ośmiu tygodni, bo dochodzą tłumaczenia. Najwięcej zależy od tempa Waszych uwag i tłumaczeń."],
          ["Kreator stron czy strona na zamówienie?", "Kreator wystarczy przy prostej wizytówce z jedną usługą. Strona na zamówienie opłaca się, gdy potrzebujecie wersji językowych, podstron dla osiedli lub technologii, integracji z CRM albo pełnej kontroli nad SEO."],
          ["Do kogo należy strona?", "Do Was: domena, kod i treści. Możecie przenieść stronę do innego hostingu albo wykonawcy w każdej chwili."],
          ["Czy firma z Wrocławia może zamówić stronę u wykonawcy z Warszawy?", "Tak. Wszystko załatwiamy zdalnie: krótkie rozmowy wideo, komentarze do projektu wpisywane w przeglądarce i etapy z datami. Podstrony i treści przygotowuję dla klientów z Wrocławia i okolic."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową we Wrocławiu: co mi wysłać"),
        p(
          "Wyślijcie nazwę firmy, link do obecnej strony albo wizytówki Google, listę usług lub technologii, osiedla i gminy, w których pracujecie, potrzebne języki i narzędzia, z którymi strona ma się połączyć. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
