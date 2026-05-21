import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "./Layout.module.css";
export default function Layout() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                return;
            }
        }
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname, hash]);
    return (_jsxs("div", { className: styles.shell, children: [_jsx(Nav, {}), _jsx("main", { id: "main", className: styles.main, children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
}
