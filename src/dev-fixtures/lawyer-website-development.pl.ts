// Landing page fixture: Strona internetowa dla kancelarii adwokackiej i prawnej
// (PL), group «lawyer-website-development». REWRITE of the old-template page at
// the same URL (/pl/strona-internetowa-dla-adwokata); none of the old text is
// reused. Market version for Polish kancelarie adwokackie i radcowskie, not a
// translation of lawyer-website-development.en.
// Semantic core (ref/lawyers.md, BRIEF.md): «strona internetowa dla kancelarii
// adwokackiej» 40 · «strona internetowa dla kancelarii» 10 · «strona dla radcy
// prawnego» (not measured). SERP: legal-marketing studios (marketingprawniczy,
// stronydlaprawnika, thelion, marketingprawnikow, reklamaprawnika, smartwww).
// Headings also use «kreator stron czy strona na zamówienie» and «ile kosztuje
// strona internetowa dla kancelarii adwokackiej».
// Intent (ref/intent-check-lawyers.md): «strona internetowa adwokata» is people
// looking for a lawyer (mecenasi.pl, real kancelaria sites, Wikipedia) — 0
// shared URLs with «strona internetowa dla kancelarii» → not targeted; the slug
// stays as it is. Website vs pozycjonowanie: separate pages.
// Key angle: ethics rules ban advertising and allow information — applied to
// what may be on the site (specialisations, team, contact, articles; care with
// case results and client opinions). RODO and confidentiality on contact
// forms; language versions for foreign clients. Stated generally, no article
// numbers, «not legal advice».
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna strona od 8500 zł,
// projekt graficzny w cenie.
// NOT on this page: pozycjonowanie, wizytówka Google, wyszukiwarki adwokatów i
// radców (/pl/seo-dla-kancelarii-prawnych); Warsaw SEO
// (/pl/oferty/pozycjonowanie-strony-kancelarii-prawnej-warszawa); multilingual
// builds in general (/pl/oferty/tworzenie-stron-wielojezycznych).
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s segment.
import { p, h2, li, ol, link, k } from "./pt";

