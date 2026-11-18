// Landing page fixture: SEO dla firm skanowania 3D i BIM (PL),
// group «scanning-company-seo». NEW page — create-landing.cjs.
//
// Adaptacja rynkowa. Pomiar scanning-niches.md: po polsku «chmura punktów»
// 260, «skanowanie laserowe 3d» 110, «skanowanie 3d budynków» 110,
// «modelowanie bim» 140, «scan to bim» 40, «modelowanie revit» 30,
// «inwentaryzacja budynku» 590. Strona właścicielska zerowa.
// Słownik usług (service-wording.md): seo 12 100, pozycjonowanie stron 5 400,
// ai seo 720, pozycjonowanie w chatgpt 170; GEO i AEO po polsku do H3.
//
// Hak polski: najmocniejszą frazą w tym kuście jest «inwentaryzacja budynku»
// 590 — czyli dokładnie to, czego klient szuka ZAMIAST skanowania. Strona
// stoi na tym: rankujemy po efekcie, nie po technologii.
import { p, h2, h3, li, link, k } from "./pt";

export const scanningCompanySeoPl = {
  lang: "pl",
  group: "scanning-company-seo",
  slug: "pozycjonowanie-strony-firmy-skanowania-3d",
  title: "SEO i pozycjonowanie strony firmy skanowania 3D i BIM",
  heading:
    "SEO dla firmy skanowania 3D i BIM: jak rankować po efekcie, skoro samej technologii nikt nie szuka",
  excerpt:
    "Zajmuję się SEO i pozycjonowaniem stron firm skanowania laserowego 3D i BIM. Buduję podstrony wokół tego, co klient dostaje — inwentaryzacja, model BIM, chmura punktów — bo samego skanowania prawie nikt nie szuka. Pozycjonowanie lokalne i AI SEO, żeby wymieniał was ChatGPT, Perplexity i Gemini. Tę pracę wykonałem na stronie firmy skanującej: ruch z wyszukiwarki wzrósł dwudziestodziewięciokrotnie. Audyt 1000 zł, stała praca 3500 zł miesięcznie.",
  seo: {
    metaTitle: "SEO firmy skanowania 3D: efekty, branże i AI",
    metaDescription:
      "SEO dla firm skanowania 3D i BIM: podstrony pod inwentaryzację, scan to BIM i chmurę punktów, podstrony branżowe, pozycjonowanie lokalne i AI SEO.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podstrona na każdy efekt", "AI SEO: ChatGPT i Perplexity", "Audyt 1000 zł"],
  heroPhonePoints: ["Inwentaryzacja budynku", "Model BIM istniejącego obiektu", "Chmura punktów w waszym formacie", "Wymienia was ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy skanowania 3D i BIM: frazy, podstrony efektów, wizytówka, widoczność w AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony efektów i branż, dane strukturalne, formularz zapytania", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony firmy skanowania 3D i BIM", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Zakres prac",
      title: "SEO firmy skanowania 3D i BIM: co wchodzi w pracę",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Podstrona na każdy efekt", text: "Inwentaryzacja, scan to BIM, chmura punktów, rzuty" },
        { _key: k("o"), iconName: "users", title: "Podstrony branżowe dla tych, którzy o skanowaniu nie słyszeli", text: "Zarządcy obiektów, architekci, ubezpieczyciele, zakłady" },
        { _key: k("o"), iconName: "sparkles", title: "AI SEO: ChatGPT i Perplexity", text: "Tam pada pytanie o rysunki starego budynku" },
        { _key: k("o"), iconName: "map-pin", title: "Zasięg, do którego ekipa realnie dojedzie", text: "Miasta i województwa wypisane wprost" },
        { _key: k("o"), iconName: "gauge", title: "Dokładność, formaty i termin na stronie", text: "Trzy rzeczy, które techniczny klient sprawdza najpierw" },
        { _key: k("o"), iconName: "zap", title: "Ciężkie wizualizacje, które nie topią strony", text: "Chmury punktów i widoki BIM bez dziesięciu sekund ładowania" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: ta sama praca wykonana na stronie firmy skanującej",
      subtitle:
        "Pierwsza realizacja to firma skanowania laserowego 3D i BIM: serwis przebudowany od zera, trzy języki, ponad trzysta podstron zbudowanych wokół efektów, branż i regionów. Ruch z wyszukiwarki wzrósł dwudziestodziewięciokrotnie, zapytania przychodzą co tydzień. Pozostałe mają ten sam wzorzec: techniczny klient, zapytanie przypisane do obiektu, wzrost ze struktury i treści, nie z kupionych linków.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "web-development-a-website-for-internet-prowider",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "investment-platform-with-ai-guided-learning",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("SEO firmy skanowania 3D zaczyna się od efektu, nie od skanera"),
        p("Zajmuję się SEO firm skanowania 3D i BIM. Praca zaczyna się od plików, które oddajecie klientowi, i każdemu robię własną podstronę. Potem strona jest znajdowana po efekcie, a nie po skanerze."),
        p("Wasz klient ma budynek i nie ma rysunków. Zaczyna się remont. Najemca chce dokładnych powierzchni. Zakład potrzebuje modelu przed modernizacją."),
        p("Nie wpisuje „skanowanie laserowe 3D”. Większość tych ludzi nigdy nie słyszała tego określenia."),
        p("Wpisują to, co chcą dostać: inwentaryzacja budynku, rzut istniejącego obiektu, model BIM, powierzchnie, którym można zaufać."),
        p("Dlatego strona zbudowana wokół technologii pozostaje niewidoczna. Skaner jest waszym narzędziem, nie ich problemem."),
        li("jedna podstrona na jeden efekt, nazwany tak, jak nazywa go klient;"),
        li("dokładność, formaty i termin podane liczbami, bo techniczny klient sprawdza je najpierw;"),
        li("krótkie wyjaśnienie, czym jest skanowanie, wewnątrz podstrony o efekcie, a nie na osobnej podstronie;"),
        li("podstrony branżowe dla tych, którzy nie wiedzą, że taka usługa istnieje;"),
        li("lista sprzętu nisko, na samym dole."),

        h2("Podstrony SEO pod efekty: inwentaryzacja, scan to BIM, chmura punktów, rzuty"),
        p("Pomiar to potwierdza. „Inwentaryzacja budynku” to 590 wyszukiwań miesięcznie, „chmura punktów” 260, „modelowanie BIM” 140, „skanowanie laserowe 3D” 110, „skanowanie 3D budynków” 110, „scan to BIM” 40."),
        p("Najmocniejszą frazą w całym kuście jest inwentaryzacja, czyli dokładnie to, czego klient szuka zamiast skanowania."),
        p("Za każdym efektem stoi inny klient. Architekt chce modelu, który otworzy w Revicie. Zarządca chce powierzchni i rzutu. Wykonawca chce wiedzieć, co naprawdę zbudowano, zanim policzy ofertę."),

        h2("Pozycjonowanie lokalne i zasięg: obiekty, do których ekipa dojedzie"),
        p("Skanowanie to praca wyjazdowa. Ekipa jedzie albo nie przyjeżdża wcale."),
        p("Dlatego zasięg stoi na stronie jako lista miast i województw, a nie promień na mapie. Klient z drugiego końca kraju ma w sekundę wiedzieć, czy czytać dalej."),
        p("Te same dane trafiają do wizytówki i do asystentów. Gdy zasięg na stronie i w wizytówce się rozjeżdża, wypadacie z obu."),

        h3("Efekt, słowa, których klient naprawdę szuka, i podstrona, która je łapie"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Efekt", "Czego szuka klient", "Na co podstrona musi odpowiedzieć"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Inwentaryzacja budynku", "„inwentaryzacja budynku”, „rysunki istniejącego obiektu”", "Formaty, dokładność, co wchodzi w zakres, a co nie"] },
        { _type: "tableRow", _key: k("r"), cells: ["Scan to BIM", "„scan to bim”, „model bim z inwentaryzacji”", "LOD, oprogramowanie, jakie branże obejmuje model"] },
        { _type: "tableRow", _key: k("r"), cells: ["Modelowanie BIM istniejącego obiektu", "„modelowanie bim”, „modelowanie revit”", "Co modelujecie, czego nie, jak wygląda przekazanie"] },
        { _type: "tableRow", _key: k("r"), cells: ["Chmura punktów", "„chmura punktów”", "Formaty, wielkość plików, co klient z tym zrobi sam"] },
        { _type: "tableRow", _key: k("r"), cells: ["Powierzchnie i rzuty", "„pomiar powierzchni”, „rzut istniejącego budynku”", "Tolerancja, sposób liczenia powierzchni, norma"] },
        { _type: "tableRow", _key: k("r"), cells: ["Dokumentacja obiektów i zakładów", "„skanowanie laserowe 3d”, „skanowanie 3d budynków”", "Sprzęt i dokładność, dla tej mniejszości, która zna termin"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Podstrony branżowe: jak docierać do klientów, którzy nie wiedzą, że skanowanie istnieje"),
        p("To ta część, która decyduje o wyniku, i to ją firmy skanujące najczęściej pomijają."),
        p("Zarządca zakładu z lat siedemdziesiątych, ubezpieczyciel dokumentujący szkodę, deweloper kupujący budynek bez dokumentacji — żadne z nich nie szuka skanowania. Każde szuka swojego problemu."),
        p("Podstrona na branżę, napisana jej językiem, to jedyny sposób, żeby usługa została w ogóle odkryta. Najpierw sytuacja, potem efekt, a dopiero na końcu to, co ma z tym wspólnego skaner."),

        h3("Dowód ze strony firmy skanującej: dwudziestodziewięciokrotny wzrost ruchu"),
        p(
          "Przebudowałem i wypozycjonowałem ",
          link("stronę firmy skanowania laserowego 3D i BIM", "/pl/portfolio/tworzenie-i-seo-strony-architektonicznej-scan"),
          ". Ponad dziewięćdziesiąt procent jej potencjalnych klientów nie wiedziało, że taka usługa istnieje.",
        ),
        p("Serwis powstał od zera, w trzech językach, z ponad trzystoma podstronami zbudowanymi wokół efektów, branż i regionów. Ruch z wyszukiwarki wzrósł dwudziestodziewięciokrotnie, firma weszła do pierwszej trójki na jednym rynku i do dwudziestki na drugim, a zapytania zaczęły przychodzić co tydzień."),
        p("Podejście opisane na tej podstronie to ta praca, spisana."),

        h3("Podstrony, które przesyłają architekci i wykonawcy"),
        p("Duża część zleceń przychodzi przez innych profesjonalistów. Oni nie szukają — przesyłają link, żeby wytłumaczyć usługę własnemu klientowi."),
        p("Serwis potrzebuje więc podstron pisanych pod przesyłanie: co skanowanie zastępuje, co klient dostaje, ile to mniej więcej kosztuje, jak wygląda praca na obiekcie."),

        h2("AI SEO dla firmy skanowania 3D: ChatGPT, Perplexity, Gemini i AI Overviews"),
        p("„Jak zdobyć dokładne rysunki budynku, do którego nie ma dokumentacji” — to pytanie ludzie zadają dziś asystentowi."),
        p("To też pytanie, na które wasza branża odpowiada lepiej niż ktokolwiek, i prawie nikt nie zapisał tej odpowiedzi czytelnym tekstem."),
        p("O tym, czy padnie wasza nazwa, decydują trzy rzeczy. Tekst, który maszyna przeczyta, zamiast PDF-ów i przykładowych rysunków. Liczby do zacytowania: dokładność, formaty, termin, zasięg. I te same dane wszędzie, gdzie firma występuje."),

        h3("GEO, AEO i LLM SEO: co to znaczy w praktyce"),
        p("Generative engine optimization i answer engine optimization to ta sama praca z dwóch stron: żeby wasza nazwa padła w wygenerowanej odpowiedzi, a nie tylko w liście linków. LLM SEO to to samo w odniesieniu do modeli językowych."),
        p("W praktyce to pięć, sześć poprawek, które niemal w całości pokrywają się z tym, co i tak sprawia, że strona rankuje."),
        p(
          "Na istniejącej stronie to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ". Jeśli asystenci opisują firmę błędnie, to ",
          link("poprawa błędnych danych w AI", "/pl/oferty/poprawa-blednych-danych-w-ai"),
          ".",
        ),

        h2("SEO techniczne: chmury punktów, szybkość i formularz, który pyta o obiekt"),
        p("Strony firm skanujących są najcięższe ze wszystkich technicznych, jakie audytuję. Zrzuty chmur punktów, widoki BIM, przykładowe opracowania, przeloty wideo."),
        p("To wszystko może zostać. Poprawne formaty i rozmiary zachowują jakość przy ułamku wagi, a nic nie wczytuje się, zanim nie trafi na ekran."),
        p("Ważniejszy jest formularz. Pytajcie o typ obiektu, przybliżoną powierzchnię, potrzebny efekt i termin. Do tego wgranie pliku z tym, co klient już ma. Te cztery odpowiedzi zamieniają zapytanie w wycenę tego samego dnia."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Audyt SEO strony firmy skanowania 3D i BIM",
      subtitle: "Prześlij adres strony. Odpiszę w ciągu jednego dnia roboczego: co ją blokuje i od czego zacząć.",
      contextLabel: "Firma albo adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i odbierz audyt",
      note: "Możesz też napisać na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co sprzedajecie najczęściej?", options: ["Inwentaryzacje", "Scan to BIM", "Samą chmurę punktów", "Pełne projekty dokumentacji"] },
        { _key: k("z"), question: "Kim są wasi klienci?", options: ["Architekci i projektanci", "Wykonawcy i deweloperzy", "Przemysł i zarządcy obiektów", "Różnie"] },
        { _key: k("z"), question: "Skąd przychodzą zlecenia teraz?", options: ["Z poleceń", "Ze sprzedaży bezpośredniej", "Z przetargów", "Wyszukiwarka już trochę działa"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO dla firm skanowania 3D i BIM: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony firmy skanowania 3D?", "Audyt 1000 zł, prace jednorazowe 1000–3000 zł, stała praca 3500 zł miesięcznie. O kwocie decyduje liczba efektów i branż na osobnych podstronach oraz to, czy obecna strona pozwala dodawać podstrony."],
          ["Skanowania prawie nikt nie szuka. Czy SEO ma tu sens?", "Właśnie dlatego ma, i to jest najtrudniejsze do wytłumaczenia. Nie rankujecie po technologii. Rankujecie po efekcie i po problemie: inwentaryzacja budynku, model przed modernizacją, powierzchnie, którym można zaufać. Na stronie firmy skanującej to podejście dało dwudziestodziewięciokrotny wzrost ruchu."],
          ["Czy ChatGPT albo Perplexity będą nas wymieniać?", "Wymieniają firmy, których podstrony tłumaczą efekt czytelnym tekstem i podają liczby. Pytanie o rysunki budynku bez dokumentacji pada tam bez przerwy, a cytowana jest ta firma, która napisała najjaśniejszą odpowiedź."],
          ["Co to GEO i AEO po ludzku?", "To praca nad tym, żeby wasza nazwa padała w odpowiedzi pisanej przez asystenta, a nie tylko na liście linków. Robi się to zwyczajnie: tekst zamiast PDF-ów, dane strukturalne, liczby w treści, spójne dane wszędzie."],
          ["Czy publikować ceny?", "Widełki na każdy efekt razem z warunkami, nie cennik. Powierzchnia, dostęp i poziom szczegółowości ruszają kwotą, a napisanie tego odcina zapytania, z których i tak nic by nie powstało."],
          ["Mamy ciężkie wizualizacje. Czy strona będzie wolna?", "Nie, jeśli zrobi się to poprawnie. Chmury punktów i widoki BIM zachowują jakość przy ułamku wagi, a nic nie ładuje się przed pojawieniem się na ekranie."],
          ["Po jakim czasie widać to w zapytaniach?", "Pierwsze ruchy po około sześciu tygodniach, realny wzrost w trzy do sześciu miesięcy. Podstrony branżowe potrzebują więcej czasu niż podstrony efektów, bo tworzą popyt, a nie łapią istniejący."],
          ["Gwarantujesz pozycję?", "Nie. Mogę powiedzieć, co zostanie zrobione, w jakiej kolejności i co mierzymy po miesiącu oraz po trzech."],
          ["Kto pisze podstrony o efektach?", "Szkic ja, poprawki wy. Wiarygodne czyni je to, co wie tylko firma: które obiekty sprawiają kłopot, co naprawdę znaczy dokładność na budynku bez osnowy, czego nie obiecujecie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów audyt SEO strony firmy skanowania 3D: co przysłać"),
        p("Prześlij adres strony. Napisz, jakich efektów chcecie więcej, jakie branże już obsługujecie i jak daleko jeździ ekipa."),
        p("W ciągu jednego dnia roboczego odpiszę, co blokuje serwis, ile treści siedzi w PDF-ach i przykładowych rysunkach nieczytelnych dla wyszukiwarki i asystenta, i od czego bym zaczął."),
      ],
    },
  ],
};
