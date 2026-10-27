// Landing page fixture: Strona internetowa dla food trucka (PL), group
// «food-truck-website-design». New page. Market version for Polish food
// trucks, not a translation of food-truck-website-design.en. In PL this is a
// development page that includes design.
// Semantic core: ref/food-venues.md has no measured PL phrases for food trucks;
// target phrases from the BRIEF.md slug and angles: «strona internetowa dla
// food trucka» (H1, H2, cost H2, FAQ), «strona food trucka» (metaTitle, H2),
// «food truck na wesele» / «food truck na imprezę firmową» (H2 on bookings),
// «strona wizytówka» (H2 one page vs several).
// Intent: ref/intent-check-food.md — EN «food truck website design» vs «food
// truck website» 0 of 10 shared URLs: the design SERP is owners choosing how to
// build, the plain SERP is food truck finders (customers) → the page targets
// owners.
// Polish angles: dzisiejszy postój i godziny, grafik z telefonu (place
// foodtruckowe, browary, pikniki, zloty), menu z „wyprzedane” i kodem QR,
// rezerwacje na wesela, komunie, osiemnastki i imprezy firmowe z zaliczką
// BLIK, informacje dla organizatorów (wymiary, prąd 230/400 V, decyzja
// sanepidu, faktura), Facebook i Instagram vs strona, szybkość na festiwalu,
// strona wizytówka vs podstrony, kreator vs strona na zamówienie,
// AI-readable build, cost.
// NOT on this page: pozycjonowanie i Mapy Google → /pl/oferty/pozycjonowanie-
// lokalne; catering jako główna działalność →
// /pl/strona-internetowa-dla-firmy-cateringowej (linked once); lokal z
// obsługą przy stolikach → /pl/strona-dla-restauracji (closest restaurant
// page, linked once, no shared arguments).
// Portfolio: DJ Sasha Dith (events, booking, speed — named in the brief for
// food trucks), przechowalnia opon (one page), Landi Room (Stripe deposits),
// warsztat samochodowy (Mapy Google), Giuseppe (ChatGPT). Restaurants under NDA
// mentioned once, positively.
// Prices: /pl/cennik (3000–6000 zł, od 8500 zł), projekt w cenie. Owner’s
// rules: every page covers AI search; never say there are no clients from the
// visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const foodTruckWebsiteDesignPl = {
  lang: "pl",
  group: "food-truck-website-design",
  slug: "strona-internetowa-dla-food-trucka",
  title: "Strona internetowa dla food trucka",
  heading: "Strona internetowa dla food trucka",
  excerpt:
    "Tworzę strony internetowe dla food trucków: dzisiejszy postój i grafik na tydzień, który zmieniacie z telefonu, menu z cenami i oznaczeniem „wyprzedane”, formularz rezerwacji na wesela, imprezy firmowe i festiwale z zaliczką BLIK oraz strony, które otwierają się szybko nawet przy słabym zasięgu.",
  seo: {
    metaTitle: "Strona food trucka: grafik postojów i rezerwacje | Bandziuk",
    metaDescription:
      "Strona internetowa dla food trucka: dzisiejszy postój i grafik zmieniany z telefonu, menu z cenami, rezerwacje na wesela i eventy z zaliczką BLIK. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Dziś: Bulwary, 12:00–20:00", "Grafik na ten tydzień", "Menu · wyprzedane", "Zarezerwuj na wesele"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla food trucka, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona food trucka z grafikiem postojów edytowanym z telefonu, menu z oznaczeniem wyprzedanych dań, rezerwacjami z zaliczką, podstroną dla organizatorów i miejscem na drugi pojazd, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową dla food trucka",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "Dzisiejszy postój na pierwszym ekranie", text: "Adres, godziny i trasa jednym dotknięciem" },
        { _key: k("o"), iconName: "layers", title: "Grafik zmieniany z telefonu", text: "Stałe miejsca, eventy, odwołania przez pogodę" },
        { _key: k("o"), iconName: "file-text", title: "Menu tekstem, nie zdjęciem tablicy", text: "Ceny, dania dnia, „wyprzedane”" },
        { _key: k("o"), iconName: "message-circle", title: "Rezerwacje na wesela i eventy", text: "Data, goście, miejsce, prąd, budżet" },
        { _key: k("o"), iconName: "gauge", title: "Szybka przy słabym zasięgu", text: "Lekkie strony, które otwierają się na festiwalu" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczna dla Google i ChatGPT", text: "Postoje, menu i godziny zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona food trucka", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Grafik, menu, rezerwacje z zaliczką, organizatorzy", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony eventowe i lokalne, które zbudowałem",
      subtitle:
        "Te strony robią to, czego potrzebuje food truck: przyjmują rezerwacje na wydarzenia, szybko pokazują dużo zdjęć i wideo, działają jako jedna strona prowadzona przez właściciela i przyprowadzają klientów z map. DJ i producent Sasha Dith ma stronę na Next.js z galerią wideo i formularzem rezerwacji, która ładuje się w mniej niż sekundę. Warszawska przechowalnia opon działa na jednej stronie, której teksty właściciel zmienia sam. Salon Landi Room przyjmuje płatności przez Stripe Checkout — tak można przyjmować zaliczki za eventy. Warsztat samochodowy z Warszawy zdobywa klientów z Map Google i lokalnych wyników. Nowe podstrony psychoterapeuty z Mediolanu pojawiają się w odpowiedziach ChatGPT. Budowałem też strony dla restauracji, których właściciele poprosili, żebym nie pokazywał ich publicznie.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "official-website-for-dj-and-producer-sasha-dith",
        "tyre-storage-landing-page-with-editable-seo",
        "e-commerce-landing-page-with-secured-video-access",
        "auto-repair-seo-and-ux-boost",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla food trucka",
      subtitle: "Następnego dnia roboczego dostajecie listę podstron, opis tego, jak zadziała grafik i rezerwacje, oraz stałą cenę.",
      contextLabel: "Nazwa food trucka, strona lub profil",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Tylko Facebook i Instagram", "Darmową stronę z kreatora", "Profil w katalogu food trucków", "Starą stronę"] },
        { _key: k("z"), question: "Co strona ma przynosić najpierw?", options: ["Klientów na dzisiejszy postój", "Wesela i imprezy prywatne", "Festiwale i eventy firmowe", "Wszystko po trochu"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla food trucka zbiera w jednym miejscu to, co w tej branży zmienia się najczęściej: gdzie dziś stoicie, co dziś wydajecie i jak zarezerwować auto na wesele albo piknik firmowy. Projektuję ją i wykonuję sam, a grafik postojów i menu zmieniacie potem z telefonu w kabinie, bez dzwonienia do programisty. Cenę ustalamy przed rozpoczęciem pracy i ona się nie zmienia."),

        h2("Strona internetowa dla food trucka: gdzie stoicie dziś i do której godziny"),
        p("Kto wchodzi na stronę food trucka, zwykle pyta o jedno: gdzie was dziś znajdę? Pierwszy ekran odpowiada na to, zanim pokaże cokolwiek innego:"),
        li("dzisiejsze miejsce — plac foodtruckowy, browar, osiedle biurowe, bulwary — z godzinami wydawania i przyciskiem trasy w Mapach Google"),
        li("godzina ostatniej aktualizacji, żeby nikt nie zastanawiał się, czy informacja nie jest sprzed tygodnia"),
        li("jutrzejszy postój dla tych, którzy planują obiad z wyprzedzeniem"),
        li("przycisk „Zarezerwuj na event”, który na telefonie zostaje widoczny przy przewijaniu"),
        p("W dzień wolny to samo miejsce mówi wprost: „Dziś nie wydajemy — w sobotę jesteśmy na zlocie w Parku Śląskim”. To uczciwsze niż stary post na Facebooku, przez który ktoś jedzie na pusty parking."),

        h2("Grafik postojów food trucka aktualizowany z telefonu"),
        p("Większość food trucków ma tygodniowy rytm: we wtorki biurowiec, w piątki browar, w weekendy pikniki i zloty, a pomiędzy nimi wesela i imprezy firmowe. Kalendarz na stronie działa tak samo. Stałe postoje wpisujecie raz i powtarzają się same, jednorazowe wydarzenia dokładacie na wierzch, a pojedynczy dzień odwołujecie jednym dotknięciem, gdy pada albo zepsuł się agregat."),
        p("Edycja odbywa się w małym formularzu zrobionym pod ekran telefonu: data, zapisane miejsce albo nowy adres, godziny, zapisz. Każdy postój ma pinezkę na mapie, a klienci mogą dodać Wasz tydzień do swojego kalendarza. Browary i place, na których stajecie regularnie, mogą mieć na stronie wzmiankę z linkiem — chętnie udostępniają ją u siebie."),

        h2("Menu food trucka na stronie: ceny, dania dnia i oznaczenie „wyprzedane”"),
        p("Menu food trucka jest krótkie i zmienia się z wydarzeniem, porą roku i tym, co skończyło się o czternastej. Na stronie zostaje tekstem, nie zdjęciem kredowej tablicy:"),
        li("od ośmiu do piętnastu pozycji z cenami w złotych, jednym zdaniem opisu i oznaczeniem dań wegetariańskich lub bezglutenowych"),
        li("przełącznik „wyprzedane”, który klikacie w trakcie wydawania, żeby kolejka widziała to przed okienkiem"),
        li("dania dnia lub tygodnia nad stałą kartą"),
        li("osobne menu na imprezy zamknięte, gdy wydajecie ustalony zestaw"),
        p("Kod QR na burcie auta otwiera tę podstronę od razu. Klienci czytają menu na własnych telefonach, zanim dojdą do okienka, a Wy nie przepisujecie tablicy przy każdej zmianie ceny."),

        h2("Food truck na wesele, imprezę firmową i piknik: formularz rezerwacji"),
        p("Wesela, komunie, osiemnastki, pikniki firmowe i dni otwarte w zakładach często dają więcej niż dzień sprzedaży na ulicy, a organizator chce znać odpowiedzi przed telefonem. Formularz rezerwacji pyta o to, czego potrzebujecie do wyceny:"),
        li("datę, godziny wydawania i adres wydarzenia"),
        li("liczbę gości i to, czy płacą sami, czy gospodarz wykupuje ustalone menu"),
        li("miejsce i prąd: gdzie stanie auto, czy jest gniazdo 230 V lub siła, czy przywozicie agregat"),
        li("widełki budżetu albo minimalną kwotę zamówienia, wybierane z listy"),
        p("Zapytania przychodzą na skrzynkę w jednym formacie. Gdy potwierdzacie termin, organizator dostaje link do płatności — BLIK, karta lub przelew online — i po wpłacie zaliczki data w kalendarzu oznacza się jako zajęta."),

        h2("Informacje dla organizatorów festiwali i zlotów food trucków"),
        p("Organizator festiwalu albo eventu firmowego porównuje kilka aut, zanim wybierze, i szuka faktów, których nie ma na Instagramie. Osobna podstrona podaje długość i szerokość pojazdu, zapotrzebowanie na prąd, ile porcji wydajecie w godzinę, informację o decyzji sanepidu i ubezpieczeniu oraz zdjęcia auta rozstawionego na prawdziwych wydarzeniach. Firmy chcą też wiedzieć, że wystawiacie faktury i odpowiadacie na maile. Wszystko w jednym miejscu oszczędza rundę pytań i pokazuje, że jesteście gotowi na większe zlecenia."),
        p("Na tej samej podstronie warto pokazać wydarzenia, na których już byliście — z nazwą zlotu lub firmy, jeśli się na to zgadzają — i ile osób obsłużyliście. Organizatorzy zlotów pilnują też, żeby nie wpuścić trzech aut z tym samym daniem, więc krótka lista Waszych specjalności i zdjęcie karty pomagają przejść pierwszą selekcję."),

        h2("Facebook, Instagram i strona food trucka: co gdzie publikować"),
        p("Wiele food trucków codziennie rano wrzuca lokalizację na Facebooka albo Instagram i ten zwyczaj może zostać. Posty trafiają do obserwujących, a strona trzyma to, czego szukają nieznajomi: grafik na tydzień, menu, formularz rezerwacji i zdjęcia z wydarzeń. Pojawia się też w Google przed osobami, które nigdy Was nie obserwowały. Strona linkuje do profili, a profile do strony. Osadzone kanały z mediów społecznościowych są ciężkie i często się psują, więc strona pokazuje własny grafik zamiast strumienia postów."),

        h2("Szybka strona food trucka przy słabym zasięgu na festiwalu"),
        p("Klienci otwierają stronę, stojąc obok auta, często na zlocie, gdzie setki telefonów walczą o jeden nadajnik. Strona, która ładuje się tam sześć sekund, dla nich nie istnieje. Dlatego budowa jest lekka: pierwszy ekran to tekst i jedno skompresowane zdjęcie, mało krojów pisma, bez wideo uruchamianego automatycznie i bez zbędnych skryptów śledzących. Zdjęcia dań ładują się dopiero przy przewijaniu, a menu da się przeczytać, zanim jakikolwiek obrazek się wczyta. Strona DJ-a Sashy Ditha ma pełną galerię wideo i ładuje się poniżej sekundy; strona food trucka ma do udźwignięcia znacznie mniej."),

        h2("Strona wizytówka czy kilka podstron dla food trucka"),
        p("Na początek często wystarczy jedna strona: dzisiejszy postój, grafik, menu, formularz rezerwacji i linki do profili w jednym przewijaniu. Osobne podstrony zaczynają się opłacać, gdy imprezy zamknięte robią się dużą częścią przychodu, gdy jeździcie dwoma autami po różnych trasach albo gdy dochodzi stały punkt czy kuchnia. Każda z tych rzeczy potrzebuje własnego adresu, żeby można ją było znaleźć w Google i komuś przesłać. Jednostronicowa strona może później urosnąć bez zmiany domeny."),
        p(
          "Prostą jednostronicową stronę opisuję na stronie ",
          link("strona wizytówka", "/pl/oferty/strona-wizytowka"),
          ", a jeśli catering na wydarzenia staje się Waszą główną działalnością, zajrzyjcie na ",
          link("stronę internetową dla firmy cateringowej", "/pl/strona-internetowa-dla-firmy-cateringowej"),
          ".",
        ),

        h2("Kreator, szablon czy strona food trucka na zamówienie"),
        p("Wix, WebWave czy gotowe szablony WordPressa pozwalają postawić stronę food trucka w weekend. To działa, jeśli godzicie się co tydzień przepisywać grafik w bloku tekstu i dostawać zapytania o wesela zwykłym mailem. Ograniczenia wychodzą w codziennej pracy: edytor jest niewygodny na telefonie, każda wtyczka spowalnia stronę, a kalendarz nie umie sam powtarzać postojów. Strona na zamówienie ma grafik, który powtarza się sam, przełącznik „wyprzedane” i formularz ułożony pod Wasze wydarzenia, a domena i kod należą do Was."),

        h2("Strona food trucka, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Pytania „jakie food trucki są w ten weekend na bulwarach” albo „food truck z burgerami na wesele pod Poznaniem” ludzie zadają dziś ChatGPT i podsumowaniom AI w Google równie często jak zwykłej wyszukiwarce. Odpowiedź powstaje z tego, co da się odczytać na stronach, więc każdy postój jest zapisany tekstem z datą, godziną i adresem, menu i ceny też są tekstem, a food truck ma dane strukturalne schema.org jako lokal gastronomiczny. Według tych samych zasad działa strona Giuseppe z Mediolanu, a ChatGPT cytuje już jej nowe podstrony."),
        p(
          "Stałą widoczność w odpowiedziach AI opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a Mapy Google i wyniki z okolicy — na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ". Lokal z obsługą przy stolikach i rezerwacjami potrzebuje innej strony, opisanej na stronie ",
          link("strona internetowa dla restauracji", "/pl/strona-dla-restauracji"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla food trucka"),
        li("Prosta strona food trucka — dzisiejszy postój, grafik, menu, formularz rezerwacji i linki do profili na jednej lub kilku podstronach: od 3000 do 6000 zł."),
        li("Strona z grafikiem edytowanym z telefonu, przełącznikami „wyprzedane”, menu na imprezy, podstroną dla organizatorów, zaliczkami online i miejscem na drugie auto lub kuchnię: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie w obu wariantach. Etapy pracy znajdziecie na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a pełną listę cen — w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla food trucka: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla food trucka?", "Prosta strona z postojem, grafikiem, menu i formularzem rezerwacji kosztuje od 3000 do 6000 zł. Strona z kalendarzem edytowanym z telefonu, przełącznikami „wyprzedane”, menu na imprezy, zaliczkami i podstroną dla organizatorów — od 8500 zł. Projekt graficzny jest w cenie."],
          ["Czy potrzebuję strony, skoro wrzucam lokalizację na Facebooka?", "Facebook dociera do obserwujących. Strona dociera do osób, które szukają food trucka w okolicy albo na wesele, i daje organizatorom wszystkie fakty w jednym miejscu. Najlepiej działają razem, linkując do siebie nawzajem."],
          ["Jak szybko zmienię dzisiejszą lokalizację?", "W mniej niż minutę z telefonu: wybieracie zapisane miejsce albo wpisujecie adres, ustawiacie godziny i zapisujecie. Stałe postoje uzupełniają się same, więc zwykle tylko potwierdzacie albo odwołujecie dzień."],
          ["Czy klient może wpłacić zaliczkę za wesele przez stronę?", "Tak. Po potwierdzeniu terminu klient dostaje link do zaliczki i płaci BLIK-iem, kartą albo szybkim przelewem, a data w kalendarzu oznacza się jako zajęta."],
          ["Czy można zamawiać na wynos z wyprzedzeniem?", "Tak, jeśli kuchnia to udźwignie: zamówienie z godziną odbioru i płatnością online może działać na stronie, albo strona może prowadzić do Glovo czy Wolt, jeśli stoicie w stałym miejscu i już z nich korzystacie."],
          ["Ile trwa zrobienie strony food trucka?", "Jednostronicowa strona zwykle od dwóch do czterech tygodni od briefu, rozbudowana z kalendarzem, rezerwacjami i zaliczkami — od czterech do sześciu. Najwięcej czasu zajmuje spisanie menu, stałych postojów i warunków imprez."],
          ["Czy pracujesz z food truckami z całej Polski?", "Tak. Rozmawiamy przez WhatsApp, telefon albo wideo, projekt oglądacie i zatwierdzacie w przeglądarce, a za wykonaną stronę dostajecie ode mnie fakturę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla food trucka: co mi wysłać"),
        p(
          "Wyślijcie link do profilu na Facebooku lub Instagramie albo obecnej strony, menu z cenami, stałe postoje w tygodniu, rodzaje imprez, na które jeździcie, i warunki rezerwacji oraz kilka zdjęć auta i jedzenia. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
