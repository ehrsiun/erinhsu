import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "about · Erin Hsu" };

// Placeholder: the Figma file doesn't design this page yet.
export default function About() {
  return (
    <main>
      <PageIntro>is a designer who systemizes visual experiences across multiple disciplines</PageIntro>
      <section className={styles.body}>
        <p>About page coming soon.</p>
      </section>
    </main>
  );
}
