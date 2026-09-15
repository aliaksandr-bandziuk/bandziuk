import React, { FC } from "react";
import Link from "next/link";
import styles from "./Proof.module.scss";
import { ProofSection } from "@/types/homepage";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";
import ScrambleOnView from "../../animations/ScrambleOnView/ScrambleOnView";

type Props = {
  proofSection?: ProofSection;
};

/**
 * Evidence straight after the hero: the original AI-answers study, verified
 * directory profiles and short client quotes. Server-rendered; the client
 * pieces (fade-in, scrambling figures) only wrap markup rendered here.
 */
const Proof: FC<Props> = ({ proofSection }) => {
  if (!proofSection) return null;
  const { pretitle, title, study, profiles, quotes } = proofSection;

  const stats = study?.stats ?? [];
  // RU and PL write decimals with a comma ("16,7"); parseFloat alone reads 16.
  const numeric = (value: string) => parseFloat(value.replace(",", ".")) || 0;
  const max = Math.max(...stats.map((s) => numeric(s.value)), 0);

  return (
    <section className={styles.proof} aria-labelledby="proof-title">
      <div className="container">
        <div className={styles.heading} id="proof-title">
          <SectionHeading eyebrow={pretitle} title={title} />
        </div>

        {study && (
          <FadeInOnScroll>
            <div className={styles.study}>
              <div className={styles.studyText}>
                {study.kicker && <p className={styles.kicker}>{study.kicker}</p>}
                {study.title && <h3 className={styles.studyTitle}>{study.title}</h3>}
                {study.text && <p className={styles.studyDescription}>{study.text}</p>}
                {study.link && study.linkLabel && (
                  <Link href={study.link} className={styles.studyLink}>
                    {study.linkLabel} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>

              {stats.length > 0 && (
                <figure className={styles.chart} aria-label={study.chartLabel}>
                  <ul className={styles.bars}>
                    {stats.map((stat, i) => {
                      const share = max > 0 ? numeric(stat.value) / max : 0;
                      return (
                        <li key={stat._key} className={styles.barItem}>
                          {/* The track takes the free height; the bar is a
                              percentage of the track alone, so bars stay
                              proportional to their values. The figure sits
                              on top of its own bar. */}
                          <span className={styles.barTrack}>
                            <span
                              className={[styles.bar, i === 0 ? styles.barLead : ""].filter(Boolean).join(" ")}
                              // at least a sliver, so a small value is still visible
                              style={{ height: `${Math.max(share * 100, 3)}%` }}
                            >
                              <span className={styles.barValue}>
                                <ScrambleOnView>{stat.value}</ScrambleOnView>
                              </span>
                            </span>
                          </span>
                          <span className={styles.barLabel}>{stat.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </figure>
              )}
            </div>
          </FadeInOnScroll>
        )}

        {profiles && profiles.length > 0 && (
          <ul className={styles.profiles}>
            {profiles.map((profile) => (
              <li key={profile._key}>
                <a
                  href={profile.url}
                  className={styles.profile}
                  target="_blank"
                  // rel="me": these profiles belong to the same person as this
                  // site, the visible counterpart of sameAs in the schema.
                  rel="me noopener noreferrer"
                >
                  {profile.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {quotes && quotes.length > 0 && (
          <ul className={styles.quotes}>
            {quotes.map((quote, i) => (
              <li key={quote._key}>
                <FadeInOnScroll index={i}>
                  <figure className={styles.quote}>
                    <blockquote className={styles.quoteText}>
                      <p>“{quote.text}”</p>
                    </blockquote>
                    <figcaption className={styles.quoteAttribution}>
                      {quote.name && <span className={styles.quoteName}>{quote.name}</span>}
                      <span>{quote.attribution}</span>
                    </figcaption>
                  </figure>
                </FadeInOnScroll>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Proof;
