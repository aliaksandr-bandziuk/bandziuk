// Landing page fixture: Strona internetowa dla firmy produkcyjnej (PL), group
// «manufacturing-company» — the PL version of the existing EN
// /manufacturing-company-website and RU /ru/sait-dlya-proizvodstvennoy-kompanii
// (group ≠ EN slug by design). Market version for Polish producers and
// subcontractors, not a translation of the EN page; it does not repeat the EN
// thesis «Your buyer already knows what they need».
// Semantic core (BRIEF.md): «strona internetowa dla firmy produkcyjnej»,
// «strona dla producenta», «strona internetowa dla zakładu produkcyjnego» —
// no measured volume; SERP entirely studios (prograffing, 8pietro, prodo,
// codescriptum, businesshero, webdkw) → buyers’ demand. No PL PAA.
// Intent (ref/intent-check-nonprofits-manufacturers.md): «strona internetowa
// dla firmy produkcyjnej» vs «pozycjonowanie firmy produkcyjnej» 0 shared
// URLs → separate pages. This page = what the site contains and how it is
// built (website development + design); no paragraph is shared with
// /pl/pozycjonowanie-strony-firmy-produkcyjnej.
// Angle: oferta i możliwości produkcyjne, park maszynowy as a table, materiały,
// certyfikaty i dział jakości, karty techniczne do pobrania, formularz
// zapytania ofertowego z rysunkiem (STEP, DXF, PDF) and NDA, wersje językowe
// DE/EN built for buyers, real plant photography, praca / rekrutacja, RODO,
// edycja treści, PLN prices.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna strona od 8500 zł,
// projekt graficzny w cenie.
// NOT on this page: pozycjonowanie, frazy techniczne and German keywords,
// Europages, measuring zapytania from search
// (/pl/pozycjonowanie-strony-firmy-produkcyjnej); one industry in depth
// (/pl/oferty/strona-internetowa-dla-producenta-bielizny, linked once);
// multilingual builds in general (/pl/oferty/tworzenie-stron-wielojezycznych).
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s segment.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const manufacturingCompanyPl = {
  lang: "pl",
  group: "manufacturing-company",
  slug: "strona-internetowa-dla-firmy-produkcyjnej",
  title: "Strona internetowa dla firmy produkcyjnej",
  heading: "Strona internetowa dla firmy produkcyjnej",
  excerpt:
    "Tworzę strony internetowe dla firm produkcyjnych i podwykonawców: możliwości produkcyjne, park maszynowy w tabeli, materiały, certyfikaty, karty techniczne do pobrania, formularz zapytania ofertowego z rysunkiem i wersje niemiecka oraz angielska — projekt i wykonanie za cenę z cennika.",
  seo: {
    metaTitle: "Strona dla producenta: projekt i wykonanie | Bandziuk",
    metaDescription:
      "Strona internetowa dla firmy produkcyjnej: park maszynowy, materiały, certyfikaty, karty techniczne, zapytanie z rysunkiem, wersje DE i EN. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Wersje PL · EN · DE"],
  heroPhonePoints: ["Park maszynowy", "Karty techniczne PDF", "Wyślij rysunek STEP", "Wersje PL · EN · DE"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy produkcyjnej, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona firmy produkcyjnej z podstronami procesów, parkiem maszynowym, kartami technicznymi, formularzem zapytania z załącznikiem i wersjami językowymi, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową dla firmy produkcyjnej",
      items: [
        { _key: k("o"), iconName: "layers", title: "Możliwości produkcyjne w liczbach", text: "Procesy, wymiary, tolerancje, serie, czasy realizacji" },
        { _key: k("o"), iconName: "gauge", title: "Park maszynowy jako tabela", text: "Maszyna, pole robocze, liczba osi — czytelne na telefonie" },
        { _key: k("o"), iconName: "file-text", title: "Karty techniczne i certyfikaty do pobrania", text: "PDF z wersją, datą i zakresem ważności" },
        { _key: k("o"), iconName: "plug", title: "Zapytanie ofertowe z rysunkiem", text: "Załączniki STEP, DXF i PDF prosto na skrzynkę działu handlowego" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje niemiecka i angielska", text: "Własne adresy, jednostki i osoba kontaktowa w języku klienta" },
        { _key: k("o"), iconName: "image", title: "Zdjęcia Waszego zakładu", text: "Hala, maszyny i detale zamiast stockowych fabryk" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy produkcyjnej", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Procesy, park maszynowy, karty, wersje DE i EN", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów, z tymi samymi danymi w wielu wersjach językowych, firma remontowo-inwestycyjna, biuro architektoniczne, warsztat samochodowy i pracownia renowacji felg — firmy, które sprzedają konkretną pracę wykonaną na miejscu. Łączy je to, czego potrzebuje producent: klient najpierw sprawdza, co firma potrafi zrobić, a strona prowadzi go do zapytania.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy produkcyjnej",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Brak strony", "Strona z kreatora", "Stara strona bez wersji językowych", "Tylko katalog PDF"] },
        { _key: k("z"), question: "Jakie wersje językowe są potrzebne?", options: ["Tylko polska", "Polska i angielska", "Polska, angielska i niemiecka", "Inny zestaw języków"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla firm produkcyjnych — strukturę, projekt graficzny, wykonanie, teksty i uruchomienie — więc za całość odpowiada jedna osoba, a cena jest znana z góry. Strona producenta pracuje jak dobry handlowiec techniczny: mówi, co zakład potrafi wykonać, na jakich maszynach i z jakich materiałów, pokazuje dokumenty, o które pyta dział jakości, i przyjmuje zapytanie z rysunkiem o dowolnej porze."),

        h2("Strona internetowa dla firmy produkcyjnej: jakie podstrony powinna mieć"),
        p("Struktura zależy od tego, czy produkujecie własne wyroby, czy wykonujecie usługi na zlecenie. Najczęściej składa się z tych części:"),
        li("strona główna, która w pierwszym zdaniu mówi, co produkujecie lub jakie procesy wykonujecie i dla kogo"),
        li("oferta: podstrona dla każdego procesu albo grupy wyrobów"),
        li("park maszynowy i możliwości produkcyjne"),
        li("jakość: certyfikaty, kontrola i pomiary"),
        li("do pobrania: karty techniczne, katalog, deklaracje"),
        li("o firmie: historia zakładu, hala, ludzie, do kogo dzwonić w jakiej sprawie"),
        li("praca: oferty dla operatorów, spawaczy, technologów — wielu producentów szuka ludzi stale"),
        li("kontakt z formularzem zapytania ofertowego i adresem dostaw"),
        p("Producent z kilkoma zakładami dostaje podstronę dla każdego z nich: adres, procesy wykonywane w tym miejscu, godziny przyjęcia towaru i wjazd dla ciężarówek — ze strony korzysta też kierowca dostawy."),

        h2("Oferta i możliwości produkcyjne na stronie producenta"),
        p("Hasło „realizujemy zlecenia o różnym stopniu skomplikowania” nie pomaga nikomu zdecydować. Na podstronie procesu stoją liczby, które klient porównuje z rysunkiem: maksymalne wymiary detalu, grubości, osiągane tolerancje i chropowatość, wielkości serii od prototypu do produkcji seryjnej, typowy czas realizacji. Obok jest krótki opis, co robicie przed i po procesie — na przykład cięcie, gięcie, spawanie i malowanie w jednym zakładzie — bo klient woli jednego dostawcę zamiast trzech."),
        p("Producent własnych wyrobów potrzebuje innego układu: podstrona wyrobu z wymiarami, wariantami, minimalną ilością zamówienia, sposobem pakowania i paletyzacji oraz informacją, czy wyrób może powstać pod marką klienta. Produkty grupuję tak, jak szuka ich klient — według zastosowania, a nie według wewnętrznych numerów katalogowych."),

        h2("Park maszynowy na stronie: tabela zamiast galerii zdjęć"),
        p("Galeria dwudziestu zdjęć maszyn bez podpisów mówi tylko, że maszyny są. Konstruktor chce wiedzieć, czy jego detal się zmieści. Dlatego park maszynowy buduję jako tabelę:"),
        li("maszyna, producent i model"),
        li("pole robocze albo maksymalny wymiar detalu"),
        li("liczba osi, moc lasera, siła nacisku — parametr, który ma znaczenie dla danego procesu"),
        li("liczba maszyn danego typu"),
        p("Na telefonie tabela zamienia się w karty, które przewija się w pionie, bo technik często sprawdza dostawcę na telefonie, przy maszynie. Tabelę edytujecie sami, gdy kupicie nową maszynę."),

        h2("Materiały i karty techniczne do pobrania na stronie producenta"),
        p("Producent wyrobów potrzebuje kart technicznych, a podwykonawca — listy materiałów, które obrabia. Każda karta to plik PDF z nazwą wyrobu, numerem wersji i datą, podpięty do podstrony wyrobu, a nie wrzucony do jednego folderu. Podstawowe dane — wymiary, materiał, normy — są też zapisane na podstronie tekstem, żeby klient nie musiał pobierać pliku, by sprawdzić jeden parametr. Gdy wymieniacie kartę na nową wersję, adres podstrony się nie zmienia."),

        h2("Certyfikaty i dział jakości na stronie firmy produkcyjnej"),
        p("Dział jakości klienta sprawdza dostawcę osobno od działu zakupów. Podstrona jakości zawiera:"),
        li("certyfikaty, na przykład ISO 9001, ISO 3834 czy IATF 16949, z zakresem, jednostką certyfikującą i datą ważności"),
        li("skany certyfikatów do pobrania, zawsze w aktualnej wersji"),
        li("opis kontroli: pomiary, wyposażenie laboratorium, raporty dołączane do dostaw"),
        li("osobę odpowiedzialną za jakość z kontaktem"),
        p("Przy każdym certyfikacie w panelu widać datę ważności, więc łatwo zauważyć, że trzeba podmienić plik — nieaktualny dokument na stronie zakupowiec traktuje jako sygnał ostrzegawczy."),

        h2("Formularz zapytania ofertowego z rysunkiem (STEP, DXF, PDF)"),
        p("Formularz zapytania to najważniejszy element strony producenta. Buduję go tak:"),
        li("pola: firma, osoba, e-mail, telefon, materiał, ilość, termin, uwagi"),
        li("załączniki w formatach STEP, IGES, DXF, DWG i PDF, kilka plików naraz, z limitem rozmiaru dopasowanym do Waszej skrzynki"),
        li("informacja, w jakim czasie odpowiadacie na zapytanie"),
        li("możliwość zaznaczenia, że rysunek jest objęty poufnością, i pobrania wzoru NDA przed wysłaniem plików"),
        li("zapytanie trafia do właściwego handlowca według procesu albo kraju, z kopią w Waszym CRM, jeśli go używacie"),
        h3("RODO i bezpieczeństwo plików w formularzu zapytania"),
        p("Formularz zbiera dane osobowe osoby kontaktowej, więc ma krótką klauzulę informacyjną. Pliki przechodzą szyfrowanym połączeniem i trafiają na Waszą skrzynkę albo serwer, bez kopii w zewnętrznych narzędziach do formularzy. Baner cookies blokuje analitykę do czasu zgody. To ogólne wskazówki, nie porada prawna."),

        h2("Wersje językowe strony producenta: niemiecka i angielska"),
        p("Klient z Niemiec czy Szwecji ocenia firmę po tym, jak wygląda strona w jego języku. Wersja niemiecka i angielska mają:"),
        li("własne adresy podstron i oznaczenia hreflang"),
        li("teksty sprawdzone przez osobę, która zna niemieckie słownictwo techniczne — Waszego handlowca, partnera albo tłumacza z branży"),
        li("osobę kontaktową, która mówi w tym języku, z imieniem i telefonem"),
        li("formularz i klauzulę RODO w tym samym języku"),
        li("jednostki i formaty, które zna klient, także w tabelach parametrów"),
        p(
          "Więcej o budowie stron w kilku językach na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Zdjęcia zakładu i produktów zamiast stockowych fabryk"),
        p("Zdjęcie ze stocku z robotem spawalniczym widział każdy zakupowiec, więc nic mu nie mówi. Prawdziwa hala, Wasze maszyny, detale na palecie i ludzie przy pracy pokazują skalę i porządek w zakładzie. Projekt graficzny jest w cenie i układam go wokół Waszych zdjęć; jeśli ich nie macie, podpowiadam, co sfotografować, żeby jeden dzień sesji wystarczył na całą stronę. Każde zdjęcie dostaje opis alternatywny, a pliki są zmniejszone tak, żeby galeria nie spowalniała strony na telefonie."),

        h2("Strona firmy produkcyjnej, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Zakupowcy pytają ChatGPT, Perplexity albo podsumowania AI w Google o dostawców konkretnych procesów. Asystent nie otworzy katalogu PDF ani nie odczyta parametrów z grafiki. Dlatego procesy, materiały, wymiary, certyfikaty i kraje dostaw są na stronie zapisane tekstem, tabele są prawdziwymi tabelami HTML, a dane strukturalne opisują firmę, zakład i wyroby."),
        p(
          "Dalsza praca nad widocznością to pozycjonowanie, opisane na stronie ",
          link("pozycjonowanie strony firmy produkcyjnej", "/pl/pozycjonowanie-strony-firmy-produkcyjnej"),
          ". O samej widoczności w asystentach piszę na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Edycja treści i własność strony firmy produkcyjnej"),
        p(
          "Oferty pracy, karty techniczne, certyfikaty, park maszynowy i aktualności dodaje się w prostym panelu, bez programisty. Strona działa w Next.js albo WordPressie, na hostingu z SSL i kopiami zapasowymi, a podstrony pojawiają się na telefonie w mniej niż 2,5 sekundy. Domena, kod i treści należą do firmy. Jeśli używacie CRM albo systemu ERP, formularz może przekazywać do niego zapytania; zakres takiej integracji wyceniam po sprawdzeniu, czy system ma do tego interfejs. Jeśli macie starą stronę, nowa wersja zachowuje adresy znane Google dzięki przekierowaniom — proces opisuję na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ". Jak wygląda strona producenta w jednej branży szczegółowo, pokazuję na stronie ",
          link("strona internetowa dla producenta bielizny", "/pl/oferty/strona-internetowa-dla-producenta-bielizny"),
          ".",
        ),

        h2("Jak powstaje strona internetowa dla firmy produkcyjnej"),
        ol("Brief. Przesyłacie listę procesów lub wyrobów, park maszynowy, certyfikaty, rynki eksportowe i kilka ostatnich zapytań ofertowych."),
        ol("Lista podstron i stała cena. Zmianę zakresu wyceniam przed jej wykonaniem."),
        ol("Projekt, najpierw na telefonie: strona główna, podstrona procesu i formularz zapytania."),
        ol("Wykonanie i teksty. Piszę je na podstawie briefu i rozmowy z technologiem, a Wy sprawdzacie parametry."),
        ol("Uruchomienie, test formularza z dużymi plikami, analityka po zgodzie i instrukcja panelu."),

        h2("Ile kosztuje strona internetowa dla firmy produkcyjnej"),
        li("Prosta strona — oferta, park maszynowy, jakość, o firmie, kontakt z formularzem zapytania: od 3000 do 6000 zł."),
        li("Pełna strona — podstrony procesów, materiałów i wyrobów, karty techniczne, formularz z załącznikami i NDA, wersje niemiecka i angielska, oferty pracy: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie w obu przypadkach, a widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Po uruchomieniu nie płacicie mi abonamentu. Ogólnie o tym, jak buduję strony dla firm, piszę na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla firmy produkcyjnej: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla firmy produkcyjnej?", "Od 3000 do 6000 zł za prostą stronę i od 8500 zł za pełną stronę z podstronami procesów, kartami technicznymi, formularzem z załącznikami i wersjami językowymi. Projekt graficzny jest w cenie. Po krótkim opisie firmy podaję stałą cenę."],
          ["Czy formularz przyjmie pliki STEP i DXF?", "Tak. Formularz przyjmuje kilka plików naraz w formatach STEP, IGES, DXF, DWG i PDF, z limitem rozmiaru dopasowanym do Waszej skrzynki, a przed uruchomieniem testuję go na prawdziwych rysunkach."],
          ["Czy strona może mieć wersję niemiecką i angielską?", "Tak. Każda wersja ma własne adresy, oznaczenia dla Google, formularz w tym samym języku i osobę kontaktową, która w nim mówi. Teksty techniczne powinna sprawdzić osoba znająca słownictwo branżowe."],
          ["Czy sami dodamy nową maszynę, kartę techniczną albo ofertę pracy?", "Tak. Park maszynowy, karty, certyfikaty, oferty pracy i aktualności edytuje się w prostym panelu, bez programisty."],
          ["Co z naszym katalogiem PDF?", "Katalog może zostać do pobrania, ale najważniejsze dane z niego trafiają na podstrony jako tekst i tabele, bo plik PDF jest niewygodny na telefonie i słabo czytelny dla wyszukiwarek oraz asystentów AI."],
          ["Ile trwa stworzenie strony dla producenta?", "Prosta strona zwykle od dwóch do czterech tygodni od briefu, pełna z wersjami językowymi od czterech do ośmiu. Najwięcej zależy od tego, jak szybko gotowe są dane parku maszynowego, zdjęcia i uwagi technologa."],
          ["Czy pracujesz z producentami spoza Warszawy?", "Tak, z firmami z całej Polski. Projekt i wykonanie prowadzę zdalnie, po polsku, angielsku albo rosyjsku; rozmowę z technologiem robimy przez wideo."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla firmy produkcyjnej: co mi wysłać"),
        p(
          "Wyślijcie link do obecnej strony albo katalogu, listę procesów lub wyrobów, park maszynowy, certyfikaty i kraje, do których dostarczacie. Kilka zdjęć hali i detali pomoże mi pokazać stronę główną, która wygląda jak Wasz zakład. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
