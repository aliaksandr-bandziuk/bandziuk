// Landing page fixture: Tworzenie stron internetowych w Opolu (PL), group
// «tworzenie-stron-internetowych-opole». City landing, stage 3 pilot, PL only.
// Phrases (ref/city-keywords.md, ref/pl-cities.md; volumes/month, Poland):
// tworzenie stron internetowych opole 170 · strony www opole 110.
// «strony internetowe opole», «projektowanie stron opole», «cennik» — no
// measured volume for Opole, carried in H2/FAQ per BRIEF.md. PAA: Jaka jest
// cena projektowania stron internetowych? (H2 cennik + FAQ).
// Intent (ref/intent-check-pl-cities.md; measured for Poznań and Kraków,
// pattern applied to Opole): «tworzenie stron», «projektowanie stron», «strony
// internetowe», «strona internetowa» share 0–1 URLs — fragmented SERP of local
// studios, freelancers, firms from Wrocław/Katowice, national firms with city
// pages and Oferteo; one page carries them all. SEO vs websites 0 shared URLs
// → SEO is the sibling page.
// City part (≥ ⅓ of guide): building-materials industry, chemistry in
// Kędzierzyn-Koźle, energy, construction and installation firms; offices,
// hospitals, two universities; German minority and bilingual gminas → PL/DE
// site; clients from the whole region (Brzeg, Nysa, Krapkowice, Ozimek,
// Strzelce Opolskie, Kluczbork, Namysłów) and osiedla (Zaodrze, Malinka,
// Gosławice); fewer local contractors → firms often hire outside the city.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna strona od 8500 zł,
// projekt graficzny w cenie.
// NOT on this page: pozycjonowanie and German-language SEO
// (/pl/pozycjonowanie-stron-opole); e-commerce (not offered); identity,
// campaigns, social media (not offered).
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s city or industry; remote work from Warsaw, no visits.
import { p, h2, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychOpolePl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-opole",
  slug: "tworzenie-stron-internetowych-opole",
  title: "Tworzenie stron internetowych w Opolu",
  heading: "Tworzenie stron internetowych w Opolu",
  excerpt:
    "Tworzenie stron internetowych w Opolu od jednej osoby: projekt graficzny w cenie, teksty, wersja niemiecka dla klientów z Niemiec, obszar działania w całym regionie i formularz zgodny z RODO — dla firm budowlanych, producentów i usług, za cenę z cennika.",
  seo: {
    metaTitle: "Strony www Opole: projekt i wykonanie od 3000 zł | Bandziuk",
    metaDescription:
      "Strony www dla firm z Opola i regionu: wersja polska i niemiecka, projekt graficzny w cenie, formularz RODO, panel do edycji, bez abonamentu. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt w cenie", "Od 3000 zł", "Wersja polska i niemiecka"],
  heroPhonePoints: ["Remonty Opole i okolice", "Realizacje", "Deutsch", "Zapytaj o wycenę"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy z Opola, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona firmy z Opola z wersją niemiecką, podstronami usług i miejscowości, integracjami i SEO lokalnym, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową w Opolu",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrony usług i realizacji", text: "Zakres prac, zdjęcia, obszar działania" },
        { _key: k("o"), iconName: "message-circle", title: "Wersja niemiecka", text: "Osobne adresy, hreflang, teksty dla klientów z Niemiec" },
        { _key: k("o"), iconName: "map-pin", title: "Obszar działania w regionie", text: "Opole, Brzeg, Nysa, Krapkowice — zapisane tekstem" },
        { _key: k("o"), iconName: "shield-check", title: "Formularz zgodny z RODO", text: "Klauzula w języku podstrony, zgody na cookies" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i AI", text: "Fakty tekstem i dane strukturalne firmy" },
        { _key: k("o"), iconName: "gauge", title: "Szybka na telefonie i Wasza", text: "Kod, treści i domena należą do firmy" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy z Opola", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Wersja niemiecka, usługi, miejscowości, integracje", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Strona firmy skanowania laserowego 3D i modelowania BIM w trzech językach, w tym po niemiecku, serwis agencji edukacyjnej dla dziesięciu krajów i strony lokalnych firm z Warszawy: firmy remontowo-inwestycyjnej, warsztatu samochodowego i pracowni renowacji felg. Dla firmy z Opola to przykłady obu rzeczy, których zwykle potrzebuje: wersji językowej dla klientów z zagranicy i strony, która prowadzi lokalnego klienta do telefonu.",
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
      title: "Wycena strony internetowej dla firmy z Opola",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron, wersje językowe i stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakie wersje językowe są potrzebne?", options: ["Tylko polska", "Polska i niemiecka", "Polska, niemiecka i angielska", "Jeszcze nie wiemy"] },
        { _key: k("z"), question: "Gdzie pracujecie?", options: ["W Opolu", "W Opolu i okolicy", "W całym województwie", "Także w Niemczech"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych w Opolu prowadzę dla firm, które chcą mieć stronę od jednej osoby: od listy podstron i projektu graficznego, przez wykonanie i teksty, po uruchomienie i połączenie z wizytówką Google. Dla firm z klientami z Niemiec buduję też wersję niemiecką. Pracuję z Warszawy, a projekty dla firm z Opola prowadzę zdalnie, w uzgodnionych etapach i ze stałą ceną."),

        h2("Tworzenie stron internetowych w Opolu: projekt, wykonanie i teksty od jednej osoby"),
        p("W agencji nad stroną pracuje kilka osób, a Wy rozmawiacie z jedną, która przekazuje uwagi dalej. U mnie ta sama osoba ustala strukturę, projektuje, programuje w WordPressie lub Next.js, pisze teksty i uruchamia stronę. Decyzje zapadają szybciej, a odpowiedź na pytanie „czy da się jeszcze dodać…?” dostajecie od kogoś, kto wie, ile to zajmie. W cenie są zawsze:"),
        li("projekt na telefon i komputer"),
        li("hosting z SSL, podpięta domena i kopie zapasowe"),
        li("tytuły, opisy podstron i dane strukturalne firmy"),
        li("Google Analytics 4 i Search Console z banerem zgód"),
        li("formularz z klauzulą RODO i panel do samodzielnej edycji"),

        h2("Strony www dla firm z Opola: budownictwo, przemysł, usługi i uczelnie"),
        p("Opolszczyzna ma silny przemysł materiałów budowlanych, chemię w Kędzierzynie-Koźlu i energetykę, a wokół nich wiele firm budowlanych, instalacyjnych, transportowych i podwykonawców. Samo Opole to miasto urzędów, szpitali, dwóch uczelni i usług dla całego regionu. Każda z tych grup potrzebuje od strony czegoś innego:"),
        li(
          "firma budowlana lub instalacyjna — realizacje ze zdjęciami, zakres prac, obszar działania i szybki kontakt w sprawie wyceny; więcej: ",
          link("strona internetowa dla firmy budowlanej", "/pl/strona-internetowa-dla-firmy-budowlanej"),
        ),
        li(
          "producent i podwykonawca przemysłowy — oferta dla działów zakupów, możliwości produkcyjne, certyfikaty i wersja dla partnerów z zagranicy; więcej: ",
          link("strona dla firmy produkcyjnej", "/pl/strona-dla-firmy-produkcyjnej"),
        ),
        li("gabinet, kancelaria, biuro rachunkowe — zespół, zakres usług, ceny lub sposób rozliczenia, umawianie wizyt"),
        li("usługi dla studentów i mieszkańców — lekka strona na telefon z godzinami, cenami i przyciskiem WhatsApp"),

        h2("Dwujęzyczna strona internetowa w Opolu: wersja polska i niemiecka"),
        p("Opolszczyzna jest regionem mniejszości niemieckiej i dwujęzycznych nazw miejscowości. Wiele firm obsługuje klientów, którzy mieszkają lub pracują w Niemczech, ma niemieckich kontrahentów albo sprzedaje usługi osobom, którym łatwiej czytać po niemiecku. Wersja niemiecka strony jest dla nich sygnałem, że zostaną zrozumiani, jeszcze zanim zadzwonią."),
        p("Jak buduję wersję niemiecką:"),
        li("osobne adresy podstron i oznaczenia hreflang, żeby osoby szukające po niemiecku widziały właściwą wersję"),
        li("teksty pisane dla niemieckiego czytelnika i jego pytań — dojazd, terminy, faktura, płatność — a nie dosłowne tłumaczenie"),
        li("przełącznik języka widoczny także na telefonie"),
        li("formularz i klauzula RODO po niemiecku"),
        p(
          "Jeden z projektów w portfolio, strona firmy skanowania laserowego 3D i modelowania BIM, działa po angielsku, polsku i niemiecku. Więcej o takich stronach: ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Strona firmy z Opola, która zbiera klientów z całej Opolszczyzny"),
        p("Firma z Opola rzadko pracuje tylko w mieście. Klienci przychodzą z Brzegu, Nysy, Krapkowic, Ozimka, Strzelec Opolskich, Kluczborka czy Namysłowa, a w samym Opolu z Zaodrza, Malinki czy Gosławic. Strona powinna mówić wprost, gdzie pracujecie:"),
        li("obszar działania na stronie głównej i w stopce, zapisany tekstem, a nie tylko zaznaczony na mapie"),
        li("podstrona miejscowości tylko wtedy, gdy macie tam realizacje albo osobną ofertę — z własną treścią, zdjęciami i informacją o dojeździe"),
        li("kontakt z czasem dojazdu i informacją, czy przyjeżdżacie do klienta"),
        p("Strona zbudowana w ten sposób jest od początku gotowa na pozycjonowanie w regionie, bez dziesiątek podobnych podstron, które Google pomija."),

        h2("Strona hotelu, restauracji i sali weselnej w Opolu i okolicy"),
        p("Opole kojarzy się z festiwalem polskiej piosenki w amfiteatrze, Wyspą Pasieką i Starym Miastem nad Młynówką, a okolica z zamkami i pałacami, z Moszną na czele. Wokół tego działają hotele, pensjonaty, restauracje, sale weselne i firmy eventowe, których klienci planują przyjazd z wyprzedzeniem i porównują kilka miejsc."),
        p("Strona takiego miejsca pokazuje to, czego nie widać w serwisach rezerwacyjnych: prawdziwe zdjęcia sal i pokoi, liczbę miejsc, menu weselne lub okolicznościowe z widełkami cen, wolne terminy, dojazd i parking, a dla gości z Niemiec — tę samą ofertę po niemiecku. Formularz zapytania o termin od razu pyta o datę, liczbę gości i rodzaj przyjęcia, więc odpowiadacie bez dopytywania."),

        h2("Przebudowa starej strony firmy z Opola bez utraty pozycji w Google"),
        p("Wiele opolskich firm ma stronę zrobioną kilka lat temu przez znajomego albo w systemie, do którego nikt nie ma już haseł. Przy przebudowie najpierw spisuję adresy, które Google już wyświetla, i frazy, które dają wejścia. Nowa strona dostaje przekierowania ze wszystkich starych adresów, zachowuje domenę, sprawdzone teksty i zdjęcia realizacji, a po uruchomieniu przez kilka tygodni obserwuję Search Console. Przy okazji można dodać wersję niemiecką bez budowania wszystkiego dwa razy."),

        h2("Projektowanie stron w Opolu: jak porównać oferty wykonawców"),
        p("Na „tworzenie stron internetowych Opole” i „strony www Opole” wyniki dzielą opolskie agencje marketingowe i studia, freelancerzy, wykonawcy z Wrocławia i Katowic, ogólnopolskie firmy z podstroną dla Opola i Oferteo. W mniejszym mieście wybór lokalnych wykonawców jest ograniczony, więc firmy z Opola często i tak pracują z kimś z innego miasta."),
        p("Porównując oferty, sprawdźcie: czy projekt graficzny jest w cenie, czy dostajecie teksty, czy po uruchomieniu jest abonament, czy domena i hosting są zarejestrowane na Was, ile kosztuje dodanie wersji językowej i kto będzie odpowiadał na pytania po starcie. U mnie projekt jest w cenie, abonamentu nie ma, ceny są w cenniku, a strona i domena należą do firmy."),

        h2("Kreator stron czy strona na zamówienie dla firmy z Opola"),
        p("Kreator wystarczy, gdy macie jedną usługę i klientów z polecenia. Gdy potrzebujecie wersji niemieckiej, kilku usług i miejscowości znajdowanych osobno w Google, formularza wyceny z załącznikami albo integracji, kreator zaczyna przeszkadzać: abonament rośnie z każdą funkcją, a część ustawień SEO jest poza Waszą kontrolą. Przeniesienie strony z kreatora to praktycznie budowa od nowa, więc lepiej wybrać na początku."),

        h2("Strona internetowa firmy z Opola, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Ludzie pytają ChatGPT, Perplexity czy podsumowania AI w Google o konkretne rzeczy: „firma od fotowoltaiki w okolicach Opola”, „Steuerberater in Oppeln”, „gdzie w Opolu naprawić rower elektryczny”. Asystenci polecają firmy, o których mogą przeczytać fakty. Na stronie, którą buduję, usługi, obszar działania, języki obsługi, godziny i ceny są zapisane tekstem w obu wersjach językowych, a dane strukturalne opisują firmę tak samo jak wizytówka Google."),
        p(
          "Dalsza praca nad widocznością w asystentach jest opisana na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak powstaje strona dla firmy z Opola: etapy pracy online"),
        ol("Brief w rozmowie wideo lub w wiadomości: usługi, klienci, miejscowości, języki."),
        ol("Lista podstron i stała cena; zmianę zakresu wyceniam przed jej wykonaniem."),
        ol("Projekt strony głównej i jednej podstrony, najpierw na telefonie."),
        ol("Teksty po polsku, a jeśli trzeba — po niemiecku; Wy sprawdzacie fakty i nazwy."),
        ol("Uruchomienie: analityka, Search Console, wizytówka Google i instrukcja edycji."),
        p("Wszystkie ustalenia są w jednym dokumencie, a podgląd strony widzicie w przeglądarce na każdym etapie, więc spotkania na miejscu nie są potrzebne."),

        h2("Strony internetowe Opole: cennik"),
        li("Prosta strona — kilka podstron usług i realizacji, o firmie, kontakt z mapą dojazdu, formularz z klauzulą RODO: 3000–6000 zł."),
        li("Pełna strona — wersja niemiecka, podstrony usług i miejscowości, realizacje, integracje, SEO lokalne: od 8500 zł."),
        p(
          "W obu wariantach projekt graficzny nie jest liczony osobno, a pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Ogólny opis tego, jak buduję strony, jest na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),

        h2("Po uruchomieniu: własność strony, hosting i pozycjonowanie w Opolu"),
        p(
          "Strona należy do firmy w całości. Po starcie płacicie dostawcy za hosting i domenę, a mnie wyłącznie za zmiany, które zlecicie; jeśli strona dobrze działa, takich zleceń miesiącami może nie być. Jeśli zależy Wam na stałym wzroście zapytań z Google w Opolu i regionie, także po niemiecku, opis tej usługi jest na stronie ",
          link("pozycjonowanie stron w Opolu", "/pl/pozycjonowanie-stron-opole"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Tworzenie stron internetowych w Opolu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych w Opolu?", "Prosta strona kosztuje od 3000 do 6000 zł, a pełna, z wersją niemiecką, podstronami usług i miejscowości oraz integracjami, od 8500 zł. Projekt graficzny jest w cenie. Stałą cenę podaję po krótkim opisie firmy."],
          ["Czy możesz zrobić stronę po polsku i po niemiecku?", "Tak. Wersja niemiecka ma własne adresy i oznaczenia dla Google, teksty pisane z myślą o klientach z Niemiec i formularz z klauzulą RODO po niemiecku."],
          ["Ile trwa stworzenie strony internetowej?", "Prostą stronę uruchamiamy zazwyczaj po dwóch–czterech tygodniach, pełną po czterech–sześciu. Wersja niemiecka wydłuża pracę o czas na teksty i ich sprawdzenie. Tempo zależy głównie od tego, jak szybko dostaję materiały."],
          ["Czy można zacząć od prostej strony i rozbudować ją później?", "Tak. Struktura jest od początku przygotowana na kolejne podstrony i drugą wersję językową, więc rozbudowa nie wymaga budowania strony od nowa."],
          ["Czy strona będzie przygotowana pod Google?", "Tak. Każda podstrona dostaje własny tytuł i opis, strona ma dane strukturalne firmy, szybko działa na telefonie i jest zgłoszona w Search Console. Stała praca nad pozycjami w Opolu i regionie to osobna usługa."],
          ["Do kogo należy strona?", "Wszystko jest zarejestrowane na firmę: domena, hosting, kod i treści. Jeśli kiedyś zechcecie zmienić wykonawcę, przenosicie stronę bez żadnych opłat na moją rzecz."],
          ["Czy pracujesz z firmami z Opola zdalnie?", "Tak, i to standard: pracuję z Warszawy, a firmy z Opola i regionu widzą postęp na bieżąco — w dokumencie z ustaleniami i w podglądzie strony, a sprawy omawiamy na krótkich rozmowach wideo."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową w Opolu: co mi wysłać"),
        p(
          "Przyślijcie link do obecnej strony albo wizytówki Google, krótką listę usług i miejscowości, informację, czy potrzebujecie wersji niemieckiej, i kilka zdjęć z Waszych realizacji. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
