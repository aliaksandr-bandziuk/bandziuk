// app/components/SchemaBlogPost.tsx
"use client";
import Script from "next/script";
import { urlFor } from "@/sanity/sanity.client";
import { defaultLocale } from "@/i18n.config";
import { Blog } from "@/types/blog";

interface SchemaBlogPostProps {
  blog: Blog;
  lang: string;
}

const siteUrl = "https://bandziuk.com";

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
      logo: {
        "@type": "ImageObject",
        url: "", // путь к логотипу
      },
    },
    datePublished: blog.publishedAt,
    dateModified: blog.publishedAt,
  };

  return (
    <Script
      id="schema-blogpost"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
};

export default SchemaBlogPost;
