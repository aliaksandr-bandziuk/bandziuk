import React from "react";
import styles from "./PortfolioIntro.module.scss";
import { Bitter } from "next/font/google";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import type { KeyFeature, Service } from "@/types/portfolio";
import type { ImageAlt } from "@/types/property";
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
  keyFeatures: KeyFeature; // ожидает keyFeatures.services: Service[]
  previewImage: ImageAlt;
  lang: string;
};

const PortfolioIntro: React.FC<Props> = ({
  title,
  excerpt,
  keyFeatures,
  previewImage,
  lang,
}) => {
  const labels =
    lang === "pl"
      ? {
          client: "Klient",
          industry: "Branża",
          services: "Usługi",
          website: "Strona internetowa",
        }
      : lang === "ru"
        ? {
            client: "Клиент",
            industry: "Отрасль",
            services: "Услуги",
            website: "Веб-сайт",
          }
        : {
            client: "Client",
            industry: "Industry",
            services: "Services",
            website: "Website",
          };

  const websiteNode: React.ReactNode =
    keyFeatures.website?.type === "link" ? (
      <a
        href={keyFeatures.website.linkDestination}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.keyFeatureValue}
      >
        {keyFeatures.website.linkLabel || keyFeatures.website.linkDestination}
      </a>
    ) : keyFeatures.website?.type === "text" ? (
      keyFeatures.website.text
    ) : (
      "—"
    );

  const featureMap: Record<
    "client" | "industry" | "services" | "website",
    React.ReactNode
  > = {
    client: keyFeatures?.clientName || "—",
    industry: keyFeatures?.industry || "—",
    services: keyFeatures?.services?.length
      ? keyFeatures.services.map((s: Service) => s.title).join(", ")
      : "—",
    website: websiteNode,
  };

  const imgUrl = previewImage?.asset ? urlFor(previewImage).url() : undefined;

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
                {(
                  Object.entries(featureMap) as Array<
                    [keyof typeof featureMap, React.ReactNode]
                  >
                ).map(([key, value]) => (
                  <div className={styles.keyFeature} key={key}>
                    <div className={styles.keyFeatureWrapper}>
                      <p className={styles.keyFeatureTitle}>{labels[key]}</p>
                      <div className={styles.keyFeatureValue}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {imgUrl && (
          <div className={styles.image} data-animate-image>
            <Image
              src={imgUrl}
              alt={previewImage.alt ?? title}
              fill
              className={styles.previewImage}
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          </div>
        )}

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
