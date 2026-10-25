// Landing page fixture: Pozycjonowanie strony małej firmy (PL), group
// «seo-services-for-small-business».
// Market version for small Polish firms (JDG, small service companies, shops,
// gabinety), not a translation of seo-services-for-small-business.en.
// Semantic core: ref/small-business.md (PL) and BRIEF.md: «pozycjonowanie
// strony małej firmy», «pozycjonowanie dla małej firmy», «SEO dla małej
// firmy» — no measured volume; SERP entirely agencies (premiumdigital.pl,
// afterweb.pl, cyber.pl, internetica.pl, semcore.pl…) → buyers’ demand.
// Related: «ile kosztuje pozycjonowanie strony» (cost H2 + FAQ).
// PAA: Ile kosztuje SEO miesięcznie? Czy da się pozycjonować wizytówkę Google?
// Jak samemu zrobić SEO? Czy SEO ma jeszcze sens? (all four as H2 or FAQ).
// Intent: ref/intent-check-small-business.md — «pozycjonowanie dla małej
// firmy» vs «strona internetowa dla małej firmy» 0 shared URLs → SEO and the
// build are separate pages.
// Polish context: wizytówka Google, umowy agencji na 12 miesięcy, rozliczenie
// za efekt, Panorama Firm / pkt.pl as directories, RODO on forms, cookies.
// NOT on this page: the website build (/pl/strona-internetowa-dla-malej-firmy);
// wizytówka Google in depth (/pl/oferty/pozycjonowanie-lokalne); industry
// detail (/pl/pozycjonowanie-strony-firmy-budowlanej,
// /pl/pozycjonowanie-strony-gabinetu-stomatologicznego,
// /pl/pozycjonowanie-restauracji, /pl/pozycjonowanie-strony-hotelu); Warsaw
// (/pl/oferty/pozycjonowanie-stron-warszawa); Google Ads and social media
// (not offered).
// Owner’s rules: PL form «pozycjonowanie strony X»; every SEO page covers AI
// search (GEO, AEO); never say there are no clients from the visitor’s segment.
import { p, h2, li, link, k } from "./pt";

