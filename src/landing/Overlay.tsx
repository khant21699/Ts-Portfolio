import { motion, useTransform, type MotionValue } from "framer-motion";
import { scrollProgress } from "./scrollState";

type Section = {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  align: "left" | "center" | "right";
};

const SECTIONS: Section[] = [
  {
    index: "01",
    eyebrow: "Field — Origin",
    title: "Corn\nRevolution",
    body: "An infinite study of grain, geometry, and the loop that never lands.",
    align: "left",
  },
  {
    index: "02",
    eyebrow: "Form — Cultivated",
    title: "Each kernel,\na vertex.",
    body: "Geometry rotates with the rhythm of your scroll. Faster hands, faster harvest.",
    align: "right",
  },
  {
    index: "03",
    eyebrow: "Yield — In Motion",
    title: "Smoothness,\nscrubbed.",
    body: "Lenis carries the wheel; GSAP carries the eye. The mesh listens to both.",
    align: "left",
  },
  {
    index: "04",
    eyebrow: "Loop — Without End",
    title: "Where the field\nbegins again.",
    body: "Reach the bottom. Find the top. Notice nothing.",
    align: "center",
  },
];

export function Overlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10 flex flex-col"
    >
      {SECTIONS.map((section, i) => (
        <SectionPanel
          key={section.index}
          section={section}
          start={i / SECTIONS.length}
          end={(i + 1) / SECTIONS.length}
        />
      ))}
    </div>
  );
}

function SectionPanel({
  section,
  start,
  end,
}: {
  section: Section;
  start: number;
  end: number;
}) {
  const center = (start + end) / 2;
  const padIn = start + (end - start) * 0.15;
  const padOut = end - (end - start) * 0.15;

  const opacity = useTransform(
    scrollProgress,
    [start, padIn, padOut, end],
    [0, 1, 1, 0]
  ) as MotionValue<number>;
  const y = useTransform(scrollProgress, [start, end], [60, -60]);
  const blur = useTransform(scrollProgress, [start, center, end], [12, 0, 12]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  const alignClass =
    section.align === "left"
      ? "items-start text-left"
      : section.align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <motion.div
      style={{ opacity, y, filter }}
      className={`absolute inset-0 flex ${alignClass} justify-center px-8 sm:px-16 md:px-24 py-24 flex-col`}
    >
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-editorial text-[10px] tracking-[0.4em] uppercase text-corn-ink/60">
          Index {section.index}
        </span>
        <span className="h-px w-12 bg-corn-ink/30" />
        <span className="font-editorial text-[10px] tracking-[0.4em] uppercase text-corn-ink/60">
          {section.eyebrow}
        </span>
      </div>
      <h2 className="font-display text-corn-ink whitespace-pre-line leading-[0.95] text-[clamp(2.75rem,9vw,8rem)] tracking-[-0.02em]">
        {section.title}
      </h2>
      <p className="mt-8 max-w-md font-body text-corn-ink/70 text-base sm:text-lg leading-relaxed">
        {section.body}
      </p>
    </motion.div>
  );
}
