import React, { FC } from "react";
import Link from "next/link";
import styles from "./CaseStudy.module.scss";
import { CaseSection } from "@/types/homepage";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";
import ScrambleOnView from "../../animations/ScrambleOnView/ScrambleOnView";

type Props = {
  caseSection?: CaseSection;
};

/**
 * One full-cycle project: what the business started from, what was built and
 * what it brings now. Server-rendered; the fade-in and scrambling figures only
 * wrap markup rendered here.
 */
const CaseStudy: FC<Props> = ({ caseSection }) => {
  if (!caseSection?.title) return null;
  const { pretitle, title, lead, text, scopeLabel, scope, metrics, note, linkLabel, link } =
    caseSection;

  return (
    <section className={styles.caseSection} id="case-study">
      <div className="container">
        <div className={styles.heading}>
          <SectionHeading eyebrow={pretitle} title={title} />
        </div>

        <div className={styles.story}>
          <div className={styles.storyText}>
            {lead && <p className={styles.lead}>{lead}</p>}
            {text && <p className={styles.text}>{text}</p>}
          </div>
          {scope && scope.length > 0 && (
            <FadeInOnScroll>
              <div className={styles.scope}>
                {scopeLabel && <p className={styles.scopeLabel}>{scopeLabel}</p>}
                <ul className={styles.scopeList}>
                  {scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </FadeInOnScroll>
          )}
        </div>

        {metrics && metrics.length > 0 && (
          <ul className={styles.metrics}>
            {metrics.map((metric, index) => (
              <li key={metric._key} className={styles.metricCell}>
                <FadeInOnScroll index={index}>
                  <div className={styles.metric}>
                    <p className={styles.metricValue}>
                      <ScrambleOnView>{metric.value}</ScrambleOnView>
                    </p>
                    <p className={styles.metricLabel}>{metric.label}</p>
                  </div>
                </FadeInOnScroll>
              </li>
            ))}
          </ul>
        )}

        {(note || (link && linkLabel)) && (
          <div className={styles.footer}>
            {note && <p className={styles.note}>{note}</p>}
            {link && linkLabel && (
              <Link href={link} className={styles.link}>
                {linkLabel} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudy;
