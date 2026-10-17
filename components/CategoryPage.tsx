"use client";

import { useState } from "react";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import Thumb from "@/components/Thumb";
import { isMovingIntoPlace } from "@/components/PageTransition";
import { transitionName } from "@/lib/transitionName";
import { useOpenProject } from "@/components/ProjectViewer";
import { categoryInfo, projectsIn, type Category, type Project } from "@/content/projects";
import styles from "./CategoryPage.module.css";

// One page per category. Each category lays its projects out differently,
// following the Figma frames: visual as a row of artworks, brand as strips
// of images, product as large cards.
export default function CategoryPage({ category }: { category: Category }) {
  const info = categoryInfo[category];
  const list = projectsIn(category);
  const openProject = useOpenProject();
  // Coming from home, the thumbnails glide over from the collage, so they
  // skip the fade-up used when the page is opened directly.
  const [rise] = useState(() => !isMovingIntoPlace());

  const open = (project: Project) => (e: React.MouseEvent<HTMLElement>) => openProject(project, e.currentTarget);

  return (
    <main
      className={styles.page}
      style={{ "--accent": info.accent, "--after-move": rise ? "0s" : "0.8s" } as React.CSSProperties}
    >
      <PageIntro>
        is a <span className={styles.role}>{info.role}</span> {info.statement}
      </PageIntro>

      <div className={`${styles.work} ${styles[category]}`}>
        {list.map((project, i) => (
          <section key={project.slug} className={`${styles.project} ${rise ? styles.rise : ""}`} style={{ "--i": i } as React.CSSProperties}>
            <h2 className={styles.title}>{project.title}</h2>
            {category === "brand" ? (
              <div className={styles.strip}>
                <button
                  className={styles.stripItem}
                  style={transitionName(`thumb-${project.slug}`)}
                  onClick={open(project)}
                  aria-label={`Open ${project.title}`}
                >
                  <Thumb images={project.thumbnail} mode="natural" sizes="60vw" priority />
                </button>
                {/* Extra images slide out from behind the thumbnail. */}
                {project.gallery?.map((image, j) => (
                  <div key={image.src} className={`${styles.stripItem} ${styles.slideOut}`} style={{ "--j": j } as React.CSSProperties}>
                    <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="30vw" />
                  </div>
                ))}
              </div>
            ) : (
              <button
                className={`${styles.card} ${project.fit === "contain" ? styles.outlined : ""}`}
                style={transitionName(`thumb-${project.slug}`)}
                onClick={open(project)}
                aria-label={`Open ${project.title}`}
              >
                <Thumb images={project.thumbnail} mode={category === "product" ? "fill" : "natural"} fit={project.fit} sizes="(max-width: 800px) 100vw, 45vw" priority />
              </button>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
