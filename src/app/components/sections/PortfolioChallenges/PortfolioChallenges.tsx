import React, { FC } from "react";
import styles from "./PortfolioChallenges.module.scss";
import { Challenges } from "@/types/portfolio";
import { PortableText } from "next-sanity";
import { RichText } from "../../shared/RichText/RichText";
import { Bitter } from "next/font/google";

type Props = {
  lang: string;
  challenges: Challenges;
};

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

const PortfolioChallenges: FC<Props> = ({ lang, challenges }) => {
  return (
    <section className={styles.challenges}>
      <div className="container">
        <div className={styles.challengesList}>
          <div className={styles.challengeItem}>
            <h3 className={`${styles.challengeTitle} ${bitter.className}`}>
              {lang === "en"
                ? "Problem"
                : lang === "pl"
                  ? "Problem"
                  : lang === "ru"
                    ? "Проблема"
                    : "Problem"}
            </h3>
            <div className={styles.challengeContent}>
              <PortableText value={challenges.problem} components={RichText} />
            </div>
          </div>
          <div className={styles.challengeItem}>
            <h3 className={`${styles.challengeTitle} ${bitter.className}`}>
              {lang === "en"
                ? "Task"
                : lang === "pl"
                  ? "Zadanie"
                  : lang === "ru"
                    ? "Задача"
                    : "Task"}
            </h3>
            <div className={styles.challengeContent}>
              <PortableText value={challenges.task} components={RichText} />
            </div>
          </div>
          <div className={styles.challengeItem}>
            <h3 className={`${styles.challengeTitle} ${bitter.className}`}>
              {lang === "en"
                ? "Results"
                : lang === "pl"
                  ? "Wyniki"
                  : lang === "ru"
                    ? "Результаты"
                    : "Results"}
            </h3>
            <div className={styles.challengeContent}>
              <PortableText value={challenges.results} components={RichText} />
            </div>
          </div>
          <div className={styles.challengeItem}>
            <h3 className={`${styles.challengeTitle} ${bitter.className}`}>
              {lang === "en"
                ? "Completed Work"
                : lang === "pl"
                  ? "Wykonana praca"
                  : lang === "ru"
                    ? "Проделанная работа"
                    : "Completed Work"}
            </h3>
            <div className={styles.challengeContent}>
              <PortableText value={challenges.workDone} components={RichText} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioChallenges;
