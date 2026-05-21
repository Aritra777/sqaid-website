import styles from "./HexLogo.module.css";

type Props = {
  size?: number;
  tone?: "primary" | "muted";
  className?: string;
};

export default function HexLogo({ size = 30, tone = "primary", className }: Props) {
  return (
    <span
      className={[styles.hex, tone === "muted" ? styles.muted : "", className]
        .filter(Boolean)
        .join(" ")}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}
