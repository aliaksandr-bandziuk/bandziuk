import React, { FC } from "react";
import styles from "./PortfolioScreenshots.module.scss";
import { Screenshot } from "@/types/portfolio";
import PortfolioScreenshotsClient from "./PortfolioScreenshotsClient";

type Props = {
  lang: string;
  screenshots: Screenshot[];
};

const PortfolioScreenshots: FC<Props> = ({ lang, screenshots }) => {
  return (
    <section className={styles.screenshotsSection}>
      <div className="container">
        <h2 className={styles.screenshotsTitle}>
          {lang === "en"
            ? "Project Highlights"
            : lang === "pl"
              ? "Najważniejsze elementy projektu"
              : lang === "ru"
                ? "Ключевые моменты проекта"
                : "Ключевые элементы проекта"}
        </h2>
      </div>
      <div className="container-content">
        <PortfolioScreenshotsClient screenshots={screenshots} />
      </div>
    </section>
  );
};

export default PortfolioScreenshots;
