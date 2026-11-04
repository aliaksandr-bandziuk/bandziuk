// Fixture landinga: tworzenie stron dla agencji nieruchomości (PL), grupa
// «real-estate-agency-website». Przepisanie istniejącej strony na starym
// szablonie pod tym samym adresem /pl/strona-dla-agencji-nieruchomosci —
// przez replace-landing.cjs.
//
// Zmierzony popyt jest niewielki: core.csv daje «strona dla agencji
// nieruchomości» 40. Strona powstaje na nowo ze względu na strukturę i spójność
// klastra, nie ze względu na ruch: stara miała JEDEN H2.
//
// Progi cenowe nie są wymyślone: artykuł /pl/blog/ile-kosztuje-strona-dla-
// agencji-nieruchomosci podaje trzy poziomy — od 8500 zł, od 15 000 zł,
// od 23 000 zł. Sprawdzone na żywej stronie 30.10.2026.
//
// Usunięte ze starej strony: blok z dwiema liczbami na pierwszym ekranie —
// «+1500 odwiedzających z organic» i «99% wartościowych leadów» — pod tytułem
// «Dlaczego strony agencji nieruchomości nie sprzedają». Pierwsza liczba jest
// prawdziwa, pochodzi z case'u cypryjskiego, ale była podana jako obietnica
// ogólna; druga nie jest niczym mierzona. 1500 zostaje tylko tam, gdzie jest
// wprost przypisane do case'u. Usunięty też blok opinii (decyzja właściciela
// z 25.10.2026) i zahardkodowane bloki starego szablonu.
//
// Zachowane merytorycznie ze starego bloku tekstowego, napisanego już w
// obecnym stylu: dlaczego agencja przegrywa z portalami, co kupujący sprawdza
// przed kontaktem, dlaczego wersje językowe mają tu większe znaczenie.
//
// Rozdzielenie w klastrze: ta strona dotyczy agencji; agent indywidualny to
// /pl/strona-internetowa-dla-agenta-nieruchomosci; deweloper sprzedający własne
// inwestycje to /pl/strona-dla-dewelopera; pozycjonowanie istniejącej strony to
// /pl/seo-dla-stron-nieruchomosci. Sprawdzenie intencji (intent-check-real-
// estate-finance.md) dało zero wspólnych adresów z dziesięciu między «strona
// dla agenta nieruchomości» i «strona dla biura nieruchomości».
//
// JDG jest zwolniona z VAT, więc «faktura», nigdy «faktura VAT».
import { p, h2, h3, li, link, k } from "./pt";

