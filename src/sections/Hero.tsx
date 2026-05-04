import { motion } from "framer-motion";
import { Pages } from "../shared";

type Props = {
  setCurrentPage: (value: Pages) => void;
};

const TITLE = "KHANT";
const ENTER = {
  initial: { y: "110%" },
  animate: { y: 0 },
};

export default function Hero({ setCurrentPage }: Props) {
  return (
    <motion.section
      id={Pages.Home}
      onViewportEnter={() => setCurrentPage(Pages.Home)}
      className="relative min-h-[100svh] flex flex-col justify-between px-5 sm:px-10 pt-28 pb-20"
    >
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 flex items-baseline gap-3">
          <span className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#1a1812]/60">
            00 / Intro
          </span>
          <span className="h-px w-10 bg-[#1a1812]/30" />
          <span className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#1a1812]/60">
            2026
          </span>
        </div>
        <div className="col-span-12 md:col-span-6 md:text-right">
          <span className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#1a1812]/60">
            Portfolio in Motion
          </span>
        </div>
      </div>

      <div className="relative z-20 text-[#1a1812]">
        <h1
          aria-label="Khant"
          className="font-display tracking-[-0.04em] leading-[0.78] text-[clamp(6rem,26vw,22rem)] flex justify-center overflow-hidden"
        >
          {TITLE.split("").map((c, i) => (
            <motion.span
              key={i}
              initial={ENTER.initial}
              animate={ENTER.animate}
              transition={{
                duration: 1.1,
                delay: 0.15 + i * 0.06,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="inline-block"
            >
              {c}
            </motion.span>
          ))}
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-4 items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
          className="col-span-12 md:col-span-5"
        >
          <p className="font-display italic text-2xl sm:text-3xl leading-[1.15] text-[#1a1812]">
            Frontend developer crafting digital experiences with React,
            Next.js, Vue.js and TypeScript.
          </p>
        </motion.div>

        <div className="col-span-12 md:col-span-3 md:col-start-7 flex flex-col gap-1 font-editorial text-[10px] uppercase tracking-[0.4em] text-[#1a1812]/70">
          <span>Currently</span>
          <span className="text-[#1a1812]">
            Senior Frontend Developer
          </span>
          <span>at Concepts Unlimited</span>
        </div>

        <div className="col-span-12 md:col-span-2 md:col-start-11 md:text-right flex md:flex-col gap-3 md:gap-1 font-editorial text-[10px] uppercase tracking-[0.4em] text-[#1a1812]/70">
          <a
            href="https://github.com/khant21699"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1a1812] transition-colors"
          >
            Github ↗
          </a>
          <a
            href="https://www.linkedin.com/in/khantdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1a1812] transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:khantdev21@gmail.com"
            className="hover:text-[#1a1812] transition-colors"
          >
            Email ↗
          </a>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 -translate-x-1/2 bottom-6 font-editorial text-[10px] uppercase tracking-[0.4em] text-[#1a1812]/60"
      >
        ↓ Scroll to begin
      </motion.div>
    </motion.section>
  );
}
