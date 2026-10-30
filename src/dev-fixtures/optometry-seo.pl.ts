// Landing page fixture: Pozycjonowanie salonu optycznego (PL), group
// «optometry-seo». Market version for Polish salony optyczne, gabinety
// optometryczne and practices where an okulista sees patients — written for
// Poland, not translated from optometry-seo.en.
// Semantic core: ref/medical-practices.md has no PL volumes for this group
// (PL on topic: 0). Target phrases from the brief: «pozycjonowanie salonu
// optycznego» (slug, H1, H2), salon optyczny, optometrysta, badanie wzroku.
// EN reference volumes: optometry seo 140, optometrist marketing 170.
// Intent: ref/intent-check-medical-practices.md — EN «optometrist website
// design» vs «optometry seo»: 0 shared URLs → separate SEO and website pages
// in every language; PL website page: /pl/strona-internetowa-dla-salonu-optycznego.
// Polish angles: optometrysta vs okulista, badanie wzroku (also «bezpłatne
// przy zakupie okularów»), sieci (Vision Express, Fielmann) vs niezależny
// salon, ZnanyLekarz and Booksy, zlecenia NFZ na okulary (general), RODO,
// informacja zamiast reklamy for lekarze okuliści, «sprawdź aktualne zasady»
// for optometryści, kontrola krótkowzroczności u dzieci, marki opraw.
// NOT on this page: building and designing the site
// (/pl/strona-internetowa-dla-salonu-optycznego); clinics and przychodnie in
// general (/pl/oferty/pozycjonowanie-strony-przychodni-warszawa); eye surgery
// clinics; ads and social media.
// Owner’s rule: every SEO page covers AI search (GEO, AEO); Giuseppe’s case.
import { p, h2, h3, li, link, k } from "./pt";

