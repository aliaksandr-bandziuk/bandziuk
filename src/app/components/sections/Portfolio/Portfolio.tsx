import React, { FC } from "react";
import styles from "./Portfolio.module.scss";
import { Bitter } from "next/font/google";
import { PortfolioSection } from "@/types/homepage";
import { getLastFourPortfolioByLang } from "@/sanity/sanity.utils";
import { Portfolio as PortfolioType } from "@/types/portfolio";
import PortfolioItem from "../../ui/PortfolioItem/PortfolioItem";
import LinkPrimary from "../../ui/LinkPrimary/LinkPrimary";

type Props = {
  portfolioSection: PortfolioSection;
  lang: string;
};

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

const Portfolio: FC<Props> = async ({ portfolioSection, lang }) => {
  if (!portfolioSection) {
    return null;
  }
  const { pretitle, title, subtitle } = portfolioSection;
  const portfolioProjects: PortfolioType[] =
    await getLastFourPortfolioByLang(lang);
  return (
    <section className={styles.portfolioSection} id="portfolio">
      <div className="container">
        <div className={styles.text}>
          <div className={styles.pretitle}>{pretitle}</div>
          <h2 className={styles.title}>{title}</h2>
          <p className={`${styles.subtitle} ${bitter.className}`}>{subtitle}</p>
        </div>
        <div className={styles.grid}>
          {portfolioProjects.map((project) => (
            <PortfolioItem key={project._id} project={project} lang={lang} />
          ))}
        </div>
        <div className={styles.linkAll}>
          <LinkPrimary
            link={lang === "en" ? `/portfolio` : `/${lang}/portfolio`}
          >
            {lang === "en"
              ? "View All Projects"
              : lang === "pl"
                ? "Zobacz wszystkie projekty"
                : lang === "ru"
                  ? "Показать все проекты"
                  : "View All Projects"}
          </LinkPrimary>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
