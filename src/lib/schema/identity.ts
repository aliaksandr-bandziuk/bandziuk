// Single source of truth for who this site is about.
//
// Why this exists: a SERP check on 2026-09-12 showed Google resolving the name
// "Aliaksandr Bandziuk" to at least five different people and companies — a
// rower, a transport firm (DP-TRANS.PL), a news item about a namesake, and a
// different developer whose LinkedIn outranked this site's owner for his own
// name. With the entity ambiguous, assistants can't tell which Bandziuk builds
// websites, so they name someone whose entity is clean instead.
//
// The fix is one Person node with a stable @id and an exhaustive sameAs list,
// emitted on every page, that every other schema on the site points at by
// reference rather than redeclaring inline.

export const SITE_URL = "https://www.bandziuk.com";

/** Stable node ids. Everything else references these instead of duplicating. */
export const PERSON_ID = `${SITE_URL}/#person`;
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const PERSON_NAME = "Aliaksandr Bandziuk";

/** Previously declared only inside the portfolio schema; belongs to the org. */
export const LOGO_URL =
  "https://cdn.sanity.io/images/x6jc462y/production/f070d11f862c00400711d6efca18504713a95c27-772x242.png";

/**
 * Every profile that belongs to this person. sameAs is what lets a search
 * engine merge these into one entity — an incomplete list is the single most
 * common reason entity disambiguation fails, so add new profiles here rather
 * than anywhere else.
 */
export const SAME_AS: string[] = [
  "https://www.linkedin.com/in/bandziuk",
  "https://dev.to/aliaksandrbandziuk",
  "https://medium.com/@aliaksandr_bandziuk",
  "https://themanifest.com/company/aliaksandr-bandziuk",
  "https://www.sortlist.com/agency/aliaksandr-bandziuk",
  "https://www.oferteo.pl/aliaksandr-bandziuk/firma/7647076",
  "https://www.gowork.pl/aliaksandr-bandziuk,27173802/dane-kontaktowe-firmy",
  "https://useme.com/pl/roles/contractor/aliaksandr-bandziuk,303312/",
  "https://www.hotfrog.pl/company/e5aac5f7932dc9651166af72287fb277",
  "https://www.cylex-polska.pl/firmy/bandziuk-%e2%80%94-web-development---seo-14526654.html",
];

/** BCP-47 tags for the languages the work is actually delivered in. */
export const KNOWS_LANGUAGE = ["en", "pl", "ru"];

type Graph = Record<string, unknown>;

/**
 * The person. Deliberately carries jobTitle and knowsAbout: those are the
 * fields an assistant reads to decide whether this entity matches a question
 * like "who builds multilingual Next.js sites".
 */
export function personNode(): Graph {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON_NAME,
    url: SITE_URL,
    jobTitle: "Web Developer and SEO Consultant",
    description:
      "Independent web developer and SEO consultant. Builds multilingual websites on Next.js and headless CMS, and handles their technical SEO and AI search visibility directly, without an agency layer.",
    knowsAbout: [
      "Next.js development",
      "Technical SEO",
      "Multilingual websites",
      "Core Web Vitals",
      "Structured data",
      "Headless CMS",
      "Generative Engine Optimization",
      "AI search visibility",
    ],
    knowsLanguage: KNOWS_LANGUAGE,
    sameAs: SAME_AS,
    worksFor: { "@id": ORG_ID },
  };
}

/**
 * The practice. ProfessionalService rather than Organization because the work
 * is a service business with a stated service area, and that is the type
 * assistants map "who can I hire for X" onto.
 */
export function organizationNode(): Graph {
  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: PERSON_NAME,
    alternateName: "Bandziuk — Web Development & SEO",
    url: SITE_URL,
    description:
      "Website development and SEO for businesses in Europe. Multilingual sites in English, Polish and Russian, built and optimised by one specialist.",
    logo: { "@type": "ImageObject", url: LOGO_URL },
    image: LOGO_URL,
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    knowsLanguage: KNOWS_LANGUAGE,
    sameAs: SAME_AS,
    areaServed: [
      { "@type": "Country", name: "Poland" },
      { "@type": "Country", name: "Cyprus" },
      { "@type": "Place", name: "Europe" },
    ],
    availableLanguage: KNOWS_LANGUAGE,
  };
}

export function webSiteNode(lang: string): Graph {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: PERSON_NAME,
    inLanguage: lang,
    publisher: { "@id": ORG_ID },
  };
}

/** The identity graph emitted once per page, site-wide. */
export function identityGraph(lang: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [personNode(), organizationNode(), webSiteNode(lang)],
  };
}

/** Reference helpers, so no other file hardcodes an inline Person again. */
export const personRef = () => ({ "@id": PERSON_ID });
export const orgRef = () => ({ "@id": ORG_ID });
