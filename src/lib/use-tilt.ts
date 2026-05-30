import { useCallback, useEffect, useRef } from "react";
import type { PointerEvent } from "react";

type TiltOptions = {
  /** max rotation in degrees on each axis */
  max?: number;
  /** how far the glare/lift reads */
  scale?: number;
};

const canTilt = () =>
  typeof window !== "undefined" &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/**
 * Subtle pointer-driven 3D tilt for a hero visual. Writes CSS custom properties
 * (--rx, --ry, --mx, --my) onto the element so the styling stays in CSS.
 * No-op on touch devices and under prefers-reduced-motion.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>({ max = 6, scale = 1.012 }: TiltOptions = {}) {
  const ref = useRef<T | null>(null);
  const enabled = useRef(false);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    enabled.current = canTilt();
  }, []);

  const onMove = useCallback(
    (e: PointerEvent<T>) => {
      const el = ref.current;
      if (!el || !enabled.current) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        el.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`);
        el.style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`);
        el.style.setProperty("--mx", `${px * 100}%`);
        el.style.setProperty("--my", `${py * 100}%`);
        el.style.setProperty("--tilt-scale", `${scale}`);
      });
    },
    [max, scale],
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--tilt-scale", "1");
  }, []);

  return { ref, onMove, onLeave };
}
