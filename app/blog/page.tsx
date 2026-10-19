import type { Metadata } from "next";
import styles from "../css/Blog.module.css";
import Image from "next/image";
import BlogList from "../components/BlogList";
import { Suspense } from "react";
import Loading from "../components/loading";

export const metadata: Metadata = {
    title: "Welcome To Our New Blog",
    description: "Welcome to our new blog.",
};

async function GetBlogs() {
    const res = await fetch("http://localhost:3000/api/blog?start=0&limit=4");

    if (!res.ok) {
        throw new Error("Failed to fetch blogs");
    }

    const items = await res.json();

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

                <div className={styles.overlay} />

                <div className={styles.heroContent}>
                    <h1>Explore Our Latest Blogs</h1>
                    <p>Discover useful articles, ideas, and insights.</p>
                </div>
            </section>

            <BlogList initialBlogs={items.data ?? []} />
        </>
    );
}

export default async function Blog() {
    return (
        <Suspense fallback={<Loading />}>
            <GetBlogs />
        </Suspense>
    )
}
