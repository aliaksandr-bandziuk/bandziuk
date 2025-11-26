import React from "react";
// import LastArticles from "@/app/components/LastArticles/LastArticles";
// import LinkPrimary from "@/app/components/LinkPrimary/LinkPrimary";

import { i18n } from "@/i18n.config";
import {
  getBlogPostByLang,
  getFormStandardDocumentByLang,
} from "@/sanity/sanity.utils";
import {
  AccordionBlock,
  TextContent,
  ImageFullBlock,
  DoubleTextBlock,
  ButtonBlock,
  FaqBlock,
  FormMinimalBlock,
  TableBlock,
  RelatedArticle as RelatedArticleType,
} from "@/types/blog";
import { FormStandardDocument } from "@/types/formStandardDocument";
import { Metadata } from "next";
import { Translation } from "@/types/homepage";
import TextContentComponent from "@/app/components/blocks/TextContentComponent/TextContentComponent";
import AccordionContainer from "@/app/components/shared/AccordionContainer/AccordionContainer";
import ImageFullBlockComponent from "@/app/components/blocks/ImageFullBlockComponent/ImageFullBlockComponent";
import DoubleTextBlockComponent from "@/app/components/blocks/DoubleTextBlockComponent/DoubleTextBlockComponent";
import FormMinimalBlockComponent from "@/app/components/blocks/FormMinimalBlockComponent/FormMinimalBlockComponent";
import TableBlockComponent from "@/app/components/blocks/TableBlockComponent/TableBlockComponent";
import Header from "@/app/components/layout/Header/Header";
import SchemaBlogPost from "@/app/components/seo/SchemaBlogPost/SchemaBlogPost";
import FormStatic from "@/app/components/forms/FormStatic/FormStatic";
import Footer from "@/app/components/layout/Footer/Footer";
import ModalFull from "@/app/components/modals/ModalFull/ModalFull";
import BreadcrumbsBlog from "@/app/components/layout/BreadcrumbsBlog/BreadcrumbsBlog";
import BlogIntro from "@/app/components/layout/BlogIntro/BlogIntro";
import RelatedArticle from "@/app/components/ui/RelatedArticle/RelatedArticle";
import { Bitter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

type Props = {
  params: { lang: string; slug: string };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = params;
  const data = await getBlogPostByLang(lang, slug);

  return {
    title: data?.seo.metaTitle,
    description: data?.seo.metaDescription,
  };
}

const PagePost = async ({ params }: Props) => {
  const { lang, slug } = params;
  const blog = await getBlogPostByLang(lang, slug);

  if (!blog) {
    return <p>Страница не найдена</p>;
  }

  const formDocument: FormStandardDocument =
    await getFormStandardDocumentByLang(params.lang);

  const blogPageTranslationSlugs: { [key: string]: { current: string } }[] =
    blog?._translations
      ?.filter((item) => item && item.slug)
      .map((item) => {
        const newItem: { [key: string]: { current: string } } = {};

        for (const key in item.slug) {
          if (key !== "_type" && item.slug[key]) {
            newItem[key] = { current: item.slug[key].current };
          }
        }
        return newItem;
      }) || [];

  const translations = i18n.languages.reduce<Translation[]>((acc, lang) => {
    const translationSlug = blogPageTranslationSlugs
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
            path: `/${lang.id}/blog/${translationSlug}`,
          },
        ]
      : acc;
  }, []);

  const renderContentBlock = (block: any) => {
    switch (block._type) {
      case "textContent":
        return (
          <TextContentComponent key={block._key} block={block as TextContent} />
        );
      case "accordionBlock":
        return (
          <AccordionContainer
            key={block._key}
            block={block as AccordionBlock}
          />
        );
      case "imageFullBlock":
        return (
          <ImageFullBlockComponent
            key={block._key}
            block={block as ImageFullBlock}
          />
        );
      case "doubleTextBlock":
        return (
          <DoubleTextBlockComponent
            key={block._key}
            block={block as DoubleTextBlock}
          />
        );
      // case "buttonBlock":
      //   return (
      //     <ButtonBlockComponent key={block._key} block={block as ButtonBlock} />
      //   );
      case "faqBlock":
        return (
          <div className="container" key={block._key}>
            <AccordionContainer block={(block as FaqBlock).faq} />
          </div>
        );
      case "formMinimalBlock":
        return (
          <FormMinimalBlockComponent
            key={(block as FormMinimalBlock)._key}
            form={(block as FormMinimalBlock).form}
            lang={lang}
            offerButtonCustomText={(block as FormMinimalBlock).buttonText}
          />
        );
      case "tableBlock":
        return (
          <TableBlockComponent key={block._key} block={block as TableBlock} />
        );
      default:
        return <p key={block._key}>Unsupported block type</p>;
    }
  };

  const currentPostId = blog._id;

  return (
    <>
      <Header params={params} translations={translations} />
      <SchemaBlogPost blog={blog} lang={lang} />
      <BreadcrumbsBlog
        lang={lang}
        segments={[slug]}
        currentTitle={blog.title}
      />
      <main>
        <BlogIntro
          title={blog.title}
          excerpt={blog.excerpt}
          categoryTitle={blog.category.title}
          date={blog.publishedAt}
          previewImage={blog.previewImage}
        />
        <div className="container">
          <div className="post-grid">
            <div className="post-content">
              <article>
                {blog.contentBlocks &&
                  blog.contentBlocks.map((block) => renderContentBlock(block))}
              </article>
              {/* <BlogButtonWrapper>
                <LinkPrimary href={`/${lang}/blog`}>
                  {lang === "en"
                    ? "Back to all articles"
                    : "Вернуться ко всем статьям"}
                </LinkPrimary>
              </BlogButtonWrapper> */}
            </div>
            <div className="post-content sidebar">
              <aside className="aside"></aside>
              {/* {blog.popularProperties && (
                <PopularProperties
                  lang={lang}
                  popularProperties={blog.popularProperties}
                />
              )} */}
            </div>
          </div>
          {blog.relatedArticles && blog.relatedArticles.length > 0 && (
            <div className="related-articles-section">
              <h2 className={bitter.className}>
                {lang === "en" ? "Related Articles" : "Похожие статьи"}
              </h2>
              <div className="related-articles-list">
                {blog.relatedArticles.map((article: RelatedArticleType) => (
                  <RelatedArticle
                    key={article._id}
                    title={article.title}
                    category={article.category}
                    slug={article.slug}
                    previewImage={article.previewImage}
                    lang={lang}
                  />
                ))}
              </div>
            </div>
          )}
          {/* <LastArticles params={{ lang, id: currentPostId }} /> */}
        </div>
      </main>
      <Footer params={params} formDocument={formDocument} />
      <ModalFull lang={lang} formDocument={formDocument} />
    </>
  );
};

export default PagePost;
