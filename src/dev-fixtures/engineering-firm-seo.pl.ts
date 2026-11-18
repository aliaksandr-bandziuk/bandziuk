// Landing page fixture: Pozycjonowanie strony biura projektowego (PL),
// group «engineering-firm-seo». NEW page — create-landing.cjs.
//
// Adaptacja rynkowa, nie tłumaczenie. Pomiar scanning-niches.md: w polskim
// «biuro projektowe» 4 400, «projektowanie konstrukcji» 480, «usługi
// inżynierskie» 90; strona właścicielska zerowa, więc tekst pisany pod ogon,
// wejścia bezpośrednie i odpowiedzi asystentów.
// Słownik usług (service-wording.md): seo 12 100, pozycjonowanie stron 5 400,
// audyt seo 1 600, pozycjonowanie lokalne 720; ai seo 720, pozycjonowanie w
// ai 260, pozycjonowanie w chatgpt 170. GEO i AEO po polsku prawie nie
// istnieją — idą do H3 i do tekstu, nie do H2.
//
// Dyscypliny i wyzwalacze polskie: projekt budowlany przed pozwoleniem,
// ekspertyza po pęknięciu, projekt zamienny, adaptacja projektu gotowego,
// uprawnienia budowlane zamiast amerykańskich stanowych stempli.
import { p, h2, h3, li, link, k } from "./pt";

