import React from "react";
import styles from "./WorkProcess.module.scss";
import { ProcessSection } from "@/types/homepage";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import ClientAnimationLayer from "./ClientAnimationLayer";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import Icon from "../../ui/Icon/Icon";
import IconBadge from "../../ui/Icon/IconBadge";

type Props = {
  processSection: ProcessSection;
};

const WorkProcess = ({ processSection }: Props) => {
  if (!processSection) return null;

  const { pretitle, title, subtitle, stepItems } = processSection;

  return (
    <section className={styles.how} id="work-process">
      <div className="container">
        <div className={styles.text}>
          <SectionHeading eyebrow={pretitle} title={title} subtitle={subtitle} />
        </div>

        <ClientAnimationLayer stepsCount={stepItems.length}>
          <div className={styles.steps}>
            {stepItems.map((step, i) => (
              <div key={i} className={styles.step}>
                <FadeInOnScroll index={i}>
                  <div className={styles.stepWrapper}>
                    {step.iconName ? (
                      <IconBadge>
                        <Icon name={step.iconName} />
                      </IconBadge>
                    ) : (
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
                    )}
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
