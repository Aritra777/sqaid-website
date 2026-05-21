import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

type Stat = { value: string; unit?: string; label: string };

const STATS: Stat[] = [
  { value: "40–60", unit: "%", label: "Faster end-to-end investigations" },
  { value: "95", unit: "%", label: "False positives suppressed" },
  { value: "4", label: "Unified workflows: AML · Fraud · Sanctions · Trade" },
  { value: "<5", unit: "ms", label: "Per-event rule evaluation" },
  { value: "10", unit: "+", label: "Years compliance expertise" },
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          AI-Native Risk &amp; Compliance Intelligence
        </div>
        <h1 className={styles.h1}>
          From alert overload
          <br />
          to <em>actionable intelligence.</em>
        </h1>
        <p className={styles.sub}>
          SqAId unifies <b>AML, fraud, sanctions, and trade surveillance</b> into one AI-native
          platform — so compliance teams investigate the cases that matter, not the noise.
        </p>
        <div className={styles.btnRow}>
          <Link to="/#contact" className="btn btn--primary">
            Request a Demo &nbsp;→
          </Link>
          <Link to="/#products" className="btn btn--ghost">
            Explore Products
          </Link>
        </div>

        <ul className={styles.stats}>
          {STATS.map((s) => (
            <li key={s.label} className={styles.stat}>
              <div className={styles.statVal}>
                {s.value}
                {s.unit && <span>{s.unit}</span>}
              </div>
              <div className={styles.statLabel}>{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