export const lawyerWebsiteDevelopmentPl = {
  lang: "pl",
  group: "lawyer-website-development",
  slug: "strona-internetowa-dla-adwokata",
  title: "Strona internetowa dla kancelarii adwokackiej i prawnej",
  heading: "Strona internetowa dla kancelarii adwokackiej i prawnej",
  excerpt:
    "Tworzę strony internetowe dla kancelarii adwokackich i radcowskich: specjalizacje, sylwetki prawników, artykuły z autorem, formularz zgodny z RODO i tajemnicą zawodową oraz wersje językowe dla klientów z zagranicy — rzeczowo, bez reklamy, za cenę z cennika.",
  seo: {
    metaTitle: "Strona dla kancelarii i radcy prawnego od 3000 zł | Bandziuk",
    metaDescription:
      "Strona internetowa dla kancelarii adwokackiej i radcy prawnego: specjalizacje, zespół, formularz zgodny z RODO, wersje językowe, projekt w cenie. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Zgodna z zasadami etyki i RODO"],
  heroPhonePoints: ["Specjalizacje kancelarii", "Zespół i wpisy na listę", "Formularz bez szczegółów sprawy", "Wersje PL · EN · UA"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla kancelarii adwokackiej lub radcy prawnego, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona kancelarii z podstronami specjalizacji, sylwetkami prawników, artykułami, wersjami językowymi i formularzem zgodnym z RODO, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową dla kancelarii",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej specjalizacji", text: "Rodzaje spraw, przebieg współpracy, pierwsze spotkanie" },
        { _key: k("o"), iconName: "file-text", title: "Sylwetki prawników i artykuły z autorem", text: "Tytuł zawodowy, izba, języki, data aktualizacji" },
        { _key: k("o"), iconName: "shield-check", title: "Formularz zgodny z RODO i tajemnicą", text: "Bez szczegółów sprawy przed pierwszym kontaktem" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje językowe dla cudzoziemców", text: "Angielska, ukraińska, niemiecka — tam, gdzie prowadzicie sprawy" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty tekstem, dane strukturalne kancelarii i prawników" },
        { _key: k("o"), iconName: "gauge", title: "Szybka na telefonie i Wasza", text: "Poniżej 2,5 s, kod, treści i domena należą do kancelarii" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona kancelarii", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Specjalizacje, zespół, artykuły, wersje językowe", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe firm usługowych, które zaprojektowałem i zbudowałem",
      subtitle:
        "Wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów, firma skanowania laserowego 3D i BIM, firma remontowo-inwestycyjna, warsztat samochodowy i pracownia renowacji felg. Łączy je to, czego potrzebuje kancelaria: klient najpierw sprawdza, komu może zaufać, a strona prowadzi go do telefonu albo zapytania i szybko działa na telefonie.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla kancelarii",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa kancelarii lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Brak strony", "Strona z kreatora", "Stara strona na WordPressie", "Tylko profil w wyszukiwarce adwokatów lub radców"] },
        { _key: k("z"), question: "Jakie wersje językowe są potrzebne?", options: ["Tylko polska", "Polska i angielska", "Polska, angielska i ukraińska", "Inny zestaw języków"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla kancelarii adwokackich i radcowskich — strukturę, projekt graficzny, wykonanie, teksty i uruchomienie — więc za całość odpowiada jedna osoba, a cena jest znana z góry. Strona kancelarii ma pomóc klientowi w dwóch rzeczach: sprawdzić, czy trafił do właściwego prawnika, i bezpiecznie się z nim skontaktować. Wszystko na niej jest informacją o kancelarii, a nie reklamą, bo tak wyznaczają zasady etyki zawodowej."),

        h2("Strona internetowa dla kancelarii adwokackiej: informacja zamiast reklamy"),
        p("Zasady etyki adwokackiej i radcowskiej zabraniają reklamy, ale pozwalają informować o kancelarii. W praktyce to wskazówka, jak strona ma wyglądać: rzeczowo, spokojnie, z faktami zamiast haseł. Człowiek w trudnej sytuacji i tak nie szuka sloganów, tylko odpowiedzi, czy kancelaria zajmuje się jego sprawą i kto ją poprowadzi."),
        p("Projekt graficzny jest w cenie. Zamiast Temidy, paragrafów i młotka sędziowskiego ze stocku — którego zresztą w polskich sądach się nie używa — są prawdziwe zdjęcia prawników i biura, czytelna typografia i kontakt widoczny na każdej podstronie. To ogólny opis zasad, nie porada prawna; ostateczne brzmienie tekstów zatwierdzacie Wy, zgodnie z uchwałami swojego samorządu."),

        h2("Co może być na stronie kancelarii: specjalizacje, zespół, kontakt i artykuły"),
        p("Strona, która informuje i jednocześnie przyprowadza klientów, składa się z kilku stałych elementów:"),
        li("specjalizacje i rodzaje spraw — każda z własną podstroną: czym się zajmujecie, jak wygląda współpraca, co przygotować na pierwsze spotkanie"),
        li("zespół — sylwetka każdego prawnika z tytułem zawodowym, izbą, wykształceniem, językami i obszarami pracy"),
        li("kontakt — adres każdego biura, godziny, dojazd, telefon jednym dotknięciem i możliwość konsultacji online"),
        li("artykuły — objaśnienia przepisów i procedur z autorem i datą aktualizacji"),
        li("dane kancelarii — forma prowadzenia działalności, NIP, informacja o wpisie na listę i o ubezpieczeniu OC"),
        p("Każdy z tych elementów to także sygnał, którego Google szuka, zanim uzna stronę za wiarygodne źródło w sprawach prawnych."),

        h2("Wyniki spraw i opinie klientów na stronie kancelarii: na co uważać"),
        p("Dwa elementy, które na stronach innych firm działają najlepiej, w kancelarii wymagają ostrożności. Opis wygranych spraw łatwo odczytać jako obietnicę wyniku, a nawet zanonimizowany opis bywa rozpoznawalny dla otoczenia klienta. Opinie wybrane i opublikowane przez kancelarię mogą zostać uznane za reklamę, a zabieganie o nie — za niedozwolone pozyskiwanie klientów."),
        p("Bezpieczniejsze rozwiązania, które proponuję: opis typowych spraw i przebiegu postępowania zamiast listy sukcesów, publikacje i wystąpienia prawników zamiast pochwał, a opinie tam, gdzie klienci wystawiają je sami, czyli w wizytówce Google. Czy i w jakiej formie pokazać coś więcej, decydujecie Wy, zgodnie ze stanowiskiem swojej izby."),

        h2("Strona dla radcy prawnego obsługującego firmy"),
        p("Strona dla radcy prawnego, który pracuje głównie z przedsiębiorcami, wygląda inaczej niż strona kancelarii rodzinnej czy karnej. Klient firmowy porównuje kilka kancelarii, czyta dłużej i chce wiedzieć, jak będzie wyglądała stała współpraca:"),
        li("podstrony usług dla firm: umowy, spory, windykacja, prawo pracy dla pracodawców, RODO, zakładanie i przekształcanie spółek"),
        li("opis stałej obsługi prawnej: kto odpowiada na pytania, w jakim czasie i jak rozliczana jest praca"),
        li("branże, z którymi kancelaria pracuje, opisane ogólnie, bez nazw klientów, jeśli nie zgodzili się na ich podanie"),
        li("wersja angielska dla zagranicznych wspólników i działów prawnych"),
        p("Kancelaria, która ma klientów indywidualnych i firmowych, dostaje dwie osobne ścieżki od strony głównej, bo te osoby szukają czego innego i inaczej podejmują decyzję."),

        h2("Formularz kontaktowy kancelarii: RODO i tajemnica zawodowa"),
        p("Formularz na stronie kancelarii zbiera dane osobowe, a czasem więcej, niż kancelaria chce dostać przed rozmową. Buduję go tak:"),
        li("pyta tylko o imię, telefon lub e-mail, rodzaj sprawy z listy i krótką wiadomość"),
        li("nad polem wiadomości jest prośba, żeby nie opisywać szczegółów sprawy i nie dołączać dokumentów przed pierwszym kontaktem"),
        li("przy przycisku jest informacja, że wysłanie formularza nie oznacza powierzenia sprawy ani udzielenia porady prawnej"),
        li("opcjonalne pole na nazwę drugiej strony pozwala sprawdzić konflikt interesów przed spotkaniem"),
        li("klauzula informacyjna wskazuje kancelarię jako administratora danych i prowadzi do polityki prywatności"),
        li("zgłoszenia przychodzą szyfrowanym połączeniem na skrzynkę kancelarii, bez kopii w zewnętrznych narzędziach do formularzy"),
        p("Baner cookies blokuje analitykę do czasu zgody. Szablon polityki prywatności przygotowuję na podstawie tego, co faktycznie robi strona, a jej ostateczną treść zatwierdzacie Wy jako administrator danych."),

        h2("Wersje językowe strony kancelarii dla klientów z zagranicy"),
        p("Kancelarie w całej Polsce obsługują coraz więcej osób, które nie mówią po polsku: obywateli Ukrainy, zagranicznych pracowników, cudzoziemców kupujących mieszkania, firmy z kapitałem zagranicznym. Jeśli prowadzicie sprawy po angielsku, ukraińsku czy niemiecku, strona powinna to mówić w tym języku, a nie tylko zapewniać po polsku, że obsługujecie cudzoziemców."),
        li("każda wersja językowa ma własne adresy podstron i oznaczenia hreflang, żeby Google pokazywał właściwą wersję"),
        li("tłumaczone są podstrony, z którymi naprawdę przychodzą cudzoziemcy — pobyt i praca, nieruchomości, spółki — a nie cała strona na siłę"),
        li("terminologię prawną sprawdza prawnik, który prowadzi sprawy w danym języku"),
        li("formularz i klauzula RODO są w tym samym języku co podstrona"),
        p(
          "Więcej o tym, jak buduję strony w kilku językach, na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Strona kancelarii, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Klienci pytają ChatGPT, Perplexity albo podsumowania AI w Google: „adwokat od rozwodów w Toruniu, który mówi po angielsku”, „radca prawny od umów IT w Krakowie”. Asystent poleca kancelarie, o których potrafi coś przeczytać i sprawdzić. Dlatego na stronie, którą buduję:"),
        li("specjalizacje, miasta, języki i nazwiska prawników są zapisane tekstem, a nie na grafikach"),
        li("dane strukturalne opisują kancelarię, biura i prawników tak samo jak wizytówka Google"),
        li("każdy artykuł ma autora, datę i własny adres"),
        p(
          "Dalsza praca nad widocznością w Google to pozycjonowanie, opisane na stronie ",
          link("pozycjonowanie strony kancelarii prawnej", "/pl/seo-dla-kancelarii-prawnych"),
          ". O samej widoczności w asystentach piszę na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Kreator stron czy strona na zamówienie dla kancelarii prawnej"),
        p("Kreator, ogólny albo z szablonami dla prawników, uruchamia stronę szybko i za miesięczny abonament. Jednoosobowej kancelarii z jedną specjalizacją, do której klienci przychodzą z polecenia, to może wystarczyć. Strona na zamówienie opłaca się, gdy macie kilka specjalizacji lub biur, potrzebujecie wersji językowych, chcecie decydować, dokąd trafiają dane z formularza, albo planujecie pozycjonowanie. Przeniesienie strony z kreatora to w praktyce budowa od nowa, więc warto pomyśleć o tym na początku."),

        h2("Szybkość, hosting i własność strony kancelarii"),
        p("Wiele osób szuka prawnika na telefonie, często w stresie i w pośpiechu. Podstrony pojawiają się na telefonie w mniej niż 2,5 sekundy — to próg, który Google uznaje za dobry. Strona działa na hostingu z SSL i kopiami zapasowymi, w Next.js albo WordPressie, zależnie od tego, kto i jak będzie ją potem edytował."),
        p("Domena, kod i treści należą do kancelarii. Po uruchomieniu nie płacicie mi abonamentu: hosting i domenę opłacacie u dostawcy, a mnie tylko za zmiany, o które poprosicie. Dobrze zbudowana strona często przez wiele miesięcy nie wymaga żadnej pracy."),

        h2("Jak powstaje strona internetowa dla kancelarii prawnej"),
        ol("Brief. Przesyłacie specjalizacje, listę prawników, adresy biur, języki i pytania, które klienci zadają przy pierwszym kontakcie."),
        ol("Lista podstron i stała cena. Jeśli zakres zmieni się później, zmianę wyceniam przed jej wykonaniem."),
        ol("Projekt, najpierw na telefonie. Strona główna, podstrona specjalizacji i sylwetka prawnika są uzgadniane z Wami."),
        ol("Wykonanie i teksty. Piszę je na podstawie briefu, a Wy sprawdzacie treść merytoryczną i zgodność z zasadami samorządu."),
        ol("Uruchomienie. Domena, analityka po zgodzie, Search Console i dane strukturalne; dostajecie krótką instrukcję dodawania artykułów."),
        p(
          "Jeśli kancelaria ma już stronę, nowa wersja zachowuje pozycje w Google dzięki przekierowaniom ze starych adresów. Proces opisuję na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla kancelarii adwokackiej"),
        li("Prosta strona kancelarii — strona główna, specjalizacje, zespół, kontakt, formularz zgodny z RODO: od 3000 do 6000 zł."),
        li("Pełna strona — podstrony specjalizacji i biur, sylwetki prawników, artykuły z autorami, wersje językowe, rozbudowany formularz: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie w obu przypadkach, a widełki są podane w ",
          link("cenniku", "/pl/cennik"),
          ". Ogólnie o tym, jak buduję strony dla firm, piszę na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla kancelarii: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla kancelarii adwokackiej?", "Od 3000 do 6000 zł za prostą stronę i od 8500 zł za pełną stronę z podstronami specjalizacji, sylwetkami prawników, artykułami i wersjami językowymi. Projekt graficzny jest w cenie. Po krótkim opisie kancelarii podaję stałą cenę."],
          ["Czy strona kancelarii nie narusza zakazu reklamy?", "Zasady etyki zabraniają reklamy, ale pozwalają informować o kancelarii. Strona opisuje specjalizacje, prawników, biura i sposób kontaktu, bez superlatywów, obietnic wyniku i porównań z innymi. To ogólny opis, nie porada prawna — teksty zatwierdzacie Wy."],
          ["Czy na stronie kancelarii można podać ceny?", "Opis sposobu rozliczenia, na przykład stawki godzinowej albo ryczałtu, jest informacją. Ceny podane jako promocja lub zachęta do powierzenia sprawy wchodzą już w obszar reklamy. Sprawdźcie stanowisko swojej izby."],
          ["Czy formularz kontaktowy kancelarii musi być zgodny z RODO?", "Tak, bo zbiera dane osobowe. Formularz pyta tylko o potrzebne dane, ma klauzulę informacyjną i prośbę, żeby nie opisywać szczegółów sprawy, a wiadomość trafia tylko na skrzynkę kancelarii."],
          ["Czy strona może mieć wersję angielską i ukraińską?", "Tak. Każda wersja ma własne adresy i oznaczenia dla Google, a tłumaczone są podstrony, z którymi naprawdę przychodzą cudzoziemcy. Terminologię sprawdza prawnik, który prowadzi sprawy w tym języku."],
          ["Ile trwa stworzenie strony dla kancelarii?", "Prosta strona zwykle od dwóch do czterech tygodni od briefu, pełna z wersjami językowymi od czterech do ośmiu. Najwięcej zależy od tego, jak szybko gotowe są sylwetki prawników i uwagi do tekstów."],
          ["Do kogo należy strona kancelarii?", "Do kancelarii: domena, kod i treści. Możecie w każdej chwili przenieść stronę do innego hostingu albo innego wykonawcy."],
          ["Czy robisz strony dla kancelarii spoza Warszawy?", "Tak, dla kancelarii z całej Polski. Projekt i wykonanie prowadzę zdalnie, po polsku, angielsku albo rosyjsku. W Warszawie mogę przyjechać na spotkanie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla kancelarii: co mi wysłać"),
        p(
          "Wyślijcie nazwę kancelarii, link do obecnej strony albo profilu w wyszukiwarce adwokatów lub radców, specjalizacje, liczbę prawników i biur oraz języki, w których prowadzicie sprawy. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
