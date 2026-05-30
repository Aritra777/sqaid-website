import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "sqaid-theme";

/** Read the mode currently applied to <html> (set pre-paint by the inline
 *  script in index.html). Falls back to dark. */
function currentMode(): ThemeMode {
  if (typeof document === "undefined") return "dark";
  return (document.documentElement.getAttribute("data-theme") as ThemeMode) || "dark";
}

/**
 * Site-wide light/dark mode. Applies the chosen mode to <html data-theme>
 * and persists it to localStorage. The accent (per product) is independent.
 */
export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(currentMode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* storage unavailable — keep the in-memory mode */
    }
  }, [mode]);

  const toggle = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return { mode, toggle };
}
