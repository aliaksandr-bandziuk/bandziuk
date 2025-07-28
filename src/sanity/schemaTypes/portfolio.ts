import { defineField } from "sanity";

export const projectCategories = [
  { title: "Website Development", value: "full-website" },
  { title: "Landing Pages", value: "landing" },
  { title: "CMS & Integrations", value: "cms" },
  { title: "SEO & Traffic Growth", value: "seo" },
  { title: "Performance & Optimization", value: "performance" },
  { title: "Business Tools & Automation", value: "automation" },
];

export const technologiesUsed = [
  { title: "Next.js", value: "nextjs" },
  { title: "React", value: "react" },
  { title: "TypeScript", value: "typescript" },
  { title: "Sanity.io", value: "sanity" },
  { title: "Tailwind CSS", value: "tailwind" },
  { title: "GraphQL", value: "graphql" },
  { title: "WordPress", value: "wordpress" },
  { title: "PHP", value: "php" },
  { title: "JavaScript", value: "javascript" },
  { title: "SEO", value: "seo" },
  { title: "SEO Strategy", value: "seo-strategy" },
  { title: "Content Marketing", value: "content-marketing" },
  { title: "Google Analytics", value: "google-analytics" },
  { title: "Google Search Console", value: "google-search-console" },
  { title: "Google Tag Manager", value: "google-tag-manager" },
  { title: "Ahrefs", value: "ahrefs" },
  { title: "SEMrush", value: "semrush" },
  { title: "Figma", value: "figma" },
  { title: "Photoshop", value: "photoshop" },
  { title: "Contentful", value: "contentful" },
  { title: "Shopify", value: "shopify" },
  { title: "WooCommerce", value: "woocommerce" },
  { title: "Magento", value: "magento" },
  { title: "eCommerce", value: "ecommerce" },
  { title: "Payment Gateways", value: "payment-gateways" },
  { title: "API Integrations", value: "api-integrations" },
  { title: "Web Performance", value: "web-performance" },
  { title: "Accessibility", value: "accessibility" },
  { title: "Hosting & Deployment", value: "hosting-deployment" },
  { title: "Version Control (Git)", value: "git" },
  { title: "UI/UX Design", value: "ui-ux-design" },
  { title: "Content Strategy", value: "content-strategy" },
  { title: "Email Marketing", value: "email-marketing" },
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
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "clientName", title: "Client Name", type: "string" },
            { name: "industry", title: "Industry", type: "string" },
            { name: "service", title: "Service", type: "string" },
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
    defineField({
      name: "mainContent",
      title: "Main Content",
      type: "array",
      of: [{ type: "contentBlock" }],
    }),
    defineField({
      name: "technologiesUsed",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: technologiesUsed,
        layout: "tags",
      },
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
