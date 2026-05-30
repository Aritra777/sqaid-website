import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { useTilt } from "@/lib/use-tilt";
import { COMPANY_EMAIL } from "@/lib/nav-data";
import { useDocumentTitle } from "@/lib/use-document-title";
import styles from "./Argus.module.css";

type Stat = { value: string; unit?: string; label: string };
type Capability = { tag: string; title: string; body: string };
type Agent = { name: string; role: string };

const HERO_STATS: Stat[] = [
  { value: "11", label: "Specialized agents in the investigation crew" },
  { value: "3", unit: "yrs", label: "Of fragmented data unified into one timeline" },
  { value: "90", unit: "%", label: "Less manual review on each alert" },
  { value: "24/7", label: "Autonomous monitoring and triage" },
];

const CAPABILITIES: Capability[] = [
  {
    tag: "Ingestion",
    title: "Every record, one timeline",
    body: "Argus pulls together transactions, KYC, communications, and case history into a single chronological view of each subject — so nothing hides in a silo.",
  },
  {
    tag: "Detection",
    title: "Patterns humans miss",
    body: "Graph and behavioral models surface structuring, layering, and coordinated activity across accounts that rule-based systems never connect.",
  },
  {
    tag: "Investigation",
    title: "An autonomous analyst crew",
    body: "Eleven specialized agents divide the work — each owning a slice of the investigation, from entity resolution to narrative generation.",
  },
  {
    tag: "Output",
    title: "Decisions, not dashboards",
    body: "Argus delivers a recommended disposition with the evidence trail attached — so investigators confirm, they don't assemble.",
  },
];

const AGENTS: Agent[] = [
  { name: "Intake", role: "Normalizes and links incoming alerts" },
  { name: "Entity Resolution", role: "Merges identities across data sources" },
  { name: "Timeline", role: "Builds the chronological case view" },
  { name: "Transaction Analysis", role: "Flags anomalous money movement" },
  { name: "Graph", role: "Maps relationships between subjects" },
  { name: "Sanctions & PEP", role: "Screens against watchlists" },
  { name: "Behavioral", role: "Models deviation from normal activity" },
  { name: "Narrative", role: "Drafts the investigation summary" },
  { name: "QA", role: "Checks reasoning and evidence quality" },
  { name: "Disposition", role: "Recommends an action with rationale" },
  { name: "Audit", role: "Records every step for regulators" },
];

export default function Argus() {
  useDocumentTitle("Argus · Agentic AML investigation");
  const tilt = useTilt({ max: 5 });

  return (
    <div className="theme-argus">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          <Reveal className="eyebrow">
            <span className="eyebrow-dot" />
            Argus · Agentic AML investigation
          </Reveal>

          <Reveal as="h1" className={styles.h1} delay={60}>
            The AML platform that <em>investigates</em> — not just alerts.
          </Reveal>

          <Reveal as="p" className={styles.sub} delay={120}>
            Argus is an <b>agentic AML investigation platform</b>. Eleven specialized AI agents
            work together to triage alerts, connect the dots across years of data, and hand your
            team a recommended disposition — with the full evidence trail attached.
          </Reveal>

          <Reveal className={styles.heroCtas} delay={180}>
            <a href={`mailto:${COMPANY_EMAIL}?subject=Argus%20demo`} className="btn btn--primary">
              Request a Demo &nbsp;→
            </a>
            <a href="#crew" className="btn btn--ghost">
              Meet the Crew
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
                  <span className={styles.heroUrl}>app.sqaid.ai / argus / graph-explorer</span>
                  <span className={styles.heroBadge}>● Live</span>
                </div>
                <img
                  className={styles.heroShot}
                  src="/assets/argus01.jpg"
                  alt="Argus graph explorer — entity link-analysis workspace"
                  width={3926}
                  height={2534}
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
              What it does
            </Reveal>
            <Reveal as="h2" className="section-title" delay={60}>
              From alert to disposition — <em>autonomously.</em>
            </Reveal>
            <Reveal as="p" className="section-lede" delay={120}>
              Argus doesn&apos;t just flag risk. It runs the investigation end to end and brings you
              a decision with the receipts.
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

      {/* ── THE CREW ─────────────────────────────────── */}
      <section id="crew" className="section">
        <div className="container">
          <div className="section--center" style={{ marginBottom: 0 }}>
            <Reveal className="eyebrow">
              <span className="eyebrow-dot" />
              The crew
            </Reveal>
            <Reveal as="h2" className="section-title" delay={60}>
              Eleven agents. <em>One investigation.</em>
            </Reveal>
            <Reveal as="p" className="section-lede" delay={120}>
              Each agent owns a slice of the investigation and hands its work to the next — like a
              real team, running around the clock.
            </Reveal>
          </div>

          <div className={styles.crew}>
            {AGENTS.map((a, i) => (
              <Reveal key={a.name} className={styles.agent} delay={(i % 4) * 60}>
                <div className={styles.agentNum}>{String(i + 1).padStart(2, "0")}</div>
                <h3 className={styles.agentName}>{a.name}</h3>
                <p className={styles.agentRole}>{a.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal className={styles.cta}>
            <div className={styles.ctaGlow} aria-hidden="true" />
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="eyebrow-dot" />
              Get started
            </div>
            <h2 className="section-title">
              See Argus investigate <em>one of your cases.</em>
            </h2>
            <p className="section-lede" style={{ marginBottom: 32 }}>
              Bring a real alert. We&apos;ll show you the full investigation — start to disposition —
              in twenty minutes.
            </p>
            <div className={styles.ctaButtons}>
              <a href={`mailto:${COMPANY_EMAIL}?subject=Argus%20demo`} className="btn btn--primary">
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
