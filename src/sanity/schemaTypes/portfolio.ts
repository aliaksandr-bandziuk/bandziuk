import { defineField } from "sanity";

export const projectCategories = [
  { title: "Website Development", value: "full-website" },
  { title: "Landing Pages", value: "landing" },
  { title: "CMS & Integrations", value: "cms" },
  { title: "SEO & Traffic Growth", value: "seo" },
  { title: "Performance & Optimization", value: "performance" },
  { title: "Business Tools & Automation", value: "automation" },
];

const portfolio = {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Portfolio Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .max(200)
          .error("Name should be less than 200 characters"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "localizedSlug",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          description: "Max 60 characters",
          validation: (Rule) =>
            Rule.required()
              .max(60)
              .error("Title should be less than 60 characters"),
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "string",
          description: "Max 160 characters",
          validation: (Rule) =>
            Rule.required()
              .max(160)
              .error("Description should be less than 160 characters"),
        }),
      ],
    }),
    defineField({
      name: "fullTitle",
      title: "Full Portfolio Title",
      type: "string",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) =>
        Rule.required()
          .max(200)
          .error("Excerpt should be less than 200 characters"),
    }),
    defineField({
      name: "keyFeatures",
      title: "Key Features",
      type: "object",
      fields: [
        { name: "clientName", title: "Client Name", type: "string" },
        { name: "industry", title: "Industry", type: "string" },
        { name: "service", title: "Service", type: "string" },
        {
          name: "category",
          title: "Project Categories",
          type: "reference",
          to: [{ type: "projectCategory" }],
          options: {
            filter: ({ document }) => {
              return {
                filter: "language == $language",
                params: { language: document.language },
              };
            },
          },
        },
        {
          name: "website",
          title: "Website",
          type: "object",
          fields: [
            {
              name: "type",
              title: "Type",
              type: "string",
              options: {
                list: [
                  { title: "Link", value: "link" },
                  { title: "Text", value: "text" },
                ],
              },
            },
            {
              name: "linkLabel",
              title: "Link Label",
              type: "string",
              hidden: ({ parent }) => parent?.type !== "link",
            },
            {
              name: "linkDestination",
              title: "Link Destination",
              type: "url",
              hidden: ({ parent }) => parent?.type !== "link",
            },
            {
              name: "text",
              title: "Text",
              type: "string",
              hidden: ({ parent }) => parent?.type !== "text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "previewImage",
      title: "Preview image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "challenges",
      title: "Challenges",
      type: "object",
      fields: [
        {
          name: "problem",
          title: "Problem",
          type: "contentBlock",
        },
        {
          name: "task",
          title: "Task",
          type: "contentBlock",
        },
        {
          name: "results",
          title: "Results",
          type: "contentBlock",
        },
        {
          name: "workDone",
          title: "Work Done",
          type: "contentBlock",
        },
      ],
    }),
    defineField({
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", title: "Alt Text", type: "string" }],
            },
            {
              name: "caption",
              title: "Caption",
              type: "contentBlock",
              description: "Optional caption",
            },
          ],
        },
      ],
    }),
    // defineField({
    //   name: "contentBlocks",
    //   title: "Main Content",
    //   type: "array",
    //   description:
    //     "Блоки контента, которые будут отображаться в статье. Это основное содержание статьи",
    //   of: [
    //     { type: "textContent" },
    //     { type: "accordionBlock" },
    //     { type: "contactFullBlock" },
    //     { type: "faqBlock" },
    //     { type: "teamBlock" },
    //     { type: "locationBlock" },
    //     { type: "imageFullBlock" },
    //     { type: "buttonBlock" },
    //     { type: "imageBulletsBlock" },
    //     { type: "benefitsBlock" },
    //     { type: "reviewsFullBlock" },
    //     { type: "formMinimalBlock" },
    //     { type: "howWeWorkBlock" },
    //     { type: "bulletsBlock" },
    //     { type: "projectsSectionBlock" },
    //     { type: "tableBlock" },
    //   ],
    // }),
    defineField({
      name: "mainContent",
      title: "Main Content",
      type: "array",
      of: [{ type: "textContent" }],
    }),
    defineField({
      name: "technologiesUsed",
      title: "Technologies Used",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "technology" }],
          options: {
            filter: ({ document }: { document: any }) => ({
              filter: "language == $language",
              params: { language: document.language },
            }),
          },
        },
      ],
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
      },
    }),
    defineField({
      name: "language",
      type: "string",
      initialValue: "id",
      readOnly: true,
    }),
  ],
};

export default portfolio;
