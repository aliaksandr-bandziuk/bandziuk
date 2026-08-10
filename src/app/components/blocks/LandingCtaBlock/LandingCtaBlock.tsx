import React from "react";
import styles from "./LandingCtaBlock.module.scss";
import Image from "next/image";
import { ModalButton } from "../../ui/Button/ModalButton";
import WhatsAppButton from "../../ui/WhatsAppButton/WhatsAppButton";
import { urlFor } from "@/sanity/sanity.client";
import { getSiteDefaults } from "@/sanity/sanity.utils";
import type { LandingCtaBlock as LandingCtaBlockType } from "@/types/blog";

type Props = {
  lang: string;
  image?: LandingCtaBlockType["image"];
};

type PartnersCtaTranslation = {
  eyebrow: string;
  titleStart: string;
  titleHighlight: string;
  description: string;
  button: string;
};

const translations: Record<string, PartnersCtaTranslation> = {
  en: {
    eyebrow: "let's talk",
    titleStart: "let’s discuss your ",
    titleHighlight: "project goals",
    description:
      "Tell me about your task, business goals, and current situation. I’ll review it and suggest the best next steps — clear, realistic, and without obligations.",
    button: "discuss my project",
  },
  pl: {
    eyebrow: "porozmawiajmy",
    titleStart: "porozmawiajmy o Twoich ",
    titleHighlight: "celach projektu",
    description:
      "Opisz swoją sytuację, cele biznesowe i oczekiwania. Przeanalizuję je i zaproponuję najlepsze kolejne kroki — jasno i bez zobowiązań.",
    button: "omów mój projekt",
  },
  ru: {
    eyebrow: "давайте обсудим",
    titleStart: "давайте обсудим ",
    titleHighlight: "вашу задачу",
    description:
      "Опишите задачу, цели бизнеса и текущую ситуацию. Я посмотрю и предложу оптимальный план действий — по делу, без лишних обещаний и обязательств.",
    button: "обсудить проект",
  },
};

const LandingCtaBlock = async ({ lang, image }: Props) => {
  const t = translations[lang] ?? translations["en"];

  // Per-block image wins; otherwise fall back to the shared Sanity-hosted
  // default. If neither exists, the image column is simply omitted — no
  // hardcoded path, so nothing can go missing from under it again.
  let resolvedSrc: string | null = null;
  let resolvedAlt: string = t.description;
  if (image?.asset) {
    resolvedSrc = urlFor(image).url();
    resolvedAlt = image.alt || t.description;
  } else {
    const defaults = await getSiteDefaults();
    if (defaults?.landingCtaImage?.asset) {
      resolvedSrc = urlFor(defaults.landingCtaImage).url();
      resolvedAlt = defaults.landingCtaImage.alt || t.description;
    }
  }

  return (
    <section className={styles.ctaBand}>
      <div className="container">
        <div className={[styles.grid, resolvedSrc ? "" : styles.noImage].filter(Boolean).join(" ")}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>{t.eyebrow}</p>
            <h2 className={styles.title}>
              {t.titleStart}
              <span className={styles.highlight}>{t.titleHighlight}</span>
            </h2>
            <p className={styles.description}>{t.description}</p>
            <div className={styles.ctaButton}>
              <ModalButton variant="primary" size="lg">
                {t.button}
              </ModalButton>
              <WhatsAppButton lang={lang} placement="cta_band" variant="secondary" size="lg" />
            </div>
          </div>
          {resolvedSrc && (
            <div className={styles.imageWrap}>
              <Image
                src={resolvedSrc}
                alt={resolvedAlt}
                fill
                sizes="(max-width: 980px) 100vw, 40vw"
                className={styles.image}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LandingCtaBlock;
