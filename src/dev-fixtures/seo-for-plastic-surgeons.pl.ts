// Landing page fixture: Pozycjonowanie strony chirurga plastycznego (PL),
// group «seo-for-plastic-surgeons». Market version for Polish plastic surgeons
// and kliniki chirurgii plastycznej, not a translation of the EN page.
// Semantic core: ref/medical-practices.md — PL has no phrases above the
// source’s floor; the slug phrase «pozycjonowanie strony chirurga
// plastycznego» and variants («pozycjonowanie kliniki chirurgii plastycznej»,
// «marketing chirurga plastycznego») are used in H1/H2. EN reference volumes:
// seo for plastic surgeons 480, marketing for plastic surgeons 260.
// Intent: ref/intent-check-medical-practices.md — «pozycjonowanie kliniki
// medycyny estetycznej» vs «pozycjonowanie chirurga plastycznego»: 0 shared
// URLs, 0 shared domains → separate pages (medycyna estetyczna:
// /pl/pozycjonowanie-strony-kliniki-medycyny-estetycznej). The PL plastic-surgeon SERP
// is thin and mixed (clinic pages, articles, medical-tourism sites) → room for
// a clear service page for the surgeon or clinic owner.
// Polish angles: lekarz może informować, nie reklamować (general, no article
// numbers); specjalista chirurgii plastycznej vs lekarz medycyny estetycznej;
// zdjęcia przed i po — check with the okręgowa izba lekarska; ZnanyLekarz and
// Google reviews; RODO; turystyka medyczna do Polski (UK, Ireland, Germany,
// Scandinavia); raty.
// NOT on this page: building the site
// (/pl/strona-internetowa-dla-chirurga-plastycznego); zabiegi medycyny
// estetycznej (/pl/pozycjonowanie-strony-kliniki-medycyny-estetycznej); przychodnie
// (/pl/oferty/pozycjonowanie-strony-przychodni-warszawa); ads and social media.
// Main case: Giuseppe (psychoterapeuta w Mediolanie) — strict advertising
// rules, 301 migration, pages in ChatGPT. Owner’s rule: AI search H2.
import { p, h2, li, link, k } from "./pt";

