import { createImageUrlBuilder } from "@sanity/image-url";

// Browser-safe: the image URL builder only, without the Sanity client.
// Client components import urlFor from here. Importing it from
// sanity.client.ts put the whole @sanity/client into the page bundle.
const builder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
});

export function urlFor(source: any) {
  return builder.image(source);
}
