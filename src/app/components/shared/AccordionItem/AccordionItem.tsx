// AccordionItem.tsx
import React from "react";
import { AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "./AccordionItem.module.scss";
import { PortableText } from "@portabletext/react";
import { RichText } from "../RichText/RichText";

type AccordionItemProps = {
  title: string;
  content: any;
  expanded: boolean;
  onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  expanded,
  onClick,
}) => {
  return (
    <Item
      header={
        <div className={styles.headerFlex}>
          {title}
          <span
            className={`${styles.toggleIcon} ${
              expanded ? styles.expanded : ""
            }`}
            onClick={onClick}
          >
            <svg
              className={styles.icon}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Вертикальная планка (будет исчезать) */}
              <rect
                className={styles.vertical}
                x="11"
                y="4"
                width="2"
                height="16"
                fill="currentColor"
              />
              {/* Горизонтальная планка (всегда видна) */}
              <rect
                className={styles.horizontal}
                x="4"
                y="11"
                width="16"
                height="2"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      }
      className={`${styles.item} ${expanded ? styles.itemExpanded : ""}`}
      buttonProps={{
        className: `${styles.itemBtn} ${
          expanded ? styles.itemBtnExpanded : styles.itemBtnCollapsed
        }`,
        onClick,
        style: { borderRadius: expanded ? "30px 30px 0 0" : "30px" },
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    >
      <PortableText value={content} components={RichText} />
    </Item>
  );
};

export default AccordionItem;
