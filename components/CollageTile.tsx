import Image from "next/image";
import type { Tile } from "@/content/tiles";
import styles from "./CollageTile.module.css";

type Props = { tile: Tile; hasImage: boolean; dimmed: boolean };

export default function CollageTile({ tile, hasImage, dimmed }: Props) {
  const body = hasImage ? (
    <Image
      src={`/images/${tile.image}`}
      alt={tile.alt}
      fill
      sizes="(max-width: 800px) 50vw, 55vw"
      className={tile.fit === "contain" ? styles.contain : styles.cover}
    />
  ) : (
    <span className={styles.placeholder}>{tile.image}</span>
  );

  const className = [styles.tile, tile.fit === "contain" && styles.light, dimmed && styles.dimmed]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} style={{ gridArea: tile.area }}>
      {tile.href ? (
        <a href={tile.href} className={styles.link} aria-label={tile.alt}>
          {body}
        </a>
      ) : (
        body
      )}
    </div>
  );
}
