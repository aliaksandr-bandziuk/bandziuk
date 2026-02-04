import React, { FC } from "react";
import styles from "./LandingCtaBlock.module.scss";
import { Oswald } from "next/font/google";
import Image from "next/image";
import { ButtonModal } from "../../ui/ButtonModal/ButtonModal";

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400"],
});

type Props = {
  lang: string;
};

type PartnersCtaTranslation = {
  titleStart: string;
  titleHighlight: string;
  description: string;
  button: string;
};

const translations: Record<string, PartnersCtaTranslation> = {
  en: {
    titleStart: "let’s discuss your ",
    titleHighlight: "project goals",
    description:
      "Tell me about your task, business goals, and current situation. I’ll review it and suggest the best next steps — clear, realistic, and without obligations.",
    button: "discuss my project",
  },
  pl: {
    titleStart: "porozmawiajmy o Twoich ",
    titleHighlight: "celach projektu",
    description:
      "Opisz swoją sytuację, cele biznesowe i oczekiwania. Przeanalizuję je i zaproponuję najlepsze kolejne kroki — jasno i bez zobowiązań.",
    button: "omów mój projekt",
  },
  ru: {
    titleStart: "давайте обсудим ",
    titleHighlight: "вашу задачу",
    description:
      "Опишите задачу, цели бизнеса и текущую ситуацию. Я посмотрю и предложу оптимальный план действий — по делу, без лишних обещаний и обязательств.",
    button: "обсудить проект",
  },
};

const LandingCtaBlock: FC<Props> = ({ lang }) => {
  const t = translations[lang] ?? translations["en"];

  return (
    <section className={styles.partnersCta}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.cta}>
          <div className={styles.ctaWrapper}>
            <div className={styles.ctaContent}>
              <h2 className={`${styles.title} ${oswald.className}`}>
                {t.titleStart}
                <span className={styles.highlight}>{t.titleHighlight}</span>
              </h2>
              <p className={styles.description}>{t.description}</p>
            </div>
            <div className={styles.ctaButton}>
              <ButtonModal>{t.button}</ButtonModal>
            </div>
          </div>
          <Image
            src="https://cdn.sanity.io/files/x6jc462y/production/a1bcd2f54c75f3d58141c81aa81e6abc8699668c.jpg"
            alt={t.description}
            width={600}
            height={520}
            className={styles.image}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default LandingCtaBlock;
