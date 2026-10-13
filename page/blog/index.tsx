import Head from "next/head";
import Script from "next/script";

export default function Home() {
    return (
        <>
            <Head>
                <title>Welome To Blog</title>
                <meta name="description" content="Welcome to our new blog" />
                <meta name="keywords" content="Next, Next Haresh, Welcome Blog" />
            </Head>
            <Script src="/js/main.js" strategy="lazyOnload"></Script>
            <h1>Welcome To Our New Blog</h1>
        </>
    );
}
