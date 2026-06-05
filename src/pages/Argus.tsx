import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { useTilt } from "@/lib/use-tilt";
import { COMPANY_EMAIL } from "@/lib/nav-data";
import { useDocumentTitle } from "@/lib/use-document-title";
import styles from "./Argus.module.css";

type Stat = { value: string; unit?: string; label: string };
type Capability = { tag: string; title: string; body: string };
type Agent = { type: string; name: string; desc: string };
type Feature = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  bullets: string[];
  img: string;
  alt: string;
  url: string;
  badge?: string;
};

function Shot({ src, alt, url, badge }: { src: string; alt: string; url: string; badge?: string }) {
  return (
    <div className={styles.shotCard}>
      <div className={styles.shotChrome} aria-hidden="true">
        <span className={styles.shotDot} />
        <span className={styles.shotDot} />
        <span className={styles.shotDot} />
        <span className={styles.shotUrl}>{url}</span>
        {badge && <span className={styles.shotBadge}>● {badge}</span>}
      </div>
      <img className={styles.shotImg} src={src} alt={alt} loading="lazy" width={3820} height={1900} />
    </div>
  );
}

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

const FEATURES: Feature[] = [
  {
    eyebrow: "Universal ingestion",
    title: (
      <>
        Every message. <em>ISO and non-ISO.</em>
      </>
    ),
    lede: "Onboard a feed once and Argus does the rest. The universal parser ingests SWIFT MT & MX, CHIPS, FEDWIRE, ACH, SEPA, RTP — and custom JSON — with schema-aware parsing, then normalizes every event straight into the graph.",
    bullets: [
      "Real-time payment messages, ISO 20022 and legacy alike",
      "Onboard a message type once — Argus handles the rest",
      "Schema mapping and a message validator built in",
    ],
    img: "/assets/argus/ingestion.png",
    alt: "Argus data contracts — universal parser and ingestion for SWIFT, CHIPS, FEDWIRE, ACH, SEPA, RTP",
    url: "app.sqaid.ai / argus / data-contracts",
    badge: "Live",
  },
  {
    eyebrow: "Configurable signals",
    title: (
      <>
        Signals fire the <em>moment the graph changes.</em>
      </>
    ),
    lede: "Define the signals that matter — velocity, mismatch, sanctions hits, dormancy, cross-border shifts — by type, condition, severity and family. The instant an event changes the graph, the matching signals emit and the right agents react.",
    bullets: [
      "Per-signal type, condition, severity and family (AML · ATO · Fraud)",
      "Reactive to every graph event in real time",
      "Agents subscribe to signals, then call the right rules",
    ],
    img: "/assets/argus/signals.png",
    alt: "Argus configuration — a table of configurable detection signals with type, condition, severity and family",
    url: "app.sqaid.ai / argus / configuration / signals",
  },
  {
    eyebrow: "Agents wired to rules",
    title: (
      <>
        Specialist agents, <em>each with its own playbook.</em>
      </>
    ),
    lede: "Every agent owns the signals that trigger it and the rules it runs — AML, sanctions, account-takeover, profile-shift, KYC, network intelligence. Wire new rules onto an agent in the UI, no code required.",
    bullets: [
      "73 rules assigned across the squad",
      "Each agent triggered by its own signals",
      "Compose and assign rules visually",
    ],
    img: "/assets/argus/agents.png",
    alt: "Argus detection — specialist agents with their assigned rules and triggering signals",
    url: "app.sqaid.ai / argus / detection / agents",
  },
  {
    eyebrow: "Detection flows",
    title: (
      <>
        Investigation flows, <em>out of the box.</em>
      </>
    ),
    lede: "Argus ships with detection pipelines for AML, sanctions screening, account takeover, profile monitoring, crypto compliance and network intelligence — and you can build net-new flows in the UI, each bundling its own signals, rules and sources.",
    bullets: [
      "Kafka → graph updated → signals → agents → rules → alert",
      "Out-of-the-box flows, plus your own",
      "Every flow ties its signals, rules and sources together",
    ],
    img: "/assets/argus/flows.png",
    alt: "Argus detection flows — out-of-the-box pipelines for AML, sanctions, account takeover and more",
    url: "app.sqaid.ai / argus / detection / flow",
  },
  {
    eyebrow: "Real-time dashboards",
    title: (
      <>
        Live by default. <em>Yours to shape.</em>
      </>
    ),
    lede: "A real-time, fully customizable dashboard backed by the agents — open alerts, median close time, true-positive rate, high-risk customers, graph size, alert velocity and live activity, all updating as events land.",
    bullets: [
      "Agent-backed metrics, refreshed live",
      "Fully customizable surface",
      "Drill from a number straight into the graph",
    ],
    img: "/assets/argus/dashboard.png",
    alt: "Argus real-time dashboard — open alerts, close time, true-positive rate, alert velocity and live activity",
    url: "app.sqaid.ai / argus / dashboard",
    badge: "Live",
  },
  {
    eyebrow: "Argus as an MCP server",
    title: (
      <>
        Talk to Argus <em>from any LLM.</em>
      </>
    ),
    lede: "The entire platform is exposed as an MCP server — wire it into Claude, ChatGPT, Cursor, Codex or your own agent and just ask. Argus answers from the live graph, the same way you'd chat with an assistant.",
    bullets: [
      "One MCP endpoint for the whole platform",
      "Works with Claude, ChatGPT, Cursor, Codex and more",
      "Ask in natural language, get grounded answers",
    ],
    img: "/assets/argus/mcp.png",
    alt: "Argus as an MCP server — connect Claude, ChatGPT, Cursor and other LLM clients",
    url: "app.sqaid.ai / argus / system / mcp",
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
                  src="/assets/argus/graph-explorer.png"
                  alt="Argus graph explorer — Neo4j entity graph with the AI investigation agent"
                  width={3836}
                  height={1910}
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

      {/* ── FEATURE WALKTHROUGH (image-driven) ───────── */}
      {FEATURES.map((f, i) => {
        const flip = i % 2 === 1;
        return (
          <section key={f.eyebrow} className={`section ${flip ? "section--alt" : ""}`}>
            <div className="container">
              <div className={`two-col ${flip ? "two-col--flip" : ""}`}>
                <Reveal className="two-col__a">
                  <div className="eyebrow">
                    <span className="eyebrow-dot" />
                    {f.eyebrow}
                  </div>
                  <h2 className="section-title">{f.title}</h2>
                  <p className="section-lede">{f.lede}</p>
                  <ul className="checklist">
                    {f.bullets.map((b) => (
                      <li key={b}>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal className="two-col__b" delay={120}>
                  <Shot src={f.img} alt={f.alt} url={f.url} badge={f.badge} />
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

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
