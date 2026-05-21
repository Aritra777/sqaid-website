import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "@/lib/nav-data";
import styles from "./NavProductsMenu.module.css";

const DETAILS: Record<string, { eyebrow: string }> = {
  argus: { eyebrow: "Financial-crime intelligence" },
  "case-manager": { eyebrow: "Case management" },
  faro: { eyebrow: "Real-time fraud & AML" },
  abacus: { eyebrow: "Coming soon" },
};

type Props = {
  onSelect?: () => void;
};

export default function NavProductsMenu({ onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    cancelClose();
    setOpen(true);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), 100);
  };

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleSelect = () => {
    setOpen(false);
    onSelect?.();
  };

  return (
    <div
      ref={wrapRef}
      className={styles.wrap}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        ref={triggerRef}
        type="button"
        className={`${styles.trigger} ${open ? styles.triggerOpen : ""}`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        onFocus={openMenu}
      >
        Products
        <span className={styles.caret} aria-hidden="true">
          ▾
        </span>
      </button>

      <div
        id={panelId}
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        role="menu"
        aria-label="Products"
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <div className={`container ${styles.inner}`}>
          <ul className={styles.grid}>
            {PRODUCTS.map((p) => {
              const detail = DETAILS[p.slug] ?? { eyebrow: "" };
              return (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    role="menuitem"
                    className={`${styles.card} ${p.status === "soon" ? styles.soon : ""}`}
                    onClick={handleSelect}
                  >
                    <div className={styles.cardEyebrow}>{detail.eyebrow}</div>
                    <div className={styles.cardName}>
                      {p.name}
                      {p.status === "soon" && <span className={styles.tag}>Soon</span>}
                    </div>
                    <p className={styles.cardTagline}>{p.tagline}</p>
                    <span className={styles.cardArrow}>Explore →</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
