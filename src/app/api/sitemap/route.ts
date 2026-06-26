import { groq } from "next-sanity";
import { client } from "@/sanity/sanity.client";
import {
  getAllPathsForLang,
  getBlogPostsByLang,
  getAllPortfolioByLang,
} from "@/sanity/sanity.utils";
import { BASE_URL, localePrefix, findAltSlug } from "@/utils/hreflang";

const langs = ["en", "pl", "ru"];

type AlternateLink = { hreflang: string; href: string };

type SitemapPage = {
  url: string;
  changefreq: string;
  priority: number;
  alternates: AlternateLink[];
};

/** Build a self-consistent alternate set for a group of locale URLs. */
function buildAlts(
  urlsByLocale: Partial<Record<string, string>>,
): AlternateLink[] {
  const alts: AlternateLink[] = [];
  for (const [locale, href] of Object.entries(urlsByLocale)) {
    if (href) alts.push({ hreflang: locale, href });
  }
  const enUrl = urlsByLocale["en"];
  if (enUrl) alts.push({ hreflang: "x-default", href: enUrl });
  return alts;
}

/** Pre-build URL → alternates lookup for all content pages. */
async function buildAlternatesMap(): Promise<Map<string, AlternateLink[]>> {
  const map = new Map<string, AlternateLink[]>();

  // ── Singleton pages (always exist for all locales, URLs are formula-based) ──

  const singletons: Array<{ path: string; priority: number }> = [
    { path: "", priority: 1.0 },      // homepage
    { path: "/blog", priority: 0.9 },
    { path: "/portfolio", priority: 0.9 },
  ];

  for (const { path } of singletons) {
    const urlsByLocale: Partial<Record<string, string>> = {};
    for (const locale of langs) {
      urlsByLocale[locale] =
        locale === "en"
          ? `${BASE_URL}${path || "/"}`
          : `${BASE_URL}/${locale}${path}`;
    }
    const alts = buildAlts(urlsByLocale);
    for (const href of Object.values(urlsByLocale)) {
      if (href) map.set(href, alts);
    }
  }

  // ── Blog posts ──

  // Fetch EN blog posts with _translations (standard shape — slug object only)
  type BlogResult = { slug_en: string; _translations: Array<{ slug: Record<string, { current?: string }> }> };
  const enBlogs: BlogResult[] = await client.fetch(
    groq`*[_type == "blog" && language == "en"] {
      "slug_en": slug.en.current,
      "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{ slug }
    }`,
  );

  for (const blog of enBlogs) {
    const slugEn = blog.slug_en;
    if (!slugEn) continue;
    const urlsByLocale: Partial<Record<string, string>> = {
      en: `${BASE_URL}/blog/${slugEn}`,
    };
    for (const locale of ["pl", "ru"]) {
      const altSlug = findAltSlug(blog._translations, locale);
      if (altSlug) {
        urlsByLocale[locale] = `${BASE_URL}${localePrefix(locale)}/blog/${altSlug}`;
      }
    }
    const alts = buildAlts(urlsByLocale);
    for (const href of Object.values(urlsByLocale)) {
      if (href) map.set(href, alts);
    }
  }

  // ── Portfolio items ──

  type PortfolioResult = { slug_en: string; _translations: Array<{ slug: Record<string, { current?: string }> }> };
  const enPortfolio: PortfolioResult[] = await client.fetch(
    groq`*[_type == "portfolio" && language == "en"] {
      "slug_en": slug.en.current,
      "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{ slug }
    }`,
  );

  for (const item of enPortfolio) {
    const slugEn = item.slug_en;
    if (!slugEn) continue;
    const urlsByLocale: Partial<Record<string, string>> = {
      en: `${BASE_URL}/portfolio/${slugEn}`,
    };
    for (const locale of ["pl", "ru"]) {
      const altSlug = findAltSlug(item._translations, locale);
      if (altSlug) {
        urlsByLocale[locale] = `${BASE_URL}${localePrefix(locale)}/portfolio/${altSlug}`;
      }
    }
    const alts = buildAlts(urlsByLocale);
    for (const href of Object.values(urlsByLocale)) {
      if (href) map.set(href, alts);
    }
  }

  // ── Singlepage / service pages ──
  // Nested pages require full-path resolution via getAllPathsForLang.

  type SinglepageResult = { slug_en: string; _translations: Array<{ slug: Record<string, { current?: string }> }> };
  const enSinglepages: SinglepageResult[] = await client.fetch(
    groq`*[_type == "singlepage" && language == "en"] {
      "slug_en": slug.en.current,
      "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{ slug }
    }`,
  );

  // Pre-fetch full path arrays for alternate locales (cached within the request)
  const pathArraysByLocale: Record<string, string[][]> = {};
  for (const locale of langs) {
    pathArraysByLocale[locale] = await getAllPathsForLang(locale);
  }

  // Build lookup: last segment → full path array (per locale)
  const pathMapByLocale: Record<string, Map<string, string[]>> = {};
  for (const locale of langs) {
    pathMapByLocale[locale] = new Map(
      pathArraysByLocale[locale].map((arr) => [arr[arr.length - 1], arr]),
    );
  }

  for (const page of enSinglepages) {
    const slugEn = page.slug_en;
    if (!slugEn) continue;
    const enPath = pathMapByLocale["en"].get(slugEn);
    if (!enPath) continue;

    const urlsByLocale: Partial<Record<string, string>> = {
      en: `${BASE_URL}/${enPath.join("/")}`,
    };

    for (const locale of ["pl", "ru"]) {
      const altSlug = findAltSlug(page._translations, locale);
      if (!altSlug) continue;
      const altPath = pathMapByLocale[locale].get(altSlug);
      if (!altPath) continue;
      urlsByLocale[locale] = `${BASE_URL}${localePrefix(locale)}/${altPath.join("/")}`;
    }

    const alts = buildAlts(urlsByLocale);
    for (const href of Object.values(urlsByLocale)) {
      if (href) map.set(href, alts);
    }
  }

  return map;
}

