// app/components/SchemaBlogPost.tsx
import { urlFor } from "@/sanity/sanity.client";
import { defaultLocale } from "@/i18n.config";
import { Blog } from "@/types/blog";
import { orgRef, personRef, PERSON_NAME } from "@/lib/schema/identity";

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

  // Posts by the site owner point at the site-wide Person node by @id instead
  // of restating an inline author — that reference is what merges every post
  // into one entity. A guest author (different name) still gets its own node.
  const author = blog.author;
  const isOwner = !author || author.name === PERSON_NAME;
  const authorSchema = isOwner
    ? personRef()
    : {
        "@type": "Person",
        name: author.name,
        jobTitle: author.role || undefined,
        sameAs: author.socialLinks?.length
          ? author.socialLinks.map((link) => link.url)
          : undefined,
      };

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
    author: authorSchema,
    publisher: orgRef(),
    datePublished: blog.publishedAt,
    dateModified: blog._updatedAt || blog.publishedAt,
  };

  // No FAQPage here on purpose. The Accordion component that renders the
  // faqBlock emits its own FAQPage next to the visible questions; duplicating
  // it from this file put two FAQPage blocks on every article that has one.
  //
  // Plain <script>, not next/script: next/script queues JSON-LD into
  // self.__next_s and injects it only after hydration, so it never appears in
  // the server HTML. Verified 2026-09-12 — BlogPosting was missing from the
  // raw response while the FAQPage next door (a plain tag) was present.
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SchemaBlogPost;
