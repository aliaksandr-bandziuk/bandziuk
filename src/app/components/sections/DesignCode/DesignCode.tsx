import React, { FC } from "react";
import Link from "next/link";
import styles from "./DesignCode.module.scss";
import { DesignSection } from "@/types/homepage";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";
import ScrambleOnView from "../../animations/ScrambleOnView/ScrambleOnView";

type Props = {
  designSection?: DesignSection;
};

/**
 * Design and code as the means, enquiries as the end. Server-rendered; the
 * fade-in and the scrambling values only wrap markup rendered here.
 */
const DesignCode: FC<Props> = ({ designSection }) => {
  const cards = designSection?.cards?.filter((card) => card.title) ?? [];
  if (!designSection || cards.length === 0) return null;
  const { pretitle, title } = designSection;

  return (
    <section className={styles.designSection} id="design-and-code">
      <div className="container">
        <div className={styles.heading}>
          <SectionHeading eyebrow={pretitle} title={title} />
        </div>
        <ul className={styles.cards}>
          {cards.map((card, index) => (
            <li key={card._key} className={styles.cardCell}>
              <FadeInOnScroll index={index}>
                <div className={styles.card}>
                  {card.value && (
                    <p className={styles.value}>
                      <ScrambleOnView>{card.value}</ScrambleOnView>
                    </p>
                  )}
                  <h3 className={styles.title}>{card.title}</h3>
                  {card.text && <p className={styles.text}>{card.text}</p>}
                  {card.link && card.linkLabel && (
                    <Link href={card.link} className={styles.link}>
                      {card.linkLabel} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </FadeInOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DesignCode;
