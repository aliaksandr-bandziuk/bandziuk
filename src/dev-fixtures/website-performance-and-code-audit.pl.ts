// Fixture strony: audyt wydajności i kodu (PL), grupa
// «website-performance-and-code-audit». PRZEBUDOWA istniejącej strony starego
// szablonu pod tym samym adresem — replace-landing.cjs.
//
// Powód (03.11.2026). Angielska wersja tej strony ma 452 wyświetlenia przy
// pozycji 56,3 i zero kliknięć; polska i rosyjska nie mają w tym samym
// kwartale ani jednego wyświetlenia. Przebudowa polskiej wersji to decyzja
// właściciela o spójności usługi na trzech językach, nie wniosek z danych —
// polskie frazy o szybkości wyszły poniżej progu pomiaru w siatce.
//
// Co było nie tak ze starą stroną: nagłówki-etykiety ze starego szablonu
// («Optymalizacja Core Web Vitals», «Audyt kodu i struktury», «Raport z
// wynikami przed i po») plus «Image Full» w liście nagłówków, a teksty
// wewnątrz tych bloków są zapisane w komponentach i powtarzają się na
// dziesiątkach stron.
//
// Cena: audyt 1000 zł z cennika. Ceny przebudowy w złotych na stronie nie ma,
// więc nie pojawia się tu jako liczba — prowadzi do niej link.
import { p, h2, h3, li, link, k } from "./pt";

