// Page rebuild: /pl/cennik (PL). Lustro pages/pricing.en.ts: picker z trzema
// ścieżkami, sekcje o SEO, stronach i wyszukiwaniu AI z tabelami, krótkie
// odpowiedzi w kartach, ponumerowane czynniki i warunki rozliczeń w dwóch
// kartach. Stosowane przez scripts/rebuild-page.cjs.
//
// Ceny w złotych — tylko na tej wersji; angielska i rosyjska podają euro.
// Wszystkie kwoty są już opublikowane na stronie: audyt od 1000 zł, prace
// jednorazowe 1000-3000 zł, stała praca od 3500 zł/mies., branże konkurencyjne
// od 5500 zł/mies., pełne prowadzenie 13 000 zł/mies., strona od 8500 zł,
// redesign od 4500 zł, landing 3000-6000 zł, landing konwersyjny od 8500 zł.
// Ceny usług AI pochodzą ze stron tych usług: audyt widoczności od 1000 zł,
// przygotowanie strony do wyszukiwania AI od 3500 zł, poprawa błędnych danych
// od 3500 zł. Monitoring marki: od 1000 zł miesięcznie przy minimum trzech
// miesiącach — kwota ustalona przez właściciela 24.11.2026, bo strona usługi
// jako jedyna z czwórki ceny nie podawała; trzeba ją tam dopisać, żeby obie
// nie rozjechały się w czasie.
//
// Dwa bloki offerListBlock otwierające połowy o SEO i o stronach usunięte:
// ich kwoty są teraz w kartach pickera, a porównanie w tabelach.
//
// Polskie dodatki, których nie ma w wersji angielskiej — sekcja o tym, czy
// audyt ma sens, oraz blok „Co dostajesz po audycie” — zostają na stronie.
import { p, h2, h3, li, link, k } from "../pt";

