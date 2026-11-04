// Fixture landinga: strona salonu kosmetycznego (PL), grupa
// «beauty-salon-website». Przepisanie istniejącej strony na starym szablonie
// pod tym samym adresem
// /pl/tworzenie-stron-internetowych-dla-branzy-beauty/strona-salonu-kosmetycznego
// — przez replace-landing.cjs. Strona jest zagnieżdżona pod hubem beauty,
// zagnieżdżenie zostaje.
//
// Rdzeń: research/pseo/core.csv — «strona internetowa dla salonu
// kosmetycznego» zero. Wersja angielska ma 320, rosyjska 40, więc strona
// powstaje pod ten sam sens bez liczenia na wolumen.
//
// Rozdzielenie: strony salonu fryzjerskiego, spa i studia tatuażu są już na
// nowym szablonie. Ta dotyczy salonu wielousługowego, pozostałe są odsyłane
// linkiem.
//
// Zachowane merytorycznie ze starej strony: podstrony usług z ceną I czasem
// trwania, podstrony osób z zespołu ze zdjęciem i specjalizacją, galeria
// prawdziwych prac, rezerwacja z synchronizacją kalendarza, konfiguracja
// profilu Google, wskazówki dotyczące zdjęć, analityka od pierwszego dnia,
// mobile-first.
//
// Usunięte: zahardkodowane bloki starego szablonu, blok opinii (decyzja
// właściciela z 25.10.2026), tabela z emoji oraz zaślepka «Podsumowanie»,
// zastąpiona 02.11 przez «Co daje salonowi dobra strona internetowa» i tutaj
// zachowana jako pełny nagłówek.
//
// Ceny w PLN wg ustalonego cennika: strona od 8500 zł, WordPress 3000 zł.
// JDG jest zwolniona z VAT, więc «faktura», nigdy «faktura VAT».
import { p, h2, h3, li, link, k } from "./pt";

