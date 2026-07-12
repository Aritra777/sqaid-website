import { Link } from "react-router-dom";
import Brand from "./Brand";
import { COMPANY_EMAIL, PRODUCTS } from "@/lib/nav-data";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.col}>
          <div className={styles.brand}>
            <Brand size={24} />
            <span className={styles.brandName}>SqAId</span>
          </div>
          <p className={styles.tagline}>
            AI-native risk &amp; compliance intelligence for financial institutions.
          </p>
          <a className={styles.email} href={`mailto:${COMPANY_EMAIL}`}>
            {COMPANY_EMAIL}
          </a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Products</h4>
          <ul className={styles.list}>
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                {p.disabled ? (
                  <span style={{ opacity: 0.45, cursor: "default" }}>
                    {p.name}
                    <span className={styles.tag}>Soon</span>
                  </span>
                ) : (
                  <Link to={`/products/${p.slug}`}>
                    {p.name}
                    {p.status === "soon" && <span className={styles.tag}>Soon</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul className={styles.list}>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#team">Team</Link>
            </li>
            <li>
              <Link to="/#industries">Industries</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Reach</h4>
          <ul className={styles.list}>
            <li>Tampa, Florida — HQ</li>
            <li>Pune, India — Operations</li>
            <li>Innovation Centers · USA &amp; India</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className={styles.bottom}>
          <span>© {year} Sqaid LLC. All rights reserved.</span>
          <ul className={styles.legal}>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
            <li>
              <a href="#terms">Terms</a>
            </li>
            <li>
              <a href="#security">Security</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
