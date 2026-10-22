import React, { FC } from "react";
import styles from "./QuoteFormBlock.module.scss";
import QuoteFormSwitch from "./QuoteFormSwitch";
import { QuoteFormBlock as QuoteFormBlockType } from "@/types/blog";

type Props = {
  block: QuoteFormBlockType;
  lang: string;
  /** Stable key of the page (its _id), for the 50/50 split of the A/B test. */
  pageKey: string;
};

// Deterministic 50/50 split by page: the same page always shows the same
// form, so it is cached as one static page and never flips for a visitor.
function armFor(pageKey: string): "short" | "quiz" {
  let h = 5381;
  for (let i = 0; i < pageKey.length; i++) h = ((h << 5) + h + pageKey.charCodeAt(i)) | 0;
  return Math.abs(h) % 2 === 0 ? "short" : "quiz";
}

// Short request form for landing pages (variant A, 2026-10): name, email and
// one line about the business, placed right after the portfolio so a visitor
// who has seen enough does not have to scroll to the end of the page. The H2
// and text render on the server; only the fields are a client component.
const QuoteFormBlock: FC<Props> = ({ block, lang, pageKey }) => {
  const formTexts = (block.form as any)?.form;
  if (!formTexts) return null;
  const variant = !block.formVariant || block.formVariant === "auto" ? armFor(pageKey) : block.formVariant;

  return (
    <section className={styles.quote} id="quote">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.intro}>
            <h2 className={styles.title}>{block.title}</h2>
            {block.subtitle && <p className={styles.subtitle}>{block.subtitle}</p>}
          </div>
          <QuoteFormSwitch
            variant={variant}
            questions={block.quizQuestions}
            lang={lang}
            texts={formTexts}
            contextLabel={block.contextLabel}
            contextPlaceholder={block.contextPlaceholder}
            buttonText={block.buttonText}
            note={block.note}
          />
        </div>
      </div>
    </section>
  );
};

export default QuoteFormBlock;
