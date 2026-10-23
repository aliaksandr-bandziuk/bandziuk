import React, { FC } from "react";
import styles from "./LandingHero.module.scss";
import { ModalButton } from "../../ui/Button/ModalButton";
import WhatsAppButton from "../../ui/WhatsAppButton/WhatsAppButton";
import Breadcrumbs from "../../layout/Breadcrumbs/Breadcrumbs";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import type { ImageAlt } from "@/types/common";

type Props = {
  title: string;
  heading?: string;
  excerpt: string;
  lang: string;
  segments?: string[];
  crumbTitles?: Record<string, string>;
  /** Up to 3 short facts under the text, e.g. "From 700 €". The first is highlighted. */
  chips?: string[];
  /** Up to 4 numbered labels beside the phone sketch (desktop only). */
  phonePoints?: string[];
  /** Right side on desktop: the phone sketch (default) or a photo. */
  visual?: "phone" | "photo";
  /** Used when visual = "photo"; a transparent-background portrait fits best. */
  photo?: ImageAlt;
};

const OFFER: Record<string, string> = {
  en: "Request Personal Offer",
  pl: "Poproś o ofertę",
  ru: "Запросить предложение",
};

// Hero for landing pages (singlepage.heroLayout = "landing", variant A,
// 2026-10). Left-aligned text with facts and the same two buttons as
// PropertyIntro; on desktop a phone sketch with numbered labels shows what the
// visitor's own first screen will contain. No background photo: the page
// opens on the offer, not on a picture, and paints without an image request.
// singlepage.heroVisual = "photo" (2026-10-23): pages about the person doing
// the work (the AI SEO consultant page) show a photo in the same card instead
// of the sketch. Desktop only, like the sketch; `sizes` keeps phones from
// downloading it.
const LandingHero: FC<Props> = ({
  title,
  heading,
  excerpt,
  lang,
  segments,
  crumbTitles,
  chips = [],
  phonePoints = [],
  visual = "phone",
  photo,
}) => {
  const points = phonePoints.slice(0, 4);
  const showPhoto = visual === "photo" && Boolean(photo?.asset);

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          {segments && segments.length > 0 && (
            <Breadcrumbs lang={lang} segments={segments} currentTitle={title} titles={crumbTitles} />
          )}
          <h1 className={styles.title}>{heading || title}</h1>
          {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
          {chips.length > 0 && (
            <ul className={styles.chips}>
              {chips.slice(0, 3).map((chip, i) => (
                <li key={chip} className={i === 0 ? styles.chipAccent : styles.chip}>
                  {chip}
                </li>
              ))}
            </ul>
          )}
          <div className={styles.buttons}>
            <ModalButton variant="primary">{OFFER[lang] ?? OFFER.en}</ModalButton>
            <WhatsAppButton lang={lang} placement="hero" variant="secondary" />
          </div>
        </div>

        {showPhoto && photo && (
          <div className={`${styles.visual} ${styles.photoCard}`}>
            <Image
              src={urlFor(photo).width(840).fit("max").auto("format").url()}
              alt={photo.alt || heading || title}
              fill
              priority
              sizes="(min-width: 1024px) 420px, 1px"
              className={styles.photo}
            />
          </div>
        )}

        {!showPhoto && points.length > 0 && (
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.phone}>
              <span className={styles.lineTitle} />
              <span className={styles.lineText} />
              <span className={styles.lineStatus} />
              <span className={styles.screenImage} />
              <span className={styles.phoneButtons}>
                <span className={styles.btnGhost} />
                <span className={styles.btnAccent} />
              </span>
            </div>
            <ol className={styles.points}>
              {points.map((point, i) => (
                <li key={point}>
                  <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                  {point}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
};

export default LandingHero;
