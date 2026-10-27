// Landing page fixture: Strona internetowa dla firmy SaaS (PL), group
// «saas-website-design». New page. Market version for Polish SaaS companies
// that sell in Poland and abroad — not a translation of saas-website-design.en.
// In PL this is a development page that includes design.
// Semantic core: ref/batch-h1.md has no measurable PL volume for this group;
// phrases from BRIEF.md and the market: «strona internetowa dla firmy SaaS»
// (H1, first sentence, cost H2, FAQ), «strona SaaS» / «strona produktu SaaS»
// (several H2), «projektowanie strony SaaS» (metaTitle), «najlepsze strony
// SaaS» (principles H2, mirrors EN «best saas websites»), «szablon strony
// SaaS» (templates H2), «software house» (agency alternative in Poland).
// Intent: ref/intent-check-delta.md and ref/intent-check-batch-h.md (EN):
// «saas website» ≈ «saas website design» → one page; «saas landing page
// design» separate → one H3, linked to /pl/oferty/tworzenie-landing-page.
// Polish angles: several readers of a Polish B2B purchase (user, manager,
// księgowość, IT and IOD); use-case pages for biura rachunkowe, e-commerce,
// HR; integrations Polish buyers ask about (KSeF, programs księgowe, Allegro,
// BaseLinker, InPost, Przelewy24 — as examples, depending on the product);
// okres próbny vs prezentacja, ceny netto for firms; historie klientów; RODO:
// umowa powierzenia, podprocesory, serwery w UE, regulamin świadczenia usług
// drogą elektroniczną (general, «z prawnikiem»); docs and changelog; PL + EN +
// DE versions for selling abroad; migration off WordPress / Webflow with 301s
// (Giuseppe); software house vs one person; AI-readable build; cost.
// Portfolio: own site, Giuseppe, consultant, ScanM2, Landi Room.
// NOT on this page: pre-launch, MVP, waitlist, investor pages, pricing page
// design, design system, Webflow vs Next.js as a comparison
// (/pl/strona-dla-startupu — linked once); pozycjonowanie strony SaaS
// (/pl/pozycjonowanie-strony-saas — sibling); the stack in depth
// (/pl/oferty/strony-w-nextjs). No PL B2B website page exists in links.json.
// Prices: /pl/cennik — 3000–6000 zł, od 8500 zł, projekt w cenie; «faktura»
// only. Owner’s rules: every page covers AI search; never say there are no
// clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const saasWebsiteDesignPl = {
  lang: "pl",
  group: "saas-website-design",
  slug: "strona-internetowa-dla-firmy-saas",
  title: "Strona internetowa dla firmy SaaS",
  heading: "Strona internetowa dla firmy SaaS",
  excerpt:
    "Projektuję i buduję strony internetowe dla firm SaaS, które mają już płacących klientów: podstrony funkcji i zastosowań, katalog integracji, osobne ścieżki do okresu próbnego i do prezentacji, stronę bezpieczeństwa z RODO i umową powierzenia, wersje po polsku, angielsku i niemiecku oraz CMS, w którym marketing publikuje bez programistów.",
  seo: {
    metaTitle: "Projektowanie strony SaaS w Next.js | Bandziuk",
    metaDescription:
      "Strona internetowa dla firmy SaaS: podstrony funkcji, katalog integracji, okres próbny i demo, RODO i umowa powierzenia, wersje językowe. Pełna od 8500 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie w Next.js, jedna cena", "Pełna strona SaaS od 8500 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Wypróbuj za darmo", "Umów prezentację", "Integracje: KSeF, Allegro", "PL · EN · DE"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy SaaS z opisem produktu, planami i przyciskiem rejestracji, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona firmy SaaS z szablonami funkcji i zastosowań, katalogiem integracji, ścieżkami do okresu próbnego i prezentacji, historiami klientów, stroną bezpieczeństwa, dokumentacją lub changelogiem, wersjami językowymi i CMS dla marketingu, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajecie",
      title: "Co dostajecie ze stroną internetową dla firmy SaaS",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrony funkcji i zastosowań", text: "Szablon dla funkcji, roli i branży" },
        { _key: k("o"), iconName: "plug", title: "Katalog integracji z danych", text: "Jeden rekord w CMS to jedna podstrona" },
        { _key: k("o"), iconName: "users", title: "Okres próbny i prezentacja", text: "Dwie ścieżki, każda liczona osobno" },
        { _key: k("o"), iconName: "shield-check", title: "Strona bezpieczeństwa i RODO", text: "Umowa powierzenia, podprocesory, serwery w UE" },
        { _key: k("o"), iconName: "languages", title: "Wersje na rynki zagraniczne", text: "PL, EN, DE z osobnymi adresami podstron" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla ChatGPT i AI Overviews", text: "Plany, integracje i zgodność zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy SaaS", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Funkcje, integracje, bezpieczeństwo, języki, CMS", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony w Next.js, wielojęzyczne i B2B, które zbudowałem",
      subtitle:
        "Te projekty łączy z serwisem SaaS to, co dzieje się pod spodem. Moja własna strona działa na Next.js i Sanity, w trzech językach, z podstronami ofertowymi budowanymi z jednego szablonu, mapą witryny i hreflang — tak jak strona produktu z setkami podobnych podstron. Serwis Giuseppe z Mediolanu przeniosłem z WordPressa na Next.js 16 z przekierowaniem 301 dla każdego z 468 wpisów, czyli zrobiłem przeprowadzkę, którą wiele firm SaaS ma przed sobą. Strona konsultantki analityki handlu ma 153 podstrony po angielsku, polsku i rosyjsku, kalkulatory i szablony dla odbiorcy B2B. ScanM2, firma skanowania laserowego 3D i BIM, zamieniła kreator no-code na WordPressa z zachowaniem wyglądu, a ruch organiczny wzrósł 29 razy. Landing Landi Room przyjmuje płatność przez Stripe Checkout i od razu daje dostęp do wideo — podobnie jak rejestracja prowadzi do pierwszego logowania.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "develop-and-optimize-a-personal-website-with-seo",
        "psychotherapist-website-milan",
        "consultant-website-design-retail-analytics",
        "architecture-website-rebuild-and-seo-scan",
        "e-commerce-landing-page-with-secured-video-access",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy SaaS",
      subtitle: "Następnego dnia roboczego dostajecie listę szablonów podstron i typów danych dla Waszego produktu, opis ścieżek do okresu próbnego i prezentacji oraz stałą cenę.",
      contextLabel: "Nazwa produktu lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Na czym działa obecna strona?", options: ["WordPress", "Webflow lub Framer", "Next.js lub React utrzymywany przez naszych programistów", "Kreator albo gotowy szablon"] },
        { _key: k("z"), question: "Gdzie sprzedajecie produkt?", options: ["Głównie w Polsce", "W Polsce i za granicą", "Głównie za granicą", "Wchodzimy właśnie na nowy rynek"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla firmy SaaS to serwis marketingowy oprogramowania sprzedawanego w abonamencie: tu klient dowiaduje się, co robi produkt, dla kogo jest i ile kosztuje, a potem zakłada konto albo umawia prezentację. Takie strony projektuję i buduję sam, w Next.js z CMS-em, dla firm, których produkt już sprzedaje. Za podstrony, kod i ścieżki rejestracji odpowiada jedna osoba, a cenę znacie przed startem."),

        h2("Strona SaaS dla produktu, który ma już klientów: kto ją czyta"),
        p("Zakup oprogramowania w polskiej firmie rzadko zależy od jednej osoby. Na stronę produktu SaaS wchodzi użytkownik, który ma problem do rozwiązania, kierownik zatwierdzający budżet, księgowość sprawdzająca warunki i fakturowanie, a w większej firmie także dział IT i inspektor ochrony danych. Każdy szuka czegoś innego, więc serwis ma dla każdego osobne miejsce: funkcje i zastosowania, historie klientów, regulamin, stronę bezpieczeństwa."),
        p(
          "Produkt przed startem albo przed pierwszymi klientami potrzebuje innej strony — listy oczekujących, opisu MVP, materiałów dla inwestorów. Piszę o tym na stronie ",
          link("strona dla startupu", "/pl/strona-dla-startupu"),
          ".",
        ),

        h2("Najlepsze strony SaaS: zasady, które powtarzają się w każdej branży"),
        p("Zestawienia najlepszych stron SaaS pokazują głównie strony główne i efektowne gradienty. Po otwarciu podstron produktów, które dobrze sprzedają, widać wspólne zasady:"),
        li("nagłówek mówi, jaki problem znika, a nie że produkt „rewolucjonizuje zarządzanie”"),
        li("każda ważna funkcja ma własną podstronę, a każda grupa klientów — własną ścieżkę"),
        li("są dwa przyciski o różnych zadaniach: „Wypróbuj” i „Porozmawiajmy”"),
        li("dowód stoi obok obietnicy: cytat klienta przy funkcji, informacja o serwerach w UE przy rejestracji"),
        li("plany, limity i integracje są zapisane tekstem, a nie tylko w grafikach"),
        p("Zamiast galerii warto przejrzeć podstrony funkcji i stronę bezpieczeństwa konkurenta, z którym klienci Was porównują."),

        h2("Podstrony funkcji i zastosowań na stronie SaaS: rola, branża, wielkość firmy"),
        p("Jedna podstrona „Funkcje” z trzydziestoma ikonami nie odpowiada na żadne konkretne pytanie. Serwis, który sprzedaje, opiera się na dwóch typach podstron. Podstrona funkcji opisuje jedną możliwość: jaki problem rozwiązuje, jak wygląda w praktyce, w których planach jest dostępna i z jakimi integracjami działa. Podstrona zastosowania mówi językiem konkretnego odbiorcy — „dla biur rachunkowych”, „dla sklepów internetowych”, „dla działów HR” — i zbiera funkcje oraz historie klientów, które go dotyczą."),
        p("Oba typy to szablony w CMS-ie. Gdy produkt dostaje nową funkcję albo wchodzicie w nową branżę, marketing dodaje podstronę sam, bez grafika i programisty."),

        h2("Katalog integracji na stronie SaaS: KSeF, programy księgowe, sklepy i CRM"),
        p("Polski klient pyta o integracje wcześnie, bo od nich zależy, czy wdrożenie w ogóle ma sens. Zależnie od produktu będą to KSeF, programy księgowe, Allegro, BaseLinker, InPost, Przelewy24 albo CRM, z którego korzysta firma. Każda integracja to jeden rekord w CMS-ie: nazwa, logo, kategoria, co i w którą stronę się synchronizuje, w jakich planach jest dostępna i link do instrukcji. Z tych rekordów strona sama buduje katalog z filtrami, osobną podstronę dla każdej integracji i blok na podstronach funkcji. Nowe połączenie w produkcie oznacza jeden nowy rekord, a podstrona pojawia się we wszystkich wersjach językowych."),

        h2("Okres próbny czy prezentacja z handlowcem: dwie ścieżki na stronie SaaS"),
        p("Produkty samoobsługowe i sprzedawane przez handlowców potrzebują innych ścieżek, a wiele polskich firm SaaS ma obie:"),
        li("okres próbny: przycisk prowadzi prosto do rejestracji w aplikacji, bez dodatkowego formularza; wybrany plan i źródło kampanii przechodzą dalej"),
        li("prezentacja: krótki formularz — firmowy e-mail, liczba użytkowników, czego szukacie — a zaraz po nim kalendarz z wolnymi terminami handlowca; zgłoszenie trafia do CRM z informacją, z której podstrony przyszło"),
        li("obie naraz: małe firmy kierowane są do okresu próbnego, większe do rozmowy, według liczby użytkowników albo planu"),
        p("Klienci firmowi w Polsce oczekują cen netto, więc na każdej podstronie z kwotą widać, że do ceny dolicza się VAT. Rejestracje i zgłoszenia na prezentację są liczone osobno."),
        h3("Landing page pod kampanie Google Ads i LinkedIn"),
        p(
          "Kampanie, webinary i akcje z partnerami dostają osobne landing page z tych samych komponentów: jedna oferta, jedno działanie, bez pełnego menu. Szczegóły są na stronie ",
          link("tworzenie landing page", "/pl/oferty/tworzenie-landing-page"),
          ".",
        ),

        h2("Historie klientów i strona bezpieczeństwa: RODO, umowa powierzenia, podprocesory"),
        p("Historia klienta odpowiada na pytanie, czy produkt zadziałał w firmie podobnej do Waszego odbiorcy. Szablon zaczyna się od ramki z faktami — branża, wielkość firmy, plan, użyte funkcje — a potem opisuje sytuację i wynik słowami klienta, z liczbami tylko wtedy, gdy klient je zaakceptował."),
        p("Dział IT i inspektor ochrony danych pytają o co innego. Strona bezpieczeństwa odpowiada im, zanim wyślą ankietę:"),
        li("gdzie są przechowywane dane klientów i czy serwery stoją w Unii Europejskiej"),
        li("umowa powierzenia przetwarzania danych do pobrania albo na prośbę"),
        li("lista podprocesorów z celem i lokalizacją oraz sposób informowania o zmianach"),
        li("certyfikaty, jeśli je macie, na przykład ISO 27001, z zakresem i datą"),
        li("regulamin świadczenia usług drogą elektroniczną i polityka prywatności w stałym miejscu stopki"),
        p("Treść tych dokumentów przygotowujecie z prawnikiem; strona daje im czytelny układ i datę aktualizacji."),

        h2("Dokumentacja, baza wiedzy i changelog przy stronie SaaS: subdomena czy katalog"),
        p("Bazę wiedzy czytają klienci, a osoby, które dopiero wybierają produkt, zaglądają do niej, żeby sprawdzić, jak wygląda codzienna praca. Katalog w rodzaju /pomoc trzyma wszystko w jednej domenie i jednym wyglądzie. Subdomena w rodzaju pomoc.twojprodukt.pl pasuje, gdy dokumentację prowadzi osobne narzędzie Waszych programistów. Oba warianty działają, jeśli nagłówek i linki do strony głównej są spójne, a treść dociera jako zwykły tekst z serwera. Changelog, czyli „Co nowego”, z datą przy każdej wersji i linkiem do podstrony zmienionej funkcji pokazuje, że produkt się rozwija."),

        h2("Strona SaaS po polsku, angielsku i niemiecku: sprzedaż za granicę"),
        p(
          "Polska firma SaaS, która wychodzi za granicę, zwykle zaczyna od angielskiego, a potem dodaje niemiecki albo czeski. Tłumaczenie samej strony głównej to za mało: klient z Niemiec decyduje na podstawie podstron funkcji, zastosowań, bezpieczeństwa i planów z cenami w euro. Każda wersja ma własne adresy podstron i znaczniki hreflang, a teksty są pisane dla danego rynku. W trzech językach działa moja własna strona i zbudowany przeze mnie serwis konsultantki ze 153 podstronami; teksty w innych językach pisze native speaker po Waszej stronie. Więcej na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Przeniesienie strony SaaS z WordPressa lub Webflow na Next.js bez utraty ruchu z Google"),
        p("Wiele polskich firm SaaS zaczyna od WordPressa z kilkunastoma wtyczkami albo od Webflow. Ograniczenia widać, gdy podstron funkcji, integracji i wpisów na blogu są setki, wersje językowe dokleja wtyczka, a każda aktualizacja coś psuje. Pozycje w Google są przypisane do adresów, więc przeprowadzka zaczyna się od listy wszystkich URL-i. Każdy dostaje przekierowanie 301 na nowy odpowiednik, tytuły i dane strukturalne przechodzą bez zmian, a przekierowania sprawdzam na wersji testowej przed przełączeniem domeny."),
        p(
          "Tak przeniosłem serwis Giuseppe z Mediolanu z WordPressa na Next.js 16 i Sanity: 468 wpisów, przekierowanie z każdego starego adresu, 44 dni robocze do przekazania. Po uruchomieniu marketing publikuje w Sanity nowe podstrony funkcji, historie klientów i wpisy changelogu z podglądem, a układ strony zostaje nienaruszony. O samej technologii piszę na stronie ",
          link("strony w Next.js", "/pl/oferty/strony-w-nextjs"),
          ".",
        ),

        h2("Szablon strony SaaS, software house czy jeden projektant-programista"),
        p("Gotowy szablon strony SaaS albo kreator daje stronę główną, tabelę planów i bloga w kilka dni. Wystarcza, gdy produkt ma jedną grupę odbiorców i krótką listę funkcji. Podstrony zastosowań, katalog integracji, strona bezpieczeństwa i wersje językowe dodawane później oznaczają walkę z szablonem."),
        p("Software house albo agencja interaktywna daje zespół: kierownika projektu, projektantów i programistów, co ma sens przy dużym rebrandingu. Ja pracuję sam: układam podstrony, projektuję, programuję, ustawiam CMS i techniczne SEO, a rozmawiacie z osobą, która to robi. Jeśli macie własnego grafika, buduję z jego projektu w Figmie."),

        h2("Strona SaaS, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Coraz więcej osób pyta ChatGPT albo podsumowanie AI w Google: „program do fakturowania z KSeF i integracją z Allegro”, „system HR dla firmy na 50 osób z serwerami w Polsce”. Asystent poleca tylko to, co potrafi przeczytać, a strony SaaS często chowają właśnie te fakty: plany w skrypcie, integracje jako rząd logotypów, bezpieczeństwo w PDF-ie. Plany i limity, integracje, języki, lokalizację serwerów i zgodność z RODO zapisuję więc jako tekst renderowany na serwerze, z danymi strukturalnymi SoftwareApplication i Organization oraz regułami w robots.txt dla botów AI. Według tych zasad zbudowany jest serwis Giuseppe, a nowe podstrony pojawiają się już w odpowiedziach ChatGPT."),
        p(
          "Jak utrzymać produkt w odpowiedziach AI, opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a rejestracje i zapytania z wyników Google — na stronie ",
          link("pozycjonowanie strony SaaS", "/pl/pozycjonowanie-strony-saas"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla firmy SaaS"),
        p("Projekt graficzny jest w cenie. O kwocie decyduje liczba szablonów i typów danych, a nie liczba podstron: trzysta podstron integracji powstaje z jednego szablonu."),
        li("Prosta strona firmy SaaS — strona główna, opis produktu, plany, o firmie i kontakt, z przyciskami rejestracji i logowania: od 3000 do 6000 zł."),
        li("Pełna strona z szablonami funkcji i zastosowań, katalogiem integracji, okresem próbnym i prezentacją, historiami klientów, stroną bezpieczeństwa, dokumentacją lub changelogiem, wersjami językowymi i CMS dla marketingu: od 8500 zł. W tym wariancie mieści się większość firm SaaS."),
        p(
          "Hosting i plan CMS opłacacie bezpośrednio u dostawców, a ja wystawiam fakturę za wykonanie. Przebieg prac opisuję na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a wszystkie stawki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla firmy SaaS: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla firmy SaaS?", "Prosta strona kosztuje od 3000 do 6000 zł, pełna od 8500 zł — z podstronami funkcji i zastosowań, katalogiem integracji, ścieżkami do okresu próbnego i prezentacji, stroną bezpieczeństwa i wersjami językowymi. Projekt graficzny jest w cenie, a stałą kwotę podaję po krótkim briefie."],
          ["Ile trwa budowa strony dla firmy SaaS?", "Zależy od liczby szablonów, języków i treści do przeniesienia ze starej strony. Dla porównania: przebudowa serwisu Giuseppe z 468 wpisami zajęła 44 dni robocze od startu do przekazania. Termin podaję razem ze stałą ceną."],
          ["Czy marketing sam doda podstronę nowej funkcji?", "Tak. Podstrony funkcji i zastosowań, historie klientów, integracje, wpisy changelogu i bloga to typy treści w Sanity z podglądem przed publikacją. Programista jest potrzebny dopiero przy zupełnie nowym rodzaju podstrony."],
          ["Czy po przeniesieniu z WordPressa stracimy pozycje w Google?", "Nie, jeśli przeprowadzka jest zaplanowana wokół adresów. Każdy stary URL dostaje przekierowanie 301, tytuły i dane strukturalne przechodzą bez zmian, a po uruchomieniu przez kilka tygodni sprawdzam błędy w Search Console."],
          ["Czy zbudujesz stronę z projektu naszego grafika w Figmie?", "Tak. Stronę DJ-a i producenta Sashy Dith zbudowałem w Next.js właśnie z projektu klienta w Figmie. Jeśli w projekcie brakuje jakiegoś szablonu, na przykład podstrony integracji, dorysowuję go w tym samym stylu."],
          ["Czy strona obsłuży wersję angielską i niemiecką z cenami w euro?", "Tak. Każda wersja ma własne adresy, hreflang i ceny w swojej walucie, a przełącznik języka prowadzi do tej samej podstrony w innym języku. Teksty po polsku i angielsku piszę sam, niemieckie — native speaker po Waszej stronie."],
          ["Czy pracujesz z firmami SaaS spoza Warszawy?", "Tak, z całej Polski i z zagranicy. Pracuję zdalnie: rozmowy wideo, komentarze w Figmie i we wspólnym dokumencie, akceptacja kolejnych etapów online. Rozliczam się na podstawie faktury."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla firmy SaaS: co mi wysłać"),
        p(
          "Wyślijcie link do obecnej strony i aplikacji, listę planów, dwóch–trzech konkurentów, z którymi porównują Was klienci, informację, czy klienci zaczynają od okresu próbnego, czy od prezentacji, listę integracji, rynki i języki, na których sprzedajecie, oraz CMS i CRM, z których korzystacie. Odpowiem planem podstron — szablony i typy danych — i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
