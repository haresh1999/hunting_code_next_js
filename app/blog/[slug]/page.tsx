import { Suspense } from "react";
import styles from "../../css/Blog.module.css";
import Image from "next/image";
import Link from "next/link";
import Loading from "../../components/loading";

type Props = {
    params: Promise<{ slug: string }>;
};

function BlogNotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.icon}>📝</div>

                <h1>Blog Not Found!</h1>

                <p>
                    Sorry, we couldn't find the blog you're looking for.
                    It may have been removed or the URL might be incorrect.
                </p>

                <Link href="/blog" className={styles.button}>
                    ← Back to Blogs
                </Link>

                <span className={styles.errorCode}>ERROR 404</span>
            </div>
        </div>
    );
}

async function BlogDetailsContent({ params }: Props) {
    const { slug } = await params;

    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

    if (res.status === 404) {
        return <BlogNotFound />;
    }

    if (!res.ok) {
        throw new Error(`Failed to fetch blog: ${res.status}`);
    }

    const item = await res.json();
    const blog = item.data;

    if (!blog) {
        return <BlogNotFound />;
    }

    return (
        <div className={styles.container}>
            <article className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={600}
                        height={350}
                        className={styles.image}
                    />
                    <span className={styles.category}>
                        {blog.category}
                    </span>
                </div>

                <div className={styles.content}>
                    <h2 className={styles.title}>{blog.title}</h2>
                    <p className={styles.description}>
                        {blog.description}
                    </p>

                    <Link
                        href="/blog"
                        className={styles.readMore}
                    >
                        ← Back to Blogs
                    </Link>
                </div>
            </article>
        </div>
    );
}

export default function BlogDetails({ params }: Props) {
    return (
        <Suspense fallback={<Loading />}>
            <BlogDetailsContent params={params} />
        </Suspense>
    );
}