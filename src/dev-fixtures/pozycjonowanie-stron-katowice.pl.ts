// Landing page fixture: Pozycjonowanie stron w Katowicach (PL), group
// «pozycjonowanie-stron-katowice». City page, stage 3 pilot.
// Phrases (ref/city-keywords.md, ref/pl-cities.md; volumes/month, Poland):
// pozycjonowanie stron katowice 880 · pozycjonowanie stron internetowych
// katowice 140 · katowice pozycjonowanie stron 50 · pozycjonowanie stron
// katowice cennik 20. Brief adds «agencja SEO Katowice», «audyt SEO Katowice»,
// «pozycjonowanie lokalne / wizytówka Google w Katowicach». «agencja reklamowa
// katowice» 390 and «agencja marketingowa katowice» 320 are ad/marketing
// agencies (campaigns, print, social) — not the owner’s service, not targeted.
// PAA (pl-cities.md): Ile kosztuje pozycjonowanie strony w 2026? Ile kosztuje
// dobre pozycjonowanie? Jak długo trwa? Czy ma sens? Kto zajmuje się
// pozycjonowaniem stron? Jak samemu pozycjonować stronę? — all in H2 or FAQ.
// Intent (ref/intent-check-pl-cities.md): «pozycjonowanie stron katowice» vs
// «audyt seo katowice» share 2 of 10 URLs (smartwww, piotrskrzypek — an
// individual specialist with a city page) → one page, audit as H2. Katowice vs
// Gliwice: 0 shared URLs → this page is about Katowice; Gliwice, Sosnowiec,
// Chorzów, Tychy appear only as the area served. SEO vs website build: 0
// shared URLs → separate page.
// City angle: centre of the Górnośląsko-Zagłębiowska Metropolia; post-industrial
// city turned services, business centres, universities and events (Spodek,
// MCK); districts in queries (Ligota, Szopienice, Brynów, Koszutka, Załęże,
// Giszowiec); Ukrainian- and English-language searches. Price: big city with
// strong competition → od 5500 zł mentioned.
// NOT on this page: the website build (/pl/tworzenie-stron-internetowych-katowice);
// wizytówka Google in depth (/pl/oferty/pozycjonowanie-lokalne); industry detail
// (/pl/pozycjonowanie-strony-firmy-produkcyjnej,
// /pl/pozycjonowanie-strony-firmy-budowlanej); Gliwice and other GZM cities
// as separate targets; Google Ads, social media and e-commerce (not offered).
// Owner’s rules: remote from Warsaw, no visits promised; never say there are no
// clients from the visitor’s city or industry.
import { p, h2, h3, li, link, k } from "./pt";

