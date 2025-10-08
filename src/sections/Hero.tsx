import { motion } from "framer-motion";
import { Pages } from "../shared";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

type Props = {
  setCurrentPage: (value: Pages) => void;
};

export default function Hero({ setCurrentPage }: Props) {
  const scrollToContact = () => {
    const element = document.getElementById(Pages.Contact);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id={Pages.Home}
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-black grid-pattern"
    >
      {/* Subtle accent decorations */}
      <div className="absolute top-1/4 right-0 w-px h-64 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-px h-64 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 right-20 w-3 h-3 bg-cyan-500 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-32 w-2 h-2 bg-purple-500 rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto w-full relative z-10"
        onViewportEnter={() => setCurrentPage(Pages.Home)}
      >
        <div className="text-center space-y-12">
          {/* Main Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-5 py-2 border border-cyan-500/30 rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
                Frontend Developer
              </p>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm <span className="text-cyan-400">Khant</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Building exceptional digital experiences with React, Next.js,
              Vue.js & TypeScript
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Get In Touch
            </button>

            <a
              href="mailto:khantdev21@gmail.com"
              className="px-8 py-4 border border-cyan-500/50 hover:border-cyan-500 text-cyan-400 hover:text-cyan-300 font-semibold rounded-full transition-all hover:scale-105"
            >
              Send Email
            </a>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="border border-cyan-500/20 rounded-3xl p-6 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all">
              <p className="text-4xl font-bold text-white mb-2">2+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                Years Experience
              </p>
            </div>

            <div className="border border-purple-500/20 rounded-3xl p-6 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all">
              <p className="text-4xl font-bold text-white mb-2">Bangkok</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                Based In Thailand
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 justify-center pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="https://github.com/khant21699"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:khantdev21@gmail.com"
              className="w-12 h-12 rounded-full border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
            >
              <FiMail size={20} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
