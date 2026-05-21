import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./HexLogo.module.css";
export default function HexLogo({ size = 30, tone = "primary", className }) {
    return (_jsx("span", { className: [styles.hex, tone === "muted" ? styles.muted : "", className]
            .filter(Boolean)
            .join(" "), style: { width: size, height: size }, "aria-hidden": "true" }));
}
