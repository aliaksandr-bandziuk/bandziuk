import { defineField } from "sanity";

const header = {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Header title",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "logoMobile",
      title: "Logo mobile",
      type: "image",
    }),
    defineField({
      name: "navLinks",
      title: "Navigation links",
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
            // A second level, rendered as a dropdown. The list is always in the
            // markup and only hidden with CSS, the same rule as the locale
            // switcher: building it on click would leave these links out of the
            // server HTML, and they are the point of the menu.
            defineField({
              name: "children",
              title: "Dropdown links",
              description:
                "Optional. When filled, the item opens a dropdown on hover and stays expanded in the mobile menu.",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "label", title: "Label", type: "string" }),
                    defineField({ name: "link", title: "Link", type: "string" }),
                  ],
                  preview: {
                    select: { title: "label", subtitle: "link" },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "link", children: "children" },
            prepare: ({ title, subtitle, children }: { title?: string; subtitle?: string; children?: unknown[] }) => ({
              title,
              subtitle: children?.length ? `${subtitle} · ${children.length} in dropdown` : subtitle,
            }),
          },
        },
      ],
    }),
    defineField({
      name: "buttonLabel",
      title: "Button label",
      type: "string",
    }),
    // Shown at the bottom of the mobile menu, under the language switcher: the
    // desktop header has the contact button in its own row, which is hidden on
    // a phone, so the open menu used to end with no way to get in touch.
    defineField({
      name: "phone",
      title: "Phone number (mobile menu)",
      description:
        "As it should read, e.g. +48 786 517 446. Leave empty to hide the row.",
      type: "string",
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp number",
      description:
        "Digits only, with the country code, e.g. 48786517446. When empty it is taken from the phone number above.",
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

export default header;
