import React, { FC } from "react";
import styles from "./BenefitsBlock.module.scss";
import { BenefitsBlock as BenefitsBlockType } from "@/types/homepage";
import Image from "next/image";
import CountNumber from "../../animations/CountNumber/CountNumber";
import { Bitter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

type Props = {
  benefitsBlock: BenefitsBlockType;
  lang: string;
};

type BenefitItem = {
  number: string;
  sign?: string;
  title: string;
  description: string;
};

type PartnersCountTranslation = BenefitItem[];

const translations: Record<string, PartnersCountTranslation> = {
  en: [
    {
      number: "100",
      sign: "+",
      title: "Completed projects",
      description:
        "Websites, landing pages and SEO projects for businesses in different niches and markets.",
    },
    {
      number: "15",
      title: "Years of experience",
      description:
        "Hands-on experience in SEO, website development and digital strategy.",
    },
    {
      number: "17",
      sign: "+",
      title: "Industries covered",
      description:
        "From local services and startups to real estate, e-commerce and B2B projects.",
    },
    {
      number: "3",
      title: "Working languages",
      description:
        "English, Polish and Russian — with content and structure adapted to each market.",
    },
  ],
  pl: [
    {
      number: "100",
      sign: "+",
      title: "Zrealizowanych projektów",
      description:
        "Strony internetowe, landing pages i projekty SEO dla firm z różnych branż.",
    },
    {
      number: "15",
      title: "Lat doświadczenia",
      description:
        "Praktyczne doświadczenie w SEO, tworzeniu stron i strategii digital.",
    },
    {
      number: "17",
      sign: "+",
      title: "Obsłużonych branż",
      description:
        "Od usług lokalnych i startupów po nieruchomości, e-commerce i B2B.",
    },
    {
      number: "3",
      title: "Języki pracy",
      description:
        "Angielski, polski i rosyjski — z dostosowaniem treści do rynku i odbiorców.",
    },
  ],
  ru: [
    {
      number: "100",
      sign: "+",
      title: "Реализованных проектов",
      description:
        "Сайты, лендинги и SEO-проекты для бизнеса в разных нишах и странах.",
    },
    {
      number: "15",
      title: "Лет опыта",
      description:
        "Практический опыт в SEO, разработке сайтов и digital-стратегии.",
    },
    {
      number: "17",
      sign: "+",
      title: "Отработанных ниш",
      description:
        "От локального бизнеса и стартапов до недвижимости, e-commerce и B2B.",
    },
    {
      number: "3",
      title: "Рабочих языка",
      description:
        "Русский, английский, польский — с адаптацией под рынок и аудиторию.",
    },
  ],
};

const BenefitsBlock: FC<Props> = ({ benefitsBlock, lang }) => {
  // if (!benefitsBlock || benefitsBlock.benefits.length === 0) {
  //   return null;
  // }

  const benefits = translations[lang] ?? translations["en"];

  return (
    <section className={styles.benefitsBlock}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.benefitsList}>
            {benefits.map((benefit) => (
              <div key={benefit.title} className={styles.benefitItem}>
                <div className={styles.content}>
                  <div className={styles.conuting}>
                    <div className={styles.conuter}>
                      <CountNumber>{benefit.number}</CountNumber>
                      {benefit.sign && <span>{benefit.sign}</span>}
                    </div>
                  </div>
                  <div className={styles.text}>
                    <p className={styles.title}>{benefit.title}</p>
                    <p className={styles.description}>{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsBlock;
