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

  // Facts from the case itself (portfolio.cardTags), the first one highlighted.
  // The same tags appear on the case's card on landing pages.
  const tags = (project.cardTags ?? []).filter(Boolean).slice(0, 3);
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
      className={styles.card}
    >
      <div className={styles.frame}>
        <Image
          src={urlFor(project.previewImage).url()}
          alt={project.title}
          width={900}
          height={563}
          className={styles.screenshot}
          sizes="(max-width: 768px) 100vw, 900px"
        />
      </div>

      <div className={styles.meta}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardMeta}>
          {industry} · {services}
        </p>
      </div>

      {tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag, i) => (
            <span key={tag} className={i === 0 ? styles.tagAccent : styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
};

export default PortfolioItem;
