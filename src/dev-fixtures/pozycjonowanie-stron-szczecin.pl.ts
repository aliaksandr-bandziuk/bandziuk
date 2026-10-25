// Landing page fixture: Pozycjonowanie stron Szczecin (PL), group
// «pozycjonowanie-stron-szczecin». City page, stage 3 pilot (BRIEF.md).
// Semantic core (ref/city-keywords.md, ref/pl-cities.md): pozycjonowanie
// szczecin 480 · pozycjonowanie stron szczecin 390 · pozycjonowanie stron www
// szczecin 170 · agencja interaktywna szczecin 170 · agencja marketingowa
// szczecin 170 · pozycjonowanie stron internetowych szczecin 140. Also in
// headings/FAQ: «agencja SEO Szczecin», «audyt SEO Szczecin», «pozycjonowanie
// lokalne / wizytówka Google w Szczecinie», «cennik».
// PAA (pl-cities): Ile kosztuje pozycjonowanie strony w 2026? Ile kosztuje
// dobre pozycjonowanie strony? Jak długo trwa pozycjonowanie strony? Czy
// pozycjonowanie stron ma sens? Kto zajmuje się pozycjonowaniem stron? Jak
// samemu pozycjonować stronę? — all in H2 or FAQ.
// Intent (ref/intent-check-pl-cities.md): SEO vs website SERPs share 0 URLs →
// two pages; pozycjonowanie / agencja SEO / audyt SEO share 1–2 URLs, SERPs
// fragmented across local studios, national agencies with city pages,
// individual specialists and Oferteo → one page with all phrases in headings.
// City angle (no doorway): port and maritime logistics, proximity to Germany
// (clients from Mecklenburg-Vorpommern and Brandenburg, German searches with
// «Stettin»), districts on both banks of the Odra, suburban gminas (Dobra,
// Kołbaskowo, Police, Gryfino, Goleniów, Stargard). Smaller market → stałe
// pozycjonowanie od 3500 zł (no 5500 zł tier here).
// NOT on this page: the website build (/pl/tworzenie-stron-internetowych-szczecin);
// wizytówka Google in depth (/pl/oferty/pozycjonowanie-lokalne); dental and
// manufacturing detail (industry pages, linked once); Google Ads and social
// media (not offered); e-commerce (not offered).
// Owner’s rules: PL form «pozycjonowanie strony X»; AI search H2; never say
// there are no clients from the visitor’s city or industry; remote from Warsaw.
import { p, h2, li, link, k } from "./pt";

