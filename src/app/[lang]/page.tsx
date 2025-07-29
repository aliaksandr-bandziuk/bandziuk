import { Metadata } from "next";
import Link from "next/link";
import {
  getFormStandardDocumentByLang,
  getHomePageByLang,
} from "../../sanity/sanity.utils";
import { i18n } from "@/i18n.config";
import { Translation } from "@/types/homepage";
import Footer from "../components/layout/Footer/Footer";
import HeaderWrapper from "../components/wrappers/HeaderWrapper/HeaderWrapper";
import { FormStandardDocument } from "@/types/formStandardDocument";
import FormStatic from "../components/forms/FormStatic/FormStatic";
import LogosCarousel from "../components/sections/LogosCarousel/LogosCarousel";
import homepage from "@/sanity/schemaTypes/homepage";
import Hero from "../components/sections/Hero/Hero";
import ModalFull from "../components/modals/ModalFull/ModalFull";
import Header from "../components/layout/Header/Header";
import About from "../components/sections/About/About";
import Services from "../components/sections/Services/Services";
import Problems from "../components/sections/Problems/Problems";
import Portfolio from "../components/sections/Portfolio/Portfolio";
import WorkProcess from "../components/sections/WorkProcess/WorkProcess";
import Reviews from "../components/sections/Reviews/Reviews";
import Contacts from "../components/sections/Contacts/Contacts";
import FaqHomepage from "../components/sections/FaqHomepage/FaqHomepage";

type Props = {
  params: { lang: string; slug: string };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const homePage = await getHomePageByLang(params.lang);
  return {
    title: homePage?.seo?.metaTitle,
    description: homePage?.seo?.metaDescription,
  };
}

export default async function Home({ params }: Props) {
  const homePage = await getHomePageByLang(params.lang);

  const formDocument: FormStandardDocument =
    await getFormStandardDocumentByLang(params.lang);

  // console.log("homePage", homePage);
  // console.log("formDocument", formDocument);

  const homePageTranslationSlugs: { [key: string]: { current: string } }[] =
    homePage?._translations.map((item) => {
      const newItem: { [key: string]: { current: string } } = {};

      for (const key in item.slug) {
        if (key !== "_type") {
          newItem[key] = { current: item.slug[key].current };
        }
      }
      return newItem;
    });

  const translations = i18n.languages.reduce<Translation[]>((acc, lang) => {
    const translationSlug = homePageTranslationSlugs
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
            path: `/${lang.id}`,
          },
        ]
      : acc;
  }, []);

  return (
    <>
      <Header params={params} translations={translations} />
      <main>
        <Hero heroSection={homePage?.heroSection} />
        <About aboutSection={homePage?.aboutSection} />
        <Services servicesSection={homePage?.servicesSection} />
        <Problems problemsSection={homePage?.problemsSection} />
        {/* <Portfolio /> */}
        <WorkProcess processSection={homePage?.processSection} />
        <Reviews reviews={homePage?.reviewsSection} />
        <FaqHomepage faqSection={homePage?.faqSection} />
      </main>
      <Footer params={params} formDocument={formDocument} />
      <ModalFull lang={params.lang} formDocument={formDocument} />
    </>
  );
}
