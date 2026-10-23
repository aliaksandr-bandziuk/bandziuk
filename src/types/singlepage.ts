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
  OfferListBlock,
  PortfolioPickBlock,
  QuoteFormBlock,
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
  /** Optional H1 override; `title` stays the short navigational label. */
  heading?: string;
  /** Prices printed on the page, restated for JSON-LD. */
  offers?: Array<{
    _key?: string;
    name: string;
    price: number;
    maxPrice?: number;
    currency?: string;
    unit?: "one-off" | "month";
    /** Shown in the homepage pricing section (read on the pricing page only). */
    featured?: boolean;
  }>;
  seo: Seo;
  excerpt: string;
  previewImage: ImageAlt;
  allowIntroBlock: boolean;
  /** Phones: fixed "Get a quote" + WhatsApp bar instead of the round WhatsApp button. */
  stickyCta?: boolean;
  /** "landing": LandingHero instead of the photo hero (PropertyIntro). */
  heroLayout?: "image" | "landing";
  heroChips?: string[];
  heroPhonePoints?: string[];
  /** Landing hero, right side on desktop: phone sketch (default) or a photo. */
  heroVisual?: "phone" | "photo";
  heroPhoto?: ImageAlt;
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
    | OfferListBlock
    | PortfolioPickBlock
    | QuoteFormBlock
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
  areaServed?: string[];
};
