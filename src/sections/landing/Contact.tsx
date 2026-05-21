import { COMPANY_EMAIL } from "@/lib/nav-data";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.cta}>
      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <h2 className={styles.h}>
          Stop investigating alerts.
          <br />
          Start <em>reviewing investigations.</em>
        </h2>
        <p className={styles.p}>
          See SqAId on your data. Twenty minutes — that&apos;s how long it takes to show how the
          platform reshapes a single end-to-end investigation.
        </p>
        <div className={styles.btnRow}>
          <a href={`mailto:${COMPANY_EMAIL}?subject=SqAId%20demo%20request`} className="btn btn--primary">
            Request a Demo &nbsp;→
          </a>
          <a href={`mailto:${COMPANY_EMAIL}`} className="btn btn--ghost">
            {COMPANY_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
