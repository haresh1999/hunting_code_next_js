"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "../css/Blog.module.css";

type BlogItem = {
    id: number;
    title: string;
    slug: string;
    category: string;
    description: string;
    image: string;
};

type Props = {
    initialBlogs: BlogItem[];
};

export default function BlogList({ initialBlogs }: Props) {
    const [blogs, setBlogs] = useState(initialBlogs);
    const [hasMore, setHasMore] = useState(initialBlogs.length === 4);
    const [loadingError, setLoadingError] = useState("");

    const fetchMore = useCallback(async () => {
        try {
            setLoadingError("");

            const response = await fetch(
                `/api/blog?start=${blogs.length}&limit=4`
            );

            if (!response.ok) {
                throw new Error("Failed to load blogs");
            }

            const result = await response.json();
            const nextBlogs: BlogItem[] = result.data ?? [];

            setBlogs((previous) => [...previous, ...nextBlogs]);

            if (nextBlogs.length < 4) {
                setHasMore(false);
            }
        } catch (error) {
            console.error(error);
            setLoadingError("Could not load more blogs. Please try again.");
        }
    }, [blogs.length]);

    return (
        <section className={styles.blogSection}>
            <div className={styles.sectionHeading}>
                <h2>Latest Articles</h2>
                <span>{blogs.length} Articles</span>
            </div>

            <InfiniteScroll
                dataLength={blogs.length}
                next={fetchMore}
                hasMore={hasMore}
                loader={<p>Loading more blogs...</p>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        All items loaded.
                    </p>
                }
            >
                <div className={styles.blogGrid}>
                    {blogs.map((blog) => (
                        <article
                            className={styles.card}
                            key={blog.id}
                        >
                            <Link
                                href={`/blog/${blog.slug}`}
                                className={styles.imageLink}
                            >
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    width={600}
                                    height={400}
                                    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                                />
                            </Link>

                            <div className={styles.cardContent}>
                                <span className={styles.category}>
                                    {blog.category}
                                </span>

                                <h3>
                                    <Link href={`/blog/${blog.slug}`}>
                                        {blog.title}
                                    </Link>
                                </h3>

                                <p>{blog.description}</p>

                                <Link
                                    href={`/blog/${blog.slug}`}
                                    className={styles.readMore}
                                >
                                    Read Article →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </InfiniteScroll>

            {loadingError && (
                <p role="alert">
                    {loadingError}
                    <button onClick={fetchMore}>Retry</button>
                </p>
            )}
        </section>
    );
}
