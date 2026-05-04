import "./App.css";
import { useEffect, useRef } from "react";
import { motion, useTransform } from "framer-motion";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { Scene } from "./landing/Scene";
import { useLenisScroll } from "./landing/useLenisScroll";
import { scrollProgress } from "./landing/scrollState";

function App() {
  const halfRef = useRef<HTMLDivElement>(null);
  useLenisScroll(halfRef);

  const pct = useTransform(scrollProgress, (p) =>
    String(Math.round(p * 100)).padStart(3, "0")
  );

  useEffect(() => {
    document.title = "Khant · Frontend Developer";
  }, []);

  const sections = (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );

  return (
    <div className="relative min-h-screen text-[#ede5d0] bg-[#0a0a0e] overflow-x-hidden">
      <Scene />

      <header className="fixed top-0 inset-x-0 z-30 flex justify-between items-center px-5 sm:px-10 py-5 text-[#ede5d0]">
        <div className="flex items-center gap-3">
          <span className="font-display italic text-lg sm:text-xl">Khant</span>
          <span className="hidden sm:inline font-editorial text-[10px] uppercase tracking-[0.4em] opacity-70">
            Frontend Developer
          </span>
        </div>
        <span className="font-editorial text-[10px] uppercase tracking-[0.4em]">
          Bangkok, TH
        </span>
      </header>

      <footer className="fixed bottom-0 inset-x-0 z-30 flex justify-end items-end px-5 sm:px-10 py-5 text-[#ede5d0] pointer-events-none">
        <motion.span className="font-editorial text-[10px] uppercase tracking-[0.4em] tabular-nums opacity-60">
          {pct}
        </motion.span>
      </footer>

      <main className="relative z-10">
        <div ref={halfRef}>{sections}</div>
        <div aria-hidden>{sections}</div>
      </main>
    </div>
  );
}

export default App;
