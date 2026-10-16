// Every project on the site lives here. To add or change one, edit this list:
// the home collage, the category pages and the project viewer all read from it.
// Images go in public/images/; width/height are the file's pixel size.

export type Category = "product" | "brand" | "visual";

export const categories: Category[] = ["product", "brand", "visual"];

// Each category's accent colour and the sentence on its page.
export const categoryInfo: Record<Category, { accent: string; role: string; statement: string }> = {
  product: {
    accent: "#009dff",
    role: "product designer",
    statement: "who is building structures to reduce friction in the everyday",
  },
  brand: {
    accent: "#ff6f00",
    role: "brand designer",
    statement: "who is creating delightful and impressionable identities with care",
  },
  visual: {
    accent: "#00e21a",
    role: "visual designer",
    statement: "who is crafting stories through experimentation with light, color, and texture",
  },
};

export type Img = { src: string; width: number; height: number; alt: string };

export type Project = {
  slug: string;
  title: string;
  category: Category;
  // "artwork" opens as a single image; "scroll" opens as a scrolling page.
  kind: "artwork" | "scroll";
  // The thumbnail. Several images sit side by side (e.g. the SEGD posters).
  thumbnail: Img[];
  // "contain" shows the whole image on white, e.g. a logo.
  fit?: "cover" | "contain";
  // Grid area on the home collage, see components/Home.module.css.
  area: string;
  // Extra images: on the brand page they slide out beside the thumbnail,
  // and in the project viewer they follow the thumbnail.
  gallery?: Img[];
  // Rough write-up shown in the project viewer, one paragraph per entry.
  body?: string[];
};

const img = (src: string, width: number, height: number, alt: string): Img => ({
  src: `/images/${src}`,
  width,
  height,
  alt,
});

const placeholderBody = ["Project write-up coming soon."];

export const projects: Project[] = [
  {
    slug: "cvs",
    title: "Streamlining the CVS experience from symptom to solution",
    category: "product",
    kind: "scroll",
    thumbnail: [img("cvs-health.png", 242, 122, "CVS Health logo")],
    fit: "contain",
    area: "cvs",
    body: placeholderBody,
  },
  {
    slug: "school-of-fish",
    title: "Making the everyday routine of classes delightful",
    category: "product",
    kind: "scroll",
    thumbnail: [img("school-of-fish.png", 878, 508, "School of Fish: sink swim together")],
    area: "fish",
    body: placeholderBody,
  },
  {
    slug: "gotgt",
    title: "Seamlessly deepening relationships within busy schedules",
    category: "product",
    kind: "scroll",
    thumbnail: [img("gotgt.png", 516, 280, "GoTgt: integrate spontaneous hangouts into everyday routine")],
    area: "gotgt",
    body: placeholderBody,
  },
  {
    slug: "omokage",
    title: "omokagé",
    category: "brand",
    kind: "scroll",
    thumbnail: [img("plated-dishes.png", 1634, 508, "Plated dishes with cut-paper illustrations")],
    area: "food",
    gallery: [
      img("omokage-cover.png", 284, 284, "omokagé menu cover"),
      img("omokage-menu.png", 285, 285, "omokagé entrees menu"),
    ],
    body: placeholderBody,
  },
  {
    slug: "segd",
    title: "San Francisco SEGD (Society for Experiential Graphic Design)",
    category: "brand",
    kind: "scroll",
    thumbnail: [
      img("segd-poster-1.png", 326, 511, "SEGD San Francisco poster, pink"),
      img("segd-poster-2.png", 326, 511, "SEGD San Francisco poster, green"),
      img("segd-poster-3.png", 328, 511, "SEGD San Francisco poster, blue"),
    ],
    area: "segd",
    gallery: [
      img("segd-badges.png", 499, 282, "SEGD event badges"),
      img("segd-slide.png", 506, 285, "Design to Delivery talk slide"),
    ],
    body: placeholderBody,
  },
  {
    slug: "thai-gourmet",
    title: "Thai Gourmet",
    category: "brand",
    kind: "scroll",
    thumbnail: [img("thai-gourmet.png", 966, 512, "Thai Gourmet storefront and kitchen")],
    area: "thai",
    body: placeholderBody,
  },
  {
    slug: "po",
    title: "婆 (pó)",
    category: "visual",
    kind: "artwork",
    thumbnail: [img("portrait-painting.png", 508, 728, "Painting of an older man in a white shirt")],
    area: "portrait",
  },
  {
    slug: "elysium",
    title: "Elysium Event Poster",
    category: "visual",
    kind: "artwork",
    thumbnail: [img("calendar-poster.png", 508, 728, "Elysium calendar poster with the number 22")],
    area: "calendar",
  },
  {
    slug: "lunar-gala",
    title: "Lunar Gala Photography",
    category: "visual",
    kind: "scroll",
    thumbnail: [img("dancers.png", 628, 512, "Dancers on stage in warm light")],
    area: "dance",
    gallery: [img("theater.png", 508, 394, "Performer on a purple-lit stage")],
    body: placeholderBody,
  },
  {
    slug: "on-a-hike",
    title: "On a Hike",
    category: "visual",
    kind: "artwork",
    thumbnail: [img("landscape-painting.png", 512, 730, "Painting of a bridge in a green forest")],
    area: "landscape",
  },
];

export const projectsIn = (category: Category) => projects.filter((p) => p.category === category);
