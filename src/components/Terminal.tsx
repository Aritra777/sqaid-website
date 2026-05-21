import type { ReactNode } from "react";
import styles from "./Terminal.module.css";

type Props = {
  title?: string;
  children: ReactNode;
};

export default function Terminal({ title = "console", children }: Props) {
  return (
    <div className={styles.term}>
      <div className={styles.bar}>
        <span className={`${styles.dot} ${styles.r}`} />
        <span className={`${styles.dot} ${styles.y}`} />
        <span className={`${styles.dot} ${styles.g}`} />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export const T = {
  Cmt: ({ children }: { children: ReactNode }) => <span className={styles.cmt}>{children}</span>,
  Key: ({ children }: { children: ReactNode }) => <span className={styles.kw}>{children}</span>,
  Str: ({ children }: { children: ReactNode }) => <span className={styles.str}>{children}</span>,
  Num: ({ children }: { children: ReactNode }) => <span className={styles.num}>{children}</span>,
  Err: ({ children }: { children: ReactNode }) => <span className={styles.err}>{children}</span>,
  Ok: ({ children }: { children: ReactNode }) => <span className={styles.ok}>{children}</span>,
  Muted: ({ children }: { children: ReactNode }) => <span className={styles.muted}>{children}</span>,
};
