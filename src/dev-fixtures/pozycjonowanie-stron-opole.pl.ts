// Landing page fixture: Pozycjonowanie stron w Opolu (PL), group
// «pozycjonowanie-stron-opole». City landing, stage 3 pilot, PL only.
// Phrases (ref/city-keywords.md, ref/pl-cities.md; volumes/month, Poland):
// pozycjonowanie stron opole 480 · pozycjonowanie stron www opole 170 ·
// agencja marketingowa opole 170 · opole pozycjonowanie stron 90.
// «pozycjonowanie stron internetowych opole», «agencja SEO opole», «audyt SEO
// opole», «cennik» — no measured volume for Opole, carried in H2/FAQ per
// BRIEF.md. «social media opole» 30 — off topic (not offered).
// PAA (pl-cities): Ile kosztuje pozycjonowanie strony w 2026? Ile kosztuje
// dobre pozycjonowanie strony? Jak długo trwa pozycjonowanie strony? Czy
// pozycjonowanie stron ma sens? Kto zajmuje się pozycjonowaniem stron? Jak
// samemu pozycjonować stronę? — all in H2 or FAQ.
// Intent (ref/intent-check-pl-cities.md; measured for Poznań, Kraków, Wrocław,
// Katowice, Łódź, pattern applied to Opole): SEO vs websites 0 shared URLs →
// two pages; pozycjonowanie / agencja SEO / audyt SEO share 1–2 URLs → one
// page; local SERPs fragmented: local studios, individual SEO specialists with
// city pages, national agencies with city pages (and firms from Wrocław and
// Katowice), Oferteo. Neighbouring cities have separate SERPs → Brzeg, Nysa,
// Kędzierzyn-Koźle, Krapkowice appear only as the area firms serve.
// City part (≥ ⅓ of guide): smaller regional capital → less competition, lower
// volumes, plan for the whole region; universities, offices, hospitals;
// building-materials and cement industry, chemistry in Kędzierzyn-Koźle,
// energy, construction and transport firms; German minority and bilingual
// gminas → German-language SEO (incl. «Oppeln»); osiedla Zaodrze, Malinka,
// Kolonia Gosławicka, Nowa Wieś Królewska, Grudzice.
// NOT on this page: the website build and the German site version as a build
// (/pl/tworzenie-stron-internetowych-opole); wizytówka Google in depth
// (/pl/oferty/pozycjonowanie-lokalne); Google Ads, social media (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there are
// no clients from the visitor’s city or industry; remote work from Warsaw, no
// promise of visits; prices for a smaller city: stałe od 3500 zł.
import { p, h2, li, link, k } from "./pt";

