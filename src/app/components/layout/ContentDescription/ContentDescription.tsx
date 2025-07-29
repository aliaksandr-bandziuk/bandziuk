import React, { FC } from "react";
import styles from "./ContentDescription.module.scss";
import { ContentBlock } from "@/types/portfolio";
import { PortableText } from "next-sanity";
import { RichText } from "../../shared/RichText/RichText";

type Props = {
  content: ContentBlock[];
};

const ContentDescription: FC<Props> = ({ content }) => {
  return (
    <section className={styles.contentDescription}>
      <div className="container">
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
