// Landing page fixture: Pozycjonowanie strony kancelarii prawnej i adwokata (PL),
// group «seo-for-law-firms». REWRITE of the old-template page at the same URL
// (/pl/seo-dla-kancelarii-prawnych); none of the old text is reused.
// Market version for Polish kancelarie adwokackie i radcowskie across Poland,
// not a translation of seo-for-law-firms.en.
// Semantic core (ref/lawyers.md, BRIEF.md): «pozycjonowanie kancelarii
// prawnej», «pozycjonowanie strony adwokata», «SEO dla kancelarii»,
// «pozycjonowanie radcy prawnego» — volumes not measured, SERP entirely
// agencies (bbsoft, inclick, e-marketingprawniczy, seo-www, widoczni…) →
// buyers’ demand. «marketing kancelarii prawnej» 50 / «marketing dla kancelarii
// prawnej» 30 — a marketing-article SERP (0 shared URLs with pozycjonowanie),
// not targeted. PAA: Ile trwa pozycjonowanie strony internetowej? Czy można
// samemu pozycjonować stronę? Ile kosztuje dobre pozycjonowanie strony? Jak
// wypozycjonować stronę za darmo? (all in H2 or FAQ).
// Intent (ref/intent-check-lawyers.md): «pozycjonowanie kancelarii prawnej» and
// «pozycjonowanie strony adwokata» share 3 of 10 URLs (bbsoft, inclick,
// e-marketingprawniczy) → one page; «strona internetowa dla kancelarii» vs
// «strona internetowa adwokata» 0 shared → the build is a separate page.
// Key angle: ethics rules for adwokaci and radcowie prawni ban advertising but
// allow information — a factual site and SEO are the permitted channel. Stated
// generally, no article numbers, «not legal advice».
// NOT on this page: Warsaw (/pl/oferty/pozycjonowanie-strony-kancelarii-prawnej-warszawa,
// linked once; its H2/H3 are not repeated here); the website build, RODO on
// forms and language versions (/pl/strona-internetowa-dla-adwokata); wizytówka
// Google in depth (/pl/oferty/pozycjonowanie-lokalne); Google Ads and social
// media (not offered).
// Owner’s rules: PL form «pozycjonowanie strony X»; every SEO page covers AI
// search (GEO, AEO); never say there are no clients from the visitor’s segment.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForLawFirmsPl = {
  lang: "pl",
  group: "seo-for-law-firms",
  slug: "seo-dla-kancelarii-prawnych",
  title: "Pozycjonowanie strony kancelarii prawnej i adwokata",
  heading: "Pozycjonowanie strony kancelarii prawnej i adwokata",
  excerpt:
    "Zajmuję się pozycjonowaniem stron kancelarii adwokackich i radcowskich z całej Polski: podstrony spraw, wizytówka Google każdego biura, artykuły z autorem i widoczność w odpowiedziach AI — w granicach zasad etyki, które zabraniają reklamy, ale pozwalają informować.",
  seo: {
    metaTitle: "Pozycjonowanie kancelarii prawnej w Google i AI | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony kancelarii adwokackiej i radcy prawnego: podstrony spraw, wizytówka Google, artykuły z autorem, AI. Bez reklamy. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Informacja, nie reklama", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Adwokat rozwód Poznań", "Kancelaria w Mapach Google", "Zadzwoń", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO kancelarii prawnej: strona, wizytówki Google, konkurencja", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla kancelarii: podstrony spraw, wizytówki biur, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony kancelarii prawnej", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony kancelarii prawnej",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt strony i wizytówek kancelarii", text: "Lista poprawek ułożona według wpływu na zapytania" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego rodzaju sprawy", text: "Rozwód, spadek, obrona karna, obsługa firm — z miastem" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google dla każdego biura", text: "Kategorie, godziny, dane zgodne z rejestrem" },
        { _key: k("o"), iconName: "shield-check", title: "Treści w granicach zasad etyki", text: "Informacja o kancelarii, bez superlatywów i obietnic" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w telefonach i konsultacjach", text: "Bez żadnych danych o klientach i sprawach" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony kancelarii", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie kancelarii prawnej", value: "od 3500 zł / mies.", note: "podstrony, wizytówki, artykuły, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony firm usługowych, które budowałem i pozycjonowałem",
      subtitle:
        "Firma skanowania laserowego 3D i modelowania BIM, której ruch organiczny wzrósł 29 razy, wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów, firma remontowo-inwestycyjna, warsztat samochodowy i pracownia renowacji felg. W każdym projekcie chodziło o to samo, czego potrzebuje kancelaria: żeby osoba z konkretną potrzebą trafiła z Google na podstronę, która na nią odpowiada, i wysłała zapytanie.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony kancelarii prawnej",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie i w wizytówkach kancelarii, i za jaką stałą cenę.",
      contextLabel: "Nazwa kancelarii lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Kto prowadzi kancelarię?", options: ["Adwokat", "Radca prawny", "Spółka adwokatów i radców", "Kancelaria z kilkoma biurami"] },
        { _key: k("z"), question: "Skąd teraz przychodzą klienci?", options: ["Z poleceń", "Z Google i Map Google", "Z katalogów prawników", "Nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie stron kancelarii prawnych to moja usługa dla kancelarii adwokackich i radcowskich z całej Polski: audyt, podstrony spraw, wizytówka Google dla każdego biura, artykuły z autorem i widoczność w odpowiedziach AI. Robię to sam, więc osoba, która znajduje problem na stronie, jest tą samą, która go naprawia. Pracuję w ramach zasad etyki zawodowej: strona i jej miejsce w Google informują o kancelarii, a nie ją reklamują."),

        h2("Pozycjonowanie kancelarii prawnej: co obejmuje usługa"),
        p("Klient z problemem prawnym prawie zawsze zaczyna od wyszukiwarki, nawet jeśli nazwisko prawnika dostał od znajomego. O tym, czy trafi do Was, decydują cztery miejsca:"),
        li("zwykłe wyniki Google, w których strona kancelarii konkuruje z portalami prawnymi, forami i serwisami z poradami"),
        li("Mapy Google i wizytówka kancelarii przy wyszukiwaniach z nazwą miasta"),
        li("wyszukiwarki adwokatów i radców prawnych prowadzone przez samorządy oraz katalogi prawników"),
        li("odpowiedzi ChatGPT, Perplexity i podsumowania AI w Google"),
        p("Pozycjonowanie kancelarii prawnej łączy te miejsca w jedną listę zadań, ułożoną według tego, co przyniesie najwięcej zapytań w sprawach, które chcecie prowadzić. Nie sprzedaję osobnych pakietów „SEO techniczne”, „treści” i „linki”."),

        h2("SEO dla kancelarii a zakaz reklamy adwokatów i radców prawnych"),
        p("Zasady etyki adwokackiej i radcowskiej zabraniają reklamy, ale pozwalają informować o działalności kancelarii. Dla pozycjonowania to dobra wiadomość, bo wyszukiwarka nagradza właśnie informację: jakimi sprawami się zajmujecie, kto je prowadzi, gdzie i w jakich językach, jak wygląda pierwszy kontakt. Rzeczowa strona, która jest wysoko w Google, to kanał, który zasady dopuszczają."),
        h3("Co pomaga w pozycjonowaniu i mieści się w informacji o kancelarii"),
        li("opis specjalizacji i rodzajów spraw, z którymi przychodzą klienci"),
        li("imiona i nazwiska prawników, tytuł zawodowy, izba, języki"),
        li("adres, godziny i sposób umówienia spotkania, także konsultacji online"),
        li("artykuły objaśniające przepisy i procedury, podpisane przez autora"),
        h3("Czego nie robię przy pozycjonowaniu strony adwokata i radcy prawnego"),
        li("tytułów typu „najlepszy adwokat w mieście” i porównań z innymi kancelariami"),
        li("obietnic wygranej, gwarantowanych kwot czy terminów"),
        li("cen i rabatów podawanych jako zachęta do powierzenia sprawy"),
        li("słów kluczowych dopisanych do nazwy w wizytówce Google — to łamie zasady Google, a w zawodzie zaufania publicznego wygląda źle"),
        li("sponsorowanych artykułów chwalących kancelarię, kupowanych na portalach tylko dla linku"),
        p("To ogólny opis, nie porada prawna. Wiążące są aktualne uchwały Waszego samorządu, a ostatnie słowo co do każdego tekstu na stronie należy do Was."),

        h2("Pozycjonowanie strony adwokata: osobna podstrona dla każdego rodzaju sprawy"),
        p("Ludzie wpisują w Google swoją sytuację i miasto: „adwokat rozwód Poznań”, „podział majątku po rozwodzie”, „obrońca jazda po alkoholu Gdańsk”, „stwierdzenie nabycia spadku”, „upadłość konsumencka Wrocław”. Strona z jedną podstroną „Prawo rodzinne i karne” nie odpowiada na żadne z tych wyszukiwań. Dlatego pozycjonowanie strony adwokata zaczyna się od mapy spraw:"),
        li("podstrona dla każdego rodzaju sprawy, który chcecie prowadzić: jak wygląda postępowanie, co przynieść na pierwsze spotkanie, ile zwykle trwa, co robi adwokat na każdym etapie"),
        li("pytania, które klienci zadają przez telefon, z rzeczowymi odpowiedziami"),
        li("linki między podstronami spraw, sylwetkami prawników i kontaktem"),
        p("Zanim zaplanuję podstrony, sprawdzam dane wyszukiwań dla Waszych spraw i miast. W wielu sprawach liczby są małe, ale za każdym wyszukiwaniem stoi człowiek z konkretnym problemem, więc kilka trafnych podstron daje więcej niż jedna ogólna."),

        h2("Pozycjonowanie radcy prawnego obsługującego firmy"),
        p("Radcowie prawni często pracują dla przedsiębiorców, a wtedy wyszukiwania wyglądają inaczej. Właściciel firmy wpisuje „obsługa prawna firm Kraków”, „windykacja należności”, „umowa B2B z programistą”, „przekształcenie JDG w spółkę”, „prawo pracy dla pracodawcy”. Decyzja zapada wolniej, a klient porównuje kilka kancelarii, zanim napisze."),
        p("Pozycjonowanie radcy prawnego opiera się więc na podstronach usług dla firm, na opisie stałej obsługi — kto odpowiada na pytania, w jakim czasie, jak rozliczana jest praca — i na artykułach o zmianach przepisów, które dotyczą klientów kancelarii. Tak samo pracuję z kancelariami adwokackimi obsługującymi biznes. Klientów indywidualnych i firmowych prowadzę na stronie osobnymi ścieżkami, bo pytają o co innego."),

        h2("Wizytówka Google kancelarii i wyszukiwarki adwokatów oraz radców prawnych"),
        p("Przy wyszukiwaniach z nazwą miasta nad zwykłymi wynikami pojawia się blok map z trzema kancelariami. Wchodzi się do niego przez wizytówkę Google:"),
        li("osobna wizytówka dla każdego biura, w którym naprawdę przyjmujecie klientów, połączona z podstroną tego biura; biur wirtualnych i adresów do korespondencji nie zgłaszam, bo Google blokuje takie wizytówki"),
        li("kategoria główna zgodna z tym, czym zajmujecie się przede wszystkim, i kategorie dodatkowe dla pozostałych specjalizacji"),
        li("nazwa kancelarii taka jak w rzeczywistości, bez dopisków"),
        li("odpowiedzi na opinie, które nie zdradzają niczego o sprawie ani nawet tego, że autor jest klientem — tajemnica zawodowa obowiązuje także tutaj"),
        p(
          "Wyszukiwarka adwokatów na adwokatura.pl i wyszukiwarka radców prawnych prowadzona przez KIRP to rejestry, które klienci i asystenci AI traktują jako potwierdzenie prawa do wykonywania zawodu. Dbam o to, żeby nazwiska, adresy i telefony na stronie, w wizytówce i w katalogach prawników były takie same jak tam. Całą pracę nad Mapami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie kancelarii prawnej w Krakowie, Wrocławiu, Poznaniu, Gdańsku i mniejszych miastach"),
        p("Konkurencja zależy od miasta. W Krakowie, Wrocławiu, Poznaniu czy Trójmieście o frazy z nazwą miasta walczy wiele kancelarii i portali prawnych, więc praca idzie w podstrony konkretnych spraw, a nie w ogólne „kancelaria prawna Kraków”. W mniejszych miastach często wystarczą porządna wizytówka i kilka podstron, żeby kancelaria była pierwsza w swoich sprawach, także dla ludzi z okolicznych gmin, którzy szukają prawnika tam, gdzie toczy się ich sprawa."),
        p(
          "Kancelaria z biurami w kilku miastach dostaje podstronę i wizytówkę dla każdego z nich, z prawnikami, którzy tam przyjmują. Kancelarie ze stolicy, gdzie konkurencja i klienci wyglądają inaczej, znajdą osobny opis na stronie ",
          link("pozycjonowanie strony kancelarii prawnej w Warszawie", "/pl/oferty/pozycjonowanie-strony-kancelarii-prawnej-warszawa"),
          ".",
        ),

        h2("Artykuły prawne na stronie kancelarii: autor, data aktualizacji i stan prawny"),
        p("Google ocenia treści prawne surowiej niż większość innych, bo błędna informacja może komuś zaszkodzić. Artykuł, który ma szansę na wysoką pozycję, ma:"),
        li("autora z imieniem, nazwiskiem, tytułem zawodowym i linkiem do jego sylwetki"),
        li("datę publikacji i aktualizacji oraz stan prawny, według którego jest napisany"),
        li("odpowiedź na jedno konkretne pytanie, na przykład „ile trwa sprawa o alimenty” albo „czy można odrzucić spadek po terminie”"),
        li("zastrzeżenie, że tekst nie jest poradą w indywidualnej sprawie"),
        p("Teksty mogę przygotować na podstawie notatek albo nagrania prawnika, ale treść merytoryczną sprawdza i podpisuje autor z kancelarii. Jeden rzetelny artykuł miesięcznie daje więcej niż dziesięć ogólnych."),

        h2("Pozycjonowanie kancelarii w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Ludzie pytają ChatGPT, Perplexity i podsumowania AI w Google, jak wygląda sprawa o podział majątku, ile kosztuje obrońca w sprawie karnej albo jakiego prawnika od spadków wybrać w Lublinie. Asystent buduje odpowiedź z tego, co może przeczytać, a przy tematach prawnych wybiera źródła, którym ufa. Pracę nad tym, żeby kancelaria pojawiała się w takich odpowiedziach, nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization):"),
        li("specjalizacje, miasta, języki i nazwiska prawników zapisane prostymi zdaniami, które da się zacytować"),
        li("dane strukturalne kancelarii, biur i prawników zgodne z wizytówką i rejestrem"),
        li("artykuły z autorem i datą, z których każdy odpowiada na jedno pytanie"),
        li("te same dane kancelarii na stronie, w wizytówce i w katalogach prawników"),
        p(
          "Przed pracą i po niej sprawdzam, co asystenci mówią o Waszej kancelarii i kogo polecają w Waszych sprawach. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Czy można samemu pozycjonować stronę kancelarii i jak zrobić to za darmo"),
        p("Tak, a część pracy daje dużo bez żadnych kosztów:"),
        li("uporządkować wizytówkę Google każdego biura i odpowiadać na opinie bez szczegółów spraw"),
        li("dać każdej specjalizacji własną podstronę z miastem w tytule, np. „Sprawy spadkowe — kancelaria adwokacka, Lublin”"),
        li("podłączyć Google Search Console i sprawdzić, jakie frazy już przyprowadzają ludzi"),
        li("sprawdzić, czy dane w wyszukiwarce adwokatów lub radców zgadzają się ze stroną"),
        p(
          "Zlecić warto technikę, przeniesienie strony, strukturę podstron w kancelarii z kilkoma biurami i pracę w miastach, w których konkurenci mają mocne strony od lat. Jeśli chcecie tylko wiedzieć, co poprawić samodzielnie, wystarczy ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Ile trwa pozycjonowanie strony kancelarii prawnej i jak mierzę wyniki"),
        p("Poprawki techniczne, tytuły i wizytówka potrafią dać efekt w kilka tygodni. Nowa podstrona sprawy zwykle potrzebuje dwóch–czterech miesięcy, a w dużych miastach i w popularnych sprawach, takich jak rozwody, dłużej. Artykuły zaczynają przyprowadzać ludzi po kilku miesiącach i pracują potem latami."),
        p("W raporcie liczę telefony, wiadomości z formularza i umówione konsultacje z wyszukiwarki, mierzone w GA4 i Google Search Console. Pozycje fraz są obok tych liczb, a nie zamiast nich. Do pomiaru nie potrzebuję żadnych danych o klientach ani o sprawach."),

        h2("Ile kosztuje dobre pozycjonowanie strony kancelarii prawnej"),
        li("Audyt SEO strony, wizytówek i konkurencji w Waszym mieście: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrony spraw, wizytówki biur, dane strukturalne, poprawki techniczne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony kancelarii — podstrony, artykuły, wizytówki, widoczność w AI i raporty: od 3500 zł miesięcznie, w dużych miastach i przy bardzo konkurencyjnych sprawach od 5500 zł miesięcznie."),
        p(
          "Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Ogólnie o pozycjonowaniu małych firm usługowych piszę na stronie ",
          link("pozycjonowanie strony małej firmy", "/pl/pozycjonowanie-strony-malej-firmy"),
          ". Jeśli stronę kancelarii trzeba najpierw przebudować, zajrzyjcie na stronę ",
          link("strona internetowa dla kancelarii adwokackiej", "/pl/strona-internetowa-dla-adwokata"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony kancelarii prawnej: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje dobre pozycjonowanie strony kancelarii?", "Stałe pozycjonowanie kosztuje od 3500 zł miesięcznie, w dużych miastach i przy bardzo konkurencyjnych sprawach od 5500 zł. Audyt to od 1000 zł jednorazowo, a pojedyncze prace od 1000 do 3000 zł. Po krótkim opisie kancelarii podaję stałą cenę."],
          ["Ile trwa pozycjonowanie strony internetowej kancelarii?", "Zmiany w wizytówce i poprawki techniczne potrafią zadziałać w kilka tygodni. Nowe podstrony spraw zwykle potrzebują dwóch–czterech miesięcy, w dużych miastach dłużej. Artykuły zaczynają przyprowadzać ludzi po kilku miesiącach."],
          ["Czy pozycjonowanie strony adwokata nie narusza zakazu reklamy?", "Zasady etyki zabraniają reklamy, ale pozwalają informować o kancelarii, a pozycjonowanie opiera się na informacji: specjalizacje, prawnicy, biura, artykuły. Nie używam superlatywów, obietnic wyniku ani cen jako zachęty. To ogólny opis, nie porada prawna — wiążące są uchwały Waszego samorządu."],
          ["Czy można samemu pozycjonować stronę kancelarii?", "Tak. Wizytówka Google każdego biura, osobna podstrona dla każdej specjalizacji z miastem w tytule, Google Search Console i dane zgodne z wyszukiwarką adwokatów lub radców to bezpłatny początek. Technikę i strukturę strony najczęściej warto zlecić."],
          ["Czy kancelaria może mieć opinie klientów w Google?", "Opinie, które klienci wystawiają sami, są częścią wizytówki i pomagają w Mapach. Odpowiedź nie może ujawniać niczego o sprawie. Aktywne zabieganie o opinie i przenoszenie wybranych na stronę wymaga ostrożności, więc sprawdźcie stanowisko swojej izby."],
          ["Czy ChatGPT poleca adwokatów i kancelarie?", "Tak, gdy ktoś o to zapyta. Asystent wybiera kancelarie, o których znajduje sprawdzalne fakty: specjalizacje, miasto, nazwiska prawników, artykuły z autorem i dane zgodne z rejestrem. Tę samą pracę wykonuję w ramach pozycjonowania."],
          ["Czy pracujesz z kancelariami spoza Warszawy?", "Tak, z całej Polski: z Krakowa, Wrocławia, Poznania, Trójmiasta i mniejszych miast. Pozycjonowanie robię zdalnie, z danymi wyszukiwań dla Waszego miasta i Waszych spraw."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony kancelarii prawnej: co mi wysłać"),
        p(
          "Wyślijcie nazwę kancelarii, link do strony i do wizytówek w Mapach Google, sprawy, w których chcecie mieć więcej klientów, i miasta, w których macie biura. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
