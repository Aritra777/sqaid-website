import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "@/lib/use-reveal";
import styles from "./Reveal.module.css";

type Props = {
  children: ReactNode;
  /** stagger delay in ms */
  delay?: number;
  /** element to render as (default div) */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

/** Fades + slides its children in when scrolled into view (reduced-motion safe). */
export default function Reveal({ children, delay = 0, as: Tag = "div", className, style }: Props) {
  const { ref, revealed } = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${revealed ? styles.revealed : ""} ${className ?? ""}`}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
