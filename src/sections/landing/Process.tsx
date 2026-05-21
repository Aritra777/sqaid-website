import styles from "./Process.module.css";

const STEPS = [
  {
    n: "1",
    title: "Ingest",
    body: "Connect transaction data, customer profiles, and external watchlists in real time through API-first data contracts.",
  },
  {
    n: "2",
    title: "Investigate",
    body: "AI agents analyze patterns, flag anomalies, and prepare a comprehensive case file — before an analyst opens it.",
  },
  {
    n: "3",
    title: "Resolve",
    body: "Analysts review AI-suggested decisions, edit the narrative, and file a regulator-ready SAR with a single click.",
  },
];

export default function Process() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section--center" style={{ marginBottom: 56 }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            From alert to resolution
          </div>
          <h2 className="section-title">
            Three steps. <em>End to end.</em>
          </h2>
        </div>

        <div className={styles.steps}>
          {STEPS.map((s) => (
            <article key={s.n} className={styles.step}>
              <div className={styles.num}>{s.n}</div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.body}>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
