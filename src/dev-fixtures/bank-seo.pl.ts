// Landing page fixture: Pozycjonowanie strony banku (PL), group «bank-seo».
// New page, market version — not a translation of bank-seo.en.
//
// Why (07.11.2026). The industry was added and measured on 07.11: EN «seo for
// banks» 320 and «bank website design» 170, RU «продвижение сайта банка» 170.
// PL has no measured phrase above the threshold, and the page is made anyway
// under the owner's rule: an industry with demand in one language gets pages
// in all three. See claude/industry-delta-2026-11-07.md.
//
// The PL version has a buyer the English one does not: banki spółdzielcze.
// There are several hundred of them, grouped around SGB and BPS, each with
// branches in small towns, and they hire a contractor rather than running a
// tender. SKOK-i sit next to them. That is who this page is written for.
//
// Local specifics used: RRSO and the mandatory disclosures in credit
// communication, KNF supervision, porównywarki (rankomat, totalmoney,
// bankier, comperia) owning the head terms, placówki and bankomaty as the
// local layer, ustawa o dostępności (wdrożenie dyrektywy 2019/882,
// obowiązuje od 28.06.2025) for banking services.
//
// NOT on this page: tworzenie strony banku from scratch (separate page later);
// pozycjonowanie lokalne in depth (/pl/oferty/pozycjonowanie-lokalne);
// fintech and operatorzy płatności.
//
// Owner's rules: «pozycjonowanie strony X», never «firmy X»; every SEO page
// covers AI search; never say there are no clients from the visitor's
// industry; no guaranteed positions. Prices: PL scale.
import { p, h2, li, link, k } from "./pt";

