// Landing page fixture: LLM SEO (PL), market version of llm-seo-services.en,
// nested under /pl/oferty.
// Demand: PL not measured separately for «llm seo» (EN term used in PL too);
// made on the owner's rule for AI topics and his instruction to translate.
// Facts: the owner's study (citations per answer by assistant).
import { p, h2, li, ol, link, k } from "./pt";

export const llmSeoServicesPl = {
  lang: "pl",
  group: "llm-seo-services",
  slug: "llm-seo",
  parentPath: ["oferty"],
  pageType: "service",
  title: "LLM SEO",
  heading: "LLM SEO: widoczność firmy w ChatGPT, Perplexity, Gemini i Claude",
  excerpt:
    "Świadczę usługi LLM SEO: pracę, dzięki której firma jest widoczna i poprawnie opisana w odpowiedziach dużych modeli językowych — ChatGPT, Perplexity, Gemini, Claude — z pomiarem osobno dla każdego, bo każdy czyta inne źródła.",
  seo: {
    metaTitle: "LLM SEO: widoczność w modelach AI | Bandziuk",
    metaDescription:
      "LLM SEO: żeby ChatGPT, Perplexity, Gemini i Claude wymieniały Waszą firmę. Dane treningowe i wyszukiwanie na żywo, roboty, źródła, pomiar. Od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["ChatGPT · Perplexity · Gemini · Claude", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Co modele wiedzą", "Co znajdują na żywo", "Poprawny opis", "Pomiar dla każdego modelu"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt widoczności w ChatGPT, Perplexity, Gemini i Claude", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Stałe LLM SEO: źródła, fakty na stronie, ustawienia robotów i monitoring każdego modelu", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co otrzymujecie",
      title: "Co obejmują usługi LLM SEO",
      items: [
        { _key: k("o"), iconName: "search", title: "Punkt wyjścia w każdym modelu", text: "Te same pytania klientów w ChatGPT, Perplexity, Gemini, Claude" },
        { _key: k("o"), iconName: "layers", title: "Źródła rozpisane na modele", text: "Każdy asystent czyta inną część sieci" },
        { _key: k("o"), iconName: "file-text", title: "Fakty odporne na streszczanie", text: "Proste zdania, które model powtórzy bez przekłamań" },
        { _key: k("o"), iconName: "target", title: "Jednoznaczna firma", text: "Nazwa, której żaden model nie pomyli z inną" },
        { _key: k("o"), iconName: "settings", title: "Roboty ustawione dla każdego dostawcy", text: "Wyszukiwanie dozwolone, trening — Wasza decyzja" },
        { _key: k("o"), iconName: "trending-up", title: "Pomiar co miesiąc dla każdego modelu", text: "Czy Was wymienia, jak i na podstawie czego" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt widoczności w modelach AI", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe LLM SEO", value: "od 3500 zł / mies.", note: "wszystkie główne modele", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: wyniki na stronach, które optymalizowałem",
      subtitle:
        "Te same strony mierzę teraz także u asystentów AI: biuro architektoniczne, którego ruch organiczny wzrósł 29 razy, agencja edukacyjna w dziesięciu krajach i lokalne firmy usługowe.",
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
      title: "Wycena usług LLM SEO",
      subtitle: "Odpowiem w ciągu dnia roboczego: co sprawdziłbym najpierw w każdym modelu i ile to kosztuje.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i otrzymaj wycenę",
      note: "Albo napiszcie na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Których asystentów używają Wasi klienci?", options: ["ChatGPT", "Perplexity", "Odpowiedzi AI w Google", "Nie wiem"] },
        { _key: k("z"), question: "Gdzie są Wasi klienci?", options: ["W jednym mieście", "W Polsce", "W kilku krajach"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Świadczę usługi LLM SEO: pracę, dzięki której firma jest widoczna i poprawnie opisana w odpowiedziach dużych modeli językowych — ChatGPT, Perplexity, Gemini, Claude i odpowiedzi AI w Google. LLM SEO to nie jedna optymalizacja dla wszystkich: każdy model wie co innego i czyta inne źródła, więc praca i pomiar są osobne dla każdego modelu."),

        h2("Czym jest LLM SEO: dane treningowe i wyszukiwanie na żywo"),
        p("Model językowy może wiedzieć o Waszej firmie na dwa sposoby:"),
        li("z danych treningowych — z tego, co opublikowano o Was przed trenowaniem modelu, często kilka miesięcy temu; to model „pamięta” bez wyszukiwania"),
        li("z wyszukiwania na żywo — z tego, co znajduje w sieci podczas odpowiedzi; to jest aktualne i tu pada większość odpowiedzi na pytania zakupowe"),
        p("LLM SEO obejmuje oba: spójny opis firmy w miejscach, które trafiają do danych treningowych, i to, żeby model mógł Was znaleźć i zacytować, gdy szuka dziś."),

        h2("Dlaczego ChatGPT, Perplexity, Gemini i Claude cytują różne źródła"),
        p(
          "W mojej ",
          link("analizie 141 odpowiedzi AI na pytania zakupowe", "/pl/blog/pozycjonowanie-w-ai-badanie"),
          " asystenci czytali prawie różne internety:",
        ),
        li("Perplexity cytował 16,7 źródła na odpowiedź, głównie strony samych firm — praca na Waszej stronie widać tam najszybciej"),
        li("Google AI Mode cytował 3,7 źródła na odpowiedź, wąski wybór bliski temu, co jest wysoko w Google"),
        li("ChatGPT cytował 1,6 źródła na odpowiedź i tylko około jednej strony firmy — praca, dzięki której Was wymieni, toczy się głównie poza stroną"),
        p(
          "Dlatego jeden pakiet „optymalizacji pod AI” uśrednia trzy różne problemy. LLM SEO ustala, które modele są ważne dla Waszych klientów, i pracuje nad każdym. Sam ChatGPT opisuję na stronie ",
          link("pozycjonowanie w ChatGPT", "/pl/oferty/pozycjonowanie-w-chatgpt"),
          ".",
        ),

        h2("Jednoznaczna firma: jedna nazwa i jeden opis wszędzie"),
        p("Model buduje odpowiedź, łącząc fakty z kilku źródeł. Jeśli Waszą nazwę nosi też inna firma albo opis różni się od strony do strony, model albo Was pomija, albo myli z kimś innym. W moim badaniu miało to większe znaczenie niż jakość strony. LLM SEO czyni firmę jednoznaczną: jedna nazwa, jeden opis tego, co robicie, dla kogo i gdzie — taki sam na stronie, w danych strukturalnych, w katalogach i w sieciach zawodowych."),

        h2("Treść odporna na streszczanie przez model"),
        p("Model nie cytuje Waszej strony, tylko ją streszcza. Hasła marketingowe znikają, zostaje to, co zapisano jako prosty fakt. Dlatego kluczowe podstrony podają fakty, które Was wyróżniają — usługi, rynki, klientów, ceny tam, gdzie się da — krótkimi zdaniami oznajmującymi, z jednym pytaniem na podstronę. Taki tekst przetrwa streszczenie i model może go powtórzyć bez przekłamań."),

        h2("Roboty AI i plik llms.txt"),
        p("Każdy dostawca ma własne roboty, a wiele stron blokuje je przypadkiem — przez wtyczkę bezpieczeństwa, regułę CDN albo skopiowany robots.txt. Sprawdzam, co naprawdę przepuszcza Wasz serwer, i ustawiam to dla każdego dostawcy:"),
        li("OpenAI: OAI-SearchBot dla wyszukiwania ChatGPT, GPTBot dla trenowania — można je ustawić osobno"),
        li("Perplexity, Anthropic (Claude) i inni mają własne roboty do wyszukiwania i trenowania"),
        li("Google-Extended decyduje, czy treść może służyć modelom Gemini; nie wpływa na wyszukiwarkę Google"),
        p("Plik llms.txt — krótkie podsumowanie strony w Markdownie dla modeli językowych — to proponowana konwencja. Żaden duży asystent nie potwierdził, że z niego korzysta, więc dodaję go jako tani dodatek, a nie strategię. Ta strona ma taki plik."),
        p(
          "Pełną część techniczną opisuję na stronie ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),

        h2("Jak mierzę widoczność w każdym modelu"),
        p("Odpowiedzi zmieniają się z każdym zapytaniem, więc pomiar to stały zestaw pytań Waszych klientów, sprawdzany według harmonogramu w każdym modelu i języku: czy jesteście wymieniani, jak Was opisano i jakie źródła stoją za odpowiedzią. Wynik widzicie osobno dla każdego modelu, bo poprawa w Perplexity nic nie mówi o ChatGPT."),
        p(
          "Punkt wyjścia to ",
          link("audyt widoczności w wyszukiwaniu AI", "/pl/oferty/audyt-widocznosci-w-ai"),
          "; Google i odpowiedzi AI razem obejmują ",
          link("usługi AI SEO", "/pl/oferty/uslugi-ai-seo"),
          ".",
        ),

        h2("Ile kosztują usługi LLM SEO"),
        li("Audyt widoczności w modelach AI — co mówią o Was ChatGPT, Perplexity, Gemini i Claude, na podstawie jakich źródeł: od 1000 zł, jednorazowo."),
        li("Stałe LLM SEO — źródła, jednoznaczność firmy, fakty na stronie, ustawienia robotów i monitoring każdego modelu: od 3500 zł miesięcznie."),
        p(
          "Sam monitoring zaczyna się od 1000 zł miesięcznie. Pełne ceny są na stronie ",
          link("cennika", "/pl/cennik"),
          ".",
        ),

        h2("Jak przebiega praca nad LLM SEO"),
        ol("Modele i pytania. Ustalamy, z których asystentów korzystają Wasi klienci i jakie pytania zadają."),
        ol("Punkt wyjścia. Sprawdzam pytania w każdym modelu i zapisuję, kto jest wymieniany, jak i na podstawie jakich źródeł."),
        ol("Praca. Jednoznaczność firmy, fakty na stronie, ustawienia robotów, katalogi i wzmianki poprawiam w kolejności od największego wpływu dla każdego modelu."),
        ol("Ponowny pomiar. Te same pytania sprawdzam co miesiąc, a raport pokazuje każdy model osobno."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "LLM SEO: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Czym jest LLM SEO?", "To praca, dzięki której firma jest widoczna i poprawnie opisana w odpowiedziach dużych modeli językowych, takich jak ChatGPT, Perplexity, Gemini i Claude — zarówno w tym, czego modele nauczyły się w treningu, jak i w tym, co znajdują w sieci podczas odpowiedzi."],
          ["Czy LLM SEO to to samo co GEO?", "W dużej mierze tak. GEO (generative engine optimization) to bardziej formalna nazwa tej samej dziedziny. LLM SEO kładzie akcent na same modele i na to, że każdy czyta inne źródła."],
          ["Czy możecie wprowadzić nas do danych treningowych modeli?", "Nie bezpośrednio — nikt tego nie może. Można za to opisać firmę spójnie w szeroko czytanych źródłach, co zwiększa szansę, że przyszłe modele nauczą się poprawnych faktów, i równolegle pracować nad odpowiedziami z wyszukiwania na żywo."],
          ["Czy potrzebujemy pliku llms.txt?", "Nie zaszkodzi i zajmuje godzinę, ale żaden duży asystent nie potwierdził, że z niego korzysta. Jasne fakty na podstronach, spójne wzmianki i otwarty dostęp dla robotów znaczą o wiele więcej."],
          ["Czy gwarantujecie, że asystenci AI nas wymienią?", "Nie. Nikt nie kontroluje odpowiedzi modeli. Mogę sprawić, że fakty o Was będą jasne i obecne tam, gdzie szuka każdy model, i zmierzyć, jak często jesteście wymieniani przed i po."],
          ["Ile kosztują usługi LLM SEO?", "Audyt od 1000 zł, stała praca od 3500 zł miesięcznie, sam monitoring od 1000 zł miesięcznie. Po krótkim opisie firmy podaję stałą cenę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów usługi LLM SEO: co mi przesłać"),
        p(
          "Prześlijcie nazwę firmy i stronę, rynki, na których sprzedajecie, asystentów, z których korzystają Wasi klienci, oraz trzy–cztery pytania, które by zadali. Odpowiem, co sprawdziłbym najpierw, i podam stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
