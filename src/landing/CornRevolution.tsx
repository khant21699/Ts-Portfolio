import { useEffect, useRef } from "react";
import { Scene } from "./Scene";
import { Overlay } from "./Overlay";
import { Loader } from "./Loader";
import { useLenisScroll } from "./useLenisScroll";
import "./landing.css";

const SCROLL_LOOPS = 4;

export default function CornRevolution() {
  const halfRef = useRef<HTMLDivElement>(null);
  useLenisScroll(halfRef);

  useEffect(() => {
    const prev = document.body.style.overflowX;
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = prev;
    };
  }, []);

  return (
    <div className="corn-revolution relative min-h-screen">
      <Loader />
      <Scene />
      <Overlay />

      <header className="fixed top-0 inset-x-0 z-20 flex justify-between items-center px-6 sm:px-10 py-6 mix-blend-difference text-white">
        <span className="font-display italic text-lg sm:text-xl">
          Corn Revolution
        </span>
        <span className="font-editorial text-[10px] tracking-[0.4em] uppercase">
          Index ∞
        </span>
      </header>

      <footer className="fixed bottom-0 inset-x-0 z-20 flex justify-between items-end px-6 sm:px-10 py-6 mix-blend-difference text-white">
        <span className="font-editorial text-[10px] tracking-[0.4em] uppercase">
          Scroll · Endless
        </span>
        <span className="font-editorial text-[10px] tracking-[0.4em] uppercase">
          © {new Date().getFullYear()}
        </span>
      </footer>

      <div
        aria-hidden
        style={{ height: `${SCROLL_LOOPS * 100}vh` }}
        className="pointer-events-none"
      />
    </div>
  );
}
