import React, { FC } from "react";
import styles from "./PortfolioItems.module.scss";
import { Portfolio } from "@/types/portfolio";
import PortfolioItem from "../../ui/PortfolioItem/PortfolioItem";
import { Bitter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

type Props = {
  totalProjects: Portfolio[];
  lang: string;
};

const PortfolioItems: FC<Props> = ({ totalProjects, lang }) => {
  return (
    <section className={styles.portfolioItems}>
      <div className="container">
        <div className={styles.text}>
          <div className={styles.pretitle}>
            {lang === "en"
              ? "Portfolio"
              : lang === "pl"
                ? "Portfolio"
                : lang === "ru"
                  ? "Портфолио"
                  : "Portfolio"}
          </div>
          <h1 className={styles.title}>
            {lang === "en"
              ? "My Portfolio"
              : lang === "pl"
                ? "Moje Portfolio"
                : lang === "ru"
                  ? "Моё Портфолио"
                  : "My Portfolio"}
          </h1>
          <p className={`${styles.subtitle} ${bitter.className}`}>
            {lang === "en"
              ? "Web Development & SEO Projects"
              : lang === "pl"
                ? "Projekty Stron Internetowych i SEO"
                : lang === "ru"
                  ? "Веб-разработка и SEO-проекты"
                  : "Web Development & SEO Projects"}
          </p>
        </div>
        <h1 className={styles.pageTitle}></h1>
        <div className={styles.portfolioItemsList}>
          {totalProjects.map((project) => (
            <PortfolioItem key={project._id} project={project} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioItems;
