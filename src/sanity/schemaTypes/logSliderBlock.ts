import { defineType, defineField } from "sanity";

// Слайдер скриншотов внутри статьи блога. Отрисовывается тем же компонентом,
// что и скриншоты в портфолио (SliderScreenshots + ScreenshotLightbox), поэтому
// форма элемента массива повторяет поле screenshots в схеме portfolio:
// title, image с alt, необязательная подпись.
const logSliderBlock = defineType({
  name: "logSliderBlock",
  title: "Screenshot slider",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Необязательный заголовок над слайдером",
    }),
    defineField({
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [
        {
          type: "object",
          name: "screenshot",
          title: "Screenshot",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", title: "Alt Text", type: "string" }],
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "contentBlock",
              description: "Optional caption",
            }),
          ],
          preview: { select: { title: "title", media: "image" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", items: "screenshots" },
    prepare(selection) {
      const items = (selection.items as unknown[]) || [];
      return {
        title: (selection.title as string) || "Screenshot slider",
        subtitle: `${items.length} screenshots`,
      };
    },
  },
});

export default logSliderBlock;
