import React from "react";
import styles from "./SectionHeading.module.scss";

type HeadingLevel = "h1" | "h2" | "h3";

type Props = {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "center" | "left";
  as?: HeadingLevel;
  size?: "default" | "hero";
  className?: string;
};

const SectionHeading: React.FC<Props> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as = "h2",
  size = "default",
  className,
}) => {
  const Heading = as;

  return (
    <div
      className={[
        styles.wrapper,
        align === "left" ? styles.left : styles.center,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
      <Heading
        className={[styles.title, size === "hero" ? styles.titleHero : ""]
          .filter(Boolean)
          .join(" ")}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={[
            styles.subtitle,
            size === "hero" ? styles.subtitleHero : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
