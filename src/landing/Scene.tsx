import { type ComponentType } from "react";
import { motion, useTransform } from "framer-motion";
import { scrollProgress } from "./scrollState";

/**
 * Backdrop for the whole page.
 *
 * Two layers. The CSS one paints immediately and costs a few KB — concentric
 * rings, cyan/magenta blooms, a grid, a vignette. The WebGL tunnel shader is
 * the real thing, but three is ~500 KB, so it is code-split and streamed in by
 * useTunnel. Until it lands (or forever, on reduced-motion / no-WebGL
 * machines) the CSS layer is what you see.
 *
 * When the tunnel does mount, the decorative CSS layers fade out — the tunnel
 * rings are meant to wrap the page on their own, without a center vignette.
 */
export function Scene({ tunnel: Tunnel }: { tunnel: ComponentType | null }) {
  // Rings push outward as you scroll — reads as forward travel down a tunnel.
  const ringScale = useTransform(scrollProgress, [0, 1], [1, 1.45]);
  const ringSpin = useTransform(scrollProgress, [0, 1], [0, 24]);
  // Grid drifts the opposite way for a cheap parallax split.
  const gridShift = useTransform(scrollProgress, [0, 1], [0, -60]);

  // Cross-fade: the CSS ornaments retire once the shader is carrying the depth.
  const cssLayers = Tunnel ? 0 : 1;

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
      {/* Neon blooms — the cyan/magenta the shader supplies on its own. */}
      <motion.div
        className="scene-bloom scene-bloom--cyan"
        animate={{ opacity: cssLayers }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="scene-bloom scene-bloom--magenta"
        animate={{ opacity: cssLayers }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Receding rings. */}
      <motion.div
        className="scene-rings"
        style={{ scale: ringScale, rotate: ringSpin }}
        animate={{ opacity: cssLayers }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Fine grid, echoing the OG card's grid motif. */}
      <motion.div
        className="scene-grid"
        style={{ y: gridShift }}
        animate={{ opacity: cssLayers }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Vignette — dropped under the tunnel so its rings wrap the page. */}
      <motion.div
        className="scene-vignette"
        animate={{ opacity: cssLayers }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* The real tunnel, once it has streamed in. */}
      {Tunnel && (
        <motion.div
          style={{ position: "absolute", inset: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Tunnel />
        </motion.div>
      )}

      {/* Inky wash so the editorial type stays readable over either layer. */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,14,0.28)" }} />
    </div>
  );
}
