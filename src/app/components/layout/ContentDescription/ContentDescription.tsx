import React, { FC } from "react";
import styles from "./ContentDescription.module.scss";
import { ContentBlock } from "@/types/portfolio";
import { PortableText } from "next-sanity";
import { RichText } from "../../shared/RichText/RichText";

type Props = {
  lang: string; // Добавлено для поддержки локализации, если нужно
  content: ContentBlock[];
};

const ContentDescription: FC<Props> = ({ lang, content }) => {
  return (
    <section className={styles.contentDescription}>
      <div className="container">
        <h2 className={styles.title}>
          {lang === "en"
            ? "Project Description"
            : lang === "ru"
              ? "Описание проекта"
              : lang === "pl"
                ? "Opis projektu"
                : "Project Description"}
        </h2>
        {/* Используем PortableText для рендеринга контента */}
        <div className={styles.contentItems}>
          {content?.map((item, index) => (
            <div key={index} className={styles.contentItem}>
              <PortableText value={item.content} components={RichText} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentDescription;
