// Landing page fixture: Pozycjonowanie strony firmy fotowoltaicznej (PL), group
// «solar-seo». New page. Market version for Polish firmy fotowoltaiczne —
// installers of PV for homes, firms and farms who now also sell magazyny
// energii, pompy ciepła, serwis and rozbudowa — not a translation of
// solar-seo.en.
// Semantic core: ref/batch-h2.md has no measured PL phrases for this group; H1
// and headings carry the slug phrase «pozycjonowanie strony firmy
// fotowoltaicznej» / «pozycjonowanie stron firm fotowoltaicznych» and the words
// customers type (brief): fotowoltaika [miasto], montaż fotowoltaiki, magazyn
// energii, pompa ciepła i fotowoltaika, firma fotowoltaiczna opinie.
// PL PAA (used as search examples, not answered as facts): Czy fotowoltaika
// będzie obowiązkowa od 2026 roku? · Ile miesięcznie produkuje fotowoltaika? ·
// Dlaczego po założeniu fotowoltaiki mam wysokie rachunki za prąd? (H2 on
// existing owners). Related: oszuści fotowoltaika forum, jaka firma do
// fotowoltaiki forum, ranking firm fotowoltaicznych, fotowoltaika porównywarka
// opinie → trust H2 and comparison-site H2.
// Intent: ref/intent-check-batch-h.md — EN «solar seo» vs «construction seo» 0
// of 10 shared URLs → own page, separate from
// /pl/pozycjonowanie-strony-firmy-budowlanej (linked once).
// Angles: search stages, service pages (dom, firma, gospodarstwo, magazyn
// energii, pompa ciepła, serwis), local pages by gmina/powiat and OSD,
// wizytówka, Mój Prąd and net-billing in general terms only (no amounts, no
// edition numbers, no dates), calculator with assumptions, realizacje with
// kWp/panele/falownik with consent, trust (forums, rankings, umowa poza
// lokalem in general terms), owners of existing installations, website as part
// of SEO, AI answers, porównywarki vs own search, report, cost.
// NOT on this page: roofs and general building (construction page); wizytówka
// in depth (/pl/oferty/pozycjonowanie-lokalne); ads, handlowcy w terenie,
// buying contacts (not offered); concrete subsidy amounts or deadlines.
// Owner’s rules: PL form «pozycjonowanie strony …»; «faktura» only; every SEO
// page covers AI search (GEO, AEO); never say there are no clients from the
// visitor’s industry; no guaranteed positions.
import { p, h2, li, link, k } from "./pt";

