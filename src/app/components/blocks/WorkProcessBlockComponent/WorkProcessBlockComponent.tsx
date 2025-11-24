import React, { FC } from "react";
import styles from "./WorkProcessBlockComponent.module.scss";
import { WorkProcessBlock as WorkProcessBlockType } from "@/types/blog";
import Image from "next/image";
import { Bitter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

type Props = {
  block: WorkProcessBlockType;
  lang: string;
};

const marginValues: Record<string, string> = {
  small: "clamp(0.9375rem, 3.75vw, 2.8125rem)",
  medium: "clamp(1.875rem, 0.75rem + 4.5vw, 4.125rem)",
  large: "clamp(1.875rem, 7.5vw, 5.625rem)",
};

type Step = {
  title: string;
  description: string;
};

const stepsText: Record<string, { title: string; description: string }[]> = {
  en: [
    {
      title: "Goal & Requirements",
      description: "We define what the website must achieve.",
    },
    {
      title: "Structure & Content Plan",
      description: "I create the page structure and logic.",
    },
    {
      title: "Technical Setup",
      description: "I configure Next.js and Sanity CMS.",
    },
    {
      title: "UI Development",
      description: "I build fast and clean components.",
    },
    {
      title: "Integrations & Features",
      description: "Forms, filters, maps, languages, analytics.",
    },
    {
      title: "SEO & Launch",
      description: "Speed optimization, SEO, deployment.",
    },
  ],

  pl: [
    {
      title: "Cel i wymagania",
      description: "Ustalamy, co strona ma osiągnąć.",
    },
    {
      title: "Struktura i treści",
      description: "Tworzę architekturę i logikę projektu.",
    },
    {
      title: "Przygotowanie techniczne",
      description: "Konfiguruję Next.js i Sanity CMS.",
    },
    {
      title: "Development UI",
      description: "Buduję szybkie i przejrzyste komponenty.",
    },
    {
      title: "Integracje i funkcje",
      description: "Formularze, filtry, mapy, języki, analityka.",
    },
    {
      title: "SEO i wdrożenie",
      description: "Optymalizacja szybkości, SEO i wdrożenie.",
    },
  ],

  ru: [
    {
      title: "Цели и требования",
      description: "Определяем, что должен делать сайт.",
    },
    {
      title: "Структура и контент",
      description: "Создаю архитектуру страниц и логику.",
    },
    {
      title: "Техническая подготовка",
      description: "Настраиваю Next.js и Sanity CMS.",
    },
    {
      title: "Разработка UI",
      description: "Делаю быстрые и аккуратные компоненты.",
    },
    {
      title: "Интеграции и функции",
      description: "Формы, фильтры, карты, языки, аналитика.",
    },
    {
      title: "SEO и запуск",
      description: "Оптимизация, SEO, публикация сайта.",
    },
  ],
};

const WorkProcessBlockComponent: FC<Props> = ({ block, lang }) => {
  const { title, marginTop, marginBottom } = block;
  const texts = stepsText[lang] || stepsText.en;

  const computedMarginTop =
    marginTop && marginValues[marginTop] ? marginValues[marginTop] : "0";

  const computedMarginBottom =
    marginBottom && marginValues[marginBottom]
      ? marginValues[marginBottom]
      : "0";

  return (
    <section
      className={styles.howWeWorkBlock}
      style={{
        marginTop: computedMarginTop,
        marginBottom: computedMarginBottom,
      }}
    >
      <div className="container">
        <div className={styles.inner}>
          <h2 className="h2">{title}</h2>
          <div className={styles.steps}>
            {texts.map((step, index) => {
              if (!step) return null;

              const isEven = (index + 1) % 2 === 0;

              return (
                <div
                  key={index}
                  className={`${styles.stepItem} ${(index + 1) % 2 === 0 ? styles.isEven : ""}`}
                >
                  <div className={styles.textBlock}>
                    <p className={styles.stepTitle}>{step.title}</p>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                  <div className={styles.shape}>
                    <div className={styles.stepNumber}>
                      <p className={bitter.className}>{index + 1}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessBlockComponent;
