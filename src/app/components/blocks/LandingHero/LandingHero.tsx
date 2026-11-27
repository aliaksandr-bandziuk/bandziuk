import React, { FC } from "react";
import styles from "./LandingHero.module.scss";
import { ModalButton } from "../../ui/Button/ModalButton";
import WhatsAppButton from "../../ui/WhatsAppButton/WhatsAppButton";
import Breadcrumbs from "../../layout/Breadcrumbs/Breadcrumbs";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import type { ImageAlt } from "@/types/common";
import type { HeroAnswer, HeroScreen } from "@/types/singlepage";
import { Fragment } from "react";

type Props = {
  title: string;
  heading?: string;
  excerpt: string;
  lang: string;
  segments?: string[];
  crumbTitles?: Record<string, string>;
  /** Up to 3 short facts under the text, e.g. "From 700 €". The first is highlighted. */
  chips?: string[] | null;
  /** Up to 4 numbered labels beside the phone sketch (desktop only). */
  phonePoints?: string[] | null;
  /** Right side on desktop: the phone sketch (default), a photo, or an assistant's answer. */
  visual?: "phone" | "photo" | "answer" | "screen" | null;
  /** Used when visual = "screen": the example first screen inside the phone. */
  screen?: HeroScreen | null;
  /** Used when visual = "answer". */
  answer?: HeroAnswer | null;
  /** Used when visual = "photo"; a transparent-background portrait fits best. */
  photo?: ImageAlt | null;
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
  chips,
  phonePoints,
  visual,
  photo,
  answer,
  screen,
}) => {
  // GROQ returns null (not undefined) for fields a document does not have, so
  // destructuring defaults would not apply — normalise here.
  const facts = chips ?? [];
  const points = (phonePoints ?? []).slice(0, 4);
  const showPhoto = (visual ?? "phone") === "photo" && Boolean(photo?.asset);
  const showAnswer = visual === "answer" && Boolean(answer?.answer);
  const showScreen = visual === "screen" && Boolean(screen?.title);
  // *asterisks* in the answer mark the decisive words.
  const marked = (text: string) =>
    text.split(/(\*[^*]+\*)/g).map((part, i) =>
      part.startsWith("*") && part.endsWith("*") && part.length > 2 ? (
        <mark key={i}>{part.slice(1, -1)}</mark>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      ),
    );

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          {segments && segments.length > 0 && (
            <Breadcrumbs lang={lang} segments={segments} currentTitle={title} titles={crumbTitles} />
          )}
          <h1 className={styles.title}>{heading || title}</h1>
          {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
          {facts.length > 0 && (
            <ul className={styles.chips}>
              {facts.slice(0, 3).map((chip, i) => (
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

        {showAnswer && answer && (
          <div className={`${styles.visual} ${styles.answerCard}`} data-ui>
            <div className={styles.answerAsk}>
              <span className={styles.answerWho}>{answer.label || "Asystent AI"}</span>
              {answer.question && <p className={styles.answerQ}>{answer.question}</p>}
            </div>
            <div className={styles.answerBody}>
              <p className={styles.answerText}>{marked(answer.answer || "")}</p>
              {(answer.sources ?? []).length > 0 && (
                <ul className={styles.answerSrcs}>
                  {(answer.sources ?? []).map((s) => (
                    <li key={s._key} className={s.ours ? styles.answerSrcOurs : styles.answerSrc}>
                      <i aria-hidden="true" />
                      {s.name}
                    </li>
                  ))}
                </ul>
              )}
              {answer.note && <p className={styles.answerNote}>{answer.note}</p>}
            </div>
          </div>
        )}

        {showScreen && screen && (
          // A real first screen instead of grey bars (2026-11). Each label sits
          // level with the part it names, joined to it by a short line; the
          // dots light once, in turn, on load (CSS only, none with reduced
          // motion). No numbers: the line does the pointing.
          <div className={`${styles.visual} ${styles.screenCard}`} aria-hidden="true">
            <div className={styles.device}>
              <div className={styles.deviceBar}>
                <span>9:41</span>
                <span>5G</span>
              </div>
              {screen.brand && (
                <div className={styles.deviceBrand}>
                  <i />
                  {screen.brand}
                </div>
              )}
              <div className={(screen.fields ?? []).length > 0 ? `${styles.deviceImage} ${styles.deviceImageShort}` : styles.deviceImage} />
              <div className={`${styles.part} ${styles.partTitle}`} style={{ "--i": 0 } as React.CSSProperties}>
                <span className={styles.deviceTitle}>{screen.title}</span>
                {points[0] && <span className={styles.label}>{points[0]}</span>}
              </div>
              {screen.subline && <div className={styles.deviceSub}>{screen.subline}</div>}
              <div className={styles.part} style={{ "--i": 1 } as React.CSSProperties}>
                <span className={styles.deviceCtas}>
                  <span className={styles.deviceCall}>{screen.call}</span>
                  <span className={/telegram/i.test(screen.message ?? "") ? `${styles.deviceMsg} ${styles.deviceMsgTg}` : styles.deviceMsg}>
                    {screen.message}
                  </span>
                </span>
                {points[1] && <span className={styles.label}>{points[1]}</span>}
              </div>
              {(screen.fields ?? []).length > 0 && (
                <div className={styles.part} style={{ "--i": 2 } as React.CSSProperties}>
                  <span className={styles.deviceFields}>
                    {(screen.fields ?? []).map((f) => (
                      <span key={f}>{f}</span>
                    ))}
                  </span>
                  {points[2] && <span className={styles.label}>{points[2]}</span>}
                </div>
              )}
              {(screen.fields ?? []).length === 0 && (screen.chips ?? []).length > 0 && (
                <div className={styles.part} style={{ "--i": 2 } as React.CSSProperties}>
                  <span className={styles.deviceChips}>
                    {(screen.chips ?? []).map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </span>
                  {points[2] && <span className={styles.label}>{points[2]}</span>}
                </div>
              )}
              {screen.toast && (
                <div className={`${styles.part} ${styles.partToast}`} style={{ "--i": 3 } as React.CSSProperties}>
                  <span className={styles.deviceToast}>
                    <b>✓</b>
                    {screen.toast}
                  </span>
                  {points[3] && <span className={styles.label}>{points[3]}</span>}
                </div>
              )}
            </div>
          </div>
        )}

        {!showPhoto && !showAnswer && !showScreen && points.length > 0 && (
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
