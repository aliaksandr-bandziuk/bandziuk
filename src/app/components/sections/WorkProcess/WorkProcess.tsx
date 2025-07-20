import React from "react";
import styles from "./WorkProcess.module.scss";
import { Bitter } from "next/font/google";
import { ProcessSection } from "@/types/homepage";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import ClientAnimationLayer from "./ClientAnimationLayer";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";

type Props = {
  processSection: ProcessSection;
};

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

const WorkProcess = ({ processSection }: Props) => {
  if (!processSection) return null;

  const { pretitle, title, subtitle, stepItems } = processSection;

  return (
    <section className={styles.how} id="work-process">
      <div className="container">
        <div className={styles.text}>
          <div className={styles.pretitle}>{pretitle}</div>
          <h2 className={styles.title}>{title}</h2>
          <p className={`${styles.subtitle} ${bitter.className}`}>{subtitle}</p>
        </div>

        <ClientAnimationLayer stepsCount={stepItems.length}>
          <div className={styles.steps}>
            <div className={styles.bgCenter}></div>
            {stepItems.map((step, i) => (
              <div key={i} className={styles.step}>
                <FadeInOnScroll index={i}>
                  <div className={styles.stepWrapper}>
                    <div className={styles.serviceItemIcon}>
                      <Image
                        src={urlFor(step.icon).url()}
                        alt={step.icon.alt ?? title}
                        width={70}
                        height={70}
                        unoptimized
                        className={styles.image}
                      />
                    </div>
                    <div className={styles.stepText}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDescription}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeInOnScroll>
              </div>
            ))}
          </div>
        </ClientAnimationLayer>
      </div>
    </section>
  );
};

export default WorkProcess;
