// lib/seo/portfolio-jsonld.ts
import type {
  Portfolio,
  Technology,
  Service,
  Screenshot,
  WebsiteField,
} from "@/types/portfolio";
import { orgRef, personRef, WEBSITE_ID } from "@/lib/schema/identity";

type BuildJsonLdArgs = {
  doc: Portfolio;
  lang: string;
  canonical: string; // абсолютный URL текущей страницы
  previewImageUrl?: string; // абсолютный URL превью (через urlFor)
};

// Publisher, author and the site node all live in the site-wide identity graph
// (src/lib/schema/identity.ts, emitted from [lang]/layout.tsx). This file used
// to declare its own Organization and its own WebSite under the very @id the
// shared node uses, which put two conflicting definitions of the same entity on
// one page — the opposite of what the identity work is for. Reference them
// instead.
const ORG = orgRef();
const WEBSITE_REF = { "@id": WEBSITE_ID };

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

  // Сайт проекта — самостоятельная сущность WebSite, а не sameAs у статьи.
  // sameAs означает «это тот же объект», то есть прежняя разметка утверждала,
  // что кейс и сайт клиента — одно и то же. Правильная связь: статья ABOUT
  // сайта, сайт SUBJECT OF статьи.
  const projectSiteId = clientSite
    ? `${clientSite.replace(/\/$/, "")}/#website`
    : undefined;
  const projectSiteName =
    (doc.keyFeatures?.website?.type === "link"
      ? doc.keyFeatures.website.linkLabel
      : undefined) ||
    (clientSite ? clientSite.replace(/^https?:\/\//, "").replace(/\/$/, "") : undefined);
  const projectSite = clientSite
    ? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": projectSiteId,
        url: clientSite,
        name: projectSiteName,
        creator: ORG,
        subjectOf: { "@id": articleId },
      }
    : undefined;

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": webPageId,
    url: canonical,
    inLanguage: lang,
    name: doc.seo?.metaTitle || doc.fullTitle || doc.title,
    description: doc.seo?.metaDescription || doc.excerpt,
    // было Organization — валидатор ругался. Делаем ссылку на WebSite:
    isPartOf: WEBSITE_REF,
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
    isPartOf: WEBSITE_REF, // опционально, но красиво
    mainEntityOfPage: { "@id": webPageId }, // двусторонняя связь
    publisher: ORG,
    author: personRef(),
    about: (() => {
      const list = [
        ...(projectSiteId ? [{ "@id": projectSiteId }] : []),
        ...about,
      ];
      return list.length ? list : undefined;
    })(),
    mentions: mentions.length ? mentions : undefined,
    articleSection: industry ? [industry] : undefined,
    datePublished: doc.publishedAt || undefined,
  };

  // WebPage and Article for this case, plus a separate WebSite node for the
  // client's own site when the case states its address. The bandziuk.com
  // WebSite node is NOT emitted here — the site-wide identity graph owns it.
  return [webPage, article, ...(projectSite ? [projectSite] : [])];
}
