// Landing page fixture: Pozycjonowanie kliniki medycyny estetycznej (PL),
// group «med-spa-seo». Market version for Polish kliniki and gabinety medycyny
// estetycznej, not a translation of med-spa-seo.en.
// Semantic core: ref/medical-practices.md — PL «on topic» list is empty (volumes
// under the source’s floor); target phrases from BRIEF.md: «pozycjonowanie
// kliniki medycyny estetycznej» (H1, H2, cost H2, FAQ), «pozycjonowanie
// gabinetu medycyny estetycznej» (H2, metaTitle). PAA: «Czy SEO i
// pozycjonowanie to to samo?» (FAQ), «Jaki jest najlepszy zabieg medycyny
// estetycznej?» (AI H2: factual comparisons instead of «najlepszy»). Not
// targeted: «Jaki jest rynek medycyny estetycznej w Polsce?», «Jaki zabieg
// najbardziej odmładza twarz?» (patients’ questions, no page).
// Intent: ref/intent-check-medical-practices.md — «pozycjonowanie kliniki
// medycyny estetycznej» vs «strona dla kliniki medycyny estetycznej» 0 shared
// URLs → separate pages (sibling linked); vs «pozycjonowanie chirurga
// plastycznego» 0 shared → own page. SERP: Polish medical-marketing and SEO
// agencies (medyczny-marketing.pl, agencjakreatywni, grupa-icea, netilo) →
// owners buying the service.
// Polish angles: zabiegi lekarskie vs kosmetologiczne; lekarz informuje, nie
// reklamuje; ograniczenia reklamy leków na receptę i wyrobów medycznych dla
// profesjonalistów (general, no article numbers); przepisy o tym, kto wykonuje
// zabiegi — w zmianach, «sprawdź aktualny stan»; Booksy i ZnanyLekarz;
// metamorfozy ze zgodą na wizerunek; RODO; karnety i bony podarunkowe.
// NOT on this page: building the site (/pl/strona-internetowa-dla-kliniki-
// medycyny-estetycznej); chirurgia plastyczna (/pl/pozycjonowanie-strony-
// chirurga-plastycznego); dermatologia lekarska (/pl/pozycjonowanie-gabinetu-
// dermatologicznego); salony bez zabiegów medycznych (/pl/seo-salonu-
// kosmetycznego, linked once); Instagram and paid ads (not offered).
// Owner’s rules: every SEO page covers AI search; Giuseppe’s case first;
// never say there are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const medSpaSeoPl = {
  lang: "pl",
  group: "med-spa-seo",
  slug: "pozycjonowanie-strony-kliniki-medycyny-estetycznej",
  title: "Pozycjonowanie strony kliniki medycyny estetycznej",
  heading: "Pozycjonowanie strony kliniki medycyny estetycznej",
  excerpt:
    "Zajmuję się pozycjonowaniem klinik i gabinetów medycyny estetycznej: osobne podstrony zabiegów lekarskich i kosmetologicznych, lekarze z kwalifikacjami, cennik i karnety, wizytówka Google spójna z Booksy i ZnanyLekarz oraz widoczność w AI — rzeczowo, w granicach zasad informowania o usługach.",
  seo: {
    metaTitle: "Pozycjonowanie gabinetu medycyny estetycznej | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony kliniki medycyny estetycznej: podstrony zabiegów, lekarze z PWZ, cennik i karnety, wizytówka Google, Booksy, widoczność w AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Zabiegi + mapy + AI", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Wypełnianie ust Kraków", "Zabieg wykonuje lekarz", "Cennik i karnety", "Zarezerwuj konsultację"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO kliniki medycyny estetycznej: strona, wizytówka Google i odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla kliniki medycyny estetycznej: podstrony zabiegów i lekarzy, cennik, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony kliniki medycyny estetycznej", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony kliniki medycyny estetycznej",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego zabiegu", text: "Iniekcje, lasery i kosmetologia — każde osobno" },
        { _key: k("o"), iconName: "shield-check", title: "Informacja zamiast reklamy", text: "Bez obietnic efektu i bez eksponowania leków na receptę" },
        { _key: k("o"), iconName: "file-text", title: "Lekarze i kosmetolodzy z kwalifikacjami", text: "PWZ, szkolenia, zakres zabiegów, data weryfikacji" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google, Booksy i ZnanyLekarz", text: "Te same dane, godziny i link do rezerwacji" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i przeglądy AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w konsultacjach i rezerwacjach", text: "Według grup zabiegów, nie tylko pozycje" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO kliniki: strona i wizytówka Google", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony kliniki medycyny estetycznej", value: "od 3500 zł / mies.", note: "zabiegi, mapy, AI, raporty", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony, które zbudowałem i pozycjonuję",
      subtitle:
        "Na początek gabinet Giuseppe, psychoterapeuty z Mediolanu: prywatna praktyka medyczna z surowymi zasadami informowania o usługach, w której panel treści ostrzega przed niedozwolonymi sformułowaniami, a nowe podstrony pojawiają się już w odpowiedziach ChatGPT. Obok platforma luksusowych nieruchomości na Cyprze, której SEO prowadzę co miesiąc, firma skanowania laserowego 3D z ruchem organicznym większym 29 razy po przebudowie, warsztat samochodowy z Warszawy widoczny w Mapach Google i warszawska firma remontowo-inwestycyjna. Klinika estetyczna potrzebuje tego samego połączenia: kosztownych usług wybieranych po długim porównywaniu, lokalnego wyszukiwania i treści w granicach zasad.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony kliniki medycyny estetycznej",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie kliniki i w wizytówce Google, i za jaką stałą cenę. Proszę nie wysyłać danych pacjentów.",
      contextLabel: "Nazwa kliniki lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Przy jakich zabiegach chcecie więcej pacjentów?", options: ["Zabiegi iniekcyjne", "Lasery i aparatura", "Kosmetologia", "Karnety i pakiety"] },
        { _key: k("z"), question: "Skąd teraz przychodzą nowi pacjenci?", options: ["Z Instagrama", "Z Booksy lub ZnanyLekarz", "Z Google i Map Google", "Z poleceń"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony kliniki medycyny estetycznej to praca nad tym, żeby osoby wpisujące „botoks Kraków”, „kwas hialuronowy usta cena” albo „depilacja laserowa Wrocław” trafiały na stronę Waszej kliniki i do jej wizytówki Google, a potem rezerwowały konsultację. Robię to sam — audyt, strukturę podstron, teksty uzgadniane z lekarzami i poprawki w kodzie — więc nic nie ginie między opiekunem klienta, copywriterem a programistą."),

        h2("Na czym polega pozycjonowanie strony kliniki medycyny estetycznej"),
        p("Pacjent kliniki estetycznej zwykle zna zabieg, zanim wybierze miejsce. Sprawdza go w Google i w mapach, w Booksy albo ZnanyLekarz, ogląda Instagram i coraz częściej pyta ChatGPT. Pozycjonowanie łączy te miejsca:"),
        li("podstrona dla każdego zabiegu, przy którym chcecie więcej rezerwacji"),
        li("wizytówka Google dla każdej placówki, spójna z profilami w serwisach rezerwacji"),
        li("podstrony lekarzy i kosmetologów z kwalifikacjami"),
        li("cennik, karnety i pakiety zapisane tekstem"),
        li("metamorfozy i opinie publikowane w granicach zgód i zasad"),
        li("fakty, które asystenci AI mogą przeczytać i zacytować"),
        p("Wynik liczę w konsultacjach i rezerwacjach z wyszukiwarki, z podziałem na grupy zabiegów, a nie w samych pozycjach."),

        h2("Zabiegi lekarskie i kosmetologiczne: podstrony w pozycjonowaniu gabinetu medycyny estetycznej"),
        p("W wielu klinikach pod jednym dachem są zabiegi wykonywane przez lekarza i zabiegi kosmetologiczne. Pacjenci szukają ich innymi słowami i mają inne pytania, a Google lepiej ocenia stronę, która je rozdziela. Każdy zabieg dostaje własną podstronę: dla kogo jest, kto go wykonuje, jak wygląda wizyta, ile trwa gojenie, ile zabiegów zwykle potrzeba, od czego zależy cena i jak się zapisać."),
        h3("Zabiegi iniekcyjne: toksyna botulinowa, kwas hialuronowy, stymulatory tkankowe"),
        p("Frazy są konkretne: „botoks lwia zmarszczka”, „powiększanie ust kwasem hialuronowym”, „wolumetria policzków”, „stymulator tkankowy cena”. Jedna podstrona odpowiada na jedno takie zapytanie i wymienia lekarza, który wykonuje zabieg. Przepisy o tym, kto może wykonywać zabiegi z zakresu medycyny estetycznej, są w Polsce przedmiotem zmian — sprawdźcie aktualny stan w okręgowej izbie lekarskiej."),
        h3("Lasery i zabiegi aparaturowe"),
        p("Depilacja laserowa, laser frakcyjny, HIFU, radiofrekwencja mikroigłowa, fotoodmładzanie. Pacjenci pytają o liczbę zabiegów, czas rekonwalescencji, fototyp skóry i urządzenie, a nazwa urządzenia bywa częścią wpisywanej frazy."),
        h3("Kosmetologia: peelingi, oczyszczanie, pielęgnacja"),
        p(
          "Te zabiegi konkurują z salonami. Przewagą kliniki jest kontekst medyczny: kwalifikacja do zabiegu, łączenie z zabiegami lekarskimi, opieka po zabiegu. Salony bez zabiegów medycznych znajdą więcej na stronie ",
          link("pozycjonowanie salonu kosmetycznego", "/pl/seo-salonu-kosmetycznego"),
          ".",
        ),
        p(
          "Chirurgia plastyczna ma osobną stronę — ",
          link("pozycjonowanie strony chirurga plastycznego", "/pl/pozycjonowanie-strony-chirurga-plastycznego"),
          ", a dermatologia lekarska — ",
          link("pozycjonowanie gabinetu dermatologicznego", "/pl/pozycjonowanie-strony-gabinetu-dermatologicznego"),
          ".",
        ),

        h2("Informacja, nie reklama: treści na stronie kliniki medycyny estetycznej"),
        p("Lekarz w Polsce może informować o swojej działalności, ale nie może się reklamować, a podobny warunek przepisy stawiają placówkom wykonującym działalność leczniczą. Do tego reklama leków na receptę kierowana do pacjentów jest zakazana, a reklama wyrobów medycznych przeznaczonych dla profesjonalistów — ograniczona. Dotyczy to wielu preparatów używanych w medycynie estetycznej."),
        p("Dlatego podstrona opisuje zabieg, a nie markę preparatu: na czym polega, kto go wykonuje, przeciwwskazania, możliwe działania niepożądane i cenę. Bez obietnic „odmłodzenia o dziesięć lat”, bez promocji „drugi obszar gratis” przy zabiegach lekarskich, bez „najlepszej kliniki w mieście”. Potoczne słowo „botoks” może pojawić się w tekście, bo tak szukają pacjenci, ale granicę między informacją a reklamą uzgodnijcie z prawnikiem. To ogólne wskazówki, nie porada prawna."),

        h2("Lekarze i kosmetolodzy na stronie kliniki medycyny estetycznej: kto wykonuje zabieg"),
        p("Google ocenia strony o zdrowiu surowiej niż inne (YMYL) i szuka sygnałów doświadczenia i wiarygodności. Pacjent pyta o to samo prościej: kto będzie wykonywał zabieg? Każdy lekarz ma podstronę z numerem prawa wykonywania zawodu, specjalizacją, szkoleniami i listą zabiegów, które wykonuje; kosmetolog — z wykształceniem i zakresem swoich zabiegów. Podstrony zabiegów lekarskich podają lekarza, który sprawdził treść, i datę weryfikacji. Ja przygotowuję strukturę i teksty, lekarz zatwierdza treść medyczną."),

        h2("Cennik, karnety i pakiety zabiegów w pozycjonowaniu kliniki"),
        p("„Botoks cena”, „ile kosztuje powiększanie ust”, „depilacja laserowa pachy cena” — pytania o cenę padają w medycynie estetycznej przed niemal każdą pierwszą wizytą. Cennik w tekście, z ceną za obszar, ampułkostrzykawkę albo zabieg i informacją, czy konsultacja jest płatna i czy wlicza się w cenę zabiegu, zatrzymuje porównanie na Waszej stronie. Cennik w PDF albo na grafice tej roli nie spełni."),
        p("Karnety, serie zabiegów laserowych, raty i bony podarunkowe dostają osobne podstrony. Bon podarunkowy to fraza sezonowa, wpisywana przed świętami i Dniem Matki, więc jego podstrona powinna być gotowa wcześniej."),

        h2("Wizytówka Google kliniki medycyny estetycznej, Booksy i ZnanyLekarz"),
        p("Przy wyszukiwaniach „medycyna estetyczna w pobliżu” albo „botoks Mokotów” decyduje blok map. Liczą się kategoria główna wizytówki, lista usług z opisami, prawdziwe zdjęcia gabinetów i zespołu, godziny i link do rezerwacji. Każda placówka ma własną wizytówkę i własną podstronę."),
        p(
          "Booksy i ZnanyLekarz przynoszą rezerwacje i stoją wysoko w wynikach, ale na ich listach obok Was są inne kliniki. Profile warto prowadzić starannie i jednocześnie budować własną stronę; nazwa, adres, telefon i godziny muszą być wszędzie takie same. Ogólne podejście do map opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Zdjęcia przed i po oraz opinie pacjentów: zgoda na wizerunek, RODO i zasady Google"),
        p("Metamorfozy pacjenci oglądają uważnie przed pierwszą wizytą. Publikuje się je tylko z pisemną zgodą na rozpowszechnianie wizerunku, w tym samym świetle i kadrze, bez filtrów i retuszu, z opisem: zabieg, obszar, liczba sesji, odstęp między zdjęciami. Zdjęcie twarzy to dane osobowe w rozumieniu RODO, więc zgoda i jej ewentualne wycofanie są zapisane przy dokumentacji pacjenta. Przy zabiegach lekarskich zdjęcia przed i po łatwo uznać za reklamę, więc ich zakres też warto uzgodnić z prawnikiem."),
        p("Opinie zbieram w wizytówce Google, Booksy i ZnanyLekarz jako stały proces: wiadomość z linkiem po każdej wizycie, do wszystkich pacjentów. Kupowanie opinii i nagradzanie za nie łamie zasady Google i przepisy o nieuczciwych praktykach rynkowych. Odpowiedź na opinię nie potwierdza, że ktoś był pacjentem, i nie wspomina zabiegu."),

        h2("Instagram a pozycjonowanie gabinetu medycyny estetycznej"),
        p("Instagram pokazuje efekty i zespół osobom, które już Was obserwują. Gdy ktoś jest gotowy się zapisać i wpisuje „wypełnianie ust Poznań”, dostaje mapy, strony klinik i serwisy rezerwacji. Pozycjonowanie nie zastępuje Instagrama, tylko przejmuje popyt, który on tworzy: rolkę z omówieniem zabiegu można zamienić w podstronę, która pracuje dłużej niż post. Moja część to wyszukiwarka i strona; profil na Instagramie i kampanie płatne zostają przy osobach, które już je prowadzą."),

        h2("Pozycjonowanie strony kliniki medycyny estetycznej w ChatGPT i przeglądach AI (GEO, AEO)"),
        p("Pacjenci pytają ChatGPT, Perplexity i przeglądy od AI w Google o rzeczy w rodzaju „jaki jest najlepszy zabieg medycyny estetycznej na zmarszczki wokół oczu”, „czym różni się mezoterapia od stymulatora tkankowego” albo „gdzie w Gdańsku lekarz robi wolumetrię”. Asystent odpowiada na podstawie tego, co przeczyta i sprawdzi: stron klinik, wizytówek, opinii i serwisów. Pracę nad obecnością w takich odpowiedziach nazywa się GEO lub AEO. Dla kliniki oznacza to:"),
        li("zabiegi, lekarzy z kwalifikacjami, adresy, godziny i widełki cen zapisane prostymi zdaniami"),
        li("rzeczowe porównania zabiegów — strona nie ogłasza „najlepszego zabiegu”, tylko opisuje różnice"),
        li("te same dane na stronie, w Google, Booksy i ZnanyLekarz"),
        li("dane strukturalne łączące klinikę, lekarzy i placówki"),
        p(
          "Surowe zasady komunikacji tego nie blokują: Giuseppe, psychoterapeuta z Mediolanu, podlega ostrzejszym ograniczeniom niż klinika estetyczna, a ChatGPT już cytuje nowe podstrony strony, którą dla niego przebudowałem. Metodę opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Techniczne SEO strony kliniki estetycznej: widżety rezerwacji, szybkość i kopiowane opisy"),
        p("Strony klinik tracą pozycje najczęściej z tych samych powodów:"),
        li("widżety rezerwacji, osadzony Instagram i film w tle, przez które strona ładuje się na telefonie dłużej niż 2,5 sekundy"),
        li("opisy zabiegów skopiowane od producenta urządzenia, identyczne na setkach stron"),
        li("podstrony placówek różniące się tylko adresem"),
        li("brak danych strukturalnych z kliniką, lekarzami, usługami i godzinami"),
        p(
          "Jeśli strona wymaga przebudowy, a nie poprawek, opisuję to na stronie ",
          link("strona internetowa dla kliniki medycyny estetycznej", "/pl/strona-internetowa-dla-kliniki-medycyny-estetycznej"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony kliniki medycyny estetycznej"),
        li("Audyt SEO kliniki — strona, wizytówka Google, konkurencja w mieście i odpowiedzi AI: od 1000 zł jednorazowo, z kolejnością prac."),
        li("Jednorazowe prace — podstrony zabiegów i lekarzy, cennik, dane strukturalne, poprawki techniczne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony kliniki medycyny estetycznej — nowe podstrony, mapy, opinie, widoczność w AI i raporty: od 3500 zł miesięcznie; przy bardzo silnej konkurencji, na przykład w Warszawie, od 5500 zł miesięcznie."),
        p(
          "Jak pracuję nad SEO w ogóle, opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a pozycjonowanie przychodni i gabinetów lekarskich — na stronie ",
          link("pozycjonowanie strony przychodni w Warszawie", "/pl/oferty/pozycjonowanie-strony-przychodni-warszawa"),
          ". Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony kliniki medycyny estetycznej: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony kliniki medycyny estetycznej?", "Na start audyt za od 1000 zł. Wybrane prace kosztują od 1000 do 3000 zł, a stała opieka od 3500 zł na miesiąc, w miastach z bardzo silną konkurencją od 5500 zł. Gdy poznam listę zabiegów i placówek, podam kwotę bez widełek."],
          ["Czy SEO i pozycjonowanie to to samo?", "W praktyce tak. SEO to optymalizacja strony pod wyszukiwarki, a pozycjonowanie to polska nazwa całej pracy nad tym, żeby strona była wysoko w wynikach: treści, technika, mapy i linki."],
          ["Czy klinika medycyny estetycznej może się reklamować?", "Lekarz i placówka lecznicza mogą informować o usługach, a nie je reklamować, a reklama leków na receptę kierowana do pacjentów jest zakazana. Strona podaje fakty — zabiegi, kwalifikacje, ceny, godziny — bez obietnic efektu. Szczegóły warto uzgodnić z prawnikiem albo izbą lekarską."],
          ["Czy można publikować zdjęcia przed i po?", "Tylko z pisemną zgodą pacjenta na rozpowszechnianie wizerunku, w tym samym świetle i kadrze, bez retuszu. Przy zabiegach lekarskich zakres publikacji warto sprawdzić z prawnikiem, bo takie zdjęcia łatwo uznać za reklamę."],
          ["Czy wystarczą Booksy i Instagram?", "Przynoszą rezerwacje, ale na Booksy stoicie obok konkurencji, a Instagram rzadko trafia do wyników dla „zabieg + miasto”. Własna strona i wizytówka Google zbierają pacjentów, którzy szukają w wyszukiwarce i pytają asystentów AI."],
          ["Ile trwa pozycjonowanie strony kliniki medycyny estetycznej?", "Uporządkowana wizytówka i lepsze tytuły dają pierwsze efekty po kilku tygodniach. Na wynik nowej podstrony zabiegu czeka się zwykle od dwóch do czterech miesięcy, a przy wypełnianiu ust czy depilacji laserowej w dużym mieście — dłużej."],
          ["Czy pracujesz z klinikami spoza Warszawy?", "Tak, z całej Polski. Pozycjonowanie robię zdalnie: rozmowy wideo, wspólne dokumenty i jasne etapy."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony kliniki medycyny estetycznej: co mi wysłać"),
        p(
          "Wyślijcie nazwę kliniki i adres strony, linki do wizytówek Google każdej placówki oraz do Booksy albo ZnanyLekarz, zabiegi, przy których chcecie więcej pacjentów, listę lekarzy i kosmetologów oraz miejscowość. Proszę nie przesyłać danych pacjentów. W odpowiedzi dostaniecie moje priorytety dla Waszej kliniki i stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
