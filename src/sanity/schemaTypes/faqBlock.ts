import { defineType, defineField, defineArrayMember } from "sanity";

const faqBlock = defineType({
  name: "faqBlock",
  title: "FAQ Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "pretitle",
      title: "Eyebrow",
      type: "string",
    }),
    defineField({
      name: "compact",
      title: "Compact heading",
      type: "boolean",
      description: "Document-scale heading, left-aligned. Only the heading — the accordion is unchanged.",
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "accordionBlock",
    }),
    defineField({
      name: "marginTop",
      title: "Margin Top",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
    }),
    defineField({
      name: "marginBottom",
      title: "Margin Bottom",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
    }),
  ],
});

export default faqBlock;
