// Landing page fixture: Pozycjonowanie projektanta wnętrz (PL), group
// «seo-for-interior-designers». New page. Market version for Polish projektanci
// i architekci wnętrz and small pracownie — not a translation of
// seo-for-interior-designers.en.
// Semantic core: ref/home-services.md has no measured PL phrases; headings
// carry «pozycjonowanie projektanta wnętrz» (H1, H2s), «SEO dla architekta i
// projektanta wnętrz» (metaTitle), «pozycjonowanie lokalne projektanta
// wnętrz», «wizytówka Google pracowni», «projekt wnętrz online», «ile kosztuje
// projekt wnętrz za m²» (articles H2). PL PAA used: «Ile kosztuje
// pozycjonowanie firmy?» (cost H2, FAQ), «Co jest lepsze: pozycjonowanie czy
// Google Ads?» (FAQ), «Na czym polega pozycjonowanie?» (first H2).
// Intent: ref/intent-check-home-services.md — «pozycjonowanie projektanta
// wnętrz» vs «strona dla projektanta wnętrz» 1 shared URL (YouTube) → separate
// pages; the SEO SERP is small agencies and architects’ business blogs
// (przedsiebiorczyarchitekt.pl, archiconnect.pl) — content-led, beatable.
// Polish context: frazy z miastem i dzielnicą, «projektant» and «architekt
// wnętrz» used interchangeably by clients, stan deweloperski and zmiany
// lokatorskie, wizualizacje vs zdjęcia z realizacji, Homebook, Oferteo,
// salony łazienek i kuchni, mieszkania pokazowe dla deweloperów, RODO.
// NOT on this page: design and build of the site, portfolio layout, form
// design (/pl/strona-internetowa-dla-projektanta-wnetrz — sibling); pracownie z
// ekipą konkurujące z firmami remontowymi (/pl/pozycjonowanie-strony-firmy-budowlanej
// — linked once); Google Ads, Facebook Ads, paid Homebook placements.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s segment.
import { p, h2, li, link, k } from "./pt";

