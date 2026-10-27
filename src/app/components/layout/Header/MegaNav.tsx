// MegaNav — the header menu, rendered on the server.
//
// Every link of the menu is in the server HTML: crawlers and AI assistants that
// do not run JavaScript see all of them, and none of them travels as a prop of a
// client component. Opening is CSS on a pointer device (:hover, :focus-within);
// clicks, the burger, Escape and the mobile accordions are handled by
// NavController, a small client script with no children that only toggles
// data-open attributes on this markup.
//
// One DOM for both layouts: above 1024px the panels are full-width mega menus
// under the header; below it the same items become a slide-in panel with
// accordions, so no link is rendered twice.

import type React from "react";
import Link from "next/link";
import styles from "./MegaNav.module.scss";
import { MegaColumn, MegaItem, MegaLink } from "@/types/header";
import { ModalButton } from "../../ui/Button/ModalButton";

type Props = {
  items: MegaItem[];
  /** The language switcher, shown at the top of the mobile panel only (on a
   *  desktop the header row carries its own). */
  localeSlot?: React.ReactNode;
  buttonLabel?: string;
  phone?: string;
  whatsappNumber?: string;
  lang: string;
};

const MENU_LABEL: Record<string, string> = { en: "Main navigation", pl: "Nawigacja główna", ru: "Основная навигация" };

