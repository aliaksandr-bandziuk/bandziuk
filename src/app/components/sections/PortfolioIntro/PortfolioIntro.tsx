import React from "react";
import { Bitter } from "next/font/google";
import { urlFor } from "@/sanity/sanity.client";
import styles from "./PortfolioIntro.module.scss";
import { ImageAlt } from "@/types/property";
import { KeyFeature } from "@/types/portfolio";
import Image from "next/image";
import { ButtonModal } from "../../ui/ButtonModal/ButtonModal";
import ClientAnimationLayer from "./ClientAnimationLayer"; // 👈 тут анимация

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
  previewImage,
  keyFeatures,
  lang,
}: Props) => {
  return (
    <section className={styles.portfolioIntro}>
      <ClientAnimationLayer /> {/* 👈 клиентская анимация */}
      <div className={styles.contentInner}>
        <div className="container">
          <div className={styles.content}>
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
        </div>
      </div>
      <div className="container">
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
              ? "Create a Similar Project"
              : lang === "pl"
                ? "Stwórz podobny projekt"
                : lang === "ru"
                  ? "Сделать похожий проект"
                  : "Create a Similar Project"}
          </ButtonModal>
        </div>
      </div>
    </section>
  );
};

export default PortfolioIntro;
