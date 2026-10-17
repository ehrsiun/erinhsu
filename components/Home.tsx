"use client";

import { useState } from "react";
import TransitionLink from "@/components/PageTransition";
import { transitionName } from "@/lib/transitionName";
import Thumb from "@/components/Thumb";
import Wordmark from "@/components/Wordmark";
import { useOpenProject } from "@/components/ProjectViewer";
import { categories, categoryInfo, projects, type Category } from "@/content/projects";
import styles from "./Home.module.css";

export default function Home() {
  const openProject = useOpenProject();
  // The category whose link is hovered; its thumbnails lift and glow.
  const [active, setActive] = useState<Category | null>(null);
  // The wash keeps its colour while it fades out after the hover ends.
  const [tint, setTint] = useState<Category>("product");
  if (active && active !== tint) setTint(active);

  return (
    <main
      className={`${styles.collage} ${active ? styles.washed : ""}`}
      style={
        {
          "--tint": categoryInfo[tint].accent,
          ...(active && { "--accent": categoryInfo[active].accent }),
        } as React.CSSProperties
      }
    >
      {projects.map((project) => (
        <button
          key={project.slug}
          className={`${styles.tile} ${active === project.category ? styles.highlighted : ""}`}
          style={{ gridArea: project.area, ...transitionName(`thumb-${project.slug}`) }}
          onClick={(e) => openProject(project, e.currentTarget)}
          aria-label={project.title}
        >
          <Thumb images={project.thumbnail} mode="fill" fit={project.fit} sizes="(max-width: 800px) 50vw, 40vw" priority />
          <span className={styles.tileTitle}>{project.title}</span>
        </button>
      ))}

      <section className={styles.hero}>
        <TransitionLink href="/about" className={styles.about} style={transitionName("about")}>
          about
        </TransitionLink>
        <div className={styles.nameBlock}>
          {/* Hovering the name swaps it for the one-line statement. */}
          <div className={styles.nameSwap} tabIndex={0}>
            <h1 className={styles.name} style={transitionName("wordmark")}>
              <Wordmark className={styles.wordmark} />
            </h1>
            <p className={styles.statement}>
              Erin Hsu is a designer who systemizes visual experiences across multiple disciplines
            </p>
          </div>
          <nav className={styles.categories} aria-label="Work categories">
            {categories.map((category) => (
              <TransitionLink
                key={category}
                href={`/${category}`}
                className={active === category ? styles.activeCategory : undefined}
                onMouseEnter={() => setActive(category)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(category)}
                onBlur={() => setActive(null)}
              >
                {category}
              </TransitionLink>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
