import React, { FC } from "react";
import styles from "./FaqHomepage.module.scss";
import { FaqSection } from "@/types/homepage";
import AccordionContainer from "../../shared/AccordionContainer/AccordionContainer";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

type Props = {
  faqSection: FaqSection;
};

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
                <SectionHeading
                  eyebrow={pretitle}
                  title={title}
                  subtitle={subtitle}
                />
              </div>
            ))}
        </div>
        <div className={styles.faq}>
          <AccordionContainer block={faq} />
        </div>
      </div>
    </section>
  );
};

export default FaqHomepage;
