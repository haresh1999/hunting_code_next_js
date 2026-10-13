import Head from "next/head";
import Script from "next/script";
import styles from '../../styles/contact.module.css';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us Page</title>
                <meta name="description" content="Welcome to contact us page" />
                <meta name="keywords" content="Welcome to contact us page" />
            </Head>

            <h1 className={styles.color}>
                Welcome to contact us page
            </h1>

            <Script src="/js/main.js"></Script>
        </>
    );
}