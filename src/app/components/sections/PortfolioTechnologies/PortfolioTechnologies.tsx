import React, { FC } from "react";
import styles from "./PortfolioTechnologies.module.scss";
import { Technology } from "@/types/portfolio";
import { Bitter } from "next/font/google";

type Props = {
  lang: string;
  technologies: Technology[];
};

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["italic"],
  weight: ["400"],
});

const PortfolioTechnologies: FC<Props> = ({ lang, technologies }) => {
  return (
    <section className={styles.technologies}>
      <div className="container">
        <h2 className={`${bitter.className} ${styles.title}`}>
          {lang === "en"
            ? "Technologies Used"
            : lang === "ru"
              ? "Используемые технологии"
              : lang === "pl"
                ? "Użyte technologie"
                : "Technologies Used"}
        </h2>
        <div className={styles.technologiesList}>
          {technologies.map((tech) => (
            <div key={tech._id} className={styles.technologyItem}>
              <div
                className={styles.technologyIcon}
                dangerouslySetInnerHTML={{ __html: tech.svg }}
              />
              <p className={styles.technologyTitle}>{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTechnologies;
