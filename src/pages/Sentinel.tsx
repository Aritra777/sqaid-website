import { Link } from "react-router-dom";
import { COMPANY_EMAIL } from "@/lib/nav-data";
import { useDocumentTitle } from "@/lib/use-document-title";
import styles from "./Sentinel.module.css";

const META = [
  { label: "Status", value: "In active development" },
  { label: "Expected", value: "Public details soon" },
  { label: "Updates", value: `Email ${COMPANY_EMAIL} to be notified` },
];

export default function Sentinel() {
  useDocumentTitle("Sentinel · Coming soon");
  return (
    <section className={styles.shell}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.logoStack}>
          <span className={styles.ring} aria-hidden="true" />
          <span className={styles.ring2} aria-hidden="true" />
          <div className={styles.hexWrap}>
            <div className={styles.hexBig} aria-hidden="true" />
          </div>
        </div>

        <div className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
          <span className="eyebrow-dot" />
          Coming soon · Sentinel
        </div>

        <h1 className={styles.h1}>
          Something new is taking shape.
          <br />
          <em>Stay tuned.</em>
        </h1>

        <p className={styles.lede}>
          Sentinel is the next product in the SqAId family — a focused complement to Argus, Case
          Manager, and Faro. We&apos;re finalising the details. If you&apos;d like an early look
          when it lands, drop us a note.
        </p>

        <div className={styles.tags}>
          <span className={styles.tag}>
            <strong>·</strong>&nbsp; AI-native
          </span>
          <span className={styles.tag}>
            <strong>·</strong>&nbsp; Built on the SqAId platform
          </span>
          <span className={styles.tag}>
            <strong>·</strong>&nbsp; In development
          </span>
        </div>

        <div className={styles.cta}>
          <a
            href={`mailto:${COMPANY_EMAIL}?subject=Sentinel%20early%20access`}
            className="btn btn--primary"
          >
            Notify me &nbsp;→
          </a>
          <Link to="/#products" className="btn btn--ghost">
            Explore the other products
          </Link>
        </div>

        <div className={styles.meta}>
          {META.map((m) => (
            <div key={m.label} className={styles.metaCard}>
              <div className={styles.metaLabel}>{m.label}</div>
              <div className={styles.metaValue}>{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
