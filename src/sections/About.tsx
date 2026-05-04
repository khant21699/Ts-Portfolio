import { motion } from "framer-motion";
import { Pages } from "../shared";
import { techStackData } from "../data/techStackData";

const education = [
  {
    degree: "BSc(Hons) in Computing",
    institution: "University of Gloucestershire",
    year: "2024",
  },
  {
    degree: "HND in Software Engineering",
    institution: "Pearson",
    year: "2023",
  },
  {
    degree: "META Frontend Developer Certificate",
    institution: "Coursera",
    year: "2023",
  },
];

const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Concepts Unlimited Project Management Services",
    period: "2024 / Now",
  },
  {
    role: "Junior Developer",
    company: "Akiya Research",
    period: "2023 / 2024",
  },
];

export default function About() {
  return (
    <section
      id={Pages.AboutMe}
      className="relative px-5 sm:px-10 py-32 sm:py-44"
    >
      <div className="grid grid-cols-12 gap-4 mb-20">
        <div className="col-span-12 md:col-span-6 flex items-baseline gap-3">
          <span className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#ede5d0]/60">
            01 / About
          </span>
          <span className="h-px w-10 bg-[#ede5d0]/30" />
          <span className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#ede5d0]/60">
            Background
          </span>
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="font-display tracking-[-0.03em] leading-[0.92] text-[clamp(2.75rem,9vw,8rem)] text-[#ede5d0] relative z-20 mb-20 max-w-[18ch]"
      >
        Code as craft, design as care.
      </motion.h2>

      <div className="grid grid-cols-12 gap-x-4 gap-y-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className="col-span-12 md:col-span-5 md:col-start-2 space-y-6 font-display text-xl sm:text-2xl leading-[1.35] text-[#ede5d0]"
        >
          <p>
            I'm a Frontend Developer from Myanmar, currently based in Bangkok,
            Thailand. I turn ideas into elegant, user-centric digital
            experiences.
          </p>
          <p className="text-[#ede5d0]/80">
            With expertise in React, Next.js, Vue.js, and TypeScript, I build
            scalable applications that combine beautiful design with robust
            functionality.
          </p>
          <p className="font-editorial not-italic text-sm uppercase tracking-[0.3em] text-[#ede5d0]/60 pt-4">
            "Make it work, make it right, make it fast."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className="col-span-12 md:col-span-4 md:col-start-9"
        >
          <div className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#ede5d0]/60 mb-6">
            Tech Stack
          </div>
          <ul className="grid grid-cols-2 gap-y-3">
            {techStackData.map((tech, i) => (
              <motion.li
                key={tech.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="flex items-center gap-3 text-[#ede5d0]"
              >
                <tech.Icon className="text-lg opacity-70" />
                <span className="font-display text-base">{tech.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-32">
        <div className="col-span-12 md:col-span-5 md:col-start-2">
          <div className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#ede5d0]/60 mb-8">
            Experience
          </div>
          <ul className="divide-y divide-[#ede5d0]/15 border-y border-[#ede5d0]/15">
            {experience.map((exp, i) => (
              <motion.li
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="py-6 flex justify-between items-baseline gap-6"
              >
                <div>
                  <div className="font-display text-xl sm:text-2xl leading-tight">
                    {exp.role}
                  </div>
                  <div className="font-editorial text-[10px] uppercase tracking-[0.3em] text-[#ede5d0]/60 mt-2">
                    {exp.company}
                  </div>
                </div>
                <span className="font-editorial text-[10px] uppercase tracking-[0.3em] text-[#ede5d0]/70 shrink-0">
                  {exp.period}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 md:col-span-5 md:col-start-8">
          <div className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#ede5d0]/60 mb-8">
            Education
          </div>
          <ul className="divide-y divide-[#ede5d0]/15 border-y border-[#ede5d0]/15">
            {education.map((edu, i) => (
              <motion.li
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="py-6 flex justify-between items-baseline gap-6"
              >
                <div>
                  <div className="font-display text-xl sm:text-2xl leading-tight">
                    {edu.degree}
                  </div>
                  <div className="font-editorial text-[10px] uppercase tracking-[0.3em] text-[#ede5d0]/60 mt-2">
                    {edu.institution}
                  </div>
                </div>
                <span className="font-editorial text-[10px] uppercase tracking-[0.3em] text-[#ede5d0]/70 shrink-0">
                  {edu.year}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
