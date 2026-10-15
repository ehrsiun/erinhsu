"use client";

import { useState } from "react";
import CollageTile from "@/components/CollageTile";
import { categories, type Category, type Tile } from "@/content/tiles";
import styles from "./Collage.module.css";

export default function Collage({ tiles }: { tiles: (Tile & { hasImage: boolean })[] }) {
  // The category whose link is hovered; tiles outside it dim.
  const [active, setActive] = useState<Category | null>(null);

  return (
    <main className={styles.collage}>
      {tiles.map((tile) => (
        <CollageTile
          key={tile.area}
          tile={tile}
          hasImage={tile.hasImage}
          dimmed={active !== null && tile.category !== active}
        />
      ))}

      <section className={styles.hero}>
        <a href="#about" className={styles.about}>
          about
        </a>
        <div className={styles.nameBlock}>
          {/* Hovering the name swaps it for the one-line statement. */}
          <div className={styles.nameSwap} tabIndex={0}>
            <h1 className={styles.name}>Erin Hsu</h1>
            <p className={styles.statement}>
              Erin Hsu is an interdisciplinary designer who systemizes visual experiences
            </p>
          </div>
          <nav className={styles.categories} aria-label="Work categories">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category}`}
                className={active === category ? styles.activeCategory : undefined}
                onMouseEnter={() => setActive(category)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(category)}
                onBlur={() => setActive(null)}
              >
                {category}
              </a>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
