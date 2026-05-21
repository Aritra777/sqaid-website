import { Link } from "react-router-dom";
import ScreenshotFrame from "@/components/ScreenshotFrame";
import { COMPANY_EMAIL } from "@/lib/nav-data";
import { useDocumentTitle } from "@/lib/use-document-title";
import styles from "./Faro.module.css";

type Stat = { value: string; unit?: string; label: string };
type Capability = { tag: string; title: string; body: string };
type Stage = { label: string; title: string; body: string };

const HERO_STATS: Stat[] = [
  { value: "Real-time", label: "Decisioning across every transaction" },
  { value: "1", label: "Unified platform — fraud & AML in one" },
  { value: "All", label: "Channels: cards, wires, ACH, SEPA, crypto" },
  { value: "24/7", label: "Continuous monitoring & coverage" },
];

const CAPABILITIES: Capability[] = [
  {
    tag: "Detection",
    title: "Real-time fraud scoring",
    body: "Score every transaction the moment it happens — across cards, wires, ACH, SEPA, UPI, and crypto — and act before money moves.",
  },
  {
    tag: "AML",
    title: "Anti-money-laundering in the same flow",
    body: "Structuring, layering, rapid-fire transfers, sanctions exposure — all evaluated in the same pipeline that catches fraud, so nothing falls between the gaps.",
  },
  {
    tag: "AI assist",
    title: "AI copilot for analysts",
    body: "Surface the why behind each alert, draft the investigation narrative, and recommend the next action — so reviews take minutes, not hours.",
  },
  {
    tag: "Outcomes",
    title: "One decision, every time",
    body: "Many signals come in; a single, consolidated verdict goes back to your downstream systems — with full evidence and a clear audit trail.",
  },
];

const STAGES: Stage[] = [
  {
    label: "01",
    title: "Ingest",
    body: "Connect to your transaction streams, customer records, and external watchlists. New data sources land in hours, not months.",
  },
  {
    label: "02",
    title: "Detect",
    body: "Rules, machine-learning models, and graph intelligence work side by side — each scoring the transaction for fraud and AML risk.",
  },
  {
    label: "03",
    title: "Triage",
    body: "Alerts are deduplicated, ranked, and grouped into cases so analysts spend their time on what matters, not on noise.",
  },
  {
    label: "04",
    title: "Decide",
    body: "All signals converge into a single, explainable verdict — approve, hold, escalate — delivered back to your downstream systems in real time.",
  },
  {
    label: "05",
    title: "Report",
    body: "Dashboards, compliance reports, and full audit lineage for every decision, ready for the next regulator request.",
  },
];

export default function Faro() {
  useDocumentTitle("Faro · Real-time fraud & AML platform");
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Faro · Real-time fraud &amp; AML
          </div>
          <h1 className={styles.h1}>
            Catch the fraud.
            <br />
            <em>Stop the laundering.</em>
            <br />
            In real time.
          </h1>
          <p className={styles.sub}>
            Faro brings <b>fraud detection and anti-money-laundering into a single real-time
            platform</b> — so every transaction is scored, every alert is investigated, and every
            decision is delivered back to your downstream systems with full evidence and lineage.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href={`mailto:${COMPANY_EMAIL}?subject=Faro%20demo`}
              className="btn btn--primary"
            >
              Request a Demo &nbsp;→
            </a>
            <a href="#capabilities" className="btn btn--ghost">
              What it does
            </a>
          </div>
          <ul className={styles.heroStats}>
            {HERO_STATS.map((s) => (
              <li key={s.label} className={styles.hStat}>
                <div className={styles.hStatVal}>
                  {s.value}
                  {s.unit && <span>{s.unit}</span>}
                </div>
                <div className={styles.hStatLabel}>{s.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SCREENSHOT ───────────────────────────────── */}
      <section style={{ paddingBottom: "var(--space-10)" }}>
        <div className="container">
          <ScreenshotFrame
            label="Faro — fraud & AML control center"
            url="app.sqaid.ai / faro"
            badge="Live"
            aspect="16 / 9"
            caption="Faro control center"
          />
        </div>
      </section>

      {/* ── CAPABILITIES ─────────────────────────────── */}
      <section id="capabilities" className="section section--alt">
        <div className="container">
          <div className="section--center" style={{ marginBottom: 0 }}>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              What Faro does
            </div>
            <h2 className="section-title">
              Fraud and AML, <em>finally in the same flow.</em>
            </h2>
            <p className="section-lede">
              Most institutions run fraud and AML on two different stacks, with two different
              teams, looking at the same customer. Faro brings them together — so the signals
              compound instead of conflict.
            </p>
          </div>

          <div className={styles.capabilities}>
            {CAPABILITIES.map((c) => (
              <article key={c.title} className={styles.capability}>
                <div className={styles.capTag}>{c.tag}</div>
                <h3 className={styles.capTitle}>{c.title}</h3>
                <p className={styles.capBody}>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section--center" style={{ marginBottom: 56 }}>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              How it works
            </div>
            <h2 className="section-title">
              Five stages. <em>One platform.</em>
            </h2>
            <p className="section-lede">
              From the moment a transaction lands to the moment a verdict reaches your downstream
              systems, every step happens in one platform — with one decision and one audit
              trail.
            </p>
          </div>

          <div className={styles.stages}>
            {STAGES.map((s) => (
              <article key={s.label} className={styles.stage}>
                <div className={styles.stageLabel}>{s.label}</div>
                <h3 className={styles.stageTitle}>{s.title}</h3>
                <p className={styles.stageBody}>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONE DECISION ─────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="two-col two-col--flip">
            <div className="two-col__a">
              <ScreenshotFrame
                label="Verdict view"
                url="app.sqaid.ai / faro / verdict"
                aspect="4 / 3"
                caption="Faro verdict view"
              />
            </div>
            <div className="two-col__b">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                One decision, full evidence
              </div>
              <h2 className="section-title">
                Many signals. <em>One verdict.</em>
              </h2>
              <p className="section-lede">
                Rules, machine-learning models, graph analysis, and the AI copilot each look at
                a transaction from a different angle. Faro brings their views together into a
                single, consolidated verdict — and ships it back to your downstream systems with
                the full evidence package attached.
              </p>
              <ul className="checklist">
                <li>
                  <span>
                    <b>One number</b> — every transaction gets a single, explainable risk score
                  </span>
                </li>
                <li>
                  <span>
                    <b>Full evidence</b> — every contributing signal is captured and replayable
                  </span>
                </li>
                <li>
                  <span>
                    <b>Audit lineage</b> — from raw event to final decision, end to end
                  </span>
                </li>
                <li>
                  <span>
                    <b>Built for change</b> — new detection logic deploys without disrupting the
                    rest of the platform
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="section section--center">
        <div className="container">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Get started
          </div>
          <h2 className="section-title">
            Bring fraud and AML together.
            <br />
            <em>See it on your data.</em>
          </h2>
          <p className="section-lede" style={{ marginBottom: 32 }}>
            Twenty minutes — we&apos;ll walk you through Faro on a transaction profile that
            looks like yours.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`mailto:${COMPANY_EMAIL}?subject=Faro%20demo`}
              className="btn btn--primary"
            >
              Request a Demo &nbsp;→
            </a>
            <Link to="/#products" className="btn btn--ghost">
              Compare Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
