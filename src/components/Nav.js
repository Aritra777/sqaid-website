import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HexLogo from "./HexLogo";
import { TOP_NAV } from "@/lib/nav-data";
import styles from "./Nav.module.css";
export default function Nav() {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (!open)
            return;
        const close = () => setOpen(false);
        window.addEventListener("hashchange", close);
        return () => window.removeEventListener("hashchange", close);
    }, [open]);
    return (_jsxs("nav", { className: styles.nav, "aria-label": "Primary", children: [_jsxs(Link, { to: "/", className: styles.brand, onClick: () => setOpen(false), children: [_jsx(HexLogo, { size: 30 }), _jsx("span", { className: styles.brandName, children: "SqAId" })] }), _jsx("ul", { className: [styles.links, open ? styles.linksOpen : ""].join(" "), children: TOP_NAV.map((item) => (_jsx("li", { children: _jsx(NavLink, { to: item.to, onClick: () => setOpen(false), children: item.label }) }, item.to))) }), _jsx(Link, { to: "/#contact", className: styles.cta, children: "Request Demo" }), _jsxs("button", { type: "button", className: styles.toggle, "aria-label": "Toggle navigation", "aria-expanded": open, onClick: () => setOpen((o) => !o), children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] })] }));
}
