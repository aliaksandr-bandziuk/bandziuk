// Landing page fixture: Ekspert AI SEO (PL), market version of
// ai-seo-consultant.en, nested under /pl/oferty.
// Semantic core: research/pseo/page-core/ai-search.md (PL): ai seo expert 10.
// Intent: research/pseo/intent-check-ai-services-2.md (EN pairs, borderline).
// Facts from /pl/o-mnie. orzel-realty is not shown.
import { p, h2, li, ol, link, k } from "./pt";

export const aiSeoConsultantPl = {
  lang: "pl",
  group: "ai-seo-consultant",
  slug: "ekspert-ai-seo",
  parentPath: ["oferty"],
  pageType: "service",
  title: "Ekspert AI SEO",
  heading: "Ekspert AI SEO: niezależny konsultant od widoczności w Google i odpowiedziach AI",
  excerpt:
    "Jestem niezależnym konsultantem AI SEO: pomagam firmom być widocznymi w Google i poprawnie wymienianymi w ChatGPT, Perplexity i podsumowaniach AI w Google — a analizę, poprawki i pomiar robię sam.",
  seo: {
    metaTitle: "Ekspert AI SEO — niezależny konsultant | Bandziuk",
    metaDescription:
      "Niezależny ekspert AI SEO: jedna osoba sprawdza widoczność w Google i odpowiedziach AI, poprawia stronę w kodzie i mierzy wynik. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Jedna osoba, bez przekazywania", "15 lat w wyszukiwaniu", "Bezpłatna rozmowa 15–30 min"],
  // Desktop hero shows the owner's portrait instead of the phone sketch (the
  // same transparent-background photo as on the About page).
  heroVisual: "photo",
  heroPhoto: { _type: "image", asset: { _type: "reference", _ref: "image-f672c00fe2c4d1b2e6dfd5f64d9b65c50f20a3d1-446x559-png" }, alt: "Aliaksandr Bandziuk, niezależny ekspert AI SEO" },
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt AI SEO wykonany przez niezależnego konsultanta", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Stałe doradztwo i wdrożenia AI SEO", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co otrzymujecie",
      title: "Co daje współpraca z ekspertem AI SEO",
      items: [
        { _key: k("o"), iconName: "users", title: "Jedna osoba od audytu do wyniku", text: "Bez opiekuna klienta i przekazywania między zespołami" },
        { _key: k("o"), iconName: "code", title: "Poprawki wprowadzane w kodzie", text: "A nie PDF z zaleceniami dla kogoś innego" },
        { _key: k("o"), iconName: "search", title: "Punkt wyjścia w odpowiedziach AI", text: "Stały zestaw pytań klientów, sprawdzony przed pracą" },
        { _key: k("o"), iconName: "languages", title: "Polski, angielski i rosyjski", text: "Dla firm, które sprzedają w kilku krajach" },
        { _key: k("o"), iconName: "file-text", title: "Metody oparte na własnym badaniu", text: "141 odpowiedzi AI przeanalizowanych i opublikowanych" },
        { _key: k("o"), iconName: "trending-up", title: "Raporty w zapytaniach od klientów", text: "Co zmieniło się w Google i w odpowiedziach AI, a co nie" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt AI SEO", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe doradztwo i praca nad AI SEO", value: "od 3500 zł / mies.", note: "Google + odpowiedzi AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: wyniki na stronach, nad którymi pracowałem",
      subtitle:
        "Biuro architektoniczne, którego ruch organiczny wzrósł 29 razy, agencja edukacyjna w dziesięciu krajach i lokalne firmy usługowe — każdą stronę sprawdziłem, poprawiłem i zmierzyłem sam.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Porozmawiaj z ekspertem AI SEO",
      subtitle: "Odpowiem w ciągu dnia roboczego. Pierwsza rozmowa (15–30 minut) jest bezpłatna: sprawdzimy sytuację i zdecydujemy, czy potrzebny jest audyt, projekt czy stała praca.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i umów rozmowę",
      note: "Albo napiszcie na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Kto zajmuje się teraz Waszym SEO?", options: ["Nikt", "Agencja", "Własny zespół", "Freelancer"] },
        { _key: k("z"), question: "Czego potrzebujecie najpierw?", options: ["Audytu", "Wdrożenia", "Drugiej opinii", "Nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Jestem niezależnym ekspertem AI SEO: pomagam firmom być widocznymi w Google i wymienianymi, z poprawnymi faktami, gdy klienci pytają ChatGPT, Perplexity, Gemini albo podsumowania AI w Google. Pracę wykonuję sam — analizę, zmiany na stronie i pomiar — więc osoba, z którą rozmawiacie, odpowiada za wynik."),

        h2("Czym zajmuje się ekspert AI SEO"),
        p("Ta praca ma cztery części i konsultant powinien umieć wykonać wszystkie, nie tylko pierwszą:"),
        li("zmierzyć punkt wyjścia: co Google i asystenci mówią o Was teraz, dla pytań, które naprawdę zadają klienci"),
        li("znaleźć przyczynę: niejasne fakty na stronie, nazwa mylona z inną firmą, źródła, którym asystent ufa, a które nic o Was nie mówią"),
        li("poprawić: podstrony, dane strukturalne, problemy techniczne, katalogi i wzmianki — w kodzie i na stronach, gdzie się znajdują"),
        li("zmierzyć ponownie tymi samymi pytaniami, żeby wynik był porównaniem, a nie zrzutem ekranu"),
        p(
          "Pełny zakres pracy opisuję na stronie ",
          link("usługi AI SEO", "/pl/oferty/uslugi-ai-seo"),
          ". Ta strona mówi o tym, kto ją wykonuje i jak wygląda współpraca.",
        ),

        h2("Konsultant AI SEO czy agencja: co zmienia się dla Was"),
        p("Agencja daje zespół: opiekuna klienta, specjalistę SEO, copywritera, czasem programistę — i przekazywanie zadań między nimi. Niezależny konsultant to jedna osoba. W praktyce zmienia to trzy rzeczy:"),
        li("tempo — poprawki trafiają na stronę w kilka dni, bo osoba, która znajduje problem, może zmienić kod"),
        li("kontekst — nic nie ginie między audytem, wdrożeniem i raportem"),
        li("cena — płacicie za pracę, a nie za strukturę wokół niej"),
        p("Ograniczenia też są realne: jedna osoba ma określoną liczbę godzin, a reklam płatnych i mediów społecznościowych nie prowadzę. Jeśli ich potrzebujecie, lepszym wyborem będzie agencja, a AI SEO można zrobić osobno."),

        h2("Doświadczenie eksperta AI SEO"),
        p("W wyszukiwaniu pracuję od 15 lat: najpierw jako copywriter, potem w SEO, a potem jako programista, bo audyty nie przynosiły efektu, kiedy nie było komu ich wdrożyć. Dziś buduję strony w Next.js, React, Sanity i WordPressie i prowadzę SEO dla firm w Europie, Wielkiej Brytanii, USA, na Cyprze i w Izraelu, po polsku, angielsku i rosyjsku."),
        p(
          "Wyszukiwanie AI mierzę, a nie zakładam: zadałem 47 pytań zakupowych ChatGPT, Perplexity i Google AI Mode i opublikowałem analizę wszystkich ",
          link("141 odpowiedzi", "/pl/blog/pozycjonowanie-w-ai-badanie"),
          ". Metody, których używam z klientami, opierają się na takich danych. Więcej o mnie na stronie ",
          link("o mnie", "/pl/o-mnie"),
          ".",
        ),

        h2("Jak wygląda współpraca z konsultantem AI SEO"),
        li("Bezpłatna rozmowa 15–30 minut — patrzymy na Waszą sytuację i ustalamy, co ma sens."),
        li("Audyt AI SEO — co pokazują o Was Google i asystenci AI, ze źródłami i priorytetami: od 1000 zł."),
        li("Projekt — przygotowanie strony do wyszukiwania AI, poprawa błędnych informacji, zestaw podstron: od 3500 zł."),
        li("Stała praca — Google i odpowiedzi AI razem, z raportami: od 3500 zł miesięcznie."),
        p("Jeśli macie już programistę albo marketingowca, mogę pracować z nimi: wprowadzam zmiany, które wymagają wiedzy SEO, a resztę zostawiam w formie jasnych instrukcji."),

        h2("Jak sprawdzić eksperta AI SEO przed zatrudnieniem"),
        p("Dziedzina jest nowa, a wiele ofert pod hasłem AI SEO to coś innego. Zanim zatrudnicie kogokolwiek, także mnie, poproście o:"),
        li("pomiar punktu wyjścia w odpowiedziach AI na stałym zestawie pytań, a nie kilka zrzutów ekranu"),
        li("wyjaśnienie, z jakich źródeł korzysta każdy asystent w Waszej branży i skąd to wiadomo"),
        li("listę tego, co konkretnie zostanie zmienione na stronie i poza nią, i kto to zrobi"),
        li("jasność co do tego, czego się nie obiecuje — nikt nie zagwarantuje miejsca w odpowiedziach ChatGPT"),

        h2("Ile kosztuje ekspert AI SEO"),
        p(
          "Audyt kosztuje od 1000 zł, praca projektowa od 3500 zł, stała praca od 3500 zł miesięcznie. Sam monitoring, jeśli chcecie tylko śledzić, co mówią asystenci, zaczyna się od 1000 zł miesięcznie. Pełne ceny są na stronie ",
          link("cennika", "/pl/cennik"),
          ".",
        ),

        h2("Jak wygląda pierwszy miesiąc pracy z ekspertem AI SEO"),
        ol("Tydzień 1. Ustalamy pytania, które zadają klienci, i rynki; sprawdzam punkt wyjścia w Google i u asystentów."),
        ol("Tydzień 2. Dostajecie wyniki: co się o Was mówi, na podstawie jakich źródeł i co poprawić najpierw."),
        ol("Tygodnie 3–4. Wchodzą pierwsze poprawki: fakty na kluczowych podstronach, dane strukturalne, najważniejsze katalogi."),
        ol("Kolejny miesiąc. Te same pytania sprawdzam ponownie, a plan dostosowuję do tego, co się zmieniło."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Ekspert AI SEO: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Czym zajmuje się ekspert AI SEO?", "Mierzy, jak firma wygląda w Google i w odpowiedziach AI, znajduje przyczyny — niejasne fakty, mylenie z inną firmą, brakujące źródła — poprawia je na stronie i poza nią i mierzy wynik tymi samymi pytaniami."],
          ["Czy niezależny konsultant AI SEO jest lepszy niż agencja?", "To zależy od potrzeb. Konsultant działa szybciej i trzyma cały obraz w jednej głowie; agencja ma więcej rąk i prowadzi też reklamy i media społecznościowe. W pracy nad wyszukiwaniem AI osoba, która mierzy, powinna być tą, która zmienia stronę."],
          ["Ile kosztuje ekspert AI SEO?", "Audyt od 1000 zł, praca projektowa od 3500 zł, stała praca od 3500 zł miesięcznie. Pierwsza rozmowa (15–30 minut) jest bezpłatna."],
          ["Czy możecie pracować z naszym programistą albo zespołem SEO?", "Tak. Wprowadzam zmiany, które wymagają wiedzy SEO, a Waszemu zespołowi zostawiam jasne instrukcje do reszty, żeby praca nie kończyła się na raporcie."],
          ["Czy gwarantujecie, że pojawimy się w ChatGPT?", "Nie. Nikt nie kontroluje odpowiedzi asystenta. Mogę sprawić, że fakty o Was będą jasne i spójne tam, gdzie szukają asystenci, i pokazać, jak często jesteście wymieniani przed i po."],
          ["Na jakich rynkach i w jakich językach pracujecie?", "Po polsku, angielsku i rosyjsku, dla firm w Polsce i innych krajach Europy, w Wielkiej Brytanii, USA, na Cyprze i w Izraelu. Każdy język i rynek ma własny zestaw pytań."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Umów rozmowę z ekspertem AI SEO: co mi przesłać"),
        p(
          "Prześlijcie nazwę firmy i stronę, rynki, na których sprzedajecie, oraz trzy–cztery pytania, które Wasi klienci zadaliby asystentowi. Odpowiem w ciągu dnia roboczego i zaproponuję termin bezpłatnej rozmowy. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
