import { defineArrayMember, defineField } from "sanity";

const singlepage = {
  name: "singlepage",
  title: "Single Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "H1 override",
      type: "string",
      description:
        "Optional. Use when the H1 needs its keywords but the short Title must stay for breadcrumbs and parent listings — e.g. Title 'Services', H1 'Web development and SEO services'. Leave empty and the Title is used.",
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
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "string",
      description:
        "Краткое описание страницы, которое будет отображаться в превью",
    }),
    defineField({
      name: "previewImage",
      title: "Preview Image",
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
      description: "Основное изображение страницы",
    }),
    defineField({
      name: "allowIntroBlock",
      title: "Allow Intro Block",
      type: "boolean",
    }),
    defineField({
      name: "contentBlocks",
      title: "Main Content",
      type: "array",
      description:
        "Блоки контента, которые будут отображаться в статье. Это основное содержание статьи",
      of: [
        { type: "textContent" },
        { type: "doubleTextBlock" },
        { type: "faqBlock" },
        { type: "locationBlock" },
        { type: "imageFullBlock" },
        { type: "benefitsBlock" },
        { type: "reviewsFullBlock" },
        { type: "formMinimalBlock" },
        { type: "formFullBlock" },
        { type: "gridBlock" },
        { type: "landingCtaBlock" },
        { type: "animationBulletsBlock" },
        { type: "tableBlock" },
        { type: "serviceFeaturesBlock" },
        { type: "workProcessBlock" },
        { type: "stepsBlock" },
        { type: "relatedServicesBlock" },
        { type: "portfolioBlock" },
        { type: "contactMethodsBlock" },
      ],
    }),
    defineField({
      name: "parentPage",
      title: "Parent Page",
      type: "reference",
      to: [{ type: "singlepage" }],
      options: {
        filter: ({ document }) => ({
          filter: "language == $language",
          params: { language: document.language },
        }),
      },
    }),
    defineField({
      name: "pageType",
      title: "Page Type",
      type: "string",
      options: {
        list: [
          { title: "Regular page", value: "page" },
          { title: "Service", value: "service" },
          { title: "Services index", value: "servicesIndex" },
        ],
        layout: "radio",
      },
      initialValue: "page",
    }),
    defineField({
      name: "areaServed",
      title: "Area Served (countries, JSON-LD)",
      description:
        "Only for service pages, and only the countries this specific service's own copy actually names. Leave empty rather than guessing — the field is omitted from the page's structured data entirely when empty, which is correct: no claim beats a wrong one.",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ document }) => document?.pageType !== "service",
    }),
    defineField({
      name: "offers",
      title: "Prices (JSON-LD Offer)",
      description:
        "Machine-readable copies of prices the page already states in visible text. A price is the most quotable fact a service page has, and assistants read it from structured data rather than from prose. Only add entries that match a figure actually printed on the page — markup that disagrees with the visible copy is worse than none.",
      type: "array",
      of: [
        defineArrayMember({
          name: "offer",
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "What is being priced",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "price",
              title: "Price (number only)",
              type: "number",
              validation: (Rule) => Rule.required().positive(),
            }),
            defineField({
              name: "maxPrice",
              title: "Upper bound, for a range",
              description: "Leave empty for a 'from X' price.",
              type: "number",
            }),
            defineField({
              name: "currency",
              title: "Currency",
              type: "string",
              initialValue: "EUR",
              options: { list: ["EUR", "PLN", "USD"] },
            }),
            defineField({
              name: "unit",
              title: "Billing period",
              type: "string",
              initialValue: "one-off",
              options: { list: ["one-off", "month"] },
            }),
            defineField({
              name: "featured",
              title: "Show on the homepage",
              description:
                "Only read on the pricing page: ticked offers appear in the homepage pricing section, so a price is changed once, here, and the homepage follows.",
              type: "boolean",
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: "name", price: "price", currency: "currency", unit: "unit" },
            prepare: ({
              title,
              price,
              currency,
              unit,
            }: {
              title?: string;
              price?: number;
              currency?: string;
              unit?: string;
            }) => ({
              title: title ?? "",
              subtitle: `${price ?? "?"} ${currency ?? "EUR"}${unit === "month" ? " / month" : ""}`,
            }),
          },
        }),
      ],
    }),
    defineField({
      name: "language",
      type: "string",
      initialValue: "id",
      readOnly: true,
    }),
  ],
};

export default singlepage;
