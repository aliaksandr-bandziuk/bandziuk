import React from "react";
import styles from "./PageSnippet.module.scss";
import GrowOnView from "./GrowOnView";
import { Brand } from "./brands";
import { SNIPPET_TEXTS, type SnippetKind } from "./texts";

type Props = { kind: SnippetKind | string; lang: string };

// A fragment of the work itself, placed inside a chapter of a long service
// text (contentBlock → pageSnippet, 2026-11). Mockups: cro-proto/text2.html
// and text3.html. Rules they follow: only facts the page text already states,
// no invented figures, real brand icons, motion only on the funnel bars.
// The words are per language in texts.ts; a language without them renders
// nothing rather than Polish on an English page.
const PageSnippet = ({ kind, lang }: Props) => {
  const t = SNIPPET_TEXTS[lang as keyof typeof SNIPPET_TEXTS];
  if (!t) return null;

  switch (kind) {
    case "funnel": {
      const f = t.funnel;
      return (
        <Frame title={f.title}>
          <div className={styles.body}>
            <GrowOnView className={styles.funnel} pendingClass={styles.growPending} shownClass={styles.growShown}>
              {f.rows.map((row, i) => (
                <React.Fragment key={row.label}>
                  {i === f.dropAfter + 1 && <p className={styles.drop}>{f.drop}</p>}
                  <div className={styles.frow} style={{ "--i": i } as React.CSSProperties}>
                    <span className={styles.frowLabel}>{row.label}</span>
                    <span className={styles.frowTrack}>
                      <span className={styles.frowBar} style={{ width: `${row.width}%` }} />
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </GrowOnView>
          </div>
        </Frame>
      );
    }

    case "auditReport": {
      const a = t.auditReport;
      return (
        <Frame title={a.title} tag={a.tag}>
          <div className={styles.audit}>
            <div className={`${styles.arow} ${styles.arowHead}`}>
              {a.head.map((h) => (
                <span key={h}>{h}</span>
              ))}
            </div>
            {a.rows.map((row, i) => (
              <div key={row.problem} className={styles.arow}>
                <div>
                  <b>{row.problem}</b>
                  {row.first && <em className={styles.first}>{a.first}</em>}
                  {i === a.shotRow && (
                    <div className={styles.miniShot}>
                      <span className={styles.miniField}>{a.shot.field1}</span>
                      <span className={`${styles.miniField} ${styles.miniFieldErr}`}>{a.shot.field2}</span>
                      <span className={styles.miniMsg}>{a.shot.message}</span>
                      <span className={styles.miniBtn} />
                    </div>
                  )}
                </div>
                <span className={styles.why}>{row.why}</span>
                <span className={row.effort === a.efforts[1] ? `${styles.effort} ${styles.effortMid}` : styles.effort}>
                  {row.effort}
                </span>
              </div>
            ))}
          </div>
        </Frame>
      );
    }

    case "codeDiff": {
      const c = t.codeDiff;
      return (
        <Frame title={c.title} tag={c.file} tagCode>
          <div className={styles.diff} role="img" aria-label={c.title}>
            {c.lines.map(([kindOfLine, code], i) => (
              <div
                key={i}
                className={
                  kindOfLine === "-" ? `${styles.dline} ${styles.dlineDel}` : kindOfLine === "+" ? `${styles.dline} ${styles.dlineAdd}` : styles.dline
                }
              >
                <i aria-hidden="true">{kindOfLine === "-" ? "−" : kindOfLine === "+" ? "+" : " "}</i>
                {code}
              </div>
            ))}
          </div>
        </Frame>
      );
    }

    case "localPhone": {
      const l = t.localPhone;
      return (
        <Frame title={l.title}>
          <div className={styles.duo} aria-hidden="true">
            <div className={styles.ph}>
              <div className={styles.phBar}>
                <span>9:41</span>
                <span>5G</span>
              </div>
              <div className={styles.phBrand}>
                <i />
                {l.brand}
              </div>
              <div className={styles.phImg}>
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className={styles.phTitle}>{l.heading}</div>
              <div className={styles.phText}>{l.text}</div>
              <div className={styles.phRow}>
                <span>{l.hoursLabel}</span>
                <span>{l.hours}</span>
              </div>
              <div className={styles.phDock}>
                <span className={styles.phCall}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                  {l.call}
                </span>
                <span>
                  <Brand name="whatsapp" color="#25D366" size={14} />
                  {l.whatsapp}
                </span>
                <span>
                  <Brand name="googleMaps" color="#ffffff" size={14} />
                  {l.route}
                </span>
              </div>
            </div>
            <div className={styles.duoRight}>
              <p className={styles.duoCap}>{l.caption}</p>
              <div className={styles.wa}>
                <div className={styles.waTop}>
                  <span className={styles.waAvatar}>{l.brand.charAt(0)}</span>
                  <div>
                    {l.brand}
                    <small>{l.account}</small>
                  </div>
                </div>
                <div className={styles.waChat}>
                  <span className={styles.waNote}>{l.ready}</span>
                </div>
                <div className={styles.waInput}>
                  <div className={styles.waField}>{l.message}</div>
                  <span className={styles.waSend}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                      <path d="M2 21 23 12 2 3v7l15 2-15 2z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Frame>
      );
    }

    case "checkout": {
      const k = t.checkout;
      return (
        <Frame title={k.title}>
          <div className={styles.co} aria-hidden="true">
            <div className={styles.coCol}>
              <p className={styles.coHead}>{k.delivery}</p>
              <div className={`${styles.opt} ${styles.optOn}`}>
                <i />
                <div>
                  {k.locker}
                  <small>{k.lockerWhere}</small>
                </div>
                <span className={styles.optMap}>{k.changeOnMap}</span>
              </div>
              <div className={styles.opt}>
                <i />
                <div>{k.courier}</div>
                <span />
              </div>
              <div className={styles.opt}>
                <i />
                <div>{k.pickup}</div>
                <span />
              </div>
              <div className={styles.invoice}>
                <div className={styles.invoiceRow}>
                  {k.invoice}
                  <span className={styles.switch} />
                </div>
                <span className={styles.invoiceField}>NIP</span>
              </div>
            </div>
            <div className={styles.coCol}>
              <p className={styles.coHead}>{k.payment}</p>
              <div className={`${styles.opt} ${styles.optOn}`}>
                <i />
                <div>
                  BLIK
                  <small>{k.blikNote}</small>
                </div>
                <span className={styles.blik}>blik</span>
              </div>
              <div className={styles.opt}>
                <i />
                <div>{k.transfer}</div>
                <span className={styles.p24}>Przelewy24</span>
              </div>
              <div className={styles.opt}>
                <i />
                <div>Apple Pay, Google Pay</div>
                <span className={styles.logos}>
                  <Brand name="applePay" color="#ffffff" size={30} />
                  <Brand name="googlePay" color="#ffffff" size={30} />
                </span>
              </div>
              <div className={styles.opt}>
                <i />
                <div>{k.card}</div>
                <span className={styles.logos}>
                  <Brand name="visa" color="#ffffff" size={22} />
                  <Brand name="mastercard" color="#ffffff" size={18} />
                </span>
              </div>
              <span className={styles.coButton}>{k.button}</span>
              <span className={styles.coNote}>{k.noAccount}</span>
            </div>
          </div>
        </Frame>
      );
    }

    case "formBeforeAfter": {
      const b = t.formBeforeAfter;
      return (
        <Frame title={b.title} tag={b.tag}>
          <div className={styles.forms} aria-hidden="true">
            <div className={`${styles.fcol} ${styles.fcolBefore}`}>
              <p className={styles.fcolHead}>
                {b.before}
                <b>{b.beforeCount}</b>
              </p>
              {b.beforeFields.map((f, i) => (
                <span key={f} className={i === b.beforeFields.length - 1 ? `${styles.field} ${styles.fieldTall}` : styles.field}>
                  {f}
                </span>
              ))}
              {b.consents.map((c, i) => (
                <span key={c} className={i < 2 ? `${styles.consent} ${styles.consentReq}` : styles.consent}>
                  <i />
                  {c}
                </span>
              ))}
              <span className={styles.legal}>{b.longClause}</span>
              <span className={`${styles.send} ${styles.sendBefore}`}>{b.sendBefore}</span>
            </div>
            <div className={`${styles.fcol} ${styles.fcolAfter}`}>
              <p className={styles.fcolHead}>
                {b.after}
                <b>{b.afterCount}</b>
              </p>
              {b.afterFields.map((f, i) => (
                <span key={f} className={i === b.afterFields.length - 1 ? `${styles.field} ${styles.fieldTall}` : styles.field}>
                  {f}
                </span>
              ))}
              <span className={`${styles.legal} ${styles.legalShort}`}>
                {b.shortClause} <u>{b.privacy}</u>.
              </span>
              <span className={`${styles.send} ${styles.sendAfter}`}>{b.sendAfter}</span>
            </div>
          </div>
        </Frame>
      );
    }

    case "ga4Events": {
      const g = t.ga4Events;
      return (
        <Frame title={g.title} icon={<Brand name="googleAnalytics" color="#E37400" size={18} />}>
          <div className={styles.body}>
            <div className={styles.events}>
              {g.events.map(([name, what]) => (
                <div key={name} className={styles.ev}>
                  <span className={styles.evName}>{name}</span>
                  <span className={styles.evWhat}>{what}</span>
                  <span className={styles.toggle} aria-label={g.keyEvent} />
                </div>
              ))}
            </div>
            <div className={styles.consentMode}>
              <span>{g.consentMode}</span>
              <b>{g.on}</b>
            </div>
          </div>
        </Frame>
      );
    }

    default:
      return null;
  }
};

function Frame({
  title,
  tag,
  tagCode,
  icon,
  children,
}: {
  title: string;
  tag?: string;
  tagCode?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <figure className={styles.snip} data-ui>
      <div className={styles.head}>
        <span className={styles.title}>
          {icon}
          {title}
        </span>
        {tag && <span className={tagCode ? styles.tagCode : styles.tag}>{tag}</span>}
      </div>
      {children}
    </figure>
  );
}

export default PageSnippet;
