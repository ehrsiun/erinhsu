import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import styles from "./PageIntro.module.css";

// The top of every inner page: back and about links, the name, and a sentence.
export default function PageIntro({ children, backHref = "/" }: { children: React.ReactNode; backHref?: string }) {
  return (
    <header className={styles.intro}>
      <nav className={styles.links}>
        <Link href={backHref}>back</Link>
        <Link href="/about">about</Link>
      </nav>
      <div className={styles.row}>
        <h1 className={styles.name}>
          <Link href="/" aria-label="Home">
            <Wordmark className={styles.wordmark} />
          </Link>
        </h1>
        <p className={styles.statement}>{children}</p>
      </div>
    </header>
  );
}