export const solarSeoPl = {
  lang: "pl",
  group: "solar-seo",
  slug: "pozycjonowanie-strony-firmy-fotowoltaicznej",
  title: "Pozycjonowanie strony firmy fotowoltaicznej",
  heading: "Pozycjonowanie strony firmy fotowoltaicznej",
  excerpt:
    "Zajmuję się pozycjonowaniem stron firm fotowoltaicznych: podstrony montażu PV, magazynów energii i pomp ciepła, strony miejscowości z prawdziwymi realizacjami, aktualne opisy Mój Prąd i net-billingu, odpowiedź na opinie z forów i widoczność w AI — tak, żeby zapytania o wycenę trafiały prosto do Ciebie, a nie przez porównywarkę.",
  seo: {
    metaTitle: "SEO dla instalatorów fotowoltaiki i pomp ciepła | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony firmy fotowoltaicznej: montaż PV, magazyny energii, podstrony miejscowości, Mój Prąd i net-billing, opinie i AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["PV, magazyny energii, pompy ciepła", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Fotowoltaika Rzeszów", "Magazyn energii do PV", "Firma fotowoltaiczna opinie", "Poleca asystent AI"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO firmy fotowoltaicznej: strona, wizytówka Google, wyniki na nazwę firmy, odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla instalatora PV: podstrony usług, miejscowości i dotacji, opis kalkulatora, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony firmy fotowoltaicznej", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony firmy fotowoltaicznej",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy z całej drogi klienta", text: "Opłacalność, montaż, magazyn energii, opinie" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług PV i pomp ciepła", text: "Dom, firma, gospodarstwo, serwis instalacji" },
        { _key: k("o"), iconName: "map-pin", title: "Miejscowości z prawdziwymi realizacjami", text: "Gmina, powiat i operator sieci na tym terenie" },
        { _key: k("o"), iconName: "file-text", title: "Mój Prąd i net-billing bez przekłamań", text: "Data sprawdzenia i link do źródła" },
        { _key: k("o"), iconName: "shield-check", title: "Odpowiedź na fora i rankingi", text: "Gwarancje, zasady umowy i opinie zapisane tekstem" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i AI Overviews", text: "Fakty o firmie, które asystent może powtórzyć" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO firmy fotowoltaicznej", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony instalatora PV", value: "od 3500 zł / mies.", note: "przy silnej konkurencji od 5500 zł", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: firmy techniczne i zakupy, które klient długo rozważa",
      subtitle:
        "Instalację fotowoltaiczną kupuje się po tygodniach porównywania ofert, a te projekty prowadzą właśnie takiego klienta. ScanM2, firma skanowania laserowego 3D i BIM, przez dwa lata nie dostawała zapytań ze strony postawionej w kreatorze; po przebudowie na WordPressie ruch z Google wzrósł 29 razy, a zapytania przychodzą co tydzień. Cypryjski serwis nieruchomości, który zbudowałem i prowadzę, ma od zera około 2500 wejść z wyszukiwarki miesięcznie, bez ani jednego kupionego linku; kiedy opisy ofert przerobiono na reklamowe hasła, ruch spadł, a powrót do rzeczowych opisów przywrócił kliknięcia (+16%) — ta sama lekcja dotyczy stron PV pełnych sloganów o „darmowym prądzie”. Warszawski warsztat samochodowy dostał lokalne SEO, Mapy Google i podstrony usług. Serwis agencji edukacyjnej rozrósł się z jednego kraju do dziesięciu, tak jak instalator dokłada kolejne powiaty. Strona konsultantki od analityki handlu ma działające kalkulatory i teksty pisane tak, by cytowały je asystenty AI.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "auto-repair-seo-and-ux-boost",
        "full-multilingual-website-development-and-seo-for-student-services",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony firmy fotowoltaicznej",
      subtitle: "W ciągu jednego dnia roboczego napiszę, od czego zacząłbym na stronie i w wizytówce, i podam stałą cenę tych prac.",
      contextLabel: "Nazwa firmy lub adres strony",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Czego ma przybyć dzięki wyszukiwarce?", options: ["Instalacji PV na domach", "Fotowoltaiki dla firm i rolników", "Magazynów energii i pomp ciepła", "Serwisu i rozbudowy instalacji"] },
        { _key: k("z"), question: "Skąd dziś macie klientów?", options: ["Z porównywarek i kupionych kontaktów", "Od handlowców w terenie", "Z poleceń i opinii", "Z własnej strony"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony firmy fotowoltaicznej to praca nad tym, żeby właściciel domu, gospodarstwa albo hali, który wpisuje „fotowoltaika z magazynem energii Kielce” albo sprawdza „firma fotowoltaiczna opinie”, trafił na Twoją stronę, a nie na porównywarkę, która przekaże jego numer kilku instalatorom. Rynek dojrzał: wiele domów ma już panele, a nowi klienci dłużej liczą i porównują. Strona musi odpowiedzieć na ich pytania, zanim zadzwonią. Audyt, teksty, zmiany w kodzie i raporty robię sam, bez pośredników."),

        h2("Pozycjonowanie strony firmy fotowoltaicznej: frazy od opłacalności po wybór instalatora"),
        p("Klient fotowoltaiki szuka etapami i na każdym etapie używa innych słów:"),
        li("opłacalność — „czy fotowoltaika się opłaca”, „ile miesięcznie produkuje fotowoltaika”, „fotowoltaika 10 kW cena”"),
        li("instalator — „fotowoltaika Lublin”, „montaż fotowoltaiki powiat tarnowski”, „firma fotowoltaiczna blisko mnie”"),
        li("produkt — „magazyn energii do fotowoltaiki”, „pompa ciepła i fotowoltaika”, „fotowoltaika dla firm”, „fotowoltaika dla rolnika”"),
        li("sprawdzanie — „nazwa firmy + opinie”, „jaka firma do fotowoltaiki forum”, „ranking firm fotowoltaicznych”"),
        p("Zbieram dane wyszukiwań dla Twoich powiatów i sprawdzam, kto dziś zajmuje pierwszą stronę: inni instalatorzy, ogólnopolskie sieci sprzedaży, porównywarki ofert i serwisy poradnikowe, które utrzymują się ze sprzedaży kontaktów. Z tego obrazu wynika, gdzie zacząć."),

        h2("Podstrony usług na stronie firmy fotowoltaicznej: montaż PV, magazyn energii, pompa ciepła i serwis"),
        p("Jedna zakładka „Fotowoltaika” nie wypozycjonuje się na wszystko, co sprzedajesz. Własnej podstrony potrzebują:"),
        li("montaż fotowoltaiki na domu — dach skośny, płaski albo grunt, kolejne kroki od oględzin do zgłoszenia instalacji w zakładzie energetycznym"),
        li("fotowoltaika dla firm i gospodarstw — hale, chłodnie, budynki inwentarskie, zużycie prądu w godzinach pracy"),
        li("magazyn energii — do nowej instalacji i do takiej, która działa od lat"),
        li("pompa ciepła razem z fotowoltaiką — jak jedno współpracuje z drugim"),
        li("serwis, przeglądy, mycie paneli i rozbudowa instalacji"),
        p(
          "Jeśli robicie też dachy, ocieplenia albo rozbudowy, więcej o tej części znajdziesz na stronie ",
          link("pozycjonowanie strony firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej"),
          ".",
        ),

        h2("Pozycjonowanie lokalne strony firmy fotowoltaicznej: miejscowości, operator sieci i wizytówka Google"),
        p("Instalator dojeżdża do klienta, więc w Google jest firmą z obszarem działania: wizytówka pokazuje powiaty, w których montujecie, a nie adres magazynu. Mało kto wybiera instalatora prosto z mapy, ale prawie każdy otwiera wizytówkę, żeby przeczytać opinie. Podstrona miejscowości ma sens tam, gdzie macie realizacje, i zawiera to, czego nie da się przepisać z sąsiedniej gminy:"),
        li("instalacje wykonane w okolicy, z mocą i zdjęciami"),
        li("operatora sieci, który obsługuje ten teren, i ogólny opis przyłączenia mikroinstalacji u niego"),
        li("uwagi z montaży: typowe dachy, zabudowa, dojazd z Waszej bazy"),
        li("opinie klientów z tej miejscowości"),
        p(
          "Kategorie, obszar działania i zdjęcia w wizytówce opisuję szerzej na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Mój Prąd i net-billing na stronie firmy fotowoltaicznej: aktualne opisy dotacji i rozliczeń"),
        p("Przy dotacjach i rozliczeniach klient najczęściej trafia na nieaktualne informacje. Kolejne edycje programu Mój Prąd mają różne warunki, a nowi prosumenci rozliczają się w net-billingu inaczej niż w dawnym systemie opustów. Ludzie wciąż szukają starych zasad i pytają o nowe, na przykład „czy fotowoltaika będzie obowiązkowa od 2026 roku”. Strona, która spokojnie mówi, co obowiązuje dziś, wygrywa takie wyszukiwanie. Dlatego:"),
        li("jedna stała podstrona na program albo zasadę, aktualizowana w tym samym miejscu, z datą sprawdzenia"),
        li("link do źródła: strony programu, operatora sieci, przepisów"),
        li("żadnych kwot i terminów, których źródło nie podaje, i żadnej „darmowej fotowoltaiki”"),
        li("dotacja pokazana osobno, a nie wliczona w cenę na pierwszym ekranie"),

        h2("Kalkulator fotowoltaiki na stronie firmy: założenia zapisane obok wyniku"),
        p("„Ile zaoszczędzę na fotowoltaice” to pytanie, od którego zaczyna się większość wizyt. Kalkulator na Twojej stronie odpowiada na nie zamiast porównywarki, ale pomaga tylko wtedy, gdy widać, jak liczy:"),
        li("dane, które klient zna: roczne zużycie albo kwota rachunku, taryfa, kierunek dachu, cień"),
        li("założenia obok wyniku: cena prądu, udział autokonsumpcji, rozliczenie nadwyżek w net-billingu, spadek wydajności paneli z latami"),
        li("wynik w widełkach i zdanie, że dokładne liczby daje oględziny"),
        li("metoda opisana tekstem, bo Google i asystenci AI czytają słowa, a nie skrypt"),

        h2("Realizacje instalacji fotowoltaicznych jako treść SEO: moc w kWp, panele, falownik i dach"),
        p("Klient chce zobaczyć instalację podobną do swojej, na podobnym budynku. Podstrona realizacji podaje:"),
        li("budynek i pokrycie — dachówka, blachodachówka, papa, grunt, budynek gospodarczy"),
        li("moc w kWp, liczbę i model paneli, falownik i magazyn energii, jeśli jest"),
        li("czas od podpisania umowy do uruchomienia instalacji"),
        li("produkcję z aplikacji monitorującej i rachunki przed i po — tylko jeśli właściciel się zgodzi"),
        p("Realizacja trafia na stronę za zgodą klienta, bez dokładnego adresu, i linkuje do podstrony miejscowości oraz usługi."),

        h2("Opinie, fora i rankingi firm fotowoltaicznych: zaufanie w pozycjonowaniu strony"),
        p("Branża PV w Polsce ma za sobą lata nachalnej sprzedaży i firm, które znikały po montażu. Klienci to pamiętają i wpisują „oszuści fotowoltaika forum”, „ranking firm fotowoltaicznych” albo nazwę Twojej firmy ze słowem „opinie”. Wiele rankingów prowadzą serwisy żyjące z kontaktów, więc wygrywa to, co klient sprawdzi sam:"),
        li("dane firmy, lata na rynku, certyfikaty instalatorów OZE i ubezpieczenie zapisane tekstem"),
        li("gwarancje rozpisane osobno: na panele, falownik, wydajność i Waszą robociznę, z informacją, kto prowadzi serwis"),
        li("najważniejsze zasady umowy, w tym prawo odstąpienia od umowy zawartej poza siedzibą firmy, opisane ogólnie"),
        li("opinie w Google zbierane po uruchomieniu instalacji i rzeczowe odpowiedzi na krytyczne"),

        h2("Właściciele instalacji fotowoltaicznych jako klienci: rachunki po montażu, serwis i magazyn energii"),
        p("Wiele domów ma już panele, często od firm, których nie ma na rynku. Ich właściciele szukają: „dlaczego po założeniu fotowoltaiki mam wysokie rachunki za prąd”, „falownik pokazuje błąd”, „serwis fotowoltaiki Radom”, „magazyn energii do istniejącej instalacji”. Rzeczowy poradnik o rachunkach w net-billingu i podstrona serwisu instalacji innych firm przyciągają ludzi, którzy wkrótce kupią magazyn energii, pompę ciepła albo rozbudowę — i wiedzą już, za co płacą."),

        h2("Strona internetowa firmy fotowoltaicznej jako część pozycjonowania"),
        p(
          "Wiele firm PV ma stronę z jednym formularzem „sprawdź, ile zaoszczędzisz” pod kampanie reklamowe albo szablon, który w telefonie ładuje się kilka sekund. Gdy pozycjonowanie wymaga podstron, których strona nie udźwignie, najpierw ją przebudowuję: osobne podstrony usług, miejscowości i realizacji, krótki formularz z pytaniami — dom czy firma, zużycie, rodzaj dachu, czy jest już instalacja — szybka wersja mobilna i dane strukturalne. Strona kosztuje 3000–6000 zł, pełna strona z biblioteką realizacji i kalkulatorem od 8500 zł, projekt graficzny jest w cenie. Szczegóły na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),

        h2("Pozycjonowanie strony firmy fotowoltaicznej w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Pytania „która firma fotowoltaiczna pod Opolem ma dobre opinie”, „czy magazyn energii opłaca się w net-billingu” albo „czy ta firma PV jest wiarygodna” coraz częściej zadaje się ChatGPT, Perplexity albo podsumowaniom AI nad wynikami Google. W odpowiedzi padają dwie, trzy nazwy firm i krótkie uzasadnienie. Pracę nad tymi odpowiedziami nazywa się GEO i AEO, a u instalatora oznacza ona:"),
        li("obszar działania, usługi, lata na rynku, gwarancje i certyfikaty zapisane zwykłymi zdaniami"),
        li("odpowiedzi o kosztach, opłacalności i dotacjach z datą aktualizacji"),
        li("dane strukturalne firmy, usług i obszaru działania"),
        li("tę samą nazwę i dane w wizytówce, na stronie, w porównywarkach i katalogach"),
        p(
          "Na starcie i po kilku miesiącach zapisuję, co asystenci mówią o firmie i kogo polecają zamiast niej. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Porównywarki ofert i kupione kontakty a pozycjonowanie stron firm fotowoltaicznych"),
        p(
          "Porównywarki i serwisy z „bezpłatną wyceną fotowoltaiki” zbierają dane klienta i przekazują je kilku firmom naraz. Odbiera telefon człowiek, do którego dzwoniło już trzech handlowców, a Ty zaczynasz od tłumaczenia, czym się od nich różnisz. Klient z wyszukiwarki, który przeczytał Twoją podstronę i opinie, pisze sam. Wiele firm zostawia porównywarki, dopóki pozycjonowanie rośnie, i zestawia koszt podpisanej umowy z obu źródeł. W raporcie liczę zapytania kwalifikowane — właściciel budynku, Twój obszar, dach albo grunt pod instalację — z podziałem na podstrony; pozycje fraz są tylko wyjaśnieniem. Jak wygląda stała współpraca, opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony firmy fotowoltaicznej"),
        li("Audyt — strona, wizytówka, wyniki na nazwę firmy, to, co mówią o Was asystenci AI: od 1000 zł za całość, płatne raz; kończy się listą zmian od najpilniejszej."),
        li("Prace jednorazowe — podstrony usług, miejscowości i dotacji, szablon realizacji, opis kalkulatora, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony firmy fotowoltaicznej — kolejne podstrony, pilnowanie opisów dotacji, opinie, odpowiedzi AI i comiesięczny raport: od 3500 zł miesięcznie; gdy walczycie o frazy ogólnopolskie albo duże miasta, od 5500 zł."),
        p(
          "Pierwsze efekty pojawiają się zwykle po około półtora miesiąca, a stabilny wzrost w ciągu 3–6 miesięcy. Ceny wszystkich usług są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony firmy fotowoltaicznej: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony firmy fotowoltaicznej?", "Za audyt zapłacisz od 1000 zł, za zadania jednorazowe od 1000 do 3000 zł. Stała praca to od 3500 zł miesięcznie, a na rynkach z mocną konkurencją od 5500 zł. Gdy napiszesz, w jakich powiatach montujecie i skąd dziś macie klientów, podam stałą kwotę."],
          ["Kiedy widać efekty pozycjonowania strony instalatora fotowoltaiki?", "Na pierwsze efekty czeka się zwykle około półtora miesiąca, na stabilny wzrost — od 3 do 6 miesięcy. Najszybciej reagują wizytówka i podstrony odpowiadające na pytania o opinie; frazy z dużymi miastami wymagają więcej czasu."],
          ["Czy pisać o Mój Prąd, skoro warunki programu się zmieniają?", "Tak, właśnie dlatego. Klienci szukają aktualnych zasad i trafiają na stare wpisy. Jedna podstrona z datą sprawdzenia i linkiem do źródła, odświeżana przy każdej zmianie, zbiera te wyszukiwania i buduje zaufanie."],
          ["Co zrobić z wpisami o firmie na forach i złymi opiniami?", "Nie da się ich usunąć, ale można sprawić, że na nazwę firmy pierwsza wyświetli się Twoja strona z gwarancjami, realizacjami i zasadami umowy. Na opinie w Google odpowiadam rzeczowo, z faktami i datami, bez sporów."],
          ["Czy warto pozycjonować serwis instalacji wykonanych przez inne firmy?", "Często tak. Właściciele instalacji po zamkniętych firmach szukają serwisu sami, a po dobrej naprawie wracają po magazyn energii, pompę ciepła albo rozbudowę."],
          ["Czy ChatGPT poleca firmy fotowoltaiczne?", "Tak, gdy ktoś zapyta o instalatora w swojej okolicy. Wybiera firmy, o których znajdzie sprawdzalne fakty i spójne opinie. Polecenia nikt nie zagwarantuje; porównuję odpowiedzi asystentów przed pracą i po kilku miesiącach."],
          ["Czy pracujesz z firmami fotowoltaicznymi z całej Polski?", "Tak. Pracuję zdalnie, na danych wyszukiwań z Twoich powiatów, po polsku. Pierwsza rozmowa trwa 15–30 minut i jest bezpłatna, a za pracę wystawiam fakturę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony firmy fotowoltaicznej: co mi wysłać"),
        p(
          "Wyślij adres strony i link do wizytówki w Mapach Google, powiaty, w których montujecie, usługi, których chcesz sprzedawać więcej — PV na domach, dla firm, magazyny energii, pompy ciepła, serwis — oraz informację, czy korzystacie z porównywarek albo kupionych kontaktów. Odpiszę, od czego zacząłbym i ile to będzie kosztować — kwotą stałą. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
