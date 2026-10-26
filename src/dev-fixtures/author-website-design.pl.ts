// Landing page fixture: Strona internetowa dla pisarza (PL), group
// «author-website-design». New page. Market version for Polish authors
// (debiutanci, autorzy wydawnictw, self-publishing) — not a translation of
// author-website-design.en.
// Semantic core: ref/creative-leisure.md has no measured PL phrases for
// authors; heading phrases from BRIEF.md (slug phrase) and the EN intent:
// «strona internetowa dla pisarza» (H1, H2s, excerpt), «strona autora książek»
// (metaTitle, H2), «strona pisarza» (H2s), «ile kosztuje strona internetowa
// dla pisarza» (cost H2, FAQ).
// Intent: ref/intent-check-creative-leisure.md — EN «website for authors» vs
// «author website design» 0 shared URLs: DIY builders vs design studios; the
// page speaks to the author, not to readers looking for books.
// Polish context: Empik, Empik Go, Legimi, Storytel, Audioteka, Woblink,
// Publio, Bonito, TaniaKsiążka; lubimyczytać.pl; bookstagram and BookTok;
// spotkania autorskie w bibliotekach i domach kultury; Warszawskie Targi
// Książki, Międzynarodowe Targi Książki w Krakowie; egzemplarze recenzenckie i
// patronaty medialne; przedsprzedaż; egzemplarze z autografem (Przelewy24,
// BLIK, paczkomaty InPost); Patronite / Buycoffee; newsletter i RODO.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna od 8500 zł, projekt
// graficzny w cenie.
// NOT on this page: promocja książki i reklamy, redakcja, korekta, okładki,
// skład, usługi wydawnicze; malarze i ilustratorzy
// (/pl/strona-internetowa-dla-artysty — linked once); muzycy
// (/pl/strona-internetowa-dla-zespolu-muzycznego).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, link, k } from "./pt";

