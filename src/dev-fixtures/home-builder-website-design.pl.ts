// Landing page fixture: Strona internetowa dla firmy budującej domy (PL), group
// «home-builder-website-design». New page. Market version for Polish firms
// building single-family houses (generalni wykonawcy, firmy stanu surowego,
// domy szkieletowe, mali deweloperzy osiedli domów) — not a translation of
// home-builder-website-design.en.
// Semantic core: ref/home-services.md has no measured PL phrases; heading
// phrases: «strona internetowa dla firmy budującej domy» (H1, H2s, cost H2),
// «strona dla firmy budującej domy» (metaTitle), «stan surowy / deweloperski
// / pod klucz» (package H2), «formularz wyceny budowy domu», «strona
// dewelopera domów jednorodzinnych», «kreator czy strona na zamówienie».
// Intent: ref/intent-check-home-services.md — «strona dla firmy budującej
// domy» vs «strona dla firmy budowlanej» 0 of 10 shared URLs, 1 shared domain
// → separate from /pl/strona-internetowa-dla-firmy-budowlanej (linked once as
// the page for general construction firms). SERP: builders’ own sites
// (dmddomy, e-hermer, domuly, vermont), webmentor, Instagram, Facebook.
// This page = how the site looks and works: first screen, package table that
// turns into a switch on a phone, quote form with a project PDF (RODO), case
// pages and weekly build reports added from a phone, «Jak budujemy» page
// (etapy, płatności vs transze, kierownik budowy, gwarancja i rękojmia),
// developer pages with a plan of the estate, statuses and price transparency
// (jawność cen 2025 — general, «uzgodnij z prawnikiem»), kreator / Oferteo
// vs custom, speed with heavy photos, AI-readable data, cost and process.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna od 8500 zł, projekt
// graficzny w cenie.
// NOT on this page: frazy, cennik jako treść pod Google, wizytówka, raporty
// zapytań (/pl/pozycjonowanie-strony-firmy-budujacej-domy — sibling); remonty and
// general construction (/pl/strona-internetowa-dla-firmy-budowlanej).
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s segment; no personal visits promised.
import { p, h2, li, ol, link, k } from "./pt";

