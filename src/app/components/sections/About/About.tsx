import React from "react";
import styles from "./About.module.scss";
import exp from "constants";
import { AboutSection } from "@/types/homepage";
import { ButtonModal } from "../../ui/ButtonModal/ButtonModal";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { Bitter } from "next/font/google";
import Floating from "../../animations/Floating/Floating";

export type Props = {
  aboutSection: AboutSection;
};

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

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
              <div className={styles.pretitle}>{pretitle}</div>
              <h2 className={styles.title}>{title}</h2>
              <p className={`${styles.subtitle} ${bitter.className}`}>
                {subtitle}
              </p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.button}>
              <ButtonModal>{buttonLabel}</ButtonModal>
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
