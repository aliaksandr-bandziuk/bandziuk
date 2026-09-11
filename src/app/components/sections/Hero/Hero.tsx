import { HeroSection } from "@/types/homepage";
import React, { FC } from "react";
import styles from "./Hero.module.scss";
import dynamic from "next/dynamic";
import Button from "../../ui/Button/Button";
import { ModalButton } from "../../ui/Button/ModalButton";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

export type Props = {
  heroSection: HeroSection;
};

const ParticlesBackground = dynamic(
  () => import("../../animations/ParticlesBackground/ParticlesBackground"),
  {
    ssr: false,
  }
);

const Hero: FC<Props> = ({ heroSection }) => {
  if (!heroSection) {
    return null;
  }

  const { eyebrow, title, subtitle, text, facts, heroButtons } = heroSection;

  return (
    <section className={styles.heroSection}>
      <div className={styles.particlesWrapper}>
        <ParticlesBackground />
      </div>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.heroSectionContent}>
            <SectionHeading
              as="h1"
              size="hero"
              align="left"
              eyebrow={eyebrow}
              eyebrowVariant="plain"
              title={title}
              subtitle={subtitle}
            />
            <p className={styles.text}>{text}</p>

            <div className={styles.buttons}>
              {heroButtons.map((btn) => {
                if (btn.type === "popup") {
                  return (
                    <ModalButton key={btn._key} variant="secondary">
                      {btn.label}
                    </ModalButton>
                  );
                }
                return (
                  <Button key={btn._key} href={btn.link} variant="primary">
                    {btn.label}
                  </Button>
                );
              })}
            </div>

            {/* Below the CTAs on purpose: label/value pairs are supporting
                evidence, not a step on the way to the buttons. Assistants
                quote them directly, and they restate areaServed and
                knowsLanguage from the Person schema as visible text. */}
            {facts && facts.length > 0 && (
              <dl className={styles.facts}>
                {facts.map((fact) => (
                  <div key={fact._key} className={styles.fact}>
                    <dt className={styles.factLabel}>{fact.label}</dt>
                    <dd className={styles.factValue}>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
