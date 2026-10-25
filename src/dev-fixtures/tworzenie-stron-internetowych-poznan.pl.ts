// Landing page fixture: Tworzenie stron internetowych w Poznaniu (PL), group
// «tworzenie-stron-internetowych-poznan». City page, stage 3 pilot (BRIEF.md).
// Phrases (ref/city-keywords.md, ref/pl-cities.md, volumes/month, Poland):
// strona internetowa poznań 720 · tworzenie stron internetowych poznań 390 ·
// agencja interaktywna poznań 260 · agencja kreatywna poznań 70 · tworzenie
// stron internetowych poznań cennik 10 · projektowanie stron poznań (intent
// check, volume not in core). Required by the brief: strony internetowe Poznań,
// projektowanie stron Poznań, cennik. PAA: Jaka jest cena projektowania stron
// internetowych? (H2 + FAQ).
// Intent (ref/intent-check-pl-cities.md): «tworzenie stron internetowych
// poznań» vs «pozycjonowanie stron poznań» 0 of 10 shared URLs → two pages;
// «tworzenie» vs «projektowanie stron poznań» 0 shared — fragmented SERP of
// local studios, agencies and Oferteo; one page carries both phrases in
// H2/FAQ.
// City part: trade fairs (Międzynarodowe Targi Poznańskie) and exhibitors’
// sites, logistics and production around the city, services for residents;
// districts and gminy (Jeżyce, Grunwald, Rataje, Swarzędz, Komorniki, Kórnik)
// and Wielkopolska towns in the site structure; German, English and Ukrainian
// versions; who competes in the local SERP.
// NOT on this page: pozycjonowanie (/pl/pozycjonowanie-stron-poznan); sklepy
// internetowe and e-commerce (not offered); multilingual builds in general
// (/pl/oferty/tworzenie-stron-wielojezycznych, not linked here); Warsaw pages.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychPoznanPl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-poznan",
  slug: "tworzenie-stron-internetowych-poznan",
  title: "Tworzenie stron internetowych Poznań",
  heading: "Tworzenie stron internetowych w Poznaniu",
  excerpt:
    "Tworzenie stron internetowych w Poznaniu dla firm usługowych, producentów i firm logistycznych: projekt graficzny w cenie, podstrony usług, dzielnic i gmin, wersja niemiecka lub angielska dla partnerów z targów i panel do samodzielnej edycji — od 3000 zł, zdalnie, z jedną osobą od projektu do uruchomienia.",
  seo: {
    metaTitle: "Strony internetowe Poznań: projekt i wykonanie | Bandziuk",
    metaDescription:
      "Strony internetowe dla firm z Poznania: projekt graficzny w cenie, podstrony usług i dzielnic, wersje językowe, szybkie na telefonie. Od 3000 zł, cennik online.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Firmy z Poznania i okolic"],
  heroPhonePoints: ["Zadzwoń · WhatsApp", "Usługi i ceny", "Dojazd: Poznań i gminy", "Wersja DE · EN"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy z Poznania, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona z podstronami usług, dzielnic i gmin, wersjami językowymi, formularzem zapytań i integracjami, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową w Poznaniu",
      items: [
        { _key: k("o"), iconName: "image", title: "Projekt graficzny w cenie strony", text: "Na telefon i komputer, z Waszymi zdjęciami zamiast stocku" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług, dzielnic i gmin", text: "Poznań, Swarzędz, Luboń, Komorniki — tam, gdzie pracujecie" },
        { _key: k("o"), iconName: "message-circle", title: "Wersja niemiecka lub angielska", text: "Dla partnerów z targów, studentów i klientów z zagranicy" },
        { _key: k("o"), iconName: "phone", title: "Telefon i WhatsApp jednym dotknięciem", text: "Na każdej podstronie, bez szukania w stopce" },
        { _key: k("o"), iconName: "file-text", title: "Panel do samodzielnej edycji", text: "Ceny, godziny, zdjęcia i nowe podstrony bez programisty" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty tekstem, dane strukturalne firmy" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmowa", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Usługi, dzielnice, języki, integracje", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Strony lokalnych firm usługowych z Warszawy — firmy remontowo-inwestycyjnej, warsztatu samochodowego, pracowni renowacji felg i przechowalni opon — oraz wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów. Każdą zaprojektowałem i zbudowałem sam, tak jak buduję strony dla firm z Poznania: z myślą o telefonach od klientów z konkretnej okolicy i o szybkim działaniu na telefonie.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy z Poznania",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Brak strony", "Stronę z kreatora", "Starą stronę na WordPressie", "Tylko wizytówkę Google lub profil na Facebooku"] },
        { _key: k("z"), question: "Kim są Wasi klienci?", options: ["Mieszkańcy Poznania i okolic", "Firmy z całej Polski", "Klienci z Polski i zagranicy", "Goście i wystawcy targów"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych w Poznaniu wykonuję od początku do końca sam: układ podstron, projekt graficzny, teksty, wykonanie w Next.js albo WordPressie i uruchomienie. Mieszkam i pracuję w Warszawie, a z poznańskimi firmami współpracuję zdalnie — rozmowy wideo, projekt do komentowania w przeglądarce i jasno opisane etapy. Cenę znacie przed startem, bo widełki są opublikowane w cenniku."),

        h2("Strona internetowa dla firmy z Poznania: co dostajecie w cenie"),
        p("W obu wariantach cenowych dostajecie projekt graficzny na telefon i komputer, hosting z SSL, podpiętą domenę, tytuły i opisy podstron, dane strukturalne, Google Analytics 4 z banerem zgód, Search Console i formularz zgodny z RODO. Strona ładuje się szybko na telefonie, a teksty, ceny i zdjęcia zmieniacie sami w prostym panelu."),
        p("Nie płacicie mi abonamentu po uruchomieniu. Płacicie tylko dostawcy hostingu i domeny, a mnie wyłącznie za zmiany, które sami zlecicie. Domena, kod i treści należą do Was."),

        h2("Strony internetowe w Poznaniu dla wystawców targów, producentów i firm logistycznych"),
        p("Poznań to miasto targów, handlu i logistyki. Wiele firm z miasta i z gmin wokół niego sprzedaje innym firmom: produkuje, magazynuje, przewozi, hurtowo handluje. Ich strona ma inne zadanie niż strona salonu kosmetycznego. Klient B2B wraca na nią kilka razy, przekazuje link szefowi, porównuje dostawców i szuka konkretów."),
        h3("Czego potrzebuje strona firmy, która wystawia się na Międzynarodowych Targach Poznańskich"),
        li("podstrony dla każdej grupy produktów lub usług z parametrami zapisanymi tekstem, a nie tylko w katalogu PDF"),
        li("wersji angielskiej, a przy partnerach z Niemiec — niemieckiej, z tą samą treścią co polska"),
        li("kontaktu do konkretnej osoby, która odpowie na zapytanie po targach"),
        li("adresu strony, który da się wydrukować na stoisku i zapamiętać z kodu QR"),
        p(
          "Strony dla producentów opisuję dokładniej na stronie ",
          link("strona internetowa dla firmy produkcyjnej", "/pl/strona-dla-firmy-produkcyjnej"),
          ".",
        ),

        h2("Strona internetowa dla firmy usługowej z Poznania i okolic"),
        p("Druga duża grupa to firmy, które obsługują mieszkańców: gabinety, warsztaty, biura rachunkowe, szkoły językowe, ekipy remontowe. Wokół Poznania szybko rosną osiedla w Komornikach, Suchym Lesie, Swarzędzu czy Kórniku, więc firmy remontowe i wykończeniowe mają tam wielu klientów. Dla takich firm strona jest pierwszym miejscem, w którym klient sprawdza ceny, zdjęcia z realizacji i to, czy dojeżdżacie w jego okolicę."),
        p(
          "Firmy remontowe i budowlane znajdą więcej na stronie ",
          link("strona internetowa dla firmy budowlanej", "/pl/strona-internetowa-dla-firmy-budowlanej"),
          ".",
        ),

        h2("Poznań, gminy wokół miasta i Wielkopolska w strukturze strony"),
        p("Ludzie w Poznaniu wpisują w Google dzielnicę albo gminę: „elektryk Grunwald”, „pediatra Jeżyce”, „okna Swarzędz”, „biuro rachunkowe Luboń”. Firma, która pracuje w kilku takich miejscach, dostaje na stronie podstrony obszarów działania — każdą z prawdziwą treścią: jakie usługi wykonujecie w tej okolicy, ile trwa dojazd, jakie realizacje tam macie. Kopie tej samej strony z podmienioną nazwą miejscowości nie działają i nie robię ich."),
        p("Jeśli obsługujecie całą Wielkopolskę — Gniezno, Leszno, Konin, Ostrów Wielkopolski — strona pokazuje to na mapie zasięgu i w opisie dojazdu albo wysyłki, a podstrony dla miast powstają tam, gdzie macie realnych klientów."),

        h2("Wersje językowe strony firmy z Poznania: niemiecka, angielska, ukraińska"),
        p("Poznań ma wielu studentów z zagranicy, a firmy logistyczne i produkcyjne z okolic zatrudniają sporo osób z Ukrainy. Szkoła językowa, gabinet, biuro rachunkowe albo firma przeprowadzkowa, która obsługuje takich klientów, zyskuje na tym, że mówi do nich w ich języku na stronie, a nie tylko przez telefon. Z kolei firmy, które sprzedają do Niemiec, potrzebują wersji niemieckiej napisanej tak, jak piszą niemieckie firmy — z danymi firmy, warunkami dostawy i osobą kontaktową."),
        li("każda wersja ma własne adresy podstron i oznaczenia hreflang, żeby Google pokazywał właściwy język"),
        li("tłumaczę te podstrony, z których naprawdę korzystają cudzoziemcy, a nie całą stronę na siłę"),
        li("formularz i klauzula RODO są w tym samym języku co podstrona"),
        p("Wielojęzyczny serwis agencji edukacyjnej z portfolio działa właśnie tak: osobne wersje dla różnych krajów i języków, każda z treścią dla swojego odbiorcy."),

        h2("Kreator stron czy strona na zamówienie dla firmy z Poznania"),
        p("Kreator z miesięcznym abonamentem pozwala uruchomić prostą wizytówkę w weekend i dla części firm to rozsądny wybór — zwłaszcza gdy klienci przychodzą z polecenia, a usługa jest jedna. Strona na zamówienie opłaca się, gdy chcecie, żeby każda usługa i każda gmina miała własną podstronę w Google, potrzebujecie wersji językowych, katalogu produktów albo połączenia z systemem rezerwacji lub CRM. Wtedy abonament kreatora rośnie z każdą funkcją, a przeniesienie strony z kreatora oznacza w praktyce budowę od nowa. Lepiej zdecydować o tym na początku niż po kilku latach płacenia."),

        h2("Tworzenie stron internetowych Poznań: agencja interaktywna, studio czy jeden wykonawca"),
        p("Gdy wpiszecie w Google tworzenie stron w Poznaniu, zobaczycie lokalne studia, agencje interaktywne i kreatywne, ogólnopolskie firmy z podstroną dla Poznania oraz Oferteo, gdzie po wysłaniu zapytania dostaje się kilka wycen. Wyniki dla „projektowanie stron Poznań” wyglądają zupełnie inaczej niż dla „tworzenie stron”, więc trudno porównać oferty po samej pozycji w Google."),
        p("Agencja interaktywna ma sens, gdy razem ze stroną potrzebujecie kampanii, identyfikacji wizualnej i mediów społecznościowych. Jeśli potrzebna jest dobra strona, która przyprowadza zapytania, jeden wykonawca oznacza mniej spotkań, krótszą drogę decyzji i cenę bez kosztów obsługi klienta. Ja projektuję, programuję i piszę teksty. Nie robię sklepów internetowych, logo ani kampanii reklamowych."),

        h2("Projektowanie stron w Poznaniu: projekt graficzny w cenie strony"),
        p("Projekt nie jest u mnie osobną usługą. Zaczynam od wersji na telefon, bo z niego wchodzi większość klientów firm usługowych, i od dwóch widoków: strony głównej oraz podstrony usługi. Po Waszych uwagach powstaje reszta. Używam Waszych zdjęć — lokalu, zespołu, realizacji — bo klient w Poznaniu chce zobaczyć, z kim ma do czynienia. Kolory i fonty biorę z logo albo szyldu, jeśli je macie."),
        p("Na pierwszym ekranie strony głównej musi się zmieścić to, po co klient przyszedł: co robicie, gdzie w Poznaniu albo w jakich gminach i jak się z Wami skontaktować. Dalej są usługi z cenami lub widełkami, realizacje, opinie z wizytówki Google i dojazd. Przyciski są duże, tekst czytelny w słońcu na przystanku, a formularz ma tylko te pola, które naprawdę są potrzebne do odpowiedzi."),

        h2("Strona internetowa, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Klienci pytają ChatGPT, Perplexity albo podsumowania AI w Google o firmy w Poznaniu: „warsztat na Ratajach, który naprawia hybrydy”, „hurtownia opakowań pod Poznaniem z dostawą”. Asystent poleca firmy, o których może przeczytać fakty. Dlatego usługi, obszar działania, godziny i języki obsługi zapisuję tekstem, a nie na grafikach, a dane strukturalne opisują firmę tak samo jak wizytówka Google."),
        p(
          "Dalsza praca nad widocznością w asystentach to osobna usługa, opisana na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ". Widoczność w wyszukiwarce opisuję na stronie ",
          link("pozycjonowanie stron w Poznaniu", "/pl/pozycjonowanie-stron-poznan"),
          ".",
        ),

        h2("Przebudowa starej strony poznańskiej firmy bez utraty pozycji w Google"),
        p(
          "Wiele firm ma stronę sprzed lat, która źle wygląda na telefonie albo której nikt nie umie edytować. Nowa wersja zachowuje domenę i podstrony, które Google już wyświetla, a każdy stary adres dostaje przekierowanie. Po uruchomieniu sprawdzam Search Console, żeby nic nie wypadło z wyników. Proces opisuję na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Jak powstaje strona dla firmy z Poznania przy współpracy zdalnej"),
        ol("Krótki brief: co sprzedajecie, komu, gdzie i jakie pytania zadają klienci. Wystarczy wiadomość głosowa albo rozmowa wideo."),
        ol("Lista podstron i stała cena w widełkach z cennika."),
        ol("Projekt strony głównej i jednej podstrony usługi, uzgadniany z Wami w przeglądarce."),
        ol("Wykonanie i teksty; Wy sprawdzacie fakty, ceny i nazwy usług."),
        ol("Uruchomienie z domeną, analityką i Search Console oraz krótka instrukcja edycji."),

        h2("Tworzenie stron internetowych Poznań: cennik i cena projektowania strony"),
        li("Prosta strona dla poznańskiej firmy — strona główna, podstrony najważniejszych usług, zespół, dojazd i formularz z klauzulą RODO: od 3000 do 6000 zł."),
        li("Pełna strona — podstrony usług, dzielnic i gmin, wersje językowe, rozbudowany formularz, integracje: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie w obu przypadkach, a widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Jak pracuję przy stronach dla firm z całej Polski, opisuję na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Tworzenie stron internetowych w Poznaniu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych w Poznaniu?", "Prosta strona kosztuje od 3000 do 6000 zł, pełna strona z podstronami usług, dzielnic i wersjami językowymi od 8500 zł. Projekt graficzny jest wliczony w cenę. Po krótkim opisie firmy podaję stałą kwotę."],
          ["Ile trwa stworzenie strony internetowej?", "Na prostą stronę trzeba zwykle dwóch–czterech tygodni, a na pełną z podstronami gmin i wersją niemiecką około czterech–sześciu. Termin skraca się, gdy zdjęcia i informacje o usługach są gotowe na starcie."],
          ["Czy strona może mieć wersję niemiecką dla partnerów z targów?", "Tak. Każda wersja językowa ma własne adresy podstron i oznaczenia dla Google, a tłumaczone są przede wszystkim podstrony produktów i kontakt, z których korzystają zagraniczni klienci."],
          ["Kreator stron czy strona na zamówienie?", "Kreator wystarczy przy jednej–dwóch usługach i klientach z polecenia. Strona na zamówienie opłaca się, gdy chcecie być znajdowani w Google na kilka usług i w kilku miejscowościach, potrzebujecie wersji językowych albo integracji."],
          ["Czy sami możemy zmieniać treści na stronie?", "Tak. Ceny, godziny, zdjęcia, teksty i nowe podstrony edytuje się w prostym panelu, także z telefonu."],
          ["Do kogo należy strona?", "Do Was: domena, kod i treści. Możecie w każdej chwili przenieść stronę do innego hostingu albo wykonawcy."],
          ["Czy firma z Poznania może zamówić stronę u wykonawcy z Warszawy?", "Tak. Cała współpraca odbywa się online: rozmowy wideo, projekt do komentowania w przeglądarce i uzgodnione etapy. Treści i podstrony obszarów działania przygotowuję dla Poznania i okolic."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową w Poznaniu: co mi wysłać"),
        p(
          "Wyślijcie nazwę firmy, link do obecnej strony albo wizytówki Google, listę usług lub produktów, dzielnice i miejscowości, w których pracujecie, oraz języki, w których rozmawiacie z klientami. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
