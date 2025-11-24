import { groq } from "next-sanity";
import { client } from "./sanity.client";
import { Homepage } from "@/types/homepage";
import { Header } from "@/types/header";
import { FormStandardDocument } from "@/types/formStandardDocument";
import { Singlepage } from "@/types/singlepage";
import { Property } from "@/types/property";
import { SanityFile } from "@/types/sanityFile";
import { PropertiesPage } from "@/types/propertiesPage";
import { Project } from "@/types/project";
import { ProjectsPage } from "@/types/projectsPage";
import { Developer } from "@/types/developer";
import { Blog } from "@/types/blog";
import { BlogPage } from "@/types/blogPage";
import { Portfolio } from "@/types/portfolio";
import { PortfolioPage } from "@/types/portfolioPage";

export async function getHeaderByLang(lang: string): Promise<Header> {
  const headerQuery = groq`*[_type == "header" && language == $lang][0] {
    _id,
    logo,
    logoMobile,
    navLinks,
    buttonLabel,
  }`;

  const header = await client.fetch(headerQuery, { lang });

  return header;
}

export async function getHomePageByLang(lang: string): Promise<Homepage> {
  const homepageQuery = groq`*[_type == 'homepage' && language == $lang][0] {
    _id,
    title,
    seo,
    homepageTitle,
    heroSection,
    aboutSection,
    servicesSection,
    problemsSection,
    portfolioSection,
    processSection,
    reviewsSection,
    faqSection,
    contactsSection,
    language,
    slug,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }`;

  const homepage = await client.fetch(
    homepageQuery,
    { lang },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return homepage;
}

export async function getFooterByLang(lang: string) {
  const footerQuery = groq`*[_type == "footer" && language == $lang][0] {
    _id,
    logo,
    socialLinks,
    footerColumns,
    copyright,
    finalText,
    contactsSection,
  }`;

  const footer = await client.fetch(footerQuery, { lang });

  return footer;
}

export async function getFormStandardDocumentByLang(
  lang: string
): Promise<FormStandardDocument> {
  const formStandardDocumentQuery = groq`*[_type == "formStandardDocument" && language == $lang][0] {
  _id,
  form,
  language
  }`;

  const formStandardDocument = await client.fetch(formStandardDocumentQuery, {
    lang,
  });

  return formStandardDocument;
}

export async function getLastFourPortfolioByLang(
  lang: string
): Promise<Portfolio[]> {
  const lastFourPortfolioQuery = groq`
    *[
      _type == "portfolio" &&
      language == $lang &&
      defined(previewImage)
    ] | order(_publishedAt desc)[0...4]{
      _id,
      title,
      slug,
      previewImage,
      keyFeatures{
        industry,
        services[]->{
          _id,
          title,
          slug
        }
      }
    }
  `;

  const portfolio = await client.fetch(
    lastFourPortfolioQuery,
    { lang },
    {
      next: { revalidate: 60 },
    }
  );

  return portfolio;
}

export async function getAllPortfolioByLang(
  lang: string
): Promise<Portfolio[]> {
  const allPortfolioQuery = groq`
    *[
      _type == "portfolio" &&
      language == $lang &&
      defined(previewImage)
    ] {
      _id,
      title,
      slug,
      previewImage,
      keyFeatures{
        industry,
        services[]->{
          _id,
          title,
          slug
        }
      }
    }
  `;

  const portfolio = await client.fetch(
    allPortfolioQuery,
    { lang },
    {
      next: { revalidate: 60 },
    }
  );

  return portfolio;
}

export async function getSinglePageByLang(
  lang: string,
  slug: string
): Promise<Singlepage | null> {
  const singlePageQuery = groq`
    *[
      _type == "singlepage" &&
      language == $lang &&
      slug[$lang].current == $slug
    ][0] {
      _id,
      title,
      slug,
      seo,
      excerpt,
      previewImage,
      allowIntroBlock,
      pageType,
      contentBlocks[] {
      _type == "textContent" => {
          _key,
          _type,
          backgroundColor,
          paddingVertical,
          paddingHorizontal,
          marginTop,
          marginBottom,
          textAlign,
          textColor,
          backgroundFull,
          content[] {
          ...,
            _type == "image" => {
              _key,
              _type,
              alt,
              asset->{
                _ref,
                url,
                metadata { dimensions { width, height } }
              }
            }
          }
        },
        _type == "serviceFeaturesBlock" => {
          _key,
          _type,
          title,
          features[] {
            _key,
            title,
            description,
            feature->{
              title,
              image{
                _type,      // сохранить тип
                asset,      // ВАЖНО: без "->", нужен asset._ref
                alt
              }
            }
          },
          marginTop,
          marginBottom
        },
        _type == "contactFullBlock" => {
          _key,
          _type,
          title,
          description,
          contacts,
          form->{
            _id,
            _type,
            language,
            form{ 
              inputName,
              inputPhone,
              inputCountry,
              inputEmail,
              inputMessage,
              buttonText,
              agreementText,
              agreementLinkLabel,
              agreementLinkDestination,
              validationNameRequired,
              validationPhoneRequired,
              validationCountryRequired,
              validationEmailRequired,
              validationEmailInvalid,
              validationMessageRequired,
              validationAgreementRequired,
              validationAgreementOneOf,
              successMessage,
              errorMessage
            }
          }
        },
        _type == "formMinimalBlock" => {
          _key,
          _type,
          title,
          buttonText,
          form->{
            _id,
            _type,
            language,
            form{
              inputName,
              inputPhone,
              inputCountry,
              inputEmail,
              inputMessage,
              buttonText,
              agreementText,
              agreementLinkLabel,
              agreementLinkDestination,
              validationNameRequired,
              validationPhoneRequired,
              validationCountryRequired,
              validationEmailRequired,
              validationEmailInvalid,
              validationMessageRequired,
              validationAgreementRequired,
              validationAgreementOneOf,
              successMessage,
              errorMessage
            }
          },
          marginTop,
          marginBottom
        },
        _type == "formFullBlock" => {
          _key,
          _type,
          title,
          buttonText,
          form->{
            _id,
            _type,
            language,
            form{
              inputName,
              inputPhone,
              inputCountry,
              inputEmail,
              inputMessage,
              buttonText,
              agreementText,
              agreementLinkLabel,
              agreementLinkDestination,
              validationNameRequired,
              validationPhoneRequired,
              validationCountryRequired,
              validationEmailRequired,
              validationEmailInvalid,
              validationMessageRequired,
              validationAgreementRequired,
              validationAgreementOneOf,
              successMessage,
              errorMessage
            }
          },
          marginTop,
          marginBottom
        },
        _type == "portfolioBlock" => {
          _key,
          _type,
          title,
          portfolioItems[]->{
            _id,
            title,
            excerpt,
            previewImage {
              asset->{
                _id,
                url,
                metadata { dimensions { width, height } }
              },
              alt
            },
            "slug": slug[$lang].current,
            keyFeatures
          },
          marginTop,
          marginBottom
        },
        _type != "textContent" &&
        _type != "serviceFeaturesBlock" &&
        _type != "contactFullBlock" &&
        _type != "portfolioBlock" &&
        _type != "formMinimalBlock" &&
        _type != "formFullBlock" => @
      },
      "parentPage": parentPage->{
        _id,
        title,
        slug,
        "_translations": *[
          _type == "translation.metadata" &&
          references(^._id)
        ].translations[].value->{
          slug
        }
      },
      "childrenServices": *[
        _type == "singlepage" &&
        language == $lang &&
        pageType == "service" &&
        parentPage._ref == ^._id
      ] | order(_createdAt asc) {
        _id,
        title,
        slug,
        excerpt,
        previewImage{
          asset->{
            _id,
            url,
            metadata { dimensions { width, height } }
          },
          alt
        },
        "_translations": *[
          _type == "translation.metadata" &&
          references(^._id)
        ].translations[].value->{
          slug
        }
      },
      language,
      "_translations": *[
        _type == "translation.metadata" &&
        references(^._id)
      ].translations[].value->{
        slug
      }
    }
  `;

  return await client.fetch(singlePageQuery, { lang, slug });
}

export async function getAllSinglePagesByLang(lang: string): Promise<
  {
    _id: string;
    slug: { [lang: string]: { current: string } };
    parentPage?: { slug: { [lang: string]: { current: string } } };
  }[]
> {
  const query = groq`
    *[_type == "singlepage" && language == $lang]{
      _id,
      "slug": slug,
      "parentPage": parentPage->{ slug }
    }
  `;
  return await client.fetch(query, { lang });
}

export async function getAllPathsForLang(lang: string): Promise<string[][]> {
  const items: { current: string; parent?: string }[] = await client.fetch(
    groq`
      *[_type=='singlepage' && language==$lang]{
        "current": slug[$lang].current,
        "parent": parentPage->slug[$lang].current
      }
    `,
    { lang }
  );

  // строим дерево — точно так же, как в generateStaticParams
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
  return Object.values(map);
}

// === Portfolio ===
export async function getPortfolioByLang(
  lang: string,
  slug: string
): Promise<Portfolio | null> {
  const query = groq`
    *[
      _type == "portfolio" &&
      language == $lang &&
      slug[$lang].current == $slug
    ][0] {
      _id,
      _type,
      title,
      fullTitle,
      excerpt,
      seo,
      slug,
      previewImage,
      keyFeatures {
        clientName,
        industry,
        services[]->{
          _id, title, slug
        },
        website
      },
      challenges,
      screenshots[]{
        _key,
        _type,
        title,
        caption,
        image{
          alt,
          asset->{
            _id,
            url,
            metadata{
              dimensions{
                width,
                height,
                aspectRatio
              }
            }
          }
        }
      },
      mainContent,
      technologiesUsed[]->{
        _id,
        title,
        slug,
        svg,
      },
      publishedAt,
      language,
      "_translations": *[
        _type == "translation.metadata" && references(^._id)
      ].translations[].value->{
        slug
      }
    }
  `;

  return await client.fetch(query, { lang, slug });
}
// === Portfolio ===

// === Portfolio List ===
export async function getAllPortfoliosByLang(
  lang: string
): Promise<Portfolio[]> {
  const query = groq`
    *[_type == "portfolio" && language == $lang] | order(publishedAt desc) {
      _id,
      _type,
      title,
      excerpt,
      slug,
      previewImage,
      technologiesUsed[]->{
        _id,
        title,
        slug,
        svg,
      },
      keyFeatures {
        clientName,
        industry,
        service->{
          _id,
          title,
          slug
        },
        website
      },
      publishedAt,
      "_translations": *[
        _type == "translation.metadata" && references(^._id)
      ].translations[].value->{
        slug
      }
    }
  `;

  return await client.fetch(query, { lang });
}
// === Portfolio List ===

// === Blog Post ===
export async function getBlogPostByLang(
  lang: string,
  slug: string
): Promise<Blog> {
  const blogQuery = groq`
    *[
      _type == "blog" &&
      language == $lang &&
      slug[$lang].current == $slug
    ][0] {
      _id,
      title,
      slug,
      seo {
        metaTitle,
        metaDescription
      },
      publishedAt,
      category->{
        _id,
        title,
        slug
      },
      previewImage {
        asset->{
          _id,
          url,
          metadata { dimensions { width, height } }
        },
        alt
      },
      excerpt,
      contentBlocks[] {
        // === текстовый блок ===
        _type == "textContent" => {
          _key,
          _type,
          backgroundColor,
          paddingVertical,
          paddingHorizontal,
          marginTop,
          marginBottom,
          textAlign,
          textColor,
          backgroundFull,
          content[] {
            ..., // все стандартные поля блоков Portable Text
            // для вставленных картинок вытянем размеры
            _type == "image" => {
              _key,
              _type,
              alt,
              asset->{
                _id,
                url,
                metadata { dimensions { width, height } }
              }
            }
          }
        },
        // === контактный блок ===
        _type == "contactFullBlock" => {
          _key,
          _type,
          title,
          description,
          contacts,
          form->{
            _id,
            _type,
            language,
            form {
              inputName,
              inputPhone,
              inputCountry,
              inputEmail,
              inputMessage,
              buttonText,
              agreementText,
              agreementLinkLabel,
              agreementLinkDestination,
              validationNameRequired,
              validationPhoneRequired,
              validationCountryRequired,
              validationEmailRequired,
              validationEmailInvalid,
              validationMessageRequired,
              validationAgreementRequired,
              validationAgreementOneOf,
              successMessage,
              errorMessage
            }
          }
        },
        // === минимальная форма ===
        _type == "formMinimalBlock" => {
          _key,
          _type,
          title,
          buttonText,
          marginTop,
          marginBottom,
          form->{
            _id,
            _type,
            language,
            form {
              inputName,
              inputPhone,
              inputCountry,
              inputEmail,
              inputMessage,
              buttonText,
              agreementText,
              agreementLinkLabel,
              agreementLinkDestination,
              validationNameRequired,
              validationPhoneRequired,
              validationCountryRequired,
              validationEmailRequired,
              validationEmailInvalid,
              validationMessageRequired,
              validationAgreementRequired,
              validationAgreementOneOf,
              successMessage,
              errorMessage
            }
          }
        },
        // === секция проектов ===
        // все прочие блоки пропускаем «как есть»
        _type != "textContent" &&
        _type != "contactFullBlock" &&
        _type != "formMinimalBlock" && => @
      },
      videoBlock {
        videoId,
        posterImage {
          asset->{
            _id,
            url,
            metadata { dimensions { width, height } }
          },
          alt
        }
      },
      popularProperties[] {
        label,
        link
      },
      language,
      "_translations": *[
        _type == "translation.metadata" &&
        references(^._id)
      ].translations[].value-> {
        slug
      }
    }
  `;

  const blog = await client.fetch(
    blogQuery,
    { lang, slug },
    { next: { revalidate: 60 } }
  );
  return blog;
}
// === Blog Post ===

// === Blog Page All ===
export async function getBlogPageByLang(lang: string): Promise<BlogPage> {
  const blogPageQuery = groq`*[_type == "blogPage" && language == $lang][0] {
    _id,
    title,
    metaTitle,
    metaDescription,
    content,
    language,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }`;

  const blogPage = await client.fetch(
    blogPageQuery,
    { lang },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return blogPage;
}
// === Blog Page All ===

// === Portfolio Page All ===
export async function getPortfolioPageByLang(
  lang: string
): Promise<PortfolioPage> {
  const portfolioPageQuery = groq`*[_type == "portfolioPage" && language == $lang][0] {
    _id,
    title,
    metaTitle,
    metaDescription,
    content,
    language,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }`;

  const portfolioPage = await client.fetch(
    portfolioPageQuery,
    { lang },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return portfolioPage;
}
// === Portfolio Page All ===

// === Portfolio Items All ===
export async function getPortfolioItemsByLang(
  lang: string
): Promise<Portfolio[]> {
  const portfolioItemsQuery = groq`*[_type == "portfolio" && language == $lang] | order(publishedAt desc) {
    _id,
    title,
    slug,
    previewImage,
    keyFeatures{
      industry,
      services[]->{
        _id,
        title,
        slug
      }
    }
  }`;

  const portfolioItems = await client.fetch(
    portfolioItemsQuery,
    { lang },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return portfolioItems;
}
// === End Portfolio Items All ===

// === Blog Posts All ===
export async function getBlogPostsByLang(lang: string): Promise<Blog[]> {
  const blogPostsQuery = groq`*[_type == 'blog' && language == $lang] | order(publishedAt desc) {
    _id,
    title,
    slug,
    previewImage,
    category->{
      title,
      slug
    },
    publishedAt,
    language,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }`;

  const blogPosts = await client.fetch(
    blogPostsQuery,
    { lang },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return blogPosts;
}
// === Blog Posts All ===

// === Blog Posts with Pagination ===
export async function getBlogPostsByLangWithPagination(
  lang: string,
  limit: number,
  offset: number
): Promise<Blog[]> {
  const blogPostsQuery = groq`
    *[_type == "blog" && language == $lang] | order(publishedAt desc)[$offset...$offset + $limit] {
      _id,
      title,
      excerpt,
      slug,
      previewImage,
      category->{
        title,
        slug
      },
      publishedAt,
      language,
      "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
        slug,
      },
    }
  `;

  const blogPosts = await client.fetch(
    blogPostsQuery,
    { lang, limit, offset },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return blogPosts;
}
// === Blog Posts with Pagination ===

// === Blog Posts Count ===
export async function getTotalBlogPostsByLang(lang: string): Promise<number> {
  const totalPostsQuery = groq`count(*[_type == "blog" && language == $lang])`;
  const total = await client.fetch(totalPostsQuery, { lang });
  return total;
}
// === Blog Posts Count ===

export async function getPropertyByLang(
  lang: string,
  slug: string
): Promise<Property | null> {
  const propertyQuery = groq`*[_type == "property" && slug[$lang].current == $slug][0] {
    _id,
    seo,
    slug,
    title,
    excerpt,
    previewImage,
    price,
    videoId,
    videoPreview,
    images,
    address,
    city,
    district,
    description,
    type,
    purpose,
    propertyType,
    location,
    floorSize,
    rooms,
    hasParking,
    hasPool,
    distances,
    marketType,
    isActual,
    language,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }`;

  const property = await client.fetch(
    propertyQuery,
    { lang, slug },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return property;
}

export async function getProjectsPageByLang(
  lang: string
): Promise<ProjectsPage> {
  const projectsPageQuery = groq`*[_type == "projectsPage" && language == $lang][0] {
    _id,
    seo,
    title,
    language,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }`;

  const projects = await client.fetch(
    projectsPageQuery,
    { lang },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return projects;
}

export async function getProjectByLang(
  lang: string,
  slug: string
): Promise<Project | null> {
  const projectQuery = groq`*[_type == "project" && slug[$lang].current == $slug][0] {
    _id,
    seo,
    slug,
    title,
    excerpt,
    previewImage,
    videoId,
    videoPreview,
    images,
    description[]{
      ...,
        _type == "image" => {
              _key,
              _type,
              alt,
              asset->{
                _id,
                url,
                metadata { dimensions { width, height } }
              }
            }
      },
    location,
    developer,
    keyFeatures,
    distances,
    fullDescription[]{
      ...,
      _type == "image" => {
        _key,
        _type,
        alt,
        asset->{
          _id,
          url,
          metadata { dimensions { width, height } }
        }
      }
    },
    faq,
    language,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }`;

  const project = await client.fetch(
    projectQuery,
    { lang, slug },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return project;
}

export async function getAllDevelopersByLang(
  lang: string
): Promise<Developer[]> {
  const query = groq`
    *[_type == "developer" && language == $lang] | order(_createdAt desc) {
      _id,
      title,
      slug
    }
  `;
  const developers = await client.fetch(query, { lang });
  return developers;
}

export async function getDeveloperByLang(
  lang: string,
  slug: string
): Promise<Developer | null> {
  const developerQuery = groq`*[_type == "developer" && slug[$lang].current == $slug][0] {
    _id,
    seo,
    slug,
    title,
    titleFull,
    excerpt,
    logo,
    description[]{
      ...,
      _type == "image" => {
        _key,
        _type,
        alt,
        asset->{
          _id,
          url,
          metadata { dimensions { width, height } }
        }
      },
    },
    language,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }`;

  const developer = await client.fetch(developerQuery, { lang, slug });

  return developer;
}

export async function getProjectsByDeveloper(
  lang: string,
  developerId: string
): Promise<Project[]> {
  const query = groq`
    *[
      _type == "project" &&
      language == $lang &&
      developer._ref == $developerId
    ] | order(_createdAt desc) {
      _id,
      title,
      slug,
      previewImage,
      keyFeatures,
      language
    }
  `;

  const projects = await client.fetch(query, { lang, developerId });
  return projects;
}

export async function getThreeProjectsBySameCity(
  lang: string,
  city: string,
  excludeProjectId?: string // чтобы исключить текущий проект
) {
  const query = groq`
    *[
      _type == "project" &&
      keyFeatures.city == $city &&
      language == $lang &&
      ($excludeProjectId == null || _id != $excludeProjectId)
    ]{
      _id,
      title,
      "slug": slug[$lang],
      previewImage,
      keyFeatures
    }
  `;
  const projects = await client.fetch(query, { lang, city, excludeProjectId });

  // Перемешиваем полученный массив случайным образом
  const shuffledProjects = projects.sort(() => Math.random() - 0.5);

  // Берем ровно первые 4 проекта (если их меньше 4 – вернутся все)
  return shuffledProjects.slice(0, 3);
}

export async function getAllProjectsByLang(lang: string): Promise<Project[]> {
  const allProjectsQuery = groq`*[_type == "project" && language == $lang] | order(_createdAt desc) {
    _id,
    title,
    slug,
    previewImage,
    keyFeatures,
    language
  }`;

  const projects = await client.fetch(allProjectsQuery, { lang });
  return projects;
}

export async function getFilteredProjects(
  lang: string,
  skip: number,
  limit: number,
  filters: {
    city?: string;
    priceFrom?: number | null;
    priceTo?: number | null;
    propertyType?: string;
  }
) {
  const {
    city = "",
    priceFrom = null,
    priceTo = null,
    propertyType = "",
  } = filters;
  const query = groq`
    *[
      _type == "project" &&
      language == $lang &&
      ($city == "" || keyFeatures.city == $city) &&
      ($propertyType == "" || keyFeatures.propertyType == $propertyType) &&
      ($priceFrom == null || keyFeatures.price >= $priceFrom) &&
      ($priceTo == null || keyFeatures.price <= $priceTo)
    ] | order(keyFeatures.price asc)[${skip}...${skip + limit}]{
      _id,
      title,
      "slug": slug[$lang],
      previewImage,
      keyFeatures
    }
  `;
  return await client.fetch(query, {
    lang,
    city,
    priceFrom,
    priceTo,
    propertyType,
  });
}

export async function getFilteredProjectsCount(
  lang: string,
  filters: {
    city?: string;
    priceFrom?: number | null;
    priceTo?: number | null;
    propertyType?: string;
  }
) {
  const {
    city = "",
    priceFrom = null,
    priceTo = null,
    propertyType = "",
  } = filters;
  const query = groq`
    count(
      *[
        _type == "project" &&
        language == $lang &&
        ($city == "" || keyFeatures.city == $city) &&
        ($propertyType == "" || keyFeatures.propertyType == $propertyType) &&
        ($priceFrom == null || keyFeatures.price >= $priceFrom) &&
        ($priceTo == null || keyFeatures.price <= $priceTo)
      ]
    )
  `;
  return await client.fetch(query, {
    lang,
    city,
    priceFrom,
    priceTo,
    propertyType,
  });
}

export async function getAllProperties(lang: string) {
  const query = groq`*[_type == "property" && language == $lang] | order(publishedAt desc) {
    _id,
    title,
    price,
    city,
    images,
    slug
  }`;

  const properties = await client.fetch(query, { lang });
  return properties;
}

export async function getFileBySlug(slug: string): Promise<SanityFile | null> {
  const query = groq`*[_type == "docFile" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    file {
      asset-> {
        url
      }
    }
  }`;

  const file: SanityFile | null = await client.fetch(query, { slug });
  return file;
}

export async function getPropertiesPageByLang(
  lang: string
): Promise<PropertiesPage> {
  const propertiesPageQuery = groq`*[_type == "propertiesPage" && language == $lang][0] {
    _id,
    metaTitle,
    metaDescription,
    title,
    language,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }`;

  const propertiesPage = await client.fetch(
    propertiesPageQuery,
    { lang },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return propertiesPage;
}