export const seoForPlasticSurgeonsPl = {
  lang: "pl",
  group: "seo-for-plastic-surgeons",
  slug: "pozycjonowanie-strony-chirurga-plastycznego",
  title: "Pozycjonowanie strony chirurga plastycznego",
  heading: "Pozycjonowanie strony chirurga plastycznego",
  excerpt:
    "Zajmuję się pozycjonowaniem stron chirurgów plastycznych i klinik chirurgii plastycznej: rzeczowe podstrony operacji, kwalifikacje chirurga zapisane poprawnie, cennik i raty, wizytówka Google i ZnanyLekarz, pacjenci z zagranicy i widoczność w AI — informacja, nie reklama.",
  seo: {
    metaTitle: "Pozycjonowanie kliniki chirurgii plastycznej | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony chirurga plastycznego: podstrony operacji, kwalifikacje, cennik i raty, ZnanyLekarz, pacjenci z zagranicy, AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Informacja, nie reklama", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Plastyka nosa Kraków", "Specjalista chirurgii plastycznej", "Cena i raty", "Konsultacja online"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO kliniki chirurgii plastycznej: strona, wizytówka Google i ZnanyLekarz", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla chirurga plastycznego: podstrony operacji, cennik, profile chirurgów, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony chirurga plastycznego", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony chirurga plastycznego",
      items: [
        { _key: k("o"), iconName: "layers", title: "Osobna podstrona dla każdej operacji", text: "Nos, piersi, brzuch, powieki, lifting — według danych wyszukiwań" },
        { _key: k("o"), iconName: "shield-check", title: "Kwalifikacje chirurga zapisane rzetelnie", text: "Specjalizacja, numer PWZ, towarzystwa naukowe" },
        { _key: k("o"), iconName: "file-text", title: "Cennik operacji i raty tekstem", text: "Widełki, co obejmuje cena, jak złożyć wniosek" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google i profil w ZnanyLekarz", text: "Te same dane, zabiegi i lekarze wszędzie" },
        { _key: k("o"), iconName: "message-circle", title: "Podstrony dla pacjentów z zagranicy", text: "Po angielsku i niemiecku, z przyjazdem i opieką" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i przeglądach AI", text: "Fakty o klinice, które asystent może zacytować" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO kliniki chirurgii plastycznej", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony chirurga plastycznego", value: "od 3500 zł / mies.", note: "operacje, mapy, pacjenci z zagranicy, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: prywatna praktyka medyczna i wielojęzyczne strony usług premium",
      subtitle:
        "Na pierwszym miejscu prywatna praktyka psychoterapeuty w Mediolanie: ścisłe zasady informowania o usługach, migracja bez utraty adresów i podstrony cytowane przez ChatGPT. Dalej strony wielojęzyczne dla klientów, którzy wybierają usługę z innego kraju, i usługi premium wybierane po długim namyśle — tak jak operacja plastyczna.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony chirurga plastycznego",
      subtitle: "W ciągu jednego dnia roboczego dostaniesz listę pierwszych poprawek dla strony, wizytówki i profilu w ZnanyLekarz oraz stałą cenę.",
      contextLabel: "Nazwa kliniki lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakie operacje chcecie wykonywać częściej?", options: ["Twarz: nos, powieki, lifting", "Piersi", "Brzuch i sylwetka", "Chirurgia rekonstrukcyjna"] },
        { _key: k("z"), question: "Skąd dziś przychodzą pacjenci?", options: ["Z Google i Map Google", "Z ZnanyLekarz", "Z Instagrama", "Z zagranicy"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony chirurga plastycznego robię sam: od danych wyszukiwań i audytu, przez podstrony operacji i profile chirurgów, po wizytówkę Google i widoczność w odpowiedziach AI. Pracuję dla chirurgów z własną praktyką i dla klinik chirurgii plastycznej w całej Polsce, także tych, które przyjmują pacjentów z zagranicy."),

        h2("Na czym polega pozycjonowanie strony chirurga plastycznego"),
        p("Decyzja o operacji zapada powoli. Pacjentka, która myśli o korekcie nosa albo o plastyce brzucha po ciąży, czyta miesiącami: porównuje chirurgów, ogląda ich kwalifikacje, szuka cen, pyta na forach o rekonwalescencję i dopiero wtedy umawia konsultację. Pozycjonowanie ma sprawić, że na każdym etapie tych poszukiwań trafia na Waszą stronę, a podstrona, na którą wejdzie, odpowiada dokładnie na jej pytanie."),
        p(
          "To inna praca niż pozycjonowanie gabinetu medycyny estetycznej, gdzie zabiegi są częste, krótsze i wybierane bliżej domu. Jeśli klinika robi jedno i drugie, zabiegi niechirurgiczne opisuję na stronie ",
          link("pozycjonowanie kliniki medycyny estetycznej", "/pl/pozycjonowanie-strony-kliniki-medycyny-estetycznej"),
          ".",
        ),

        h2("Pozycjonowanie strony chirurga plastycznego a przepisy o informacji bez cech reklamy"),
        p("Chirurg plastyczny jest lekarzem, więc obowiązuje go ta sama zasada co innych lekarzy w Polsce: treść i forma informacji o świadczeniach nie mogą mieć cech reklamy (art. 14 ust. 1 ustawy o działalności leczniczej). Ten sam przepis wiąże klinikę jako podmiot wykonujący działalność leczniczą. Strona kliniki podaje więc fakty — jakie operacje wykonujecie, kto operuje, gdzie, ile to kosztuje, jak wygląda rekonwalescencja — bez „gwarancji efektu”, „najlepszego chirurga w mieście” i promocji na zabiegi."),
        p("Dla pozycjonowania to nie przeszkoda. Google i asystenci AI szukają rzeczowych odpowiedzi, a podstrona napisana jak informacja medyczna zwykle wypada w wynikach lepiej niż tekst reklamowy. Nie udzielam porad prawnych: przy wątpliwościach decyduje okręgowa izba lekarska albo Wasz prawnik."),

        h2("Podstrony operacji: plastyka nosa, powiększanie piersi, plastyka brzucha, blefaroplastyka"),
        p("Pacjenci rzadko wpisują samo „chirurg plastyczny”. Wpisują operację, często z miastem albo szczegółem: „plastyka nosa Kraków”, „powiększanie piersi implanty okrągłe czy anatomiczne”, „plastyka brzucha po ciąży cena”, „blefaroplastyka górnych powiek rekonwalescencja”. Każda operacja, przy której chcecie mieć więcej pacjentów, dostaje osobną podstronę z odpowiedziami na pytania zadawane przed konsultacją:"),
        li("dla kogo jest operacja i kiedy chirurg jej nie zaleca"),
        li("jak przebiega, w jakim znieczuleniu, ile trwa pobyt w klinice"),
        li("rekonwalescencja tydzień po tygodniu: zwolnienie, sport, opieka nad blizną"),
        li("możliwe powikłania opisane spokojnie i wprost"),
        li("widełki cen, co obejmuje cena i link do konsultacji"),
        p("Frazy dobieram z prawdziwych danych dla Waszych operacji i miast. Jedna fraza to jedna podstrona — dwie podstrony o „plastyce nosa” zwykle oznaczają, że żadna nie jest wysoko."),

        h2("Kwalifikacje chirurga plastycznego na stronie: specjalizacja, PWZ i doświadczenie"),
        p("Google traktuje treści o zdrowiu surowiej niż inne tematy, a pacjent sprawdza przede wszystkim, kto będzie operował. Profil chirurga podaje pełne imię i nazwisko, numer prawa wykonywania zawodu, tytuł specjalisty chirurgii plastycznej albo etap specjalizacji, miejsce szkolenia, członkostwo w towarzystwach naukowych pod ich pełną nazwą i operacje, które ten lekarz wykonuje. Każda podstrona operacji wskazuje chirurga, który ją sprawdził, i datę weryfikacji."),
        p("Pacjenci często mylą chirurga plastycznego z lekarzem medycyny estetycznej. Tytuł specjalisty chirurgii plastycznej uzyskuje się po specjalizacji zakończonej egzaminem państwowym; medycyna estetyczna to zabiegi małoinwazyjne, które wykonują lekarze różnych specjalności. Spokojne wyjaśnienie tej różnicy na stronie, bez krytyki innych, pomaga pacjentom i jest faktem, który asystent AI chętnie cytuje."),

        h2("Zdjęcia przed i po w pozycjonowaniu strony chirurga plastycznego"),
        p("W wielu krajach galerie przed i po to najczęściej oglądana część strony kliniki. W Polsce zdjęcia efektów leczenia bywają oceniane jako element reklamy, dlatego zanim je opublikujecie, sprawdźcie aktualne stanowisko swojej okręgowej izby lekarskiej. Jeśli galeria zostaje, warunki są stałe: pisemna zgoda pacjenta na publikację w internecie, te same światło, kadr i tło przed i po, żadnej obróbki poza kadrowaniem, twarz i znaki szczególne zakryte, jeśli pacjent nie zgodził się inaczej."),
        p("Zdjęcie ciała pacjenta to w RODO dane o zdrowiu. Zgoda jest przechowywana w dokumentacji, a podpisy pod zdjęciami opisują operację, nie osobę."),

        h2("Wizytówka Google, ZnanyLekarz i opinie pacjentów chirurga plastycznego"),
        p("Przy wyszukiwaniu „chirurg plastyczny Wrocław” pierwsze są mapy. Wizytówka kliniki potrzebuje właściwej kategorii głównej, listy operacji, prawdziwych zdjęć gabinetu i zespołu — nigdy zdjęć pacjentów — oraz linków do pasujących podstron. Jeśli operujecie w szpitalu albo klinice z blokiem operacyjnym w innym mieście, ten adres opisuję na stronie, a nie w fikcyjnej wizytówce. Pacjenci z mniejszych miejscowości chętnie jadą na operację do Krakowa, Poznania czy Gdańska, więc podstrony operacji mówią też, jak wygląda konsultacja dla osób spoza miasta i ile wizyt kontrolnych trzeba zaplanować."),
        p("ZnanyLekarz jest wysoko dla wielu fraz z nazwą operacji i miastem, więc profil każdego chirurga musi być kompletny i zgodny z wizytówką. Opinie zbieram w Google i w ZnanyLekarz, gdzie są niezależne; cytowanie pochwał na własnej stronie łatwo uznać za reklamę. Odpowiedź na opinię nigdy nie potwierdza, że autor jest pacjentem, i nie wspomina o jego operacji."),

        h2("Pozycjonowanie kliniki chirurgii plastycznej na pacjentów z zagranicy"),
        p("Polska przyjmuje pacjentów z Wielkiej Brytanii, Irlandii, Niemiec i Skandynawii, którzy porównują ceny i chirurgów w kilku krajach. Szukają po angielsku i niemiecku — „tummy tuck Poland”, „Brustvergrößerung Polen Erfahrungen” — i potrzebują innych odpowiedzi niż pacjent z Polski:"),
        li("jak wygląda konsultacja online i jak bezpiecznie przesłać zdjęcia"),
        li("ile dni zostać w Polsce, kiedy kontrola i kiedy można bezpiecznie lecieć"),
        li("gdzie mieszkać w czasie rekonwalescencji i jak dojechać z lotniska"),
        li("jak wygląda opieka po powrocie do domu i kontakt z chirurgiem"),
        p("Każdy język ma osobne podstrony z własnymi adresami i frazami, a nie automatyczne tłumaczenie. To samo dotyczy Polonii, która wraca na operację do kraju i szuka po polsku z nazwą miasta."),

        h2("Cennik operacji plastycznych i raty: podstrony, które odpowiadają na pytanie o koszt"),
        p("„Ile kosztuje powiększanie piersi”, „plastyka powiek cena” i „operacja plastyczna na raty” to jedne z najczęstszych pytań. Polskie kliniki zwykle publikują cenniki, a ceny w tekście — nie w PDF ani na grafice — są informacją, nie reklamą. Podstrona kosztów dla każdej operacji podaje widełki, wyjaśnia, od czego zależy cena — technika, znieczulenie, pobyt, odzież uciskowa, kontrole — i mówi, że ostateczną kwotę ustala chirurg na konsultacji. Osobna podstrona opisuje raty: z kim współpracujecie i jak złożyć wniosek."),

        h2("Pozycjonowanie strony chirurga plastycznego w ChatGPT i AI Overviews (GEO, AEO)"),
        p("Pacjenci pytają dziś ChatGPT, Perplexity i przegląd AI w Google, który chirurg w Poznaniu specjalizuje się w plastyce nosa albo jak długo trwa powrót do pracy po abdominoplastyce. Mówi się o tym GEO — od generative engine optimization — lub AEO, od answer engine optimization. Asystent cytuje fakty, które potrafi przeczytać i potwierdzić w kilku źródłach:"),
        li("chirurdzy, specjalizacje, operacje, adresy i języki zapisane prostymi faktami"),
        li("krótkie odpowiedzi na pytania o operacje, sprawdzone przez chirurga"),
        li("identyczne dane kliniki na stronie, w Mapach Google i w ZnanyLekarz"),
        li("dane strukturalne łączące klinikę, chirurgów i operacje"),
        p(
          "To działa w medycynie. Giuseppe, psycholog i psychoterapeuta z Mediolanu, znalazł mnie przez ChatGPT. Przeniosłem jego stronę z WordPressa na Next.js i Sanity, wszystkie 468 artykułów zachowały adresy dzięki przekierowaniom 301, a panel ostrzega go przed sformułowaniami ryzykownymi w świetle włoskich zasad reklamy usług medycznych. Dziś ChatGPT cytuje jego nowe podstrony w odpowiedziach. Jak prowadzę taką pracę, opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Marketing chirurga plastycznego: gdzie jest miejsce na pozycjonowanie"),
        p(
          "Marketing klinik chirurgii plastycznej opiera się dziś mocno na Instagramie, a zasada „informacja, nie reklama” obowiązuje we wszystkich kanałach. Pozycjonowanie trafia do osób, które same szukają operacji, i działa dalej bez opłat za kliknięcie. Moja część to SEO i ewentualnie nowa strona; kampanii płatnych i kont w mediach społecznościowych nie obsługuję. Strona dobrze uzupełnia Instagram: osoba, która zobaczyła film o rekonwalescencji, wpisuje nazwisko chirurga i trafia na podstronę z pełną informacją. Szerzej o pozycjonowaniu placówek medycznych piszę na stronie ",
          link("pozycjonowanie strony przychodni", "/pl/oferty/pozycjonowanie-strony-przychodni-warszawa"),
          ", o samej usłudze — na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ". Jeśli strona wymaga przebudowy, zobacz ",
          link("strona internetowa dla chirurga plastycznego", "/pl/strona-internetowa-dla-chirurga-plastycznego"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony chirurga plastycznego"),
        li("Audyt SEO strony, wizytówki Google i profilu w ZnanyLekarz: od 1000 zł, jednorazowo, z listą poprawek uszeregowaną według wpływu na liczbę konsultacji."),
        li("Jednorazowe prace — podstrony operacji i kosztów, profile chirurgów, oznaczenia schema.org i naprawy techniczne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie — nowe podstrony, mapy, wersje językowe, widoczność w AI i raporty w zapytaniach o konsultację: od 3500 zł miesięcznie; przy silnej konkurencji, na przykład w Warszawie czy Krakowie, od 5500 zł miesięcznie."),
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
      title: "Pozycjonowanie strony chirurga plastycznego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony chirurga plastycznego?", "Audyt kosztuje od 1000 zł, pojedyncze prace od 1000 do 3000 zł, stała współpraca od 3500 zł miesięcznie, a w miastach z silną konkurencją od 5500 zł. Po krótkim opisie kliniki i operacji podaję stałą kwotę."],
          ["Czy chirurg plastyczny może reklamować się w internecie?", "Nie, jako lekarz może informować o swojej działalności. Strona podaje fakty — operacje, kwalifikacje, ceny, przebieg rekonwalescencji — bez obietnic efektu i porównań z innymi. W razie wątpliwości warto zapytać okręgową izbę lekarską."],
          ["Czy możemy pokazywać zdjęcia przed i po?", "Bywają oceniane jako reklama, więc najpierw sprawdźcie stanowisko swojej izby lekarskiej. Jeśli je publikujecie: pisemna zgoda pacjenta, takie same warunki zdjęć i żadnego retuszu."],
          ["Czym różni się chirurg plastyczny od lekarza medycyny estetycznej?", "Chirurg plastyczny ma specjalizację z chirurgii plastycznej zakończoną egzaminem państwowym i wykonuje operacje. Zabiegi medycyny estetycznej wykonują lekarze różnych specjalności. Strona kliniki powinna to wyjaśniać rzeczowo."],
          ["Czy wystarczy profil w ZnanyLekarz?", "Profil przynosi rejestracje, ale stoi obok innych chirurgów i zależy od zasad portalu. Własna strona wygrywa wyszukiwania nazwiska i operacji w Waszym mieście, a asystenci AI czerpią z niej fakty. Warto mieć jedno i drugie, z identycznymi danymi."],
          ["Ile trwa pozycjonowanie kliniki chirurgii plastycznej?", "Poprawki wizytówki i istniejących podstron dają efekt w kilka tygodni. Nowe podstrony operacji potrzebują zwykle trzech–sześciu miesięcy, w Warszawie i Krakowie często dłużej."],
          ["Czy współpraca zdalna z kliniką w innym mieście działa?", "Działa: audyt, podstrony, wizytówkę i raporty robię zdalnie dla klinik w całej Polsce i za granicą, a rozmowy prowadzimy w dogodnych godzinach. Klinikę w Warszawie mogę też odwiedzić osobiście."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony chirurga plastycznego: co mi wysłać"),
        p(
          "Wyślijcie nazwę kliniki, linki do strony, wizytówki w Mapach Google i profili chirurgów w ZnanyLekarz, listę operacji, przy których chcecie więcej konsultacji, miasto i informację, czy przyjmujecie pacjentów z zagranicy. Odpiszę, od czego zacząłbym pracę i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
