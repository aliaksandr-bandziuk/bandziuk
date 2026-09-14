import type { AiCheckLang } from "@/lib/aiCheck/types";

export type CheckerCopy = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
  facts: string[];
  form: {
    company: string;
    website: string;
    service: string;
    servicePlaceholder: string;
    location: string;
    locationPlaceholder: string;
    email: string;
    consentBefore: string;
    consentLink: string;
    consentAfter: string;
    submit: string;
    running: string;
    unavailable: string;
  };
  errors: Record<"invalid" | "daily_limit" | "personal_limit" | "unavailable" | "engines_failed" | "network", string>;
  report: {
    heading: (company: string) => string;
    of: (x: number, y: number) => string;
    statRecommended: string;
    statRecognised: string;
    statCited: string;
    verdictNone: string;
    verdictSome: (x: number, y: number) => string;
    kinds: Record<"knowledge" | "recommendation" | "reputation", string>;
    named: string;
    notNamed: string;
    siteCited: string;
    noInfo: string;
    failed: string;
    question: string;
    sources: string;
    ctaText: string;
    ctaPrimary: string;
    ctaSecondary: string;
    again: string;
  };
  limits: { title: string; paragraphs: string[]; studyBefore: string; studyLink: string; studyAfter: string };
  links: { privacy: string; audit: string; fix: string; study: string };
};

