import { defineField } from "sanity";

// Single document, fixed _id ("site-defaults") — a home for shared fallback
// assets that used to live as hardcoded paths in component code (e.g.
// LandingCtaBlock's photo). Add fields here instead of hardcoding a new
// asset path in a component.
const siteDefaults = {
  name: "siteDefaults",
  title: "Site Defaults",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Site Defaults",
      readOnly: true,
    }),
    defineField({
      name: "landingCtaImage",
      title: "Landing CTA — default image",
      description:
        "Shown on the CTA band (landingCtaBlock) whenever a page doesn't set its own image.",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    }),
  ],
};

export default siteDefaults;
