"use client";

import { useState } from "react";
import Link from "next/link";
import Thumb from "@/components/Thumb";
import Wordmark from "@/components/Wordmark";
import { useOpenProject } from "@/components/ProjectViewer";
import { categories, categoryInfo, projects, type Category } from "@/content/projects";
import styles from "./Home.module.css";

export default function Home() {
  const openProject = useOpenProject();
  // The category whose link is hovered; its thumbnails lift and glow.
  const [active, setActive] = useState<Category | null>(null);

  return (
    <main
      className={styles.collage}
      style={active ? ({ "--accent": categoryInfo[active].accent } as React.CSSProperties) : undefined}
    >
      {projects.map((project) => (
        <button
          key={project.slug}
          className={`${styles.tile} ${active === project.category ? styles.highlighted : ""}`}
          style={{ gridArea: project.area }}
          onClick={(e) => openProject(project, e.currentTarget)}
          aria-label={project.title}
        >
          <Thumb images={project.thumbnail} mode="fill" fit={project.fit} sizes="(max-width: 800px) 50vw, 40vw" priority />
          <span className={styles.tileTitle}>{project.title}</span>
        </button>
      ))}

      <section className={styles.hero}>
        <Link href="/about" className={styles.about}>
          about
        </Link>
        <div className={styles.nameBlock}>
          {/* Hovering the name swaps it for the one-line statement. */}
          <div className={styles.nameSwap} tabIndex={0}>
            <h1 className={styles.name}>
              <Wordmark className={styles.wordmark} />
            </h1>
            <p className={styles.statement}>
              Erin Hsu is a designer who systemizes visual experiences across multiple disciplines
            </p>
          </div>
          <nav className={styles.categories} aria-label="Work categories">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/${category}`}
                className={active === category ? styles.activeCategory : undefined}
                onMouseEnter={() => setActive(category)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(category)}
                onBlur={() => setActive(null)}
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
