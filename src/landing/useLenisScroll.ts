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
 * Desktop: full Lenis smooth scroll with seamless infinite wrap (mutates
 * Lenis's internal scroll past the loopRef height so velocity is preserved).
 *
 * Mobile (loopRef === null): no Lenis, no duplication — native momentum
 * scroll is far cheaper and feels right on touch devices. We still publish
 * scrollProgress / velocity / raw so the tunnel reacts to scroll.
 */
export function useLenisScroll(
  loopRef: MutableRefObject<HTMLElement | null> | null
) {
  useEffect(() => {
    // Mobile / no-loop branch: native scroll only.
    if (!loopRef) {
      let lastY = window.scrollY;
      let lastT = performance.now();

      const onScroll = () => {
        const y = window.scrollY;
        const t = performance.now();
        const docH =
          document.documentElement.scrollHeight ||
          document.body.scrollHeight ||
          1;
        const limit = Math.max(1, docH - window.innerHeight);
        const dt = Math.max(1, t - lastT);
        const v = ((y - lastY) / dt) * 1000; // px / sec
        scrollProgress.set(Math.max(0, Math.min(1, y / limit)));
        scrollVelocity.set(v);
        scrollRaw.set(y);
        lastY = y;
        lastT = t;
      };

      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    // Desktop branch: Lenis + seamless wrap.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: reduced ? 1 : 0.085,
      duration: 1.2,
      smoothWheel: !reduced,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

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
