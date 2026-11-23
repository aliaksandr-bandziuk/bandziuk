import React, { FC } from "react";
import Link from "next/link";
import styles from "./PricePickerBlock.module.scss";
import PickerShell from "./PickerShell";
import type { PricePickerBlock as PricePickerBlockType } from "@/types/blog";

type Props = { block: PricePickerBlockType };

const marginValues: Record<string, string> = {
  small: "clamp(0.9375rem, 3.75vw, 2.8125rem)",
  medium: "clamp(1.875rem, 0.75rem + 4.5vw, 4.125rem)",
  large: "clamp(1.875rem, 7.5vw, 5.625rem)",
};

// Server component. Every track, every option card and every «what moves it»
// line is printed into the HTML, so the full price list is readable by a
// crawler that does not run JavaScript — which is most of the AI crawlers.
// PickerShell, the only client code here, decides what is on screen and keeps
// the URL fragment in step; it never creates or removes content.
//
// The picker computes nothing. Each answer names the option ids it selects,
// and every figure was typed into the block by hand.
const PricePickerBlock: FC<Props> = ({ block }) => {
  const tracks = block.tracks ?? [];
  if (!tracks.length) return null;

  const href = block.ctaHref || "#quote";

  return (
    <section
      className={styles.picker}
      style={{
        marginTop: marginValues[block.marginTop ?? ""] ?? "0",
        marginBottom: marginValues[block.marginBottom ?? ""] ?? "0",
      }}
    >
      <div className="container">
        {block.eyebrow && <div className={styles.eyebrow}>{block.eyebrow}</div>}
        <h2 className={styles.title}>{block.title}</h2>
        {block.intro && <p className={styles.intro}>{block.intro}</p>}

        <PickerShell className={styles.shell}>
          <div className={styles.tabsWrap} data-tabs-wrap>
          <nav className={styles.tabs} role="tablist" aria-label={block.title} data-tabs>
            {tracks.map((t, i) => (
              <a
                key={t._key}
                href={`#${t.id}`}
                role="tab"
                id={`tab-${t.id}`}
                aria-controls={t.id}
                aria-selected={i === 0}
                className={styles.tab}
                data-tab={t.id}
                {...(i === 0 ? { "data-on": "" } : {})}
              >
                {t.label}
              </a>
            ))}
            <span className={styles.tabline} data-tabline aria-hidden="true" />
          </nav>
          </div>

          <div className={styles.panels}>
            {tracks.map((t, i) => (
              <div
                key={t._key}
                id={t.id}
                role="tabpanel"
                aria-labelledby={`tab-${t.id}`}
                className={styles.panel}
                data-panel={t.id}
                {...(i === 0 ? { "data-on": "" } : {})}
              >
                <h3 className={styles.panelTitle}>{t.heading}</h3>
                {t.lead && <p className={styles.panelLead}>{t.lead}</p>}

                <div className={styles.questions}>
                  {(t.questions ?? []).map((q) => (
                    <div key={q._key} className={styles.question} data-question-row={q.id}>
                      <span className={styles.qLabel} id={`pick-${t.id}-${q.id}`}>
                        {q.label}
                      </span>
                      <div
                        className={styles.choices}
                        role="group"
                        aria-labelledby={`pick-${t.id}-${q.id}`}
                        data-choices
                      >
                        {(q.choices ?? []).map((c, ci) => (
                          <button
                            key={c._key}
                            type="button"
                            className={styles.choice}
                            aria-pressed={ci === 0}
                            data-choice
                            data-track={t.id}
                            data-question={q.id}
                            data-index={ci}
                            data-picks={(c.picks ?? []).join(",")}
                            {...(ci === 0 ? { "data-on": "" } : {})}
                          >
                            {c.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.result}>
                  {(t.options ?? []).map((o) => (
                    <article key={o._key} className={styles.option} data-option={o.id}>
                      <div className={styles.optionTop}>
                        <div>
                          <div className={styles.optionName}>{o.name}</div>
                          <div className={styles.optionPrice}>{o.price}</div>
                        </div>
                        {o.term && <div className={styles.optionTerm}>{o.term}</div>}
                      </div>
                      <div className={styles.optionBody}>
                        <h4 className={styles.colTitle}>{block.coversLabel || "What that covers"}</h4>
                        <ul>
                          {(o.includes ?? []).map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}

                  <div className={styles.moves}>
                    <h4 className={styles.colTitle}>{block.movesLabel || "What moves it"}</h4>
                    <ul>
                      {(t.questions ?? []).flatMap((q) =>
                        (q.choices ?? [])
                          .map((c, ci) =>
                            c.push ? (
                              <li key={`${q.id}-${ci}`} data-push={`${q.id}:${ci}`}>
                                {c.push}
                              </li>
                            ) : null,
                          )
                          .filter(Boolean),
                      )}
                      {block.noPushText && <li data-nopush>{block.noPushText}</li>}
                    </ul>
                  </div>

                  {block.ctaLabel && (
                    <div className={styles.cta}>
                      <Link href={href} className={styles.button}>
                        {block.ctaLabel}
                      </Link>
                    </div>
                  )}
                  {block.disclaimer && <p className={styles.disclaimer}>{block.disclaimer}</p>}
                  {t.linkLabel && t.linkHref && (
                    <p className={styles.moreLink}>
                      <Link href={t.linkHref}>{t.linkLabel} →</Link>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </PickerShell>
      </div>
    </section>
  );
};

export default PricePickerBlock;
