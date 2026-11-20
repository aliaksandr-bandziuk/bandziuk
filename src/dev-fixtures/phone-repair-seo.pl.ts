// Landing page fixture: SEO for phone/GSM repair shops (PL), group «phone-repair-seo».
//
// Measured (research/dataforseo/repair-niches.md, 19.11.2026): owner side is
// zero. Customer side 13 600, and its shape differs from English:
// «serwis gsm» 6 600, «naprawa laptopów» 4 400, «naprawa telefonów» 1 300,
// «wymiana szybki w telefonie» 1 300. Two consequences for this version:
//   · the Pole searches the SHOP TYPE («serwis gsm»), not the model + fault,
//     so the page leads with the shop and keeps model pages underneath;
//   · laptops are almost as big as phones, so they get a full section rather
//     than a mention.
// Geography per the owner's rule: Warszawa and the rest of Poland as their own
// section, linking to the city pages instead of competing with them.
import { p, h2, h3, li, link, k } from "./pt";

export const phoneRepairSeoPl = {
  lang: "pl",
  group: "phone-repair-seo",
  slug: "pozycjonowanie-strony-serwisu-gsm",
  title: "SEO i pozycjonowanie strony serwisu GSM",
  heading:
    "Pozycjonowanie strony serwisu GSM: żeby człowiek z pękniętą szybką trafił do was, a nie do punktu obok",
  excerpt:
    "Zajmuję się pozycjonowaniem stron serwisów GSM i punktów naprawy elektroniki. Wasz klient stoi na ulicy ze zbitym telefonem i wybiera między trzema punktami: sprawdza, czy macie szybkę do jego modelu, ile to potrwa i ile kosztuje. Wpisuję te odpowiedzi na stronę, model po modelu. Audyt 1000 zł, stała praca 3500 zł miesięcznie.",
  seo: {
    metaTitle: "SEO serwisu GSM: modele, ceny, mapa i laptopy",
    metaDescription:
      "Pozycjonowanie strony serwisu GSM w Warszawie i w Polsce: podstrony modeli i napraw, ceny i terminy wprost, wizytówka Google i widoczność w ChatGPT.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podstrona pod model i naprawę", "Wizytówka Google i opinie", "Audyt od 1000 zł"],
  heroPhonePoints: ["Wymiana szybki, model po modelu", "Cena i czas wprost", "Naprawa laptopów osobno", "ChatGPT podaje punkt"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony serwisu GSM: strona, podstrony modeli, wizytówka Google, widoczność w AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony modeli i napraw, cennik, dane strukturalne, formularz", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony serwisu GSM", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Zakres pracy",
      title: "Pozycjonowanie strony serwisu GSM: z czego składa się praca",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Podstrona pod model i naprawę", text: "Szybka, bateria, gniazdo ładowania — po modelu" },
        { _key: k("o"), iconName: "clock", title: "Cena i termin wprost", text: "To sprawdza, zanim do was pójdzie" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka zgodna ze stroną", text: "Godziny, zdjęcia, opinie, te same ceny" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i Perplexity", text: "Tam pada pytanie, czy opłaca się naprawiać" },
        { _key: k("o"), iconName: "layers", title: "Naprawa laptopów osobno", text: "4 400 wyszukiwań miesięcznie i wyższy rachunek" },
        { _key: k("o"), iconName: "target", title: "Tanie usługi jako drzwi", text: "Szybka i bateria prowadzą do droższych napraw" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: lokalne warsztaty, w których klient wybiera w dziesięć minut",
      subtitle:
        "Co łączy te projekty z serwisem GSM: klient decyduje szybko i blisko, rozstrzyga cena i czas oczekiwania, a wzrost wziął się ze struktury i treści, nie z kupionych linków. Warsztat renowacji felg w Warszawie. Serwis samochodowy z tym samym schematem wejść z ulicy. Dostawca internetu rozliczany adres po adresie. Studio urody sprzedające jedną usługę online. Firma skanowania 3D, w której ruch z wyszukiwarki wzrósł dwudziestodziewięciokrotnie.",
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
        h2("Pozycjonowanie serwisu GSM zaczyna się od trzech pytań zadawanych na chodniku"),
        p("Zajmuję się pozycjonowaniem stron serwisów GSM. Praca zaczyna się od jednej listy, którą muszę od was dostać: do jakich modeli trzymacie części. Cała strona powstaje z niej."),
        p("Wasz klient niczego nie researchuje. Stoi na ulicy ze zbitą szybką, ma dwadzieścia minut i trzy punkty w zasięgu spaceru."),
        p("Za każdym razem pyta o to samo. Macie szybkę do mojego modelu, teraz? Ile to potrwa? Ile kosztuje?"),
        p("Strona, która odpowiada na wszystkie trzy w dziesięć sekund, zabiera tego klienta. Strona pisząca „profesjonalny serwis urządzeń mobilnych, indywidualne podejście, uczciwe ceny” oddaje go konkurencji, a właściciel nigdy się nie dowie dlaczego."),
        p("Cała robota polega więc na zamianie strony w odpowiedź na te trzy pytania:"),
        li("podstrona pod model i naprawę, bo tak wygląda wyszukiwanie;"),
        li("cena i czas zapisane liczbą, a nie obietnicą oddzwonienia;"),
        li("co macie dziś na stanie, jeśli stan da się w ogóle pokazać;"),
        li("wizytówka mówiąca dokładnie to samo co strona;"),
        li("i tanie naprawy ustawione tak, żeby prowadziły do drogich."),

        h2("„Serwis GSM” czy „naprawa telefonów”: od czego zacząć w polskim wyszukiwaniu"),
        p("Tu polski rynek różni się od angielskiego i to zmienia układ strony."),
        p("Po angielsku ludzie wpisują model i usterkę. Po polsku największa fraza to „serwis gsm” — 6 600 wyszukiwań miesięcznie, czyli szuka się samego punktu. „Naprawa telefonów” to 1 300, a „wymiana szybki w telefonie” kolejne 1 300."),
        p("Dlatego strona główna musi jasno mówić, że jesteście serwisem GSM, a podstrony modeli i napraw stoją pod nią i zbierają dokładne zapytania: konkretny iPhone i szybka, konkretny Samsung i bateria, gniazdo, które przestało ładować."),
        p("Jedna podstrona na model i naprawę, z ceną, czasem, gwarancją i informacją, czy część jest oryginalna, zamiennik czy regenerowana — bo o tę różnicę i tak będzie pytał przy ladzie."),

        h2("Naprawa laptopów: w Polsce prawie tak duża jak telefony, a prawie nikt o niej nie pisze"),
        p("„Naprawa laptopów” to 4 400 wyszukiwań miesięcznie, czyli ponad trzy razy więcej niż „naprawa telefonów”."),
        p("Większość serwisów GSM naprawia laptopy od lat i nie ma o tym na stronie ani jednej podstrony. To najszybsza możliwa wygrana w tej branży: wyższy rachunek, mniej konkurencji i klient, który i tak musi gdzieś pojechać."),
        p("Wystarczą dwie porządne podstrony: naprawa laptopów z listą marek, typowymi usterkami i czasem, oraz wymiana matrycy albo baterii z ceną. Tablety dopisujemy trzecią."),

        h2("Kto pozycjonuje strony serwisów GSM i co konkretnie zmienia"),
        p("Prawie nikt, i dlatego ta nisza stoi otworem."),
        p("Agencje sprzedają takim punktom podstronę miasta, wizytówkę i raport miesięczny. Trzy pytania z chodnika zostają bez odpowiedzi, a punkt dopłaca do reklamy, która prowadzi na stronę nieprzekonującą nikogo."),
        p("Co zmieniam, po kolei: podstrony modeli i napraw, opublikowany cennik, czas realizacji przy każdej naprawie, wizytówkę i zdjęcia, formularz pytający o model i usterkę oraz podstrony laptopów i tabletów, których prawie nikt nie robi."),

        h3("Zlecenie, słowa klienta i dowód, który musi być na podstronie"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Zlecenie", "Czego szuka klient", "Co musi udowodnić podstrona"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Wymiana szybki i wyświetlacza", "„wymiana szybki w telefonie”, model + „szybka”", "Cena po modelu, czas, rodzaj części, gwarancja"] },
        { _type: "tableRow", _key: k("r"), cells: ["Wymiana baterii", "model + „wymiana baterii”", "Cena, czas, co dzieje się ze starą baterią"] },
        { _type: "tableRow", _key: k("r"), cells: ["Gniazdo ładowania i zalanie", "„telefon się nie ładuje”, „zalany telefon”", "Najpierw diagnoza, uczciwe szanse na uratowanie"] },
        { _type: "tableRow", _key: k("r"), cells: ["Naprawa płyty głównej", "„naprawa płyty głównej”, „odzysk danych telefon”", "Co robicie u siebie, a co wysyłacie dalej"] },
        { _type: "tableRow", _key: k("r"), cells: ["Laptopy i tablety", "„naprawa laptopów”, „wymiana matrycy”", "Marki, części, termin, sprzęt zastępczy"] },
        { _type: "tableRow", _key: k("r"), cells: ["Szkło hartowane i drobiazgi", "„naklejanie szkła hartowanego”", "Cena, że zajmuje minuty, że można wejść z ulicy"] },
        { _type: "tableRow", _key: k("r"), cells: ["Skup uszkodzonych telefonów", "„skup zepsutych telefonów”", "Ile płacicie i co znaczy stan urządzenia"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Pozycjonowanie serwisu GSM w Warszawie i w mniejszych miastach"),
        p("Warszawa to osobna sytuacja: na jednej ulicy potrafi stać kilka punktów, a klient prawie zawsze dopisuje dzielnicę albo „od ręki”. Podstrona miejska ma więc nieść godziny, czas naprawy i to, czy można wejść bez zapisu — nie ogólne zdania o doświadczeniu."),
        p("W mniejszych miastach działa coś odwrotnego: wystarczy jedna porządna podstrona miasta i uczciwie wypisane dzielnice albo okoliczne miejscowości, bo konkurencja ma tam najczęściej samą wizytówkę bez strony."),
        p(
          "Samą pracę nad miastem, bez branży, opisuję osobno: ",
          link("pozycjonowanie stron w Warszawie", "/pl/oferty/pozycjonowanie-stron-warszawa"),
          " i ",
          link("tworzenie stron internetowych w Warszawie", "/pl/tworzenie-stron-internetowych-warszawa"),
          ".",
        ),

        h2("Cennik na stronie i dlaczego strach przed nim jest nie na miejscu"),
        p("Większość punktów nie podaje cen, z pozornie rozsądnego powodu: konkurencja zejdzie niżej."),
        p("Ona i tak zna wasze ceny. Wystarczy, że ktoś zadzwoni albo wejdzie. Milczenie odstrasza wyłącznie klienta, który decyduje w tej chwili."),
        p("Cena przy modelu i naprawie, ze zdaniem o tym, co ją zmienia — oryginał czy zamiennik, wygięta ramka, zalanie odkryte po otwarciu — przyprowadza ludzi gotowych zapłacić i kończy dwadzieścia telefonów dziennie zaczynających się od „ile za szybkę”."),

        h3("Tanie naprawy jako drzwi do drogich"),
        p("Naklejenie szkła czy wymiana baterii nie zarabiają prawie nic. W wyszukiwarce są warte więcej, niż wyglądają, bo wprowadzają do punktu człowieka, który za pół roku przyjdzie po szybkę."),
        p("Sztuka polega na tym, żeby ich wpuścić i się w nich nie utopić: wypiszcie drobne usługi z ceną i adnotacją, że robi się je od ręki, i trzymajcie je z dala od podstron, na których decyduje się droga naprawa."),

        h2("Wizytówka Google decyduje w tej branży częściej niż strona"),
        p("Duża część klientów nigdy nie otworzy waszej strony. Otworzy mapę, obejrzy zdjęcia, przeczyta trzy opinie i pójdzie."),
        p("Dlatego wizytówka i strona muszą mówić to samo: te same godziny, te same ceny, te same usługi, prawdziwe zdjęcia lady i stanowiska, opinie odpisane w języku, w którym je napisano."),
        p("Zadaniem strony jest być tym, do czego wizytówka prowadzi — i nieść podstrony modeli, których wizytówka pomieścić nie może."),

        h2("Widoczność w AI: ChatGPT, Perplexity, Gemini i AI Overviews"),
        p("„Czy opłaca się naprawiać telefon ze zbitą szybką, czy kupić nowy” i „ile kosztuje wymiana wyświetlacza w iPhonie” to pytania do asystenta. Padają, zanim ktokolwiek wybierze punkt."),
        p("Asystent odpowiada z czytelnego tekstu i podaje serwisy, które na stronie zobowiązały się do liczb: cena po modelu, czas, rodzaj części, gwarancja."),
        p("O tym, czy was wymieni, decydują trzy rzeczy: tekst zamiast galerii zdjęć, liczby warte zacytowania, te same dane punktu wszędzie."),

        h3("GEO, AEO i LLM SEO w praktyce"),
        p("GEO i AEO to ta sama praca z dwóch stron: być wymienionym w wygenerowanej odpowiedzi, nie tylko na liście linków. LLM SEO to to samo w modelach językowych."),
        p("To pięć, sześć poprawek i prawie w całości pokrywają się z tym, co w ogóle pozwala stronie się wybić."),
        p(
          "Na istniejącej stronie to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ". Gdy asystenci opisują punkt błędnie, to ",
          link("naprawa dezinformacji w AI", "/pl/oferty/naprawa-dezinformacji-ai"),
          ".",
        ),

        h2("Techniczne SEO: szybkość, zdjęcia i formularz pytający o model"),
        p("Te strony są zbudowane ze zdjęć naprawionych urządzeń i ładują się wolno na jedynym sprzęcie, który się liczy — uszkodzonym telefonie na transmisji komórkowej."),
        p("Zdjęcia zostawcie, podawajcie je małe, a strona niech otwiera się poniżej dwóch sekund."),
        p("Formularz ma pytać o model, usterkę i to, czy telefon się jeszcze włącza. Te trzy odpowiedzi pozwalają powiedzieć przez telefon, czy część jest na stanie — a tylko to klienta interesowało."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Audyt SEO strony serwisu GSM",
      subtitle: "Przyślijcie adres strony, odpowiadam w jeden dzień roboczy: co ją blokuje i co zrobiłbym najpierw.",
      contextLabel: "Punkt lub adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i zamów audyt",
      note: "Albo napiszcie na WhatsApp — odpowiadam tak samo szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co naprawiacie najczęściej?", options: ["Szybki i wyświetlacze", "Baterie i gniazda", "Laptopy i tablety", "Płyty główne"] },
        { _key: k("z"), question: "Czy ceny są na stronie?", options: ["Pełny cennik", "Kilka przykładów", "Nie, wyceniamy przez telefon", "Nie wiem"] },
        { _key: k("z"), question: "Skąd teraz przychodzą klienci?", options: ["Z ulicy", "Z wizytówki Google", "Z portali", "Z polecenia"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony serwisu GSM: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony serwisu GSM?", "Audyt 1000 zł, prace jednorazowe 1000–3000 zł, stała praca 3500 zł miesięcznie. Kwota zależy od tego, ile modeli i napraw dostaje własną podstronę i czy stronę da się w ogóle edytować."],
          ["Kto pozycjonuje strony serwisów GSM?", "Szczerze: bardzo niewiele osób. Agencje traktują punkt naprawy jak każdą lokalną firmę — podstrona miasta, wizytówka, raport. To, co rusza tę branżę, czyli podstrony modeli z cenami i czasem naprawy, robi się rzadko i właśnie dlatego wciąż działa."],
          ["Mamy podawać ceny?", "Tak. Konkurencja i tak je zna; milczenie odstrasza tylko klienta, który decyduje w tej chwili. Cena przy modelu ze zdaniem o tym, co ją zmienia, kończy też większość telefonów „ile za szybkę”."],
          ["Czy naprawdę potrzeba podstrony na każdy model?", "Na modele, do których trzymacie części, tak. Właśnie tu mały punkt wygrywa z siecią: sieć ma jedną podstronę o wymianie szybki, wy macie czterdzieści o telefonach, które ludzie realnie przynoszą."],
          ["Klienci przychodzą z wizytówki, nie ze strony. Po co nam SEO?", "Wizytówka to połowa roboty, a strona druga połowa: wizytówka jest tam, gdzie patrzy, a strona jest tym, co czyni wizytówkę wiarygodną i co niesie podstrony modeli. Muszą mówić to samo — te same godziny, ceny i usługi."],
          ["Czy warto robić podstrony o laptopach?", "W Polsce to najszybsza wygrana: „naprawa laptopów” ma 4 400 wyszukiwań miesięcznie, ponad trzy razy więcej niż „naprawa telefonów”, a prawie żaden serwis GSM o tym na stronie nie pisze, choć laptopy naprawia od lat."],
          ["Czy klient znajdzie nas przez ChatGPT?", "Coraz częściej. „Czy opłaca się naprawiać ten telefon” pada tam bez przerwy, zanim ktokolwiek wybierze punkt. Asystenci wymieniają serwisy, których strony niosą realne liczby, a pomijają galerie zdjęć."],
          ["Kiedy to zamieni się w klientów?", "Poprawki wizytówki widać w tygodniach. Podstrony modeli zwykle po dwóch–czterech miesiącach, dłużej w dużym mieście, gdzie na jednej ulicy stoi dziesięć punktów."],
          ["Kto pisze podstrony?", "Ja piszę pierwszą wersję, wy poprawiacie. Wiarygodne jest to, co wie tylko serwis: które zamienniki warto montować, ile naprawdę kosztuje uratowanie zalanego telefonu, jakich napraw nie przyjmujecie i dlaczego."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów audyt SEO strony serwisu GSM: co mi przysłać"),
        p("Przyślijcie adres strony. Napiszcie, do jakich modeli trzymacie części, czy ceny są opublikowane i skąd dziś przychodzą klienci."),
        p("Odpowiadam w jeden dzień roboczy: co blokuje stronę, jakich podstron brakuje i co zrobiłbym najpierw."),
      ],
    },
  ],
};
