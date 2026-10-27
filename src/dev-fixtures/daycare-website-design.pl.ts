// Landing page fixture: Strona internetowa dla przedszkola i żłobka (PL), group
// «daycare-website-design». New page, batch H wave 2. Market version for Polish
// private (niepubliczne) przedszkola, punkty przedszkolne, żłobki and kluby
// dziecięce — written for Poland, not a translation of
// daycare-website-design.en. In PL this is a development page that includes
// design (projekt graficzny w cenie).
// Semantic core: ref/batch-h2.md (PL): strona internetowa dla przedszkola 40
// (H1, H2s, cost H2, FAQ); «strona dla żłobka» (BRIEF.md; H2s, FAQ);
// «strona przedszkola niepublicznego» (metaTitle, H2). Related searches used
// as context: «e przedszkole», «aplikacja do przedszkola» (parent-app H2),
// «przedszkola niepubliczne Warszawa» (local H2).
// Intent: ref/intent-check-batch-h.md — «strona internetowa dla przedszkola»
// vs «strona dla żłobka» 0 of 10 shared URLs. The przedszkole SERP is
// ready-made platforms for educational institutions (przedszkola.edu.pl,
// eprzedszkole.eu, stronaoswiatowa.pl, przedszkola24.pl) and an agency →
// platform vs custom H2; the żłobek SERP is government and BIP pages → this
// page is for private placówki only.
// Polish angles: rekrutacja na wrzesień and wolne miejsca per grupa; czesne,
// wpisowe, stawka żywieniowa, dofinansowanie (general, dated); grupy wiekowe,
// plan dnia, zajęcia dodatkowe; dni otwarte and lista oczekujących with minimal
// child data, wpisowe online (BLIK / card, Landi Room); kadra and verification
// required for work with children (general); wpis do ewidencji (przedszkole) /
// rejestr (żłobek, klub dziecięcy) — general; standardy ochrony małoletnich
// (general, «confirm with a lawyer»); zgoda na wizerunek, RODO; aplikacja
// przedszkolna linked, not copied; bilingual przedszkola; local search
// («pozycjonowanie strony przedszkola» in heading); AI-readable build; cost.
// NOT on this page: parents looking for a place; ongoing map and local work
// (/pl/oferty/pozycjonowanie-lokalne); szkoły językowe
// (/pl/strona-dla-szkoly-jezykowej — neighbour); very small sites
// (/pl/strona-internetowa-dla-malej-firmy — neighbour). Senior living (another
// care business for families) is the published neighbour — its theses are not
// reused.
// Prices: /pl/cennik — 3000–6000 zł, od 8500 zł, projekt w cenie. Owner’s
// rules: every page covers AI search; never say there are no clients from the
// visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const daycareWebsiteDesignPl = {
  lang: "pl",
  group: "daycare-website-design",
  slug: "strona-internetowa-dla-przedszkola",
  title: "Strona internetowa dla przedszkola i żłobka",
  heading: "Strona internetowa dla przedszkola i żłobka",
  excerpt:
    "Strona internetowa dla przedszkola niepublicznego albo żłobka, którą projektuję i wykonuję sam: grupy wiekowe i plan dnia, czesne z wpisowym i wyżywieniem podane wprost, wolne miejsca w każdej grupie, zapisy na dni otwarte i listę oczekujących, kadra oraz zdjęcia sal i ogrodu publikowane zgodnie ze zgodami rodziców.",
  seo: {
    metaTitle: "Strona dla przedszkola i żłobka niepublicznego | Bandziuk",
    metaDescription:
      "Strona internetowa dla przedszkola i żłobka: grupy i plan dnia, czesne i wolne miejsca, dni otwarte i lista oczekujących, kadra. Projekt w cenie, od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Zapisz się na dzień otwarty", "Maluchy · Średniaki · Starszaki", "Wolne miejsca od września", "Zadzwoń · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla przedszkola lub żłobka, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona przedszkola lub żłobka z podstronami grup i placówek, cennikiem, wolnymi miejscami, zapisami na dni otwarte, listą oczekujących z wpisowym online, wersją językową i SEO lokalnym, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową dla przedszkola",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej grupy", text: "Żłobek, maluchy, średniaki, starszaki" },
        { _key: k("o"), iconName: "file-text", title: "Czesne, wpisowe i wyżywienie tekstem", text: "Z rokiem szkolnym, którego dotyczą" },
        { _key: k("o"), iconName: "message-circle", title: "Dni otwarte i lista oczekujących", text: "Formularz bez zbędnych danych dziecka" },
        { _key: k("o"), iconName: "users", title: "Kadra z kwalifikacjami", text: "Nauczyciele, opiekunki i specjaliści" },
        { _key: k("o"), iconName: "image", title: "Zdjęcia sal, ogrodu i pracowni", text: "Zgodnie ze zgodami rodziców, bez imion" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Wiek, godziny, czesne i adres tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona przedszkola lub żłobka", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Grupy, cennik, zapisy, kadra, języki, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: spokojne strony budujące zaufanie, które zaprojektowałem i zbudowałem",
      subtitle:
        "Te realizacje łączy to, czego potrzebuje strona przedszkola. Giuseppe, psychoterapeuta z Mediolanu, dostał spokojny projekt na Next.js i Sanity dla usługi, którą wybiera się z zaufania — a do mnie trafił przez ChatGPT. Wielojęzyczna strona agencji edukacyjnej, rozbudowana z jednego kraju do dziesięciu, odpowiada rodzinom, które przed decyzją mają mnóstwo pytań. Warszawska przechowalnia opon ma stronę, której teksty właściciel zmienia sam — tak jak dyrekcja przedszkola będzie zmieniać jadłospis i wolne miejsca. Warszawski salon Landi Room przyjmuje płatności przez Stripe Checkout z automatycznym potwierdzeniem, czyli dokładnie to, czego wymaga wpisowe płatne online. Moja własna strona bandziuk.com działa w trzech językach z pełnym technicznym SEO.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "tyre-storage-landing-page-with-editable-seo",
        "e-commerce-landing-page-with-secured-video-access",
        "develop-and-optimize-a-personal-website-with-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla przedszkola",
      subtitle: "W ciągu jednego dnia roboczego odpowiadam propozycją podstron dla Waszych grup, zapisów i cennika oraz stałą ceną.",
      contextLabel: "Nazwa przedszkola lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaką placówkę prowadzicie?", options: ["Przedszkole niepubliczne", "Żłobek lub klub dziecięcy", "Punkt przedszkolny", "Kilka placówek pod jedną marką"] },
        { _key: k("z"), question: "Co macie teraz?", options: ["Tylko profil na Facebooku", "Stronę z kreatora lub szablonu", "Stronę z platformy dla placówek", "Starą stronę na WordPressie"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla przedszkola to usługa, którą wykonuję dla właścicieli przedszkoli niepublicznych, punktów przedszkolnych, żłobków i klubów dziecięcych: układam podstrony, projektuję wygląd i buduję stronę sam, więc za formularz zapisów i za to, jak wygląda, odpowiada jedna osoba. Rodzic szuka przedszkola z bardzo konkretnym pytaniem: czy od września jest miejsce dla trzylatka, ile to kosztuje miesięcznie i czy zdąży odprowadzić dziecko przed pracą. Strona, na której trzeba tego szukać, przegrywa z placówką dwie ulice dalej."),

        h2("Strona internetowa dla przedszkola: co rodzic sprawdza w pierwszej minucie"),
        p("Strona główna podaje bez przewijania:"),
        li("dla kogo jest placówka — na przykład „Przedszkole niepubliczne dla dzieci od 2,5 do 6 lat na Bemowie”, z Waszym wiekiem i dzielnicą"),
        li("godziny otwarcia i informację, czy przedszkole działa w wakacje i ferie"),
        li("adres z praktycznymi wskazówkami: gdzie zatrzymać auto przy odprowadzaniu, którym wejściem, jaki przystanek jest najbliżej"),
        li("czesne od określonej kwoty i to, czy w danej grupie są wolne miejsca"),
        p("Pod tym są dwa przyciski: zapis na dzień otwarty i zgłoszenie na listę oczekujących. Koncepcja pedagogiczna, historia i misja stoją niżej — czytają je rodzice, którzy już się zainteresowali."),

        h2("Grupy wiekowe, plan dnia i zajęcia dodatkowe na stronie przedszkola niepublicznego"),
        p("Każda grupa ma podstronę o tym samym układzie: wiek dzieci, liczebność i liczba opiekunów, plan dnia od otwarcia do zamknięcia, program i sposób informowania rodziców o postępach, wyprawka na pierwszy dzień. W żłobku dochodzą adaptacja, drzemki i przebieg pierwszego tygodnia. Zajęcia dodatkowe — angielski, rytmika, logopeda, sport — mają przy sobie informację, czy są w czesnym, czy płatne osobno, bo właśnie to rodzice porównują między placówkami."),
        p(
          "Przedszkola dwujęzyczne albo z codziennym angielskim mogą mieć stronę w dwóch językach — dla rodzin z zagranicy i dla tych, którzy wolą przeczytać ofertę po angielsku. Jak buduję takie strony, opisuję na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ", a szkoły uczące języków starsze dzieci i dorosłych mają osobną stronę: ",
          link("strona dla szkoły językowej", "/pl/strona-dla-szkoly-jezykowej"),
          ".",
        ),

        h2("Czesne, wpisowe i wyżywienie: cennik na stronie przedszkola"),
        p("Rodzic w Polsce porównuje zwykle trzy liczby: czesne, wpisowe i dzienną stawkę żywieniową. Cennik na stronie podaje je tekstem, osobno dla każdej grupy i dla pobytu pełnego lub skróconego, z rokiem szkolnym, którego dotyczą, i z listą tego, co czesne obejmuje. Jeśli placówka ma dotację z gminy albo rodzice mogą dostać wsparcie na pobyt dziecka w żłobku, jedno zdanie o tym zmienia rachunek, który rodzic robi w głowie. Zasady dofinansowań się zmieniają, więc ten fragment ma widoczną datę aktualizacji."),

        h2("Rekrutacja, dni otwarte i lista oczekujących na stronie żłobka i przedszkola"),
        p("Do placówki niepublicznej można zapisać dziecko przez cały rok, ale najwięcej zgłoszeń przychodzi wiosną, przed wrześniem. Strona pokazuje wolne miejsca w każdej grupie — „brak miejsc, lista oczekujących”, „2 miejsca od lutego”, „trwa rekrutacja na rok 2027/2028” — a dyrekcja zmienia ten wiersz w panelu w minutę."),
        p("Dni otwarte mają zapisy z limitem osób na termin; na indywidualną wizytę rodzic proponuje kilka terminów, a placówka potwierdza jeden. Formularz listy oczekujących pyta tylko o to, co potrzebne do kolejki: imię i kontakt rodzica, miesiąc i rok urodzenia dziecka, grupę, termin rozpoczęcia i liczbę godzin dziennie. PESEL, informacje o zdrowiu i alergiach oraz upoważnienia do odbioru należą do umowy i karty zgłoszenia, które wypełnia się później, a nie do formularza na publicznej stronie. Wpisowe można opłacić od razu BLIK-iem albo kartą, z automatycznym potwierdzeniem na maila."),

        h2("Kadra przedszkola na stronie: kwalifikacje nauczycieli i opiekunów"),
        p("Po cenniku rodzice najczęściej otwierają podstronę kadry. Przy każdej osobie jest zdjęcie, grupa, wykształcenie — pedagogika przedszkolna, kurs opiekuna w żłobku, uprawnienia logopedy czy psychologa — i kilka zdań napisanych przez nią samą. Pod zespołem krótko i ogólnie: jakie kwalifikacje placówka wymaga od każdego pracownika i że przechodzi on weryfikację, której przepisy wymagają przy pracy z dziećmi. Jeśli zespół pracuje razem od lat, warto podać, od kiedy każda osoba jest w przedszkolu."),

        h2("Wpis do ewidencji, bezpieczeństwo, jadłospis i alergie na stronie przedszkola"),
        p("Podstawę działania podajecie tekstem: przy przedszkolu niepublicznym — wpis do ewidencji prowadzonej przez gminę, przy żłobku i klubie dziecięcym — wpis do rejestru, z numerem i nazwą organu. Osobna podstrona zasad odpowiada na pytania, które padają przy każdej rozmowie z rodzicami:"),
        li("jak wygląda przyprowadzanie i odbiór oraz kto może odebrać dziecko"),
        li("jak zabezpieczone jest wejście i teren — opisane ogólnie"),
        li("kiedy chore dziecko powinno zostać w domu"),
        li("jadłospis na bieżący tydzień, własna kuchnia czy catering i sposób prowadzenia diet i alergii"),
        li("statut lub regulamin do pobrania"),
        p("Placówki pracujące z dziećmi muszą też mieć standardy ochrony małoletnich i udostępnić je rodzicom; strona jest do tego naturalnym miejscem. Treść tych dokumentów i to, co musicie publikować, potwierdzacie z prawnikiem — strona daje im stałe, łatwe do znalezienia miejsce."),

        h2("Zdjęcia dzieci na stronie przedszkola: zgoda rodziców i RODO"),
        p("Wizerunek dziecka to dane osobowe, a zasady jego publikowania są częścią standardów ochrony małoletnich. Na stronie stosuję je tak:"),
        li("zgoda rodziców podpisywana przy umowie, osobno na stronę i osobno na media społecznościowe, z możliwością wycofania"),
        li("galerie pokazują przede wszystkim sale, kącik czytelniczy, ogród, prace plastyczne i kuchnię"),
        li("dzieci, jeśli już są w kadrze, widać z daleka, od tyłu albo przy zajęciach, bez imion i nazw grup w podpisach"),
        li("z plików znikają dane o miejscu wykonania zdjęcia, zanim trafią na serwer"),
        p("Zdjęcia z pasowania na przedszkolaka czy Dnia Babci i Dziadka trafiają do aplikacji albo zamkniętej galerii dla rodziców, a nie na publiczną stronę."),

        h2("Aplikacja przedszkolna i strona internetowa przedszkola: co gdzie trzymać"),
        p("Rodzice dostają wieści z dnia różnymi kanałami: w aplikacji przedszkolnej, w zamkniętej grupie albo mailem. Strona żadnego z nich nie zastępuje i nie powiela. Ma za to stałe miejsce na link do logowania w aplikacji i krótką instrukcję dla nowych rodziców: jak się zarejestrować, gdzie znaleźć jadłospis, jak zgłosić nieobecność. Obecności, rozliczenia i zdjęcia z zajęć zostają tam, gdzie dostęp mają tylko rodzice z danej grupy, a strona zbiera wyłącznie zgłoszenia na listę oczekujących."),

        h2("Pozycjonowanie strony przedszkola w Mapach Google i wynikach lokalnych"),
        p("Rodzice szukają blisko domu albo pracy: „przedszkole niepubliczne Bemowo”, „prywatny żłobek Ursus”, „przedszkole z angielskim Wrocław Krzyki”. Strona przygotowana do takich wyszukiwań ma podstronę każdej placówki z jej adresem, godzinami i wolnymi miejscami, nazwę i adres zapisane tak samo jak w wizytówce Google i szybko ładuje się na telefonie. Opinie rodziców w wizytówce ważą więcej niż wszystko, co przedszkole napisze o sobie, więc link do wystawienia opinii jest pod ręką."),
        p(
          "Stałą pracę nad wizytówką i wynikami w okolicy opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Strona przedszkola, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Rodzice pytają też asystentów AI: „które przedszkole na Woli ma wolne miejsce dla trzylatka od lutego” albo „żłobek z dłuższymi godzinami w Oliwie”. ChatGPT i podsumowania AI w Google odpowiadają na podstawie tego, co mogą przeczytać. Dlatego wiek dzieci, grupy, godziny, czesne od, wpis do ewidencji lub rejestru, języki i adres są na stronie zwykłym tekstem, zgodnym z wizytówką, i opisane znacznikami schema.org: ChildCare dla żłobka, Preschool dla przedszkola. Tak samo zbudowałem stronę Giuseppe z Mediolanu — znalazł mnie przez ChatGPT, a jego nowe podstrony już pojawiają się w odpowiedziach."),
        p(
          "Jak utrzymać placówkę w odpowiedziach AI na dłużej, wyjaśniam na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Gotowa platforma, szablon czy strona przedszkola na zamówienie"),
        p("Po wpisaniu „strona internetowa dla przedszkola” Google pokazuje głównie gotowe platformy dla placówek oświatowych. Wiele z nich powstało z myślą o przedszkolach publicznych, z modułami, których placówka niepubliczna nie potrzebuje, i z układem, przez który strony wyglądają podobnie. Szablon z kreatora albo taka platforma to rozsądny start dla małego punktu przedszkolnego czy klubu dziecięcego."),
        p("Strona na zamówienie opłaca się, gdy macie kilka grup z różnym planem dnia, listę oczekujących dla każdej z nich, drugi język albo kilka placówek pod jedną marką. Buduję ją na WordPressie lub Next.js, z panelem, który dyrekcja obsłuży bez pomocy, a domena i treści są zapisane na Was. W projekcie unikam tęczowych liter i bajkowych krojów: decyzję podejmują dorośli, którzy liczą pieniądze i pytają o bezpieczeństwo, więc wystarczą jeden–dwa kolory marki, czytelne pismo i miejsce na zdjęcia sal."),
        p(
          "Bardzo małej placówce, której wystarczy kilka podstron, prostszy wariant opisuję na stronie ",
          link("strona internetowa dla małej firmy", "/pl/strona-internetowa-dla-malej-firmy"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla przedszkola"),
        li("Prosta strona przedszkola lub żłobka — strona główna, grupy, cennik i wolne miejsca, kadra, kontakt i zapis na dzień otwarty: od 3000 do 6000 zł."),
        li("Pełna strona z podstroną każdej grupy i placówki, listą oczekujących z wpisowym płatnym online, zasadami i dokumentami, linkiem do aplikacji, wersją językową i SEO lokalnym: od 8500 zł."),
        p(
          "Projekt graficzny jest wliczony w obie kwoty, a hosting i domenę opłacacie u dostawców, na swoim koncie. Wszystkie stawki są w ",
          link("cenniku", "/pl/cennik"),
          ", a etapy pracy — na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla przedszkola: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla przedszkola?", "Za prostą stronę przedszkola zapłacicie od 3000 do 6000 zł; strona z podstronami grup i placówek, listą oczekujących, wpisowym płatnym online, wersją językową i SEO lokalnym kosztuje od 8500 zł. Projekt graficzny jest w cenie, a stałą kwotę podaję, gdy znam Wasze grupy i liczbę placówek."],
          ["Czy na stronie przedszkola warto podawać czesne?", "Tak, przynajmniej kwotę od, wpisowe i stawkę żywieniową. Rodzic, który zna te liczby przed telefonem, dzwoni już z pytaniem o wolny termin, a nie o cenę."],
          ["Czy taka strona nadaje się dla żłobka albo klubu dziecięcego?", "Tak. Układ jest ten sam, zmieniają się treści: wiek od kilku miesięcy, adaptacja, drzemki, wpis do rejestru zamiast ewidencji i informacja o dofinansowaniu pobytu."],
          ["Czy rodzice mogą zgłosić dziecko i zapłacić wpisowe online?", "Mogą zapisać się na listę oczekujących i od razu zapłacić wpisowe BLIK-iem lub kartą, z automatycznym potwierdzeniem. Umowę i kartę zgłoszenia z danymi dziecka podpisujecie już poza stroną."],
          ["Czy możemy publikować zdjęcia dzieci na stronie przedszkola?", "Tylko dzieci, których rodzice zgodzili się na publikację wizerunku. Nawet wtedy bezpieczniej pokazywać sale, ogród i dzieci od tyłu, bez imion przy zdjęciach."],
          ["Czy dyrekcja sama zmieni jadłospis, wolne miejsca i kadrę?", "Tak. Wolne miejsca w grupach, jadłospis, cennik i profile kadry zmieniacie w prostym panelu, także z telefonu."],
          ["Czy pracujesz z przedszkolami spoza Warszawy?", "Tak, z placówkami z całej Polski. Pracuję zdalnie: rozmawiamy przez telefon lub wideo, kolejne etapy akceptujecie online, a rozliczenie jest na fakturę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla przedszkola: co mi wysłać"),
        p(
          "Przyślijcie nazwę placówki albo link do obecnej strony lub profilu na Facebooku, grupy i wiek dzieci, godziny otwarcia, czesne, wpisowe i stawkę żywieniową, sposób prowadzenia rekrutacji i dni otwartych, nazwę aplikacji dla rodziców i kilka zdjęć sali i placu zabaw z telefonu. W odpowiedzi dostaniecie propozycję podstron i stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
