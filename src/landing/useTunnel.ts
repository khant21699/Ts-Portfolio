import { useEffect, useState, type ComponentType } from "react";

export type TunnelStatus = "loading" | "ready" | "skipped";

/**
 * Loads the WebGL tunnel backdrop off the critical path.
 *
 * three is ~500 KB, so the shader lives in its own chunk that is only fetched
 * once the page goes idle. Machines that would not benefit — reduced-motion
 * preferences, no WebGL context — never pay for the request at all and stay on
 * the CSS backdrop.
 */

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function hasWebGL() {
  if (typeof window === "undefined") return false;
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

// Probed once per page load — creating throwaway GL contexts is not free.
let supported: boolean | null = null;
function tunnelSupported() {
  if (supported === null) supported = !prefersReducedMotion() && hasWebGL();
  return supported;
}

export function useTunnel() {
  // Resolved synchronously so unsupported machines never flash the loader.
  const [status, setStatus] = useState<TunnelStatus>(() =>
    tunnelSupported() ? "loading" : "skipped"
  );
  const [Tunnel, setTunnel] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (!tunnelSupported()) return;

    let cancelled = false;
    const load = () => {
      import("../Components/ui/tunnel-hero")
        .then((m) => {
          if (cancelled) return;
          setTunnel(() => m.default);
          setStatus("ready");
        })
        .catch(() => {
          // Stay on the CSS backdrop rather than stranding the loader.
          if (!cancelled) setStatus("skipped");
        });
    };

    // Wait for idle so the shader chunk never competes with first paint.
    const ric = (window as any).requestIdleCallback as
      | ((cb: () => void, opts?: { timeout: number }) => number)
      | undefined;
    const handle = ric ? ric(load, { timeout: 2000 }) : window.setTimeout(load, 400);

    return () => {
      cancelled = true;
      const cic = (window as any).cancelIdleCallback as
        | ((id: number) => void)
        | undefined;
      if (ric && cic) cic(handle);
      else window.clearTimeout(handle);
    };
  }, []);

  return { Tunnel, status };
}
