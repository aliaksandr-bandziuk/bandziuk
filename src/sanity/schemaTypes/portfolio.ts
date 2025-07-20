import { defineField } from "sanity";

export const projectCategories = [
  { title: "Full Website Development", value: "full-website" },
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
      name: "title",
      title: "Portfolio Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .max(200)
          .error("Name should be less than 200 characters"),
    }),
    defineField({
      name: "fullTitle",
      title: "Full Portfolio Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "localizedSlug",
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
      name: "screenShots",
      title: "Screenshots",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(3).error("Minimum 3 images"),
    }),
    defineField({
      name: "keyFeatures",
      title: "Key features",
      type: "object",
      fields: [
        {
          name: "clientName",
          title: "Client Name",
          type: "string",
        },
        {
          name: "category",
          title: "Project Categories",
          type: "array",
          of: [{ type: "string" }],
          options: {
            list: projectCategories,
            layout: "tags",
          },
        },
        {
          name: "industry",
          title: "Industry",
          type: "string",
        },
        {
          name: "website",
          title: "Website",
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
          name: "solution",
          title: "Solution",
          type: "contentBlock",
        },
        {
          name: "results",
          title: "Results",
          type: "contentBlock",
        },
        {
          name: "technologies",
          title: "Technologies Used",
          type: "array",
          of: [{ type: "string" }],
          options: {
            layout: "tags",
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
