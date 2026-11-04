// Fixture landinga: strona internetowa dla dewelopera (PL), grupa
// «property-developer-website». Przepisanie istniejącej strony na starym
// szablonie pod tym samym adresem /pl/strona-dla-dewelopera — przez
// replace-landing.cjs.
//
// Ostatnia z dziewięciu stron klastra nieruchomości (claude/real-estate-
// cluster.md). Zmierzony popyt: core.csv daje «strona dla dewelopera» 170
// (suma po grupie 310) — najwięcej w całej szóstce stron agencji i dewelopera,
// ale wciąż mało. Przepisanie dotyczy przede wszystkim struktury: stara strona
// miała jeden H2.
//
// Progi cenowe nie są wymyślone: artykuł /pl/blog/ile-kosztuje-strona-dla-
// dewelopera podaje od 10 000 zł, od 17 000 zł, od 30 000 zł (indywidualnie).
// Sprawdzone na żywej stronie 02.11.2026. Są wyższe niż u agencji
// (8500 / 15 000 / 23 000 zł) i jest to świadome: deweloper ma inwestycje,
// mieszkania i szachownicę.
//
// Usunięte ze starej strony: blok z «+1500 odwiedzających z organic» i «99%
// wartościowych leadów» na pierwszym ekranie. 1500 to liczba z case'u
// cypryjskiego, zostaje tylko tam, gdzie jest do niego wprost przypisana;
// 99% nie jest niczym mierzone. Usunięty też blok opinii (decyzja właściciela
// z 25.10.2026) i zahardkodowane bloki starego szablonu.
//
// Zachowane merytorycznie ze starego bloku tekstowego, napisanego już w
// obecnym stylu: deweloper sprzedaje to, czego jeszcze nie ma; co sprawdza
// kupujący na etapie budowy; dlaczego ruch jest potrzebny przed startem
// sprzedaży. Sekcja o «przykładach stron deweloperów» jest tylko w wersji
// angielskiej — odpowiada na angielskie zapytania o examples i templates, które
// nie mają polskiego odpowiednika, i nie została tu wymyślona.
//
// Dodane to, co było już w artykule o cenie, a brakowało na landingu:
// szachownica mieszkań — jedyny obiekt, którego agencja nie potrzebuje nigdy, a
// strona dewelopera jest po nim oceniana.
//
// Rozdzielenie w klastrze: deweloper sprzedający własne inwestycje to ta
// strona; agencja odsprzedająca to /pl/strona-dla-agencji-nieruchomosci;
// wykonawca budujący dla zleceniodawców to /pl/strona-internetowa-dla-firmy-
// budowlanej; pozycjonowanie inwestycji to /pl/pozycjonowanie-strony-dewelopera.
//
// JDG jest zwolniona z VAT, więc «faktura», nigdy «faktura VAT».
import { p, h2, h3, li, link, k } from "./pt";

