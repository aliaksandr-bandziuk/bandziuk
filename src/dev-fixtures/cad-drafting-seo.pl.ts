// Landing page fixture: SEO for CAD drafting shops (PL), group «cad-drafting-seo».
// Same backbone as EN: the buyer is a professional out of hours, not a building
// owner. Measurement stays with the other pages: PL «inwentaryzacja» and
// «powykonawcza» belong to land-surveyor-seo.pl, so they are not used here.
// Measured: «usługi cad» 50, «projekty wykonawcze» 40; the conversion jobs are
// what the client searches. GEO/AEO measure 310 in Polish → H3 and body.
import { p, h2, h3, li, link, k } from "./pt";

export const cadDraftingSeoPl = {
  lang: "pl",
  group: "cad-drafting-seo",
  slug: "pozycjonowanie-strony-firmy-uslug-cad",
  title: "SEO i pozycjonowanie strony firmy usług CAD",
  heading:
    "SEO i pozycjonowanie strony firmy usług CAD: jak trafiać do architekta i inżyniera, któremu zabrakło rąk do rysunków",
  excerpt:
    "Zajmuję się SEO firm rysunkowych i usług CAD. Waszym klientem nie jest właściciel budynku, a projektant z terminem i bez wolnego kreślarza. Buduję podstrony wokół tego, co dostajecie i co oddajecie, wpisuję standardy i terminy na stronę, i zapytanie przychodzi już policzone. Audyt 1000 zł, stała praca 3500 zł miesięcznie.",
  seo: {
    metaTitle: "SEO firmy CAD: moce, standardy i widoczność w AI",
    metaDescription:
      "Pozycjonowanie strony firmy usług CAD: podstrony pod to, co dostajecie i oddajecie, standardy i terminy jako fakty, widoczność w ChatGPT i Perplexity.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podstrona pod każde zlecenie", "Widoczność w ChatGPT", "Audyt od 1000 zł"],
  heroPhonePoints: ["PDF i papier do CAD", "Chmura punktów do 2D i BIM", "Model z gotowej części", "ChatGPT podaje firmę"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy usług CAD: podstrony usług, standardy i przekazanie plików, formularz, widoczność w AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony pod wejście i wyjście, przykładowe pliki, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony firmy usług CAD", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Zakres pracy",
      title: "Pozycjonowanie strony firmy usług CAD: z czego składa się praca",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Podstrona pod to, co dostajecie", text: "Papier, PDF, chmura punktów, pomiary, gotowa część" },
        { _key: k("o"), iconName: "layers", title: "Podstrona pod to, co oddajecie", text: "DWG, RVT, STEP, IFC — i w czyim szablonie" },
        { _key: k("o"), iconName: "shield-check", title: "Standardy i NDA jako fakty", text: "Warstwy, tabelki rysunkowe, jednostki, czyj jest plik" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i Perplexity", text: "Tam pada pytanie, ile kosztuje przerysowanie PDF do CAD" },
        { _key: k("o"), iconName: "clock", title: "Terminy i wolne moce, wprost", text: "Ile arkuszy tygodniowo i co weźmiecie od poniedziałku" },
        { _key: k("o"), iconName: "target", title: "Napisane do projektanta", text: "Nie do właściciela budynku, a do człowieka z terminem" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: usługi techniczne oceniane po pliku, który odsyłacie",
      subtitle:
        "Co łączy te projekty z firmą rysunkową: klient kupuje plik, nie spotkanie, zlecenie przychodzi zdalnie, a wzrost wziął się ze struktury i treści, nie z kupionych linków. Firma skanowania 3D i BIM, w której ruch z wyszukiwarki wzrósł dwudziestodziewięciokrotnie. Dostawca internetu rozliczany adres po adresie. Wielojęzyczna platforma nieruchomości. Warsztat i serwis z tym samym schematem zapytań.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "web-development-a-website-for-internet-prowider",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("SEO firmy CAD zaczyna się od tego, kto naprawdę kupuje: projektanta, któremu skończyły się godziny"),
        p("Zajmuję się SEO firm usług CAD. Praca zaczyna się od jednej rzeczy, którą muszę od was usłyszeć: ile jesteście w stanie wziąć w następnym tygodniu. Potem buduję podstrony, które to mówią wprost, bo to jedyne pytanie waszego klienta."),
        p("Waszym klientem nie jest właściciel budynku, który szuka rysunków."),
        p("To architekt, któremu dwóch kreślarzy jest zajętych na miesiąc. Biuro inżynierskie, które wygrało przetarg i musi oddać arkusze do piętnastego. Firma skanująca z chmurą punktów i bez nikogo, kto zrobi z niej rzut. Producent, który trzyma w ręku część, a jej rysunki zginęły w latach dziewięćdziesiątych."),
        p("Wszyscy czterej są fachowcami. Nie potrzebują wyjaśnień, czym jest CAD. Muszą wiedzieć, czy weźmiecie robotę, w ich standardzie i na ich datę."),
        p("To zmienia całą stronę:"),
        li("strona główna mówi, co bierzecie i co oddajecie, a nie jak działa CAD;"),
        li("każda podstrona nazywa wejście i wyjście, w formatach plików;"),
        li("standardy są napisane, a nie obiecane przez telefon;"),
        li("wolne moce i terminy są na stronie, w arkuszach i dniach;"),
        li("a przykłady to prawdziwe pliki, nie wizualizacje."),

        h2("Podstrony SEO pod wejście i wyjście: PDF, chmura punktów, pomiary, gotowa część"),
        p("Popyt siedzi na usłudze, nie na zawodzie. Po angielsku „cad drafting services” to 590 wyszukiwań miesięcznie, „reverse engineering services” 110, po polsku „usługi cad” 50 i „projekty wykonawcze” 40. A „strona dla firmy CAD” nie daje nic."),
        p("Nikt nie szuka firmy CAD. Szukają roboty, którą trzymają w ręku."),
        p("Więc jedna podstrona na jedną robotę. Papier i PDF do CAD. Chmura punktów do rzutów albo modelu BIM. Pomiary z budowy do rysunków. Gotowa część do modelu parametrycznego. Każda ma innego klienta, inną logikę ceny i inne pierwsze pytanie."),

        h2("Standardy, przekazanie plików i NDA: czym nieznany dostawca zdobywa zaufanie fachowca"),
        p("Fachowiec, który wysyła wam zlecenie, podpisuje się własnym nazwiskiem pod waszym plikiem."),
        p("Dlatego zapytanie wygrywa nie galeria ładnych rysunków. Wygrywają warstwy nazwane tak, jak nazywa je jego biuro, jego tabelka rysunkowa, jego jednostki, jego wersja programu i termin poprawek, który da się wpisać w harmonogram."),
        p("Napiszcie to faktami: w jakich standardach pracujecie, jakie szablony przyjmujecie, czyj jest plik po oddaniu, ile trwa rewizja i czy podpisujecie NDA przed zobaczeniem czegokolwiek."),

        h3("Co dostajecie, czego szuka klient i co musi udowodnić podstrona"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Zlecenie", "Czego szuka klient", "Co musi udowodnić podstrona"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Papier i PDF do CAD", "„usługi cad”, „przerysowanie pdf do dwg”", "Cena za arkusz, termin, standard warstw"] },
        { _type: "tableRow", _key: k("r"), cells: ["Chmura punktów do rzutów lub BIM", "„scan to bim”, „model z chmury punktów”", "LOD, wersja programu, co robicie z brakami"] },
        { _type: "tableRow", _key: k("r"), cells: ["Pomiary z budowy do rysunków", "„rysunki z pomiarów”", "Czego potrzebujecie z budowy, tolerancja, zakres arkuszy"] },
        { _type: "tableRow", _key: k("r"), cells: ["Gotowa część do modelu", "„reverse engineering”, „model 3d z części”", "Metoda, tolerancja, format (STEP, natywny)"] },
        { _type: "tableRow", _key: k("r"), cells: ["Rysunki warsztatowe i wykonawcze", "„projekty wykonawcze”, „rysunki warsztatowe”", "Standardy, cykle poprawek, kto podpisuje"] },
        { _type: "tableRow", _key: k("r"), cells: ["Wolne moce na miesiąc", "„outsourcing cad”", "Wielkość zespołu, stawki, jak szybko startujecie"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Jedyna taka usługa w branży: tej nie kupuje się lokalnie"),
        p("Geodetę bierze się po odległości. Firmy rysunkowej nie."),
        p("Pliki jadą mailem, więc pytanie nigdy nie brzmi „czy jesteście blisko”. Brzmi: w jakiej strefie czasowej odpowiadacie, w jakim języku wracają poprawki i czy pracujecie w normach kraju, w którym stanie budynek."),
        p("To inny rodzaj podstrony. Zamiast listy miast nosi rynki, dla których pracujecie, i standardy, które znacie, a napisana jest językiem klienta, nie waszego biura."),

        h3("Przykładowe pliki zamiast galerii"),
        p("Większość stron rysunkowych pokazuje wizualizacje. Wizualizacje robi architekt klienta, a nie wy."),
        p("Jeden arkusz do pobrania — prawdziwy, zanonimizowany, z widoczną tabelką i warstwami — przekonuje lepiej niż dwadzieścia obrazków. W dziesięć sekund odpowiada na pytanie, od którego zależy całe zapytanie."),

        h3("Cena za arkusz i za metr, wpisana na stronę"),
        p("Prawie nikt w tej branży nie podaje liczby, a prawie każde zapytanie zaczyna się od pytania o nią."),
        p("Widełki za arkusz, za metr albo za godzinę plus zdanie o tym, co je zmienia, robią dwie rzeczy: przyprowadzają klienta, który i tak by zapytał, i odsiewają tego, który liczył na czterdzieści euro."),

        h2("Widoczność w AI: ChatGPT, Perplexity, Gemini i AI Overviews"),
        p("„Ile kosztuje przerysowanie PDF do CAD” i „czy da się zrobić model BIM z chmury punktów” to pytania do asystenta. Padają przed wyszukiwarką."),
        p("Asystent odpowiada z czytelnego tekstu i podaje dostawców, którzy na stronie zobowiązali się do liczb: cena za arkusz, termin, tolerancja, formaty."),
        p("O tym, czy was wymieni, decydują trzy rzeczy: tekst zamiast PDF-ów i galerii, liczby warte zacytowania, te same dane firmy wszędzie."),

        h3("GEO, AEO i LLM SEO w praktyce"),
        p("GEO i AEO to ta sama praca z dwóch stron: być wymienionym w wygenerowanej odpowiedzi, nie tylko na liście linków. LLM SEO to to samo w modelach językowych."),
        p("To pięć, sześć poprawek i prawie w całości pokrywają się z tym, co w ogóle pozwala stronie się wybić."),
        p(
          "Na istniejącej stronie to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ". Gdy asystenci opisują firmę błędnie, to ",
          link("naprawa dezinformacji w AI", "/pl/oferty/naprawa-dezinformacji-ai"),
          ".",
        ),

        h2("Techniczne SEO: waga plików, szybkość i formularz, który prosi o jeden arkusz"),
        p("Strony rysunkowe są ciężkie z głupiego powodu: rysunki w pełnej rozdzielczości i PDF-y wczytywane na stronie głównej."),
        p("Zostawcie przykłady, podajcie je w rozsądnym rozmiarze, a strona niech otwiera się na telefonie poniżej dwóch sekund — wasz klient często pisze z budowy."),
        p("Formularz ma prosić o jeden arkusz, program i wersję, ilość i termin. Te cztery odpowiedzi pozwalają wycenić bez rozmowy, a to jest cała wasza przewaga nad biurem obok."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Audyt SEO strony firmy usług CAD",
      subtitle: "Przyślijcie adres strony, odpowiadam w jeden dzień roboczy: co ją blokuje i co zrobiłbym najpierw.",
      contextLabel: "Firma lub adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i zamów audyt",
      note: "Albo napiszcie na WhatsApp — odpowiadam tak samo szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co najczęściej dostajecie?", options: ["PDF i papier", "Chmury punktów", "Pomiary z budowy", "Gotowe części"] },
        { _key: k("z"), question: "Kto dziś przysyła wam zlecenia?", options: ["Architekci", "Biura inżynierskie", "Firmy skanujące", "Klienci końcowi"] },
        { _key: k("z"), question: "Co jest teraz na stronie?", options: ["Jedna strona ze wszystkim", "Podstrona na usługę", "Głównie galeria", "Nie wiem"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony firmy usług CAD: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje SEO firmy usług CAD?", "Audyt 1000 zł, prace jednorazowe 1000–3000 zł, stała praca 3500 zł miesięcznie. Kwota zależy od tego, ile rodzajów zleceń dostaje własną podstronę i czy stronę da się w ogóle edytować."],
          ["Naszymi klientami są architekci i inżynierowie. SEO w ogóle do nich trafia?", "Trafia, i w tej branży jest głównym kanałem: szukają wolnych moc w tym tygodniu, w którym im się skończyły, i wpisują zlecenie, nie dostawcę. Samo „cad drafting services” to 590 wyszukiwań miesięcznie."],
          ["Mamy podawać ceny?", "Widełki tak. Prawie nikt w branży tego nie robi, a prawie każde zapytanie od tego się zaczyna. Liczba za arkusz albo za metr plus zdanie, co ją zmienia, przyprowadza poważnego klienta i odsiewa resztę."],
          ["Czy klient znajdzie nas przez ChatGPT albo Perplexity?", "Tak. „Ile kosztuje przerysowanie PDF do CAD” pada tam bez przerwy. Asystenci wymieniają dostawców, którzy wyjaśniają metodę i podają liczby, a pomijają strony złożone z galerii."],
          ["Czym są GEO i AEO po ludzku?", "Tym, że asystent wymienia was w swojej odpowiedzi, a nie tylko na liście linków. Praca jest zwyczajna: tekst zamiast PDF-ów i galerii, dane strukturalne, liczby na stronie, spójne dane firmy."],
          ["Potrzebujemy w ogóle pozycjonowania lokalnego?", "Prawie nie. To jedyna usługa w tym zestawie kupowana zdalnie, więc podstrony buduje się wokół rynków, standardów i stref czasowych, nie wokół miast. Wizytówka pomaga, ale zlecenia nie przychodzą z niej."],
          ["Czy możemy pokazywać rysunki klientów?", "Tylko zanonimizowane i tylko za zgodą. Jeden uczciwy arkusz z widoczną tabelką i warstwami jest wart więcej niż galeria, a zwykle da się go przygotować z własnej pracy wewnętrznej."],
          ["Kiedy to zamieni się w zapytania?", "Pierwszy ruch po około sześciu tygodniach, realny wzrost w horyzoncie trzech do sześciu miesięcy. Podstrony konwersji (PDF do CAD, chmura do BIM) ruszają szybciej niż ogólne, bo intencja jest natychmiastowa."],
          ["Kto pisze podstrony usług?", "Ja piszę pierwszą wersję, wy poprawiacie. Wiarygodne jest to, co wie tylko biuro rysunkowe: które pliki przychodzą nie do użytku, ile naprawdę kosztuje rewizja, gdzie obietnica tolerancji staje się kłamstwem."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów audyt SEO strony firmy usług CAD: co mi przysłać"),
        p("Przyślijcie adres strony. Napiszcie, co zwykle dostajecie, kto to przysyła i ile mogliście wziąć w następnym miesiącu."),
        p("Odpowiadam w jeden dzień roboczy: co blokuje stronę, jakich podstron brakuje i co zrobiłbym najpierw."),
      ],
    },
  ],
};
