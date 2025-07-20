import { HeroSection } from "@/types/homepage";
import React, { FC } from "react";
import styles from "./Hero.module.scss";
import dynamic from "next/dynamic";
import { Bitter } from "next/font/google";
import LinkPrimary from "../../ui/LinkPrimary/LinkPrimary";
import { ButtonModal } from "../../ui/ButtonModal/ButtonModal";

export type Props = {
  heroSection: HeroSection;
};

const ParticlesBackground = dynamic(
  () => import("../../animations/ParticlesBackground/ParticlesBackground"),
  {
    ssr: false,
  }
);

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

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
            <h1 className={styles.title}>{title}</h1>
            <h2 className={`${styles.subtitle} ${bitter.className}`}>
              {subtitle}
            </h2>
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
