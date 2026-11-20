// Landing page fixture: Pozycjonowanie serwisu AGD (PL), group
// «appliance-repair-seo». New page. Market version for Polish serwisy AGD —
// one-person technicians, small firms with a few vans, workshops repairing
// ekspresy do kawy sent by courier — not a translation of
// appliance-repair-seo.en.
// Semantic core: ref/home-services.md has no measured PL phrases; H1 and
// headings carry «pozycjonowanie serwisu AGD», «naprawa pralek / lodówek /
// zmywarek + miasto», «serwis Bosch / Samsung / Amica», «koszt dojazdu i
// diagnozy», «naprawa gwarancyjna», «wizytówka Google serwisu AGD». PL PAA in
// the core: «Co jest lepsze: pozycjonowanie czy Google Ads?», «Ile kosztuje
// pozycjonowanie firmy?» (FAQ, cost H2).
// Intent: ref/intent-check-home-services.md — EN «appliance repair seo» vs
// «appliance repair website» 0 shared (the latter = consumers) → only the SEO
// buyer’s intent here; PL SERP not checked.
// Angle: searches by urządzenie / marka / objaw / kod błędu; podstrony
// urządzeń incl. ekspresy do kawy; marki and «autoryzowany serwis»; koszt
// dojazdu i diagnozy, «czy opłaca się naprawiać»; gwarancja producenta,
// rękojmia, przedłużona gwarancja ze sklepu (general); naprawa u klienta vs w
// warsztacie i wysyłka kurierem; części i tabliczka znamionowa; wizytówka
// Google and fake listings; Fixly / Oferteo / OLX; AI answers.
// NOT on this page: parts shop e-commerce; website build; wizytówka in depth
// (/pl/oferty/pozycjonowanie-lokalne, linked once); general small-business
// SEO (/pl/pozycjonowanie-strony-malej-firmy, linked once); Google Ads.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s segment.
import { p, h2, h3, li, link, k } from "./pt";

