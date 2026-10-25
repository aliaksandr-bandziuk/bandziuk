// Landing page fixture: Tworzenie stron internetowych Bydgoszcz (PL), group
// «tworzenie-stron-internetowych-bydgoszcz». City page, stage 3 pilot (BRIEF.md).
// Semantic core (ref/city-keywords.md, ref/pl-cities.md): strony internetowe
// bydgoszcz 590 · tworzenie stron internetowych bydgoszcz 260 · agencja
// reklamowa bydgoszcz 260 · agencja marketingowa bydgoszcz 260. Also in
// headings/FAQ: «strona internetowa Bydgoszcz», «projektowanie stron
// Bydgoszcz», «cennik».
// PAA: Jaka jest cena projektowania stron internetowych? (H2 + FAQ).
// Intent (ref/intent-check-pl-cities.md): SEO vs website SERPs share 0 URLs →
// separate pages; «tworzenie», «projektowanie», «strony internetowe» share 0–1
// URLs in every checked city → one page with all of them in headings/FAQ.
// Bydgoszcz and Toruń are separate SERPs (Toruń has its own page).
// City angle (no doorway): industrial city — sites for plants and
// subcontractors (capabilities, machine park, drawings in the RFQ form,
// certificates, EN/DE), recruitment of technicians and graduates; services in
// Fordon and the suburban gminas (Osielsko, Białe Błota, Solec Kujawski);
// local agencies reklamowe/marketingowe and Oferteo in the SERP.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna strona od 8500 zł,
// projekt graficzny w cenie.
// NOT on this page: pozycjonowanie, wizytówka Google, Bydgoszcz–Toruń SERP
// detail (/pl/pozycjonowanie-stron-bydgoszcz); multilingual builds in general
// (/pl/oferty/tworzenie-stron-wielojezycznych); e-commerce and B2B shops
// (not offered).
// Owner’s rules: AI-search H2; never say there are no clients from the
// visitor’s city or industry; remote from Warsaw, no promise of visits.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychBydgoszczPl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-bydgoszcz",
  slug: "tworzenie-stron-internetowych-bydgoszcz",
  title: "Tworzenie stron internetowych Bydgoszcz",
  heading: "Tworzenie stron internetowych w Bydgoszczy",
  excerpt:
    "Tworzenie stron internetowych w Bydgoszczy prowadzę dla zakładów produkcyjnych, ich poddostawców i lokalnych firm usługowych: projekt graficzny, wykonanie, teksty, formularz zapytania ofertowego i podstawy SEO. Jedna osoba za całość, zdalnie z Warszawy, ceny w cenniku.",
  seo: {
    metaTitle: "Strony internetowe Bydgoszcz: od 3000 zł | Bandziuk",
    metaDescription:
      "Strony internetowe dla firm z Bydgoszczy: zakłady produkcyjne, usługi w Fordonie i okolicach. Projekt w cenie, zapytanie ofertowe z rysunkiem, RODO. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Strony dla przemysłu i usług"],
  heroPhonePoints: ["Park maszynowy", "Wyślij rysunek", "Zadzwoń · WhatsApp", "Praca u nas"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy z Bydgoszczy, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona firmy z Bydgoszczy z podstronami usług lub technologii, formularzem zapytania ofertowego, zakładką kariery, wersją angielską lub niemiecką i SEO, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową w Bydgoszczy",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrony usług albo technologii", text: "Możliwości, materiały, serie, realizacje" },
        { _key: k("o"), iconName: "file-text", title: "Zapytanie ofertowe z załącznikiem", text: "Rysunek, ilość i termin w jednym formularzu" },
        { _key: k("o"), iconName: "image", title: "Zdjęcia z hali, warsztatu, realizacji", text: "Zamiast stocku — to, co klient zobaczy na miejscu" },
        { _key: k("o"), iconName: "message-circle", title: "Wersja angielska lub niemiecka", text: "Dla odbiorców i partnerów z zagranicy" },
        { _key: k("o"), iconName: "shield-check", title: "Formularze zgodne z RODO", text: "Także formularz aplikacji w zakładce kariery" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty tekstem, dane strukturalne firmy" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy z Bydgoszczy", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Technologie, zapytania, kariera, wersje językowe", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony firm technicznych i usługowych, które zaprojektowałem i zbudowałem",
      subtitle:
        "Przebudowana strona firmy skanowania laserowego 3D i modelowania BIM, w trzech językach, przynosi zapytania co tydzień — to przykład strony dla firmy technicznej sprzedającej innym firmom, jakich w Bydgoszczy jest wiele. Obok niej strony warszawskich firm usługowych: warsztatu samochodowego, pracowni renowacji felg, przechowalni opon i firmy remontowo-inwestycyjnej, zbudowane tak, żeby klient z telefonu szybko zadzwonił albo wysłał zapytanie.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy z Bydgoszczy",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: lista podstron, potrzebne formularze i wersje językowe oraz stała cena w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Czym zajmuje się firma?", options: ["Produkcja lub obróbka na zlecenie", "Usługi dla mieszkańców", "Budowa lub remonty", "Inna działalność"] },
        { _key: k("z"), question: "Co ma robić strona?", options: ["Przynosić zapytania ofertowe", "Przynosić telefony od klientów", "Pomagać w rekrutacji", "Wszystko naraz"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych w Bydgoszczy to usługa, którą wykonuję dla zakładów produkcyjnych, ich poddostawców i firm usługowych z miasta oraz okolicznych gmin. Planuję strukturę, projektuję, programuję, piszę teksty i uruchamiam stronę, a cenę znacie z cennika, zanim do mnie napiszecie. Pracuję z Warszawy; z bydgoskimi firmami współpracuję online, na rozmowach wideo i we wspólnych dokumentach, więc nikt nie musi wychodzić z hali ani z biura na spotkanie."),

        h2("Tworzenie stron internetowych Bydgoszcz: projekt, wykonanie i teksty w jednej cenie"),
        p("Każda strona, którą buduję, ma projekt graficzny przygotowany dla Waszej firmy, wersję na telefon i komputer, hosting z SSL, domenę, tytuły i opisy podstron, dane strukturalne oraz podpięte GA4 i Google Search Console. Teksty piszę na podstawie rozmowy z Wami, a panel pozwala samodzielnie zmieniać treści, zdjęcia i oferty pracy. Wykonanie w Next.js albo WordPressie dobieram do tego, kto będzie stronę potem edytował."),

        h2("Strona internetowa dla zakładu z Bydgoszczy: możliwości produkcyjne i zapytanie ofertowe"),
        p("Bydgoszcz ma silną tradycję przemysłową: chemia, przetwórstwo tworzyw, narzędziownie, budowa maszyn, elektronika, tabor kolejowy i cała sieć firm, które dla tych zakładów obrabiają, malują, spawają i montują. Strona takiej firmy jest czytana przez inżyniera albo zaopatrzeniowca, który porównuje dostawców i chce szybko ocenić, czy zlecenie ma sens. Dlatego ma:"),
        li("podstrony technologii i usług z konkretami: materiały, wymiary, tolerancje, wielkości serii, wykończenie"),
        li("park maszynowy opisany tekstem — producent, model, zakres pracy — a nie tylko zdjęcie hali"),
        li("certyfikaty, normy i branże, dla których produkujecie, bez nazw klientów, jeśli się na nie nie zgodzili"),
        li("formularz zapytania ofertowego z polem na rysunek lub plik 3D, ilością i terminem"),
        li("wersję angielską lub niemiecką, jeśli sprzedajecie za granicę"),
        p("Bydgoscy poddostawcy często sprzedają do Niemiec, Skandynawii czy Holandii. Wersja angielska albo niemiecka nie musi obejmować całej strony: wystarczą technologie, park maszynowy, certyfikaty i formularz zapytania, przetłumaczone przez osobę znającą słownictwo techniczne, z własnymi adresami podstron. Zagraniczny zaopatrzeniowiec od razu widzi wtedy, że może napisać w swoim języku."),
        p(
          "Więcej o stronach dla przemysłu piszę na stronie ",
          link("strona dla firmy produkcyjnej", "/pl/strona-dla-firmy-produkcyjnej"),
          ".",
        ),

        h2("Strona firmy z Bydgoszczy, która pomaga w rekrutacji"),
        p("Bydgoskie zakłady i firmy usługowe szukają operatorów maszyn CNC, spawaczy, elektryków, automatyków i absolwentów uczelni technicznych. Kandydat, zanim wyśle CV, wchodzi na stronę firmy i sprawdza, jak wygląda praca na miejscu. Zakładka kariery z aktualnymi ofertami, zdjęciami stanowisk, informacją o zmianach i dojeździe oraz prostym formularzem aplikacji często daje więcej niż kolejne ogłoszenie na portalu. Oferty pracy dodajecie i zamykacie sami w panelu, a formularz ma klauzulę RODO dla rekrutacji."),

        p("Dla firm, które szukają praktykantów i absolwentów, przydaje się też krótka podstrona o praktykach i stażach: jakie działy przyjmują studentów, w jakim okresie i czego się nauczą. Studenci kierunków technicznych z Bydgoszczy szukają takich informacji w Google, zanim wyślą zgłoszenie."),

        h2("Strony internetowe dla usług w Bydgoszczy i okolicach: Fordon, Osielsko, Białe Błota"),
        p("Firmy usługowe z Bydgoszczy pracują zwykle w konkretnej części miasta albo w kilku gminach naraz. Ekipa wykończeniowa z Białych Błot robi łazienki w nowych domach w Łochowie i na Miedzyniu, gabinet fizjoterapii z Fordonu przyjmuje pacjentów z Osielska i Niemcza, warsztat z Kapuścisk obsługuje kierowców z Solca Kujawskiego. Strona takiej firmy pokazuje obszar działania na mapie, realizacje z tych miejscowości i ceny dojazdu, a telefon i WhatsApp są widoczne na każdej podstronie."),
        p("Osobną grupą są gabinety, przychodnie i szkoły, które obsługują studentów bydgoskich uczelni i pacjentów przyjeżdżających do szpitali klinicznych z całego regionu. Ich strona potrzebuje przede wszystkim jasnego cennika, rejestracji online lub telefonicznej, dojazdu komunikacją miejską i informacji, czy przyjmujecie w ramach NFZ."),
        p(
          "Warsztaty samochodowe mają własne potrzeby — terminy, usługi z cenami, zdjęcia stanowisk — i opisuję je na stronie ",
          link("tworzenie stron dla warsztatów samochodowych", "/pl/tworzenie-stron-dla-warsztatow-samochodowych"),
          ".",
        ),

        h2("Strony internetowe Bydgoszcz: agencje reklamowe, studia i Oferteo"),
        p("Po wpisaniu „strony internetowe Bydgoszcz” albo „tworzenie stron internetowych Bydgoszcz” widać bydgoskie agencje reklamowe i marketingowe, małe studia, freelancerów i Oferteo. Agencje często łączą stronę z drukiem, reklamą i obsługą mediów społecznościowych, studia skupiają się na samej stronie, a freelancerzy oferują najniższe ceny."),
        h3("Jak porównać oferty na stronę internetową w Bydgoszczy"),
        li("czy cena obejmuje projekt, teksty i wersję mobilną, czy tylko wdrożenie szablonu"),
        li("czy formularze są zgodne z RODO i dokąd trafiają dane"),
        li("czy po uruchomieniu trzeba płacić abonament wykonawcy"),
        li("do kogo należą domena, kod i treści"),

        h2("Projektowanie stron w Bydgoszczy przez jedną osobę: co to zmienia"),
        p("Przy stronie dla firmy technicznej najwięcej czasu traci się na tłumaczenie, czym firma się zajmuje — najpierw handlowcowi, potem grafikowi, potem copywriterowi. U mnie rozmawiacie z jedną osobą, która zadaje pytania, projektuje, programuje i pisze teksty, więc szczegóły technologii przechodzą na stronę bez przekłamań. Nie buduję sklepów internetowych ani platform B2B i nie prowadzę reklam; jeśli tego potrzebujecie, powiem to od razu."),

        h2("Podstrony strony internetowej bydgoskiej firmy: usługi, technologie, kariera"),
        p("Firma usługowa potrzebuje zwykle strony głównej z jasnym zdaniem o tym, co robi i gdzie, podstrony każdej usługi z ceną lub widełkami, galerii realizacji, informacji o ludziach w firmie i kontaktu z mapą, godzinami i numerem NIP. Zakład produkcyjny potrzebuje więcej:"),
        li("podstrony każdej technologii lub grupy wyrobów"),
        li("parku maszynowego i działu kontroli jakości"),
        li("branż, dla których pracujecie, opisanych ogólnie"),
        li("zakładki kariery i formularza zapytania ofertowego"),
        p("Aktualności i blog zakładam tylko wtedy, gdy ktoś w firmie będzie je regularnie uzupełniał."),

        h2("Kreator stron czy strona na zamówienie dla firmy z Bydgoszczy"),
        p("Kreator wystarczy małej firmie z jedną usługą i klientami z polecenia. Strona na zamówienie opłaca się, gdy macie kilka usług lub technologii, potrzebujecie formularza z załącznikami, zakładki kariery, wersji językowej albo chcecie, żeby strona była Wasza i dała się przenieść. Przejście z kreatora to w praktyce budowa od nowa, więc lepiej zdecydować na początku."),

        h2("Strona internetowa firmy z Bydgoszczy, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Asystenci AI coraz częściej pomagają wybrać dostawcę albo usługę: „firma od malowania proszkowego w okolicach Bydgoszczy”, „elektryk Fordon z terminem w tym tygodniu”. ChatGPT, Perplexity i podsumowania AI w Google wybierają firmy, których strony odpowiadają na takie pytania wprost. Dlatego technologie, materiały, zasięg dostaw i godziny pracy opisuję zwykłym tekstem, a nie tylko na zdjęciach i w PDF-ach, a dane strukturalne wskazują Google nazwę firmy, adres, zakres usług i godziny — te same co w wizytówce."),
        p(
          "Stałą pracę nad widocznością w asystentach opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a pozycjonowanie w bydgoskich wynikach Google — na stronie ",
          link("pozycjonowanie stron w Bydgoszczy", "/pl/pozycjonowanie-stron-bydgoszcz"),
          ".",
        ),

        h2("Przebudowa starej strony bydgoskiej firmy bez utraty pozycji"),
        p(
          "Wiele bydgoskich zakładów ma stronę sprzed lat: wolną, bez wersji mobilnej, z katalogiem w PDF i nieaktualnymi danymi. Przebudowa zachowuje domenę i adresy, które przynoszą wejścia, a stare podstrony dostają przekierowania. Katalog z PDF zamieniam na podstrony, które Google i asystenci AI potrafią przeczytać. Proces opisuję na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Etapy tworzenia strony internetowej dla firmy z Bydgoszczy"),
        ol("Rozmowa online: co produkujecie lub jakie usługi świadczycie, dla kogo i gdzie."),
        ol("Lista podstron, formularzy i wersji językowych oraz stała cena."),
        ol("Projekt strony głównej i jednej podstrony usługi lub technologii do akceptacji."),
        ol("Wykonanie i teksty; dane techniczne sprawdza osoba z Waszej firmy."),
        ol("Uruchomienie z analityką, Search Console i instrukcją dodawania ofert pracy i realizacji."),
        p("Zdjęcia hali, maszyn i realizacji to często najmocniejsza część strony zakładu. Wystarczy telefon i dzienne światło; przed sesją wysyłam listę ujęć."),

        h2("Tworzenie stron internetowych Bydgoszcz: cennik i cena projektowania"),
        li("Prosta strona — kilka podstron oferty, informacja o firmie, kontakt z dojazdem i formularz z klauzulą RODO, bez zakładki kariery i wersji językowych: od 3000 do 6000 zł."),
        li("Pełna strona — podstrony usług lub technologii, park maszynowy, formularz zapytania z załącznikiem, zakładka kariery, wersja angielska lub niemiecka i SEO: od 8500 zł."),
        p(
          "Obie ceny obejmują projekt graficzny, a pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Stałej opłaty dla mnie po uruchomieniu nie ma — płacicie dostawcy za hosting i domenę, a za ewentualne nowe podstrony czy funkcje dostajecie osobną wycenę. Ogólny opis mojej pracy jest na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Tworzenie stron internetowych w Bydgoszczy: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych w Bydgoszczy?", "Za prostą stronę z projektem płacicie od 3000 do 6000 zł. Pełna strona z podstronami technologii, formularzem zapytania z załącznikiem, zakładką kariery i wersją językową — od 8500 zł. Konkretną kwotę dostajecie po krótkim opisie zakładu lub usług."],
          ["Czy robisz strony dla firm produkcyjnych z Bydgoszczy?", "Tak. Strona zakładu opisuje technologie, materiały, park maszynowy i certyfikaty, a formularz pozwala wysłać rysunek, ilość i termin. Sklepów internetowych i platform B2B nie buduję."],
          ["Czy strona może pomóc w rekrutacji pracowników?", "Tak. Zakładka kariery z aktualnymi ofertami, zdjęciami stanowisk i prostym formularzem aplikacji pokazuje kandydatom, jak wygląda praca u Was. Oferty dodajecie i zamykacie sami."],
          ["Ile trwa stworzenie strony dla firmy z Bydgoszczy?", "Na prostą stronę trzeba zwykle zarezerwować dwa–cztery tygodnie, na pełną z wersją językową cztery–osiem. Najdłużej trwa zwykle zebranie danych technicznych i zdjęć."],
          ["Agencja reklamowa w Bydgoszczy czy jeden wykonawca?", "Agencja reklamowa przyda się, jeśli oprócz strony zamawiacie druk, reklamy i obsługę mediów społecznościowych. Gdy chodzi tylko o stronę, rozmawiacie u mnie bezpośrednio z wykonawcą i znacie cenę przed startem."],
          ["Czy pracujesz z firmami z Bydgoszczy zdalnie?", "Tak, z Warszawy, w całości online: rozmowa wideo, projekt w przeglądarce, wspólne dokumenty. Listę potrzebnych zdjęć dostajecie ode mnie, a robi je ktoś z firmy albo fotograf z Bydgoszczy."],
          ["Do kogo należy strona po uruchomieniu?", "Do Was: domena, kod i treści. Stronę można przenieść do innego hostingu lub wykonawcy, a ja nie pobieram abonamentu."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową w Bydgoszczy: co mi wysłać"),
        p(
          "Napiszcie, czym zajmuje się firma i czy strona ma przynosić zapytania ofertowe, kandydatów do pracy czy jedno i drugie. Dodajcie link do obecnej strony i języki, w których rozmawiacie z klientami. W ciągu jednego dnia roboczego wrócę z listą podstron i ceną, która nie zmieni się bez Waszej zgody. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
