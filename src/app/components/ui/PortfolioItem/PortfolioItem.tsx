import { Portfolio } from "@/types/portfolio";
import styles from "./PortfolioItem.module.scss";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";

type Props = {
  project: Portfolio;
  lang: string;
};

const PortfolioItem = ({ project, lang }: Props) => {
  // безопасно получаем слаг: текущий язык -> язык документа -> любой доступный
  const langKey = lang as keyof typeof project.slug;
  const current =
    project.slug?.[langKey]?.current ??
    project.slug?.[project.language as keyof typeof project.slug]?.current ??
    Object.values(project.slug ?? {})[0]?.current ??
    "";

  // лейблы
  const labels =
    lang === "pl"
      ? { industry: "Branża", services: "Usługi" }
      : lang === "ru"
        ? { industry: "Отрасль", services: "Услуги" }
        : { industry: "Industry", services: "Services" };

  const industry = project.keyFeatures?.industry || "—";
  const services = project.keyFeatures?.services?.length
    ? project.keyFeatures.services.map((s) => s.title).join(", ")
    : "—";

  return (
    <Link
      href={
        lang === "en"
          ? `/portfolio/${current}`
          : `/${lang}/portfolio/${current}`
      }
      className={styles.portfolioItem}
    >
      <Image
        src={urlFor(project.previewImage).url()}
        alt={project.title}
        fill
        className={styles.previewImage}
        sizes="(max-width: 768px) 100vw, 900px"
        priority
      />

      <div className={styles.portfolioItemContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>

        <div className={styles.keyFeatures}>
          {/* industry */}
          <div className={styles.keyFeature}>
            <p className={styles.keyFeatureTitle}>{labels.industry}</p>
            <p className={styles.keyFeatureValue}>{industry}</p>
          </div>

          {/* services */}
          <div className={styles.keyFeature}>
            <p className={styles.keyFeatureTitle}>{labels.services}</p>
            <p className={styles.keyFeatureValue}>{services}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