export const pozycjonowanieStronSzczecinPl = {
  lang: "pl",
  group: "pozycjonowanie-stron-szczecin",
  slug: "pozycjonowanie-stron-szczecin",
  title: "Pozycjonowanie stron Szczecin",
  heading: "Pozycjonowanie stron w Szczecinie",
  excerpt:
    "Pozycjonowanie stron w Szczecinie robię dla firm z miasta i okolicznych gmin: audyt SEO, poprawki w kodzie, podstrony usług z dzielnicami, wizytówka Google, niemieckie podstrony dla klientów zza granicy i widoczność w odpowiedziach AI. Jedna osoba od audytu do wdrożenia, ceny w cenniku.",
  seo: {
    metaTitle: "Pozycjonowanie Szczecin: SEO także po niemiecku | Bandziuk",
    metaDescription:
      "Pozycjonowanie stron w Szczecinie: audyt SEO, podstrony dzielnic, wizytówka Google, frazy „Stettin” dla klientów z Niemiec i AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Jeden specjalista, bez opiekuna klienta", "Audyt od 1000 zł", "Frazy po polsku i po niemiecku"],
  heroPhonePoints: ["Mechanik Szczecin Pogodno", "Zahnarzt Stettin", "Zadzwoń", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy ze Szczecina: strona, wizytówka Google, konkurencja w mieście", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony usług i dzielnic, niemieckie podstrony, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony firmy ze Szczecina", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie stron w Szczecinie",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt strony i szczecińskich wyników", text: "Co blokuje stronę i kto zajmuje Wasze frazy w mieście" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług z dzielnicą lub gminą", text: "Pogodno, Prawobrzeże, Mierzyn, Police — tam, gdzie pracujecie" },
        { _key: k("o"), iconName: "message-circle", title: "Niemieckie podstrony pod „Stettin”", text: "Dla klientów z Meklemburgii i Brandenburgii" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google po obu stronach Odry", text: "Kategoria, obszar działania, opinie po polsku i niemiecku" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w telefonach i zapytaniach", text: "GA4 i Search Console, pozycje fraz obok, nie zamiast" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony firmy ze Szczecina", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie w Szczecinie", value: "od 3500 zł / mies.", note: "podstrony, wizytówka, AI, raporty", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: lokalne firmy usługowe i strona w trzech językach",
      subtitle:
        "Warszawski warsztat samochodowy, pracownia renowacji felg, przechowalnia opon i firma remontowo-inwestycyjna zdobywają klientów, którzy wpisują usługę z nazwą miasta albo dzielnicy — tak samo szuka się usług w Szczecinie. Firma skanowania laserowego 3D i modelowania BIM ma stronę po polsku, angielsku i niemiecku, a jej ruch organiczny wzrósł 29 razy; to przykład pracy z niemieckojęzycznym klientem, którego ma wiele szczecińskich firm.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony firmy ze Szczecina",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: które zmiany na stronie i w wizytówce Google dadzą najszybszy efekt, czy warto dodać niemieckie podstrony i ile to kosztuje.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Skąd przychodzą Wasi klienci?", options: ["Ze Szczecina", "Z gmin pod Szczecinem", "Także z Niemiec", "Z całej Polski"] },
        { _key: k("z"), question: "Czy strona ma wersję niemiecką?", options: ["Tak", "Nie, ale klienci mówią po niemiecku", "Nie jest potrzebna", "Mamy tylko angielską"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie stron w Szczecinie prowadzę dla firm z miasta i okolicznych gmin: audyt SEO, poprawki w kodzie, podstrony usług, wizytówka Google, niemieckie podstrony dla klientów zza granicy i widoczność w odpowiedziach AI. Pracuję sam, z Warszawy, a z firmami ze Szczecina współpracuję online — rozmowy wideo, wspólne dokumenty i lista zadań, na której widać, co już jest zrobione. Problem na stronie znajduje i naprawia ta sama osoba."),

        h2("Pozycjonowanie stron Szczecin: co obejmuje praca dla firm z miasta i okolic"),
        p("Klient ze Szczecina trafia do firmy jedną z trzech dróg: przez zwykłe wyniki Google, przez Mapy albo przez odpowiedź asystenta AI. Pozycjonowanie stron internetowych w Szczecinie łączy te drogi w jeden plan pracy:"),
        li("podstrony usług z nazwą miasta, dzielnicy albo gminy, w której naprawdę pracujecie"),
        li("poprawki techniczne: indeksowanie, szybkość na telefonie, tytuły, przekierowania ze starych adresów"),
        li("wizytówka Google zgodna ze stroną i z katalogami firm"),
        li("niemieckie wersje tych podstron, z którymi przychodzą klienci z Niemiec — tylko jeśli takich klientów macie"),
        li("treści, które ChatGPT i podsumowania AI w Google mogą zacytować"),
        p("Zadania układam według tego, co przyniesie najwięcej telefonów i zapytań, a nie według pakietów „SEO techniczne”, „treści” i „linki”."),

        h2("Gospodarka Szczecina a pozycjonowanie: port, logistyka i klienci z Niemiec"),
        p("Szczecin to miasto portowe nad Odrą, z firmami spedycyjnymi, transportowymi, magazynowymi i obsługą żeglugi. Takie firmy sprzedają innym firmom: klient porównuje kilka ofert, czyta dłużej i często pisze po angielsku albo po niemiecku. Dla nich pozycjonowanie to przede wszystkim podstrony konkretnych usług — odprawa celna, magazynowanie, transport kontenerowy, przeładunki — opisane rzeczowo, z zakresem i sposobem współpracy."),
        p("Druga, bardzo szczecińska grupa to firmy usługowe, do których przyjeżdżają klienci z Meklemburgii-Pomorza Przedniego i Brandenburgii: gabinety stomatologiczne, warsztaty samochodowe, fryzjerzy, kosmetyczki, fizjoterapeuci. Przez bliskość granicy ten sam gabinet walczy jednocześnie o pacjenta z Niebuszewa i o pacjenta z Pasewalku albo Schwedt. Do tego dochodzą firmy budowlane i wykończeniowe z gmin pod miastem, uczelnie i szkoły językowe, a latem obsługa ludzi jadących nad Zalew Szczeciński i nad morze."),

        h2("Jak szukają klienci w Szczecinie: dzielnice, gminy pod miastem i niemiecki „Stettin”"),
        p("Szczecinianie często dopisują do usługi dzielnicę albo stronę rzeki: „dentysta Pogodno”, „mechanik Prawobrzeże”, „przedszkole Warszewo”, „fizjoterapia Gumieńce”. Mieszkańcy podmiejskich gmin wpisują własną miejscowość — Mierzyn, Dobra, Kołbaskowo, Przecław, Police, Gryfino, Goleniów, Stargard — i szukają firmy, która tam dojeżdża albo jest blisko."),
        p("Klienci z Niemiec szukają po niemiecku i używają niemieckiej nazwy miasta: „Zahnarzt Stettin”, „Autowerkstatt Stettin”, „Friseur Stettin”. Część z nich mieszka po polskiej stronie, w gminach przy granicy, i szuka raz po polsku, raz po niemiecku. Strona tylko z polską wersją w takich wynikach się nie pojawia. Do tego dochodzą wyszukiwania po ukraińsku i angielsku — od pracowników firm logistycznych, studentów i osób, które przeprowadziły się do Szczecina."),

        h2("Kto jest w wynikach na „pozycjonowanie Szczecin”: lokalne studia, agencje i Oferteo"),
        p("Po wpisaniu „pozycjonowanie stron Szczecin” albo krótszego „pozycjonowanie Szczecin” widać kilka rodzajów firm: lokalne studia, które robią strony i SEO, ogólnopolskie agencje z podstroną dla Szczecina, pojedynczych specjalistów z podstronami miast i Oferteo, gdzie opisujecie zlecenie i dostajecie kilka ofert. Wyniki dla „agencja interaktywna Szczecin” czy „agencja marketingowa Szczecin” wyglądają jeszcze inaczej — tam przeważają firmy od reklamy i mediów społecznościowych."),
        p("W praktyce porównujecie bardzo różne usługi pod jedną nazwą. Każdemu wykonawcy warto zadać te same pytania: kto konkretnie będzie pracował nad stroną, czy raport pokazuje telefony i zapytania, czy tylko pozycje, na jak długo jest umowa i do kogo należą treści po jej zakończeniu."),

        h2("Agencja SEO w Szczecinie czy jeden specjalista od audytu do wdrożenia"),
        p("Agencja SEO ma handlowca, opiekuna klienta, specjalistów i copywriterów. To ma sens, gdy firma kupuje naraz kampanie, media społecznościowe i pozycjonowanie. Firma ze Szczecina, której chodzi głównie o miejsce w Google i w Mapach, płaci wtedy także za tę strukturę."),
        p("Pracuję sam: analizuję dane wyszukiwań, piszę i poprawiam podstrony, zmieniam kod w WordPressie, Next.js albo innym systemie i tłumaczę raport. Uwagi nie przechodzą przez opiekuna klienta, a ceny są opublikowane, zanim do mnie napiszecie. Nie prowadzę Google Ads ani mediów społecznościowych — jeśli tego potrzebujecie, lepiej sprawdzi się agencja i powiem to w pierwszej odpowiedzi."),

        h2("Audyt SEO w Szczecinie: od czego zaczyna się pozycjonowanie stron internetowych"),
        p("Każda współpraca zaczyna się od audytu strony, wizytówki i konkurencji w Waszej części miasta. Sprawdzam:"),
        li("czy Google widzi wszystkie ważne podstrony i jak szybko ładują się na telefonie"),
        li("które frazy już przynoszą wejścia w Google Search Console, także niemieckie"),
        li("czy usługi, dzielnice i gminy, w których pracujecie, mają własne podstrony"),
        li("z czym firmy z Waszej branży są wysoko w Szczecinie i które ich miejsca da się realnie zająć"),
        li("co ChatGPT i podsumowania AI w Google mówią dziś o Waszej firmie"),
        p(
          "Wynikiem jest plan: od zmian, które najszybciej dadzą telefony, do tych, które mogą poczekać. Zakres audytu opisuję na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Pozycjonowanie lokalne w Szczecinie: wizytówka Google po obu stronach Odry"),
        p("Szczecin jest rozległy i przecięty Odrą, więc odległość od szukającego mocno zmienia wyniki w Mapach. Gabinet z Pogodna rzadko pokazuje się komuś, kto szuka na Prawobrzeżu, nawet jeśli dojazd zajmuje kwadrans. Dlatego wizytówka Google dostaje dokładną kategorię, listę usług i obszar działania, a strona — podstrony dla części miasta i gmin, do których firma naprawdę dojeżdża."),
        p(
          "Firmy z klientami z Niemiec mają w wizytówce opis i odpowiedzi na opinie także po niemiecku, a nazwa, adres i telefon są takie same na stronie, w wizytówce i w katalogach. O pracy nad Mapami Google piszę szerzej na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie strony po niemiecku dla firm ze Szczecina"),
        p("Wersja niemiecka nie oznacza tłumaczenia całej strony. Tłumaczę podstrony, z którymi naprawdę przychodzą klienci zza granicy — leczenie, naprawa, usługa z ceną — i układam je pod frazy, które Niemcy wpisują, z „Stettin” w tytułach. Niemieckie podstrony dostają osobne adresy i oznaczenia hreflang — dzięki nim użytkownik z Niemiec widzi w Google wersję w swoim języku."),
        p(
          "Klient z Niemiec chce zwykle wiedzieć trzy rzeczy: czy ktoś mówi po niemiecku, jak dojechać i gdzie zaparkować oraz ile zapłaci. Te odpowiedzi stoją na stronie wprost. Gabinety, do których przyjeżdżają pacjenci z Niemiec, znajdą więcej na stronie ",
          link("pozycjonowanie strony gabinetu stomatologicznego", "/pl/pozycjonowanie-strony-gabinetu-stomatologicznego"),
          ", a firmy produkcyjne i logistyczne sprzedające za granicę — na stronie ",
          link("pozycjonowanie strony firmy produkcyjnej", "/pl/pozycjonowanie-strony-firmy-produkcyjnej"),
          ".",
        ),

        h2("Pozycjonowanie firm ze Szczecina w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Zamiast wpisywać frazę, część klientów zadaje pytanie ChatGPT, Perplexity albo podsumowaniom AI w Google: „dobry ortodonta w Szczecinie”, „warsztat w Szczecinie, gdzie mówią po niemiecku”, „firma przeprowadzkowa Szczecin–Berlin”. Asystent wybiera firmy, o których może przeczytać coś konkretnego i sprawdzalnego. Pracę nad tym nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization) i robię ją w ramach tego samego pozycjonowania:"),
        li("usługi, dzielnice, języki obsługi i godziny zapisane zwykłymi zdaniami, które da się zacytować"),
        li("znaczniki schema.org z adresem, godzinami i usługami, spójne z wizytówką"),
        li("te same fakty w polskiej i niemieckiej wersji strony"),
        p(
          "Na starcie zapisuję, jak asystenci odpowiadają dziś na pytania o Waszą branżę w Szczecinie, i porównuję to po kilku miesiącach. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Czy pozycjonowanie stron w Szczecinie ma sens i jak zacząć samemu"),
        p("Ma sens, gdy klienci wpisują Waszą usługę w Google albo w Mapy, a Was nie ma w pierwszych wynikach. Mniejszy, gdy cała sprzedaż idzie przez stałe kontrakty albo przetargi i nikt nie szuka Waszej usługi w wyszukiwarce — wtedy wystarczy porządna strona. Sami możecie zacząć bez kosztów:"),
        li("dać każdej usłudze osobną podstronę z miastem w tytule, np. „Protetyka — gabinet stomatologiczny, Szczecin Niebuszewo”"),
        li("uzupełnić wizytówkę Google i odpowiadać na każdą opinię, także niemiecką"),
        li("podłączyć Google Search Console — pokaże, po jakich zapytaniach ludzie już trafiają na stronę"),
        p("Zlecić warto technikę, niemieckie podstrony, przeniesienie strony i branże, w których szczecińscy konkurenci mają mocne strony od lat."),

        h2("Jak długo trwa pozycjonowanie stron www w Szczecinie"),
        p("Zmiany w tytułach, technice i wizytówce zwykle widać w wynikach po kilku tygodniach, a nowa podstrona usługi potrzebuje dwóch–czterech miesięcy, żeby zająć mocne miejsce w szczecińskich wynikach. Frazy z dzielnicą albo gminą rosną zwykle szybciej niż ogólne frazy z nazwą miasta, a niemieckie podstrony konkurują w osobnym zestawie wyników."),
        p("Co miesiąc raportuję, ile telefonów, formularzy i rezerwacji przyszło z wyszukiwarki — dane biorę z GA4 i Google Search Console. Pozycje fraz też pokazuję, ale jako tło dla tych liczb. Jeśli w którymś miesiącu wynik spadnie, raport mówi dlaczego i co zmieniamy."),

        h2("Pozycjonowanie stron Szczecin: cennik"),
        li("Audyt SEO strony, wizytówki i konkurencji w Szczecinie: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrony usług i dzielnic, niemieckie podstrony, znaczniki schema.org i naprawa błędów: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony — podstrony, wizytówka, widoczność w AI i raporty: od 3500 zł miesięcznie."),
        p(
          "Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Jeśli stronę trzeba najpierw zbudować albo przebudować, zajrzyjcie na stronę ",
          link("tworzenie stron internetowych w Szczecinie", "/pl/tworzenie-stron-internetowych-szczecin"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie stron w Szczecinie: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony w Szczecinie w 2026 roku?", "Na start wystarczy audyt SEO od 1000 zł. Stała współpraca w Szczecinie zaczyna się od 3500 zł miesięcznie, a niemieckie podstrony czy poprawki techniczne wyceniam jako jednorazowe prace w przedziale od 1000 do 3000 zł. Po krótkim opisie firmy podaję stałą cenę."],
          ["Jak długo trwa pozycjonowanie strony firmy ze Szczecina?", "Pierwszy efekt poprawek technicznych i wizytówki widać zwykle po kilku tygodniach. Nowe podstrony usług potrzebują dwóch–czterech miesięcy. Frazy z dzielnicą lub gminą pod Szczecinem rosną zwykle szybciej niż ogólne frazy z nazwą miasta."],
          ["Czy pozycjonowanie stron ma sens dla małej firmy ze Szczecina?", "Tak, jeśli klienci wpisują Waszą usługę w Google lub Mapy. Firmy obsługujące także klientów z Niemiec mają dodatkowy powód: frazy z „Stettin” to osobne wyniki, w których firma z samą polską stroną się nie pojawia."],
          ["Kto zajmuje się pozycjonowaniem stron w Szczecinie: agencja SEO czy specjalista?", "W szczecińskich wynikach są lokalne studia, ogólnopolskie agencje i pojedynczy specjaliści. Ja pracuję sam, od audytu po zmiany w kodzie, bez opiekuna klienta i z cenami w cenniku. Agencja ma sens, gdy razem z SEO potrzebujecie reklam i mediów społecznościowych."],
          ["Jak samemu pozycjonować stronę firmy w Szczecinie?", "Zacznijcie od wizytówki Google z dokładną kategorią i opiniami, osobnych podstron usług z nazwą miasta lub dzielnicy w tytule i Google Search Console. Niemieckie podstrony, technikę i przebudowę strony lepiej zlecić."],
          ["Czy można być widocznym w Mapach Google w innej części Szczecina?", "Częściowo. Odległości od szukającego nie zmienimy, ale trafna kategoria, opinie, zdjęcia i podstrona dla danej dzielnicy lub gminy pomagają pokazywać się dalej od adresu firmy, zwłaszcza przy rzadszych usługach."],
          ["Czy pozycjonujesz strony firm ze Szczecina zdalnie, z Warszawy?", "Tak. Rozmawiamy online, pracujemy na wspólnych dokumentach, a dostęp do strony, wizytówki i Search Console dostaję od Was. Do pozycjonowania nie są potrzebne spotkania na miejscu, tylko dane i szybkie decyzje."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony w Szczecinie: co mi wysłać"),
        p(
          "Wyślijcie adres strony, link do wizytówki Google, listę usług, które mają przynosić więcej klientów, dzielnice i gminy, w których pracujecie, oraz informację, czy obsługujecie klientów z Niemiec. W ciągu jednego dnia roboczego odpiszę, od czego zacząłbym w Waszym przypadku i ile to będzie kosztować. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
