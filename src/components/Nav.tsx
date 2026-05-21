import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Brand from "./Brand";
import { TOP_NAV } from "@/lib/nav-data";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  return (
    <nav className={styles.nav} aria-label="Primary">
      <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
        <Brand size={30} />
        <span className={styles.brandName}>SqAId</span>
      </Link>

      <ul className={[styles.links, open ? styles.linksOpen : ""].join(" ")}>
        {TOP_NAV.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <Link to="/#contact" className={styles.cta}>
        Request Demo
      </Link>

      <button
        type="button"
        className={styles.toggle}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
