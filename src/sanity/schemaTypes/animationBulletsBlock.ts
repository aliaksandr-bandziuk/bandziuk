import { defineType, defineField } from "sanity";

const animationBulletsBlock = defineType({
  name: "animationBulletsBlock",
  title: "Animation Bullets Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "bullets",
      title: "Bullets",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Number",
              type: "string",
            }),
            defineField({
              name: "sign",
              title: "Sign",
              type: "string",
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "string",
            }),
          ],
        },
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

export default animationBulletsBlock;
