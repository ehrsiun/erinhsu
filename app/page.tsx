import CollageTile from "@/components/CollageTile";
import { tiles } from "@/content/tiles";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.collage}>
      {tiles.map((tile) => (
        <CollageTile key={tile.area} tile={tile} />
      ))}

      <section className={styles.hero}>
        <a href="#about" className={styles.about}>
          about
        </a>
        <div className={styles.nameBlock}>
          <h1 className={styles.name}>Erin Hsu</h1>
          <nav className={styles.categories} aria-label="Work categories">
            <a href="#product">product</a>
            <a href="#brand">brand</a>
            <a href="#visual">visual</a>
          </nav>
        </div>
      </section>
    </main>
  );
}