export const pozycjonowanieStronKatowicePl = {
  lang: "pl",
  group: "pozycjonowanie-stron-katowice",
  slug: "pozycjonowanie-stron-katowice",
  title: "Pozycjonowanie stron w Katowicach",
  heading: "Pozycjonowanie stron w Katowicach",
  excerpt:
    "Pozycjonowanie stron w Katowicach prowadzę zdalnie dla firm z Katowic i całej metropolii: audyt, poprawki w kodzie, podstrony usług, wizytówka Google i widoczność w odpowiedziach AI. Całą pracę wykonuje jeden specjalista SEO, a ceny są opublikowane.",
  seo: {
    metaTitle: "Pozycjonowanie stron Katowice: audyt od 1000 zł | Bandziuk",
    metaDescription:
      "Pozycjonowanie stron w Katowicach i metropolii: audyt SEO, podstrony usług, wizytówka Google, AI. Jeden specjalista, jawne ceny. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Jeden specjalista od audytu do wdrożenia", "Audyt od 1000 zł", "Katowice i cała metropolia"],
  heroPhonePoints: ["Fizjoterapeuta Katowice Ligota", "Wasza firma w Mapach Google", "Zadzwoń", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy z Katowic: strona, wizytówka Google, konkurencja w metropolii", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: poprawki techniczne, podstrony usług i miast, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie stron w Katowicach", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie stron w Katowicach",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt SEO z planem na pierwsze miesiące", text: "Co blokuje stronę i które frazy z Katowic da się podnieść najszybciej" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług dla Katowic i metropolii", text: "Tylko tam, gdzie macie klientów i coś konkretnego do napisania" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google w mieście z wieloma centrami", text: "Kategorie, usługi i opinie, które Google łączy z Waszą branżą" },
        { _key: k("o"), iconName: "gauge", title: "Poprawki w kodzie robione przez tę samą osobę", text: "WordPress, Next.js i inne systemy, bez przekazywania zadań" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i podsumowaniach AI", text: "Fakty o firmie, które asystent może sprawdzić i zacytować" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w zapytaniach, nie tylko w pozycjach", text: "Telefony i formularze z Google, GA4 i Search Console" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony firmy z Katowic", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie stron w Katowicach", value: "od 3500 zł / mies.", note: "przy silnej konkurencji od 5500 zł", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony firm, które budowałem i pozycjonowałem",
      subtitle:
        "Firma skanowania laserowego 3D i modelowania BIM, której ruch organiczny po przebudowie strony wzrósł 29 razy, oraz cztery lokalne firmy z Warszawy: warsztat samochodowy, pracownia renowacji felg, przechowalnia opon i firma remontowo-inwestycyjna. Z firmami z Katowic łączy je dużo: działają w dużej aglomeracji, gdzie klient wybiera spośród wielu wykonawców z sąsiednich dzielnic i miast, a o telefonie decyduje podstrona usługi i wizytówka w Mapach.",
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
      title: "Wycena pozycjonowania strony w Katowicach",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie i w wizytówce Google, w których miastach metropolii warto walczyć o klientów i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Gdzie są Wasi klienci?", options: ["Głównie w Katowicach", "W kilku miastach metropolii", "W całym województwie śląskim", "W całej Polsce lub za granicą"] },
        { _key: k("z"), question: "Kto teraz zajmuje się Waszą stroną?", options: ["Agencja z umową", "Freelancer od czasu do czasu", "Robimy to sami", "Nikt"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie stron w Katowicach prowadzę dla firm, które chcą, żeby klienci z Katowic i sąsiednich miast metropolii trafiali na ich stronę z Google, z Map Google i z odpowiedzi asystentów AI. Nie jestem agencją, tylko jednym specjalistą SEO: audyt, poprawki w kodzie, nowe podstrony, wizytówkę i raport wykonuję sam. Pracuję z Warszawy, z firmami z Katowic współpracuję online, a ceny są opublikowane."),

        h2("Pozycjonowanie stron w Katowicach: jakie firmy walczą o klientów w Google"),
        p("Katowice są sercem Górnośląsko-Zagłębiowskiej Metropolii, czyli kilkunastu miast, które dla mieszkańców tworzą jeden rynek pracy, zakupów i usług. Przez dziesięciolecia o mieście mówiło się w kontekście kopalń i hut. Dziś w centrum stoją biurowce firm usługowych, działają duże uczelnie, a Spodek i Międzynarodowe Centrum Kongresowe ściągają kongresy, targi i koncerty. To przekłada się na to, kto w Katowicach potrzebuje widoczności w wyszukiwarce:"),
        li("firmy obsługujące biznes: biura rachunkowe, kancelarie, firmy szkoleniowe, agencje pracy i serwisy IT dla biur w centrum"),
        li("branża wydarzeń: catering, wynajem sal, technika sceniczna, hotele i restauracje, które żyją z konferencji i koncertów"),
        li("firmy budowlane, remontowe i instalacyjne, które pracują w całym regionie, od nowych osiedli po modernizację starych kamienic i familoków"),
        li("zakłady produkcyjne i dostawcy dla przemysłu, którzy szukają odbiorców poza Śląskiem"),
        li("gabinety, warsztaty, szkoły językowe i usługi dla mieszkańców kilku sąsiadujących miast"),
        p("Każda z tych grup ma inny rytm zapytań. Firma eventowa ma najwięcej pracy przed sezonem konferencyjnym, ekipa remontowa wiosną, a dostawca dla przemysłu dostaje kilka zapytań w miesiącu, ale o dużej wartości. Plan pozycjonowania układam pod ten rytm, a nie pod najpopularniejsze frazy z nazwą miasta."),

        h2("Jak szukają klienci w Katowicach: dzielnice, Gliwice, Sosnowiec i inne miasta metropolii"),
        p("Mieszkańcy Katowic rzadko wpisują w Google samo „Katowice”. Szukają dzielnicy, w której mieszkają albo pracują: „fizjoterapeuta Ligota”, „mechanik Szopienice”, „przedszkole Brynów”, „pizza Koszutka”. Inni mieszkają w Chorzowie, Mysłowicach czy Siemianowicach, a pracują w centrum, więc wpisują raz jedno, raz drugie miasto. Dla Google „pozycjonowanie stron Katowice” i „pozycjonowanie stron Gliwice” to dwa osobne zestawy wyników; tak samo rozdzielone są Sosnowiec, Chorzów i Tychy."),
        p("Dla firmy, która obsługuje kilka miast, oznacza to konkretne decyzje zamiast jednego zdania „działamy na całym Śląsku”:"),
        li("główna podstrona usługi celuje w Katowice, bo tu jest najwięcej wyszukiwań"),
        li("podstrona innego miasta powstaje tylko wtedy, gdy macie tam klientów i możecie napisać coś konkretnego: czas dojazdu, realizacje, warunki"),
        li("wizytówka Google pokazuje prawdziwy adres i obszar działania, a nie adres wirtualnego biura"),
        p("W regionie sporo osób szuka też w innych językach. Po ukraińsku szukają pracownicy i ich rodziny, po angielsku uczestnicy wydarzeń oraz osoby zatrudnione w międzynarodowych firmach w centrum. Jeśli obsługujecie te grupy, podstrona w ich języku często ma dużo słabszą konkurencję niż wersja polska."),

        h2("Kto jest wysoko na „pozycjonowanie stron Katowice”: studia, agencje i Oferteo"),
        p("Wyniki dla frazy „pozycjonowanie stron Katowice” to mieszanka: lokalne studia i agencje ze Śląska, ogólnopolskie agencje z osobną podstroną dla Katowic, pojedynczy specjaliści SEO z własnymi stronami miast i portal Oferteo, który zbiera zapytania i przekazuje je wykonawcom. Dla „audyt SEO Katowice” pierwsza dziesiątka wygląda już trochę inaczej, a dla tych samych usług w Gliwicach zupełnie inaczej."),
        p("Ta sama rozdrobniona konkurencja dotyczy zwykle także Waszej branży. W Katowicach o klienta z wyszukiwarki rywalizuje kilka lokalnych firm i kilka portali, a nie jeden gracz, który zajął wszystko. Dobra podstrona usługi i zadbana wizytówka mają więc realną szansę, jeśli dają więcej niż to, co już jest w wynikach. Zanim zaplanuję pracę, sprawdzam, kto i z jaką treścią zajmuje pierwszą dziesiątkę dla Waszych fraz."),

        h2("Agencja SEO w Katowicach czy jeden specjalista: kto zajmuje się pozycjonowaniem stron"),
        p("Pozycjonowaniem stron zajmują się agencje SEO, studia, które robią też strony, oraz specjaliści pracujący na własny rachunek. Agencja ma handlowca, opiekuna klienta i zespół, co jest wygodne, gdy chcecie kupić w jednym miejscu SEO, kampanie i media społecznościowe. Część budżetu idzie wtedy na strukturę, a z osobą, która zmienia Waszą stronę, zwykle nie rozmawiacie."),
        p("Ja pracuję sam, od ponad 15 lat w marketingu internetowym. Ta sama osoba robi audyt, zmienia kod w WordPressie albo Next.js, pisze podstrony i objaśnia raport. Nie prowadzę Google Ads ani mediów społecznościowych; zajmuję się widocznością w wyszukiwarce i w odpowiedziach AI."),
        h3("Współpraca zdalna z Warszawy z firmą z Katowic"),
        p("Zaczynamy od rozmowy wideo, potem pracujemy we wspólnym dokumencie z listą zadań, a ja dostaję dostęp do Google Search Console, analityki i panelu strony. Spotkanie w Waszym biurze nie jest potrzebne — wystarczą dane ze strony i Wasza wiedza o usługach."),

        h2("Audyt SEO w Katowicach: od czego zaczyna się pozycjonowanie strony"),
        p("Każda współpraca zaczyna się od audytu strony, wizytówki i wyników w Waszej okolicy. U firm z Katowic sprawdzam przede wszystkim:"),
        li("czy każda usługa, którą chcecie sprzedawać, ma własną podstronę z miastem w tytule"),
        li("które frazy w Google Search Console są już na drugiej stronie wyników i dadzą się podnieść najszybciej"),
        li("błędy indeksowania, zdublowane treści po dawnych przebudowach i szybkość ładowania na telefonie"),
        li("jak strona wypada na tle firm z pierwszej dziesiątki w Katowicach i w miastach, z których przychodzą klienci"),
        p(
          "Wynikiem jest lista zmian ułożona według spodziewanych zapytań. Możecie ją wdrożyć własnymi siłami albo powierzyć wdrożenie mnie. Zakres opisuję na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Pozycjonowanie lokalne w Katowicach: wizytówka Google w mieście z wieloma centrami"),
        p("W metropolii odległość od szukającego działa inaczej niż w mieście z jednym rynkiem. Klient z Załęża widzi w Mapach Google inne firmy niż klient z Giszowca, a ktoś jadący Drogową Trasą Średnicową może dostać wyniki z Chorzowa. Lokalizacji wizytówki nie da się przesunąć, ale można sprawić, że Google dobrze rozumie, czym się zajmujecie:"),
        li("kategoria główna odpowiada usłudze, która daje najwięcej przychodu, a dodatkowe pozostałym"),
        li("usługi w wizytówce nazywają się tak samo jak podstrony na stronie"),
        li("opinie mówią, co i gdzie zostało zrobione, bo tak piszą klienci poproszeni o kilka zdań"),
        li("nazwa, adres i telefon są identyczne w wizytówce, na stronie i w katalogach firm"),
        p(
          "Całą pracę nad Mapami Google opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie stron internetowych w Katowicach dla produkcji, budownictwa i branży wydarzeń"),
        p("Pozycjonowanie stron internetowych w Katowicach wygląda inaczej w zależności od tego, komu sprzedajecie. Zakład produkcyjny albo dostawca dla przemysłu nie potrzebuje tysięcy wejść, tylko kilku zapytań od właściwych działów zakupów; liczą się podstrony opisujące technologie, materiały i normy, często także po angielsku i niemiecku. Firma budowlana żyje z wyszukiwań lokalnych i zdjęć realizacji z konkretnych osiedli. Firma eventowa potrzebuje podstron dla rodzajów wydarzeń i odpowiedzi na pytania organizatorów, którzy porównują kilka ofert jednego dnia."),
        p(
          "Szczegóły dla tych branż są na stronach ",
          link("pozycjonowanie strony firmy produkcyjnej", "/pl/pozycjonowanie-strony-firmy-produkcyjnej"),
          " i ",
          link("pozycjonowanie strony firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej"),
          ". Jeśli obecna strona jest zbyt przestarzała, żeby ją pozycjonować, zacznijcie od strony ",
          link("tworzenie stron internetowych w Katowicach", "/pl/tworzenie-stron-internetowych-katowice"),
          ".",
        ),

        h2("Pozycjonowanie stron w Katowicach w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz więcej osób zamiast przeglądać wyniki pyta ChatGPT albo czyta podsumowanie AI nad wynikami Google: „kto montuje klimatyzację w Katowicach i okolicach”, „sala na konferencję dla 80 osób w Katowicach”. Asystent wskazuje te firmy, o których w sieci leżą konkretne, zgodne ze sobą informacje. Tę pracę nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization) i w moim pozycjonowaniu jest jej stałą częścią:"),
        li("usługi, obszar działania w metropolii, widełki cen i godziny zapisane zwykłymi zdaniami"),
        li("dane strukturalne opisujące firmę dokładnie tak, jak robi to jej wizytówka w Mapach"),
        li("odpowiedzi na pytania, które klienci zadają, zanim zamówią usługę"),
        p(
          "Na starcie i w ramach stałej współpracy sprawdzam, co asystenci mówią o Waszej firmie. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak samemu pozycjonować stronę firmy z Katowic"),
        p("Sporo pracy właściciel firmy wykona sam i bez kosztów:"),
        li("nadać każdej podstronie tytuł z usługą i miastem, np. „Wymiana instalacji elektrycznej — Katowice i okolice”"),
        li("uzupełnić wizytówkę Google o kategorię, usługi, zdjęcia i godziny, a potem regularnie prosić klientów o opinie"),
        li("wypisać na stronie miasta i dzielnice, w których naprawdę pracujecie, zamiast ogólnego „cały Śląsk”"),
        li("podłączyć Google Search Console i raz w miesiącu sprawdzać, które frazy rosną"),
        p("Zlecić warto zmianę struktury strony, przeniesienie na nowy system i pracę w branżach, w których w Katowicach od lat wysoko są mocne strony konkurentów."),

        h2("Jak długo trwa pozycjonowanie stron w Katowicach i czy ma sens"),
        p("Poprawki techniczne i porządek w wizytówce potrafią dać efekt po kilku tygodniach. Nowa podstrona usługi zwykle potrzebuje od dwóch do czterech miesięcy, a w Katowicach, gdzie o frazy z nazwą miasta walczą firmy z całej metropolii, w popularnych branżach trwa to dłużej. Dlatego pierwsze miesiące idą na zmiany, które działają najszybciej, a nowe treści powstają równolegle."),
        p("Czy pozycjonowanie stron ma sens? Ma, gdy klienci szukają Waszej usługi w Google, a firma może przyjąć więcej zleceń. Nie ma, gdy nikt nie wpisuje Waszej usługi w wyszukiwarkę. W raporcie pokazuję telefony i wiadomości z formularza, a pozycje fraz tylko obok nich."),

        h2("Pozycjonowanie stron Katowice: cennik na 2026 rok"),
        li("Audyt SEO strony, wizytówki i konkurencji w Katowicach: od 1000 zł jednorazowo."),
        li("Jednorazowe prace — poprawki techniczne, nowe podstrony, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie: od 3500 zł miesięcznie, a w branżach z silną konkurencją w Katowicach od 5500 zł miesięcznie."),
        p(
          "Wszystkie widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Po krótkim opisie firmy podaję stałą cenę i listę zadań na pierwsze trzy miesiące.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie stron w Katowicach: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony w Katowicach w 2026?", "Za audyt zapłacicie od 1000 zł, za pojedyncze prace od 1000 do 3000 zł, za stałą współpracę od 3500 zł miesięcznie. W branżach, w których w Katowicach konkurencja jest silna, stała praca zaczyna się od 5500 zł miesięcznie. Pełne widełki są w cenniku."],
          ["Jak długo trwa pozycjonowanie strony firmy z Katowic?", "Zmiany techniczne i wizytówka działają po kilku tygodniach. Nowe podstrony usług potrzebują zwykle dwóch–czterech miesięcy, a w popularnych branżach w Katowicach dłużej, bo o te same frazy walczą firmy z całej metropolii."],
          ["Czy pozycjonowanie stron ma sens dla małej firmy z metropolii?", "Tak, jeśli klienci szukają Waszej usługi w Google i możecie przyjąć więcej zleceń. Dla małej firmy często wystarczą audyt, kilka podstron i porządna wizytówka, bez stałej umowy."],
          ["Jak samemu pozycjonować stronę?", "Zacznijcie od osobnej podstrony dla każdej usługi z miastem w tytule, uzupełnionej wizytówki Google, opinii klientów i Google Search Console. Zmiany techniczne i strukturę strony warto zlecić."],
          ["Agencja SEO w Katowicach czy specjalista — kogo wybrać?", "Agencja ma sens, gdy razem z SEO chcecie kupić kampanie i media społecznościowe. Specjalista, który sam robi audyt i wdrożenie, sprawdza się, gdy chodzi tylko o widoczność w Google i AI, a budżet ma iść na pracę, nie na opiekuna klienta."],
          ["Czy pozycjonujesz wizytówkę w Mapach Google w Katowicach?", "Tak. Porządkuję kategorie, usługi, zdjęcia i dane firmy, łączę wizytówkę z właściwą podstroną i pomagam zbierać opinie. To często najszybsze źródło telefonów od klientów z Waszej dzielnicy."],
          ["Czy da się współpracować, skoro pracujesz z Warszawy?", "Tak. Z firmami z Katowic pracuję online: rozmowa wideo, wspólny dokument z zadaniami i dostęp do danych strony. Do pozycjonowania nie są potrzebne spotkania na miejscu."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony w Katowicach: co mi wysłać"),
        p(
          "Wyślijcie link do strony i do wizytówki w Mapach Google, usługi, przy których chcecie więcej zapytań, miasta metropolii, w których pracujecie, i informację, kto dziś zajmuje się stroną. W odpowiedzi dostaniecie pierwsze trzy zadania i cenę miesięczną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
