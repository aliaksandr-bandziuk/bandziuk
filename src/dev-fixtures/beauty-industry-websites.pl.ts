// Fixture landinga: tworzenie stron internetowych dla branży beauty (PL),
// grupa «beauty-industry-websites». Przepisanie istniejącej strony na starym
// szablonie pod tym samym adresem
// /pl/tworzenie-stron-internetowych-dla-branzy-beauty — replace-landing.cjs.
// To RODZIC dla /strona-salonu-kosmetycznego.
//
// WAŻNE — ta wersja jest celowo PEŁNIEJSZA niż angielska i rosyjska.
// Search Console za trzy miesiące (sprawdzone 02.11.2026) pokazuje odwrotny
// układ niż w pozostałych językach:
//
//   EN hub  2 wyświetlenia   ·  EN dziecko  30
//   RU hub  0                ·  RU dziecko  268
//   PL hub  140              ·  PL dziecko  1
//
// Po polsku to WŁAŚNIE hub ma całą widoczność klastra, i to na zapytaniach
// kategorii, a nie na zapytaniach dziecka: «profesjonalne strony dla branży
// beauty» 38, «strony internetowe dla branży beauty» 16, «tworzenie stron
// internetowych dla gabinetow i salonow kosmetycznych» 5, «tworzenie stron
// internetowych dla producenta kosmetykow» 5, «strona dla beauty» 3. Średnia
// pozycja 24.8, czyli trzecia strona wyników i zero kliknięć.
//
// Wnioski, które z tego wynikają i są tu zastosowane:
//   * hub i dziecko po polsku NIE konkurują — hub trzyma «branżę beauty»,
//     dziecko «salon kosmetyczny». Rozdzielenie już istnieje samo z siebie;
//   * strony z pozycji 24.8 nie podnosi się przez jej skrócenie, więc ta
//     wersja NIE jest cienkim rozdzielaczem jak EN i RU — dostaje pełną treść
//     kategorii;
//   * fraza kluczowa zostaje w H1 dosłownie, bo to ona przynosi te 140
//     wyświetleń;
//   * «producent kosmetyków» to inny biznes niż gabinet (B2B, sprzedaż marki),
//     i jest o tym jedno zdanie — bez wymyślania pod 5 wyświetleń osobnej
//     podstrony.
//
// Adresy do rozdzielania to podstrony, które po polsku faktycznie istnieją i są
// już na nowym szablonie — sprawdzone na żywej stronie 02.11.2026. PL ma optykę
// zamiast med spa, więc każdy język odsyła do swojego realnego zestawu.
//
// Usunięte: zahardkodowane bloki starego szablonu, blok opinii (decyzja
// właściciela z 25.10.2026), tabela z emoji.
//
// JDG jest zwolniona z VAT, więc «faktura», nigdy «faktura VAT».
import { p, h2, h3, li, link, k } from "./pt";

