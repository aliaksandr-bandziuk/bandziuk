import React, { FC } from "react";
import styles from "./WorkProcessBlockComponent.module.scss";
import { WorkProcessBlock as WorkProcessBlockType } from "@/types/blog";
import Image from "next/image";
import { Bitter } from "next/font/google";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

type Props = {
  block: WorkProcessBlockType;
  lang: string;
};

const marginValues: Record<string, string> = {
  small: "clamp(0.9375rem, 3.75vw, 2.8125rem)",
  medium: "clamp(1.875rem, 0.75rem + 4.5vw, 4.125rem)",
  large: "clamp(1.875rem, 7.5vw, 5.625rem)",
};

type Step = {
  title: string;
  description: string;
};

const stepsText: Record<string, Step[]> = {
  en: [
    {
      title: "Brief & Goals",
      description:
        "We clarify your business goal, the target audience, and what success should look like (leads, sales, visibility, speed, trust).",
    },
    {
      title: "Quick Audit",
      description:
        "I review your current situation: website, content, competitors, and analytics (if available). I identify what blocks growth and what can be improved first.",
    },
    {
      title: "Action Plan & Scope",
      description:
        "You get a clear plan: what I will do, in what order, what the deliverables are, and what timeline makes sense for your case.",
    },
    {
      title: "Implementation",
      description:
        "I execute the work step by step: structure, content improvements, technical changes, and everything needed to reach the goal — without unnecessary complexity.",
    },
    {
      title: "Review & Quality Check",
      description:
        "Before launch or delivery, I test and verify key points: usability, clarity, tracking, and technical correctness. You approve the final result.",
    },
    {
      title: "Launch & Next Steps",
      description:
        "We publish or deliver the final work and define what’s next: growth actions, maintenance, or the next iteration — depending on your priorities.",
    },
  ],

  pl: [
    {
      title: "Krótki brief i cel",
      description:
        "Ustalamy cel biznesowy, grupę docelową i jak mierzymy sukces (zapytania, sprzedaż, widoczność, szybkość, zaufanie).",
    },
    {
      title: "Szybka analiza sytuacji",
      description:
        "Sprawdzam aktualny stan: stronę, treści, konkurencję i analitykę (jeśli jest). Wskazuję, co blokuje wzrost i co warto zrobić najpierw.",
    },
    {
      title: "Plan działań i zakres",
      description:
        "Otrzymujesz konkretny plan: co zrobię, w jakiej kolejności, co dokładnie będzie dostarczone i jaki termin ma sens w Twoim przypadku.",
    },
    {
      title: "Realizacja",
      description:
        "Wdrażam prace krok po kroku: struktura, ulepszenia treści, elementy techniczne i wszystko, co jest potrzebne do osiągnięcia celu — bez zbędnego komplikowania.",
    },
    {
      title: "Weryfikacja jakości",
      description:
        "Przed publikacją lub przekazaniem sprawdzam kluczowe rzeczy: czytelność, wygodę użytkownika, pomiar wyników i poprawność techniczną. Akceptujesz finalny efekt.",
    },
    {
      title: "Publikacja i kolejne kroki",
      description:
        "Publikujemy lub przekazuję gotowy efekt i ustalamy, co dalej: rozwój, utrzymanie albo kolejny etap — zależnie od priorytetów.",
    },
  ],

  ru: [
    {
      title: "Короткий бриф и цель",
      description:
        "Уточняем бизнес-цель, аудиторию и критерии успеха (заявки, продажи, видимость, скорость, доверие).",
    },
    {
      title: "Быстрая диагностика",
      description:
        "Я смотрю текущую ситуацию: сайт, контент, конкурентов и аналитику (если она подключена). Понимаю, что тормозит рост и что даст результат быстрее всего.",
    },
    {
      title: "План работ и понятный объём",
      description:
        "Вы получаете чёткий план: что я сделаю, в какой последовательности, какой результат будет на выходе и какие сроки реалистичны именно для вашей задачи.",
    },
    {
      title: "Реализация",
      description:
        "Выполняю работу по шагам: структура, улучшения контента, технические правки и всё необходимое, чтобы прийти к цели — без лишней сложности и «магии».",
    },
    {
      title: "Проверка качества",
      description:
        "Перед публикацией или сдачей проекта проверяю ключевые вещи: удобство, понятность, корректность измерений и техническую часть. Вы утверждаете итог.",
    },
    {
      title: "Запуск и следующие шаги",
      description:
        "Публикуем результат или передаю готовую работу и фиксируем, что делаем дальше: рост, поддержка или следующий этап — в зависимости от приоритетов.",
    },
  ],
};

const WorkProcessBlockComponent: FC<Props> = ({ block, lang }) => {
  const { title, marginTop, marginBottom } = block;
  const texts = stepsText[lang] || stepsText.en;

  const computedMarginTop =
    marginTop && marginValues[marginTop] ? marginValues[marginTop] : "0";

  const computedMarginBottom =
    marginBottom && marginValues[marginBottom]
      ? marginValues[marginBottom]
      : "0";

  return (
    <section
      className={styles.howWeWorkBlock}
      style={{
        marginTop: computedMarginTop,
        marginBottom: computedMarginBottom,
      }}
    >
      <div className="container">
        <div className={styles.inner}>
          <h2 className="h2">{title}</h2>
          <div className={styles.steps}>
            {/* Timeline: line + dots */}
            <div className={styles.timelineDots} aria-hidden>
              {Array.from({ length: texts.length }).map((_, i) => (
                <span key={`dot-${i}`} className={styles.dot} />
              ))}
            </div>

            {/* Steps */}
            {texts.map((step, index) => {
              const isEven = (index + 1) % 2 === 0;

              return (
                <FadeInOnScroll index={index}>
                  <div
                    key={`step-${index}`}
                    className={`${styles.stepItem} ${isEven ? styles.isEven : ""}`}
                  >
                    <div className={styles.textBlock}>
                      <p className={styles.stepTitle}>{step.title}</p>
                      <p className={styles.stepDescription}>
                        {step.description}
                      </p>
                    </div>

                    <div className={styles.shape}>
                      <div className={styles.stepNumber}>
                        <p className={bitter.className}>{index + 1}</p>
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessBlockComponent;
