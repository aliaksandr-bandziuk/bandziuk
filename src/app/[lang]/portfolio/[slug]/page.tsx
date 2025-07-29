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
  const project = await getPortfolioByLang(lang, slug);

  if (!project) {
    return null;
  }

  // console.log("faq", project.faq);

  const formDocument: FormStandardDocument =
    await getFormStandardDocumentByLang(params.lang);

  const propertyPageTranslationSlugs: {
    [key: string]: { current: string };
  }[] = project?._translations.map((item) => {
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
            path: `/${lang.id}/projects/${translationSlug}`,
          },
        ]
      : acc;
  }, []);

  return (
    <>
      <Header params={params} translations={translations} />
      <main>
        {/* <PropertyIntro
          title={project.title}
          excerpt={project.excerpt}
          previewImage={project.previewImage}
          videoId={project.videoId}
          videoPreview={project.videoPreview}
          lang={params.lang}
        /> */}
      </main>

      <Footer params={params} />
      <ModalFull lang={params.lang} formDocument={formDocument} />
    </>
  );
};

export default PortfolioPage;
