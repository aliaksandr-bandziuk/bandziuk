"use client";

import React, { FC, useEffect, useId, useRef, useState } from "react";
import styles from "./QuoteFormBlock.module.scss";
import QuoteForm, { QuoteFormProps } from "./QuoteForm";
import { trackEvent } from "@/utils/analytics";

export type QuizQuestion = { _key: string; question: string; options?: string[] };

type Props = Omit<QuoteFormProps, "variant" | "extraLines" | "onBack" | "backLabel"> & {
  variant: "short" | "quiz";
  questions?: QuizQuestion[];
};

const T: Record<string, { step: string; next: string; back: string; pick: string }> = {
  en: { step: "Step {n} of 2", next: "Next: how to reach you", back: "Back", pick: "Choose one answer in each question." },
  pl: { step: "Krok {n} z 2", next: "Dalej: jak się z Tobą skontaktować", back: "Wstecz", pick: "Wybierz po jednej odpowiedzi w każdym pytaniu." },
  ru: { step: "Шаг {n} из 2", next: "Дальше: как с вами связаться", back: "Назад", pick: "Выберите по одному ответу в каждом вопросе." },
};

// A/B test of the landing-page form (2026-10). "short": name, email, one
// context field. "quiz": two questions with tap-to-answer options first, then
// the same short form; the answers travel in the message. Every event carries
// `form_variant`, so GA4 can compare views → submissions per arm:
//   form_view            the form scrolled into view (once per page view)
//   form_step_complete   quiz step 1 answered
//   form_submission_success
const QuoteFormSwitch: FC<Props> = ({ variant, questions = [], ...formProps }) => {
  const { lang } = formProps;
  const t = T[lang] ?? T.en;
  const uid = useId();
  const box = useRef<HTMLDivElement>(null);
  const usable = questions.filter((q) => q.question && (q.options?.length ?? 0) > 1);
  const arm = variant === "quiz" && usable.length ? "quiz" : "short";
  const [step, setStep] = useState<1 | 2>(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        trackEvent("form_view", { placement: "quote_form_block", form_variant: arm, page_path: window.location.pathname });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [arm]);

  if (arm === "short") {
    return (
      <div ref={box}>
        <QuoteForm {...formProps} variant="short" />
      </div>
    );
  }

  if (step === 2) {
    return (
      <div ref={box}>
        <div className={styles.step}>{t.step.replace("{n}", "2")}</div>
        <QuoteForm
          {...formProps}
          variant="quiz"
          extraLines={usable.map((q) => `${q.question}: ${answers[q._key]}`)}
          onBack={() => setStep(1)}
          backLabel={t.back}
        />
      </div>
    );
  }

  const next = () => {
    if (usable.some((q) => !answers[q._key])) {
      setError(true);
      return;
    }
    setError(false);
    trackEvent("form_step_complete", { placement: "quote_form_block", form_variant: "quiz", page_path: window.location.pathname });
    setStep(2);
  };

  return (
    <div ref={box} className={styles.quiz}>
      <div className={styles.step}>{t.step.replace("{n}", "1")}</div>
      {usable.map((q) => (
        <fieldset key={q._key} className={styles.question}>
          <legend className={styles.legend}>{q.question}</legend>
          <div className={styles.options}>
            {q.options!.map((option, i) => {
              const id = `${uid}-${q._key}-${i}`;
              return (
                <span key={option}>
                  <input
                    type="radio"
                    id={id}
                    name={`${uid}-${q._key}`}
                    value={option}
                    checked={answers[q._key] === option}
                    onChange={() => setAnswers((a) => ({ ...a, [q._key]: option }))}
                    className={styles.optionInput}
                  />
                  <label htmlFor={id} className={styles.option}>
                    {option}
                  </label>
                </span>
              );
            })}
          </div>
        </fieldset>
      ))}
      {error && (
        <p className={styles.failed} role="alert">
          {t.pick}
        </p>
      )}
      <button type="button" className={styles.next} onClick={next}>
        {t.next}
      </button>
    </div>
  );
};

export default QuoteFormSwitch;
