import styles from "./Industries.module.css";

const INDUSTRIES = [
  { name: "Banking", focus: "Transaction monitoring · KYC / KYB" },
  { name: "Healthcare", focus: "Fraud, waste & abuse" },
  { name: "Insurance", focus: "Claims fraud · Underwriting risk" },
  { name: "Government", focus: "Tax evasion · Procurement fraud" },
  { name: "Telecom", focus: "Subscription fraud · Roaming abuse" },
  { name: "Energy", focus: "Smart-meter fraud · Insider threat" },
  { name: "Retail", focus: "Return fraud · Loyalty abuse" },
  { name: "Gaming", focus: "Account takeover · Money laundering" },
  { name: "Logistics", focus: "Supplier risk · Cargo theft" },
  { name: "Education", focus: "Grant fraud · Vendor screening" },
];

export default function Industries() {
  return (
    <section id="industries" className="section">
      <div className="container">
        <div className="section--center" style={{ marginBottom: 56 }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Built for regulated industries
          </div>
          <h2 className="section-title">
            One platform. <em>Every regulated sector.</em>
          </h2>
          <p className="section-lede">
            Scalable detection and case management for the industries where compliance failure is
            existential.
          </p>
        </div>

        <div className={styles.grid}>
          {INDUSTRIES.map((i) => (
            <article key={i.name} className={styles.card}>
              <div className={styles.name}>{i.name}</div>
              <div className={styles.focus}>{i.focus}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
