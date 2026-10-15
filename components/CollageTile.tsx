import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import type { Tile } from "@/content/tiles";
import styles from "./CollageTile.module.css";

function imageExists(file: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "images", file));
}

export default function CollageTile({ tile }: { tile: Tile }) {
  const body = imageExists(tile.image) ? (
    <Image
      src={`/images/${tile.image}`}
      alt={tile.alt}
      fill
      sizes="(max-width: 800px) 50vw, 35vw"
      className={styles.image}
    />
  ) : (
    <span className={styles.placeholder}>{tile.image}</span>
  );

  return (
    <div className={styles.tile} style={{ gridArea: tile.area }}>
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
