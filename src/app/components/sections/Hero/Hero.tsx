import { HeroSection } from "@/types/homepage";
import React, { FC } from "react";
import styles from "./Hero.module.scss";
import dynamic from "next/dynamic";
import LinkPrimary from "../../ui/LinkPrimary/LinkPrimary";
import { ButtonModal } from "../../ui/ButtonModal/ButtonModal";
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

  const { title, subtitle, text, heroButtons } = heroSection;

  return (
    <section className={styles.heroSection}>
      <div className={styles.particlesWrapper}>
        <ParticlesBackground />
      </div>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.heroSectionContent}>
            <SectionHeading as="h1" size="hero" title={title} subtitle={subtitle} />
            <p className={styles.text}>{text}</p>
            <div className={styles.buttons}>
              {heroButtons.map((btn) => {
                if (btn.type === "popup") {
                  return <ButtonModal key={btn._key}>{btn.label}</ButtonModal>;
                }
                return (
                  <LinkPrimary key={btn._key} link={btn.link}>
                    {btn.label}
                  </LinkPrimary>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
