import React, { FC } from "react";
import styles from "./PortfolioBlockComponent.module.scss";
import { PortfolioSection } from "@/types/homepage";
import { getLastFourPortfolioByLang } from "@/sanity/sanity.utils";
import { Portfolio as PortfolioType } from "@/types/portfolio";
import PortfolioItem from "../../ui/PortfolioItem/PortfolioItem";
import Button from "../../ui/Button/Button";
import { PortfolioBlock } from "@/types/blog";

type Props = {
  block: PortfolioBlock;
  lang: string;
};

const PortfolioBlockComponent: FC<Props> = async ({ block, lang }) => {
  if (!block) {
    return null;
  }
  const { title, portfolioItems } = block;
  const portfolioProjects: PortfolioType[] =
    await getLastFourPortfolioByLang(lang);
  return (
    <section className={styles.portfolioSection} id="portfolio">
      <div className="container-wide">
        <div className={styles.text}>
          {/* <div className={styles.pretitle}>{pretitle}</div> */}
          <h2 className={styles.title}>{title}</h2>
          {/* <p className={`${styles.subtitle} ${bitter.className}`}>{subtitle}</p> */}
        </div>
        <div className={styles.grid}>
          {portfolioProjects.map((project) => (
            <PortfolioItem key={project._id} project={project} lang={lang} />
          ))}
        </div>
        <div className={styles.linkAll}>
          <Button
            variant="secondary"
            href={lang === "en" ? `/portfolio` : `/${lang}/portfolio`}
          >
            {lang === "en"
              ? "View All Projects"
              : lang === "pl"
                ? "Zobacz wszystkie projekty"
                : lang === "ru"
                  ? "Показать все проекты"
                  : "View All Projects"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBlockComponent;
