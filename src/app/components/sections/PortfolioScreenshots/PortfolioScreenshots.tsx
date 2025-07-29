import React, { FC } from "react";
import styles from "./PortfolioScreenshots.module.scss";
import { Screenshot } from "@/types/portfolio";
import { Bitter } from "next/font/google";
import SliderScreenshots from "../../wrappers/SliderScreenshots/SliderScreenshots";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

type Props = {
  lang: string;
  screenshots: Screenshot[];
};

const PortfolioScreenshots: FC<Props> = ({ lang, screenshots }) => {
  return (
    <section className={styles.screenshotsSection}>
      <div className="container">
        <h2 className={`${styles.screenshotsTitle} ${bitter.className}`}>
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
        <SliderScreenshots screenshots={screenshots} />
      </div>
    </section>
  );
};

export default PortfolioScreenshots;
