import { defineArrayMember, defineField, defineType } from "sanity";

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
    defineField({
      name: "aboutSection",
      title: "About Section",
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
          name: "description",
          title: "Description",
          type: "string",
        }),
        defineField({
          name: "buttonLabel",
          title: "Button Label",
          type: "string",
        }),
        defineField({
          name: "image",
          title: "Image",
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
      ],
    }),
    defineField({
      name: "servicesSection",
      title: "Services Section",
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
          name: "serviceItems",
          title: "Service Items",
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
                  name: "title",
                  title: "Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "string",
                }),
                defineField({
                  name: "linkLabel",
                  title: "Link Label",
                  type: "string",
                }),
                defineField({
                  name: "linkDestination",
                  title: "Link Destination",
                  type: "string",
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "fullLink",
          title: "Full Link",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "problemsSection",
      title: "Problems Section",
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
          name: "problemsItems",
          title: "Problems Items",
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
                  name: "problem",
                  title: "Problem",
                  type: "string",
                }),
                defineField({
                  name: "solution",
                  title: "Solution",
                  type: "string",
                }),
                defineField({
                  name: "buttonLabel",
                  title: "Button Label",
                  type: "string",
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "fullButtonLabel",
          title: "Full Button Label",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "portfolioSection",
      title: "Portfolio Section",
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
      ],
    }),
    defineField({
      name: "processSection",
      title: "Process Section",
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
          name: "stepItems",
          title: "Step Items",
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
                  name: "title",
                  title: "Title",
                  type: "string",
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
      ],
    }),
    defineField({
      name: "reviewsSection",
      title: "Reviews Section",
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
          name: "reviews",
          title: "Reviews",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "image",
                  title: "Image",
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
                  name: "reviewText",
                  title: "Review Text",
                  type: "contentBlock",
                }),
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
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "faqSection",
      title: "FAQ Section",
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
          name: "faq",
          title: "FAQ",
          type: "accordionBlock",
        }),
      ],
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
    // optional
    defineField({
      name: "language",
      type: "string",
      initialValue: "id",
      readOnly: true,
    }),
  ],
});
