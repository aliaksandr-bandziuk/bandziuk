import { defineType, defineField, defineArrayMember } from "sanity";
import { ICON_NAME_OPTIONS } from "./iconOptions";

const contactMethodsBlock = defineType({
  name: "contactMethodsBlock",
  title: "Contact Methods Block",
  type: "object", // Change to object
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "contacts",
      title: "Contacts",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
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
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "type",
              title: "Type",
              type: "string",
              options: {
                list: [
                  { title: "Email", value: "Email" },
                  { title: "Phone", value: "Phone" },
                  { title: "Link", value: "Link" },
                ],
              },
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

export default contactMethodsBlock;
