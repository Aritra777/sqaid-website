import { Link } from "react-router-dom";
import ScreenshotFrame from "@/components/ScreenshotFrame";
import Reveal from "@/components/Reveal";
import { useTilt } from "@/lib/use-tilt";
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
  const tilt = useTilt({ max: 5 });

  return (
    <div className="theme-faro">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          <Reveal className="eyebrow" delay={0}>
            <span className="eyebrow-dot" />
            Faro · Real-time fraud &amp; AML
          </Reveal>

          <Reveal as="h1" className={styles.h1} delay={60}>
            Catch the fraud.
            <br />
            <em>Stop the laundering.</em>
            <br />
            In real time.
          </Reveal>

          <Reveal as="p" className={styles.sub} delay={120}>
            Faro brings <b>fraud detection and anti-money-laundering into a single real-time
            platform</b> — so every transaction is scored, every alert is investigated, and every
            decision is delivered back to your downstream systems with full evidence and lineage.
          </Reveal>

          <Reveal className={styles.heroCtas} delay={180}>
            <a href={`mailto:${COMPANY_EMAIL}?subject=Faro%20demo`} className="btn btn--primary">
              Request a Demo &nbsp;→
            </a>
            <a href="#capabilities" className="btn btn--ghost">
              What it does
            </a>
          </Reveal>
        </div>

        {/* floating product shot with pointer tilt */}
        <div className={`container ${styles.heroStageWrap}`}>
          <Reveal delay={240}>
            <div className={styles.heroStage}>
              <div
                ref={tilt.ref}
                className={styles.heroCard}
                onPointerMove={tilt.onMove}
                onPointerLeave={tilt.onLeave}
              >
                <div className={styles.heroChrome} aria-hidden="true">
                  <span className={styles.heroDot} />
                  <span className={styles.heroDot} />
                  <span className={styles.heroDot} />
                  <span className={styles.heroUrl}>app.sqaid.ai / faro</span>
                  <span className={styles.heroBadge}>● Live</span>
                </div>
                <img
                  className={styles.heroShot}
                  src="/assets/FARO.png"
                  alt="Faro fraud & AML control center — alert triage workspace"
                  width={3024}
                  height={1640}
                />
                <div className={styles.heroGlare} aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* stats */}
        <div className="container">
          <ul className={styles.heroStats}>
            {HERO_STATS.map((s, i) => (
              <Reveal as="li" key={s.label} className={styles.hStat} delay={300 + i * 70}>
                <div className={styles.hStatVal}>
                  {s.value}
                  {s.unit && <span>{s.unit}</span>}
                </div>
                <div className={styles.hStatLabel}>{s.label}</div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CAPABILITIES (bento) ─────────────────────── */}
      <section id="capabilities" className="section section--alt">
        <div className="container">
          <div className="section--center" style={{ marginBottom: 0 }}>
            <Reveal className="eyebrow">
              <span className="eyebrow-dot" />
              What Faro does
            </Reveal>
            <Reveal as="h2" className="section-title" delay={60}>
              Fraud and AML, <em>finally in the same flow.</em>
            </Reveal>
            <Reveal as="p" className="section-lede" delay={120}>
              Most institutions run fraud and AML on two different stacks, with two different
              teams, looking at the same customer. Faro brings them together — so the signals
              compound instead of conflict.
            </Reveal>
          </div>

          <div className={styles.bento}>
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} className={styles.capability} delay={i * 90}>
                <div className={styles.capTag}>{c.tag}</div>
                <h3 className={styles.capTitle}>{c.title}</h3>
                <p className={styles.capBody}>{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section--center" style={{ marginBottom: 56 }}>
            <Reveal className="eyebrow">
              <span className="eyebrow-dot" />
              How it works
            </Reveal>
            <Reveal as="h2" className="section-title" delay={60}>
              Five stages. <em>One platform.</em>
            </Reveal>
            <Reveal as="p" className="section-lede" delay={120}>
              From the moment a transaction lands to the moment a verdict reaches your downstream
              systems, every step happens in one platform — with one decision and one audit
              trail.
            </Reveal>
          </div>

          <div className={styles.stages}>
            {STAGES.map((s, i) => (
              <Reveal key={s.label} className={styles.stage} delay={i * 70}>
                <div className={styles.stageLabel}>{s.label}</div>
                <h3 className={styles.stageTitle}>{s.title}</h3>
                <p className={styles.stageBody}>{s.body}</p>
                <span className={styles.stageLine} aria-hidden="true" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONE DECISION ─────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="two-col two-col--flip">
            <Reveal className="two-col__a">
              <ScreenshotFrame
                label="Verdict view"
                url="app.sqaid.ai / faro / verdict"
                aspect="16 / 9"
                src="/assets/FARO.png"
                alt="Faro verdict view"
              />
            </Reveal>
            <Reveal className="two-col__b" delay={120}>
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="section" style={{ padding: 'var(--space-8) 0' }}>
        <div className="container">
          <Reveal className={styles.cta}>
            <div className={styles.ctaGlow} aria-hidden="true" />
            <div className="eyebrow" style={{ justifyContent: "center" }}>
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
            <div className={styles.ctaButtons}>
              <a href={`mailto:${COMPANY_EMAIL}?subject=Faro%20demo`} className="btn btn--primary">
                Request a Demo &nbsp;→
              </a>
              <Link to="/#solution" className="btn btn--ghost">
                See the Platform
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