export const cennikPl = {
  lang: "pl",
  slug: "cennik",
  contentBlocks: [
    {
      _type: "pricePickerBlock",
      _key: k("b"),
      eyebrow: "Dobierz cenę",
      title: "Cennik SEO, widoczności w AI i stron internetowych: dobierz swój wariant",
      intro:
        "Trzy różne zakupy i trzy różne zestawy pytań. Wybierzcie ten, po który przyszliście — każda zakładka ma własny link do udostępnienia.",
      coversLabel: "Co wchodzi w tę cenę",
      movesLabel: "Co przesuwa Waszą kwotę",
      noPushText: "W Waszych odpowiedziach nie ma nic, co podnosiłoby kwotę powyżej punktu wyjścia.",
      ctaLabel: "Wyślij to jako zapytanie",
      ctaHref: "#quote",
      disclaimer:
        "To szacunek, a nie wycena: kwota dla Waszego projektu zostaje ustalona na piśmie po krótkiej rozmowie, a bezpłatna konsultacja może skończyć się wnioskiem „wystarczy audyt, abonament nie jest uzasadniony”.",
      tracks: [
        {
          _key: k("tr"),
          id: "seo",
          label: "Stałe SEO",
          heading: "Cennik SEO: dobierzcie poziom po konkurencji, zasięgu i stanie strony",
          lead: "Trzy pytania o Wasz rynek. SEO rozlicza się miesięcznie, z minimalnym okresem, a wejściem w nie jest audyt.",
          linkLabel: "Stałe SEO: pełna strona usługi",
          linkHref: "/pl/oferty/strategia-i-optymalizacja-seo",
          options: [
            { _key: k("o"), id: "audit", name: "Najpierw audyt SEO", price: "od 1000 zł", term: "jednorazowo", includes: ["co jest do zdobycia, a co nie — na piśmie", "źródło każdego problemu znalezione, a nie zgadnięte", "plan, który możecie wdrożyć sami"] },
            { _key: k("o"), id: "ongoing", name: "SEO dla firm usługowych", price: "od 3500 zł / mies.", term: "minimum 3–6 miesięcy", includes: ["audyt, prace techniczne, frazy, struktura", "widoczność w ChatGPT i odpowiedziach AI", "raport w zapytaniach, nie w pozycjach"] },
            { _key: k("o"), id: "hard", name: "SEO w branżach konkurencyjnych", price: "od 5500 zł / mies.", term: "minimum 6 miesięcy", includes: ["głębsze prace techniczne i strategia treści", "praca nad autorytetem, bez kupowanych linków", "raport w zapytaniach, nie w pozycjach"] },
            { _key: k("o"), id: "sitefirst", name: "Najpierw strona", price: "od 8500 zł", term: "2–4 tygodnie", includes: ["budowana od razu pod SEO, żeby pierwsze miesiące nie poszły na naprawy", "podstrona na usługę od początku", "dane strukturalne i fakty czytelne dla asystentów"] },
          ],
          questions: [
            {
              _key: k("q"), id: "market", label: "Konkurencja w Waszej branży",
              choices: [
                { _key: k("c"), label: "Spokojna", picks: ["ongoing"] },
                { _key: k("c"), label: "Zatłoczona", picks: ["hard"], push: "Zatłoczona branża: górna część widełek i dłuższy minimalny okres." },
                { _key: k("c"), label: "Nie wiem", picks: ["audit"], push: "Nie wiadomo, jak bardzo jest zajęta: na to właśnie odpowiada audyt, zanim pojawi się jakiekolwiek miesięczne zobowiązanie." },
              ],
            },
            {
              _key: k("q"), id: "reach", label: "Gdzie są Wasi klienci",
              choices: [
                { _key: k("c"), label: "Jedno miasto", picks: [], push: "Jedno miasto: wizytówka Google i podstrony dzielnic robią sporą część pracy." },
                { _key: k("c"), label: "Jeden kraj", picks: [] },
                { _key: k("c"), label: "Kilka krajów", picks: [], push: "Kilka krajów: osobne wersje językowe, mierzone osobno." },
              ],
            },
            {
              _key: k("q"), id: "site", label: "Strona, na której SEO ma pracować",
              choices: [
                { _key: k("c"), label: "Jest i jest w porządku", picks: [] },
                { _key: k("c"), label: "Jest, ale słaba", picks: [], push: "Słaba strona: część pierwszych miesięcy idzie na prace techniczne przed treścią." },
                { _key: k("c"), label: "Strony jeszcze nie ma", picks: ["sitefirst"], push: "Nie ma strony: zbudowanie jej od razu pod SEO kosztuje mniej niż późniejsze naprawianie." },
              ],
            },
          ],
        },
        {
          _key: k("tr"),
          id: "ai-search",
          label: "Widoczność w AI",
          heading: "Cennik widoczności w AI: dobierzcie zadanie po tym, co asystenci mówią dziś",
          lead: "Trzy pytania o to, co mówią dziś o Was ChatGPT, odpowiedzi AI w Google, Perplexity, Gemini i Claude. To cztery osobne prace, a nie jeden pakiet, bo zadania są naprawdę różne.",
          linkLabel: "Widoczność w AI: pełna strona usługi",
          linkHref: "/pl/oferty/ai-seo-and-geo-optymalizacja",
          options: [
            { _key: k("o"), id: "aiaudit", name: "Audyt widoczności w AI", price: "od 1000 zł", term: "jednorazowo", includes: ["stały zestaw zapytań do ChatGPT, odpowiedzi AI w Google, Perplexity, Gemini i Claude", "każde błędne twierdzenie doprowadzone do strony, która je wywołała", "to, co da się poprawić, oddzielone od tego, czego się nie da"] },
            { _key: k("o"), id: "aiready", name: "Przygotowanie strony do wyszukiwania AI", price: "od 3500 zł", term: "projekt", includes: ["usługi, obszar, ceny i godziny podane jako tekst do zacytowania", "dane strukturalne, które asystent potrafi odczytać", "te same dane firmy wszędzie, gdzie występują"] },
            { _key: k("o"), id: "aifix", name: "Poprawa błędnych informacji w odpowiedziach AI", price: "od 3500 zł", term: "projekt", includes: ["źródło każdego błędnego twierdzenia znalezione, a nie zgadnięte", "poprawione Wasze podstrony, profile i wpisy w katalogach", "zgłoszone ponowne indeksowanie, potem te same zapytania jeszcze raz"] },
            { _key: k("o"), id: "aimonitor", name: "Monitoring marki w AI", price: "od 1000 zł / mies.", term: "minimum 3 miesiące", includes: ["ten sam zamrożony zestaw zapytań co miesiąc", "częstotliwość wzmianek, znalezione błędy i cytowane źródła", "ruch z asystentów raportowany osobno"] },
          ],
          questions: [
            {
              _key: k("q"), id: "say", label: "Co asystenci mówią dziś",
              choices: [
                { _key: k("c"), label: "Nie wymieniają nas", picks: ["aiready"], push: "W ogóle nie wymieniają: problemem jest widoczność, a pracą jest uczynienie faktów możliwymi do zacytowania." },
                { _key: k("c"), label: "Wymieniają z błędami", picks: ["aifix"], push: "Wymieniają błędnie: twierdzenie pochodzi ze źródła, które najpierw trzeba znaleźć." },
                { _key: k("c"), label: "Nigdy nie sprawdzaliśmy", picks: ["aiaudit"], push: "Nigdy nie sprawdzane: jedna odpowiedź to wrażenie, stały zestaw zapytań to dowód." },
              ],
            },
            {
              _key: k("q"), id: "track", label: "Czy potrzebna obserwacja w czasie",
              choices: [
                { _key: k("c"), label: "Wystarczy jednorazowa odpowiedź", picks: [] },
                { _key: k("c"), label: "Tak, miesiąc po miesiącu", picks: ["aimonitor"], push: "Obserwacja miesięczna: ten sam zamrożony zestaw zapytań, więc ten miesiąc da się porównać z poprzednim." },
              ],
            },
            {
              _key: k("q"), id: "langs", label: "Języki i rynki",
              choices: [
                { _key: k("c"), label: "Jeden", picks: [] },
                { _key: k("c"), label: "Dwa lub trzy", picks: [], push: "Kilka języków: w jednym firma bywa opisana poprawnie, a w drugim błędnie, więc każdy sprawdzany jest osobno." },
                { _key: k("c"), label: "Więcej niż trzy", picks: [], push: "Wiele rynków: razem z nimi rośnie zestaw zapytań i ilość zapisu, a z nimi kwota." },
              ],
            },
          ],
        },
        {
          _key: k("tr"),
          id: "website",
          label: "Budowa strony",
          heading: "Cennik strony: dobierzcie wariant po zakresie, językach i punkcie startu",
          lead: "Trzy pytania o samą stronę. Budowa jest płatna raz, nic tutaj nie jest miesięczne.",
          linkLabel: "Tworzenie stron: pełna strona usługi",
          linkHref: "/pl/oferty/tworzenie-stron-internetowych",
          options: [
            { _key: k("o"), id: "business", name: "Strona firmowa", price: "od 8500 zł", term: "2–4 tygodnie", includes: ["podstrona na usługę, napisana tak, jak pytają klienci", "projekt graficzny w cenie, nie osobną fakturą", "dane strukturalne i fakty czytelne dla AI od pierwszego dnia"] },
            { _key: k("o"), id: "redesign", name: "Redesign strony", price: "od 4500 zł", term: "zależnie od zakresu", includes: ["zmienia się wygląd, adresy i pozycje zostają", "dane strukturalne i szybkość doprowadzone do porządku", "podstrony, które już przynoszą zapytania, zostają zachowane"] },
            { _key: k("o"), id: "landing", name: "Landing page", price: "3000–6000 zł", term: "1–3 tygodnie", includes: ["jedna usługa albo jedna kampania", "własny układ, szybki na telefonie", "formularz i analityka na miejscu"] },
          ],
          questions: [
            {
              _key: k("q"), id: "state", label: "Strona dzisiaj",
              choices: [
                { _key: k("c"), label: "Jeszcze nie istnieje", picks: ["business"], push: "Nic jeszcze nie ma: struktura i teksty powstają od zera — to praca, ale bez ryzyka migracji." },
                { _key: k("c"), label: "Jest, przestarzała", picks: ["redesign"], push: "Istniejąca strona: migracja i zachowanie adresów, które już się wyświetlają." },
                { _key: k("c"), label: "Jest i działa", picks: ["landing"], push: "Działająca strona: nowa podstrona wpina się w nią, zamiast ją zastępować." },
              ],
            },
            {
              _key: k("q"), id: "scope", label: "Ile ma obejmować",
              choices: [
                { _key: k("c"), label: "Jedną usługę", picks: [], push: "Jedna oferta: wystarczy jedna podstrona, a budowa jest krótka." },
                { _key: k("c"), label: "Kilka usług", picks: [] },
                { _key: k("c"), label: "Wiele usług lub rynków", picks: [], push: "Wiele usług: więcej podstron, więcej danych strukturalnych, więcej linkowania wewnętrznego." },
              ],
            },
            {
              _key: k("q"), id: "lang", label: "Języki na stronie",
              choices: [
                { _key: k("c"), label: "Jeden", picks: [] },
                { _key: k("c"), label: "Dwa", picks: [], push: "Drugi język: układ powstaje raz, a treść pisana jest dwa razy." },
                { _key: k("c"), label: "Trzy lub więcej", picks: [], push: "Trzy języki i więcej: hreflang, osobne mierzenie i osobna treść na każdy rynek." },
              ],
            },
          ],
        },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      eyebrow: "SEO",
      compact: true,
      content: [
        h2("Cennik SEO: za co płacisz na każdym poziomie"),
        p("SEO jest procesem, a nie zakupem, więc kwoty poniżej są miesięczne wszędzie tam, gdzie nie napisano inaczej. Poziomy różni nie długość umowy, tylko ilość pracy, której wymaga rynek przed Wami: ta sama strona w spokojnej branży i w zajętej potrzebuje innej ilości prac technicznych, treści i czasu, zanim cokolwiek drgnie."),
        p("W większości przypadków zaczyna się od audytu. Kosztuje od 1000 zł, odpowiada na pytanie, co w Waszym przypadku jest w ogóle do ruszenia, i jest skończonym produktem — kilku klientów wdrożyło go samodzielnie, bez zatrudniania nikogo. Poziomy miesięczne zaczynają się po nim, kiedy wiadomo, na czym praca ma polegać."),
        h3("Poziomy SEO w porównaniu: cena, minimalny okres i dla kogo"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Poziom", "Cena", "Minimalny okres", "Dla kogo"],
      rows: [
        ["Audyt SEO", "od 1000 zł", "jednorazowo", "zanim zdecydujecie się na cokolwiek długoterminowego"],
        ["Jednorazowe prace SEO", "1000–3000 zł", "jednorazowo", "konkretne zadanie: podstrony, poprawki techniczne, dane strukturalne"],
        ["SEO dla firm usługowych", "od 3500 zł / mies.", "3–6 miesięcy", "firmy usługowe, lokalne i niszowe, które potrzebują zapytań"],
        ["SEO w branżach konkurencyjnych", "od 5500 zł / mies.", "6 miesięcy", "rynki zajęte przez agencje, cięższa praca techniczna i treściowa"],
        ["Pełne prowadzenie projektu", "13 000 zł / mies.", "do uzgodnienia", "jeden specjalista od strategii, treści, kodu i koordynacji"],
      ].map((cells) => ({ _key: k("t"), _type: "tableRow", cells })),
    },
    {
      _type: "textContent",
      _key: k("b"),
      eyebrow: "Strony internetowe",
      compact: true,
      content: [
        h2("Cennik stron internetowych: co zmienia kwotę"),
        p("Cena strony zależy znacznie mniej od tego, jak wygląda, niż od tego, co ma robić. Ten sam projekt kosztuje tyle samo przy czterech podstronach i przy czterdziestu; praca jest w strukturze pod spodem, w integracjach i w treści, którą trzeba napisać, zanim cokolwiek da się zbudować."),
        p("Projekt graficzny nigdy nie jest u mnie osobną pozycją w wycenie. Nie sprzedaję rysunków, których nie zamierzam zbudować, bo właśnie na tym etapie projekty najczęściej tracą budżet."),
        h3("Typy stron w porównaniu: cena, termin i kiedy mają sens"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Typ", "Cena", "Termin", "Kiedy ma sens"],
      rows: [
        ["Strona firmowa", "od 8500 zł", "2–4 tygodnie", "małe i średnie firmy, które potrzebują rzetelnej obecności"],
        ["Strona sprzedażowa", "od 8500 zł", "3–6 tygodni", "struktura pod konwersję, napisane treści, integracje"],
        ["Redesign strony", "od 4500 zł", "zależnie od zakresu", "strona nie przynosi zapytań albo powstała lata temu"],
        ["Prosty landing page", "3000–6000 zł", "1–3 tygodnie", "jedna usługa, kampania reklamowa, test nowej oferty"],
        ["Landing konwersyjny z SEO, AEO i GEO", "od 8500 zł", "2–3 tygodnie", "dane strukturalne, gotowość na wyszukiwanie AI, Core Web Vitals"],
      ].map((cells) => ({ _key: k("t"), _type: "tableRow", cells })),
    },
    {
      _type: "textContent",
      _key: k("b"),
      eyebrow: "Wyszukiwanie AI",
      compact: true,
      content: [
        h2("Cennik widoczności w wyszukiwaniu AI: ile kosztuje praca GEO i AEO"),
        p("Trafić do odpowiedzi ChatGPT, Perplexity, Gemini i odpowiedzi AI w Google to nie to samo zadanie co wyjście na górę w Google i nie jest to jedna usługa. Uczynienie strony czytelną dla asystenta, zmierzenie, co asystenci mówią dziś, poprawienie tego, co mówią błędnie, i obserwowanie tego miesiąc po miesiącu to cztery różne prace z czterema różnymi cenami."),
        p("Część tego mieści się już w stałym SEO i nie kosztuje nic więcej: fakty, których potrzebuje asystent — usługi, obszar, ceny, godziny — podane tekstem, dane strukturalne na każdej podstronie i te same dane firmy wszędzie. Poza miesięczną pracą SEO zostaje mierzenie po platformach i językach, poprawianie twierdzeń, których źródłem nie jest Wasza strona, i obserwacja w czasie."),
        h3("Usługi AI w porównaniu: cena, okres i kiedy która jest właściwa"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Usługa", "Cena", "Okres", "Kiedy jest właściwa"],
      rows: [
        ["Audyt widoczności w AI", "od 1000 zł", "jednorazowo", "nie wiecie, co asystenci mówią o Was, i chcecie to zmierzyć przed wydatkami"],
        ["Monitoring marki w AI", "od 1000 zł / mies.", "minimum 3 miesiące", "punkt odniesienia już jest i chcecie widzieć ruch na każdej platformie"],
        ["Przygotowanie strony do wyszukiwania AI", "od 3500 zł", "projekt", "asystenci w ogóle Was nie wymieniają, bo na stronie nie ma czego zacytować"],
        ["Poprawa błędnych informacji w odpowiedziach AI", "od 3500 zł", "projekt", "asystenci wymieniają Was i mylą fakty"],
      ].map((cells) => ({ _key: k("t"), _type: "tableRow", cells })),
    },
    {
      _type: "gridBlock",
      _key: k("b"),
      banded: false,
      eyebrow: "Krótkie odpowiedzi",
      align: "left",
      variant: "answers",
      title: "Ile kosztuje strona, SEO i audyt: krótkie odpowiedzi",
      items: [
        { _key: k("g"), iconName: "globe", title: "Ile kosztuje strona internetowa", description: "Od 8500 zł za stronę firmową, termin dwa do czterech tygodni. Landing page 3000–6000 zł, redesign od 4500 zł, a projekt graficzny wchodzi w każdą z tych kwot, zamiast być osobną fakturą.", linkLabel: "Ile kosztuje strona dla firmy", linkDestination: "/pl/blog/ile-kosztuje-strona-internetowa-dla-firmy" },
        { _key: k("g"), iconName: "search", title: "Ile kosztuje pozycjonowanie miesięcznie", description: "Od 3500 zł miesięcznie dla firmy usługowej, od 5500 zł w branży konkurencyjnej i 13 000 zł, gdy jeden specjalista prowadzi cały kanał. Minimalny okres to trzy do sześciu miesięcy.", linkLabel: "Co wchodzi w stałe SEO", linkDestination: "/pl/oferty/strategia-i-optymalizacja-seo" },
        { _key: k("g"), iconName: "file-text", title: "Ile kosztuje audyt SEO", description: "Od 1000 zł, jednorazowo. To skończony dokument z listą priorytetów, który możecie wdrożyć sami albo oddać innemu wykonawcy — łącznie z przypadkiem, gdy wniosek brzmi: nic więcej kupować nie trzeba.", linkLabel: "Co zawiera audyt SEO", linkDestination: "/pl/oferty/audyt-seo-strony-internetowej" },
        { _key: k("g"), iconName: "layers", title: "Ile kosztuje redesign strony", description: "Od 4500 zł. Zmienia się wygląd, a adresy, dane strukturalne i podstrony, które już przynoszą zapytania, zostają — dzięki temu pozycje przeżywają przeprowadzkę, zamiast zaczynać od zera.", linkLabel: "Jak redesign zachowuje pozycje", linkDestination: "/pl/oferty/przebudowa-strony-internetowej" },
        { _key: k("g"), iconName: "shield-check", title: "Ile kosztuje SEO dla kancelarii", description: "Od 3500 zł miesięcznie dla praktyki lokalnej i od 5500 zł dla spraw korporacyjnych, imigracyjnych i transgranicznych, gdzie konkurencja jest największa, a obciążenie techniczne wyższe.", linkLabel: "Ile kosztuje SEO dla kancelarii", linkDestination: "/pl/blog/ile-kosztuje-seo-dla-kancelarii-prawnej" },
        { _key: k("g"), iconName: "languages", title: "Ile kosztuje strona wielojęzyczna", description: "Od tych samych 8500 zł co jednojęzyczna. Każdy kolejny język dokłada pracę nad treścią, a nie mnoży ceny, bo układ i struktura powstają raz.", linkLabel: "Ile kosztuje strona wielojęzyczna", linkDestination: "/pl/blog/ile-kosztuje-strona-wielojezyczna" },
        { _key: k("g"), iconName: "map-pin", title: "Ile kosztuje pozycjonowanie w Warszawie", description: "Tyle samo co poza nią: od 3500 zł miesięcznie. Miasto nie podnosi stawki, podnosi ją konkurencja w branży, a przy jednym mieście sporą część pracy robią wizytówka Google i podstrony dzielnic.", linkLabel: "Pozycjonowanie stron w Warszawie", linkDestination: "/pl/oferty/pozycjonowanie-stron-warszawa" },
        { _key: k("g"), iconName: "users", title: "Freelancer czy agencja: ile kosztuje różnica", description: "Jeden specjalista kosztuje mniej za tę samą pracę — bez account managera, bez statusów, bez przekazywania zadania między ludźmi — i bierze mniej projektów naraz. To jest ten kompromis.", linkLabel: "Freelancer czy agencja", linkDestination: "/pl/blog/freelancer-czy-agencja" },
      ],
    },
    { _type: "landingCtaBlock", _key: k("b") },
    {
      _type: "textContent",
      _key: k("b"),
      eyebrow: "Co przesuwa kwotę",
      compact: true,
      paddingVertical: "none",
      content: [
        h2("Pięć czynników, które decydują o cenie SEO i strony"),
        p("Każda wycena powstaje z tych samych pięciu pytań, a na większość z nich odpowiecie sami, zanim porozmawiamy. Każde z nich przesuwa kwotę w sposób, który widać:"),
      ],
    },
    {
      _type: "gridBlock",
      _key: k("b"),
      banded: false,
      tightTop: true,
      align: "left",
      variant: "numbered",
      items: [
        { _key: k("g"), title: "Zakres prac", description: "SEO techniczne, treść, struktura strony i optymalizacja konwersji to osobne zadania. Im większy zakres, tym wyższy koszt, ale też większy potencjał efektów." },
        { _key: k("g"), title: "Cel biznesowy", description: "Inaczej wyceniane jest SEO „dla widoczności”, a inaczej działania nastawione na leady, sprzedaż i skalowanie biznesu." },
        { _key: k("g"), title: "Stan obecnej strony", description: "Nowa strona, strona po latach zaniedbań i projekt wymagający przebudowy technicznej — każdy z tych przypadków oznacza inny poziom pracy." },
        { _key: k("g"), title: "Konkurencyjność branży", description: "Im bardziej konkurencyjna branża w Google, tym więcej czasu i zasobów potrzeba, aby osiągnąć stabilne wyniki." },
        { _key: k("g"), title: "Czas współpracy", description: "SEO to proces. Krótkie, jednorazowe działania rzadko przynoszą trwałe efekty, a dłuższa współpraca pozwala rozłożyć koszty i systematycznie budować wyniki." },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      banded: false,
      tightTop: true,
      compact: true,
      paddingVertical: "none",
      content: [
        p(
          "Jeśli nie chcecie zgadywać, który z tych punktów dotyczy Was, ",
          link("bezpłatna konsultacja", "/pl/kontakt"),
          " trwa piętnaście do trzydziestu minut i kończy się konkretną odpowiedzią — łącznie z odpowiedzią, że wystarczy audyt, a abonament nie jest uzasadniony.",
        ),
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      banded: true,
      eyebrow: "Zanim zapytacie",
      compact: true,
      paddingVertical: "none",
      content: [h2("Warunki rozliczeń i co płacicie osobno")],
    },
    {
      _type: "doubleTextBlock",
      _key: k("b"),
      banded: true,
      tightTop: true,
      variant: "cards",
      isDivider: false,
      verticalAlign: "top",
      leftContent: {
        type: "text",
        blockContent: {
          _key: k("bc"),
          _type: "blockContentWithStyle",
          content: [
            h3("Płatność, waluta i umowa"),
            p("Kwoty na tej stronie są w złotych i są ceną końcową dla klienta: przy fakturze nic się do nich nie dolicza. Klienci spoza Polski rozliczają się w euro, po cenach z angielskiej wersji tej strony. Faktury wystawia jednoosobowa działalność zarejestrowana w Warszawie."),
            p("Projekty rozliczane są etapami uzgodnionymi na piśmie przed startem; usługi miesięczne — co miesiąc. Umowa może być miesięczna, projektowa albo bezterminowa, zależnie od tego, co pasuje do pracy, a wsparcie po uruchomieniu wchodzi w zakres na jeden do sześciu miesięcy do uzgodnienia."),
          ],
        },
      },
      rightContent: {
        type: "text",
        blockContent: {
          _key: k("bc"),
          _type: "blockContentWithStyle",
          content: [
            h3("Koszty płacone bezpośrednio, bez marży"),
            p("To płacicie Wy, w ich własnej wysokości, i nie przechodzi to przeze mnie:"),
            li("budżet reklamowy w Google Ads, jeśli zdecydujecie się na reklamę;"),
            li("hosting i domena, które zostają na Waszych kontach;"),
            li("płatne zdjęcia, fonty i wszelkie licencjonowane narzędzia zewnętrzne;"),
            li("tłumaczenie na języki, w których nie pracuję — angielski, polski i rosyjski robię sam, resztę ustawiam technicznie."),
          ],
        },
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      banded: true,
      tightTop: true,
      compact: true,
      content: [
        p(
          "Jeśli przed decyzją chcecie zobaczyć pracę stojącą za tymi kwotami, w ",
          link("portfolio", "/pl/portfolio"),
          " projekty pokazane są w całości, a strony usług opisują ",
          link("stałe SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", ",
          link("przebudowę strony", "/pl/oferty/przebudowa-strony-internetowej"),
          ", ",
          link("utrzymanie po uruchomieniu", "/pl/oferty/utrzymanie-strony-internetowej"),
          " i ",
          link("audyt widoczności w AI", "/pl/oferty/audyt-widocznosci-w-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      eyebrow: "Audyt",
      compact: true,
      content: [
        h2("Czy audyt SEO ma sens w Waszym przypadku"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Tak, jeśli:", "Nie, jeśli:"],
      rows: [
        ["strona nie generuje zapytań", "oczekujesz natychmiastowych efektów"],
        ["widoczność w Google stoi w miejscu", "nie planujesz żadnych dalszych działań"],
        ["planujesz inwestycję w SEO lub nową stronę", "szukasz „magicznego” rozwiązania w tydzień"],
      ].map((cells) => ({ _key: k("t"), _type: "tableRow", cells })),
    },
    { _type: "keepExisting", block: "textContent", where: "Co dostajesz po audycie" },
    {
      _type: "textContent",
      _key: k("b"),
      eyebrow: "Filtr, a nie reklama",
      compact: true,
      content: [
        h2("Dla kogo ta oferta jest, a dla kogo nie"),
        p("Obie kolumny warto przeczytać. Odmówić pracy, która się nie uda, jest taniej dla obu stron niż ją zacząć."),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Dla kogo", "Dla kogo nie"],
      rows: [
        ["małe i średnie firmy", "„chcę najtaniej”"],
        ["usługi lokalne i specjalistyczne", "„SEO w tydzień”"],
        ["biznesy nastawione na leady i sprzedaż", "brak czasu na współpracę i decyzje"],
        ["osoby, które chcą zrozumieć, co i dlaczego robimy", "projekty bez jasno określonego celu"],
      ].map((cells) => ({ _key: k("t"), _type: "tableRow", cells })),
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      pretitle: "FAQ",
      compact: true,
      title: "Ceny i warunki współpracy: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Czy mogę zacząć od samego audytu?", "Tak i w większości przypadków to zalecam. Audyt kosztuje od 1000 zł, jest skończonym produktem z listą priorytetów, a wdrożyć go możecie sami albo z innym wykonawcą."],
          ["Czy ceny są stałe?", "To punkty wyjścia, a nie cennik sztywny. Kwota dla Waszego projektu zostaje ustalona na piśmie przed startem, a prace jednorazowe wyceniam tak samo."],
          ["Ile kosztuje pozycjonowanie miesięcznie?", "Od 3500 zł miesięcznie dla firm usługowych i lokalnych, od 5500 zł w branżach konkurencyjnych i 13 000 zł miesięcznie za pełne prowadzenie projektu. Minimalny okres to trzy do sześciu miesięcy na pierwszym poziomie i sześć miesięcy na drugim, bo właśnie tyle zajmuje nagromadzenie mierzalnego efektu."],
          ["Czy mogę zamówić stronę bez SEO?", "Tak. Podstawowe przygotowanie techniczne i SEO wchodzi w każdą budowę — struktura, szybkość, gotowość do indeksowania — a stałe pozycjonowanie to osobna, głębsza usługa na gotowej stronie."],
          ["Po jakim czasie widać efekty SEO?", "Poprawki techniczne i wizytówka dają efekt w ciągu kilku tygodni. Nowe podstrony w popularnych branżach potrzebują zwykle kilku miesięcy, węższe frazy często mniej. Po pierwszym cyklu widać, czy ruszył się którykolwiek wskaźnik, a jeśli żaden, mówię o tym wprost."],
          ["Jakie są warunki rozliczeń?", "Miesięcznie, za projekt albo bezterminowo — zależnie od tego, co pasuje do pracy, i ustalamy to przed startem. Wsparcie po uruchomieniu może wchodzić w zakres na jeden do sześciu miesięcy, do uzgodnienia."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      banded: true,
      title: "Wycena Waszego projektu",
      subtitle: "Opiszcie firmę i stronę w kilku zdaniach. Odpowiadam w ciągu jednego dnia roboczego: od czego bym zaczął i ile to kosztuje.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Czego potrzebujecie najpierw?", options: ["Strony internetowej", "SEO dla istniejącej strony", "Jednego i drugiego", "Jeszcze nie wiem"] },
        { _key: k("z"), question: "Czy strona już istnieje?", options: ["Tak i działa", "Tak, ale jest stara", "Nie, zaczynamy od zera", "Powstaje teraz"] },
      ],
    },
  ],
};
