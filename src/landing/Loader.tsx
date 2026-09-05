import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Never dismiss before this — a 90 ms flash of loader is worse than none. */
const MIN_VISIBLE = 700;
/** Never hold past this, however slow the chunk is. The site works without it. */
const HARD_CAP = 4500;
/** Time to run the bar from wherever it is up to 100 once the tunnel lands. */
const SETTLE = 320;

/**
 * Shown while the WebGL backdrop streams in. The mark is a CSS-3D gyroscope —
 * three rings tumbling on different axes under one shared perspective — so the
 * loading screen for our 3D costs no JavaScript and no second renderer.
 *
 * `active` goes false as soon as the tunnel resolves, or is skipped entirely,
 * in which case this never mounts visible at all.
 *
 * Visibility is driven by timers, never by the rAF loop: a backgrounded tab
 * pauses requestAnimationFrame outright, and an overlay that can only come
 * down on a frame would sit there until the tab is looked at again. rAF only
 * paints the counter.
 */
export function Loader({ active }: { active: boolean }) {
  const [visible, setVisible] = useState(active);
  const [progress, setProgress] = useState(0);

  const startRef = useRef(performance.now());
  // Timestamp the tunnel finished, or 0 while still in flight.
  const doneRef = useRef(0);
  // Progress at the moment it finished, so the settle ramp has a fixed origin.
  const settleFromRef = useRef(0);
  const progressRef = useRef(0);
  progressRef.current = progress;

  useEffect(() => {
    if (active || doneRef.current) return;
    doneRef.current = performance.now();
    settleFromRef.current = progressRef.current;
  }, [active]);

  // Normal exit: hold out the minimum, let the bar settle, then leave.
  useEffect(() => {
    if (!visible || active) return;
    const elapsed = performance.now() - startRef.current;
    const wait = Math.max(0, MIN_VISIBLE - elapsed) + SETTLE;
    const id = window.setTimeout(() => {
      setProgress(1);
      setVisible(false);
    }, wait);
    return () => window.clearTimeout(id);
  }, [active, visible]);

  // Safety net: a slow or dead chunk must never hold the page hostage.
  useEffect(() => {
    if (!visible) return;
    const id = window.setTimeout(() => {
      setProgress(1);
      setVisible(false);
    }, HARD_CAP);
    return () => window.clearTimeout(id);
  }, [visible]);

  // Counter paint only.
  useEffect(() => {
    if (!visible) return;
    let raf = 0;
    const tick = () => {
      const now = performance.now();
      if (doneRef.current) {
        const t = Math.min(1, (now - doneRef.current) / SETTLE);
        const from = settleFromRef.current;
        setProgress(from + (1 - from) * t);
      } else {
        // Ease toward 92% so the bar never sits still, and never claims to be
        // finished before the chunk actually is.
        setProgress(0.92 * (1 - Math.exp(-(now - startRef.current) / 900)));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  // Hold the page still underneath so nobody scrolls blind behind the overlay.
  useEffect(() => {
    if (!visible) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev;
    };
  }, [visible]);

  const pct = Math.round(progress * 100);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          role="status"
          aria-live="polite"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#0a0a0e] text-[#ede5d0]"
        >
          <div className="flex w-[min(340px,72vw)] flex-col items-center gap-10">
            <div className="gyro" aria-hidden>
              <span className="gyro__ring gyro__ring--outer" />
              <span className="gyro__ring gyro__ring--mid" />
              <span className="gyro__ring gyro__ring--inner" />
              <span className="gyro__core" />
            </div>

            <div className="flex w-full flex-col items-center gap-5">
              <span className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#ede5d0]/55">
                Loading your experience
              </span>

              {/* Playfair's oldstyle figures descend — leading-none would drop
                  them straight onto the bar below. */}
              <span className="font-display text-[3.25rem] leading-[1.15] tabular-nums text-[#ede5d0]">
                {String(pct).padStart(3, "0")}
              </span>

              <div className="relative h-px w-full overflow-hidden bg-[#ede5d0]/15">
                <div
                  className="absolute inset-y-0 left-0 bg-[#ede5d0]"
                  style={{ width: `${pct}%` }}
                />
              </div>

              <div className="flex w-full justify-between font-editorial text-[10px] uppercase tracking-[0.3em] text-[#ede5d0]/40">
                <span>WebGL backdrop</span>
                <span>Bangkok, TH</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
