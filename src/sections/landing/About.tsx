import styles from "./About.module.css";

const FACTS = [
  { value: "10+", label: "Years building compliance products" },
  { value: "500+", label: "Institutions served by our team" },
  { value: "2", label: "Innovation centers · USA & India" },
];

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <div className="two-col">
          <div className="two-col__a">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              About SqAId
            </div>
            <h2 className="section-title">
              Built by experts. Powered by AI.
              <br />
              <em>Trusted by institutions.</em>
            </h2>
            <p className="section-lede">
              We started SqAId because we saw compliance teams drowning in alerts, working across
              siloed systems, and struggling to demonstrate effectiveness to regulators. We
              believed there was a better way — one platform that unifies workflows, supercharges
              investigations with AI, and gives institutions complete visibility into risk.
            </p>
            <p className="section-lede">
              Our team blends deep expertise in <b>AML, fraud, sanctions, and regulatory
              compliance</b> with hands-on engineering across graph databases, real-time
              streaming, and modern AI agents.
            </p>
            <div className={styles.locations}>
              <div className={styles.loc}>
                <div className={styles.locLabel}>Headquarters</div>
                <div className={styles.locValue}>Tampa, Florida — United States</div>
              </div>
              <div className={styles.loc}>
                <div className={styles.locLabel}>Operations Center</div>
                <div className={styles.locValue}>Pune, Maharashtra — India</div>
              </div>
            </div>
          </div>

          <div className="two-col__b">
            <ul className={styles.facts}>
              {FACTS.map((f) => (
                <li key={f.label} className={styles.fact}>
                  <div className={styles.factVal}>{f.value}</div>
                  <div className={styles.factLabel}>{f.label}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
