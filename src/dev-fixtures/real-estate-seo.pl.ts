// Fixture landinga: SEO dla stron nieruchomości (PL), grupa «real-estate-seo».
// Przepisanie istniejącej strony na starym szablonie pod tym samym adresem
// /pl/seo-dla-stron-nieruchomosci — przez replace-landing.cjs.
//
// Rdzeń semantyczny: research/pseo/page-core/real-estate-finance.csv — po
// polsku zmierzonego popytu na te sformułowania nie ma (zero fraz on topic),
// więc strona powstaje pod ten sam sens co angielska, bez liczenia na wolumen.
// Wersja angielska celuje w «real estate seo» (1000).
//
// Pozycjonowanie treści, decyzja z 30.10.2026: strona bierze szeroki sens i
// odsyła dwie węższe grupy linkami, bo obie mają już własne strony na nowym
// szablonie. Sprawdzenie intencji (research/pseo/intent-check-real-estate-
// finance.md) dało zero wspólnych adresów z dziesięciu między «strona dla
// agenta nieruchomości» i «strona dla biura nieruchomości» — strony są więc
// osobne i nic nie jest scalane ani przekierowywane.
//   agenci indywidualni → /pl/pozycjonowanie-strony-agenta-nieruchomosci
//   deweloperzy         → /pl/pozycjonowanie-strony-dewelopera
//
// Usterki starej strony (zob. drafts/current/pl-seo-dla-stron-nieruchomosci.md):
//   * pole heading puste — strona nie miała H1 w ogóle;
//   * «SEO dla nieruchomości pozwala:» — nagłówek zaczyna zdanie zamiast
//     nazywać sekcję (jeden z siedmiu znalezionych w audycie nagłówków
//     30.10.2026);
//   * «Najczęściej zadawane pytania» — nagłówek bez słowa kluczowego, choć w
//     wersji angielskiej w tym samym miejscu jest poprawny;
//   * emoji ✔/❌ w tabeli porównawczej.
//
// Zasada właściciela dla PL: «pozycjonowanie strony X», nigdy «pozycjonowanie
// firmy X». JDG jest zwolniona z VAT, więc «faktura», nigdy «faktura VAT».
import { p, h2, h3, li, link, k } from "./pt";

