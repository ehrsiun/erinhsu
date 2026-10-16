import TransitionLink from "@/components/PageTransition";
import { transitionName } from "@/lib/transitionName";
import Wordmark from "@/components/Wordmark";
import styles from "./PageIntro.module.css";

// The top of every inner page: back and about links, the name, and a sentence.
export default function PageIntro({ children, backHref = "/" }: { children: React.ReactNode; backHref?: string }) {
  return (
    <header className={styles.intro}>
      <nav className={styles.links}>
        <TransitionLink href={backHref}>back</TransitionLink>
        <TransitionLink href="/about" style={transitionName("about")}>
          about
        </TransitionLink>
      </nav>
      <div className={styles.row}>
        <h1 className={styles.name} style={transitionName("wordmark")}>
          <TransitionLink href="/" aria-label="Home">
            <Wordmark className={styles.wordmark} />
          </TransitionLink>
        </h1>
        <p className={styles.statement}>{children}</p>
      </div>
    </header>
  );
}
