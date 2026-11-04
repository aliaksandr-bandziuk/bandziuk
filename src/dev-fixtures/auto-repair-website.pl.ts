// Landing page fixture: Tworzenie strony dla warsztatu samochodowego (PL),
// group «auto-repair-website». Rebuild of an existing old-template page under
// the same address /pl/tworzenie-stron-dla-warsztatow-samochodowych —
// replace-landing.cjs.
//
// Semantic core: research/pseo/core.csv (stage 1) gives no measured volume for
// «strona internetowa dla warsztatu samochodowego». Rewritten anyway because
// the page already exists and was among the thinnest on the site (648 words
// against a median of 1847) — the cost is the writing, not a new URL.
//
// Prices in PLN, matching the other Polish industry pages: strona na
// WordPressie od 3000 zł, rozbudowany serwis od 8500 zł.
//
// Разведение with the SEO page: that one is about getting enquiries to a site
// that already exists; this one is about how the site is built. Owner's rule
// for development pages: a section on being readable by AI assistants.
import { p, h2, h3, li, link, k } from "./pt";

export const autoRepairWebsitePl = {
  lang: "pl",
  group: "auto-repair-website",
  slug: "tworzenie-stron-dla-warsztatow-samochodowych",
  title: "Tworzenie strony dla warsztatu samochodowego",
  heading: "Tworzenie strony dla warsztatu samochodowego: zapis na naprawę zamiast wizytówki",
  excerpt:
    "Tworzę strony internetowe dla warsztatów samochodowych i serwisów: podstrona pod każdą naprawę, widełki cenowe zamiast „ceny po telefonie”, zapis online i techniczna podstawa pod wyszukiwarkę. Robię to sam — od struktury po kod, bez pośredników między Wami a wykonawcą.",
  seo: {
    metaTitle: "Strona dla warsztatu samochodowego — zakres, cena, termin",
    metaDescription:
      "Tworzenie strony dla warsztatu samochodowego: podstrona pod każdą naprawę, widełki cenowe, zapis online i struktura czytelna dla asystentów AI. Od 8500 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podstrona pod każdą naprawę", "Strona od 8500 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Umów naprawę online", "Cennik usług", "Wymiana sprzęgła", "Diagnostyka dzisiaj"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona warsztatu na WordPressie, z projektem graficznym w cenie", price: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Rozbudowana strona warsztatu: podstrony napraw, ceny, zapis online", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje tworzenie strony dla warsztatu samochodowego",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona pod każdą naprawę", text: "Sprzęgło, skrzynia, diagnostyka, zawieszenie, blacharka, opony" },
        { _key: k("o"), iconName: "file-text", title: "Widełki cenowe i od czego zależą", text: "Zamiast „ceny po telefonie” i cennika na grafice" },
        { _key: k("o"), iconName: "calendar", title: "Zapis online z czterema polami", text: "Z podłączeniem do kalendarza albo systemu warsztatowego" },
        { _key: k("o"), iconName: "zap", title: "Szybkość na telefonie", text: "Next.js, lekkie obrazy, bez zbędnych skryptów" },
        { _key: k("o"), iconName: "sparkles", title: "Struktura czytelna dla AI", text: "Bezpośrednie odpowiedzi i dane zgodne z treścią" },
        { _key: k("o"), iconName: "shield-check", title: "Kod i domena zostają u Was", text: "Bez blokowania eksportu i obcego hostingu" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Co kierowca musi znaleźć na stronie warsztatu w ciągu minuty"),
        p("Na stronę warsztatu wchodzi się w jednym z dwóch stanów: albo auto już stoi i jest pilnie, albo ktoś planuje przegląd i porównuje. W obu przypadkach decyzja zapada szybko i na te same pytania: czy robicie dokładnie to, ile to mniej więcej kosztuje, kiedy można przyjechać i kto będzie pracował przy aucie."),
        p("Strona, która odpowiada na to w minutę, wygrywa z ładniejszą, która każe szukać. Dlatego strukturę buduję od pytań, a nie od działów przyjętych w agencjach: „O nas”, „Nasze atuty” i „Dlaczego my” czyta się na końcu albo wcale."),

        h2("Podstrona pod każdą naprawę zamiast jednego działu „usługi”"),
        p("Podstawą strony warsztatu są osobne podstrony pod konkretne prace: wymiana sprzęgła, naprawa skrzyni automatycznej, diagnostyka komputerowa, geometria kół, zawieszenie, blacharka, wymiana opon. Potrzebuje tego i kierowca, i wyszukiwarka: klient przychodzi z jednym konkretnym problemem, a nie z chęcią „udania się do warsztatu”."),
        p("Każda taka podstrona odpowiada na to, o co pytają przez telefon: co wchodzi w zakres, ile trwa, czy auto zostaje, od czego zależy cena, jaka gwarancja i co, jeśli usterka wróci. Jeśli specjalizujecie się w markach, one dostają własne podstrony — mniejsza konkurencja i bardziej zdecydowany klient."),
        p(
          "Jak potem wyprowadzić te podstrony do wyszukiwarki, opisuję osobno: ",
          link("pozycjonowanie strony warsztatu samochodowego", "/pl/seo-dla-warsztatu-samochodowego"),
          ".",
        ),

        h2("Ceny na stronie: widełki zamiast „zadzwoń”"),
        p("„Ceny po telefonie” odsiewa więcej klientów niż cena wysoka. Człowiek z zepsutym autem nie będzie obdzwaniał pięciu warsztatów dla rzędu wielkości."),
        p("Na stronie stoi przedział i wyjaśnienie, od czego zależy: zakres prac, część oryginalna czy zamiennik, stan sąsiednich podzespołów widoczny po rozebraniu. Osobno: czy diagnostyka jest płatna i czy wlicza się w naprawę. Cennik grafiką albo w PDF tego nie załatwia — ani wyszukiwarka, ani asystent AI nie czytają tekstu w obrazku."),

        h2("Zapis online: o co formularz ma pytać, a o co nie"),
        p("Formularz zapisu to nie ankieta. Każde dodatkowe pole kosztuje zgłoszenia, a szczegóły i tak wychodzą w rozmowie."),
        p("Wystarczą cztery rzeczy: co się dzieje z autem, marka i rocznik, telefon, dogodny termin. Marka nie jest statystyką — od niej zależy, czy w ogóle się podejmiecie. Jeśli zapisy prowadzicie w kalendarzu albo w systemie warsztatowym, formularz podłączam do niego, żeby zgłoszenie nie ginęło w skrzynce."),
        p("I to, o czym strony zwykle zapominają: napisać, co dzieje się po wysłaniu — kiedy ktoś oddzwoni i o co zapyta."),

        h2("Zdjęcia hali zamiast zdjęć stockowych"),
        p("Stockowy mechanik z idealnym uśmiechem czyta się jako brak własnej hali. Prawdziwe zdjęcia podnośników, sprzętu, poczekalni i ludzi, którzy pracują, budują zaufanie skuteczniej niż jakikolwiek dział „o firmie”."),
        p("To samo dotyczy wizytówki Google: te zdjęcia widać, zanim ktokolwiek otworzy stronę, a często zamiast niej."),

        h2("Szybkość na telefonie, w warunkach, w których stronę faktycznie się otwiera"),
        p("Stronę warsztatu otwiera się z telefonu, na dworze, często przy słabym zasięgu i nierzadko stojąc obok auta, które nie jedzie. Ciężka galeria i wideo na pierwszym ekranie oznaczają w tych warunkach, że ktoś wyjdzie, zanim zobaczy numer telefonu."),
        p("Dlatego buduję na Next.js, z lekkimi obrazami i bez zbędnych skryptów, a numer i przycisk zapisu umieszczam tak, żeby nie trzeba było do nich przewijać."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony firm usługowych, które zbudowałem",
      subtitle:
        "Pierwszy przykład to firma z branży napraw samochodowych. Dalej landing przechowalni opon z edytowalnym SEO, przebudowa strony na WordPressie i projekty, w których struktura i szybkość ważyły więcej niż oprawa graficzna.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Ile kosztuje strona dla warsztatu samochodowego i co obejmuje"),
        p(
          "Strona na WordPressie z projektem graficznym w cenie — od 3000 zł. Rozbudowana strona warsztatu z podstronami napraw, cenami i zapisem online — od 8500 zł. Projekt graficzny jest w cenie i nigdy nie stanowi osobnej pozycji. Pełny cennik wszystkich usług jest na ",
          link("stronie z cennikiem", "/pl/cennik"),
          ".",
        ),

        h2("Ile trwa budowa strony warsztatu"),
        p("Prosta strona — dwa do trzech tygodni. Rozbudowana strona warsztatu ze strukturą napraw, cenami i zapisem — cztery do ośmiu tygodni. Podstrony pod dzielnice albo kolejne języki wydłużają ten czas, i mówię o tym przed startem, a nie w trakcie."),
        p("To, co zwykle wydłuża pracę, to nie kod, tylko materiały: zdjęcia hali, lista usług z cenami i akceptacja tekstów. Jeśli czegoś nie ma, pomagam to zebrać."),

        h2("Co zostaje u Was po uruchomieniu"),
        li("kod, domena, treści i dostępy do CMS — Wasze od pierwszego dnia;"),
        li("strona nie stoi na moim koncie hostingowym, eksport nie jest zablokowany;"),
        li("projekt można w każdej chwili przekazać komu innemu;"),
        li("pracę prowadzę na podstawie umowy z ustalonym zakresem, terminem i etapami, i wystawiam fakturę."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony dla warsztatu samochodowego",
      subtitle:
        "Odpowiadam w ciągu jednego dnia roboczego: co proponuję zrobić, w jakim zakresie i za jaką cenę.",
      contextLabel: "Nazwa warsztatu lub adres strony",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co jest teraz?", options: ["Strony nie ma", "Stara strona", "Tylko wizytówka Google", "Media społecznościowe"] },
        { _key: k("z"), question: "Co jest potrzebne najpilniej?", options: ["Zapis online", "Podstrony napraw", "Ceny na stronie", "Wszystko naraz"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Strona warsztatu czytelna dla asystentów AI"),
        p("Kierowcy coraz częściej pytają ChatGPT, Perplexity albo podsumowania AI w Google: „gdzie to naprawić”, „ile kosztuje wymiana rozrządu”, „co oznacza ten błąd”. Asystent odpowiada na podstawie tekstu, który potrafi przeczytać i streścić, więc struktura strony decyduje, czy znajdziecie się w takiej odpowiedzi."),
        p("W praktyce: bezpośrednia odpowiedź na początku każdej sekcji, fakty o usługach, cenach i warunkach zamiast przymiotników, dane strukturalne Schema.org zgodne z tekstem i treść dostępna bez wykonywania skryptów. To zakłada się przy budowie — dopisanie tego później kosztuje więcej niż zrobienie od razu."),
        p(
          "Jak robi się to na stronie, która już istnieje, opisuję osobno: ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Najczęstsze pytania o stronę dla warsztatu samochodowego",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona dla warsztatu samochodowego?", "Strona na WordPressie od 3000 zł, rozbudowana strona warsztatu od 8500 zł. Cena zależy od liczby podstron napraw, zapisu online i integracji, a nie od marek, którymi się zajmujecie."],
          ["Ile trwa wykonanie?", "Cztery do ośmiu tygodni dla rozbudowanej strony z podstronami napraw; dwa do trzech tygodni dla prostej. Termin zależy głównie od tempa dostarczania i akceptacji materiałów."],
          ["Czy strona jest potrzebna, skoro mamy wizytówkę Google i media społecznościowe?", "Wizytówka przyprowadza klientów pilnych, media społecznościowe utrzymują uwagę, ale żadne z nich nie odpowiada na pytanie „ile kosztuje wymiana sprzęgła w moim aucie”. Robi to strona — i jako jedyna z tej trójki należy do Was."],
          ["Czy zapis można podłączyć do systemu warsztatowego?", "Tak. Formularz łączy się z kalendarzem albo z systemem zarządzania warsztatem, żeby zgłoszenia trafiały tam, gdzie ktoś je widzi."],
          ["Czy robicie strony na kreatorach?", "Nie. Kreator ogranicza strukturę i szybkość, a przeniesienie z niego strony później jest trudniejsze niż zbudowanie od razu na Next.js albo WordPressie."],
          ["Czego potrzebujecie od nas na start?", "Listy usług z orientacyjnymi cenami, zdjęć hali, informacji, jakimi markami się zajmujecie, i tego, kto będzie obsługiwał zgłoszenia. Resztę zbieramy po drodze."],
          ["Do kogo należy strona po uruchomieniu?", "Do Was: kod, domena, treści i dostępy do CMS. Strona nie stoi na moim hostingu, eksport nie jest zablokowany, a projekt można w każdej chwili przekazać komu innemu."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę dla warsztatu samochodowego: co mi wysłać"),
        p(
          "Wyślijcie listę usług z orientacyjnymi cenami, zdjęcia hali, informację, jakimi markami się zajmujecie, i kto będzie obsługiwał zgłoszenia. Odpowiem, co proponuję zrobić, w jakim zakresie i za jaką cenę. Strona już jest, a brakuje zgłoszeń z wyszukiwarki — wtedy to inna praca: ",
          link("pozycjonowanie strony warsztatu samochodowego", "/pl/seo-dla-warsztatu-samochodowego"),
          ".",
        ),
      ],
    },
  ],
};
