// Landing page fixture: Pozycjonowanie stron w Poznaniu (PL), group
// «pozycjonowanie-stron-poznan». City page, stage 3 pilot (BRIEF.md).
// Phrases (ref/city-keywords.md, ref/pl-cities.md, volumes/month, Poland):
// pozycjonowanie stron poznań 880 · pozycjonowanie stron internetowych poznań
// 480 · agencja seo poznań 480 · pozycjonowanie stron www poznań 320 · poznań
// pozycjonowanie stron 140 · pozycjonowanie stron poznań cennik 40. Not
// measured but required by the brief: audyt SEO Poznań, pozycjonowanie lokalne /
// wizytówka Google w Poznaniu. PAA: Ile kosztuje pozycjonowanie strony w 2026?
// Ile kosztuje dobre pozycjonowanie strony? Jak długo trwa pozycjonowanie
// strony? Czy pozycjonowanie stron ma sens? Kto zajmuje się pozycjonowaniem
// stron? Jak samemu pozycjonować stronę? (H2 or FAQ).
// Intent (ref/intent-check-pl-cities.md): «pozycjonowanie stron poznań» vs
// «tworzenie stron internetowych poznań» 0 of 10 shared URLs → two pages. The
// SEO SERP mixes national agencies with city pages, local studios and
// individual specialists with personal sites → the page explains why one
// specialist may suit a Poznań company. Big, competitive city → stałe
// pozycjonowanie od 3500 zł, w konkurencyjnych branżach od 5500 zł.
// City part: Międzynarodowe Targi Poznańskie, logistics along the A2, trade and
// production around the city; districts and gminy (Jeżyce, Wilda, Rataje,
// Swarzędz, Luboń, Tarnowo Podgórne), Wielkopolska towns (Gniezno, Ostrów
// Wielkopolski, Leszno, Konin); German partners, international students,
// Ukrainian speakers.
// NOT on this page: the website build (/pl/tworzenie-stron-internetowych-poznan);
// wizytówka Google in depth (/pl/oferty/pozycjonowanie-lokalne); e-commerce and
// sklepy internetowe (not offered); Google Ads and social media (not offered);
// Warsaw pages.
import { p, h2, h3, li, link, k } from "./pt";

