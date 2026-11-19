// Landing page fixture: SEO for 3D printing services (PL), group «printing-3d-seo».
// Same backbone as EN: the only niche in the cluster with too much demand, so
// SEO's job is filtering. Measured: «wydruki 3d na zamówienie» 590,
// «druk 3d usługi» 210, «prototypowanie 3d» 70. GEO/AEO → H3 and body.
import { p, h2, h3, li, link, k } from "./pt";

export const printing3dSeoPl = {
  lang: "pl",
  group: "printing-3d-seo",
  slug: "pozycjonowanie-strony-firmy-druku-3d",
  title: "SEO i pozycjonowanie strony firmy druku 3D",
  heading:
    "SEO i pozycjonowanie strony firmy druku 3D: jak z ogromnego ruchu wyłowić zamówienia, które warto wyceniać",
  excerpt:
    "Zajmuję się SEO drukarni 3D. To rzadka branża, w której zapytań jest za dużo, a nie za mało — i większość z nich to jedna hobbystyczna część za pięć euro. Buduję podstrony pod materiały i technologie, wstawiam wycenę z wgranego pliku i minimalne zamówienie, a zapytania produkcyjne przechodzą dalej. Audyt 1000 zł, stała praca 3500 zł miesięcznie.",
  seo: {
    metaTitle: "SEO drukarni 3D: materiały, wycena i widoczność w AI",
    metaDescription:
      "Pozycjonowanie strony firmy druku 3D: podstrony pod materiały i technologie, wycena z wgranego pliku, minimalne zamówienie i widoczność w ChatGPT.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podstrona pod każdy materiał", "Widoczność w ChatGPT", "Audyt od 1000 zł"],
  heroPhonePoints: ["Wycena z wgranego pliku", "SLS, SLA, FDM, metal", "Minimalne zamówienie wprost", "ChatGPT podaje firmę"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony drukarni 3D: podstrony materiałów i technologii, ścieżka wyceny, wizytówka, widoczność w AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony materiałów i zastosowań, formularz wyceny, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony firmy druku 3D", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Zakres pracy",
      title: "Pozycjonowanie strony firmy druku 3D: z czego składa się praca",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona pod materiał i technologię", text: "SLS, SLA, FDM, metal, żywica — czyli to, co wpisuje klient" },
        { _key: k("o"), iconName: "file-text", title: "Wycena z wgranego pliku", text: "Podstrona, która zamienia wejście w zamówienie" },
        { _key: k("o"), iconName: "target", title: "Minimalne zamówienie, napisane wprost", text: "Mniej zapytań za pięć euro, więcej serii" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i Perplexity", text: "Tam pada pytanie, z jakiego materiału wydrukować część" },
        { _key: k("o"), iconName: "map-pin", title: "Podstrona „w pobliżu” zrobiona porządnie", text: "Na tej jednej frazie siedzi ogromny lokalny ruch" },
        { _key: k("o"), iconName: "clock", title: "Termin i tolerancja jako fakty", text: "To sprawdza fachowiec, zanim do was napisze" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: usługi techniczne, w których zapytanie musi przyjść już opisane",
      subtitle:
        "Co łączy te projekty z drukarnią 3D: klient wysyła plik albo adres, a nie brief, wycena powstaje przed spotkaniem, a wzrost wziął się ze struktury i treści, nie z kupionych linków. Firma skanowania 3D i BIM, w której ruch z wyszukiwarki wzrósł dwudziestodziewięciokrotnie. Dostawca internetu rozliczany adres po adresie. Wielojęzyczna platforma nieruchomości. Warsztat i serwis z tym samym schematem zapytań.",
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
        h2("SEO drukarni 3D zaczyna się od filtrowania zapytań, a nie od ich zdobywania"),
        p("Zajmuję się SEO drukarni 3D. Praca zaczyna się od jednej waszej decyzji, którą wpisuję na stronę: jakie jest najmniejsze zamówienie, które naprawdę chcecie. Cała reszta wynika z tej linijki."),
        p("To jedyna branża na mojej liście, w której zapytań jest za dużo, a nie za mało."),
        p("Po angielsku „3d printing services” to 49 500 wyszukiwań miesięcznie, po polsku „wydruki 3d na zamówienie” 590 i „druk 3d usługi” 210. Duża część tego to student z jedną częścią, hobbysta z uchwytem do telefonu, ktoś, kto chce figurkę za dwadzieścia złotych."),
        p("A zamówienie, które robi wam miesiąc — dwieście obudów z nylonu, przyrząd na linię produkcyjną, seria prototypów przed formą — wpisuje zupełnie inne słowa. Zwykle w ogóle nie wpisuje „druk 3D”."),
        p("Więc strona ma dwa zadania naraz:"),
        li("pozwolić klientowi produkcyjnemu znaleźć was jego własnym słownikiem;"),
        li("powiedzieć hobbyście wprost na stronie, że to nie tutaj;"),
        li("wycenić poważnego, zanim odpowie konkurencja;"),
        li("i zostawić wielką frazę ogólną jako rozdzielacz ruchu;"),
        li("zamiast podstrony, która zbiera wszystkich i nie zamienia nikogo."),

        h2("Podstrony SEO pod materiał i technologię: SLS, SLA, FDM i metal"),
        p("W skanowaniu 3D jest odwrotnie: tam klient nigdy nie nazywa technologii. W druku technologia jest zapytaniem."),
        p("Fachowiec wpisuje „druk SLS nylon”, „tolerancja druku z żywicy”, „druk 3D z metalu”. On już wie, czego potrzebuje, i wybiera dostawcę — to najcenniejsze słowa na stronie i najłatwiejsze do zajęcia, bo prawie nikt nie pisze o nich porządnej podstrony."),
        p("Jedna podstrona na materiał i proces, każda odpowiada na te same cztery pytania: do czego się nadaje, jaką trzymacie tolerancję, ile kosztuje sztuka i ile to trwa."),
        p("Pod nimi podstrony zastosowań — przyrządy, części zamienne, makiety architektoniczne, krótkie serie — bo tak klient myśli o swoim problemie."),

        h2("Formularz wyceny to podstrona, która zarabia zamówienie"),
        p("W tej branży klient ma już plik. To zmienia wszystko."),
        p("Jeśli może go wgrać i zobaczyć cenę oraz datę, zamawia. Jeśli musi opisać część w formularzu kontaktowym i czekać dobę, idzie do serwisu, który odpowiedział w trzydzieści sekund."),
        p("Wycena nie jest więc podstroną gdzieś w menu. Jest osią całej witryny: plik, materiał, ilość, tolerancja, cena lub widełki i data wysyłki. Reszta strony istnieje po to, żeby doprowadzić człowieka do tego formularza z właściwymi oczekiwaniami."),

        h3("Zlecenie, słowa klienta i dowód, który musi być na podstronie"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Zlecenie", "Czego szuka klient", "Co musi udowodnić podstrona"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Prototyp przed formą", "„prototypowanie 3d”", "Termin, liczba iteracji, co robicie ze złym plikiem"] },
        { _type: "tableRow", _key: k("r"), cells: ["Części funkcjonalne z nylonu", "„druk sls”, „druk 3d nylon”", "Tolerancja, wytrzymałość, wykończenie, cena sztuki"] },
        { _type: "tableRow", _key: k("r"), cells: ["Detal i modele odlewnicze", "„druk sla”, „druk z żywicy”", "Rozdzielczość, materiały, obróbka po druku"] },
        { _type: "tableRow", _key: k("r"), cells: ["Części z metalu", "„druk 3d z metalu”", "Proces, maszyny, certyfikaty, minimalne zamówienie"] },
        { _type: "tableRow", _key: k("r"), cells: ["Przyrządy i części zamienne", "„wydruki 3d na zamówienie”", "Powtarzalność, przyjmowane pliki, dostawa"] },
        { _type: "tableRow", _key: k("r"), cells: ["Krótkie serie produkcyjne", "„produkcja małoseryjna”", "Progi cenowe od ilości, moce, kontrola jakości"] },
        { _type: "tableRow", _key: k("r"), cells: ["Jedna część, lokalnie", "„druk 3d w pobliżu”", "Minimalne zamówienie, odbiór, jak szybko"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Zapytanie hobbystyczne i minimalne zamówienie wpisane na stronę"),
        p("Każda drukarnia, którą widziałem, traci kilka godzin tygodniowo na zapytania, których i tak nie przyjmie."),
        p("Lekarstwem jest jedna linijka tekstu: najmniejsze zamówienie, jakie bierzecie, i cena, od której się zaczyna. Na stronie głównej, w formularzu wyceny i na podstronie lokalnej."),
        p("Wygląda to jak odsyłanie klientów. W praktyce w kilka tygodni zmienia się to, kto do was pisze, a piszący znają już liczbę."),

        h3("Podstrona lokalna: druk 3D w mieście i w pobliżu"),
        p("Fraza „w pobliżu” jest w tej branży drugą co do wielkości, a większość drukarni zostawia ją zwykłej stronie kontaktowej."),
        p("Zasługuje na własną podstronę: wasze miasto i te, do których wysyłacie, godziny odbioru, co drukujecie tego samego dnia i to samo minimalne zamówienie. Resztę dopowiada wizytówka ze zdjęciami maszyn."),
        p("Przyciąga też ruch hobbystyczny — i właśnie dlatego minimalne zamówienie musi być na niej widoczne."),

        h3("Cena za sztukę, podana jako widełki"),
        p("Prawie żadna drukarnia nie podaje liczb, a prawie każde zapytanie od liczby się zaczyna."),
        p("Widełki za sztukę według materiału i ilości plus zdanie, co je zmienia, przyprowadzają klienta, który i tak by zapytał, i odsiewają tego, który liczył na dwadzieścia złotych."),

        h2("Widoczność w AI: ChatGPT, Perplexity, Gemini i AI Overviews"),
        p("„Z jakiego materiału wydrukować ten wspornik” i „czy SLS wytrzyma zawias” to pytania do asystenta. Padają długo przed wyborem dostawcy."),
        p("Asystent odpowiada z czytelnego tekstu i podaje firmy, które na stronie zobowiązały się do liczb: tolerancja, materiały, terminy, cena sztuki."),
        p("O tym, czy was wymieni, decydują trzy rzeczy: tekst zamiast galerii wydruków, liczby warte zacytowania, te same dane firmy wszędzie."),

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

        h2("Techniczne SEO: waga zdjęć, szybkość i wgrywanie pliku, które nie zawodzi"),
        p("Strony drukarni są zbudowane ze zdjęć wydruków i przez to ciężkie. Galeria, która ładuje się sześć sekund na telefonie, kosztuje więcej zamówień, niż przynosi."),
        p("Zdjęcia zostawcie, podajcie je w rozsądnym rozmiarze, a strona niech otwiera się poniżej dwóch sekund."),
        p("Potem przetestujcie samo wgrywanie: na telefonie, plikiem STEP o wadze sześćdziesięciu megabajtów, na słabym zasięgu. Formularz, który po cichu odrzuca duże pliki, to najdroższy błąd w tej branży i prawie nikt go nie sprawdza."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Audyt SEO strony drukarni 3D",
      subtitle: "Przyślijcie adres strony, odpowiadam w jeden dzień roboczy: co ją blokuje i co zrobiłbym najpierw.",
      contextLabel: "Firma lub adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i zamów audyt",
      note: "Albo napiszcie na WhatsApp — odpowiadam tak samo szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakich zamówień chcecie więcej?", options: ["Prototypy", "Części funkcjonalne", "Krótkie serie", "Metal"] },
        { _key: k("z"), question: "Jakie jest wasze najmniejsze sensowne zamówienie?", options: ["Poniżej 200 zł", "200–800 zł", "800–4000 zł", "Powyżej 4000 zł"] },
        { _key: k("z"), question: "Czy klient dostaje cenę na stronie?", options: ["Wycena od ręki", "Formularz, odpowiadamy ręcznie", "Tylko telefon", "Nie wiem"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony firmy druku 3D: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje SEO drukarni 3D?", "Audyt 1000 zł, prace jednorazowe 1000–3000 zł, stała praca 3500 zł miesięcznie. Kwota zależy od tego, ile materiałów i zastosowań dostaje własną podstronę i czy da się zmienić formularz wyceny."],
          ["Zapytań mamy dużo. Po co nam SEO?", "Bo chodzi o to, jakie one są. „Wydruki 3d na zamówienie” to 590 wyszukiwań miesięcznie, a po angielsku 49 500, i duża część to jedna hobbystyczna część. Praca polega nie na większym ruchu, tylko na zmianie składu: pozycjonowaniu pod materiały i zastosowania oraz na minimalnym zamówieniu, które odsyła resztę."],
          ["Czy naprawdę mamy podać minimalne zamówienie?", "Tak, i to jest zmiana, która najszybciej przestawia skład zapytań. Wygląda jak odmawianie pracy, a w praktyce przestajecie tracić godziny na zlecenia, których i tak byście nie przyjęli."],
          ["Czy potrzebna jest podstrona na każdy materiał?", "Na te, które realnie sprzedajecie, tak. „Druk SLS” albo „druk 3D z metalu” wpisuje ktoś, kto wie, czego chce, i wybiera dostawcę — najcenniejszy możliwy użytkownik, a prawie nikt nie pisze dla niego porządnej podstrony."],
          ["Czy fraza „druk 3d w pobliżu” jest warta osobnej podstrony?", "Jest drugą co do wielkości w branży, a większość firm zostawia ją stronie kontaktowej. Przyciąga też hobbystów i dlatego minimalne zamówienie musi być na niej widoczne."],
          ["Czy klient znajdzie nas przez ChatGPT albo Perplexity?", "Tak. „Z jakiego materiału wydrukować tę część” pada tam bez przerwy, zanim ktokolwiek wybierze dostawcę. Asystenci wymieniają firmy, które tłumaczą materiały i podają tolerancje, a pomijają strony będące samą galerią."],
          ["Czym są GEO i AEO po ludzku?", "Tym, że asystent wymienia was w swojej odpowiedzi, a nie tylko na liście linków. Praca jest zwyczajna: tekst zamiast galerii, dane strukturalne, liczby na stronie, spójne dane firmy."],
          ["Kiedy to zamieni się w zamówienia?", "Pierwszy ruch po około sześciu tygodniach, realny wzrost w horyzoncie trzech do sześciu miesięcy. Podstrony materiałowe ruszają szybciej niż ogólne, bo intencja jest natychmiastowa, a konkurencja cienka."],
          ["Kto pisze podstrony usług?", "Ja piszę pierwszą wersję, wy poprawiacie. Wiarygodne jest to, co wie tylko drukarnia: które pliki przychodzą nie do druku, ile naprawdę kosztuje skurcz, które obietnice o tolerancji są nieprawdą."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów audyt SEO strony firmy druku 3D: co mi przysłać"),
        p("Przyślijcie adres strony. Napiszcie, jakich zamówień chcecie więcej, jakie jest wasze najmniejsze sensowne zamówienie i czy klient może dostać cenę bez pisania do was."),
        p("Odpowiadam w jeden dzień roboczy: co blokuje stronę, jakich podstron brakuje i co zrobiłbym najpierw."),
      ],
    },
  ],
};
