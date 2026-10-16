import Image from "next/image";
import type { Img } from "@/content/projects";
import styles from "./Thumb.module.css";

type Props = {
  images: Img[];
  // "fill": stretch to the parent box and crop (home tiles, viewer).
  // "natural": keep each image's own proportions (category pages).
  mode: "fill" | "natural";
  fit?: "cover" | "contain";
  sizes: string;
  priority?: boolean;
};

// One project thumbnail: a single image, or several side by side.
export default function Thumb({ images, mode, fit = "cover", sizes, priority }: Props) {
  // Widths are shared in proportion to each image's aspect ratio, so side-by-side
  // images end up the same height. Normalised so they always fill the row.
  const total = images.reduce((sum, image) => sum + image.width / image.height, 0);
  return (
    <div className={`${styles.row} ${mode === "fill" ? styles.fill : ""} ${fit === "contain" ? styles.contain : ""}`}>
      {images.map((image) => (
        <div
          key={image.src}
          className={styles.cell}
          style={{ flexGrow: image.width / image.height / total, aspectRatio: mode === "natural" ? `${image.width} / ${image.height}` : undefined }}
        >
          <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className={styles.image} />
        </div>
      ))}
    </div>
  );
}
