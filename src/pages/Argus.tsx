import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { useTilt } from "@/lib/use-tilt";
import { COMPANY_EMAIL } from "@/lib/nav-data";
import { useDocumentTitle } from "@/lib/use-document-title";
import styles from "./Argus.module.css";

type Stat = { value: string; unit?: string; label: string };
type Capability = { tag: string; title: string; body: string };
type Agent = { type: string; name: string; desc: string };

const HERO_STATS: Stat[] = [
  { value: "50", unit: "+", label: "Production detection rules" },
  { value: "12", label: "Specialized AI agents in the squad" },
  { value: "<5", unit: "ms", label: "Rule evaluation per event" },
  { value: "12", unit: "×", label: "Hop depth on funds-tracing walks" },
];

const CAPABILITIES: Capability[] = [
  {
    tag: "Knowledge graph",
    title: "Risk lives in relationships",
    body: "Argus links every customer, account, device, IP, wallet, and beneficial owner in a live Neo4j graph — then propagates risk across edges with hop-decay. 2-hop sanctions exposure, money-mule rings, and 12-hop funds traces surface automatically.",
  },
  {
    tag: "Rules engine",
    title: "Rules dispatch the investigation",
    body: "Each rule carries investigation instructions — which edges to walk, how far, how fast risk decays, and which agent playbooks to fire. The Sentinel evaluates against Oracle SQL and Neo4j Cypher and matches in under 5ms.",
  },
  {
    tag: "Agent squad",
    title: "Twelve agents on every alert",
    body: "When a rule fires, twelve specialized agents are dispatched automatically — graph, behavioral, fraud, funds-tracing, identity, and synthesis — building in seconds what would take an analyst days.",
  },
  {
    tag: "Compliance",
    title: "Regulator-ready by default",
    body: "SAR-ready narratives with no hedging, explainable risk decomposition, and full correlation-ID lineage from source event → rule → alert → agent → decision.",
  },
];

const AGENTS: Agent[] = [
  {
    type: "Routing",
    name: "Orchestrator",
    desc: "LLM-driven intent router. Classifies queries, resolves pronouns from conversation history, and extracts entities before dispatching the pipeline.",
  },
  {
    type: "Graph",
    name: "Investigator",
    desc: "Walks Neo4j up to 2 hops, mapping every high-risk neighbor with WHY (PEP, sanctioned, adverse media) and HOW (edge type + amount).",
  },
  {
    type: "Temporal",
    name: "ProfileShift",
    desc: "Traverses the SCD-2 ProfileSnapshot chain over 90 days. Detects the exact moment a profile changed — PEP flip, sanctions match, KYC downgrade.",
  },
  {
    type: "Threat Intel",
    name: "DarkWebScanner",
    desc: "Runs fresh dark-web credential-breach checks on every customer under investigation. Distinguishes active exposure from stale records.",
  },
  {
    type: "Behavioral",
    name: "CustomerProfiler",
    desc: "Cross-account structuring counts, layering depth, peer-deviation z-scores, ATO signal scores — computed fresh on demand against Oracle.",
  },
  {
    type: "Behavioral",
    name: "AccountProfiler",
    desc: "Per-account rolling stats: 30/90-day outbound volume, velocity spikes, new-counterparty churn, dormancy flags.",
  },
  {
    type: "Fraud",
    name: "AccountTakeover",
    desc: "Device signals (rooted, jailbroken, emulator) plus login signals (VPN, TOR, failed bursts, SIM swaps). Correlated with breach flags.",
  },
  {
    type: "Payments",
    name: "PaymentFraud",
    desc: "Outbound velocity and payment-scheme mix (SWIFT, ACH, SEPA, UPI, crypto). Flags cross-scheme structuring invisible to single-scheme rules.",
  },
  {
    type: "Network",
    name: "NetworkRing",
    desc: "Shared-identifier ring detection across devices, IPs, addresses, wallets, and cards. Surfaces coordinated money-mule networks.",
  },
  {
    type: "Follow the money",
    name: "FundsTrace",
    desc: "Recursive 12-hop walk through HAS_ACCOUNT → PAID_TO → ROUTED_VIA chains. Surfaces every reachable sanctioned or adverse-media endpoint.",
  },
  {
    type: "Identity",
    name: "Resolver",
    desc: "Entity resolution against Oracle. Surfaces duplicate identities, synthetic-identity patterns, and name-masking with confidence scores.",
  },
  {
    type: "Synthesis",
    name: "Narrator",
    desc: "Synthesizes all agent findings into a ≤400-word, no-hedging narrative with clickable entity links. SAR-ready output.",
  },
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
            Argus is an <b>agentic AML investigation platform</b>. Twelve specialized AI agents
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
              Twelve agents. <em>One investigation.</em>
            </Reveal>
            <Reveal as="p" className="section-lede" delay={120}>
              Each agent owns a slice of the investigation and hands its work to the next — like a
              real team, running around the clock.
            </Reveal>
          </div>

          <div className={styles.crew}>
            {AGENTS.map((a, i) => (
              <Reveal key={a.name} className={styles.agent} delay={(i % 4) * 60}>
                <div className={styles.agentType}>{a.type}</div>
                <h3 className={styles.agentName}>{a.name}</h3>
                <p className={styles.agentDesc}>{a.desc}</p>
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
