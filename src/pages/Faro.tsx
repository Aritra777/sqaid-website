import { Link } from "react-router-dom";
import ScreenshotFrame from "@/components/ScreenshotFrame";
import Terminal, { T } from "@/components/Terminal";
import { COMPANY_EMAIL } from "@/lib/nav-data";
import styles from "./Faro.module.css";

type Stat = { value: string; unit?: string; label: string };
type Service = { name: string; port: string; role: string };
type Lane = { label: string; nodes: Array<{ name: string; tech?: string }> };

const HERO_STATS: Stat[] = [
  { value: "14", unit: "+", label: "Independent microservices" },
  { value: "1", label: "Gateway — single external entry point" },
  { value: "Kafka", label: "Event backbone for every pipeline" },
  { value: "PG · Redis", label: "Persistence + cache layer" },
];

const SERVICES: Service[] = [
  { name: "faro-gateway", port: ":8080", role: "Spring Cloud Gateway — single ingress" },
  { name: "faro-ingest", port: ":8101", role: "Kafka consumer + data adapter" },
  { name: "faro-features", port: ":8102", role: "Feature engineering" },
  { name: "faro-rules", port: ":8103", role: "Drools rules engine" },
  { name: "faro-scoring", port: ":8104", role: "ONNX ML scorer" },
  { name: "faro-graph", port: ":8105", role: "Apache AGE graph engine" },
  { name: "faro-alerts", port: ":8106", role: "Alert aggregation & dedup" },
  { name: "faro-cases", port: ":8107", role: "Case management" },
  { name: "faro-copilot", port: ":8108", role: "Python/FastAPI AI assistant" },
  { name: "faro-workflow", port: ":8109", role: "Workflow engine" },
  { name: "faro-profiles", port: ":8110", role: "Customer profiling scheduler" },
  { name: "faro-etl", port: ":8111", role: "Staging → core ETL" },
  { name: "faro-reports", port: ":8112", role: "Dashboard KPIs & compliance reports" },
  { name: "faro-integrations", port: ":8113", role: "Encrypted-secret integration registry" },
  { name: "faro-verdict-consolidator", port: ":8114", role: "Pipeline verdict consolidation" },
];

const LANES: Lane[] = [
  {
    label: "Edge",
    nodes: [{ name: "faro-gateway" }],
  },
  {
    label: "Ingestion",
    nodes: [{ name: "faro-ingest" }, { name: "faro-features" }],
  },
  {
    label: "Detection",
    nodes: [
      { name: "faro-rules" },
      { name: "faro-scoring" },
      { name: "faro-graph" },
    ],
  },
  {
    label: "Disposition",
    nodes: [
      { name: "faro-alerts" },
      { name: "faro-cases" },
      { name: "faro-workflow" },
      { name: "faro-verdict-consolidator" },
    ],
  },
  {
    label: "Insight",
    nodes: [
      { name: "faro-profiles" },
      { name: "faro-reports" },
      { name: "faro-copilot" },
    ],
  },
];

