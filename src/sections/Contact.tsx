import { motion } from "framer-motion";
import { Pages } from "../shared";
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

type Props = {
  setCurrentPage: (value: Pages) => void;
};

export default function Contact({ setCurrentPage }: Props) {
  return (
    <section id={Pages.Contact} className="py-20 px-6 bg-gray-800/30">
      <motion.div
        className="max-w-4xl mx-auto"
        onViewportEnter={() => setCurrentPage(Pages.Contact)}
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
            <span className="text-blue-400">#</span>Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Feel free to reach out if you'd like to work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm currently based in Bangkok, Thailand, and available for
                frontend development opportunities. Whether you have a project
                in mind or just want to chat about technology, I'd love to hear
                from you.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.02 }}
              >
                <FiMail className="text-blue-400 text-xl" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:khantdev21@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    khantdev21@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.02 }}
              >
                <FiMapPin className="text-blue-400 text-xl" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Bangkok, Thailand</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-gray-400 mb-4">Find me on</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/khant21699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md">
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto">
                    <FiMail className="text-gray-900 text-2xl" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Ready to start a project?
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Send me an email and let's discuss your ideas
                    </p>
                  </div>

                  <a
                    href="mailto:khantdev21@gmail.com"
                    className="inline-block w-full py-3 px-6 bg-blue-400 text-gray-900 font-medium rounded-lg hover:bg-blue-500 transition-colors duration-300"
                  >
                    Send Email
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-20 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © 2024 Khant. Built with React & TypeScript
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
