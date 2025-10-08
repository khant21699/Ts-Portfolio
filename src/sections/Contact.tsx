import { motion } from "framer-motion";
import { Pages } from "../shared";
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiClock,
} from "react-icons/fi";

type Props = {
  setCurrentPage: (value: Pages) => void;
};

export default function Contact({ setCurrentPage }: Props) {
  return (
    <section
      id={Pages.Contact}
      className="py-32 px-6 relative overflow-hidden bg-[#0a0a0f]"
    >
      {/* Decorative elements */}
      <div className="absolute top-32 right-20 w-32 h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />
      <div className="absolute bottom-32 left-20 w-32 h-px bg-gradient-to-l from-purple-500/20 to-transparent" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-40 right-1/4 w-3 h-3 bg-purple-500 rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        onViewportEnter={() => setCurrentPage(Pages.Contact)}
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Let's Create Together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm currently available for freelance work and full-time
              opportunities. Let's discuss how we can work together to bring
              your ideas to life.
            </p>

            {/* Email Card */}
            <div className="border border-cyan-500/30 rounded-3xl p-6 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-colors">
                  <FiMail className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:khantdev21@gmail.com"
                    className="text-white hover:text-cyan-400 transition-colors font-medium"
                  >
                    khantdev21@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="border border-purple-500/30 rounded-3xl p-6 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <p className="text-white font-medium">Bangkok, Thailand</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="border border-emerald-500/30 rounded-3xl p-6 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <FiClock className="text-emerald-400" size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <p className="text-sm text-gray-400">Status</p>
                  </div>
                  <p className="text-white font-medium">
                    Available for new projects
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Response time: ~24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-400 mb-4">Connect with me</p>
              <div className="flex gap-4">
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
                  className="w-12 h-12 rounded-full border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all"
                >
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md">
              <div className="border border-cyan-500/30 rounded-3xl p-12 text-center space-y-8 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all">
                <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <FiMail className="text-cyan-400 text-3xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Ready to Start?
                  </h3>
                  <p className="text-gray-400">
                    Let's discuss your project and bring your vision to reality
                  </p>
                </div>

                <a
                  href="mailto:khantdev21@gmail.com"
                  className="block w-full py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  Send Me an Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-32 pt-12 border-t border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500">
            © 2024 Khant. Designed & Built with React & TypeScript
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