export const realEstateSeoPl = {
  lang: "pl",
  group: "real-estate-seo",
  slug: "seo-dla-stron-nieruchomosci",
  title: "Pozycjonowanie stron nieruchomości",
  heading: "Pozycjonowanie strony nieruchomości: zapytania trafiają na Waszą stronę, a nie na portal",
  excerpt:
    "Zajmuję się pozycjonowaniem stron nieruchomości — biur, firm inwestycyjnych i deweloperskich — razem z GEO i AEO, czyli pracą, po której stronę wymieniają odpowiedzi ChatGPT, Perplexity i AI Overviews. Katalog, który wyszukiwarka potrafi przejść, podstrony lokalizacji, jakich nie mają portale, i ceny, które klient widzi. Audyt i poprawki robi jedna osoba.",
  seo: {
    metaTitle: "SEO nieruchomości — zapytania na Waszą stronę, nie portal",
    metaDescription:
      "Pozycjonowanie strony nieruchomości: przechodzalny katalog, podstrony lokalizacji, ceny na stronie, plus GEO i AEO dla odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Katalog i podstrony lokalizacji", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Mieszkania Wilanów", "Ile kosztuje zakup mieszkania", "Nowe inwestycje w pobliżu", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony nieruchomości: katalog, lokalizacje i odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: architektura katalogu, podstrony lokalizacji, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony nieruchomości", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co obejmuje",
      title: "Co obejmuje pozycjonowanie strony nieruchomości",
      items: [
        { _key: k("o"), iconName: "layers", title: "Katalog, który wyszukiwarka przechodzi w całości", text: "Filtry i paginacja przestają dzielić sygnały" },
        { _key: k("o"), iconName: "map-pin", title: "Podstrony lokalizacji i dzielnic", text: "Pytania, na które ogłoszenie nie odpowiada" },
        { _key: k("o"), iconName: "file-text", title: "Podstrony pod typy nieruchomości", text: "Napisane tak, jak klient naprawdę szuka" },
        { _key: k("o"), iconName: "globe", title: "Wersje językowe i hreflang", text: "Kupujący z zagranicy szuka w swoim języku" },
        { _key: k("o"), iconName: "zap", title: "Szybkość na podstronach ze zdjęciami", text: "To zdjęcia nieruchomości spowalniają takie strony" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI (GEO, AEO)", text: "ChatGPT, Perplexity i AI Overviews w Google" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Dlaczego strona biura nieruchomości przegrywa z portalami w Google i co da się zmienić"),
        p("Strony nieruchomości nie są niewidoczne z powodu wyglądu. Są niewidoczne, bo podstrony, które mogłyby się wyświetlać, po prostu nie istnieją, a te, które istnieją, są rozsypane po setkach adresów z filtrami. Przyczyna jest prawie zawsze strukturalna, a nie kosmetyczna."),
        p("Druga przyczyna to konkurencja. Otodom, OLX, Morizon i Nieruchomości-online trzymają zapytania ogólne w rodzaju «mieszkania <miasto>» i żadna optymalizacja nie postawi biura wyżej od nich. Tam ta praca się nie zwraca i nie będę obiecywać inaczej."),
        p("Zwraca się tam, gdzie portale odpowiadają słabo. Klient pyta, która dzielnica będzie dobra dla rodziny, ile w sumie kosztuje zakup razem z podatkiem i notariuszem, co faktycznie obejmuje konkretna inwestycja, czym różni się rentowność najmu w dwóch dzielnicach — i dostaje od portalu listę ogłoszeń zamiast odpowiedzi. Tę lukę zamyka własna strona, a zapytanie przychodzi wtedy bezpośrednio, nie jest kupowane."),

        h2("Katalog, który wyszukiwarka potrafi przejść: filtry, paginacja, adresy kanoniczne"),
        p("Katalog ofert to najtrudniejsza konstrukcja techniczna w tej branży. Każde połączenie filtrów potrafi wygenerować osobny adres, a strona z ośmioma filtrami wytwarza więcej adresów niż ma ofert. Wyszukiwarka zużywa wtedy cały limit przechodzenia na niemal identyczne podstrony i dzieli między nie sygnały rankingowe."),
        p("Praca jest tu niewdzięczna i decyduje o wszystkim dalszym: które kombinacje filtrów zostają podstronami do indeksu, a które nie; gdzie prowadzą adresy kanoniczne; jak działa paginacja, żeby czternasta strona nie została bez linków; dane strukturalne ofert; mapa strony odpowiadająca temu, co faktycznie istnieje. Zrobione raz, porządnie, jest to najbardziej opłacalna inwestycja techniczna na stronie nieruchomości."),
        p("Dotyczy to też ofert sprzedanych. Zniknięta podstrona oferty zostawia albo martwy adres, albo miękki błąd 404 — żadne z tego nie jest neutralne, a przy tempie, w jakim zmienia się taki katalog, to wymierna wielkość."),

        h2("Podstrony lokalizacji i dzielnic: to, czego nie da ogłoszenie na portalu"),
        p("Podstrony lokalizacji to podstawa SEO w nieruchomościach, a większość stron albo ich nie ma, albo wstawia tam mapę i listę ogłoszeń."),
        p("Podstrona lokalizacji zaczyna przynosić ruch, kiedy odpowiada na to, czego z ogłoszenia nie da się wyczytać: jaka to dzielnica, kto tam mieszka, co z komunikacją i szkołami, jak zmieniały się ceny, jakie są koszty utrzymania, co powstaje w okolicy. Portal takiego tekstu nie napisze z powodu modelu biznesowego: sprzedaje ogłoszenia, nie wiedzę o miejscu."),
        p("Tak samo działają podstrony pod typy nieruchomości: nowe inwestycje, rynek wtórny, domy, lokale usługowe, działki. Każdy ma innego klienta z innymi pytaniami i własny popyt w wyszukiwarce."),

        h2("Ceny i warunki na stronie: co klient sprawdza przed telefonem"),
        p("Klient kupujący nieruchomość przychodzi z pytaniami o pieniądze, a strona, która je omija, traci zapytanie na rzecz tej, która ich nie omija."),
        p("Czyli: widełki cenowe według dzielnic i typów nieruchomości, z czego składa się pełny koszt zakupu poza ceną — podatek, notariusz, prowizja — i jak wygląda proces krok po kroku, również dla kupującego z zagranicy. To, co napisane, odsiewa zapytania, których i tak nie przyjmiecie, i podnosi jakość pozostałych."),

        h2("Kilka języków na stronie nieruchomości i błędy, które kosztują pozycje"),
        p("Kupujący z zagranicy szuka w swoim języku, a kupuje w Polsce, dlatego poważne strony w tej niszy są wielojęzyczne. Tam też zwykle siedzi szkoda techniczna."),
        p("Powtarza się to samo: hreflang prowadzi do podstron, których nie ma; jedna wersja językowa jest tłumaczona maszynowo z drugiej i wchodzi do indeksu jako cienki duplikat; lokalizacje w różnych językach nazwane są inaczej, więc żadna nie zbiera mocy; przełącznik języka wyrzuca na stronę główną zamiast na tę samą ofertę. Wszystko to da się naprawić i wszystko to kosztuje dziś pozycje stronom, które z zewnątrz wyglądają dobrze."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony nieruchomości i inwestycji, nad którymi pracowałem",
      subtitle:
        "Pierwszy case to wielojęzyczna platforma nieruchomości: katalog, lokalizacje i kilka języków naraz. Dalej: strona o remontach i inwestowaniu w nieruchomości, przebudowa strony biura architektonicznego ze skanem SEO i projekty wielojęzyczne, w których zadecydowała struktura.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Kiedy pojawią się pierwsze efekty pozycjonowania strony nieruchomości"),
        p("Pierwsze mierzalne zmiany widać po około półtora miesiąca: podstrony, których nie było w indeksie, wchodzą do niego, a na zapytaniach, na których strona wcześniej się nie pokazywała, pojawiają się wyświetlenia. Stały wzrost zapytań narasta przez trzy do sześciu miesięcy, w miarę jak podstrony lokalizacji i typów nieruchomości zbierają moc, a poprawki katalogu przechodzą przez indeks."),
        p("W nieruchomościach zapytania ogólne idą wolniej niż w większości branż — trzymają je portale. Długi ogon idzie szybciej, bo porządnych tekstów o lokalizacjach prawie nikt nie pisze. Dlatego praca zaczyna się od ogona."),

        h2("Ile kosztuje pozycjonowanie strony nieruchomości i co obejmuje"),
        p(
          "Audyt strony, katalogu i odpowiedzi AI to 1000 zł. Prace jednorazowe — architektura katalogu, podstrony lokalizacji, dane strukturalne — od 1000 do 3000 zł zależnie od zakresu. Stałe pozycjonowanie to 3500 zł miesięcznie i obejmuje część techniczną, plan treści, nowe podstrony i raportowanie. Pełny cennik jest na ",
          link("stronie z cennikiem", "/pl/cennik"),
          ", a audyt ma własną podstronę: ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),
        p("Audyt i poprawki robi jedna osoba. Nie dostajecie listy problemów i propozycji, żeby poszukać do niej programisty."),

        h2("Dla kogo pozycjonowanie strony nieruchomości ma sens, a dla kogo nie"),
        p("Ma sens, jeśli sprzedajecie albo wynajmujecie przez własną stronę, macie katalog wart przechodzenia i jesteście gotowi publikować treści o lokalizacjach i procesie zakupu. Ma sens dla firmy inwestycyjnej lub deweloperskiej, gdzie jedno zapytanie jest warte tyle, że kilka miesięcy przygotowania jest wyraźnie tańsze niż ta sama kwota w reklamie."),
        p("Nie ma sensu, jeśli cały biznes idzie przez ogłoszenia na portalach, a strona jest formalnością; jeśli na stronie nic nie można zmieniać; jeśli zapytania są potrzebne w tym tygodniu — to budżet reklamowy, a nie SEO."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony nieruchomości",
      subtitle:
        "Odpowiadam w ciągu jednego dnia roboczego: co zrobiłbym pierwsze, w jakiej kolejności i za ile.",
      contextLabel: "Strona lub nazwa firmy",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i otrzymaj wycenę",
      note: "Albo napiszcie na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "seo",
      quizQuestions: [
        { _key: k("z"), question: "Co sprzedajecie?", options: ["Rynek wtórny", "Nowe inwestycje", "Najem", "Nieruchomości inwestycyjne"] },
        { _key: k("z"), question: "Skąd dziś przychodzą zapytania?", options: ["Portale ogłoszeniowe", "Reklama", "Wyszukiwarka", "Polecenia"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Nieruchomości w wyszukiwaniu AI: czym są GEO i AEO i jak się to robi"),
        p("Klienci coraz częściej zaczynają nie od listy dziesięciu linków, a od pytania w ChatGPT, Perplexity albo w przeglądach AI w Google: «która dzielnica Warszawy będzie dobra dla rodziny», «ile kosztuje zakup mieszkania razem z podatkiem», «które biura prowadzą tę inwestycję». Asystent odpowiada z tekstu, który potrafi przeczytać i streścić, i podaje źródła."),
        p("Tę pracę opisują dwa skróty. GEO, generative engine optimization, to doprowadzenie do tego, że asystent AI bierze stronę jako źródło i ją wymienia. AEO, answer engine optimization, to wejście do samej odpowiedzi, a nie do listy linków pod nią. Jedno i drugie nagradza te same rzeczy, i nie są to te same rzeczy, które nagradzają klasyczne pozycje."),
        h3("Czego asystenci AI faktycznie używają"),
        li("bezpośredniej odpowiedzi na początku sekcji, przed kontekstem i zastrzeżeniami;"),
        li("faktów — ceny, metraże, opłaty, terminy — zamiast przymiotników o rynku;"),
        li("danych strukturalnych Schema.org zgodnych z widocznym tekstem, a nie sprzecznych z nim;"),
        li("jednakowych nazw lokalizacji, typów nieruchomości i samej firmy na całej stronie;"),
        li("treści w HTML, widocznej bez uruchamiania skryptów."),
        p(
          "Nieruchomości pasują do wyszukiwania AI nietypowo dobrze: decyzja opiera się tu na zaufaniu i szczegółach, nie tylko na cenie. Jak to się robi na już istniejącej stronie, to osobna praca: ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie stron nieruchomości: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Czym SEO w nieruchomościach różni się od zwykłego SEO?", "Trzema rzeczami: dużym katalogiem, który stale się zmienia; bezpośrednią konkurencją z portalami na każdym zapytaniu ogólnym; klientem, który szuka w kilku językach. Dlatego ciężar pracy przesuwa się na architekturę katalogu, treści o lokalizacjach i hreflang, a nie na ogólną listę kontrolną."],
          ["Konkurować z portalami ogłoszeniowymi czy je uzupełniać?", "I jedno, i drugie, ale w różnych miejscach. Portale dają wolumen, ale zapytanie i relacja z klientem należą do nich. Własna strona to jedyny aktyw, który należy do Was: marka, przepływ zapytań, dane klientów. I wygrywa na tej głębokości, której portal nie napisze."],
          ["Jakie treści dają stronie nieruchomości najwięcej ruchu", "Omówienia lokalizacji i dzielnic, podstrony pod typy nieruchomości oraz poradniki zakupowe: proces, finansowanie, kroki prawne. Wszystkie trzy odpowiadają na to, czego nie ma w ogłoszeniu, dlatego długo trzymają pozycje."],
          ["Jak filtry i parametry w adresach wpływają na katalog", "To główne ryzyko techniczne. Kombinacje filtrów tworzą setki niemal identycznych adresów, które dzielą między sobą sygnały i zjadają limit przechodzenia. Decyzja, które kombinacje zostają podstronami, plus adresy kanoniczne i paginacja — tam leży główny zysk techniczny."],
          ["Po jakim czasie będą efekty", "Około półtora miesiąca do pierwszych mierzalnych zmian, trzy do sześciu miesięcy do stałego wzrostu zapytań. Zapytania ogólne, które trzymają portale, idą dłużej; długi ogon rusza pierwszy, dlatego od niego zaczynamy."],
          ["Jak sprawdzić, czy SEO działa", "Po zapytaniach, nie po pozycjach. Ile zapytań przyszło z wyszukiwarki, ile z nich jest wartościowych, ile kosztuje zapytanie z wyszukiwarki w porównaniu z reklamowym i jak rośnie udział wyszukiwarki w całym strumieniu. Pozycje są wskaźnikiem pośrednim — pokazuję je, ale wynikiem nie są."],
          ["Jesteśmy agentem indywidualnym, nie biurem. Ta strona jest dla nas?", "Nie. Agent indywidualny sprzedaje swoje nazwisko, kilka dzielnic i własną historię transakcji — praca wygląda inaczej i ma osobną podstronę o pozycjonowaniu strony agenta nieruchomości. Deweloper sprzedający własne inwestycje ma swoją."],
          ["Pracujecie ze stronami w kilku językach?", "Tak, ta strona sama działa w trzech. Wielojęzyczne strony nieruchomości to właśnie miejsce, gdzie zwykle siedzi naprawialna szkoda techniczna: zepsuty hreflang, tłumaczenia maszynowe w indeksie, różne nazwy tych samych lokalizacji."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Agenci i deweloperzy: dwie podstrony obok tej"),
        p(
          "Agent indywidualny albo mały zespół ma inne zadanie — własne nazwisko, własne dzielnice, własne oferty: ",
          link("pozycjonowanie strony agenta nieruchomości", "/pl/pozycjonowanie-strony-agenta-nieruchomosci"),
          ". Deweloper sprzedający własne inwestycje ma trzecie, zbudowane wokół podstron inwestycji i terminów startu: ",
          link("pozycjonowanie strony dewelopera", "/pl/pozycjonowanie-strony-dewelopera"),
          ". Jeśli strony nie trzeba pozycjonować, a zbudować, zacznijcie tutaj: ",
          link("tworzenie strony dla agencji nieruchomości", "/pl/strona-dla-agencji-nieruchomosci"),
          ".",
        ),

        h2("Zamów pozycjonowanie strony nieruchomości: co mi wysłać"),
        p("Wyślijcie stronę, miasta i rynki, na których sprzedajecie, języki strony i to, skąd dziś przychodzą zapytania. Odpowiem, co zrobiłbym pierwsze, w jakiej kolejności i za ile — a jeśli uczciwa odpowiedź brzmi, że najbliższe miesiące lepiej zamknąć reklamą, to powiem właśnie to."),
      ],
    },
  ],
};