export const homeBuilderWebsiteDesignPl = {
  lang: "pl",
  group: "home-builder-website-design",
  slug: "strona-internetowa-dla-firmy-budujacej-domy",
  title: "Strona internetowa dla firmy budującej domy",
  heading: "Strona internetowa dla firmy budującej domy",
  excerpt:
    "Projektuję i buduję strony internetowe dla firm budujących domy: porównanie pakietów od stanu surowego do domu pod klucz, formularz wyceny z załącznikiem projektu, realizacje z relacjami z budowy, podstrony osiedli z cenami i dane czytelne dla AI — projekt graficzny w cenie, od 3000 zł.",
  seo: {
    metaTitle: "Strona dla firmy budującej domy od 3000 zł | Bandziuk",
    metaDescription:
      "Strona internetowa dla firmy budującej domy: pakiety od stanu surowego do pod klucz, wycena projektu, realizacje, osiedla. Projekt w cenie, od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Realizacje dodajesz sam z telefonu"],
  heroPhonePoints: ["Wyceń swój projekt", "SSO · SSZ · deweloperski · pod klucz", "Dom 140 m² w Markach", "Zadzwoń · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy budującej domy, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona firmy budującej domy z tabelą pakietów, formularzem wyceny projektu, realizacjami i relacjami z budowy, podstronami osiedli, wersją językową i SEO lokalnym, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla firmy budującej domy",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Pakiety w jednej tabeli", text: "Stan surowy, deweloperski, pod klucz — co zawiera każdy" },
        { _key: k("o"), iconName: "message-circle", title: "Formularz wyceny z projektem", text: "PDF, metraż, działka, termin — zgodnie z RODO" },
        { _key: k("o"), iconName: "image", title: "Realizacje i relacje z budowy", text: "Etapy, zdjęcia i krótkie filmy dodawane z telefonu" },
        { _key: k("o"), iconName: "layers", title: "Podstrony osiedli i wolnych domów", text: "Plan osiedla, statusy, ceny z datą" },
        { _key: k("o"), iconName: "gauge", title: "Szybka na telefonie", text: "Duże zdjęcia bez czekania, także na działce" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Region, technologia, zakresy i ceny tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy budującej domy", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Pakiety, wycena projektu, realizacje, osiedla, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony firm remontowych, nieruchomości i usług z mojego portfolio",
      subtitle:
        "Dla warszawskiej firmy remontowo-inwestycyjnej zaprojektowałem stronę premium, na której remonty, wykończenia i projekty inwestycyjne pokazane są na dużych zdjęciach. Cyprus VIP Estates to zbudowany od zera serwis nieruchomości: katalog z filtrami i mapą, prezentacje wideo, zapytania trafiające do CRM i pięć wersji językowych — taki układ przydaje się deweloperowi z kilkoma osiedlami. ScanM2, firma skanowania laserowego 3D i BIM, zachowała swój projekt graficzny po przeniesieniu strony na WordPressa, a ruch organiczny wzrósł 29 razy. Felgilab, warszawski warsztat renowacji felg, dostał nową stronę na WordPressie z podstronami usług i cen, a warsztat samochodowy z Warszawy — podstrony usług i układ wygodniejszy na telefonie. Firma budująca domy bierze z nich to, co się sprawdziło: prace pokazane na dużych zdjęciach, czytelne podstrony usług i krótką drogę od oglądania do zapytania.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy budującej domy",
      subtitle: "Odpiszę najpóźniej następnego dnia roboczego z listą podstron i stałą kwotą z widełek cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co już masz w internecie?", options: ["Brak strony", "Profil na Facebooku i Oferteo", "Stronę z kreatora", "Starą stronę na WordPressie"] },
        { _key: k("z"), question: "Co strona ma przynosić najpierw?", options: ["Zapytania o dom pod klucz", "Zapytania o stan surowy", "Kupujących domy z mojego osiedla", "Klientów, którzy nie wybierają tylko po cenie"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla firm budujących domy — generalnych wykonawców, firm stanu surowego, wykonawców domów szkieletowych i małych deweloperów osiedli. Za wygląd, kod, teksty i start strony odpowiada jedna osoba, a kwotę znasz, zanim zaczniemy. Inwestor wybiera wykonawcę na rok budowy i kilkaset tysięcy złotych, więc zanim zadzwoni, ogląda Twoją stronę kilka razy — wieczorem, na telefonie, razem z rodziną."),

        h2("Strona internetowa dla firmy budującej domy: co inwestor sprawdza, zanim zadzwoni"),
        p("Pierwszy ekran odpowiada na pytania, z którymi inwestor wchodzi na stronę:"),
        li("gdzie budujesz — powiaty, gminy albo promień od bazy"),
        li("co budujesz — w jakiej technologii i do jakiego stanu"),
        li("czy można Ci powierzyć oszczędności — lata na rynku, oddane domy, ocena z wizytówki Google"),
        li("co dalej — przycisk „Wyceń swój projekt”, telefon i WhatsApp jednym dotknięciem"),
        p("Wizualizacja domu z katalogu na całym ekranie wygląda ładnie, ale pokazuje cudzy projekt, a nie Twoją pracę. Zdjęcie domu, który postawiłeś, podpisane nazwą miejscowości, robi więcej. Ogólnik w rodzaju „Budujemy marzenia” niczego tu nie wyjaśnia; zdanie „Budujemy domy murowane pod klucz w powiecie piaseczyńskim od 2009 roku” wyjaśnia od razu trzy rzeczy."),

        h2("Stan surowy, deweloperski czy pod klucz: tabela pakietów na stronie wykonawcy domów"),
        p("Inwestor porównuje oferty kilku firm, a każda opisuje zakresy innymi słowami. Tabela pakietów — kolumny dla stanu surowego otwartego, zamkniętego, deweloperskiego i pod klucz, wiersze dla poszczególnych prac — oszczędza mu godzin porównywania, a Tobie telefonów z tymi samymi pytaniami. Na telefonie tabela zamienia się w przełącznik pakietów, żeby nie trzeba było przewijać jej w bok."),
        p("Pod tabelą stoi to, czego nie obejmuje żaden pakiet — przyłącza, ogrodzenie, zagospodarowanie terenu — oraz przycisk wyceny, który otwiera formularz z wybranym już pakietem."),

        h2("Formularz wyceny budowy domu: projekt, działka, metraż i termin"),
        p("Do wyceny potrzebujesz kilku informacji i najlepiej, żeby przyszły w pierwszej wiadomości. Formularz pyta krótko:"),
        li("projekt — nazwa z katalogu albo plik PDF z rzutami"),
        li("metraż i liczba kondygnacji"),
        li("miejscowość działki i to, czy jest już pozwolenie albo zgłoszenie"),
        li("zakres: stan surowy, deweloperski czy pod klucz"),
        li("planowany termin startu i czy budowa będzie na kredyt"),
        li("telefon albo e-mail"),
        p("Zgłoszenia z załącznikami trafiają na Twoją skrzynkę albo do systemu, w którym prowadzisz zapytania. Formularz ma klauzulę informacyjną RODO, a narzędzia statystyczne startują dopiero wtedy, gdy odwiedzający zaakceptuje cookies. Jeśli chcesz kalkulatora, liczy on widełki z Twoich stawek i wyraźnie mówi, że dokładną cenę podasz po wycenie projektu."),

        h2("Realizacje i relacje z budowy na stronie firmy budującej domy"),
        p("Inwestor chce zobaczyć nie tylko gotowy dom, ale też to, jak budujesz: zbrojenie fundamentu, równe mury, porządek na placu. Każda realizacja ma własną podstronę ze zdjęciami gotowego domu, galerią etapów, krótkimi filmami z telefonu, metrażem, technologią, czasem budowy i — jeśli inwestor się zgodził — kilkoma jego zdaniami."),
        p("Trwające budowy pokazujesz jako relacje: co tydzień kilka zdjęć z opisem, dodanych z telefonu w panelu strony. To najmocniejszy dowód, że firma ma ludzi i pracuje teraz, a nie tylko miała kiedyś dobry rok."),

        h2("Podstrona „Jak budujemy” na stronie wykonawcy: harmonogram, płatności etapami i gwarancja"),
        p("Inwestor boi się dwóch rzeczy: że budowa się przeciągnie i że kosztorys urośnie. Podstrona o procesie odpowiada na obie, zanim padną na spotkaniu:"),
        li("kolejne etapy z typowym czasem — od adaptacji projektu i formalności, przez fundamenty i stan surowy, do odbioru"),
        li("płatności po etapach, z widocznym powiązaniem z transzami kredytu"),
        li("kto prowadzi budowę: kierownik budowy, brygadzista, jeden numer kontaktowy"),
        li("gwarancja i rękojmia w prostych słowach oraz ubezpieczenie OC firmy"),
        li("wzór umowy do pobrania, jeśli chcesz go udostępnić"),

        h2("Strona dewelopera domów jednorodzinnych: plan osiedla, wolne domy i jawne ceny"),
        p("Mały deweloper sprzedaje gotowe domy i bliźniaki, więc jego strona działa jak katalog. Plan osiedla pokazuje działki i domy ze statusem — wolny, zarezerwowany, sprzedany — a po dotknięciu: metraż domu i działki, rzut, standard wykończenia, cenę i termin oddania. Na telefonie obok planu jest lista do przewijania, bo mały plan trudno trafić palcem."),
        p("Przepisy o jawności cen, obowiązujące od 2025 roku, nakładają na deweloperów obowiązek publikowania cen ofertowych, także na ich stronach internetowych. Strona ma na to stałe miejsce przy każdym domu, a dokładny zakres obowiązków uzgodnij z prawnikiem."),

        h2("Zaufanie do firmy budującej domy: dane firmy, ekipa i opinie przy przyciskach kontaktu"),
        p("Inwestor oddaje firmie budowlanej oszczędności i kredyt, a w sieci czytał historie o ekipach, które zniknęły po zaliczce. Szuka więc dowodów, że Twoja firma będzie istnieć także za pięć lat, kiedy zgłosi usterkę. W projekcie stoją one tuż przy przyciskach kontaktu, nie na dole strony:"),
        li("nazwa firmy, NIP, adres bazy lub biura i rok założenia"),
        li("zdjęcia ekipy, brygadzistów i sprzętu zamiast zdjęć ze stocku"),
        li("certyfikaty producentów systemów i technologii — tylko te, które naprawdę masz"),
        li("ocena i kilka opinii z wizytówki Google, z podanym źródłem i datą"),
        p("Krótki film, w którym właściciel mówi, jak firma prowadzi budowę, często przekonuje bardziej niż cały akapit o doświadczeniu."),

        h2("Strona z kreatora, profil na Oferteo czy strona na zamówienie dla firmy budującej domy"),
        p("Profil na Oferteo i strona na Facebooku wystarczają, gdy klienci przychodzą z polecenia, a Ty budujesz kilka domów rocznie w jednej gminie. Kreator z szablonem budowlanym da szybko wizytówkę w sieci za niewielki abonament. Ograniczenia pojawiają się, gdy potrzebujesz tabeli pakietów, formularza z załącznikiem projektu, relacji z budowy dodawanych z telefonu albo planu osiedla ze statusami — wtedy szablon trzeba obchodzić kawałek po kawałku."),
        p("Strona na zamówienie kosztuje więcej na początku, ale od dnia uruchomienia domena, hosting, kod i treści są Twoją własnością. Co miesiąc płacisz tylko za hosting i domenę, mnie — nic."),

        h2("Strona firmy budującej domy na telefonie: duże zdjęcia bez czekania"),
        p("Strona wykonawcy domów to głównie zdjęcia: realizacje, etapy, wizualizacje. Inwestor ogląda je na telefonie, czasem na działce przy słabym zasięgu. Cel to najważniejsza treść podstrony widoczna szybciej niż w 2,5 sekundy, bo powyżej tego progu Google ocenia stronę jako wolną. Służą temu zdjęcia przycięte do rozmiaru ekranu w formatach WebP lub AVIF, galerie, które wczytują kolejne kadry dopiero przy przewijaniu, i filmy uruchamiane dotknięciem. Jeśli budujesz także dla obcokrajowców mieszkających w Polsce, strona dostaje wersję angielską lub ukraińską z osobnymi adresami podstron."),

        h2("Strona firmy budującej domy, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Część inwestorów szuka wykonawcy, pisząc do ChatGPT, Perplexity albo czytając podsumowania AI w Google: „firma budująca domy szkieletowe pod Poznaniem”, „wykonawca stanu deweloperskiego w powiecie wołomińskim”. Asystent może polecić tylko firmę, o której coś przeczyta. Dlatego region, technologie, zakresy pakietów, ceny z datą, gwarancja i dane kontaktowe są zapisane tekstem — nie w grafikach i nie w PDF — zgodnie z wizytówką Google, a dane strukturalne opisują firmę i jej usługi."),
        p(
          "Widoczność w odpowiedziach AI to dalsza praca, opisana na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ". O tym, jak strona zdobywa pozycje w Google na frazy z Twojego regionu, piszę na stronie ",
          link("pozycjonowanie firmy budującej domy", "/pl/pozycjonowanie-strony-firmy-budujacej-domy"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla firmy budującej domy"),
        p("Cena zawsze zawiera projekt graficzny:"),
        li("Prosta strona — strona główna, zakresy prac, kilka realizacji, „Jak budujemy” i kontakt z formularzem wyceny: od 3000 do 6000 zł."),
        li("Rozbudowana strona — tabela pakietów, formularz z załącznikiem projektu, realizacje i relacje z budowy, podstrony osiedli, druga wersja językowa, podstawy SEO lokalnego: od 8500 zł."),
        ol("Brief: region, technologie, zakresy i kilka realizacji ze zdjęciami."),
        ol("Propozycja podstron i cena, która się nie zmienia."),
        ol("Projekt w wersji na telefon: strona główna, tabela pakietów, jedna realizacja."),
        ol("Programowanie, teksty, start strony, podłączenie Search Console i statystyk."),
        p(
          "Wszystkie stawki są w ",
          link("cenniku", "/pl/cennik"),
          ", a jak pracuję nad stronami, wyjaśniam na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ". Firmy remontowe i wykonawcy innych robót budowlanych znajdą swoją stronę: ",
          link("strona internetowa dla firmy budowlanej", "/pl/strona-internetowa-dla-firmy-budowlanej"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla firmy budującej domy: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla firmy budującej domy?", "Za prostą stronę zapłacisz od 3000 do 6000 zł, za rozbudowaną — z tabelą pakietów, wyceną projektu, realizacjami i osiedlami — od 8500 zł. Projekt graficzny zawsze wchodzi w cenę. Opisz krótko firmę, a podam stałą kwotę."],
          ["Ile trwa stworzenie strony dla firmy budującej domy?", "Zwykle dwa–cztery tygodnie dla prostej strony i cztery–sześć dla rozbudowanej, licząc od briefu. Termin najczęściej wydłużają brakujące zdjęcia realizacji."],
          ["Czy mogę sam dodawać realizacje i zdjęcia z budowy?", "Tak. Nową realizację albo tygodniową relację dodajesz z telefonu w panelu strony: zdjęcia, kilka zdań, miejscowość i etap. Układ strony pilnuje, żeby wyglądało to tak samo jak reszta."],
          ["Jak pokazać ceny, skoro każdy dom jest inny?", "Jako przedział za m² dla każdego pakietu, z datą aktualizacji i krótkim wyjaśnieniem, co go przesuwa w górę lub w dół. Inwestor od razu sprawdza, czy mieści się w budżecie, a konkretną kwotę dostaje po wycenie projektu."],
          ["Czy formularz może przyjmować projekt domu w PDF?", "Tak. Inwestor dołącza plik z rzutami albo podaje nazwę projektu z katalogu, a zgłoszenie z załącznikiem trafia na Twoją skrzynkę. Przy formularzu jest klauzula RODO."],
          ["Czy deweloper domów musi publikować ceny na stronie?", "Przepisy o jawności cen z 2025 roku nakładają na deweloperów obowiązek publikowania cen ofertowych, także na stronie internetowej. Strona ma na nie stałe miejsce przy każdym domu; szczegóły obowiązku uzgodnij z prawnikiem."],
          ["Czy robisz strony dla firm budowlanych spoza Warszawy?", "Tak, lokalizacja firmy nie gra roli. Cała współpraca odbywa się online — po polsku, angielsku lub rosyjsku: brief i poprawki omawiamy na wideo, a uwagi do projektu zostawiasz w udostępnionym pliku."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla firmy budującej domy: co mi wysłać"),
        p(
          "Wyślij nazwę firmy, link do obecnej strony albo profilu na Facebooku, region, w którym budujesz, technologię i zakresy, kilka realizacji ze zdjęciami oraz dwie–trzy strony firm budowlanych, które Ci się podobają. Jeśli sprzedajesz domy na własnym osiedlu, dołącz plan osiedla. W odpowiedzi dostaniesz propozycję podstron i stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
