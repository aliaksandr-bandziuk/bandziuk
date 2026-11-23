import { TextContent } from "@/types/blog";
import React, { FC } from "react";
import { PortableText } from "@portabletext/react";
import styles from "./TextContentComponent.module.scss";
import { RichText } from "../../shared/RichText/RichText";

type Props = {
  block: TextContent;
};

const marginValues: Record<string, string> = {
  small: "clamp(0.9375rem, 3.75vw, 2.8125rem)",
  medium: "clamp(1.875rem, 0.75rem + 4.5vw, 4.125rem)",
  large: "clamp(1.875rem, 7.5vw, 5.625rem)",
};

const TextContentComponent: FC<Props> = ({ block }) => {
  const { paddingVertical, paddingHorizontal } = block;

  // "none" has always been offered in the schema but never handled here, so
  // a block that asked for no vertical padding still got the 25px default —
  // which is what made the split sections on /pricing drift apart.
  const computedPaddingVertical =
    paddingVertical === "none"
      ? "0"
      : paddingVertical && marginValues[paddingVertical]
        ? marginValues[paddingVertical]
        : "25px";

  const computedPaddingHorizontal =
    paddingHorizontal && marginValues[paddingHorizontal]
      ? marginValues[paddingHorizontal]
      : "0";

  return (
    <div
      style={{
        background: block.backgroundFull || "transparent",
        marginTop:
          block.marginTop && marginValues[block.marginTop]
            ? marginValues[block.marginTop]
            : "0",
        marginBottom:
          block.marginBottom && marginValues[block.marginBottom]
            ? marginValues[block.marginBottom]
            : "0",
      }}
    >
      <div className="container">
        <div
          className={[styles.textContentComponent, block.compact ? styles.compact : ""]
            .filter(Boolean)
            .join(" ")}
          style={{
            background: block.backgroundColor || "transparent",
            paddingTop: computedPaddingVertical,
            paddingBottom: computedPaddingVertical,
            paddingLeft: computedPaddingHorizontal,
            paddingRight: computedPaddingHorizontal,
            textAlign: block.textAlign || "left",
            color: block.textColor || "inherit",
          }}
        >
          {block.eyebrow && <div className={styles.eyebrow}>{block.eyebrow}</div>}
          <PortableText value={block.content} components={RichText} />
        </div>
      </div>
    </div>
  );
};

export default TextContentComponent;
