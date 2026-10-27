import { defineField } from "sanity";

// Icon keys for mega menu columns. The SVGs live in MegaNav.tsx.
export const MEGA_ICONS = [
  { title: "AI search", value: "ai" },
  { title: "SEO / search", value: "seo" },
  { title: "Code / websites", value: "web" },
  { title: "Layers / technology", value: "tech" },
  { title: "Globe / markets", value: "globe" },
  { title: "Map pin / cities", value: "pin" },
  { title: "Medicine", value: "med" },
  { title: "Law and finance", value: "law" },
  { title: "Hotels and food", value: "hotel" },
  { title: "Construction and home", value: "build" },
  { title: "Business", value: "biz" },
  { title: "Creative", value: "art" },
];

// A link inside the mega menu. Full path WITH the language prefix
// (/pl/oferty/…, /ru/…, /…), unlike the legacy navLinks below.
const megaLink = {
  type: "object",
  name: "megaLink",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
      description: "Full path with the language prefix, e.g. /pl/oferty/audyt-seo-strony-internetowej",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "extraLabel",
      title: "Tag label (optional)",
      type: "string",
      description: "Small tag after the link, e.g. SEO or strony. Leave empty for none.",
    }),
    defineField({ name: "extraLink", title: "Tag link", type: "string", description: "Full path the tag opens." }),
  ],
  preview: {
    select: { title: "label", subtitle: "link", extra: "extraLabel" },
    prepare: ({ title, subtitle, extra }: { title?: string; subtitle?: string; extra?: string }) => ({
      title: extra ? `${title} · ${extra}` : title,
      subtitle,
    }),
  },
};

const megaColumn = {
  type: "object",
  name: "megaColumn",
  fields: [
    defineField({ name: "title", title: "Column title", type: "string" }),
    defineField({ name: "icon", title: "Icon", type: "string", options: { list: MEGA_ICONS } }),
    defineField({ name: "links", title: "Links", type: "array", of: [megaLink] }),
    defineField({ name: "subTitle", title: "Second list title (optional)", type: "string" }),
    defineField({ name: "subLinks", title: "Second list links", type: "array", of: [megaLink] }),
  ],
  preview: {
    select: { title: "title", links: "links" },
    prepare: ({ title, links }: { title?: string; links?: unknown[] }) => ({
      title,
      subtitle: `${links?.length ?? 0} links`,
    }),
  },
};

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
    // The menu. Every link is rendered by a server component and stays in the
    // HTML; panels open with CSS on hover and with a small script on click.
    defineField({
      name: "megaMenu",
      title: "Menu",
      description:
        "Top items of the header. A «mega» item opens a full-width panel with columns, «cases» shows projects, «list» a small dropdown, «link» is a plain link. When empty, the legacy links below are used.",
      type: "array",
      of: [
        {
          type: "object",
          name: "megaItem",
          fields: [
            defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "kind",
              title: "Kind",
              type: "string",
              initialValue: "link",
              options: {
                list: [
                  { title: "Plain link", value: "link" },
                  { title: "Mega panel with columns", value: "mega" },
                  { title: "Projects panel", value: "cases" },
                  { title: "Small dropdown", value: "list" },
                ],
                layout: "radio",
              },
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "string",
              description: "Full path with the language prefix. Required for a plain link.",
            }),
            defineField({
              name: "columns",
              title: "Columns",
              description: "Mega panel: the columns. Small dropdown: one column, its links are the list.",
              type: "array",
              of: [megaColumn],
              hidden: ({ parent }) => (parent as { kind?: string } | undefined)?.kind === "link" || parent?.kind === "cases",
            }),
            defineField({
              name: "cases",
              title: "Projects",
              type: "array",
              hidden: ({ parent }) => (parent as { kind?: string } | undefined)?.kind !== "cases",
              of: [
                {
                  type: "object",
                  name: "megaCase",
                  fields: [
                    defineField({ name: "title", title: "Title", type: "string" }),
                    defineField({ name: "result", title: "Result, one line", type: "string" }),
                    defineField({ name: "link", title: "Link", type: "string" }),
                  ],
                  preview: { select: { title: "title", subtitle: "result" } },
                },
              ],
            }),
            defineField({
              name: "promo",
              title: "Card on the right (projects panel)",
              type: "object",
              hidden: ({ parent }) => (parent as { kind?: string } | undefined)?.kind !== "cases",
              fields: [
                defineField({ name: "kicker", title: "Kicker", type: "string" }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "text", title: "Text", type: "text", rows: 2 }),
                defineField({ name: "linkLabel", title: "Link label", type: "string" }),
                defineField({ name: "link", title: "Link", type: "string" }),
              ],
            }),
            defineField({
              name: "footerLinks",
              title: "Bottom strip links",
              description: "Under the panel: «All services», «Pricing»…",
              type: "array",
              of: [megaLink],
              hidden: ({ parent }) => (parent as { kind?: string } | undefined)?.kind === "link",
            }),
            defineField({
              name: "footerNote",
              title: "Bottom strip note",
              type: "string",
              hidden: ({ parent }) => (parent as { kind?: string } | undefined)?.kind === "link",
            }),
          ],
          preview: {
            select: { title: "label", kind: "kind", columns: "columns", link: "link" },
            prepare: ({ title, kind, columns, link }: { title?: string; kind?: string; columns?: unknown[]; link?: string }) => ({
              title,
              subtitle: kind === "link" ? link : `${kind} · ${columns?.length ?? 0} columns`,
            }),
          },
        },
      ],
    }),
    defineField({
      name: "navLinks",
      title: "Legacy navigation links",
      description: "Old two-level menu. Used only when «Menu» above is empty.",
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
            defineField({
              name: "children",
              title: "Dropdown links",
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
    // Shown at the bottom of the mobile menu: the desktop header has the
    // contact button in its own row, which is hidden on a phone.
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
