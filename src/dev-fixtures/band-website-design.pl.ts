// Landing page fixture: Strona internetowa dla zespołu muzycznego (PL), group
// «band-website-design». New page. Market version for Polish zespoły — both
// zespoły weselne / eventowe and zespoły koncertowe z autorskim repertuarem —
// and DJ-e; not a translation of band-website-design.en.
// Semantic core: ref/creative-leisure.md — the PL «on topic» list has no
// band phrases (volumes under the source’s floor); target phrases from
// BRIEF.md: «strona internetowa dla zespołu muzycznego» (H1, H2s, cost H2,
// FAQ), «strona zespołu» / «strona zespołu weselnego» (H2s), «strona www dla
// zespołu muzycznego» (metaTitle), «strona internetowa dla DJ-a» (one H2),
// «pozycjonowanie zespołu muzycznego» (one H2). EN reference volumes: band
// website design 170, music band website 1,000, dj website 2,900 (mixed),
// seo for musicians 170.
// Intent: ref/intent-check-creative-leisure.md — EN «website for bands» =
// builders (Wix, Bandzoogle) → DIY demand; «seo for musicians» = music
// marketing blogs (1 shared URL) → one H2; «website for djs» = DJ tools
// (0 shared with «dj website design») → one H2 for DJs.
// Polish angles: zespół weselny vs koncertowy; repertuar, nagrania na żywo,
// wolne terminy w sezonie, oprawa i wodzirej; bilety Going., eBilet,
// Biletyna; Spotify, YouTube, Tidal; sklep z płatnościami BLIK i Przelewy24;
// newsletter (MailerLite); portale ślubne i Facebook vs własna strona; DJ na
// wesele i do klubu; local search «zespół na wesele + miasto».
// Prices: /pl/cennik — 3000–6000 zł, od 8500 zł, projekt w cenie.
// NOT on this page: artyści wizualni (/pl/strona-internetowa-dla-artysty,
// linked once); promocja w serwisach streamingowych, reklamy, prowadzenie
// social mediów; programy dla DJ-ów i strony z muzyką do pobrania; stała
// kampania SEO (/pl/oferty/pozycjonowanie-lokalne, linked in the SEO H2).
// Portfolio: Sasha Dith — direct case (DJ i producent, Next.js 14 z projektu
// Figma, dyskografia z linkami, formularz bookingu, poniżej sekundy); Landi
// Room (warszawski salon, płatne wideo po Stripe Checkout → płatny materiał
// zespołu); konsultantka analityki retail (marka osobista, trzy języki,
// wideo); Giuseppe (praktyka pod własnym nazwiskiem, podstrony w odpowiedziach
// ChatGPT); Cyprus VIP Estates (pięć języków, wideo → koncerty dla Polonii).
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const bandWebsiteDesignPl = {
  lang: "pl",
  group: "band-website-design",
  slug: "strona-internetowa-dla-zespolu-muzycznego",
  title: "Strona internetowa dla zespołu muzycznego",
  heading: "Strona internetowa dla zespołu muzycznego",
  excerpt:
    "Strona internetowa dla zespołu muzycznego od jednej osoby — projekt i wykonanie: koncerty z biletami, muzyka, która nie spowalnia strony, repertuar i wolne terminy dla zespołu weselnego, EPK z riderem, sklep z merchem i newsletter, który należy do Was.",
  seo: {
    metaTitle: "Strona www dla zespołu muzycznego i DJ-a | Bandziuk",
    metaDescription:
      "Strona internetowa dla zespołu muzycznego: koncerty i bilety, repertuar i terminy wesel, EPK i rider, sklep z merchem, newsletter, sekcja DJ. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Zespoły weselne, koncertowe i DJ-e"],
  heroPhonePoints: ["Najbliższe koncerty", "Posłuchaj na żywo", "Sprawdź wolny termin", "EPK i rider"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla zespołu muzycznego lub DJ-a, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona zespołu z podstronami płyt, archiwum koncertów, EPK, sklepem z merchem, formularzami rezerwacji, sekcją weselną lub DJ-ską i wersją językową, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową dla zespołu muzycznego",
      items: [
        { _key: k("o"), iconName: "layers", title: "Koncerty z linkami do biletów", text: "Going., eBilet, Biletyna, archiwum samo się układa" },
        { _key: k("o"), iconName: "gauge", title: "Odtwarzacze, które nie spowalniają", text: "Spotify i YouTube ładują się po kliknięciu" },
        { _key: k("o"), iconName: "file-text", title: "Repertuar i wolne terminy", text: "Dla par młodych i firm szukających zespołu" },
        { _key: k("o"), iconName: "image", title: "EPK dla klubów i mediów", text: "Bio, zdjęcia prasowe, rider, plan sceny" },
        { _key: k("o"), iconName: "message-circle", title: "Newsletter i zapytania o termin", text: "Fani według miast, wesela z datą i salą" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Gatunek, miasto, koncerty tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona zespołu lub DJ-a", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Płyty, EPK, sklep, rezerwacje, sekcja weselna", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: oficjalna strona DJ-a i producenta oraz inne strony artystów i marek osobistych",
      subtitle:
        "Na początek oficjalna strona DJ-a i producenta Sasha Dith: napisana od zera na Next.js 14, co do piksela według jego projektu w Figmie, z galerią wideo, siatką wydawnictw z linkami do serwisów streamingowych i formularzem zapytań o występy i współpracę. Zastąpiła wolne strony z kreatora i ładuje się w mniej niż sekundę. Obok strony, które łączy z zespołem inna część pracy: sprzedaż nagrań wideo z dostępem przez osobisty link dla warszawskiego salonu, marka osobista z kursami wideo w trzech językach, praktyka prowadzona pod własnym nazwiskiem, którą cytuje ChatGPT, i katalog z wideo w pięciu językach.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "official-website-for-dj-and-producer-sasha-dith",
        "e-commerce-landing-page-with-secured-video-access",
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla zespołu muzycznego",
      subtitle: "W ciągu dnia roboczego dostaniecie ode mnie plan podstron dla zespołu i stałą cenę.",
      contextLabel: "Nazwa zespołu, Facebook lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Tylko Facebook i Instagram", "Profil na portalu ślubnym", "Stronę z kreatora", "Starą stronę na WordPressie"] },
        { _key: k("z"), question: "Kto ma Was znaleźć przez stronę?", options: ["Pary młode i firmy", "Fani i kluby koncertowe", "Festiwale i media", "Klienci DJ-a"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla zespołu muzycznego to usługa, którą wykonuję w całości sam: układ podstron, projekt graficzny, kod, podłączenie biletów, odtwarzaczy i newslettera oraz uruchomienie. W Polsce zespół często gra dwie role naraz — w weekendy wesela i imprezy firmowe, między nimi koncerty z własnym materiałem — więc strona musi obsłużyć i fana, i parę młodą, i organizatora festiwalu."),

        h2("Strona internetowa dla zespołu muzycznego: co sprawdzają fani, organizatorzy i pary młode"),
        p("Fan po koncercie chce wiedzieć, gdzie gracie następnym razem, i włączyć utwór. Para młoda, która ogląda piąty zespół w tym tygodniu, szuka nagrania z prawdziwego wesela, składu i informacji, czy wybrana sobota w czerwcu jest wolna. Klub albo festiwal potrzebuje ridera i kontaktu do bookingu. Strona główna rozdziela te trzy drogi już na pierwszym ekranie:"),
        li("zdjęcie zespołu lub okładka nowej płyty, a nazwa zapisana tekstem, nie wtopiona w grafikę"),
        li("dwa wyraźne przyciski: „Koncerty” i „Wesela i eventy” — albo jeden, jeśli gracie tylko jedno"),
        li("odtwarzacz z najnowszym nagraniem"),
        li("telefon i formularz zapytania o termin widoczne bez przewijania"),
        p("Wygląd strony idzie za płytą. Zdjęcie na górze i kolor akcentu to pola w panelu, więc przy każdej premierze strona zmienia się razem z okładką, bez nowego projektu. Zespół weselny, który nie wydaje płyt, dostaje projekt oparty na zdjęciach z prawdziwych sal i scen: elegancki, ale nie sztywny, bo para ma zobaczyć, że przy Was goście tańczą."),

        h2("Koncerty na stronie zespołu: terminy z biletami z Going., eBilet lub Biletyny"),
        p("Lista koncertów to podstrona, którą fani otwierają najczęściej i która najszybciej się starzeje. Każdy termin ma datę, miasto, klub, supporty i przycisk prowadzący prosto do sprzedawcy biletów — Going., eBilet, Biletyna albo kasa klubu. Koncerty wyprzedane i odwołane są oznaczone, a te, które się odbyły, same przechodzą do archiwum. Archiwum pokazuje organizatorom, gdzie i jak często gracie. Dane strukturalne wydarzeń pomagają Google pokazać daty koncertów bezpośrednio w wynikach."),
        p("Jeśli gracie też dla Polonii — w Londynie, Dublinie czy Chicago — zagraniczne koncerty dostają opisy po angielsku i linki do tamtejszych sprzedawców biletów, a cała strona może mieć wersję angielską z osobnymi adresami podstron."),

        h2("Muzyka na stronie zespołu muzycznego: Spotify, YouTube i Tidal bez spowalniania"),
        p("Odtwarzacz przekonuje najszybciej, ale jest też najcięższym elementem strony. Dlatego na początku widać tylko lekką okładkę z przyciskiem odtwarzania, a właściwy odtwarzacz Spotify lub YouTube ładuje się po kliknięciu. Strona otwiera się szybko nawet na słabym zasięgu w sali koncertowej — tak działa strona DJ-a Sasha Dith, na której filmy z YouTube wczytują się dopiero wtedy, gdy są potrzebne, a całość ładuje się w mniej niż sekundę. Każda płyta i singiel ma swoją podstronę: okładka, lista utworów, skład i realizatorzy, teksty, linki do wszystkich serwisów, w tym Tidala i Apple Music, oraz teledyski."),

        h2("Strona zespołu weselnego: repertuar, nagrania na żywo i wolne terminy"),
        p("Para młoda wybiera zespół po nagraniach, nie po zdjęciach z sesji. Najlepiej działają krótkie filmy z prawdziwych wesel — pierwszy taniec, oczepiny, parkiet o drugiej w nocy — obok jednego dopracowanego materiału promocyjnego. Na podstronie weselnej są też:"),
        li("repertuar podzielony na polski, zagraniczny, biesiadny i do pierwszego tańca, z wyszukiwarką"),
        li("skład i instrumenty, informacja o wodzireju, nagłośnieniu i oświetleniu"),
        li("godziny grania, przerwy i to, czego zespół potrzebuje od sali"),
        li("kalendarz zajętych sobót w sezonie, który aktualizujecie sami"),
        p("Formularz zapytania pyta o datę, miejscowość, salę i liczbę gości. Cenę można podać „od” albo wysyłać w odpowiedzi — decyzja należy do Was. Opinie par najlepiej zostawić w Google i na portalach ślubnych, gdzie są niezależne, a ze strony do nich podlinkować."),

        h2("EPK i rider techniczny na stronie zespołu: materiały dla klubów, festiwali i mediów"),
        p("Elektroniczne press kit to podstrona, którą booker otwiera, zanim odpisze. W przeciwieństwie do PDF-a wysłanego rok temu jest zawsze aktualna. Zawiera krótkie i długie bio w trzeciej osobie, zdjęcia prasowe w wysokiej rozdzielczości z nazwiskiem fotografa, dwa–trzy nagrania koncertowe, cytaty z recenzji i ważniejsze koncerty — tylko prawdziwe — oraz plan sceny, input listę i rider do pobrania. Kontakty do bookingu, managera i wydawcy są na końcu. EPK może być publiczne albo pod adresem, który wysyłacie tylko branży."),

        h2("Sklep z merchem na stronie zespołu muzycznego: płyty, koszulki, BLIK i Przelewy24"),
        p("Płyty, winyle i koszulki często przynoszą więcej niż streaming. Mały sklep na WooCommerce działa w Waszym projekcie graficznym i przyjmuje płatności BLIK, kartą i przez Przelewy24, a wysyłka idzie paczkomatem albo kurierem. Jeśli wolicie nie trzymać kartonów w sali prób, strona może prowadzić do Bandcampa lub drukarni na żądanie, która sama drukuje i wysyła zamówienia. Rzeczy sprzedawane tylko na trasie mogą pojawić się przy konkretnym koncercie."),
        p("Sprzedawać można też wideo: zapis koncertu, warsztaty gry na instrumencie, materiał zza kulis. Płatność przyjmuje Stripe Checkout, a kupujący automatycznie dostaje osobisty link do obejrzenia. Na stronie kursu, którą zrobiłem dla warszawskiego salonu Landi Room, taki link wygasa po 14 dniach, a nagrania nie da się pobrać — przy ponad stu sprzedanych kursach nie było ani jednego przypadku udostępnienia dalej."),

        h2("Newsletter zespołu: własna lista fanów zamiast zasięgów na Instagramie"),
        p("Obserwujący na Instagramie, Facebooku i TikToku należą do platform. Gdy zmieni się algorytm albo ktoś przejmie konto, tracicie drogę do tych ludzi. Lista mailowa jest Wasza: można ją przenieść do innego dostawcy i napisać do każdego fana w dniu premiery. Zapis jest na każdej podstronie i pyta o e-mail i miasto, żeby o koncercie w Poznaniu napisać tylko fanom z okolic. Podłączam MailerLite albo narzędzie, którego już używacie. Lepiej działa konkretny powód zapisu — demo przed premierą, wcześniejszy dostęp do biletów — niż „zapisz się do newslettera”."),

        h2("Strona internetowa dla DJ-a: miksy, oferta na wesela i eventy, rider"),
        p("Przykład z mojej pracy to oficjalna strona DJ-a i producenta Sasha Dith. Zbudowałem ją na Next.js 14 dokładnie według jego projektu w Figmie: sekcje O mnie, Galeria wideo, Muzyka i Kontakt, a formularz zapytań o występy i współpracę stoi na tle zdjęcia z koncertu. Fani, media i agenci bookingowi mają jeden adres zamiast kilku profili."),
        p("Strona DJ-a działa według tej samej logiki co strona zespołu, tylko z innymi akcentami. Zamiast płyt są miksy z SoundCloud lub Mixcloud i nagrania setów. DJ klubowy pokazuje rezydencje, kluby i festiwale, w których grał, oraz EPK. DJ na wesela i imprezy firmowe pokazuje pakiety — liczbę godzin, nagłośnienie, światło, prowadzenie imprezy — kalendarz zajętych terminów i formularz z salą i liczbą gości. Rider z modelem odtwarzaczy, miksera i odsłuchu jest do pobrania. Jeśli gracie i w klubach, i na weselach, jedna strona obsługuje obie grupy dwoma wejściami ze strony głównej."),

        h2("Pozycjonowanie zespołu muzycznego: jak strona trafia do Google"),
        p("Fani wpisują nazwę zespołu, tytuł płyty albo „nazwa zespołu koncert”, a strona zespołu powinna być nad serwisami z biletami i tekstami piosenek. Pomaga w tym poprawny tytuł i opis strony, linki do niej ze Spotify, YouTube, Instagrama i Facebooka oraz dane strukturalne zespołu, koncertów i płyt. Zespoły weselne grają w innej lidze: para wpisuje „zespół na wesele Kraków” albo „DJ na wesele Lublin”, i tu decydują podstrony dla regionów, wizytówka Google oraz opinie."),
        p(
          "Tę stałą pracę opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Kreator stron, Bandzoogle czy strona zespołu na zamówienie"),
        p("Kreatory i serwisy dla muzyków, takie jak Bandzoogle czy Wix, dają działającą stronę w jeden wieczór. Na początek — jedna EP-ka, kilka koncertów — to rozsądny wybór. Strona na zamówienie opłaca się, gdy szablon nie pasuje już do Waszej muzyki, gdy dochodzi rozbudowany repertuar weselny, archiwum koncertów, sklep z płatnościami BLIK albo wersja angielska na trasę za granicą. Przed przeprowadzką eksportujecie listę mailową, a stare adresy dostają przekierowania."),

        h2("Strona zespołu muzycznego, którą czytają ChatGPT i przeglądy AI w Google"),
        p("Coraz więcej osób pyta asystentów: „zespół na wesele w Rzeszowie, który gra też rocka” albo „gdzie zagra w tym roku ten zespół”. Asystent poleci tylko zespół, o którym coś przeczytał. Dlatego gatunek, miasto, skład, repertuar, terminy koncertów i kontakt do bookingu stoją na stronie jako zwykły tekst, serwer wysyła gotowy HTML zamiast składać stronę skryptami, znaczniki schema.org opisują zespół, koncerty i płyty, a w robots.txt jest lista robotów AI, które mają dostęp. Tak samo zbudowałem stronę Giuseppe, psychoterapeuty z Mediolanu, i jego nowe podstrony już pojawiają się w odpowiedziach ChatGPT."),
        p(
          "Dalszą pracę nad widocznością w odpowiedziach AI opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla zespołu muzycznego"),
        li("Prosta strona zespołu lub DJ-a — strona główna, koncerty, muzyka, o zespole, EPK, kontakt i zapis do newslettera: od 3000 do 6000 zł."),
        li("Rozbudowana strona z podstronami płyt, archiwum koncertów, sklepem z merchem, sekcją weselną z repertuarem i kalendarzem, formularzami rezerwacji i wersją angielską: od 8500 zł."),
        p(
          "Projekt graficzny nie jest liczony osobno. Mój sposób pracy nad każdą stroną opisuje podstrona ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ". Malarze i ilustratorzy mają osobną ",
          link("stronę internetową dla artysty", "/pl/strona-internetowa-dla-artysty"),
          ". Wszystkie ceny są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla zespołu muzycznego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla zespołu muzycznego?", "Od 3000 do 6000 zł za prostą stronę zespołu lub DJ-a, od 8500 zł za stronę z płytami, archiwum koncertów, sklepem, sekcją weselną i rezerwacjami. W obu kwotach mieści się projekt graficzny; stałą cenę dostajecie, gdy opowiecie mi o zespole."],
          ["Czy zespół weselny potrzebuje strony, skoro ma Facebooka i profil na portalu ślubnym?", "Profil na portalu stoi obok konkurencji i wygląda jak wszystkie inne. Na własnej stronie para widzi pełny repertuar, nagrania z wesel, zajęte terminy i formularz zapytania — i nic nie odciąga jej uwagi. Najlepiej działa jedno i drugie, z linkiem z profilu do strony."],
          ["Czy podawać na stronie cenę za wesele?", "To Wasza decyzja. Cena „od” odsiewa zapytania spoza budżetu, ale strona działa też bez niej — wtedy formularz zbiera datę, salę i liczbę gości, a cenę wysyłacie w odpowiedzi."],
          ["Czy sami dodamy koncerty, nagrania i zajęte terminy?", "Tak. W panelu są gotowe pola na koncerty, płyty, filmy i daty, a nowe wpisy wyglądają tak samo jak reszta strony. Dostajecie krótką instrukcję i nagrania wideo z obsługi panelu."],
          ["Czy na stronie można sprzedawać płyty i koszulki?", "Tak — w małym sklepie z płatnościami BLIK, kartą i Przelewy24 albo przez link do Bandcampa czy drukarni na żądanie. Wybór zależy od tego, ile produktów macie i kto ma zajmować się wysyłką."],
          ["Ile trwa wykonanie strony zespołu?", "Najwięcej zależy od tego, jak szybko będą gotowe bio, zdjęcia, nagrania i repertuar. Razem z wyceną dostajecie harmonogram; prosta strona powstaje wyraźnie szybciej niż serwis z archiwum płyt, sklepem i wersją angielską."],
          ["Jak wygląda współpraca, jeśli zespół jest spoza Warszawy?", "Cała współpraca odbywa się online: rozmawiamy przez wideo, poprawki zaznaczacie bezpośrednio w projekcie, a nagrania i zdjęcia wrzucacie na wspólny dysk. Miasto nie ma znaczenia — pracuję z Warszawy dla zespołów z różnych regionów i wystawiam fakturę jako jednoosobowa działalność."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla zespołu muzycznego: co mi wysłać"),
        p(
          "Wyślijcie nazwę zespołu, linki do Spotify, YouTube, Facebooka i Instagrama, obecną stronę lub profil na portalu ślubnym, informację, czy gracie koncerty, wesela czy jedno i drugie, repertuar, sposób sprzedaży biletów i merchu, narzędzie do newslettera i kilka zdjęć prasowych. Wrócę z listą podstron dla zespołu i stałą ceną. Piszcie przez ",
          link("formularza powyżej", "#quote"),
          " lub na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
