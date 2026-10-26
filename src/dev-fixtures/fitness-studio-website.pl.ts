// Landing page fixture: Strona internetowa dla siłowni i studia fitness (PL),
// group «fitness-studio-website». REWRITE of the existing page
// /pl/strona-dla-studia-fitness (URL kept). Old page had generic headings
// (how the work goes, the schedule, let’s discuss); the new one is in the
// landing format, written for Polish siłownie, kluby fitness and studia — not
// a translation of the EN page.
// Semantic core: no measured PL gym phrases in ref/creative-leisure.md; target
// phrases from BRIEF.md: «strona dla siłowni» / «strona internetowa dla
// siłowni» (H1, first-screen H2, cost H2, FAQ), «strona internetowa dla studia
// fitness» (slug, title, H2, FAQ), «strona dla klubu fitness» (metaTitle, H2).
// Intent: ref/intent-check-creative-leisure.md — PL «strona dla siłowni» top
// 10 = gyms and directories (members’ searches) — the page targets owners
// through the design phrases; EN «gym website design» = «fitness studio
// website» (5 of 10 shared) → one page; «gym seo» vs «gym website design» 0
// shared → /pl/pozycjonowanie-silowni is the sibling.
// Angles: pierwszy ekran, grafik z systemu klubowego (eFitness, Perfect Gym,
// WodGuru — general), cennik karnetów z kartami sportowymi (how the price
// page shows them), zakup karnetu online (BLIK, płatności cykliczne —
// through the club system), trening próbny z RODO i oświadczeniem o zdrowiu,
// profile instruktorów, zdjęcia stref i zgoda na wizerunek, szybkość (Sasha
// Dith case), treningi online i vouchery (Landi Room case), AI-readable
// build, kreator / strona z systemu / projekt, cena.
// NOT on this page: frazy, wizytówka Google, podstrony lokalizacji jako SEO,
// opinie, sieci, Facebook vs Google, raport (/pl/pozycjonowanie-silowni —
// sibling); trenerzy z własną działalnością
// (/pl/strona-internetowa-dla-trenera-personalnego — linked once).
// Prices: PL scale — 3000–6000 zł, od 8500 zł, projekt w cenie.
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const fitnessStudioWebsitePl = {
  lang: "pl",
  group: "fitness-studio-website",
  slug: "strona-dla-studia-fitness",
  title: "Strona internetowa dla siłowni i studia fitness",
  heading: "Strona internetowa dla siłowni i studia fitness",
  excerpt:
    "Projektuję i wykonuję strony internetowe dla siłowni, klubów fitness i studiów zajęć: grafik z eFitness, Perfect Gym albo WodGuru, cennik karnetów z kartami sportowymi, zakup karnetu i zapis na trening próbny z telefonu, profile instruktorów, zdjęcia stref klubu i szybkie ładowanie — projekt w cenie.",
  seo: {
    metaTitle: "Strona dla klubu fitness: projekt i wykonanie | Bandziuk",
    metaDescription:
      "Strona internetowa dla siłowni i studia fitness: grafik z systemu klubowego, cennik z MultiSport, zakup online, trening próbny, instruktorzy. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt i wykonanie w jednej cenie", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Dziś 18:00 · pilates", "Kup karnet online", "Karty sportowe — zasady", "Trening próbny"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla siłowni lub studia fitness, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona klubu fitness z grafikiem z systemu klubowego, zakupem karnetu online, profilami instruktorów, kilkoma lokalizacjami lub sprzedażą treningów online, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje strona internetowa dla siłowni",
      items: [
        { _key: k("o"), iconName: "plug", title: "Grafik z systemu klubowego", text: "eFitness, Perfect Gym, WodGuru lub inny" },
        { _key: k("o"), iconName: "file-text", title: "Cennik karnetów bez gwiazdek", text: "Umowa, wpisowe, zamrożenie, karty sportowe" },
        { _key: k("o"), iconName: "phone", title: "Karnet i zapis z telefonu", text: "BLIK i płatność w systemie klubowym" },
        { _key: k("o"), iconName: "image", title: "Zdjęcia stref i wideo z zajęć", text: "Wolne ciężary, cardio, sale, szatnie" },
        { _key: k("o"), iconName: "gauge", title: "Szybka mimo grafiku i wideo", text: "Media ładowane po tekście" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i ChatGPT", text: "Zajęcia, ceny i karty jako tekst" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona siłowni lub studia", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Grafik, karnety online, instruktorzy, kilka klubów", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: szybkie strony z wideo, płatnościami online i zapisami",
      subtitle:
        "Oficjalna strona DJ-a i producenta Sashy Dith powstała od zera w Next.js według jego projektu z Figmy: galeria wideo, dyskografia z linkami do serwisów streamingowych i formularz rezerwacji, a mimo to wczytuje się w niecałą sekundę i zastąpiła wolne strony z kreatora. Landi Room, warszawski salon beauty, sprzedaje kurs online przez Stripe Checkout, a link do wideo wysyła się sam po płatności. Platforma Cyprus VIP Estates ma katalog z filtrami i mapą w pięciu językach. Strona psychoterapeuty z Mediolanu ma podstrony lokalizacji i panel, w którym właściciel sam zmienia treści, a strona warszawskiej firmy remontowo-inwestycyjnej pokazuje projekt premium. Klub fitness znajdzie tu to, czego potrzebuje: szybkość przy wideo, sprzedaż online, filtry, podstrony kilku adresów i wygląd marki.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "official-website-for-dj-and-producer-sasha-dith",
        "e-commerce-landing-page-with-secured-video-access",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla siłowni lub studia fitness",
      subtitle: "W ciągu jednego dnia roboczego dostaniesz proponowaną listę podstron, sposób połączenia grafiku i karnetów z Twoim systemem oraz stałą cenę.",
      contextLabel: "Nazwa klubu lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co masz teraz?", options: ["Tylko Facebook i Instagram", "Stronę z systemu klubowego", "Stronę z kreatora", "Starą stronę do wymiany"] },
        { _key: k("z"), question: "W czym prowadzisz grafik i karnety?", options: ["eFitness", "Perfect Gym", "WodGuru", "Inny system albo arkusz"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla siłowni albo studia fitness to miejsce, w którym ktoś z osiedla sprawdza grafik, cenę karnetu i to, czy wejdzie na swoją kartę sportową, zanim pierwszy raz stanie przy recepcji. Projektuję i wykonuję takie strony sam: układ, wygląd, połączenie z systemem klubowym i kod przygotowuje jedna osoba, za kwotę ustaloną przed startem, z projektem w cenie."),

        h2("Strona internetowa dla siłowni: pierwszy ekran na telefonie"),
        p("Na stronę klubu prawie wszyscy wchodzą z telefonu: z Map Google, z posta na Facebooku, z linku od znajomej. Pierwszy ekran odpowiada bez przewijania na cztery pytania: co to za klub i gdzie („Siłownia i zajęcia grupowe — Kraków, Ruczaj”), czy wejdę na swoją kartę, do której jest otwarte i jak zacząć. Dwa przyciski — „Grafik” i „Trening próbny” — są przypięte na dole ekranu na każdej podstronie. Klub z kilkoma lokalizacjami pokazuje tu wybór klubu, żeby dalej każdy widział swój grafik i swoje ceny."),
        p("Wiele osób pyta też, kiedy na sali jest luźno. Jeśli system klubowy liczy wejścia, strona może pokazać bieżące obłożenie; jeśli nie, wystarczy zwykła informacja w rodzaju „najspokojniej: 10:00–15:00 i po 21:00”. Początkujący, który boi się tłumu przy ławkach, przyjdzie wtedy, kiedy będzie mu wygodnie, a nie zrezygnuje po pierwszej wizycie w szczycie."),

        h2("Grafik zajęć na stronie klubu fitness z eFitness, Perfect Gym lub WodGuru"),
        p("Wiele klubów wrzuca grafik jako obrazek na Facebooka i podmienia go co tydzień — a mimo to ktoś przychodzi na zajęcia odwołane we wtorek. Na stronie grafik pochodzi prosto z systemu, w którym już prowadzicie zajęcia. Zależnie od tego, na co pozwala Twój pakiet, jest to widżet dopasowany wyglądem do strony albo — jeśli system udostępnia API — grafik zbudowany z jego danych jako zwykły tekst, który szybko się ładuje."),
        p("W polskim klubie przydają się filtry po sali, instruktorze i porze dnia oraz oznaczenie zajęć dostępnych na kartę sportową. Każde zajęcia w grafiku prowadzą do swojej podstrony, a przycisk „Zapisz się” otwiera właśnie te zajęcia w systemie, a nie stronę startową aplikacji."),

        h2("Cennik karnetów na stronie siłowni z kartami MultiSport, Medicover Sport i FitProfit"),
        p("Cennik polskiej siłowni bywa najtrudniejszą podstroną: karnet z umową na 12 miesięcy, bez umowy, open, poranny, studencki, wejście jednorazowe, karnet na osiem wejść, do tego karty sportowe z dopłatami. Tabela porządkuje to w tych samych wierszach dla każdej opcji:"),
        li("cena miesięczna, wpisowe i opłata za kartę klubową"),
        li("dostęp: godziny, kluby, zajęcia grupowe w cenie lub za dopłatą"),
        li("okres umowy, zamrożenie karnetu i okres wypowiedzenia"),
        li("karty sportowe: które warianty, ile dopłaty, jaki limit wejść"),
        p("Bez gwiazdek prowadzących do drobnego druku — regulamin jest podlinkowany obok tabeli. Promocje mają w panelu datę końca i znikają same, więc nikt nie przychodzi do recepcji z ceną ze stycznia."),

        h2("Zakup karnetu online na stronie dla klubu fitness: BLIK, umowa i system klubowy"),
        p("Karnet z umową to w Polsce regulamin, zgody RODO i często płatność cykliczna z karty. Tego nie warto budować od nowa na stronie: system klubowy już to umie i tam recepcja widzi wszystkie umowy. Zadanie strony to dobrze przygotować zakup — pokazać różnice między karnetami, podlinkować regulamin, uprzedzić, że kartę klubową odbiera się w recepcji — i przekazać klienta do modułu sprzedaży z już wybranym karnetem i klubem. BLIK i szybkie przelewy obsługuje system albo jego operator płatności. Przed wyceną sprawdzam, co Twój system sprzedaje online; jeśli nic, przycisk otwiera krótki formularz do recepcji."),

        h2("Trening próbny i wejście jednorazowe na stronie studia fitness"),
        p("Pierwsza wizyta w polskim klubie często zaczyna się od wiadomości na Messengerze: „czy mogę przyjść spróbować?”. Odpowiedzią jest osobna podstrona treningu próbnego, która mówi, na czym polega oferta (darmowe zajęcia, trening z instruktorem na sali, tani pierwszy tydzień), co zabrać, gdzie się przebrać i czy trzeba podpisać oświadczenie o stanie zdrowia. Formularz pyta o imię, telefon, dzień i zajęcia, ma krótką klauzulę RODO i trafia do systemu klubowego, żeby recepcja oddzwoniła tego samego dnia. Wejście jednorazowe ma na tej podstronie cenę i przycisk zakupu."),
        p("Zajęcia dla dzieci — judo, akrobatyka, taniec — wymagają osobnej ścieżki: zapisuje rodzic, formularz pyta o wiek dziecka i grupę, a na podstronie są informacje o odbiorze po zajęciach i o tym, kto prowadzi grupę."),

        h2("Profile instruktorów i trenerów personalnych na stronie dla klubu fitness"),
        p(
          "Klubowicze często układają tydzień pod konkretną instruktorkę albo trenera, dlatego każdy z nich ma na stronie profil z jednego szablonu: zdjęcie z sali, prowadzone zajęcia, ukończone kursy i uprawnienia tekstem, kilka zdań od siebie i najbliższe zajęcia z grafiku. Trenerzy personalni pracujący w klubie mają dodatkowo specjalizacje i przycisk zapisu na pierwszą konsultację. Gdy ktoś odchodzi, kierownik ukrywa profil w panelu, nie ruszając reszty strony. Dla trenerów, którzy pracują na własny rachunek poza klubem, jest osobna strona: ",
          link("strona internetowa dla trenera personalnego", "/pl/strona-internetowa-dla-trenera-personalnego"),
          ".",
        ),

        h2("Zdjęcia stref siłowni i wideo z zajęć zamiast zdjęć ze stocka"),
        p("Osoba, która nigdy nie była na siłowni, chce zobaczyć, gdzie stanie: strefę wolnych ciężarów, cardio, salę zajęć, saunę, szatnię. Każda strefa ma na stronie kilka zdjęć i zdanie opisu, a zajęcia — krótkie, wyciszone nagranie. Klubowicze pojawiają się na zdjęciach tylko za pisemną zgodą na wykorzystanie wizerunku, a na sesję wybiera się godzinę, gdy sala żyje, ale nie jest zatłoczona. Zdjęć z banku zdjęć nie ma wcale: każdy, kto przyjdzie na pierwszy trening, porówna stronę z tym, co zobaczy w drzwiach."),

        h2("Szybka strona dla studia fitness: grafik, wideo i widżety na telefonie"),
        p("Grafik sprawdza się w tramwaju albo na parkingu pod klubem, często przy słabym zasięgu, więc każda sekunda ładowania jest odczuwalna. Oficjalna strona DJ-a i producenta Sashy Dith ma galerię wideo, dyskografię i formularz rezerwacji, a dzięki leniwemu ładowaniu mediów wczytuje się w niecałą sekundę — wcześniej miał wolne strony z kreatora. Strona siłowni dostaje to samo podejście: wideo ładowane po tekście, zdjęcia przycięte pod ekran telefonu, widżet systemu klubowego ładowany po kliknięciu „Zapisz się” i Core Web Vitals sprawdzone na telefonie przed startem."),

        h2("Treningi online i vouchery na stronie studia fitness"),
        p("Studio może sprzedawać więcej niż karnety: voucher na prezent, pakiet zajęć na start, program treningowy albo nagrania zajęć. Dla Landi Room, warszawskiego salonu beauty, zrobiłem stronę, która sprzedaje kurs online przez Stripe Checkout: po płatności kupujący automatycznie dostaje unikalny link do wideo, który jest ważny 14 dni, a pobranie nagrania jest zablokowane. Pierwsza kampania Google Ads dała ponad 100 sprzedaży kursu bez ani jednego przypadku nieuprawnionego udostępnienia. Tak samo studio jogi czy pilatesu może sprzedawać sześciotygodniowy program albo voucher pod choinkę."),

        h2("Strona siłowni, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Pytanie „gdzie na Bemowie jest siłownia z sauną na Medicover Sport” coraz częściej trafia do ChatGPT albo podsumowań AI w Google, a odpowiedź powstaje z tego, co asystent umie przeczytać. Strona jest zbudowana pod to: treść przychodzi z serwera jako tekst, a nie doładowuje się skryptem; zajęcia, ceny, honorowane karty, strefy i godziny są w kodzie zwykłym tekstem; dane strukturalne opisują klub, każdą lokalizację i zajęcia; robots.txt mówi, które roboty AI mogą czytać stronę. Tak zbudowane nowe podstrony psychoterapeuty z Mediolanu już pojawiają się w odpowiedziach ChatGPT."),
        p(
          "Stałą pracę nad widocznością opisuję na stronach ",
          link("pozycjonowanie siłowni", "/pl/pozycjonowanie-silowni"),
          " i ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Kreator, strona z systemu klubowego czy strona dla klubu fitness na zamówienie"),
        p(
          "Systemy klubowe często dają w pakiecie prostą stronę klubu. Bywa ona na subdomenie dostawcy, z ograniczonym wpływem na teksty i z wyglądem podobnym do stron innych klubów — małemu studiu z jedną salą to na start wystarczy, a kreator też, i przy wycenie to usłyszysz. Strona na zamówienie opłaca się przy kilku klubach, rozbudowanym cenniku z kartami sportowymi, sprzedaży online albo planach zdobywania klientów z Google; kod, treści i domena są wtedy Twoje. Jeśli obecna strona ma historię w Google, przy przenosinach każdy stary adres dostaje przekierowanie 301 — szczegóły na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla siłowni lub studia fitness"),
        p("Projekt jest w cenie: wygląd, szablony podstron i wykonanie to jedna kwota."),
        li("Prosta strona siłowni lub studia — strona główna, zajęcia, grafik, cennik, trening próbny, kontakt: 3000–6000 zł."),
        li("Pełna strona klubu fitness z grafikiem z systemu, zakupem karnetu online, profilami instruktorów, kilkoma lokalizacjami albo sprzedażą treningów online: od 8500 zł."),
        p(
          "Przebieg współpracy od briefu do startu znajdziesz na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          "; pozostałe ceny zebrałem w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla siłowni: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla siłowni?", "Projekt jest w cenie: prosta strona siłowni lub studia kosztuje 3000–6000 zł, pełna strona z grafikiem z systemu, zakupem karnetu, instruktorami i kilkoma klubami — od 8500 zł. Stałą kwotę podaję po obejrzeniu cennika i systemu klubowego."],
          ["Ile trwa zrobienie strony dla studia fitness?", "Prosta strona zwykle kilka tygodni. Najwięcej czasu zajmują treści — opisy zajęć, profile instruktorów, zdjęcia — więc termin zależy od tego, jak szybko są gotowe. Harmonogram z datami jest w wycenie."],
          ["Czy podłączysz grafik z eFitness, Perfect Gym albo WodGuru?", "Tak, przez widżet, linki zapisu albo API — zależnie od tego, co udostępnia Twój pakiet. Sprawdzam to przed wyceną, więc projekt pokazuje tylko rozwiązania, które u Ciebie zadziałają."],
          ["Czy klient kupi karnet na stronie i zapłaci BLIK-iem?", "Tak, jeśli Twój system klubowy sprzedaje karnety online: strona prowadzi do jego modułu sprzedaży, a BLIK obsługuje system lub jego operator płatności. Bez sprzedaży online przycisk otwiera krótki formularz do recepcji."],
          ["Czy sami zmienimy ceny, zajęcia i instruktorów?", "Tak, w panelu na WordPressie albo w Sanity, bez ruszania projektu. Grafik aktualizuje się sam z systemu klubowego."],
          ["Po co strona, skoro mamy fanpage na Facebooku i aplikację klubu?", "Aplikacja służy tym, którzy już są klubowiczami, a fanpage pokazuje bieżące posty. Na stronie nowa osoba porównuje karnety, sprawdza karty sportowe i zapisuje się na trening próbny — zanim cokolwiek zainstaluje."],
          ["Czy robisz strony dla klubów spoza Warszawy?", "Tak. Projekt od briefu do startu prowadzę zdalnie, więc miasto nie ma znaczenia. Pracujemy po polsku, a jeśli klub ma klubowiczów z zagranicy, mogę przygotować też wersję angielską."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla siłowni: co mi wysłać"),
        p(
          "Wyślij link do obecnej strony lub profilu, adresy klubów, listę zajęć, cennik karnetów z honorowanymi kartami sportowymi, nazwę systemu klubowego i kilka zdjęć sali i instruktorów, jeśli je masz. Odpowiem proponowaną listą podstron, sposobem połączenia grafiku i karnetów z Twoim systemem oraz stałą ceną. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
