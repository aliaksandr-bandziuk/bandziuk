import React from "react";

type FaqItem = {
  question: string;
  answer: any; // PortableText
  _key?: string;
};

function portableTextToPlain(value: any): string {
  if (!Array.isArray(value)) return "";
  return value
    .map((b) => {
      if (b?._type === "block" && Array.isArray(b.children)) {
        return b.children.map((c: any) => c.text || "").join("");
      }
      return "";
    })
    .join("\n")
    .replace(/\s+\n/g, "\n")
    .trim();
}

export default function SchemaFaq({ items }: { items: FaqItem[] }) {
  const mainEntity = items
    .map((it) => ({
      "@type": "Question",
      name: (it.question || "").trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: portableTextToPlain(it.answer),
      },
    }))
    .filter((q) => q.name && q.acceptedAnswer.text);

  if (mainEntity.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      // чтобы React не ругался на различия
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
