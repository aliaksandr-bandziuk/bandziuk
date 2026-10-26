// Landing page fixture: Pozycjonowanie stron w Krakowie (PL), group
// «pozycjonowanie-stron-krakow». City page, stage 3 pilot.
// Phrases (ref/city-keywords.md, ref/pl-cities.md; volumes/month, Poland):
// pozycjonowanie stron kraków 590 · agencja seo kraków 260 · pozycjonowanie
// stron internetowych kraków 170 · kraków pozycjonowanie stron 70 ·
// pozycjonowanie stron kraków cennik 50. Brief adds «audyt SEO Kraków» and
// «pozycjonowanie lokalne / wizytówka Google w Krakowie».
// PAA (pl-cities.md): Ile kosztuje pozycjonowanie strony w 2026? Ile kosztuje
// dobre pozycjonowanie? Jak długo trwa? Czy ma sens? Kto zajmuje się
// pozycjonowaniem stron? Jak samemu pozycjonować stronę? — all in H2 or FAQ.
// Intent (ref/intent-check-pl-cities.md): SEO vs website build 0 shared URLs →
// separate pages; «pozycjonowanie» vs «agencja SEO» share 1–2 URLs in big
// cities → one page with «agencja SEO Kraków» as an H2. Kraków SERPs for
// websites are split across dozens of studios (alterpage, webiso, wojoweb,
// michalpytko, hauerpower…) — individual specialists rank too.
// City angle: tourism (Stare Miasto, Kazimierz, Wieliczka), IT and BPO/SSC
// centres, universities and students; districts in queries (Nowa Huta,
// Podgórze, Krowodrza, Bronowice, Prądnik, Ruczaj, Kurdwanów, Czyżyny) and
// communes around the city (Wieliczka, Skawina, Niepołomice, Zielonki);
// English-language searches by tourists, students and people working in
// international offices; Ukrainian speakers. Big city with strong competition
// → od 5500 zł mentioned.
// NOT on this page: the website build (/pl/tworzenie-stron-internetowych-krakow);
// wizytówka Google in depth (/pl/oferty/pozycjonowanie-lokalne); industry
// detail (/pl/pozycjonowanie-strony-hotelu, /pl/pozycjonowanie-restauracji,
// /pl/seo-dla-kancelarii-prawnych); Google Ads, social media, e-commerce.
// Owner’s rules: remote from Warsaw, no visits promised; never say there are no
// clients from the visitor’s city or industry.
import { p, h2, h3, li, link, k } from "./pt";

