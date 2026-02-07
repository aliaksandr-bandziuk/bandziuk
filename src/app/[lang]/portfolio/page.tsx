import Footer from "@/app/components/layout/Footer/Footer";
import Header from "@/app/components/layout/Header/Header";
import PortfolioItems from "@/app/components/layout/PortfolioItems/PortfolioItems";
import ModalFull from "@/app/components/modals/ModalFull/ModalFull";
import { i18n } from "@/i18n.config";
import {
  getPortfolioPageByLang,
  getFormStandardDocumentByLang,
  getPortfolioItemsByLang,
} from "@/sanity/sanity.utils";
import { FormStandardDocument } from "@/types/formStandardDocument";
import { Translation } from "@/types/homepage";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: { lang: string };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getPortfolioPageByLang(params.lang);

  const langPrefix = params.lang === "en" ? "" : `/${params.lang}`;
  const pathname = "/portfolio";
  const canonicalPath = `${langPrefix}${pathname}`;

  return {
    title: data?.metaTitle,
    description: data?.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: data?.metaTitle,
      description: data?.metaDescription,
      url: canonicalPath,
    },
    twitter: {
      title: data?.metaTitle,
      description: data?.metaDescription,
    },
  };
}

const PortfolioAll = async ({ params }: Props) => {
  const totalProjects = await getPortfolioItemsByLang(params.lang);
  const portfolioPage = await getPortfolioPageByLang(params.lang);

  const formDocument: FormStandardDocument =
    await getFormStandardDocumentByLang(params.lang);

  const portfolioPageTranslationSlugs: {
    [key: string]: { current: string };
  }[] = portfolioPage?._translations.map((item) => {
    const newItem: { [key: string]: { current: string } } = {};

    for (const key in item.slug) {
      if (key !== "_type") {
        newItem[key] = { current: item.slug[key].current };
      }
    }
    return newItem;
  });

  const translations = i18n.languages.reduce<Translation[]>((acc, lang) => {
    const translationSlug = portfolioPageTranslationSlugs
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
            path: `/${lang.id}/${translationSlug}`,
          },
        ]
      : acc;
  }, []);

  return (
    <>
      <Header params={params} translations={translations} />
      <main>
        <PortfolioItems totalProjects={totalProjects} lang={params.lang} />
      </main>
      <Footer params={params} formDocument={formDocument} />
      <ModalFull lang={params.lang} formDocument={formDocument} />
    </>
  );
};

export default PortfolioAll;