export const propertyDeveloperWebsitePl = {
  lang: "pl",
  group: "property-developer-website",
  slug: "strona-dla-dewelopera",
  title: "Tworzenie stron internetowych dla deweloperów",
  heading: "Tworzenie strony dla dewelopera: sprzedać budynek, po którym kupujący nie może jeszcze przejść",
  excerpt:
    "Buduję strony dla firm deweloperskich: podstrona na każdą inwestycję, szachownica mieszkań, która zostaje aktualna, plany otwierające się na telefonie, postęp budowy z datami, podłączenie zapytań do CRM per inwestycja i wersje językowe dla kupujących z zagranicy. Robię to sam, od struktury do kodu.",
  seo: {
    metaTitle: "Strona dla dewelopera — zakres, cena i termin budowy",
    metaDescription:
      "Tworzenie strony dla dewelopera: katalog inwestycji i mieszkań, szachownica, plany, postęp budowy, połączenie z CRM i wersje językowe. Od 10 000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Szachownica dla każdego budynku", "Strony od 10 000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Budynek B, 7 piętro", "Odbiór III kw. 2027", "Harmonogram płatności", "Zarezerwuj mieszkanie"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Podstawowa strona katalogowa dewelopera: inwestycje, mieszkania, formularze zapytań", price: 10000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona dewelopera z połączeniem z CRM i zaawansowaną funkcjonalnością", price: 17000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Pełna platforma deweloperska, zakres liczony osobno", price: 30000, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co obejmuje",
      title: "Co obejmuje tworzenie strony dla dewelopera",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona na każdą inwestycję", text: "Lokalizacja, termin odbioru, typy mieszkań, ceny albo widełki" },
        { _key: k("o"), iconName: "grid", title: "Szachownica dla każdego budynku", text: "Sprzedane mieszkania oznaczone, a nie cicho usunięte" },
        { _key: k("o"), iconName: "file-text", title: "Plany otwierające się na telefonie", text: "Powierzchnie w metrach, czytelne bez rozciągania" },
        { _key: k("o"), iconName: "camera", title: "Postęp budowy z datami", text: "Udokumentowany, a nie obiecany" },
        { _key: k("o"), iconName: "plug", title: "Podłączenie zapytań do CRM per inwestycja", text: "Zapytanie dociera do tych, którzy sprzedają ten budynek" },
        { _key: k("o"), iconName: "globe", title: "Języki, w których szukają Wasi kupujący", text: "Z własnym doborem fraz, a nie tłumaczeniem istniejącej" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Dlaczego strona dewelopera sprzedaje to, czego kupujący jeszcze nie może zobaczyć"),
        p("Deweloper sprzedaje budynek, którego nie ma. Nie da się po nim przejść ani go dotknąć, a na placu często nie ma nic poza ogrodzeniem i tablicą. Wszystko, na czym kupujący buduje decyzję, musi przenieść strona — i to czyni z niej inne narzędzie niż strona agencji: nie katalog tego, co jest w sprzedaży, a zamiennik fizycznego obiektu."),
        p("To zmienia jej zawartość. Plany i wizualizacje są łatwą częścią. O zapytaniu decyduje materiał, od którego niewybudowana nieruchomość staje się prawdziwa i bezpieczna: postęp budowy z datami, pozwolenia i prawna konstrukcja zakupu, harmonogram płatności oraz to, kto dokładnie stoi za firmą."),

        h2("Co kupujący mieszkania z rynku pierwotnego sprawdza na stronie dewelopera"),
        p("Ktoś, kto kupuje przed odbiorem, zarządza ryzykiem, a nie wybiera układ kuchni. Patrzy, co zostało już oddane, czy poprzednie inwestycje skończono w terminie, czy postęp jest udokumentowany, a nie obiecany, i czy warunki transakcji są zapisane przed rozmową."),
        p("Strona, która na te pytania odpowiada, traci mniej kupujących w momencie wahania. Strona pokazująca wyłącznie wizualizacje zostawia pytanie otwarte, a otwarte pytanie przy takiej kwocie zwykle kończy wizytę."),

        h2("Szachownica mieszkań: obiekt, po którym ocenia się stronę dewelopera"),
        p("Agencja nie potrzebuje szachownicy nigdy; stronę dewelopera ocenia się właśnie po niej. Pokazuje wszystkie mieszkania w budynku z piętrem, powierzchnią, układem, ceną albo widełkami i statusem — wolne, zarezerwowane, sprzedane."),
        p("Działa pod dwoma warunkami. Sprzedane mieszkania zostają widoczne i oznaczone jako sprzedane: tabela, z której wiersze cicho znikają, czyta się jak tabela, której nikt nie prowadzi, a wyprzedane piętra są najmocniejszym dowodem, że inwestycja się sprzedaje. I status musi zmieniać dział sprzedaży w kilka minut, a nie programista na zgłoszenie: nieaktualna szachownica jest gorsza niż żadna."),
        p(
          "Jak zbudowany jest katalog z filtrami pod nią, opisuje osobna podstrona: ",
          link("strona katalogowa z filtrami", "/pl/strona-katalogowa-z-filtrami"),
          ".",
        ),

        h2("Plany, wizualizacje i postęp budowy: co gdzie ma stać"),
        p("Wizualizacje sprzedają ideę, plany sprzedają mieszkanie, zdjęcia z budowy sprzedają firmę. Zmieszane w jedną galerię nie działa żadne z trzech."),
        h3("Co ma robić każde z nich"),
        li("plany: otwierają się w pełnym rozmiarze na telefonie, powierzchnie pomieszczeń w metrach, zaznaczona orientacja, do pobrania;"),
        li("wizualizacje: podpisane jako wizualizacje, z widokiem i piętrem, z którego zostały zrobione;"),
        li("postęp budowy: z datami, po kolei, za każdym razem z tych samych punktów — żeby kupujący widział ruch, a nie nastrój;"),
        li("oddana poprzednia inwestycja: najmocniejsza podstrona na stronie i zwykle ta, której nikt nie robi."),
        p("To również materiał, który się starzeje — więc zmieniać go ma ten, kto jest na budowie, a nie ten, kto robił stronę."),

        h2("Dlaczego strona dewelopera potrzebuje ruchu przed startem sprzedaży, a nie po nim"),
        p("Widoczność w wyszukiwarce narasta miesiącami. Okno sprzedaży dewelopera wyznacza harmonogram budowy, więc strona, która zaczyna zdobywać ruch organiczny na starcie, przegapiła już tę część cyklu, w której zapytania są najważniejsze."),
        p(
          "Pracę trzeba zaczynać, kiedy inwestycja jest jeszcze w pozwoleniach: podstrony, struktura i widoczność budowane przed fazą sprzedaży, a nie razem z nią. ",
          link("Strona dla firmy remontowej i inwestycyjnej w Warszawie", "/pl/portfolio/strona-dla-firmy-remontowej-i-inwestycyjnej-warszawa"),
          " to case z tego samego rynku, w którym szybkość i sygnały zaufania traktowano jako część narzędzia sprzedaży, a nie jako wykończenie.",
        ),

        h2("Połączenie z CRM: jedna droga zapytań na każdą inwestycję"),
        p("Deweloper z trzema inwestycjami i jedną wspólną skrzynką traci zapytania na sortowaniu. Każdy budynek ma własnych sprzedawców, własny etap i często własną agencję partnerską."),
        p("Podłączam formularze do Waszego CRM przez API, żeby zapytanie przychodziło z inwestycją, mieszkaniem i źródłem i rozdzielało się według Waszych reguł. Jeśli budynek sprzedaje się przez agencję partnerską, trasa to uwzględnia, a nie walczy z tym."),

        h2("Wersje językowe dla kupujących z zagranicy"),
        p("Mieszkania na etapie budowy kupuje się z zagranicy częściej niż gotowe: przewaga cenowa jest właśnie powodem wchodzenia wcześniej. Strona w jednym języku odsiewa takich kupujących w milczeniu — nie pojawiają się w statystykach."),
        p("Druga i trzecia wersja to osobna praca, nie tłumaczenie: własny dobór fraz, treść doprowadzona do tego, jak czyta ten rynek, i struktura adresów, którą wyszukiwarka rozróżnia. Założona w strukturę od początku, każda kolejna wersja kosztuje niewiele; dobudowana później to droga wersja tej samej pracy."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony o nieruchomościach, inwestycjach i budownictwie",
      subtitle:
        "Pierwszy case to firma remontowa i inwestycyjna: premium w odbiorze przy wynikach 96/98/100/100. Dalej: wielojęzyczna platforma nieruchomości z katalogiem i lokalizacjami, przebudowa strony biura architektonicznego ze skanem SEO i projekty, w których zadecydowała struktura.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Ile kosztuje strona dla dewelopera i co obejmuje"),
        p(
          "Podstawowa strona katalogowa z inwestycjami, mieszkaniami i formularzami zapytań — od 10 000 zł. Strona z połączeniem z CRM i zaawansowaną funkcjonalnością — od 17 000 zł. Pełna platforma — od 30 000 zł, zakres liczony osobno. Projekt graficzny jest w cenie, nigdy jako osobna pozycja. Rozbicie po poziomach jest w artykule ",
          link("ile kosztuje strona dla dewelopera", "/pl/blog/ile-kosztuje-strona-dla-dewelopera"),
          ", a pełny cennik na ",
          link("stronie z cennikiem", "/pl/cennik"),
          ".",
        ),

        h2("Ile trwa budowa strony dla dewelopera"),
        p("Podstawowa strona katalogowa to trzy do sześciu tygodni. Szachownica, połączenie z CRM i każda dodatkowa wersja językowa wydłużają termin, a ja podaję go przed startem, nie w trakcie. Pełna platforma liczona jest z własnym terminem, bo rozstrzyga o nim funkcjonalność."),
        p("Budowę wydłuża tu nie kod, a materiał: plany w nadającej się postaci, lista mieszkań z aktualnymi statusami, zdjęcia z budowy i odpowiedź, kto po Waszej stronie będzie to utrzymywać po uruchomieniu."),

        h2("Co zostaje u Was po uruchomieniu"),
        li("kod, domena, treści i dostępy do panelu są Wasze od pierwszego dnia;"),
        li("szachownicę zmienia dział sprzedaży, a nie tylko programista;"),
        li("strona nie stoi na moim hostingu, eksporty nie są zablokowane;"),
        li("projekt można w każdej chwili przekazać innemu programiście;"),
        li("praca idzie na umowie z ustalonym zakresem, terminem i etapami."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony dla dewelopera",
      subtitle:
        "Odpowiadam w ciągu jednego dnia roboczego: co bym zbudował, w jakim zakresie i za ile.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i otrzymaj wycenę",
      note: "Albo napiszcie na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Ile inwestycji?", options: ["Jedna", "Dwie–trzy", "Więcej niż trzy", "Pierwsza w drodze"] },
        { _key: k("z"), question: "Na jakim etapie?", options: ["Pozwolenia", "Budowa trwa", "Sprzedaż otwarta", "Oddana"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Strona dewelopera czytelna dla asystentów AI"),
        p("Kupujący i inwestorzy coraz częściej pytają ChatGPT, Perplexity albo przeglądy AI w Google: co powstaje w tej okolicy, kto jest deweloperem, jaki jest termin odbioru i harmonogram płatności, czy poprzednie inwestycje oddano w terminie. Asystent odpowiada z tekstu, który potrafi przeczytać i streścić, i podaje źródła — więc struktura strony rozstrzyga, czy Wasza firma w ogóle pojawi się w tej odpowiedzi."),
        p("W praktyce: bezpośrednia odpowiedź na początku każdej sekcji, fakty o lokalizacji, terminach, powierzchniach i warunkach zamiast przymiotników, dane strukturalne Schema.org dla firmy i inwestycji zgodne z widocznym tekstem oraz treść dostępna bez uruchamiania skryptów. Karuzela wizualizacji, w której zaszyte są wszystkie fakty, jest dla tego wszystkiego niewidoczna."),
        p(
          "Jak to się robi na już istniejącej stronie, to osobna praca: ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Tworzenie stron dla deweloperów: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona dla dewelopera", "Podstawowa strona katalogowa od 10 000 zł, strona z CRM i zaawansowaną funkcjonalnością od 17 000 zł, pełna platforma od 30 000 zł i liczona osobno. O cenie decydują liczba inwestycji i mieszkań, szachownica, integracje i liczba wersji językowych."],
          ["Czy strona udźwignie duże portfolio inwestycji", "Tak. Jest budowana jako katalog, który się skaluje: wiele inwestycji, wiele mieszkań, filtry utrzymujące nawigację w ryzach i szachownica dla każdego budynku, a nie jedna wspólna lista."],
          ["Czy dział sprzedaży sam zmieni statusy mieszkań", "Tak, i o to chodzi. Szachownica, którą edytuje tylko programista, starzeje się w kilka tygodni, a nieaktualna jest gorsza niż żadna. Status zmienia się w panelu w kilka minut."],
          ["Czy strona połączy się z naszym CRM", "Tak, przez API: zapytanie przychodzi z inwestycją, mieszkaniem i źródłem i rozdziela się według Waszych reguł — w tym do agencji partnerskiej, jeśli budynek sprzedaje się przez nią."],
          ["Jesteśmy jeszcze w pozwoleniach. Czy nie za wcześnie na stronę", "To właściwy moment. Widoczność narasta miesiącami, a okno sprzedaży wyznacza harmonogram budowy: strona uruchamiana razem ze sprzedażą przegapiła już tę część cyklu, w której zapytania są najważniejsze."],
          ["Pracujecie z deweloperami poza Polską", "Tak. Mieszkania na etapie budowy kupuje się z zagranicy częściej niż gotowe, a strony wielojęzyczne to trzon takiej pracy; ta strona sama działa w trzech językach."],
          ["Budujemy dla zleceniodawców, a nie sprzedajemy własnych mieszkań. Ta strona jest dla nas", "Nie, to wykonawca, a nie deweloper, i praca wygląda inaczej — zobaczcie podstronę o stronie dla firmy budowlanej."],
          ["Do kogo należy strona po uruchomieniu", "Do Was: kod, domena, treści, dostępy do panelu i dane mieszkań w przenaszalnej postaci. Strona nie stoi na moim hostingu, eksporty nie są zablokowane, a projekt można w każdej chwili przekazać innemu programiście."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Wykonawca, agencja albo pozycjonowanie inwestycji: podstrony obok tej"),
        p(
          "Jeśli budujecie dla zleceniodawców, a nie sprzedajecie mieszkań w swoich inwestycjach, to wykonawca: ",
          link("strona internetowa dla firmy budowlanej", "/pl/strona-internetowa-dla-firmy-budowlanej"),
          ". Jeśli odsprzedajecie cudze nieruchomości, a nie budujecie, to agencja: ",
          link("strona dla agencji nieruchomości", "/pl/strona-dla-agencji-nieruchomosci"),
          ". A jak inwestycje dewelopera są znajdowane w Google i w odpowiedziach AI, opisuje ",
          link("pozycjonowanie strony dewelopera", "/pl/pozycjonowanie-strony-dewelopera"),
          ".",
        ),

        h2("Zamów stronę dla dewelopera: co mi wysłać"),
        p("Wyślijcie, ile macie inwestycji i na jakim są etapie, gdzie dziś jest lista mieszkań ze statusami, w jakich krajach i językach sprzedajecie i z jakiego CRM korzystacie. Odpowiem, co bym zbudował, w jakim zakresie i za ile."),
      ],
    },
  ],
};
