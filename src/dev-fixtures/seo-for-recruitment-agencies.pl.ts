// Landing page fixture: Pozycjonowanie strony agencji pracy (PL), group
// «seo-for-recruitment-agencies». New page. Market version for Polish agencje
// pracy tymczasowej, agencje rekrutacyjne, headhunterzy and agencje doradztwa
// personalnego (one office or a network of oddziały) — not a translation of
// seo-for-recruitment-agencies.en.
// Semantic core: ref/batch-h1.md has no measured PL volume («marketing
// agencji pracy» 0). H1 and headings carry the owner’s form «pozycjonowanie
// strony agencji pracy» / «pozycjonowanie stron agencji rekrutacyjnych» plus
// the words both audiences type: agencja pracy tymczasowej, agencja
// rekrutacyjna, headhunter, praca od zaraz, Google for Jobs. PL PAA (candidate
// side, used as article topics in H2 1 and FAQ): Czy warto zatrudniać się przez
// agencję pracy? · Ile zarabia się przez agencję pracy? · Ile czasu można
// pracować przez agencję pracy? · Czy praca przez agencję liczy się do
// emerytury? · Ile kosztuje pozycjonowanie strony w 2026? (cost H2 + FAQ).
// Intent: EN checks (ref/intent-check-batch-h.md, intent-check-delta.md) —
// recruitment SEO vs recruitment website design 0 shared URLs → the build
// stays on /pl/strona-dla-agencji-rekrutacyjnej (linked once); recruitment vs
// staffing SEO 1 shared → one page; in PL «agencja pracy tymczasowej» is the
// staffing side and sits inside this page.
// Angles: two audiences (firms bring the money), podstrony branża × region for
// pracodawcy, headhunting H3, Google for Jobs and JobPosting (the agency is
// the employer in praca tymczasowa, pracodawca użytkownik is the plant),
// ogłoszenia po terminie, Pracuj.pl / OLX Praca / Indeed / LinkedIn, KRAZ
// number, no fees from candidates, recruiter profiles and GoWork opinions,
// wizytówka per oddział, raporty płacowe from own data, Ukrainian and English
// ad versions (legal employment only, no residence or permit advice), AI
// answers, report by audience, cost.
// NOT on this page: site build, job board, application forms, ATS integration
// (/pl/strona-dla-agencji-rekrutacyjnej); wizytówka in depth
// (/pl/oferty/pozycjonowanie-lokalne); paid job ads, social recruiting.
// Owner’s rules: PL form «pozycjonowanie strony …» in headings (never «…
// firmy», never «pozycjonowanie agencji pracy» without «strony»); every SEO
// page covers AI search (GEO, AEO); never say there are no clients from the
// visitor’s industry; «faktura», never «faktura VAT»; law in general terms.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForRecruitmentAgenciesPl = {
  lang: "pl",
  group: "seo-for-recruitment-agencies",
  slug: "pozycjonowanie-strony-agencji-pracy",
  title: "Pozycjonowanie strony agencji pracy",
  heading: "Pozycjonowanie strony agencji pracy",
  excerpt:
    "Zajmuję się pozycjonowaniem stron agencji pracy tymczasowej i agencji rekrutacyjnych: podstrony dla firm, które szukają pracowników w Waszej branży i regionie, oferty pracy w Google for Jobs, porządek z ogłoszeniami po terminie, wizytówki oddziałów, raporty płacowe z Waszych danych i widoczność w odpowiedziach AI — z wynikiem liczonym w zapytaniach od firm i aplikacjach kandydatów.",
  seo: {
    metaTitle: "SEO agencji pracy: firmy, kandydaci i AI | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony agencji pracy i agencji rekrutacyjnej: podstrony dla pracodawców, Google for Jobs, oferty po terminie, Mapy, AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Pracodawcy i kandydaci", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Agencja pracy tymczasowej Łódź", "Praca na magazynie od zaraz", "Oferty w Google for Jobs", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO agencji pracy: podstrony dla firm, oferty pracy w Google, wizytówki oddziałów, odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla agencji rekrutacyjnej: podstrony branż i regionów, dane JobPosting, profile rekruterów, pomiar", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony agencji pracy", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony agencji pracy",
      items: [
        { _key: k("o"), iconName: "users", title: "Podstrony dla firm szukających pracowników", text: "Branża i region, pisane dla kierownika i działu HR" },
        { _key: k("o"), iconName: "code", title: "Oferty pracy w Google for Jobs", text: "Dane JobPosting: stawka, miejsce, rodzaj umowy, termin" },
        { _key: k("o"), iconName: "layers", title: "Porządek z ogłoszeniami po terminie", text: "Bez martwych „Aplikuj”, stałe strony dla stałych stanowisk" },
        { _key: k("o"), iconName: "shield-check", title: "Numer KRAZ i zaufanie na stronie", text: "Rejestr, zasady dla kandydatów, opinie firm i ludzi" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w zapytaniach i aplikacjach", text: "Firmy i kandydaci liczeni osobno" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony agencji pracy", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony agencji pracy", value: "od 3500 zł / mies.", note: "podstrony dla firm, oferty, oddziały, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: serwisy dla dwóch grup odbiorców, firm B2B i katalogów ofert",
      subtitle:
        "Serwis agencji edukacyjnej odpowiada dwóm grupom odbiorców naraz i z jednego kraju urósł do dziesięciu — to ten sam układ, którego agencja pracy potrzebuje dla branż i regionów. ScanM2, firma skanowania laserowego 3D i modelowania BIM, przez dwa lata nie miała zapytań; po przebudowie strony ruch organiczny wzrósł 29 razy, a zapytania od firm przychodzą co tydzień. Platforma nieruchomości na Cyprze ma około 375 inwestycji aktualizowanych codziennie z plików deweloperów i przekierowania 301 dla każdego starego adresu — oferty pojawiają się i znikają jak ogłoszenia o pracę — a około 10% ruchu organicznego przychodzi z asystentów AI, bez żadnych kupionych linków. Do tego lokalne SEO i wizytówka w Mapach Google warszawskiego warsztatu samochodowego oraz 153 podstrony eksperckie konsultantki analityki handlu w trzech językach, napisane tak, żeby cytowały je asystenty AI.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "auto-repair-seo-and-ux-boost",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony agencji pracy",
      subtitle: "W ciągu jednego dnia roboczego odpowiadam, od których branż, oddziałów i poprawek w ofertach zacząłbym, i podaję stałą cenę.",
      contextLabel: "Nazwa agencji lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Kogo ma przyprowadzać wyszukiwarka?", options: ["Firmy, które szukają pracowników", "Kandydatów do pracy", "Jednych i drugich", "Pracowników tymczasowych na zmiany"] },
        { _key: k("z"), question: "Czym zajmuje się agencja?", options: ["Praca tymczasowa", "Rekrutacja stała i headhunting", "Rekrutacja IT", "Outsourcing pracowników"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony agencji pracy to moja usługa dla agencji pracy tymczasowej, agencji rekrutacyjnych i headhunterów: praca nad tym, żeby z Google i z asystentów AI przychodziły do Was firmy, które szukają pracowników, i ludzie, którzy szukają pracy. Robię to sam — jako niezależny specjalista SEO, który buduje też strony — więc ta sama osoba czyta dane wyszukiwań, pisze podstrony dla pracodawców i poprawia kod ogłoszeń."),

        h2("Pozycjonowanie strony agencji pracy: czego szukają kandydaci, a czego pracodawcy"),
        p("Kandydat wpisuje „praca magazyn Stryków od zaraz”, „praca na produkcji Poznań”, „praca tymczasowa dla studentów Wrocław”. Kierownik zakładu albo HR wpisuje „agencja pracy tymczasowej Łódź”, „agencja rekrutacyjna IT Kraków”, „outsourcing pracowników produkcja”. To dwie grupy, inne słowa i inne podstrony:"),
        li("kandydaci — ogłoszenia, Google for Jobs, stałe podstrony stanowisk i poradniki"),
        li("pracodawcy — podstrony branż i regionów, profile rekruterów, raporty płacowe, opisy realizacji"),
        li("Mapy Google — wizytówka każdego oddziału z opiniami obu grup"),
        li("odpowiedzi ChatGPT, Perplexity i podsumowania AI w Google"),
        p("Kandydaci dają ruch, a pieniądze płacą firmy, dlatego zwykle zaczynam od strony pracodawcy. Po stronie kandydatów dobrze działają poradniki na pytania, które ludzie wpisują przed podpisaniem umowy: czy warto zatrudnić się przez agencję pracy, ile się zarabia, jak długo można pracować u jednego pracodawcy użytkownika, czy ten okres liczy się do emerytury. Odpowiedzi piszę rzeczowo, z odwołaniem do przepisów i z datą aktualizacji."),

        h2("Podstrony dla pracodawców: pozycjonowanie stron agencji rekrutacyjnych na branżę i region"),
        p("Firma szuka agencji, która zna jej branżę i okolicę: „pracownicy tymczasowi na produkcję Wielkopolska”, „agencja pracy logistyka Śląsk”, „rekrutacja kierowców C+E”. Podstrona, która wychodzi wysoko na takie frazy, odpowiada na pytania kierownika, zanim zadzwoni:"),
        li("na jakie stanowiska rekrutujecie w tej branży i w jakich miastach"),
        li("w jakim czasie zwykle realizujecie zamówienie na ludzi — z Waszych danych, a nie z obietnic"),
        li("forma współpracy: praca tymczasowa, outsourcing, rekrutacja stała — i od czego zależy koszt, ogólnie"),
        li("opiekun klienta z imienia i nazwiska, z bezpośrednim telefonem"),
        li("krótkie opisy realizacji, za zgodą klienta albo bez nazwy firmy"),
        p("Podstrona powstaje tam, gdzie macie oddział, rekruterów i zrealizowane zamówienia. Kilkadziesiąt kopii z podmienioną nazwą powiatu Google traktuje jak strony przejściowe, a kierownik od razu widzi szablon."),
        h3("Headhunting i rekrutacja menedżerów: podstrony dla agencji executive search"),
        p("Fraz typu „headhunter finanse Warszawa” czy „rekrutacja dyrektora produkcji” jest mało, ale jedno zlecenie bywa warte więcej niż miesiąc pracy tymczasowej. Tu liczy się opis metody, branże, w których macie kontakty, i profile partnerów prowadzących projekty."),

        h2("Oferty pracy w Google for Jobs: dane strukturalne JobPosting na stronie agencji pracy"),
        p("Na wiele zapytań o pracę Google pokazuje nad wynikami osobny blok ofert. Ogłoszenie trafia tam dzięki danym strukturalnym JobPosting, a agencje tracą ten ruch głównie przez drobne błędy:"),
        li("tytuł to nazwa stanowiska, bez „PILNE!”, numeru referencyjnego i stawki"),
        li("stawka w baseSalary — godzinowa brutto przy pracy tymczasowej, miesięczna przy etacie"),
        li("pełny adres miejsca pracy albo oznaczenie pracy zdalnej"),
        li("datePosted i validThrough pobierane z systemu ATS, więc termin ważności jest prawdziwy"),
        li("spójny zapis pracodawcy: przy pracy tymczasowej pracodawcą jest agencja, a zakład to pracodawca użytkownik — tak samo w treści ogłoszenia i w danych"),
        p("Ogłoszenia zwykle powstają z wtyczki ATS albo z pliku, więc sprawdzam w Google Search Console, co Google faktycznie dostaje, i poprawiam szablon raz dla wszystkich ofert."),

        h2("Nieaktualne ogłoszenia na stronie agencji pracy: co zrobić z ofertą po zamknięciu rekrutacji"),
        p("Agencja pracy tymczasowej publikuje setki ogłoszeń rocznie. Zamknięte oferty z przyciskiem „Aplikuj” frustrują kandydatów i psują zaufanie Google do całego bloku ofert. Ustalam jedną zasadę dla serwisu:"),
        li("w dniu zamknięcia rekrutacji znika JobPosting albo validThrough przechodzi w przeszłość"),
        li("strona oferty zwraca 404 lub 410 albo zostaje z informacją „rekrutacja zakończona” i linkami do podobnych ofert"),
        li("adres wypada z mapy strony, a Google dostaje sygnał o usunięciu przez Indexing API"),
        li("stanowiska, na które rekrutujecie stale — operator wózka widłowego w Strykowie, pracownik produkcji w Pile — dostają stałą podstronę z bieżącymi ofertami, która zbiera linki między rekrutacjami"),

        h2("Pracuj.pl, OLX Praca, Indeed i LinkedIn a pozycjonowanie strony agencji pracy"),
        p("Na ogólne frazy, takie jak „praca Gdańsk” czy „praca magazyn”, wysoko będą Pracuj.pl, OLX Praca, Indeed i LinkedIn. Strona agencji wygrywa tam, gdzie wie więcej niż portal: konkretny zakład, zmiana, dojazd, zakwaterowanie, region — i we wszystkich wyszukiwaniach firm. Portale zostają kanałem dystrybucji ogłoszeń: oferta trafia najpierw na Waszą stronę, w pełniejszej wersji niż na portalu, a profil agencji na portalach ma te same dane co strona."),

        h2("Numer KRAZ, profile rekruterów i opinie: zaufanie na stronie agencji zatrudnienia"),
        p("Agencja zatrudnienia działa na podstawie wpisu do Krajowego Rejestru Agencji Zatrudnienia, a przepisy wymagają podawania numeru wpisu w ogłoszeniach. Na stronie warto pokazać go w stopce, na podstronie „O nas” i w każdej ofercie, a obok:"),
        li("informację, że kandydat nie płaci za skierowanie do pracy"),
        li("profile rekruterów: branże, regiony, lata w zawodzie i link do LinkedIn, z danymi strukturalnymi osoby"),
        li("odpowiedzi na opinie w Google, GoWork i Indeed — od kandydatów i od firm, bez danych osobowych"),
        p("To ogólny opis, a nie porada prawna; wiążące są aktualne przepisy."),

        h2("Wizytówka Google agencji pracy tymczasowej: osobny profil dla każdego oddziału"),
        p("„Agencja pracy blisko mnie” i „agencja pracy Kutno” rozstrzyga mapa. Każdy oddział z obsługą na miejscu dostaje własną wizytówkę z kategorią zgodną z tym, czym się zajmuje — na przykład agencja pośrednictwa pracy albo agencja pracy tymczasowej — linkiem do podstrony oddziału, godzinami przyjmowania kandydatów i zdjęciami prawdziwego biura. Punkt rekrutacyjny przy zakładzie klienta dostaje wizytówkę tylko wtedy, gdy w stałych godzinach przyjmuje w nim ludzi; inaczej Google ją zawiesi."),
        p(
          "Szerzej o pracy nad Mapami Google piszę na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Raporty płacowe i analizy rynku pracy z danych agencji rekrutacyjnej"),
        p("„Ile zarabia operator wózka widłowego w Łodzi” albo „stawki programistów Java 2026” to pytania kandydatów, pracodawców i dziennikarzy. Raport płacowy oparty na Waszych danych — przyjęte oferty, uzgodnione stawki, czas rekrutacji — z opisaną metodą, liczbą rekrutacji za każdą liczbą i okresem, którego dotyczy, zbiera linki z portali branżowych i lokalnych mediów i trafia do odpowiedzi AI. Stanowiska z za małą próbą pomijam. Raport ma stały adres i jest odświeżany co roku albo co kwartał."),

        h2("Ogłoszenia agencji pracy po ukraińsku i angielsku: wersje językowe dla kandydatów"),
        p("Wiele agencji zatrudnia osoby z Ukrainy i innych krajów, które mają prawo do pracy w Polsce. Szukają one w swoim języku, więc ogłoszenia i podstrony stanowisk w wersji ukraińskiej, rosyjskiej lub angielskiej, połączone przez hreflang, docierają do ludzi, których polska oferta nie złapie. Teksty po rosyjsku i angielsku piszę sam, po ukraińsku — z tłumaczem albo osobą z Waszej strony. Te wersje mówią o legalnym zatrudnieniu: kto jest pracodawcą, jaka umowa, jaka stawka; sprawy pobytu zostawiamy urzędom."),
        p(
          "Jak buduję takie wersje, opisuję na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Pozycjonowanie strony agencji pracy w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Kierownicy pytają ChatGPT i Perplexity: „jaka agencja pracy tymczasowej w Poznaniu obsłuży zakład produkcyjny”, „agencja rekrutacyjna IT w Krakowie dla małej firmy”. Kandydaci pytają: „czy warto pracować przez agencję pracy”. Asystent wymienia kilka agencji i podaje powody. Tę pracę określa się skrótami GEO (generative engine optimization) i AEO (answer engine optimization); w agencji pracy obejmuje:"),
        li("branże, regiony, formy współpracy i numer KRAZ zapisane prostymi zdaniami"),
        li("raporty płacowe i poradniki z autorem i datą"),
        li("te same dane agencji na stronie, w wizytówkach, na LinkedIn i w portalach z opiniami"),
        li("dane strukturalne organizacji, oddziałów i rekruterów połączone ze sobą"),
        p(
          "Przed rozpoczęciem pracy i po kilku miesiącach sprawdzam, które agencje asystenci polecają w Waszych branżach i miastach. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Raport z pozycjonowania strony agencji pracy: zapytania firm i aplikacje kandydatów"),
        p("W GA4 każda konwersja ma przypisaną grupę: aplikacje i przesłane CV według oferty, branży i oddziału po jednej stronie, zapytania firm, formularze „zgłoś zapotrzebowanie” i telefony na linię dla klientów po drugiej. Jeśli ATS albo CRM zapisuje źródło, śledzimy firmy z wyszukiwarki aż do podpisanych umów. Pierwsze efekty pozycjonowania zwykle widać po około półtora miesiąca, a stały wzrost przychodzi w ciągu trzech–sześciu miesięcy."),

        h2("Ile kosztuje pozycjonowanie strony agencji pracy"),
        li("Audyt SEO — podstrony dla firm, oferty w Google for Jobs, ogłoszenia po terminie, wizytówki, konkurencja i odpowiedzi AI: od 1000 zł, jednorazowo."),
        li("Jednorazowe prace — podstrony branż i regionów, poprawki szablonu ofert, profile rekruterów, raport płacowy, pomiar: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony agencji pracy — nowe podstrony dla firm, porządek w ofertach, oddziały, AI i raporty: od 3500 zł miesięcznie; dla agencji walczących o klientów w Warszawie, Krakowie, Wrocławiu czy Poznaniu od 5500 zł miesięcznie."),
        p(
          "Jeśli najpierw trzeba przebudować samą stronę — tablicę ofert, formularz aplikacji, rejestrację kandydatów — zajrzyj na stronę ",
          link("strona dla agencji rekrutacyjnej", "/pl/strona-dla-agencji-rekrutacyjnej"),
          ". Stałą współpracę opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", audyt na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ", a wszystkie ceny w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony agencji pracy: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony agencji pracy w 2026 roku?", "Audyt od 1000 zł, pojedyncze prace od 1000 do 3000 zł, stała współpraca od 3500 zł miesięcznie, a w największych miastach przy silnej konkurencji od 5500 zł. Napisz, w jakich branżach i regionach działacie, a podam stałą cenę."],
          ["Pozycjonować stronę pod kandydatów czy pod firmy?", "Pod jednych i drugich, ale nie po równo. Kandydatów przyprowadza głównie Google for Jobs i stałe podstrony stanowisk, kiedy dane ofert są poprawne. Firmy przynoszą przychód, więc większość nowych podstron piszę dla pracodawców."],
          ["Jak sprawić, żeby nasze oferty pojawiały się w Google for Jobs?", "Każde ogłoszenie potrzebuje danych strukturalnych JobPosting z nazwą stanowiska, miejscem pracy, stawką, datą publikacji i terminem ważności. Gdy oferty pochodzą z wtyczki ATS, poprawia się szablon i działa to dla wszystkich ogłoszeń."],
          ["Co zrobić z ogłoszeniem po zamknięciu rekrutacji?", "Tego samego dnia usunąć dane JobPosting albo ustawić termin ważności w przeszłości, a stronę oferty wyłączyć lub zostawić z informacją o zakończonej rekrutacji i linkami do podobnych ofert. Dla stanowisk, na które szukacie ludzi stale, lepsza jest jedna stała podstrona."],
          ["Czy strona agencji może wygrać z Pracuj.pl i OLX Praca?", "Na frazy ogólne rzadko. Na frazy z konkretnym stanowiskiem i miejscowością, na pytania kandydatów i na wszystkie wyszukiwania firm — tak, bo portal nie zna zakładu, zmian i warunków tak dobrze jak Wy."],
          ["Kiedy będą pierwsze efekty pozycjonowania strony agencji pracy?", "Poprawki w danych ofert i w wizytówkach działają często w kilka tygodni. Pierwsze efekty nowych podstron zwykle widać po około półtora miesiąca, a stały wzrost przychodzi w ciągu trzech–sześciu miesięcy."],
          ["Czy ChatGPT poleca agencje pracy?", "Poleca, jeśli ktoś wprost o to zapyta. Wybiera agencje, których branże, regiony, numer KRAZ i opinie potwierdzają strona, wizytówka i portale. Polecenia nikt nie zagwarantuje; zapisuję odpowiedzi asystentów na starcie i po kilku miesiącach."],
          ["Czy pracujesz z agencjami pracy spoza Warszawy?", "Pracuję z agencjami w całej Polsce, zdalnie, na danych wyszukiwań z Waszych regionów, a pierwsza rozmowa, 15–30 minut, jest bezpłatna. Fakturę wystawiam w euro albo w innej walucie, zgodnie z ustaleniami."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony agencji pracy: co mi wysłać"),
        p(
          "Wyślij link do strony i do wizytówek oddziałów, numer KRAZ, branże i regiony, w których chcesz mieć więcej klientów, informację, czy zajmujecie się pracą tymczasową, rekrutacją stałą czy headhuntingiem, oraz to, skąd na stronę trafiają ogłoszenia — z ATS, z pliku czy ręcznie. Odpowiem w ciągu jednego dnia roboczego, od czego zacząłbym i za jaką stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
