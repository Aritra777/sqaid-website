import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Brand from "./Brand";
import NavProductsMenu from "./NavProductsMenu";
import { PRODUCTS, TOP_NAV } from "@/lib/nav-data";
import { useTheme } from "@/lib/use-theme";
import styles from "./Nav.module.css";

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 14.2A8 8 0 1 1 9.8 4a6.4 6.4 0 0 0 10.2 10.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { mode, toggle } = useTheme();

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  const closeDrawer = () => setOpen(false);

  return (
    <nav className={styles.nav} aria-label="Primary">
      <Link to="/" className={styles.brand} onClick={closeDrawer}>
        <Brand size={30} />
        <span className={styles.brandName}>SqAId</span>
      </Link>

      <ul className={[styles.links, open ? styles.linksOpen : ""].join(" ")}>
        {TOP_NAV.map((item) =>
          item.label === "Products" ? (
            <li key="products" className={styles.productsItem}>
              <NavProductsMenu onSelect={closeDrawer} />
            </li>
          ) : (
            <li key={item.to}>
              <NavLink to={item.to} onClick={closeDrawer}>
                {item.label}
              </NavLink>
            </li>
          ),
        )}

        {/* Mobile-only: expand the products inline beneath the Products header */}
        {PRODUCTS.map((p) => (
          <li key={`mobile-${p.slug}`} className={styles.mobileProduct}>
            <NavLink to={`/products/${p.slug}`} onClick={closeDrawer}>
              <span>{p.name}</span>
              {p.status === "soon" && <span className={styles.mobileTag}>Soon</span>}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.themeToggle}
          aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          onClick={toggle}
        >
          {mode === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>

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
      </div>
    </nav>
  );
}
