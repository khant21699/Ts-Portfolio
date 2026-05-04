import { useEffect, type MutableRefObject } from "react";
import Lenis from "lenis";
import { scrollProgress, scrollVelocity, scrollRaw } from "./scrollState";

type LenisScrollEvent = {
  scroll: number;
  limit: number;
  velocity: number;
};

type LenisInternal = {
  animatedScroll: number;
  targetScroll: number;
};

/**
 * Seamless infinite scroll loop, on every device.
 *
 * Desktop: Lenis smooth scroll + we mutate Lenis's animatedScroll/targetScroll
 *   when crossing the loop boundary so velocity is preserved.
 *
 * Mobile: native momentum scroll (no Lenis — Lenis on touch devices was the
 *   main source of lag earlier). When the user crosses the loop boundary, we
 *   instantly snap window.scrollY back by loopHeight. Because the page renders
 *   the same sections twice and the boundary sits exactly between the two
 *   copies, the visual is identical pre/post-snap.
 */
export function useLenisScroll(
  loopRef: MutableRefObject<HTMLElement | null>
) {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    let loopHeight = 0;
    const measure = () => {
      const el = loopRef.current;
      if (!el) return;
      loopHeight = el.getBoundingClientRect().height;
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (loopRef.current) ro.observe(loopRef.current);
    window.addEventListener("resize", measure);
    const measureTimer = window.setTimeout(measure, 200);

    // ---------------- MOBILE: native scroll + wrap ----------------
    if (isMobile) {
      let lastY = window.scrollY;
      let lastT = performance.now();
      let wrapping = false;

      const onScroll = () => {
        if (wrapping) return;
        const y = window.scrollY;

        if (loopHeight > 0) {
          if (y >= loopHeight) {
            wrapping = true;
            window.scrollTo(0, y - loopHeight);
            requestAnimationFrame(() => {
              wrapping = false;
              lastY = window.scrollY;
            });
            return;
          }
          if (y < 0) {
            wrapping = true;
            window.scrollTo(0, y + loopHeight);
            requestAnimationFrame(() => {
              wrapping = false;
              lastY = window.scrollY;
            });
            return;
          }
        }

        const t = performance.now();
        const safe = loopHeight > 0 ? loopHeight : 1;
        const wrapped = (((y % safe) + safe) % safe) / safe;
        const dt = Math.max(1, t - lastT);
        const v = ((y - lastY) / dt) * 1000;

        scrollProgress.set(wrapped);
        scrollVelocity.set(v);
        scrollRaw.set(y);
        lastY = y;
        lastT = t;
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.clearTimeout(measureTimer);
        ro.disconnect();
        window.removeEventListener("resize", measure);
      };
    }

    // ---------------- DESKTOP: Lenis + wrap ----------------
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: reduced ? 1 : 0.085,
      duration: 1.2,
      smoothWheel: !reduced,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const onScroll = (e: LenisScrollEvent) => {
      if (loopHeight > 0) {
        const lInternal = lenis as unknown as LenisInternal;
        if (e.scroll >= loopHeight) {
          lInternal.animatedScroll -= loopHeight;
          lInternal.targetScroll -= loopHeight;
        } else if (e.scroll < 0) {
          lInternal.animatedScroll += loopHeight;
          lInternal.targetScroll += loopHeight;
        }
      }

      const safe = loopHeight > 0 ? loopHeight : 1;
      const wrapped = (((e.scroll % safe) + safe) % safe) / safe;
      scrollProgress.set(wrapped);
      scrollVelocity.set(e.velocity);
      scrollRaw.set(e.scroll);
    };

    lenis.on("scroll", onScroll);

    return () => {
      window.clearTimeout(measureTimer);
      ro.disconnect();
      window.removeEventListener("resize", measure);
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, [loopRef]);
}
