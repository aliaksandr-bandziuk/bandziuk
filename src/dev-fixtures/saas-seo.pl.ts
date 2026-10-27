// Landing page fixture: Pozycjonowanie strony SaaS (PL), group «saas-seo».
// New page. Market version for Polish SaaS companies — software sold by
// subscription to Polish small and mid-sized firms (fakturowanie, CRM, HR,
// rezerwacje, magazyn) and Polish products expanding to Germany, Czechia, the
// UK and the US — not a translation of saas-seo.en.
// Semantic core: ref/batch-h1.md has no measured PL phrases for SaaS SEO; H1
// and headings carry the owner’s required form «pozycjonowanie strony SaaS»,
// plus «strategia SEO dla SaaS», «content marketing SaaS», «techniczne SEO
// strony SaaS» and the words Polish buyers type: «program do…», «system
// do…», «aplikacja do…», «CRM dla małej firmy», «program do faktur z KSeF».
// PL PAA: «Ile kosztuje pozycjonowanie strony w 2026?» (cost H2 + FAQ).
// Intent: ref/intent-check-batch-h.md — EN «saas seo» vs «seo for it
// companies» 0 of 10 shared URLs → own page; the SERP is SaaS SEO agencies →
// the page sells.
// Angle: Polish search wording for software, funnel-first strategy,
// regulation-driven demand (KSeF, JPK, RODO — general, dated, official
// sources), wzory and kalkulatory as free tools (consultant case),
// programmatic pages without doorway pages, expansion abroad (Cyprus case,
// education agency), technical SEO and migrations (Giuseppe, ScanM2), links
// without buying (Capterra PL, rankings, integrations; Cyprus case),
// measurement in rejestracje / trial / demo, AI answers in Polish (owner’s
// study: 47 questions, 141 answers), agency vs freelancer, cost in PLN.
// NOT on this page: product before launch (/pl/strona-dla-startupu — linked
// once); site design and build (/pl/strona-internetowa-dla-firmy-saas —
// sibling); ads (not offered). No PL equivalents of /seo-for-startups or
// /b2b-seo exist, so they are not linked.
// Owner’s rules: «pozycjonowanie strony …» in every heading, never
// «pozycjonowanie firmy»; «faktura» only; every SEO page covers AI search;
// never say there are no clients from the visitor’s industry; the Cyprus
// client is not named.
import { p, h2, li, link, k } from "./pt";

