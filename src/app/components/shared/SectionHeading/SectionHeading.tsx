import React from "react";
import styles from "./SectionHeading.module.scss";

type HeadingLevel = "h1" | "h2" | "h3";

type Props = {
  eyebrow?: string;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "center" | "left";
  as?: HeadingLevel;
  size?: "default" | "hero";
  /**
   * "pill" is the section default. "plain" drops the rounded background for
   * eyebrows that are a full sentence — the hero's name-and-role line wraps to
   * two lines on a phone, and a pill around wrapped text looks broken.
   */
  eyebrowVariant?: "pill" | "plain";
  className?: string;
};

const SectionHeading: React.FC<Props> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as = "h2",
  size = "default",
  eyebrowVariant = "pill",
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
      {eyebrow && (
        <div
          className={[
            styles.eyebrow,
            eyebrowVariant === "plain" ? styles.eyebrowPlain : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {eyebrow}
        </div>
      )}
      {title && (
        <Heading
          className={[styles.title, size === "hero" ? styles.titleHero : ""]
            .filter(Boolean)
            .join(" ")}
        >
          {title}
        </Heading>
      )}
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