function Icon({ name }: { name?: string }) {
  const p = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "ai": return <svg {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>;
    case "seo": return <svg {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
    case "web": return <svg {...p}><path d="m8 7-5 5 5 5M16 7l5 5-5 5" /></svg>;
    case "tech": return <svg {...p}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></svg>;
    case "globe": return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></svg>;
    case "pin": return <svg {...p}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>;
    case "med": return <svg {...p}><path d="M12 5v14M5 12h14" /></svg>;
    case "law": return <svg {...p}><path d="M12 3v18M5 7h14M5 7l-3 6a3 3 0 0 0 6 0L5 7ZM19 7l-3 6a3 3 0 0 0 6 0l-3-6ZM8 21h8" /></svg>;
    case "hotel": return <svg {...p}><path d="M3 19V7M3 13h18v6M21 13a3 3 0 0 0-3-3h-7v3M7 11.5h.01" /></svg>;
    case "build": return <svg {...p}><path d="M3 21h18M5 21V10l7-5 7 5v11M10 21v-6h4v6" /></svg>;
    case "biz": return <svg {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></svg>;
    case "art": return <svg {...p}><path d="M12 3 14.5 9.5 21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" /></svg>;
    default: return null;
  }
}

const Caret = () => (
  <svg className={styles.caret} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

function LinkRow({ l }: { l: MegaLink }) {
  return (
    <li className={styles.row}>
      <Link href={l.link} className={styles.rowLink} data-nav-close>
        {l.label}
      </Link>
      {l.extraLabel && l.extraLink && (
        <Link href={l.extraLink} className={styles.tag} data-nav-close>
          {l.extraLabel}
        </Link>
      )}
    </li>
  );
}

function Column({ col, id }: { col: MegaColumn; id: string }) {
  return (
    <div className={styles.column} data-acc>
      <button type="button" className={styles.columnTitle} data-acc-trigger aria-expanded="false" aria-controls={id}>
        {col.icon && (
          <span className={styles.columnIcon}>
            <Icon name={col.icon} />
          </span>
        )}
        <span>{col.title}</span>
        <Caret />
      </button>
      {/* One child inside the body: the 0fr → 1fr fold animates a single row. */}
      <div className={styles.columnBody} id={id}>
        <div className={styles.fold}>
          <ul className={styles.list}>
            {col.links?.map((l) => <LinkRow key={l._key} l={l} />)}
          </ul>
          {col.subLinks?.length ? (
            <div className={styles.sub}>
              {col.subTitle && <span className={styles.subTitle}>{col.subTitle}</span>}
              <ul className={styles.list}>
                {col.subLinks.map((l) => <LinkRow key={l._key} l={l} />)}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function PanelFoot({ item, buttonLabel }: { item: MegaItem; buttonLabel?: string }) {
  if (!item.footerLinks?.length && !item.footerNote) return null;
  return (
    <div className={styles.panelFoot}>
      <div className={styles.panelFootLinks}>
        {item.footerLinks?.map((l) => (
          <Link key={l._key} href={l.link} className={styles.more} data-nav-close>
            {l.label} →
          </Link>
        ))}
        {item.footerNote && <span className={styles.note}>{item.footerNote}</span>}
      </div>
      {buttonLabel && (
        <ModalButton variant="primary" size="md" className={styles.panelCta}>
          {buttonLabel}
        </ModalButton>
      )}
    </div>
  );
}

export default function MegaNav({ items, localeSlot, buttonLabel, phone, whatsappNumber, lang }: Props) {
  const wa = (whatsappNumber || phone || "").replace(/\D/g, "");

  return (
    <div className={styles.root} data-nav>
      <div className={styles.panelMobile} id="site-menu" data-nav-panel>
        {localeSlot && <div className={styles.mobileTop}>{localeSlot}</div>}
        <nav className={styles.nav} aria-label={MENU_LABEL[lang] ?? MENU_LABEL.en}>
          <ul className={styles.top}>
            {items.map((item) => {
              if (item.kind === "link" || !item.kind) {
                return item.link ? (
                  <li key={item._key} className={styles.topItem}>
                    <Link href={item.link} className={styles.topLink} data-nav-close>
                      {item.label}
                    </Link>
                  </li>
                ) : null;
              }
              const panelId = `nav-${item._key}`;
              return (
                <li key={item._key} className={`${styles.topItem} ${styles[`kind_${item.kind}`] ?? ""}`} data-nav-item>
                  <button type="button" className={styles.topLink} data-nav-trigger aria-expanded="false" aria-controls={panelId}>
                    {item.label}
                    <Caret />
                  </button>
                  <div className={styles.panel} id={panelId}>
                    {item.kind === "mega" && (
                      <div className={styles.panelInner}>
                        <div className={styles.columns} style={{ ["--cols" as string]: String(item.columns?.length || 1) }}>
                          {item.columns?.map((col) => <Column key={col._key} col={col} id={`${panelId}-${col._key}`} />)}
                        </div>
                        <PanelFoot item={item} buttonLabel={buttonLabel} />
                      </div>
                    )}
                    {item.kind === "cases" && (
                      <div className={styles.panelInner}>
                        <div className={styles.cases}>
                          <ul className={styles.caseGrid}>
                            {item.cases?.map((c) => (
                              <li key={c._key}>
                                <Link href={c.link} className={styles.case} data-nav-close>
                                  <span className={styles.caseTitle}>{c.title}</span>
                                  {c.result && <span className={styles.caseResult}>{c.result}</span>}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          {item.promo?.link && (
                            <Link href={item.promo.link} className={styles.promo} data-nav-close>
                              {item.promo.kicker && <span className={styles.promoKicker}>{item.promo.kicker}</span>}
                              {item.promo.title && <span className={styles.promoTitle}>{item.promo.title}</span>}
                              {item.promo.text && <span className={styles.promoText}>{item.promo.text}</span>}
                              {item.promo.linkLabel && <span className={styles.more}>{item.promo.linkLabel} →</span>}
                            </Link>
                          )}
                        </div>
                        <PanelFoot item={item} />
                      </div>
                    )}
                    {item.kind === "list" && (
                      <ul className={styles.dropList}>
                        {item.columns?.flatMap((col) => col.links ?? []).map((l) => <LinkRow key={l._key} l={l} />)}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
        {(phone || buttonLabel) && (
          <div className={styles.mobileFoot}>
            {phone && (
              <a className={styles.phone} href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.6L3 21Z" />
                </svg>
                {phone}
              </a>
            )}
            {buttonLabel && (
              <ModalButton variant="primary" size="md" className={styles.mobileCta}>
                {buttonLabel}
              </ModalButton>
            )}
          </div>
        )}
      </div>
      <button type="button" className={styles.burger} data-nav-burger aria-controls="site-menu" aria-expanded="false" aria-label="Menu">
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>
    </div>
  );
}