export const pozycjonowanieStronKrakowPl = {
  lang: "pl",
  group: "pozycjonowanie-stron-krakow",
  slug: "pozycjonowanie-stron-krakow",
  title: "Pozycjonowanie stron w Krakowie",
  heading: "Pozycjonowanie stron w Krakowie",
  excerpt:
    "Pozycjonowanie stron w Krakowie dla firm usługowych, turystycznych i B2B: audyt SEO, podstrony usług i dzielnic, wizytówka Google, wersje językowe i widoczność w odpowiedziach AI. Pracuję zdalnie jako jeden specjalista SEO, bez opiekuna klienta i z cenami w cenniku.",
  seo: {
    metaTitle: "Pozycjonowanie stron Kraków — specjalista SEO | Bandziuk",
    metaDescription:
      "Pozycjonowanie stron w Krakowie: audyt SEO, podstrony usług i dzielnic, Mapy Google, wersje EN i widoczność w AI. Jeden specjalista. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Jeden specjalista SEO, bez opiekuna klienta", "Audyt od 1000 zł", "Wyniki po polsku i angielsku"],
  heroPhonePoints: ["Dentysta Kraków Podgórze", "Restaurant Kazimierz Kraków", "Wasza firma w Mapach", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy z Krakowa: strona, wizytówka Google, konkurencja, wersje językowe", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony usług i dzielnic, poprawki techniczne, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie stron w Krakowie", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie stron w Krakowie",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt SEO na tle krakowskiej konkurencji", text: "Które frazy są realne do zdobycia, a które zajęte na lata" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług i dzielnic", text: "Nowa Huta, Podgórze, Krowodrza — tam, gdzie macie klientów" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje językowe pod wyszukiwania z zagranicy", text: "Angielska i inne tam, gdzie obsługujecie gości i obcokrajowców" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google w gęstym centrum", text: "Kategorie, opinie i zdjęcia, które odróżniają Was od sąsiadów" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i podsumowaniach AI", text: "Fakty, które asystent może zacytować, także po angielsku" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w rezerwacjach i zapytaniach", text: "Liczone w GA4, z komentarzem, co zmienić w kolejnym miesiącu" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony firmy z Krakowa", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie stron w Krakowie", value: "od 3500 zł / mies.", note: "przy silnej konkurencji od 5500 zł", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony, które budowałem i pozycjonowałem",
      subtitle:
        "Wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów, firma skanowania laserowego 3D i modelowania BIM ze stroną w trzech językach oraz trzy lokalne firmy z Warszawy: firma remontowo-inwestycyjna, warsztat samochodowy i pracownia renowacji felg. Dla firmy z Krakowa ważne są obie strony tej pracy: widoczność w wielu językach dla klientów z zagranicy i lokalne podstrony oraz Mapy Google dla klientów z sąsiedztwa.",
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
      title: "Wycena pozycjonowania strony w Krakowie",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw, czy warto pozycjonować wersję angielską i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Kto jest Waszym głównym klientem?", options: ["Mieszkańcy Krakowa", "Turyści i goście", "Firmy i biura", "Studenci i obcokrajowcy"] },
        { _key: k("z"), question: "W jakich językach szukają Was klienci?", options: ["Tylko po polsku", "Po polsku i angielsku", "W kilku językach", "Nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie stron w Krakowie to moja usługa dla firm, które chcą zdobywać klientów z Google, z Map Google i z odpowiedzi asystentów AI w mieście, w którym o każdą frazę walczy wiele firm. Pracuję jako jeden specjalista SEO: audyt, poprawki w kodzie, podstrony, wizytówkę i raport wykonuję osobiście. Z Warszawy współpracuję z firmami z Krakowa zdalnie, a ceny są podane w cenniku."),

        h2("Pozycjonowanie stron w Krakowie: turystyka, IT, uczelnie i usługi dla mieszkańców"),
        p("Kraków to kilka rynków w jednym mieście. Pierwszy tworzy turystyka: Stare Miasto, Kazimierz i wycieczki do Wieliczki ściągają gości z całego świata, a za nimi idą hotele, apartamenty, restauracje, przewodnicy i organizatorzy wycieczek. Drugi to centra IT i usług dla biznesu, w których pracuje wielu specjalistów, także z zagranicy. Trzeci to uczelnie i studenci, którzy co roku zmieniają mieszkania, szukają kursów i usług. Czwarty to zwykłe życie dużego miasta: gabinety, warsztaty, kancelarie, ekipy remontowe."),
        p("Każdy z tych rynków ma inny sposób szukania i inną konkurencję. Hotel przy Rynku rywalizuje z portalami rezerwacyjnymi, gabinet stomatologiczny w Bronowicach z kilkoma gabinetami w promieniu kilometra, a firma B2B obsługująca biura z agencjami z całej Polski. Plan pozycjonowania zaczynam więc od ustalenia, na którym z tych rynków jesteście i gdzie realnie da się wygrać."),

        h2("Jak szukają klienci w Krakowie: Nowa Huta, Podgórze, Kazimierz i gminy wokół miasta"),
        p("Krakowianie bardzo często dopisują do zapytania dzielnicę albo osiedle. „Fryzjer Nowa Huta”, „weterynarz Ruczaj”, „przedszkole Prądnik Biały”, „mechanik Czyżyny”, „fizjoterapia Kurdwanów” — to wyszukiwania, w których wygrywa firma z podstroną lub wizytówką jasno związaną z miejscem. Rosnące osiedla na obrzeżach i gminy wokół miasta, takie jak Wieliczka, Skawina, Niepołomice czy Zielonki, mają własne wyszukiwania, a ich mieszkańcy wpisują raz „Kraków”, raz nazwę swojej miejscowości."),
        p("Dla firmy usługowej oznacza to wybór kilku obszarów, w których naprawdę pracujecie, i pokazanie ich na stronie konkretnie: zdjęcia realizacji z Podgórza, czas dojazdu do Zielonek, parking przy gabinecie w Krowodrzy. Kilkadziesiąt podstron różniących się tylko nazwą dzielnicy nie pomoże; Google i klienci rozpoznają je od razu."),

        h2("Pozycjonowanie stron w Krakowie po angielsku: turyści, studenci i obcokrajowcy"),
        p("W Krakowie część klientów nie szuka po polsku wcale. Turyści wpisują „restaurant near Wawel”, „pierogi Kazimierz” albo „day trip Wieliczka”. Osoby pracujące w międzynarodowych biurach szukają dentysty, prawnika czy szkoły dla dzieci po angielsku. Coraz więcej mieszkańców szuka też po ukraińsku. Wyniki w tych językach są zwykle mniej zatłoczone niż polskie, ale tylko wtedy, gdy podstrona jest napisana dla tej osoby, a nie przetłumaczona maszynowo słowo w słowo."),
        p("Przy pozycjonowaniu wersji językowej sprawdzam, czy Google widzi ją jako osobną stronę z poprawnymi oznaczeniami hreflang, czy wizytówka ma opis i odpowiedzi na opinie w tym języku i czy frazy po angielsku mają realne wyszukiwania w Krakowie."),

        h2("Agencja SEO w Krakowie, studio czy jeden specjalista SEO"),
        p("W Krakowie działa bardzo wiele firm zajmujących się pozycjonowaniem. Na „agencja SEO Kraków” i „pozycjonowanie stron Kraków” wysoko są lokalne agencje i studia, ogólnopolskie firmy z podstroną dla Krakowa, pojedynczy specjaliści z własnymi stronami miast i porównywarka Oferteo. Wybór jest duży, a oferty trudno porównać, bo każdy liczy inaczej."),
        p("W wynikach dla Waszej branży sytuacja jest podobna. Obok lokalnych firm stoją katalogi, portale z opiniami, a w turystyce i gastronomii także duże portale rezerwacyjne. Nie każdą z tych pozycji da się zdobyć, dlatego przed planem pracy sprawdzam, które miejsca w pierwszej dziesiątce zajmują strony firm podobnych do Waszej, bo właśnie o nie warto walczyć."),
        h3("Kiedy jeden specjalista ma przewagę nad agencją"),
        li("chodzi o widoczność w Google i AI, a nie o pakiet z kampaniami i mediami społecznościowymi"),
        li("chcecie rozmawiać z osobą, która sama zmienia stronę, zamiast z opiekunem klienta"),
        li("wolicie znać cenę przed pierwszą rozmową, z opublikowanego cennika"),
        p("Pracuję w marketingu internetowym od ponad 15 lat i robię wszystko sam: dane, treści, kod w WordPressie i Next.js, wizytówkę, raport. Z Krakowem współpracuję zdalnie: rozmowa wideo, wspólny dokument, dostęp do Search Console i panelu strony, bez wizyt w biurze."),

        h2("Audyt SEO strony firmy z Krakowa"),
        p("Audyt to pierwszy krok i często największa część pracy. Dla strony z Krakowa obejmuje:"),
        li("indeksowanie, błędy techniczne, szybkość na telefonie i zdublowane podstrony"),
        li("frazy z Google Search Console, które już dają wyświetlenia, i usługi bez własnej podstrony"),
        li("pierwszą dziesiątkę wyników dla Waszych fraz, osobno dla Krakowa i dla najważniejszych dzielnic"),
        li("wersje językowe, jeśli je macie, i to, jak Google je łączy"),
        p(
          "Dostajecie plan zmian ułożony od tych, które najszybciej przyniosą zapytania. Zakres audytu opisuję na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Pozycjonowanie lokalne w Krakowie: wizytówka Google w zatłoczonym centrum"),
        p("W okolicy Rynku, Kazimierza czy Podgórza na jednej ulicy działa kilka restauracji, kawiarni albo gabinetów, a Mapy Google pokazują tylko trzy. O wejściu do tej trójki decydują trafność wizytówki, odległość od szukającego i rozpoznawalność firmy. Na odległość nie macie wpływu, na resztę tak: właściwe kategorie, aktualne zdjęcia, opinie w kilku językach z odpowiedziami, menu lub cennik w wizytówce i ta sama nazwa oraz adres na stronie."),
        p(
          "Poza centrum, w Nowej Hucie czy w Bieżanowie, konkurencja w Mapach jest zwykle słabsza i porządna wizytówka szybciej daje telefony. Szerzej o Mapach Google piszę na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie hoteli, restauracji i kancelarii w Krakowie"),
        p(
          "Trzy branże są w Krakowie szczególnie konkurencyjne i mają własne zasady. Hotele i apartamenty walczą z portalami rezerwacyjnymi o rezerwacje bezpośrednie — opisuję to na stronie ",
          link("pozycjonowanie strony hotelu", "/pl/pozycjonowanie-strony-hotelu"),
          ". Restauracje żyją z Map Google i zdjęć, o czym piszę na stronie ",
          link("pozycjonowanie restauracji", "/pl/pozycjonowanie-strony-restauracji"),
          ". Kancelarie muszą pozycjonować się w granicach zasad etyki zawodowej, co opisuję na stronie ",
          link("pozycjonowanie strony kancelarii prawnej", "/pl/seo-dla-kancelarii-prawnych"),
          ".",
        ),

        h2("Pozycjonowanie stron w Krakowie w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Turysta pyta ChatGPT, gdzie zjeść obiad z widokiem na Wawel, a mieszkaniec — który ortodonta w Krakowie przyjmuje w soboty. Asystenci i podsumowania AI w Google polecają firmy, o których mogą przeczytać konkretne, spójne informacje. Tę pracę nazywa się GEO (generative engine optimization) lub AEO (answer engine optimization), a w moim pozycjonowaniu obejmuje:"),
        li("fakty o firmie zapisane zdaniami, które da się zacytować: usługi, dzielnica, godziny, języki obsługi, widełki cen"),
        li("dane strukturalne zgodne z wizytówką Google, także w wersjach językowych"),
        li("odpowiedzi na pytania, które klienci zadają po polsku i po angielsku"),
        p(
          "Sprawdzam, co asystenci mówią o Waszej firmie, zanim zacznę, i po wprowadzeniu zmian. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak samemu pozycjonować stronę firmy w Krakowie"),
        p("Kilka rzeczy właściciel firmy zrobi sam, bez budżetu:"),
        li("dodajcie do tytułów podstron usługę i miejsce, np. „Gabinet fizjoterapii — Kraków Krowodrza”"),
        li("odpowiadajcie na każdą opinię w Google, także te po angielsku"),
        li("wpiszcie w wizytówkę i na stronę języki, w których obsługujecie klientów"),
        li("sprawdzajcie w Google Search Console, które zapytania rosną, i dopisujcie odpowiedzi na stronie"),
        p("Zlecić warto technikę, strukturę wersji językowych i walkę o frazy, na które w Krakowie od lat są wysoko mocne strony konkurentów."),

        h2("Jak długo trwa pozycjonowanie stron internetowych w Krakowie i czy ma sens"),
        p("Wizytówka i poprawki techniczne mogą zadziałać w kilka tygodni. Nowe podstrony w popularnych branżach potrzebują w Krakowie zwykle kilku miesięcy, bo konkurencja jest duża; wersje angielskie i frazy z dzielnicami ruszają często szybciej. W turystyce dochodzi sezon: podstronę pod wakacje albo pod jarmark świąteczny na Rynku trzeba opublikować kilka miesięcy wcześniej, bo Google potrzebuje czasu, żeby ją ocenić."),
        p("Pozycjonowanie stron internetowych w Krakowie ma sens, gdy klienci szukają Waszej usługi w sieci i jesteście gotowi na kilka miesięcy pracy. W raportach liczę telefony, zapytania i rezerwacje, a pozycje fraz pokazuję obok."),

        h2("Pozycjonowanie stron Kraków: cennik i ile kosztuje dobre pozycjonowanie"),
        li("Audyt SEO strony, wizytówki i konkurencji w Krakowie: od 1000 zł jednorazowo."),
        li("Jednorazowe prace — podstrony, wersje językowe, dane strukturalne, poprawki techniczne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie: od 3500 zł miesięcznie, a w branżach z silną konkurencją w Krakowie, jak hotele czy gastronomia w centrum, od 5500 zł miesięcznie."),
        p(
          "Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Jeśli strona wymaga przebudowy przed pozycjonowaniem, zajrzyjcie na stronę ",
          link("tworzenie stron internetowych w Krakowie", "/pl/tworzenie-stron-internetowych-krakow"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie stron w Krakowie: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony w Krakowie w 2026?", "Audyt od 1000 zł, jednorazowe prace od 1000 do 3000 zł, stałe pozycjonowanie od 3500 zł miesięcznie. W branżach z silną konkurencją w Krakowie stała praca zaczyna się od 5500 zł miesięcznie. Kwotę dla Waszej firmy podam po krótkim opisie branży i dzielnicy."],
          ["Jak długo trwa pozycjonowanie strony w Krakowie?", "Pierwsze efekty wizytówki i poprawek technicznych widać po kilku tygodniach. Nowe podstrony w popularnych branżach potrzebują zwykle kilku miesięcy, a frazy z dzielnicami i wersje angielskie często mniej."],
          ["Czy pozycjonowanie stron ma sens przy tak dużej konkurencji?", "Tak, jeśli wybierze się frazy, które da się wygrać: usługi z dzielnicą, wersję angielską, konkretne pytania klientów. Walka tylko o najogólniejszą frazę z nazwą Krakowa rzadko się opłaca małej firmie."],
          ["Jak samemu pozycjonować stronę?", "Podstrona dla każdej usługi z miejscem w tytule, uzupełniona wizytówka Google, odpowiedzi na opinie i Google Search Console to darmowy początek. Technikę i wersje językowe warto zlecić."],
          ["Agencja SEO w Krakowie czy specjalista?", "Agencja sprawdza się, gdy kupujecie SEO razem z kampaniami i social media. Specjalista, który sam wykonuje pracę, sprawdza się, gdy chodzi o Google i AI, a budżet ma iść na zmiany na stronie, nie na obsługę."],
          ["Czy pomagasz z wizytówką w Mapach Google w Krakowie?", "Tak: kategorie, usługi, zdjęcia, opinie w kilku językach i zgodność danych ze stroną. W centrum Krakowa to często decyduje o tym, czy restauracja lub gabinet trafia do pierwszej trójki w Mapach."],
          ["Czy pozycjonujesz firmy z Krakowa zdalnie z Warszawy?", "Tak. Kontakt odbywa się przez wideo, wiadomości i wspólną tabelę zadań, a zmiany na stronie widzicie na bieżąco. Wizyta w Krakowie nie jest do tego potrzebna."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony w Krakowie: co mi wysłać"),
        p(
          "Wyślijcie link do strony i do wizytówki w Mapach Google, usługi, które chcecie sprzedawać więcej, dzielnice lub gminy, z których przychodzą klienci, i języki, w których ich obsługujecie. Odpowiem, od czego zacząłbym i ile to będzie kosztować. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
