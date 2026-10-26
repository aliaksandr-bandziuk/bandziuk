// Landing page fixture: Pozycjonowanie biura podróży (PL), group
// «seo-for-tour-operators». New page. Market version for Polish biura podróży
// that organize their own trips (organizatorzy turystyki: wycieczki
// objazdowe, wyjazdy aktywne, obozy i kolonie, wycieczki szkolne, wyjazdy
// firmowe) and local tour companies (przewodnicy, spływy, Tatry, Kraków) —
// not a translation of seo-for-tour-operators.en.
// Semantic core: ref/creative-leisure.md has no measured PL phrases for tour
// operators; heading phrases from BRIEF.md: «pozycjonowanie biura podróży»
// (H1, H2s), «SEO dla organizatora turystyki» (metaTitle, H2), «pozycjonowanie
// strony biura podróży», «ile kosztuje pozycjonowanie biura podróży» (cost H2,
// FAQ). EN core: seo for tour operators 70.
// Intent: ref/intent-check-creative-leisure.md — EN «seo for tour operators» vs
// «travel agency website» 0 shared URLs → separate page from
// /pl/strona-dla-biura-podrozy (site build; linked once as the neighbour).
// Polish context: competing with Itaka, Rainbow, TUI and Wakacje.pl by niche
// rather than head terms, GetYourGuide / Viator for local tours (commissions
// general), systemy rezerwacji (general), ferie by województwo, majówka,
// wakacje, first minute / last minute, rejestr organizatorów turystyki and
// Turystyczny Fundusz Gwarancyjny (general, as trust signals), opinie Google,
// language versions for incoming tourists, AI answers.
// Prices: /pl/cennik — audyt od 1000 zł, jednorazowo 1000–3000 zł, stałe od
// 3500 zł (no 5500 zł tier here — reserved for car dealers / rental).
// NOT on this page: budowa i projekt strony (/pl/strona-dla-biura-podrozy —
// neighbour, linked once); reklamy Google i Facebook; zarządzanie ofertami na
// portalach; hotele i pensjonaty.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed rankings; legal
// matters in general terms only.
import { p, h2, li, link, k } from "./pt";

