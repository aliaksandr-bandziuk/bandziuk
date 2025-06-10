import { HeroSection } from "@/types/homepage";
import React, { FC } from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import dynamic from "next/dynamic";

export type Props = {
  heroSection: HeroSection;
};

const ParticlesBackground = dynamic(
  () => import("../animations/ParticlesBackground/ParticlesBackground"),
  {
    ssr: false,
  }
);

const Hero: FC<Props> = ({ heroSection }) => {
  if (!heroSection) {
    return null;
  }

  const { title, subtitle, text, heroImage, heroButtons } = heroSection;

  return (
    <section className={styles.heroSection}>
      <div className={styles.particlesWrapper}>
        <ParticlesBackground />
      </div>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.heroSectionContent}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            <p className={styles.text}>{text}</p>
            <div className={styles.buttons}>
              {heroButtons.map((btn) => {
                if (btn.type === "popup") {
                  return <button key={btn._key}>{btn.label}</button>;
                }
                return (
                  <a key={btn._key} href={btn.link}>
                    {btn.label}
                  </a>
                );
              })}
            </div>
          </div>
          <div className={styles.heroSectionImage}>
            <Image
              src={urlFor(heroImage).url()}
              alt={heroImage.alt || "Aliaksandr Bandziuk's Photo"}
              width={500}
              height={700}
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