export const authorWebsiteDesignPl = {
  lang: "pl",
  group: "author-website-design",
  slug: "strona-internetowa-dla-pisarza",
  title: "Strona internetowa dla pisarza",
  heading: "Strona internetowa dla pisarza",
  excerpt:
    "Strona internetowa dla pisarza od jednej osoby — projekt graficzny, wykonanie i teksty: podstrony książek z linkami do Empiku, Legimi i Storytela, tomy cyklu po kolei, newsletter zgodny z RODO, sprzedaż egzemplarzy z autografem i kalendarz spotkań autorskich.",
  seo: {
    metaTitle: "Strona autora książek: projekt i wykonanie | Bandziuk",
    metaDescription:
      "Strona internetowa dla pisarza: podstrony książek z linkami do księgarni, kolejność tomów, newsletter, egzemplarze z autografem i spotkania. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt graficzny w cenie", "Od 3000 zł", "Dla debiutantów i autorów cykli"],
  heroPhonePoints: ["Tom 3 — przedsprzedaż", "Od czego zacząć cykl", "Egzemplarz z autografem", "Spotkanie: MBP Lublin, 14.11"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla pisarza, projekt graficzny w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona autora książek z podstronami książek i cykli, linkami do księgarń, newsletterem, sprzedażą egzemplarzy z autografem, materiałami prasowymi i kalendarzem spotkań, projekt graficzny w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje strona internetowa dla pisarza",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Osobna podstrona każdej książki", text: "Okładka, opis, fragment, ISBN, formaty" },
        { _key: k("o"), iconName: "plug", title: "Linki do księgarń i aplikacji", text: "Empik, Legimi, Storytel, Audioteka, Woblink" },
        { _key: k("o"), iconName: "layers", title: "Cykl w kolejności czytania", text: "Numery tomów i „czytaj dalej” pod każdym" },
        { _key: k("o"), iconName: "message-circle", title: "Newsletter z darmowym rozdziałem", text: "Zapis zgodny z RODO, prosto do MailerLite" },
        { _key: k("o"), iconName: "map-pin", title: "Kalendarz spotkań autorskich", text: "Biblioteki, księgarnie, targi, festiwale" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Autor, tytuły i cykle jako dane strukturalne" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona pisarza", value: "3000–6000 zł", note: "projekt graficzny w cenie" },
        { _key: k("r"), label: "Książki, cykle, newsletter, sklep z autografami, spotkania", value: "od 8500 zł", note: "projekt graficzny w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony osób i marek, które prowadzą odbiorcę dalej: do słuchania, czytania, zakupu",
      subtitle:
        "Oficjalna strona Sashy Ditha, DJ-a i producenta, powstała od zera na Next.js 14 piksel w piksel z makiety, którą przyniósł w Figmie: dyskografia z linkami do serwisów streamingowych, teledyski z YouTube i formularz rezerwacji, wszystko w jednym miejscu dla fanów, mediów i agentów; strona ładuje się w niecałą sekundę. Konsultantka analityki handlu i mody ma serwis liczący 153 strony po polsku, angielsku i rosyjsku, z szablonami do pobrania i kursami wideo, zaplanowany według tego, czego ludzie szukają, i pisany tak, by cytowali go asystenci AI. Strona psychoterapeuty z Mediolanu trafiła na Next.js i Sanity z całym blogiem — 468 wpisów, każdy stary adres przekierowany kodem 301 — a nowe podstrony już pojawiają się w odpowiedziach ChatGPT. Warszawski salon Landi Room sprzedaje kurs wideo przez Stripe, a link do nagrania przychodzi sam po zapłacie. Moja własna strona bandziuk.com ma pełne SEO techniczne: schema.org, mapę witryny i hreflang. Ze stroną pisarza łączy je to samo zadanie: zebrać dorobek w jednym miejscu i doprowadzić odbiorcę do kolejnego kroku.",
      picks: [
        "official-website-for-dj-and-producer-sasha-dith",
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
        "e-commerce-landing-page-with-secured-video-access",
        "develop-and-optimize-a-personal-website-with-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla pisarza",
      subtitle: "Napisz, co wydałeś i co planujesz. Odpowiem listą podstron — książki, cykle, newsletter, spotkania — i stałą ceną z widełek cennika.",
      contextLabel: "Imię i nazwisko lub pseudonim, obecna strona albo profil",
      contextPlaceholder: "Nazwisko lub link",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Wolisz pisać? Na WhatsApp odpowiadam tak samo szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak wydajesz książki?", options: ["W wydawnictwie", "Sam, w self-publishingu", "Jedno i drugie", "Debiut dopiero przede mną"] },
        { _key: k("z"), question: "Czego oczekujesz od strony najpierw?", options: ["Więcej osób na newsletterze", "Sprzedaży egzemplarzy z autografem", "Zaproszeń na spotkania autorskie", "Porządku w kilku cyklach i pseudonimach"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla pisarza powstaje u mnie od początku do końca w jednych rękach: układam strukturę, projektuję wygląd, piszę teksty pomocnicze, programuję i uruchamiam stronę. Robię to dla autorów prozy i literatury faktu, wydających w wydawnictwach i samodzielnie. Księgarnia pokazuje jeden Twój tytuł obok setek cudzych, a własna strona pokazuje cały dorobek, prowadzi do kolejnej książki i zostawia czytelnikowi drogę do kontaktu z Tobą."),

        h2("Strona internetowa dla pisarza: co widzi czytelnik zaraz po lekturze"),
        p("Najczęściej na stronę autora trafia ktoś, kto właśnie skończył książkę w czytniku albo w aplikacji Legimi i wpisał nazwisko w telefon. W pierwszych sekundach powinien dowiedzieć się:"),
        li("co piszesz — jedno zdanie w rodzaju „Kryminały retro osadzone w przedwojennym Lwowie”"),
        li("co jest najnowsze albo co wychodzi wkrótce — z okładką i przyciskiem „Kup”"),
        li("jak nie przegapić następnej książki — zapis na newsletter, a nie rząd ikon mediów społecznościowych"),
        p("Okładki zapisuję w kilku rozmiarach i nowoczesnych formatach, więc na słabym zasięgu telefon pobiera lekki plik. Długi biogram i cytaty z recenzji czekają niżej, na tych, którzy chcą wiedzieć więcej."),

        h2("Podstrona książki na stronie autora: opis, fragment i linki do Empiku, Legimi i Storytela"),
        p("Każda książka ma własny adres, który możesz podać w stopce e-maila, w wywiadzie albo na końcu kolejnego tomu. Na podstronie są:"),
        li("okładka, opis z tylnej okładki zapisany tekstem, wydawnictwo i data premiery"),
        li("formaty — papier, e-book, audiobook z nazwiskiem lektora — z numerami ISBN i liczbą stron"),
        li("pierwszy rozdział do przeczytania na miejscu"),
        li("fragmenty recenzji z podpisem: portal, blog, profil na bookstagramie"),
        li("przyciski do Empiku, Bonito, TaniejKsiążki, Woblinka, Publio, Legimi, Empik Go, Storytela i Audioteki"),
        p("Linki do księgarń wpisujesz w panelu raz, przy książce. Jeśli któryś sklep zmieni adres, poprawiasz go w jednym miejscu, a zmiana pojawia się na stronie książki, cyklu i na stronie głównej."),

        h2("Kolejność tomów cyklu na stronie internetowej pisarza"),
        p("„Od którego tomu zacząć?” — to pytanie autorzy cykli dostają w wiadomościach najczęściej. Strona cyklu odpowiada na nie raz: tomy z numerami, opowiadania i nowele wstawione tam, gdzie należą w fabule, i krótka uwaga, jeśli kolejność wydania różni się od kolejności czytania. Pod każdą książką jest blok „Następny tom”, który prowadzi prosto do dalszego ciągu."),
        p("Jeśli piszesz kilka cykli albo pod kilkoma pseudonimami, każdy dostaje osobny dział z własnym menu. Czytelniczka obyczajówek nie trafi wtedy przypadkiem na Twoje mroczne thrillery."),

        h2("Newsletter autora książek: zapis na stronie i zgody RODO"),
        p("Lista mailowa to jedyny kanał do czytelników, którego nie kontroluje algorytm Instagrama ani ranking księgarni, a od niej zależy, ile osób kupi książkę w tygodniu premiery. Strona zbiera adresy w kilku miejscach:"),
        li("prezent na powitanie: darmowe opowiadanie, rozdział spoza książki albo epilog, wysyłane automatycznie"),
        li("krótki formularz na stronie głównej, pod każdym fragmentem i na podstronach książek"),
        li("osobna strona zapisu dla adresu, który drukujesz na końcu książki — wtedy widzisz, ilu czytelników przychodzi prosto z lektury"),
        p("Formularz łączy się z MailerLite, GetResponse albo innym narzędziem, którego już używasz. Pod formularzem czytelnik widzi, kto jest administratorem jego adresu i do czego go użyjesz, jak wymaga RODO, a pole zgody na newsletter zostaje puste, dopóki sam go nie zaznaczy."),

        h2("Sprzedaż egzemplarzy z autografem prosto ze strony pisarza"),
        p("Czytelnicy w Polsce chętnie kupują książki z dedykacją, a autor zarabia na takim egzemplarzu więcej niż na tym sprzedanym w sieciówce. Na stronie działa to jak mały sklep: wybór tytułu, pole na treść dedykacji, płatność BLIK-iem lub przelewem przez Przelewy24 albo Stripe i dostawa do paczkomatu albo kurierem. Zamówienie trafia na Twoją skrzynkę z gotową treścią dedykacji. Obok możesz zostawić link do Patronite albo Buycoffee dla czytelników, którzy chcą wspierać Twoje pisanie na stałe."),

        h2("Spotkania autorskie i targi książki w kalendarzu na stronie autora"),
        p("Biblioteki miejskie, domy kultury, szkoły i księgarnie kameralne szukają autorów na spotkania, a organizator chce zobaczyć, że masz doświadczenie. Kalendarz pokazuje zaplanowane spotkania z datą, miejscem i godziną, a także Twoje dyżury na stoiskach podczas Warszawskich Targów Książki czy Międzynarodowych Targów Książki w Krakowie. Minione wydarzenia zostają w archiwum. Obok kalendarza jest krótki formularz „Zaproś mnie na spotkanie” z pytaniem o miasto, termin i grupę odbiorców."),

        h2("Materiały prasowe, egzemplarze recenzenckie i patronaty medialne"),
        p("Dziennikarze, blogerzy książkowi, bookstagramerzy i organizatorzy festiwali potrzebują wciąż tych samych plików. Zakładka dla mediów oszczędza Ci odpisywania:"),
        li("biogram w trzech długościach, w trzeciej osobie"),
        li("zdjęcia portretowe w wysokiej rozdzielczości z nazwiskiem fotografa"),
        li("okładki do pobrania i notka o każdej książce: ISBN, wydawca, premiera"),
        li("formularz zgłoszenia po egzemplarz recenzencki: nazwa bloga lub profilu, zasięg, gatunki"),
        li("informacja o patronatach medialnych przy premierach — dla blogów, które chcą objąć książkę patronatem"),

        h2("Wygląd strony autora książek dopasowany do gatunku"),
        p("Układ podstron jest podobny u wszystkich autorów, ale wygląd powinien od razu mówić, w jakim gatunku piszesz. Punktem wyjścia są okładki: ich kolory, krój liter i nastrój przenoszę na stronę, żeby czytelnik po wejściu z Empiku czy Legimi miał poczucie, że trafił we właściwe miejsce."),
        li("kryminał i thriller: mocny kontrast, krótkie zdania, cytat z recenzji przy okładce"),
        li("powieść obyczajowa i romans: cieplejsze kolory, etykiety z motywami, cykle pogrupowane według miasteczka lub bohaterów"),
        li("fantastyka: mapa świata, spis postaci i słowniczek, do których czytelnik wraca między tomami"),
        li("literatura faktu i poradniki: tematy wystąpień, wywiady w mediach, zamówienia hurtowe dla firm i szkół"),
        p("Dzięki temu strona nie wygląda jak setki innych zbudowanych na tym samym szablonie, a nowa książka dodana w panelu od razu przyjmuje styl reszty."),

        h2("Strona pisarza wydającego w wydawnictwie i strona autora w self-publishingu"),
        h3("Gdy wydajesz w wydawnictwie"),
        p("Wydawnictwo ma swoją kartę każdej książki i do niej linkujesz. Twoja strona zbiera to, czego tam brak: wszystkie tytuły, także z różnych wydawnictw, Twój głos, spotkania i kontakt do agenta w sprawie praw i przekładów. Newsletter zostaje z Tobą, nawet gdy zmienisz wydawcę."),
        h3("Gdy wydajesz sam"),
        p("Jesteś wydawcą, więc strona przejmuje więcej sprzedaży: e-booki z własnego sklepu, pakiety tomów, egzemplarze z autografem i przedsprzedaż przed premierą w dystrybucji. Wtedy liczy się też szybkie dodawanie nowych tytułów, bo kolejne tomy wychodzą częściej."),

        h2("Lubimyczytać, Instagram czy własna domena: gdzie powinna być strona autora książek"),
        p("Profil na lubimyczytać.pl, konto na Instagramie i TikToku warto prowadzić, bo tam czytelnicy dyskutują i szukają poleceń. Każdy z tych profili działa jednak według reguł platformy: zasięg wpisu ustala algorytm, układ jest narzucony, a adresów e-mail czytelników nie dostajesz. Strona pod własną domeną z Twoim nazwiskiem zostaje Twoja niezależnie od zmian na platformach i to do niej prowadzą linki z profili."),
        p(
          "Jeżeli masz już starą stronę z blogiem, przenoszę wpisy z przekierowaniami, żeby linki z dawnych wywiadów dalej działały — opis na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ". Dla przekładów Twoich książek przygotowuję wersje językowe; szczegóły są na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Strona pisarza, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Coraz więcej czytelników zamiast w wyszukiwarkę wpisuje pytania w ChatGPT, Perplexity lub Google z podsumowaniem AI, na przykład: „polski kryminał retro, pierwszy tom cyklu” albo „w jakiej kolejności czytać sagę o Wrzosowisku”. Asystent poleca tylko tych autorów, o których może coś przeczytać. Na stronie nazwisko, pseudonimy, gatunki, cykle i kolejność tomów stoją więc jako zwykły tekst, a w kodzie dane strukturalne oznaczają autora, każdą książkę z numerem ISBN i formatami oraz każdy cykl."),
        p(
          "To podstawa; żeby asystenci rzeczywiście wymieniali Twoje tytuły, trzeba nad tym dalej pracować — więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla pisarza"),
        li("Prosta strona pisarza — strona główna, lista książek i podstrony tytułów, „O mnie”, zapis na newsletter i kontakt: 3000–6000 zł z projektem graficznym."),
        li("Pełna strona autora z działami cykli, linkami do księgarń, sklepem z egzemplarzami z autografem, materiałami prasowymi, zgłoszeniami po egzemplarze recenzenckie i kalendarzem spotkań: od 8500 zł z projektem graficznym."),
        p(
          "Domena i hosting są zapisane na Ciebie od pierwszego dnia, a po uruchomieniu płacisz tylko za nie. Pełne widełki cenowe są w ",
          link("cenniku", "/pl/cennik"),
          ", a cały mój proces od planu do uruchomienia opisuje strona ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ". Malarze i ilustratorzy mają osobną ofertę: ",
          link("strona internetowa dla artysty", "/pl/strona-internetowa-dla-artysty"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla pisarza: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla pisarza?", "Prosta strona to 3000–6000 zł, pełna strona z cyklami, linkami do księgarń, sklepem z autografami i kalendarzem spotkań — od 8500 zł. W obu cenach jest projekt graficzny. Gdy prześlesz listę książek, podam jedną stałą kwotę."],
          ["Czy debiutant potrzebuje własnej strony?", "Wystarczy na początek prosta: jedna książka, biogram, zapis na newsletter i kontakt. Ważne, żeby adres z Twoim nazwiskiem istniał przed premierą, bo pierwsi czytelnicy i media będą go szukać właśnie wtedy."],
          ["Czy sam dodam nową książkę?", "Tak. W panelu nowa książka to formularz: tytuł, okładka, opis, ISBN, formaty, numer tomu i linki do księgarń. Pojawi się na liście książek, w dziale cyklu i na stronie głównej bez dotykania kodu."],
          ["Jedna strona na kilka pseudonimów czy osobne?", "Zwykle jedna strona z osobnym działem dla każdego pseudonimu, bo łatwiej ją prowadzić. Osobne strony mają sens, gdy odbiorcy nie powinni się spotkać, na przykład przy książkach dla dzieci i powieściach dla dorosłych."],
          ["Czy mogę sprzedawać e-booki bezpośrednio ze strony?", "Tak. Płatność przez Przelewy24 albo Stripe, a plik trafia do czytelnika automatycznie po zaksięgowaniu wpłaty. Ten sam mechanizm automatycznej wysyłki po płatności działa w sprzedaży kursu wideo salonu Landi Room."],
          ["Czy pracujesz z autorami spoza Warszawy?", "Tak, z całej Polski i z autorami polonijnymi. Całą współpracę prowadzimy zdalnie: rozmowy online, uwagi wpisujesz bezpośrednio na makietach, a gotową stronę uruchamiam na hostingu zapisanym na Ciebie. Umowa i faktura są standardowe."],
          ["Czy moje książki pojawią się w odpowiedziach ChatGPT?", "Strona daje asystentom AI to, czego potrzebują: fakty o autorze i książkach zapisane tekstem i dane strukturalne. Obecność w odpowiedziach na konkretne pytania to już osobna, stała praca nad pozycjonowaniem w AI — też ją wykonuję."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla pisarza: co mi wysłać"),
        p(
          "Prześlij imię i nazwisko lub pseudonimy, link do obecnej strony albo profili, listę wydanych książek z cyklami i kolejnością tomów, informację, gdzie są w sprzedaży, datę najbliższej premiery, narzędzie do newslettera, jeśli już je masz, i dwie–trzy strony autorów, które Ci się podobają. Odeślę Ci proponowaną listę podstron ze stałą ceną. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
