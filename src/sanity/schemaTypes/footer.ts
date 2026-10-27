import { defineField } from "sanity";
import { ICON_NAME_OPTIONS } from "./iconOptions";

const footer = {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "contactsSection",
      title: "Contacts Section",
      type: "object",
      fields: [
        defineField({
          name: "pretitle",
          title: "Preitle",
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
          name: "emailLabel",
          title: "Email Label",
          type: "string",
        }),
        defineField({
          name: "emailAddress",
          title: "Email Address",
          type: "string",
        }),
        defineField({
          name: "officeAddressLabel",
          title: "Office Address Label",
          type: "string",
        }),
        defineField({
          name: "officeAddress",
          title: "Office Address",
          type: "string",
        }),
        defineField({
          name: "socialLinks",
          title: "Social Links",
          type: "array",
          of: [
            {
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
                  name: "label",
                  title: "Label",
                  type: "string",
                }),
                defineField({
                  name: "link",
                  title: "Link",
                  type: "string",
                }),
              ],
            },
          ],
        }),
        defineField({
          name: "formTitle",
          title: "Form Title",
          type: "string",
        }),
        defineField({
          name: "formDescription",
          title: "Form Description",
          type: "string",
        }),
        defineField({
          name: "formButtonLabel",
          title: "Form Button Label",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    // Brand block of the footer, beside the link columns.
    defineField({
      name: "aboutText",
      title: "About text (under the logo)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "phone",
      title: "Phone (links to WhatsApp)",
      description: "As it should read, e.g. +48 786 517 446. Empty hides it.",
      type: "string",
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp number",
      description: "Digits only, with the country code. When empty it is taken from the phone.",
      type: "string",
    }),
    defineField({
      name: "ctaLabel",
      title: "Button label",
      description: "Opens the contact dialog. Empty hides the button.",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "footerColumns",
      title: "Footer Columns",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "links",
              description: "Full paths with the language prefix. On a phone each column folds into an accordion.",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "label",
                      title: "Label",
                      type: "string",
                    }),
                    defineField({
                      name: "link",
                      title: "Link",
                      type: "string",
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "copyright",
      title: "Copyright",
      type: "string",
    }),
    defineField({
      name: "finalText",
      title: "Final Text",
      type: "string",
    }),
    defineField({
      name: "language",
      type: "string",
      initialValue: "id",
      readOnly: true,
    }),
  ],
};

export default footer;
