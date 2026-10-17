import { Metadata } from 'next';
import styles from '../css/About.module.css'

export const metadata: Metadata = {
    title: 'About Us - My Next',
    description: 'About Us Description - My Next'
};

export default function About() {
    return (
        <main className={styles.aboutPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.tag}>ABOUT US</span>
                    <h1>Get to Know Us Better</h1>
                    <p>
                        We believe in sharing knowledge, inspiring ideas,
                        and creating meaningful experiences for everyone.
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className={styles.aboutSection}>
                <div className={styles.aboutImage}>
                    <div className={styles.imagePlaceholder}>
                        <span>Our Story</span>
                    </div>
                </div>

                <div className={styles.aboutContent}>
                    <span className={styles.sectionTag}>WHO WE ARE</span>
                    <h2>Our Story and Purpose</h2>
                    <p>
                        Welcome to our website! We are passionate about
                        sharing useful information, practical ideas, and
                        valuable resources that help our readers learn
                        something new.
                    </p>
                    <p>
                        Our goal is to make information simple, accessible,
                        and enjoyable. We continuously work to create
                        content that informs, inspires, and adds value
                        to your everyday life.
                    </p>

                    <a href="/contact" className={styles.primaryButton}>
                        Get in Touch
                    </a>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className={styles.valuesSection}>
                <div className={styles.sectionHeading}>
                    <span className={styles.sectionTag}>WHAT DRIVES US</span>
                    <h2>Our Mission & Vision</h2>
                    <p>
                        Everything we do is guided by our commitment
                        to quality, learning, and our readers.
                    </p>
                </div>

                <div className={styles.valuesGrid}>
                    <article className={styles.valueCard}>
                        <div className={styles.icon}>🎯</div>
                        <h3>Our Mission</h3>
                        <p>
                            To deliver helpful, reliable, and easy-to-understand
                            content that empowers people with useful knowledge.
                        </p>
                    </article>

                    <article className={styles.valueCard}>
                        <div className={styles.icon}>🔭</div>
                        <h3>Our Vision</h3>
                        <p>
                            To become a trusted destination where people
                            discover ideas, explore new topics, and grow
                            through learning.
                        </p>
                    </article>

                    <article className={styles.valueCard}>
                        <div className={styles.icon}>💡</div>
                        <h3>Our Values</h3>
                        <p>
                            We value creativity, transparency, continuous
                            improvement, and delivering a positive experience
                            to every reader.
                        </p>
                    </article>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whySection}>
                <div className={styles.sectionHeading}>
                    <span className={styles.sectionTag}>WHY US</span>
                    <h2>What Makes Us Different?</h2>
                </div>

                <div className={styles.featuresGrid}>
                    <div className={styles.feature}>
                        <span>✓</span>
                        <div>
                            <h3>Helpful Content</h3>
                            <p>Information created with readers in mind.</p>
                        </div>
                    </div>

                    <div className={styles.feature}>
                        <span>✓</span>
                        <div>
                            <h3>Easy to Understand</h3>
                            <p>Clear explanations without unnecessary complexity.</p>
                        </div>
                    </div>

                    <div className={styles.feature}>
                        <span>✓</span>
                        <div>
                            <h3>Reader Focused</h3>
                            <p>Your experience and learning matter to us.</p>
                        </div>
                    </div>

                    <div className={styles.feature}>
                        <span>✓</span>
                        <div>
                            <h3>Always Improving</h3>
                            <p>We keep looking for ways to serve you better.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className={styles.ctaSection}>
                <h2>Have Questions or Ideas?</h2>
                <p>
                    We would love to hear from you. Let's start a conversation.
                </p>
                <a href="/contact" className={styles.ctaButton}>
                    Contact Us
                </a>
            </section>
        </main>
    );
}