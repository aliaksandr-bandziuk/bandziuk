// Landing page fixture: Strona internetowa dla trenera personalnego (PL), group
// «personal-trainer-website-design». New page. Market version for Poland, not a
// translation of the EN page.
// Semantic core: ref/creative-leisure.md (PL): strona internetowa dla trenera
// personalnego 90 (H1, intro, H2s, meta) · strona dla trenera personalnego 0.
// Related searches used in H2/body: aplikacja dla trenera personalnego
// (app H2), kalendarz dla trenera personalnego (booking H2), trener personalny
// online dla kobiet (formats H2), prowadzenie online trener cena (prices H2).
// Intent: ref/intent-check-creative-leisure.md — «strona dla trenera
// personalnego» vs «strona dla siłowni»: 0 shared URLs → separate pages. Top 10
// for the trainer: trainers’ own sites (pawelgluchowski.pl, piotrhajduk.pl,
// zielinskijerzy.com), fitebo, trenerhub, superprof → the reader is an
// independent trainer deciding on an own site vs app / Instagram.
// Polish angles: klub vs dojazd vs online, karnety i ważność, odwoływanie
// treningów, zapisy (Booksy, Calendly, aplikacja), płatności BLIK / Przelewy24 /
// Stripe, faktura, RODO i dane o zdrowiu, zgoda na wizerunek przy
// metamorfozach, dzielnice i Google Maps, wersja angielska dla obcokrajowców.
// Portfolio: Landi Room (Warsaw, course sold online with protected video),
// retail analytics consultant (courses with video), Sasha Dith (booking form,
// fast), Warsaw auto repair (local SEO, Google Maps), Giuseppe (AI answers).
// NOT on this page: kluby i studia z grafikiem zajęć
// (/pl/strona-dla-studia-fitness, linked once); pozycjonowanie siłowni
// (/pl/pozycjonowanie-strony-silowni); coaching (/pl/strona-internetowa-dla-coacha);
// kursy na trenera personalnego.
// Owner’s rules: never say there are no clients from the visitor’s segment; no
// outcome promises; AI search on every page.
import { p, h2, li, link, k } from "./pt";

