import { Link } from "react-router-dom";
import { PRODUCTS } from "@/lib/nav-data";
import styles from "./Products.module.css";

const PRODUCT_DETAILS: Record<
  string,
  { eyebrow: string; bullets: string[] }
> = {
  argus: {
    eyebrow: "Financial-crime intelligence",
    bullets: [
      "Live Neo4j knowledge graph",
      "15 specialized investigation agents",
      "12-hop funds trace",
    ],
  },
  "case-manager": {
    eyebrow: "Case management",
    bullets: [
      "Configurable alert types & extra fields",
      "Visual workflow designer",
      "AWS-IAM-style RBAC",
    ],
  },
  faro: {
    eyebrow: "Real-time fraud & AML",
    bullets: [
      "Spring Cloud microservices",
      "Kafka event backbone",
      "13+ pluggable services",
    ],
  },
  abacus: {
    eyebrow: "Coming soon",
    bullets: ["In development", "Stay tuned"],
  },
};

export default function Products() {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section--center" style={{ marginBottom: 56 }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Products
          </div>
          <h2 className="section-title">
            Built for enterprise compliance.
            <br />
            <em>Designed to work together.</em>
          </h2>
          <p className="section-lede">
            Four products. One platform. Each owns a piece of the compliance lifecycle, and they
            compose into a single source of truth across alerts, cases, and investigations.
          </p>
        </div>

        <div className={styles.grid}>
          {PRODUCTS.map((p) => {
            const meta = PRODUCT_DETAILS[p.slug];
            return (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className={`${styles.card} ${p.status === "soon" ? styles.soon : ""}`}
              >
                <div className={styles.cardEyebrow}>{meta.eyebrow}</div>
                <div className={styles.cardName}>
                  {p.name}
                  {p.status === "soon" && <span className={styles.tag}>Soon</span>}
                </div>
                <p className={styles.cardTagline}>{p.tagline}</p>
                <ul className={styles.cardBullets}>
                  {meta.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <span className={styles.cardArrow}>Explore {p.name} →</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
