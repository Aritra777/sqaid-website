import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { useTilt } from "@/lib/use-tilt";
import { COMPANY_EMAIL } from "@/lib/nav-data";
import { useDocumentTitle } from "@/lib/use-document-title";
import styles from "./CaseManager.module.css";

type Stat = { value: string; unit?: string; label: string };
type Feature = { tag: string; title: string; body: string };
type CmpRow = { capability: string; legacy: string; sqaid: string };

const HERO_STATS: Stat[] = [
  { value: "Any", label: "Alert type — extra fields, no XML" },
  { value: "0", label: "Lines of code to ship a new alert type" },
  { value: "1", label: "RBAC model — AWS IAM-inspired" },
  { value: "5", label: "Service modules — alerts · workflows · cases · audit · RBAC" },
];

const FEATURES: Feature[] = [
  {
    tag: "Configurable schema",
    title: "Alert types with extra fields, defined once",
    body: "Mandatory fields are shared. Extra fields per alert type carry their own metadata — type, required flag, label — stored separately from values so adding or removing a field never breaks historical alerts.",
  },
  {
    tag: "Designer canvas",
    title: "Visual page designer for the FA view",
    body: "Compose the alert-summary page from a palette of components (trades, prior alerts, positions, financial-advisor profile, issue history). Saved per alert type. One-time setup — not a daily task.",
  },
  {
    tag: "Workflow",
    title: "React-Flow-style workflow builder",
    body: "Drag steps and connectors to compose the lifecycle of an alert (assignment → investigation → SAR → close). Each alert type follows its own workflow, enforced server-side.",
  },
  {
    tag: "RBAC",
    title: "AWS IAM-inspired permission model",
    body: "Roles, policies, and resource scopes — composable across pages, actions, and services. Multi-role users get their permissions union-cached on first sign-in, so the UI doesn't refetch on every click.",
  },
  {
    tag: "Lifecycle",
    title: "Everything an investigator needs in one view",
    body: "Trades, positions, prior alerts, financial-advisor details, historical trades, issue details. Add notes, attach evidence, audit history, export, assign — without leaving the case.",
  },
  {
    tag: "Auditable",
    title: "Full audit trail on every action",
    body: "Every status change, assignment, attachment, and note is recorded with actor, timestamp, and immutable diff. Built for the next time the regulator asks who did what, when.",
  },
];

const COMPARISON: CmpRow[] = [
  {
    capability: "Adding a new alert type",
    legacy: "Edit XML files. Redeploy. Manage schema drift.",
    sqaid: "Define mandatory + extra fields in the UI. Live in minutes, no deploy.",
  },
  {
    capability: "Customizing the alert view",
    legacy: "Engineer ticket. Code change. Release cycle.",
    sqaid: "Drag components onto the designer canvas. Save per alert type.",
  },
  {
    capability: "Workflow changes",
    legacy: "Hard-coded steps in legacy code.",
    sqaid: "Visual workflow designer. Versioned per alert type, enforced by the engine.",
  },
  {
    capability: "Permissions",
    legacy: "Coarse user roles. Hard to express conditional access.",
    sqaid: "IAM-style policies. Per page / action / service. Conditional authorization.",
  },
  {
    capability: "Vendor lock-in",
    legacy: "Closed XML config and proprietary runtime.",
    sqaid: "In-house build. PostgreSQL + Spring Boot. Yours to own.",
  },
];

const STACK = [
  { name: "React", note: "frontend" },
  { name: "Spring Boot", note: "Java services" },
  { name: "PostgreSQL", note: "primary store" },
  { name: "MongoDB", note: "config & flexible schemas" },
  { name: "AWS EC2 · RDS", note: "deployment" },
  { name: "React Flow", note: "workflow canvas" },
];

