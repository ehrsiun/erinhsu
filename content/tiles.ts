// The collage on the home page. Each tile fills one named area of the grid
// in components/Collage.module.css. To change a picture, replace the file in
// public/images/ (or point `image` at a new one); a missing file shows as a
// gray placeholder.

export type Category = "product" | "brand" | "visual";

export const categories: Category[] = ["product", "brand", "visual"];

export type Tile = {
  area: string; // grid area name, see Collage.module.css
  image: string; // file name inside public/images/
  alt: string;
  category: Category; // hovering this category's link highlights the tile
  fit?: "cover" | "contain"; // "contain" shows the whole image, e.g. a logo
  href?: string; // where the tile links to, once project pages exist
};

export const tiles: Tile[] = [
  { area: "portrait", image: "portrait-painting.png", alt: "Painting of an older man in a white shirt", category: "visual" },
  { area: "thai", image: "thai-gourmet.png", alt: "Thai Gourmet storefront and kitchen", category: "brand" },
  { area: "gotgt", image: "gotgt.png", alt: "GoTgt: integrate spontaneous hangouts into everyday routine", category: "product" },
  { area: "dance", image: "dancers.png", alt: "Dancers on stage in warm light", category: "visual" },
  { area: "calendar", image: "calendar-poster.png", alt: "Calendar poster with the number 22", category: "visual" },
  { area: "cvs", image: "cvs-health.png", alt: "CVS Health logo", category: "product", fit: "contain" },
  { area: "theater", image: "theater.png", alt: "Performer on a purple-lit stage", category: "visual" },
  { area: "landscape", image: "landscape-painting.png", alt: "Painting of a bridge in a green forest", category: "visual" },
  { area: "fish", image: "school-of-fish.png", alt: "School of Fish: sink swim together", category: "product" },
  { area: "food", image: "plated-dishes.png", alt: "Plated dishes with cut-paper illustrations", category: "brand" },
];
