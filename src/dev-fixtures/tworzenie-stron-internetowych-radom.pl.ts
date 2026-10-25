// Landing page fixture: Tworzenie stron internetowych Radom (PL), group
// «tworzenie-stron-internetowych-radom». Stage 3 city pilot, Radom only.
// Semantic core (ref/city-keywords.md, ref/pl-cities.md): strony internetowe
// radom 590 · tworzenie stron internetowych radom 140; brief phrases without
// measured volume: projektowanie stron radom, strona internetowa radom,
// cennik. PAA: Jaka jest cena projektowania stron internetowych? (H2 + FAQ).
// Intent (ref/intent-check-pl-cities.md): website vs SEO 0 shared URLs → SEO is
// /pl/pozycjonowanie-stron-radom; «tworzenie stron», «projektowanie stron»,
// «strony internetowe» share 0–1 URLs → all carried by this one page.
// City part: smaller market, industrial and B2B firms, construction and
// services serving the surrounding powiaty; many firms with an old site, only
// a Facebook profile or Oferteo; clients comparing with Warsaw firms; who
// builds sites for Radom (a few local studios, national firms, Warsaw firms,
// Oferteo, freelancers).
// Prices: prosta strona 3000–6000 zł, pełna od 8500 zł, projekt w cenie.
// NOT on this page: pozycjonowanie (/pl/pozycjonowanie-stron-radom);
// e-commerce and online shops (not offered); Warsaw pages.
// Owner’s rules: remote work from Warsaw, no visits promised; never say there
// are no clients from the visitor’s city or industry.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychRadomPl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-radom",
  slug: "tworzenie-stron-internetowych-radom",
  title: "Tworzenie stron internetowych Radom",
  heading: "Tworzenie stron internetowych w Radomiu",
  excerpt:
    "Tworzenie stron internetowych w Radomiu dla firm usługowych, budowlanych i produkcyjnych: projekt graficzny w cenie, podstrony usług i miejscowości, telefon jednym dotknięciem i panel do samodzielnych zmian — jeden wykonawca, praca zdalna, cena znana z cennika.",
  seo: {
    metaTitle: "Strony internetowe Radom, projekt w cenie | Bandziuk",
    metaDescription:
      "Strony internetowe w Radomiu: projekt w cenie, podstrony usług i okolicznych miejscowości, szybkie na telefonie, czytelne dla Google i AI. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie w jednej cenie", "Od 3000 zł", "Bez abonamentu po starcie"],
  heroPhonePoints: ["Usługi i ceny", "Dojeżdżamy: Radom i okolice", "Realizacje", "Zadzwoń · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy z Radomia, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona dla firmy z Radomia: podstrony usług i miejscowości, katalog produktów lub realizacji, zapytania ofertowe, SEO lokalne, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową w Radomiu",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej usługi", text: "Zakres, ceny lub widełki, zdjęcia z Waszych zleceń" },
        { _key: k("o"), iconName: "map-pin", title: "Zasięg: Radom i okoliczne gminy", text: "Kozienice, Pionki, Zwoleń — jeśli tam pracujecie" },
        { _key: k("o"), iconName: "image", title: "Galeria realizacji z opisem", text: "Co, gdzie i w jakim czasie zostało zrobione" },
        { _key: k("o"), iconName: "phone", title: "Telefon i WhatsApp jednym dotknięciem", text: "Widoczne bez przewijania, na każdej podstronie" },
        { _key: k("o"), iconName: "file-text", title: "Panel do samodzielnych zmian", text: "Ceny, zdjęcia i godziny zmieniacie sami" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty tekstem, dane strukturalne firmy" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy z Radomia", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Usługi, miejscowości, katalog, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony lokalnych firm, które zaprojektowałem i zbudowałem",
      subtitle:
        "Dwie z tych stron to przebudowy, z jakimi często zaczyna firma z długim stażem: firma skanowania laserowego 3D i BIM przeszła z kreatora no-code na WordPress z zachowaniem projektu, a pracownia renowacji felg dostała nową stronę w WordPressie. Pozostałe to lokalne firmy z Warszawy — warsztat samochodowy, przechowalnia opon z jedną stroną i edytowalnym SEO oraz firma remontowo-inwestycyjna — których klienci, podobnie jak w Radomiu, chcą szybko zobaczyć usługę, ceny i kontakt.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy z Radomia",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie dziś w internecie?", options: ["Starą stronę sprzed lat", "Tylko profil na Facebooku", "Tylko wizytówkę Google", "Nic"] },
        { _key: k("z"), question: "Czym zajmuje się firma?", options: ["Usługi dla mieszkańców", "Budowa, remonty, instalacje", "Produkcja lub hurt", "Coś innego"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych w Radomiu prowadzę od początku do końca sam: rozmowa o firmie, lista podstron, projekt graficzny, wykonanie, teksty i uruchomienie. Dzięki temu cena jest znana z cennika, zanim napiszecie, a o każdej decyzji rozmawiacie z osobą, która ją wdraża. Pracuję z Warszawy, a z firmami z Radomia współpracuję online."),

        h2("Tworzenie stron internetowych w Radomiu: co obejmuje cena"),
        p("Niezależnie od wariantu dostajecie:"),
        li("projekt graficzny na telefon i komputer, oparty na Waszych zdjęciach i logo"),
        li("wykonanie w WordPressie albo Next.js, z panelem do samodzielnej edycji"),
        li("hosting z SSL, podpiętą domenę i skrzynkę na zapytania z formularza"),
        li("ustawienia pod Google: tytuł i opis każdej podstrony, znaczniki schema.org, podpięte GA4 i Search Console"),
        li("formularz z klauzulą RODO i baner cookies, który pyta o zgodę przed analityką"),
        p("Po uruchomieniu strona jest Wasza: domena, kod i treści. Nie ma u mnie abonamentu — płacicie tylko za zmiany, o które poprosicie, a hosting i domenę bezpośrednio dostawcy."),

        h2("Strony internetowe dla firm z Radomia: produkcja, budownictwo i usługi"),
        p("Radomskie firmy to w dużej części zakłady produkcyjne, hurtownie, firmy transportowe przy trasie S7, wykonawcy budowlani i instalatorzy, a do tego warsztaty, gabinety i usługi dla mieszkańców. Każda z tych grup potrzebuje od strony czegoś innego:"),
        li("zakład lub hurtownia — katalog produktów albo usług obróbki z parametrami, certyfikaty i formularz zapytania ofertowego dla klienta z innego miasta"),
        li("firma budowlana lub instalacyjna — rodzaje prac, galerię realizacji z opisem i jasną informację, do jakich miejscowości dojeżdża"),
        li("warsztat, gabinet, biuro rachunkowe — ceny lub widełki, godziny, dojazd i telefon na górze ekranu"),
        p(
          "Zakładom produkcyjnym poświęcam osobną stronę: ",
          link("strona dla firmy produkcyjnej", "/pl/strona-dla-firmy-produkcyjnej"),
          ". Firmy budowlane znajdą szczegóły na stronie ",
          link("strona internetowa dla firmy budowlanej", "/pl/strona-internetowa-dla-firmy-budowlanej"),
          ", a warsztaty — na stronie ",
          link("tworzenie stron dla warsztatów samochodowych", "/pl/tworzenie-stron-dla-warsztatow-samochodowych"),
          ".",
        ),

        h2("Strona dla firmy, która obsługuje Radom i okoliczne gminy"),
        p("Wiele radomskich firm pracuje dla klientów spoza miasta: z powiatów kozienickiego, zwoleńskiego, szydłowieckiego, z Pionek, Skaryszewa czy Iłży. Ci ludzie wpisują w Google nazwę swojej miejscowości albo po prostu „Radom” i usługę. Strona, która nie mówi, gdzie dojeżdżacie, traci ich na rzecz konkurenta, który to napisał."),
        p("Dlatego na stronie jest jasny opis obszaru działania, a przy pełnej stronie — podstrony dla miejscowości, z których naprawdę przychodzą zlecenia, z treścią o pracy w tej okolicy, a nie tylko z podmienioną nazwą. W samym Radomiu nazwy osiedli rzadziej trafiają do wyszukiwarki, więc wystarczy, że adres i dojazd są dobrze opisane na stronie kontaktu. Firmie, która jeździ do klientów, przydaje się też lista gmin z informacją, czy dojazd jest wliczony w cenę — to jedno z pierwszych pytań, jakie klient z okolicy zadaje przez telefon."),

        h2("Strony internetowe Radom: kto je robi i co wybrać"),
        p("Wyniki dla „strony internetowe Radom” i „tworzenie stron internetowych Radom” zajmuje kilka lokalnych studiów, ogólnopolskie firmy z podstroną dla Radomia, wykonawcy z Warszawy, portal Oferteo i ogłoszenia freelancerów. Wyniki dla „projektowanie stron” wyglądają jeszcze inaczej, więc jedno zapytanie nie pokazuje całego rynku."),
        h3("Kiedy wystarczy tani szablon albo kreator"),
        p("Gdy firma ma jedną usługę, klientów z polecenia i potrzebuje strony głównie po to, żeby podać telefon. Wtedy kreator z abonamentem może być rozsądnym wyborem i nie namawiam na więcej."),
        h3("Kiedy opłaca się strona robiona przez jednego wykonawcę"),
        p("Gdy macie kilka usług i chcecie, żeby każda była znajdowana osobno, gdy klienci pochodzą z kilku miejscowości, gdy potrzebny jest katalog albo zapytanie ofertowe. Rozmawiacie wtedy bezpośrednio z osobą, która projektuje i programuje, bez pośredników. Nie robię sklepów internetowych — buduję strony firmowe i usługowe."),

        h2("Strona radomskiej firmy w porównaniu z konkurencją z Warszawy"),
        p("Radom leży na tyle blisko stolicy, że klienci często porównują lokalną firmę z warszawską: cenę, termin, ale też to, jak wygląda strona. Część radomskich wykonawców sama przyjmuje zlecenia z Warszawy i tam strona jest pierwszym, a czasem jedynym dowodem, że firma jest solidna. Inwestor z Warszawy nie przyjedzie obejrzeć Waszego zakładu ani poprzednich realizacji — zobaczy je tylko na ekranie."),
        p("Nie chodzi o to, żeby udawać firmę z Warszawy, tylko żeby nie przegrywać na pierwszym wrażeniu. Wystarczą prawdziwe zdjęcia, konkretne opisy usług, podany zasięg i szybkie działanie na telefonie. Lokalna firma ma też przewagi, które warto napisać wprost: krótszy dojazd do klientów z regionu, znajomość okolicy, stały zespół. Jeśli zlecenia z Warszawy są ważne, przy pełnej stronie dostają osobną podstronę z realizacjami z tamtego rynku."),

        h2("Zakładka „Praca” na stronie firmy z Radomia: rekrutacja po polsku i po ukraińsku"),
        p("Radomskie zakłady, firmy budowlane i transportowe często szukają ludzi tak samo intensywnie jak klientów. Kandydat, który zobaczy ogłoszenie na portalu, i tak wchodzi na stronę firmy, żeby sprawdzić, czy to porządny pracodawca. Prosta zakładka „Praca” rozwiązuje kilka spraw naraz:"),
        li("aktualne stanowiska z opisem pracy, godzinami i miejscem — zakład, budowy w regionie, trasy"),
        li("zdjęcia hali, maszyn albo ekipy, a nie ilustracje ze stocku"),
        li("krótki formularz albo numer telefonu do osoby, która prowadzi rekrutację"),
        li("wersja ukraińska tej jednej podstrony, jeśli zatrudniacie pracowników z Ukrainy"),
        p("Ogłoszenia edytujecie sami w panelu, bez dzwonienia do mnie przy każdej zmianie."),

        h2("Projektowanie stron w Radomiu: co musi być na stronie głównej"),
        p("Projekt zaczynam od telefonu, bo tam klient zobaczy stronę najpierw. Na stronie głównej, bez przewijania, są cztery rzeczy:"),
        li("jedno zdanie, co robicie i gdzie — np. „Instalacje elektryczne i fotowoltaika, Radom i okolice”"),
        li("telefon i WhatsApp do dotknięcia kciukiem"),
        li("najważniejsze usługi jako przyciski prowadzące do podstron"),
        li("zdjęcie z prawdziwego zlecenia albo z Waszego zakładu, a nie ze stocku"),
        p("Niżej są ceny lub widełki, realizacje, opinie z wizytówki Google i obszar działania. Projekt uzgadniamy na podglądzie w przeglądarce, zanim powstanie reszta stron."),

        h2("Przebudowa starej strony albo strona zamiast profilu na Facebooku"),
        p(
          "Częsty punkt wyjścia w Radomiu to strona sprzed wielu lat, której nikt nie umie edytować, albo tylko profil na Facebooku i wpis na Oferteo. Przy przebudowie zachowuję domenę i adresy, które Google już zna, przekierowując je na nowe podstrony, i przenoszę dobre zdjęcia oraz opinie. Profil na Facebooku zostaje, ale to strona staje się miejscem, które należy do Was. Proces opisuję na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Strona internetowa, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p(
          "Klienci pytają asystentów AI o rzeczy takie jak „firma od dachów niedaleko Radomia” albo „hurtownia, która tnie blachę na wymiar”. Asystent wskaże radomską firmę tylko wtedy, gdy znajdzie o niej sprawdzalne informacje. Na stronach, które buduję, usługi, zasięg, ceny i godziny są zapisane tekstem, a dane strukturalne mówią to samo co wizytówka Google. Dalszą pracę nad widocznością w asystentach opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak powstaje strona dla firmy z Radomia: etapy pracy zdalnej"),
        ol("Krótka rozmowa wideo albo wiadomość: co robicie, dla kogo i skąd przychodzą klienci."),
        ol("Lista podstron i stała cena w widełkach z cennika, zanim cokolwiek zaczniemy."),
        ol("Projekt strony głównej i jednej podstrony usługi, uzgadniany na podglądzie."),
        ol("Teksty i wykonanie — piszę na podstawie rozmowy, Wy poprawiacie fakty."),
        ol("Start: domena, analityka, Search Console, połączenie z wizytówką Google i krótka instrukcja panelu."),
        p(
          "Prosta strona powstaje zwykle w dwa–cztery tygodnie, pełna w cztery–sześć. Strona po starcie ma podstawy SEO, ale pozycje dla fraz z Radomiem buduje się dłużej — to osobna usługa, opisana na stronie ",
          link("pozycjonowanie stron w Radomiu", "/pl/pozycjonowanie-stron-radom"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa w Radomiu: cennik"),
        li("Prosta strona radomskiej firmy — start, usługi, kontakt i formularz z klauzulą RODO: od 3000 do 6000 zł."),
        li("Pełna strona — podstrony usług i miejscowości, katalog produktów lub galeria realizacji, zapytania ofertowe, integracje, SEO lokalne: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie, a widełki są opublikowane w ",
          link("cenniku", "/pl/cennik"),
          ". Cenę obniżają własne teksty i zdjęcia albo start od mniejszej wersji, którą rozbudowujemy z czasem. Ogólny opis tego, jak buduję strony, znajdziecie na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strony internetowe w Radomiu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych w Radomiu?", "W cenniku są dwa progi: 3000–6000 zł za prostą stronę i od 8500 zł za pełną, z miejscowościami, katalogiem lub galerią i zapytaniem ofertowym; projekt graficzny wliczony. Widełki są w cenniku, a stałą cenę podaję po krótkim opisie firmy."],
          ["Ile trwa tworzenie strony internetowej dla firmy z Radomia?", "Prosta strona zwykle dwa–cztery tygodnie, pełna cztery–sześć. Najdłużej trwa zwykle zebranie zdjęć i informacji o usługach, dlatego warto przygotować je od razu."],
          ["Czy mała firma z Radomia potrzebuje strony, skoro ma Facebooka?", "Profil na Facebooku nie pokazuje się dobrze w Google i nie należy do Was. Strona z usługami, cenami i zasięgiem odpowiada klientom, którzy szukają w wyszukiwarce, i działa niezależnie od zmian w serwisach społecznościowych."],
          ["Czy strona może pokazać, że dojeżdżamy do okolicznych miejscowości?", "Tak. Obszar działania jest opisany na stronie, a przy pełnej stronie dostajecie podstrony dla miejscowości, z których naprawdę przychodzą zlecenia, z treścią o pracy w tej okolicy."],
          ["Czy pracujesz z firmami z Radomia zdalnie?", "Tak. Pracuję z Warszawy, a cały proces — rozmowa, projekt, uwagi i start — odbywa się online. Projekt oglądacie na podglądzie w przeglądarce, a poprawki zbieramy w jednym dokumencie."],
          ["Czy strona będzie widoczna w Mapach Google?", "Strona podaje te same dane co wizytówka Google i potwierdza je danymi strukturalnymi, co pomaga w Mapach. Samą wizytówką i pozycjami w Mapach zajmuję się w ramach pozycjonowania."],
          ["Do kogo należy gotowa strona?", "Do Was: domena, kod i treści. Możecie przenieść stronę do innego hostingu albo wykonawcy w dowolnym momencie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową w Radomiu: co mi wysłać"),
        p(
          "Wyślijcie nazwę firmy, link do obecnej strony, profilu na Facebooku lub wizytówki Google, listę usług i miejscowości, w których pracujecie, oraz kilka zdjęć z realizacji. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