async function generateSitemap(): Promise<SitemapPage[]> {
  const pages: SitemapPage[] = [];
  const alternatesMap = await buildAlternatesMap();

  const getAlts = (url: string) => alternatesMap.get(url) ?? [];

  for (const lang of langs) {
    const prefix = lang === "en" ? "" : `/${lang}`;

    // — Homepage —
    const homeUrl = lang === "en" ? `${BASE_URL}/` : `${BASE_URL}/${lang}`;
    pages.push({ url: homeUrl, changefreq: "weekly", priority: 1.0, alternates: getAlts(homeUrl) });

    // — Portfolio items —
    const portfolioProjects = await getAllPortfolioByLang(lang);
    for (const proj of portfolioProjects) {
      const slug = proj?.slug?.[lang]?.current;
      if (!slug) continue;
      const url = `${BASE_URL}${prefix}/portfolio/${slug}`;
      pages.push({ url, changefreq: "weekly", priority: 0.8, alternates: getAlts(url) });
    }

    // — Portfolio listing —
    const portfolioListUrl = `${BASE_URL}${prefix}/portfolio`;
    pages.push({ url: portfolioListUrl, changefreq: "weekly", priority: 0.9, alternates: getAlts(portfolioListUrl) });

    // — Singlepage / service pages —
    const allPaths = await getAllPathsForLang(lang);
    for (const segments of allPaths) {
      const url =
        lang === "en"
          ? `${BASE_URL}/${segments.join("/")}`
          : `${BASE_URL}/${lang}/${segments.join("/")}`;
      pages.push({
        url,
        changefreq: "weekly",
        priority: segments.length === 1 ? 0.9 : 0.8,
        alternates: getAlts(url),
      });
    }

    // — Blog listing —
    const blogListUrl = `${BASE_URL}${prefix}/blog`;
    pages.push({ url: blogListUrl, changefreq: "weekly", priority: 0.9, alternates: getAlts(blogListUrl) });

    // — Blog posts —
    const blogPosts = await getBlogPostsByLang(lang);
    for (const post of blogPosts) {
      const slug = post.slug?.[lang]?.current;
      if (!slug) continue;
      const url = `${BASE_URL}${prefix}/blog/${slug}`;
      pages.push({ url, changefreq: "weekly", priority: 0.8, alternates: getAlts(url) });
    }
  }

  return pages;
}

export async function GET() {
  const pages = await generateSitemap();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(({ url, changefreq, priority, alternates }) => {
    const altXml =
      alternates.length > 0
        ? `\n    ${alternates
            .map(
              (a) =>
                `<xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`,
            )
            .join("\n    ")}`
        : "";
    return `
  <url>
    <loc>${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>${altXml}
  </url>`;
  })
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
