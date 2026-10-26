// Landing page fixture: Strona internetowa dla komisu samochodowego (PL), group
// «car-dealer-website-design». New page. Market version for Polish komisy,
// place z autami używanymi, firmy sprowadzające auta z Niemiec i mniejsze
// salony — not a translation of car-dealer-website-design.en.
// Semantic core: ref/creative-leisure.md has no measured PL phrases for car
// dealers. H1 and headings carry the slug phrase «strona internetowa dla
// komisu samochodowego» (brief) plus «strona komisu», «strona salonu
// samochodowego». EN reference: car dealer website design 170, car dealer
// websites 170, templates 170×2, builder 90, providers 70+40.
// Intent: ref/intent-check-creative-leisure.md — EN «website for car dealers»
// = dealers themselves (shoppers), «car dealer website design» = vendors,
// builders, studios (owners); SEO vs design 0 shared URLs → SEO is the
// sibling /pl/pozycjonowanie-salonu-samochodowego (linked). No PL SERP check.
// Polish context: import ogłoszeń z Otomoto (API for dealer accounts — where
// available), program do komisu or CSV; karta auta with VIN, kraj
// pochodzenia, zarejestrowany / do rejestracji; faktura VAT 23% vs VAT marża
// vs umowa; filtry: faktura VAT, LPG, hak; kredyt i leasing przez partnerów
// (RODO, full application in the lender’s system); odkup i zamiana; zdjęcia;
// WhatsApp/SMS with ogłoszenie number, oględziny; gotowe platformy dla komisów
// vs own site; importer rules for salony (general).
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna od 8500 zł, projekt w
// cenie.
// NOT on this page: indexing, sprzedane auta in search, podstrony modeli,
// artykuły o imporcie, wizytówki, opinie, Otomoto vs own site in search
// (/pl/pozycjonowanie-salonu-samochodowego — sibling).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const carDealerWebsiteDesignPl = {
  lang: "pl",
  group: "car-dealer-website-design",
  slug: "strona-internetowa-dla-komisu-samochodowego",
  title: "Strona internetowa dla komisu samochodowego",
  heading: "Strona internetowa dla komisu samochodowego",
  excerpt:
    "Strona internetowa dla komisu samochodowego, zaprojektowana i zbudowana przez jedną osobę: auta pobierane automatycznie z Otomoto albo programu komisu, karta auta z ceną, VIN i rodzajem faktury, formularze kredytu, leasingu i zamiany oraz setki zdjęć, które w telefonie ładują się szybko.",
  seo: {
    metaTitle: "Strona dla komisu i salonu samochodowego | Bandziuk",
    metaDescription:
      "Strona dla komisu samochodowego: import aut z Otomoto, karta auta z VIN i fakturą, kredyt, leasing i zamiana, szybkie zdjęcia. Projekt w cenie, od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Dla komisów i salonów"],
  heroPhonePoints: ["Skoda Superb 2020 · FV 23%", "Zapytaj o leasing", "Wyceń swoje auto", "Napisz na WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla komisu samochodowego z listą aut i kartami aut, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona dla komisu z automatycznym importem ogłoszeń, wyszukiwarką, formularzami kredytu, leasingu i zamiany oraz podstronami placów, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla komisu samochodowego",
      items: [
        { _key: k("o"), iconName: "plug", title: "Auta pobierane z Otomoto lub programu komisu", text: "Bez wpisywania każdego auta dwa razy" },
        { _key: k("o"), iconName: "image", title: "Karta auta zbudowana wokół zdjęć", text: "Galeria, cena, VIN, przebieg, pochodzenie" },
        { _key: k("o"), iconName: "file-text", title: "Faktura VAT, VAT marża czy umowa", text: "Jasno przy każdej cenie, dla firm i osób prywatnych" },
        { _key: k("o"), iconName: "shield-check", title: "Formularze kredytu, leasingu i zamiany", text: "Krótkie, z klauzulą RODO, prosto do handlowca" },
        { _key: k("o"), iconName: "gauge", title: "Szybko mimo setek zdjęć", text: "Zmniejszane przy imporcie, ładowane przy przewijaniu" },
        { _key: k("o"), iconName: "sparkles", title: "Oferta czytelna dla ChatGPT", text: "Tekst i dane strukturalne zamiast grafik" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona komisu samochodowego", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Import ogłoszeń, wyszukiwarka, kredyt, leasing, zamiana", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony z katalogiem ofert i strony firm motoryzacyjnych, które zaprojektowałem i zbudowałem",
      subtitle:
        "Serwis Cyprus VIP Estates zaprojektowałem i zbudowałem od zera jako katalog: oferty z filtrami i mapą, prezentacje wideo, pięć języków z hebrajskim i zapytania wpadające do CRM — przy komisie rozwiązuje się te same zadania, tylko zamiast mieszkań są auta. Trzy kolejne to warszawskie firmy wokół samochodów: Felgilab, pracownia renowacji felg, której stronę przebudowałem na WordPressie z osobnymi podstronami usług i cen; warsztat samochodowy, w którym poprawiałem UX, podstrony usług i obecność w Mapach Google; przechowalnia opon ze stroną, którą właściciel edytuje sam. Piąta to ScanM2, firma skanowania laserowego 3D, której stronę przeniosłem na WordPress bez zmiany projektu — dziś ma 29 razy większy ruch organiczny i zapytania co tydzień. Dla komisu oznacza to aktualny katalog, strony projektowane pod telefon i serwis, nad którym masz kontrolę.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "architecture-website-rebuild-and-seo-scan",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla komisu samochodowego",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron, sposób importu ogłoszeń i podaję stałą cenę.",
      contextLabel: "Nazwa komisu lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Gdzie dziś prowadzisz ogłoszenia?", options: ["Tylko na Otomoto i OLX", "W programie do komisu", "W arkuszu", "Na gotowej platformie dla komisów"] },
        { _key: k("z"), question: "Co nowa strona ma robić lepiej?", options: ["Pokazywać auta", "Zbierać zapytania o kredyt i leasing", "Zbierać auta do odkupu", "Kosztować mniej niż abonament"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla komisu samochodowego to projekt, który wykonuję od początku do końca sam — układ, grafikę, połączenie z ogłoszeniami i uruchomienie — a więc jedna osoba odpowiada za całość, a cenę znasz przed startem. Strona komisu jest katalogiem, który zmienia się co tydzień: auta zjeżdżają z lawety, ceny spadają, zdjęcia dochodzą po myciu i detailingu, a strona musi za tym nadążać bez przepisywania ogłoszeń ręcznie."),

        h2("Strona internetowa dla komisu samochodowego: lista aut, karta auta i kontakt"),
        p("Kupujący na stronie komisu robi trzy rzeczy: przegląda listę aut, otwiera jedno albo dwa i się kontaktuje — telefonem, przez WhatsApp albo formularzem. Reszta, czyli o firmie, dojazd i leasing, wspiera tę ścieżkę. Projekt skupia się więc na:"),
        li("liście aut, którą da się przejrzeć kciukiem na telefonie"),
        li("karcie auta, która odpowiada na pytania: czy to to auto, ile kosztuje, jaki dokument dostanę"),
        li("kontakcie, który zajmuje jedno dotknięcie i od razu mówi handlowcowi, o które auto chodzi"),
        p("Pierwszy ekran strony głównej pokazuje wyszukiwarkę albo typy nadwozi, adres placu z godzinami otwarcia, telefon i kilka aut, które właśnie przyjechały."),

        h2("Import ogłoszeń na stronę komisu: Otomoto, program do komisu albo arkusz"),
        p("Strona pobiera auta stamtąd, gdzie już je wpisujesz:"),
        li("z Otomoto, jeśli Twoje konto dealerskie ma dostęp do API albo integracji"),
        li("z programu do zarządzania komisem, który i tak wysyła ogłoszenia na portale"),
        li("z pliku CSV lub arkusza Google, jeśli komis jest mały i ofertę prowadzisz w tabeli"),
        p(
          "Pola mapuję raz — VIN, marka, model, wersja, rocznik, przebieg, cena, paliwo, skrzynia, kraj pochodzenia, rodzaj dokumentu sprzedaży, zdjęcia — a import działa według harmonogramu, nawet kilka razy dziennie. Nowe auto pojawia się ze zdjęciami, obniżka ceny przechodzi sama, sprzedane znika z listy. Co dalej dzieje się z adresem sprzedanego auta w Google, opisuję na stronie ",
          link("pozycjonowanie salonu samochodowego i komisu", "/pl/pozycjonowanie-salonu-samochodowego"),
          ". W panelu możesz dopisać do auta własną uwagę, a kolejny import jej nie nadpisze.",
        ),

        h2("Karta samochodu na stronie komisu: zdjęcia, cena, VIN i pochodzenie"),
        p("Karta auta decyduje, czy klient zadzwoni do Ciebie, czy wróci na Otomoto. Na telefonie pierwszy ekran mieści:"),
        li("galerię zdjęć przesuwaną palcem, zaczynającą się od ujęcia z przodu pod kątem"),
        li("markę, model, wersję i rocznik, a pod nimi cenę i przebieg dużą czcionką"),
        li("najważniejsze fakty: silnik, skrzynia, napęd, kraj pochodzenia i to, czy auto jest zarejestrowane w Polsce"),
        li("przyciski: zadzwoń, napisz na WhatsApp, umów oględziny"),
        p("Niżej: pełne wyposażenie, VIN, link do historii pojazdu, informacja o serwisie i krótkie wideo z obejścia auta."),
        h3("Faktura VAT 23%, VAT marża czy umowa: jak pokazać cenę na stronie komisu"),
        p("Dla klienta firmowego pierwsze pytanie brzmi: czy dostanę fakturę z VAT do odliczenia. Przy każdej cenie strona pokazuje więc rodzaj dokumentu — faktura VAT 23%, faktura VAT marża albo umowa — a przy fakturze VAT również cenę netto. Jeśli doliczasz opłaty, na przykład za przygotowanie auta do rejestracji, są podane obok ceny tą samą wielkością liter. Kupujący nie dowiaduje się o nich dopiero przy biurku."),

        h2("Wyszukiwarka aut na stronie komisu: filtry wygodne na telefonie"),
        p("Polscy kupujący filtrują inaczej, niż zakładają gotowe szablony. Poza marką, ceną i rocznikiem pytają o fakturę VAT, instalację LPG, hak, kraj pochodzenia i to, czy auto jest już zarejestrowane. Te filtry są pod ręką, a rzadziej używane — kolor, liczba drzwi — schowane głębiej. W telefonie panel filtrów otwiera się jednym przyciskiem i pokazuje liczbę aut przed zamknięciem, więc nikt nie zawęzi oferty do zera. Powiadomienie e-mailem o nowym aucie, które spełnia kryteria, zatrzymuje kupujących, którzy jeszcze szukają."),

        h2("Formularz kredytu i leasingu na stronie komisu samochodowego"),
        p("Większość komisów sprzedaje część aut na kredyt albo w leasingu przez partnerów finansowych. Strona nie musi liczyć rat ani zbierać pełnego wniosku. Wystarczy krótki formularz przy każdym aucie:"),
        li("osoba prywatna czy firma — a dla firmy forma działalności i to, czy interesuje ją leasing"),
        li("planowana wpłata własna i okres, bez kalkulatora obiecującego konkretną ratę"),
        li("telefon i zgoda na kontakt"),
        p("Zgłoszenie trafia do handlowca albo partnera razem z numerem auta. Przy formularzu jest klauzula RODO z informacją, komu dane zostaną przekazane, a pełny wniosek z dochodami i dokumentami klient składa w systemie banku lub firmy leasingowej, nie w zwykłym mailu."),

        h2("Formularz odkupu i zamiany: auto w rozliczeniu na stronie komisu"),
        p("Wielu klientów chce oddać stare auto w rozliczeniu albo po prostu je sprzedać. Formularz zbiera to, czego potrzebujesz do wstępnej wyceny: markę, model, rocznik, przebieg, VIN albo numer rejestracyjny, stan, informację o szkodach i kilka zdjęć z telefonu. Jeśli klient przyszedł z karty konkretnego auta, zgłoszenie zawiera też to auto, więc handlowiec od razu widzi całą transakcję. Kwotę podajesz Ty po obejrzeniu zdjęć, a strona mówi wprost, że ostateczna wycena zależy od oględzin."),

        h2("Szybkość strony komisu: setki zdjęć aut bez czekania"),
        p("Plac z pięćdziesięcioma autami po dwadzieścia–trzydzieści zdjęć to ponad tysiąc obrazów i to one najczęściej spowalniają strony komisów. Zdjęcia z aparatu są duże, a wiele szablonów pokazuje je w pełnym rozmiarze nawet jako miniatury. Rozwiązuję to przy imporcie:"),
        li("każde zdjęcie zapisywane w kilku rozmiarach i w formacie WebP lub AVIF"),
        li("na liście aut tylko miniatury, na karcie auta najpierw jedno zdjęcie, kolejne przy przesuwaniu"),
        li("wideo z YouTube wczytywane dopiero po dotknięciu"),
        p("Karta auta otwiera się wtedy szybko także na słabym zasięgu, w trasie albo na parkingu przed innym komisem."),

        h2("Telefon, WhatsApp i oględziny: zapytanie ze strony komisu z numerem auta"),
        p("Kupujący auta częściej dzwonią i piszą, niż wypełniają formularze. Przycisk WhatsApp albo SMS na karcie auta otwiera wiadomość z marką, modelem i numerem ogłoszenia, więc nie musisz dopytywać, o które auto chodzi. Umówienie oględzin lub jazdy próbnej to wybór dnia i godziny w godzinach otwarcia placu, z potwierdzeniem SMS-em. Adres i godziny stoją przy każdym przycisku, żeby nikt nie przyjechał na zamknięty plac w niedzielę."),
        p("Jeśli rezerwujesz auta za zadatkiem, strona może przyjąć go od razu — BLIK-iem lub szybkim przelewem przez operatora płatności — razem z krótkim regulaminem rezerwacji: na ile dni auto jest wstrzymane, kiedy zadatek przepada, a kiedy wraca do klienta. Po wpłacie auto dostaje na stronie etykietę „zarezerwowane”, a Ty powiadomienie SMS-em."),

        h2("Gotowa platforma dla komisu, szablon czy własna strona komisu samochodowego"),
        p("Na rynku są gotowe systemy dla komisów z modułem ogłoszeń i stroną w abonamencie, a kreatory stron i WordPress mają motywy „dla dealerów”. Na start to rozsądny wybór — strona działa w kilka dni. Ograniczenia wychodzą później:"),
        li("taki sam układ jak u wielu innych komisów i mało miejsca na własny projekt"),
        li("abonament, który nie kończy się nigdy, i strona, która znika po rezygnacji"),
        li("mało wpływu na szybkość, formularze i to, co trafia do kodu strony"),
        p(
          "Salony autoryzowane zwykle muszą korzystać z rozwiązań wskazanych przez importera marki, dlatego własna strona najlepiej pasuje do niezależnych komisów, firm sprowadzających auta i salonów z osobną marką aut używanych. Mój sposób pracy nad stronami firmowymi opisuje strona ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),

        h2("Strona komisu samochodowego, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Część kupujących pyta ChatGPT albo podsumowania AI w Google, który komis w okolicy ma auta z fakturą VAT albo daje leasing na auto używane. Asystent korzysta tylko z tego, co da się przeczytać. Oferta i warunki zapisane na grafikach albo w zewnętrznym widżecie są dla niego niewidoczne; te same informacje jako tekst, z danymi strukturalnymi Car i AutoDealer generowanymi z importu, dają mu materiał do odpowiedzi."),
        p(
          "Żeby asystenci faktycznie polecali Twój komis, trzeba nad tym pracować dalej; zakres tej usługi opisuje strona ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak powstaje i ile kosztuje strona internetowa dla komisu samochodowego"),
        ol("Brief. Przesyłasz obecną stronę, źródło ogłoszeń, adresy placów, partnerów finansowych i kilka kart aut, które podobają Ci się u innych."),
        ol("Projekt na telefon. Listę aut, kartę auta i formularze uzgadniamy na ekranie telefonu."),
        ol("Wykonanie i import. Połączenie z ogłoszeniami testuję na Twoich prawdziwych autach przed startem."),
        ol("Uruchomienie. Formularze, powiadomienia, analityka i wizytówka są połączone; dostajesz krótką instrukcję."),
        li("Prosta strona — strona główna, lista aut, karty aut, o firmie, kontakt: od 3000 do 6000 zł."),
        li("Pełna strona z automatycznym importem ogłoszeń, wyszukiwarką, formularzami kredytu, leasingu i zamiany oraz podstronami placów: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie. Po starcie strony stałe koszty to hosting i domena; za zmiany płacisz mi tylko wtedy, gdy o nie poprosisz. Wszystkie widełki cenowe zebrałem w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla komisu samochodowego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla komisu samochodowego?", "Od 3000 do 6000 zł za prostą stronę z listą i kartami aut, od 8500 zł za pełną z automatycznym importem ogłoszeń, wyszukiwarką, formularzami kredytu, leasingu i zamiany. Projekt jest w cenie, a po krótkim opisie komisu podaję stałą cenę."],
          ["Czy strona może pobierać auta z Otomoto?", "Często tak — zależy to od tego, czy Twoje konto dealerskie ma dostęp do API albo integracji. Jeśli nie, auta mogą przychodzić z programu do komisu albo z arkusza. Sprawdzam to przed wyceną."],
          ["Jak pokazać na stronie fakturę VAT i VAT marżę?", "Przy każdej cenie jest rodzaj dokumentu, a przy fakturze VAT także cena netto. Na liście aut działa filtr „faktura VAT”, z którego korzystają przedsiębiorcy szukający auta do leasingu."],
          ["Czy formularz kredytu na stronie jest bezpieczny?", "Strona zbiera tylko podstawowe informacje i zgodę na kontakt, z klauzulą RODO. Pełny wniosek z dochodami i dokumentami klient składa w systemie banku lub firmy leasingowej."],
          ["Czy strona z setkami zdjęć nie będzie wolna?", "Nie, jeśli zdjęcia są zmniejszane i konwertowane przy imporcie i ładowane dopiero wtedy, gdy kupujący do nich przewinie. Tak buduję każdą stronę komisu."],
          ["Czy sam mogę dodawać auta i zmieniać ceny?", "Auta przychodzą z importu, a w prostym panelu, także z telefonu, dopisujesz uwagi, promocje i opłaty. Jeśli import nie jest potrzebny, auta dodajesz ręcznie w tym samym panelu."],
          ["Czy pracujesz z komisami spoza Warszawy?", "Tak, z całej Polski. Pracuję zdalnie, po polsku; opis komisu możesz nagrać na WhatsApp jako wiadomość głosową, a kolejne etapy projektu sprawdzasz na swoim telefonie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla komisu samochodowego: co mi wysłać"),
        p(
          "Wyślij nazwę komisu i obecną stronę, adresy placów, informację, gdzie dziś prowadzisz ogłoszenia (Otomoto, program do komisu, arkusz), ile aut zwykle masz w ofercie, z jakimi partnerami robisz kredyt i leasing oraz jakie dokumenty sprzedaży wystawiasz. Kilka linków do kart aut, które podobają Ci się u innych, powie mi, czego oczekujesz. Odpowiem propozycją struktury strony i stałą ceną. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
