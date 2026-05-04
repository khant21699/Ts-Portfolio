import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MIN_DURATION = 1400;

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;

    const tick = () => {
      const elapsed = performance.now() - start;
      const p = Math.min(1, elapsed / MIN_DURATION);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else window.setTimeout(() => setHidden(true), 280);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const pct = Math.round(progress * 100);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#FAFAFA]"
        >
          <div className="flex flex-col items-center gap-8 w-[min(420px,80vw)]">
            <motion.span
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-editorial text-[10px] tracking-[0.4em] uppercase text-corn-ink/55"
            >
              Corn Revolution — Cultivating Field
            </motion.span>

            <div className="flex items-baseline gap-3 tabular-nums">
              <span className="font-display text-[5.5rem] leading-none text-corn-ink">
                {String(pct).padStart(3, "0")}
              </span>
              <span className="font-editorial text-xs tracking-widest text-corn-ink/50">
                %
              </span>
            </div>

            <div className="relative h-px w-full overflow-hidden bg-corn-ink/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-corn-ink"
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </div>

            <div className="flex w-full justify-between font-editorial text-[10px] tracking-[0.3em] uppercase text-corn-ink/40">
              <span>Index 00</span>
              <span>v 0.1 — scaffold</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
