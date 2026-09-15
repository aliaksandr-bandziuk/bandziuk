import React from "react";
import styles from "./About.module.scss";
import { AboutSection } from "@/types/homepage";
import { ModalButton } from "../../ui/Button/ModalButton";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import Floating from "../../animations/Floating/Floating";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

export type Props = {
  aboutSection: AboutSection;
};

const About: React.FC<Props> = ({ aboutSection }) => {
  if (!aboutSection) {
    return null;
  }
  const { pretitle, title, subtitle, description, paragraphs, industries, buttonLabel, image } =
    aboutSection;

  const body = paragraphs?.filter(Boolean) ?? [];

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.wrapper}>
          <div
            className={`${styles.aboutContent} ${body.length > 0 ? styles.aboutContentLeft : ""}`}
          >
            <div className={styles.text}>
              <SectionHeading
                align="left"
                eyebrow={pretitle}
                title={title}
                subtitle={subtitle}
              />
              {body.length > 0 ? (
                <div className={styles.paragraphs}>
                  {body.map((paragraph, i) => (
                    <p key={i} className={i === 0 ? styles.lead : styles.paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                description && <p className={styles.description}>{description}</p>
              )}
              {industries && industries.length > 0 && (
                <ul className={styles.industries} aria-label="Industries">
                  {industries.map((industry) => (
                    <li key={industry}>{industry}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.button}>
              <ModalButton variant="primary">{buttonLabel}</ModalButton>
            </div>
          </div>
          <div className={styles.aboutImage}>
            <Floating>
              <Image
                src={urlFor(image).url()}
                alt={image.alt ?? title}
                width={400}
                height={700}
                className={styles.image}
              />
            </Floating>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
