import React, { FC } from "react";
import styles from "./Portfolio.module.scss";
import { PortfolioSection } from "@/types/homepage";
import { getLastFourPortfolioByLang } from "@/sanity/sanity.utils";
import { Portfolio as PortfolioType } from "@/types/portfolio";
import PortfolioItem from "../../ui/PortfolioItem/PortfolioItem";
import LinkPrimary from "../../ui/LinkPrimary/LinkPrimary";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

type Props = {
  portfolioSection: PortfolioSection;
  lang: string;
};

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
          <SectionHeading eyebrow={pretitle} title={title} subtitle={subtitle} />
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
