// Landing page fixture: Tworzenie stron internetowych Gdańsk (PL), group
// «tworzenie-stron-internetowych-gdansk». Stage 3 city pilot, Gdańsk only.
// Semantic core (ref/city-keywords.md, ref/pl-cities.md): strony internetowe
// gdańsk 590 · tworzenie stron internetowych gdańsk 170 · agencja interaktywna
// gdańsk 110; brief phrases without measured volume: projektowanie stron
// gdańsk, strona internetowa gdańsk, cennik. PAA: Jaka jest cena projektowania
// stron internetowych? (H2 + FAQ).
// Intent (ref/intent-check-pl-cities.md): website vs SEO 0 shared URLs → SEO is
// /pl/pozycjonowanie-stron-gdansk; «tworzenie stron», «projektowanie stron»,
// «strony internetowe» share 0–1 URLs (fragmented local SERP), so all of them
// live on this one page in H2/H3/FAQ. Gdańsk and Gdynia have separate SERPs →
// the page is about Gdańsk, Trójmiasto only as the area served.
// City part: tourism (Motława, Główne Miasto, seasons), maritime B2B, services
// for new districts, IT/BPO in Trójmiasto; language versions (EN, DE, UA);
// searching by district, SKM/tram, Trójmiasto; who builds sites in Gdańsk.
// Prices: prosta strona 3000–6000 zł, pełna od 8500 zł, projekt w cenie.
// NOT on this page: pozycjonowanie (/pl/pozycjonowanie-stron-gdansk);
// e-commerce and online shops (not offered); Gdynia/Sopot as targets; Warsaw
// pages.
// Owner’s rules: remote work from Warsaw, no visits promised; never say there
// are no clients from the visitor’s city or industry.
import { p, h2, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychGdanskPl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-gdansk",
  slug: "tworzenie-stron-internetowych-gdansk",
  title: "Tworzenie stron internetowych Gdańsk",
  heading: "Tworzenie stron internetowych w Gdańsku",
  excerpt:
    "Tworzenie stron internetowych w Gdańsku dla firm usługowych, turystycznych i B2B: projekt graficzny w cenie, wersje językowe dla gości z zagranicy, rezerwacja lub zapytanie jednym dotknięciem i podstawy SEO — jeden wykonawca, praca online, cena z cennika.",
  seo: {
    metaTitle: "Strony internetowe Gdańsk: od 3000 zł | Bandziuk",
    metaDescription:
      "Strony internetowe w Gdańsku: projekt w cenie, wersje językowe dla turystów i kontrahentów, szybkie na telefonie, czytelne dla Google i AI. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt graficzny w cenie", "Od 3000 zł", "Wersje PL · EN · DE"],
  heroPhonePoints: ["Zarezerwuj nocleg", "Ceny i dojazd", "English · Deutsch", "Zadzwoń · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy z Gdańska, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona dla firmy z Gdańska: podstrony usług lub ofert, wersje językowe, rezerwacje lub zapytania ofertowe, SEO lokalne, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową w Gdańsku",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrony usług, ofert i noclegów", text: "Każda z ceną, zdjęciami i obszarem: Gdańsk, Trójmiasto" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje językowe dla gości i kontrahentów", text: "Angielska, niemiecka, ukraińska — z własnymi adresami" },
        { _key: k("o"), iconName: "phone", title: "Telefon, WhatsApp i rezerwacja", text: "Jednym dotknięciem, na każdej podstronie" },
        { _key: k("o"), iconName: "map-pin", title: "Dane zgodne z wizytówką Google", text: "Adres, dzielnica, dojazd, godziny w sezonie" },
        { _key: k("o"), iconName: "gauge", title: "Szybka na telefonie", text: "Także na mobilnym internecie, w drodze i na miejscu" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i ChatGPT", text: "Fakty zapisane tekstem, dane strukturalne firmy" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy z Gdańska", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Oferty, wersje językowe, rezerwacje, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów i strona firmy skanowania laserowego 3D i BIM po angielsku, polsku i niemiecku pokazują to, czego potrzebuje gdańska firma z gośćmi lub klientami z zagranicy. Strona firmy remontowo-inwestycyjnej z Warszawy ma projekt premium — dla obiektów, które klient ocenia po wyglądzie — a jednostronicowa strona przechowalni opon i strona pracowni renowacji felg pokazują, jak mała lokalna firma może zacząć od prostej, szybkiej strony.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy z Gdańska",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron i języków oraz podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Dla kogo jest strona?", options: ["Klienci z Gdańska i okolic", "Turyści i goście", "Firmy i kontrahenci z zagranicy", "Kilka grup naraz"] },
        { _key: k("z"), question: "Co macie teraz?", options: ["Tylko wizytówkę Google", "Stronę z kreatora", "Starą stronę do przebudowy", "Profil na portalu rezerwacyjnym"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych w Gdańsku to u mnie projekt, wykonanie, teksty i uruchomienie strony dla firmy, której klienci mieszkają w Gdańsku i Trójmieście albo przyjeżdżają tu z zagranicy. Całość robi jedna osoba, cena jest znana z cennika, zanim napiszecie, a projekt graficzny jest w niej zawarty. Pracuję z Warszawy, a z gdańskimi firmami współpracuję online."),

        h2("Tworzenie stron internetowych w Gdańsku: co dostajecie"),
        p("W obu wariantach cenowych strona ma te same podstawy:"),
        li("projekt na telefon i komputer, przygotowany pod Waszą firmę, a nie gotowy szablon z podmienionym logo"),
        li("wykonanie w WordPressie albo Next.js, zależnie od tego, kto i jak często będzie stronę edytował"),
        li("podstawy SEO: tytuły, opisy, adresy podstron, dane strukturalne, Search Console i GA4"),
        li("formularz zgodny z RODO i baner cookies, który blokuje analitykę do czasu zgody"),
        li("panel, w którym sami zmieniacie ceny, godziny sezonowe i zdjęcia"),
        p("Domena, kod i treści należą do Was. Po starcie gdańska firma opłaca tylko hosting i domenę u wybranego dostawcy; mnie płaci wyłącznie za zmiany zamówione później, bez stałej opłaty."),

        h2("Strony internetowe dla firm z Gdańska: turystyka, gospodarka morska i usługi"),
        p("Gdańska strona internetowa rzadko ma jednego typowego odbiorcę. Hotel czy apartament nad Motławą pisze do gościa, który jeszcze nie przyjechał i porównuje ofertę z portalem rezerwacyjnym. Firma z branży morskiej — spedycja, serwis jednostek, projektowanie, dostawy dla stoczni i portu — pisze do kupca, który chce zobaczyć certyfikaty, parametry i referencje, zanim wyśle zapytanie ofertowe. Gabinet we Wrzeszczu albo warsztat na Oruni pisze do sąsiada, który chce wiedzieć, ile zapłaci i kiedy może przyjść."),
        p("Każdy z tych odbiorców potrzebuje innej strony głównej, innego układu podstron i innego przycisku: rezerwacji, zapytania ofertowego albo telefonu. Dlatego pierwsza rozmowa nie dotyczy kolorów, tylko tego, kim są Wasi klienci i skąd przychodzą."),
        p("W rosnącym mieście dochodzą jeszcze dwie grupy: firmy, które otwierają się przy nowych osiedlach, i firmy obsługujące biura i branżę IT w Trójmieście. Dla pierwszych liczy się szybki start i prosta strona, dla drugich — wersja angielska i ton pasujący do klienta korporacyjnego."),

        h2("Strona internetowa w Gdańsku dla gości z zagranicy: wersje językowe"),
        p("W Gdańsku wersja językowa często nie jest dodatkiem, tylko dużą częścią ruchu. Turyści z Niemiec i Skandynawii, goście z Wielkiej Brytanii, kontrahenci portu i pracownicy firm IT szukają po angielsku albo we własnym języku. Strona, która mówi do nich tylko po polsku, odsyła ich do portalu albo do konkurencji."),
        li("każda wersja ma własne adresy i oznaczenia hreflang, żeby Google pokazywał gościom z Niemiec wersję niemiecką"),
        li("tłumaczę to, czego naprawdę szukają: noclegi, menu, cennik, dojazd, ofertę dla firm — a nie każdą podstronę na siłę"),
        li("ceny, godziny i zasady rezerwacji są takie same we wszystkich wersjach"),
        li("formularz i informacja o RODO są w języku podstrony"),
        p(
          "Ukraińskojęzyczni mieszkańcy Trójmiasta to kolejna grupa, dla której wersja ukraińska bywa uzasadniona, np. w usługach medycznych, prawnych czy edukacyjnych. Więcej o budowie takich stron na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Jak klienci z Gdańska szukają firmy i co musi być na jej stronie"),
        p("Większość osób, które trafią na Waszą stronę, przyjdzie z telefonu: z Map Google, z wyszukiwania z nazwą dzielnicy — Oliwa, Przymorze, Zaspa, Chełm — albo z linku przesłanego w komunikatorze. Mają kilka sekund i chcą wiedzieć, czy jesteście blisko i jak do Was dojechać. W mieście, w którym przejazd z południowych osiedli do centrum w godzinach szczytu potrafi się dłużyć, informacja o parkingu, dojeździe tramwajem czy SKM ma realne znaczenie."),
        p("Gdańsk i Gdynia mają w Google osobne wyniki. Jeśli obsługujecie całe Trójmiasto, Pruszcz Gdański albo Żukowo, strona musi to powiedzieć wprost — w opisie obszaru działania, a przy większej stronie na osobnych podstronach z treścią napisaną dla tych miejsc."),

        h2("Agencja interaktywna w Gdańsku czy jeden wykonawca strony"),
        p("W wynikach dla „strony internetowe Gdańsk” jest wielu różnych wykonawców: trójmiejskie agencje interaktywne, małe studia, ogólnopolskie firmy z podstroną dla Gdańska, portal Oferteo i freelancerzy. Wyniki dla „tworzenie stron”, „projektowanie stron” i „strony internetowe” prawie się nie pokrywają, więc zależnie od tego, co wpiszecie, traficie na zupełnie inne oferty."),
        p("Agencja interaktywna przyda się, gdy obok strony potrzebujecie kampanii, identyfikacji wizualnej i obsługi mediów społecznościowych. Jeśli potrzebujecie strony, która przyprowadza zapytania, jeden wykonawca oznacza, że rozmawiacie z osobą, która projektuje i programuje, decyzja zapada w jednej wiadomości, a cena stoi w cenniku, a nie w ofercie po spotkaniu z handlowcem. Nie buduję sklepów internetowych — robię strony firmowe, usługowe i wielojęzyczne."),

        h2("Projektowanie stron w Gdańsku: projekt na podstawie Waszych zdjęć"),
        p("Projekt graficzny jest w cenie. Zaczynam od telefonu, bo tam strona będzie oglądana najczęściej, a potem rozkładam ją na komputer. Zamiast żurawi portowych i fontanny Neptuna ze stocku pokazuję Wasz lokal, zespół, realizacje i widok z okna, jeśli jest czym się pochwalić. Dobre zdjęcia z telefonu wystarczą; jeśli ich nie macie, podpowiadam, co sfotografować."),
        p("Dla hotelu czy restauracji najważniejsze są zdjęcia i rezerwacja, dla firmy B2B — czytelne tabele, pliki do pobrania i formularz zapytania ofertowego, a dla gabinetu czy warsztatu — ceny, terminy i dojazd. Projekt wynika z tego, co ma zrobić odwiedzający."),

        h2("Jakie podstrony powinna mieć strona internetowa firmy z Gdańska"),
        li("strona główna, która w pierwszym zdaniu mówi, co robicie i gdzie w Gdańsku jesteście"),
        li("podstrona każdej usługi, oferty noclegowej albo linii produktów — z cenami lub widełkami"),
        li("obszar działania: dzielnice, Trójmiasto, okoliczne gminy — tylko jeśli naprawdę tam pracujecie"),
        li("o firmie: ludzie, doświadczenie i certyfikaty, jeśli klient B2B ich szuka"),
        li("kontakt z mapą, dojazdem, parkingiem i godzinami w sezonie i poza nim"),
        p(
          "Firmy produkcyjne i budowlane z Pomorza mają do tego własne potrzeby, opisane na stronach ",
          link("strona dla firmy produkcyjnej", "/pl/strona-dla-firmy-produkcyjnej"),
          " i ",
          link("strona internetowa dla firmy budowlanej", "/pl/strona-internetowa-dla-firmy-budowlanej"),
          ".",
        ),

        h2("Strona internetowa, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Gość planujący weekend w Gdańsku pyta ChatGPT o nocleg blisko Długiego Targu z parkingiem, a kupiec z Hamburga — o gdańską firmę, która serwisuje określone urządzenia. Asystent poleca tylko tych, o których coś przeczyta. Na gdańskich stronach, które buduję, oferta, ceny, adres z dzielnicą, języki obsługi i godziny w sezonie są zwykłym tekstem, który asystent może zacytować, a znaczniki schema.org powtarzają dane z wizytówki Google. Wersja angielska i niemiecka mają te same fakty co polska."),
        p(
          "O stałej pracy nad poleceniami w asystentach piszę na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak powstaje strona dla firmy z Gdańska: współpraca online z Warszawy"),
        ol("Brief. Opisujecie firmę, klientów i to, skąd przychodzą — wystarczy wiadomość głosowa albo krótka rozmowa wideo."),
        ol("Lista podstron i języków oraz stała cena w widełkach z cennika."),
        ol("Projekt strony głównej i jednej podstrony, najpierw na telefon, uzgadniany w udostępnionym podglądzie."),
        ol("Wykonanie i teksty — piszę je po polsku, a wersje językowe przygotowuję z Wami lub z Waszym tłumaczem."),
        ol("Uruchomienie z domeną, Search Console, GA4 i podpiętą wizytówką Google."),
        p("Wszystko dzieje się online, więc nie musicie planować spotkań. Na prostą stronę trzeba zwykle zarezerwować od dwóch do czterech tygodni, na pełną z wersjami językowymi od czterech do ośmiu. Firma żyjąca z sezonu turystycznego powinna zamówić stronę zimą."),

        h2("Strona a pozycjonowanie w Gdańsku: gdzie kończy się budowa"),
        p(
          "Nowa strona dostaje solidne podstawy SEO, ale samo uruchomienie nie da miejsca na pierwszej stronie dla fraz z Gdańskiem — w turystyce i w popularnych usługach konkurencja jest duża. Jeśli macie starą stronę, przebudowa zachowuje adresy, które Google już zna, dzięki przekierowaniom. Dalsza praca nad widocznością to osobna usługa, opisana na stronie ",
          link("pozycjonowanie stron w Gdańsku", "/pl/pozycjonowanie-stron-gdansk"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa w Gdańsku: cennik i cena projektowania"),
        li("Prosta strona — strona główna, kilka podstron, kontakt, formularz zgodny z RODO: od 3000 do 6000 zł."),
        li("Pełna strona — podstrony usług lub ofert, wersje językowe, rezerwacje lub zapytania ofertowe, integracje, SEO lokalne: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie w obu przypadkach, a widełki są opublikowane w ",
          link("cenniku", "/pl/cennik"),
          ". Cenę obniżają własne teksty i zdjęcia albo start od mniejszej wersji; nie obniżam jej kosztem szybkości czy wersji mobilnej. Ogólnie o tym, jak buduję strony, piszę na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strony internetowe w Gdańsku: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych w Gdańsku?", "Za prostą stronę zapłacicie 3000–6000 zł, za pełną z ofertami, wersjami językowymi i rezerwacją od 8500 zł. Projekt graficzny jest w cenie, a widełki są w cenniku. Stałą cenę podaję po krótkim opisie firmy."],
          ["Ile trwa tworzenie strony internetowej dla firmy z Gdańska?", "Od briefu do startu mija zwykle miesiąc przy prostej stronie i do dwóch miesięcy przy pełnej z tłumaczeniami. Najwięcej zależy od tego, jak szybko gotowe są zdjęcia, teksty i tłumaczenia."],
          ["Czy strona może mieć wersję angielską i niemiecką?", "Tak. Wersje angielska i niemiecka dostają osobne adresy URL i znaczniki hreflang. Tłumaczę to, co czytają goście i kontrahenci — ofertę, ceny, dojazd i kontakt — a nie wszystko po kolei."],
          ["Agencja interaktywna z Gdańska czy wykonawca z Warszawy — jak wygląda kontakt?", "Pracuję z Warszawy, a z firmami z Gdańska współpracuję online: rozmowa wideo, podgląd projektu w przeglądarce, uwagi w jednym dokumencie. Rozmawiacie bezpośrednio z osobą, która projektuje i programuje stronę."],
          ["Czy strona pomoże w Mapach Google?", "Strona ma te same dane co wizytówka — nazwę, adres, telefon i godziny — oraz dane strukturalne, które je potwierdzają. To podstawa widoczności w Mapach; dalsza praca nad wizytówką jest częścią pozycjonowania."],
          ["Czy kreator stron wystarczy małej firmie z Gdańska?", "Czasem tak — przy jednej usłudze i klientach z polecenia. Gdy potrzebujecie wersji językowych, rezerwacji albo kilku usług widocznych w Google osobno, strona na zamówienie opłaca się bardziej niż rosnący abonament."],
          ["Czy robisz sklepy internetowe?", "Nie. Buduję strony firmowe, usługowe i wielojęzyczne, z rezerwacją lub zapytaniem ofertowym, ale nie sklepy z koszykiem i płatnościami."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową w Gdańsku: co mi wysłać"),
        p(
          "Opiszcie w kilku zdaniach, czym zajmuje się firma i dla kogo, dodajcie adres obecnej strony albo wizytówki, języki gości i kontrahentów oraz parę zdjęć z Gdańska — lokalu, obiektu, realizacji. W odpowiedzi zaproponuję układ podstron i podam stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