export const saasSeoPl = {
  lang: "pl",
  group: "saas-seo",
  slug: "pozycjonowanie-strony-saas",
  title: "Pozycjonowanie strony SaaS",
  heading: "Pozycjonowanie strony SaaS",
  excerpt:
    "Zajmuję się pozycjonowaniem stron SaaS: frazy „program do…” i „system do…” w języku polskich klientów, podstrony na zmiany w przepisach takie jak KSeF, darmowe kalkulatory i wzory prowadzące do rejestracji, wersje językowe na rynki zagraniczne i obecność w odpowiedziach AI — z raportem w kontach testowych, demo i płatnych abonamentach.",
  seo: {
    metaTitle: "SEO dla SaaS: rejestracje, demo i odpowiedzi AI | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony SaaS: frazy „program do…”, KSeF, kalkulatory, wersje językowe, techniczne SEO, ChatGPT i raport w rejestracjach. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Rejestracje i demo z Google i AI", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Program do faktur z KSeF", "Kalkulator brutto netto", "Wypróbuj 14 dni za darmo", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony SaaS: frazy, lejek, technika, wersje językowe, analityka i odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla SaaS: podstrony rozwiązań i alternatyw, darmowe narzędzie, hreflang, mapa przekierowań, pomiar rejestracji", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony SaaS", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony SaaS",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy, którymi Polacy szukają programów", text: "„Program do…”, „system do…”, „aplikacja do…”" },
        { _key: k("o"), iconName: "shield-check", title: "Podstrony na zmiany w przepisach", text: "KSeF, JPK, RODO — z datą i źródłem" },
        { _key: k("o"), iconName: "plug", title: "Wzory i kalkulatory z Twojego produktu", text: "Darmowe narzędzie z jednym krokiem do konta" },
        { _key: k("o"), iconName: "languages", title: "Wersje na rynki zagraniczne", text: "Niemcy, Czechy, Wielka Brytania, USA" },
        { _key: k("o"), iconName: "sparkles", title: "Program polecany przez ChatGPT", text: "I w podsumowaniach AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w rejestracjach i demo", text: "Od GA4 po płatne konta w CRM" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony SaaS", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony SaaS", value: "od 3500 zł / mies.", note: "strategia, podstrony, technika, AI, raporty", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: wielojęzyczne serwisy, migracje i strony z narzędziami, które budowałem i pozycjonowałem",
      subtitle:
        "Firmie SaaS te projekty pokazują trzy rzeczy, których potrzebuje od SEO: podstrony z danych, kilka rynków naraz i przeniesienie strony bez utraty ruchu. Serwis nieruchomości na Cyprze zbudowałem w 2025 roku i prowadzę co miesiąc: pięć języków, około 375 inwestycji importowanych codziennie z plików deweloperów, wzrost od zera do około 2500 wizyt organicznych miesięcznie bez kupionych linków, a około 10% wejść organicznych przychodzi od asystentów AI. ScanM2, firma skanowania laserowego 3D i BIM, po przejściu z kreatora no-code ma 29 razy większy ruch z Google. Strona agencji edukacyjnej urosła z jednego kraju do dziesięciu na jednej strukturze. Serwis konsultantki analityki handlu ma kalkulatory i szablony w trzech językach. Psychoterapeuta z Mediolanu przeszedł na Next.js z 468 wpisami przekierowanymi 301.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony SaaS",
      subtitle: "W ciągu jednego dnia roboczego odpowiem, od których fraz i podstron zacząłbym, i podam stałą cenę.",
      contextLabel: "Nazwa produktu lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak klienci zaczynają korzystać z produktu?", options: ["Sami: okres próbny lub plan darmowy", "Przez demo i rozmowę z handlowcem", "Zależy od planu"] },
        { _key: k("z"), question: "Gdzie sprzedajecie?", options: ["Polska", "Polska plus Niemcy lub Czechy", "Wielka Brytania i USA", "Wiele krajów naraz"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony SaaS to moja usługa dla polskich firm sprzedających oprogramowanie w abonamencie: praca nad tym, żeby Google i asystenci AI przyprowadzali ludzi, którzy zakładają konto testowe, umawiają demo i zostają płacącymi klientami. Robię to sam — badanie fraz, plan podstron, zmiany w kodzie strony i raporty w rejestracjach — dla produktów, które mają już klientów i chcą zrobić z wyszukiwarki stały kanał sprzedaży."),

        h2("Pozycjonowanie strony SaaS, gdy produkt ma już płacących klientów"),
        p("Polska firma SaaS po kilku latach ma zwykle podobny obraz: blog, który czytają głównie studenci i konkurencja, stronę funkcji ustawioną na jedną ogólną frazę i cennik, którego nikt nie łączy z ruchem z Google. Wejść przybywa, rejestracji z wyszukiwarki — nie. Na tym etapie pozycjonowanie nie polega na dopisywaniu kolejnych wpisów, tylko na tym, żeby każda podstrona miała swoje miejsce w drodze klienta do zakupu."),
        p(
          "Jeśli produkt dopiero powstaje i potrzebujesz pierwszej strony, zajrzyj na stronę ",
          link("strona dla startupu", "/pl/strona-dla-startupu"),
          ".",
        ),

        h2("Jak polscy klienci szukają oprogramowania: frazy „program do…”, „system do…” i „aplikacja do…”"),
        p("Właściciel małej firmy rzadko wpisuje nazwę kategorii po angielsku. Szuka tak: „program do fakturowania dla JDG”, „system do rezerwacji wizyt online”, „aplikacja do ewidencji czasu pracy”, „CRM dla małej firmy”, „program magazynowy w chmurze”. Ten sam produkt opisuje się słowami program, system, aplikacja i oprogramowanie, często z branżą: dla biura rachunkowego, dla salonu, dla firmy budowlanej."),
        p("Branża dostaje osobną podstronę wtedy, gdy produkt ma dla niej coś własnego — funkcje, integracje, klientów, którzy zgodzą się wystąpić. Polskie frazy mają małe liczby wyszukiwań, więc poza danymi z narzędzi biorę słowa z Search Console Twojej strony i ze zgłoszeń do supportu."),

        h2("Strategia SEO dla SaaS: najpierw frazy blisko zakupu, potem poradniki"),
        li("frazy produktowe — „[Twoja marka] cennik”, „[konkurent] opinie”, „[konkurent] alternatywa”"),
        li("frazy rozwiązania — „program do faktur z KSeF”, „grafik pracy online dla restauracji”"),
        li("frazy problemu — „jak rozliczyć nadgodziny”, „wzór umowy o dzieło”"),
        p("Kolejność jest ważna. Frazy produktowe i frazy rozwiązania wpisuje ktoś, kto wybiera program w tym miesiącu, więc od nich zaczynam. Poradniki przychodzą potem i każdy linkuje do podstrony rozwiązania, do której prowadzi. Plan układam z danych wyszukiwań, notatek z rozmów handlowych i przegranych szans sprzedaży: powody, dla których klient wybrał konkurenta, to podstrony, których brakuje."),

        h2("Pozycjonowanie strony SaaS na zmiany w przepisach: KSeF, JPK i RODO"),
        p("W Polsce największe skoki wyszukiwań programów dla firm przychodzą razem ze zmianami w prawie. Obowiązkowy KSeF sprawił, że firmy masowo szukają „programu do faktur z KSeF”, „integracji z KSeF” i odpowiedzi, jak wystawić e-fakturę. Podobnie było z JPK i z każdą zmianą w kadrach i płacach."),
        p("Program, który pierwszy opublikuje jasną podstronę — co się zmienia, od kiedy, jak produkt to obsługuje — zbiera te wyszukiwania, linki od biur rachunkowych i cytowania w odpowiedziach AI. Warunki: fakty sprawdzone przez Waszego eksperta, widoczna data aktualizacji i link do oficjalnego źródła na gov.pl. Podstronę planuję wtedy, gdy przepis zostaje ogłoszony, a nie gdy wchodzi w życie."),

        h2("Content marketing SaaS: wzory, kalkulatory i darmowe narzędzia, które prowadzą do rejestracji"),
        p("Małe firmy w Polsce szukają gotowców: „wzór faktury korygującej”, „kalkulator wynagrodzeń brutto netto”, „kalkulator urlopu wypoczynkowego”, „wzór grafiku pracy”. Jeśli Twój produkt wykonuje taką pracę, darmowe narzędzie na stronie jest najbardziej naturalnym wejściem: działa bez zakładania konta, wynik można pobrać, obok jest tekst z metodą liczenia, a jeden przycisk przenosi dane do aplikacji."),
        p("Artykuły piszę z tym samym założeniem: rozwiązują zadanie czytelnika i pokazują produkt przy tym zadaniu. Dla konsultantki analityki handlu zbudowałem serwis ze 153 podstronami w trzech językach, z kalkulatorami i szablonami zaplanowanymi na podstawie danych wyszukiwań, zanim powstał projekt graficzny."),

        h2("Podstrony generowane z danych produktu SaaS bez pustych stron"),
        p("Z danych, które produkt już ma, da się zbudować setki podstron: integracje, szablony dla branż, kursy walut, stawki. Działa to, gdy każda podstrona niesie informacje, których nie ma na sąsiedniej. Trzysta kopii „system dla restauracji w [miasto]”, w których zmienia się jedynie miasto, to dla Google doorway pages, czyli strony stworzone tylko po to, by przechwycić frazę. Mój test: czy podlinkowałbyś tę podstronę z wnętrza aplikacji? Publikuję partiami, sprawdzam raport indeksowania w Search Console i łączę albo usuwam podstrony, które nie zarabiają na swoje miejsce."),

        h2("Pozycjonowanie strony SaaS za granicą: wersje językowe, hreflang i ceny w euro"),
        p("Polskie firmy SaaS często rosną za granicą: w Niemczech, Czechach, Wielkiej Brytanii, USA. Niemiecki klient wpisuje „Zeiterfassung Software” i oczekuje informacji o DSGVO, cen w euro netto i niemieckich przykładów. Wersja językowa potrzebuje własnego badania fraz, lokalnych cen i opinii, hreflang z x-default i katalogów /de/, /en/ zamiast przekierowań według adresu IP."),
        p(
          "Serwis na Cyprze, który prowadzę, ma pięć języków i wysokie pozycje na wiele niemieckich fraz z rynku DACH. Teksty po polsku, angielsku i rosyjsku piszę sam, a przy niemieckiej czy czeskiej wersji planuję podstrony i frazy, a teksty pisze lub sprawdza native speaker po Waszej stronie albo wybrany przez Was tłumacz. Więcej na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Techniczne SEO strony SaaS: aplikacja, blog, JavaScript i migracja"),
        li("panel aplikacji i strony logowania poza indeksem, a strony marketingowe dostępne bez logowania"),
        li("blog z subdomeny przeniesiony do katalogu /blog, żeby linki wzmacniały główną domenę"),
        li("strona marketingowa w React renderowana w przeglądarce przeniesiona na renderowanie po stronie serwera, bo wiele botów AI nie uruchamia JavaScriptu"),
        li("wyniki wyszukiwania w bazie wiedzy usunięte z indeksu"),
        li("migracja z Webflow, Wix czy WordPressa z przekierowaniem 301 dla każdego starego adresu"),
        p(
          "Psychoterapeuta z Mediolanu przeszedł na Next.js z 468 przekierowanymi wpisami, a ScanM2 po odejściu z kreatora no-code ma 29 razy więcej ruchu z Google. Jeśli strona wymaga przebudowy, zobacz ",
          link("strona internetowa dla firmy SaaS", "/pl/strona-internetowa-dla-firmy-saas"),
          ".",
        ),

        h2("Linki do strony SaaS bez kupowania: integracje, Capterra i rankingi programów"),
        li("katalogi integracji partnerów — systemów księgowych, sklepów internetowych, bramek płatności — z linkiem do Waszej podstrony integracji"),
        li("profile na Capterra i G2 w dobrych kategoriach, z opiniami zbieranymi po wdrożeniu"),
        li("rankingi programów w polskich mediach biznesowych i na blogach — rzetelne dane produktu dla autorów zamiast płatnych wpisów"),
        li("raporty z zanonimizowanych danych produktu, z opisaną metodą"),
        p("Serwis na Cyprze urósł od zera do około 2500 wizyt organicznych miesięcznie bez jednego kupionego linku. Domena, przez którą przychodzą rejestracje, nie jest dobrym miejscem na pakiet linków."),

        h2("Pomiar pozycjonowania strony SaaS: rejestracje, okres próbny, demo i płatne konta"),
        li("zdarzenia kluczowe w GA4: rejestracja, start okresu próbnego, prośba o demo, każde z podstroną wejścia"),
        li("pierwsza podstrona zapisana w ukrytym polu formularza i przekazana do CRM — HubSpot, Pipedrive, Livespace"),
        li("przejście z okresu próbnego na płatne konto według grup podstron"),
        li("pole „Skąd o nas wiesz?”, które wyłapuje polecenia z ChatGPT, w analityce widoczne często jako wejścia bezpośrednie"),
        p("Przy sprzedaży przez demo raport idzie dalej, do szans sprzedaży i wartości lejka z ruchu organicznego."),

        h2("Pozycjonowanie strony SaaS w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Polscy przedsiębiorcy pytają ChatGPT, Perplexity i Google po polsku: „jaki program do fakturowania dla JDG z KSeF”, „najlepszy CRM dla małej firmy”. Asystent podaje kilka nazw z uzasadnieniem. Zbadałem to sam: 47 pytań zakupowych zadanych ChatGPT, Perplexity i Google AI Mode, 141 przeanalizowanych odpowiedzi. Praca nad takimi odpowiedziami to GEO i AEO, a na stronie SaaS oznacza:"),
        li("dla kogo jest program, limity planów, ceny i integracje zapisane tekstem"),
        li("obecność w rankingach i profilach opinii, które asystenci cytują w Waszej kategorii"),
        li("te same fakty na stronie, w Capterra, G2 i katalogach partnerów"),
        li("stały zestaw pytań sprawdzany przed pracą i po niej"),
        p(
          "Około 10% wejść organicznych do serwisu na Cyprze przychodzi od asystentów AI. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony SaaS i kto wykonuje pracę"),
        p(
          "Agencja SEO dla SaaS daje zespół i dużą liczbę tekstów. U mnie jedna osoba robi badanie, plan, zmiany w kodzie, pisze kluczowe podstrony z Waszym zespołem produktu i czyta dane z GA4 i CRM — o tym, jak pracuję jako ",
          link("freelancer SEO", "/pl/oferty/freelancer-seo"),
          ".",
        ),
        li("Audyt SEO strony SaaS: od 1000 zł jednorazowo."),
        li("Prace jednorazowe — podstrony rozwiązań, darmowe narzędzie, hreflang, mapa przekierowań, pomiar rejestracji: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony SaaS: od 3500 zł miesięcznie, w silnie konkurencyjnych kategoriach — programy do fakturowania, CRM, HR — od 5500 zł miesięcznie."),
        p(
          "Pierwsze efekty pojawiają się zwykle po około półtora miesiąca, a stały wzrost w ciągu 3–6 miesięcy. Jak przebiega miesiąc pracy, pokazuje strona ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          "; zakres audytu — ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          "; pełna lista usług z kwotami — ",
          link("cennik", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony SaaS: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony SaaS w 2026 roku?", "Stała współpraca zaczyna się od 3500 zł miesięcznie (od 5500 zł przy silnej konkurencji, np. w programach do fakturowania czy CRM). Audyt kosztuje od 1000 zł, a jednorazowe zadania od 1000 do 3000 zł. Po krótkiej rozmowie o produkcie, rynkach i obecnych liczbach podaję stałą cenę."],
          ["Po jakim czasie pozycjonowanie strony SaaS daje rejestracje?", "Pierwsze efekty zwykle po około półtora miesiąca, stały wzrost w ciągu 3–6 miesięcy. Płatne konta przychodzą potem, w rytmie Waszego okresu próbnego i cyklu sprzedaży."],
          ["Czy pozycjonujesz także angielską i niemiecką wersję strony?", "Tak. Angielskie teksty piszę sam, a przy niemieckiej wersji planuję frazy i podstrony, a teksty pisze lub sprawdza native speaker po Waszej stronie albo tłumacz. Każda wersja ma własne badanie fraz, a nie tłumaczenie polskiej."],
          ["Blog firmy SaaS lepiej prowadzić w subdomenie czy w katalogu?", "Zwykle w katalogu, bo linki i autorytet zostają na głównej domenie. Jeśli blog działa na osobnym systemie, można go podać pod adresem /blog przez reverse proxy, z przekierowaniami ze starych adresów."],
          ["Czy pracujesz z naszym działem marketingu i copywriterami?", "Tak, to częsty układ. Ja robię strategię, technikę i podstrony najbliżej sprzedaży, a Wasz zespół pisze kolejne teksty według moich briefów; każdy tekst przed publikacją sprawdzam."],
          ["Czy ChatGPT będzie polecał nasz program?", "Nikt nie może tego zagwarantować. Mogę sprawić, że fakty o produkcie będą łatwe do znalezienia i sprawdzenia, i pokazać ten sam zestaw pytań przed pracą i po niej."],
          ["Jak wygląda rozliczenie współpracy?", "Na podstawie umowy, a co miesiąc wystawiam fakturę — w złotych albo, jeśli tak wolicie, w euro. Pierwsza rozmowa trwa 15–30 minut i jest bezpłatna."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony SaaS: co mi wysłać"),
        p(
          "Wyślij adres strony, jedno zdanie o tym, dla kogo jest produkt, sposób, w jaki nowi klienci zaczynają (samodzielny test czy rozmowa z handlowcem), rynki i języki, na których sprzedajecie, nazwy konkurentów, z którymi przegrywacie, i przybliżoną liczbę rejestracji z Google. Dostęp do Search Console i GA4 bardzo pomoże. Odpowiem, od czego zacząłbym, i podam stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
