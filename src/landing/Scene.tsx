import { motion, useTransform } from "framer-motion";
import { scrollProgress } from "./scrollState";

/**
 * Backdrop for the whole page. Pure CSS + compositor-only transforms —
 * no WebGL. Keeps the depth cue of the old shader tunnel (concentric rings
 * receding to a vanishing point, cyan/magenta accents) while costing a few
 * KB instead of a 600 KB renderer.
 */
export function Scene() {
  // Rings push outward as you scroll — reads as forward travel down a tunnel.
  const ringScale = useTransform(scrollProgress, [0, 1], [1, 1.45]);
  const ringSpin = useTransform(scrollProgress, [0, 1], [0, 24]);
  // Grid drifts the opposite way for a cheap parallax split.
  const gridShift = useTransform(scrollProgress, [0, 1], [0, -60]);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
        background: "#0a0a0e",
      }}
    >
      {/* Neon blooms — the cyan/magenta the shader used to supply. */}
      <div className="scene-bloom scene-bloom--cyan" />
      <div className="scene-bloom scene-bloom--magenta" />

      {/* Receding rings. */}
      <motion.div
        className="scene-rings"
        style={{ scale: ringScale, rotate: ringSpin }}
      />

      {/* Fine grid, echoing the OG card's grid motif. */}
      <motion.div className="scene-grid" style={{ y: gridShift }} />

      {/* Vignette + inky wash so the editorial type stays readable. */}
      <div className="scene-vignette" />
      <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,14,0.28)" }} />
    </div>
  );
}
