import Script from 'next/script';
import styles from '../css/Loading.module.css';

export default function Loading() {
    return (
        <>
            <Script
                src="/js/loading.js"
                strategy="afterInteractive"
            />

            <div
                id="top-loading-bar"
                className={styles.topLoadingBar}
            />

        </>
    );
}