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
      name: "noIndex",
      title: "Hidden test page",
      description:
        "For trying a layout on a copy of a real page. The page still opens by its URL, but it is marked noindex, left out of the sitemap and not listed among the services. Never set this on a page meant to be found.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "heroLayout",
      title: "Hero layout",
      description:
        "Image: the photo hero (shown only with a preview image and Allow Intro Block). Landing: text on the left with facts and buttons, a phone sketch on the right on desktop; needs no photo.",
      type: "string",
      options: {
        list: [
          { title: "Image (default)", value: "image" },
          { title: "Landing", value: "landing" },
        ],
        layout: "radio",
      },
      initialValue: "image",
    }),
    defineField({
      name: "heroChips",
      title: "Hero facts",
      description: "Landing hero only. Up to 3 short facts under the text; the first is highlighted. Only facts the page states (prices, reply time).",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.max(3),
      hidden: ({ document }) => (document as any)?.heroLayout !== "landing",
    }),
    defineField({
      name: "heroVisual",
      title: "Hero right side",
      description:
        "Landing hero only, desktop. Phone: a phone sketch with numbered labels (for pages that sell a website or SEO). Photo: a photo instead — for pages about the person doing the work, e.g. the consultant page.",
      type: "string",
      options: {
        list: [
          { title: "Phone sketch with labels (default)", value: "phone" },
          { title: "Photo", value: "photo" },
          { title: "Assistant's answer (pages about AI search)", value: "answer" },
          { title: "Phone with a real first screen (labels sit beside its parts)", value: "screen" },
        ],
        layout: "radio",
      },
      initialValue: "phone",
      hidden: ({ document }) => (document as any)?.heroLayout !== "landing",
    }),
    defineField({
      name: "heroAnswer",
      title: "Hero: the assistant's answer",
      description:
        "Shown when Hero right side is “Assistant's answer”. An illustration of how an answer is built: no real firm or person is named, and the label says it is an illustration. A recorded run instead names the assistant and carries its date in the note.",
      type: "object",
      hidden: ({ document }) => (document as any)?.heroVisual !== "answer",
      fields: [
        defineField({ name: "label", title: "Label", type: "string", initialValue: "Asystent AI · ilustracja" }),
        defineField({ name: "question", title: "The question", type: "string" }),
        defineField({ name: "answer", title: "The answer", type: "text", rows: 4, description: "Wrap the decisive words in *asterisks* to mark them." }),
        defineField({
          name: "sources",
          title: "Sources",
          type: "array",
          validation: (Rule) => Rule.max(5),
          of: [
            defineArrayMember({
              name: "heroAnswerSource",
              type: "object",
              fields: [
                defineField({ name: "name", title: "Source as shown", type: "string" }),
                defineField({ name: "ours", title: "The client's own", type: "boolean", initialValue: false }),
              ],
            }),
          ],
        }),
        defineField({ name: "note", title: "Note under the answer", type: "string" }),
      ],
    }),
    defineField({
      name: "heroScreen",
      title: "Hero: the phone's first screen",
      description:
        "Shown when Hero right side is “Phone with a real first screen”. An example business, not a client. The four Hero phone labels sit beside, in order: the offer line, the two buttons, the chips, the confirmation.",
      type: "object",
      hidden: ({ document }) => (document as any)?.heroVisual !== "screen",
      fields: [
        defineField({ name: "brand", title: "Business name in the top bar", type: "string" }),
        defineField({ name: "title", title: "Offer in one line", type: "string" }),
        defineField({ name: "subline", title: "Line under the offer", type: "string" }),
        defineField({ name: "call", title: "Primary button", type: "string" }),
        defineField({ name: "message", title: "Second button", type: "string" }),
        defineField({ name: "chips", title: "Chips (payment, delivery)", type: "array", of: [{ type: "string" }], validation: (Rule) => Rule.max(3) }),
        defineField({ name: "toast", title: "Confirmation", type: "string" }),
      ],
    }),
    defineField({
      name: "heroPhonePoints",
      title: "Hero phone labels",
      description: "Landing hero only, desktop. Up to 4 numbered labels beside the phone sketch: what the visitor’s first screen will contain.",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.max(4),
      hidden: ({ document }) =>
        (document as any)?.heroLayout !== "landing" || (document as any)?.heroVisual === "photo",
    }),
    defineField({
      name: "heroPhoto",
      title: "Hero photo",
      description:
        "Shown on the right of the landing hero on desktop instead of the phone sketch. A portrait with a transparent background works best (it sits on the dark card, aligned to the bottom). At least 900 px tall for sharp screens.",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          description: "In the page’s language, e.g. “Aliaksandr Bandziuk, AI SEO consultant”.",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
      hidden: ({ document }) =>
        (document as any)?.heroLayout !== "landing" || (document as any)?.heroVisual !== "photo",
      validation: (Rule) =>
        Rule.custom((value: any, context: any) =>
          context.document?.heroLayout === "landing" && context.document?.heroVisual === "photo" && !value?.asset
            ? "Choose a photo, or switch “Hero right side” back to Phone"
            : true,
        ),
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
        { type: "pricePickerBlock" },
        { type: "landingCtaBlock" },
        { type: "animationBulletsBlock" },
        { type: "tableBlock" },
        { type: "serviceFeaturesBlock" },
        { type: "workProcessBlock" },
        { type: "stepsBlock" },
        { type: "relatedServicesBlock" },
        { type: "portfolioBlock" },
        { type: "contactMethodsBlock" },
        { type: "offerListBlock" },
        { type: "portfolioPickBlock" },
        { type: "quoteFormBlock" },
      ],
    }),
    defineField({
      name: "stickyCta",
      title: "Sticky contact bar on phones",
      description:
        "Shows a bar at the bottom of the screen on phones once the visitor scrolls past the intro: “Get a quote” (opens the contact form) and WhatsApp. Replaces the round WhatsApp button on this page.",
      type: "boolean",
      initialValue: false,
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
