import { defineType, defineField, defineArrayMember } from "sanity";

const relatedServicesBlock = defineType({
  name: "relatedServicesBlock",
  title: "Related Services Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "slug",
              title: "Slug",
              type: "string",
              description:
                "Path segments without locale prefix or leading slash, e.g. uslugi/razrabotka-saitov",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
            }),
          ],
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

export default relatedServicesBlock;