export const pozycjonowanieStronOpolePl = {
  lang: "pl",
  group: "pozycjonowanie-stron-opole",
  slug: "pozycjonowanie-stron-opole",
  title: "Pozycjonowanie stron w Opolu",
  heading: "Pozycjonowanie stron w Opolu",
  excerpt:
    "Pozycjonowanie stron w Opolu i na całej Opolszczyźnie: audyt, poprawki techniczne, podstrony usług i miejscowości, wizytówka Google, wersja niemiecka dla klientów z Niemiec i widoczność w odpowiedziach AI — jeden specjalista, online, z cenami w cenniku.",
  seo: {
    metaTitle: "SEO Opole: pozycjonowanie stron www od 1000 zł | Bandziuk",
    metaDescription:
      "Pozycjonowanie stron www w Opolu i regionie: audyt, podstrony usług, wizytówka Google, SEO po niemiecku i widoczność w AI. Jawne ceny, audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Jeden specjalista, nie agencja", "Audyt od 1000 zł", "SEO po polsku i niemiecku"],
  heroPhonePoints: ["Hydraulik Opole Zaodrze", "Mapy Google", "Deutsch · Polski", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy z Opola: strona, wizytówka Google, konkurencja w regionie", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: poprawki techniczne, podstrony usług i miejscowości, niemiecka wersja podstron", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie stron internetowych w Opolu", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie stron w Opolu",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt strony i Map Google w Opolu", text: "Lista poprawek ułożona według wpływu" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google i obszar działania", text: "Opole, Brzeg, Nysa, Krapkowice — tam, gdzie jeździcie" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług i miejscowości", text: "Każda pisana osobno, bez kopii z podmienionym miastem" },
        { _key: k("o"), iconName: "message-circle", title: "Wersja niemiecka z własnymi frazami", text: "Dla klientów, którzy szukają po niemiecku" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity, podsumowania AI w Google" },
        { _key: k("o"), iconName: "gauge", title: "Poprawki techniczne w kodzie", text: "Szybkość, indeksowanie, przekierowania" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO w Opolu", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie stron w Opolu", value: "od 3500 zł / mies.", note: "podstrony, wizytówka, wersja DE, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony, które budowałem i pozycjonowałem",
      subtitle:
        "Firma skanowania laserowego 3D i modelowania BIM, której strona działa po angielsku, polsku i niemiecku, a ruch organiczny wzrósł 29 razy, oraz warszawskie firmy lokalne: przechowalnia opon, firma remontowo-inwestycyjna, warsztat samochodowy i pracownia renowacji felg. Dla firmy z Opola to przykłady dwóch rzeczy: SEO strony z wersją niemiecką i pozycjonowania usług, które klienci wpisują razem z nazwą miasta.",
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
      title: "Wycena pozycjonowania strony w Opolu",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie, w wizytówce i w wersji niemieckiej, i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Gdzie są Wasi klienci?", options: ["W Opolu", "W Opolu i okolicy", "W całym województwie", "W Polsce i w Niemczech"] },
        { _key: k("z"), question: "Czy macie klientów niemieckojęzycznych?", options: ["Tak, wielu", "Kilku", "Nie, ale chcemy", "Nie"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie stron w Opolu prowadzę dla firm z Opola i całej Opolszczyzny: audyt, poprawki techniczne, podstrony usług, wizytówka Google, a gdy firma ma klientów niemieckojęzycznych — także pozycjonowanie wersji niemieckiej. Jestem jednym specjalistą, nie agencją: tę samą osobę pytacie o plan i ta sama osoba zmienia kod. Pracuję z Warszawy, a z opolskimi firmami współpracuję online, w jasno opisanych etapach."),

        h2("Pozycjonowanie stron www w Opolu: co robię dla opolskich firm"),
        p("Zakres zależy od tego, co pokaże audyt, ale zwykle składa się z tych zadań:"),
        li("uporządkowanie strony od strony technicznej: indeksowanie, szybkość na telefonie, tytuły, przekierowania"),
        li("podstrony usług i miejscowości, na które opłaca się pozycjonować w regionie"),
        li("wizytówka Google zgodna ze stroną i z katalogami firm"),
        li("wersja niemiecka z frazami sprawdzonymi w niemieckich danych wyszukiwań, jeśli macie takich klientów"),
        li("widoczność w ChatGPT, Perplexity i podsumowaniach AI w Google"),
        li("miesięczny raport z telefonów, formularzy i zapytań"),

        h2("Rynek w Opolu: mniejsze miasto, mniejsza konkurencja w Google"),
        p("Opole to jedno z mniejszych miast wojewódzkich: stolica regionu z Uniwersytetem Opolskim i Politechniką Opolską, urzędami, szpitalami i firmami, które obsługują całe województwo. Opolszczyzna to też przemysł — materiały budowlane i cement, chemia w Kędzierzynie-Koźlu, energetyka — a wokół niego wiele firm budowlanych, instalacyjnych, transportowych i rzemieślniczych."),
        p("Mniejszy rynek oznacza mniej firm walczących o te same frazy. W wielu branżach w Opolu kilka dobrze napisanych podstron i zadbana wizytówka wystarczają, żeby być na pierwszej stronie wyników, podczas gdy we Wrocławiu ta sama praca dałaby dopiero start. Druga strona medalu: wyszukiwań jest mniej, więc plan trzeba układać pod frazy, które naprawdę przyprowadzają klientów, i często pokryć cały region, zamiast walczyć o jedną ogólną frazę z nazwą miasta."),
        p(
          "Dla branż ważnych w regionie mam osobne opisy: ",
          link("pozycjonowanie strony firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej"),
          " i ",
          link("pozycjonowanie strony firmy produkcyjnej", "/pl/pozycjonowanie-strony-firmy-produkcyjnej"),
          ".",
        ),

        h2("Pozycjonowanie stron w Opolu i w regionie: Brzeg, Nysa, Kędzierzyn-Koźle, Krapkowice"),
        p("Klienci opolskich firm często mieszkają poza miastem. Ktoś z Krapkowic, Ozimka czy Strzelec Opolskich wpisze „elektryk Krapkowice” albo „okna Strzelce Opolskie”, a nie „Opole”. Mieszkańcy samego Opola z kolei dopisują osiedle: Zaodrze, Malinka, Kolonia Gosławicka, Nowa Wieś Królewska, Grudzice."),
        p("Dla firmy, która dojeżdża do klientów, oznacza to podstrony obszaru działania — Brzeg, Nysa, Kędzierzyn-Koźle, Krapkowice, Prudnik — z treścią, która mówi coś konkretnego o pracy w danym miejscu: czasie dojazdu, typowych zleceniach, zdjęciach realizacji. Podstrony różniące się tylko nazwą miasta Google rozpoznaje i pomija, więc każdą taką podstronę piszę osobno albo nie robię jej wcale."),
        p("Osobną grupą są firmy przy autostradzie A4, między Wrocławiem a Katowicami: transport i logistyka, magazyny, serwisy ciężarówek, noclegi dla kierowców i ekip budowlanych. Ich klienci często nie są z Opola i szukają po trasie, z telefonu, wpisując węzeł, gminę albo „przy A4”. Dla takiej firmy podstrona z dojazdem z autostrady, godzinami i parkingiem dla dużych aut przynosi więcej niż ogólna fraza z nazwą miasta."),

        h2("Pozycjonowanie strony po polsku i po niemiecku dla firm z Opolszczyzny"),
        p("Opolszczyzna jest regionem mniejszości niemieckiej, z gminami, w których obowiązują dwujęzyczne nazwy miejscowości. Wiele rodzin ma bliskie związki z Niemcami, część mieszkańców pracuje za zachodnią granicą, a do regionu przyjeżdżają klienci i kontrahenci z Niemiec. Dla gabinetów, warsztatów, biur nieruchomości, producentów i firm budowlanych wersja niemiecka strony bywa realnym źródłem zapytań."),
        p("Pozycjonowanie wersji niemieckiej to nie przetłumaczony tekst polski:"),
        li("frazy sprawdzam w niemieckich danych wyszukiwań, bo ludzie szukają innymi słowami i często z niemiecką nazwą miasta, „Oppeln”"),
        li("każda wersja ma własne adresy podstron i oznaczenia hreflang"),
        li("w wersji niemieckiej są odpowiedzi na pytania klientów z Niemiec: dojazd, języki obsługi, płatność, faktura"),
        li("wizytówka Google może mieć odpowiedzi na opinie w języku, w którym napisał klient"),

        h2("Agencja SEO w Opolu, agencja marketingowa czy jeden specjalista"),
        p("Na „pozycjonowanie stron Opole” obok opolskich agencji marketingowych i studiów wysoko są ogólnopolskie agencje z podstroną dla Opola, firmy z Wrocławia i Katowic, specjaliści pracujący na własny rachunek oraz Oferteo. W mniejszym mieście lokalnych wykonawców SEO jest niewielu, więc wiele opolskich firm i tak pracuje z kimś spoza miasta, zdalnie."),
        p("Kto zajmuje się pozycjonowaniem stron? Agencja marketingowa ma sens, gdy potrzebujecie jednocześnie kampanii, mediów społecznościowych i grafiki. Jeśli chodzi o Google i odpowiedzi AI, prościej pracować z jedną osobą od audytu do wdrożenia: bez opiekuna klienta, z cenami opublikowanymi w cenniku i z raportem, który tłumaczy ten, kto wykonał pracę."),

        h2("Audyt SEO w Opolu: co sprawdzam przed wyceną"),
        p("Audyt dla opolskiej firmy obejmuje:"),
        li("widoczność na frazy z Opolem, osiedlami i miejscowościami regionu, w zwykłych wynikach i w Mapach"),
        li("stan techniczny strony i szybkość na telefonie"),
        li("frazy z Google Search Console i usługi bez własnych podstron"),
        li("wersję niemiecką, jeśli istnieje: czy Google ją indeksuje i komu ją pokazuje"),
        li("spójność danych firmy w wizytówce, katalogach i na stronie"),
        p(
          "Dostajecie listę poprawek ułożoną według wpływu, z którą można pracować dalej ze mną, z własnym programistą albo samodzielnie. Szczegóły na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Pozycjonowanie lokalne w Opolu: wizytówka Google i Mapy"),
        p("W Opolu blok Map Google często decyduje o telefonach bardziej niż zwykłe wyniki, bo miasto jest zwarte i szukający zwykle ma blisko do kilku firm z tej samej branży. Na pozycję w Mapach wpływają trafność wizytówki, odległość i rozpoznawalność. Pracuję nad tym, co da się zmienić: kategorie, usługi, zdjęcia, godziny, opinie i odpowiedzi na nie, zgodność danych w katalogach."),
        p(
          "Jeśli obsługujecie też Brzeg czy Nysę bez biura na miejscu, wizytówka pokazuje obszar działania, a resztę robią podstrony miejscowości. Więcej na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie stron w Opolu w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Mieszkańcy Opola pytają asystentów AI o konkretne rzeczy: „hydraulik w Opolu na jutro”, „firma od dachów koło Krapkowic”, „Zahnarzt in Oppeln, der Deutsch spricht”. ChatGPT, Perplexity i podsumowania AI w Google polecają firmy, o których znajdują sprawdzalne fakty. GEO (generative engine optimization) i AEO (answer engine optimization) to praca nad tym, żeby te fakty były dostępne:"),
        li("usługi, obszar działania, języki obsługi i ceny zapisane prostymi zdaniami po polsku i po niemiecku"),
        li("dane strukturalne zgodne z wizytówką Google"),
        li("te same dane firmy w katalogach i na portalach regionalnych"),
        li("podstrony, które odpowiadają na konkretne pytania klientów"),
        p(
          "Przed pracą i po niej sprawdzam, co asystenci mówią o firmie. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Czy pozycjonowanie stron w Opolu ma sens i jak długo trwa"),
        p("Przy mniejszej konkurencji efekty w Opolu przychodzą zwykle szybciej niż w dużych miastach. Poprawki wizytówki i błędów technicznych potrafią zadziałać w kilka tygodni, nowe podstrony usług potrzebują najczęściej dwóch–czterech miesięcy. Pozycjonowanie ma sens, jeśli Waszą usługę ktoś w regionie wpisuje w Google; jeśli audyt pokaże, że prawie nikt, powiem to i zaproponuję mniejszy zakres."),
        p("Wyniki liczę w telefonach i formularzach, a zapytania z wersji niemieckiej osobno, w GA4 i Search Console."),

        h2("Jak samemu pozycjonować stronę firmy z Opola"),
        li("dać każdej usłudze osobną podstronę z Opolem lub miejscowością w tytule, np. „Remont łazienki Opole i Krapkowice”"),
        li("uzupełnić wizytówkę Google: kategorie, usługi, godziny, zdjęcia i obszar działania"),
        li("zbierać opinie i odpowiadać na nie, także po niemiecku, jeśli tak napisał klient"),
        li("podłączyć Google Search Console i sprawdzać, jakie frazy już dają wejścia"),
        p("Zlecić warto wersję językową, przebudowę strony i technikę — tam błąd kosztuje najwięcej."),

        h2("Pozycjonowanie stron internetowych w Opolu: cennik"),
        li("Audyt SEO strony, wizytówki i konkurencji w Opolu i regionie: od 1000 zł, jednorazowo."),
        li("Jednorazowe prace — poprawki techniczne, podstrony usług i miejscowości, niemiecka wersja podstron: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie stron internetowych w Opolu — podstrony, wizytówka, wersja niemiecka, widoczność w AI i raporty: od 3500 zł miesięcznie."),
        p(
          "Widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Jeśli stronę trzeba zbudować od nowa albo dodać do niej wersję niemiecką, zajrzyjcie na stronę ",
          link("tworzenie stron internetowych w Opolu", "/pl/tworzenie-stron-internetowych-opole"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie stron w Opolu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony w Opolu w 2026 roku?", "Audyt kosztuje od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, a stała współpraca od 3500 zł miesięcznie. W mniejszym mieście często wystarczają audyt i jednorazowe poprawki. Stałą cenę podaję po krótkim opisie firmy."],
          ["Jak długo trwa pozycjonowanie strony?", "Wizytówkę i błędy techniczne poprawia się szybko, a efekt bywa widoczny po kilku tygodniach; nowe podstrony usług potrzebują zwykle dwóch–czterech miesięcy. Przy mniejszej konkurencji w Opolu często idzie to szybciej niż w dużych miastach."],
          ["Czy pozycjonowanie stron ma sens w mniejszym mieście?", "Tak, jeśli klienci szukają Waszej usługi w Google albo w Mapach. Mniejsza konkurencja sprawia, że w Opolu efekt daje mniej pracy, ale trzeba celować w frazy z całego regionu, nie tylko z miasta."],
          ["Czy pozycjonujesz strony po niemiecku?", "Tak. Frazy sprawdzam w niemieckich danych wyszukiwań, wersja ma własne adresy i oznaczenia hreflang, a treść odpowiada na pytania klientów z Niemiec. Wyniki wersji niemieckiej raportuję osobno."],
          ["Jak samemu pozycjonować stronę?", "Osobna podstrona dla każdej usługi z miastem w tytule, pełna wizytówka Google, opinie i Google Search Console to bezpłatny początek. Technikę i wersję językową najczęściej warto zlecić."],
          ["Kto zajmuje się pozycjonowaniem stron: agencja SEO czy specjalista?", "Agencja marketingowa przydaje się, gdy potrzebujecie też kampanii i mediów społecznościowych. U mnie jedna osoba robi audyt, wdrożenie i raport, bez opiekuna klienta, z cenami w cenniku."],
          ["Czy zajmujesz się wizytówką Google w Opolu?", "Tak: kategorie, usługi, zdjęcia, godziny, obszar działania i zgodność danych z katalogami. Firmom, które jeżdżą do klientów w regionie, ustawiam obszar działania zamiast adresu tam, gdzie nie mają biura."],
          ["Jak wygląda współpraca z Opolem, skoro pracujesz w Warszawie?", "Zdalnie, jak z większością firm spoza Warszawy: krótka rozmowa wideo, lista zadań we wspólnym dokumencie i raport raz w miesiącu. Wszystko, czego potrzebuje pozycjonowanie — strona, wizytówka, dane wyszukiwań dla Opola i regionu — jest dostępne zdalnie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony w Opolu: co mi wysłać"),
        p(
          "Prześlijcie link do strony i do wizytówki Google, listę usług, na których najbardziej Wam zależy, miejscowości Opolszczyzny, do których dojeżdżacie, i informację, czy przychodzą do Was klienci z Niemiec. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