export default function Faro() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Faro · Real-time fraud &amp; AML platform
          </div>
          <h1 className={styles.h1}>
            Fraud and AML,
            <br />
            <em>decomposed into services.</em>
          </h1>
          <p className={styles.sub}>
            Faro is a Java/Spring Boot microservices platform for real-time fraud detection and
            anti-money-laundering. <b>One gateway. Kafka backbone. PostgreSQL of record.</b>{" "}
            Fifteen services own one concern each so the platform scales horizontally and the
            blast radius of a deploy is one box.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href={`mailto:${COMPANY_EMAIL}?subject=Faro%20demo`}
              className="btn btn--primary"
            >
              Request a Demo &nbsp;→
            </a>
            <a href="#services" className="btn btn--ghost">
              See the Services
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
            label="Faro platform — operations dashboard"
            url="faro.sqaid.ai / ops / pipelines"
            badge="Live"
            aspect="16 / 9"
            caption="Faro operations dashboard"
          />
        </div>
      </section>

      {/* ── ARCHITECTURE ─────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="two-col">
            <div className="two-col__a">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Architecture
              </div>
              <h2 className="section-title">
                One gateway.
                <br />
                Kafka <em>between every service.</em>
              </h2>
              <p className="section-lede">
                Every external request goes through faro-gateway, which routes via Spring Cloud
                Gateway and resolves internal services through container DNS. Between services,
                Kafka is the backbone — every event is a topic, every consumer is a service, and
                every consumer can be scaled independently.
              </p>
              <p className="section-lede">
                PostgreSQL is the system of record for cases, alerts, customers, and audit.
                Redis handles caching and rate-limiting. Apache AGE adds graph queries on top of
                Postgres. <b>One stack to operate, not three.</b>
              </p>
              <ul className="checklist">
                <li>
                  <span>
                    <b>Spring Cloud Gateway</b> — single external ingress, internal DNS routing
                  </span>
                </li>
                <li>
                  <span>
                    <b>Kafka event backbone</b> — every transition between services is a topic
                  </span>
                </li>
                <li>
                  <span>
                    <b>PostgreSQL + Apache AGE</b> — relational + graph in one engine
                  </span>
                </li>
                <li>
                  <span>
                    <b>Redis</b> — feature cache and rate-limiting at the edge
                  </span>
                </li>
              </ul>
            </div>
            <div className="two-col__b">
              <Terminal title="application.yml — service port pattern">
                <div>
                  <T.Cmt># every service binds the same convention:</T.Cmt>
                </div>
                <div>
                  <T.Cmt># PORT (container override) overrides the local default</T.Cmt>
                </div>
                <div>&nbsp;</div>
                <div>
                  <T.Key>server</T.Key>:
                </div>
                <div>
                  &nbsp;&nbsp;<T.Key>port</T.Key>: $&#123;<T.Num>PORT</T.Num>:<T.Num>8101</T.Num>&#125;
                </div>
                <div>&nbsp;</div>
                <div>
                  <T.Cmt># local dev → 8101 (or 8102, 8103…)</T.Cmt>
                </div>
                <div>
                  <T.Cmt># container / Railway → 8080 (platform-injected)</T.Cmt>
                </div>
                <div>&nbsp;</div>
                <div>
                  <T.Key>spring</T.Key>:
                </div>
                <div>
                  &nbsp;&nbsp;<T.Key>cloud</T.Key>:
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;<T.Key>gateway</T.Key>:
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<T.Key>routes</T.Key>:
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-{" "}
                  <T.Key>uri</T.Key>: $&#123;<T.Str>ADAPTER_URI</T.Str>:
                  <T.Str>http://faro-ingest:8080</T.Str>&#125;
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <T.Key>predicates</T.Key>:
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Path=
                  <T.Str>/api/v1/events/**</T.Str>
                </div>
              </Terminal>
              <div className={styles.infra}>
                <span className={styles.infraChip}>Spring Boot 3</span>
                <span className={styles.infraChip}>Spring Cloud Gateway</span>
                <span className={styles.infraChip}>Kafka</span>
                <span className={styles.infraChip}>PostgreSQL + AGE</span>
                <span className={styles.infraChip}>Redis</span>
                <span className={styles.infraChip}>Flink</span>
                <span className={styles.infraChip}>ONNX runtime</span>
                <span className={styles.infraChip}>Drools</span>
                <span className={styles.infraChip}>FastAPI (Copilot)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────── */}
      <section id="services" className="section">
        <div className="container">
          <div className="section--center" style={{ marginBottom: 0 }}>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              The platform, one service at a time
            </div>
            <h2 className="section-title">
              Fifteen services. <em>One concern each.</em>
            </h2>
            <p className="section-lede">
              Faro is built from independently deployable services. Every service runs the same
              port contract — 81xx locally, 8080 in containers — so the topology is identical
              between a laptop and Railway.
            </p>
          </div>

          <div className={styles.services}>
            {SERVICES.map((s) => (
              <article key={s.name} className={styles.svc}>
                <span className={styles.svcPort}>{s.port}</span>
                <div className={styles.svcName}>{s.name}</div>
                <p className={styles.svcRole}>{s.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PIPELINE ─────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section--center" style={{ marginBottom: 24 }}>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Event pipeline
            </div>
            <h2 className="section-title">
              From transaction to verdict.
              <br />
              <em>One event at a time.</em>
            </h2>
            <p className="section-lede">
              Every transaction flows through five lanes — edge, ingestion, detection,
              disposition, and insight — connected end-to-end by Kafka topics.
            </p>
          </div>

          <div className={styles.pipeline}>
            {LANES.map((lane, i) => (
              <div key={lane.label} className={styles.lane}>
                <div className={styles.laneLabel}>{lane.label}</div>
                <div className={styles.laneTrack}>
                  {lane.nodes.map((node, j) => (
                    <span key={node.name} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                      <span className={styles.laneNode}>
                        <strong>·</strong> {node.name}
                      </span>
                      {j < lane.nodes.length - 1 && (
                        <span className={styles.laneArrow} aria-hidden="true">
                          →
                        </span>
                      )}
                    </span>
                  ))}
                  {i < LANES.length - 1 && (
                    <span className={styles.laneArrow} aria-hidden="true">
                      ⇣
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DATA ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="two-col two-col--flip">
            <div className="two-col__a">
              <ScreenshotFrame
                label="Verdict console"
                url="faro.sqaid.ai / verdicts"
                aspect="4 / 3"
                caption="Verdict console — partial verdicts → consolidated decision"
              />
            </div>
            <div className="two-col__b">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Verdicts &amp; webhooks
              </div>
              <h2 className="section-title">
                Many models. <em>One decision.</em>
              </h2>
              <p className="section-lede">
                Every detection pipeline publishes a partial verdict to{" "}
                <code style={{ color: "var(--blue)", fontFamily: "var(--font-mono)" }}>
                  fraud.verdicts.partial
                </code>
                . The verdict consolidator applies the consolidation policy and POSTs the final
                verdict to the bank webhook — so downstream systems see one consistent decision,
                not a stream of conflicting signals.
              </p>
              <ul className="checklist">
                <li>
                  <span>
                    <b>Per-pipeline partial verdicts</b> — rules, scoring, graph, copilot all
                    speak the same protocol
                  </span>
                </li>
                <li>
                  <span>
                    <b>Policy-driven consolidation</b> — declarative, swappable per tenant
                  </span>
                </li>
                <li>
                  <span>
                    <b>Bank webhook</b> — final decision delivered with full correlation lineage
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="section section--center section--alt">
        <div className="container">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Get started
          </div>
          <h2 className="section-title">
            Decompose your fraud stack.
            <br />
            <em>Without rewriting it.</em>
          </h2>
          <p className="section-lede" style={{ marginBottom: 32 }}>
            Faro slots into your existing data flows — Kafka topics in, webhooks out. We&apos;ll
            walk through how it would land in your environment.
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
