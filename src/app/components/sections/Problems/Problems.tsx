"use client";
import React, { FC } from "react";
import styles from "./Problems.module.scss";
import { Bitter } from "next/font/google";
import { ProblemsSection } from "@/types/homepage";
import { ButtonModal } from "../../ui/ButtonModal/ButtonModal";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { motion } from "framer-motion";
import StickyStack from "../../wrappers/StickyStack/StickyStack";

type Props = { problemsSection: ProblemsSection };

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

const STICKY_OFFSET = 120; // px — отступ от верха, как у .content
const STACK_SPACING = 30; // px — насколько каждая карточка «сдвинута» вниз относительно предыдущей

const Problems: FC<Props> = ({ problemsSection }) => {
  if (!problemsSection) return null;
  const { pretitle, title, subtitle, problemsItems } = problemsSection;

  return (
    <section className={styles.problemsSection}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.text}>
              <div className={styles.pretitle}>{pretitle}</div>
              <h2 className={styles.title}>{title}</h2>
              <p className={`${styles.subtitle} ${bitter.className}`}>
                {subtitle}
              </p>
            </div>
          </div>
          <div className={styles.problems}>
            <StickyStack offset={120} spacing={10}>
              {problemsItems.map((item) => (
                <div key={item._key} className={styles.problemItem}>
                  <div className={styles.icon}>
                    <img
                      src={urlFor(item.icon).url()}
                      alt={item.icon.alt ?? title}
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3 className={styles.problemTitle}>
                    &quot;{item.problem}&quot;
                  </h3>
                  <p className={styles.problemDescription}>{item.solution}</p>
                  <ButtonModal>{item.buttonLabel}</ButtonModal>
                </div>
              ))}
            </StickyStack>
          </div>
        </div>
        <div className={styles.fullButton}>
          <ButtonModal>{problemsSection.fullButtonLabel}</ButtonModal>
        </div>
      </div>
    </section>
  );
};

export default Problems;
