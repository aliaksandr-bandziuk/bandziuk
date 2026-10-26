// Landing page fixture: Pozycjonowanie kwiaciarni (PL), group «florist-seo».
// New page. Market version for Polish kwiaciarnie — owner-run shops with one
// or two delivery cars, selling in the shop, by phone, on Instagram and
// Allegro — not a translation of florist-seo.en.
// Semantic core: ref/creative-leisure.md has no measured PL phrases for
// florists; H1 and headings carry the slug phrase «pozycjonowanie kwiaciarni»
// and the owner’s preferred form «pozycjonowanie strony kwiaciarni» (H2s),
// plus the words customers type: dostawa kwiatów, kwiaty z dostawą, poczta
// kwiatowa, kwiaciarnia blisko mnie, bukiet ślubny. No PL PAA.
// Intent: ref/intent-check-creative-leisure.md — EN «florist seo» vs «florist
// website design» 0 of 10 shared URLs → SEO and website are separate pages;
// /pl/strona-internetowa-dla-kwiaciarni is the sibling.
// Angles: search groups, dostawa pages by dzielnica and nearby gminy, the dense
// Polish calendar (Dzień Babci i Dziadka, Walentynki, Dzień Kobiet, Dzień
// Matki, zakończenie roku, Dzień Nauczyciela, imieniny), śluby and komunie,
// kwiaty dla firm with faktura VAT, wizytówka Google, Allegro and flower
// networks (Fleurop, Poczta Kwiatowa) vs own site, seasonal calendar, AI
// answers, report in orders, cost.
// NOT on this page: sklep internetowy, zdjęcia produktów, koszyk, BLIK,
// subskrypcje, formularz ślubny (/pl/strona-internetowa-dla-kwiaciarni —
// sibling); wizytówka in depth (/pl/oferty/pozycjonowanie-lokalne); ads.
// The excluded occasion type (owner’s rule) and the 1 November season are
// not mentioned. The brief names no neighbour page for florists.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed positions.
import { p, h2, li, link, k } from "./pt";

