import ScreenshotFrame from "@/components/ScreenshotFrame";

type Pillar = { title: string; body: string };

const PILLARS: Pillar[] = [
  {
    title: "Unified alert and case management",
    body: "Manage the entire lifecycle — from detection to SAR filing — in a single intuitive interface.",
  },
  {
    title: "GenAI investigation assistant",
    body: "Automate narrative generation and research, cutting investigation time roughly in half.",
  },
  {
    title: "Zero-code configuration",
    body: "Adapt to new threats instantly with drag-and-drop workflow and rule builders.",
  },
  {
    title: "Open architecture",
    body: "Plug into your existing data lake and downstream systems through API-first contracts.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="section section--alt">
      <div className="container">
        <div className="two-col">
          <div className="two-col__a">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              The SqAId platform
            </div>
            <h2 className="section-title">
              One platform.
              <br />
              Complete intelligence.
              <br />
              <em>Total control.</em>
            </h2>
            <p className="section-lede">
              SqAId replaces a stack of fragmented compliance tools with a single AI-native
              platform — purpose-built for the way modern risk and compliance teams actually work.
            </p>
            <ul className="checklist">
              {PILLARS.map((p) => (
                <li key={p.title}>
                  <span>
                    <b>{p.title}</b> — {p.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="two-col__b">
            <ScreenshotFrame
              label="Platform overview"
              url="app.sqaid.ai / workspace"
              badge="Live"
              aspect="4 / 3"
              caption="SqAId Workspace screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