export const seoForTourOperatorsPl = {
  lang: "pl",
  group: "seo-for-tour-operators",
  slug: "pozycjonowanie-strony-biura-podrozy",
  title: "Pozycjonowanie strony biura podróży",
  heading: "Pozycjonowanie strony biura podróży i organizatora turystyki",
  excerpt:
    "Zajmuję się pozycjonowaniem biur podróży i organizatorów turystyki, którzy sprzedają własne wyjazdy: podstrony wycieczek według kierunku i rodzaju wyjazdu, frazy, w których wygrywa nisza, a nie największe biura, sezon ferii i majówki, wersje językowe, opinie i widoczność w odpowiedziach AI — wynik liczę w rezerwacjach i zapytaniach.",
  seo: {
    metaTitle: "SEO dla organizatora turystyki i wycieczek | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony biura podróży: podstrony wycieczek według kierunku, nisza zamiast walki z Itaką, sezon ferii, języki, opinie i odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Wycieczki, kierunki i rodzaje wyjazdów", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Wycieczka szkolna do Krakowa", "3 dni · autokar · przewodnik", "Opinie w Google", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO biura podróży: strona, podstrony wycieczek, system rezerwacji, wizytówka Google, opinie i odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla organizatora turystyki: podstrony wycieczek i kierunków, dane strukturalne, śledzenie rezerwacji", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony biura podróży", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony biura podróży",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy, w których małe biuro wygrywa", text: "Kierunek, rodzaj wyjazdu, grupa, termin" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej wycieczki", text: "Program dzień po dniu, cena, terminy, co w cenie" },
        { _key: k("o"), iconName: "trending-up", title: "Strona gotowa przed sezonem", text: "Ferie, majówka, wakacje, first minute" },
        { _key: k("o"), iconName: "shield-check", title: "Zaufanie zapisane tekstem", text: "Wpis do rejestru, gwarancja, opinie" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje dla turystów z zagranicy", text: "Angielska, niemiecka — pisane pod ich frazy" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i AI Overviews", text: "Fakty o wycieczkach, które asystent powtórzy" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO biura podróży", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony biura podróży", value: "od 3500 zł / mies.", note: "wycieczki, kierunki, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony wielojęzyczne i oparte na miejscach, które budowałem i pozycjonowałem",
      subtitle:
        "Strona agencji edukacyjnej prowadzi studentów do dziesięciu krajów — każdy kierunek ma własne podstrony. Cyprus VIP Estates to serwis w pięciu językach, w tym po hebrajsku, z katalogiem, mapą i wideo, który zbudowałem od zera i co miesiąc pozycjonuję. ScanM2, firma od skanowania laserowego 3D i modeli BIM, po przeniesieniu na WordPress z wersją polską, angielską i niemiecką zanotowała 29-krotny wzrost ruchu organicznego, a nowe zapytania przychodzą do niej co tydzień. Dla psychoterapeuty z Mediolanu przeniosłem 468 wpisów z przekierowaniami 301 i dodałem podstrony lokalizacji; jego nowe strony pojawiają się już w odpowiedziach ChatGPT. Warszawski warsztat samochodowy dostał SEO lokalne i pracę nad Mapami Google. Z biurem podróży łączy je sposób pracy: osobna podstrona dla każdego miejsca i pytania klienta, w jego języku, a wynik liczony w zapytaniach.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony biura podróży",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw — podstrony wycieczek, kierunki czy przygotowanie do sezonu — i za jaką stałą cenę.",
      contextLabel: "Nazwa biura lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co głównie sprzedajesz?", options: ["Wycieczki szkolne, obozy i kolonie", "Wycieczki objazdowe i wyjazdy aktywne za granicę", "Wyjazdy firmowe i dla grup zorganizowanych", "Wycieczki lokalne dla turystów w Polsce"] },
        { _key: k("z"), question: "Skąd dziś przychodzi najwięcej rezerwacji?", options: ["Z naszej strony i Google", "Z poleceń i stałych klientów", "Z Facebooka i Instagrama", "Z GetYourGuide, Viatora lub agentów"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony biura podróży to praca nad tym, żeby organizatora turystyki znajdowali w Google i w asystentach AI ludzie szukający konkretnego wyjazdu — kierunku, rodzaju wycieczki, terminu — i żeby te wizyty kończyły się rezerwacją albo zapytaniem. Robię to sam, od audytu po raporty, dla małych i średnich biur, które organizują własne wyjazdy, oraz dla firm prowadzących wycieczki lokalne."),

        h2("Pozycjonowanie strony biura podróży: co obejmuje praca nad stroną organizatora turystyki"),
        p("Klient biura podróży kupuje coś, czego nie może wcześniej zobaczyć, więc decyzję podejmuje na podstawie opisu, zdjęć i zaufania. Praca toczy się w kilku miejscach naraz:"),
        li("strona: podstrony wycieczek, kierunków i rodzajów wyjazdów, poradniki przed podróżą"),
        li("wizytówka Google i opinie klientów"),
        li("profile w serwisach, w których sprzedajesz wycieczki lub które o Tobie piszą"),
        li("odpowiedzi ChatGPT, Perplexity i podsumowań AI w Google"),
        p(
          "Jeśli strona wymaga najpierw przebudowy albo zaprojektowania od nowa, opisuję to na stronie ",
          link("strona dla biura podróży", "/pl/strona-dla-biura-podrozy"),
          ". Tu chodzi o to, żeby ją znaleziono.",
        ),

        h2("Frazy dla biura podróży: jak klienci szukają wycieczek, obozów i wyjazdów"),
        p("Mało kto wpisuje nazwę biura. Klienci szukają wyjazdu, a do frazy dokładają szczegóły, im bliżej są decyzji:"),
        li("kierunek i rodzaj wyjazdu: „wycieczka objazdowa Gruzja”, „trekking w Dolomitach z przewodnikiem”, „spływ kajakowy Krutynia”"),
        li("grupa: „wycieczka szkolna do Krakowa 3 dni”, „obóz językowy dla młodzieży”, „wyjazd integracyjny dla firmy w góry”"),
        li("termin: „ferie zimowe z dziećmi”, „majówka za granicą autokarem”, „wyjazd na sylwestra”"),
        li("pytania przed zakupem: „kiedy jechać do Maroka”, „czy w Albanii trzeba wizy”"),
        li("nazwa biura — wpisywana po poleceniu albo po zobaczeniu oferty na Facebooku"),
        p("Każda grupa fraz dostaje swoje podstrony, ustalone przed pisaniem, żeby dwie wycieczki nie konkurowały o to samo zapytanie."),

        h2("Pozycjonowanie strony biura podróży wobec Itaki, Rainbow i Wakacje.pl"),
        p("Na frazy „wakacje Grecja” czy „last minute Egipt” w wynikach stoją Itaka, Rainbow, TUI i porównywarki w rodzaju Wakacje.pl. Małe biuro nie wygra z nimi budżetem i nie musi. Wygrywa tam, gdzie duzi nie mają nic do powiedzenia: wyjazdy objazdowe z autorskim programem, małe grupy, trekking, wyjazdy z pilotem mówiącym po polsku w mniej oczywiste miejsca, wycieczki szkolne z gotowym programem pod podstawę programową. Pozycjonowanie organizatora turystyki zaczyna się od wyboru tych nisz, a nie od walki o hasła z milionem wyszukiwań."),

        h2("Podstrony wycieczek na stronie biura podróży według kierunku i rodzaju wyjazdu"),
        p("Wiele biur trzyma całą ofertę w jednej tabeli z wyszukiwarką albo w PDF-ach do pobrania. Google potrzebuje osobnej podstrony dla każdej wycieczki i stron zbiorczych, które je łączą:"),
        li("podstrona wycieczki: program dzień po dniu, terminy, cena i co w niej jest, transport, nocleg, wyżywienie, poziom trudności, dla kogo, zdjęcia z poprzednich wyjazdów"),
        li("strona kierunku: wszystkie wyjazdy do danego kraju lub regionu i krótki opis, czego się spodziewać"),
        li("strona rodzaju wyjazdu: trekkingi, rejsy, wyjazdy dla szkół, wyjazdy firmowe"),
        li("program zapisany tekstem na stronie, a PDF najwyżej jako dodatek do pobrania"),
        p("Program skopiowany od kontrahenta albo z katalogu innego organizatora to tekst, który Google już zna. Własny opis, z tym, co widział pilot, robi różnicę."),

        h2("GetYourGuide, Viator i rezerwacje bezpośrednie u organizatora wycieczek lokalnych"),
        p("Firmy prowadzące wycieczki po Krakowie, Gdańsku czy Tatrach dla turystów z zagranicy sprzedają przez GetYourGuide i Viatora, płacąc prowizję od każdej rezerwacji. Platformy zostają, a SEO pracuje obok nich:"),
        li("turysta, który zobaczył Twoją wycieczkę na platformie, często wpisuje nazwę firmy w Google — Twoja strona powinna być pierwsza, z tym samym programem i przyciskiem rezerwacji"),
        li("Twoje podstrony walczą o frazy, przy których opisy na platformach są ogólne"),
        li("wycieczki trafiają do sekcji „Atrakcje” w Google, gdzie obok platform może się pojawić rezerwacja na Twojej stronie"),
        p("W raporcie rezerwacje bezpośrednie z wyszukiwarki stoją obok tych z platform, więc widać, jak zmienia się ich udział."),

        h2("System rezerwacji a SEO strony biura podróży"),
        p("System rezerwacyjny prowadzi miejsca, płatności i listy uczestników. Bywa jednak, że szkodzi widoczności: opis wycieczki istnieje tylko wewnątrz widżetu, strona wolno ładuje się na telefonie albo rezerwacja kończy się na innej domenie i nikt nie wie, skąd przyszedł klient. W audycie sprawdzam, czy program jest tekstem na stronie, jak widżet wpływa na szybkość i czy każda rezerwacja ma przypisaną podstronę, z której wyszła. Zwykle wystarczy zmienić sposób osadzenia, a nie cały system."),

        h2("Sezonowość w pozycjonowaniu strony biura podróży: ferie, majówka, wakacje, first minute"),
        p("Klienci szukają wyjazdów z wyprzedzeniem: wakacji już zimą, w sezonie first minute, wycieczek szkolnych na wiosnę jesienią, a ferii — według terminów swojego województwa. Kalendarz pracy wygląda więc tak:"),
        li("nowe wycieczki i poradniki sezonowe publikowane z kilkumiesięcznym zapasem, żeby Google zdążył je znaleźć"),
        li("terminy i ceny zaktualizowane, zanim klienci zaczną porównywać oferty"),
        li("strony ferii z terminami dla poszczególnych województw"),
        li("podstrony wycieczek po sezonie zostają z datami na kolejny rok, zamiast znikać"),
        p("Usunięcie podstrony wycieczki po sezonie oznacza utratę pozycji, które zbierała. Wpis „kolejne terminy od maja” je zachowuje."),

        h2("Wpis do rejestru organizatorów turystyki i opinie Google jako sygnały zaufania"),
        p(
          "Organizator turystyki w Polsce działa po wpisie do rejestru organizatorów turystyki prowadzonego przez marszałka województwa i ma zabezpieczenie finansowe; odprowadza też składki do Turystycznego Funduszu Gwarancyjnego. Numer wpisu, nazwa ubezpieczyciela lub gwaranta i link do rejestru, zapisane tekstem w stopce i na stronie „O nas”, budują zaufanie klientów i są faktami, które czytają asystenci AI. To informacja ogólna, nie porada prawna. Do tego wizytówka Google z prawdziwym adresem biura i opinie zbierane po każdym wyjeździe — więcej o mapach na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie strony biura podróży w wersjach językowych dla turystów z zagranicy"),
        p("Firma pokazująca Kraków, Zakopane czy Mazury gościom z zagranicy potrzebuje stron w ich językach — angielskim, niemieckim, czasem hiszpańskim. Każda wersja jest pisana pod frazy danego rynku, a nie tłumaczona słowo w słowo, i połączona z pozostałymi tagami hreflang. Dodaję tylko te języki, w których przewodnicy naprawdę prowadzą wycieczki."),

        h2("Pozycjonowanie strony biura podróży w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz więcej osób planuje wyjazd z asystentem: „biuro podróży z małymi grupami do Gruzji”, „wycieczka szkolna do Torunia, program na 2 dni”, „kto organizuje trekking w Nepalu po polsku”. ChatGPT, Perplexity i podsumowania AI w Google wymieniają kilka firm i uzasadniają wybór. Na pracę nad tymi odpowiedziami mówi się GEO (generative engine optimization) lub AEO (answer engine optimization); w biurze podróży sprowadza się ona do czterech rzeczy:"),
        li("fakty o każdym wyjeździe — kierunek, długość, wielkość grupy, terminy, cena „od” — zapisane prostym tekstem"),
        li("poradniki z bezpośrednimi odpowiedziami, podpisane przez pilota albo właściciela"),
        li("te same dane i świeże opinie w Google i w serwisach, w których jesteś"),
        li("dane strukturalne TouristTrip i Organization powiązane z profilami"),
        p(
          "Przed pracą i po niej sprawdzam, co asystenci mówią o Twoim biurze i kogo polecają zamiast niego. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Raport z pozycjonowania strony biura podróży: rezerwacje i zapytania, nie tylko pozycje"),
        p("Ruch na stronie łatwo zwiększyć artykułami, po których nikt nie kupuje wyjazdu. Mój raport liczy to, z czego żyje biuro: rezerwacje i zapytania z wyszukiwarki z podstroną, z której przyszły, telefony i kliknięcia z wizytówki Google, udział rezerwacji bezpośrednich obok platform, a pozycje na wybrane frazy pokazuję obok tych liczb, a nie zamiast nich. Jeśli zapytania wpadają na e-mail, do systemu rezerwacji albo do CRM, źródło trafia tam razem z nimi, więc wiesz, które wyjazdy sprzedaje Google, a które polecenia."),

        h2("Ile kosztuje pozycjonowanie strony biura podróży"),
        li("Audyt SEO — strona, podstrony wycieczek, system rezerwacji, wizytówka, opinie i odpowiedzi AI: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrony wycieczek i kierunków, dane strukturalne, śledzenie rezerwacji: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony biura podróży — nowe wycieczki i poradniki, przygotowanie do sezonu, wersje językowe, opinie, widoczność w AI i raport liczony w rezerwacjach: od 3500 zł miesięcznie."),
        p(
          "Biuro z kilkoma autorskimi wyjazdami często potrzebuje najpierw audytu i dobrze napisanych podstron, a dopiero potem stałej współpracy. Opis audytu znajdziesz na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ", ogólne podejście — na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a wszystkie ceny w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony biura podróży: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony biura podróży?", "Audyt kosztuje od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, a stałe pozycjonowanie od 3500 zł miesięcznie. Po krótkim opisie Twojej oferty i kierunków podaję stałą cenę."],
          ["Czy małe biuro podróży ma szansę z Itaką i Rainbow?", "Na ogólne frazy typu „wakacje Grecja” — raczej nie. Na frazy związane z Twoją niszą — autorskie wycieczki objazdowe, trekkingi, wycieczki szkolne, małe grupy — tak, bo duzi organizatorzy nie mają tam rozbudowanych podstron."],
          ["Kiedy zacząć pozycjonowanie przed sezonem?", "Kilka miesięcy wcześniej. Nowa podstrona zwykle potrzebuje od trzech do sześciu miesięcy, żeby regularnie przyprowadzać klientów, więc wakacje warto przygotowywać jesienią i zimą, a ferie — latem."],
          ["Czy program wycieczki w PDF wystarczy?", "Dla Google to za mało. Program powinien być tekstem na podstronie wycieczki: dzień po dniu, z ceną, terminami i tym, co jest w cenie. PDF może zostać jako dodatek do pobrania."],
          ["Czy pokazywać na stronie numer wpisu do rejestru organizatorów turystyki?", "Warto. To fakt, który klienci sprawdzają, a asystenci AI odczytują. Szczegóły obowiązków informacyjnych sprawdź u prawnika — to informacja ogólna, nie porada prawna."],
          ["Czy zrezygnować z GetYourGuide, jeśli prowadzę wycieczki lokalne?", "Nie. Platforma przyprowadza turystów, do których sam nie dotrzesz. Pozycjonowanie zwiększa rezerwacje bez prowizji: od osób szukających Twojej nazwy i z fraz, na które rankują Twoje podstrony."],
          ["Czy ChatGPT będzie polecał moje biuro podróży?", "Nikt tego nie zagwarantuje, ale szanse rosną, gdy fakty o wyjazdach są zapisane prostym tekstem, poradniki odpowiadają na prawdziwe pytania, a dane i opinie są spójne w Google i innych serwisach. Przed pracą i po niej sprawdzam, co mówią o Tobie asystenci."],
          ["Czy pracujesz z biurami spoza Warszawy?", "Tak, z biurami z całej Polski. Wszystko odbywa się zdalnie: dostęp do strony, Google Search Console i statystyk, rozmowy online i raporty co miesiąc."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony biura podróży: co mi wysłać"),
        p(
          "Wyślij adres strony, link do wizytówki Google, listę wyjazdów, na których najbardziej Ci zależy, kierunki i terminy sezonu, nazwę systemu rezerwacji i informację, skąd dziś przychodzą klienci. W odpowiedzi dostaniesz listę pierwszych poprawek i stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
