// Landing page fixture: Strona internetowa dla firmy budowlanej (PL), variant A.
// Market version of construction-company-website.en, not a translation.
// Semantic core: research/pseo/page-core/construction.md (PL): strona
// internetowa dla firmy budowlanej / strona internetowa firmy budowlanej /
// strona firmy budowlanej — 90 each (one bucket). Intent: SERP of agencies;
// 2 shared URLs with «projektowanie stron dla firm budowlanych» (no PL design
// page — design is covered here). Prices: /pl/cennik (landing 3000–6000 zł,
// sales/lead site from 8500 zł). Owner's rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const constructionCompanyWebsitePl = {
  lang: "pl",
  group: "construction-company-website",
  slug: "strona-internetowa-dla-firmy-budowlanej",
  title: "Strona internetowa dla firmy budowlanej",
  heading: "Strona internetowa dla firmy budowlanej",
  excerpt:
    "Tworzę strony internetowe dla firm budowlanych: podstrony usług i miejscowości, realizacje, które ekipa dodaje sama, i formularz wyceny ze zdjęciami i rysunkami — szybkie na telefonie i w całości Wasze.",
  seo: {
    metaTitle: "Strona internetowa dla firmy budowlanej | Bandziuk",
    metaDescription:
      "Strona internetowa dla firmy budowlanej: usługi i miejscowości, realizacje dodawane przez ekipę, formularz wyceny ze zdjęciami, szybka i Wasza. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Usługi i miejscowości", "Realizacje dodawane przez Was", "Wycena ze zdjęciami", "Telefon · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa firmy budowlanej", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona firmy budowlanej z realizacjami, podstronami usług i miejscowości, formularzem wyceny i SEO lokalnym", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla firmy budowlanej",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrony usług i miejscowości", text: "Struktura, której szukają klienci i wyszukiwarki" },
        { _key: k("o"), iconName: "image", title: "Realizacje, które ekipa dodaje sama", text: "Nowa realizacja z telefonu: rodzaj prac, miejsce, metraż, zdjęcia" },
        { _key: k("o"), iconName: "file-text", title: "Formularz wyceny ze zdjęciami i rysunkami", text: "Zapytania przychodzą kompletne, na e-mail" },
        { _key: k("o"), iconName: "gauge", title: "Szybka na telefonie, także na budowie", text: "Podstrony ładują się w mniej niż 2,5 s" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty tekstem, dane strukturalne usług i obszaru" },
        { _key: k("o"), iconName: "shield-check", title: "Wasza: kod, treści i domena", text: "Bez uzależnienia od kreatora czy agencji" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy budowlanej", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Realizacje, miejscowości, wycena, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zbudowałem",
      subtitle:
        "Firma remontowo-inwestycyjna i firma skanowania laserowego 3D i BIM, a obok strony z tym, czego potrzebuje strona firmy budowlanej: wyceną ze zdjęciami, trzema językami i klientem, który sam edytuje stronę.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy budowlanej",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję strukturę podstron i podaję stałą cenę.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Brak strony", "Strona z kreatora", "Stara strona"] },
        { _key: k("z"), question: "Co budujecie?", options: ["Domy", "Remonty i wykończenia", "Obiekty komercyjne", "Wszystkiego po trochu"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla firm budowlanych od początku do końca — struktura, projekt, wykonanie i uruchomienie — więc jedna osoba odpowiada za to, jak strona wygląda i jak działa. Strona firmy budowlanej ma jedno zadanie: zamieniać ludzi, którzy porównują wykonawców, w prośby o wycenę. Wszystko na niej jest zaplanowane pod to."),

        h2("Czego potrzebuje strona firmy budowlanej: podstrony i funkcje"),
        p("Większość stron firm budowlanych to strona główna, „o nas”, galeria i formularz kontaktowy. To za mało, żeby firmę znaleźć i wybrać. Strona, która przynosi zlecenia, ma:"),
        li("podstronę dla każdej usługi, którą sprzedajecie — budowa domów, remonty, rozbudowy, dachy, wykończenia"),
        li("podstronę dla każdego miasta lub regionu, w którym działacie, z realizacjami stamtąd"),
        li("portfolio realizacji, w którym każda realizacja ma własną podstronę z faktami i zdjęciami"),
        li("formularz wyceny, który zadaje pytania potrzebne kosztorysantowi i przyjmuje zdjęcia oraz rysunki"),
        li("uprawnienia, ubezpieczenie OC, gwarancję i opinie pokazane obok przycisku wyceny"),
        li("telefon i WhatsApp jednym dotknięciem na każdej podstronie"),
        p("Projekt graficzny jest w cenie: strona wygląda tak, jak firma pracuje — z prawdziwymi zdjęciami z budowy zamiast zdjęć stockowych."),

        h2("Portfolio realizacji, które ekipa uzupełnia z telefonu"),
        p("Portfolio działa tylko wtedy, gdy jest aktualne, a jest aktualne tylko wtedy, gdy dodanie realizacji zajmuje kilka minut. Na stronie, którą buduję, nowa realizacja to krótki formularz w prostym panelu: rodzaj prac, miejsce, metraż, czas, kilka zdań i zdjęcia prosto z telefonu. Podstrona układa się sama, dostaje własny adres i pojawia się na właściwych listach usług i miejscowości."),
        p("Zdjęcia są kompresowane przy dodawaniu, więc kierownik budowy może wrzucić dwadzieścia zdjęć z placu budowy, nie spowalniając strony."),

        h2("Formularz wyceny prac budowlanych ze zdjęciami i rysunkami"),
        p("Formularz wyceny to miejsce, w którym strona zarabia na siebie. W kilku krótkich krokach pyta o to, o co kosztorysant zapytałby przez telefon: rodzaj inwestycji, miejsce, przybliżony metraż, etap, widełki budżetu i termin rozpoczęcia. Klient może dołączyć zdjęcia działki i projekt z telefonu albo komputera."),
        p("Zapytania przychodzą na e-mail ze wszystkim w jednym miejscu. Jeśli korzystacie z CRM albo wspólnej skrzynki, formularz może wysyłać zapytania tam, żeby nic nie ginęło między biurem a budową."),

        h2("Szybkość, hosting i bezpieczeństwo strony firmy budowlanej"),
        p("Klienci często oglądają stronę wykonawcy na telefonie, na danych komórkowych, czasem stojąc na własnej działce. Podstrony są budowane tak, żeby pojawiały się w mniej niż 2,5 sekundy na telefonie — to próg, który Google uznaje za dobry — nawet przy wielu zdjęciach realizacji, bo zdjęcia są w nowoczesnych formatach i ładują się dopiero wtedy, gdy pojawiają się na ekranie."),
        p("Strona działa na szybkim hostingu z SSL, automatycznymi kopiami zapasowymi i ochroną formularzy przed spamem. Dobrze zbudowana strona często przez miesiące nie wymaga żadnej obsługi; kiedy wymaga, płacicie za wykonaną pracę, a nie stały abonament."),

        h2("Strona firmy budowlanej czytelna dla asystentów AI"),
        p("Coraz więcej klientów pyta ChatGPT, Perplexity albo podsumowania AI w Google, jakiego wykonawcę wybrać. Asystenci mogą polecić tylko to, co potrafią przeczytać. Strona jest budowana tak, żeby fakty o firmie były czytelne dla maszyn od pierwszego dnia:"),
        li("usługi, miejscowości, lata na rynku i uprawnienia zapisane tekstem, a nie tylko pokazane na grafikach"),
        li("dane strukturalne firmy, jej usług, obszaru działania i opinii"),
        li("osobna podstrona dla każdej usługi i miejscowości, która odpowiada na pytania klientów"),
        li("te same dane firmy co w wizytówce Google i w katalogach"),
        p(
          "Widoczność w wyszukiwarce i w odpowiedziach AI to dalsza, stała praca, opisana na stronie ",
          link("pozycjonowanie strony firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej"),
          ".",
        ),

        h2("Strona firmy budowlanej z kreatora czy zbudowana od podstaw"),
        p("Kreator stron — ogólny albo przeznaczony dla wykonawców — szybko uruchamia stronę za miesięczny abonament. Dla małej firmy budowlanej z kilkoma usługami i kilkoma realizacjami to może być rozsądny początek."),
        p("Ograniczenia pojawiają się, gdy firma rośnie: realizacji nie da się filtrować, jest jedna ogólna podstrona usług, formularz z trzema polami, strona zwalnia od zdjęć, a przy odejściu nie można jej zabrać ze sobą. Strona budowana od podstaw jest dopasowana do tego, jak firma sprzedaje, a kod, treści i domena należą do Was."),

        h2("Strona internetowa dla małej firmy budowlanej"),
        p("Mała firma budowlana nie potrzebuje dużej strony. Potrzebuje kilku podstron, które mają znaczenie: strona główna, usługi, miejscowości, pięć–dziesięć dobrych realizacji i formularz wyceny. To prosta wersja, od 3000 zł, która może później urosnąć do pełnej struktury bez przebudowy."),
        p(
          "Jeśli jesteście deweloperem i sprzedajecie mieszkania z inwestycji, strona wygląda inaczej — opisuję to na stronie ",
          link("strona internetowa dla dewelopera", "/pl/strona-dla-dewelopera"),
          ".",
        ),

        h2("Jak powstaje strona internetowa firmy budowlanej"),
        ol("Brief. Przesyłacie listę usług i miejscowości, realizacje ze zdjęciami i pytania, które klienci zwykle zadają. Jeśli jesteście w Warszawie, przyjeżdżam do biura albo na budowę."),
        ol("Struktura. Proponuję układ podstron i uzgadniam go z Wami przed projektem graficznym."),
        ol("Projekt. Strona główna, podstrona usługi i podstrona realizacji są projektowane w całości, najpierw na telefonie."),
        ol("Wykonanie. Strona jest budowana, portfolio i formularz wyceny są konfigurowane, treści uzupełniane."),
        ol("Uruchomienie. Sprawdzam analitykę, połączenie z wizytówką Google i dane strukturalne; ekipa dostaje krótką instrukcję dodawania realizacji."),
        p(
          "Jeśli strona już istnieje, przeniesienie zachowuje pozycje w Google: każdy stary adres jest przekierowany na nową podstronę. Proces opisuję na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla firmy budowlanej"),
        li("Prosta strona firmy budowlanej — strona główna, usługi, miejscowości, kilka realizacji, formularz wyceny: od 3000 do 6000 zł."),
        li("Strona z portfolio realizacji, podstronami usług i miejscowości, rozbudowanym formularzem wyceny z załącznikami i SEO lokalnym: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie w obu przypadkach. Wyślijcie krótki opis firmy, a przygotuję stałą wycenę. Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla firmy budowlanej: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla firmy budowlanej?", "Od 3000 do 6000 zł za prostą stronę firmy budowlanej, od 8500 zł za stronę z portfolio realizacji, podstronami usług i miejscowości, rozbudowanym formularzem wyceny i SEO lokalnym. Projekt graficzny jest w cenie. Po krótkim opisie firmy podaję stałą cenę."],
          ["Ile trwa stworzenie strony firmy budowlanej?", "Zwykle od trzech do sześciu tygodni od briefu, w zależności od liczby usług, miejscowości i realizacji oraz od tego, jak szybko gotowe są zdjęcia i teksty."],
          ["Czy sami możemy dodawać realizacje i edytować stronę?", "Tak. Realizacje, usługi, miejscowości i teksty edytuje się w prostym panelu, także z telefonu. Dodanie realizacji zajmuje kilka minut, a układ zostaje spójny."],
          ["Do kogo należy strona?", "Do Was: kod, treści i domena. Nie ma uzależnienia od kreatora ani ode mnie — w każdej chwili możecie przenieść stronę do innego wykonawcy."],
          ["Czy można przenieść obecną stronę bez utraty pozycji w Google?", "Tak. Przed uruchomieniem nowej strony każdy stary adres jest przypisany do nowej podstrony, ustawiane są przekierowania i przenoszone dane strukturalne, więc pozycje starej strony zostają."],
          ["Czy jednostronicowa strona wystarczy małej firmie budowlanej?", "Jednoosobowej firmie z jednym rodzajem prac — tak: jedna strona z usługami, obszarem działania, kilkoma realizacjami i formularzem wyceny. Gdy usług albo miejscowości jest kilka, osobne podstrony przynoszą więcej zapytań i częściej są znajdowane."],
          ["Czy strona będzie widoczna w Google i w odpowiedziach AI?", "Strona jest budowana ze strukturą, szybkością i danymi strukturalnymi, których potrzebują wyszukiwarki i asystenci AI. Widoczność na konkurencyjne frazy to dalsza praca SEO, którą także wykonuję."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla firmy budowlanej: co mi wysłać"),
        p(
          "Wyślijcie nazwę firmy, link do obecnej strony albo profilu, usługi, które oferujecie, i miejscowości, w których pracujecie. Kilka ostatnich realizacji ze zdjęciami pomoże mi zaproponować strukturę. Odpowiem planem podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