export const seoServicesForSmallBusinessPl = {
  lang: "pl",
  group: "seo-services-for-small-business",
  slug: "pozycjonowanie-strony-malej-firmy",
  title: "Pozycjonowanie strony małej firmy",
  heading: "Pozycjonowanie strony małej firmy",
  excerpt:
    "Zajmuję się pozycjonowaniem stron małych firm: audyt, poprawki na stronie, podstrony usług, wizytówka Google i widoczność w odpowiedziach AI — robi to jedna osoba, bez opiekuna klienta i bez rocznej umowy z agencją.",
  seo: {
    metaTitle: "SEO dla małej firmy: audyt od 1000 zł | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony małej firmy: audyt, poprawki, podstrony usług, wizytówka Google i AI. Robi to jeden specjalista, ceny są jawne. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Jeden specjalista zamiast agencji", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Księgowa Poznań Jeżyce", "Zadzwoń", "Twoja strona w Google", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO małej firmy: strona, wizytówka Google, konkurencja", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla małej firmy: poprawki, podstrony usług, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony małej firmy", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony małej firmy",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt z listą poprawek według wpływu", text: "Co blokuje stronę, opisane tak, żeby dało się to wdrożyć" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej usługi", text: "Pod frazy, które wpisują klienci, z miastem lub dzielnicą" },
        { _key: k("o"), iconName: "gauge", title: "Poprawki techniczne w kodzie", text: "Szybkość, indeksowanie, tytuły — robi je ta sama osoba" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google zgodna ze stroną", text: "Kategoria, usługi, godziny i link do właściwej podstrony" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w telefonach i zapytaniach", text: "Co przyniosła wyszukiwarka, nie tylko pozycje" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony małej firmy", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony małej firmy", value: "od 3500 zł / mies.", note: "podstrony, poprawki, AI, raporty", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony małych firm, które budowałem i pozycjonowałem",
      subtitle:
        "Małe lokalne firmy, którym klientów przynosi wyszukiwarka: warsztat samochodowy, pracownia renowacji felg, przechowalnia opon, firma remontowa i firma skanowania laserowego 3D i BIM — podstrony usług, wizytówki Google i ustawienia SEO dopasowane do tego, jak szukają lokalni klienci.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony małej firmy",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie i w wizytówce Google, i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Skąd teraz przychodzą klienci?", options: ["Z poleceń", "Z Google i Map Google", "Z Oferteo i innych portali", "Nie wiem"] },
        { _key: k("z"), question: "Czy masz teraz umowę z agencją SEO?", options: ["Tak, trwa", "Tak, kończy się", "Nie", "Kiedyś tak"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony małej firmy to praca nad tym, żeby osoby, które wpisują w Google Waszą usługę i miejscowość, trafiały na Waszą stronę i do Waszej wizytówki, a potem dzwoniły albo wysyłały zapytanie. Robię to sam: audyt, poprawki w kodzie, podstrony usług, wizytówkę i raporty. Osoba, która znajduje problemy, jest tą samą, która je naprawia, a budżet idzie na pracę, nie na opiekuna klienta."),

        h2("Pozycjonowanie strony małej firmy: co obejmuje usługa"),
        p("W małej firmie o tym, czy klient się odezwie, decydują trzy miejsca w wyszukiwarce:"),
        li("strona — podstrony usług, tytuły, szybkość na telefonie, dane strukturalne i treść, która odpowiada na pytania klientów"),
        li("wizytówka Google — wynik w Mapach i obok wyszukiwania nazwy firmy"),
        li("odpowiedzi AI — ChatGPT, Perplexity i podsumowania AI w Google, które polecają firmy, o których mogą coś przeczytać"),
        p("Pozycjonowanie dla małej firmy łączy te trzy rzeczy w jedną pracę. Nie ma tu osobnych pakietów na „SEO techniczne”, „content” i „link building” — jest lista zadań ułożona według tego, co przyniesie najwięcej zapytań."),

        h2("Czy SEO dla małej firmy ma jeszcze sens: pozycjonowanie a Google Ads i Facebook"),
        p("Reklama w Google Ads albo na Facebooku działa od pierwszego dnia i kończy się razem z budżetem. Pozycjonowanie potrzebuje miesięcy, ale wejścia z wyszukiwarki nie kosztują za kliknięcie, a podstrona, która jest wysoko, przynosi telefony także w miesiącach, w których nic nie wydajecie na reklamę. Dla małej firmy z ograniczonym budżetem to główna zaleta SEO."),
        p("Wiele małych firm robi jedno i drugie: niewielka kampania na sezon albo na start, a pozycjonowanie jako kanał, który z czasem zmniejsza wydatki na reklamę. Kampanii nie prowadzę — robię część SEO."),

        h2("Pozycjonowanie dla małej firmy: specjalista SEO czy agencja"),
        p("Po wpisaniu „pozycjonowanie dla małej firmy” wyniki zajmują agencje. Agencja ma handlowca, opiekuna klienta, specjalistę i copywriterów, z którymi zwykle nie rozmawiacie. To ma sens, gdy firma potrzebuje naraz SEO, kampanii, mediów społecznościowych i grafiki. W firmie z jednym biurem albo jednym lokalem część budżetu idzie wtedy na strukturę, a nie na stronę."),
        p("Pracuję sam. Ta sama osoba sprawdza dane wyszukiwań, pisze albo poprawia podstrony, zmienia kod — w WordPressie, Next.js albo innym systemie — i tłumaczy raport. Nie ma przekazywania zadań między działami. Czego nie robię: Google Ads, prowadzenia mediów społecznościowych i wideo."),

        h2("Umowa na pozycjonowanie małej firmy: abonament, rozliczenie za efekt i okres wypowiedzenia"),
        p("Na polskim rynku często spotyka się dwie rzeczy, na które warto uważać przy podpisywaniu umowy:"),
        li("umowa na 12 miesięcy z wypowiedzeniem, które trzeba złożyć z dużym wyprzedzeniem, inaczej przedłuża się sama"),
        li("rozliczenie za efekt, czyli płatność za frazy w TOP10 — działa dobrze dla agencji, gdy frazy dobrano tak, że łatwo je wypozycjonować, a mało kto je wpisuje"),
        p("Przed podpisaniem zapytajcie: czy raport pokazuje telefony i zapytania, czy tylko pozycje; do kogo należą treści, domena i wizytówka po zakończeniu współpracy; czy frazy w umowie mają realną liczbę wyszukiwań. Te same pytania warto zadać także mnie."),

        h2("Audyt SEO strony małej firmy: od czego zaczyna się pozycjonowanie"),
        p("Każda współpraca zaczyna się od audytu, a w wielu małych firmach audyt i poprawki to większość potrzebnej pracy. Sprawdzam:"),
        li("jak Google widzi stronę: indeksowanie, błędy, powielone tytuły i szybkość na telefonie, gdzie główna treść powinna pojawić się w ciągu 2,5 sekundy"),
        li("które frazy już dają wejścia w Google Search Console i które usługi nie mają własnej podstrony"),
        li("czy wizytówka Google zgadza się ze stroną"),
        li("z czym są wysoko konkurenci z okolicy i które ich pozycje są realne do zdobycia"),
        li("jak ChatGPT i podsumowania AI opisują dziś Waszą firmę"),
        p(
          "Dostajecie listę poprawek ułożoną według wpływu na wynik. Szczegóły na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Czy da się pozycjonować wizytówkę Google małej firmy"),
        p(
          "Tak, i dla wielu małych firm to najszybsze źródło telefonów. O pozycji w Mapach decydują trafność wizytówki, odległość od szukającego i rozpoznawalność firmy: opinie, wzmianki, linki. W ramach pozycjonowania strony porządkuję wizytówkę tak, żeby zgadzała się ze stroną; całą pracę nad Mapami — opinie, katalogi takie jak Panorama Firm czy pkt.pl, obszar działania — opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Jak samemu zrobić SEO dla małej firmy, a co lepiej zlecić"),
        p("Właściciel małej firmy może zrobić sporo sam, bez opłat:"),
        li("dać każdej usłudze osobną podstronę z tytułem, w którym jest usługa i miasto, np. „Biuro rachunkowe Gdynia — pełna księgowość dla JDG”"),
        li("napisać na stronie ceny albo widełki, obszar działania i sposób umówienia wizyty"),
        li("prosić każdego zadowolonego klienta o opinię w Google i odpowiadać na każdą"),
        li("podłączyć Google Search Console i sprawdzać, jakie frazy już przyprowadzają ludzi"),
        p("Zlecić warto to, w czym błąd kosztuje dużo albo długo go nie widać: przeniesienie lub przebudowę strony, problemy techniczne, stronę na kreatorze, który ogranicza zmiany, i branże, w których konkurenci mają już mocne strony."),

        h2("RODO, cookies i szybkość strony małej firmy w pozycjonowaniu"),
        p("Na stronach małych firm często te same elementy szkodzą jednocześnie SEO i zgodności z przepisami. Formularz kontaktowy zbiera dane osobowe, więc potrzebuje informacji o administratorze danych i celu przetwarzania zgodnie z RODO. Baner cookies powinien naprawdę blokować skrypty analityczne do czasu zgody, a GA4 można ustawić w trybie Consent Mode, żeby raporty nie znikały."),
        p("Ciężkie wtyczki do cookies, czatów i sliderów spowalniają stronę na telefonie, a szybkość jest jednym z sygnałów, które Google bierze pod uwagę. Przy audycie sprawdzam, co da się usunąć albo zastąpić lżejszym rozwiązaniem. To ogólne wskazówki, nie porada prawna."),

        h2("SEO dla małej firmy w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Klienci coraz częściej pytają ChatGPT, Perplexity albo podsumowania AI w Google, gdzie w ich mieście znaleźć dobrą księgową, fizjoterapeutę albo warsztat. Asystent poleca firmy, o których znajduje konkretne fakty. Pracę nad tym nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization), a w małej firmie to część tego samego pozycjonowania:"),
        li("usługi, ceny, obszar działania, godziny i lata na rynku zapisane zwykłymi zdaniami, które asystent może zacytować"),
        li("dane strukturalne łączące stronę z wizytówką Google"),
        li("te same dane firmy na stronie, w wizytówce i w katalogach"),
        li("odpowiedzi na pytania, które klienci zadają przez telefon"),
        p(
          "Przed pracą i po niej sprawdzam, jak asystenci opisują Waszą firmę. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Pozycjonowanie małej firmy w Twojej branży: budowlanka, gabinet, restauracja, hotel"),
        p(
          "Niektóre branże mają własne nawyki wyszukiwania i opisuję je osobno: ",
          link("pozycjonowanie strony firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej"),
          ", ",
          link("pozycjonowanie strony gabinetu stomatologicznego", "/pl/pozycjonowanie-strony-gabinetu-stomatologicznego"),
          ", ",
          link("pozycjonowanie restauracji", "/pl/pozycjonowanie-restauracji"),
          " i ",
          link("pozycjonowanie strony hotelu", "/pl/pozycjonowanie-strony-hotelu"),
          ". Firmy z Warszawy znajdą więcej na stronie ",
          link("pozycjonowanie stron w Warszawie", "/pl/oferty/pozycjonowanie-stron-warszawa"),
          ".",
        ),

        h2("Jak długo trwa pozycjonowanie strony małej firmy i jak mierzę wyniki"),
        p("Poprawki tytułów, błędów technicznych i wizytówki potrafią dać efekt w kilka tygodni. Nowa podstrona usługi zwykle potrzebuje dwóch–czterech miesięcy, żeby wejść wysoko, a w dużych miastach i popularnych branżach dłużej. Dlatego pierwsze miesiące idą na rzeczy, które działają najszybciej, a nowe podstrony powstają równolegle."),
        p("W raporcie liczę to, z czego firma żyje: telefony, zapytania z formularza i rezerwacje z wyszukiwarki, mierzone w GA4 i Google Search Console. Pozycje fraz też są w raporcie, ale obok tych liczb, a nie zamiast nich. Jeśli w danym miesiącu coś nie zadziałało, piszę o tym wprost i proponuję, co zmienić."),

        h2("Ile kosztuje SEO miesięcznie dla małej firmy"),
        li("Audyt SEO strony, wizytówki i konkurencji: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — poprawki techniczne, nowe podstrony usług, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony małej firmy — podstrony, poprawki, widoczność w AI i raporty: od 3500 zł miesięcznie, w bardzo konkurencyjnych branżach i miastach od 5500 zł miesięcznie."),
        p(
          "Ceny są jawne i opublikowane w ",
          link("cenniku", "/pl/cennik"),
          ", bez dzwonienia do handlowca. Wiele małych firm nie potrzebuje stałej współpracy: wystarczą audyt i jednorazowe poprawki. Moje ogólne podejście do stałej pracy opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ". Jeśli stronę trzeba zbudować od nowa, zajrzyjcie na stronę ",
          link("strona internetowa dla małej firmy", "/pl/strona-internetowa-dla-malej-firmy"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony małej firmy: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje SEO miesięcznie?", "Stałe pozycjonowanie strony małej firmy kosztuje od 3500 zł miesięcznie, w bardzo konkurencyjnych branżach od 5500 zł. Audyt to od 1000 zł jednorazowo, a pojedyncze prace od 1000 do 3000 zł. Po krótkim opisie firmy podaję stałą cenę."],
          ["Czy SEO ma jeszcze sens, skoro jest AI?", "Tak. ChatGPT i podsumowania AI w Google budują odpowiedzi z tego, co znajdą na stronach, w wizytówkach i opiniach. Firma niewidoczna w Google zwykle jest niewidoczna także w odpowiedziach AI."],
          ["Czy da się pozycjonować wizytówkę Google?", "Tak. Kategoria, usługi, godziny, zdjęcia, opinie i zgodność danych z katalogami wpływają na pozycję w Mapach. Odległość od szukającego jest stała, resztę można poprawić."],
          ["Jak samemu zrobić SEO?", "Zacznijcie od osobnej podstrony dla każdej usługi z miastem w tytule, cen i obszaru działania zapisanych tekstem, opinii w Google i Google Search Console. Technika i struktura strony to część, którą najczęściej warto zlecić."],
          ["Jak długo trwa pozycjonowanie strony małej firmy?", "Poprawki techniczne i zmiany w wizytówce potrafią zadziałać w kilka tygodni. Nowe podstrony usług zwykle potrzebują dwóch–czterech miesięcy, w dużych miastach i popularnych branżach dłużej."],
          ["Czy pozycjonujesz strony na WordPressie i kreatorach?", "Tak. WordPress daje pełną kontrolę. Na Wix i podobnych kreatorach większość pracy jest możliwa, ale część zmian technicznych ogranicza platforma; audyt pokaże, czy to ma znaczenie w Waszym przypadku."],
          ["Czy pracujesz z małymi firmami spoza Warszawy?", "Tak, z całej Polski. Pozycjonowanie robię zdalnie: strona, wizytówka i dane wyszukiwań dla Waszego miasta."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony małej firmy: co mi wysłać"),
        p(
          "Wyślijcie nazwę firmy, link do strony i do wizytówki w Mapach Google, usługi, przy których chcecie więcej klientów, miejscowości, w których działacie, i informację, czy macie teraz umowę z agencją. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
