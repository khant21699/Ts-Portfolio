import { motion } from "framer-motion";
import { Pages } from "../shared";
import { techStackData } from "../data/techStackData";

type Props = {
  setCurrentPage: (value: Pages) => void;
};

export default function About({ setCurrentPage }: Props) {
  return (
    <section id={Pages.AboutMe} className="py-20 px-6 bg-gray-800/30">
      <motion.div
        className="max-w-6xl mx-auto"
        onViewportEnter={() => setCurrentPage(Pages.AboutMe)}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-blue-400">#</span>About Me
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* About Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Hello, I'm Khant
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I am a Frontend developer from Myanmar, currently based in
              Bangkok, Thailand, specialized in React.js, Next.js, Vue.js and
              TypeScript. I develop responsive and interactive websites from
              scratch and raise them into user-friendly web experiences.
            </p>

            <p className="text-gray-300 leading-relaxed">
              With a passion for frontend development, I aim to deliver
              high-quality websites that go beyond expectations. I stay updated
              with the latest industry trends to create visually attractive and
              innovative web solutions.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Tech Stack
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {techStackData.map((tech, index) => (
                  <motion.div
                    key={tech.text}
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <tech.Icon className="text-2xl text-blue-400 mb-2" />
                    <span className="text-sm text-gray-300 text-center">
                      {tech.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Education
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-400">
                <p className="text-gray-300">BSc(Hons) in Computing</p>
                <p className="text-sm text-gray-400">
                  University of Gloucestershire
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-400">
                <p className="text-gray-300">
                  Higher National Diploma in Software Engineering
                </p>
                <p className="text-sm text-gray-400">Pearson</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-400">
                <p className="text-gray-300">
                  META Frontend Developer Professional Certificate
                </p>
                <p className="text-sm text-gray-400">Coursera</p>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Experience
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-400">
                <p className="text-gray-300 font-medium">Frontend Developer</p>
                <p className="text-sm text-gray-400">
                  pleasuredomes.ai • Apr 2024 - Present
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-400">
                <p className="text-gray-300 font-medium">Junior Developer</p>
                <p className="text-sm text-gray-400">
                  Akiya Research • Jan 2023 - Jan 2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
