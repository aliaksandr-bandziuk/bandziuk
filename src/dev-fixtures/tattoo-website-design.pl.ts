// Landing page fixture: Strona internetowa dla studia tatuażu (PL), group
// «tattoo-website-design». New page. Market version for Polish tattoo studios
// and tatuatorzy pracujący na własny rachunek, not a translation of
// tattoo-website-design.en. In PL this is a development page that includes
// design.
// Semantic core: ref/batch-h1.md has no measured PL phrases for this group
// (PL related searches are local studio names — clients, not owners). Target
// phrases from BRIEF.md: «strona dla studia tatuażu» / «strona internetowa
// studia tatuażu» (H1, H2, cost H2, FAQ), «strona www studia tatuażu»
// (metaTitle). Intent from EN: ref/intent-check-delta.md — «tattoo website» vs
// «tattoo website design» 0 of 10 shared URLs → the page targets the owner.
// Polish angles: Booksy i Instagram jako dwa kanały studia (strona je
// uzupełnia), portfolio według stylu z pracami wygojonymi, podstrony
// tatuatorów, guest spot i flash day, formularz zapytania ze wzorami, zadatek
// BLIK / Przelewy24 z regulaminem (Landi Room), pielęgnacja, wiek, higiena,
// wersja angielska dla turystów (Kraków, Warszawa, Gdańsk, Wrocław), szybka
// galeria (Sasha Dith), Mapy Google, AI-readable build, szablon vs na
// zamówienie, koszt.
// NOT on this page: pozycjonowanie w szczegółach (/pl/oferty/pozycjonowanie-
// lokalne, linked once); argumenty o Booksy i cennikach salonów fryzjerskich
// (published neighbour /pl/strona-internetowa-dla-salonu-fryzjerskiego — not
// repeated); artyści sprzedający obrazy (/pl/strona-internetowa-dla-artysty,
// linked once); piercing; sklepy z akcesoriami do tatuażu.
// Portfolio: Sasha Dith, Landi Room, Giuseppe, auto repair, Felgilab.
// Prices: /pl/cennik (3000–6000 zł, od 8500 zł), projekt w cenie, faktura
// (bez VAT). Owner’s rules: every page covers AI search; never say there are
// no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const tattooWebsiteDesignPl = {
  lang: "pl",
  group: "tattoo-website-design",
  slug: "strona-internetowa-dla-studia-tatuazu",
  title: "Strona internetowa dla studia tatuażu",
  heading: "Strona internetowa dla studia tatuażu i tatuatora",
  excerpt:
    "Strona internetowa dla studia tatuażu: portfolio według stylu i tatuatora, podstrony rezydentów i gości, formularz zapytania ze zdjęciami wzorów, zadatek przez BLIK, przyciski do Booksy i wersja angielska dla turystów. Projektuję i programuję całość sam, a kwotę ustalamy przed startem prac.",
  seo: {
    metaTitle: "Strona www studia tatuażu z zadatkiem online | Bandziuk",
    metaDescription:
      "Strona internetowa dla studia tatuażu: portfolio według stylu, tatuatorzy i guest spoty, zapytania ze wzorami, zadatek BLIK, Booksy, wersja EN. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Zadatek przez BLIK"],
  heroPhonePoints: ["Zapytaj o tatuaż", "Fine line · Blackwork · Realizm", "Wpłać zadatek BLIK-iem", "Guest spot w tym miesiącu"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla studia tatuażu lub tatuatora, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona studia tatuażu z portfolio według stylu i tatuatora, podstronami gości, formularzem zapytania ze zdjęciami, zadatkiem online, wersją angielską i lokalnym SEO, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla studia tatuażu",
      items: [
        { _key: k("o"), iconName: "image", title: "Portfolio według stylu i tatuatora", text: "Fine line, blackwork, realizm, prace wygojone" },
        { _key: k("o"), iconName: "users", title: "Podstrona każdego tatuatora", text: "Rezydenci i goście, zapisy otwarte lub zamknięte" },
        { _key: k("o"), iconName: "file-text", title: "Zapytanie o tatuaż ze wzorami", text: "Miejsce, rozmiar, inspiracje, budżet, termin" },
        { _key: k("o"), iconName: "shield-check", title: "Zadatek BLIK-iem i jasny regulamin", text: "Zasady zaakceptowane przed wpłatą" },
        { _key: k("o"), iconName: "languages", title: "Wersja polska i angielska", text: "Dla turystów i obcokrajowców w Twoim mieście" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i ChatGPT", text: "Style, tatuatorzy, zasady i godziny tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona studia tatuażu lub tatuatora", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Portfolio, tatuatorzy, zapytania, zadatki, wersja EN", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: szybkie strony z galeriami, płatności online i lokalne firmy",
      subtitle:
        "Te strony łączy to, czego potrzebuje studio tatuażu. DJ i producent Sasha Dith ma stronę na Next.js z galerią wideo i formularzem rezerwacji, która ładuje się w niecałą sekundę — przy portfolio z setkami tatuaży szybkość jest tym samym wyzwaniem. Warszawski salon Landi Room przyjmuje płatności przez Stripe Checkout i sam wydaje dostęp po wpłacie, tak jak zadatek ma sam potwierdzać termin. Psychoterapeuta z Mediolanu dostał spokojny projekt dla usługi, w której decyduje zaufanie, a znalazł mnie przez ChatGPT. Warsztat samochodowy z Warszawy to Mapy Google, lokalne wyszukiwanie i podstrony usług, a Felgilab — czytelne usługi i ceny, czyli to, po czym klient z okolicy porównuje studia.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "official-website-for-dj-and-producer-sasha-dith",
        "e-commerce-landing-page-with-secured-video-access",
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla studia tatuażu",
      subtitle: "Najpóźniej następnego dnia roboczego wysyłam listę podstron dla studia, opis tego, jak zadziałają zapytania i zadatki, oraz stałą cenę.",
      contextLabel: "Studio, link do Instagrama albo obecnej strony",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak umawiają się dziś klienci?", options: ["Wiadomości na Instagramie", "Przez Booksy", "Telefon i WhatsApp", "Formularz na starej stronie"] },
        { _key: k("z"), question: "Jakie to studio?", options: ["Tatuator pracujący sam", "Studio z kilkoma rezydentami", "Studio przyjmujące gości", "Studio tatuażu i piercingu"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla studia tatuażu to usługa, którą wykonuję dla studiów i tatuatorów pracujących na własny rachunek: projektuję i buduję stronę, która pokazuje prace według stylu, przedstawia każdego tatuatora, zbiera zapytania razem ze zdjęciami wzorów i przyjmuje zadatek. Wszystko robię sam, za kwotę ustaloną przed startem, a stronę oddaję z panelem, w którym nowe prace dodaje recepcja albo sami tatuatorzy. Instagram i Booksy zostają na swoim miejscu — strona robi to, czego one nie potrafią."),

        h2("Instagram, Booksy i strona studia tatuażu: co robi każde z nich"),
        p("Polskie studio tatuażu zwykle stoi na dwóch nogach. Instagram pokazuje świeże prace i ściąga nowych ludzi, Booksy pilnuje kalendarza i przypomnień. Oba działają dobrze, ale żadne nie zastąpi strony:"),
        li("profil na Instagramie rzadko wychodzi w Google na „studio tatuażu Wrocław” albo „tatuaż fine line Poznań”, a strona z podstronami stylów ma na to szansę"),
        li("w Booksy tatuaż to pozycja z jedną ceną i czasem trwania, a większy projekt wymaga najpierw opisu, wzorów i wyceny"),
        li("regulamin zadatków, zasady dotyczące wieku i instrukcja pielęgnacji nie mieszczą się w opisie profilu"),
        li("prace sprzed roku giną w feedzie, nawet jeśli to najlepsze, co studio zrobiło"),
        p("Na stronie każdy kanał dostaje swoją rolę: konsultacje i krótkie sesje rezerwuje się przyciskiem prowadzącym do Booksy, projekty na zamówienie przez formularz zapytania, a link do Instagrama tatuatora jest na jego podstronie."),

        h2("Portfolio studia tatuażu na stronie: style, tatuatorzy i prace wygojone"),
        p("Klient wybiera najpierw styl, a dopiero potem osobę. Każde zdjęcie ma więc dwa znaczniki — styl i tatuatora — i galeria filtruje po obu: fine line, blackwork, realizm, old school, neo traditional, japoński, liternictwo, ornamental, kolor, cover-upy. Lista stylów pochodzi z Twojego studia, a nie z kategorii szablonu."),
        p("Obok świeżych prac stoją wygojone, wyraźnie podpisane. Przy cienkiej kresce to właśnie zdjęcie po pół roku przekonuje ostrożnego klienta. Prace publikujesz za zgodą klienta, a zgoda zaznaczona w formularzu przed sesją porządkuje sprawę na piśmie."),

        h2("Podstrony tatuatorów: rezydenci, guest spoty i flash day"),
        p("Każdy tatuator ma podstronę pod adresem studia: zdjęcie, style, które robi, i te, których nie bierze, staż, języki i jedna linijka o zapisach — otwarte, lista oczekujących albo zamknięte do konkretnego miesiąca. Przycisk na tej podstronie otwiera formularz z wybraną osobą albo jej kalendarz w Booksy."),
        p("Goście z innych miast i krajów dostają podstronę na czas guest spotu. Krótki kalendarz pokazuje najbliższe wizyty i flash daye: kto, kiedy i jak się zapisać — z wyprzedzeniem czy według kolejności przyjścia. Wzory z flash sheetu mają ceny i po wykonaniu dostają oznaczenie „zrobiony”, więc nikt nie pyta o projekt, którego już nie ma."),

        h2("Formularz zapytania o tatuaż: miejsce na ciele, rozmiar, wzory i budżet"),
        p("Wiadomości „ile za mały tatuaż?” nie da się wycenić. Formularz od razu zbiera to, o co tatuator i tak dopytuje:"),
        li("pomysł w kilku zdaniach i rodzaj pracy: nowy tatuaż, cover-up albo poprawka"),
        li("miejsce na ciele i przybliżony rozmiar w centymetrach, z prostym zarysem sylwetki do zaznaczenia"),
        li("do pięciu zdjęć inspiracji wgranych prosto z telefonu"),
        li("kolor czy czerń, widełki budżetu do wyboru, wybrany tatuator i pasujące terminy"),
        li("potwierdzenie pełnoletności i wygodny kanał odpowiedzi: mail, telefon albo Instagram"),
        p("Zapytania trafiają do skrzynki studia w jednym układzie, podpisane imieniem tatuatora. Po wycenie odpisujesz z linkiem do zadatku albo do terminu w Booksy."),

        h2("Zadatek za tatuaż online: BLIK, Przelewy24 i regulamin przed wpłatą"),
        p("Po akceptacji projektu klient dostaje link do zadatku — BLIK, szybki przelew albo karta przez Przelewy24 lub Stripe — a termin jest zajęty, gdy płatność wpłynie. Ten sam układ „płacisz i od razu dostajesz potwierdzenie” zbudowałem dla warszawskiego salonu Landi Room: strona kursu online przyjmuje płatność przez Stripe Checkout i automatycznie otwiera chronione wideo, a pierwsza kampania Google Ads sprzedała ponad 100 kursów. W studiu płatność zamiast wideo rezerwuje termin."),
        p("Nad przyciskiem płatności stoi regulamin, który klient akceptuje zaznaczeniem pola:"),
        li("wysokość zadatku i informacja, że odlicza się go od ceny sesji"),
        li("ile dni wcześniej można przełożyć termin i ile razy"),
        li("co dzieje się z zadatkiem, gdy klient nie przyjdzie albo odwoła za późno"),
        li("co, jeśli termin odwołuje tatuator"),
        p("Jeśli zadatki pobiera już Booksy, strona pokazuje te same zasady i prowadzi do kalendarza. Treść regulaminu jest Twoja; strona dba o to, żeby klient przeczytał go przed wpłatą."),

        h2("Pielęgnacja tatuażu, wiek klienta i higiena na stronie studia"),
        p("Kilka krótkich podstron odciąża recepcję. Instrukcja pielęgnacji tatuażu opisuje Twoje zalecenia — mycie, folię, czego unikać w pierwszych tygodniach: basenu, sauny, solarium — a link do niej klient dostaje SMS-em lub mailem po sesji, więc kartka nie jest jedyną kopią. Zasady dotyczące wieku mówią wprost, od ilu lat tatuujesz i jaki dokument trzeba pokazać. Podstrona o higienie opisuje sterylizację, jednorazowe igły i przygotowanie stanowiska tak, jak robi to Twoje studio."),

        h2("Strona studia tatuażu po polsku i angielsku dla turystów"),
        p(
          "W Krakowie, Warszawie, Gdańsku czy Wrocławiu część klientów to turyści i obcokrajowcy, którzy planują tatuaż na czas pobytu. Wersja angielska ma własne adresy, przetłumaczone style, regulamin i pielęgnację, a formularz pyta o daty pobytu w mieście, żeby tatuator od razu wiedział, czy zdąży. Teksty po polsku i angielsku przygotowuję sam; techniczną stronę wersji językowych opisuję na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Szybka strona studia tatuażu z setkami zdjęć prac"),
        p("Strona tatuażu to przede wszystkim zdjęcia, a to one najczęściej ją spowalniają: pełnowymiarowe pliki z telefonu, wideo odtwarzane samo i wtyczka ciągnąca feed z Instagrama. U mnie każde zdjęcie jest zmniejszane do ekranu, który je pobiera, i zapisywane w nowoczesnym formacie, galeria doładowuje się przy przewijaniu, a wideo startuje dopiero po dotknięciu."),
        p("Tak zbudowałem stronę DJ-a i producenta Sashy Dith na Next.js według jego projektu z Figmy: galeria wideo, dyskografia i formularz rezerwacji, a strona ładuje się w niecałą sekundę, odkąd zastąpiła wolne podstrony z kreatora. Portfolio studia z kilkuset pracami działa według tych samych zasad."),

        h2("Studio tatuażu w Mapach Google: wizytówka i frazy „tatuaż + miasto”"),
        p(
          "Klienci wpisują „studio tatuażu w pobliżu”, „tatuaż Kraków Kazimierz” albo styl z nazwą miasta i wybierają z mapy. Strona wspiera wizytówkę Google od pierwszego dnia: nazwa studia, ulica, numer telefonu i godziny otwarcia zgadzają się z wizytówką, a do tego dochodzą podstrony stylów, na których zależy Ci najbardziej, tatuatorzy pod prawdziwymi imionami i dane strukturalne studia. Opinie, w których klienci wymieniają styl i tatuatora, pomagają i wizytówce, i stronie. Dalszą pracę nad Mapami Google, opiniami i frazami lokalnymi opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Strona studia tatuażu, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Ludzie pytają już ChatGPT: „studio tatuażu w Gdańsku, które robi japońskie rękawy” albo „tatuator fine line w Łodzi z wolnymi terminami”. Asystent poleci tylko studio, o którym coś przeczyta. Style, tatuatorzy i ich specjalizacje, zasady zadatku, godziny i adres trafiają więc do HTML-a już w pierwszej odpowiedzi serwera, a nie jako grafika ani tekst dorysowany później przez skrypt. Te same fakty opisuje znacznik TattooParlor w danych strukturalnych, zgodny z wizytówką w Google. Giuseppe, psychoterapeuta z Mediolanu, którego stronę przebudowałem na Next.js, trafił do mnie przez ChatGPT, a jego nowe podstrony już pojawiają się w odpowiedziach."),
        p(
          "O tym, jak z miesiąca na miesiąc zdobywać wzmianki w odpowiedziach asystentów, piszę na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Szablon czy strona studia tatuażu na zamówienie"),
        p("Ciemny szablon z jednym dużym zdjęciem albo strona z kreatora to rozsądny początek dla tatuatora, który pracuje sam i ma zapisy na miesiące do przodu. Gdy studio rośnie, każda kolejna rzecz — filtr stylów i tatuatorów, formularz ze zdjęciami, zadatki według własnego regulaminu, kalendarz gości, wersja angielska — staje się wtyczką albo wyższym abonamentem, a strona wygląda jak wiele innych na tym samym motywie. Strona na zamówienie powstaje wokół Twoich stylów i ludzi, na WordPressie albo Next.js, a domena, zdjęcia i zapytania klientów zostają w studiu."),
        p(
          "Tatuatorzy, którzy sprzedają też obrazy, grafiki albo oryginalne flashe jako sztukę, znajdą format galerii ze sklepem na stronie ",
          link("strona internetowa dla artysty", "/pl/strona-internetowa-dla-artysty"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla studia tatuażu"),
        li("Prosta strona studia lub tatuatora — strona główna, portfolio według stylu, tatuatorzy, formularz zapytania, pielęgnacja i regulamin, kontakt: 3000–6000 zł."),
        li("Pełna strona z filtrowanym portfolio, podstronami tatuatorów i gości, formularzem ze zdjęciami, zadatkiem online, kalendarzem guest spotów, wersją angielską i lokalnym SEO: od 8500 zł."),
        p(
          "Obie kwoty obejmują projekt graficzny. Etapy pracy, od pierwszej rozmowy do uruchomienia, znajdziesz na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a ceny pozostałych usług — w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla studia tatuażu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla studia tatuażu?", "Prosta strona studia albo tatuatora kosztuje 3000–6000 zł, pełna — z filtrowanym portfolio, podstronami gości, formularzem ze zdjęciami, zadatkiem i wersją angielską — od 8500 zł. Projekt graficzny jest wliczony, a stałą kwotę podaję po obejrzeniu Twojego portfolio i sposobu zapisów. Wystawiam fakturę."],
          ["Czy strona zastąpi Booksy?", "Nie musi. Konsultacje i krótkie sesje nadal rezerwuje się w Booksy, a strona dokłada to, czego tam brakuje: portfolio według stylu, zapytania o projekty na zamówienie ze zdjęciami wzorów i pełny regulamin."],
          ["Jak klient wpłaci zadatek przez stronę?", "Po akceptacji projektu dostaje link do płatności BLIK-iem, szybkim przelewem albo kartą przez Przelewy24 lub Stripe. Przed wpłatą akceptuje regulamin zadatku, a pieniądze trafiają prosto na konto studia."],
          ["Czy portfolio może się samo uzupełniać z Instagrama?", "W głównej galerii tego nie polecam: osadzony feed spowalnia stronę, nie ma podziału na style i przestaje działać, gdy platforma zmienia zasady. Tatuator wybiera najlepsze prace i dodaje je w panelu z oznaczeniem stylu."],
          ["Czy można dodać tatuatora gościnnego na kilka dni?", "Tak. Podstrona gościa pojawia się przed wizytą z datami i zasadami zapisów, można do niej dodać flash sheet, a po wizycie zostaje jako archiwum albo przekierowuje na listę tatuatorów."],
          ["Ile trwa wykonanie strony dla studia tatuażu?", "Prosta strona zwykle dwa–trzy tygodnie. Pełna strona z zadatkami, kalendarzem i wersją angielską trwa dłużej, a tempo wyznaczają głównie zdjęcia prac i treść regulaminu — im szybciej je masz, tym wcześniej start."],
          ["Czy pracujesz ze studiami spoza Warszawy?", "Tak, ze studiami z całej Polski. Rozmawiamy przez wideo, uwagi zostawiasz bezpośrednio w projekcie, a zdjęcia i teksty przesyłasz przez komunikator. Wszystko da się załatwić bez spotkania na miejscu."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla studia tatuażu: co mi wysłać"),
        p(
          "Wyślij nazwę studia, adres profilu na Instagramie (i w Booksy, jeśli go masz), listę tatuatorów ze stylami, które robią, opis tego, jak dziś przyjmujesz zapisy, zasady zadatku i przekładania terminów, informację o guest spotach i flash dayach oraz kilka zdjęć prac, z których jesteś najbardziej dumny. W odpowiedzi dostaniesz plan podstron dla studia i jedną, stałą kwotę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
