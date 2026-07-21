import React, { FC } from "react";
import styles from "./FaqHomepage.module.scss";
import { FaqSection } from "@/types/homepage";
import AccordionContainer from "../../shared/AccordionContainer/AccordionContainer";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

type Props = {
  faqSection: FaqSection;
  // The singlepage route's own .sectionRhythm wrapper already owns vertical
  // rhythm — this component is also reused directly by the homepage (which
  // has no such wrapper and needs its own outer spacing), so the margin
  // stays the default and only the singlepage caller opts out of it.
  noOuterMargin?: boolean;
};

const FaqHomepage: FC<Props> = ({ faqSection, noOuterMargin }) => {
  const { title, pretitle, subtitle, faq } = faqSection;

  if (!faq) {
    return null;
  }

  return (
    <section
      className={[styles.faqSection, noOuterMargin ? styles.noOuterMargin : ""]
        .filter(Boolean)
        .join(" ")}
    >
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
