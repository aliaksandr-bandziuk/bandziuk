// app/[lang]/[[...slug]]/page.tsx
import React from "react";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { client } from "@/sanity/sanity.client";
import { i18n } from "@/i18n.config";
import {
  getFormStandardDocumentByLang,
  getSinglePageByLang,
  getAllPathsForLang,
} from "@/sanity/sanity.utils";
import {
  AccordionBlock,
  TextContent,
  ContactFullBlock,
  TeamBlock,
  LocationBlock,
  ImageFullBlock,
  DoubleTextBlock,
  ButtonBlock,
  ImageBulletsBlock,
  ReviewsFullBlock,
  ProjectsSectionBlock,
  FaqBlock,
  FormMinimalBlock,
  HowWeWorkBlock,
  BulletsBlock,
  TableBlock,
  ServiceFeaturesBlock,
} from "@/types/blog";
import { FormStandardDocument } from "@/types/formStandardDocument";
import {
  BenefitsBlock as BenefitsBlockType,
  FaqSection,
  Translation,
} from "@/types/homepage";
import { Singlepage } from "@/types/singlepage";
import { Metadata } from "next";
import TextContentComponent from "@/app/components/blocks/TextContentComponent/TextContentComponent";
import { StructuredData } from "@/app/components/seo/StructuredData/StructuredData";
import AccordionContainer from "@/app/components/shared/AccordionContainer/AccordionContainer";
import Header from "@/app/components/layout/Header/Header";
import Footer from "@/app/components/layout/Footer/Footer";
import ModalFull from "@/app/components/modals/ModalFull/ModalFull";
import Breadcrumbs from "@/app/components/layout/Breadcrumbs/Breadcrumbs";
import PropertyIntro from "@/app/components/blocks/PropertyIntro/PropertyIntro";
import TableBlockComponent from "@/app/components/blocks/TableBlockComponent/TableBlockComponent";
import ServiceFeaturesBlockComponent from "@/app/components/blocks/ServiceFeaturesBlockComponent/ServiceFeaturesBlockComponent";
import ImageFullBlockComponent from "@/app/components/blocks/ImageFullBlockComponent/ImageFullBlockComponent";
import FaqHomepage from "@/app/components/sections/FaqHomepage/FaqHomepage";
import ServiceList from "@/app/components/sections/ServiceList/ServiceList";

type Props = {
  params: {
    lang: string;
    slug: string[];
  };
};

export const dynamicParams = false;
export const revalidate = 60;

/**
 * Собираем все combinations [lang, slug[]] для SSG
 */
export async function generateStaticParams(): Promise<Props["params"][]> {
  const langs = i18n.languages.map((l) => l.id);
  const paths: Props["params"][] = [];

  for (const lang of langs) {
    // получаем у каждого документа current и parent
    const items: { current: string; parent?: string }[] = await client.fetch(
      groq`*[_type=='singlepage' && language==$lang]{
        "current": slug[$lang].current,
        "parent": parentPage->slug[$lang].current
      }`,
      { lang }
    );

    // строим вложенные массивы slug
    const map: Record<string, string[]> = {};
    items.forEach(({ current, parent }) => {
      if (!parent) map[current] = [current];
    });
    let added = true;
    while (added) {
      added = false;
      items.forEach(({ current, parent }) => {
        if (parent && map[parent] && !map[current]) {
          map[current] = [...map[parent], current];
          added = true;
        }
      });
    }

    // теперь пушим только:
    // • root-страницы (parent undefined) — slugArr.length === 1
    // • реальные дочерние (slugArr.length > 1)
    Object.values(map).forEach((slugArr) => {
      const last = slugArr[slugArr.length - 1];
      const hadParent = items.find((i) => i.current === last)?.parent;
      if (!hadParent || slugArr.length > 1) {
        paths.push({ lang, slug: slugArr });
      }
    });
  }

  return paths;
}

