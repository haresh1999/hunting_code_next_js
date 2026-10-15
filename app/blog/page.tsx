import { Metadata } from "next";
import styles from "../css/Blog.module.css";
import { Suspense } from 'react'
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Welcome To Our New Blog",
    description: "Welcome to our new blog.",
}

async function BlogList() {
    const res = await fetch('http://localhost:3000/api/blog');
    const items = await res.json();
    const blogs = items.data;
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
                    <h1>Explore Our Latest Blogs</h1>
                    <p>
                        <span>
                            Discover useful articles, ideas, and insights.
                        </span>
                    </p>
                </div>
            </section>

            <section className={styles.blogSection}>
                <div className={styles.sectionHeading}>
                    <h2>Latest Articles</h2>
                    <span>{blogs.length} Articles</span>
                </div>

                <div className={styles.blogGrid}>
                    {blogs.map((blog) => (
                        <article className={styles.card} key={blog.id}>
                            <Link href={`/blog/${blog.slug}`} className={styles.imageLink}>
                                <Image
                                    loading="eager"
                                    src={blog.image}
                                    alt={blog.title}
                                    width={600}
                                    height={400}
                                />
                            </Link>

                            <div className={styles.cardContent}>
                                <span className={styles.category}>{blog.category}</span>

                                <h3>
                                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                </h3>

                                <p>{blog.description}</p>

                                <Link href={`/blog/${blog.slug}`} className={styles.readMore}>
                                    Read Article →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default function Blog() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BlogList />
        </Suspense>
    );
}