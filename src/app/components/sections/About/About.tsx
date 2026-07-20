import React from "react";
import styles from "./About.module.scss";
import exp from "constants";
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
  const { pretitle, title, subtitle, description, buttonLabel, image } =
    aboutSection;

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.aboutContent}>
            <div className={styles.text}>
              <SectionHeading
                align="left"
                eyebrow={pretitle}
                title={title}
                subtitle={subtitle}
              />
              <p className={styles.description}>{description}</p>
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
