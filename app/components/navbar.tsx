import Link from "next/link";
import styles from "../css/Nav.module.css";

export default function Navbar() {
  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>MyBlog</a>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
};