import { motion } from "framer-motion";
import { Pages } from "../shared";
import Avatar from "../assets/Avatar.png";

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
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <motion.div
        className="max-w-6xl mx-auto w-full"
        onViewportEnter={() => setCurrentPage(Pages.Home)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hello, I'm <span className="text-blue-400">Khant</span>
              </motion.h1>

              <motion.h2
                className="text-3xl lg:text-4xl font-semibold text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Frontend Developer
              </motion.h2>

              <motion.p
                className="text-lg text-gray-400 leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                I craft responsive and interactive websites for all platforms.
                Based in Bangkok, Thailand.
              </motion.p>
            </div>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-medium rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl">
                <img
                  src={Avatar}
                  alt="Khant - Frontend Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-4 border border-blue-400/20 rounded-2xl -z-10"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-2 border-blue-400 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <blockquote className="text-xl lg:text-2xl font-mono text-blue-400 border-l-4 border-blue-400 pl-6 max-w-2xl mx-auto">
            "Make it work, make it right, make it fast"
          </blockquote>
        </motion.div>
      </motion.div>
    </section>
  );
}