export const floristSeoPl = {
  lang: "pl",
  group: "florist-seo",
  slug: "pozycjonowanie-strony-kwiaciarni",
  title: "Pozycjonowanie strony kwiaciarni",
  heading: "Pozycjonowanie strony kwiaciarni",
  excerpt:
    "Zajmuję się pozycjonowaniem strony kwiaciarni: podstrony dostawy kwiatów dla dzielnic i okolicznych miejscowości, strony okazji od Dnia Kobiet po Dzień Nauczyciela, florystyka ślubna i komunijna, wizytówka Google i obecność w odpowiedziach AI — tak, żeby zamówienia trafiały prosto do Twojej kwiaciarni, a nie przez sieć pośredników.",
  seo: {
    metaTitle: "SEO kwiaciarni: dostawa kwiatów i Mapy Google | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony kwiaciarni: podstrony dostawy kwiatów w dzielnicach, Dzień Kobiet i Dzień Matki, wizytówka Google, Allegro i odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Dostawa, okazje, śluby", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Dostawa kwiatów dzisiaj", "Bukiet na Dzień Matki", "Florystyka ślubna", "Zadzwoń · zamów online"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO kwiaciarni: strona, wizytówka Google, konkurencja w Twojej okolicy", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla kwiaciarni: podstrony dostaw, okazji i realizacji ślubnych, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony kwiaciarni", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony kwiaciarni",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy, którymi szuka się kwiatów", text: "Dostawa, okazje, śluby — z nazwą dzielnicy" },
        { _key: k("o"), iconName: "map-pin", title: "Podstrony dostawy kwiatów", text: "Tylko tam, dokąd naprawdę jeździ Twój kierowca" },
        { _key: k("o"), iconName: "layers", title: "Strony okazji przez cały rok", text: "Walentynki, Dzień Kobiet, Dzień Matki, imieniny" },
        { _key: k("o"), iconName: "file-text", title: "Śluby, komunie i kwiaty dla firm", text: "Realizacje, sale, widełki cen, stałe dostawy" },
        { _key: k("o"), iconName: "sparkles", title: "Kwiaciarnia polecana przez asystentów AI", text: "Dostawa, godziny i ceny opisane tak, by AI je cytowało" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w zamówieniach i telefonach", text: "Obok tego, co dają Allegro i sieci kwiatowe" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO kwiaciarni", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony kwiaciarni", value: "od 3500 zł / mies.", note: "dostawy, okazje, Mapy, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony, które pozycjonowałem w Google i w AI",
      subtitle:
        "Łączy je z kwiaciarnią to, że wyszukiwanie ma się zamienić w telefony i zamówienia. Warszawskiemu warsztatowi samochodowemu robiłem lokalne SEO, wizytówkę w Mapach Google i podstrony usług — klienci szukają go tak samo jak kwiaciarni: „blisko mnie” i z nazwą dzielnicy. Strona psychoterapeuty z Mediolanu ma podstrony lokalizacji działające jak podstrony dostawy, a jej nowe teksty pojawiają się już w odpowiedziach ChatGPT. ScanM2, firma skanowania laserowego 3D, po przebudowie strony na WordPressie ma 29 razy większy ruch z Google i zapytania co tydzień. Cyprus VIP Estates ma katalog z filtrami, którego SEO prowadzę co miesiąc — katalog ofert pozycjonuje się podobnie jak katalog bukietów. Moja własna strona ma pełną warstwę techniczną: schema.org, mapę strony i hreflang, których potrzebuje też sklep kwiaciarni.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "psychotherapist-website-milan",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "develop-and-optimize-a-personal-website-with-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony kwiaciarni",
      subtitle: "W ciągu jednego dnia roboczego dostajesz listę pierwszych poprawek na stronie i w Mapach Google oraz stałą cenę.",
      contextLabel: "Nazwa kwiaciarni lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakich zamówień chcesz więcej?", options: ["Dostaw kwiatów w mojej okolicy", "Florystyki ślubnej i komunijnej", "Stałych dostaw dla firm", "Zamówień na święta i okazje"] },
        { _key: k("z"), question: "Skąd dziś przychodzą zamówienia?", options: ["Z Map Google i z ulicy", "Z Allegro", "Z sieci kwiatowej", "Z Instagrama i telefonów"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony kwiaciarni to praca nad tym, żeby osoba, która wieczorem przypomina sobie o imieninach mamy, wpisała „dostawa kwiatów Gdańsk Oliwa” i trafiła do Twojej kwiaciarni, a nie do ogólnopolskiego serwisu, który przekaże zamówienie dalej. Pracuję bez pośredników i opiekunów klienta: sam robię audyt, piszę teksty podstron, wprowadzam zmiany w kodzie i pokazuję wynik w liczbie zamówień."),

        h2("Pozycjonowanie strony kwiaciarni: jak klienci szukają kwiatów z dostawą"),
        p("Frazy, które przynoszą kwiaciarni zamówienia, dzielą się na cztery grupy:"),
        li("dostawa — „dostawa kwiatów Kraków dzisiaj”, „kwiaty z dostawą do szpitala”, „poczta kwiatowa Poznań”"),
        li("okazja — „kwiaty na urodziny z dostawą”, „bukiet na Dzień Matki”, „kwiaty dla nauczyciela na zakończenie roku”"),
        li("sama kwiaciarnia — „kwiaciarnia blisko mnie”, „kwiaciarnia czynna w niedzielę”, „kwiaciarnia Mokotów”"),
        li("śluby i uroczystości — „bukiet ślubny cena”, „dekoracja kościoła na komunię”, „florystka ślubna Wrocław”"),
        p("Wiele osób wpisuje „poczta kwiatowa” jako ogólną nazwę dostawy kwiatów, a nie markę, więc te słowa powinny pojawić się na Twoich podstronach dostaw. Zanim cokolwiek napiszę, zbieram dane wyszukiwań dla Twojego miasta, okolicznych miejscowości i okazji, które sprzedajesz."),

        h2("Podstrony dostawy kwiatów dla dzielnic i okolicznych miejscowości"),
        p("Kto wysyła kwiaty, wpisuje miejscowość odbiorcy, a nie Twoją. Kwiaciarnia z Piaseczna dowozi do Konstancina, Józefosławia i na Ursynów, i każde z tych miejsc to osobne wyszukiwanie. Podstrona dostawy ma sens tylko tam, dokąd Twój kierowca naprawdę jeździ, i tylko z informacjami o tym miejscu:"),
        li("koszt dostawy i godzina, do której zamówienie zdąży jeszcze dziś"),
        li("szpitale, biurowce, hotele i sale weselne w okolicy, z zasadami doręczenia — recepcja, portiernia, godziny odwiedzin"),
        li("zdjęcia z prawdziwych dostaw w tej okolicy, bez twarzy odbiorców"),
        p("Dwadzieścia podstron różniących się tylko nazwą miasta Google traktuje jak strony przejściowe i pomija. Lepiej osiem podstron z prawdziwą treścią niż czterdzieści kopii."),

        h2("Okazje w pozycjonowaniu strony kwiaciarni: Dzień Kobiet, Walentynki, Dzień Matki i imieniny"),
        p("Polski kalendarz kwiaciarni jest wyjątkowo gęsty: Dzień Babci i Dziadka w styczniu, Walentynki, Dzień Kobiet 8 marca, Dzień Matki 26 maja, zakończenie roku szkolnego, Dzień Nauczyciela 14 października, a przez cały rok imieniny, urodziny i rocznice. Każda z tych okazji ma własne frazy i zasługuje na stałą podstronę z bukietami, cenami, godziną przyjmowania zamówień i podpowiedzią, co napisać na bileciku."),
        p("Podstrona okazji ma ten sam adres co roku. Strona Dnia Kobiet usuwana w kwietniu i zakładana od nowa w lutym za każdym razem zaczyna od zera; strona, która zostaje i jest odświeżana przed sezonem, zachowuje linki i historię, które zebrała."),

        h2("Florystyka ślubna, komunijna i eventowa w Google: realizacje, sale i widełki cen"),
        p("Pary szukają florystki wiele miesięcy przed ślubem, rodzice przed komunią — zwykle wczesną wiosną, przed majowymi uroczystościami — a agencje eventowe przed galą, konferencją czy otwarciem lokalu. To inne frazy i inni klienci niż przy bukiecie z dostawą: chcą zobaczyć prawdziwe realizacje i zrozumieć, od czego zależy koszt. W wyszukiwarce działają:"),
        li("osobne podstrony realizacji: sala lub kościół, pora roku, użyte kwiaty, zdjęcia za zgodą pary"),
        li("podstrony sal weselnych, w których dekorowaliście kilka przyjęć, z tym, co wiecie o miejscu: dojazd, czas na montaż, co sprawdza się w danym wnętrzu"),
        li("widełki cen bukietu ślubnego, butonierek, dekoracji stołów i kościoła z opisem, co podnosi kwotę"),
        p("Takie strony zbierają też linki od fotografów i konsultantek ślubnych, którzy pracowali przy tym samym przyjęciu, a dla lokalnej kwiaciarni to cenniejsze niż wpis w katalogu."),

        h2("Kwiaty dla firm: pozycjonowanie oferty stałych dostaw do biur i restauracji"),
        p("Kompozycje na recepcję co tydzień, kwiaty na stoły w restauracji, upominki dla kontrahentów, bukiety na Dzień Kobiet dla całego działu — firmy szukają innymi słowami: „kwiaty dla firm Warszawa”, „abonament na kwiaty do biura”, „kwiaty na recepcję”. Takich zapytań jest mało, ale jedno może oznaczać zamówienie co tydzień przez lata. Podstrona dla firm mówi, co obejmuje stała współpraca, jak wystawiacie faktury VAT, jakie są terminy i jak szybko realizujecie pilny upominek."),

        h2("Wizytówka Google kwiaciarni: kategoria, zdjęcia, opinie i godziny w święta"),
        p("Na „kwiaciarnia blisko mnie” i „kwiaciarnia czynna teraz” odpowiada mapa. W wizytówce kwiaciarni liczą się:"),
        li("kategoria główna „Kwiaciarnia”, dostawa wpisana jako usługa i obszar dostaw"),
        li("godziny poprawione przed świętami i długimi weekendami, bo wtedy klienci sprawdzają je najczęściej"),
        li("zdjęcia kompozycji z bieżącego tygodnia, witryny, lady i samochodu dostawczego"),
        li("prośba o opinię w wiadomości po doręczeniu, z sugestią, by wspomnieć okazję i dzielnicę"),
        p(
          "Pracę nad Mapami Google — kategorie, obszar działania, katalogi firm — opisuję szerzej na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Allegro, Fleurop i Poczta Kwiatowa a pozycjonowanie strony kwiaciarni"),
        p("Na frazy z dostawą kwiatów wysoko stoją ogólnopolskie serwisy i sieci kwiatowe, takie jak Fleurop czy Poczta Kwiatowa, które zwykle przyjmują zamówienie i przekazują je do wykonania kwiaciarni partnerskiej w mieście odbiorcy. Na Allegro kwiaty z dostawą sprzedaje wiele kwiaciarni naraz, a kupujący porównuje głównie cenę. Te źródła wypełniają spokojniejsze dni, ale z każdego zamówienia schodzi prowizja, a klient nie zapamiętuje nazwy Twojej kwiaciarni."),
        p("Pozycjonowanie buduje kanał bez pośrednika: stronę, która pojawia się na frazy z Twoją okolicą, i wizytówkę z prawdziwą nazwą, adresem i zdjęciami. W raporcie zestawiam zamówienia bezpośrednie z tymi z sieci i z Allegro, żeby było widać, jak zmienia się ich udział."),

        h2("Sezonowe pozycjonowanie strony kwiaciarni: podstrony gotowe przed szczytem"),
        p("Strona potrzebuje kilku tygodni, żeby Google ją odświeżył i przesunął wyżej, dlatego kalendarz prac wyprzedza kalendarz sprzedaży:"),
        li("w styczniu — Dzień Babci i Dziadka na bieżąco, a Walentynki i Dzień Kobiet zaktualizowane o nowe bukiety i ceny"),
        li("w marcu i kwietniu — Dzień Matki, komunie i pierwsze śluby sezonu"),
        li("przed wakacjami zakończenie roku szkolnego, a we wrześniu Dzień Nauczyciela i oferta świąteczna dla firm"),
        li("w tygodniu święta — godzina końca przyjmowania zamówień i informacja o wyprzedanych bukietach na stronie i w wizytówce"),
        p("Spokojniejsze tygodnie idą na nowe podstrony dostaw, realizacje ślubne i poprawki techniczne, żeby przed kolejnym szczytem strona była mocniejsza niż przed poprzednim."),

        h2("Pozycjonowanie strony kwiaciarni w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Pytania „która kwiaciarnia w Łodzi dowozi kwiaty w niedzielę”, „jakie kwiaty na 18. urodziny” czy „ile kosztuje bukiet ślubny” trafiają dziś także do ChatGPT, Perplexity i podsumowań AI w Google. Asystent składa odpowiedź z tekstów, które umie odczytać i porównać z innymi źródłami. Starania o miejsce w takich odpowiedziach to GEO i AEO (generative i answer engine optimization); w kwiaciarni sprowadzają się do czterech rzeczy:"),
        li("obszar i koszt dostawy, godzinę zamówień na dziś i godziny otwarcia zapisane zwykłymi zdaniami"),
        li("poradniki okazji i widełki cen florystyki ślubnej podpisane przez właścicielkę albo florystkę"),
        li("dane strukturalne opisujące kwiaciarnię, adres, godziny i obszar dostaw"),
        li("te same dane firmy na stronie, w wizytówce Google, na Allegro i w katalogach ślubnych"),
        p(
          "Zapisuję, co asystenci mówią o Twojej kwiaciarni i które konkurencyjne polecają, przed rozpoczęciem prac i po kilku miesiącach. Więcej o tej usłudze: ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Raport z pozycjonowania strony kwiaciarni: zamówienia, telefony i dzielnice"),
        p("Pozycje w Google są środkiem, a nie wynikiem. W raporcie dla kwiaciarni pokazuję zamówienia złożone na stronie po wejściu z wyszukiwarki, telefony i prośby o trasę z wizytówki, to, które podstrony dostaw i okazji je przyniosły, oraz udział zamówień bezpośrednich na tle Allegro i sieci kwiatowej w kolejnych sezonach. Liczby biorę z Twojego sklepu i z systemu, w którym przyjmujecie zamówienia telefoniczne, więc zgadzają się z tym, co widać w kasie. Po każdym szczycie — Walentynkach, Dniu Kobiet, Dniu Matki — porównujemy wynik z poprzednim rokiem i decydujemy, co poprawić przed następnym."),

        h2("Ile kosztuje pozycjonowanie strony kwiaciarni"),
        li("Audyt strony i wizytówki Google kwiaciarni: od 1000 zł, płatny raz, zakończony listą poprawek od najważniejszej."),
        li("Prace jednorazowe — podstrony dostaw i okazji, strony realizacji ślubnych, uporządkowanie wizytówki, znaczniki schema: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony kwiaciarni — nowe podstrony przed sezonami, Mapy Google, opinie, widoczność w AI i raport w zamówieniach: od 3500 zł miesięcznie."),
        p(
          "Jeśli najpierw trzeba zbudować sklep z kwiatami albo nową stronę, zajrzyj na stronę ",
          link("strona internetowa dla kwiaciarni", "/pl/strona-internetowa-dla-kwiaciarni"),
          ". Jak wygląda stała współpraca, pokazuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a ceny wszystkich usług zebrałem w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony kwiaciarni: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony kwiaciarni?", "Za audyt od 1000 zł, za pojedyncze zadania od 1000 do 3000 zł, za stałą współpracę od 3500 zł miesięcznie. Konkretną kwotę podam, gdy napiszesz, gdzie dowozicie i skąd dziś macie zamówienia."],
          ["Kiedy pozycjonowanie strony kwiaciarni zaczyna przynosić zamówienia?", "Uporządkowana wizytówka i nowe opinie bywają widoczne w Mapach już po kilku tygodniach. Świeże podstrony dostaw i okazji rosną zwykle dwa–cztery miesiące, w dużych miastach dłużej. Dlatego strony na Dzień Kobiet czy Dzień Matki przygotowuję z wyprzedzeniem."],
          ["Czy warto zostać w sieci kwiatowej i na Allegro?", "Często tak — te zamówienia wypełniają spokojniejsze dni. Pozycjonowanie nie wymaga rezygnacji z nich; buduje obok własny kanał bez prowizji. W raporcie widać oba źródła, więc decyzję można podjąć na podstawie liczb."],
          ["Czy każda dzielnica potrzebuje osobnej podstrony dostawy?", "Tylko te, do których jeździcie regularnie i o których macie coś konkretnego do powiedzenia: koszt, godziny, szpitale, sale. Rzadziej obsługiwane miejscowości wystarczy wymienić na jednej podstronie dostaw."],
          ["Kiedy zacząć przygotowania do Dnia Kobiet i Dnia Matki?", "Dwa–trzy miesiące wcześniej. Podstrona okazji powinna być odświeżona i podlinkowana, zanim wyszukiwania zaczną rosnąć, a wizytówka na kilka tygodni przed świętem powinna pokazywać godziny i termin zamówień."],
          ["Czy ChatGPT poleca kwiaciarnie?", "Tak, gdy ktoś zapyta o kwiaciarnię w swoim mieście. Wskazuje te, których obszar dostaw, godziny i opinie da się sprawdzić, a strona prosto odpowiada na typowe pytania. Polecenia nie da się zagwarantować; jasne fakty podnoszą szanse, a ja porównuję odpowiedzi przed pracą i po niej."],
          ["Czy pracujesz z kwiaciarniami spoza Warszawy?", "Tak, z całej Polski — z dużych miast i z mniejszych miejscowości. Pracuję zdalnie, opierając się na danych wyszukiwań z Twojej okolicy; rozmawiamy po polsku, a w razie potrzeby także po angielsku lub rosyjsku."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony kwiaciarni: co mi wysłać"),
        p(
          "Wyślij nazwę kwiaciarni, adres strony i link do jej profilu w Mapach Google, dzielnice i miejscowości, do których dowozicie, godzinę przyjmowania zamówień na dziś oraz informację, czy sprzedajesz na Allegro albo przez sieć kwiatową i jakich zamówień chcesz więcej: dostaw, ślubów czy stałych dostaw dla firm. W odpowiedzi dostaniesz listę pierwszych kroków i stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
