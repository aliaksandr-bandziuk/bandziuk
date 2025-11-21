import {
  AccordionBlock,
  Seo,
  TextContent,
  ContactFullBlock,
  TeamBlock,
  LocationBlock,
  ImageFullBlock,
  DoubleTextBlock,
  ButtonBlock,
  ImageBulletsBlock,
  ReviewsFullBlock,
  PortfolioBlock,
  FaqBlock,
  FormMinimalBlock,
  BulletsBlock,
  TableBlock,
  ServiceFeaturesBlock,
  GridBlock,
} from "./blog";
import { BenefitsBlock, Image } from "./homepage";
import { ImageAlt, Project } from "./project";

export type PageType = "page" | "service" | "servicesIndex";

export type ProjectSection = {
  title: string;
  projects: Project[];
};

/** Минимальный «референс» на страницу, без дочерних блоков */
export type SinglepageRef = {
  _id: string;
  title: string;
  slug: {
    [lang: string]: { current: string };
  };
  excerpt?: string;
  previewImage?: ImageAlt;
  _translations?: Array<{
    slug: {
      [lang: string]: { current: string };
    };
  }>;
};

export type Singlepage = {
  _id: string;
  _type: string;
  title: string;
  seo: Seo;
  excerpt: string;
  previewImage: ImageAlt;
  allowIntroBlock: boolean;
  contentBlocks: Array<
    | TextContent
    | AccordionBlock
    | ContactFullBlock
    | TeamBlock
    | LocationBlock
    | ImageFullBlock
    | DoubleTextBlock
    | ButtonBlock
    | ImageBulletsBlock
    | BenefitsBlock
    | ReviewsFullBlock
    | PortfolioBlock
    | FaqBlock
    | FormMinimalBlock
    | BulletsBlock
    | TableBlock
    | ServiceFeaturesBlock
    | GridBlock
  >;
  projectSection?: ProjectSection;
  parentPage?: SinglepageRef;
  language: string;
  slug: {
    [lang: string]: { current: string };
  };
  _translations: Array<{
    slug: {
      [lang: string]: { current: string };
    };
  }>;
  pageType?: PageType;
  childrenServices?: SinglepageRef[];
};
