// Landing page fixture: Pozycjonowanie wypożyczalni samochodów (PL), group
// «car-rental-seo». New page.
// Market version for Polish independent rental companies (wypożyczalnie aut,
// busów i dostawczaków, 5–200 cars); not a translation of the EN page.
// Semantic core: ref/creative-leisure.md has no measured PL phrases for this
// niche; H1 and headings use the slug phrase «pozycjonowanie wypożyczalni
// samochodów» (brief) and renters’ words: wynajem samochodów, wypożyczalnia
// aut, wynajem busa, wynajem długoterminowy, auto zastępcze, kaucja,
// wynajem auta na lotnisku. No PL PAA.
// Intent: ref/intent-check-creative-leisure.md — EN «car rental seo» vs «car
// rental website design» 1 of 10 shared URLs → separate intents; SEO SERP =
// rental software and agencies. One H2 on the website itself (brief). No PL
// SERP check.
// Polish context: three customer types (tourists at the airport, firms on
// long-term rental with faktura VAT, drivers after a collision — auto
// zastępcze z OC sprawcy, settled with the insurer), Polish airports (Chopin,
// Modlin, Kraków-Balice, Gdańsk, Katowice-Pyrzowice), kaucja / udział własny /
// OC, AC, NNW, wyjazd za granicę, wiek i staż kierowcy, Rentalcars and
// DiscoverCars, seasons (wakacje, majówka, ferie), foreign visitors searching
// in English and German, Profil Firmy w Google.
// NOT on this page: pozycjonowanie komisu (/pl/pozycjonowanie-komisu-
// samochodowego — neighbour, linked once for ex-fleet sales), strona studia
// detailingu, mapy w szczegółach (/pl/oferty/pozycjonowanie-lokalne — linked),
// reklamy płatne.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed rankings;
// insurance and legal rules in general terms only.
import { p, h2, h3, li, link, k } from "./pt";

