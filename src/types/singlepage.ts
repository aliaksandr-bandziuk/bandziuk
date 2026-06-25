import {
  AccordionBlock,
  Seo,
  TextContent,
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
  FormFullBlock,
  ContactMethodsBlock,
  WorkProcessBlock,
  AnimationBulletsBlock,
  LandingCtaBlock,
} from "./blog";
import { BenefitsBlock, Image } from "./homepage";
import { ImageAlt } from "./common";

export type PageType = "page" | "service" | "servicesIndex";

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
    | FormFullBlock
    | BulletsBlock
    | TableBlock
    | ServiceFeaturesBlock
    | GridBlock
    | ContactMethodsBlock
    | WorkProcessBlock
    | AnimationBulletsBlock
    | LandingCtaBlock
  >;
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
