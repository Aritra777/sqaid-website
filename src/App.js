import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
const Landing = lazy(() => import("@/pages/Landing"));
const Argus = lazy(() => import("@/pages/Argus"));
const CaseManager = lazy(() => import("@/pages/CaseManager"));
const Faro = lazy(() => import("@/pages/Faro"));
const Sentinel = lazy(() => import("@/pages/Sentinel"));
const NotFound = lazy(() => import("@/pages/NotFound"));
function RouteFallback() {
    return (_jsx("div", { style: {
            minHeight: "60vh",
            display: "grid",
            placeItems: "center",
            color: "var(--t3)",
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
        }, children: "Loading\u2026" }));
}
export default function App() {
    return (_jsx(Suspense, { fallback: _jsx(RouteFallback, {}), children: _jsx(Routes, { children: _jsxs(Route, { element: _jsx(Layout, {}), children: [_jsx(Route, { path: "/", element: _jsx(Landing, {}) }), _jsx(Route, { path: "/products/argus", element: _jsx(Argus, {}) }), _jsx(Route, { path: "/products/case-manager", element: _jsx(CaseManager, {}) }), _jsx(Route, { path: "/products/faro", element: _jsx(Faro, {}) }), _jsx(Route, { path: "/products/sentinel", element: _jsx(Sentinel, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }) }));
}
