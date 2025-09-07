// lib/seo/portfolio-jsonld.ts
import type {
  Portfolio,
  Technology,
  Service,
  Screenshot,
  WebsiteField,
} from "@/types/portfolio";

/** Организация/издатель сайта — поправь name/url/logo под себя */
const PUBLISHER = {
  "@type": "Organization",
  name: "Aliaksandr Bandziuk",
  url: "https://www.bandziuk.com",
  logo: {
    "@type": "ImageObject",
    url: "https://cdn.sanity.io/images/x6jc462y/production/f070d11f862c00400711d6efca18504713a95c27-772x242.png",
  },
};

type BuildJsonLdArgs = {
  doc: Portfolio;
  lang: string;
  canonical: string; // абсолютный URL текущей страницы
  previewImageUrl?: string; // абсолютный URL превью (через urlFor)
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

  // about: технологии
  const about =
    (doc.technologiesUsed || []).map((t: Technology) => ({
      "@type": "Thing",
      name: t.title,
    })) || [];

  // mentions: услуги
  const mentions =
    (doc.keyFeatures?.services || []).map((s: Service) => ({
      "@type": "Thing",
      name: s.title,
    })) || [];

  const clientName = doc.keyFeatures?.clientName || undefined;
  const industry = doc.keyFeatures?.industry || undefined;
  const clientSite = getClientWebsiteUrl(doc.keyFeatures?.website);

  const caseStudyId = `${canonical}#casestudy`;
  const webpageId = `${canonical}#webpage`;

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": webpageId,
    url: canonical,
    inLanguage: lang,
    name: doc.seo?.metaTitle || doc.fullTitle || doc.title,
    description: doc.seo?.metaDescription || doc.excerpt,
    isPartOf: PUBLISHER,
    primaryImageOfPage: images[0]
      ? { "@type": "ImageObject", url: images[0] }
      : undefined,
    datePublished: doc.publishedAt || undefined,
    mainEntity: { "@id": caseStudyId },
  };

  const caseStudy = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "@id": caseStudyId,
    url: canonical,
    inLanguage: lang,
    headline: doc.fullTitle || doc.title,
    name: doc.fullTitle || doc.title,
    description: doc.excerpt,
    image: images.length ? images : undefined,
    publisher: PUBLISHER,
    author: PUBLISHER,
    about: about.length ? about : undefined,
    mentions: mentions.length ? mentions : undefined,
    articleSection: industry ? [industry] : undefined,
    recipient: clientName
      ? { "@type": "Organization", name: clientName }
      : undefined,
    relatedLink: clientSite ? [clientSite] : undefined,
    datePublished: doc.publishedAt || undefined,
  };

  // возвращаем массив, чтобы можно было легко расширять в будущем
  return [webPage, caseStudy].filter(Boolean);
}
