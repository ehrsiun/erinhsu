"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Thumb from "@/components/Thumb";
import type { Project } from "@/content/projects";
import styles from "./ProjectViewer.module.css";

type Rect = { top: number; left: number; width: number; height: number };
type State = { project: Project; origin: Rect; phase: "opening" | "open" | "closing" };

const ViewerContext = createContext<(project: Project, from: HTMLElement) => void>(() => {});

// Opens a project from anywhere: the thumbnail grows from where it was
// clicked to fill the screen, floating over the page.
export const useOpenProject = () => useContext(ViewerContext);

const DURATION = 500;

function targetRect(project: Project): Rect {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const top = vh * 0.09;
  if (project.kind === "scroll") {
    const side = Math.max(16, vw * 0.052);
    return { top, left: side, width: vw - side * 2, height: vh - top - vh * 0.07 };
  }
  // Artwork: the whole image, as large as fits.
  const image = project.thumbnail[0];
  const ratio = image.width / image.height;
  const height = Math.min(vh * 0.83, (vw - 32) / ratio);
  const width = height * ratio;
  return { top, left: (vw - width) / 2, width, height };
}

export function ProjectViewerProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<State | null>(null);
  const [target, setTarget] = useState<Rect | null>(null);

  const open = useCallback((project: Project, from: HTMLElement) => {
    const r = from.getBoundingClientRect();
    setTarget(targetRect(project));
    setState({ project, origin: { top: r.top, left: r.left, width: r.width, height: r.height }, phase: "opening" });
    // Two frames later the frame starts moving to its full-screen place.
    requestAnimationFrame(() => requestAnimationFrame(() => setState((s) => s && { ...s, phase: "open" })));
  }, []);

  const close = useCallback(() => {
    setState((s) => s && { ...s, phase: "closing" });
    setTimeout(() => setState(null), DURATION);
  }, []);

  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onResize = () => setTarget(targetRect(state.project));
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [state, close]);

  const isOpen = state?.phase === "open";
  const rect = state && target ? (isOpen ? target : state.origin) : null;

  return (
    <ViewerContext.Provider value={open}>
      {children}
      {state && rect && target && (
        <div className={styles.viewer} role="dialog" aria-modal="true" aria-label={state.project.title}>
          <div className={`${styles.backdrop} ${isOpen ? styles.shown : ""}`} onClick={close} />
          <p className={`${styles.title} ${isOpen ? styles.shown : ""}`} style={{ left: target.left, top: target.top - 40 }}>
            {state.project.title}
          </p>
          <button className={`${styles.close} ${isOpen ? styles.shown : ""}`} onClick={close}>
            close
          </button>
          <div className={styles.frame} style={{ ...rect, transitionDuration: `${DURATION}ms` }}>
            {state.project.kind === "artwork" ? (
              <Thumb images={state.project.thumbnail} mode="fill" sizes="90vw" priority />
            ) : (
              <div className={`${styles.scroll} ${isOpen ? styles.scrollable : ""}`}>
                <Thumb images={state.project.thumbnail} mode="natural" fit={state.project.fit} sizes="90vw" priority />
                <div className={`${styles.body} ${isOpen ? styles.shown : ""}`}>
                  {state.project.gallery?.map((image) => (
                    <Image key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="90vw" className={styles.galleryImage} />
                  ))}
                  {state.project.body?.map((paragraph) => (
                    <p key={paragraph} className={styles.paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </ViewerContext.Provider>
  );
}
