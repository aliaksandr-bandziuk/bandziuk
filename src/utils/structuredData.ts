// app/utils/structuredData.ts

import {
  // ContactFullBlock,
  ContactMethodsBlock,
  TeamBlock,
  LocationBlock,
  ReviewsFullBlock,
} from "@/types/blog";
import { PageType as SinglePageType, SinglepageRef } from "@/types/singlepage";
import { orgRef, personRef } from "@/lib/schema/identity";

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
  // Countries this specific service actually serves, stated in the page's
  // own copy (singlepage.areaServed). Omitted from the JSON-LD entirely when
  // empty — no locale-based guess; language isn't geography.
  areaServed?: string[];
  // Prices the page already prints in visible text, restated so a machine can
  // read them. A page can carry eight figures in prose and expose none of them
  // to an assistant, which is what /pricing did before this existed.
  offers?: Array<{
    name: string;
    price: number;
    maxPrice?: number;
    currency?: string;
    unit?: "one-off" | "month";
  }>;
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

// ---- Portable Text → plain text helper ----
export function portableTextToPlainText(pt: any): string {
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
  areaServed,
  offers,
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
    inLanguage: lang,
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

    // The contact page's main entity is the practice itself, referenced by @id
    // so it merges with the site-wide node rather than creating a second,
    // competing Organization named after the page title.
    jsonLd.mainEntity = {
      ...orgRef(),
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
            inLanguage: lang,
            provider: personRef(),
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
    jsonLd.provider = personRef();
    // Only emitted when the page's own copy states a real service area
    // (singlepage.areaServed). No locale-based default — see structuredData
    // findings: language isn't geography, and a plausible-looking guess is
    // worse than an absent field.
    if (areaServed && areaServed.length > 0) {
      jsonLd.areaServed = areaServed.map((name) => ({
        "@type": "Country",
        name,
      }));
    }
  }

  // Prices, as Offer nodes a machine can read. Emitted on any page type that
  // states them — the pricing page is a WebPage, not a Service, and it is the
  // page where this matters most.
  if (offers && offers.length > 0) {
    jsonLd.offers = offers.map((o) => {
      const currency = o.currency || "EUR";
      const spec: any = {
        "@type": "PriceSpecification",
        priceCurrency: currency,
        // A range gets both bounds; a "from X" price gets a minimum only, which
        // is the honest reading of "from".
        ...(o.maxPrice
          ? { minPrice: o.price, maxPrice: o.maxPrice }
          : { minPrice: o.price }),
        ...(o.unit === "month" ? { unitText: "MONTH" } : {}),
      };
      return {
        "@type": "Offer",
        name: o.name,
        priceCurrency: currency,
        price: o.price,
        priceSpecification: spec,
        availability: "https://schema.org/InStock",
        seller: personRef(),
        url,
      };
    });
  }

  // Отзывы в разметку не выводятся — сознательно.
  //
  // Раньше здесь в hasPart складывались объекты Review с author и reviewBody.
  // Search Console пометила их невалидными: «Missing field itemReviewed»,
  // 30 элементов на шести англоязычных лендингах (10.10.2026).
  //
  // Одним полем это не чинится. Review вне вложенной позиции требует и
  // itemReviewed, и reviewRating; обойтись без рейтинга можно только при
  // наличии автора и даты отзыва. В reviewsFullBlock нет ни рейтинга, ни
  // даты — только имя, должность, страна и текст. Проставить рейтинг от
  // себя нельзя: по требованиям Google он должен исходить от автора отзыва.
  //
  // И даже валидная разметка здесь ничего бы не дала: отзывы о собственной
  // компании на её же сайте не участвуют в звёздочном сниппете. Поэтому
  // разметка убрана, а не исправлена. Сами отзывы остаются на странице
  // обычным текстом и никуда не делись.
  //
  // Если в reviewsFullBlock появятся рейтинг и дата от авторов, выводить
  // отзывы нужно вложенными в сущность, которую они оценивают, а не
  // отдельными Review в hasPart.

  return jsonLd;
}
