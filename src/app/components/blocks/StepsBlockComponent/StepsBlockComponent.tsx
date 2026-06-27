import React, { FC } from "react";
import Image from "next/image";
import { Bitter } from "next/font/google";
import { StepsBlock } from "@/types/blog";
import { urlFor } from "@/sanity/sanity.client";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";
import styles from "./StepsBlockComponent.module.scss";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

type Props = {
  block: StepsBlock;
};

const marginValues: Record<string, string> = {
  small: "clamp(0.9375rem, 3.75vw, 2.8125rem)",
  medium: "clamp(1.875rem, 0.75rem + 4.5vw, 4.125rem)",
  large: "clamp(1.875rem, 7.5vw, 5.625rem)",
};

const StepsBlockComponent: FC<Props> = ({ block }) => {
  const { title, steps, marginTop, marginBottom } = block;

  // undefined → inline style omitted → SCSS default margin-bottom takes effect.
  // An explicit Studio value still overrides via inline style.
  const computedMarginTop =
    marginTop && marginValues[marginTop] ? marginValues[marginTop] : undefined;
  const computedMarginBottom =
    marginBottom && marginValues[marginBottom] ? marginValues[marginBottom] : undefined;

  if (!steps?.length) return null;

  return (
    <section
      className={styles.stepsBlock}
      style={{ marginTop: computedMarginTop, marginBottom: computedMarginBottom }}
    >
      <div className="container">
        {title && (
          <div className={styles.text}>
            <h2 className={`${styles.title} ${bitter.className}`}>{title}</h2>
          </div>
        )}
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step._key} className={styles.step}>
              <FadeInOnScroll index={index}>
                <div className={styles.stepInner}>
                  <div className={styles.stepNumber}>
                    {step.stepNumber ?? index + 1}
                  </div>
                  <div className={styles.stepContent}>
                    {step.icon && (
                      <div className={styles.stepIcon}>
                        <Image
                          src={urlFor(step.icon).url()}
                          alt={step.icon.alt ?? step.title}
                          width={48}
                          height={48}
                          unoptimized
                          className={styles.icon}
                        />
                      </div>
                    )}
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    {step.description && (
                      <p className={styles.stepDescription}>{step.description}</p>
                    )}
                  </div>
                </div>
              </FadeInOnScroll>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default StepsBlockComponent;
