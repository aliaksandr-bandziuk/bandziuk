export type ContentBlock = any;

export type ImageAlt = {
  _key: string;
  _type: "image";
  alt?: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type ProjectCategory =
  | "full-website"
  | "landing"
  | "cms"
  | "seo"
  | "performance"
  | "automation";

export type TechnologiesUsed =
  | "nextjs"
  | "react"
  | "typescript"
  | "sanity"
  | "tailwind"
  | "graphql"
  | "wordpress"
  | "php"
  | "javascript"
  | "seo"
  | "seo-strategy"
  | "content-marketing"
  | "google-analytics"
  | "google-search-console"
  | "google-tag-manager"
  | "ahrefs"
  | "semrush"
  | "figma"
  | "photoshop"
  | "contentful"
  | "shopify"
  | "woocommerce"
  | "magento"
  | "ecommerce"
  | "payment-gateways"
  | "api-integrations"
  | "web-performance"
  | "accessibility"
  | "hosting-deployment"
  | "git"
  | "ui-ux-design"
  | "content-strategy"
  | "email-marketing";

export type Seo = {
  metaTitle: string;
  metaDescription: string;
};

// Тип для ссылки «website» в буллете
export type WebsiteLink = {
  _type: "website";
  type: "link";
  linkLabel: string;
  linkDestination: string;
};

// Тип для текстового варианта «website» в буллете
export type WebsiteText = {
  _type: "website";
  type: "text";
  text: string;
};

// Объединённый тип для поля website
export type WebsiteField = WebsiteLink | WebsiteText;

// Тип одного буллета портфолио
export type KeyFeature = {
  _key: string;
  clientName: string;
  industry: string;
  service: string;
  category: ProjectCategory[];
  website: WebsiteField;
};

export type Challenges = {
  _key: string;
  _type: "challenge";
  problem: ContentBlock;
  task: ContentBlock;
  results: ContentBlock;
  workDone: ContentBlock;
};

export type Screenshot = {
  _key: string;
  _type: "screenshot";
  image: ImageAlt;
  caption?: ContentBlock;
};

export type Portfolio = {
  _id: string;
  _type: "portfolio";
  title: string;
  seo: Seo;
  fullTitle: string;
  excerpt: string;
  keyFeatures: KeyFeature[];
  previewImage: ImageAlt;
  challenges: Challenges;
  screenshots: Screenshot[];
  mainContent: ContentBlock[];
  technologiesUsed: TechnologiesUsed[];
  publishedAt: string;
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
