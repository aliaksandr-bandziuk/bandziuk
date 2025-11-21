import { defineType, defineField } from "sanity";

export default defineType({
  name: "portfolioBlock",
  title: "Portfolio Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "portfolioItems",
      title: "Portfolio Items",
      type: "array",
      of: [
        defineField({
          name: "portfolioRef",
          title: "Portfolio Reference",
          type: "reference",
          to: [{ type: "portfolio" }],
          options: {
            filter: ({ document }) => ({
              filter: "language == $language",
              params: { language: document.language },
            }),
          },
        }),
      ],
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
