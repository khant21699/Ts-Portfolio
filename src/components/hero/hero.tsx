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

  const floatingAnimation: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const letterAnimation: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants: Variants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen max-w-screen-lg mx-auto max-md:pt-[150px] flex items-center justify-center w-full *:pointer-events-none bg-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="w-full relative h-auto gap-8 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left side - Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-white"
          >
            <div className="flex flex-col justify-center h-full space-y-6">
              <motion.h1
                custom={1}
                variants={textVariants}
                className="text-4xl md:text-5xl font-bold"
              >
                Hello I'm{" "}
                <motion.span
                  className="text-secondary text-shadow-2xs text-shadow-primary inline-block"
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                >
                  Khant
                </motion.span>
              </motion.h1>
              <motion.h2
                custom={2}
                variants={textVariants}
                className="text-3xl md:text-4xl font-semibold"
              >
                I'm a{" "}
                <motion.span
                  className="text-secondary text-shadow-2xs text-shadow-primary"
                  initial="hidden"
                  animate="visible"
                  variants={letterAnimation}
                >
                  Frontend Developer
                </motion.span>
              </motion.h2>
              <motion.p
                custom={3}
                variants={textVariants}
                className="text-secondary text-xl md:text-2xl max-w-xl"
              >
                I craft responsive and interactive websites for all platforms.
              </motion.p>
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="group relative cursor-pointer inline-flex items-center pointer-events-auto justify-center px-8 py-3 font-bold tracking-wide text-white transition-all duration-200 ease-in-out transform border-2 border-accent hover:bg-accent hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary w-fit"
              >
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Contact ME!!
                </motion.span>
              </motion.button>
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
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
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
