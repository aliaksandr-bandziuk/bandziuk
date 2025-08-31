import { AccordionBlock, ReviewsFullBlock } from "./blog";

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
  heroButtons: HeroButton[];
};
// ====== End Hero Section =====

// ===== About Section =====
export type AboutSection = {
  _key: string;
  _type: "aboutSection";
  pretitle: string;
  title: string;
  subtitle: string;
  description: string;
  buttonLabel: string;
  image: ImageAlt;
};
// ===== End About Section =====

// ====== Services Section =====
export type ServiceItem = {
  _key: string;
  _type: "serviceItem";
  icon: ImageAlt;
  title: string;
  description: string;
  linkLabel: string;
  linkDestination: string;
};

export type ServicesSection = {
  _key: string;
  _type: "servicesSection";
  pretitle: string;
  title: string;
  subtitle: string;
  serviceItems: ServiceItem[];
  fullLink: {
    _key: string;
    _type: "fullLink";
    label: string;
    url: string;
  };
};
// ====== End Services Section =====

// ====== Problems Section =====
export type ProblemItem = {
  _key: string;
  _type: "problemItem";
  icon: ImageAlt;
  problem: string;
  solution: string;
  buttonLabel: string;
};

export type ProblemsSection = {
  _key: string;
  _type: "problemsSection";
  pretitle: string;
  title: string;
  subtitle: string;
  problemsItems: ProblemItem[];
  fullButtonLabel: string;
};
// ====== End Problems Section =====

// ====== Portfolio Section =====
export type PortfolioSection = {
  _key: string;
  _type: "portfolioSection";
  pretitle: string;
  title: string;
  subtitle: string;
};
// ====== End Portfolio Section =====

// ====== Process Section =====
export type StepItem = {
  _key: string;
  _type: "stepItem";
  icon: ImageAlt;
  title: string;
  description: string;
};

export type ProcessSection = {
  _key: string;
  _type: "processSection";
  pretitle: string;
  title: string;
  subtitle: string;
  stepItems: StepItem[];
};
// ====== End Process Section =====

// ====== Reviews Section =====
export type ReviewItem = {
  _key: string;
  _type: "review";
  image: ImageAlt;
  reviewText: any;
  name: string;
  position: string;
  country: string;
};

export type ReviewsSection = {
  _key: string;
  _type: "reviewsSection";
  pretitle: string;
  title: string;
  subtitle: string;
  reviews: ReviewItem[];
};
// ====== End Reviews Section =====

// ====== Contacts Section =====
export type ContactSocialLink = {
  _key: string;
  _type: "socialLink";
  icon: ImageAlt;
  label: string;
  link: string;
};

export type ContactsSection = {
  _key: string;
  _type: "contactsSection";
  pretitle: string;
  title: string;
  subtitle: string;
  emailLabel: string;
  emailAddress: string;
  socialLinks: ContactSocialLink[];
  officeAddressLabel: string;
  officeAddress: string;
  formTitle: string;
  formDescription: string;
  formButtonLabel: string;
};
// ====== End Contacts Section =====

// ====== FAQ Section =====
export type FaqSection = {
  _key: string;
  _type: "faqSection";
  pretitle: string;
  title: string;
  subtitle: string;
  faq: AccordionBlock;
};
// ====== End FAQ Section =====

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
  aboutSection: AboutSection;
  servicesSection: ServicesSection;
  problemsSection: ProblemsSection;
  portfolioSection: PortfolioSection;
  processSection: ProcessSection;
  reviewsSection: ReviewsSection;
  faqSection: FaqSection;
  contactsSection: ContactsSection;
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
