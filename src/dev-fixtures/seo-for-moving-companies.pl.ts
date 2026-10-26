// Landing page fixture: Pozycjonowanie firmy przeprowadzkowej (PL), group
// «seo-for-moving-companies». New page. Market version for Polish firmy
// przeprowadzkowe — from one bus with two tragarze to companies with several
// trucks and a warehouse — not a translation of seo-for-moving-companies.en.
// Semantic core: ref/home-services.md has no measured PL phrases; H1 and
// headings carry «pozycjonowanie firmy przeprowadzkowej», «przeprowadzki»
// (lokalne, krajowe, zagraniczne, firmowe), «cennik przeprowadzek», «wycena
// przeprowadzki», «wizytówka Google firmy przeprowadzkowej». PL PAA used: Ile
// kosztuje pozycjonowanie firmy? (cost H2 + FAQ) · Co jest lepsze:
// pozycjonowanie czy Google Ads? (Oferteo/Fixly H2 + FAQ).
// Intent: ref/intent-check-home-services.md — PL check «pozycjonowanie firmy
// przeprowadzkowej» vs «strona dla firmy przeprowadzkowej» failed (no data);
// EN «seo for moving companies» vs «moving company website design» 0 shared
// and RU «продвижение сайта грузоперевозок» vs «сайт для компании по
// переездам» 0 shared → no separate website page; one H2 about the website.
// Angle: przeprowadzki w mieście / krajowe / zagraniczne (Niemcy, Holandia,
// Norwegia, Polska–Ukraina — general), firmowe, pianina, magazynowanie;
// cennik (stawka za godzinę, ryczałt, wycena po zdjęciach); Oferteo, Fixly
// and OLX as competitors for the same order; wizytówka Google and spam names
// like „Przeprowadzki Tanio 24h”; trust: OCP, umowa, faktura VAT; season
// (wakacje, koniec miesiąca, październik); Ukrainian/English versions; AI.
// NOT on this page: wywóz gruzu i opróżnianie mieszkań
// (/pl/pozycjonowanie-firmy-wywozu-gruzu — linked once); transport and
// freight company websites (/pl/strona-dla-firmy-transportowej — linked once
// from the website H2); maps in depth (/pl/oferty/pozycjonowanie-lokalne);
// Google Ads and paid platforms (channels only).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForMovingCompaniesPl = {
  lang: "pl",
  group: "seo-for-moving-companies",
  slug: "pozycjonowanie-firmy-przeprowadzkowej",
  title: "Pozycjonowanie firmy przeprowadzkowej",
  heading: "Pozycjonowanie firmy przeprowadzkowej",
  excerpt:
    "Zajmuję się pozycjonowaniem firm przeprowadzkowych: podstrony przeprowadzek w mieście, krajowych, zagranicznych i firmowych, cennik i wycena po zdjęciach, wizytówka Google z opiniami i widoczność w ChatGPT — żeby klient dzwonił do Ciebie, a nie wysyłał zapytania przez Oferteo do pięciu firm.",
  seo: {
    metaTitle: "SEO dla firmy przeprowadzkowej: przeprowadzki | Bandziuk",
    metaDescription:
      "Pozycjonowanie firmy przeprowadzkowej: przeprowadzki lokalne, krajowe i zagraniczne, cennik, wycena, Mapy Google, opinie i ChatGPT. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Lokalne, krajowe, zagraniczne", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Przeprowadzki Wrocław", "Wycena po zdjęciach", "Opinie w Google", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO firmy przeprowadzkowej: strona, formularz wyceny, wizytówka Google i odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla firmy przeprowadzkowej: podstrony usług i kierunków, cennik, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie firmy przeprowadzkowej", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie firmy przeprowadzkowej",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego rodzaju przeprowadzki", text: "Mieszkania, domy, biura, pianina, magazyn" },
        { _key: k("o"), iconName: "trending-up", title: "Kierunki zagraniczne i krajowe", text: "Tylko trasy, którymi naprawdę jeździsz" },
        { _key: k("o"), iconName: "file-text", title: "Cennik, który da się zrozumieć", text: "Stawka za godzinę, ryczałt, co podnosi cenę" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google bez sztuczek", text: "Kategoria, obszar działania, zdjęcia aut i ekipy" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i AI Overviews", text: "Fakty i ceny, które asystent może powtórzyć" },
        { _key: k("o"), iconName: "phone", title: "Raport w telefonach i wycenach", text: "Ile zleceń przyniosła wyszukiwarka, a ile Oferteo" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO firmy przeprowadzkowej", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie firmy przeprowadzkowej", value: "od 3500 zł / mies.", note: "podstrony, Mapy, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony warszawskich firm usługowych, które żyją z telefonów i Map Google",
      subtitle:
        "Trzy z tych projektów to warszawskie firmy, do których klienci dzwonią z wyszukiwarki i z Map Google: warsztat samochodowy, w którym zajmowałem się SEO lokalnym, wizytówką, UX i podstronami usług; Felgilab, pracownia renowacji felg, której stronę przebudowałem na WordPressie z podstronami usług i cennikiem; i przechowalnia opon ze stroną, której teksty SEO właściciel sam edytuje. Obok nich ScanM2, firma skanowania laserowego 3D i BIM, która po dwóch latach bez zapytań dostała nową stronę w trzech językach — angielskim, polskim i niemieckim — i dziś ma zapytania co tydzień, a ruch organiczny 29 razy większy, oraz agencja edukacyjna z jednym serwisem na dziesięć krajów. Firmie przeprowadzkowej potrzeba tego samego: podstrony pod każdą usługę i kierunek, mocnej wizytówki i zleceń, które da się policzyć.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania firmy przeprowadzkowej",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw — podstrony, cennik, formularz czy wizytówkę — i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakich przeprowadzek chcesz więcej?", options: ["Mieszkania i domy w moim mieście", "Krajowe, między miastami", "Zagraniczne", "Firmy i biura"] },
        { _key: k("z"), question: "Skąd dziś masz najwięcej zleceń?", options: ["Oferteo lub Fixly", "Ogłoszenia na OLX", "Google i Mapy", "Polecenia"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie firmy przeprowadzkowej to praca nad tym, żeby osoba, która wpisuje „przeprowadzki Kraków”, „firma przeprowadzkowa cennik” albo „przeprowadzka do Niemiec”, trafiła na Twoją stronę albo wizytówkę i zadzwoniła. Robię to sam — audyt, podstrony, poprawki w kodzie, wizytówkę Google i raporty — dla małych firm z jednym busem i dwoma tragarzami oraz dla tych, które mają już kilka aut i magazyn."),

        h2("Pozycjonowanie firmy przeprowadzkowej: co obejmuje usługa"),
        p("Klient szukający przeprowadzki zwykle porównuje trzy, cztery firmy i wybiera tę, która najszybciej poda konkretną cenę i wygląda wiarygodnie. Pracuję nad wszystkimi miejscami, w których ta decyzja zapada:"),
        li("podstrony usług i kierunków na Twojej stronie"),
        li("wizytówka w Mapach Google i opinie klientów"),
        li("cennik i formularz wyceny, który da się wypełnić w telefonie"),
        li("odpowiedzi ChatGPT, Perplexity i podsumowania AI w Google"),
        p(
          "Jeśli głównie wywozisz meble i opróżniasz mieszkania, a przeprowadzki są dodatkiem, lepiej pasuje strona ",
          link("pozycjonowanie firmy wywozu gruzu", "/pl/pozycjonowanie-firmy-wywozu-gruzu"),
          ".",
        ),

        h2("Przeprowadzki lokalne, krajowe i zagraniczne: osobne podstrony na stronie firmy"),
        p("Przeprowadzka kawalerki na drugi koniec Poznania, domu z Łodzi do Gdańska i rodziny do Holandii to trzy różne usługi z innymi cenami, innymi pytaniami i innymi frazami. Jedna podstrona „Usługi” nie wypozycjonuje się na żadną z nich."),
        h3("Przeprowadzki mieszkań i domów w mieście"),
        p("Tu klient pyta o liczbę tragarzy, wnoszenie bez windy, demontaż i montaż mebli, kartony i folię. Podstrona z nazwą miasta i dzielnic, w których jeździsz najczęściej, odpowiada na te pytania i pokazuje zdjęcia Twojej ekipy, a nie stockowych pracowników w kombinezonach."),
        h3("Przeprowadzki krajowe między miastami"),
        p("„Przeprowadzka Warszawa–Wrocław” wpisuje ktoś, kto zna już datę i odległość. Podstrona kierunku ma sens, gdy jeździsz tą trasą regularnie i możesz napisać coś konkretnego: czas przejazdu, czy da się dołączyć do kursu z innym ładunkiem, opinie klientów z tej trasy."),
        h3("Przeprowadzki zagraniczne: Niemcy, Holandia, Norwegia, Ukraina"),
        p("Przeprowadzki do Niemiec i Holandii, powroty z Norwegii czy przewóz rzeczy między Polską a Ukrainą mają własne pytania: dokumenty na granicy, czas transportu, ubezpieczenie ładunku. Opisuję je ogólnie, z datą aktualizacji, bo przepisy się zmieniają. Klienci z zagranicy szukają też po ukraińsku, angielsku albo niemiecku — wersja językowa ma sens dla rynków, które naprawdę obsługujesz."),

        h2("Przeprowadzki firm i biur, transport pianina i magazynowanie mebli"),
        p("Przeprowadzkę biura zleca office manager, który chce pracy w weekend, planu przeniesienia komputerów i faktury. Transport pianina czy sejfu szukają ludzie, którzy potrzebują sprzętu i doświadczenia. Magazynowanie mebli — na czas remontu albo między mieszkaniami — to osobna fraza i osobna podstrona z powierzchniami i zasadami dostępu. Te usługi dają pracę także poza sezonem."),

        h2("Cennik przeprowadzek na stronie: stawka za godzinę, ryczałt i wycena po zdjęciach"),
        p("„Ile kosztuje przeprowadzka mieszkania” i „przeprowadzki cennik” to jedne z najczęstszych pytań w tej branży. Strona, która na nie odpowiada, zatrzymuje klienta i daje asystentom AI liczbę z Twoją nazwą. Nie musisz publikować całego cennika. Wystarczy pokazać, jak liczysz:"),
        li("stawka za godzinę za auto z ekipą i minimalny czas zlecenia"),
        li("ryczałt po oględzinach przy większych przeprowadzkach i trasach krajowych"),
        li("dopłaty: piętro bez windy, wnoszenie dużych mebli, materiały, dojazd spoza miasta"),
        li("wycena po zdjęciach albo filmie przesłanym przez WhatsApp"),

        h2("Formularz wyceny przeprowadzki: telefon, WhatsApp i oględziny wideo"),
        p("W tej branży zlecenie zdobywa często ten, kto pierwszy odezwie się z sensowną ceną. Formularz w pierwszym kroku pyta tylko o skąd, dokąd, termin, metraż i telefon. Długa lista mebli zniechęca w telefonie — lepiej poprosić o zdjęcia albo krótką rozmowę wideo, w której klient pokazuje mieszkanie. Przycisk „Zadzwoń” i WhatsApp są na każdej podstronie, a każde zapytanie trafia do skrzynki lub CRM razem z informacją, z której podstrony przyszło."),

        h2("Oferteo, Fixly i OLX a pozycjonowanie firmy przeprowadzkowej"),
        p("Na platformach zleceń jedno zapytanie widzi kilka firm, a Ty płacisz za kontakt albo za możliwość odpowiedzi — niezależnie od tego, czy dostaniesz zlecenie. Ogłoszenia na OLX trzeba odświeżać i opłacać, a klient porównuje tam głównie cenę. Google Ads działa od pierwszego dnia, ale w sezonie kliknięcia na „przeprowadzki Warszawa” są drogie."),
        p("Pozycjonowanie wymaga kilku miesięcy, za to telefon z wyszukiwarki trafia tylko do Ciebie i nie kosztuje osobno. Na pytanie, co jest lepsze — pozycjonowanie czy Google Ads — odpowiedź zwykle brzmi: reklama na sezon, SEO na lata. Ja zajmuję się wyszukiwarką i odpowiedziami AI."),

        h2("Wizytówka Google firmy przeprowadzkowej: Mapy, opinie i fałszywe wizytówki"),
        p("W Mapach na „przeprowadzki” w dużym mieście widać wizytówki z nazwami typu „Przeprowadzki Tanio Warszawa 24h” albo firmy bez adresu, które są pośrednikami. Uczciwa firma wygrywa kompletnością:"),
        li("kategoria „Firma przeprowadzkowa” i obszar działania zgodny z tym, gdzie naprawdę jeździsz"),
        li("zdjęcia Twoich aut z logo, ekipy i magazynu, dodawane co miesiąc"),
        li("prośba o opinię po każdej przeprowadzce, najlepiej z nazwą miasta i rodzajem przeprowadzki"),
        li("nazwa zgodna z wpisem w CEIDG lub KRS, bez dopisanych fraz"),
        p(
          "Wizytówki naruszające zasady można zgłosić do Google. Pełną pracę nad Mapami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Ubezpieczenie OCP, umowa i faktura: zaufanie na stronie firmy przeprowadzkowej"),
        p("Klient oddaje Ci wszystko, co ma, więc sprawdza, czy firma istnieje i odpowiada za szkody. Na stronie powinny być jako tekst: pełna nazwa firmy i NIP, adres bazy lub magazynu, informacja o ubezpieczeniu OC przewoźnika i mienia w transporcie, wzór umowy lub zasady, na jakich ją podpisujesz, i informacja o fakturze VAT. Zdjęcia prawdziwych przeprowadzek i opinie z datami robią resztę."),
        p("Przy przeprowadzkach zagranicznych klient pyta też o uprawnienia do przewozu rzeczy za granicę. Jeśli masz licencję na międzynarodowy transport drogowy, podaj to na podstronach kierunków. Wymogi zależą od masy pojazdu i rodzaju przewozu, więc na stronie opisuję je ogólnie i dopiero po sprawdzeniu Twoich dokumentów."),

        h2("Sezon przeprowadzek: wakacje, koniec miesiąca i październik w planie pozycjonowania"),
        p("Najwięcej przeprowadzek przypada na lato, końce miesięcy i początek roku akademickiego, kiedy studenci zmieniają mieszkania. Nowe podstrony potrzebują tygodni lub miesięcy, żeby się wypozycjonować, więc kierunki i usługi na sezon piszę zimą i wczesną wiosną, a spokojne miesiące wykorzystuję na przeprowadzki firm i magazynowanie. Jeśli bierzesz zlecenia „na jutro” albo w weekend, napisz to w tytule podstrony i pokaż najbliższe wolne terminy — w szczycie sezonu to często przesądza o telefonie."),

        h2("Strona internetowa firmy przeprowadzkowej: co musi mieć, żeby SEO dawało zlecenia"),
        p("Pozycjonowanie przyprowadza ludzi, ale to strona decyduje, czy poproszą o wycenę. Najczęstsze problemy: formularz, który nie działa w telefonie, zdjęcia z banku zdjęć, brak cennika i telefon ukryty w menu. Dobra strona ładuje się szybko, pokazuje Twoje auta i ludzi, ma krótki formularz u góry i osobną podstronę dla każdej usługi."),
        p(
          "Jeśli stronę trzeba zbudować od nowa, zajrzyj na stronę ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ". Firmy transportu towarów i spedycji znajdą swoją wersję na stronie ",
          link("strona dla firmy transportowej", "/pl/strona-dla-firmy-transportowej"),
          ".",
        ),

        h2("Pozycjonowanie firmy przeprowadzkowej w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz więcej osób pyta ChatGPT, Perplexity albo podsumowania AI w Google: „ile kosztuje przeprowadzka 50 m² w Krakowie”, „jak wybrać firmę przeprowadzkową”, „kto robi przeprowadzki do Niemiec”. Asystent podaje kilka firm i powód wyboru. Pracę nad tym nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization). Dla firmy przeprowadzkowej to:"),
        li("zasady cennika i usługi opisane prostymi zdaniami na stronie"),
        li("miasta, kierunki, flota, ubezpieczenie i lata działalności podane jako fakty"),
        li("dane strukturalne firmy przeprowadzkowej z obszarem działania"),
        li("te same dane i nowe opinie w Google i w katalogach firm"),
        p(
          "Przed pracą i po niej zadaję asystentom pytania Twoich klientów i sprawdzam, kogo polecają. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie firmy przeprowadzkowej"),
        li("Audyt SEO — strona, formularz, cennik, wizytówka, opinie i odpowiedzi AI: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrony usług i kierunków, cennik, formularz wyceny, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie firmy przeprowadzkowej — nowe podstrony, Mapy, opinie, widoczność w AI i raport w zleceniach: od 3500 zł miesięcznie, przy silnej konkurencji w Warszawie, Krakowie czy Wrocławiu od 5500 zł miesięcznie."),
        p(
          "Jak wygląda stała praca, opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie firmy przeprowadzkowej: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie firmy przeprowadzkowej?", "Audyt kosztuje od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, a stałe pozycjonowanie od 3500 zł miesięcznie, w dużych miastach z silną konkurencją od 5500 zł. Po krótkim opisie firmy, miast i kierunków podaję stałą cenę."],
          ["Ile trwa, zanim pozycjonowanie da zlecenia?", "Poprawki w wizytówce Google bywają widoczne po kilku tygodniach. Nowe podstrony usług i kierunków zwykle potrzebują trzech–sześciu miesięcy, dlatego podstrony na sezon letni warto mieć gotowe zimą."],
          ["Co jest lepsze: pozycjonowanie czy Google Ads?", "Reklama daje telefony od razu i kończy się z budżetem. Pozycjonowanie rośnie miesiącami, ale potem przyprowadza klientów bez opłaty za kliknięcie. Wiele firm przeprowadzkowych łączy jedno z drugim: reklamę w sezonie, SEO przez cały rok."],
          ["Czy warto dalej brać zlecenia z Oferteo i Fixly?", "Jeśli się opłacają, tak. Warto jednak policzyć, ile płacisz za jedno wygrane zlecenie, skoro to samo zapytanie widzi kilka firm. Pozycjonowanie pozwala z czasem mniej od nich zależeć."],
          ["Czy potrzebuję podstrony dla każdego miasta?", "Tylko dla miast i kierunków, w których naprawdę pracujesz i możesz napisać coś konkretnego. Kopiowane podstrony z podmienioną nazwą miasta Google traktuje jako spam."],
          ["Czy publikować cennik przeprowadzek na stronie?", "Warto pokazać przynajmniej zasady: stawkę za godzinę lub ryczałt, minimalny czas i dopłaty. Klient szybciej decyduje, a asystenci AI mają liczbę z Twoją nazwą. Ostateczną cenę możesz dalej podawać po zdjęciach lub oględzinach."],
          ["Czy pracujesz z firmami przeprowadzkowymi spoza Warszawy?", "Tak, z całej Polski. Pozycjonowanie robię zdalnie, na danych wyszukiwań dla Twojego miasta i kierunków, po polsku, a wersje dla klientów z zagranicy — także po angielsku."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie firmy przeprowadzkowej: co mi wysłać"),
        p(
          "Wyślij link do strony i do wizytówki w Mapach Google, miasta i kierunki, w których chcesz mieć więcej zleceń, rodzaje przeprowadzek, na których Ci zależy, i informację, skąd dziś przychodzą klienci — Oferteo, Fixly, OLX czy polecenia. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
