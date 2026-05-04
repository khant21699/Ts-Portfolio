import { motion } from "framer-motion";
import { Pages } from "../shared";
import { techStackData } from "../data/techStackData";

type Props = {
  setCurrentPage: (value: Pages) => void;
};

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

export default function About({ setCurrentPage }: Props) {
  return (
    <motion.section
      id={Pages.AboutMe}
      onViewportEnter={() => setCurrentPage(Pages.AboutMe)}
      className="relative px-5 sm:px-10 py-32 sm:py-44"
    >
      <div className="grid grid-cols-12 gap-4 mb-20">
        <div className="col-span-12 md:col-span-6 flex items-baseline gap-3">
          <span className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#1a1812]/60">
            01 / About
          </span>
          <span className="h-px w-10 bg-[#1a1812]/30" />
          <span className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#1a1812]/60">
            Background
          </span>
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="font-display tracking-[-0.03em] leading-[0.92] text-[clamp(2.75rem,9vw,8rem)] text-[#1a1812] relative z-20 mb-20 max-w-[18ch]"
      >
        Code as craft, design as care.
      </motion.h2>

      <div className="grid grid-cols-12 gap-x-4 gap-y-16">
        <div className="col-span-12 md:col-span-5 md:col-start-2 space-y-6 font-display text-xl sm:text-2xl leading-[1.35] text-[#1a1812]">
          <p>
            I'm a Frontend Developer from Myanmar, currently based in Bangkok,
            Thailand. I turn ideas into elegant, user-centric digital
            experiences.
          </p>
          <p className="text-[#1a1812]/80">
            With expertise in React, Next.js, Vue.js, and TypeScript, I build
            scalable applications that combine beautiful design with robust
            functionality.
          </p>
          <p className="font-editorial not-italic text-sm uppercase tracking-[0.3em] text-[#1a1812]/60 pt-4">
            "Make it work, make it right, make it fast."
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 md:col-start-9">
          <div className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#1a1812]/60 mb-6">
            Tech Stack
          </div>
          <ul className="grid grid-cols-2 gap-y-3">
            {techStackData.map((tech, i) => (
              <motion.li
                key={tech.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="flex items-center gap-3 text-[#1a1812]"
              >
                <tech.Icon className="text-lg opacity-70" />
                <span className="font-display text-base">{tech.text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-32">
        <div className="col-span-12 md:col-span-5 md:col-start-2">
          <div className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#1a1812]/60 mb-8">
            Experience
          </div>
          <ul className="divide-y divide-[#1a1812]/15 border-y border-[#1a1812]/15">
            {experience.map((exp) => (
              <li
                key={exp.role}
                className="py-6 flex justify-between items-baseline gap-6"
              >
                <div>
                  <div className="font-display text-xl sm:text-2xl leading-tight">
                    {exp.role}
                  </div>
                  <div className="font-editorial text-[10px] uppercase tracking-[0.3em] text-[#1a1812]/60 mt-2">
                    {exp.company}
                  </div>
                </div>
                <span className="font-editorial text-[10px] uppercase tracking-[0.3em] text-[#1a1812]/70 shrink-0">
                  {exp.period}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 md:col-span-5 md:col-start-8">
          <div className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#1a1812]/60 mb-8">
            Education
          </div>
          <ul className="divide-y divide-[#1a1812]/15 border-y border-[#1a1812]/15">
            {education.map((edu) => (
              <li
                key={edu.degree}
                className="py-6 flex justify-between items-baseline gap-6"
              >
                <div>
                  <div className="font-display text-xl sm:text-2xl leading-tight">
                    {edu.degree}
                  </div>
                  <div className="font-editorial text-[10px] uppercase tracking-[0.3em] text-[#1a1812]/60 mt-2">
                    {edu.institution}
                  </div>
                </div>
                <span className="font-editorial text-[10px] uppercase tracking-[0.3em] text-[#1a1812]/70 shrink-0">
                  {edu.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
