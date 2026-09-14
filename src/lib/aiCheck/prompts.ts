import type { AiCheckInput, AiCheckLang, AiCheckQuestionKind } from "./types";

type Question = { kind: AiCheckQuestionKind; prompt: string };

/**
 * Three questions, each testing a different failure:
 * - knowledge: does the assistant know the company at all, and get it right
 * - recommendation: is the company named when a buyer asks who to hire
 * - reputation: what the assistant says when asked whether to trust it
 *
 * They are asked in the visitor's language, because an assistant answers a
 * Polish question from Polish sources and that is what a Polish buyer sees.
 */
export function buildQuestions(input: AiCheckInput): Question[] {
  const { company, domain, service, location, lang } = input;
  const where = location ? LOCATION_PHRASE[lang](location) : "";

  const byLang: Record<AiCheckLang, Question[]> = {
    en: [
      {
        kind: "knowledge",
        prompt: `What do you know about ${company} (${domain})? Describe what the company does, where it operates and how reputable it is.`,
      },
      {
        kind: "recommendation",
        prompt: `I am looking for a ${service}${where}. Which specific companies would you recommend, and why?`,
      },
      {
        kind: "reputation",
        prompt: `What do customers and reviews say about ${company} (${domain})? Is there any reason to be cautious about working with them?`,
      },
    ],
    pl: [
      {
        kind: "knowledge",
        prompt: `Co wiesz o firmie ${company} (${domain})? Opisz, czym się zajmuje, gdzie działa i jaką ma reputację.`,
      },
      {
        kind: "recommendation",
        prompt: `Szukam: ${service}${where}. Które konkretne firmy polecasz i dlaczego?`,
      },
      {
        kind: "reputation",
        prompt: `Co klienci i opinie mówią o firmie ${company} (${domain})? Czy jest powód, żeby zachować ostrożność przy współpracy z nimi?`,
      },
    ],
    ru: [
      {
        kind: "knowledge",
        prompt: `Что ты знаешь о компании ${company} (${domain})? Опиши, чем она занимается, где работает и какая у неё репутация.`,
      },
      {
        kind: "recommendation",
        prompt: `Мне нужен исполнитель: ${service}${where}. Какие конкретные компании ты порекомендуешь и почему?`,
      },
      {
        kind: "reputation",
        prompt: `Что клиенты и отзывы говорят о компании ${company} (${domain})? Есть ли причины быть осторожным при работе с ними?`,
      },
    ],
  };

  return byLang[lang];
}

const LOCATION_PHRASE: Record<AiCheckLang, (location: string) => string> = {
  en: (l) => ` in ${l}`,
  pl: (l) => `, lokalizacja: ${l}`,
  ru: (l) => `, регион: ${l}`,
};