export const seoForInteriorDesignersPl = {
  lang: "pl",
  group: "seo-for-interior-designers",
  slug: "pozycjonowanie-strony-projektanta-wnetrz",
  title: "Pozycjonowanie strony projektanta wnętrz",
  heading: "Pozycjonowanie strony projektanta wnętrz i pracowni projektowej",
  excerpt:
    "Zajmuję się pozycjonowaniem projektantów wnętrz i małych pracowni: wyniki na nazwę pracowni, frazy z miastem i dzielnicą, wizytówka Google z opiniami, realizacje opisane pod konkretne wyszukiwania, projekt online w całej Polsce i obecność w odpowiedziach AI; efekty liczę w zapytaniach o projekt.",
  seo: {
    metaTitle: "SEO dla architekta i projektanta wnętrz | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony projektanta wnętrz: frazy z miastem, wizytówka Google, realizacje w Google Grafika, Homebook, artykuły dla klientów i AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Miasto, realizacje i projekt online", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Projektant wnętrz Wrocław Krzyki", "Projekt łazienki w bloku", "Opinie w Google", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO projektanta wnętrz: strona, wizytówka Google, profile, realizacje, odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla pracowni wnętrz: podstrony miast i usług, opisy realizacji, dane strukturalne, pomiar zapytań", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony projektanta wnętrz", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony projektanta wnętrz",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy, które wpisują Twoi klienci", text: "Miasto, dzielnica, pomieszczenie, rodzaj projektu" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google pracowni", text: "Kategoria, obszar działania, zdjęcia, opinie" },
        { _key: k("o"), iconName: "image", title: "Realizacje, które wychodzą w Google", text: "Tytuł, opisy zdjęć i tekst dla każdego projektu" },
        { _key: k("o"), iconName: "file-text", title: "Artykuły na pytania klientów", text: "Cena za m², etapy projektu, nadzór autorski" },
        { _key: k("o"), iconName: "sparkles", title: "Pracownia polecana przez ChatGPT", text: "Fakty, które asystent AI może powtórzyć" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w zapytaniach o projekt", text: "Wiesz, która podstrona przyniosła zapytanie" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO projektanta wnętrz", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie pracowni wnętrz", value: "od 3500 zł / mies.", note: "realizacje, artykuły, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: firmy usługowe, które klienci znajdują lokalnie i wybierają po kilku podstronach",
      subtitle:
        "Warszawski warsztat samochodowy dostał pozycjonowanie lokalne, pracę nad Mapami Google i podstrony usług, czyli to, co przyprowadza klientów z okolicy. Firma remontowo-wykończeniowa i inwestycyjna z Warszawy ma stronę o wyglądzie premium, na której sprzedają skończone wnętrza. Psychoterapeuta z Mediolanu dostał podstrony dla Mediolanu i Monzy oraz 468 wpisów przeniesionych z przekierowaniami 301 ze starych adresów, a jego nowe podstrony pojawiają się już w odpowiedziach ChatGPT. ScanM2, firma skanowania laserowego 3D i BIM, po dwóch latach bez zapytań przeszła na WordPress; ruch z Google wzrósł 29-krotnie, a zapytania przychodzą każdego tygodnia. Serwis Cyprus VIP Estates zbudowałem od zera w pięciu językach i co miesiąc prowadzę jego SEO. Pracownia wnętrz potrzebuje tego samego: podstron pod frazy ze swojego miasta i zapytań, o których wiadomo, skąd przyszły.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony projektanta wnętrz",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw — wizytówkę, podstrony miast czy opisy realizacji — i za jaką stałą cenę.",
      contextLabel: "Nazwa pracowni lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakich projektów chcesz więcej?", options: ["Mieszkania w stanie deweloperskim", "Domy jednorodzinne", "Kuchnie i łazienki", "Lokale usługowe i biura"] },
        { _key: k("z"), question: "Jak pracujesz?", options: ["Sam, na własnej działalności", "Pracownia 2–10 osób", "Projekt i wykończenie z własną ekipą", "Głównie projekty online"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony projektanta wnętrz to moja usługa dla architektów i projektantów wnętrz oraz małych pracowni: praca nad tym, żeby klient szukający projektu mieszkania, domu albo łazienki w Twoim mieście znalazł Cię w Google, w Mapach i w odpowiedziach AI, a potem wysłał zapytanie. Całość wykonuję osobiście: od audytu i nowych podstron, przez zmiany w kodzie i wizytówce, po raport — więc problem znajduje i naprawia ta sama osoba."),

        h2("Pozycjonowanie strony projektanta wnętrz: na czym polega i co obejmuje"),
        p("Większość klientów pracowni wciąż przychodzi z polecenia, ale nawet polecony klient wpisuje nazwę pracowni w Google, zanim zadzwoni. Pozostali szukają po mieście, pomieszczeniu albo rodzaju usługi. Pracuję nad czterema miejscami, w których kończą się te wyszukiwania:"),
        li("strona: podstrony usług, miast i dzielnic, realizacje, artykuły"),
        li("wizytówka Google i wyniki w Mapach na „projektant wnętrz w pobliżu”"),
        li("profile na Homebooku, Instagramie i Pinterest oraz publikacje o Tobie"),
        li("odpowiedzi ChatGPT, Perplexity i podsumowania AI w Google"),
        p(
          "Układ strony, portfolio i formularz opisuję na stronie ",
          link("strona internetowa dla projektanta wnętrz", "/pl/strona-internetowa-dla-projektanta-wnetrz"),
          "; tutaj chodzi o to, żeby Cię znaleziono.",
        ),

        h2("Frazy, które wpisują klienci szukający projektanta wnętrz"),
        p("Dobór fraz dla pracowni zaczyna się od tego, jak klient opisuje swój problem, a nie od języka branży. Wyszukiwania, które kończą się umową, dzielą się na kilka grup:"),
        li("miasto i dzielnica: „projektant wnętrz Kraków”, „architekt wnętrz Warszawa Bemowo”, „projektowanie wnętrz Gdynia”"),
        li("rodzaj nieruchomości: „projekt mieszkania w stanie deweloperskim”, „projekt wnętrz domu jednorodzinnego”, „projekt kawalerki”"),
        li("pomieszczenie: „projekt łazienki”, „projekt kuchni z wyspą”, „salon z aneksem kuchennym projekt”"),
        li("cena i zakres: „ile kosztuje projekt wnętrz za m²”, „projekt wnętrz online”, „nadzór autorski cena”"),
        li("nazwa pracowni i nazwisko projektanta, także z literówkami"),
        p("Klienci używają określeń „projektant wnętrz” i „architekt wnętrz” zamiennie, więc strona używa obu tam, gdzie brzmi to naturalnie. Frazy z nazwą dzielnicy mają niewielkie liczby wyszukiwań, ale pracownia nie potrzebuje tysięcy odwiedzin — potrzebuje kilku osób w miesiącu, które właśnie odebrały klucze."),

        h2("Pozycjonowanie lokalne projektanta wnętrz: wizytówka Google i podstrony miast"),
        p("W Mapach Google projektant wnętrz konkuruje z pracowniami z okolicy, a nie z całą Polską. Pracownia, która przyjmuje klientów w biurze, pokazuje adres; projektant pracujący z domu i jeżdżący do klientów ustawia wizytówkę z obszarem obsługi, bez widocznego adresu. Najważniejsze:"),
        li("kategoria główna „Projektant wnętrz”, a dodatkowe tylko dla usług, które naprawdę sprzedajesz"),
        li("nazwa pracowni taka jak na fakturze, bez dopisków typu „projekty wnętrz Kraków”"),
        li("zdjęcia realizacji dodawane przez cały rok, z nazwą miejscowości w opisie"),
        li("prośba o opinię po zakończeniu projektu i odpowiedź na każdą opinię"),
        p(
          "Na stronie wizytówkę wspierają podstrony miast i dzielnic, w których robisz projekty na miejscu, napisane z Twoich realizacji: jaka tam zabudowa — kamienice, bloki z wielkiej płyty, nowe osiedla — z czym przychodzą klienci, przykładowe projekty. Pełną pracę nad Mapami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Realizacje i wizualizacje projektanta wnętrz jako podstrony w Google"),
        p("Wiele pracowni pokazuje w portfolio głównie wizualizacje, bo nie każdy projekt doczekał się sesji po wykończeniu. W pozycjonowaniu działa jedno i drugie, jeśli jest opisane:"),
        li("każdy projekt ma własną podstronę z tytułem, który mówi co i gdzie — „Łazienka 5 m² z prysznicem walk-in, blok z lat 80., Łódź Retkinia”"),
        li("nazwy plików i teksty alternatywne opisują każde zdjęcie osobno, zamiast powtarzać „projekt wnętrz”"),
        li("kilka akapitów o założeniach i decyzjach prowadzi linkami do usługi i do podstrony miasta"),
        li("zdjęcia są skompresowane tak, żeby podstrona na telefonie mieściła się w progach Core Web Vitals"),
        p("Zdjęcia wnętrz ludzie przeglądają w Google Grafika i na Pinterest, więc dobrze opisany projekt zbiera wejścia przez lata, a nie tylko w tygodniu publikacji."),

        h2("Projekt wnętrz online: pozycjonowanie pracowni w całej Polsce"),
        p("W projekcie online nie konkurujesz z pracowniami z dzielnicy, tylko z projektantami z całego kraju i serwisami sprzedającymi gotowe pakiety. Mapy Google nie mają tu znaczenia. Liczą się podstrony pakietów z jasnym zakresem, odpowiedzi na pytania przed zakupem — jak zmierzyć mieszkanie, ile poprawek, w jakiej formie przychodzi projekt — i przykłady skończonych projektów online. Trzymam je osobno od podstron lokalnych, żeby jedne nie osłabiały drugich."),

        h2("Homebook, Instagram i Pinterest w pozycjonowaniu strony projektanta wnętrz"),
        p("Profil na Homebooku często wychodzi wysoko na nazwę pracowni i bywa czytany przez asystentów AI; Pinterest prowadzi ludzi do zdjęć; Instagram buduje rozpoznawalność, choć jego posty rzadko pojawiają się w Google. Ustawiam je według kilku zasad:"),
        li("ta sama nazwa, adres albo obszar, telefon i strona w każdym profilu"),
        li("projekty na Homebooku i piny prowadzą do konkretnej realizacji na stronie"),
        li("opinie zbierane najpierw w Google, potem na Homebooku"),
        li("płatne wyróżnienia i serwisy z zapytaniami, jak Oferteo, oceniane po liczbie umów, obok zapytań z własnej strony"),

        h2("Artykuły dla klientów: ile kosztuje projekt wnętrz za m² i co obejmuje"),
        p("Zanim ktoś zapyta pracownię o wycenę, pyta Google: „ile kosztuje projekt wnętrz za m²”, „czym różni się projekt koncepcyjny od wykonawczego”, „czy nadzór autorski jest potrzebny”, „zmiany lokatorskie — co można zmienić u dewelopera”. Artykuł, który odpowiada na takie pytanie na przykładach z Twoich projektów i ma Twoje nazwisko jako autora, ściąga dokładnie tych, którzy za chwilę będą wybierać projektanta. Każdy kończy się linkiem do usługi i formularza. Cudzych stawek nie trzeba podawać: wystarczy opisać, od czego zależy cena, i podać swoją, jeśli chcesz."),

        h2("Publikacje, salony i wykonawcy: linki dla pracowni projektowania wnętrz"),
        p("Linki z innych stron wciąż pomagają Google ocenić, którą pracownię pokazać wyżej. Projektanci mają źródła, których zwykła firma usługowa nie ma:"),
        li("portale i magazyny wnętrzarskie, które publikowały Twoje projekty — z prośbą o link do realizacji"),
        li("salony łazienek, kuchni i podłóg, które polecają współpracujących projektantów"),
        li("wykonawcy, stolarze i fotografowie, z którymi pracujesz, na swoich stronach realizacji"),
        li("deweloperzy, jeśli przygotowujesz dla nich mieszkania pokazowe"),
        p("Pakiety setek wpisów w katalogach niewiele dają, a mogą zaszkodzić; jeden link od salonu, z którym naprawdę robisz projekty, znaczy więcej."),

        h2("Pozycjonowanie strony projektanta wnętrz w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Część klientów zamiast Google pyta od razu ChatGPT, Perplexity albo podsumowania AI: „polecisz projektanta wnętrz w Poznaniu do mieszkania 50 m²?”, „ile kosztuje projekt łazienki”, „czy projekt online wystarczy przy remoncie”. Asystent podaje kilka pracowni i powód wyboru. Na tę pracę mówi się GEO (generative engine optimization) lub AEO (answer engine optimization), a w pracowni wnętrz sprowadza się ona do czterech rzeczy:"),
        li("miasto, obszar pracy, rodzaje projektów, styl i sposób wyceny zapisane prostymi zdaniami"),
        li("realizacje i artykuły, które wprost odpowiadają na pytania, z projektantem jako autorem"),
        li("te same dane w wizytówce Google, na Homebooku i w publikacjach oraz regularne nowe opinie"),
        li("dane strukturalne firmy i osoby połączone z profilami"),
        p(
          "Na starcie i po kilku miesiącach zadaję asystentom te same pytania i porównuję, kogo wymieniają. Szczegóły na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak mierzę wyniki pozycjonowania pracowni wnętrz: zapytania o projekt"),
        p("Ruch łatwo zwiększyć artykułami, po których nikt nie zamawia projektu. W raporcie liczę to, z czego żyje pracownia: zapytania z formularza razem z podstroną, z której przyszły, metrażem i rodzajem projektu; telefony i kliknięcia z wizytówki Google; pozycje fraz z miastem — obok tych liczb, a nie zamiast nich. Analityka działa po zgodzie na cookies, zgodnie z RODO."),
        p(
          "Jak wygląda stała praca nad SEO w ogóle, opisuje strona ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ". Pracownie, które prowadzą też wykończenia z własną ekipą, konkurują z firmami remontowymi — to temat strony ",
          link("pozycjonowanie strony firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony projektanta wnętrz"),
        p("Pierwsze efekty w Mapach i w wynikach na nazwę pracowni widać zwykle po kilku tygodniach; podstrony miast i realizacji potrzebują raczej trzech–sześciu miesięcy, a w Warszawie i Krakowie więcej."),
        li("Audyt SEO — strona, wizytówka, profile, realizacje i odpowiedzi AI: od 1000 zł, jednorazowo, z poprawkami ułożonymi od najważniejszej."),
        li("Jednorazowe prace — podstrony miast i usług, opisy realizacji, dane strukturalne, pomiar zapytań: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony projektanta wnętrz — nowe realizacje i podstrony, artykuły, linki od partnerów, opinie, obecność w odpowiedziach AI, raport: od 3500 zł miesięcznie; w Warszawie i Krakowie, gdzie pracowni jest najwięcej, od 5500 zł."),
        p(
          "Wszystkie ceny są w ",
          link("cenniku", "/pl/cennik"),
          "; zakres audytu opisuje strona ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony projektanta wnętrz: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony projektanta wnętrz?", "Za audyt zapłacisz od 1000 zł, za pojedynczą pracę — na przykład podstrony miast — od 1000 do 3000 zł, a za stałą współpracę od 3500 zł miesięcznie, w Warszawie i Krakowie od 5500 zł. Stałą kwotę podaję, gdy opiszesz pracownię i miasto."],
          ["Ile trwa pozycjonowanie pracowni wnętrz?", "Zmiany w wizytówce Google działają najszybciej, po kilku tygodniach. Nowe podstrony miast i opisy realizacji zaczynają przynosić zapytania po trzech–sześciu miesiącach, a raz napisany artykuł pracuje na pracownię latami, jeśli go aktualizujesz."],
          ["Czy Instagram nie wystarczy projektantowi wnętrz?", "Instagram pokazuje Twoje projekty obserwującym. Ktoś, kto wpisuje w Google „projektant wnętrz” z nazwą miasta albo pyta o to asystenta AI, trafia na strony, wizytówki i Mapy. Bez nich ta część klientów wybiera inne pracownie."],
          ["Na jakie frazy pozycjonować pracownię projektowania wnętrz?", "Na frazy łączące miejsce z usługą: „projektant wnętrz” lub „architekt wnętrz” z miastem albo dzielnicą, „projekt mieszkania w stanie deweloperskim”, „projekt łazienki”, „projekt wnętrz online”, a także na nazwę pracowni. Konkretną listę ustalam na danych wyszukiwań dla Twojego miasta."],
          ["Co jest lepsze: pozycjonowanie czy Google Ads?", "Google Ads przyprowadzi klientów od jutra, ale tylko dopóki płacisz za kliknięcia. Pozycjonowanie rozkręca się kilka miesięcy, za to opisana realizacja czy podstrona miasta zbiera zapytania bez opłaty za każde wejście. Moja praca to wyszukiwarka i odpowiedzi AI."],
          ["Czy ChatGPT poleca projektantów wnętrz?", "Poleca, jeśli ktoś zapyta wprost, na przykład o projektanta w swoim mieście. Asystent sięga po pracownie, o których znajdzie spójne informacje: miasto, rodzaje projektów, styl, opinie i opisane realizacje. To część mojego pozycjonowania — odpowiedzi sprawdzam przed startem i po kilku miesiącach."],
          ["Czy pracujesz z pracowniami spoza Warszawy?", "Tak. Pracownie z Krakowa, Trójmiasta, Wrocławia czy Lublina obsługuję tak samo jak warszawskie: zdalnie, na danych z wyszukiwań w Twoim mieście i w dzielnicach, gdzie realizujesz projekty."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony projektanta wnętrz: co mi wysłać"),
        p(
          "Wyślij link do strony, do wizytówki w Mapach Google i do profilu na Homebooku, miasto i dzielnice, w których robisz projekty na miejscu, rodzaj projektów, których chcesz więcej, informację, czy sprzedajesz projekt online, i to, skąd dziś przychodzą zapytania. W odpowiedzi napiszę, od czego bym zaczął i ile to będzie kosztować. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
