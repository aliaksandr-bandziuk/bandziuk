import { defineArrayMember, defineField, defineType } from "sanity";
import { ICON_NAME_OPTIONS } from "./iconOptions";

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
          name: "eyebrow",
          title: "Eyebrow (name and role)",
          description:
            "Small line above the H1. Keep it identical to the name and jobTitle in the Person schema (src/lib/schema/identity.ts) — matching visible text is what confirms the entity rather than merely asserting it.",
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
          name: "text",
          title: "Text",
          type: "string",
        }),
        defineField({
          name: "facts",
          title: "Fact row",
          description:
            "Short label/value pairs shown under the hero text. Assistants lift these as ready-made attribute pairs without having to parse prose, so keep them factual: location, languages, stack, response time.",
          type: "array",
          validation: (Rule) => Rule.max(4),
          of: [
            defineArrayMember({
              name: "fact",
              type: "object",
              fields: [
                defineField({
                  name: "label",
                  title: "Label",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "value",
                  title: "Value",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: { title: "label", subtitle: "value" },
              },
            }),
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
          description: "Single-line fallback. Ignored when Paragraphs are filled in.",
          type: "string",
        }),
        defineField({
          name: "paragraphs",
          title: "Paragraphs",
          description: "The first paragraph is shown larger, as the lead. Replaces Description when filled in.",
          type: "array",
          of: [defineArrayMember({ type: "text", rows: 4 })],
        }),
        defineField({
          name: "industries",
          title: "Industries",
          description: "Short tags shown under the text, e.g. Real estate, Law, Healthcare.",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
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
          name: "pillars",
          title: "Service directions",
          description:
            "When filled, replaces Service Items: one column per direction, each a list of services with links and prices.",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "iconName",
                  title: "Icon",
                  type: "string",
                  options: { list: ICON_NAME_OPTIONS },
                }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "description", title: "Description", type: "string" }),
                defineField({
                  name: "items",
                  title: "Services",
                  type: "array",
                  of: [
                    defineArrayMember({
                      type: "object",
                      fields: [
                        defineField({ name: "label", title: "Label", type: "string" }),
                        defineField({ name: "link", title: "Link", type: "string" }),
                        defineField({
                          name: "price",
                          title: "Price",
                          type: "string",
                          description: "Copy it from the price list, in the page's currency. Leave empty if there is none.",
                        }),
                      ],
                      preview: { select: { title: "label", subtitle: "price" } },
                    }),
                  ],
                }),
              ],
              preview: { select: { title: "title", subtitle: "description" } },
            }),
          ],
        }),
        defineField({
          name: "assistantsLabel",
          title: "Assistants label",
          type: "string",
        }),
        defineField({
          name: "assistants",
          title: "AI assistants",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "definitions",
          title: "Term definitions",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "term", title: "Term", type: "string" }),
                defineField({ name: "text", title: "Definition", type: "text", rows: 2 }),
              ],
              preview: { select: { title: "term", subtitle: "text" } },
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
      name: "designSection",
      title: "Design & Code Section",
      description: "Four short claims about design and code, each one a buyer can check.",
      type: "object",
      fields: [
        defineField({ name: "pretitle", title: "Pretitle", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "cards",
          title: "Cards",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "value",
                  title: "Value",
                  type: "string",
                  description: "The short accent line on top, e.g. a figure.",
                }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "text", title: "Text", type: "text", rows: 3 }),
                defineField({ name: "linkLabel", title: "Link label", type: "string" }),
                defineField({ name: "link", title: "Link", type: "string" }),
              ],
              preview: { select: { title: "title", subtitle: "value" } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "caseSection",
      title: "Case Study Section",
      description: "One full-cycle project with its results. The client is not named here.",
      type: "object",
      fields: [
        defineField({ name: "pretitle", title: "Pretitle", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "lead", title: "Lead", type: "text", rows: 3 }),
        defineField({ name: "text", title: "Text", type: "text", rows: 4 }),
        defineField({ name: "scopeLabel", title: "Scope label", type: "string" }),
        defineField({
          name: "scope",
          title: "Scope",
          description: "What was done, one item per entry.",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "metrics",
          title: "Metrics",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "value", title: "Value", type: "string" }),
                defineField({ name: "label", title: "Label", type: "string" }),
              ],
              preview: { select: { title: "value", subtitle: "label" } },
            }),
          ],
        }),
        defineField({ name: "note", title: "Note under the metrics", type: "string" }),
        defineField({ name: "linkLabel", title: "Link label", type: "string" }),
        defineField({ name: "link", title: "Link", type: "string" }),
      ],
    }),
    defineField({
      name: "compareSection",
      title: "Freelancer vs Agency Section",
      description: "A comparison table: a typical agency against working with me.",
      type: "object",
      fields: [
        defineField({ name: "pretitle", title: "Pretitle", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "criterionLabel", title: "First column label", type: "string", description: "Optional; usually empty." }),
        defineField({ name: "agencyLabel", title: "Agency column label", type: "string" }),
        defineField({ name: "meLabel", title: "My column label", type: "string" }),
        defineField({
          name: "rows",
          title: "Rows",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "criterion", title: "Criterion", type: "string" }),
                defineField({ name: "agency", title: "Typical agency", type: "text", rows: 2 }),
                defineField({ name: "me", title: "Working with me", type: "text", rows: 2 }),
              ],
              preview: { select: { title: "criterion", subtitle: "me" } },
            }),
          ],
        }),
        defineField({ name: "note", title: "Note under the table", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "proofSection",
      title: "Proof Section",
      description:
        "Shown straight after the hero: original research, verified profiles and short client quotes. Quote text must be verbatim from a published testimonial.",
      type: "object",
      fields: [
        defineField({ name: "pretitle", title: "Pretitle", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "study",
          title: "Research card",
          type: "object",
          fields: [
            defineField({ name: "kicker", title: "Kicker", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "text", title: "Text", type: "text", rows: 3 }),
            defineField({ name: "linkLabel", title: "Link label", type: "string" }),
            defineField({ name: "link", title: "Link (path, e.g. /blog/…)", type: "string" }),
            defineField({ name: "chartLabel", title: "Chart description (for screen readers)", type: "string" }),
            defineField({
              name: "stats",
              title: "Chart bars",
              type: "array",
              validation: (Rule) => Rule.max(4),
              of: [
                defineArrayMember({
                  name: "stat",
                  type: "object",
                  fields: [
                    defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
                    defineField({ name: "value", title: "Value (number, as shown)", type: "string", validation: (Rule) => Rule.required() }),
                  ],
                  preview: { select: { title: "label", subtitle: "value" } },
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "profiles",
          title: "Verified profiles",
          type: "array",
          of: [
            defineArrayMember({
              name: "profile",
              type: "object",
              fields: [
                defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
                defineField({ name: "url", title: "URL", type: "url", validation: (Rule) => Rule.required() }),
              ],
              preview: { select: { title: "label", subtitle: "url" } },
            }),
          ],
        }),
        defineField({
          name: "quotes",
          title: "Client quotes",
          type: "array",
          validation: (Rule) => Rule.max(3),
          of: [
            defineArrayMember({
              name: "quote",
              type: "object",
              fields: [
                defineField({ name: "text", title: "Quote (verbatim)", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
                defineField({ name: "name", title: "Name (as in the published review)", type: "string" }),
                defineField({ name: "attribution", title: "Attribution (role, industry · country)", type: "string", validation: (Rule) => Rule.required() }),
              ],
              preview: { select: { title: "name", subtitle: "attribution" } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "pricingSection",
      title: "Pricing Section",
      description:
        "Headings only. The prices themselves come from the offers ticked 'Show on the homepage' on this language's pricing page.",
      type: "object",
      fields: [
        defineField({ name: "pretitle", title: "Pretitle", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
        defineField({ name: "linkLabel", title: "Link to the pricing page", type: "string" }),
        defineField({ name: "buttonLabel", title: "Button that opens the contact form", type: "string" }),
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
    // optional
    defineField({
      name: "language",
      type: "string",
      initialValue: "id",
      readOnly: true,
    }),
  ],
});