export const personalTrainerWebsiteDesignPl = {
  lang: "pl",
  group: "personal-trainer-website-design",
  slug: "strona-internetowa-dla-trenera-personalnego",
  title: "Strona internetowa dla trenera personalnego",
  heading: "Strona internetowa dla trenera personalnego",
  excerpt:
    "Tworzę strony internetowe dla trenerów personalnych: osobno treningi w klubie, z dojazdem i online, pakiety z cenami, zapisy z kalendarza, płatność BLIK-iem lub kartą, sprzedaż planów treningowych z chronionym wideo i podstrony dla dzielnic, w których pracujesz.",
  seo: {
    metaTitle: "Strona trenera personalnego: zapisy i płatności | Bandziuk",
    metaDescription:
      "Strona internetowa dla trenera personalnego: klub, dojazd i online, pakiety, zapisy z kalendarza, BLIK i Przelewy24, sprzedaż planów online. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Zapisy i płatność BLIK"],
  heroPhonePoints: ["Trening siłowy, Mokotów", "Klub · Dojazd · Online", "Pakiety i ceny", "Umów konsultację"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla trenera personalnego, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona trenera personalnego z podstronami treningów stacjonarnych i online, płatnościami, sprzedażą planów z chronionym wideo i podstronami dzielnic, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla trenera personalnego",
      items: [
        { _key: k("o"), iconName: "layers", title: "Klub, dojazd i online osobno", text: "Każda forma z własnymi pakietami i przyciskiem" },
        { _key: k("o"), iconName: "file-text", title: "Pakiety, które łatwo porównać", text: "Liczba treningów, ważność, odwoływanie, cena" },
        { _key: k("o"), iconName: "plug", title: "Zapisy i płatność na stronie", text: "Kalendarz, BLIK, Przelewy24, karta" },
        { _key: k("o"), iconName: "shield-check", title: "Plany online z chronionym wideo", text: "Osobisty link po płatności, bez pobierania" },
        { _key: k("o"), iconName: "map-pin", title: "Twój klub i dzielnice tekstem", text: "Pod wyszukiwania w okolicy i Google Maps" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i ChatGPT", text: "Certyfikaty, formy treningu i rejon jako tekst" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona trenera personalnego", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Klub + online, płatności, plany, dzielnice", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony marek osobistych, które sprzedają, zapisują i są widoczne",
      subtitle:
        "Te projekty łączy z trenerem jedno: sprzedają umiejętności jednej osoby albo małego zespołu. Warszawski salon Landi Room sprzedaje kurs online przez Stripe, a link do wideo wygasa po 14 dniach. Konsultantka od analityki handlu ma na własnej stronie kursy z nagraniami i szablony do pobrania. DJ i producent Sasha Dith ma jedną szybką stronę z formularzem rezerwacji. Warsztat samochodowy w Warszawie to strona lokalna: Google Maps i podstrony usług. Psychoterapeuta Giuseppe z Mediolanu pracuje sam, a jego nowe podstrony pojawiają się w odpowiedziach ChatGPT.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "consultant-website-design-retail-analytics",
        "official-website-for-dj-and-producer-sasha-dith",
        "auto-repair-seo-and-ux-boost",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla trenera personalnego",
      subtitle: "W ciągu jednego dnia roboczego dostajesz proponowaną listę podstron dla Twoich form treningu i stałą cenę.",
      contextLabel: "Twój Instagram albo obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i otrzymaj wycenę",
      note: "Albo napisz na WhatsApp — odpowiem równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Gdzie prowadzisz treningi?", options: ["W klubie lub studiu", "Z dojazdem do klienta", "Tylko online", "Wszystko po trochu"] },
        { _key: k("z"), question: "Co strona ma sprzedawać?", options: ["Pakiety treningów", "Prowadzenie online", "Gotowy plan lub kurs", "Jeszcze nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla trenerów personalnych, którzy prowadzą treningi w klubie, z dojazdem do klienta, w plenerze albo online. Projekt, kod i uruchomienie robię sam, za jedną stałą cenę. Instagram pokazuje, jak trenujesz. Strona odpowiada na to, co ktoś sprawdza przed pierwszym przelewem: w jakim klubie albo dzielnicy, ile kosztuje karnet, jak zapisać się na konsultację i jak zapłacić — bez pisania wiadomości i czekania na odpowiedź."),

        h2("Strona internetowa dla trenera personalnego: pierwszy ekran i jeden przycisk"),
        p("Na stronę trenera wchodzi się z telefonu: z bio na Instagramie, z Google Maps albo z linku od znajomej. Zanim ktoś przewinie, powinien przeczytać:"),
        li("z kim pracujesz i gdzie — „Trening siłowy dla kobiet po ciąży, Warszawa Mokotów i online”"),
        li("w jakiej formie: klub, dojazd do domu, park, online, małe grupy"),
        li("od jakiej kwoty zaczyna się współpraca"),
        li("jeden przycisk: „Umów konsultację”"),
        p("Zdjęcia z sesji w klubie, w którym naprawdę trenujesz, mówią więcej niż stockowy model z hantlami. W klubach sieciowych przed sesją zdjęciową zapytaj kierownika o zgodę — wiele sieci ma własne zasady fotografowania."),
        p("Liczy się też szybkość, bo strona często otwiera się na słabym zasięgu w szatni albo w tramwaju. Na stronie, którą zrobiłem dla DJ-a i producenta Sashy Ditha, filmy i muzyka ładują się dopiero wtedy, gdy są potrzebne, a podstrony otwierają się w niecałą sekundę — wcześniej stały na wolnym kreatorze. U trenera tak samo traktuję filmiki z ćwiczeniami: lekki podgląd, a pełne nagranie po dotknięciu."),

        h2("Trening w klubie, z dojazdem i online: osobne podstrony na stronie trenera"),
        p("Klient z osiedla i klient online kupują coś innego. Pierwszego interesuje adres klubu, godziny, czy wejście jest wliczone w cenę treningu i czy przyjeżdżasz z własnym sprzętem. Drugiego — w jakiej aplikacji dostanie plan, jak często wysyła nagrania techniki, jak szybko odpowiadasz na wiadomości i co się dzieje, gdy wyjedzie na dwa tygodnie."),
        p("Dlatego każda forma ma swoją podstronę, pakiety i przycisk, a strona główna od razu rozdziela ruch: „Treningi na Mokotowie” i „Prowadzenie online”. Program dla konkretnej grupy, na przykład trener personalny online dla kobiet po czterdziestce, dostaje osobną stronę z własnym opisem. Jeśli układasz jadłospisy, strona podaje Twoje kwalifikacje; jeśli nie, mówi, że przy potrzebie diety kierujesz do dietetyka."),

        h2("Cennik i pakiety treningów personalnych na stronie"),
        p("Cena to pierwsze pytanie w prawie każdej wiadomości. Możesz pokazać dokładne kwoty albo „od…”; ważne, żeby pakiety dało się porównać:"),
        li("pojedynczy trening, karnet na 8 lub 12 wejść, miesięczne prowadzenie online"),
        li("czas treningu, miejsce i dopłata za dojazd poza Twoją dzielnicę"),
        li("co dzieje się między treningami: plan w aplikacji, korekta techniki, kontakt na czacie"),
        li("ważność karnetu, termin odwołania treningu, zamrożenie przy chorobie"),
        p("Wiele osób wpisuje „prowadzenie online trener cena”, więc cena prowadzenia online, choćby jako kwota startowa, ma własny blok. Pakiety są polami w panelu: zmiana cennika od stycznia zajmuje minutę i nie rusza wyglądu strony."),

        h2("Zapisy i płatności na stronie trenera personalnego: kalendarz, BLIK, Przelewy24"),
        p("Kalendarz dla trenera personalnego to jedno z najczęstszych pytań trenerów. Podłączam ten, z którego już korzystasz — Booksy, Calendly albo moduł Twojej aplikacji — z widocznymi tylko terminami konsultacji. Albo krótki formularz: imię, telefon, cel w jednym zdaniu, klub lub online, pasujące dni. Pytania o kontuzje i choroby to dane o zdrowiu, które RODO chroni szczególnie, dlatego formularz pyta tylko o to, czego naprawdę użyjesz, a odpowiedzi trafiają do Twojej skrzynki, nie do wspólnego arkusza."),
        p("Za pakiet klient płaci na stronie BLIK-iem, szybkim przelewem przez Przelewy24 albo kartą przez Stripe. Prowadzenie online może odnawiać się co miesiąc automatycznie. Regulamin z zasadami zwrotów stoi przy przycisku, po płatności przychodzi mail z kolejnymi krokami, a jeśli klient potrzebuje faktury, formularz od razu zbiera dane firmy."),

        h2("Sprzedaż planów treningowych i kursów online ze strony trenera"),
        p("Gotowy plan — osiem tygodni treningu w domu, powrót do formy po porodzie, mobilność dla osób pracujących przy biurku — sprzedaje się także wtedy, gdy akurat trenujesz z kimś innym. Kłopot jest z dostarczeniem: plik PDF albo link do filmów, który pierwsza kupująca wrzuca na grupę."),
        p("Dla warszawskiego salonu Landi Room zrobiłem stronę sprzedającą kurs online z nanoplastyki włosów: własny projekt, Next.js i Sanity, płatność przez Stripe Checkout. Zaraz po zapłacie kursantka dostaje mailem własny link do nagrań; po 14 dniach link przestaje działać, a samego filmu nie ma jak zapisać na dysku. Z pierwszej kampanii w Google Ads kurs kupiło ponad 100 osób i nikt nie przekazał dostępu dalej. Plan trenera działa tak samo: strona z programem tydzień po tygodniu, potrzebnym sprzętem i informacją, dla kogo jest, potem płatność i dostęp bez ręcznego wysyłania plików."),

        h2("Metamorfozy na stronie trenera personalnego: zgoda na wizerunek i RODO"),
        p("Zdjęcia „przed i po” przekonują najbardziej, ale rozpowszechnianie czyjegoś wizerunku wymaga zgody tej osoby, a sylwetka z opisem spadku wagi łatwo staje się informacją o zdrowiu. Dlatego każda metamorfoza ma w panelu pole „zgoda klienta” z datą — bez niego historia zostaje w szkicu. Gdy ktoś wycofa zgodę, zdejmujesz ją jednym kliknięciem."),
        p("Podpisy mówią, co zrobił klient: trzy treningi w tygodniu przez pół roku, pierwsze podciągnięcie na drążku, koniec bólu pleców jego słowami. Nie obiecują czytelnikowi minus dziesięciu kilogramów w miesiąc. Pod galerią stoi jedno zdanie: efekty zależą od zdrowia, snu i jedzenia konkretnej osoby."),

        h2("Trener personalny w okolicy: Google Maps, dzielnice i nazwa klubu"),
        p("Klienci wpisują „trener personalny Mokotów” albo „trener personalny z dojazdem Kraków”. Google odpowiada na podstawie profilu firmy w Mapach, adresu na stronie i podstron pasujących do zapytania. Strona podaje nazwę klubu, adres i mapę. Jeśli dojeżdżasz do klientów, osobna podstrona wymienia dzielnice lub miejscowości i zasady dojazdu, a profil w Google Maps nie pokazuje Twojego adresu domowego. Dwa kluby to dwie krótkie podstrony."),
        p(
          "Opinie zbierasz w Google od klientów po kilku tygodniach treningów, a strona do nich linkuje. Stała praca nad widocznością w okolicy to ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          "; strona daje tej pracy podstrony, na które może kierować.",
        ),

        h2("Aplikacja dla trenera personalnego, Instagram czy własna strona"),
        p("Aplikacje dla trenerów personalnych często mają prostą wizytówkę, a przez Instagram da się sprzedawać w wiadomościach. Na start — jeden klub, kilka pakietów — to wystarczy, i powiem to na pierwszej rozmowie. Pieniądze lepiej wtedy wydać na dobrą sesję zdjęciową."),
        p("Własna strona ma sens, gdy łączysz treningi stacjonarne z prowadzeniem online, sprzedajesz plany, potrzebujesz podstron dla kilku dzielnic albo wersji angielskiej dla obcokrajowców w Twoim mieście, lub planujesz kiedyś zmienić aplikację. Aplikacja zostaje od planów i raportów, a strona przejmuje pierwsze wrażenie, wyszukiwarkę, zapisy i płatności. Przed umową z platformą zapytaj, czy domena i adresy podstron zostają przy Tobie."),

        h2("Strona trenera personalnego, którą rozumieją ChatGPT i Google AI Overviews"),
        p("Coraz więcej osób pyta ChatGPT: „polecisz trenera personalnego na Ursynowie, który pracuje z osobami po kontuzjach?”. Asystent poleca tych, o których może przeczytać konkretne fakty. Na Twojej stronie są one tekstem: imię, kursy i certyfikaty z nazwą organizatora, specjalizacje, klub lub dzielnice, języki, cena startowa. Do tego dane strukturalne o Tobie i usługach, oznaczone pytania i odpowiedzi, strony wysyłane z serwera jako gotowy HTML i reguły w robots.txt dla botów AI."),
        p(
          "Certyfikaty muszą być tekstem, nie tylko logotypami — modele nie czytają obrazków. Psychoterapeuta Giuseppe z Mediolanu pracuje sam, jak większość trenerów, a nowe podstrony jego strony już pojawiają się w odpowiedziach ChatGPT. Stała praca nad tym to ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla trenera personalnego"),
        p("Projekt graficzny jest w cenie, więc są dwa poziomy:"),
        li("Prosta strona trenera personalnego — strona główna, o mnie, jedna forma treningów, pakiety, zapis na konsultację, kontakt: 3000–6000 zł."),
        li("Strona z osobnymi podstronami dla treningów stacjonarnych i online, płatnościami BLIK i Przelewy24, sprzedażą planów z chronionym wideo, podstronami dzielnic lub wersją angielską: od 8500 zł."),
        p(
          "Kluby i studia z grafikiem zajęć i karnetami mają osobną ofertę: ",
          link("strona dla studia fitness", "/pl/strona-dla-studia-fitness"),
          ". Jak pracuję nad stronami, opisuję w ofercie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a wszystkie ceny są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla trenera personalnego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla trenera personalnego?", "Prosta strona to 3000–6000 zł, strona z osobnymi podstronami dla klubu i online, płatnościami, sprzedażą planów lub podstronami dzielnic — od 8500 zł. Projekt jest w obu cenach. Po krótkim opisie Twoich treningów podaję stałą kwotę."],
          ["Ile trwa zrobienie strony dla trenera personalnego?", "Prosta strona zwykle kilka tygodni. Najwięcej zależy od tego, kiedy będą gotowe teksty i zdjęcia: najpierw lista podstron, potem projekt, potem wykonanie i uruchomienie."],
          ["Czy klienci zapłacą za karnet BLIK-iem na stronie?", "Tak. Płatność idzie przez Przelewy24 albo Stripe: BLIK, szybki przelew lub karta, także odnawiane co miesiąc prowadzenie online. Operator obsługuje płatność, a regulamin widać przy przycisku."],
          ["Czy mogę sprzedawać plan treningowy online tak, żeby nie krążył po grupach?", "Tak. Każdy kupujący dostaje po płatności osobisty link do wideo, który wygasa po ustalonym czasie, a filmu nie da się pobrać. Tak działa kurs online salonu Landi Room, bez ani jednego przypadku nieuprawnionego udostępnienia."],
          ["Czy wystarczy mi Instagram i aplikacja trenerska?", "Na start, przy jednym klubie i kilku pakietach, często tak. Własna strona przydaje się, gdy łączysz treningi w klubie z prowadzeniem online, sprzedajesz plany albo chcesz, żeby klienci z okolicy znajdowali Cię w Google."],
          ["Czy sam zmienię ceny, pakiety i metamorfozy?", "Tak. To pola w panelu, ważne strony są chronione, a metamorfoza nie opublikuje się bez wypełnionego pola zgody. Dostajesz też krótką instrukcję i nagrania wideo."],
          ["Jak wygląda współpraca i czy dostanę fakturę?", "Pracuję zdalnie z Warszawy: rozmowy telefoniczne lub wideo, materiały mailem albo przez WhatsApp. Działam jako jednoosobowa firma i wystawiam fakturę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla trenera personalnego: co mi przesłać"),
        p(
          "Prześlij Instagram albo obecną stronę, napisz, gdzie trenujesz (klub, dojazd, plener, online), jakie masz kursy i certyfikaty, jakie pakiety lub plany sprzedajesz i jak klienci mają się zapisywać i płacić. Kilka zdjęć z treningów pomoże mi zaplanować pierwszy ekran. W ciągu jednego dnia roboczego dostaniesz proponowaną listę podstron i stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
