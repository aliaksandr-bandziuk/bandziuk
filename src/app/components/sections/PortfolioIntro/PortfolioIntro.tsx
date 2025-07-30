import React from "react";
import styles from "./PortfolioIntro.module.scss";
import { Bitter } from "next/font/google";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { KeyFeature } from "@/types/portfolio";
import { ImageAlt } from "@/types/property";
import { ButtonModal } from "../../ui/ButtonModal/ButtonModal";
import ParticlesBackground from "../../animations/ParticlesBackground/ParticlesBackground";
import PortfolioIntroClient from "./PortfolioIntroClient";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["italic"],
  weight: ["400"],
});

type Props = {
  title: string;
  excerpt: string;
  keyFeatures: KeyFeature;
  previewImage: ImageAlt;
  lang: string;
};

const PortfolioIntro = ({
  title,
  excerpt,
  keyFeatures,
  previewImage,
  lang,
}: Props) => {
  return (
    <section className={styles.portfolioIntro}>
      <div className={styles.contentInner}>
        <div className={styles.particlesWrapper}>
          <ParticlesBackground />
        </div>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.contentWrapper}>
              <h1 className={styles.title}>{title}</h1>
              <p className={`${bitter.className} ${styles.description}`}>
                {excerpt}
              </p>
              <div className={styles.keyFeatures}>
                {/* key features layout */}
                {Object.entries({
                  client: keyFeatures.clientName,
                  industry: keyFeatures.industry,
                  service: keyFeatures.service.title,
                  website:
                    keyFeatures.website?.type === "link" ? (
                      <a
                        href={keyFeatures.website.linkDestination}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.keyFeatureValue}
                      >
                        {keyFeatures.website.linkLabel ||
                          keyFeatures.website.linkDestination}
                      </a>
                    ) : keyFeatures.website?.type === "text" ? (
                      keyFeatures.website.text
                    ) : (
                      "—"
                    ),
                }).map(([label, value]) => (
                  <div className={styles.keyFeature} key={label}>
                    <div className={styles.keyFeatureWrapper}>
                      <p className={styles.keyFeatureTitle}>
                        {lang === "en"
                          ? label[0].toUpperCase() + label.slice(1)
                          : lang === "pl"
                            ? (
                                {
                                  client: "Klient",
                                  industry: "Branża",
                                  service: "Usługa",
                                  website: "Strona internetowa",
                                } as any
                              )[label]
                            : lang === "ru"
                              ? (
                                  {
                                    client: "Клиент",
                                    industry: "Отрасль",
                                    service: "Услуга",
                                    website: "Веб-сайт",
                                  } as any
                                )[label]
                              : label}
                      </p>
                      <p className={styles.keyFeatureValue}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.image} data-animate-image>
          <Image
            src={urlFor(previewImage).url()}
            alt={previewImage.alt ?? title}
            fill
            className={styles.previewImage}
          />
        </div>
        <div className={styles.button}>
          <ButtonModal>
            {lang === "en"
              ? "Create a Similar Project"
              : lang === "pl"
                ? "Stwórz podobny projekt"
                : lang === "ru"
                  ? "Сделать похожий проект"
                  : "Create a Similar Project"}
          </ButtonModal>
        </div>
      </div>

      <PortfolioIntroClient />
    </section>
  );
};

export default PortfolioIntro;
