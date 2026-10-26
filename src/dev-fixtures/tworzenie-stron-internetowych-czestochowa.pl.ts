// Landing page fixture: Tworzenie stron internetowych w Częstochowie (PL), group
// «tworzenie-stron-internetowych-czestochowa». City landing, stage 3 pilot, PL only.
// Phrases (ref/city-keywords.md, ref/pl-cities.md; volumes/month, Poland):
// tworzenie stron internetowych częstochowa 140. «strony internetowe
// częstochowa», «projektowanie stron częstochowa», «cennik» — no measured
// volume, carried in H2/FAQ per BRIEF.md. PAA: Jaka jest cena projektowania
// stron internetowych? (H2 cennik + FAQ).
// Intent (ref/intent-check-pl-cities.md; measured for Poznań and Kraków,
// pattern applied): «tworzenie stron», «projektowanie stron», «strony
// internetowe», «strona internetowa» share 0–1 URLs — fragmented SERP of local
// studios, Silesian agencies, freelancers, national firms with city pages and
// Oferteo; one page carries them all. SEO vs websites 0 shared URLs → SEO is
// the sibling page.
// City part (≥ ⅓ of guide): Jasna Góra pilgrimages → domy pielgrzyma,
// pensjonaty, hotels, restaurants on and around Aleja NMP: groups, coaches,
// direct booking, languages; guests searching on the road → mobile speed;
// industrial and steel-making tradition → B2B manufacturer sites (RFQ with
// drawings, machine park, certificates); parishes and foundations receiving
// pilgrims; Jura tourism; Silesian agencies in the SERP.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna strona od 8500 zł,
// projekt graficzny w cenie.
// NOT on this page: pozycjonowanie (/pl/pozycjonowanie-stron-czestochowa);
// online shops, incl. dewocjonalia e-commerce (not offered); identity,
// campaigns, social media (not offered).
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s city or industry; remote work from Warsaw, no visits.
import { p, h2, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychCzestochowaPl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-czestochowa",
  slug: "tworzenie-stron-internetowych-czestochowa",
  title: "Tworzenie stron internetowych w Częstochowie",
  heading: "Tworzenie stron internetowych w Częstochowie",
  excerpt:
    "Tworzenie stron internetowych w Częstochowie dla noclegów, restauracji, firm produkcyjnych i lokalnych usług: projekt graficzny w cenie, rezerwacja lub zapytanie ofertowe, wersje językowe dla gości z zagranicy i szybkość na telefonie — od jednej osoby, za cenę z cennika.",
  seo: {
    metaTitle: "Strony internetowe Częstochowa: cennik od 3000 zł | Bandziuk",
    metaDescription:
      "Strony internetowe dla firm z Częstochowy: noclegi i restauracje przy Jasnej Górze, przemysł, usługi. Projekt w cenie, rezerwacje, języki. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Rezerwacje i wersje językowe"],
  heroPhonePoints: ["5 minut do Jasnej Góry", "Oferta dla grup", "Zarezerwuj · Zadzwoń", "English · Italiano"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy z Częstochowy, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona firmy z Częstochowy z rezerwacją lub zapytaniem ofertowym, wersjami językowymi, integracjami i SEO lokalnym, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową w Częstochowie",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrony oferty, pokoi lub produkcji", text: "Z cenami lub widełkami i prawdziwymi zdjęciami" },
        { _key: k("o"), iconName: "phone", title: "Zadzwoń, nawiguj, zarezerwuj", text: "Widoczne bez przewijania, dla gości w drodze" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje dla gości z zagranicy", text: "Angielska i języki, w których piszą do Was goście" },
        { _key: k("o"), iconName: "plug", title: "Rezerwacja lub zapytanie ofertowe", text: "System rezerwacji, formularz z załącznikiem rysunku" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Odległość, miejsca, ceny i języki zapisane tekstem" },
        { _key: k("o"), iconName: "shield-check", title: "Formularz i cookies zgodne z RODO", text: "Klauzula, zgody, analityka po akceptacji" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy z Częstochowy", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Rezerwacje, języki, oferta B2B, integracje", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Serwis agencji edukacyjnej dla dziesięciu krajów, firma skanowania laserowego 3D i modelowania BIM oraz lokalne firmy z Warszawy: firma remontowo-inwestycyjna z projektem premium, warsztat samochodowy i przechowalnia opon z jedną stroną, w której sami zmieniają ustawienia SEO. Firmie z Częstochowy pokazują to, czego zwykle potrzebuje: strony w kilku językach, rzeczowej oferty dla klientów firmowych i szybkiej drogi od wyszukiwarki do telefonu.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy z Częstochowy",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron, sposób rezerwacji lub zapytań i stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaka to firma?", options: ["Nocleg, dom pielgrzyma lub hotel", "Restauracja lub kawiarnia", "Firma produkcyjna lub budowlana", "Usługi dla mieszkańców"] },
        { _key: k("z"), question: "Jak klienci mają się z Wami kontaktować?", options: ["Telefon i WhatsApp", "Formularz zapytania", "Rezerwacja online", "Zapytanie ofertowe z plikami"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych w Częstochowie to moja usługa dla noclegów, restauracji, firm produkcyjnych i lokalnych usług, które chcą mieć stronę od jednej osoby: z projektem graficznym w cenie, tekstami, rezerwacją lub formularzem zapytań i podstawami SEO. Pracuję z Warszawy, a strony dla firm z Częstochowy prowadzę zdalnie — w etapach, ze stałą ceną i jednym dokumentem, w którym zapisane są wszystkie ustalenia."),

        h2("Tworzenie stron internetowych w Częstochowie: co dostajecie"),
        p("Niezależnie od branży każda strona ma ten sam zestaw podstaw:"),
        li("projekt graficzny przygotowany najpierw na telefon"),
        li("hosting z SSL, podpiętą domenę i kopie zapasowe"),
        li("tytuły i opisy podstron, dane strukturalne i połączenie z wizytówką Google"),
        li("analityka GA4 i Search Console, włączane dopiero po zgodzie odwiedzającego"),
        li("formularz z klauzulą RODO i panel, w którym sami zmieniacie ceny, menu, terminy i zdjęcia"),
        p("Domena, kod i treści są Wasze, a po uruchomieniu nie płacicie mi abonamentu."),

        h2("Strony internetowe dla firm z Częstochowy: noclegi, gastronomia, przemysł i usługi"),
        p("Częstochowa jest jednocześnie jednym z najważniejszych miejsc pielgrzymkowych w Europie i miastem przemysłowym z tradycją hutniczą, z dwiema uczelniami i usługami dla całego północnego Śląska. Dlatego strony, o które pytają tu firmy, bardzo się od siebie różnią:"),
        li("dom pielgrzyma, pensjonat, hostel czy hotel — rezerwacja, oferta dla grup, dojazd i parking"),
        li("restauracja, bar czy kawiarnia przy Alei Najświętszej Maryi Panny i w okolicy — menu, godziny, stolik dla grupy"),
        li("firma produkcyjna, metalowa lub budowlana — oferta dla klientów firmowych, możliwości, realizacje"),
        li("gabinet, warsztat, szkoła — lokalne usługi dla mieszkańców Częstochowy, Kłobucka czy Myszkowa"),
        li("parafie, fundacje i stowarzyszenia, które przyjmują pielgrzymów albo prowadzą działalność charytatywną — informacja, terminy, darowizny"),

        h2("Strona noclegu lub restauracji przy Jasnej Górze: rezerwacja, grupy, języki"),
        p("Gość, który przyjeżdża do Częstochowy na pielgrzymkę, ma inne pytania niż turysta w dużym mieście. Strona noclegu czy restauracji powinna odpowiadać na nie, zanim ktoś zadzwoni:"),
        li("ile minut pieszo do sanktuarium i jak dojść z parkingu"),
        li("czy przyjmujecie grupy, jak duże, czy jest miejsce dla autokaru i posiłki dla całej grupy"),
        li("godziny zameldowania, możliwość wcześniejszego przyjazdu po nocnej podróży, cisza nocna"),
        li("rezerwacja bezpośrednia — formularz albo system rezerwacji, bez prowizji portalu dla gości, którzy wracają co roku"),
        li("wersje językowe: angielska i te, w których faktycznie piszą do Was goście z zagranicy"),
        p(
          "Gdy strona już działa, o jej widoczności w Google piszę na stronach ",
          link("pozycjonowanie strony hotelu", "/pl/pozycjonowanie-strony-hotelu"),
          " i ",
          link("pozycjonowanie restauracji", "/pl/pozycjonowanie-strony-restauracji"),
          ".",
        ),

        h2("Strona domu pielgrzyma, parafii lub fundacji w Częstochowie"),
        p("Część miejsc, które przyjmują pielgrzymów, prowadzą zgromadzenia, parafie i fundacje, a nie firmy. Ich strona ma inne zadania niż strona hotelu: informuje o rekolekcjach, dniach skupienia i nabożeństwach, przyjmuje zgłoszenia grup, zbiera darowizny i odpowiada na pytania opiekunów pielgrzymek, którzy organizują wyjazd z parafii w innym mieście."),
        li("kalendarz wydarzeń i terminów, który aktualizuje osoba bez wiedzy technicznej"),
        li("formularz zgłoszenia grupy z liczbą osób, datą przyjazdu i potrzebami, np. posiłkami czy noclegiem"),
        li("informacja o przetwarzaniu danych uczestników zgodnie z RODO"),
        li("prosta strona darowizn z numerem konta i celem zbiórki"),

        h2("Strona dla turystyki na Jurze pod Częstochową: noclegi, atrakcje, wypożyczalnie"),
        p("Na południe od miasta zaczyna się Jura Krakowsko-Częstochowska: Olsztyn z ruinami zamku, skałki, szlaki piesze i rowerowe. Agroturystyki, pensjonaty, wypożyczalnie rowerów, szkoły wspinaczki i stadniny konkurują tu o gości, którzy wybierają miejsce na weekend, często łącząc wyjazd z wizytą na Jasnej Górze. Ich strona pokazuje, co można robić w okolicy, jak daleko jest do szlaków i do sanktuarium, jakie są ceny i wolne terminy, a zdjęcia są prawdziwe, nie z banku zdjęć."),

        h2("Strona firmy produkcyjnej z Częstochowy dla klientów B2B"),
        p("Firmy z Częstochowy i okolic — obróbka metali, konstrukcje stalowe, materiały, podwykonawstwo — sprzedają klientom, którzy porównują kilku dostawców, zanim wyślą zapytanie ofertowe. Taka strona nie potrzebuje efektów, tylko konkretów:"),
        li("co produkujecie i z jakich materiałów, z parametrami tam, gdzie mają znaczenie"),
        li("park maszynowy, certyfikaty, terminy realizacji i minimalne zamówienie"),
        li("formularz zapytania ofertowego z możliwością dołączenia rysunku"),
        li("wersja angielska lub niemiecka dla klientów z zagranicy"),
        p("Kupiec z innego miasta rzadko wpisuje nazwę Częstochowy. Szuka usługi i regionu — „konstrukcje stalowe na zamówienie”, „cięcie laserowe Śląsk”, „spawanie aluminium łódzkie” — więc każda technologia potrzebuje osobnej podstrony. Warto też napisać wprost o położeniu przy autostradzie A1, bo czas dostawy do Łodzi, Katowic czy Krakowa bywa dla działu zakupów argumentem."),
        p(
          "Więcej o takich stronach: ",
          link("strona dla firmy produkcyjnej", "/pl/strona-dla-firmy-produkcyjnej"),
          ".",
        ),

        h2("Strona na telefon dla gości i klientów w drodze do Częstochowy"),
        p("Wiele osób szuka noclegu, obiadu czy mechanika w Częstochowie już w drodze: w autokarze, na parkingu przy trasie, po wyjściu z pociągu. Strona musi wtedy wczytać się szybko nawet przy słabym zasięgu i od razu pokazać telefon, adres z nawigacją i godziny otwarcia. Podstrony, które buduję, pojawiają się na telefonie w mniej niż 2,5 sekundy, zdjęcia są kompresowane, a przyciski „Zadzwoń” i „Nawiguj” są widoczne bez przewijania. To samo przydaje się turystom z Jury, którzy planują dzień z telefonu, między jednym zamkiem a drugim."),

        h2("Projektowanie stron w Częstochowie: lokalny wykonawca, agencja ze Śląska czy jedna osoba"),
        p("Na „tworzenie stron internetowych Częstochowa” i „projektowanie stron Częstochowa” wyniki dzielą lokalne studia i agencje marketingowe, wykonawcy z Katowic i innych miast województwa, freelancerzy, ogólnopolskie firmy z podstroną dla Częstochowy i Oferteo. Oferty trudno porównać, bo każdy liczy coś innego."),
        p("Zanim wybierzecie, zapytajcie: czy projekt graficzny jest w cenie; kto przygotuje teksty; czy będzie abonament; czy domena i hosting będą zarejestrowane na firmę; ile kosztuje system rezerwacji albo druga wersja językowa. Pracuję sam: jedna osoba od projektu do uruchomienia, projekt w cenie, bez abonamentu, ceny w cenniku. Agencja ze Śląska z pełną obsługą sprawdzi się lepiej, gdy razem ze stroną potrzebujecie kampanii i mediów społecznościowych."),

        h2("Strona internetowa firmy z Częstochowy, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Pytania do asystentów AI o Częstochowę są bardzo konkretne: „dom pielgrzyma z parkingiem dla autokaru”, „restauracja dla grupy przy Jasnej Górze”, „cięcie laserowe blach Częstochowa”. ChatGPT, Perplexity i podsumowania AI w Google polecają miejsca, o których mogą przeczytać fakty: odległość, liczbę miejsc, ceny, języki obsługi, godziny. Na stronach, które buduję, te fakty są zapisane tekstem, a dane strukturalne opisują firmę, ofertę i lokalizację tak samo jak wizytówka Google."),
        p(
          "Dalszą pracę nad widocznością w asystentach opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak powstaje strona dla firmy z Częstochowy: współpraca zdalna z Warszawy"),
        ol("Krótki opis firmy w wiadomości, nagraniu albo podczas rozmowy wideo: oferta, klienci, sezon, języki."),
        ol("Propozycja podstron, sposobu rezerwacji lub zapytań i stała cena."),
        ol("Projekt strony głównej i jednej podstrony oferty, najpierw na telefonie, do Waszej akceptacji."),
        ol("Wykonanie, teksty i wersje językowe; Wy sprawdzacie fakty, ceny i nazwy."),
        ol("Uruchomienie z analityką, Search Console, wizytówką Google i krótką instrukcją, jak zmieniać menu, ceny i terminy."),
        p("Podgląd strony widzicie w przeglądarce na każdym etapie, więc do pracy nie są potrzebne spotkania w Częstochowie."),

        h2("Strony internetowe Częstochowa: cennik"),
        li("Prosta strona — strona główna, kilka podstron oferty, o firmie, kontakt, formularz zgodny z RODO: 3000–6000 zł."),
        li("Pełna strona — rezerwacja lub zapytanie ofertowe z plikami, wersje językowe, podstrony dla grup lub produkcji, integracje, SEO lokalne: od 8500 zł."),
        p(
          "Projekt graficzny wliczam w cenę każdego wariantu; widełki znajdziecie w ",
          link("cenniku", "/pl/cennik"),
          ". Ogólny opis tego, jak buduję strony, jest na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),

        h2("Przebudowa strony i pozycjonowanie w Częstochowie po uruchomieniu"),
        p(
          "Jeśli Wasza strona ma już kilka lat, przebudowa zachowuje domenę, adresy, które Google zna, i dobre zdjęcia, a stare adresy dostają przekierowania, więc noclegi i restauracje nie tracą rezerwacji z wyszukiwarki w środku sezonu. Gdy nowa strona działa, możecie ją rozwijać samodzielnie albo zlecić stałą pracę nad widocznością — opisuję ją na stronie ",
          link("pozycjonowanie stron w Częstochowie", "/pl/pozycjonowanie-stron-czestochowa"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Tworzenie stron internetowych w Częstochowie: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych w Częstochowie?", "Od 3000 do 6000 zł za prostą stronę z ofertą i kontaktem. Strona z rezerwacją lub zapytaniem ofertowym, wersjami językowymi i integracjami kosztuje od 8500 zł. Projekt graficzny zawsze jest w cenie, a stałą cenę podaję po krótkim opisie obiektu lub firmy."],
          ["Czy strona noclegu może mieć własną rezerwację online?", "Tak. Może to być prosty formularz zapytania o termin albo system rezerwacji połączony ze stroną. Wybór zależy od liczby pokoi i tego, czy korzystacie już z serwisów rezerwacyjnych."],
          ["Czy zrobisz stronę w kilku językach dla gości z zagranicy?", "Tak. Najczęściej wystarcza angielska i jeden lub dwa języki, w których piszą do Was goście. Tłumaczę pokoje, ofertę dla grup, dojazd i kontakt, a każda wersja ma osobne adresy, żeby Google pokazywał ją właściwym osobom."],
          ["Ile trwa stworzenie strony internetowej?", "Od briefu do uruchomienia prostej strony mijają zwykle dwa–cztery tygodnie, pełnej cztery–sześć. Noclegom i restauracjom radzę zacząć kilka miesięcy przed sezonem pielgrzymkowym, żeby strona zdążyła pojawić się w Google."],
          ["Czy tworzysz sklepy internetowe?", "Nie. Buduję strony firmowe z ofertą, rezerwacjami, formularzami zapytań i wersjami językowymi; sklepów internetowych nie tworzę."],
          ["Do kogo należy strona?", "Do właściciela obiektu lub firmy: domena, kod, treści i zdjęcia. Hasła do hostingu i panelu przekazuję przy uruchomieniu, więc niczego nie musicie odzyskiwać przy zmianie wykonawcy."],
          ["Czy pracujesz z firmami z Częstochowy zdalnie?", "Tak. Cały projekt prowadzę z Warszawy przez internet: krótka rozmowa wideo na start, dokument z ustaleniami, do którego macie dostęp, i link do podglądu strony, który otworzycie na telefonie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową w Częstochowie: co mi wysłać"),
        p(
          "Napiszcie, jak nazywa się obiekt lub firma, gdzie jest obecna strona albo wizytówka Google, co oferujecie, informację, czy przyjmujecie grupy i gości z zagranicy albo klientów firmowych, oraz kilka zdjęć obiektu, sali lub produkcji. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
