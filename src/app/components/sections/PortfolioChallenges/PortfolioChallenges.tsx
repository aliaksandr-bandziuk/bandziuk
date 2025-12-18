import React, { FC } from "react";
import styles from "./PortfolioChallenges.module.scss";
import { Challenges } from "@/types/portfolio";
import { PortableText } from "next-sanity";
import { RichText } from "../../shared/RichText/RichText";

type Props = {
  lang: string;
  challenges: Challenges;
};

const PortfolioChallenges: FC<Props> = ({ lang, challenges }) => {
  return (
    <section className={styles.challenges}>
      <div className="container">
        <div className={styles.challengesList}>
          <div className={styles.challengeItem}>
            <h2 className={styles.challengeTitle}>
              {lang === "en"
                ? "Problem"
                : lang === "pl"
                  ? "Problem"
                  : lang === "ru"
                    ? "Проблема"
                    : "Problem"}
            </h2>
            <div className={styles.challengeContent}>
              <PortableText value={challenges.problem} components={RichText} />
            </div>
          </div>
          <div className={styles.challengeItem}>
            <h2 className={styles.challengeTitle}>
              {lang === "en"
                ? "Goal"
                : lang === "pl"
                  ? "Zadanie"
                  : lang === "ru"
                    ? "Задача"
                    : "Goal"}
            </h2>
            <div className={styles.challengeContent}>
              <PortableText value={challenges.task} components={RichText} />
            </div>
          </div>
          <div className={styles.challengeItem}>
            <h2 className={styles.challengeTitle}>
              {lang === "en"
                ? "Results"
                : lang === "pl"
                  ? "Wyniki"
                  : lang === "ru"
                    ? "Результаты"
                    : "Results"}
            </h2>
            <div className={styles.challengeContent}>
              <PortableText value={challenges.results} components={RichText} />
            </div>
          </div>
          <div className={styles.challengeItem}>
            <h2 className={styles.challengeTitle}>
              {lang === "en"
                ? "Completed Work"
                : lang === "pl"
                  ? "Wykonana praca"
                  : lang === "ru"
                    ? "Проделанная работа"
                    : "Completed Work"}
            </h2>
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
