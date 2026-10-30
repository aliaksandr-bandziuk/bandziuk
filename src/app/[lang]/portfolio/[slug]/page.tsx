import { assertLocale } from "@/lib/assertLocale";
import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BASE_URL, localePrefix, findAltSlug, buildLanguageAlternates } from "@/utils/hreflang";
import {
  getFormStandardDocumentByLang,
  getPortfolioByLang,
  getStaticSlugParams,
} from "@/sanity/sanity.utils";
import { i18n } from "@/i18n.config";
import { Translation } from "@/types/homepage";
import { urlFor } from "@/sanity/sanity.client";
import { FormStandardDocument } from "@/types/formStandardDocument";
import Header from "@/app/components/layout/Header/Header";
import Footer from "@/app/components/layout/Footer/Footer";
import ModalFull from "@/app/components/modals/ModalFull/ModalFull";
import PortfolioIntro from "@/app/components/sections/PortfolioIntro/PortfolioIntro";
import BreadcrumbsPortfolio from "@/app/components/layout/BreadcrumbsPortfolio/BreadcrumbsPortfolio";
import PortfolioChallenges from "@/app/components/sections/PortfolioChallenges/PortfolioChallenges";
import PortfolioScreenshots from "@/app/components/sections/PortfolioScreenshots/PortfolioScreenshots";
import ContentDescription from "@/app/components/layout/ContentDescription/ContentDescription";
import PortfolioTechnologies from "@/app/components/sections/PortfolioTechnologies/PortfolioTechnologies";
import { getPortfolioJsonLd } from "@/app/components/seo/SchemaPortfolio/SchemaPortfolio";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

// Without this the route renders on every request and is never cached (see
// getStaticSlugParams). Posts published after a build render once, then cache.
export async function generateStaticParams() {
  return getStaticSlugParams("portfolio", i18n.languages.map((l) => l.id));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  assertLocale(params.lang);
  const { lang, slug } = params;
  const data = await getPortfolioByLang(lang, slug);

  // No case study with this slug in this locale. The response is already
  // streaming with status 200 by the time anything here can object, so the
  // status cannot say "gone". Say it in the head instead: no canonical, no
  // alternates, explicit noindex. Only an empty query result reaches this
  // branch; a failed Sanity request throws, so a live
  // case study can never be noindexed by a transient API error.
  //
  // Measured on localhost, Next 16.3.5, 30.10.2026 -- do not re-litigate:
  //   * calling notFound() HERE instead of returning this head does NOT set
  //     the status. It renders the 404 page under a 200 AND loses the noindex,
  //     which is worse than this.
  //   * removing the Suspense boundaries does not help either: tried with
  //     blog/loading.tsx and portfolio/loading.tsx gone, then with
  //     [lang]/loading.tsx gone as well. Still 200.
  //   * [...slug] answers a real 404, but not because of where it calls
  //     notFound(): it sets `export const dynamicParams = false`, so the
  //     router rejects a slug missing from generateStaticParams before any
  //     page code runs. That is the only thing that produces a 404 status.
  // We cannot copy that here: generateStaticParams is evaluated at build, so
  // a case study published afterwards would 404 until the next deploy -- and
  // these are published straight into Sanity, with no commit to trigger one.
  // So this is a deliberate soft 404. noindex keeps it out of the index; the
  // cost is that Search Console lists it under "Soft 404".
  if (!data) {
    return {
      title: "404",
      robots: { index: false, follow: false },
    };
  }

  const canonicalPath = `${localePrefix(lang)}/portfolio/${slug}`;

  let previewImageUrl: string | undefined = undefined;
  if (data?.previewImage) {
    previewImageUrl = urlFor(data.previewImage).width(1200).url();
  }

  // Build hreflang alternates from _translations — only emit locales that exist
  const translations = data?._translations ?? [];
  const altEntries: Record<string, string> = {
    [lang]: `${BASE_URL}${localePrefix(lang)}/portfolio/${slug}`,
  };
  for (const locale of ["en", "pl", "ru"]) {
    if (locale === lang) continue;
    const altSlug = findAltSlug(translations, locale);
    if (!altSlug) continue;
    altEntries[locale] = `${BASE_URL}${localePrefix(locale)}/portfolio/${altSlug}`;
  }

  return {
    title: data?.seo?.metaTitle,
    description: data?.seo?.metaDescription,
    alternates: {
      canonical: canonicalPath,
      languages: buildLanguageAlternates(altEntries),
    },
    openGraph: {
      title: data?.seo?.metaTitle,
      description: data?.seo?.metaDescription,
      images: previewImageUrl ? [{ url: previewImageUrl }] : [],
      url: canonicalPath,
    },
    twitter: {
      title: data?.seo?.metaTitle,
      description: data?.seo?.metaDescription,
      images: previewImageUrl ? [{ url: previewImageUrl }] : [],
    },
  };
}

