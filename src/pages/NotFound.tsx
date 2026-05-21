import { Link } from "react-router-dom";
import { useDocumentTitle } from "@/lib/use-document-title";

export default function NotFound() {
  useDocumentTitle("Page not found");
  return (
    <section className="section section--center">
      <div className="container">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          404 · Off the graph
        </div>
        <h1 className="section-title">
          This page <em>doesn&apos;t exist.</em>
        </h1>
        <p className="section-lede">
          The route you followed isn&apos;t one of the surfaces we&apos;ve published yet.
        </p>
        <Link to="/" className="btn btn--primary" style={{ marginTop: 24 }}>
          Back to home →
        </Link>
      </div>
    </section>
  );
}