/**
 * Динамическая SEO-мета
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug = [] } = params;
  const current = slug[slug.length - 1] || "";
  const page = (await getSinglePageByLang(lang, current)) as Singlepage | null;

  return {
    title: page?.seo.metaTitle,
    description: page?.seo.metaDescription,
  };
}

const SinglePage = async ({ params }: Props) => {
  const { lang, slug } = params;
  const current = slug[slug.length - 1] || "";
  const page = (await getSinglePageByLang(lang, current)) as Singlepage | null;

  if (!page) {
    return <p>Страница не найдена</p>;
  }

  if (slug.length === 1 && page?.parentPage) {
    notFound();
  }

  const parentSlug = page.parentPage?.slug[lang]?.current;
  const parentTitle = page.parentPage?.title;

  const formDocument: FormStandardDocument =
    await getFormStandardDocumentByLang(lang);

  const allBlocks = page.contentBlocks || [];
  const sdBlocks = allBlocks.filter(
    (b): b is ContactFullBlock | TeamBlock | LocationBlock | ReviewsFullBlock =>
      [
        "contactFullBlock",
        "locationBlock",
        "teamBlock",
        "reviewsFullBlock",
      ].includes(b._type)
  );

  const generateSlug = (slugObj: any, language: string) => {
    const cur = slugObj?.[language]?.current;
    if (!cur) return "#";
    return language === "en"
      ? `https://www.bandziuk.com/${cur}`
      : `https://www.bandziuk.com/${language}/${cur}`;
  };

  const url = generateSlug({ [lang]: { current } }, lang);
  const structuredDataProps = {
    slug: current,
    lang,
    metaTitle: page.seo.metaTitle,
    metaDescription: page.seo.metaDescription,
    url,
    blocks: sdBlocks,
  };

  // Правильный маппинг переводов без ошибки TS
  const translations: Translation[] = [];
  for (const { id: code } of i18n.languages) {
    if (code === lang) continue; // пропускаем текущий язык

    // находим перевод слуга текущей страницы
    const childSlug = page._translations.find((t) => Boolean(t.slug[code]))
      ?.slug[code].current;
    if (!childSlug) continue;

    // получаем все пути для этого языка
    const allPaths = await getAllPathsForLang(code);
    // ищем путь, у которого последний сегмент === childSlug
    const match = allPaths.find((arr) => arr[arr.length - 1] === childSlug);
    if (!match) continue;

    translations.push({
      language: code,
      path: `/${code}/${match.join("/")}`,
    });
  }

  const renderContentBlock = (block: any) => {
    switch (block._type) {
      case "textContent":
        return (
          <TextContentComponent key={block._key} block={block as TextContent} />
        );
      case "serviceFeaturesBlock":
        return (
          <ServiceFeaturesBlockComponent
            key={block._key}
            block={block as ServiceFeaturesBlock}
          />
        );
      // case "accordionBlock":
      //   return (
      //     <AccordionContainer
      //       key={block._key}
      //       block={block as AccordionBlock}
      //     />
      //   );
      // case "contactFullBlock":
      //   return (
      //     <ContactFullBlockComponent
      //       key={block._key}
      //       block={block as ContactFullBlock}
      //       lang={lang}
      //     />
      //   );
      case "imageFullBlock":
        return (
          <ImageFullBlockComponent
            key={block._key}
            block={block as ImageFullBlock}
          />
        );
      // case "buttonBlock":
      //   return (
      //     <ButtonBlockComponent key={block._key} block={block as ButtonBlock} />
      //   );
      // case "imageBulletsBlock":
      //   return (
      //     <ImageBulletsBlockComponent
      //       key={block._key}
      //       block={block as ImageBulletsBlock}
      //     />
      //   );
      // внутри renderContentBlock
      case "faqBlock": {
        const fb = block as FaqBlock;

        // Собираем структуру, которую ждёт FaqHomepage
        const faqSection: FaqSection = {
          // если каких-то полей нет в твоём FaqBlock — подставляем пустые строки
          _key: fb._key, // добавили
          _type: "faqSection",
          title: (fb as any).title ?? "",
          pretitle: (fb as any).pretitle ?? "",
          subtitle: (fb as any).subtitle ?? "",
          faq: fb.faq, // это AccordionBlock
        };

        return <FaqHomepage key={fb._key} faqSection={faqSection} />;
      }

      case "tableBlock":
        return (
          <TableBlockComponent key={block._key} block={block as TableBlock} />
        );
      // default:
      //   return <p key={block._key}>Unsupported block type</p>;
    }
  };

  return (
    <>
      <Header params={params} translations={translations} />
      <StructuredData {...structuredDataProps} />
      <main className="singlepage">
        {page.previewImage && page.allowIntroBlock && (
          <>
            <PropertyIntro
              title={page.title}
              previewImage={page.previewImage}
              excerpt={page.excerpt}
              lang={lang}
            />
            <Breadcrumbs
              lang={lang}
              segments={params.slug}
              currentTitle={page.title}
            />
          </>
        )}
        {page.pageType === "servicesIndex" && (
          <ServiceList
            services={page.childrenServices || []}
            lang={lang}
            parentSlug={page.slug[lang]?.current}
          />
        )}
        {allBlocks.map(renderContentBlock)}
      </main>
      <Footer params={params} formDocument={formDocument} />
      <ModalFull lang={lang} formDocument={formDocument} />
    </>
  );
};

export default SinglePage;
