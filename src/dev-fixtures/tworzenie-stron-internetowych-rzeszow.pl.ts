// Landing page fixture: Tworzenie stron internetowych w Rzeszowie (PL), group
// «tworzenie-stron-internetowych-rzeszow». City page, stage 3 pilot.
// Phrases (ref/city-keywords.md, ref/pl-cities.md; volumes/month, Poland):
// strony internetowe rzeszów 720 · strona internetowa rzeszów 720 · tworzenie
// stron internetowych rzeszów 260. Brief adds «projektowanie stron Rzeszów» and
// «cennik» for H2/FAQ. PAA: «Jaka jest cena projektowania stron
// internetowych?» → FAQ.
// Intent (ref/intent-check-pl-cities.md, rules for every city): «tworzenie
// stron», «projektowanie stron», «strony internetowe», «strona internetowa»
// share 0–1 URLs — fragmented SERPs of small studios and Oferteo → one page
// carrying all of them in H2/FAQ; SEO vs website build 0 shared URLs →
// separate page. Neighbouring towns have their own SERPs → Łańcut, Krosno,
// Mielec, Dębica, Przemyśl only as the area served.
// City angle: aviation supply chain (Dolina Lotnicza) and manufacturing →
// technical B2B sites with English versions; firms working across
// Podkarpacie → structure for a service area; Ukrainian-speaking clients and
// employees → Ukrainian version, recruitment pages; new housing estates →
// construction and finishing companies; local studio market.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna strona od 8500 zł,
// projekt graficzny w cenie.
// NOT on this page: pozycjonowanie (/pl/pozycjonowanie-stron-rzeszow); online
// shops (not offered); Google Ads and social media.
// Owner’s rules: remote from Warsaw, no visits promised; never say there are no
// clients from the visitor’s city or industry.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychRzeszowPl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-rzeszow",
  slug: "tworzenie-stron-internetowych-rzeszow",
  title: "Tworzenie stron internetowych w Rzeszowie",
  heading: "Tworzenie stron internetowych w Rzeszowie",
  excerpt:
    "Tworzenie stron internetowych w Rzeszowie dla firm z miasta i Podkarpacia: strony usługowe, techniczne strony B2B dla przemysłu, wersje ukraińska i angielska. Projekt graficzny, wykonanie i teksty robi jedna osoba, a ceny są w cenniku.",
  seo: {
    metaTitle: "Strona internetowa Rzeszów od 3000 zł | Bandziuk",
    metaDescription:
      "Strona internetowa dla firmy z Rzeszowa i Podkarpacia: projekt w cenie, podstrony usług i miejscowości, wersje UA i EN, formularz zgodny z RODO. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt w cenie strony", "Od 3000 zł", "Wersje PL · UA · EN"],
  heroPhonePoints: ["Zadzwoń · WhatsApp", "Obróbka CNC · zapytanie ofertowe", "Realizacje: Rzeszów, Łańcut", "Українською"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy z Rzeszowa, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona firmy z Rzeszowa: podstrony usług i miejscowości, wersje językowe, zapytania ofertowe, integracje, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową z Rzeszowa",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Oferta B2B opisana technicznie", text: "Procesy, materiały, park maszynowy, karty do pobrania" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług i miejscowości", text: "Rzeszów i miasta Podkarpacia, w których macie realizacje" },
        { _key: k("o"), iconName: "message-circle", title: "Wersja ukraińska i angielska", text: "Dla klientów, pracowników i odbiorców z zagranicy" },
        { _key: k("o"), iconName: "phone", title: "Telefon i zapytanie jednym dotknięciem", text: "Na każdej podstronie, także w wersjach językowych" },
        { _key: k("o"), iconName: "shield-check", title: "Formularz i cookies zgodne z RODO", text: "Także formularz z załącznikiem, np. rysunkiem technicznym" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty tekstem, dane strukturalne firmy" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy z Rzeszowa", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Usługi, miejscowości, języki, zapytania B2B", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Strona firmy skanowania laserowego 3D i modelowania BIM w trzech językach, wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów oraz strony trzech lokalnych firm z Warszawy: przechowalni opon, warsztatu samochodowego i firmy remontowo-inwestycyjnej. Dla firmy z Rzeszowa to przykłady obu rodzajów stron, które tu najczęściej powstają: technicznej strony B2B, która ma przekonać odbiorcę z innego kraju, i lokalnej strony usługowej, z której klient od razu dzwoni.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy z Rzeszowa",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron i języków i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaka to będzie strona?", options: ["Strona firmy usługowej", "Strona B2B dla przemysłu", "Strona z ofertą pracy i rekrutacją", "Jeszcze nie wiem"] },
        { _key: k("z"), question: "Jakie wersje językowe są potrzebne?", options: ["Tylko polska", "Polska i ukraińska", "Polska i angielska", "Polska, ukraińska i angielska"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych w Rzeszowie prowadzę dla firm z miasta i z całego Podkarpacia, zdalnie z Warszawy. Za strukturę, projekt graficzny, wykonanie, teksty i uruchomienie odpowiada jedna osoba, więc nie ma przekazywania projektu między działami. Cenę znacie z cennika, zanim do mnie napiszecie, a projekt graficzny jest w nią wliczony."),

        h2("Strony internetowe Rzeszów: jakie firmy z Podkarpacia zamawiają stronę"),
        p("W Rzeszowie spotykają się dwa światy. Jeden to przemysł: zakłady i poddostawcy skupieni w Dolinie Lotniczej, firmy obróbki, narzędziownie, serwisy, a obok nich parki przemysłowe przy lotnisku w Jasionce. Drugi to szybko rosnące miasto, w którym przybywa osiedli, mieszkańców i firm usługowych. Strony, które tu powstają, dzielą się więc na dwa rodzaje:"),
        li("strony techniczne B2B — dla zakładów, poddostawców, firm logistycznych i spedycyjnych, które sprzedają innym firmom, często za granicę"),
        li("strony lokalnych usług — dla wykończeniówki, instalatorów, gabinetów, warsztatów, szkół i biur rachunkowych, które obsługują mieszkańców Rzeszowa i okolicznych gmin"),
        p("Pierwsza ma przekonać inżyniera i kupca, druga — doprowadzić mieszkańca do telefonu w ciągu minuty. To inne układy, inne teksty i inne formularze, dlatego zawsze zaczynam od pytania, do kogo strona ma mówić."),
        p("Jest też mniejsza, trzecia grupa: firmy żyjące ze studentów Politechniki Rzeszowskiej i Uniwersytetu Rzeszowskiego. Szkoły językowe, kursy, wynajem pokoi czy ośrodki szkolenia lotniczego potrzebują stron z jasnym cennikiem, terminami i zapisami online, gotowych przed początkiem roku akademickiego."),

        h2("Strona internetowa dla poddostawcy przemysłu lotniczego i firmy produkcyjnej z Rzeszowa"),
        p("Kupiec, który szuka poddostawcy, zwykle zaczyna od Google albo od rekomendacji i od razu sprawdza stronę. Chce zobaczyć konkretne możliwości, a nie hasło o „najwyższej jakości”. Strona produkcyjnej firmy z Rzeszowa powinna więc pokazywać:"),
        li("procesy i technologie, z którymi pracujecie — obróbka, spawanie, powłoki, montaż — każde na osobnej podstronie"),
        li("materiały, tolerancje i wielkości serii, jakie realizujecie"),
        li("park maszynowy i system jakości, z certyfikatami, które naprawdę posiadacie"),
        li("formularz zapytania ofertowego z możliwością dołączenia rysunku technicznego"),
        li("wersję angielską, a jeśli macie odbiorców w Niemczech — także niemiecką"),
        p(
          "Taka strona rzadko ma setki odwiedzin dziennie, ale jedno trafne zapytanie może oznaczać wieloletnią współpracę. Więcej piszę na stronie ",
          link("strona dla firmy produkcyjnej", "/pl/strona-dla-firmy-produkcyjnej"),
          ".",
        ),

        h2("Strona internetowa firmy z Rzeszowa, która pracuje w całym regionie"),
        p("Ekipy budowlane, instalatorzy, firmy sprzątające czy serwisy z Rzeszowa często jeżdżą do klientów w Łańcucie, Krośnie, Dębicy, Mielcu albo Przemyślu. Każde z tych miast ma swoje wyniki w Google, a klient wpisuje nazwę swojej miejscowości. Na stronie warto to pokazać w uporządkowany sposób:"),
        li("strona główna od razu mówi, że pracujecie w Rzeszowie i w których miastach obok"),
        li("osobna podstrona miasta tylko tam, gdzie macie realizacje, terminy i coś konkretnego do napisania"),
        li("przy zdjęciach realizacji podana miejscowość lub osiedle, np. „Elewacja domu, Rzeszów-Budziwój”"),
        p(
          "Dla firm wykonawczych przygotowałem osobny opis: ",
          link("strona internetowa dla firmy budowlanej", "/pl/strona-internetowa-dla-firmy-budowlanej"),
          ".",
        ),

        h2("Strona internetowa dla firmy wykończeniowej i remontowej na nowych osiedlach Rzeszowa"),
        p("Rzeszów się rozbudowuje, a nowe bloki i domy na obrzeżach miasta oznaczają wiele mieszkań do wykończenia. Właściciel, który właśnie odebrał klucze w stanie deweloperskim, szuka ekipy szybko, porównuje kilka firm i chce wiedzieć trzy rzeczy: co dokładnie robicie, ile to mniej więcej kosztuje i kiedy możecie zacząć. Strona firmy wykończeniowej z Rzeszowa powinna odpowiadać na te pytania od razu:"),
        li("zakres prac opisany pakietami, np. łazienka, podłogi, malowanie, zabudowy, z widełkami cen za metr lub za pakiet"),
        li("realizacje z nowych osiedli, ze zdjęciami przed i po"),
        li("informacja o najbliższych wolnych terminach, aktualizowana w panelu"),
        li("formularz, w którym klient poda metraż, osiedle i termin odbioru mieszkania"),

        h2("Strona z ofertami pracy dla firmy z Rzeszowa: rekrutacja po polsku i ukraińsku"),
        p("Wiele firm produkcyjnych, logistycznych i budowlanych z Rzeszowa używa strony nie tylko do sprzedaży, ale też do szukania pracowników. Ogłoszenie na portalu znika po miesiącu, a podstrona „Praca” zostaje i zbiera kandydatów stale. Taka podstrona opisuje stanowiska, zmiany, dojazd do zakładu i warunki zakwaterowania, jeśli je zapewniacie, w wersji polskiej i ukraińskiej. Oferty oznaczone danymi strukturalnymi mogą pojawiać się w wynikach wyszukiwania pracy w Google, a krótki formularz z telefonem działa lepiej niż prośba o przesłanie CV mailem."),

        h2("Wersja ukraińska i angielska strony internetowej w Rzeszowie"),
        p("W Rzeszowie wersja ukraińska bywa tak samo potrzebna jak polska. Mieszka tu wiele osób z Ukrainy, które szukają usług w swoim języku, a firmy z regionu zatrudniają pracowników z Ukrainy i prowadzą z nią handel. Wersja angielska jest z kolei językiem rozmów z zagranicznymi odbiorcami przemysłu i logistyki."),
        h3("Jak buduję wersje językowe"),
        li("wersje mają osobne ścieżki adresów, np. /uk/ i /en/, oraz znaczniki hreflang"),
        li("tłumaczę podstrony, z którymi naprawdę przychodzą obcokrajowcy, zamiast całej strony"),
        li("formularz, klauzula RODO i potwierdzenie wysłania są w tym samym języku"),
        li("strona rekrutacyjna po ukraińsku opisuje warunki, dokumenty i kontakt prostym językiem"),
        p(
          "Szczegóły techniczne stron wielojęzycznych są na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Projektowanie stron w Rzeszowie: lokalne studia, freelancerzy i ogólnopolskie firmy"),
        p("Po wpisaniu „projektowanie stron Rzeszów”, „tworzenie stron internetowych Rzeszów” czy „strona internetowa Rzeszów” zobaczycie lokalne studia i agencje z Podkarpacia, freelancerów, ogólnopolskie firmy z podstroną dla Rzeszowa i portal Oferteo. Ceny i zakres usług bardzo się różnią: od szablonu za niewielkie pieniądze po rozbudowane projekty agencji."),
        p("Przy porównywaniu ofert warto zapytać o cztery rzeczy: czy projekt graficzny jest w cenie, czy po uruchomieniu trzeba płacić abonament wykonawcy, do kogo należą domena i kod oraz kto będzie Waszym kontaktem. U mnie projekt jest w cenie, abonamentu nie ma, strona należy do Was, a kontaktem jest osoba, która ją buduje."),

        h2("Strona internetowa, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Ludzie pytają ChatGPT albo czytają podsumowania AI w Google: „firma od obróbki aluminium na Podkarpaciu”, „stomatolog w Rzeszowie, który mówi po ukraińsku”. Asystent poleca firmy, o których potrafi przeczytać konkretne informacje. Dlatego na stronach, które buduję, usługi, procesy, miejscowości, języki obsługi i widełki cen są zapisane tekstem, a nie na grafikach czy w samych plikach PDF, a dane strukturalne opisują firmę tak samo jak wizytówka Google."),
        p(
          "O dalszej pracy nad tym, żeby asystenci polecali Waszą firmę, piszę na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak powstaje strona internetowa dla firmy z Rzeszowa, gdy wykonawca pracuje z Warszawy"),
        ol("Rozmowa wideo i brief: klienci, usługi lub procesy, miejscowości, języki, zdjęcia i dokumenty, które już macie."),
        ol("Spis podstron w każdym języku i cena zapisana przed startem prac."),
        ol("Projekt graficzny: strona główna i wzorcowa podstrona usługi lub procesu, sprawdzana na telefonie."),
        ol("Wykonanie i teksty; Wy sprawdzacie fakty techniczne i dane firmy."),
        ol("Uruchomienie z domeną, SSL, analityką po zgodzie, Search Console i instrukcją edycji."),
        p("Wszystko odbywa się online, a na każdym etapie oglądacie podgląd strony. Zdjęcia hali, maszyn czy realizacji możecie zrobić sami; podpowiem, jakie ujęcia będą potrzebne do każdej podstrony."),

        h2("Strona internetowa a pozycjonowanie w Rzeszowie"),
        p(
          "Podstawy SEO są w cenie każdej strony: adresy, tytuły i opisy podstron, dane strukturalne, szybkość na telefonie, mapa strony i Search Console. Systematyczna praca nad tym, żeby strona była wysoko dla fraz z Rzeszowem i miastami regionu, oraz prowadzenie wizytówki Google to osobna usługa, opisana na stronie ",
          link("pozycjonowanie stron w Rzeszowie", "/pl/pozycjonowanie-stron-rzeszow"),
          ".",
        ),
        p("Strona B2B dla przemysłu często nie potrzebuje stałego pozycjonowania: wystarczy, że kupiec, który zna już Waszą nazwę, znajdzie rzetelną stronę, a kilka podstron procesów pojawi się na precyzyjne zapytania. Firmie usługowej walczącej o klientów z całego Rzeszowa stała praca zwykle się opłaca. Przy wycenie strony powiem, który przypadek dotyczy Was."),

        h2("Strona internetowa Rzeszów: cennik i ile kosztuje projekt"),
        li("Prosta strona firmy z Rzeszowa — kilka podstron oferty, zdjęcia realizacji lub zakładu, dane kontaktowe i formularz z klauzulą RODO: od 3000 do 6000 zł."),
        li("Pełna strona — podstrony usług, procesów i miejscowości, wersje językowe, formularz zapytania ofertowego, integracje: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie obu wariantów, a widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Stałej opłaty dla mnie po starcie strony nie ma; płacicie dostawcy hostingu i domeny, a mnie wyłącznie za zlecone poprawki. Ogólny opis tego, jak pracuję nad stronami, jest na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa w Rzeszowie: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych w Rzeszowie?", "Prosta strona kosztuje od 3000 do 6000 zł, a pełna z podstronami usług i miejscowości, wersjami językowymi i formularzem zapytania ofertowego od 8500 zł. Projekt graficzny jest w cenie. Ostateczną kwotę podam po krótkiej rozmowie o zakresie."],
          ["Ile trwa tworzenie strony internetowej w Rzeszowie?", "Przy prostej stronie liczcie się z dwoma–czterema tygodniami, przy pełnej z czterema–sześcioma, a wersje językowe wydłużają ten czas. Najwięcej zależy od tego, jak szybko gotowe są zdjęcia, dane techniczne i Wasze uwagi."],
          ["Czy strona może mieć wersję ukraińską?", "Tak. Wersja ukraińska ma własne adresy podstron i oznaczenia dla Google, a tłumaczone są te podstrony, z którymi przychodzą klienci lub kandydaci do pracy mówiący po ukraińsku."],
          ["Czy formularz może przyjmować rysunki techniczne?", "Tak. Formularz zapytania ofertowego może przyjmować pliki, a zgłoszenia trafiają bezpośrednio na Waszą skrzynkę, z klauzulą RODO przy formularzu."],
          ["Czy przyjedziesz na spotkanie do Rzeszowa?", "Pracuję z Warszawy, więc z firmami z Rzeszowa kontaktuję się online. Brief omawiamy na wideo, uwagi zbieramy we wspólnym pliku, a działającą wersję roboczą strony możecie otworzyć w każdej chwili."],
          ["Czy sami możemy edytować stronę?", "Tak. Teksty, zdjęcia, realizacje i oferty pracy zmieniacie w prostym panelu, także z telefonu, bez programisty."],
          ["Do kogo należy strona po uruchomieniu?", "Do Waszej firmy. Domenę rejestrujemy na Was, a kod i treści możecie zabrać do dowolnego hostingu albo innego wykonawcy."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową w Rzeszowie: co mi wysłać"),
        p(
          "Wyślijcie nazwę firmy, link do obecnej strony albo wizytówki Google, listę usług lub procesów, miejscowości, w których pracujecie, i potrzebne wersje językowe. Kilka zdjęć z realizacji, hali albo maszyn pomoże mi pokazać projekt, który wygląda jak Wasza firma. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
