import { motion } from "framer-motion";
import { Pages } from "../shared";

export default function Contact() {
  return (
    <section
      id={Pages.Contact}
      className="relative px-5 sm:px-10 py-32 sm:py-44"
    >
      <div className="grid grid-cols-12 gap-4 mb-20">
        <div className="col-span-12 md:col-span-6 flex items-baseline gap-3">
          <span className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#ede5d0]/60">
            03 / Contact
          </span>
          <span className="h-px w-10 bg-[#ede5d0]/30" />
          <span className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#ede5d0]/60">
            Say hi
          </span>
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="font-display tracking-[-0.04em] leading-[0.85] text-[clamp(3rem,12vw,12rem)] text-[#ede5d0] relative z-20 mb-16"
      >
        Let's <span className="italic">build</span>
        <br />
        something.
      </motion.h2>

      <div className="grid grid-cols-12 gap-x-4 gap-y-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className="col-span-12 md:col-span-5 md:col-start-2 space-y-6"
        >
          <p className="font-display text-xl sm:text-2xl leading-[1.35] text-[#ede5d0]">
            Currently available for freelance work and full-time opportunities.
            Tell me about the idea and we can take it from there.
          </p>
          <p className="font-editorial text-[10px] uppercase tracking-[0.3em] text-[#ede5d0]/60">
            Replies within 24 hours · Open for new work
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className="col-span-12 md:col-span-4 md:col-start-8 space-y-10"
        >
          <ContactRow
            label="Email"
            value="khantdev21@gmail.com"
            href="mailto:khantdev21@gmail.com"
          />
          <ContactRow
            label="Location"
            value="Bangkok, Thailand"
            sub="Remote worldwide"
          />
          <ContactRow
            label="Github"
            value="khant21699"
            href="https://github.com/khant21699"
          />
          <ContactRow
            label="LinkedIn"
            value="khantdev"
            href="https://www.linkedin.com/in/khantdev"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-32 pt-10 border-t border-[#ede5d0]/15 grid grid-cols-12 gap-4 items-end"
      >
        <div className="col-span-12 md:col-span-6 font-editorial text-[10px] uppercase tracking-[0.3em] text-[#ede5d0]/60">
          © {new Date().getFullYear()} Khant. Built with React, TypeScript & Tailwind CSS.
        </div>
        <div className="col-span-12 md:col-span-6 md:text-right font-editorial text-[10px] uppercase tracking-[0.3em] text-[#ede5d0]/60">
          Thanks for scrolling.
        </div>
      </motion.div>
    </section>
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
    <div className="border-t border-[#ede5d0]/15 pt-4 group">
      <div className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#ede5d0]/55 mb-2">
        {label}
      </div>
      <Tag
        {...props}
        className="block font-display text-2xl sm:text-3xl tracking-[-0.02em] text-[#ede5d0] hover:italic transition-all"
      >
        {value} {href && <span className="text-base align-middle">↗</span>}
      </Tag>
      {sub && (
        <div className="font-editorial text-[10px] uppercase tracking-[0.3em] text-[#ede5d0]/50 mt-2">
          {sub}
        </div>
      )}
    </div>
  );
}
