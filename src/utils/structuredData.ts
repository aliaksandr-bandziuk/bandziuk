// app/utils/structuredData.ts

import {
  // ContactFullBlock,
  ContactMethodsBlock,
  TeamBlock,
  LocationBlock,
  ReviewsFullBlock,
  ReviewFull,
} from "@/types/blog";
import { PageType as SinglePageType, SinglepageRef } from "@/types/singlepage";

export type PageInput = {
  slug: string;
  lang: string;
  metaTitle: string;
  metaDescription: string;
  url: string;
  blocks: Array<
    TeamBlock | LocationBlock | ReviewsFullBlock | ContactMethodsBlock
  >;
  pageType?: SinglePageType;
  pageTitle?: string;
  excerpt?: string;
  servicesParentSlug?: string; // slug разводящей страницы в текущем языке
  services?: SinglepageRef[];
};

// ---- Type guards ----
// function isContactFullBlock(b: any): b is ContactFullBlock {
//   return b._type === "contactFullBlock";
// }
function isLocationBlock(b: any): b is LocationBlock {
  return b._type === "locationBlock";
}
function isTeamBlock(b: any): b is TeamBlock {
  return b._type === "teamBlock";
}
function isReviewsFullBlock(b: any): b is ReviewsFullBlock {
  return b._type === "reviewsFullBlock";
}

// ---- Portable Text → plain text helper ----
function portableTextToPlainText(pt: any): string {
  if (typeof pt === "string") {
    return pt;
  }
  if (!Array.isArray(pt)) {
    return "";
  }
  // Берём только блоки с _type="block" и children[]
  return pt
    .filter((blk) => blk._type === "block" && Array.isArray(blk.children))
    .map((blk) =>
      blk.children
        .filter((child: any) => typeof child.text === "string")
        .map((child: any) => child.text)
        .join("")
    )
    .join("\n\n");
}

export function generateStructuredData({
  slug,
  lang,
  metaTitle,
  metaDescription,
  url,
  blocks,
  pageType,
  pageTitle,
  excerpt,
  servicesParentSlug,
  services,
}: PageInput) {
  const aboutKeywords = ["ueber-uns", "about", "o-kompanii", "o-nas"];
  const contactsKeywords = ["kontakt", "contacts", "kontakty"];
  const slugLower = slug.toLowerCase();

  const schemaPageType: "AboutPage" | "ContactPage" | "WebPage" =
    aboutKeywords.some((kw) => slugLower.includes(kw))
      ? "AboutPage"
      : contactsKeywords.some((kw) => slugLower.includes(kw))
        ? "ContactPage"
        : "WebPage";

  const baseType =
    pageType === "service" ? ["WebPage", "Service"] : schemaPageType;

  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": baseType,
    name: metaTitle,
    description: metaDescription,
    url,
  };

  if (schemaPageType === "ContactPage" && pageType !== "service") {
    // Собираем контакты
    // const contactPoints = blocks.filter(isContactFullBlock).flatMap((b) =>
    //   b.contacts.map((c) => {
    //     const cp: any = {
    //       "@type": "ContactPoint",
    //       contactType: c.type.toLowerCase(),
    //       availableLanguage: lang.toUpperCase(),
    //     };
    //     if (c.type === "Phone") cp.telephone = c.label;
    //     if (c.type === "Email") cp.email = c.label;
    //     if (c.type === "Link") cp.url = c.label;
    //     return cp;
    //   })
    // );

    // Локация (Place)
    const loc = blocks.find(isLocationBlock);
    const place = loc
      ? {
          "@type": "Place",
          name: loc.title,
          geo: {
            "@type": "GeoCoordinates",
            latitude: loc.location.lat,
            longitude: loc.location.lng,
          },
        }
      : undefined;

    // Команда (Person)
    const members = blocks.filter(isTeamBlock).flatMap((b) =>
      b.members.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.position,
        description: m.description,
      }))
    );

    jsonLd.mainEntity = {
      "@type": "Organization",
      name: metaTitle,
      url,
      // ...(contactPoints.length && { contactPoint: contactPoints }),
      ...(place && { location: place }),
      ...(members.length && { member: members }),
    };

    return jsonLd;
  }

  // 1) Services Index → ItemList из Service
  if (pageType === "servicesIndex" && services && services.length > 0) {
    const buildServiceUrl = (serviceSlug: string) => {
      const pathSegments = [servicesParentSlug, serviceSlug]
        .filter(Boolean)
        .join("/");

      return lang === "en"
        ? `https://www.bandziuk.com/${pathSegments}`
        : `https://www.bandziuk.com/${lang}/${pathSegments}`;
    };

    jsonLd.mainEntity = {
      "@type": "ItemList",
      itemListElement: services
        .map((service, index) => {
          const childSlug = service.slug[lang]?.current;
          if (!childSlug) return null;

          return {
            "@type": "Service",
            position: index + 1,
            name: service.title,
            description: service.excerpt || undefined,
            url: buildServiceUrl(childSlug),
            provider: {
              "@type": "Person",
              name: "Aliaksandr Bandziuk",
              url: "https://www.bandziuk.com",
            },
          };
        })
        .filter(Boolean),
    };
  }

  // 2) Конкретная страница услуги → Service
  if (pageType === "service") {
    // корень уже @type: ["WebPage","Service"], просто добавляем поля услуги
    jsonLd.name = pageTitle || metaTitle; // имя услуги
    jsonLd.description = excerpt || metaDescription;
    jsonLd.serviceType = pageTitle || metaTitle;
    jsonLd.provider = {
      "@type": "Person",
      name: "Aliaksandr Bandziuk",
      url: "https://www.bandziuk.com",
    };
    jsonLd.areaServed = {
      "@type": "Country",
      name: "Poland",
    };
  }

  // Для AboutPage и WebPage обрабатываем отзывы
  jsonLd.hasPart = [];
  for (const block of blocks) {
    if (isReviewsFullBlock(block)) {
      block.reviews.forEach((r: ReviewFull) => {
        jsonLd.hasPart.push({
          "@type": "Review",
          author: { "@type": "Person", name: r.name },
          reviewBody: portableTextToPlainText(r.text),
        });
      });
    }
  }

  return jsonLd;
}
