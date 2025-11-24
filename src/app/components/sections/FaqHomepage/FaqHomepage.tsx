import React, { FC } from "react";
import styles from "./FaqHomepage.module.scss";
import { FaqSection } from "@/types/homepage";
import { Bitter } from "next/font/google";
import AccordionContainer from "../../shared/AccordionContainer/AccordionContainer";

type Props = {
  faqSection: FaqSection;
};

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

const FaqHomepage: FC<Props> = ({ faqSection }) => {
  const { title, pretitle, subtitle, faq } = faqSection;

  if (!faq) {
    return null;
  }

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.content}>
          {pretitle ||
            subtitle ||
            (title && (
              <div className={styles.text}>
                <div className={styles.pretitle}>{pretitle}</div>
                <h2 className={styles.title}>{title}</h2>
                <p className={`${styles.subtitle} ${bitter.className}`}>
                  {subtitle}
                </p>
              </div>
            ))}
        </div>
        <div className={styles.faq}>
          <div className={styles.bgCenter}></div>
          <AccordionContainer block={faq} />
        </div>
      </div>
    </section>
  );
};

export default FaqHomepage;
