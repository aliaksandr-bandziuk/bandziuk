// Landing page fixture: Strona na WordPress (PL), group
// «wordpress-development-services».
// Market version for Polish firms (JDG, sp. z o.o.), not a translation of
// wordpress-development-services.en.
// Semantic core: ref/general-services.md / general-services.csv, PL
// «WordPress» group: strona na wordpress 390 (H1, H2, intro) · strona
// internetowa na wordpress 140 (H2) · strona oparta na wordpress 110 (H2) ·
// strona na wordpress cena 70 + strona na wordpressie cena 70 (cost H2, FAQ) ·
// ile kosztuje strona na wordpress 50 (cost H2 + FAQ) · strona firmowa na
// wordpress 20 (H2) · strona wizytówka wordpress 70 (one sentence + link to
// /pl/oferty/strona-wizytowka) · darmowa strona na wordpress 10 and «jak
// zrobić stronę w wordpress» 90 (answered in the DIY-or-custom H2, no
// tutorial). Not targeted: «wordpress download» 2,400, «wordpress instalacja»
// 110, «wordpress jak zacząć» 70 — tutorial/download intent. «strona na
// wordpress cennik» 10 → pricing page (linked once).
// Intent: ref/intent-check-general-services.md — «strona na wordpress» vs
// «tworzenie stron internetowych» 0/10 shared URLs, 0 shared domains. SERP:
// pl.wordpress.org, stronawordpress.com, pomoc.home.pl, stworzycstrone.pl,
// atwi.pl, wiwi.pl — mix of the platform, tutorials and providers → the page
// sells the service but answers «czy warto» and «cena» openly.
// Polish context: shared hosting from Polish providers, RODO on forms, cookies,
// faktura VAT from a JDG, BLIK / Przelewy24 for simple ordering in WooCommerce.
// Proof: ScanM2, Felgilab, tyre storage = WordPress; auto repair and the
// education agency are shown for service pages and multilingual structure.
// NOT on this page: Next.js (/pl/oferty/strony-w-nextjs — short comparison +
// link); strona wizytówka (/pl/oferty/strona-wizytowka); migration process
// (/pl/migracja-strony-na-inna-platforme); opieka techniczna
// (/pl/oferty/utrzymanie-strony-internetowej); audit
// (/pl/oferty/audyt-wydajnosci-i-kodu); online shop builds.
// Owner’s rule: every page covers AI search; never say there are no clients
// from the visitor’s segment.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const wordpressDevelopmentServicesPl = {
  lang: "pl",
  group: "wordpress-development-services",
  slug: "strona-na-wordpress",
  parentPath: ["oferty"],
  pageType: "service",
  title: "Strona na WordPress",
  heading: "Strona na WordPress na zamówienie",
  excerpt:
    "Tworzę strony na WordPress na zamówienie: lekki motyw pisany pod Waszą firmę, tylko potrzebne wtyczki, formularze zgodne z RODO i panel, w którym nic się nie rozjeżdża — od 3000 zł, projekt w cenie.",
  seo: {
    metaTitle: "Strona na WordPress: cena i wykonanie | Bandziuk",
    metaDescription:
      "Strona na WordPress na zamówienie: własny motyw bez ciężkiego page buildera, tylko potrzebne wtyczki, szybka i bezpieczna. Od 3000 zł, projekt w cenie.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Własny motyw, bez page buildera", "Od 3000 zł", "Projekt w cenie"],
  heroPhonePoints: ["Oferta i cennik", "Realizacje", "PL · EN", "Zadzwoń teraz"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona firmowa na WordPress na lekkim motywie, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Rozbudowana strona na WordPress z własnymi blokami, wtyczką na zamówienie, integracjami i wersjami językowymi, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajecie",
      title: "Co obejmuje strona na WordPress na zamówienie",
      items: [
        { _key: k("o"), iconName: "code", title: "Motyw napisany pod Waszą stronę", text: "Bez paczki z czterdziestoma demami" },
        { _key: k("o"), iconName: "plug", title: "Tylko potrzebne wtyczki", text: "Własne funkcje w jednej małej wtyczce" },
        { _key: k("o"), iconName: "gauge", title: "Szybka na telefonie", text: "Dobre Core Web Vitals od pierwszego dnia" },
        { _key: k("o"), iconName: "shield-check", title: "Formularze zgodne z RODO", text: "Klauzula, zgody, baner cookies" },
        { _key: k("o"), iconName: "file-text", title: "Panel, w którym nic się nie psuje", text: "Bloki z gotowym układem, Wy wpisujecie treść" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i ChatGPT", text: "Czysty HTML i dane strukturalne" },
      ],
      prices: [
        { _key: k("r"), label: "Strona firmowa na WordPress", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Własne bloki i wtyczki, integracje, wersje językowe", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony na WordPress i strony usługowe, które zbudowałem",
      subtitle:
        "ScanM2, Felgilab i przechowalnia opon działają na WordPressie: przebudowa w trzech językach, po której firma dostaje zapytania co tydzień, strona warsztatu z podstronami usług i cenami oraz strona, na której właściciel sam poprawia teksty SEO. Warsztat samochodowy i agencja edukacyjna pokazują tę samą pracę przy podstronach usług, wynikach lokalnych i wersjach językowych.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "auto-repair-seo-and-ux-boost",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony na WordPress",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co zbudowałbym lub naprawił i za jaką stałą cenę w widełkach z cennika.",
      contextLabel: "Obecna strona albo nazwa firmy",
      contextPlaceholder: "Link lub krótki opis",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie dziś?", options: ["Nie mamy jeszcze strony", "Wolną stronę na WordPressie", "Stronę zrobioną w Elementorze lub Divi", "Stronę w kreatorze typu Wix lub WebWave"] },
        { _key: k("z"), question: "Od czego zaczynamy?", options: ["Nowa strona firmowa", "Przyspieszenie i naprawa", "Motyw lub wtyczka na zamówienie", "Przeniesienie na WordPress lub z WordPressa"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony na WordPress na zamówienie dla firm, które chcą mieć znany, łatwy w obsłudze panel, ale bez wad typowej strony z gotowego szablonu: powolności, dziesiątek wtyczek i układu, który rozsypuje się po każdej zmianie. Projekt, kod motywu, treści i uruchomienie robi jedna osoba, więc z pytaniami piszecie bezpośrednio do tego, kto pracuje nad stroną. Zajmuję się też SEO, dlatego strona od początku jest układana pod to, czego szukają Wasi klienci."),

        h2("Czy warto zrobić stronę internetową na WordPress"),
        p("WordPress to najpopularniejszy system zarządzania treścią na świecie, a w Polsce obsługuje go praktycznie każdy hosting i tysiące wykonawców. To jego największa zaleta: nie jesteście przywiązani do jednej firmy. Warto go wybrać, gdy:"),
        li("kilka osób w firmie ma samodzielnie dodawać wpisy, realizacje, oferty pracy albo produkty"),
        li("strona ma rosnąć: nowe podstrony usług, blog, druga wersja językowa"),
        li("zależy Wam na tym, żeby w przyszłości łatwo znaleźć kogoś do opieki nad stroną"),
        p("Są też powody, dla których firmy od WordPressa odchodzą: strona po latach dokładania wtyczek robi się wolna, aktualizacje wywołują błędy, a nieaktualne wtyczki są najczęstszą drogą włamań. Większość tych problemów wynika z tego, jak stronę zbudowano, a nie z samego WordPressa — i tego dotyczą kolejne sekcje."),

        h2("Darmowa strona na WordPress czy strona na zamówienie"),
        p("Stronę można postawić samodzielnie: WordPress.org jest darmowy, motyw kosztuje od zera do kilkuset złotych, a instalacja na polskim hostingu to kilka kliknięć. Dla jednoosobowej działalności na start to rozsądna droga. Darmowy plan na WordPress.com ma z kolei reklamy i ograniczenia, więc firmy zwykle szybko z niego wychodzą."),
        p("Przy stronach robionych samodzielnie powtarza się ten sam scenariusz: kupiony motyw z wbudowanym page builderem, kilkanaście wtyczek do drobiazgów, zdjęcia wgrane prosto z aparatu i brak kopii zapasowych. Strona działa, dopóki nikt jej nie aktualizuje. Jeśli wybieracie tę drogę, trzymajcie się jednego lekkiego motywu i jak najmniejszej liczby wtyczek."),
        p("Strona na zamówienie ma sens, gdy liczy się czas właściciela, pozycja w Google i wygląd dopasowany do firmy, a nie do szablonu, który ma tysiąc innych stron. Prostszą wersję, czyli stronę wizytówkę na kilka podstron, opisuję osobno na stronie ",
          link("strona wizytówka", "/pl/oferty/strona-wizytowka"),
          ".",
        ),

        h2("Strona oparta na WordPress bez ciężkiego page buildera"),
        p("Elementor, Divi czy WPBakery pozwalają składać podstrony myszką, ale każda z nich ładuje wtedy skrypty i style całego narzędzia, a kod HTML to wiele warstw zagnieżdżonych kontenerów. Stąd wolne strony i układ, który psuje się po wklejeniu dłuższego tekstu."),
        p("Strona oparta na WordPress w moim wykonaniu działa na własnym motywie albo lekkim motywie blokowym i natywnym edytorze. Przygotowuję bloki pod Waszą treść: kartę usługi, tabelę cen, opinię klienta, realizację. Redaktor wybiera blok i wpisuje tekst, a odstępy, kolory i układ zostają takie, jak w projekcie."),

        h2("Motywy i wtyczki WordPress pisane pod konkretną firmę"),
        p("Motyw na zamówienie zawiera tylko to, czego strona używa: szablony Waszych typów podstron, bloki, fonty i kolory. Nie ma panelu z setkami opcji ani zależności od autora szablonu, który może przestać go aktualizować. Jeśli macie projekt w Figmie, buduję motyw na jego podstawie; jeśli nie, projekt graficzny jest w cenie."),
        p(
          "Gdy potrzebna jest funkcja, której gotowe wtyczki nie robią dobrze — kalkulator ceny, zapytanie trafiające do CRM, typ treści dla realizacji czy ofert, import z programu magazynowego — piszę ją jako małą osobną wtyczkę. Dzięki temu przy zmianie wyglądu funkcja zostaje. Połączenia z zewnętrznymi systemami opisuję na stronie ",
          link("integracja CMS i API", "/pl/oferty/integracja-cms-i-api"),
          ".",
        ),

        h2("Szybkość i bezpieczeństwo strony na WordPress"),
        p("Zdjęcia są w nowoczesnych formatach i w rozmiarze pod ekran, skrypty ładują się tylko tam, gdzie są potrzebne, a cache działa na serwerze albo przez jedną wtyczkę. Celem jest Largest Contentful Paint poniżej 2,5 sekundy na telefonie i sprawdzam go przed uruchomieniem. Mniej wtyczek to mniej luk; konta administratorów mają logowanie dwuetapowe, a kopie zapasowe trafiają codziennie poza serwer."),
        p("Dobieram też hosting: dla większości stron firmowych wystarczy dobry hosting współdzielony u polskiego dostawcy z aktualnym PHP i serwerem w Polsce, a mocniejszy serwer ma sens dopiero przy dużym ruchu albo sklepie."),
        h3("Formularze i cookies zgodne z RODO"),
        p("Pod formularzem kontaktowym jest klauzula RODO z linkiem do polityki prywatności, a pól jest tyle, ile naprawdę potrzeba. Analityka i piksele reklamowe ładują się dopiero po zgodzie w banerze cookies."),
        h3("Aktualizacje i opieka po uruchomieniu"),
        p(
          "Aktualizacje możecie robić sami według instrukcji albo zostawić je mnie razem z kopiami i drobnymi zmianami. Zakres opisuję na stronie ",
          link("utrzymanie strony internetowej", "/pl/oferty/utrzymanie-strony-internetowej"),
          ".",
        ),

        h2("Naprawa wolnej strony na WordPress albo jej przebudowa"),
        p(
          "Jeśli strona otwiera się kilka sekund albo po każdej aktualizacji coś przestaje działać, zaczynam od ustalenia przyczyny. Czasem wystarczy wymienić jedną ciężką wtyczkę i skompresować zdjęcia, czasem problemem jest page builder i taniej jest zbudować motyw od nowa. ",
          link("Audyt wydajności i kodu", "/pl/oferty/audyt-wydajnosci-i-kodu"),
          " daje liczby, zanim wydacie pieniądze na którąkolwiek drogę.",
        ),
        p("Felgilab, warszawska pracownia renowacji felg, to przykład przebudowy na WordPressie: każda usługa ma teraz własną podstronę z cenami, które klient sprawdza przed telefonem. Jednorazowe poprawki istniejącej strony kosztują od 1000 do 3000 zł."),

        h2("Przeniesienie strony na WordPress i z WordPressa bez utraty pozycji"),
        p("ScanM2, firma skanowania laserowego 3D i BIM, przez dwa lata nie dostawała zapytań ze strony w kreatorze no-code. Przeniosłem ją na WordPress, zachowałem projekt, który zespół lubił, i uruchomiłem wersje po angielsku, polsku i niemiecku. Ruch z Google wzrósł 29 razy, a zapytania przychodzą co tydzień. Kluczowe było przekierowanie każdego starego adresu przed startem."),
        p(
          "Tak samo pracuję w drugą stronę, gdy firma wyrasta z WordPressa. Cały proces opisuję na stronie ",
          link("migracja strony na inną platformę", "/pl/migracja-strony-na-inna-platforme"),
          ".",
        ),

        h2("Strona firmowa na WordPress z wersjami językowymi i katalogiem"),
        p("Strona firmowa na WordPress zwykle ma stronę główną, podstronę każdej usługi, realizacje, o firmie, kontakt i często blog. Wersje językowe ustawiam przez WPML albo Polylang, z osobnymi adresami podstron i znacznikami hreflang, żeby Google pokazywał właściwą wersję."),
        p("Jeśli chcecie pokazać produkty, WooCommerce dobrze sprawdza się jako katalog z prostym zamawianiem: karty produktów, kategorie, filtry i krótkie zamówienie z płatnością BLIK lub Przelewy24 albo formularz zapytania o ofertę."),

        h2("WordPress czy Next.js — co wybrać dla strony firmy"),
        p(
          "WordPress wybieram, gdy zespół ma sam edytować treści w znanym panelu, strona ma blog lub katalog, a opiekę ma przejąć w przyszłości dowolny wykonawca. Next.js lepiej pasuje do dużych stron wielojęzycznych, gdy liczy się maksymalna szybkość i pełna kontrola nad kodem. Robię oba, więc rada nie zależy od tego, co sprzedaję; Next.js opisuję na stronie ",
          link("strony w Next.js", "/pl/oferty/strony-w-nextjs"),
          ".",
        ),

        h2("Strona na WordPress, którą rozumieją ChatGPT i Google AI Overviews"),
        p("Klienci coraz częściej pytają ChatGPT, Perplexity albo podsumowania AI w Google, kogo wybrać. Asystenci polecają firmy, o których mogą coś przeczytać, a na stronach z WordPressa fakty często siedzą w sliderach i grafikach. Usługi, ceny, obszar działania i dane kontaktowe zapisuję zwykłym tekstem w HTML, a dane strukturalne opisują firmę, usługi, FAQ i artykuły."),
        p(
          "W pliku robots.txt świadomie wpuszczam roboty wyszukiwarek AI, takie jak OAI-SearchBot i PerplexityBot, a o robotach trenujących modele, jak GPTBot, decydujecie osobno. Dalszą pracę nad obecnością w odpowiedziach AI opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona na WordPress"),
        p(
          "Ceny są w ",
          link("cenniku", "/pl/cennik"),
          ", a projekt graficzny wliczam w oba warianty:",
        ),
        li("Strona firmowa na WordPress na lekkim motywie — strona główna, podstrony usług, o firmie, kontakt, formularz zgodny z RODO: od 3000 do 6000 zł."),
        li("Rozbudowana strona z własnymi blokami, wtyczką na zamówienie, integracjami i wersjami językowymi: od 8500 zł."),
        p("Cenę strony na WordPressie wyznacza głównie liczba typów podstron, własnych funkcji i języków, a nie liczba podstron. Hosting i ewentualne licencje wtyczek opłacacie bezpośrednio u dostawców, a motyw, kod i treści należą do Was."),
        ol("Brief i lista podstron ze stałą ceną."),
        ol("Projekt strony głównej i jednej podstrony, najpierw na telefonie."),
        ol("Motyw, bloki i treści na kopii testowej, gdzie sprawdzacie panel."),
        ol("Uruchomienie z przekierowaniami, analityką, Search Console i krótką instrukcją."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona na WordPress: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona na WordPress?", "U mnie od 3000 do 6000 zł za stronę firmową na lekkim motywie i od 8500 zł za rozbudowaną stronę z własnymi blokami, wtyczką na zamówienie, integracjami i wersjami językowymi. Projekt graficzny jest w cenie. Po krótkim opisie podaję stałą cenę."],
          ["Czy strona na WordPress jest bezpieczna?", "Tak, jeśli ma mało wtyczek, regularne aktualizacje, logowanie dwuetapowe i kopie zapasowe poza serwerem. Większość włamań na strony z WordPressem przychodzi przez stare, porzucone wtyczki, dlatego ich liczbę ograniczam od początku."],
          ["Czy budujesz strony w Elementorze?", "Buduję na własnym motywie albo lekkim motywie blokowym z natywnym edytorem WordPressa. Strona jest dzięki temu szybsza, a układ nie rozjeżdża się przy edycji. Przy istniejącej stronie w Elementorze mogę zrobić drobne zmiany albo zaplanować przebudowę."],
          ["Czy możesz przyspieszyć lub naprawić naszą obecną stronę?", "Tak. Najpierw sprawdzam, co spowalnia lub psuje stronę — wtyczki, motyw, zdjęcia, hosting — a potem naprawiam te elementy albo proponuję przebudowę, jeśli łatanie byłoby droższe. Jednorazowe poprawki kosztują od 1000 do 3000 zł."],
          ["Ile trwa zrobienie strony na WordPress?", "Niewielką stronę firmową wdrażam zwykle w dwa–cztery tygodnie, a rozbudowaną z wersjami językowymi w cztery–sześć. Termin skraca się, gdy teksty i zdjęcia są gotowe na starcie, a poprawki wracają w ciągu dnia lub dwóch."],
          ["Czy sami możemy edytować stronę po uruchomieniu?", "Tak. Teksty, ceny, zdjęcia, nowe podstrony i wpisy dodajecie w panelu WordPressa za pomocą bloków przygotowanych pod Waszą treść. Dostajecie krótką instrukcję."],
          ["Czy pracujesz zdalnie i wystawiasz fakturę?", "Tak. Prowadzę działalność w Warszawie i wystawiam fakturę. Pracuję zdalnie z firmami z całej Polski i z zagranicy, po polsku, angielsku albo rosyjsku — przez e-mail, komunikator i rozmowy wideo."],
          ["Do kogo należą motyw i wtyczki?", "Do Was. Motyw, wtyczki pisane na zamówienie, treści i domena są Wasze, a stronę możecie w każdej chwili przenieść do innego hostingu albo wykonawcy."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę na WordPress: co mi wysłać do wyceny"),
        p(
          "Wyślijcie link do obecnej strony, jeśli istnieje, kilka zdań o tym, co nowa strona ma robić, potrzebne wersje językowe i projekt w Figmie, jeśli go macie. Przy naprawie dopiszcie, co się psuje i od kiedy. Odpowiem, co zbudowałbym lub poprawił, i podam stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