export const engineeringFirmSeoPl = {
  lang: "pl",
  group: "engineering-firm-seo",
  slug: "pozycjonowanie-strony-biura-projektowego",
  title: "Pozycjonowanie strony biura projektowego i firmy inżynierskiej",
  heading:
    "SEO i pozycjonowanie strony biura projektowego: jak trafiać do architekta i wykonawcy, którym potrzebny jest podpis pod obliczeniami",
  excerpt:
    "Zajmuję się SEO i pozycjonowaniem stron biur projektowych. Rozdzielam branże na osobne podstrony i wynoszę do tekstu zakres uprawnień — po nim klient decyduje, czy do was pisać. Pozycjonowanie lokalne i AI SEO, żeby wymieniał was ChatGPT, Perplexity i Gemini. Nikt nie szuka „biura projektowego”. Szukają branży i dokumentu, którego od nich zażądano. Audyt 1000 zł, stała praca 3500 zł miesięcznie.",
  seo: {
    metaTitle: "SEO biura projektowego: branże, zapytania i AI",
    metaDescription:
      "SEO biura projektowego: podstrony pod branże i opracowania, uprawnienia, karty realizacji, pozycjonowanie lokalne i AI SEO w ChatGPT i Perplexity.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podstrona na każdą branżę", "AI SEO: ChatGPT i Perplexity", "Audyt 1000 zł"],
  heroPhonePoints: ["Ekspertyza po pęknięciu", "Projekt budowlany przed pozwoleniem", "Projekt zamienny w trakcie budowy", "Wymienia was ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony biura projektowego: frazy, podstrony branż, wizytówka Google, widoczność w AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony branż i opracowań, karty realizacji, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony biura projektowego", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Zakres prac",
      title: "Pozycjonowanie strony biura projektowego: co wchodzi w pracę",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Podstrona na każdą branżę", text: "Konstrukcje, instalacje, drogi, geotechnika, ekspertyzy" },
        { _key: k("o"), iconName: "shield-check", title: "Zakres uprawnień na każdej podstronie", text: "Po nim klient ocenia, czy do was pisać" },
        { _key: k("o"), iconName: "layers", title: "Karty realizacji zamiast galerii", text: "Rozpiętości, układ konstrukcyjny, normy, wasza rola" },
        { _key: k("o"), iconName: "sparkles", title: "AI SEO: ChatGPT i Perplexity", text: "Tam najpierw pada pytanie o przepis" },
        { _key: k("o"), iconName: "users", title: "Podstrony, które przesyłają architekci", text: "Ruch z poleceń od tych, którzy was zatrudniają" },
        { _key: k("o"), iconName: "gauge", title: "Termin ekspertyz i opinii", text: "Drobne zlecenia przychodzą z terminem" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: firmy techniczne, których klient czyta specyfikacje, a nie hasła",
      subtitle:
        "Wspólne z biurem projektowym: kupującym jest profesjonalista, decyzja opiera się na dowodach, a wzrost dała struktura i treść, nie kupione linki. Firma skanowania laserowego 3D i BIM z dwudziestodziewięciokrotnym wzrostem ruchu. Dostawca internetu sprawdzany adres po adresie. Platforma inwestycyjna tłumacząca złożony produkt. Wielojęzyczna platforma nieruchomości. Konsultantka analityki handlu sprzedająca samą wiedzę.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "web-development-a-website-for-internet-prowider",
        "investment-platform-with-ai-guided-learning",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("SEO dla biura projektowego zaczyna się od branży i przepisu, nie od nazwy firmy"),
        p("Nikt nie szuka biura projektowego. Szukają tego, co kazano im dostarczyć."),
        p("Urząd zażądał ekspertyzy. Inwestor potrzebuje projektu budowlanego przed wnioskiem. Architekt nie zamknie projektu bez instalacji. W wyszukiwarce ląduje nazwa branży i dokumentu, a nie wasza nazwa."),
        p("Strona zbudowana jako Usługi, Realizacje, O nas nie odpowiada na żadne z tych zapytań. Jedna podstrona z sześcioma branżami nie tłumaczy żadnej."),
        p("Praca zaczyna się od rozdzielenia branż na osobne podstrony: co w niej robicie, według jakich norm, co wolno wam podpisać, ile to trwa i co klient dostaje."),
        li("jedna podstrona na jedną branżę, której zleceń chcecie więcej;"),
        li("nazwy norm i przepisów w tekście, bo właśnie ich się szuka;"),
        li("zakres uprawnień wprost w tekście podstrony — to połowa decyzji zakupowej;"),
        li("termin w dniach roboczych dla ekspertyz i opinii;"),
        li("bez branż, które bierzecie niechętnie."),

        h2("Podstrony SEO pod branże: konstrukcje, instalacje, drogi, geotechnika"),
        p("Zmierzony popyt siedzi na branżach i na samym zawodzie: „biuro projektowe” to 4 400 wyszukiwań miesięcznie, „projektowanie konstrukcji” 480, „usługi inżynierskie” 90."),
        p("Za każdą z nich stoi inny klient. Konstrukcje to często sytuacja awaryjna: pęknięcie, wyburzana ściana, uwaga z urzędu. Instalacje kupuje architekt na wczesnym etapie. Drogi i infrastruktura kupowane są pod procedurę w urzędzie."),
        p("Jedna podstrona nie obsłuży trzech klientów z trzema terminami. Każdy potrzebuje własnej."),

        h2("Pozycjonowanie lokalne biura projektowego: obszar pracy i zakres uprawnień w tekście podstron"),
        p("Klient wybiera biuro po zakresie uprawnień. Sprawdza to najpierw i zwykle właśnie tego nie znajduje na stronie."),
        p("Na większości stron siedzi to w zakładce o firmie. Ja wynoszę zakres uprawnień na każdą podstronę branżową, napisany wprost, bo klient z drugiego końca województwa ma w sekundę wiedzieć, czy czytać dalej."),
        p("Na tym opiera się też pozycjonowanie lokalne. W wizytówce stoją województwa i miasta, w których realnie pracujecie, a opinie zbieracie u architektów, wykonawców i inwestorów, nie u właścicieli mieszkań."),

        h3("Branża, zdarzenie, które wywołało zapytanie, i podstrona, która je łapie"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Branża albo opracowanie", "Co wywołało zapytanie", "Podstrona, która łapie zapytanie"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Konstrukcje", "Pęknięcie, wyburzana ściana, uwaga z urzędu", "Zakres uprawnień, ekspertyzy, termin w dniach"] },
        { _type: "tableRow", _key: k("r"), cells: ["Instalacje sanitarne i elektryczne", "Architekt nie zamknie projektu bez instalacji", "Zakres koordynacji, poziom BIM, formaty przekazania"] },
        { _type: "tableRow", _key: k("r"), cells: ["Drogi i infrastruktura", "Zjazd, odwodnienie, uzgodnienia w urzędzie", "Przebieg procedury i realny czas uzgodnień"] },
        { _type: "tableRow", _key: k("r"), cells: ["Geotechnika", "Bank albo urząd żąda badań gruntu", "Co zawiera dokumentacja, odwierty, czas realizacji"] },
        { _type: "tableRow", _key: k("r"), cells: ["Ekspertyza i opinia techniczna", "Szkoda, spór, ubezpieczyciel", "Zakres, niezależność, co orzekniecie, a czego nie"] },
        { _type: "tableRow", _key: k("r"), cells: ["Projekt zamienny i adaptacja", "Zmiana w trakcie budowy, projekt gotowy", "Co wymaga zamiennego, ile trwa, ile kosztuje"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("AI SEO dla biura projektowego: ChatGPT, Perplexity, Gemini i AI Overviews"),
        p("Właściciel domu z pękniętą ścianą pyta asystenta, jaki projektant jest mu potrzebny. Kierownik projektu z uwagą z urzędu pyta o to samo."),
        p("Asystent odpowiada zdaniami i wymienia dwie, trzy firmy. Żadne z nich nie zobaczy listy wyników."),
        p("O tym, czy znajdziecie się w odpowiedzi, decydują trzy rzeczy."),
        li("Tekst, który maszyna przeczyta. Biura publikują PDF-y, skany pieczątek i eksporty z CAD-a. Dla asystenta tej treści nie ma."),
        li("Liczby do zacytowania: termin w dniach, zakres uprawnień, obszar pracy. Źródła bez konkretów się nie cytuje."),
        li("Zgodność danych: nazwa, numery uprawnień, zakres usług i telefon identyczne na stronie, w wizytówce i w katalogach."),
        p("W samym Google dzieje się to nad linkami, w bloku AI Overviews. Cytowana jest zwykle ta firma, która wytłumaczyła wymóg przepisu prostymi słowami."),

        h3("GEO, AEO i LLM SEO: co to znaczy w praktyce"),
        p("Generative engine optimization i answer engine optimization to ta sama praca z dwóch stron: żeby wasza nazwa padła w wygenerowanej odpowiedzi, a nie tylko w liście linków. LLM SEO to to samo w odniesieniu do modeli językowych."),
        p("To nie osobny produkt. To pięć, sześć poprawek: wyjąć tekst z PDF-ów, dodać dane strukturalne, wstawić liczby do treści, uzgodnić dane wszędzie, napisać podstrony pod pytania zadawane na głos."),
        p(
          "Na istniejącej stronie to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ". Jeśli asystenci opisują biuro błędnie, to ",
          link("poprawa błędnych danych w AI", "/pl/oferty/poprawa-blednych-danych-w-ai"),
          ".",
        ),

        h2("Karty realizacji zamiast galerii: rozpiętości, układ konstrukcyjny, normy i wasza rola"),
        p("Architekci wrzucają zdjęcia. Biura projektowe je kopiują i tracą na tym zapytania."),
        p("Wasz klient czyta pod kątem kompetencji, nie estetyki. Karta realizacji z typem obiektu, układem konstrukcyjnym, rozpiętościami, zastosowanymi normami i waszą rolą dowodzi więcej niż wizualizacja."),
        p("Rankuje też lepiej, bo zawiera słowa, których szuka inżynier."),

        h3("Podstrony pod ekspertyzy i opinie: zapytania, które przychodzą z terminem"),
        p("Ekspertyza to małe zlecenie. I zwykle tak właśnie pojawia się nowy klient."),
        p("Ktoś potrzebuje jej na ten tydzień, szuka jej wprost i dzwoni do pierwszej firmy, która napisała, że je robi i jak szybko. Podstrona na każdy typowy rodzaj opracowania zbiera pracę, którą konkurencja uznaje za zbyt drobną, żeby ją reklamować."),

        h3("Ruch z poleceń: podstrony, które przesyłają architekci i wykonawcy"),
        p("Połowa zleceń przychodzi przez innych profesjonalistów. Oni nie szukają — oni przesyłają dalej."),
        p("To zmienia wymagania wobec strony: podstrona, którą architekt wyśle klientowi jako wyjaśnienie, jednoekranowy opis zakresu, który wykonawca wklei w maila, i jasna lista tego, czego potrzebujecie na start. Napiszcie to, a polecający sprzedają za was."),

        h2("SEO techniczne: szybkość i formularz, który pyta o zakres"),
        p("Zwykły formularz pyta o imię, e-mail i wiadomość. Odpowiedzią zawsze jest prośba o rysunki."),
        p("Formularz, który oszczędza tydzień, pyta o typ obiektu, potrzebną branżę, termin i o to, kto żąda dokumentu. Do tego wgranie pliku, bo klient ma uwagę z urzędu w ręce."),
        p("Szybkość znaczy tu mniej niż na stronie konsumenckiej, ale wciąż więcej, niż się biurom wydaje. Serwisy zbudowane na eksportach z CAD-a i skanach są wolne, a otwierają je ludzie z telefonu między spotkaniami."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Audyt SEO strony biura projektowego",
      subtitle: "Prześlij adres strony. Odpiszę w ciągu jednego dnia roboczego: co ją blokuje i od czego zacząć.",
      contextLabel: "Biuro albo adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i odbierz audyt",
      note: "Możesz też napisać na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakich zleceń chcesz więcej?", options: ["Konstrukcje", "Instalacje", "Drogi i infrastruktura", "Ekspertyzy i opinie"] },
        { _key: k("z"), question: "Skąd przychodzą zlecenia teraz?", options: ["Od architektów i wykonawców", "Od stałych klientów", "Z przetargów i katalogów", "Wyszukiwarka już trochę działa"] },
        { _key: k("z"), question: "Co jest dziś na stronie?", options: ["Jedna podstrona z usługami", "Podstrona na każdą branżę", "Głównie PDF-y i zdjęcia realizacji", "Nie wiem"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony biura projektowego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony biura projektowego?", "Audyt 1000 zł, prace jednorazowe 1000–3000 zł, stała praca 3500 zł miesięcznie. O kwocie decyduje liczba branż na osobnych podstronach, zakres uprawnień i to, czy obecna strona pozwala dodawać podstrony."],
          ["Zlecenia mamy z poleceń. Po co nam wyszukiwarka?", "Polecający i tak sprawdzają was w sieci przed telefonem, a przesyłają dalej podstrony, nie numery. Te same podstrony, które rankują, architekt wysyła klientowi. Nie zastępujecie poleceń, tylko je uzbrajacie."],
          ["Czy klient znajdzie nas przez ChatGPT albo Perplexity?", "Tak, często zanim w ogóle otworzy wyszukiwarkę. Właściciel z pęknięciem i kierownik projektu z uwagą z urzędu pytają asystenta, jakiego projektanta potrzebują. Asystent wymienia firmy, których podstrony tłumaczą wymóg zwykłym tekstem i podają liczby."],
          ["Co to GEO i AEO po ludzku?", "To praca nad tym, żeby wasza nazwa padała w odpowiedzi pisanej przez asystenta, a nie tylko na liście linków. Robi się to zwyczajnie: tekst zamiast PDF-ów, dane strukturalne, liczby w treści, spójne dane wszędzie."],
          ["Czy publikować stawki?", "Nie cennik. Widełki dla powtarzalnych opracowań — ekspertyza, opinia, mała dokumentacja — razem z warunkami. To odcina zapytania, z których i tak nigdy nie powstałby projekt."],
          ["Czy karty realizacji zdradzają dane klientów?", "Nie, jeśli są dobrze napisane. Typ obiektu, układ konstrukcyjny, rozpiętości, normy i wasza rola nie zawierają niczego poufnego, a to właśnie ta część dowodzi kompetencji i rankuje."],
          ["Po jakim czasie widać to w zapytaniach?", "Pierwsze ruchy po około sześciu tygodniach, realny wzrost w trzy do sześciu miesięcy. Ekspertyzy ruszają szybciej, bo intencja jest natychmiastowa."],
          ["Gwarantujesz pozycję?", "Nie. O kolejności decyduje system, nad którym nie panuje żadne z nas. Mówię, co zostanie zrobione, w jakiej kolejności i co mierzymy po miesiącu oraz po trzech."],
          ["Kto pisze podstrony branżowe?", "Szkic ja, poprawki wy. Wiarygodne czyni je to, co wie tylko biuro: jakie uwagi wracają z urzędu, dlaczego zlecenie się przeciąga, czego nie podpisujecie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów audyt SEO strony biura projektowego: co przysłać"),
        p("Prześlij adres strony. Napisz, jakich branż chcecie więcej, a jakich wolicie nie brać. Podaj zakres uprawnień i obszar, na którym pracujecie."),
        p("W ciągu jednego dnia roboczego odpiszę, co blokuje stronę, ile treści siedzi w PDF-ach nieczytelnych dla wyszukiwarki i asystenta, i od czego bym zaczął."),
      ],
    },
  ],
};
