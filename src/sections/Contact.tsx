import { motion } from "framer-motion";
import { Pages } from "../shared";

type Props = {
  setCurrentPage: (value: Pages) => void;
};

export default function Contact({ setCurrentPage }: Props) {
  return (
    <motion.section
      id={Pages.Contact}
      onViewportEnter={() => setCurrentPage(Pages.Contact)}
      className="relative px-5 sm:px-10 py-32 sm:py-44"
    >
      <div className="grid grid-cols-12 gap-4 mb-20">
        <div className="col-span-12 md:col-span-6 flex items-baseline gap-3">
          <span className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#1a1812]/60">
            03 / Contact
          </span>
          <span className="h-px w-10 bg-[#1a1812]/30" />
          <span className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#1a1812]/60">
            Say hi
          </span>
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="font-display tracking-[-0.04em] leading-[0.85] text-[clamp(3rem,12vw,12rem)] text-[#1a1812] relative z-20 mb-16"
      >
        Let's <span className="italic">build</span>
        <br />
        something.
      </motion.h2>

      <div className="grid grid-cols-12 gap-x-4 gap-y-12">
        <div className="col-span-12 md:col-span-5 md:col-start-2 space-y-6">
          <p className="font-display text-xl sm:text-2xl leading-[1.35] text-[#1a1812]">
            Currently available for freelance work and full-time opportunities.
            Tell me about the idea and we can take it from there.
          </p>
          <p className="font-editorial text-[10px] uppercase tracking-[0.3em] text-[#1a1812]/60">
            Replies within 24 hours · Open for new work
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 md:col-start-8 space-y-10">
          <ContactRow label="Email" value="khantdev21@gmail.com" href="mailto:khantdev21@gmail.com" />
          <ContactRow label="Location" value="Bangkok, Thailand" sub="Remote worldwide" />
          <ContactRow label="Github" value="khant21699" href="https://github.com/khant21699" />
          <ContactRow label="LinkedIn" value="khantdev" href="https://www.linkedin.com/in/khantdev" />
        </div>
      </div>

      <div className="mt-32 pt-10 border-t border-[#1a1812]/15 grid grid-cols-12 gap-4 items-end">
        <div className="col-span-12 md:col-span-6 font-editorial text-[10px] uppercase tracking-[0.3em] text-[#1a1812]/60">
          © {new Date().getFullYear()} Khant. Built with React, Three.js & TypeScript.
        </div>
        <div className="col-span-12 md:col-span-6 md:text-right font-editorial text-[10px] uppercase tracking-[0.3em] text-[#1a1812]/60">
          Thanks for scrolling.
        </div>
      </div>
    </motion.section>
  );
}

function ContactRow({
  label,
  value,
  href,
  sub,
}: {
  label: string;
  value: string;
  href?: string;
  sub?: string;
}) {
  const Tag = href ? "a" : "div";
  const props = href
    ? {
        href,
        target: href.startsWith("mailto:") ? undefined : "_blank",
        rel: "noopener noreferrer",
      }
    : {};
  return (
    <div className="border-t border-[#1a1812]/15 pt-4 group">
      <div className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#1a1812]/55 mb-2">
        {label}
      </div>
      <Tag
        {...props}
        className="block font-display text-2xl sm:text-3xl tracking-[-0.02em] text-[#1a1812] hover:italic transition-all"
      >
        {value} {href && <span className="text-base align-middle">↗</span>}
      </Tag>
      {sub && (
        <div className="font-editorial text-[10px] uppercase tracking-[0.3em] text-[#1a1812]/50 mt-2">
          {sub}
        </div>
      )}
    </div>
  );
}
