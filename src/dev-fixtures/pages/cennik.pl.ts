// Page rebuild: /pl/cennik (PL). Same redesign as pages/pricing.en.ts —
// price cards and comparison tables instead of stacks of label-and-bullet
// pairs — with the Polish figures and the two tables this page already had
// and the English one did not.
//
// Figures unchanged, exactly as they stand on the page today: audyt od 1000
// zł, jednorazowe prace 1000-3000 zł, stała praca od 3500 zł/mies., branże
// konkurencyjne od 5500 zł/mies., pełne prowadzenie 13 000 zł/mies., strona
// firmowa i sprzedażowa od 8500 zł, redesign od 4500 zł, landing 3000-6000
// zł, landing konwersyjny od 8500 zł.
//
// The page was the worst of the three: 13 H2 and 22 H3, four of the H2 being
// call-to-action blocks that cut the outline into pieces. It is also crawled
// but not indexed in Search Console.
import { p, h2, h3, li, link, k } from "../pt";

export const cennikPl = {
  lang: "pl",
  slug: "cennik",
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "SEO",
      title: "Cennik SEO: ile kosztuje pozycjonowanie",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt przed wszystkim innym", text: "Co jest zepsute, co jest do zdobycia i w jakiej kolejności" },
        { _key: k("o"), iconName: "settings", title: "Optymalizacja techniczna", text: "Szybkość, błędy, indeksowanie i dane strukturalne" },
        { _key: k("o"), iconName: "target", title: "Frazy powiązane z zapytaniami", text: "Słowa, których klienci używają, zanim się odezwą" },
        { _key: k("o"), iconName: "layers", title: "Struktura i treści", text: "Podstrona na usługę, napisana tak, jak pytają klienci" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i odpowiedziach AI", text: "Fakty, które asystent może zacytować, w każdym języku" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w zapytaniach, nie w pozycjach", text: "Liczony w GA4, z komentarzem, co zmienić w kolejnym miesiącu" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "SEO dla firm usługowych", value: "od 3500 zł", note: "miesięcznie, minimum 3–6 mies.", highlight: true },
        { _key: k("r"), label: "SEO w branżach konkurencyjnych", value: "od 5500 zł", note: "miesięcznie, minimum 6 mies." },
        { _key: k("r"), label: "Pełne prowadzenie projektu", value: "13 000 zł", note: "miesięcznie, jeden specjalista" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Cennik SEO: za co płacisz na każdym poziomie"),
        p("SEO jest procesem, a nie zakupem, więc kwoty poniżej są miesięczne wszędzie tam, gdzie nie napisano inaczej. Poziomy różni nie długość umowy, tylko ilość pracy, której wymaga rynek przed Wami."),
        p("W większości przypadków zaczyna się od audytu. Kosztuje od 1000 zł, odpowiada na pytanie, co w Waszym przypadku jest w ogóle do ruszenia, i jest skończonym produktem — kilku klientów wdrożyło go samodzielnie, bez zatrudniania nikogo."),
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
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Strony internetowe",
      title: "Cennik stron internetowych: ile kosztuje strona",
      items: [
        { _key: k("o"), iconName: "palette", title: "Projekt w cenie budowy", text: "Bez osobnej faktury za projekt, bo buduję to, co rysuję" },
        { _key: k("o"), iconName: "code", title: "Własny kod, bez kreatora", text: "Next.js, więc strona jest szybka na telefonie i da się ją rozwijać" },
        { _key: k("o"), iconName: "search", title: "SEO w strukturze, nie doklejone", text: "Podstrona na usługę, czyste adresy, dane strukturalne od początku" },
        { _key: k("o"), iconName: "languages", title: "Wersje językowe tam, gdzie jest popyt", text: "Osobne wersje, mierzone osobno" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla asystentów AI", text: "Usługi, obszar i ceny podane tak, żeby dało się je zacytować" },
        { _key: k("o"), iconName: "smartphone", title: "Sprawdzana tam, gdzie jest ruch", text: "Core Web Vitals na prawdziwych urządzeniach, nie raz na starcie" },
      ],
      prices: [
        { _key: k("r"), label: "Strona firmowa", value: "od 8500 zł", note: "2–4 tygodnie", highlight: true },
        { _key: k("r"), label: "Strona sprzedażowa", value: "od 8500 zł", note: "3–6 tygodni" },
        { _key: k("r"), label: "Redesign strony", value: "od 4500 zł", note: "z zachowaniem pozycji" },
        { _key: k("r"), label: "Landing page", value: "3000–6000 zł", note: "1–3 tygodnie" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Cennik stron internetowych: co zmienia kwotę"),
        p("Cena strony zależy znacznie mniej od tego, jak wygląda, niż od tego, co ma robić. Ten sam projekt kosztuje tyle samo przy czterech podstronach i przy czterdziestu; praca jest w strukturze pod spodem, w integracjach i w treści."),
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
      content: [
        h2("Co wpływa na cenę SEO i strony internetowej"),
        p("Każda wycena powstaje z tych samych kilku pytań, a na większość z nich odpowiecie sami, zanim porozmawiamy. Każde z nich przesuwa kwotę w sposób, który widać:"),
      ],
    },
    { _type: "keepExisting", block: "serviceFeaturesBlock", set: { title: "" } },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h3("Czy audyt SEO ma sens w Waszym przypadku"),
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
      content: [
        p(
          "Jeśli nie chcecie zgadywać, który z tych punktów dotyczy Was, ",
          link("bezpłatna konsultacja", "/pl/kontakt"),
          " trwa piętnaście do trzydziestu minut i kończy się konkretną odpowiedzią — łącznie z odpowiedzią, że wystarczy audyt, a abonament nie jest uzasadniony.",
        ),
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