export const beautyIndustryWebsitesPl = {
  lang: "pl",
  group: "beauty-industry-websites",
  slug: "tworzenie-stron-internetowych-dla-branzy-beauty",
  title: "Tworzenie stron internetowych dla branży beauty",
  heading: "Tworzenie stron internetowych dla branży beauty: który format strony pasuje do Waszego biznesu",
  excerpt:
    "Buduję strony internetowe dla branży beauty — salonów kosmetycznych, fryzjerskich, spa, gabinetów kosmetologii, studiów tatuażu i salonów optycznych. Formaty różnią się mocniej, niż wygląda: to, co rozstrzyga rezerwację u fryzjera, nie rozstrzyga jej w gabinecie kosmetologii. Ta podstrona mówi, który format jest Wasz, co mają wspólnego wszystkie i ile to kosztuje.",
  seo: {
    metaTitle: "Strony internetowe dla branży beauty — formaty i ceny",
    metaDescription:
      "Tworzenie stron internetowych dla branży beauty: salon kosmetyczny, fryzjer, spa, kosmetologia, tatuaż, optyk. Czego wymaga każdy format i ile kosztuje.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Sześć formatów, sześć rozwiązań", "Strony od 8500 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Zarezerwuj zabieg", "Cennik", "Nasz zespół", "Otwarte w sobotę"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona beauty na WordPressie, z projektem graficznym w cenie", price: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Rozbudowana strona: podstrony zabiegów, ceny, zespół, rezerwacja online", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Formaty",
      title: "Który format strony dla branży beauty jest Wasz",
      items: [
        { _key: k("o"), iconName: "sparkles", title: "Salon kosmetyczny wielousługowy", text: "Wiele zabiegów, kilka osób w zespole, jeden system rezerwacji" },
        { _key: k("o"), iconName: "scissors", title: "Salon fryzjerski lub barbershop", text: "Rozstrzygają nazwisko i portfolio koloryzacji" },
        { _key: k("o"), iconName: "droplet", title: "Spa", text: "Pakiety, vouchery i rezerwacja dla dwóch osób" },
        { _key: k("o"), iconName: "shield-check", title: "Gabinet kosmetologii", text: "Kwalifikacje, przeciwwskazania, bez obiecywania efektu" },
        { _key: k("o"), iconName: "pen-tool", title: "Studio tatuażu", text: "Portfolio po stylach i artystach plus zadatek" },
        { _key: k("o"), iconName: "eye", title: "Salon optyczny", text: "Recepta, marki i zapis na badanie wzroku" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Która podstrona pasuje do Waszego biznesu beauty"),
        p(
          "Salon wielousługowy — włosy, paznokcie, brwi, pielęgnacja twarzy pod jednym dachem — to ",
          link("strona salonu kosmetycznego", "/pl/tworzenie-stron-internetowych-dla-branzy-beauty/strona-salonu-kosmetycznego"),
          ". Salon fryzjerski i barbershop mają własny popyt i własne rozwiązanie: ",
          link("strona internetowa dla salonu fryzjerskiego", "/pl/strona-internetowa-dla-salonu-fryzjerskiego"),
          ". Spa to ",
          link("strona internetowa dla spa", "/pl/strona-internetowa-dla-spa"),
          ", studio tatuażu — ",
          link("strona internetowa dla studia tatuażu", "/pl/strona-internetowa-dla-studia-tatuazu"),
          ", a optyk — ",
          link("strona internetowa dla salonu optycznego", "/pl/strona-internetowa-dla-salonu-optycznego"),
          ".",
        ),
        p("To osobne podstrony dlatego, że to osobne zadania, a nie dlatego, że tak wygląda solidniej. Pytania, które klientka zadaje przed rezerwacją, w każdym formacie są inne, a strona odpowiadająca na nie te traci rezerwację, wyglądając przy tym porządnie."),
        p("Jeśli produkujecie kosmetyki, a nie wykonujecie zabiegi, to jeszcze inna praca: marka sprzedaje przez sklep i treści produktowe, a nie przez grafik i rezerwacje. Napiszcie, co robicie, a powiem, od czego zacząć."),

        h2("Czego wymaga każda strona w branży beauty, niezależnie od formatu"),
        li("podstrona pod każdy zabieg z ceną albo „od” i czasem trwania;"),
        li("rezerwacja trafiająca do systemu, którego pilnuje recepcja, a nie do drugiego;"),
        li("ludzie: kto wykonuje pracę, ze zdjęciem i bezpośrednią rezerwacją u niej;"),
        li("własne zdjęcia gabinetów i prac, a nie zdjęcia stockowe;"),
        li("szybkość na telefonie, bo właśnie tam te strony się otwiera;"),
        li("ceny tekstem, a nie sfotografowanym cennikiem — inaczej wyszukiwarka i asystenci AI ich nie przeczytają."),
        p("Ta lista jest krótka i to w niej leży większość wartości. Różnice poniżej są tym, po co istnieją podstrony formatów."),

        h2("Czym formaty naprawdę się różnią"),
        h3("Salon kosmetyczny wielousługowy"),
        p("Najtrudniejsza jest lista zabiegów: dwadzieścia albo trzydzieści pozycji, kilka osób w zespole i klientka, która chce jednej z nich. Struktura musi pozwolić wejść na „laminację rzęs” i zarezerwować, bez przechodzenia przez ogólną podstronę usług."),
        h3("Salon fryzjerski i barbershop"),
        p("Klientka rezerwuje u osoby i na efekt, który już widziała. Portfolio musi być rozłożone po tym, co zostało zrobione — koloryzacja na ciemnych włosach, zakrycie siwizny, konkretny fade — i przypisane do osoby, która to wykonała, a nie leżeć jedną nierozróżnialną galerią."),
        h3("Spa"),
        p("Tu jednostką sprzedaży jest częściej pakiet albo voucher niż pojedynczy zabieg, a termin bywa rezerwowany dla dwóch osób. Jedno i drugie zmienia wymagania wobec rezerwacji, a vouchery oznaczają, że strona potrzebuje sposobu na ich sprzedaż i realizację."),
        h3("Gabinet kosmetologii"),
        p("To format z regułami. Na podstronach musi być napisane, kto wykonuje zabieg i z jakimi kwalifikacjami, jakie są przeciwwskazania i jak wygląda rekonwalescencja — i nie może być obietnicy efektu. Reklama usług medycznych jest na części rynków ograniczona prawem, a podstrona napisana jak podstrona salonu staje się ryzykiem, nie aktywem."),
        h3("Studio tatuażu"),
        p("Portfolio po stylach i po artystach, bo nikt nie rezerwuje „tatuażu” — rezerwuje styl u konkretnej osoby. I zadatek, bo nieobecność kosztuje całą sesję, więc jego przyjmowanie staje się częścią strony, a nie szczegółem."),
        h3("Salon optyczny"),
        p("Tu droga zaczyna się nie od zabiegu, a od recepty i badania wzroku, więc strona ma prowadzić do zapisu na badanie, a nie od razu do katalogu opraw. Do tego marki: po nich się szuka, a podstrona marki często przyprowadza kogoś, kto salonu jeszcze nie wybrał."),

        h2("Co klientka sprawdza, zanim w ogóle otworzy Waszą stronę"),
        p("W tej branży wyniki lokalne i mapa stoją zwykle wyżej niż zwykłe linki, a część rezerwacji powstaje bez otwierania strony. Dlatego profil Google traktuję jako część pracy, a nie jako dodatek: pełna lista zabiegów, aktualne godziny włącznie z wieczornymi, prawdziwe zdjęcia i link do rezerwacji prowadzący do zabiegu."),
        p("Potem strona i profil są doprowadzane do zgodności. Klientka, która zobaczy dwie różne ceny albo dwie różne godziny zamknięcia, przestaje wierzyć obu."),

        h2("Ile kosztuje strona dla branży beauty i od czego zależy cena"),
        p(
          "Strona na WordPressie, z projektem graficznym w cenie — 3000 zł. Rozbudowana strona z podstronami zabiegów, cenami, zespołem i rezerwacją online — od 8500 zł. O cenie decydują: liczba podstron zabiegów, czy rezerwacja ma się integrować z istniejącym systemem, ile osób z zespołu dostaje własną podstronę i ile wersji językowych. Projekt graficzny jest w cenie, nigdy jako osobna pozycja. Pełny cennik jest na ",
          link("stronie z cennikiem", "/pl/cennik"),
          ".",
        ),

        h2("Ile trwa budowa strony dla branży beauty"),
        p("Rozbudowana strona to trzy do sześciu tygodni. Wydłuża ją materiał, a nie kod: zdjęcia, lista zabiegów z cenami i czasem trwania oraz odpowiedź, kto po Waszej stronie zatwierdza teksty. Jeśli czegoś nie ma, pomagam to zebrać."),

        h2("Co zostaje u Was po uruchomieniu"),
        li("kod, domena, treści i dostępy do panelu są Wasze od pierwszego dnia;"),
        li("ceny i listę zabiegów zmieniacie sami, bez programisty;"),
        li("strona nie stoi na moim hostingu, eksporty nie są zablokowane;"),
        li("projekt można w każdej chwili przekazać innemu programiście;"),
        li("praca idzie na umowie z ustalonym zakresem, terminem i etapami."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: lokalne firmy usługowe, dla których budowałem strony",
      subtitle:
        "Co te projekty mają wspólnego z branżą beauty: klient decyduje na telefonie, w kilka minut, po cenie i odległości. Landing z zabezpieczonym dostępem do wideo, premium strona o remontach i inwestycjach, SEO i UX dla firmy auto, przebudowa strony na WordPressie i landing przechowalni opon z edytowalnym SEO.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony dla firmy z branży beauty",
      subtitle:
        "Odpowiadam w ciągu jednego dnia roboczego: który format pasuje, co bym zbudował i za ile.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i otrzymaj wycenę",
      note: "Albo napiszcie na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co prowadzicie?", options: ["Salon kosmetyczny", "Fryzjer lub barbershop", "Spa", "Kosmetologia, tatuaż lub optyk"] },
        { _key: k("z"), question: "Co jest teraz?", options: ["Nie ma strony", "Stara strona", "Tylko Instagram", "Tylko profil Google"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Jak strony beauty są znajdowane przez asystentów AI"),
        p("Klientki coraz częściej pytają ChatGPT, Perplexity albo przeglądy AI w Google, zanim otworzą aplikację do rezerwacji. Asystent odpowiada z tekstu, który potrafi przeczytać — dlatego do wszystkich formatów z tej podstrony stosuje się jedna reguła: zabiegi tekstem z cenami i czasem trwania, dane strukturalne zgodne z widocznym tekstem oraz identyczne nazwa, godziny i nazwy zabiegów na stronie, w profilu Google i w systemie rezerwacji."),
        p(
          "Jak to się robi na już istniejącej stronie, to osobna praca: ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ". A jeśli strona jest w porządku, ale rezerwacje z wyszukiwarki nie przychodzą, to ",
          link("pozycjonowanie strony salonu kosmetycznego", "/pl/seo-salonu-kosmetycznego"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strony internetowe dla branży beauty: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Prowadzimy kilka rzeczy naraz — włosy, paznokcie i pielęgnację twarzy. Która podstrona jest nasza", "Podstrona salonu wielousługowego. Rozstrzyga nie sam zestaw zabiegów, a to, czy jedna klientka rezerwuje kilka z nich: jeśli tak, stronę niosą lista zabiegów i podstrony zespołu."],
          ["Dlaczego to osobne podstrony, a nie jedna", "Bo pytania zadawane przed rezerwacją różnią się formatem. Klient studia tatuażu wybiera styl i artystę, klientka spa kupuje pakiet dla dwóch osób, pacjentka gabinetu kosmetologii sprawdza kwalifikacje i przeciwwskazania. Jedna podstrona odpowiadająca na wszystko nie odpowiada porządnie na nic."],
          ["Ile kosztuje strona dla branży beauty", "Strona na WordPressie 3000 zł, rozbudowana od 8500 zł. O cenie decydują liczba podstron zabiegów, integracja rezerwacji i liczba wersji językowych."],
          ["Czy rezerwacja połączy się z systemem, z którego już korzystamy", "Tak, i tak powinno być. Strona zapisująca do drugiego systemu, którego nikt nie pilnuje, tworzy podwójne rezerwacje, a to kosztuje więcej niż brak rezerwacji online w ogóle."],
          ["Jesteśmy gabinetem kosmetologii. Czy coś się różni", "Tak, i to istotnie. Reklama usług medycznych jest na części rynków ograniczona prawem, więc podstrony podają kwalifikacje, przeciwwskazania i rekonwalescencję zamiast obiecywać efekt. Podstrona gabinetu napisana jak podstrona salonu jest ryzykiem."],
          ["Produkujemy kosmetyki, nie wykonujemy zabiegów", "To inna praca: marka sprzedaje przez sklep i treści produktowe, a nie przez grafik i rezerwacje. Napiszcie, co robicie, a powiem, od czego zacząć i czy to w ogóle moja robota."],
          ["Budujecie na kreatorach stron", "Nie. Katalog zabiegów z rezerwacją i sekcja zespołu to dokładnie miejsce, w którym kreatory się kończą, a zejście z kreatora później kosztuje więcej niż zbudowanie od razu na Next.js albo WordPressie."],
          ["Do kogo należy strona po uruchomieniu", "Do Was: kod, domena, treści i dostępy do panelu. Ceny i listę zabiegów zmieniacie sami bez programisty, bo w tym biznesie zmieniają się często."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę dla firmy z branży beauty: co mi wysłać"),
        p("Wyślijcie, czym się zajmujecie, listę zabiegów z cenami i czasem trwania, zdjęcia gabinetów i prac oraz to, z jakiego systemu rezerwacji korzystacie. Odpowiem, który format pasuje, co bym zbudował i za ile — a jeśli Wasz przypadek jest już dokładnie opisany na jednej z podstron formatów powyżej, odeślę tam, zamiast powtarzać to samo."),
      ],
    },
  ],
};
