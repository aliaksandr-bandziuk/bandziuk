import React, { FC } from "react";
import styles from "./PortfolioTechnologies.module.scss";
import { Technology } from "@/types/portfolio";

type Props = {
  lang: string;
  technologies: Technology[];
};

const PortfolioTechnologies: FC<Props> = ({ lang, technologies }) => {
  return (
    <section className={styles.technologies}>
      <div className="container">
        <h2 className={styles.title}>
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
