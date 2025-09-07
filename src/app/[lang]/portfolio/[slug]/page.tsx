import React from "react";
import { Metadata } from "next";
import {
  getFormStandardDocumentByLang,
  getPortfolioByLang,
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
import Script from "next/script";

type Props = {
  params: { lang: string; slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = params;
  const data = await getPortfolioByLang(lang, slug);

  let previewImageUrl: string | undefined = undefined;
  if (data?.previewImage) {
    previewImageUrl = urlFor(data.previewImage).width(1200).url();
  }

  return {
    title: data?.seo.metaTitle,
    description: data?.seo.metaDescription,
    openGraph: {
      title: data?.seo.metaTitle,
      description: data?.seo.metaDescription,
      images: previewImageUrl ? [{ url: previewImageUrl }] : [],
    },
  };
}

const PortfolioPage = async ({ params }: Props) => {
  const { lang, slug } = params;
  const portfolio = await getPortfolioByLang(lang, slug);

  if (!portfolio) {
    return null;
  }

  const generateSlug = (
    slugObj: { [lang: string]: { current?: string } } | undefined,
    language: string
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
        []
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

      <Script
        id="portfolio-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default PortfolioPage;
