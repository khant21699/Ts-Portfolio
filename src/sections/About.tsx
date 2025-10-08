import { motion } from "framer-motion";
import { Pages } from "../shared";
import { techStackData } from "../data/techStackData";

type Props = {
  setCurrentPage: (value: Pages) => void;
};

export default function About({ setCurrentPage }: Props) {
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
      company: "CONCEPTS UNLIMITED",
      period: "2024 - Present",
    },
    {
      role: "Junior Developer",
      company: "Akiya Research",
      period: "2023 - 2024",
    },
  ];

  return (
    <section
      id={Pages.AboutMe}
      className="py-32 px-6 relative overflow-hidden bg-[#0a0a0f]"
    >
      {/* Decorative elements */}
      <div className="absolute top-32 right-20 w-32 h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />
      <div className="absolute bottom-32 left-20 w-32 h-px bg-gradient-to-l from-purple-500/20 to-transparent" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        onViewportEnter={() => setCurrentPage(Pages.AboutMe)}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 border border-cyan-500/30 rounded-full mb-4 text-cyan-400 font-mono text-sm uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Passionate About Creating
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left: About Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate{" "}
              <span className="text-white font-semibold">
                Frontend Developer
              </span>{" "}
              from Myanmar, currently based in Bangkok, Thailand. I transform
              ideas into elegant, user-centric digital experiences.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in{" "}
              <span className="text-cyan-400 font-semibold">
                React.js, Next.js, Vue.js
              </span>
              , and{" "}
              <span className="text-cyan-400 font-semibold">TypeScript</span>, I
              create scalable applications that combine beautiful design with
              robust functionality.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in continuous learning and staying ahead of industry
              trends. Every project is an opportunity to push boundaries and
              deliver exceptional results.
            </p>

            {/* Quote */}
            <div className="border border-cyan-500/30 rounded-3xl p-6 mt-8 bg-cyan-500/5">
              <p className="text-cyan-300 font-mono italic">
                "Make it work, make it right, make it fast"
              </p>
            </div>
          </motion.div>

          {/* Right: Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>
            <div className="grid grid-cols-3 gap-4">
              {techStackData.map((tech, index) => (
                <motion.div
                  key={tech.text}
                  className="border border-cyan-500/20 rounded-2xl p-5 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <tech.Icon className="text-3xl text-gray-400 group-hover:text-cyan-400 transition-colors mb-3 mx-auto" />
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 text-center transition-colors">
                    {tech.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-white font-semibold">{edu.degree}</p>
                    <span className="text-cyan-400 text-sm font-mono">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-white font-semibold">{exp.role}</p>
                    <span className="text-purple-400 text-sm font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{exp.company}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
