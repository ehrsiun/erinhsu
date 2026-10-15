// The collage on the home page. Each tile fills one named area of the grid
// in app/page.module.css. To show a real image, drop the file into
// public/images/ with the name below; until then a gray placeholder shows.

export type Category = "product" | "brand" | "visual";

export type Tile = {
  area: string; // grid area name, see page.module.css
  image: string; // file name inside public/images/
  alt: string;
  category: Category;
  href?: string; // where the tile links to, once project pages exist
};

export const tiles: Tile[] = [
  { area: "portrait", image: "portrait-painting.jpg", alt: "Painting of an older man in a white shirt", category: "visual" },
  { area: "thai", image: "thai-gourmet.jpg", alt: "Thai Gourmet storefront and kitchen", category: "brand" },
  { area: "gotgt", image: "gotgt.png", alt: "GoTgt: integrate spontaneous hangouts into everyday routine", category: "product" },
  { area: "dance", image: "dancers.jpg", alt: "Dancers on stage in warm light", category: "visual" },
  { area: "calendar", image: "calendar-poster.png", alt: "Calendar poster with the number 22", category: "brand" },
  { area: "cvs", image: "cvs-health.png", alt: "CVS Health logo", category: "product" },
  { area: "theater", image: "theater.jpg", alt: "Performer on a purple-lit stage", category: "visual" },
  { area: "landscape", image: "landscape-painting.jpg", alt: "Painting of a bridge in a green forest", category: "visual" },
  { area: "fish", image: "school-of-fish.png", alt: "School of Fish: sink swim together", category: "product" },
  { area: "food", image: "plated-dishes.jpg", alt: "Plated dishes with cut-paper illustrations", category: "brand" },
];
