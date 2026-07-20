"use client";
import React, { FC } from "react";
import styles from "./Problems.module.scss";
import { ProblemsSection } from "@/types/homepage";
import { ModalButton } from "../../ui/Button/ModalButton";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { motion } from "framer-motion";
import StickyStack from "../../wrappers/StickyStack/StickyStack";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import Icon from "../../ui/Icon/Icon";
import IconBadge from "../../ui/Icon/IconBadge";

type Props = { problemsSection: ProblemsSection };

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
              <SectionHeading
                align="left"
                eyebrow={pretitle}
                title={title}
                subtitle={subtitle}
              />
            </div>
          </div>
          <div className={styles.problems}>
            <StickyStack offset={120} spacing={10}>
              {problemsItems.map((item) => (
                <div key={item._key} className={styles.problemItem}>
                  {item.iconName ? (
                    <IconBadge>
                      <Icon name={item.iconName} />
                    </IconBadge>
                  ) : (
                    <div className={styles.icon}>
                      <img
                        src={urlFor(item.icon).url()}
                        alt={item.icon.alt ?? title}
                        width={100}
                        height={100}
                      />
                    </div>
                  )}
                  <h3 className={styles.problemTitle}>
                    &quot;{item.problem}&quot;
                  </h3>
                  <p className={styles.problemDescription}>{item.solution}</p>
                  <ModalButton variant="secondary">{item.buttonLabel}</ModalButton>
                </div>
              ))}
            </StickyStack>
          </div>
        </div>
        <div className={styles.fullButton}>
          <ModalButton variant="primary">{problemsSection.fullButtonLabel}</ModalButton>
        </div>
      </div>
    </section>
  );
};

export default Problems;