export const beautySalonWebsitePl = {
  lang: "pl",
  group: "beauty-salon-website",
  slug: "strona-salonu-kosmetycznego",
  title: "Strona salonu kosmetycznego",
  heading: "Tworzenie strony salonu kosmetycznego: strona, która zapisuje klientkę, a nie opowiada o sobie",
  excerpt:
    "Buduję strony salonów kosmetycznych: podstrona pod każdy zabieg z ceną i czasem trwania, rezerwacja podłączona do systemu, w którym już pracuje recepcja, podstrony osób z zespołu, prawdziwe zdjęcia Waszych gabinetów i baza techniczna, której potrzebuje wyszukiwarka i asystenci AI. Robię to sam, od struktury do kodu.",
  seo: {
    metaTitle: "Strona salonu kosmetycznego — zakres, cena i termin",
    metaDescription:
      "Tworzenie strony salonu kosmetycznego: podstrona pod każdy zabieg z ceną i czasem, rezerwacja online, podstrony zespołu, szybkość na telefonie. Od 8500 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podstrona pod każdy zabieg", "Strony od 8500 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Rezerwuj u Anny, pt 18:00", "Koloryzacja od 350 zł", "Laminacja rzęs, 60 min", "Cennik"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona salonu na WordPressie, z projektem graficznym w cenie", price: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Rozbudowana strona salonu: podstrony zabiegów, ceny, zespół, rezerwacja online", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co obejmuje",
      title: "Co obejmuje tworzenie strony salonu kosmetycznego",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona pod każdy zabieg", text: "Z ceną, czasem trwania i osobą, która go wykonuje" },
        { _key: k("o"), iconName: "calendar", title: "Rezerwacja do Waszego systemu", text: "Ten kalendarz, w którym już pracuje recepcja" },
        { _key: k("o"), iconName: "users", title: "Podstrony osób z zespołu", text: "Zdjęcie, specjalizacja, prace i rezerwacja właśnie u niej" },
        { _key: k("o"), iconName: "image", title: "Galeria Waszych prawdziwych prac", text: "Porządnie skompresowana, żeby strona nie zwalniała" },
        { _key: k("o"), iconName: "zap", title: "Szybkość na telefonie", text: "Next.js, lekkie zdjęcia, bez zbędnych skryptów" },
        { _key: k("o"), iconName: "sparkles", title: "Struktura czytelna dla asystentów AI", text: "Ceny tekstem i dane strukturalne, które się z nimi zgadzają" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Co klientka sprawdza na stronie salonu przed rezerwacją"),
        p("Stronę salonu otwiera się z już wybranym zabiegiem i decyduje w około minutę. Rozstrzygają cztery pytania: czy robicie dokładnie to, ile to kosztuje, kto będzie wykonywał i czy jest wolny termin wtedy, kiedy potrzebuję."),
        p("Strona, która odpowiada na te cztery w minutę, wygrywa z ładniejszą, która ukrywa je za formularzem kontaktowym. Dlatego struktura idzie za pytaniami, a nie za działami stawianymi z przyzwyczajenia: „o salonie”, „nasza filozofia” i „dlaczego my” czyta się na końcu, jeśli w ogóle."),

        h2("Podstrona pod każdy zabieg, z ceną i czasem trwania"),
        p("Trzon strony salonu to osobne podstrony pod pracę, a nie jedna lista: koloryzacja i techniki rozjaśniające, strzyżenie, przedłużanie i laminacja rzęs, brwi, manicure hybrydowy, pedicure, oczyszczanie i peelingi, depilacja laserowa, woskowanie."),
        p("Na każdej stoi cena albo „od”, ile trwa, kto wykonuje, jak długo trzyma się efekt, czy potrzebne jest przygotowanie albo próba uczuleniowa, jak pielęgnować potem. To samo pozwala podstronie w ogóle się znaleźć: opis w dwóch linijkach to nie coś, z czym poradzi sobie wyszukiwarka albo asystent."),
        p("Cennik sfotografowany z kartki albo zrzut z relacji się nie liczy. Ani wyszukiwarka, ani asystent AI nie czytają tekstu wewnątrz zdjęcia, więc salon, którego ceny istnieją tylko jako obrazek, jest niewidoczny dla obu."),

        h2("Rezerwacja online: podłączenie do systemu, w którym pracuje recepcja"),
        p("Pytanie o rezerwację nie brzmi „jaki widget”, a „gdzie recepcja faktycznie patrzy”. Strona, która zapisuje do drugiego systemu, którego nikt nie pilnuje, tworzy podwójne rezerwacje, a to kosztuje więcej niż brak rezerwacji w ogóle."),
        p("Dlatego formularz albo przycisk podłącza się do kalendarza lub systemu salonu, który już jest w użyciu, i stoi na każdej podstronie zabiegu, a nie tylko w menu. Jeśli rezerwacje idą przez Booksy albo podobny system, strona prowadzi od razu do właściwego zabiegu, a nie na jego ekran startowy. I na podstronie jest napisane, co dalej: kto potwierdzi i jak szybko."),

        h2("Podstrony zespołu: zwykle właśnie ludzie są powodem powrotów"),
        p("W tym biznesie klientka rezerwuje u osoby nie mniej niż na zabieg, a strona pisząca „nasz profesjonalny zespół” bez nazwisk to wyrzuca."),
        p("Każda osoba dostaje zdjęcie, opis tego, co robi, od ilu lat, przykłady prac i rezerwację właśnie u niej. To pomaga klientce wybrać, daje nowej osobie sposób na zapełnienie pierwszych tygodni i tworzy podstrony, które znajdują się po nazwisku, którego i tak się szuka."),

        h2("Zdjęcia Waszych gabinetów zamiast zdjęć stockowych"),
        p("Stockowa modelka z idealnymi włosami czyta się jako „to nie nasz salon”. Prawdziwe zdjęcia wnętrza, foteli, sprzętu i samych prac budzą więcej zaufania niż jakikolwiek tekst o jakości."),
        h3("Co warto sfotografować przed rozpoczęciem pracy"),
        li("wnętrze, w świetle dziennym, bez ludzi w kadrze;"),
        li("każdy gabinet albo stanowisko osobno;"),
        li("same prace: przed i po, w tym samym świetle i z tego samego kąta;"),
        li("zespół, w jednym stylu, a nie kto co przysłał."),
        p("Te same zdjęcia idą do profilu Google, gdzie często widzi się je wcześniej niż stronę, a czasem zamiast niej. Podpowiadam, jaki styl i czego brakuje, a nie zostawiam tego przypadkowi."),

        h2("Szybkość na telefonie, w warunkach, w których stronę faktycznie się otwiera"),
        p("Strony salonów otwiera się na telefonie, często między innymi sprawami i nierzadko na słabym zasięgu. Galeria nieskompresowanych zdjęć i wideo na pierwszym ekranie w tych warunkach oznaczają, że odwiedzająca wyjdzie wcześniej, niż znajdzie cenę."),
        p("Dlatego buduję na Next.js, z porządnie skompresowanymi zdjęciami i bez zbędnych skryptów, a cenę, przycisk rezerwacji i numer stawiam tam, gdzie nie trzeba do nich przewijać."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: lokalne firmy usługowe, dla których budowałem strony",
      subtitle:
        "Co te projekty mają wspólnego z salonem: klient decyduje na telefonie, w kilka minut, po cenie i odległości. Landing z zabezpieczonym dostępem do wideo, premium strona o remontach i inwestycjach, SEO i UX dla firmy auto, przebudowa strony na WordPressie i landing przechowalni opon z edytowalnym SEO.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Ile kosztuje strona salonu kosmetycznego i co obejmuje"),
        p(
          "Strona na WordPressie, z projektem graficznym w cenie — 3000 zł. Rozbudowana strona z podstronami zabiegów, cenami, zespołem i rezerwacją online — od 8500 zł. Projekt graficzny jest w cenie, nigdy jako osobna pozycja. Pełny cennik jest na ",
          link("stronie z cennikiem", "/pl/cennik"),
          ".",
        ),

        h2("Ile trwa budowa strony salonu"),
        p("Rozbudowana strona z podstronami zabiegów, zespołem i rezerwacją to trzy do sześciu tygodni. Dodatkowe wersje językowe wydłużają termin, a ja podaję go przed startem, nie w trakcie."),
        p("Budowę wydłuża zwykle nie kod, a materiał: zdjęcia, lista zabiegów z cenami i czasem trwania oraz odpowiedź, kto po Waszej stronie zatwierdza teksty. Jeśli czegoś nie ma, pomagam to zebrać."),

        h2("Analityka od pierwszego dnia, a nie potem"),
        p("Google Analytics i Search Console konfiguruję jako część pracy, z przyciskiem rezerwacji i kliknięciem w numer jako zdarzeniami. Bez tego po trzech miesiącach nie ma czym odpowiedzieć na pytanie, czy strona działa, a rozmowa zamienia się w opinie o grafice."),

        h2("Co zostaje u Was po uruchomieniu"),
        li("kod, domena, treści i dostępy do panelu są Wasze od pierwszego dnia;"),
        li("ceny i listę zabiegów zmieniacie sami, bez programisty;"),
        li("strona nie stoi na moim hostingu, eksporty nie są zablokowane;"),
        li("projekt można w każdej chwili przekazać innemu programiście;"),
        li("praca idzie na umowie z ustalonym zakresem, terminem i etapami."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony dla salonu kosmetycznego",
      subtitle:
        "Odpowiadam w ciągu jednego dnia roboczego: co bym zbudował, w jakim zakresie i za ile.",
      contextLabel: "Nazwa salonu lub strona",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i otrzymaj wycenę",
      note: "Albo napiszcie na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co jest teraz?", options: ["Nie ma strony", "Stara strona", "Tylko Instagram", "Tylko profil Google"] },
        { _key: k("z"), question: "Co jest potrzebne najpierw?", options: ["Rezerwacja online", "Podstrony zabiegów", "Ceny na stronie", "Wszystko"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Strona salonu czytelna dla asystentów AI"),
        p("Klientki coraz częściej pytają ChatGPT, Perplexity albo przeglądy AI w Google, zanim otworzą aplikację do rezerwacji: który salon w pobliżu robi dany zabieg, ile to kosztuje, czy ktoś jest otwarty w sobotę wieczorem. Asystent odpowiada z tekstu, który potrafi przeczytać i streścić — więc struktura strony rozstrzyga, czy Wasz salon w ogóle pojawi się w tej odpowiedzi."),
        p("W praktyce: każdy zabieg tekstem, z ceną i czasem trwania; znaczniki BeautySalon i Service zgodne z widocznym tekstem; identyczne nazwa, godziny i nazwy zabiegów na stronie, w profilu Google i na Booksy; krótkie odpowiedzi na to, o co pytają na recepcji. To zakłada się przy budowie, bo dołożenie później kosztuje więcej niż zrobienie od razu."),
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
      title: "Tworzenie strony salonu kosmetycznego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona dla salonu kosmetycznego", "Strona na WordPressie 3000 zł, rozbudowana strona od 8500 zł. O cenie decydują liczba podstron zabiegów, podłączenie rezerwacji i liczba wersji językowych, a nie same zabiegi."],
          ["Ile trwa budowa", "Trzy do sześciu tygodni na rozbudowaną stronę z podstronami zabiegów i rezerwacją. Termin zależy głównie od tego, jak szybko przychodzą i są zatwierdzane zdjęcia oraz cennik."],
          ["Czy strona jest potrzebna, jeśli mamy Instagram i Booksy", "Instagram trzyma te klientki, które Was już znają, Booksy przyjmuje rezerwację, ale żadne z nich nie odpowiada na „ile kosztuje koloryzacja na ciemnych włosach” tak, żeby przeczytał to Google albo asystent AI. Robi to strona, i jest jedynym z tych trzech, co należy do Was."],
          ["Czy rezerwacja połączy się z naszym systemem salonu", "Tak. Przycisk albo formularz podłącza się do kalendarza lub systemu, w którym już pracuje recepcja, żeby rezerwacje trafiały tam, gdzie ktoś faktycznie patrzy, a nie do drugiego systemu."],
          ["Czy będziemy mogli sami zmieniać ceny", "Tak, i o to chodzi. Ceny, czas trwania, listę zabiegów i podstrony zespołu zmienia się w panelu bez programisty, bo w tym biznesie zmieniają się często."],
          ["Budujecie na kreatorach stron", "Nie. Kreatory ograniczają strukturę i szybkość, a zejście z kreatora później kosztuje więcej niż zbudowanie od razu na Next.js albo WordPressie."],
          ["Co jest potrzebne od nas na start", "Lista zabiegów z cenami i czasem trwania, zdjęcia wnętrza i prac, kto jest w zespole i z jakiego systemu rezerwacji korzystacie. Resztę zbieramy po drodze."],
          ["Do kogo należy strona po uruchomieniu", "Do Was: kod, domena, treści i dostępy do panelu. Strona nie stoi na moim hostingu, eksporty nie są zablokowane, a projekt można w każdej chwili przekazać innemu programiście."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Co daje salonowi dobra strona internetowa"),
        p("Odpowiada na cztery pytania, które klientka ma przed rezerwacją, wysyła rezerwację do systemu, którego pilnuje recepcja, i działa dalej o jedenastej wieczorem, kiedy za biurkiem nikogo nie ma. To wszystko, co obiecuje — i to wystarczy, żeby zrobić ją porządnie."),

        h2("Fryzjer, spa albo pozycjonowanie gotowej strony: podstrony obok tej"),
        p(
          "Salon fryzjerski ma własny popyt i własną podstronę: ",
          link("strona internetowa dla salonu fryzjerskiego", "/pl/strona-internetowa-dla-salonu-fryzjerskiego"),
          ". Dla spa jest ",
          link("strona internetowa dla spa", "/pl/strona-internetowa-dla-spa"),
          ". Jeśli strona już jest, a problemem są rezerwacje z wyszukiwarki, to inna praca: ",
          link("pozycjonowanie strony salonu kosmetycznego", "/pl/seo-salonu-kosmetycznego"),
          ".",
        ),

        h2("Zamów stronę salonu kosmetycznego: co mi wysłać"),
        p("Wyślijcie listę zabiegów z cenami i czasem trwania, zdjęcia wnętrza i prac, kto jest w zespole i z jakiego systemu rezerwacji korzystacie. Odpowiem, co bym zbudował, w jakim zakresie i za ile."),
      ],
    },
  ],
};
