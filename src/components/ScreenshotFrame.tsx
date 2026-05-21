import styles from "./ScreenshotFrame.module.css";

type Props = {
  label?: string;
  url?: string;
  badge?: string;
  aspect?: string; // e.g. "16 / 9"
  caption?: string;
  src?: string;
  alt?: string;
};

export default function ScreenshotFrame({
  label,
  url = "app.sqaid.ai",
  badge,
  aspect = "16 / 9",
  caption = "Screenshot placeholder",
  src,
  alt,
}: Props) {
  return (
    <figure className={styles.wrap}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.frame}>
        <div className={styles.chrome}>
          <span className={`${styles.dot} ${styles.r}`} />
          <span className={`${styles.dot} ${styles.y}`} />
          <span className={`${styles.dot} ${styles.g}`} />
          <span className={styles.url}>{url}</span>
          {badge && <span className={styles.badge}>● {badge}</span>}
        </div>
        <div className={styles.body} style={{ aspectRatio: aspect }}>
          {src ? (
            <img src={src} alt={alt ?? caption} loading="lazy" />
          ) : (
            <div className={styles.placeholder} aria-hidden="true">
              <div className={styles.grid} />
              <div className={styles.placeholderText}>
                <span>{caption}</span>
                <small>Drop an image into /public/assets/ and pass it via <code>src</code>.</small>
              </div>
            </div>
          )}
        </div>
      </div>
    </figure>
  );
}
