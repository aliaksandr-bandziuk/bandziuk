import {
  DoubleTextBlock,
  ContentChoice,
  BlockContentWithStyle,
} from "@/types/blog";
import React, { FC } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import styles from "./DoubleTextBlockComponent.module.scss";
import { urlFor } from "@/sanity/sanity.client";
import { RichText } from "../../shared/RichText/RichText";

type Props = {
  block: DoubleTextBlock;
};

const marginValues: Record<string, string> = {
  small: "clamp(0.9375rem, 3.75vw, 2.8125rem)",
  medium: "clamp(1.875rem, 0.75rem + 4.5vw, 4.125rem)",
  large: "clamp(1.875rem, 7.5vw, 5.625rem)",
};

const verticalAlignValues: Record<string, React.CSSProperties["alignItems"]> = {
  top: "flex-start",
  center: "center",
  bottom: "flex-end",
};

const getBlockStyle = (textBlock?: BlockContentWithStyle) => ({
  background: textBlock?.backgroundColor || "transparent",
  // border: textBlock?.isBorder ? "1px solid #000" : "none",
  padding: textBlock?.backgroundColor ? "25px" : "0",
  borderRadius: textBlock?.backgroundColor ? "20px" : "0",
});

const DoubleTextBlockComponent: FC<Props> = ({ block }) => {
  const { marginTop, marginBottom, paddingTop, paddingBottom, verticalAlign } =
    block;

  const computedMarginTop =
    marginTop && marginValues[marginTop] ? marginValues[marginTop] : "0";

  const computedMarginBottom =
    marginBottom && marginValues[marginBottom]
      ? marginValues[marginBottom]
      : "0";

  const computedPaddingTop =
    paddingTop && marginValues[paddingTop] ? marginValues[paddingTop] : "0";

  const computedPaddingBottom =
    paddingBottom && marginValues[paddingBottom]
      ? marginValues[paddingBottom]
      : "0";

  const wrapperAlignClass = styles[`wrapper--${verticalAlign}`];

  const renderContent = (content?: ContentChoice) => {
    if (!content) return null; // Проверка на наличие контента

    if (content.type === "text" && content.blockContent) {
      return (
        <div
          className={styles.textBlock}
          style={getBlockStyle(content.blockContent)}
        >
          <PortableText
            value={content.blockContent.content}
            components={RichText}
          />
        </div>
      );
    } else if (content.type === "image" && content.image) {
      const imageUrl = urlFor(content.image).url();
      const imageAlt = content.image.alt || "Academgo Image";
      return (
        <div className={styles.imageBlock}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container">
      <div
        className={styles.doubleTextBlock}
        style={{
          marginTop: computedMarginTop,
          marginBottom: computedMarginBottom,
        }}
      >
        {/* {block.doubleTextBlockTitle && (
          <h2 className="h2-main mb-h2">{block.doubleTextBlockTitle}</h2>
        )} */}
        <div className={`${styles.wrapper} ${wrapperAlignClass}`}>
          <div
            className={styles.leftContent}
            style={{
              paddingTop: computedPaddingTop,
              paddingBottom: computedPaddingBottom,
            }}
          >
            {block.leftContent && renderContent(block.leftContent)}
          </div>
          {block.isDivider && <div className={styles.divider} />}
          <div
            className={styles.rightContent}
            style={{
              paddingTop: computedPaddingTop,
              paddingBottom: computedPaddingBottom,
            }}
          >
            {block.rightContent && renderContent(block.rightContent)}
          </div>
        </div>
        {!block.isDivider && <div className={styles.dividerHorizontal} />}
      </div>
    </div>
  );
};

export default DoubleTextBlockComponent;
