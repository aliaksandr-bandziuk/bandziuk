// Landing page fixture: Pozycjonowanie restauracji (PL), variant A layout.
// Market version of restaurant-seo.en, not a translation. Covers Poland as a
// whole; the Warsaw query stays with /pl/pozycjonowanie-strony-restauracji-warszawa,
// which this page links to.
// Semantic core: research/pseo/page-core/restaurant-seo.md (PL: pozycjonowanie
// restauracji 40, marketing restauracji 110, marketing dla restauracji 70).
import { p, h2, li, ol, link, k } from "./pt";

export const restaurantSeoPl = {
  lang: "pl",
  group: "restaurant-seo",
  slug: "pozycjonowanie-restauracji",
  title: "Pozycjonowanie restauracji",
  heading: "Pozycjonowanie restauracji",
  excerpt:
    "Zajmuję się pozycjonowaniem restauracji: wizytówka w Mapach Google, wyszukiwanie lokalne i strona internetowa lokalu, tak żeby goście szukający Waszej kuchni trafiali do Was, a nie na portal rezerwacyjny.",
  seo: {
    metaTitle: "Pozycjonowanie restauracji w Google i Mapach | Bandziuk",
    metaDescription:
      "Pozycjonowanie restauracji: wizytówka Google, menu czytelne dla wyszukiwarki i opinie, żeby goście trafiali do Was, a nie na portal. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Mapy Google + strona", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Top 3 w Mapach", "Otwarte · 4,7 ★", "Menu znalezione po daniu", "Rezerwacja bez portalu"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO restauracji: strona i wizytówka Google", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe poprawki SEO restauracji: menu w tekście, wizytówka, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie restauracji", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie restauracji",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google prowadzona jak podstrona", text: "Kategorie, godziny, link do menu, zdjęcia i wpisy na bieżąco" },
        { _key: k("o"), iconName: "utensils", title: "Menu, które czyta wyszukiwarka", text: "Dania tekstem, więc wyszukiwanie dania może prowadzić do Was" },
        { _key: k("o"), iconName: "search", title: "Podstrony pod kuchnię, okolicę i okazję", text: "Zbudowane wokół tego, co goście naprawdę wpisują" },
        { _key: k("o"), iconName: "message-circle", title: "Opinie jako stały proces", text: "Prośba we właściwym momencie, odpowiedź w ciągu kilku dni" },
        { _key: k("o"), iconName: "code", title: "Znaczniki Restaurant i Menu", text: "Godziny, ceny i kuchnia czytelne dla Google i AI" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w telefonach i rezerwacjach", text: "Co miesiąc, nie tylko w pozycjach" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO: strona i wizytówka Google", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie restauracji", value: "od 3500 zł / mies.", note: "mapy, strona, opinie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: wyniki w wyszukiwarce na stronach, które optymalizowałem",
      subtitle:
        "Restauracji jeszcze wśród nich nie ma. To lokalne firmy usługowe, w których ta sama praca — wizytówka w mapach, podstrony lokalne, dane strukturalne, szybkość — dała mierzalny ruch z wyszukiwarki.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "full-multilingual-website-development-and-seo-for-student-services",
        "felgilab-wordpress-rebuild",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania restauracji",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw w wizytówce Google i na stronie, i za jaką stałą cenę.",
      contextLabel: "Nazwa restauracji lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Skąd goście trafiają do Was teraz?", options: ["Mapy Google", "Portale rezerwacyjne", "Media społecznościowe", "Nie wiem"] },
        { _key: k("z"), question: "Jaki to lokal?", options: ["Kawiarnia", "Restauracja", "Bar", "Kilka lokali"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowaniem restauracji zajmuję się sam — wizytówką Google, stroną i podstronami lokalnymi — więc osoba, która robi audyt, jest tą samą, która potem wprowadza poprawki. Pozycjonowanie restauracji jest przede wszystkim lokalne: goście wybierają z wyników w mapach i z kilku pierwszych linków, na telefonie, kilka minut po tym, jak postanowili wyjść coś zjeść."),

        h2("Na czym polega pozycjonowanie restauracji: Mapy Google, wyszukiwanie lokalne i strona"),
        p("Pozycjonowanie restauracji to praca nad tym, żeby lokal pojawiał się, gdy ktoś szuka rodzaju kuchni, konkretnego dania albo miejsca do jedzenia w pobliżu, i żeby własna strona restauracji wygrywała wyszukiwanie jej nazwy. Decydują o tym trzy miejsca:"),
        li("wyniki w mapach — trzy lokale z mapą, oceną i godzinami, wyświetlane nad wszystkim innym przy zapytaniach typu „sushi w pobliżu”"),
        li("zwykłe wyniki, w których strona restauracji konkuruje z portalami rezerwacyjnymi, aplikacjami z dostawą i serwisami z opiniami"),
        li("odpowiedzi AI — podsumowania AI w Google i asystenci tacy jak ChatGPT, którzy polecają lokale i cytują menu oraz godziny otwarcia"),
        p("Każde z tych miejsc wymaga innej pracy. Wyniki w mapach zależą głównie od wizytówki Google i opinii, zwykłe wyniki od strony, a odpowiedzi AI od jednego i drugiego oraz od faktów zapisanych tak, żeby maszyna mogła je zacytować."),

        h2("Pozycjonowanie lokalne restauracji: wizytówka Google, opinie i wyniki w mapach"),
        p("Dla restauracji pozycjonowanie lokalne waży więcej niż wszystko inne na tej stronie. Goście porównują trzy lokale w bloku mapy i często wybierają, zanim otworzą jakąkolwiek stronę. Co wprowadza restaurację do tego bloku:"),
        li("właściwa kategoria główna — „Restauracja gruzińska”, a nie samo „Restauracja” — i kategorie dodatkowe dla tego, czym lokal jest jeszcze: bar, kawiarnia, jedzenie na wynos"),
        li("godziny otwarcia zawsze zgodne z prawdą, także w święta; błędne godziny kosztują więcej zaufania niż brak zdjęcia"),
        li("link do menu, który prowadzi do menu w tekście na Waszej stronie, a nie do PDF-a"),
        li("świeże zdjęcia dań, które są teraz w karcie"),
        li("atrybuty, po których goście filtrują: ogródek, opcje wegetariańskie, dostęp dla wózków, rezerwacje"),
        li("ta sama nazwa, adres i numer telefonu na stronie, w wizytówce i w głównych katalogach"),
        p("Opinie ważą w gastronomii więcej niż w większości branż. Ustawiam stały proces: goście są proszeni o opinię we właściwym momencie, każda opinia dostaje odpowiedź w ciągu kilku dni, a odpowiedzi nazywają dania i okazje zwykłymi słowami. Czego nie ustawiam: kupowania opinii ani proszenia wyłącznie zadowolonych gości. Jedno i drugie łamie zasady Google, jest wykrywalne i w gastronomii kosztuje więcej reputacji, niż daje."),

        h2("Pozycjonowanie strony restauracji: menu, kuchnia i podstrony lokali"),
        p("Strona to jedyne miejsce, którego portale nie skopiują, i to na niej restauracja wygrywa wyszukiwania inne niż własna nazwa. Pozycjonowanie strony restauracji zaczyna się od:"),
        li("menu w tekście na osobnej podstronie, z nazwami dań i krótkimi opisami, żeby wyszukiwanie dania mogło prowadzić do Was"),
        li("osobnej podstrony dla każdego lokalu, z adresem, godzinami, mapą, rezerwacją i menu tego lokalu"),
        li("podstron pod to, czego goście szukają poza nazwą: kuchnia, sala na przyjęcia, rezerwacje grupowe, wydarzenia, lunch"),
        li("danych strukturalnych Restaurant i Menu, żeby godziny, przedział cen, kuchnia i link do rezerwacji były odczytane poprawnie"),
        li("szybkości na telefonie: strona i jej główne zdjęcie pojawiają się w mniej niż 2,5 sekundy na danych komórkowych"),
        p(
          "Jeśli obecna strona tego nie udźwignie — szablon z kreatora, menu w PDF-ie, jedna strona na wszystko — przebudowa zwykle kosztuje mniej niż obchodzenie jej ograniczeń. Opisuję to na stronie ",
          link("tworzenie strony dla restauracji", "/pl/strona-dla-restauracji"),
          ".",
        ),

        h2("Słowa kluczowe dla restauracji: co goście naprawdę wpisują"),
        p("Wyszukiwania restauracji dzielą się na cztery grupy i każda potrzebuje swojego miejsca na stronie albo w wizytówce:"),
        li("nazwa restauracji — Wasza strona powinna być pierwsza, przed portalami, które biorą prowizję za gości, którzy i tak byli Wasi"),
        li("kuchnia plus okolica: „ramen w pobliżu”, „pizza Stare Miasto”, „restauracja wegańska” z nazwą dzielnicy"),
        li("nazwy dań: „pierogi ruskie”, „chaczapuri”, „tatar wołowy” — znajdowane dzięki menu w tekście"),
        li("okazje: „sala na przyjęcie”, „restauracja na urodziny”, „lunch biznesowy”, „brunch w niedzielę”"),
        p("Zanim zacznę pracę, pobieram prawdziwe dane wyszukiwań dla Waszego miasta i kuchni, żeby podstrony powstawały wokół fraz, których używają goście, a nie wokół tego, jak restauracja opisuje samą siebie."),

        h2("Pozycjonowanie restauracji z kilkoma lokalami"),
        p("Przy dwóch i więcej lokalach typowy błąd to jedna podstrona i jedna wizytówka, które pracują za wszystkie. Działający układ daje każdemu lokalowi własną wizytówkę Google połączoną z własną podstroną, osobne menu tam, gdzie karty się różnią, własne opinie i link ze strony głównej. Wyszukiwania marki prowadzą wtedy gości do najbliższego lokalu, a każdy lokal może być wysoko w swojej okolicy."),

        h2("Marketing restauracji a pozycjonowanie: agencja czy specjalista SEO"),
        p("Agencja marketingu dla restauracji zwykle sprzedaje media społecznościowe, sesje zdjęciowe, reklamy i współprace z influencerami, a SEO jest jedną pozycją w pakiecie. Ja jestem jednym specjalistą SEO, który buduje też strony: ta sama osoba robi audyt wizytówki Google, przepisuje podstronę z menu i poprawia kod."),
        p("Czego nie robię: prowadzenia mediów społecznościowych, reklam płatnych i sesji zdjęciowych. Jeśli tego potrzebujecie, lepszym wyborem będzie agencja marketingowa, a pozycjonowanie można zlecić osobno."),

        h2("Pozycjonowanie restauracji samodzielnie: co zrobić w tym tygodniu"),
        ol("Wyszukajcie nazwę restauracji na telefonie i zapiszcie, kto jest wyżej niż Wasza strona."),
        ol("Porównajcie godziny w wizytówce Google z prawdziwymi, także na najbliższe święto."),
        ol("Zamieńcie link do menu w PDF-ie na link do podstrony z menu w tekście, nawet prostej."),
        ol("Dodajcie pięć świeżych zdjęć dań, które są teraz w karcie."),
        ol("Odpowiedzcie na każdą opinię z ostatnich trzech miesięcy, dobrą i złą."),
        ol("Sprawdźcie, czy nazwa, adres i telefon na stronie są dokładnie takie jak w wizytówce."),
        p("Te kroki są bezpłatne i zajmują jedno popołudnie. Nie zastępują pracy nad stroną, ale często podnoszą restaurację w wynikach map w ciągu kilku tygodni."),

        h2("Ile kosztuje pozycjonowanie restauracji"),
        li("Audyt SEO strony i wizytówki Google: od 1000 zł, jednorazowo. Dostajecie listę poprawek ułożoną według wpływu na wynik."),
        li("Jednorazowe poprawki — menu w tekście, uporządkowanie wizytówki, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie restauracji — wyszukiwanie lokalne, podstrony, proces opinii i raporty: od 3500 zł miesięcznie."),
        p(
          "W wielu restauracjach menu w tekście i uporządkowana wizytówka dają większość efektu, a audyt pokazuje, czy stała praca jest w ogóle potrzebna. Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Restauracje z Warszawy znajdą szczegóły na stronie ",
          link("pozycjonowanie strony restauracji w Warszawie", "/pl/oferty/pozycjonowanie-strony-restauracji-warszawa"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie restauracji: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Na czym polega pozycjonowanie restauracji?", "Na trzech rzeczach: wizytówce Google, która wprowadza lokal do wyników w mapach, stronie z menu w tekście i podstronami pod kuchnię, lokale i okazje oraz opiniach prowadzonych jako stały proces. Celem jest, żeby goście szukający Waszej kuchni albo Waszej nazwy trafiali do Was, a nie na portal."],
          ["Ile kosztuje pozycjonowanie restauracji w Google?", "Audyt strony i wizytówki kosztuje od 1000 zł jednorazowo, pojedyncze poprawki od 1000 do 3000 zł, a stałe pozycjonowanie od 3500 zł miesięcznie. Po krótkim opisie restauracji podaję stałą cenę."],
          ["Czy pozycjonowanie restauracji się opłaca?", "Zwykle tak, jeśli goście szukają Was po nazwie i trafiają na portal, który bierze prowizję, albo jeśli w okolicy jest kilka podobnych lokali. Każda rezerwacja przejęta z portalu to oszczędzona prowizja. Audyt pokazuje, ile da się odzyskać, zanim zdecydujecie się na stałą pracę."],
          ["Ile kosztuje opinia w Google i czy warto ją kupić?", "Nie warto. Kupione opinie łamią zasady Google, który je usuwa i może ograniczyć wizytówkę, a w Polsce publikowanie fałszywych opinii jest też nieuczciwą praktyką rynkową. Więcej daje prosty proces: prośba o opinię we właściwym momencie i odpowiedź na każdą."],
          ["Ile czasu trwa pozycjonowanie restauracji?", "Zmiany w wizytówce i menu potrafią zadziałać w wynikach map w kilka tygodni. Zapytania o kuchnię albo danie w okolicy to miesiące, bo konkurują o nie portale z silnymi stronami. Pierwsze sygnały widać zwykle po dwóch–trzech miesiącach."],
          ["Czy restauracja na Pyszne.pl i portalach rezerwacyjnych potrzebuje pozycjonowania?", "Tak. Bez własnej widoczności goście, którzy już Was znają, i tak rezerwują przez portal, a Wy płacicie za nich prowizję. Pozycjonowanie przywraca te wyszukiwania na Waszą stronę. Portale nadal przyprowadzą nowych gości i za nich prowizja jest uczciwa."],
          ["Czy pozycjonowanie pomaga w odpowiedziach ChatGPT i Google AI?", "Tak. Asystenci polecają restauracje na podstawie tego, co mogą przeczytać: wizytówki, opinii, menu w tekście i danych strukturalnych. Menu w PDF-ie i strona zbudowana z samych obrazków nie dają im nic do zacytowania."],
          ["Czy pracujesz z restauracjami spoza Warszawy?", "Tak, z całej Polski. Pozycjonowanie lokalne robię zdalnie: wizytówka, strona i dane wyszukiwań. Do restauracji w Warszawie mogę też przyjechać na miejsce."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie restauracji: co mi wysłać"),
        p(
          "Wyślijcie nazwę i adres restauracji, link do strony i do wizytówki w Mapach Google oraz okolicę, z której przychodzi najwięcej gości. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
