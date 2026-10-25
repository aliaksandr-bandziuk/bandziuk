// Landing page fixture: Pozycjonowanie stron w Rzeszowie (PL), group
// «pozycjonowanie-stron-rzeszow». City page, stage 3 pilot.
// Phrases (ref/city-keywords.md, ref/pl-cities.md; volumes/month, Poland):
// pozycjonowanie stron rzeszów 590 · pozycjonowanie stron internetowych
// rzeszów 170. Brief adds «agencja SEO Rzeszów», «audyt SEO Rzeszów»,
// «pozycjonowanie lokalne / wizytówka Google w Rzeszowie», «cennik» — not
// measured for Rzeszów, used in H2/FAQ.
// PAA (pl-cities.md): Ile kosztuje pozycjonowanie strony w 2026? Ile kosztuje
// dobre pozycjonowanie? Jak długo trwa? Czy ma sens? Kto zajmuje się
// pozycjonowaniem stron? Jak samemu pozycjonować stronę? — all in H2 or FAQ.
// Intent (ref/intent-check-pl-cities.md, rules for every city): SEO vs website
// build 0 shared URLs → separate pages; «pozycjonowanie» / «agencja SEO» /
// «audyt SEO» share 1–2 URLs → one page. Neighbouring towns have their own
// SERPs → Łańcut, Krosno, Dębica, Mielec only as the area served.
// City angle: capital of Podkarpacie; Dolina Lotnicza (aviation cluster),
// business and science parks by the airport in Jasionka, Politechnika
// Rzeszowska; proximity to the Ukrainian border → logistics and many
// Ukrainian speakers; city enlarged by former villages (Słocina, Budziwój,
// Przybyszówka) still used in queries; smaller market → od 3500 zł only.
// NOT on this page: the website build (/pl/tworzenie-stron-internetowych-rzeszow);
// wizytówka Google in depth (/pl/oferty/pozycjonowanie-lokalne); industry
// detail (/pl/pozycjonowanie-strony-firmy-produkcyjnej,
// /pl/pozycjonowanie-strony-firmy-budowlanej); Google Ads, social media,
// e-commerce (not offered).
// Owner’s rules: remote from Warsaw, no visits promised; never say there are no
// clients from the visitor’s city or industry.
import { p, h2, h3, li, link, k } from "./pt";

