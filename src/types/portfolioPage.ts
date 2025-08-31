export type PortfolioPage = {
  _type: "portfolioPage";
  _id: string;
  _rev: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  content: any;
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
