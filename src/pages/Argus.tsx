import { Link } from "react-router-dom";
import ScreenshotFrame from "@/components/ScreenshotFrame";
import Terminal, { T } from "@/components/Terminal";
import { COMPANY_EMAIL } from "@/lib/nav-data";
import styles from "./Argus.module.css";

type Stat = { value: string; unit?: string; label: string };
type Agent = { type: string; name: string; desc: string };
type CmpRow = { capability: string; legacy: string; argus: string };
type FedCard = { title: string; body: string };
type Source = { icon: string; name: string; tech: string };
type Step = { n: string; title: string; body: string };

const HERO_STATS: Stat[] = [
  { value: "50", unit: "+", label: "Production detection rules" },
  { value: "15", label: "Specialized AI agents" },
  { value: "<5", unit: "ms", label: "Rule evaluation per event" },
  { value: "12", unit: "×", label: "Hop funds-trace depth" },
  { value: "3", label: "Live DBs — Oracle · Neo4j · Redis" },
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

const COMPARISON: CmpRow[] = [
  {
    capability: "After an alert fires",
    legacy: "Analyst manually investigates across 10+ systems. Days of work.",
    argus: "Agent squad auto-dispatched. Evidence pre-built before the case is opened.",
  },
  {
    capability: "Network exposure",
    legacy: "Single-customer view. Direct relationships only.",
    argus: "Live graph. 2-hop sanctions, ring detection, shared-identifier clusters.",
  },
  {
    capability: "Temporal risk changes",
    legacy: "Snapshot KYC. No change detection over time.",
    argus: "SCD-2 ProfileSnapshot chain. Exact moment a customer becomes high-risk.",
  },
  {
    capability: "Follow the money",
    legacy: "Sender / receiver pair only.",
    argus: "12-hop recursive walk. Catches multi-leg layering through shell chains.",
  },
  {
    capability: "Analyst narrative",
    legacy: "“May indicate suspicious activity.” Hedged, audit-unfriendly.",
    argus: "No hedging enforced. “Flagged as PEP. Risk contribution: 38%.” Regulator-ready.",
  },
  {
    capability: "Crypto AML",
    legacy: "External bolt-on with no graph linkage.",
    argus: "Native crypto-mixer and fiat-bridge rules. Wallets in the same graph.",
  },
  {
    capability: "Audit trail",
    legacy: "Alert isolated from source event.",
    argus: "Correlation ID chains source event → rule → alert → agent → SAR.",
  },
];

const FED_CARDS: FedCard[] = [
  {
    title: "SAR drafting — complete, not templated",
    body: "The Narrator agent assembles the full FinCEN SAR evidence package: customer profile, suspicious transactions, risk timeline, network connections, and narrative. Analysts review and submit — not start from scratch.",
  },
  {
    title: "Full lineage on every alert",
    body: "Every event carries a correlation ID stitching ingestion → schema mapping → Kafka → rule → alert → agent finding → analyst decision. Built for traceability requests.",
  },
  {
    title: "Explainable risk scores",
    body: "Risk decomposes into KYC tier, PEP exposure, sanctions proximity, fraud history, network propagation, and jurisdiction concentration. No black-box outputs.",
  },
  {
    title: "Jurisdiction-aware detection",
    body: "FATF-blacklist rules cover RU, IR, KP, SY, MM, AF, VE. SWIFT, Fedwire, ACH, SEPA, and CHIPS payment networks ingested natively.",
  },
];

const BADGES: { label: string; on?: boolean }[] = [
  { label: "FinCEN SAR-ready", on: true },
  { label: "FATF rule mapping", on: true },
  { label: "OFAC · EU · UN sanctions", on: true },
  { label: "Full audit lineage", on: true },
  { label: "STR drafting" },
  { label: "Case Manager integration" },
  { label: "SWIFT · Fedwire · ACH · SEPA" },
];

const SOURCES: Source[] = [
  { icon: "◎", name: "Core banking system", tech: "Oracle · SQL Server · PostgreSQL" },
  { icon: "▤", name: "Mobile banking app", tech: "REST API · Kafka" },
  { icon: "▥", name: "Card & payments processor", tech: "ISO 8583 · REST · SWIFT" },
  { icon: "◈", name: "Crypto exchange / custodian", tech: "Blockchain API · Webhook" },
  { icon: "⊞", name: "Any new data source", tech: "Any schema — define a contract" },
];

const INGEST_STEPS: Step[] = [
  {
    n: "1",
    title: "Define the contract",
    body: "Map your upstream fields to Argus canonical entities. Stored in the contracts table — no code, no re-deployment.",
  },
  {
    n: "2",
    title: "Issue a bearer token",
    body: "Per-contract token with rate limits (200 events/sec, 1000-event burst). Revocable independently of other sources.",
  },
  {
    n: "3",
    title: "POST events",
    body: "Your system posts to /{contract_id}/events. Argus validates, maps, and routes to the correct Kafka topic.",
  },
  {
    n: "4",
    title: "Intelligence follows",
    body: "Rules evaluate. Agents investigate. Alerts surface with full lineage. The graph enriches. The DLQ catches and replays failures.",
  },
];

export default function Argus() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Argus · AI-native financial-crime intelligence
          </div>
          <h1 className={styles.h1}>
            The graph thinks.
            <br />
            The agents <em>investigate.</em>
            <br />
            The network reveals.
          </h1>
          <p className={styles.sub}>
            Argus connects transactions, devices, wallets, and identities into a <b>live knowledge
            graph</b> — then dispatches specialized AI agents to investigate every alert
            automatically, before an analyst opens the case.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={`mailto:${COMPANY_EMAIL}?subject=Argus%20demo`} className="btn btn--primary">
              Request a Demo &nbsp;→
            </a>
            <a href="#agents" className="btn btn--ghost">
              See the Platform
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
      <section className={styles.screenshotSection}>
        <div className="container">
          <ScreenshotFrame
            label="Live investigation — Argus intelligence platform"
            url="argus.internal / graph / investigation / CUST-20291"
            badge="Critical"
            aspect="16 / 9"
            caption="Argus investigation graph"
          />
        </div>
      </section>

      {/* ── GRAPH INTELLIGENCE ───────────────────────── */}
      <section id="graph" className="section section--alt">
        <div className="container">
          <div className="two-col">
            <div className="two-col__a">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Live knowledge graph
              </div>
              <h2 className="section-title">
                Risk lives in relationships.
                <br />
                <em>Not in rows.</em>
              </h2>
              <p className="section-lede">
                Traditional AML platforms evaluate customers in isolation — one customer, one
                alert, one analyst. Argus builds a live Neo4j knowledge graph that links every
                entity: customers, accounts, devices, IPs, wallets, merchants, beneficial owners,
                and addresses.
              </p>
              <p className="section-lede">
                When a rule fires, risk propagates across graph edges with configurable hop-decay.
                A customer two hops from a sanctioned entity scores differently than one who is
                three hops away.
              </p>
              <ul className="checklist">
                <li>
                  <span>
                    <b>2-hop sanctions exposure</b> — caught before direct contact occurs
                  </span>
                </li>
                <li>
                  <span>
                    <b>Money-mule ring detection</b> — shared devices, IPs, wallets across
                    unrelated accounts
                  </span>
                </li>
                <li>
                  <span>
                    <b>12-hop funds trace</b> — follows outbound chains through shell layers to
                    flagged endpoints
                  </span>
                </li>
                <li>
                  <span>
                    <b>SCD-2 profile history</b> — the exact moment a customer&apos;s risk
                    changed, not just that it changed
                  </span>
                </li>
              </ul>
            </div>
            <div className="two-col__b">
              <Terminal title="neo4j — funds trace · CUST-20291">
                <div>
                  <T.Cmt># FundsTrace agent — 12-hop recursive walk</T.Cmt>
                </div>
                <div>&nbsp;</div>
                <div>
                  <T.Key>MATCH</T.Key> path <T.Key>=</T.Key> (c:Customer &#123;id:
                  <T.Str>&apos;CUST-20291&apos;</T.Str>&#125;)
                </div>
                <div>
                  &nbsp;&nbsp;<T.Key>-[:HAS_ACCOUNT]-&gt;(a:Account)</T.Key>
                </div>
                <div>
                  &nbsp;&nbsp;<T.Key>-[:DEBITED_BY|PAID_TO*1..12]-&gt;</T.Key>
                </div>
                <div>&nbsp;&nbsp; (endpoint)</div>
                <div>
                  <T.Key>WHERE</T.Key> endpoint.sanctions_flag <T.Key>=</T.Key>{" "}
                  <T.Str>true</T.Str>
                </div>
                <div>
                  <T.Key>RETURN</T.Key> path, length(path) <T.Key>AS</T.Key> hops
                </div>
                <div>
                  <T.Key>ORDER BY</T.Key> hops <T.Key>ASC LIMIT</T.Key> <T.Num>20</T.Num>
                </div>
                <div>&nbsp;</div>
                <div>
                  <T.Cmt>────────────────────────────────</T.Cmt>
                </div>
                <div>
                  <T.Ok>✓</T.Ok> <T.Key>Path found</T.Key> hops: <T.Num>2</T.Num>
                </div>
                <div>
                  &nbsp;CUST-20291 → ACC-4421 → <T.Err>OFAC_MATCH_7712</T.Err>
                </div>
                <div>
                  &nbsp;via PAID_TO · risk propagated: <T.Num>0.455</T.Num>
                </div>
                <div>&nbsp;</div>
                <div>
                  <T.Ok>✓</T.Ok> <T.Key>Path found</T.Key> hops: <T.Num>4</T.Num>
                </div>
                <div>
                  &nbsp;→ ACC-4421 → merch-8832 → w-9923 → <T.Err>MIXER_ADDR_3309</T.Err>
                </div>
                <div>
                  <T.Cmt>2 sanctioned endpoints reachable</T.Cmt>
                </div>
              </Terminal>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── AGENTS ───────────────────────────────────── */}
      <section id="agents" className="section">
        <div className="container">
          <div className="section--center" style={{ marginBottom: 0 }}>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Multi-agent intelligence
            </div>
            <h2 className="section-title">
              Every alert gets a full <em>investigation squad.</em>
            </h2>
            <p className="section-lede">
              When a rule fires, Argus dispatches twelve specialized AI agents. Each owns one
              investigative lens. Together they build in seconds what would take an analyst days —
              and they run automatically, before anyone opens the case.
            </p>
          </div>

          <div className={styles.agents}>
            {AGENTS.map((a) => (
              <article key={a.name} className={styles.agent}>
                <div className={styles.agentType}>{a.type}</div>
                <div className={styles.agentName}>{a.name}</div>
                <p className={styles.agentDesc}>{a.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── RULES ENGINE ─────────────────────────────── */}
      <section id="rules" className="section section--alt">
        <div className="container">
          <div className="two-col two-col--flip">
            <div className="two-col__a">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Rules engine
              </div>
              <h2 className="section-title">
                Rules call the agents.
                <br />
                <em>Not the other way around.</em>
              </h2>
              <p className="section-lede">
                Argus inverts the traditional workflow. Rules don&apos;t just create alerts — each
                rule carries investigation instructions: which graph edges to propagate across,
                how far to walk, how fast risk decays, and which agent playbooks to activate.
              </p>
              <p className="section-lede">
                The Sentinel evaluates rules on a five-minute cadence against Oracle SQL and Neo4j
                Cypher queries. Matches publish to Kafka, broadcast to the live UI, and dispatch
                the agent squad automatically.
              </p>
              <ul className="checklist">
                <li>
                  <span>
                    <b>AML &amp; structuring</b> — STRUCTURING_30D, RAPID_FIRE_TRANSFERS,
                    SHELL_COMPANY_PATTERN
                  </span>
                </li>
                <li>
                  <span>
                    <b>Sanctions proximity</b> — 2-hop via TRANSACTS_WITH, OWNS, DIRECTS,
                    SHARES_UBO
                  </span>
                </li>
                <li>
                  <span>
                    <b>Behavioral drift</b> — CUSTOMER_PEER_OUTLIER, ACCOUNT_VELOCITY_SPIKE,
                    dormancy break
                  </span>
                </li>
                <li>
                  <span>
                    <b>Account takeover</b> — ATO_CRED_BREACH_LOGIN, ROOTED_DEVICE_HIGH_VALUE_TXN
                  </span>
                </li>
                <li>
                  <span>
                    <b>Crypto</b> — CRYPTO_MIXER_EXPOSURE, CRYPTO_FIAT_BRIDGE,
                    CRYPTO_HEAVY_NEW_CUSTOMER
                  </span>
                </li>
              </ul>
            </div>
            <div className="two-col__b">
              <Terminal title="sentinel.log — rule evaluation cycle">
                <div>
                  <T.Cmt># 5-min cycle · CUST-20291</T.Cmt>
                </div>
                <div>&nbsp;</div>
                <div>
                  <T.Muted>→</T.Muted> <T.Key>STRUCTURING_30D</T.Key>{" "}
                  <T.Ok>MATCH</T.Ok> <T.Num>4ms</T.Num>
                </div>
                <div>
                  <T.Muted>→</T.Muted> <T.Key>SHELL_COMPANY_PATTERN</T.Key>{" "}
                  <T.Ok>MATCH</T.Ok> <T.Num>6ms</T.Num>
                </div>
                <div>
                  <T.Muted>→</T.Muted> <T.Key>SANCTIONS_PROX_2HOP</T.Key>{" "}
                  <T.Ok>MATCH</T.Ok> <T.Num>7ms</T.Num>
                </div>
                <div>
                  <T.Muted>→</T.Muted> <T.Key>RAPID_FIRE_TRANSFERS</T.Key>{" "}
                  <T.Cmt>miss</T.Cmt> <T.Num>2ms</T.Num>
                </div>
                <div>
                  <T.Muted>→</T.Muted> <T.Key>CRYPTO_MIXER_EXPOSURE</T.Key>{" "}
                  <T.Ok>MATCH</T.Ok> <T.Num>5ms</T.Num>
                </div>
                <div>&nbsp;</div>
                <div>
                  <T.Err>⚡ ALERT severity: CRITICAL</T.Err>
                </div>
                <div>
                  <T.Cmt>&nbsp;&nbsp;rule: SANCTIONS_PROX_2HOP</T.Cmt>
                </div>
                <div>
                  <T.Cmt>&nbsp;&nbsp;risk: 0.91 hops: 2 decay: 0.50</T.Cmt>
                </div>
                <div>&nbsp;</div>
                <div>
                  <T.Ok>✓</T.Ok> <T.Key>Kafka</T.Key> alert queued
                </div>
                <div>
                  <T.Ok>✓</T.Ok> <T.Key>Redis pub/sub</T.Key> UI notified
                </div>
                <div>
                  <T.Ok>✓</T.Ok> <T.Key>Oracle</T.Key> evidence stored
                </div>
                <div>&nbsp;</div>
                <div>
                  <T.Cmt># dispatching agent squad …</T.Cmt>
                </div>
                <div>
                  <T.Ok>✓</T.Ok> <T.Key>Investigator</T.Key> started
                </div>
                <div>
                  <T.Ok>✓</T.Ok> <T.Key>FundsTrace</T.Key> started
                </div>
                <div>
                  <T.Ok>✓</T.Ok> <T.Key>NetworkRing</T.Key> started
                </div>
              </Terminal>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ARGUS ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section--center" style={{ marginBottom: 0 }}>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Competitive differentiation
            </div>
            <h2 className="section-title">
              Traditional AML tools stop at the alert.
              <br />
              <em>Argus starts there.</em>
            </h2>
          </div>

          <div className={styles.cmpWrap}>
            <table className={styles.cmpTable}>
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Legacy AML tools</th>
                  <th>Argus</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((r) => (
                  <tr key={r.capability}>
                    <td>{r.capability}</td>
                    <td className={styles.bad}>{r.legacy}</td>
                    <td className={styles.good}>{r.argus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FEDERAL ──────────────────────────────────── */}
      <section id="federal" className="section section--alt">
        <div className="container">
          <div className="two-col">
            <div className="two-col__a">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Regulatory &amp; federal
              </div>
              <h2 className="section-title">
                Built for the scrutiny of regulators.
                <br />
                <em>Trusted by the speed of operations.</em>
              </h2>
              <p className="section-lede">
                Federal examiners demand transparency, reproducibility, and defensible evidence.
                Argus answers their hardest questions before they ask — with full lineage on every
                alert, explainable risk scores, and SAR narratives that are complete drafts, not
                templates.
              </p>
              <p className="section-lede">
                Every rule maps to a FATF AML framework code. Risk scores show their full
                breakdown: sanctions proximity, PEP exposure, fraud history, network propagation,
                jurisdiction risk. No black box. No unexplained outputs.
              </p>
              <div className={styles.badgeRow}>
                {BADGES.map((b) => (
                  <span
                    key={b.label}
                    className={`${styles.badge} ${b.on ? styles.badgeOn : ""}`}
                  >
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="two-col__b">
              <div className={styles.fedGrid}>
                {FED_CARDS.map((c) => (
                  <article key={c.title} className={styles.fedCard}>
                    <div className={styles.fedCardH}>{c.title}</div>
                    <p className={styles.fedCardP}>{c.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DATA CONTRACTS ───────────────────────────── */}
      <section id="contracts" className="section">
        <div className="container">
          <div className="two-col two-col--flip">
            <div className="two-col__a">
              <div className={styles.srcFlow}>
                {SOURCES.map((s) => (
                  <div key={s.name} className={styles.srcItem}>
                    <div className={styles.srcIco} aria-hidden="true">
                      {s.icon}
                    </div>
                    <div>
                      <div className={styles.srcN}>{s.name}</div>
                      <div className={styles.srcT}>{s.tech}</div>
                    </div>
                  </div>
                ))}
                <div className={styles.arrowDn} aria-hidden="true">
                  ↓ ↓ ↓
                </div>
                <div className={styles.argusBox}>
                  <div className={styles.argusBoxT}>Argus data-contracts layer</div>
                  <div className={styles.argusBoxS}>
                    Schema mapping · Token auth · Rate limiting · Validation · Lineage · DLQ
                  </div>
                </div>
              </div>
            </div>
            <div className="two-col__b">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Universal data ingestion
              </div>
              <h2 className="section-title">
                Any database. Any schema.
                <br />
                <em>Hours, not months.</em>
              </h2>
              <p className="section-lede">
                Legacy integrations take months of engineering and break when upstream schemas
                change. Argus replaces that with a self-service data contract — a stored field
                mapping that translates any upstream event format into the canonical model.
              </p>
              <div className={styles.steps}>
                {INGEST_STEPS.map((s) => (
                  <div key={s.n} className={styles.stepRow}>
                    <div className={styles.stepNum}>{s.n}</div>
                    <div className={styles.stepText}>
                      <strong>{s.title}</strong>
                      <span>{s.body}</span>
                    </div>
                  </div>
                ))}
              </div>
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
            Stop investigating alerts.
            <br />
            Start <em>reviewing investigations.</em>
          </h2>
          <p className="section-lede" style={{ marginBottom: 32 }}>
            Argus gives compliance teams analyst-ready, regulator-defensible intelligence before
            they open the first case. See it on your data.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`mailto:${COMPANY_EMAIL}?subject=Argus%20demo`}
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