export const applianceRepairSeoPl = {
  lang: "pl",
  group: "appliance-repair-seo",
  slug: "pozycjonowanie-strony-serwisu-agd",
  title: "SEO i pozycjonowanie strony serwisu AGD",
  heading:
    "Pozycjonowanie strony serwisu AGD: zgłoszenia od ludzi, którym dziś zepsuła się pralka, a nie zlecenia z portali",
  excerpt:
    "Zajmuję się pozycjonowaniem serwisów AGD: podstrony urządzeń i marek, obszar dojazdu, koszt diagnozy, naprawy gwarancyjne, wizytówka Google i odpowiedzi AI, żeby klient z zepsutą pralką dzwonił do Was, a nie do portalu.",
  seo: {
    metaTitle: "SEO serwisu AGD: urządzenia, marki i dojazd",
    metaDescription:
      "Pozycjonowanie strony serwisu AGD: podstrony urządzeń i marek, obszar dojazdu, koszt diagnozy, gwarancja, wizytówka Google i AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Urządzenia i marki", "Widoczność w ChatGPT i AI", "Audyt od 1000 zł"],
  heroPhonePoints: ["Naprawa pralki Gdańsk", "Dojazd i diagnoza", "Serwis Bosch", "Zadzwoń teraz"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO serwisu AGD: strona, wizytówka Google, konkurencja", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla serwisu AGD: podstrony urządzeń i marek, cennik, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony serwisu AGD", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony serwisu AGD",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy klientów w Waszych miastach", text: "Urządzenie, marka, usterka i kod błędu" },
        { _key: k("o"), iconName: "layers", title: "Podstrony urządzeń i marek", text: "Pralki, lodówki, zmywarki, ekspresy; Bosch, Samsung, Amica" },
        { _key: k("o"), iconName: "file-text", title: "Cennik dojazdu, diagnozy i napraw", text: "Kwoty, które klient chce znać przed telefonem" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google i obszar dojazdu", text: "Miasta i dzielnice, do których jeżdżą serwisanci" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i podsumowaniach AI", text: "Marki, obszar i ceny, które asystent zacytuje" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w zleceniach", text: "Telefony i formularze z wyszukiwarki według urządzeń" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO serwisu AGD", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony serwisu AGD", value: "od 3500 zł / mies.", note: "podstrony, wizytówka, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony warsztatów i lokalnych firm usługowych",
      subtitle:
        "Trzy warszawskie firmy serwisowe, które żyją z telefonów i Map Google: warsztat samochodowy z pozycjonowaniem lokalnym i podstronami usług, pracownia renowacji felg Felgilab ze stroną usług i cennika oraz przechowalnia opon z landing page’em, którego teksty SEO właściciel zmienia sam. Do tego firma remontowa z Warszawy i strona psychoterapeuty z Mediolanu widoczna w odpowiedziach ChatGPT. Serwis AGD potrzebuje tego samego: podstrony dla każdej naprawy, widocznych cen i wizytówki, która wygrywa w Mapach.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony serwisu AGD",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie i w wizytówce Google, i za jaką stałą cenę.",
      contextLabel: "Nazwa serwisu lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Skąd teraz przychodzą zlecenia?", options: ["Z Google i Map Google", "Z Fixly, Oferteo lub OLX", "Naprawy gwarancyjne", "Stali klienci i polecenia"] },
        { _key: k("z"), question: "Gdzie naprawiacie sprzęt?", options: ["U klienta w domu", "W warsztacie", "Wysyłka kurierem", "Wszystko z powyższych"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Zajmuję się pozycjonowaniem stron serwisów AGD. Chodzi o to, żeby osoba, której pralka przestała wirować albo lodówka nie chłodzi, znalazła w Google Wasz serwis i zadzwoniła od razu."),
        p("Na stronie widzi koszt dojazdu i diagnozy, więc nie szuka dalej. Całą pracę wykonuję osobiście — od analizy fraz i nowych podstron po wizytówkę i comiesięczny raport."),

        h2("Jak klienci szukają serwisu AGD: urządzenie, marka, usterka i miasto"),
        p("Zepsuty sprzęt opisuje się na kilka sposobów i każdy z nich prowadzi na inną podstronę:"),
        li("urządzenie i miejscowość — „naprawa pralek Łódź”, „serwis lodówek Warszawa Mokotów”, „naprawa zmywarki z dojazdem”"),
        li("marka — „serwis Bosch Kraków”, „naprawa pralki Samsung”, „serwis Amica”"),
        li("objaw — „pralka nie odpompowuje wody”, „lodówka nie chłodzi, zamrażarka działa”, „piekarnik nie grzeje”"),
        li("kod błędu — „E18 Bosch zmywarka”, „4C Samsung pralka”"),
        p("Dwie pierwsze grupy to klienci gotowi zamówić naprawę. Dwie kolejne najpierw próbują same; część z nich zadzwoni, gdy zrozumie, że usterka wymaga fachowca."),
        p("Zanim powstanie jakakolwiek podstrona, sprawdzam w danych wyszukiwań, ile osób w Waszych miastach wpisuje każdą z tych fraz i które z nich już dają wejścia."),

        h2("Podstrony urządzeń w pozycjonowaniu strony serwisu AGD: pralki, lodówki, zmywarki, piekarniki, ekspresy"),
        p("Każde urządzenie, które naprawiacie, potrzebuje własnej podstrony: najczęstsze usterki, typowy zakres naprawy i czas jej trwania."),
        p("Pralki i suszarki to łożyska, pompy, grzałki i moduły. Lodówki — chłodzenie, wycieki, sprężarki, No Frost. Płyty indukcyjne i piekarniki — elektronika i grzałki."),
        p("Osobny temat to ekspresy do kawy. Wiele serwisów przyjmuje je w warsztacie albo kurierem z całej Polski, więc ta podstrona może walczyć o frazy ogólnopolskie, nie tylko lokalne."),

        h2("Marki na stronie serwisu AGD: Bosch, Samsung, Electrolux, Amica i autoryzacja"),
        p("Frazy z marką należą do najcenniejszych: klient wie, co ma w kuchni, i szuka kogoś, kto zna ten sprzęt."),
        p("Podstrona marki wymienia urządzenia, które naprawiacie, typowe usterki tej marki i dostępność części."),
        p("Słowa „autoryzowany serwis” używajcie tylko przy markach, dla których macie autoryzację producenta; przy pozostałych wystarczy „naprawiamy pralki Samsung”."),
        p("Nazwa marki w nazwie firmy, domenie albo wizytówce to proszenie się o skargę producenta i zawieszenie wizytówki."),
        h3("Kody błędów i poradniki na stronie serwisu AGD"),
        p("Artykuły o kodach błędów ściągają dużo osób, a Google coraz częściej odpowiada na nie podsumowaniem AI. Warto je pisać dla marek i modeli, które widzicie najczęściej."),
        p("Co oznacza kod, co klient może bezpiecznie sprawdzić sam i kiedy trzeba wezwać serwisanta — z przyciskiem do zgłoszenia w tym miejscu."),

        h2("Koszt dojazdu i diagnozy w serwisie AGD: co napisać na stronie"),
        p("„Ile kosztuje naprawa pralki” i „ile kosztuje dojazd serwisanta” to pytania, od których zaczyna się większość rozmów."),
        p("Na stronie warto podać koszt dojazdu w mieście i poza nim, koszt diagnozy i to, czy jest wliczany w naprawę, widełki typowych napraw oraz zasadę, że klient zna cenę przed rozpoczęciem pracy."),
        p("Kto podaje te kwoty, oszczędza sobie telefonów od osób, które i tak by nie zamówiły."),
        p("Drugie pytanie brzmi: czy opłaca się naprawiać. Krótki poradnik dla każdego urządzenia — kiedy naprawa ma sens przy wieku sprzętu, a kiedy lepiej kupić nowy — buduje zaufanie i zatrzymuje czytelnika na Waszej stronie."),

        h2("Naprawy gwarancyjne w serwisie AGD, rękojmia i klienci płacący sami"),
        p("Wiele serwisów żyje częściowo z napraw gwarancyjnych: dla producentów, którzy dali autoryzację, i ze zleceń w ramach przedłużonej gwarancji kupionej w sklepie."),
        p("To stały strumień pracy, ale stawki ustala ktoś inny, a papierologii jest dużo. Pozycjonowanie rozwija drugą część — klientów, którzy płacą według Waszego cennika."),
        p("Klienci mylą też gwarancję producenta z rękojmią sprzedawcy. Krótka podstrona wyjaśnia, z czym przyjść do Was, a z czym do sklepu, i jakie gwarancje obsługujecie."),
        p("Odpowiada na częste frazy i oszczędza czas biura. To ogólne wyjaśnienie, nie porada prawna."),

        h2("Naprawa u klienta, w warsztacie czy kurierem: obszar działania serwisu AGD"),
        p("Duży sprzęt naprawia się w domu klienta, więc liczy się obszar dojazdu: miasta, dzielnice i gminy, do których jeździcie, i w które dni."),
        p("Mniejszy sprzęt — ekspresy, roboty kuchenne, odkurzacze — często trafia do warsztatu albo przychodzi kurierem."),
        p("Te dwie usługi mają innych klientów i inne frazy, dlatego warto je rozdzielić: podstrony lokalne dla napraw z dojazdem i jedną mocną podstronę wysyłkową dla całej Polski."),
        h3("Tabliczka znamionowa i części: jak strona skraca naprawę"),
        p("Formularz zgłoszenia powinien prosić o urządzenie, markę i zdjęcie tabliczki znamionowej. Gdy serwisant zna model przed wizytą, zabiera właściwe części i kończy naprawę za pierwszym razem."),
        p("Jeśli część trzeba zamówić, krótka informacja o typowym czasie oczekiwania oszczędza nerwów i złych opinii."),

        h2("Klienci firmowi serwisu AGD: zarządcy najmu, hotele i biura"),
        p("Właściciele mieszkań na wynajem, firmy od najmu krótkoterminowego, małe hotele i biura z kuchniami dzwonią regularnie, często z kilkoma urządzeniami naraz."),
        p("Szukają serwisu, który wystawia faktury, umawia się z najemcą i szybko decyduje, czy naprawiać, czy wymieniać."),
        p("Osobna podstrona dla klientów firmowych — zasady rozliczeń, czas reakcji, obsługa kilku lokali — przynosi mniej wejść niż „naprawa pralek”, ale stałe zlecenia."),

        h2("Wizytówka Google serwisu AGD i opinie klientów"),
        p("Serwis z dojazdem ustawia wizytówkę jako firmę z obszarem działania: kategoria naprawy AGD, miasta, godziny, zdjęcia z napraw."),
        p("W Mapach jest w tej branży sporo wizytówek-pośredników, które przekazują zgłoszenia dalej. Prawdziwy serwis z tymi samymi danymi na stronie, w wizytówce i w katalogach takich jak Panorama Firm ma przewagę."),
        p(
          "Opinie z nazwą urządzenia, marki i dzielnicy pomagają i w Mapach, i przy decyzji kolejnego klienta. Więcej na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Serwis AGD a Fixly, Oferteo i OLX: zlecenia z portali czy z własnej strony"),
        p("Portale dają zapytania od pierwszego dnia, ale to samo zgłoszenie widzi kilku serwisantów, a za kontakty się płaci."),
        p("Własna strona i wizytówka przynoszą klientów, którzy szukają konkretnie Waszej usługi, bez opłaty za każde zapytanie."),
        p("Wiele serwisów korzysta z obu dróg: portal na start albo w słabszych tygodniach, pozycjonowanie jako kanał, który z czasem zmniejsza zależność od portali."),

        h2("Pozycjonowanie strony serwisu AGD w ChatGPT, Perplexity, Gemini i AI Overviews (GEO, AEO)"),
        p("Klienci pytają ChatGPT, Perplexity albo Gemini, czy opłaca się naprawiać ośmioletnią zmywarkę, co znaczy kod błędu i kto w ich mieście naprawia pralki Bosch."),
        p("Coraz częściej odpowiedź pojawia się też w podsumowaniu AI nad wynikami Google. Dbanie o to, żeby padała w niej nazwa Waszego serwisu, to GEO (generative engine optimization) lub AEO (answer engine optimization). Chodzi o:"),
        li("marki, urządzenia, obszar dojazdu i koszt diagnozy opisane zwykłymi zdaniami"),
        li("rzetelne odpowiedzi na pytania o usterki na Waszych podstronach"),
        li("oznaczenia schema.org, dzięki którym Google wiąże stronę serwisu z wizytówką"),
        li("ta sama nazwa, adres i telefon na stronie, w wizytówce i w katalogach"),
        p(
          "Na początku współpracy i po kilku miesiącach zapisuję, co asystenci mówią o Waszym serwisie. Szczegóły na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak mierzę wyniki pozycjonowania strony serwisu AGD: telefony i zgłoszenia"),
        p("Raport z samymi pozycjami fraz nie mówi, czy serwisanci mają więcej pracy."),
        p("Ustawiam w GA4 zdarzenia na kliknięcia w numer telefonu, WhatsApp i wysłanie formularza, a w Google Search Console sprawdzam, które podstrony urządzeń i marek przyciągają ludzi."),
        p("W raporcie widać, ile zgłoszeń przyszło z wyszukiwarki i z Map, i przy jakich urządzeniach — dzięki temu wiadomo, które podstrony rozwijać dalej."),

        h2("Kto pozycjonuje strony serwisów AGD i co konkretnie zmienia"),
        p("Krótka odpowiedź: prawie nikt nie robi tego porządnie i właśnie dlatego to działa."),
        p("Agencje sprzedające pozycjonowanie lokalne traktują serwis AGD jak hydraulika — jedna podstrona miasta, wizytówka, kilka opinii. Ta branża tak nie działa."),
        p("Zlecenie wygrywa to, czy podstrona odpowiada urządzeniu, marce i usterce, którą człowiek przed chwilą wpisał, i czy koszt dojazdu widać przed telefonem."),
        p("Co zmieniam, po kolei: podstrony urządzeń i marek, które naprawiacie naprawdę, obszar działania zapisany jako miejscowości, do których dojeżdżacie."),
        p("Dalej koszt dojazdu i zasady gwarancji napisane zwykłymi słowami, formularz proszący o zdjęcie tabliczki znamionowej i wizytówka, która mówi to samo co strona."),

        h2("Pozycjonowanie serwisu AGD w Warszawie i w całej Polsce"),
        p("Warszawa rządzi się tu własnymi prawami: konkurencja jest największa, ale i zleceń najwięcej, a klient prawie zawsze dopisuje dzielnicę albo „dojazd dzisiaj”."),
        p("Podstrona miejska ma więc nieść czas dojazdu i godziny, a nie ogólne zdania o jakości."),
        p("Poza Warszawą działa coś odwrotnego: w mniejszych miastach wystarczy jedna porządna podstrona na miasto i uczciwie wypisany obszar dojazdu, żeby wejść wysoko — bo konkurencja ma tam zwykle samą wizytówkę i numer telefonu."),
        p(
          "Jeśli zaczynacie od stolicy, warto zobaczyć też ",
          link("pozycjonowanie stron w Warszawie", "/pl/oferty/pozycjonowanie-stron-warszawa"),
          " i ",
          link("tworzenie stron internetowych w Warszawie", "/pl/tworzenie-stron-internetowych-warszawa"),
          " — tam opisuję samą pracę nad miastem, bez branży.",
        ),

        h2("Ile kosztuje pozycjonowanie strony serwisu AGD"),
        li("Audyt SEO serwisu AGD — strona, wizytówka i konkurenci w Waszym mieście: od 1000 zł jednorazowo, z poprawkami w kolejności ważności."),
        li("Jednorazowe prace — podstrony urządzeń i marek, cennik dojazdu i diagnozy, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony serwisu AGD — nowe podstrony, wizytówka, opinie, widoczność w AI i raport w zleceniach: od 3500 zł miesięcznie."),
        p(
          "Wszystkie ceny są w ",
          link("cenniku", "/pl/cennik"),
          ". Jednoosobowy serwis znajdzie też przydatne informacje na stronie ",
          link("pozycjonowanie strony małej firmy", "/pl/pozycjonowanie-strony-malej-firmy"),
          ", a podejście do stałej współpracy opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony serwisu AGD: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony serwisu AGD?", "Audyt kosztuje od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, a stałe pozycjonowanie od 3500 zł miesięcznie. Po krótkim opisie serwisu i obszaru dojazdu podaję stałą cenę."],
          ["Co jest lepsze: pozycjonowanie czy Google Ads dla serwisu AGD?", "Reklama przynosi telefony od razu, ale każde kliknięcie kosztuje i ruch kończy się razem z budżetem. Pozycjonowanie rozkręca się miesiącami, potem wejścia z Google nie są płatne. Zajmuję się SEO i stroną, na którą może prowadzić także reklama."],
          ["Po jakim czasie serwis AGD zobaczy więcej zleceń z Google?", "Poprawki wizytówki i istniejących podstron mogą zadziałać w kilka tygodni. Nowe podstrony urządzeń i marek zwykle potrzebują dwóch–czterech miesięcy, w dużych miastach dłużej."],
          ["Czy mogę pisać „serwis Bosch”, jeśli nie mam autoryzacji?", "Możecie napisać, że naprawiacie sprzęt Bosch, jeśli to robicie. „Autoryzowany serwis” tylko przy markach, dla których macie autoryzację; nazwę marki lepiej trzymać z dala od nazwy firmy i domeny."],
          ["Czy warto pisać ceny napraw na stronie?", "Tak, przynajmniej koszt dojazdu i diagnozy oraz widełki typowych napraw. Klient szybciej dzwoni, gdy zna kwotę, a asystenci AI chętniej cytują serwis, który ją podaje."],
          ["Czy pozycjonujesz serwisy AGD spoza Warszawy?", "Tak. Serwisy z Poznania, Trójmiasta czy mniejszych miast prowadzę tak samo jak warszawskie — zdalnie, na danych wyszukiwań z Waszej okolicy."],
          ["Czy ChatGPT napisze teksty na stronę serwisu?", "Napisze szkic. Nie zna jednak marek, które naprawiacie najczęściej, Waszego cennika, obszaru dojazdu ani tego, z czym są wysoko konkurenci, a ogólne teksty o naprawach rzadko się pozycjonują."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony serwisu AGD: co mi wysłać"),
        p("Wyślijcie nazwę serwisu, link do strony i do wizytówki w Mapach Google, miasta i dzielnice, do których dojeżdżacie, oraz urządzenia i marki, przy których chcecie więcej zleceń."),
        p(
          "Napiszcie też koszt dojazdu i diagnozy oraz jaką część pracy stanowią naprawy gwarancyjne. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
