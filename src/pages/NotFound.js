import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
export default function NotFound() {
    return (_jsx("section", { className: "section section--center", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "eyebrow", children: [_jsx("span", { className: "eyebrow-dot" }), "404 \u00B7 Off the graph"] }), _jsxs("h1", { className: "section-title", children: ["This page ", _jsx("em", { children: "doesn't exist." })] }), _jsx("p", { className: "section-lede", children: "The route you followed isn't one of the surfaces we've published yet." }), _jsx(Link, { to: "/", className: "btn btn--primary", style: { marginTop: 24 }, children: "Back to home \u2192" })] }) }));
}
