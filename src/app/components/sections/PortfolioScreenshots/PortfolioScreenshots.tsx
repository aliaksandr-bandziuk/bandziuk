import React, { FC } from "react";
import styles from "./PortfolioScreenshots.module.scss";
import { Screenshot } from "@/types/portfolio";
import PortfolioScreenshotsClient from "./PortfolioScreenshotsClient";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

type Props = {
  lang: string;
  screenshots: Screenshot[];
};

const PortfolioScreenshots: FC<Props> = ({ lang, screenshots }) => {
  return (
    <section className={styles.screenshotsSection}>
      <div className="container">
        <SectionHeading
          align="center"
          className={styles.screenshotsTitle}
          title={
            lang === "en"
              ? "Project Highlights"
              : lang === "pl"
                ? "Najważniejsze elementy projektu"
                : lang === "ru"
                  ? "Ключевые моменты проекта"
                  : "Ключевые элементы проекта"
          }
        />
      </div>
      <div className="container-content">
        <PortfolioScreenshotsClient screenshots={screenshots} />
      </div>
    </section>
  );
};

export default PortfolioScreenshots;
