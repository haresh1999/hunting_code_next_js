import { Suspense } from "react";

type Props = {
    params: Promise<{ slug: string }>;
};

async function BlogDetailsContent({ params }: Props) {
    const { slug } = await params;

    return (
        <div>
            <h1>Welcome To Blog Details</h1>
            <p>Blog Slug: {slug}</p>
        </div>
    );
}

export default function BlogDetails({ params }: Props) {
    return (
        <Suspense fallback={<p>Loading blog details...</p>}>
            <BlogDetailsContent params={params} />
        </Suspense>
    );
}