export const CHECKER_COPY: Record<AiCheckLang, CheckerCopy> = {
  en: {
    meta: {
      title: "Free AI Visibility Checker: What ChatGPT Says About Your Company",
      description:
        "Ask ChatGPT and Perplexity what they know about your company, whether they recommend you and whether they cite your website. Free, about a minute, live web search.",
    },
    eyebrow: "Free tool",
    title: "What do AI assistants say about your company?",
    lead:
      "Enter your company and what you sell. The checker asks ChatGPT and Perplexity three questions a buyer would ask, then shows what each of them answered: whether they know you, whether they recommend you, and whether they cite your website.",
    facts: ["Free, no account needed", "About a minute", "ChatGPT and Perplexity with live web search"],
    form: {
      company: "Company name",
      website: "Website",
      service: "What you sell",
      servicePlaceholder: "e.g. dental clinic, web design agency",
      location: "City or country (optional)",
      locationPlaceholder: "e.g. Warsaw",
      email: "Email",
      consentBefore: "I agree to the ",
      consentLink: "Privacy Policy",
      consentAfter: " and to being contacted about the results.",
      submit: "Run the check",
      running: "Asking ChatGPT and Perplexity. This takes up to a minute.",
      unavailable: "The checker is being prepared and will open soon.",
    },
    errors: {
      invalid: "Please fill in the company name, website, what you sell and a valid email, and accept the Privacy Policy.",
      daily_limit: "Today's free checks have run out. Please try again tomorrow.",
      personal_limit: "You have already used the free checks available for today.",
      unavailable: "The checker is temporarily unavailable.",
      engines_failed: "The assistants did not respond this time. Please try again in a few minutes.",
      network: "Something went wrong. Please try again.",
    },
    report: {
      heading: (c) => `What assistants said about ${c}`,
      of: (x, y) => `${x} of ${y}`,
      statRecommended: "Named when a buyer asks who to hire",
      statRecognised: "Recognised when asked about the company",
      statCited: "Answers citing your website",
      verdictNone:
        "Neither assistant named you when asked who to hire. It is the most common result, and the most expensive one: that answer goes to a competitor.",
      verdictSome: (x, y) => `You were named in ${x} of ${y} answers to the question of who to hire.`,
      kinds: {
        knowledge: "Asked what it knows about you",
        recommendation: "Asked who to hire",
        reputation: "Asked whether you can be trusted",
      },
      named: "Named",
      notNamed: "Not named",
      siteCited: "Your site cited",
      noInfo: "Found no information",
      failed: "No answer this time",
      question: "Question asked",
      sources: "Sources",
      ctaText:
        "One run is a snapshot, not a verdict. A full audit asks dozens of questions across engines and markets, finds where the wrong or missing information comes from, and tells you what to fix first.",
      ctaPrimary: "See the AI visibility audit",
      ctaSecondary: "Fix wrong information",
      again: "Check another company",
    },
    limits: {
      title: "What this check shows, and what it does not",
      paragraphs: [
        "It shows what two assistants answered today to three specific questions, with live web search switched on. That is close to what a buyer asking the same thing would see.",
        "It is a single snapshot. Assistants answer differently between runs, languages and accounts, so one result proves nothing on its own. The models reached through the API are close to the consumer apps, but not identical to them.",
      ],
      studyBefore: "The engines also read very different parts of the web: across 141 measured answers, Perplexity cited 16.7 sources per answer and ChatGPT 1.6. That is why one of them can know you while the other does not. ",
      studyLink: "The full study is here",
      studyAfter: ".",
    },
    links: {
      privacy: "/privacy-policy",
      audit: "/services/ai-visibility-audit",
      fix: "/services/fix-ai-misinformation",
      study: "/blog/ai-assistant-recommendations-study",
    },
  },

  pl: {
    meta: {
      title: "Darmowy test widoczności w AI: co ChatGPT mówi o Twojej firmie",
      description:
        "Sprawdź, co ChatGPT i Perplexity wiedzą o Twojej firmie, czy Cię polecają i czy cytują Twoją stronę. Za darmo, około minuty, na żywo z wyszukiwaniem w sieci.",
    },
    eyebrow: "Darmowe narzędzie",
    title: "Co asystenci AI mówią o Twojej firmie?",
    lead:
      "Wpisz nazwę firmy i to, co sprzedajesz. Narzędzie zada ChatGPT i Perplexity trzy pytania, jakie zadałby klient, i pokaże, co odpowiedział każdy z nich: czy Cię znają, czy Cię polecają i czy cytują Twoją stronę.",
    facts: ["Za darmo, bez zakładania konta", "Około minuty", "ChatGPT i Perplexity z wyszukiwaniem na żywo"],
    form: {
      company: "Nazwa firmy",
      website: "Strona internetowa",
      service: "Co sprzedajesz",
      servicePlaceholder: "np. klinika stomatologiczna, agencja stron www",
      location: "Miasto lub kraj (opcjonalnie)",
      locationPlaceholder: "np. Warszawa",
      email: "E-mail",
      consentBefore: "Akceptuję ",
      consentLink: "Politykę prywatności",
      consentAfter: " i zgadzam się na kontakt w sprawie wyników.",
      submit: "Uruchom test",
      running: "Pytamy ChatGPT i Perplexity. To potrwa do minuty.",
      unavailable: "Narzędzie jest w przygotowaniu i wkrótce zostanie uruchomione.",
    },
    errors: {
      invalid: "Uzupełnij nazwę firmy, stronę, to, co sprzedajesz, i poprawny e-mail oraz zaakceptuj Politykę prywatności.",
      daily_limit: "Dzisiejsza pula darmowych testów się wyczerpała. Spróbuj jutro.",
      personal_limit: "Darmowe testy dostępne na dziś zostały już wykorzystane.",
      unavailable: "Narzędzie jest chwilowo niedostępne.",
      engines_failed: "Asystenci tym razem nie odpowiedzieli. Spróbuj ponownie za kilka minut.",
      network: "Coś poszło nie tak. Spróbuj ponownie.",
    },
    report: {
      heading: (c) => `Co asystenci powiedzieli o firmie ${c}`,
      of: (x, y) => `${x} z ${y}`,
      statRecommended: "Wymienieni, gdy klient pyta, kogo wybrać",
      statRecognised: "Rozpoznani, gdy pytanie dotyczy firmy",
      statCited: "Odpowiedzi cytujące Twoją stronę",
      verdictNone:
        "Żaden z asystentów nie wymienił Cię w odpowiedzi na pytanie, kogo wybrać. To najczęstszy wynik i najdroższy: ta odpowiedź trafia do konkurencji.",
      verdictSome: (x, y) => `Twoja firma pojawiła się w ${x} z ${y} odpowiedzi na pytanie, kogo wybrać.`,
      kinds: {
        knowledge: "Pytanie, co wie o Twojej firmie",
        recommendation: "Pytanie, kogo wybrać",
        reputation: "Pytanie, czy można Ci zaufać",
      },
      named: "Wymieniono",
      notNamed: "Nie wymieniono",
      siteCited: "Cytuje Twoją stronę",
      noInfo: "Nie znalazł informacji",
      failed: "Brak odpowiedzi",
      question: "Zadane pytanie",
      sources: "Źródła",
      ctaText:
        "Jeden test to migawka, a nie diagnoza. Pełny audyt zadaje dziesiątki pytań w różnych asystentach i na różnych rynkach, znajduje źródło błędnych lub brakujących informacji i wskazuje, co naprawić najpierw.",
      ctaPrimary: "Zobacz audyt widoczności w AI",
      ctaSecondary: "Popraw błędne informacje",
      again: "Sprawdź inną firmę",
    },
    limits: {
      title: "Co ten test pokazuje, a czego nie",
      paragraphs: [
        "Pokazuje, co dwaj asystenci odpowiedzieli dziś na trzy konkretne pytania z włączonym wyszukiwaniem w sieci. To bliskie temu, co zobaczyłby klient zadający to samo pytanie.",
        "To pojedyncza migawka. Asystenci odpowiadają różnie w zależności od próby, języka i konta, więc jeden wynik sam w sobie niczego nie dowodzi. Modele dostępne przez API są zbliżone do aplikacji konsumenckich, ale nie identyczne.",
      ],
      studyBefore: "Asystenci czytają też bardzo różne części internetu: w 141 zmierzonych odpowiedziach Perplexity cytowało 16,7 źródła na odpowiedź, a ChatGPT 1,6. Dlatego jeden może Cię znać, a drugi nie. ",
      studyLink: "Pełne badanie jest tutaj",
      studyAfter: ".",
    },
    links: {
      privacy: "/pl/polityka-prywatnosci",
      audit: "/pl/oferty/audyt-widocznosci-w-ai",
      fix: "/pl/oferty/poprawa-blednych-danych-w-ai",
      study: "/pl/blog/pozycjonowanie-w-ai-badanie",
    },
  },

  ru: {
    meta: {
      title: "Бесплатная проверка: что ChatGPT говорит о вашей компании",
      description:
        "Узнайте, что ChatGPT и Perplexity знают о вашей компании, рекомендуют ли вас и ссылаются ли на ваш сайт. Бесплатно, около минуты, с живым поиском в интернете.",
    },
    eyebrow: "Бесплатный инструмент",
    title: "Что ИИ-ассистенты говорят о вашей компании?",
    lead:
      "Укажите компанию и то, что вы продаёте. Инструмент задаст ChatGPT и Perplexity три вопроса, которые задал бы покупатель, и покажет, что ответил каждый: знают ли они вас, рекомендуют ли и ссылаются ли на ваш сайт.",
    facts: ["Бесплатно, без регистрации", "Около минуты", "ChatGPT и Perplexity с живым поиском"],
    form: {
      company: "Название компании",
      website: "Сайт",
      service: "Что вы продаёте",
      servicePlaceholder: "например, стоматология, веб-студия",
      location: "Город или страна (необязательно)",
      locationPlaceholder: "например, Лимассол",
      email: "Email",
      consentBefore: "Соглашаюсь с ",
      consentLink: "Политикой конфиденциальности",
      consentAfter: " и на связь по результатам проверки.",
      submit: "Запустить проверку",
      running: "Спрашиваем ChatGPT и Perplexity. Это займёт до минуты.",
      unavailable: "Инструмент готовится к запуску и скоро откроется.",
    },
    errors: {
      invalid: "Заполните название компании, сайт, что вы продаёте и корректный email, и примите Политику конфиденциальности.",
      daily_limit: "Бесплатные проверки на сегодня закончились. Попробуйте завтра.",
      personal_limit: "Бесплатные проверки, доступные на сегодня, уже использованы.",
      unavailable: "Инструмент временно недоступен.",
      engines_failed: "Ассистенты в этот раз не ответили. Попробуйте ещё раз через несколько минут.",
      network: "Что-то пошло не так. Попробуйте ещё раз.",
    },
    report: {
      heading: (c) => `Что ассистенты сказали о ${c}`,
      of: (x, y) => `${x} из ${y}`,
      statRecommended: "Назвали, когда покупатель спросил, кого выбрать",
      statRecognised: "Узнали, когда спросили о компании",
      statCited: "Ответы со ссылкой на ваш сайт",
      verdictNone:
        "Ни один ассистент не назвал вас в ответе на вопрос, кого выбрать. Это самый частый результат и самый дорогой: этот ответ достаётся конкуренту.",
      verdictSome: (x, y) => `Вас назвали в ${x} из ${y} ответов на вопрос, кого выбрать.`,
      kinds: {
        knowledge: "Спросили, что он знает о вас",
        recommendation: "Спросили, кого выбрать",
        reputation: "Спросили, можно ли вам доверять",
      },
      named: "Назвал",
      notNamed: "Не назвал",
      siteCited: "Ссылается на ваш сайт",
      noInfo: "Не нашёл информации",
      failed: "Нет ответа",
      question: "Заданный вопрос",
      sources: "Источники",
      ctaText:
        "Одна проверка это снимок, а не диагноз. Полный аудит задаёт десятки вопросов разным ассистентам на разных рынках, находит, откуда берутся неверные или отсутствующие сведения, и показывает, что исправлять в первую очередь.",
      ctaPrimary: "Аудит видимости в ИИ-поиске",
      ctaSecondary: "Исправить неверные данные",
      again: "Проверить другую компанию",
    },
    limits: {
      title: "Что показывает эта проверка и чего не показывает",
      paragraphs: [
        "Она показывает, что два ассистента ответили сегодня на три конкретных вопроса с включённым поиском в интернете. Это близко к тому, что увидит покупатель, задав тот же вопрос.",
        "Это один снимок. Ассистенты отвечают по-разному от запуска к запуску, на разных языках и в разных аккаунтах, поэтому один результат сам по себе ничего не доказывает. Модели, доступные через API, близки к потребительским приложениям, но не идентичны им.",
      ],
      studyBefore: "Ассистенты ещё и читают очень разные части интернета: в 141 измеренном ответе Perplexity ссылался на 16,7 источника на ответ, а ChatGPT на 1,6. Поэтому один из них может знать вас, а другой нет. ",
      studyLink: "Полное исследование здесь",
      studyAfter: ".",
    },
    links: {
      privacy: "/ru/politika-konfidencialnosti",
      audit: "/ru/uslugi/audit-vidimosti-v-ii-poiske",
      fix: "/ru/uslugi/ispravlenie-nevernyh-dannyh-v-ii",
      study: "/ru/blog/issledovanie-otvetov-ii-assistentov",
    },
  },
};