export const websitePerformanceAndCodeAuditPl = {
  lang: "pl",
  group: "website-performance-and-code-audit",
  parentPath: ["oferty"],
  slug: "audyt-wydajnosci-i-kodu",
  title: "Audyt wydajności i kodu strony",
  heading: "Audyt wydajności i kodu: dlaczego strona ładuje się wolno i co naprawić najpierw",
  excerpt:
    "Audyt wydajności mierzy to, na co faktycznie czeka odwiedzający, a audyt kodu wyjaśnia dlaczego. Dostajesz listę z kolejnością: co kosztuje najwięcej milisekund, ile zajmuje naprawa i czego nie warto ruszać. 1000 zł, a jeśli odpowiedź brzmi «nie ma czego naprawiać», powiem to wprost.",
  seo: {
    metaTitle: "Audyt wydajności i kodu strony — 1000 zł",
    metaDescription:
      "Audyt wydajności strony i kodu: Core Web Vitals, JavaScript i renderowanie, odpowiedź serwera. Lista napraw w kolejności, z pomiarem przed i po. 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Core Web Vitals i kod", "Audyt 1000 zł", "Raport w 3 dni robocze"],
  heroPhonePoints: ["LCP 4,1 s", "INP 320 ms", "CLS 0,24", "Lista napraw"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt wydajności i kodu strony z listą napraw w kolejności", price: 1000, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co jest mierzone",
      title: "Co obejmuje audyt wydajności strony",
      items: [
        { _key: k("o"), iconName: "gauge", title: "Core Web Vitals na realnych podstronach", text: "LCP, INP i CLS na szablonach, które zarabiają" },
        { _key: k("o"), iconName: "code", title: "Audyt kodu strony", text: "To, czego test szybkości nie widzi" },
        { _key: k("o"), iconName: "zap", title: "JavaScript i renderowanie", text: "Co się wykonuje, zanim strona da się używać" },
        { _key: k("o"), iconName: "image", title: "Obrazy, fonty i skrypty zewnętrzne", text: "Trzy rzeczy, które zwykle ważą najwięcej" },
        { _key: k("o"), iconName: "server", title: "Odpowiedź serwera i cache", text: "Gdzie tracony jest pierwszy bajt" },
        { _key: k("o"), iconName: "list-checks", title: "Lista napraw w kolejności", text: "Koszt w milisekundach wobec kosztu w godzinach" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Co właściwie mierzy audyt wydajności strony"),
        p("Wynik na sto punktów nie jest diagnozą. Audyt mierzy to, na co czeka odwiedzający, i to na podstronach ważnych dla firmy, a nie na stronie głównej: ile trwa, aż pojawi się główna treść, ile trwa, aż kliknięcie coś zrobi, i czy układ skacze w trakcie czytania. Potem wyjaśnia, który element strony odpowiada za każdą z tych liczb."),
        p("Dwie rzeczy różnią to od darmowego testu, który uruchomisz sam. Pierwsza: test daje objaw, audyt daje przyczynę — «największy element zajmuje 4,1 sekundy» zamienia się w «obraz w nagłówku to PNG o wadze 2,4 MB podany w pełnym rozmiarze, a font blokuje renderowanie, dopóki się nie wczyta». Druga: kolejność. Z dwudziestu rzeczy, które zgłasza test, zwykle trzy odpowiadają za prawie całe opóźnienie, a reszta to szum, którego naprawa kosztuje więcej, niż zwraca."),

        h2("Core Web Vitals: LCP, INP i CLS — który z nich cię kosztuje"),
        h3("LCP — ile trwa, aż pojawi się to najważniejsze"),
        p("Zwykle obraz, nagłówek albo blok powitalny. Typowe przyczyny: obraz za duży względem miejsca, font blokujący renderowanie, wolna odpowiedź serwera i strona rysowana w przeglądarce zamiast przychodzić gotowa. To ten wskaźnik najczęściej odpowiada za wrażenie, że strona jest wolna."),
        h3("INP — ile trwa, aż kliknięcie coś zrobi"),
        p("Zastąpił dawny FID w 2024 roku i jest surowszy: mierzy każdą interakcję, nie tylko pierwszą. Zwykła przyczyna to ciężki JavaScript na głównym wątku — analityka, czat, slidery i skrypty page buildera, które pracują dalej, choć strona wygląda na gotową."),
        h3("CLS — jak mocno układ skacze w trakcie czytania"),
        p("Powodują to obrazy bez podanych wymiarów, reklamy i osadzenia wstawiane po wczytaniu oraz fonty, które po podmianie przelewają tekst. Tanie w naprawie i zwykle ignorowane, bo irytuje odwiedzających, nie pokazując się w żadnym raporcie, który właściciel czyta."),
        p(
          "Co te trzy wskaźniki znaczą w praktyce i od czego zacząć, gdy strona po prostu wydaje się wolna, opisuje artykuł ",
          link("wolno ładująca się strona", "/pl/blog/wolno-ladujaca-sie-strona"),
          ".",
        ),

        h2("Audyt kodu strony: co widzi przegląd kodu, czego nie widzi test szybkości"),
        p("Test szybkości widzi gotową stronę. Audyt kodu widzi, jak została zbudowana, a tam siedzą problemy, które da się naprawić: komponenty przeliczane przy każdym przewinięciu, dane pobierane w przeglądarce, choć mogłyby przyjść razem ze stroną, obrazy nieprzepuszczone przez żadne przetwarzanie, paczka wysyłająca na każdy ekran biblioteki używane na jednym, i skrypty zewnętrzne wczytywane w sekcji head, bo tak było napisane w instrukcji."),
        p("Znajduje też to, czego taniej nie ruszać. Nie każda nieefektywność warta jest zapłaty za naprawę, a audyt, który zwraca listę czterdziestu punktów bez wskazania trzech istotnych, zadaje pracę domową, a nie daje odpowiedź."),

        h2("JavaScript i renderowanie: dlaczego szybki serwer nadal daje wolną stronę"),
        p("Strona może odpowiadać w 80 milisekundach i wciąż potrzebować czterech sekund, żeby dała się używać, bo serwer wysłał niemal pusty dokument, a przeglądarka musiała pobrać, przetworzyć i wykonać JavaScript, zanim cokolwiek się pojawiło. To normalny wzorzec w aplikacjach jednostronicowych i na WordPressie z page builderem i kilkunastoma wtyczkami."),
        p(
          "Naprawa jest architektoniczna, nie kosmetyczna: renderować na serwerze to, co się da, wysyłać do przeglądarki tylko to, co jej potrzebne, a resztę wczytywać wtedy, gdy jest naprawdę potrzebna. Na Next.js to ",
          link("strony w Next.js", "/pl/oferty/strony-w-nextjs"),
          ", a gdy strona jest zbyt zaplątana, żeby naprawiać ją na miejscu, taniej jest ",
          link("przebudować ją z zachowaniem pozycji", "/pl/oferty/przebudowa-strony-internetowej"),
          " niż dalej płacić za łatanie.",
        ),

        h2("Audyt wydajności czy audyt SEO — którego potrzebujesz"),
        p("Odpowiadają na różne pytania, a kupienie niewłaściwego marnuje całą kwotę, nie połowę."),
        li("podstrony wczytują się wolno, strona działa i jest znajdowana — audyt wydajności i kodu;"),
        li("podstrony wczytują się normalnie, a strony nie da się znaleźć — audyt SEO;"),
        li("ruch spadł po przebudowie albo migracji — najpierw audyt SEO, bo przyczyną są zwykle adresy i przekierowania, a nie szybkość;"),
        li("Google w Search Console pisze «słabo», a strona wydaje się szybka — audyt wydajności, bo dane z pola nie zgadzają się z twoim laptopem."),
        p(
          "Co obejmuje strona wyszukiwania, opisuje ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ". Szybkość wpływa na pozycje, ale jest rozstrzygnięciem między stronami w pozostałych sprawach równymi — nie wypozycjonuje podstrony, która na nic nie odpowiada.",
        ),

        h2("Ile kosztuje audyt wydajności strony i co dostajesz"),
        p(
          "Audyt kosztuje 1000 zł, a dostajesz dokument, nie zrzut ekranu z pulpitu: zmierzone liczby dla szablonów, które się liczą, przyczynę za każdą liczbą, listę napraw ułożoną według zyskanych milisekund wobec spędzonych godzin, i to, czego bym nie ruszał. Wdrożenie wyceniam po audycie, a nie przed nim — kto wycenia naprawę przed pomiarem, zgaduje. Jeśli strona okaże się zbyt zaplątana, powiem, że taniej ją ",
          link("przebudować", "/pl/oferty/przebudowa-strony-internetowej"),
          ". Pełna lista jest w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),

        h2("Ile trwa audyt wydajności i kiedy zmienia się szybkość"),
        p("Raport zajmuje trzy dni robocze. Po wdrożeniu poprawek twoje własne pomiary zmieniają się od razu, ale dane z pola w Search Console liczone są z ostatnich 28 dni, więc oficjalne Core Web Vitals przesuwają się dopiero po około miesiącu. Utrzymanie tego stanu to osobna sprawa, opisana na stronie ",
          link("utrzymania strony", "/pl/oferty/utrzymanie-strony-internetowej"),
          ": strona raz przyspieszona zwalnia z powrotem, gdy nikt nie pilnuje wtyczek i obrazów."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: wydajność zmierzona, nie obiecana",
      subtitle:
        "Te projekty podają swoje wyniki Lighthouse, bo tutaj liczby są treścią, a nie ozdobą: strona firmy remontowej i inwestycyjnej z wynikiem 96/98/100/100, strona konsultantki z 100/100/100/100, strona agencji edukacyjnej podniesiona z 61 na 91 w wydajności, pełna przebudowa na WordPressie i wielojęzyczna platforma nieruchomości z dużym katalogiem.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "consultant-website-design-retail-analytics",
        "seo-case-study-education-agency",
        "felgilab-wordpress-rebuild",
        "build-and-optimize-a-multilingual-real-estate-platform",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Zamów audyt wydajności i kodu strony",
      subtitle: "Wyślij adres, a w ciągu jednego dnia roboczego odpowiem, co zmierzę i ile to będzie kosztować.",
      contextLabel: "Adres strony",
      contextPlaceholder: "Link do strony",
      buttonText: "Wyślij i zamów audyt",
      note: "Albo napisz na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Na czym stoi strona?", options: ["WordPress", "Next.js albo React", "Shopify albo kreator", "Nie wiem"] },
        { _key: k("z"), question: "Na co narzekasz?", options: ["Wolno na telefonie", "Search Console pisze «słabo»", "Odwiedzający szybko wychodzą", "Na wszystko"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Dlaczego szybkość decyduje, czy asystenci AI w ogóle przeczytają stronę (GEO, AEO)"),
        p("Roboty stojące za ChatGPT, Perplexity i odpowiedziami AI w Google są surowsze od Googlebota w jednej konkretnej sprawie: większość z nich nie wykonuje JavaScriptu, a te, które pobierają stronę, dają jej znacznie mniej czasu. Strona rysująca treść w przeglądarce wysyła im niemal pusty dokument, więc asystent zapytany o twoją firmę nie znajduje nic do zacytowania — nie dlatego, że tekst jest zły, ale dlatego, że nigdy nie było go w HTML-u."),
        p(
          "To czyni renderowanie sprawą widoczności, a nie tylko szybkości: to, co ma być cytowane, musi być w odpowiedzi serwera, jako tekst. Doprowadzenie do tego stanu działającej strony to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Audyt wydajności i kodu strony: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Co obejmuje audyt wydajności strony?", "Zmierzone Core Web Vitals na szablonach, które się liczą, a nie na stronie głównej; przegląd kodu wyjaśniający przyczynę za każdą liczbą; wagę obrazów, fontów i skryptów zewnętrznych; odpowiedź serwera i cache; oraz listę napraw ułożoną według zyskanych milisekund wobec spędzonych godzin — razem z tym, czego bym nie ruszał."],
          ["Czym to się różni od uruchomienia PageSpeed Insights samemu?", "Test daje objaw i wynik punktowy; audyt daje przyczynę i kolejność pracy. «LCP 4,1 s» zamienia się w «nagłówek to PNG 2,4 MB w pełnym rozmiarze, a font blokuje renderowanie», a z dwudziestu zgłoszonych punktów dostajesz te trzy, które odpowiadają za prawie całe opóźnienie."],
          ["Wdrażasz poprawki, które audyt znajdzie?", "Tak, jako osobną pracę wycenioną po audycie, bo wycena naprawy przed pomiarem to zgadywanie. Możesz też przekazać raport swojemu programiście — jest napisany tak, żeby dał się wykonać komuś, kto go nie pisał."],
          ["Czy audyt poprawi pozycje w Google?", "Szybkość rozstrzyga między stronami w pozostałych sprawach porównywalnymi, więc pomaga tam, gdzie jesteś już blisko, i nie zrobi nic dla podstrony, która na żadne pytanie nie odpowiada. Jeśli problemem jest to, że strony w ogóle nie da się znaleźć, właściwym zakupem jest audyt SEO."],
          ["Czy wykonujesz audyt stron na WordPressie i Next.js?", "Obu, a wnioski zależą od technologii. Na WordPressie to zwykle wtyczki, page builder i nieprzetworzone obrazy; na Next.js i React zwykle paczka, pobieranie danych w przeglądarce i komponenty przeliczane częściej, niż trzeba."],
          ["Kiedy widać zmianę w liczbach?", "Raport zajmuje trzy dni robocze. Po wdrożeniu poprawek twoje pomiary zmieniają się od razu, ale dane z pola w Search Console liczone są z ostatnich 28 dni, więc oficjalne Core Web Vitals przesuwają się po około miesiącu."],
          ["A jeśli strona jest zbyt wolna, żeby warto ją było naprawiać?", "Tak się zdarza i powiem to, zamiast sprzedawać audyt wart łatania. Wtedy właściwą odpowiedzią jest przebudowa z zachowaniem pozycji, opisana na osobnej stronie."],
          ["Czy wystawiasz fakturę?", "Tak, prowadzę jednoosobową działalność w Warszawie i wystawiam fakturę za każdą pracę."],
          ["Czego potrzebujesz, żeby zacząć?", "Adresu, a jeśli poprawki mam też wdrażać — dostępu do hostingu albo kodu. Sam audyt nie potrzebuje niczego poza publiczną stroną."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów audyt wydajności strony: co mi przysłać"),
        p("Wyślij adres, napisz, na co narzekasz — wolno na telefonie, Search Console pisze «słabo», odwiedzający wychodzą w kilka sekund — i powiedz, na czym stoi strona, jeśli wiesz. Odpowiem w ciągu jednego dnia roboczego, co zmierzę i ile to będzie kosztować, a jeśli darmowy test już pokazuje odpowiedź, wskażę ją, zamiast wystawiać fakturę za jej znalezienie."),
      ],
    },
  ],
};
