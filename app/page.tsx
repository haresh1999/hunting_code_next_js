import styles from "./css/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/here.jpg"
          alt="Blog hero background"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />

        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <h1>Explore Our HomePage</h1>
          <p>
            <span>
              Discover useful articles, ideas, and insights from our weboste.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}