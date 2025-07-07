import profile from "../../assets/profile-hero.png";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Hero = () => {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const typingAnimation: Variants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const items = [
    { icon: "💡", text: "Ideas" },
    { icon: "🎯", text: "Concepts" },
    { icon: "🎨", text: "Designs" },
    { icon: "⚡", text: "Code" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen max-w-screen-lg mx-auto max-md:pt-[150px] flex items-center justify-center w-full *:pointer-events-none bg-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="w-full relative h-auto gap-8 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex-1 text-white"
          >
            <div className="flex flex-col gap-7">
              <div className="hero-text space-y-4">
                <motion.h1
                  custom={1}
                  variants={textVariants}
                  className="text-4xl md:text-5xl font-bold flex items-center gap-3"
                >
                  <span>Shaping</span>
                  <div className="relative overflow-hidden h-12">
                    <motion.div
                      className="flex flex-col"
                      initial="hidden"
                      animate="visible"
                    >
                      {items.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 text-secondary"
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: index * 1.5 }}
                        >
                          <motion.div
                            className="flex items-center gap-3"
                            variants={typingAnimation}
                          >
                            <span className="text-2xl">{item.icon}</span>
                            <span>{item.text}</span>
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.h1>
                <motion.h1
                  custom={2}
                  variants={textVariants}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
                >
                  into Real Projects
                </motion.h1>
                <motion.h1
                  custom={3}
                  variants={textVariants}
                  className="text-4xl md:text-5xl font-bold"
                >
                  that Deliver Results
                </motion.h1>
              </div>
              <motion.p
                custom={4}
                variants={textVariants}
                className="text-white-50 md:text-xl relative z-10 pointer-events-none"
              >
                Hi, I'm{" "}
                <motion.span
                  className="text-secondary text-shadow-2xs text-shadow-primary inline-block font-extrabold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Khant
                </motion.span>
                , a developer based in Myanmar with a passion for code.
              </motion.p>
              <motion.a
                href="#work"
                custom={5}
                variants={textVariants}
                className="group relative inline-flex items-center justify-center px-8 py-3 font-bold tracking-wide text-white transition-all duration-200 ease-in-out transform border-2 border-accent hover:bg-accent hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary w-fit pointer-events-auto"
              >
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2"
                >
                  See My Work
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="max-w-96 mx-auto max-md:w-full h-auto"
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative z-10 overflow-hidden bubble border border-secondary">
                <motion.img
                  initial={{ filter: "blur(10px)" }}
                  animate={{ filter: "blur(0px)" }}
                  transition={{ duration: 1 }}
                  className="w-full h-auto object-cover object-top shadow-2xl"
                  src={profile}
                  alt="Profile"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="w-full flex items-center justify-center mt-20"
        >
          <div className="text-2xl md:text-3xl text-secondary font-mono border-2 border-secondary p-6 rounded-lg backdrop-blur-sm bg-opacity-10 bg-primary">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              "Make it work, make it right, make it fast"
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
