// lib/seo/portfolio-jsonld.ts
import type {
  Portfolio,
  Technology,
  Service,
  Screenshot,
  WebsiteField,
} from "@/types/portfolio";

type BuildJsonLdArgs = {
  doc: Portfolio;
  lang: string;
  canonical: string; // абсолютный URL текущей страницы
  previewImageUrl?: string; // абсолютный URL превью (через urlFor)
};

// ==== ВЕРХ ФАЙЛА: оставь Organization как publisher, добавим WebSite ====
const ORG = {
  "@type": "Organization",
  name: "Aliaksandr Bandziuk",
  url: "https://www.bandziuk.com",
  logo: {
    "@type": "ImageObject",
    url: "https://cdn.sanity.io/images/x6jc462y/production/f070d11f862c00400711d6efca18504713a95c27-772x242.png",
  },
};

// Введём сущность WebSite, чтобы на неё ссылаться из isPartOf
const WEBSITE = {
  "@type": "WebSite",
  "@id": "https://www.bandziuk.com/#website",
  url: "https://www.bandziuk.com",
  name: "bandziuk.com",
  publisher: ORG, // тут как раз корректно использовать Organization
};

/** Безопасная сборка массива изображений */
function collectImages(doc: Portfolio, previewImageUrl?: string): string[] {
  const shots = (doc.screenshots || [])
    .map((s: Screenshot) => s?.image?.asset?.url)
    .filter(Boolean) as string[];

  const list = [...(previewImageUrl ? [previewImageUrl] : []), ...shots];

  // убирать дубликаты и пустые
  return Array.from(new Set(list)).filter(Boolean);
}

/** Приводим WebsiteField к URL, если это ссылка */
function getClientWebsiteUrl(field?: WebsiteField): string | undefined {
  if (!field) return undefined;
  if (field.type === "link" && field.linkDestination)
    return field.linkDestination;
  return undefined;
}

export function getPortfolioJsonLd({
  doc,
  lang,
  canonical,
  previewImageUrl,
}: BuildJsonLdArgs) {
  const images = collectImages(doc, previewImageUrl);

  const about = (doc.technologiesUsed || []).map((t) => ({
    "@type": "Thing",
    name: t.title,
  }));
  const mentions = (doc.keyFeatures?.services || []).map((s) => ({
    "@type": "Thing",
    name: s.title,
  }));

  const clientName = doc.keyFeatures?.clientName || undefined;
  const industry = doc.keyFeatures?.industry || undefined;
  const clientSite = getClientWebsiteUrl(doc.keyFeatures?.website);

  const webPageId = `${canonical}#webpage`;
  const articleId = `${canonical}#article`; // было #casestudy

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": webPageId,
    url: canonical,
    inLanguage: lang,
    name: doc.seo?.metaTitle || doc.fullTitle || doc.title,
    description: doc.seo?.metaDescription || doc.excerpt,
    // было Organization — валидатор ругался. Делаем ссылку на WebSite:
    isPartOf: { "@id": WEBSITE["@id"] },
    primaryImageOfPage: images[0]
      ? { "@type": "ImageObject", url: images[0] }
      : undefined,
    datePublished: doc.publishedAt || undefined,
    // mainEntity → наш Article
    mainEntity: { "@id": articleId },
  };

  // Заменили CaseStudy на Article для совместимости
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": articleId,
    url: canonical,
    inLanguage: lang,
    headline: doc.fullTitle || doc.title,
    name: doc.fullTitle || doc.title,
    description: doc.excerpt,
    image: images.length ? images : undefined,
    isPartOf: { "@id": WEBSITE["@id"] }, // опционально, но красиво
    mainEntityOfPage: { "@id": webPageId }, // двусторонняя связь
    publisher: ORG,
    author: ORG,
    about: about.length ? about : undefined,
    mentions: mentions.length ? mentions : undefined,
    articleSection: industry ? [industry] : undefined,
    recipient: clientName
      ? { "@type": "Organization", name: clientName }
      : undefined,
    sameAs: clientSite ? [clientSite] : undefined,
    datePublished: doc.publishedAt || undefined,
  };

  // ВОЗВРАЩАЕМ ТРИ НОДЫ: WebSite, WebPage, Article
  return [WEBSITE, webPage, article];
}
