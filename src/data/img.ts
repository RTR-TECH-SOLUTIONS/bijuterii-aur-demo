import type { ImageMetadata } from "astro";

const toate = import.meta.glob<{ default: ImageMetadata }>("../assets/img/*.jpg", { eager: true });

export const img = (nume: string): ImageMetadata => {
  const gasit = toate[`../assets/img/${nume}.jpg`];
  if (!gasit) throw new Error(`Lipsește imaginea src/assets/img/${nume}.jpg`);
  return gasit.default;
};