export const bankSeoPl = {
  lang: "pl",
  group: "bank-seo",
  slug: "pozycjonowanie-strony-banku",
  title: "Pozycjonowanie strony banku",
  heading: "Pozycjonowanie strony banku i banku spółdzielczego",
  excerpt:
    "Zajmuję się pozycjonowaniem stron banków i banków spółdzielczych: SEO, GEO i AEO razem, podstrony produktów, które wygrywają z porównywarkami w długim ogonie, strona każdej placówki, teksty pisane tak, żeby przeszły zgodność, i widoczność w odpowiedziach AI. Audyt od 1000 zł.",
  seo: {
    metaTitle: "Pozycjonowanie strony banku: SEO i widoczność w AI",
    metaDescription:
      "Pozycjonowanie strony banku: SEO i GEO razem, podstrony produktów, strona każdej placówki, teksty zgodne z wymogami, odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Produkty i placówki", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Kalkulator kredytu", "Znajdź placówkę", "Konto dla firmy", "Zadzwoń"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO banku: podstrony produktów, placówki, ograniczenia zgodności, odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla banku: struktura podstron produktów i placówek, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony banku i praca nad widocznością w AI", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony banku",
      items: [
        { _key: k("o"), iconName: "credit-card", title: "Podstrony produktów", text: "Jedna podstrona na produkt i warunek" },
        { _key: k("o"), iconName: "map-pin", title: "Strona każdej placówki", text: "Godziny, usługi, bankomat, dane strukturalne" },
        { _key: k("o"), iconName: "file-lock", title: "Teksty, które przejdą zgodność", text: "Pisane pod akceptację, nie pod poprawki" },
        { _key: k("o"), iconName: "gauge", title: "Szybkie kalkulatory", text: "Najcięższa podstrona zwykle sprzedaje" },
        { _key: k("o"), iconName: "shield-check", title: "Jedna domena zamiast mikrostron", text: "Kampanie na osobnych domenach dzielą moc" },
        { _key: k("o"), iconName: "bot", title: "Obecność w odpowiedziach AI", text: "Warunki jako tekst, nie jako obrazek" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Dlaczego raport SEO banku wygląda dobrze, a wniosków z niego nie ma"),
        p("Zajmuję się pozycjonowaniem stron banków i banków spółdzielczych — w Google i w odpowiedziach asystentów AI. Raport z analityki zwykle ukrywa jedno: prawie cały ruch organiczny banku to ruch z własnej nazwy — logowanie, godziny, numer rachunku, kontakt. Ten ruch przyszedłby i bez pozycjonowania, a wykres przy nim wygląda zdrowo, podczas gdy wyszukiwania, które decydują o tym, gdzie klient założy konto, trafiają gdzie indziej."),
        p("Te wyszukiwania dzieją się wcześniej i bez nazwy banku: kredyt hipoteczny przy określonym wkładzie własnym, konto dla jednoosobowej działalności, lokata na konkretny termin, karta bez opłaty miesięcznej, placówka w danej dzielnicy albo w małym mieście. To są zapytania do wygrania, a odpowiadają na nie podstrony, których większość stron bankowych nie ma."),

        h2("Dlaczego porównywarki stoją wyżej od banku i co z tym zrobić"),
        p("Na zapytania w rodzaju najlepszy kredyt hipoteczny czy ranking kont firmowych pierwszą stronę wyników zajmują porównywarki i serwisy finansowe. Mają więcej podstron, więcej linków i nie mają działu zgodności. Bank, który próbuje pokonać je wprost, traci rok."),
        p("Działa warstwa poniżej: długi ogon, w którym zapytanie samo zawiera warunek, sytuację albo miejsce. Kredyt na działkę, konto dla freelancera rejestrującego się do VAT, lokata z możliwością wcześniejszego zerwania, co dzieje się z oprocentowaniem po pierwszym roku, kredyt dla rolnika. Porównywarka odpowiada na to tabelką, bank może odpowiedzieć naprawdę — i stamtąd biorą się wnioski."),

        h2("Strona każdej placówki: lokalne wyszukiwanie, które bank już ma"),
        p("Bank z placówkami ma zasób, z którego prawie nie korzysta. Jedna podstrona na oddział — z adresem, godzinami, listą usług dostępnych właśnie tam, informacją o bankomacie, dostępnością dla osób z niepełnosprawnościami, danymi strukturalnymi i spójną wizytówką w Mapach Google — wygrywa wyszukiwania kończące się wizytą. Dla banków spółdzielczych to zwykle największe nieodebrane źródło ruchu, bo banki ogólnopolskie zamiast podstron publikują wyszukiwarkę placówek."),
        p(
          "Sama wizytówka i Mapy to osobny temat — ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Jak pisać pod wyszukiwarkę, gdy każde zdanie idzie przez zgodność"),
        p("Tu kończą się zwykłe porady o SEO. W banku zdanie o oprocentowaniu, prowizji czy warunku nie jest decyzją copywritera: niesie obowiązkowe informacje, w komunikacji kredytowej razem z RRSO i przykładem reprezentatywnym, jest sprawdzane i nie da się go przepisać pod frazę. Plan, który zakłada swobodne przepisywanie, zatrzyma się na pierwszej akceptacji."),
        li("to, co można zmieniać bez akceptacji, zostaje oddzielone od tego, czego zmieniać nie wolno, i optymalizacja dzieje się tam, gdzie jest na nią miejsce;"),
        li("frazy trafiają do nagłówków i tekstu wyjaśniającego, a regulowane liczby zostają dokładnie takie, jakie zostały zatwierdzone;"),
        li("zmiany przygotowuje się paczkami dopasowanymi do cyklu akceptacji, zamiast przysyłać je po jednym zdaniu;"),
        li("obowiązkowe informacje zostają na stronie jako tekst możliwy do zindeksowania — nie w obrazku ani w PDF-ie, gdzie chronią prawnie i znikają z wyszukiwarki."),

        h2("Techniczna część, która realnie rusza stronę banku"),
        li("kalkulatory i wnioski, które ładują się szybko na telefonie, bo to one sprzedają i one zwykle są najcięższe;"),
        li("jedna domena zamiast mikrostron kampanijnych: osobne domeny dzielą wypracowaną moc i uczą klientów ufać adresom podobnym do bankowego, czyli dokładnie temu, przed czym bank sam ostrzega;"),
        li("dostępność traktowana jako wymóg, a nie dodatek — dla usług bankowych obowiązuje od 28 czerwca 2025 roku, a struktura, której wymaga, jest tą samą strukturą, którą czyta wyszukiwarka;"),
        li("panowanie nad indeksacją tysięcy niemal identycznych podstron: archiwalne tabele oprocentowania, wyszukiwarka placówek z parametrami, stare strony kampanii."),

        h2("Ile kosztuje pozycjonowanie strony banku"),
        p(
          "Audyt od 1000 zł: podstrony produktów, placówki, realne ograniczenia zgodności w Waszej instytucji i to, co asystenci AI mówią dziś o banku. Prace jednorazowe 1000–3000 zł. Stała współpraca od 3500 zł miesięcznie. Cenę przesuwa liczba produktów, liczba placówek i długość rundy akceptacji — to ostatnie bardziej niż cokolwiek innego. Liczby są na stronie ",
          link("cennik", "/pl/cennik"),
          ".",
        ),

        h2("Kiedy widać efekty pozycjonowania w banku"),
        p("Pierwsze ruchy zwykle po około półtora miesiąca, stabilny wzrost w perspektywie trzech–sześciu miesięcy. W instytucji regulowanej do tego rachunku dochodzi jeszcze jeden składnik: jeśli zmiana tekstu czeka trzy tygodnie na akceptację, cały harmonogram przesuwa się o trzy tygodnie. Planuję to zamiast udawać, że tego nie ma, i nie obiecuję pozycji — nikt nie może ich obiecać."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: serwisy wielojęzyczne i praca w branżach regulowanych",
      subtitle:
        "Wielojęzyczna platforma nieruchomości z katalogiem, filtrami i widocznością zbudowaną bez kupowania linków; strona agencji edukacyjnej, która urosła z jednego kraju do dziesięciu; strona firmy remontowo-inwestycyjnej w premium; wielojęzyczny serwis usług studenckich; strona konsultantki zbudowana wokół jednej specjalizacji.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "seo-case-study-education-agency",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Audyt widoczności strony Waszego banku",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co dziś zabiera ruch, co poprawić najpierw i ile to kosztuje.",
      contextLabel: "Nazwa instytucji lub adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i otrzymaj odpowiedź",
      note: "Albo napiszcie na WhatsApp — odpowiadam tak samo szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaka to instytucja?", options: ["Bank spółdzielczy", "Bank komercyjny", "Bank internetowy", "Inna instytucja"] },
        { _key: k("z"), question: "Ile macie placówek?", options: ["Tylko online", "Do 10", "Od 10 do 50", "Powyżej 50"] },
        { _key: k("z"), question: "Ile trwa akceptacja tekstu?", options: ["Dni", "Tygodnie", "Dłużej", "Jeszcze nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Jak sprawić, żeby asystenci AI cytowali produkty banku (GEO, AEO)"),
        p("Coraz częściej pierwsze pytanie pada nie do wyszukiwarki, tylko do ChatGPT, Perplexity albo przeglądu AI w Google: konto bez opłat dla małej firmy, kredyt dla osoby na działalności, lokata z możliwością wcześniejszego zerwania. Asystent odpowiada z tekstu, który potrafi przeczytać, i ze źródeł, które się ze sobą zgadzają. Bank jest tu wyjątkowo narażony: jeśli warunki leżą w PDF-ie albo w obrazku z tabelą, asystent zacytuje porównywarkę, a ta bywa nieaktualna."),
        p(
          "Potrzebne jest zwyczajne i precyzyjne: warunki jako tekst na podstronie, dane strukturalne zgodne z tym, co widać, te same nazwy produktów wszędzie i cykl aktualizacji, który zmienia podstronę wtedy, gdy zmienia się oprocentowanie, a nie miesiąc później. Doprowadzenie działającej strony do tego stanu to osobna praca — ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ". Sprawdzenie, co asystenci mówią dziś, to ",
          link("audyt widoczności w AI", "/pl/oferty/audyt-widocznosci-w-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony banku: częste pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony banku?", "Audyt od 1000 zł, prace jednorazowe 1000–3000 zł, stała współpraca od 3500 zł miesięcznie. Cenę przesuwa liczba produktów, liczba placówek i długość rundy akceptacji tekstów."],
          ["Nasze teksty przechodzą przez zgodność. Czy pozycjonowanie w ogóle ma sens?", "Ma, tylko wygląda inaczej. Oddzielamy to, co można zmieniać swobodnie, od tego, czego zmieniać nie wolno, frazy trafiają do nagłówków i tekstu wyjaśniającego, a zmiany idą paczkami dopasowanymi do Waszego cyklu akceptacji."],
          ["Czy wyprzedzimy porównywarki na zapytania o produkty?", "Na najgorętsze frazy nie, a kto obiecuje inaczej, sprzedaje Wam rok pracy. Wygrywalna jest warstwa poniżej: zapytania zawierające warunek, sytuację albo miejsce, na które tabelka odpowiada pobieżnie."],
          ["Jesteśmy bankiem spółdzielczym z placówkami. Gdzie największy zysk?", "Zwykle w placówkach. Osobna podstrona każdego oddziału z adresem, godzinami, usługami i danymi strukturalnymi to dla banków spółdzielczych największe nieodebrane źródło ruchu, bo banki ogólnopolskie publikują wyszukiwarkę zamiast podstron."],
          ["Czy pracujecie z klientami regulowanymi?", "Tak. Praca regulowana oznacza teksty pod akceptacją, obowiązkowe informacje i proces publikacji z kilkoma osobami — i planowanie wokół tego jest częścią metody, a nie przeszkodą."],
          ["Gwarantujecie pozycje?", "Nie, i nikt nie może. Zobowiązuję się do pracy, do pomiaru przed i po oraz do powiedzenia wprost, gdy coś nie rusza i dlaczego."],
          ["Jak mierzycie efekt w banku?", "Po ruchu spoza nazwy banku i po tym, co dzieje się dalej: wejścia na podstrony produktów, użycie kalkulatora, rozpoczęte wnioski, wejścia na strony placówek i telefony. Ruch z nazwy raportuję osobno, bo przyszedłby i tak."],
          ["Czy wyszukiwanie AI ma znaczenie dla banku?", "Coraz większe, a ryzyko działa tu w drugą stronę: jeśli warunki nie są czytelnym tekstem, asystent zacytuje porównywarkę, która bywa nieaktualna. Naprawia się to na własnych podstronach."],
          ["Kto pisze teksty?", "Mogę ja, mogą Wasi ludzie, możemy podzielić się pracą: produktowcy dają fakty, ja nadaję im formę, którą się czyta i którą znajduje wyszukiwarka, a osoby akceptujące dostają sformułowania zbudowane pod akceptację."],
          ["Czy wszystko będzie nasze?", "Tak: podstrony, dane, analityka i wszystkie dostępy. Nic nie zostaje u mnie jako dźwignia."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Jak zacząć pozycjonowanie strony banku: co mi przysłać"),
        p("Napiszcie, jaka to instytucja, ile macie placówek, które produkty są najważniejsze w tym roku i ile zwykle trwa akceptacja tekstu. Przyślijcie link do strony, a jeśli możecie — dostęp do Search Console. Odpowiem w ciągu jednego dnia roboczego: co dziś zabiera ruch, co poprawić najpierw i ile to kosztuje."),
      ],
    },
  ],
};
