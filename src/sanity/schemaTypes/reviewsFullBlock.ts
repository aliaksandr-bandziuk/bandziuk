import { defineType, defineField, defineArrayMember } from "sanity";

const reviewsFullBlock = defineType({
  name: "reviewsFullBlock",
  title: "Reviews Full Block",
  type: "object",
  fields: [
    defineField({
      name: "pretitle",
      title: "Pretitle",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "position",
              title: "Position",
              type: "string",
            }),
            defineField({
              name: "country",
              title: "Country",
              type: "string",
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "contentBlock",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
            }),
          ],
        },
      ],
    }),
  ],
});

export default reviewsFullBlock;
