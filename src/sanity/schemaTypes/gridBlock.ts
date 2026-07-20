import { defineType, defineField, defineArrayMember } from "sanity";
import { ICON_NAME_OPTIONS } from "./iconOptions";

const gridBlock = defineType({
  name: "gridBlock",
  title: "Grid Block",
  type: "object", // Change to object
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
              name: "icon",
              title: "Icon",
              type: "image",
              fields: [
                {
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                },
              ],
            }),
            defineField({
              name: "iconName",
              title: "Icon (Lucide/brand name)",
              type: "string",
              description:
                "Optional. When set, renders a Lucide/brand icon instead of the image above.",
              options: {
                list: ICON_NAME_OPTIONS,
              },
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
            }),
            // defineField({
            //   name: "linkLabel",
            //   title: "Link Label",
            //   type: "string",
            // }),
            // defineField({
            //   name: "linkDestination",
            //   title: "Link Destination",
            //   type: "string",
            // }),
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

export default gridBlock;
