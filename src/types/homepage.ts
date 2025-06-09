import { ReviewsFullBlock } from "./blog";

export type City = "Paphos" | "Limassol" | "Larnaca";
export type PropertyType = "Apartment" | "Villa";

export type Translation = {
  path: string;
  language: string;
};

export type Seo = {
  metaTitle: string;
  metaDescription: string;
};

export type Image = {
  _key: string;
  _ref: string;
  _type: string;
  url: string;
};

// ====== Image Alt Type =====
export type ImageAlt = {
  _key: string;
  _type: "image";
  alt?: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
};
// ====== End Image Alt Type =====

export type ListItem = {
  _key: string;
  _type: string;
  listItem: string;
};

export type File = {
  _key: string;
  _ref: string;
  _type: string;
  url: string;
};

export type Brochure = {
  _key: string;
  _type: string;
  logo: Image;
  title: string;
  subtitle: string;
  description: string;
  list: ListItem[];
  buttonLabel: string;
  image: Image;
};

export type Slide = {
  _key: string;
  _type: string;
  image: Image;
  title: string;
  description: string;
  type: "link" | "button";
  linkLabel?: string;
  linkDestination?: string;
  buttonLabel?: string;
};

export type Bullet = {
  _key: string;
  _type: string;
  image: Image;
  description: string;
};

export type DescriptionField = any;

// ====== Hero Button =====
export type HeroButton =
  | {
      _key: string;
      _type: "button";
      type: "link";
      label: string;
      link: string;
    }
  | {
      _key: string;
      _type: "button";
      type: "popup";
      label: string;
    };
// ====== End Hero Button =====

// ====== Hero Section =====
export type HeroSection = {
  _key: string;
  _type: "heroSection";
  title: string;
  subtitle: string;
  text: string;
  heroImage: ImageAlt;
  heroButtons: HeroButton[];
};
// ====== End Hero Section =====

export type AboutBlock = {
  _key: string;
  _type: string;
  title: string;
  description: string;
  bullets: Bullet[];
};

export type DescriptionBlock = {
  _key: string;
  _type: string;
  title: string;
  descriptionFields: {
    _key: string;
    _type: string;
    descriptionField: DescriptionField;
  }[];
};

export type Logo = {
  _key: string;
  _type: string;
  image: ImageAlt;
};

export type Counting = {
  _key: string;
  _type: "counting";
  conuntNumber: number;
  sign: string;
};

export type Benefit = {
  _key: string;
  _type: "benefits";
  counting: Counting;
  title: string;
  description: string;
};

export type BenefitsBlock = {
  _key: string;
  _type: "benefitsBlock";
  title: string;
  benefits: Benefit[];
};

export type Step = {
  _key: string;
  _type: "steps";
  icon: Image;
  text: string;
};

export type HowWeWorkBlock = {
  _key: string;
  _type: "howWeWorkBlock";
  title: string;
  steps: Step[];
  description: string;
};

export type Review = {
  _key: string;
  _type: string;
  reviewText: any;
  name: string;
};

export type ReviewsBlock = {
  _key: string;
  _type: string;
  title: string;
  reviews: Review[];
};

export type LogosBlock = {
  _key: string;
  _type: string;
  title: string;
  logos: Logo[];
};

export type Project = {
  _key: string;
  _type: string;
  title: string;
  description: string;
  image: Image;
  city: City;
  propertyType: PropertyType;
  adress: string;
  flatsAmount: string;
  area: string;
  price: string;
  buttonLabel: string;
  buttonAltLabel: string;
};

export type ProjectsBlock = {
  _key: string;
  _type: string;
  title: string;
  projects: Project[];
};

export type Homepage = {
  _type: "homepage";
  _id: string;
  _rev: string;
  title: string;
  seo: Seo;
  homepageTitle: string;
  heroSection: HeroSection;
  language: string;
  slug: {
    [lang: string]: {
      current: string;
    };
  };
  _translations: [
    {
      slug: {
        [lang: string]: {
          current: string;
        };
      };
    },
  ];
};
