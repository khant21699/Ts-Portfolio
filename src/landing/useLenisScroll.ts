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

export function useLenisScroll(
  loopRef: MutableRefObject<HTMLElement | null>
) {
  useEffect(() => {
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