const PortfolioPage = async (props: Props) => {
  const params = await props.params;

  assertLocale(params.lang);
  const { lang, slug } = params;
  const portfolio = await getPortfolioByLang(lang, slug);

  if (!portfolio) {
    notFound();
  }

  const generateSlug = (
    slugObj: { [lang: string]: { current?: string } } | undefined,
    language: string,
  ) => {
    const cur = slugObj?.[language]?.current;
    if (!cur) return "#";

    return language === "en"
      ? `https://www.bandziuk.com/portfolio/${cur}`
      : `https://www.bandziuk.com/${language}/portfolio/${cur}`;
  };

  const canonical = generateSlug(portfolio?.slug, lang);
  const previewImageUrl = portfolio?.previewImage
    ? urlFor(portfolio.previewImage).width(1200).url()
    : undefined;

  const jsonLd = getPortfolioJsonLd({
    doc: portfolio,
    lang,
    canonical,
    previewImageUrl,
  });

  // console.log("faq", portfolio.faq);

  const formDocument: FormStandardDocument =
    await getFormStandardDocumentByLang(params.lang);

  const propertyPageTranslationSlugs: {
    [key: string]: { current: string };
  }[] = portfolio?._translations.map((item) => {
    const newItem: { [key: string]: { current: string } } = {};

    for (const key in item.slug) {
      if (key !== "_type") {
        newItem[key] = { current: item.slug[key].current };
      }
    }
    return newItem;
  });

  const translations = i18n.languages.reduce<Translation[]>((acc, lang) => {
    const translationSlug = propertyPageTranslationSlugs
      ?.reduce(
        (acc: string[], slug: { [key: string]: { current: string } }) => {
          const current = slug[lang.id]?.current;
          if (current) {
            acc.push(current);
          }
          return acc;
        },
        [],
      )
      .join(" ");

    return translationSlug
      ? [
          ...acc,
          {
            language: lang.id,
            path: `/${lang.id}/portfolio/${translationSlug}`,
          },
        ]
      : acc;
  }, []);

  return (
    <>
      <Header params={params} translations={translations} />
      <BreadcrumbsPortfolio
        lang={params.lang}
        segments={[slug]}
        currentTitle={portfolio.title}
      />
      <main>
        <PortfolioIntro
          title={portfolio.fullTitle}
          excerpt={portfolio.excerpt}
          previewImage={portfolio.previewImage}
          keyFeatures={portfolio.keyFeatures}
          lang={params.lang}
        />
        <PortfolioChallenges
          lang={params.lang}
          challenges={portfolio.challenges}
        />
        <PortfolioScreenshots
          lang={params.lang}
          screenshots={portfolio.screenshots}
        />
        <ContentDescription
          lang={params.lang}
          content={portfolio.mainContent}
        />
        <PortfolioTechnologies
          lang={params.lang}
          technologies={portfolio.technologiesUsed}
        />
      </main>

      <Footer params={params} formDocument={formDocument} />
      <ModalFull lang={params.lang} formDocument={formDocument} />

      {/* Plain <script>: next/script defers JSON-LD past hydration, so it
          never reaches the server HTML. See SchemaBlogPost for the check. */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default PortfolioPage;
