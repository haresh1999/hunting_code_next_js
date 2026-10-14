import styles from "../styles/home.module.css";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    category: "Development",
    description: "Learn the basics of building modern websites.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    slug: "web-development",
  },
  {
    id: 2,
    title: "Latest Technology Trends",
    category: "Technology",
    description: "Discover new trends changing the digital world.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    slug: "technology-trends",
  },
  {
    id: 3,
    title: "Digital Marketing Strategies",
    category: "Marketing",
    description: "Improve your online presence with smart strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
    slug: "digital-marketing",
  },
  {
    id: 4,
    title: "Building a Successful Business",
    category: "Business",
    description: "Explore ideas to grow your online business.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
    slug: "business-growth",
  },
  {
    id: 5,
    title: "Understanding Website Analytics",
    category: "Analytics",
    description: "Use website data to make better decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    slug: "website-analytics",
  },
  {
    id: 6,
    title: "Skills for the Digital Future",
    category: "Learning",
    description: "Learn valuable skills for your career.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600",
    slug: "digital-skills",
  },
  {
    id: 7,
    title: "Modern Computer Technology",
    category: "Technology",
    description: "Explore the technology powering our devices.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    slug: "computer-technology",
  },
  {
    id: 8,
    title: "Improve Your Productivity",
    category: "Productivity",
    description: "Simple tips to work smarter every day.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
    slug: "productivity",
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Explore Our Latest Blogs</h1>
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
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
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
  );
}