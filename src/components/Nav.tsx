import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Brand from "./Brand";
import NavProductsMenu from "./NavProductsMenu";
import { PRODUCTS, TOP_NAV } from "@/lib/nav-data";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

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
