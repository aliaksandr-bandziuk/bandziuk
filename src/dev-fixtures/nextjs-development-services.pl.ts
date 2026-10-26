// Landing page fixture: Strony w Next.js (PL), group
// «nextjs-development-services».
// Market version for Polish firms and specialists, not a translation of
// nextjs-development-services.en.
// Semantic core: no measured PL phrases for Next.js in ref/general-services.md
// (brief: write for the market). Target phrases from the brief: «strona w
// Next.js», «tworzenie stron Next.js», «programista Next.js», «headless CMS».
// Intent (EN proxy, ref/intent-check-general-services.md): «nextjs development
// services» vs «website development services» 0 shared URLs → a separate page
// from /pl/oferty/tworzenie-stron-internetowych. In Poland the competing offer
// is a software house → H2 «Programista Next.js zamiast software house’u».
// Polish context: faktura VAT z JDG, RODO and cookie consent before analytics,
// Stripe with BLIK and Przelewy24.
// Prices: /pl/cennik — strona 3000–6000 zł, pełna strona od 8500 zł, projekt w
// cenie.
// NOT on this page: strony na WordPressie (/pl/oferty/strona-na-wordpress —
// one H2 + link); strony wielojęzyczne w szczegółach
// (/pl/oferty/tworzenie-stron-wielojezycznych); integracje CMS i API
// (/pl/oferty/integracja-cms-i-api); proces migracji
// (/pl/migracja-strony-na-inna-platforme); SEO techniczne
// (/pl/oferty/seo-techniczne); widoczność w AI jako stała praca
// (/pl/oferty/pozycjonowanie-w-ai-i-chatgpt); opieka po starcie
// (/pl/oferty/utrzymanie-strony-internetowej). Sklepy internetowe nie są tu
// usługą.
// Owner’s rule: every page covers AI search; never say there are no clients
// from the visitor’s segment.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const nextjsDevelopmentServicesPl = {
  lang: "pl",
  group: "nextjs-development-services",
  slug: "strony-w-nextjs",
  parentPath: ["oferty"],
  pageType: "service",
  title: "Strony w Next.js",
  heading: "Strony w Next.js: szybkie strony firmowe z headless CMS",
  excerpt:
    "Tworzę strony w Next.js: React i TypeScript, treści w headless CMS Sanity, SEO zapisane w kodzie i przeniesienie z WordPressa bez utraty pozycji w Google — jako jeden programista, z fakturą i ceną z cennika.",
  seo: {
    metaTitle: "Tworzenie stron w Next.js i Sanity CMS | Bandziuk",
    metaDescription:
      "Strona w Next.js od programisty, nie software house’u: React, Sanity CMS, SEO w kodzie, migracja z WordPressa z przekierowaniami 301. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Next.js · React · Sanity", "Od 3000 zł", "Umowa i faktura"],
  heroPhonePoints: ["Szybkie podstrony", "PL · EN · DE", "Edycja w Sanity", "Zapytaj o wycenę"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona lub landing page w Next.js z Sanity CMS, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona w Next.js z headless CMS, kilkoma wersjami językowymi, integracjami lub migracją z WordPressa, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje tworzenie strony w Next.js",
      items: [
        { _key: k("o"), iconName: "code", title: "Next.js, React i TypeScript", text: "Kod w repozytorium, które należy do Was" },
        { _key: k("o"), iconName: "gauge", title: "Strony generowane z wyprzedzeniem", text: "Serwowane z CDN, zdjęcia dopasowane do ekranu" },
        { _key: k("o"), iconName: "file-text", title: "Headless CMS Sanity", text: "Redakcja edytuje pola, a nie układ strony" },
        { _key: k("o"), iconName: "search", title: "SEO zapisane w kodzie", text: "Meta tagi, mapa strony, hreflang, dane strukturalne" },
        { _key: k("o"), iconName: "shield-check", title: "Formularze i cookies zgodne z RODO", text: "Analityka startuje dopiero po zgodzie" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla asystentów AI", text: "Pełny HTML od razu, reguły dla botów AI" },
      ],
      prices: [
        { _key: k("r"), label: "Strona lub landing page w Next.js z Sanity", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Języki, integracje, migracja z WordPressa", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony, które zbudowałem w Next.js",
      subtitle:
        "Wszystkie pięć działa na Next.js: strona psychoterapeuty z Mediolanu przeniesiona z WordPressa, moja trzyjęzyczna strona, strona DJ-a i producenta zbudowana z projektu w Figmie, landing kursu online warszawskiego salonu z płatnością Stripe i 153-stronicowy serwis konsultantki po polsku, angielsku i rosyjsku. Strony psychoterapeuty, salonu, konsultantki i moją własną redaguje się w Sanity.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "e-commerce-landing-page-with-secured-video-access",
        "develop-and-optimize-a-personal-website-with-seo",
        "consultant-website-design-retail-analytics",
        "official-website-for-dj-and-producer-sasha-dith",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony w Next.js",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: wypisuję szablony i typy treści, których potrzebuje strona, i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Obecna strona albo nazwa projektu",
      contextPlaceholder: "Link lub kilka słów",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Na czym działa obecna strona?", options: ["Nie mam jeszcze strony", "WordPress", "Kreator: Wix, WebWave lub podobny", "Next.js, ale wymaga poprawek"] },
        { _key: k("z"), question: "Co jest najważniejsze w nowej stronie?", options: ["Szybkość i pozycje w Google", "Kilka wersji językowych", "Samodzielna edycja treści", "Płatności lub integracja z CRM"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony w Next.js jako niezależny programista z Warszawy: projekt, kod w React i TypeScript, treści w headless CMS Sanity, SEO i uruchomienie. Na tym stosie działa moja własna strona i większość projektów, które dziś zaczynam. Współpracujecie z jedną osobą na umowę i fakturę z JDG, a nie z działem handlowym software house’u."),

        h2("Tworzenie stron Next.js: jakie strony buduję w tej technologii"),
        p("Next.js to framework oparty na React, który przygotowuje gotowy HTML na serwerze albo jeszcze przed wizytą użytkownika. Przeglądarka i robot Google dostają od razu pełną treść, a nie pusty szablon dopełniany skryptami. Używam go do stron, które mają być znajdowane i przynosić zapytania:"),
        li("strony firm usługowych z osobną podstroną dla każdej usługi"),
        li("serwisy wielojęzyczne dla firm, które sprzedają za granicę albo obsługują klientów z innych krajów"),
        li("strony z dużą ilością treści: blog, poradniki, baza wiedzy aktualizowana co tydzień"),
        li("strony ekspertów i marek osobistych — konsultantów, terapeutów, artystów"),
        li("landing page z płatnością online za kurs, konsultację lub rezerwację"),

        h2("Strona w Next.js jest szybka: generowanie statyczne i optymalizacja obrazów"),
        p("Większość podstron strony firmowej nie zmienia się przy każdej wizycie, więc Next.js generuje je raz — przy publikacji — i wysyła z serwerów CDN najbliższych odwiedzającemu. Nie ma zapytań do bazy danych ani składania motywu przy każdym kliknięciu."),
        li("po zmianie w CMS podstrona przebudowuje się w tle, a odwiedzający zawsze dostaje gotową wersję"),
        li("zdjęcia są automatycznie zmniejszane do rozmiaru ekranu i zapisywane w nowoczesnych formatach"),
        li("fonty są hostowane razem ze stroną i nie przesuwają układu przy ładowaniu"),
        li("przeglądarka pobiera tylko ten JavaScript, którego potrzebuje dana podstrona"),
        p("Strona DJ-a i producenta, którą zbudowałem w Next.js 14 z projektu w Figmie, ładuje się w niecałą sekundę. Zastąpiła wolne podstrony z kreatora i ma galerię wideo, dyskografię i formularz rezerwacji."),

        h2("SEO na stronie w Next.js: meta tagi, mapa strony, hreflang i dane strukturalne"),
        p("W WordPressie SEO zwykle obsługuje wtyczka, w Next.js — kod strony. Ustawiam to raz, tak żeby redakcja nie mogła tego przypadkiem zepsuć:"),
        li("tytuł, opis i obrazek do udostępnień tworzą się dla każdej podstrony z pól w CMS, a gdy pole jest puste, działa wartość zastępcza"),
        li("mapa strony XML powstaje z treści, więc nowy artykuł trafia do niej w chwili publikacji"),
        li("wersje językowe mają znaczniki hreflang, a każda podstrona — adres kanoniczny"),
        li("dane strukturalne JSON-LD opisują firmę, usługi, artykuły, FAQ i ścieżkę nawigacji"),
        li("przekierowania 301 są w jednym pliku, a nieistniejące adresy zwracają prawdziwy błąd 404"),
        p(
          "Analizę dużych serwisów — indeksację, budżet crawlowania, Core Web Vitals na tysiącach adresów — opisuję na stronie ",
          link("SEO techniczne", "/pl/oferty/seo-techniczne"),
          ".",
        ),

        h2("Headless CMS Sanity: redakcja zmienia treści, a nie wygląd strony"),
        p("Headless CMS przechowuje treści osobno od wyglądu. W Sanity marketing wypełnia pola — nagłówek, cenę, listę korzyści, pytania i odpowiedzi — a Next.js decyduje, jak je pokazać. Wklejenie tekstu z Worda czy zbyt dużego zdjęcia nie rozsypie układu."),
        li("typy treści projektuję pod Waszą firmę: usługa, realizacja, artykuł, członek zespołu"),
        li("podgląd pokazuje podstronę przed publikacją"),
        li("na zdjęciu zaznacza się najważniejszy punkt, a kadry na telefon i komputer dopasowują się do niego"),
        li("wersje językowe są połączone, więc widać, której podstronie brakuje tłumaczenia"),
        p(
          "Wybieram Sanity, bo panel redakcji jest kodem w tym samym repozytorium i rozwija się razem ze stroną. Inne systemy CMS i połączenia z narzędziami, których już używacie, opisuję na stronie ",
          link("integracja CMS i API", "/pl/oferty/integracja-cms-i-api"),
          ".",
        ),

        h2("Strony wielojęzyczne w Next.js z przetłumaczonymi adresami"),
        p(
          "Polska firma, która sprzedaje do Niemiec czy Wielkiej Brytanii, potrzebuje wersji językowych, które Google traktuje jak osobne strony. Moja strona działa po polsku, angielsku i rosyjsku, serwis konsultantki ds. analityki handlu ma 153 podstrony w tych samych trzech językach, a strona psychoterapeuty z Mediolanu — po włosku i angielsku. W każdym przypadku język ma własne adresy z przetłumaczonymi slugami, hreflang i przełącznik, który prowadzi na tę samą podstronę w innym języku. Szczegóły są na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Formularze, CRM i płatności Stripe z BLIK na stronie w Next.js"),
        p("Next.js wykonuje kod po stronie serwera obok samych podstron, więc formularze i płatności działają bez osobnego zaplecza do utrzymywania:"),
        li("formularz wysyła zapytanie na e-mail, WhatsApp albo do CRM, z ochroną przed spamem i zdarzeniem w analityce"),
        li("klauzula RODO jest przy formularzu, a baner cookies uruchamia Google Analytics 4 dopiero po zgodzie"),
        li("Stripe Checkout przyjmuje karty, BLIK i Przelewy24 za kurs, konsultację lub zaliczkę"),
        li("po opłaceniu klient dostaje dostęp do płatnych materiałów"),
        p("Dla Landi Room, salonu kosmetycznego z Warszawy, zbudowałem landing kursu online w Next.js i Sanity ze Stripe Checkout: po płatności kupująca dostaje zabezpieczony link do nagrania. Pierwsza kampania Google Ads na ten landing przyniosła ponad 100 sprzedanych kursów."),

        h2("Przeniesienie strony z WordPressa do Next.js z przekierowaniami 301"),
        p("Najczęściej zaczynamy od strony na WordPressie, która zwolniła albo której aktualizacje stały się ryzykowne. Przeprowadzka musi zachować treści i pozycje w Google. Stronę Giuseppe, psychoterapeuty z Mediolanu, przebudowałem w Next.js 16 i Sanity: 468 wpisów blogowych przeniesionych, każdy stary adres przekierowany 301 na nowy, dodane dane strukturalne i reguły dla botów AI. Od startu do przekazania minęły 44 dni robocze."),
        h3("Kolejność prac przy migracji z WordPressa do Next.js"),
        ol("Eksport wpisów, podstron, zdjęć i pól SEO oraz zamiana ich na uporządkowane treści w CMS."),
        ol("Mapa wszystkich starych adresów, łącznie z kategoriami, tagami i stronami załączników."),
        ol("Przeniesienie tytułów i opisów, test przekierowań na wersji podglądowej."),
        ol("Po starcie kontrola błędów 404 i indeksacji w Google Search Console."),
        p(
          "Przejście z innych platform wygląda tak samo — opis jest na stronie ",
          link("migracja strony na inną platformę", "/pl/migracja-strony-na-inna-platforme"),
          ".",
        ),

        h2("Strona w Next.js czy na WordPressie: kiedy wybrać którą technologię"),
        p(
          "WordPress lepiej sprawdzi się, gdy potrzebujecie wielu gotowych wtyczek, gdy zespół zna już jego panel albo gdy mała strona ma szybko i tanio ruszyć i nie planujecie jej rozbudowy. Next.js wygrywa przy wielu językach, dużej ilości treści, wysokich wymaganiach co do szybkości i integracjach. Robię strony w obu technologiach; spojrzenie od strony WordPressa opisuję na stronie ",
          link("strona na WordPress", "/pl/oferty/strona-na-wordpress"),
          ".",
        ),

        h2("Strona w Next.js, którą czytają ChatGPT i Google AI Overviews"),
        p("Asystenci AI i ich roboty czytają kod HTML, a wiele z nich nie uruchamia JavaScriptu. Strona, która składa tekst dopiero w przeglądarce, wygląda dla nich na prawie pustą. Strona w Next.js oddaje pełną treść już w pierwszej odpowiedzi serwera."),
        li("HTML z prawdziwymi nagłówkami, listami i tabelami, czytelny bez uruchamiania skryptów"),
        li("dane strukturalne z nazwą firmy, usługami i autorami tekstów"),
        li("reguły w robots.txt dla GPTBot, OAI-SearchBot, PerplexityBot i Google-Extended — decydujecie, kto czyta, a kto może trenować model"),
        li("plik llms.txt z krótką mapą serwisu tam, gdzie ma to sens"),
        p(
          "Giuseppe znalazł mnie przez ChatGPT, a nowe podstrony jego przebudowanej strony już pojawiają się w odpowiedziach ChatGPT. Obecność w odpowiedziach AI to dalsza, stała praca — opisuję ją na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Programista Next.js zamiast software house’u: jak wygląda współpraca"),
        p("Software house przydziela do projektu kierownika, projektanta i kilku programistów. Przy stronie firmowej to zwykle więcej osób, niż wymaga praca. U mnie projekt, kod, konfiguracja CMS, SEO i uruchomienie są w jednych rękach. W marketingu internetowym pracuję od 2010 roku — najpierw jako copywriter, potem w SEO, potem w programowaniu — więc stronę planuję od tego, czego szukają Wasi klienci, a nie od komponentów."),
        ol("Brief: podstrony, języki, integracje i typy treści, na końcu stała cena."),
        ol("Projekt strony głównej i jednej podstrony, uzgodniony na telefonie i komputerze."),
        ol("Budowa w Next.js i Sanity z SEO i analityką, z podglądem postępów pod osobnym adresem."),
        ol("Treści, migracja i przekierowania, podpięcie domeny."),
        ol("Przekazanie: krótka instrukcja do CMS, repozytorium i konta założone na Was."),
        p(
          "Stronę zwykle hostuję na Vercelu, platformie twórców Next.js, która buduje podgląd każdej zmiany; możliwy jest też inny hosting Node.js. Aktualizacje i drobne zmiany po starcie opisuję na stronie ",
          link("utrzymanie strony internetowej", "/pl/oferty/utrzymanie-strony-internetowej"),
          ".",
        ),

        h2("Ile kosztuje strona w Next.js"),
        p(
          "Ceny są w ",
          link("cenniku", "/pl/cennik"),
          ", projekt graficzny jest wliczony w obu wariantach:",
        ),
        li("Strona lub landing page w Next.js z Sanity CMS, kilka podstron i formularz zgodny z RODO: od 3000 do 6000 zł."),
        li("Strona w Next.js z headless CMS, kilkoma językami, integracjami z CRM lub Stripe albo migracją z WordPressa: od 8500 zł."),
        p("O cenie decyduje liczba szablonów i typów treści, a nie liczba podstron: blog z 400 wpisami korzysta z jednego szablonu artykułu. Migracja dokłada pracę przy mapie adresów i konwersji treści. Hosting i plan CMS opłacacie bezpośrednio u dostawców, a przewidywany koszt podaję przed startem."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strony w Next.js: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona w Next.js?", "Od 3000 do 6000 zł za stronę lub landing page z Sanity CMS i od 8500 zł za stronę z kilkoma językami, integracjami albo migracją z WordPressa. Projekt graficzny jest w cenie, a widełki są w cenniku. Po krótkim briefie podaję stałą cenę."],
          ["Czy strona w Next.js jest dobra dla SEO?", "Tak, jeśli SEO jest w niej zaprojektowane. Robot dostaje gotowy HTML, strona ładuje się szybko, a meta tagi, mapa strony, hreflang i dane strukturalne powstają w kodzie dla każdej podstrony. To część każdej strony, którą oddaję."],
          ["Czym jest headless CMS i po co mi on?", "To system, w którym treści są przechowywane osobno od wyglądu strony. Redakcja wypełnia pola w Sanity, a strona sama układa je w szablonie. Dzięki temu edycja jest prosta i nie psuje układu."],
          ["Czy da się przenieść stronę z WordPressa do Next.js bez utraty pozycji?", "To główny cel migracji. Każdy stary adres dostaje przekierowanie 301, tytuły i opisy są przenoszone, a po starcie sprawdzam Search Console. Tak przeniosłem 468 wpisów na stronie psychoterapeuty z Mediolanu."],
          ["Czy wystawiasz fakturę?", "Tak. Prowadzę jednoosobową działalność gospodarczą w Warszawie i wystawiam fakturę. Pracuję na umowę, a cenę i zakres ustalamy przed rozpoczęciem prac."],
          ["Czy przejmiesz istniejący projekt w Next.js?", "Tak. Najpierw czytam repozytorium i wypisuję, co wymaga poprawy — SEO, szybkość, konfiguracja CMS, aktualizacje zależności — a potem podaję stałą cenę."],
          ["Czy współpraca może być w pełni zdalna?", "Tak. Pracuję zdalnie z firmami z całej Polski i z zagranicy, po polsku, angielsku albo rosyjsku. Brief, akceptacje i przekazanie strony odbywają się online."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę w Next.js: co mi wysłać"),
        p(
          "Wyślijcie link do obecnej strony albo kilka zdań o projekcie, potrzebne wersje językowe, narzędzia, z którymi strona ma się łączyć — CRM, płatności, rezerwacje — oraz informację, kto będzie edytował treści. Jeśli macie projekt w Figmie, dołączcie go. Odpowiem listą szablonów i typów treści oraz stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
