import { groq } from "next-sanity";
import { client } from "@/sanity/sanity.client";
import { getAllPathsForLang } from "@/sanity/sanity.utils";
import { BASE_URL, localePrefix, findAltSlug } from "@/utils/hreflang";

export type IndexNowDocType = "singlepage" | "blog" | "portfolio";

export type IndexNowWebhookPayload = {
  _id: string;
  _type: string;
  language: string;
  slug?: { current?: string | null } | null;
};

const LOCALES = ["en", "pl", "ru"] as const;
type Locale = (typeof LOCALES)[number];

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

type TranslationsResult = {
  slug: string | null;
  _translations: Array<{
    slug?: Record<string, { current?: string | null } | null> | null;
  }>;
};

/**
 * Resolve every locale URL that currently exists for one published document.
 *
 * Nested singlepage URLs go through getAllPathsForLang — the same
 * parent-chain resolver already used by generateStaticParams, the sitemap
 * route, and the page's own canonical URL (fixed in four places this
 * session: servicesParentSlug, ServiceList's parentSlug, buildDynamicRedirects,
 * and this page's own `url`). This is intentionally not a fifth builder.
 *
 * A locale is only included if a real translation slug resolves to a real
 * path. There is no per-document noindex flag in this schema — this lookup
 * IS the reachability guard: a page that isn't in getAllPathsForLang's output
 * (unpublished, orphaned, or a broken parent chain) structurally cannot
 * produce a URL here, so nothing unreachable is ever submitted. If a real
 * noindex field is added later, check it here before adding the URL.
 */
export async function resolveDocumentUrls(
  payload: IndexNowWebhookPayload,
): Promise<string[]> {
  const { _id, _type, language, slug } = payload;
  const ownSlug = slug?.current;
  if (!ownSlug || !isLocale(language)) return [];
  if (_type !== "singlepage" && _type !== "blog" && _type !== "portfolio") {
    return [];
  }

  const result = await client.fetch<TranslationsResult | null>(
    groq`*[_id == $id][0]{
      "slug": slug[$language].current,
      "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{ slug }
    }`,
    { id: _id, language },
  );
  if (!result?.slug) return [];

  const translations = result._translations ?? [];
  const urls = new Set<string>();

  if (_type === "singlepage") {
    for (const locale of LOCALES) {
      const localeSlug =
        locale === language ? result.slug : findAltSlug(translations, locale);
      if (!localeSlug) continue;

      const paths = await getAllPathsForLang(locale);
      const match = paths.find((arr) => arr[arr.length - 1] === localeSlug);
      if (!match) continue;

      urls.add(`${BASE_URL}${localePrefix(locale)}/${match.join("/")}`);
    }
  } else {
    const segment = _type === "blog" ? "blog" : "portfolio";
    for (const locale of LOCALES) {
      const localeSlug =
        locale === language ? result.slug : findAltSlug(translations, locale);
      if (!localeSlug) continue;

      urls.add(`${BASE_URL}${localePrefix(locale)}/${segment}/${localeSlug}`);
    }
  }

  return Array.from(urls);
}
