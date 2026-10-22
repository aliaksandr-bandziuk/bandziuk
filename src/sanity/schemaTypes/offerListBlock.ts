import { defineType, defineField, defineArrayMember } from "sanity";
import { ICON_NAME_OPTIONS } from "./iconOptions";

// "What you get" on a landing page: short rows (icon, title, one line) and
// price cards right under them. Content lives in Sanity, unlike benefitsBlock,
// whose stats are hardcoded (see CLAUDE.md). Rows are meant to be scanned on a
// phone: keep each text to one line.
const offerListBlock = defineType({
  name: "offerListBlock",
  title: "Offer List Block (What you get)",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", description: "Short label above the title, e.g. “What you get”." }),
    defineField({
      name: "title",
      title: "Title (H2)",
      type: "string",
      description: "Put the page's keyword here, e.g. “What you get with restaurant website design”.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      title: "Rows",
      type: "array",
      validation: (Rule) => Rule.min(2).max(9),
      of: [
        defineArrayMember({
          name: "offerItem",
          type: "object",
          fields: [
            defineField({ name: "iconName", title: "Icon", type: "string", options: { list: ICON_NAME_OPTIONS } }),
            defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "text", title: "One line", type: "string" }),
          ],
          preview: { select: { title: "title", subtitle: "text" } },
        }),
      ],
    }),
    defineField({
      name: "prices",
      title: "Price cards",
      description: "Only prices already stated elsewhere on the site. Leave empty to show no prices.",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        defineArrayMember({
          name: "offerPrice",
          type: "object",
          fields: [
            defineField({ name: "label", title: "What is priced", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "value", title: "Price as shown", type: "string", description: "e.g. “700–1,400 €” or “from 2,000 €”.", validation: (Rule) => Rule.required() }),
            defineField({ name: "note", title: "Note under the price", type: "string", description: "e.g. “design included”." }),
            defineField({ name: "highlight", title: "Highlight this card", type: "boolean", initialValue: false }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Offer list", subtitle: "What you get" }),
  },
});

export default offerListBlock;
