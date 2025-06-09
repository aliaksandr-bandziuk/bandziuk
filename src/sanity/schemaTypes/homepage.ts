import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
          validation: (Rule) =>
            Rule.max(60).warning(
              "Meta title should be less than 60 characters."
            ),
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "string",
          validation: (Rule) =>
            Rule.max(160).warning(
              "Meta description should be less than 160 characters."
            ),
        }),
      ],
    }),
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
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
          name: "text",
          title: "Text",
          type: "string",
        }),
        defineField({
          name: "heroImage",
          title: "Hero Image",
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
        }),
        defineField({
          name: "heroButtons",
          title: "Hero Buttons",
          type: "array",
          of: [
            defineField({
              name: "button",
              type: "object",
              fields: [
                defineField({
                  name: "label",
                  title: "Label",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "type",
                  title: "Button Type",
                  type: "string",
                  options: {
                    list: [
                      { title: "Link or Anchor", value: "link" },
                      { title: "Popup", value: "popup" },
                    ],
                    layout: "radio",
                  },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "link",
                  title: "Link (e.g. /contact, #form, or https://...)",
                  type: "string",
                  description:
                    "Used only if Button Type is 'Link'. Leave empty for popup buttons.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    // optional
    defineField({
      name: "language",
      type: "string",
      initialValue: "id",
      readOnly: true,
    }),
  ],
});