export default function CaseManager() {
  useDocumentTitle("Case Manager · Configurable case management");
  const tilt = useTilt({ max: 5 });

  return (
    <div className="theme-case-manager">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          <Reveal className="eyebrow">
            <span className="eyebrow-dot" />
            Case Manager · Configurable case management
          </Reveal>

          <Reveal as="h1" className={styles.h1} delay={60}>
            The case-management platform
            <br />
            that <em>bends to your workflow.</em>
          </Reveal>

          <Reveal as="p" className={styles.sub} delay={120}>
            Legacy case-management tools force compliance teams to bend their workflow to the tool —
            new alert type? <b>edit XML and redeploy.</b> SqAId Case Manager flips the model:
            every alert type, view, and workflow is configured once in the UI by a developer
            persona, then used forever by financial advisors and investigators.
          </Reveal>

          <Reveal className={styles.heroCtas} delay={180}>
            <a
              href={`mailto:${COMPANY_EMAIL}?subject=Case%20Manager%20demo`}
              className="btn btn--primary"
            >
              Request a Demo &nbsp;→
            </a>
            <a href="#features" className="btn btn--ghost">
              See the Features
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
                  <span className={styles.heroUrl}>app.sqaid.ai / case-manager</span>
                  <span className={styles.heroBadge}>● Live</span>
                </div>
                <img
                  className={styles.heroShot}
                  src="/assets/cais-manager.png"
                  alt="Case Manager — alert analytics & case workspace"
                  width={3020}
                  height={1630}
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

      {/* ── FEATURES (bento) ─────────────────────────── */}
      <section id="features" className="section section--alt">
        <div className="container">
          <div className="section--center" style={{ marginBottom: 0 }}>
            <Reveal className="eyebrow">
              <span className="eyebrow-dot" />
              What makes it different
            </Reveal>
            <Reveal as="h2" className="section-title" delay={60}>
              Configuration is <em>not a developer ticket.</em>
            </Reveal>
            <Reveal as="p" className="section-lede" delay={120}>
              Six surfaces. All configured in the UI. No XML, no redeploys, no engineering tickets
              for routine compliance changes.
            </Reveal>
          </div>

          <div className={styles.bento}>
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} className={styles.feature} delay={i * 80}>
                <div className={styles.featTag}>{f.tag}</div>
                <h3 className={styles.featTitle}>{f.title}</h3>
                <p className={styles.featBody}>{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESIGNER ─────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <Reveal className="two-col__a">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Page &amp; section designer
              </div>
              <h2 className="section-title">
                Build the FA view <em>without writing a line.</em>
              </h2>
              <p className="section-lede">
                The Designer is a developer-persona surface for composing the alert-summary page
                per alert type. Trades, positions, prior alerts, FA profile, issue history — each
                a component you drag into place and bind to the alert&apos;s extra fields.
              </p>
              <p className="section-lede">
                Designer changes are saved explicitly, not in real time — this is a one-time
                setup, not a daily activity. Once configured, an FA opens the alert and sees
                exactly the right slice of the data model for that alert type.
              </p>
            </Reveal>
            <Reveal className="two-col__b" delay={120}>
              <div className={styles.specCard}>
                <div className={styles.specCardLabel}>Designer surface</div>
                <ul className="checklist">
                  <li>
                    <span>
                      <b>Component palette</b> — trades, positions, prior alerts, FA profile, issue
                      history
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Per alert type</b> — different views for AML, fraud, sanctions, trade
                      surveillance
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Bound to extra fields</b> — designer reads the alert-type schema so
                      components only show fields that exist
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Built in-house</b> — no Retool dependency, no vendor lock-in on the
                      designer surface itself
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WORKFLOW DESIGNER ────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="two-col two-col--flip">
            <Reveal className="two-col__a">
              <div className={styles.specCard}>
                <div className={styles.specCardLabel}>Workflow engine</div>
                <ul className="checklist">
                  <li>
                    <span>
                      <b>Visual canvas</b> built on React Flow — drag steps, connect, and save
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>One workflow per alert type</b> — versioned and audit-tracked
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Action library</b> — assign, attach, add note, audit history, export,
                      close, escalate
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Server-side enforcement</b> — the UI is informed by the workflow, not the
                      other way around
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal className="two-col__b" delay={120}>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Workflow designer
              </div>
              <h2 className="section-title">
                Map the lifecycle.
                <br />
                <em>Enforce it automatically.</em>
              </h2>
              <p className="section-lede">
                Build the workflow visually — sequential steps and conditional branches that
                describe how an alert moves from detection to closure. Each workflow is associated
                with a specific alert type. The backend enforces the steps, so an alert can only
                progress in the order you designed.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── RBAC ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <Reveal className="two-col__a">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Role-based access control
              </div>
              <h2 className="section-title">
                AWS IAM, <em>but for compliance teams.</em>
              </h2>
              <p className="section-lede">
                We modeled access control on AWS IAM because it&apos;s the most expressive
                role-and-policy system in widespread use. Every page, every action, every service
                endpoint can be wrapped in a policy check — including conditional access
                (&ldquo;show this action only if the alert is in state X&rdquo;).
              </p>
              <p className="section-lede">
                Multi-role users get their permissions <b>unioned and cached</b> on sign-in, so
                the UI doesn&apos;t hit the auth service on every render — but cache invalidation
                is server-driven, so revoking a role takes effect on the next request.
              </p>
            </Reveal>
            <Reveal className="two-col__b" delay={120}>
              <div className={styles.specCard}>
                <div className={styles.specCardLabel}>Access control</div>
                <ul className="checklist">
                  <li>
                    <span>
                      <b>Authorization wrapper</b> with nested checks for pages and actions
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Role caching</b> — union of policies cached per user for fast retrieval
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Conditional authorization</b> — &ldquo;allow this if &lt;predicate&gt;&rdquo;
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>In-house build</b> — we evaluated CERBOS but kept the system internal to
                      avoid vendor lock-in
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ───────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section--center" style={{ marginBottom: 0 }}>
            <Reveal className="eyebrow">
              <span className="eyebrow-dot" />
              Why teams switch
            </Reveal>
            <Reveal as="h2" className="section-title" delay={60}>
              A modern alternative — <em>built for configurability.</em>
            </Reveal>
          </div>

          <Reveal className={styles.cmpWrap}>
            <div className={styles.cmpScroll}>
              <table className={styles.cmpTable}>
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>Legacy case management</th>
                    <th>SqAId Case Manager</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((r) => (
                    <tr key={r.capability}>
                      <td>{r.capability}</td>
                      <td className={styles.bad}>{r.legacy}</td>
                      <td className={styles.good}>{r.sqaid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STACK ─────────────────────────────────────── */}
      <section className="section section--center">
        <div className="container">
          <Reveal className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="eyebrow-dot" />
            Under the hood
          </Reveal>
          <Reveal as="h2" className="section-title" delay={60}>
            Open stack. <em>No vendor lock-in.</em>
          </Reveal>
          <Reveal as="p" className="section-lede" delay={120}>
            Built on the technologies your platform team already runs. PostgreSQL for the
            relational core, MongoDB where flexible schemas earn their keep, Spring Boot services
            on AWS — and React on the frontend so your team can extend it.
          </Reveal>
          <Reveal className={styles.stack} delay={160}>
            {STACK.map((s) => (
              <span key={s.name} className={styles.stackBadge}>
                <strong>{s.name}</strong>
                <span>· {s.note}</span>
              </span>
            ))}
          </Reveal>
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
              Stop redeploying for every alert type.
              <br />
              <em>Configure it instead.</em>
            </h2>
            <p className="section-lede" style={{ marginBottom: 32 }}>
              We&apos;ll show you Case Manager on your alert types, your workflow, and your
              permission model — in twenty minutes.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href={`mailto:${COMPANY_EMAIL}?subject=Case%20Manager%20demo`}
                className="btn btn--primary"
              >
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