export const optometrySeoPl = {
  lang: "pl",
  group: "optometry-seo",
  slug: "pozycjonowanie-strony-salonu-optycznego",
  title: "Pozycjonowanie strony salonu optycznego",
  heading: "Pozycjonowanie strony salonu optycznego",
  excerpt:
    "Zajmuję się pozycjonowaniem salonów optycznych i gabinetów optometrycznych: podstrony badania wzroku, soczewek kontaktowych i kontroli krótkowzroczności u dzieci, wizytówka Google każdego salonu, marki opraw i widoczność w odpowiedziach AI — tak, żeby klienci z okolicy wybierali Wasz salon, a nie sieciówkę.",
  seo: {
    metaTitle: "Pozycjonowanie strony salonu optycznego | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony salonu optycznego: badanie wzroku, soczewki, marki opraw, wizytówka Google każdego salonu, opinie, RODO i widoczność w AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Badanie wzroku + okulary + soczewki", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Badanie wzroku w Twoim mieście", "Optometrysta dziś", "Oprawki Ray-Ban w salonie", "Zapisz się online"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO salonu optycznego: strona i wizytówki Google", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla salonu optycznego: podstrony badań, soczewek i marek opraw, wizytówki, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony salonu optycznego", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony salonu optycznego",
      items: [
        { _key: k("o"), iconName: "search", title: "Podstrona badania wzroku", text: "U optometrysty i u okulisty — osobno, z ceną i zapisem" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google każdego salonu", text: "Kategoria, godziny, zdjęcia i link do podstrony salonu" },
        { _key: k("o"), iconName: "image", title: "Marki opraw z Waszych półek", text: "Ray-Ban, Lindberg, Silhouette — to, co naprawdę macie" },
        { _key: k("o"), iconName: "layers", title: "Soczewki i kontrola krótkowzroczności", text: "Dobór soczewek, ortokeratologia, pytania rodziców" },
        { _key: k("o"), iconName: "message-circle", title: "Opinie w Google i ZnanyLekarz", text: "Prośba po wizycie, odpowiedź bez danych o zdrowiu" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i przeglądy AI w Google" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO: strona salonu i wizytówki Google", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony salonu optycznego", value: "od 3500 zł / mies.", note: "podstrony, mapy, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: prywatna praktyka i lokalne firmy, które pozycjonowałem",
      subtitle:
        "Na początek strona prywatnej praktyki psychoterapeuty w Mediolanie: surowe zasady informowania o usługach, gabinety w trzech miejscowościach i nowe podstrony cytowane już przez ChatGPT — ten sam układ ma salon z gabinetem optometrycznym. Dalej warszawski warsztat samochodowy widoczny w Mapach Google, firma skanowania 3D z 29-krotnym wzrostem ruchu z Google, katalog nieruchomości, który pozycjonuję co miesiąc, i strona lokalnej usługi z edytowalnym SEO.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony salonu optycznego",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie i w wizytówkach salonu, i za jaką stałą cenę.",
      contextLabel: "Nazwa salonu lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Kto bada wzrok w Waszym salonie?", options: ["Optometrysta", "Lekarz okulista", "Optometrysta i okulista", "Nie badamy, tylko realizujemy recepty"] },
        { _key: k("z"), question: "Ile macie salonów?", options: ["Jeden", "Dwa–trzy w jednym mieście", "Kilka w różnych miastach"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony salonu optycznego robię sam — od danych wyszukiwań, przez podstrony badania wzroku, soczewek i marek opraw, po wizytówkę Google każdego salonu. Pracuję z niezależnymi salonami, gabinetami optometrycznymi i salonami, w których przyjmuje lekarz okulista. Wynik liczę w zapisach na badanie i telefonach, a nie w samych pozycjach."),

        h2("Na czym polega pozycjonowanie strony salonu optycznego: badanie wzroku, okulary i soczewki"),
        p("Salon optyczny to w praktyce trzy usługi, a klienci szukają każdej z nich innymi słowami:"),
        li("badanie wzroku — „badanie wzroku Kraków”, „optometrysta w pobliżu”, „badanie wzroku dla dziecka” — tu liczy się wolny termin w tym tygodniu"),
        li("okulary — „okulary progresywne”, „oprawki Ray-Ban Gdynia”, „okulary w 1 dzień” — tu klient porównuje oprawki, szkła i ceny"),
        li("soczewki kontaktowe — pierwszy dobór i kolejne zakupy, gdzie konkurencją są sklepy internetowe, a nie salon na sąsiedniej ulicy"),
        p("Sieci takie jak Vision Express czy Fielmann mają setki salonów i silne domeny. Niezależny salon wygrywa z nimi lokalnie: konkretną osobą, która bada wzrok, markami opraw, których sieć nie ma, i podstronami, które odpowiadają na pytania z jego miasta."),

        h2("Pozycjonowanie lokalne salonu optycznego: wizytówka Google i podstrona każdego salonu"),
        p("Przy wyszukiwaniu „optyk w pobliżu” albo „badanie wzroku sobota” o większości telefonów decyduje blok map. Każdy salon potrzebuje własnej wizytówki: kategoria główna Optyk albo Optometrysta, usługi z krótkimi opisami, godziny z sobotami, zdjęcia gabinetu badań i ściany z oprawkami oraz link do podstrony tego salonu, a nie do strony głównej."),
        p("Podstrona salonu mówi to, czego wizytówka nie pomieści: kto i w które dni bada wzrok, czy można przyjść bez zapisu po regulację oprawki, gdzie zaparkować, jakie marki są w tym salonie. Gdy firma przejęła drugi salon, w katalogach często zostaje stara nazwa i telefon — porządkuję to, żeby Google widział jedną spójną firmę."),
        p(
          "Ten sam układ sprawdził się u Giuseppe, psychoterapeuty z Mediolanu: jego nowa strona ma osobne podstrony dla gabinetów w Mediolanie i Monzy oraz dla terapii online, a do tego mapę gabinetów. Więcej o mapach i wizytówkach na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Badanie wzroku u optometrysty i u okulisty: osobne podstrony na stronie salonu"),
        p("Klienci często nie wiedzą, czym różni się badanie u optometrysty od wizyty u okulisty, i właśnie to wpisują w wyszukiwarkę. Dobra strona salonu wyjaśnia to spokojnie i osobno:"),
        h3("Badanie wzroku u optometrysty"),
        p("Co obejmuje, ile trwa, ile kosztuje, kiedy jest bezpłatne przy zakupie okularów i na jakich warunkach. Taka oferta jest częsta, więc warunki muszą być napisane wprost — niejasna „darmowa” usługa kończy się złymi opiniami."),
        h3("Wizyta u lekarza okulisty w salonie"),
        p("Kiedy iść do okulisty, a nie do optometrysty: podejrzenie choroby oczu, ból, nagłe pogorszenie widzenia, kontrola przy cukrzycy. Podstrona podaje dni przyjęć i cenę wizyty prywatnej, a pacjentom, którzy wolą NFZ, przypomina, że do okulisty nie potrzeba skierowania."),
        h3("Badanie wzroku dziecka"),
        p("Rodzice szukają pierwszego badania przed szkołą. Podstrona mówi, od jakiego wieku badacie dzieci, jak wygląda wizyta i jak przygotować dziecko."),

        h2("Kontrola krótkowzroczności u dzieci i suche oko: podstrony dla rodziców i pacjentów"),
        p("Rodzice krótkowzrocznych dzieci szukają soczewek do kontroli krótkowzroczności, ortokeratologii i okularów ze specjalnymi szkłami. To podstrony, które wymagają ostrożności: opisują możliwości, dla kogo są przeznaczone i że efekt bywa różny u różnych dzieci, a pod tekstem jest optometrysta albo okulista, który go sprawdził. Podobnie z suchym okiem: objawy opisane ogólnie, co obejmuje badanie i kiedy skierować pacjenta do lekarza."),

        h2("Marki opraw i soczewki kontaktowe w pozycjonowaniu strony salonu optycznego"),
        p("Klienci szukają oprawek po marce: „Lindberg Wrocław”, „oprawki Silhouette”, „Ray-Ban korekcyjne”. Podstrona dla każdej marki, którą macie, ze zdjęciami z własnych półek, widełkami cen i informacją o doborze, łapie wyszukiwania, których nie złapie rząd logotypów. Marki z selektywną dystrybucją warto opisać osobno — autoryzowany salon to fakt, którego klient szuka."),
        p("Przy soczewkach kontaktowych sklep internetowy wygra ceną, ale nie wygra doborem: soczewki toryczne, wieloogniskowe, specjalistyczne, pierwsza nauka zakładania. Podstrony o tym, plus prosta ścieżka ponownego zamówienia dla stałych klientów, zatrzymują ich w salonie."),

        h2("Ceny, zlecenia NFZ i raty: podstrony z odpowiedziami przed wizytą w salonie optycznym"),
        p("Najczęstsze pytania przed wizytą dotyczą pieniędzy: ile kosztuje badanie, ile szkła progresywne, czy salon realizuje zlecenia NFZ na okulary i czy można rozłożyć płatność. Cennik tekstem — widełki dla szkieł jednoogniskowych i progresywnych, cena badania, cena doboru soczewek — odpowiada na te wyszukiwania i oszczędza telefonów. Jeśli realizujecie zlecenia NFZ, osobna podstrona wyjaśnia, co zabrać i jak wygląda dopłata."),
        p("Raty albo płatność odroczona przy droższych okularach to informacja, której klient szuka przy cenniku szkieł progresywnych. Wystarczy jedno zdanie z nazwą operatora i uwagą, że decyzję kredytową podejmuje on, a nie salon. Cennik w PDF albo na zdjęciu witryny nie odpowie na żadne z tych wyszukiwań, bo wyszukiwarka i asystent AI czytają tekst."),

        h2("Informacja zamiast reklamy: okulista, optometrysta i RODO na stronie salonu optycznego"),
        p("Informacja o świadczeniach lekarza okulisty nie może mieć cech reklamy (art. 14 ust. 1 ustawy o działalności leczniczej); optometrysta jest dziś zawodem medycznym, więc warto pisać o badaniu tak samo rzeczowo i sprawdzić aktualne zasady dla tego zawodu. W praktyce: fakty o badaniu, kwalifikacje osoby, która bada, ceny i godziny — bez obietnic „idealnego widzenia” i bez porównań z innymi salonami. Sprzedaż oprawek i okularów przeciwsłonecznych to zwykły handel, ale strona powinna wyraźnie oddzielać go od części zdrowotnej."),
        p("Każda podstrona o zdrowiu oczu podaje autora albo osobę sprawdzającą, z kwalifikacjami i datą weryfikacji. Formularz zapisu pyta o imię, telefon, salon i termin, a nie o objawy; dane o zdrowiu to w RODO szczególna kategoria. Odpowiedzi na opinie nie potwierdzają, że ktoś był pacjentem. To ogólne wskazówki, nie opinia prawna."),

        h2("Opinie o salonie optycznym w Google, ZnanyLekarz i Booksy"),
        p("Opinie przesuwają salon wyżej w mapach i rozstrzygają wybór między dwoma salonami na tej samej ulicy. Lepiej działa stała prośba niż jednorazowa akcja: SMS po badaniu albo odbiorze okularów z linkiem do wizytówki, wysyłany do każdego klienta. Optometryści i okuliści mają też profile w ZnanyLekarz, a część salonów przyjmuje zapisy przez Booksy — te profile powinny mieć te same dane co strona i linkować do podstrony salonu."),

        h2("Pozycjonowanie strony salonu optycznego w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Klienci pytają ChatGPT albo przegląd AI w Google, gdzie w ich mieście zbadać wzrok w sobotę, kto dobiera soczewki toryczne albo co robić z krótkowzrocznością dziecka. Asystent składa odpowiedź z tego, co znajdzie i porówna w kilku źródłach. Tę pracę opisują skróty GEO (generative engine optimization) i AEO (answer engine optimization); w salonie optycznym sprowadza się do czterech rzeczy:"),
        li("usługi, osoby badające, salony, godziny i marki zapisane prostymi faktami"),
        li("krótkie odpowiedzi na pytania klientów na każdej podstronie"),
        li("te same dane na stronie, w wizytówkach Google, ZnanyLekarz i Booksy"),
        li("dane strukturalne łączące firmę, jej salony i specjalistów"),
        p(
          "Giuseppe znalazł mnie, pytając ChatGPT. Po przebudowie — podstrony miejscowości, 150 odpowiedzi FAQ używanych na wielu podstronach, dane strukturalne praktyki, usług i terapii — jego nowe podstrony pojawiają się już w odpowiedziach ChatGPT. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Pozycjonowanie a marketing salonu optycznego: co robię, a czego nie"),
        p("Marketing salonu optycznego to zwykle gazetki promocyjne, media społecznościowe, kampanie i przypomnienia o kolejnym badaniu. Mój zakres jest węższy: wyszukiwarka i sama strona, którą mogę też zbudować. Gazetki, reklamy i profile w mediach społecznościowych zostają przy Waszym zespole lub agencji. Ja zostawiam po sobie podstrony, uporządkowane wizytówki i fakty, które Google i asystenci AI potrafią odczytać — na stronie, która należy do Was."),
        p(
          "Gdy obecnej strony nie opłaca się poprawiać, zajrzyjcie na stronę ",
          link("strona internetowa dla salonu optycznego", "/pl/strona-internetowa-dla-salonu-optycznego"),
          ". Przychodnie i gabinety lekarskie znajdą więcej na stronie ",
          link("pozycjonowanie strony przychodni", "/pl/oferty/pozycjonowanie-strony-przychodni-warszawa"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony salonu optycznego"),
        li("Audyt SEO strony i wizytówek Google: od 1000 zł, jednorazowo — dostajecie listę poprawek, od najważniejszej."),
        li("Jednorazowe prace — podstrony badań, soczewek i marek opraw, wizytówki, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony salonu optycznego — nowe podstrony, mapy, opinie, widoczność w AI i raporty w zapisach: od 3500 zł miesięcznie."),
        p(
          "Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony salonu optycznego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony salonu optycznego?", "Audyt strony i wizytówek od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, stałe pozycjonowanie od 3500 zł miesięcznie. Po krótkim opisie salonów i usług podaję jedną stałą kwotę."],
          ["Ile trwa, zanim pozycjonowanie przyniesie zapisy na badanie wzroku?", "Uporządkowana wizytówka bywa widoczna w mapach po kilku tygodniach. Podstrona badania wzroku albo marki opraw potrzebuje zwykle sezonu — dwóch–czterech miesięcy — a tam, gdzie mapy wypełniają salony sieciowe, jeszcze dłużej."],
          ["Czy niezależny salon optyczny może wygrać z sieciówką w Google?", "W wynikach lokalnych — tak. Sieć ma silną domenę, ale niezależny salon ma konkretną osobę, która bada wzrok, marki, których sieć nie prowadzi, i podstronę dla swojego miasta. Mapy Google premiują bliskość i kompletną wizytówkę."],
          ["Czy optometrysta może reklamować badanie wzroku?", "Bezpieczniej informować niż reklamować: opisać badanie, kwalifikacje, cenę i warunki, bez obietnic efektów. Informacja o świadczeniach lekarza okulisty nie może mieć cech reklamy, a zasady dla optometrystów warto sprawdzić na bieżąco, bo zawód jest dziś uregulowany ustawowo."],
          ["Czy każdy salon powinien mieć osobną wizytówkę Google?", "Tak, jeśli ma własny adres, godziny i obsługę. Każda wizytówka prowadzi do podstrony swojego salonu z osobami badającymi, markami i dojazdem."],
          ["Czy wystarczy profil w ZnanyLekarz albo Booksy?", "To dobre źródła zapisów, ale profil należy do platformy i stoi obok konkurencji. Własna strona wygrywa wyszukiwania nazwy salonu i marek opraw, a asystenci AI chętnie z niej cytują. Najlepiej prowadzić jedno i drugie z tymi samymi danymi."],
          ["Czy pracujesz z salonami spoza Warszawy?", "Tak. Salon może być w Szczecinie, Rzeszowie czy małym mieście — strona, wizytówki i dane wyszukiwań nie wymagają mojej obecności na miejscu."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony salonu optycznego: co mi wysłać"),
        p(
          "Wyślijcie nazwę salonu, link do strony i do wizytówki Google każdego salonu, informację, kto bada wzrok — optometrysta czy okulista — marki opraw, które prowadzicie, i usługi, przy których chcecie więcej klientów. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