export const pozycjonowanieStronPoznanPl = {
  lang: "pl",
  group: "pozycjonowanie-stron-poznan",
  slug: "pozycjonowanie-stron-poznan",
  title: "Pozycjonowanie stron Poznań",
  heading: "Pozycjonowanie stron w Poznaniu",
  excerpt:
    "Pozycjonowanie stron w Poznaniu dla firm usługowych, handlowych i produkcyjnych z miasta i okolic: audyt, poprawki w kodzie, podstrony pod frazy z dzielnicami i gminami, wizytówka Google i widoczność w odpowiedziach AI — robi to jeden specjalista, zdalnie, za ceny podane w cenniku.",
  seo: {
    metaTitle: "Pozycjonowanie stron Poznań: audyt od 1000 zł | Bandziuk",
    metaDescription:
      "Pozycjonowanie stron internetowych w Poznaniu: audyt, podstrony usług, wizytówka Google i widoczność w AI. Jeden specjalista, jawne ceny, audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Jeden specjalista od audytu do wdrożenia", "Audyt od 1000 zł", "Firmy z Poznania i Wielkopolski"],
  heroPhonePoints: ["Hydraulik Poznań Rataje", "Wasza firma w Mapach Google", "Zadzwoń", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy z Poznania: strona, wizytówka Google, lokalna konkurencja", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: poprawki techniczne, podstrony usług i miejscowości, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony internetowej firmy z Poznania", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie stron w Poznaniu",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt strony na tle poznańskiej konkurencji", text: "Co blokuje stronę i które frazy są realne do zdobycia" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług z dzielnicą lub gminą", text: "Jeżyce, Rataje, Swarzędz, Luboń — tam, gdzie pracujecie" },
        { _key: k("o"), iconName: "gauge", title: "Poprawki w kodzie bez pośredników", text: "Szybkość, indeksowanie, tytuły — robi je ta sama osoba" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google zgodna ze stroną", text: "Kategoria, obszar działania i link do właściwej podstrony" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w telefonach i zapytaniach", text: "Co przyniosła wyszukiwarka, a nie tylko pozycje fraz" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony w Poznaniu", value: "od 3500 zł / mies.", note: "w konkurencyjnych branżach od 5500 zł", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony firm, które budowałem i pozycjonowałem",
      subtitle:
        "Firmy lokalne, głównie z Warszawy — warsztat samochodowy, pracownia renowacji felg, firma remontowo-inwestycyjna — oraz firma skanowania laserowego 3D i BIM, której ruch organiczny wzrósł 29 razy, i wielojęzyczny serwis agencji edukacyjnej. Z firmą z Poznania łączy je to, że klient wpisuje usługę i miejsce, a strona ma na to odpowiedzieć lepiej niż konkurencja z tego samego miasta.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony w Poznaniu",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie i w wizytówce Google, i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Gdzie są Wasi klienci?", options: ["Poznań", "Poznań i gminy wokół miasta", "Cała Wielkopolska", "Cała Polska lub zagranica"] },
        { _key: k("z"), question: "Czy macie teraz umowę z agencją SEO?", options: ["Tak, trwa", "Tak, kończy się", "Nie", "Kiedyś tak"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie stron w Poznaniu to moja usługa dla firm, które chcą, żeby klienci z miasta i z Wielkopolski znajdowali je w Google, w Mapach i w odpowiedziach asystentów AI. Pracuję z Warszawy, a z firmami z Poznania współpracuję online: rozmowa wideo na start, wspólny dokument z listą zadań i raport co miesiąc. Audyt, poprawki w kodzie, nowe podstrony i wizytówkę robię sam, więc nie płacicie za warstwę pośredników."),

        h2("Pozycjonowanie stron internetowych w Poznaniu: targi, logistyka, handel i usługi"),
        p("Poznań od dawna żyje z handlu. Międzynarodowe Targi Poznańskie co roku ściągają wystawców i gości z całej Polski i zza granicy, przy autostradzie A2 wyrosły centra logistyczne i magazyny, a w gminach wokół miasta działa dużo firm produkcyjnych i hurtowni. Do tego dochodzą tysiące firm usługowych, które obsługują mieszkańców: gabinety, warsztaty, biura rachunkowe, ekipy remontowe, szkoły językowe."),
        p("Dla pozycjonowania to oznacza dwa różne rodzaje wyszukiwań. Firmy B2B — producent, przewoźnik, hurtownia — są szukane po nazwie produktu albo usługi, często bez miasta, a klient porównuje oferty tygodniami. Firmy usługowe są szukane z nazwą miasta albo dzielnicy i zwykle wygrywa ta, która jest w Mapach i ma na stronie konkretną odpowiedź. Strategię układam inaczej dla każdej z tych grup, zamiast stosować jeden pakiet."),
        h3("Pozycjonowanie strony firmy B2B z Poznania: producenci, hurtownie, logistyka"),
        p("Firma, która wystawia się na targach, dostaje po nich wizyty na stronie od osób, które zebrały kilkadziesiąt katalogów i porównują dostawców. Wygrywa ta, która ma osobną podstronę dla każdej grupy produktów albo usług, parametry zapisane tekstem, a nie tylko w PDF-ie, wersję angielską lub niemiecką i wyraźny kontakt do handlowca. Te same podstrony potem pracują w Google przez cały rok, także między targami. Przy firmach logistycznych i magazynowych podobną rolę pełnią podstrony usług — magazynowanie, kompletacja zamówień, transport krajowy i międzynarodowy — z opisem, dla kogo są i jak wygląda wycena."),

        h2("Jak klienci szukają firm w Poznaniu: dzielnice, gminy ościenne i Wielkopolska"),
        p("Mieszkańcy Poznania często dopisują do frazy dzielnicę: „fizjoterapeuta Jeżyce”, „mechanik Rataje”, „przedszkole Winogrady”, „księgowa Wilda”. Spora część klientów mieszka jednak poza granicami miasta, w Swarzędzu, Luboniu, Suchym Lesie, Komornikach czy Tarnowie Podgórnym, i wpisuje nazwę swojej gminy. Firmy, które obsługują cały region, dostają też zapytania z Gniezna, Ostrowa Wielkopolskiego, Leszna i Konina."),
        p("Do tego dochodzą wyszukiwania w innych językach: studenci z zagranicy szukają usług po angielsku, pracownicy z Ukrainy po ukraińsku, a partnerzy handlowi z Niemiec, którzy poznali firmę na targach, sprawdzają ją po niemiecku. Przed planowaniem podstron sprawdzam w danych, które z tych wariantów naprawdę są wpisywane w Waszej branży, i tylko pod nie tworzę treści."),

        h2("Kto jest wysoko na „pozycjonowanie stron www Poznań” i co z tego wynika"),
        p("Na frazy o pozycjonowaniu w Poznaniu wyświetlają się trzy rodzaje wykonawców: ogólnopolskie agencje z podstroną dla Poznania, lokalne studia, które robią strony i SEO, oraz pojedynczy specjaliści z własnymi stronami. Obok nich pojawia się Oferteo, gdzie zostawiacie zapytanie i dostajecie kilka ofert. Każda z tych dróg ma sens, ale warto wiedzieć, kto będzie faktycznie pracował nad stroną."),
        p("W Waszej branży będzie podobnie: o klienta walczą lokalne firmy, sieci z oddziałami i portale z ogłoszeniami. Pozycjonowanie w Poznaniu zaczynam więc od sprawdzenia, kto jest dziś w pierwszej dziesiątce na Wasze frazy i w Mapach, z jaką treścią i jak mocną stroną."),

        h2("Agencja SEO w Poznaniu czy jeden specjalista: kto zajmuje się pozycjonowaniem stron"),
        p("Agencja SEO ma handlowca, opiekuna klienta, specjalistów i copywriterów. To dobry wybór, gdy firma potrzebuje naraz SEO, kampanii reklamowych i mediów społecznościowych. Gdy potrzebne jest tylko pozycjonowanie, część budżetu idzie na samą strukturę, a decyzje przechodzą przez kilka osób."),
        p("U mnie jedna osoba sprawdza dane, pisze lub poprawia podstrony, zmienia kod w WordPressie, Next.js albo innym systemie i tłumaczy raport. Ceny są opublikowane, umowa nie wiąże na rok, a o każdej zmianie wiecie, zanim ją wdrożę. Nie prowadzę kampanii Google Ads ani mediów społecznościowych i nie robię sklepów internetowych."),

        h2("Audyt SEO w Poznaniu: od czego zaczyna się pozycjonowanie strony"),
        p("Każda współpraca zaczyna się od audytu. Sprawdzam w nim:"),
        li("czy Google indeksuje wszystkie ważne podstrony i czy nie ma powielonych tytułów albo błędów"),
        li("jak szybko strona ładuje się na telefonie, bo w ten sposób szuka większość klientów usług"),
        li("które frazy już dają wejścia w Google Search Console i których usług brakuje na stronie"),
        li("czy wizytówka Google i dane w katalogach zgadzają się ze stroną"),
        li("czym wygrywają konkurenci z Poznania i okolic na Wasze najważniejsze frazy"),
        p(
          "Wynik to lista poprawek ułożona według wpływu na liczbę zapytań. Część firm wdraża ją sama, część zleca mnie. Zakres opisuję na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Pozycjonowanie lokalne w Poznaniu: wizytówka Google i Mapy"),
        p("O tym, kogo Google pokaże w Mapach, decyduje trafność wizytówki, odległość od osoby szukającej i rozpoznawalność firmy. W dużym mieście odległość ma ogromne znaczenie: gabinet na Łazarzu rzadko pojawi się w Mapach komuś na Piątkowie. Dlatego firmy, które dojeżdżają do klienta, ustawiają obszar działania i mają podstrony dla dzielnic i gmin, a firmy z lokalem walczą przede wszystkim o swoją okolicę."),
        h3("Co porządkuję w wizytówce firmy z Poznania"),
        li("kategorię główną i dodatkowe zgodne z tym, co naprawdę sprzedajecie"),
        li("usługi, godziny, zdjęcia i link do podstrony, która opisuje daną usługę"),
        li("te same dane firmy na stronie, w wizytówce i w katalogach branżowych"),
        p(
          "Całą pracę nad Mapami, w tym opinie i obszar działania, opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie stron w Poznaniu w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz więcej osób pyta ChatGPT, Perplexity albo podsumowania AI w Google, gdzie w Poznaniu znaleźć dobrego stomatologa, firmę przeprowadzkową albo producenta opakowań. Asystent poleca firmy, o których może przeczytać konkretne fakty. Pracę nad tym nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization) i wykonuję ją w ramach tego samego pozycjonowania:"),
        li("usługi, obszar działania, godziny i ceny zapisane zwykłymi zdaniami, które da się zacytować"),
        li("dane strukturalne łączące stronę z wizytówką Google"),
        li("odpowiedzi na pytania, które klienci zadają przez telefon"),
        p(
          "Przed pracą i po niej sprawdzam, jak asystenci opisują Waszą firmę. Szczegóły na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Czy pozycjonowanie stron w Poznaniu ma sens i jak długo trwa"),
        p("Ma sens, gdy klienci szukają Waszej usługi w Google, a tak jest w większości branż usługowych i B2B. Poprawki techniczne i zmiany w wizytówce potrafią dać efekt w kilka tygodni. Nowa podstrona usługi w Poznaniu zwykle potrzebuje od trzech do sześciu miesięcy, bo konkurencja jest tu większa niż w mniejszych miastach Wielkopolski. Najszybciej rosną frazy z dzielnicą albo gminą, wolniej ogólne, takie jak sama usługa z nazwą miasta."),
        p("W raporcie liczę telefony, wiadomości z formularza i zapytania z wyszukiwarki, mierzone w GA4 i Google Search Console. Pozycje fraz są obok tych liczb, nie zamiast nich."),

        h2("Jak samemu pozycjonować stronę firmy z Poznania"),
        p("Sporo da się zrobić bez wydatków: dać każdej usłudze osobną podstronę z miastem lub dzielnicą w tytule, napisać na stronie ceny albo widełki, poprosić zadowolonych klientów o opinię w Google i odpowiadać na każdą, podłączyć Google Search Console. Zlecić warto przebudowę strony, problemy techniczne i branże, w których poznańscy konkurenci od lat mają mocne strony."),

        h2("Pozycjonowanie stron Poznań: cennik i ile kosztuje dobre pozycjonowanie w 2026"),
        li("Audyt SEO strony, wizytówki i konkurencji z Poznania: od 1000 zł jednorazowo."),
        li("Jednorazowe prace — poprawki techniczne, podstrony usług i miejscowości, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony: od 3500 zł miesięcznie, a w branżach z silną konkurencją w Poznaniu od 5500 zł miesięcznie."),
        p(
          "Ceny są opublikowane w ",
          link("cenniku", "/pl/cennik"),
          ". Firmy produkcyjne i hurtownie znajdą więcej na stronie ",
          link("pozycjonowanie strony firmy produkcyjnej", "/pl/pozycjonowanie-strony-firmy-produkcyjnej"),
          ", a firmy remontowe i budowlane z okolic Poznania — na stronie ",
          link("pozycjonowanie strony firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej"),
          ". Jeśli stronę trzeba najpierw zbudować od nowa, zajrzyjcie na stronę ",
          link("tworzenie stron internetowych w Poznaniu", "/pl/tworzenie-stron-internetowych-poznan"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie stron w Poznaniu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony w Poznaniu w 2026?", "Stałe pozycjonowanie kosztuje od 3500 zł miesięcznie, a w branżach z silną konkurencją od 5500 zł. Audyt to od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł. Po krótkim opisie firmy podaję stałą cenę."],
          ["Jak długo trwa pozycjonowanie strony w Poznaniu?", "Zmiany w wizytówce i poprawki techniczne działają często po kilku tygodniach. Nowe podstrony usług potrzebują zwykle od trzech do sześciu miesięcy, frazy z dzielnicą lub gminą rosną szybciej niż ogólne."],
          ["Czy pozycjonowanie stron ma sens dla małej firmy z Poznania?", "Tak, jeśli klienci szukają Waszej usługi w Google. Często wystarczą audyt i jednorazowe poprawki, bez stałej umowy — tak też to wyceniam."],
          ["Kto zajmuje się pozycjonowaniem stron w Poznaniu?", "Agencje SEO, lokalne studia, ogólnopolskie firmy z podstroną dla Poznania i pojedynczy specjaliści. Ja pracuję sam: ta sama osoba robi audyt, wdraża poprawki i odpowiada za raport."],
          ["Jak samemu pozycjonować stronę?", "Osobna podstrona dla każdej usługi z miastem w tytule, ceny zapisane tekstem, opinie w Google i Google Search Console to dobry, bezpłatny początek. Technikę i strukturę strony zwykle warto zlecić."],
          ["Jak pojawić się w Mapach Google w Poznaniu i okolicach?", "Potrzebna jest wizytówka z trafną kategorią, usługami i obszarem działania, zgodna ze stroną, oraz regularne opinie. Firmy ze Swarzędza, Lubonia czy Suchego Lasu walczą o swoją gminę, nie o całe miasto."],
          ["Czy firma z Poznania może współpracować ze specjalistą z Warszawy?", "Tak. Cała praca toczy się online: rozmowa wideo, wspólny dokument z zadaniami, dostęp do strony i comiesięczny raport. Dane wyszukiwań i konkurencję sprawdzam dla Poznania, nie dla Warszawy."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony w Poznaniu: co mi wysłać"),
        p(
          "Wyślijcie link do strony i do wizytówki w Mapach Google, usługi, przy których chcecie więcej klientów, dzielnice lub gminy, w których pracujecie, i informację, czy macie teraz umowę z agencją. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
