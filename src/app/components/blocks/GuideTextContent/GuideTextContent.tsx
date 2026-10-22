import React, { FC } from "react";
import { PortableText } from "@portabletext/react";
import styles from "./GuideTextContent.module.scss";
import textStyles from "../TextContentComponent/TextContentComponent.module.scss";
import { RichText } from "../../shared/RichText/RichText";
import TableOfContents from "../../layout/TableOfContents/TableOfContents";
import GuideSection from "./GuideSection";
import { slugifyHeading } from "@/utils/tableOfContents";
import { TextContent } from "@/types/blog";

type Props = {
  block: TextContent;
  lang: string;
};

type Section = { id: string; title: string; body: any[] };

function plainText(node: any): string {
  return Array.isArray(node?.children)
    ? node.children.filter((c: any) => typeof c.text === "string").map((c: any) => c.text).join("")
    : "";
}

// textContent with layout "guide" (variant A, 2026-10): the long text of a
// landing page split into sections at each H2. Desktop: a contents list beside
// the text, every section open. Phones: the first section open, the others
// collapsed to their H2 — the whole text stays in the HTML, so search engines
// read all of it; only its display is folded.
const GuideTextContent: FC<Props> = ({ block, lang }) => {
  const content: any[] = Array.isArray(block.content) ? block.content : [];
  const intro: any[] = [];
  const sections: Section[] = [];

  for (const node of content) {
    if (node?._type === "block" && node.style === "h2") {
      const title = plainText(node);
      sections.push({ id: slugifyHeading(title, node._key), title, body: [] });
    } else if (sections.length) {
      sections[sections.length - 1].body.push(node);
    } else {
      intro.push(node);
    }
  }

  return (
    <div className="container">
      <div className={styles.guide}>
        {sections.length > 1 && (
          <aside className={styles.aside}>
            <div className={styles.sticky}>
              <TableOfContents headings={sections.map(({ id, title }) => ({ id, text: title }))} variant="sidebar" lang={lang} />
            </div>
          </aside>
        )}
        <div className={`${textStyles.textContentComponent} ${styles.article}`}>
          {intro.length > 0 && <PortableText value={intro} components={RichText} />}
          {sections.map((section, i) => (
            <GuideSection key={section.id} id={section.id} title={section.title} defaultOpen={i === 0}>
              <PortableText value={section.body} components={RichText} />
            </GuideSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideTextContent;