export const realEstateAgencyWebsitePl = {
  lang: "pl",
  group: "real-estate-agency-website",
  slug: "strona-dla-agencji-nieruchomosci",
  title: "Tworzenie stron internetowych dla agencji nieruchomości",
  heading: "Tworzenie strony dla agencji nieruchomości: katalog, który przynosi zapytania, a nie tylko pokazuje oferty",
  excerpt:
    "Buduję strony dla agencji nieruchomości: katalog ofert z filtrami, z których ktoś naprawdę korzysta, import ofert, który się nie psuje, połączenie z CRM, żeby żadne zapytanie nie przepadło, i drugą oraz trzecią wersję językową jako osobną pracę, a nie tłumaczenie. Robię to sam, od struktury do kodu.",
  seo: {
    metaTitle: "Strona dla agencji nieruchomości — zakres, cena, termin",
    metaDescription:
      "Tworzenie strony dla agencji nieruchomości: katalog z filtrami, import ofert, połączenie z CRM, wersje językowe i struktura czytelna dla AI. Od 8500 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Katalog z działającymi filtrami", "Strony od 8500 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["3 pokoje, balkon", "Dodaj do schowka", "Zamów prezentację", "Cena na zapytanie"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Podstawowa strona katalogowa agencji: oferty, filtry, formularze zapytań", price: 8500, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona agencji z połączeniem z CRM, importem ofert i rozbudowaną wyszukiwarką", price: 15000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Duży portal nieruchomości z rozbudowaną funkcjonalnością, zakres liczony osobno", price: 23000, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co obejmuje",
      title: "Co obejmuje tworzenie strony dla agencji nieruchomości",
      items: [
        { _key: k("o"), iconName: "database", title: "Katalog ofert z działającymi filtrami", text: "Cena, dzielnica, typ, pokoje — i nic, czym nikt nie filtruje" },
        { _key: k("o"), iconName: "refresh-cw", title: "Import i aktualizacja ofert", text: "Z Waszego feedu, CRM albo ręcznie — jak jest w rzeczywistości" },
        { _key: k("o"), iconName: "plug", title: "Podłączenie zapytań do CRM", text: "Każde zapytanie trafia tam, gdzie ktoś je widzi" },
        { _key: k("o"), iconName: "globe", title: "Druga i trzecia wersja językowa", text: "Z własnym doborem fraz, a nie tłumaczeniem istniejącej" },
        { _key: k("o"), iconName: "zap", title: "Szybkość na podstronach ze zdjęciami", text: "To zdjęcia nieruchomości spowalniają takie strony" },
        { _key: k("o"), iconName: "sparkles", title: "Struktura czytelna dla asystentów AI", text: "Bezpośrednie odpowiedzi i dane zgodne z tekstem" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Dlaczego strona agencji przegrywa z portalami, z którymi konkuruje"),
        p("Strona agencji prawie zawsze zaczyna się jako katalog. Oferty wgrane, filtry dodane, strona uznana za gotową. Kłopot w tym, że katalog to jedyna rzecz, w której agencja nigdy nie wygra: portale mają więcej ofert, więcej ruchu i większe budżety na wyszukiwarkę, a klient szukający samych ogłoszeń idzie najpierw tam. Strona konkurująca wielkością bazy konkuruje dokładnie na tej osi, na której przegra na pewno."),
        p("Agencja ma natomiast wszystko to, czego portal nie pokaże: w jakich dzielnicach faktycznie pracujecie, jaki segment znacie, w jakim języku mówią Wasi klienci i co dzieje się po pierwszym zapytaniu. Z tego materiału trzeba budować stronę."),

        h2("Co kupujący sprawdza na stronie agencji przed kontaktem"),
        p("Kiedy ktoś trafia na Waszą stronę, ofertę zwykle widział już gdzieś indziej. Ta wizyta to nie szukanie, a sprawdzanie: rozstrzyga się, czy zapytanie pójdzie do Was, czy do agencji otwartej w sąsiedniej karcie."),
        p("Patrzą, od ilu lat pracujecie na tym rynku, czy oferty są aktualne, czy odpowiada człowiek z imieniem i nazwiskiem i czy warunki są podane, czy przytrzymane do rozmowy. To nie ozdoba — to właśnie ta treść rozstrzyga między zapytaniem a zamkniętą kartą, i to jej nie ma w katalogu z formularzem w stopce."),

        h2("Katalog ofert i filtry: po czym filtrować, a co usunąć"),
        p("Filtry to miejsce, w którym strony agencji są jednocześnie przeładowane i niewykorzystane. Osiem filtrów wygląda solidnie i daje podstronę, której nie da się obsłużyć na telefonie, plus problem z przechodzeniem, który strona ciągnie potem latami."),
        p("Niemal każde szukanie rozstrzygają cztery–pięć: cena, dzielnica, typ nieruchomości, liczba pokoi i jeszcze jeden, ważny w Waszym segmencie — powierzchnia działki, piętro, rentowność, termin oddania. Reszta należy do karty oferty, nie do paska filtrów. Ważne jest natomiast, by przefiltrowany wynik dało się wysłać komuś linkiem i żeby pokazał te same oferty, a kombinacje warte wyświetlania w Google stały się prawdziwymi podstronami, a nie parametrami w adresie."),
        p(
          "Jak zbudowany jest katalog z filtrami, opisuje osobna podstrona: ",
          link("strona katalogowa z filtrami", "/pl/strona-katalogowa-z-filtrami"),
          ".",
        ),

        h2("Import i aktualizacja ofert: skąd biorą się dane i co się psuje"),
        p("Pytanie, które rozstrzyga o całej budowie: gdzie oferty są dzisiaj. Feed z portalu, eksport z CRM, arkusz, albo trzech agentów z własnymi plikami — każda odpowiedź daje inną stronę."),
        h3("Co psuje się w praktyce"),
        li("oferta sprzedana, podstrona zniknęła — zostaje martwy adres albo miękki błąd 404;"),
        li("ta sama nieruchomość przyszła dwa razy z dwóch źródeł pod dwoma adresami;"),
        li("zdjęcia wgrane w pełnej rozdzielczości z aparatu i katalog ledwo się rusza;"),
        li("cena zmieniła się w feedzie, ale nie w tekście, który ktoś wpisał ręcznie."),
        p("Wszystkie cztery są do rozwiązania i wszystkie cztery rozstrzyga się przed zaprojektowaniem pierwszej podstrony, a nie po uruchomieniu."),

        h2("Połączenie z CRM: gdzie trafia zapytanie i kto je widzi"),
        p("Zapytanie, które przyszło na wspólną skrzynkę, to zapytanie, na które ktoś kiedyś odpowie. Zapytanie, które przyszło do CRM razem z ofertą, źródłem i godziną, to lead z osobą odpowiedzialną."),
        p("Podłączam formularze do tego, co u Was już działa, przez API, żeby zapytania rozdzielały się według Waszych własnych reguł. Jeśli CRM nie ma, formularze i tak przekazują ofertę oraz źródło w samym powiadomieniu: wiedza o tym, która oferta wywołała telefon, zmienia to, co się w tym telefonie mówi."),

        h2("Wersje językowe: dlaczego dla agencji znaczą więcej niż dla innych firm"),
        p("Nieruchomości to jedna z niewielu kategorii, w których kupujący regularnie siedzi w innym kraju niż nieruchomość. Strona w jednym języku cicho odsiewa wszystkich szukających w innym, a agencja się o tym nie dowie: tacy klienci po prostu nie pojawiają się w statystykach."),
        p(
          "Zrobienie drugiej i trzeciej wersji porządnie to nie tłumaczenie. To własny dobór fraz pod każdy język, treść doprowadzona do tego, jak czyta ten rynek, i struktura adresów, którą wyszukiwarka rozróżnia. ",
          link("Rozwój wielojęzycznej platformy nieruchomości premium", "/pl/portfolio/rozwoj-wielojezycznej-platformy-nieruchomosci-premium"),
          " to case dokładnie o tej pracy.",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony nieruchomości i inwestycji, które zbudowałem",
      subtitle:
        "Pierwszy case to wielojęzyczna platforma nieruchomości: katalog, lokalizacje i kilka języków naraz. Dalej: strona o remontach i inwestowaniu w nieruchomości, przebudowa strony biura architektonicznego ze skanem SEO i projekty, w których zadecydowała struktura.",
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
        h2("Ile kosztuje strona dla agencji nieruchomości i co obejmuje"),
        p(
          "Podstawowa strona katalogowa z ofertami, filtrami i formularzami zapytań — od 8500 zł. Strona z połączeniem z CRM, importem ofert i rozbudowaną wyszukiwarką — od 15 000 zł. Duży portal z rozbudowaną funkcjonalnością — od 23 000 zł, zakres liczony osobno. Projekt graficzny jest w cenie, nigdy jako osobna pozycja. Rozbicie po poziomach jest w artykule ",
          link("ile kosztuje strona dla agencji nieruchomości", "/pl/blog/ile-kosztuje-strona-dla-agencji-nieruchomosci"),
          ", a pełny cennik na ",
          link("stronie z cennikiem", "/pl/cennik"),
          ".",
        ),

        h2("Ile trwa budowa strony dla agencji nieruchomości"),
        p("Podstawowa strona katalogowa to trzy do sześciu tygodni. Połączenie z CRM, import ofert i każda dodatkowa wersja językowa wydłużają termin, a ja podaję go przed startem, nie w trakcie. Portal liczony jest z własnym terminem, bo rozstrzyga o nim funkcjonalność."),
        p("Budowę wydłuża zwykle nie kod, a dane: skąd biorą się oferty, w jakiej postaci i kto pilnuje ich aktualności. Im szybciej to ustalone, tym krótsze wszystko dalsze."),

        h2("Co zostaje u Was po uruchomieniu"),
        li("kod, domena, treści i dostępy do panelu są Wasze od pierwszego dnia;"),
        li("strona nie stoi na moim hostingu, eksporty nie są zablokowane;"),
        li("dane ofert zostają w postaci, którą da się przenieść gdzie indziej;"),
        li("projekt można w każdej chwili przekazać innemu programiście;"),
        li("praca idzie na umowie z ustalonym zakresem, terminem i etapami."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony dla agencji nieruchomości",
      subtitle:
        "Odpowiadam w ciągu jednego dnia roboczego: co bym zbudował, w jakim zakresie i za ile.",
      contextLabel: "Nazwa agencji lub strona",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i otrzymaj wycenę",
      note: "Albo napiszcie na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Ile ofert?", options: ["Do 50", "50–500", "Ponad 500", "Bardzo się zmienia"] },
        { _key: k("z"), question: "Gdzie dziś są oferty?", options: ["W CRM", "Feed z portalu", "W arkuszu", "Jeszcze nigdzie"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Strona agencji czytelna dla asystentów AI"),
        p("Klienci coraz częściej pytają ChatGPT, Perplexity albo przeglądy AI w Google: które agencje prowadzą tę dzielnicę albo inwestycję, ile kosztuje zakup dla obcokrajowca, która lokalizacja będzie odpowiednia. Asystent odpowiada z tekstu, który potrafi przeczytać i streścić, i podaje źródła — więc struktura strony rozstrzyga, czy Wasza agencja w ogóle pojawi się w tej odpowiedzi."),
        p("W praktyce: bezpośrednia odpowiedź na początku każdej sekcji, fakty o dzielnicach, segmentach i warunkach zamiast przymiotników, dane strukturalne Schema.org dla ofert i samej agencji zgodne z widocznym tekstem oraz treść dostępna bez uruchamiania skryptów. To zakłada się przy budowie, bo dołożenie później kosztuje więcej niż zrobienie od razu."),
        p(
          "Jak to się robi na już istniejącej stronie, to osobna praca: ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Tworzenie stron dla agencji nieruchomości: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona dla agencji nieruchomości", "Podstawowa strona katalogowa od 8500 zł, strona z CRM i rozbudowaną wyszukiwarką od 15 000 zł, duży portal od 23 000 zł i liczony osobno. O cenie decydują liczba ofert, ich źródło, integracje i liczba wersji językowych."],
          ["Czy strona połączy się z naszym CRM", "Tak, przez API: zapytania trafiają do Waszego systemu automatycznie i rozdzielają się według reguł, które już macie. Jeśli CRM nie ma, formularze i tak przekazują ofertę oraz źródło w powiadomieniu."],
          ["Czy oferty można importować, a nie wpisywać ręcznie", "Tak: z feedu portalu, z eksportu CRM albo z arkusza. Import rozstrzyga, jak będzie wyglądać utrzymanie strony po roku, więc warto go ustalić przed projektem graficznym, a nie po."],
          ["Czy strona będzie przyciągać klientów z wyszukiwarki", "Jest zbudowana tak, żeby mogła: przechodzalny katalog, podstrony pod kombinacje warte wyświetlania, szybkość na podstronach ze zdjęciami. W case'ie cypryjskim strona doszła do ponad 1500 odwiedzających z organic miesięcznie — to liczba tego projektu, nie obietnica dla każdej strony. Stałe pozycjonowanie to osobna praca."],
          ["Pracujecie z agencjami poza Polską", "Tak. Wielojęzyczne strony nieruchomości to właśnie trzon takiej pracy, a ta strona sama działa w trzech językach."],
          ["Potrzebujemy dwóch języków teraz, trzeciego później — to problem", "Nie, o ile struktura od początku jest na to przygotowana. Droga wersja tej samej pracy to dobudowywanie drugiego języka do strony zrobionej pod jeden."],
          ["Budujecie na kreatorach stron", "Nie. Katalog z filtrami, importem i CRM to dokładnie miejsce, w którym kreatory się kończą, a zejście z kreatora później kosztuje więcej niż zbudowanie od razu na Next.js albo WordPressie."],
          ["Do kogo należy strona po uruchomieniu", "Do Was: kod, domena, treści, dostępy do panelu i dane ofert w przenaszalnej postaci. Strona nie stoi na moim hostingu, eksporty nie są zablokowane, a projekt można w każdej chwili przekazać innemu programiście."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Agent, deweloper albo pozycjonowanie gotowej strony: podstrony obok tej"),
        p(
          "Strona dla jednego agenta, a nie dla biura — marka osobista, podstrony dzielnic, własne oferty: ",
          link("strona internetowa dla agenta nieruchomości", "/pl/strona-internetowa-dla-agenta-nieruchomosci"),
          ". Deweloper sprzedający własne inwestycje ma swoją: ",
          link("strona dla dewelopera", "/pl/strona-dla-dewelopera"),
          ". Jeśli strona już jest, a problemem są zapytania z wyszukiwarki, to inna praca: ",
          link("pozycjonowanie strony nieruchomości", "/pl/seo-dla-stron-nieruchomosci"),
          ".",
        ),

        h2("Zamów stronę dla agencji nieruchomości: co mi wysłać"),
        p("Wyślijcie, ile macie mniej więcej ofert, gdzie są dzisiaj, w jakich krajach i językach pracujecie i z jakiego CRM korzystacie. Odpowiem, co bym zbudował, w jakim zakresie i za ile."),
      ],
    },
  ],
};
