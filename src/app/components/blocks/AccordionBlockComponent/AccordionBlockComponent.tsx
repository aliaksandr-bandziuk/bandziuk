import React from "react";
import Script from "next/script";
import { AccordionBlock } from "@/types/blog";
import Accordion from "../../shared/Accordion/Accordion";
import AccordionItem from "../../shared/AccordionItem/AccordionItem";

type AccordionBlockComponentProps = {
  block: AccordionBlock;
  expandedIndex: number | null;
  setExpandedIndex: (index: number | null) => void;
};

function portableTextToPlain(value: any): string {
  if (!Array.isArray(value)) return "";
  return value
    .map((b) => {
      // PortableText block
      if (b?._type === "block" && Array.isArray(b.children)) {
        return b.children.map((c: any) => c.text || "").join("");
      }
      return "";
    })
    .join("\n")
    .replace(/\s+\n/g, "\n")
    .trim();
}

export const AccordionBlockComponent: React.FC<
  AccordionBlockComponentProps
> = ({ block, expandedIndex, setExpandedIndex }) => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: block.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: portableTextToPlain(item.answer),
      },
    })),
  };

  // Важно: уникальный id, чтобы не было дублей
  const schemaId = `faq-schema-${block._key || "accordion"}`;

  return (
    <>
      <Script
        id={schemaId}
        type="application/ld+json"
        // next/script сам хорошо ведёт себя при повторных рендерах
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Accordion>
        {block.items.map((item, index) => (
          <AccordionItem
            key={item._key}
            title={item.question}
            content={item.answer}
            expanded={index === expandedIndex}
            onClick={() =>
              setExpandedIndex(index === expandedIndex ? null : index)
            }
          />
        ))}
      </Accordion>
    </>
  );
};
