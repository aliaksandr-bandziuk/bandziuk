// Landing page fixture: strona internetowa dla serwisu GSM (PL),
// grupa «phone-repair-website». NOWA strona — create-landing.cjs, root.
//
// Zmierzone (research/dataforseo/repair-niches.md, 19.11.2026): «serwis gsm»
// 6 600, «naprawa laptopów» 4 400 — rynek jest, ale frazy właściciela
// («strona dla serwisu gsm») praktycznie nie ma. Strona stoi więc na
// pytaniach właściciela, na intencji geograficznej (Warszawa, dzielnice,
// galerie) i na widoczności w asystentach.
//
// SZKIELET, inny niż u dwóch sąsiadów:
//   · phone-repair-seo — bycie znalezionym: podstrony modeli, ceny, mapy;
//   · appliance-repair-website — pulpit, który wysyła serwisanta.
// Tu nikogo się nie wysyła: klient przychodzi sam. Strona jest witryną
// sklepową, a jej jedyne zadanie to przeprowadzić człowieka czterysta metrów
// do waszej lady — cena jego modelu, część na miejscu, czas, piętro, godziny.
import { p, h2, h3, li, link, k } from "./pt";

export const phoneRepairWebsitePl = {
  lang: "pl",
  group: "phone-repair-website",
  slug: "strona-internetowa-dla-serwisu-gsm",
  title: "Strona internetowa dla serwisu GSM i punktu naprawy telefonów",
  heading:
    "Tworzenie strony dla serwisu GSM: witryna, która doprowadza klienta z pękniętym ekranem do waszej lady",
  excerpt:
    "Buduję strony dla serwisów GSM i punktów naprawy elektroniki. Nikogo tu nie wysyłacie — klient przychodzi sam, i wchodzi do tego, kto pierwszy odpowie na cztery pytania: ile kosztuje naprawa jego modelu, czy część jest na miejscu, ile będzie czekał i na którym piętrze jesteście. Strona od 8500 zł, audyt istniejącej 1000 zł.",
  seo: {
    metaTitle: "Strona dla serwisu GSM: cennik, części, dojście",
    metaDescription:
      "Strona internetowa dla serwisu GSM: cennik według modelu, dostępność części i czas naprawy, dojście do lady, szybkość na telefonie i gotowość na AI.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Cennik według modelu", "Widoczność w ChatGPT i AI", "Strona od 8500 zł"],
  heroPhonePoints: ["Cena jego modelu", "Część na miejscu dziś", "Czterdzieści minut przy was", "Piętro i wejście"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona internetowa dla serwisu GSM: cennik według modelu, dostępność części, dojście do lady", price: 8500, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page pod jedną markę, jedną naprawę albo jedną galerię handlową", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Audyt istniejącej strony serwisu GSM: ceny, szybkość, telefon", price: 1000, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Zakres pracy",
      title: "Tworzenie strony dla serwisu GSM: z czego składa się praca",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Cennik czytelny według modelu", text: "Nie „od”, nie „do ustalenia” — liczba" },
        { _key: k("o"), iconName: "clock", title: "Dostępność części i czas naprawy", text: "Czterdzieści minut przy was, część dziś" },
        { _key: k("o"), iconName: "map-pin", title: "Dojście do lady, nie do budynku", text: "Piętro, wejście, szyld, miejsce na postój" },
        { _key: k("o"), iconName: "sparkles", title: "Gotowość na wyszukiwanie AI od pierwszego dnia", text: "Dane strukturalne, czytelny tekst, realne liczby" },
        { _key: k("o"), iconName: "layers", title: "Laptopy i tablety w strukturze", text: "Droższe zlecenie, o którym prawie nikt nie pisze" },
        { _key: k("o"), iconName: "target", title: "Szybka na telefonie z pękniętym ekranem", text: "Poniżej dwóch sekund, jeden kciuk, słaby zasięg" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: lokalne punkty, w których klient decyduje przed wejściem",
      subtitle:
        "Co te projekty mają wspólnego z serwisem GSM: decyzja zapada na telefonie na ulicy, rozstrzyga cena i czas, a wzrost przyszedł ze struktury i treści, nie z kupionych linków. Warsztat renowacji felg w Warszawie. Serwis samochodowy z tym samym schematem „dzwonię teraz”. Dostawca internetu liczony po adresach. Studio urody sprzedające jedną usługę online. Firma skanowania 3D, której ruch z wyszukiwarki wzrósł dwudziestodziewięciokrotnie.",
      picks: [
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "web-development-a-website-for-internet-prowider",
        "e-commerce-landing-page-with-secured-video-access",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Strona serwisu GSM to witryna sklepowa, a nie system rezerwacji"),
        p("Buduję strony dla serwisów GSM i punktów naprawy elektroniki. Praca zaczyna się od jednej listy: modele, do których trzymacie części, i cena naprawy każdego z nich."),
        p("W tej branży nikt nie wysyła serwisanta. Klient z pękniętym ekranem stoi na ulicy, przy której są trzy punkty naprawy, i wybiera, w które drzwi wejść."),
        p("Daje wam na to kilkadziesiąt sekund. W tym czasie strona musi odpowiedzieć na cztery rzeczy: ile to kosztuje przy jego modelu, czy część jest na miejscu, ile będzie czekał i gdzie dokładnie jest lada."),
        p("Historia firmy, certyfikaty i zdjęcia stacji lutowniczej spychają te cztery odpowiedzi pod ekran. Dlatego strona powstaje w innej kolejności:"),
        li("cennik według modelu, dostępny jednym kliknięciem ze strony głównej;"),
        li("dostępność części i czas naprawy napisane obok ceny;"),
        li("dojście do lady dokładne na tyle, żeby trafić w galerii handlowej;"),
        li("godziny otwarcia prawdziwe także dziś;"),
        li("i dopiero potem wszystko, czym zwykle zaczyna się strona firmowa."),

        h2("Cennik według modelu na stronie serwisu GSM: tabela, która decyduje o wejściu"),
        p("Większość punktów pisze „od 149 zł” albo nic, z obawy przed podcięciem ceny przez sąsiada. Skutek jest taki, że decyzja przenosi się do rozmowy telefonicznej, której klient nie chce wykonywać."),
        p("Tabela modeli i napraw z prawdziwymi liczbami sprzedaje sama. Ekran do jego modelu, bateria, gniazdo ładowania — przy każdej pozycji cena, rodzaj części i czas."),
        p("Dopisanie, co zmienia cenę, nic nie kosztuje i działa: część oryginalna czy zamiennik, wygięta ramka, zalanie wykryte po otwarciu. Przy ladzie nikt nie spiera się o liczbę, którą już przeczytał."),

        h3("Dostępność części i czas naprawy na stronie serwisu GSM"),
        p("„Część na miejscu” i „czterdzieści minut przy was” to dwa zdania, które ruszają człowieka stojącego na ulicy."),
        p("Jeśli stan magazynu jest w systemie, strona może pokazywać go przy modelu. Jeśli jest w głowie, wystarczy lista dwudziestu modeli, które macie zawsze, i zdanie, że resztę zamawiacie na następny dzień."),

        h2("Dojście do lady: piętro, wejście i szyld, a nie tylko adres"),
        p("Połowa punktów GSM siedzi w galerii handlowej, w przejściu albo na pierwszym piętrze bloku, a na stronie ma adres poprawny i bezużyteczny."),
        p("Napiszcie wejście, piętro, co jest na szyldzie, jaki lokal sąsiaduje i gdzie stanąć na dziesięć minut. Dodajcie zdjęcie witryny z tej strony, z której ludzie najczęściej nadchodzą."),
        p("Ludzie nie gubią się na mapie. Gubią się na ostatnich pięćdziesięciu metrach, a tę część pomija niemal każda strona w tej branży."),

        h2("Strona serwisu GSM w Warszawie: dzielnica, galeria handlowa i godziny"),
        p("W Warszawie klient prawie zawsze dopisuje dzielnicę albo nazwę galerii: „naprawa telefonów Mokotów”, „wymiana ekranu Wola”. Strona z jednym adresem w stopce tego nie obsłuży."),
        p("Dla punktu w Warszawie robię osobną podstronę dzielnicy albo galerii, z dojściem, godzinami i cennikiem. Dla sieci kilku punktów — po jednej podstronie na każdy adres."),
        p(
          "W mniejszych miastach wystarczy jedna strona z nazwą miasta w tytule i w treści. Szerszy obraz stolicy opisuje strona ",
          link("tworzenie stron internetowych w Warszawie", "/pl/tworzenie-stron-internetowych-warszawa"),
          ".",
        ),

        h2("Naprawa laptopów i tabletów na stronie serwisu telefonów"),
        p("Naprawa laptopów ma w Polsce niemal tyle samo wyszukiwań co serwis GSM, a zlecenie jest droższe. Wiele punktów robi to od lat i nie ma o tym ani jednej podstrony."),
        p("Dlatego w strukturze od początku są osobne sekcje: telefony, tablety, laptopy, konsole. Każda z własnym cennikiem i czasem naprawy, bo to inni klienci i inne pytania."),

        h2("Kto buduje strony dla serwisów GSM i o co go zapytać"),
        p("Najczęściej robi to ogólne studio, które startuje z szablonu i galerii zdjęć. Wygląda porządnie, a cztery odpowiedzi leżą na trzeciej podstronie."),
        p("Trzy pytania rozstrzygają sprawę. Jak klient zobaczy cenę swojego modelu i w ilu kliknięciach. Gdzie pojawią się godziny i czas naprawy. Jak strona wygląda na telefonie z pękniętym ekranem, jedną ręką, w słońcu."),
        p("Jeśli odpowiedź dotyczy systemu projektowego, kupujecie broszurę. W branży, w której decyzja trwa kilkadziesiąt sekund, broszura przegrywa."),

        h3("Podstrony modeli, które przydadzą się przy pozycjonowaniu strony serwisu"),
        p("Strona zbudowana jako pięć podstron nie ma gdzie trzymać czterdziestu podstron modeli, które przynoszą ruch później, i trafia do przebudowy przy pierwszej pracy nad widocznością."),
        p(
          "Dlatego struktura wchodzi od początku, nawet jeśli pierwsza wersja ma dziesięć modeli. Jak działa strona wyszukiwania, opisuje ",
          link("pozycjonowanie strony serwisu GSM", "/pl/pozycjonowanie-strony-serwisu-gsm"),
          ".",
        ),

        h2("Wymagania techniczne strony serwisu GSM: pęknięty ekran, jeden kciuk, słaby zasięg"),
        p("Tę stronę otwiera się na najgorszym urządzeniu świata: na tym, które już jest zepsute, na ulicy, na danych mobilnych, przez człowieka zirytowanego i w pośpiechu."),
        p("To wyznacza wszystko. Poniżej dwóch sekund do pierwszego widoku. Cennik jednym kliknięciem. Numer jako przycisk, który dzwoni. WhatsApp jako przycisk z wpisanym modelem."),
        p("I jedna rzecz, której prawie nikt nie sprawdza: strona ma pozostać czytelna przy do połowy rozbitym ekranie, czyli duża czcionka, mocny kontrast i żadnej ważnej informacji wewnątrz obrazka."),

        h2("Strona serwisu GSM a wyszukiwanie AI: ChatGPT, Perplexity, Gemini i AI Overviews"),
        p("„Ile kosztuje wymiana ekranu w tym modelu” i „czy warto naprawiać telefon w tym wieku” ludzie pytają asystentów, zanim wybiorą jakikolwiek punkt."),
        p("Asystent odpowiada z czytelnego tekstu i wymienia punkty, których strony mają liczby: cenę według modelu, czas naprawy, rodzaj części, gwarancję."),
        p("Strona zrobiona ze zdjęć nie ma czego zacytować. Strona zbudowana jako cennik składa się wyłącznie z faktów do zacytowania, i dlatego ta praca płaci dwa razy."),

        h3("GEO, AEO i dane strukturalne na stronie serwisu GSM"),
        p("GEO i AEO to ta sama praca z dwóch stron: pojawić się w wygenerowanej odpowiedzi, a nie tylko na liście linków. Za tymi skrótami stoją zwykłe rzeczy — dane strukturalne, czytelny tekst i zgodne dane firmy."),
        p(
          "Na nowej stronie nie kosztuje to osobno, robi się przy budowie. Na istniejącej to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla serwisu GSM"),
        p("Pełna strona od 8500 zł: cennik według modelu, dostępność części i czas naprawy, dojście do lady, podstrony napraw, szybkość i dane strukturalne. Landing page pod jedną markę, naprawę albo galerię to 3000–6000 zł."),
        p("Audyt strony, którą już macie, kosztuje 1000 zł i odpowiada na jedno pytanie: trzy poprawki czy przebudowa."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Strona dla waszego punktu naprawy",
      subtitle: "Przyślijcie, co macie teraz, a odpowiem w jeden dzień roboczy: co zbudowałbym i za ile.",
      contextLabel: "Wasz punkt albo strona",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i odbierz wycenę",
      note: "Albo napiszcie na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Brak strony", "Starą stronę", "Jedną podstronę", "Tylko wizytówkę Google"] },
        { _key: k("z"), question: "Czy ceny są na stronie?", options: ["Pełny cennik modeli", "Kilka przykładów", "Nie ma", "Tylko „od”"] },
        { _key: k("z"), question: "Gdzie jest wasza lada?", options: ["Przy ulicy", "Galeria handlowa", "Biurowiec", "Kilka punktów"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strony dla serwisów GSM: częste pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla serwisu GSM?", "Od 8500 zł za pełną stronę z cennikiem według modelu, dostępnością części, czasem naprawy, dojściem do lady i podstronami napraw. Landing page 3000–6000 zł, audyt istniejącej strony 1000 zł."],
          ["Ile trwa budowa takiej strony?", "Trzy do pięciu tygodni. Najdłużej schodzi cennik: wyciągnięcie z punktu czterdziestu prawdziwych liczb zajmuje więcej czasu niż zbudowanie podstron, które je pokazują."],
          ["Kto buduje strony dla serwisów GSM?", "Najczęściej ogólne studia pracujące na szablonach, dlatego te strony wyglądają podobnie i słabo sprzedają. Tu liczy się praca mało efektowna: tabela cen według modelu, dostępność części, czas naprawy i dojście do lady."],
          ["Czy musimy podawać ceny według modelu?", "To jedyna rzecz, która sprawia, że ta strona działa. Konkurent z sąsiedniej witryny i tak zna wasze ceny; nie zna ich człowiek stojący na ulicy i wybierający drzwi."],
          ["Mamy tylko wizytówkę Google. Czy to wystarczy?", "Wizytówka daje widoczność, ale nie uniesie czterdziestu cen modeli, czasu naprawy i dojścia na wasze piętro. Wizytówka doprowadza do decyzji, a decyzja zapada na stronie."],
          ["Czy strona pomoże w Warszawie, gdzie punktów jest najwięcej?", "Właśnie w Warszawie najbardziej, bo klient dopisuje dzielnicę albo galerię. Osobna podstrona dzielnicy z dojściem, godzinami i cennikiem wygrywa z adresem w stopce."],
          ["Co jeśli magazyn zmienia się codziennie?", "Wtedy publikujcie dwadzieścia modeli, które macie zawsze, i zdanie, że resztę zamawiacie na następny dzień. Mniej liczy się precyzja, więcej to, że klient nie przyjdzie na darmo."],
          ["Czy można pracować na stronie, którą już mamy?", "Często tak i wychodzi taniej. Audyt mówi wprost, który to przypadek — trzy poprawki czy przebudowa — i nie mam interesu w sprzedawaniu przebudowy, która nie jest potrzebna."],
          ["Czy strona będzie widoczna w wyszukiwarce?", "Jest budowana tak, żeby mogła: struktura modeli i napraw, czysty tekst, dane strukturalne, szybkość. Samo wypozycjonowanie to praca ciągła, opisana na stronie o pozycjonowaniu serwisu GSM."],
          ["Czy punkt będzie widoczny w ChatGPT i innych asystentach?", "Coraz częściej, a ta branża ma tu dobrą pozycję: asystenci wymieniają punkty, których strony podają liczby do zacytowania — cenę modelu, czas naprawy, rodzaj części, gwarancję. Strona ze zdjęć nie ma czego zacytować."],
          ["Kto pisze treści?", "Ja piszę wersję, wy poprawiacie. Sprzedaje to, co wie tylko serwis: które zamienniki warto montować, ile naprawdę kosztuje zalanie, których napraw nie przyjmujecie i dlaczego."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę dla serwisu GSM: co mi przysłać"),
        p("Przyślijcie stronę, którą macie teraz, albo napiszcie, że jej nie ma. Dodajcie modele, do których trzymacie części, ceny częstych napraw i to, gdzie dokładnie jest wasza lada."),
        p("Odpowiadam w jeden dzień roboczy: co zbudowałbym, w jakiej kolejności i za jaką cenę."),
      ],
    },
  ],
};
