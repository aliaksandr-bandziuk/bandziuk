import { ImageAlt } from "@/types/property";
import React, { FC } from "react";
import styles from "./PortfolioIntro.module.scss";
import { urlFor } from "@/sanity/sanity.client";
import { ButtonModal } from "../../ui/ButtonModal/ButtonModal";
import { KeyFeature } from "@/types/portfolio";
import { Bitter } from "next/font/google";
import Image from "next/image";
import ParticlesBackground from "../../animations/ParticlesBackground/ParticlesBackground";

type Props = {
  title: string;
  excerpt: string;
  keyFeatures: KeyFeature;
  previewImage: ImageAlt;
  lang: string;
};

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["italic"],
  weight: ["400"],
});

const PortfolioIntro: FC<Props> = ({
  title,
  excerpt,
  previewImage,
  keyFeatures,
  lang,
}) => {
  return (
    <section className={styles.portfolioIntro}>
      <div className={`container ${styles.contentInner}`}>
        <div className={styles.content}>
          <div className={styles.particlesWrapper}>
            <ParticlesBackground />
          </div>
          <div className={styles.contentWrapper}>
            <h1 className={styles.title}>{title}</h1>
            <p className={`${bitter.className} ${styles.description}`}>
              {excerpt}
            </p>
            <div className={styles.keyFeatures}>
              <div className={styles.keyFeature}>
                <div className={styles.keyFeatureWrapper}>
                  <p className={styles.keyFeatureTitle}>
                    {lang === "en"
                      ? "Client"
                      : lang === "pl"
                        ? "Klient"
                        : lang === "ru"
                          ? "Клиент"
                          : "Client"}
                  </p>
                  <p className={styles.keyFeatureValue}>
                    {keyFeatures.clientName}
                  </p>
                </div>
              </div>
              <div className={styles.keyFeature}>
                <div className={styles.keyFeatureWrapper}>
                  <p className={styles.keyFeatureTitle}>
                    {lang === "en"
                      ? "Industry"
                      : lang === "pl"
                        ? "Branża"
                        : lang === "ru"
                          ? "Отрасль"
                          : "Industry"}
                  </p>
                  <p className={styles.keyFeatureValue}>
                    {keyFeatures.industry}
                  </p>
                </div>
              </div>
              <div className={styles.keyFeature}>
                <div className={styles.keyFeatureWrapper}>
                  <p className={styles.keyFeatureTitle}>
                    {lang === "en"
                      ? "Service"
                      : lang === "pl"
                        ? "Usługa"
                        : lang === "ru"
                          ? "Услуга"
                          : "Service"}
                  </p>
                  <p className={styles.keyFeatureValue}>
                    {keyFeatures.service.title}
                  </p>
                </div>
              </div>
              <div className={styles.keyFeature}>
                <div className={styles.keyFeatureWrapper}>
                  <p className={styles.keyFeatureTitle}>
                    {lang === "en"
                      ? "Website"
                      : lang === "pl"
                        ? "Strona internetowa"
                        : lang === "ru"
                          ? "Веб-сайт"
                          : "Website"}
                  </p>
                  {keyFeatures.website?.type === "link" &&
                  keyFeatures.website.linkDestination ? (
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
                    <p className={styles.keyFeatureValue}>
                      {keyFeatures.website.text || "—"}
                    </p>
                  ) : (
                    <p className={styles.keyFeatureValue}>—</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image}>
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
              ? "Request Personal Offer"
              : lang === "pl"
                ? "Poproś o indywidualną ofertę"
                : lang === "ru"
                  ? "Запросить персональное предложение"
                  : "Request Personal Offer"}
          </ButtonModal>
        </div>
      </div>
    </section>
  );
};

export default PortfolioIntro;
