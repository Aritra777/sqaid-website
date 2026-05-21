import styles from "./Problem.module.css";

type Card = { icon: string; title: string; body: string };

const CARDS: Card[] = [
  {
    icon: "◇",
    title: "Fragmented systems",
    body: "Data scattered across legacy tools makes it impossible to see the full risk picture in time to act.",
  },
  {
    icon: "⚠",
    title: "Alert overload",
    body: "Analysts drown in false positives, missing the true risks hidden inside thousands of low-signal alerts.",
  },
  {
    icon: "⊗",
    title: "Integration chaos",
    body: "Months are spent wiring disparate data sources together instead of fighting financial crime.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section">
      <div className="container">
        <div className="section--center" style={{ marginBottom: 56 }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            The risk &amp; compliance crisis
          </div>
          <h2 className="section-title">
            Teams work harder.
            <br />
            Siloed tools <em>hold them back.</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {CARDS.map((c) => (
            <article key={c.title} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                {c.icon}
              </div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardBody}>{c.body}</p>
            </article>
          ))}
        </div>

        <div className={styles.stat}>
          <div className={styles.statBig}>
            10,000<span>+</span>
          </div>
          <div className={styles.statCopy}>
            <strong>Alerts investigated each year by a typical institution.</strong>
            <span>Industry research suggests fewer than 5% are truly actionable.</span>
          </div>
          <div className={styles.statBigAlt}>
            &lt;5<span>%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
