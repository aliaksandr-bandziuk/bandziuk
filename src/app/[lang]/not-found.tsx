import Link from "next/link";
import styles from "./not-found.module.scss";

/**
 * 404 inside the locale segment.
 *
 * Without this file a notFound() call in a statically generated route falls
 * through to the framework default, which renders outside [lang]/layout.tsx —
 * the root layout supplies no <html>/<body>, so the response is an empty shell
 * with no title and no heading. This page renders inside the locale layout and
 * carries the 404 status.
 *
 * Copy is locale-neutral: Next does not pass params to not-found.tsx, so the
 * page cannot know which language the visitor asked for.
 */
export default function NotFound() {
  return (
    <main className={styles.wrap}>
      <div className={styles.inner}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>This page does not exist</h1>
        <p className={styles.text}>
          The address is wrong, or the page has moved. Start from a homepage:
        </p>
        <nav className={styles.links}>
          <Link href="/">English</Link>
          <Link href="/pl">Polski</Link>
          <Link href="/ru">Русский</Link>
        </nav>
      </div>
    </main>
  );
}
