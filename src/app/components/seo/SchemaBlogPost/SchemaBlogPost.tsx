// app/components/SchemaBlogPost.tsx
import Script from "next/script";
import { urlFor } from "@/sanity/sanity.client";
import { defaultLocale } from "@/i18n.config";
import { Blog, FaqBlock } from "@/types/blog";
import { portableTextToPlainText } from "@/utils/structuredData";

interface SchemaBlogPostProps {
  blog: Blog;
  lang: string;
}

const siteUrl = "https://www.bandziuk.com";

const SchemaBlogPost: React.FC<SchemaBlogPostProps> = ({ blog, lang }) => {
  // Собираем канонический URL
  const slug = blog.slug[lang]?.current ?? blog.slug[defaultLocale].current;
  const url =
    lang === defaultLocale
      ? `${siteUrl}/blog/${slug}`
      : `${siteUrl}/${lang}/blog/${slug}`;

  const imageUrl = blog.previewImage
    ? urlFor(blog.previewImage).url()
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: blog.title,
    description: blog.seo.metaDescription,
    image: imageUrl ? [imageUrl] : undefined,
    author: {
      "@type": "Person",
      name: "Aliaksandr Bandziuk", // или реальный автор
    },
    publisher: {
      "@type": "Organization",
      name: "Aliaksandr Bandziuk",
      url: siteUrl,
    },
    datePublished: blog.publishedAt,
    dateModified: blog.publishedAt,
  };

  // FAQPage schema — generated from the same faqBlock that renders on the page,
  // so the markup always matches the visible FAQ (Google requires visible-content parity).
  const faqBlock = blog.contentBlocks?.find(
    (block): block is FaqBlock => block._type === "faqBlock",
  );
  const faqJsonLd = faqBlock
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqBlock.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: portableTextToPlainText(item.answer),
          },
        })),
      }
    : null;

  return (
    <>
      <Script
        id="schema-blogpost"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <Script
          id="schema-faqpage"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
};

export default SchemaBlogPost;
