// app/components/StructuredData.tsx

import { generateStructuredData, PageInput } from "@/utils/structuredData";

/**
 * Plain <script>, not next/script — see SchemaBlogPost for the reasoning:
 * next/script defers JSON-LD to after hydration, leaving the server HTML
 * without it.
 */
export function StructuredData(props: PageInput) {
  const jsonLd = generateStructuredData(props);
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