export const carRentalSeoPl = {
  lang: "pl",
  group: "car-rental-seo",
  slug: "pozycjonowanie-strony-wypozyczalni-samochodow",
  title: "Pozycjonowanie strony wypożyczalni samochodów",
  heading: "Pozycjonowanie strony wypożyczalni samochodów",
  excerpt:
    "Zajmuję się pozycjonowaniem strony wypożyczalni samochodów: podstrony floty, busów i aut dostawczych, wynajem na lotnisku, najem długoterminowy dla firm, auto zastępcze z OC sprawcy, jasne zasady kaucji i ubezpieczenia, wizytówka Google i odpowiedzi AI — rozliczane w rezerwacjach, a nie w pozycjach.",
  seo: {
    metaTitle: "SEO wypożyczalni aut: flota, lotnisko, kaucja | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony wypożyczalni samochodów: flota i lotniska, najem długoterminowy, auto zastępcze, kaucja i ubezpieczenie, odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Flota, lotniska, najem dla firm", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Wynajem auta Modlin", "Bus 9-osobowy na weekend", "Auto zastępcze z OC sprawcy", "Kaucja i ubezpieczenie jasno"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO wypożyczalni samochodów: strona, system rezerwacji, wizytówka Google", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla wypożyczalni: podstrony floty, lotnisk i najmu dla firm, odpowiedzi o kaucji, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony wypożyczalni samochodów", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony wypożyczalni samochodów",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy, którymi klienci szukają auta na wynajem", text: "Miasto, lotnisko, bus, dostawczak, najem na miesiąc" },
        { _key: k("o"), iconName: "layers", title: "Podstrony floty widoczne bez wpisywania dat", text: "Klasy aut, busy, dostawczaki, kaucja przy każdej" },
        { _key: k("o"), iconName: "map-pin", title: "Wynajem na lotnisku i podstawienie auta", text: "Miejsce wydania, godziny, nocne przyloty" },
        { _key: k("o"), iconName: "file-text", title: "Najem długoterminowy i auto zastępcze", text: "Dla firm z fakturą VAT i kierowców po stłuczce" },
        { _key: k("o"), iconName: "sparkles", title: "Wypożyczalnia w odpowiedziach ChatGPT i AI", text: "Warunki najmu i punkty wydania zwykłym tekstem" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w rezerwacjach bezpośrednich", text: "Obok tego, co dają porównywarki i ile kosztują" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO wypożyczalni samochodów", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony wypożyczalni samochodów", value: "od 3500 zł / mies.", note: "flota, lotniska, Mapy, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: katalogi, strony wielojęzyczne i lokalne firmy usługowe",
      subtitle:
        "Cyprus VIP Estates to katalog zbudowany od zera w pięciu językach, z filtrami, mapą i integracją z CRM, a SEO prowadzę na nim co miesiąc — flota wypożyczalni potrzebuje tej samej struktury, tylko z autami zamiast nieruchomości. Warsztat samochodowy z Warszawy dostał pozycjonowanie lokalne, pracę nad Mapami Google i podstrony usług. Strona agencji edukacyjnej obsługuje dziesięć krajów i kilka języków. ScanM2 po przebudowie na WordPressie, z zachowanym projektem, ma 29 razy więcej ruchu z wyszukiwarki i cotygodniowe zapytania, a nowe podstrony psychoterapeuty z Mediolanu pojawiają się w odpowiedziach ChatGPT. Wypożyczalnia potrzebuje takiego zestawu: katalogu floty czytelnego dla Google, mocnej wizytówki, kilku języków i obecności w odpowiedziach AI.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "auto-repair-seo-and-ux-boost",
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony wypożyczalni samochodów",
      subtitle: "W ciągu jednego dnia roboczego dostaniesz listę pierwszych poprawek na stronie, w systemie rezerwacji i w wizytówce Google oraz stałą cenę.",
      contextLabel: "Nazwa wypożyczalni lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakich klientów chcesz więcej?", options: ["Turystów i osób przylatujących na lotnisko", "Firm na najem długoterminowy", "Kierowców po stłuczce (auto zastępcze)", "Wynajmujących busy i auta dostawcze"] },
        { _key: k("z"), question: "Skąd dziś przychodzą rezerwacje?", options: ["Z porównywarek, np. Rentalcars", "Z Map Google i telefonów", "Z naszej strony", "Od warsztatów, ubezpieczycieli i stałych klientów"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony wypożyczalni samochodów to praca nad tym, żeby turysta lądujący na Okęciu, firma szukająca trzech aut na rok i kierowca, którego samochód stoi w warsztacie po stłuczce, znaleźli w Google Twoją wypożyczalnię i zarezerwowali u Ciebie, a nie przez porównywarkę. Pracuję sam: ta sama osoba sprawdza stronę i system rezerwacji, pisze podstrony, poprawia kod i przygotowuje raport."),

        h2("Pozycjonowanie strony wypożyczalni samochodów: trzech klientów, trzy sposoby szukania"),
        p("Wypożyczalnia w Polsce zwykle obsługuje trzy grupy, które szukają zupełnie inaczej:"),
        li("osoby prywatne i turyści — szukają auta na weekend, wakacje albo przylot, porównują ceny i czytają warunki kaucji"),
        li("firmy — szukają najmu długoterminowego z fakturą VAT, serwisem i ubezpieczeniem w racie, często jako alternatywy dla leasingu"),
        li("kierowcy po kolizji — szukają auta zastępczego z OC sprawcy, rozliczanego bezgotówkowo z ubezpieczycielem"),
        p("Każda grupa potrzebuje osobnej podstrony z innymi argumentami. Jedna strona „Oferta” nie odpowie dobrze żadnej z nich."),

        h2("Frazy w pozycjonowaniu strony wypożyczalni samochodów: jak ludzie szukają auta na wynajem"),
        p("Przed pisaniem podstron zbieram dane wyszukiwania dla Twoich miast, lotnisk i floty. Frazy układają się w kilka grup:"),
        li("miejsce — „wypożyczalnia samochodów Kraków”, „wynajem auta lotnisko Chopina”, „wynajem samochodu Gdańsk”"),
        li("typ auta — „wynajem busa 9-osobowego”, „wypożyczalnia aut dostawczych”, „wynajem auta z automatyczną skrzynią”"),
        li("warunki — „wynajem auta bez kaucji”, „wynajem samochodu bez limitu kilometrów”, „wynajem auta dla 21-latka”"),
        li("okres — „wynajem auta na miesiąc”, „wynajem długoterminowy dla firm”"),
        p("Dane pokazują, która grupa jest największa w Twoim mieście i od czego zacząć."),

        h2("Podstrony floty wypożyczalni: klasy aut, busy i auta dostawcze"),
        p("Kto szuka busa na wesele albo dostawczaka na przeprowadzkę, wpisuje w Google typ auta, a nie daty. Jeśli flota istnieje tylko w kalendarzu rezerwacji, wyszukiwarka nie ma mu czego pokazać. Dlatego każda klasa — auta miejskie, kompakty, kombi, SUV-y, busy 9-osobowe, dostawczaki — dostaje podstronę, która działa bez dat: modele ze zdjęciami Twoich aut, liczba miejsc i bagażnik, skrzynia biegów, cennik według długości najmu, wysokość kaucji i limit kilometrów."),
        p("Busy i dostawczaki zasługują na więcej miejsca, bo ich klienci pytają o konkretne rzeczy: wymiary przestrzeni ładunkowej, czy wystarczy prawo jazdy kategorii B, czy jest hak. Popularny model dostaje osobną podstronę tylko wtedy, gdy masz go we flocie."),

        h2("Wynajem auta na lotnisku: podstrony dla Okęcia, Modlina, Balic i Pyrzowic"),
        p("W terminalach Chopina, Balic czy Rębiechowa stoją stanowiska dużych sieci, a porównywarki wykupują reklamy na każdą frazę z nazwą lotniska. Lokalna wypożyczalnia gra inną kartą: auto czeka na parkingu obok terminalu albo pracownik wychodzi z kartką z nazwiskiem do hali przylotów. Podstrona lotniska opisuje to tak, żeby pasażer lądujący o 23:40 nie zastanawiał się, czy ktoś na niego czeka:"),
        li("punkt spotkania z mapką i zdjęciem: który parking, który poziom, które wyjście"),
        li("dyżur przy opóźnionych lotach i dopłata za wydanie w nocy, jeśli ją pobierasz"),
        li("zwrot przed odlotem: gdzie zostawić kluczyki i ile minut na to zarezerwować"),
        li("nazwy, które ludzie wpisują w Google: Okęcie, Modlin, Balice, Rębiechowo, Pyrzowice, Ławica"),
        p("Tak samo powstają podstrony podstawienia auta pod dworzec, hotel albo adres klienta, z dopłatą za dojazd."),

        h2("Najem długoterminowy dla firm i auto zastępcze z OC sprawcy"),
        h3("Najem długoterminowy samochodów dla firm"),
        p("Przedsiębiorca porównuje najem długoterminowy z leasingiem i kredytem. Podstrona odpowiada na jego pytania: co obejmuje rata (ubezpieczenie, serwis, opony, auto zastępcze), na jaki okres można podpisać umowę, czy jest wpłata własna, jak wygląda faktura VAT i zwrot auta. To niewiele wyszukiwań, ale jedna umowa trwa latami."),
        h3("Auto zastępcze z OC sprawcy"),
        p("Kierowca po kolizji, z której nie jest winny, może dostać auto zastępcze na koszt ubezpieczyciela sprawcy. Szuka go w stresie, często z warsztatu. Podstrona tłumaczy krok po kroku, jakie dokumenty są potrzebne, jak długo można korzystać z auta i że rozliczenie odbywa się z ubezpieczycielem. Warto też dać ją do ręki warsztatom, z którymi współpracujesz. Zasady zależą od ubezpieczyciela i okoliczności szkody; to ogólna informacja, nie porada prawna."),

        h2("Kaucja, ubezpieczenie i wymagania wobec kierowcy: odpowiedzi, które decydują o rezerwacji"),
        p("O kaucję i udział własny toczy się większość sporów przy zwrocie i to one wracają w opiniach. Regulamin w PDF-ie na dole strony nie wystarcza: odpowiedzi stoją na osobnej podstronie, zwykłymi zdaniami i zgodnie z Twoją umową najmu:"),
        li("kaucja — wysokość według klasy auta, blokada na karcie kredytowej czy przelew, kiedy wraca do klienta"),
        li("ubezpieczenie — OC, AC i NNW w cenie, udział własny w szkodzie i ile kosztuje jego zniesienie"),
        li("kierowca — minimalny wiek, staż prawa jazdy, dopłata dla młodego kierowcy"),
        li("wyjazd za granicę — do których krajów wolno, czy potrzebna zgoda, ile kosztuje"),
        p("Ludzie wpisują w Google „wynajem auta bez kaucji”. Jeśli masz taki wariant za wyższą stawkę dzienną, podstrona nazywa tę różnicę wprost; jeśli nie masz, wyjaśnia, od czego zależy wysokość kaucji i jak szybko blokada znika z karty."),

        h2("Rentalcars, DiscoverCars i porównywarki a rezerwacje bezpośrednie"),
        p("Rentalcars, DiscoverCars i podobne serwisy zbierają turystów z całej Europy, którzy rezerwują auto jeszcze przed wylotem do Polski. Dla wypożyczalni przy lotnisku to często główne źródło klientów z zagranicy i trudno je zastąpić. Cena też jest stała: prowizja od każdego najmu, licytacja na cenę z sąsiadami w tym samym zestawieniu i dane klienta, które zostają u pośrednika."),
        p("Pozycjonowanie nie odbiera porównywarce jej roli. Przejmuje rezerwacje, które i tak mogły trafić prosto do Ciebie: firmy szukające najmu na rok, kierowców po stłuczce, stałych klientów i tych, którzy po porównaniu cen sprawdzają w Google, czy wypożyczalnia naprawdę istnieje. W miesięcznym raporcie zestawiam rezerwacje z każdego źródła, żeby było widać, ile prowizji zostało w firmie."),

        h2("Sezon w wypożyczalni samochodów: wakacje, majówka, ferie i klienci z zagranicy"),
        p("Polski kalendarz wypożyczalni ma kilka szczytów: majówkę, wakacje nad Bałtykiem i na Mazurach, ferie zimowe w Zakopanem i Szczyrku, a w dużych miastach także targi i koncerty. Podstronę „wynajem busa na majówkę” czy „auto na ferie” publikuję zimą, a nie w czerwcu, kiedy wszyscy już szukają i rezerwują. W Krakowie, Gdańsku, Warszawie i przy lotniskach część klientów to obcokrajowcy szukający po angielsku, niemiecku albo ukraińsku. Każda wersja językowa powstaje pod ich wyszukiwania, nie jako dosłowne tłumaczenie — więcej na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Wizytówka Google wypożyczalni samochodów i opinie klientów"),
        p("Kto wpisuje „wynajem busa Wrocław” albo „wypożyczalnia samochodów w pobliżu”, widzi najpierw mapę z trzema firmami. Profil Firmy w Google dostaje kategorię „Wypożyczalnia samochodów”, godziny z informacją o wydaniach poza godzinami biura i zdjęcia Twoich aut zamiast katalogowych. Osobny profil ma tylko punkt, w którym ktoś faktycznie wydaje samochody. Polskie opinie o wypożyczalniach najczęściej opisują rozliczenie kaucji i stan auta, dlatego najlepszy moment na prośbę o opinię to SMS tuż po zwolnieniu blokady, a na krytykę odpowiada się rzeczowo i bez danych klienta. Pracę z mapą opisuję szerzej na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Strona wypożyczalni samochodów: system rezerwacji, szybkość i podstrony widoczne dla Google"),
        p("Polskie wypożyczalnie pracują najczęściej na systemie rezerwacji w abonamencie albo na wtyczce do WordPressa. Przy audycie sprawdzam, co z tego widzi Google. Typowe znaleziska: cennik i flota ładowane skryptem z obcej domeny, przez co podstrona jest dla wyszukiwarki pusta; setki adresów z parametrami ?od= i ?do= w indeksie; zdjęcia aut po kilka megabajtów; formularz, który chce numeru prawa jazdy, zanim pokaże cenę."),
        p("Zmiana systemu rzadko jest potrzebna. Podstrony floty, lotnisk i warunków najmu stają się zwykłymi, lekkimi stronami z danymi strukturalnymi, a kalendarz otwiera się dopiero przy wyborze dat. Gdy obecnej strony nie da się sensownie poprawić, buduję nową."),

        h2("Pozycjonowanie strony wypożyczalni samochodów w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Ludzie pytają ChatGPT albo podsumowania AI w Google, czy da się wynająć auto bez karty kredytowej, ile wynosi kaucja za busa albo która wypożyczalnia w Krakowie podstawia auto na lotnisko w nocy. Odpowiedź powstaje z tekstów, które asystent znalazł i które zgadzają się ze sobą w kilku miejscach. Ta praca nazywa się GEO (generative engine optimization) lub AEO (answer engine optimization). Dla wypożyczalni oznacza to warunki najmu, kaucję, ubezpieczenie i lokalizacje zapisane zwykłymi zdaniami, dane strukturalne floty i punktów oraz te same dane firmy w Google, porównywarkach i katalogach."),
        p(
          "Przed pracą i po niej sprawdzam, jak asystenci opisują Twoją wypożyczalnię i kogo polecają zamiast niej. Metodę opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony wypożyczalni samochodów"),
        li("Audyt SEO strony, systemu rezerwacji i wizytówek: od 1000 zł, jednorazowo, z poprawkami ułożonymi według tego, ile mogą dać rezerwacji."),
        li("Jednorazowe prace — podstrony floty, lotnisk, najmu dla firm i auta zastępczego, odpowiedzi o kaucji, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie — nowe podstrony, wizytówki, opinie, widoczność w AI i raporty w rezerwacjach: od 3500 zł miesięcznie, w dużych miastach i przy lotniskach, gdzie konkurują sieci i porównywarki, od 5500 zł miesięcznie."),
        p(
          "Jeśli sprzedajesz auta wycofane z floty, zajrzyj na stronę ",
          link("pozycjonowanie salonu i komisu samochodowego", "/pl/pozycjonowanie-strony-salonu-samochodowego"),
          ". Jak prowadzę stałą pracę, opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a wszystkie ceny są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony wypożyczalni samochodów: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony wypożyczalni samochodów?", "Za audyt płacisz od 1000 zł, za pojedyncze podstrony i poprawki od 1000 do 3000 zł, a za stałą pracę od 3500 zł miesięcznie — w dużych miastach i przy lotniskach od 5500 zł. Konkretną kwotę podam, gdy opiszesz flotę, punkty wydania i źródła rezerwacji."],
          ["Po jakim czasie pozycjonowanie wypożyczalni daje rezerwacje?", "Pierwsze telefony z mapy pojawiają się często kilka tygodni po uporządkowaniu wizytówki. Podstrony floty i lotnisk rosną wolniej, zwykle od trzech do sześciu miesięcy, więc pracę przed wakacjami najlepiej zacząć zimą."],
          ["Czy rezygnować z Rentalcars, gdy strona zacznie przynosić rezerwacje?", "Nie ma takiej potrzeby. Porównywarka zostaje kanałem dla turystów z zagranicy, którzy rezerwują przed wylotem. Strona przejmuje resztę: firmy, stałych klientów, kierowców po stłuczce i wszystkich, którzy szukają Cię po nazwie."],
          ["Czy wypożyczalnia bez stanowiska w terminalu może być widoczna na frazy lotniskowe?", "Tak. Fraza z nazwą lotniska nie wymaga okienka w terminalu, tylko podstrony, która opisuje punkt spotkania, nocne przyloty i zwrot. Pomagają też zdjęcia z miejsca wydania w wizytówce Google i opinie, w których klienci wspominają lotnisko."],
          ["Czy pisać na stronie wysokość kaucji?", "Tak. Kwota dla każdej klasy, forma zabezpieczenia (karta kredytowa, debetowa, gotówka) i termin zwolnienia środków. Kto zna te liczby przed rezerwacją, rzadziej rezygnuje w ostatniej chwili i rzadziej kłóci się przy zwrocie."],
          ["Czy ChatGPT może polecić lokalną wypożyczalnię?", "Może, jeśli znajdzie o niej spójne informacje: punkty wydania, flotę, kaucję, godziny i opinie, takie same na stronie, w Google i w porównywarkach. Wzmianki nikt nie zagwarantuje; zapisuję odpowiedzi asystentów przed rozpoczęciem pracy i po kilku miesiącach, żeby było widać zmianę."],
          ["Czy współpraca może być zdalna, jeśli wypożyczalnia jest poza Warszawą?", "Tak. Strona, system rezerwacji i wizytówki są w sieci, więc lokalizacja wypożyczalni nie ma znaczenia — z firmami z Gdańska, Katowic czy Zakopanego pracuję tak samo, po polsku, przez telefon, wideo i e-mail."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony wypożyczalni samochodów: co mi wysłać"),
        p(
          "Wyślij nazwę wypożyczalni, link do strony i wizytówki Google, miasta i lotniska, które obsługujesz, flotę według klas, system rezerwacji i informację, skąd dziś przychodzą klienci — z porównywarek, z mapy, od warsztatów czy z poleceń. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