export const pozycjonowanieStronRzeszowPl = {
  lang: "pl",
  group: "pozycjonowanie-stron-rzeszow",
  slug: "pozycjonowanie-stron-rzeszow",
  title: "Pozycjonowanie stron w Rzeszowie",
  heading: "Pozycjonowanie stron w Rzeszowie",
  excerpt:
    "Pozycjonowanie stron w Rzeszowie dla firm z miasta i całego Podkarpacia: audyt SEO, podstrony usług i miejscowości, wizytówka Google, wersja ukraińska lub angielska i widoczność w odpowiedziach AI. Robi to jeden specjalista, zdalnie i za ceny z cennika.",
  seo: {
    metaTitle: "Pozycjonowanie stron Rzeszów od 1000 zł | Bandziuk",
    metaDescription:
      "Pozycjonowanie stron w Rzeszowie i na Podkarpaciu: audyt, nowe podstrony, Mapy Google, wersja UA, AI. Ceny w cenniku. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Jeden specjalista, jawne ceny", "Audyt od 1000 zł", "Rzeszów i Podkarpacie"],
  heroPhonePoints: ["Elektryk Rzeszów Słocina", "Zadzwoń", "Wasza firma w Mapach Google", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy z Rzeszowa: strona, wizytówka Google, konkurencja na Podkarpaciu", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony usług i miejscowości, poprawki techniczne, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie stron w Rzeszowie", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie stron w Rzeszowie",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt SEO strony i wyników z Podkarpacia", text: "Co poprawić najpierw, żeby zapytania przyszły najszybciej" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług dla Rzeszowa i okolic", text: "Łańcut, Krosno, Dębica — tam, gdzie macie realizacje" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google dla miasta i powiatu", text: "Kategorie, obszar działania, opinie i zgodne dane" },
        { _key: k("o"), iconName: "message-circle", title: "Wersja ukraińska lub angielska", text: "Dla klientów i kontrahentów, którzy szukają w swoim języku" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i podsumowaniach AI", text: "Fakty o firmie, które asystent potrafi sprawdzić" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w telefonach i zapytaniach", text: "GA4 i Search Console, z komentarzem, co dalej" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony firmy z Rzeszowa", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie stron w Rzeszowie", value: "od 3500 zł / mies.", note: "podstrony, wizytówka, AI, raporty", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony, które budowałem i pozycjonowałem",
      subtitle:
        "Firma skanowania laserowego 3D i modelowania BIM, której stronę przebudowałem w trzech językach i której ruch organiczny wzrósł 29 razy, wielojęzyczny serwis agencji edukacyjnej oraz trzy lokalne firmy z Warszawy: warsztat samochodowy, przechowalnia opon i pracownia renowacji felg. Firma z Rzeszowa znajdzie tu oba typy pracy, których zwykle potrzebuje: techniczną stronę B2B, która ma trafić do odbiorców w kraju i za granicą, oraz lokalne podstrony i wizytówki dla klientów z okolicy.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony w Rzeszowie",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw, które miejscowości Podkarpacia warto uwzględnić i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Komu sprzedajecie?", options: ["Mieszkańcom Rzeszowa i okolic", "Firmom z Podkarpacia", "Firmom z całej Polski", "Odbiorcom za granicą"] },
        { _key: k("z"), question: "Skąd dziś przychodzą zapytania?", options: ["Z poleceń", "Z Google i Map Google", "Z Oferteo i portali", "Z targów i kontaktów handlowych"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie stron w Rzeszowie prowadzę dla firm, które chcą, żeby klienci z Rzeszowa i z Podkarpacia znajdowali je w Google, w Mapach Google i w odpowiedziach ChatGPT. Jestem jednym specjalistą, a nie agencją: sprawdzam stronę, poprawiam kod, piszę podstrony, porządkuję wizytówkę i tłumaczę wyniki. Z firmami z Rzeszowa pracuję zdalnie z Warszawy, a ceny są w cenniku."),

        h2("Pozycjonowanie stron w Rzeszowie: Dolina Lotnicza, usługi i firmy z całego Podkarpacia"),
        p("Rzeszów jest stolicą Podkarpacia i miastem, które w ostatnich latach wyraźnie się rozrasta, także dzięki przyłączeniu sąsiednich miejscowości. Jego gospodarczą wizytówką jest Dolina Lotnicza: zakłady przemysłu lotniczego, ich poddostawcy, firmy obróbki i serwisu, a obok nich Politechnika Rzeszowska, która kształci inżynierów i pilotów. Przy lotnisku w Jasionce powstały parki przemysłowe i technologiczne, a bliskość granicy z Ukrainą sprawiła, że miasto stało się ważnym węzłem transportu i logistyki."),
        p("Z tego wynikają grupy firm, które w Rzeszowie najczęściej potrzebują pozycjonowania:"),
        li("poddostawcy przemysłu i zakłady produkcyjne, które szukają odbiorców w Polsce i za granicą"),
        li("firmy transportowe, spedycyjne i magazynowe"),
        li("budownictwo, wykończenia i instalacje na nowych osiedlach, które powstają na obrzeżach miasta"),
        li("gabinety, warsztaty, szkoły i usługi dla mieszkańców Rzeszowa i okolicznych gmin"),
        li("biura rachunkowe, kancelarie i firmy szkoleniowe obsługujące przedsiębiorców z regionu"),
        p("Te grupy szukają klientów zupełnie inaczej. Ekipa wykończeniowa zbiera telefony od mieszkańców nowych bloków, którzy właśnie odebrali klucze, a poddostawca przemysłu czeka na jedno zapytanie ofertowe od inżyniera z innego kraju. Dlatego zanim zaplanuję podstrony, ustalam, do której grupy należycie i kogo naprawdę chcecie przyciągnąć."),

        h2("Jak szukają klienci w Rzeszowie: osiedla, Łańcut, Krosno, Dębica i frazy z Podkarpaciem"),
        p("Rzeszów w ostatnich latach przyłączył kilka sąsiednich miejscowości. Ludzie z dawnych wsi, jak Słocina, Budziwój czy Przybyszówka, wciąż często wpisują w Google nazwę swojego osiedla, a nie „Rzeszów”. Podobnie jest z Baranówką, Nowym Miastem czy Drabinianką. Firma, która na stronie i w realizacjach podaje konkretne osiedla, łatwiej trafia do tych wyszukiwań."),
        p("Klienci z regionu szukają z kolei w swoich miastach: Łańcucie, Krośnie, Dębicy, Mielcu, Jaśle czy Przemyślu. Każde z nich ma osobne wyniki wyszukiwania. Część firm z Rzeszowa korzysta też z fraz regionalnych, np. „Podkarpacie” albo „podkarpackie”, które wpisują zwłaszcza klienci biznesowi. Plan zakłada więc główną podstronę dla Rzeszowa i podstrony kilku miast, w których naprawdę pracujecie, z realizacjami i warunkami dojazdu."),

        h2("Wyszukiwania po ukraińsku i angielsku w Rzeszowie"),
        p("W Rzeszowie mieszka i pracuje wiele osób z Ukrainy, a firmy z regionu prowadzą z Ukrainą handel i przewozy. Duża część tych osób szuka usług po ukraińsku: lekarza, mechanika, biura rachunkowego, kursu prawa jazdy, mieszkania. Konkurencja w takich wynikach jest zwykle wyraźnie mniejsza niż po polsku. Z kolei poddostawcy przemysłu lotniczego i firmy logistyczne potrzebują widoczności po angielsku, bo tak szukają ich kupcy z zagranicy. Pozycjonowanie wersji językowej opłaca się wtedy, gdy podstrona jest napisana dla tej osoby i ma właściwe oznaczenia dla Google."),
        p("W praktyce sprawdzam trzy rzeczy: czy wersja ukraińska lub angielska ma własne adresy i oznaczenia hreflang, czy wizytówka Google informuje o językach obsługi i czy na podstronie jest odpowiedź na pytania, które cudzoziemiec zadaje najczęściej — o dokumenty, płatność, termin i to, czy ktoś odbierze telefon w jego języku."),

        h2("Agencja SEO w Rzeszowie czy jeden specjalista: kto zajmuje się pozycjonowaniem"),
        p("Na „pozycjonowanie stron Rzeszów” wysoko są lokalne firmy i studia z Podkarpacia, ogólnopolskie agencje z podstroną dla Rzeszowa, pojedynczy specjaliści SEO i portal Oferteo. Lokalnych wykonawców jest mniej niż w Krakowie czy we Wrocławiu, ale konkurencja w samych branżach bywa zacięta, bo o tych samych klientów walczą firmy z Rzeszowa i z sąsiednich powiatów."),
        h3("Co zyskujecie, pracując z jednym specjalistą"),
        li("rozmawiacie z osobą, która sama robi audyt, zmienia kod i pisze podstrony"),
        li("budżet idzie na pracę, a nie na opiekuna klienta i dział sprzedaży"),
        li("cenę znacie z cennika, zanim zadzwonicie"),
        p("W marketingu internetowym pracuję od ponad 15 lat. Kampanie reklamowe i profile w mediach społecznościowych zostawiam innym. Z Rzeszowem współpracuję online: rozmowa wideo, wspólny dokument z zadaniami i dostęp do Search Console oraz panelu strony. Wizyt na miejscu ta praca nie wymaga."),

        h2("Audyt SEO w Rzeszowie: od czego zaczynam pozycjonowanie strony"),
        p("Audyt pokazuje, co dziś blokuje stronę i gdzie są najszybsze zyski. Dla firmy z Rzeszowa sprawdzam:"),
        li("indeksowanie, błędy, szybkość na telefonie i powielone podstrony"),
        li("które usługi i miejscowości nie mają własnych podstron"),
        li("co mówi Google Search Console: frazy na drugiej stronie wyników, które da się szybko podnieść"),
        li("kto jest w pierwszej dziesiątce w Rzeszowie i w miastach, z których przychodzą klienci"),
        p(
          "Lista zmian jest ułożona według spodziewanego efektu i można ją wdrożyć samodzielnie albo zlecić mnie. Zakres opisuję na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Pozycjonowanie lokalne w Rzeszowie: wizytówka Google dla miasta i powiatu"),
        p("Dla wielu firm z Rzeszowa najszybszym źródłem telefonów są Mapy Google. Wizytówka działa najlepiej, gdy:"),
        li("ma kategorię główną zgodną z usługą, na której zarabiacie najwięcej"),
        li("pokazuje obszar działania, jeśli dojeżdżacie do klienta, np. do powiatu rzeszowskiego i łańcuckiego"),
        li("ma aktualne zdjęcia, usługi z opisami i regularnie nowe opinie z odpowiedziami"),
        li("podaje te same dane co strona i katalogi firm"),
        p(
          "Poza ścisłym centrum konkurencja w Mapach bywa niewielka, więc porządnie prowadzona wizytówka szybko robi różnicę. Więcej o tym na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie strony firmy produkcyjnej i poddostawcy przemysłu z Rzeszowa"),
        p("Poddostawca przemysłu lotniczego czy zakład obróbki nie potrzebuje tysięcy wejść. Potrzebuje kilku trafnych zapytań od działów zakupów i inżynierów. Pozycjonowanie takiej strony opiera się na podstronach dla procesów, materiałów i branż, opisie parku maszynowego i certyfikatów, kartach technicznych i wersji angielskiej. Frazy mają małe liczby wyszukiwań, ale każde zapytanie może oznaczać długą współpracę."),
        p(
          "Szczegóły opisuję na stronie ",
          link("pozycjonowanie strony firmy produkcyjnej", "/pl/pozycjonowanie-strony-firmy-produkcyjnej"),
          ". Dla wykonawców budowlanych z regionu przygotowałem osobny opis: ",
          link("pozycjonowanie strony firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej"),
          ".",
        ),

        h2("Pozycjonowanie stron w Rzeszowie w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Klienci pytają asystentów AI: „kto w Rzeszowie robi obróbkę CNC na małe serie”, „dobry ortopeda w Rzeszowie, który mówi po ukraińsku”. ChatGPT, Perplexity i podsumowania AI w Google polecają firmy, o których mogą przeczytać sprawdzalne informacje. Tę pracę nazywa się GEO albo AEO i u mnie jest częścią pozycjonowania:"),
        li("usługi, miejscowości, języki obsługi i widełki cen zapisane prostymi zdaniami"),
        li("dane strukturalne zgodne z wizytówką Google"),
        li("identyczna nazwa, adres i telefon w każdym miejscu, w którym firma występuje w sieci"),
        p(
          "Sprawdzam, co asystenci mówią o Waszej firmie przed startem i po zmianach. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak samemu pozycjonować stronę firmy w Rzeszowie"),
        p("Kilka kroków każda firma zrobi sama:"),
        li("tytuły podstron z usługą i miejscem, np. „Montaż fotowoltaiki — Rzeszów i powiat łańcucki”"),
        li("pełna wizytówka Google i prośba o opinię po każdym zleceniu"),
        li("lista osiedli i miejscowości, w których pracujecie, wpisana tekstem na stronie"),
        li("Google Search Console i comiesięczny przegląd fraz"),
        p("Zlecić warto technikę, przeniesienie strony na nowy system i wersje językowe — tam błąd łatwo popełnić, a trudno go zauważyć, zanim spadnie ruch."),

        h2("Jak długo trwa pozycjonowanie stron internetowych w Rzeszowie i czy ma sens"),
        p("Wizytówka i poprawki techniczne działają po kilku tygodniach. Nowe podstrony potrzebują zwykle dwóch–czterech miesięcy; w Rzeszowie, gdzie konkurencja jest mniejsza niż w największych miastach, w wielu branżach bywa to szybciej. Pozycjonowanie stron internetowych w Rzeszowie ma sens, gdy klienci szukają Waszej usługi w Google i możecie przyjąć więcej zleceń. W raporcie pokazuję telefony i zapytania, a pozycje fraz tylko obok."),
        p("Warto też zacząć z wyprzedzeniem przed sezonem. Firma budowlana czy montażysta fotowoltaiki z Rzeszowa, która opublikuje nowe podstrony zimą, ma szansę być wysoko, gdy wiosną ruszą zapytania. Dostawca dla przemysłu liczy efekty dłużej, bo jedno zapytanie ofertowe przechodzi przez kilka tygodni rozmów, zanim zamieni się w zamówienie."),

        h2("Pozycjonowanie stron Rzeszów: cennik na 2026"),
        li("Audyt SEO strony, wizytówki i konkurencji: od 1000 zł jednorazowo."),
        li("Jednorazowe prace — podstrony, wersje językowe, dane strukturalne, poprawki: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie: od 3500 zł miesięcznie."),
        p(
          "Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Gdy obecna strona nie nadaje się do pozycjonowania, opis budowy nowej znajdziecie na stronie ",
          link("tworzenie stron internetowych w Rzeszowie", "/pl/tworzenie-stron-internetowych-rzeszow"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie stron w Rzeszowie: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony w Rzeszowie w 2026?", "Audyt to wydatek od 1000 zł, pojedyncze prace od 1000 do 3000 zł, stała praca od 3500 zł miesięcznie. Dokładną kwotę podam, gdy opiszecie firmę i jej rynek."],
          ["Jak długo trwa pozycjonowanie strony w Rzeszowie?", "Efekty wizytówki i poprawek technicznych widać po kilku tygodniach, nowych podstron zwykle po dwóch–czterech miesiącach. W wielu branżach w Rzeszowie trwa to krócej niż w największych miastach."],
          ["Czy pozycjonowanie stron ma sens w Rzeszowie?", "Tak. Konkurencja jest zwykle słabsza niż w największych miastach, więc porządna strona i wizytówka szybciej trafiają wysoko. Małej firmie czasem wystarczą audyt i jednorazowe prace."],
          ["Jak samemu pozycjonować stronę?", "Podstrona dla każdej usługi z miejscem w tytule, pełna wizytówka Google, opinie klientów i Google Search Console to dobry początek. Technikę i strukturę strony warto zlecić."],
          ["Agencja SEO w Rzeszowie czy jeden specjalista?", "Agencja ma sens, gdy razem z SEO kupujecie reklamę i social media. Specjalista, który sam wykonuje całą pracę, wystarczy, gdy chodzi o widoczność w Google i AI."],
          ["Czy zajmujesz się wizytówką w Mapach Google?", "Tak: kategorie, usługi, obszar działania, zdjęcia, opinie i zgodność danych ze stroną. W Rzeszowie i okolicy często to pierwsze źródło telefonów."],
          ["Czy pozycjonujesz strony firm z Rzeszowa zdalnie?", "Tak. Pracuję z Warszawy, a z firmami z Rzeszowa współpracuję online: rozmowa wideo, wspólny dokument i dostęp do danych strony."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony w Rzeszowie: co mi wysłać"),
        p(
          "Wyślijcie link do strony i do wizytówki w Mapach Google, usługi, przy których chcecie więcej klientów, osiedla i miejscowości Podkarpacia, w których pracujecie, oraz języki, w których obsługujecie klientów. Odpowiem, co zrobiłbym najpierw i ile to kosztuje. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
