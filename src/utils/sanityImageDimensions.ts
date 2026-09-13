/**
 * Sanity encodes an image's pixel size in the asset id itself:
 * `image-<hash>-<width>x<height>-<ext>`. Reading it there avoids a second
 * query just to learn the proportions of an image we already have a reference
 * to, which is what lets a frame follow the picture instead of cropping it.
 */
export type ImageDimensions = { width: number; height: number };

export function imageDimensions(source: unknown): ImageDimensions | null {
  const asset = (source as { asset?: { _ref?: string; _id?: string } })?.asset;
  const ref = asset?._ref ?? asset?._id;
  const match = typeof ref === "string" ? ref.match(/-(\d+)x(\d+)-[a-z]+$/) : null;
  if (!match) return null;

  const width = Number(match[1]);
  const height = Number(match[2]);
  if (!width || !height) return null;

  return { width, height };
}
