import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiRedux,
  SiGit,
  SiFigma,
} from "react-icons/si";
import {
  FaGraduationCap,
  FaCertificate,
  FaFileAlt,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const techStackItems = [
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen max-w-screen-lg mx-auto px-4 py-20 bg-transparent"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-16"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            #<span className="text-secondary">About Me</span>
          </h2>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        </motion.div>

        {/* Introduction */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Hello, I'm Khant
          </h3>
          <div className="space-y-4 text-white text-lg leading-relaxed">
            <p>
              I am a Frontend developer from Myanmar, currently based in
              Bangkok, Thailand, specialized in React.js, Next.js, Vue.js and
              TypeScript. I develop responsive and interactive websites from
              scratch and raise them into user-friendly web experiences.
            </p>
            <p>
              With a passion for frontend development, I aim to deliver
              high-quality websites that go beyond expectations. I stay updated
              with the latest industry trends to create visually attractive and
              innovative web solutions.
            </p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary">
            My Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStackItems.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-primary/40 backdrop-blur-sm border border-secondary/50 rounded-lg p-4 text-center hover:border-secondary transition-colors cursor-pointer"
                >
                  <IconComponent
                    className="text-3xl mb-2 mx-auto"
                    style={{ color: tech.color }}
                  />
                  <div className="text-white font-medium">{tech.name}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary">
            Education
          </h3>
          <div className="space-y-6">
            <motion.div
              variants={cardVariants}
              className="bg-primary/40 backdrop-blur-sm border border-secondary/50 rounded-lg p-6"
            >
              <div className="flex items-start space-x-4">
                <FaGraduationCap className="text-2xl text-secondary mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    BSc(Hons) in Computing (University of Gloucestershire)
                  </h4>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="bg-primary/40 backdrop-blur-sm border border-secondary/50 rounded-lg p-6"
            >
              <div className="flex items-start space-x-4">
                <FaCertificate className="text-2xl text-secondary mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Higher National Diploma in Software Engineering (Pearson)
                  </h4>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="bg-primary/40 backdrop-blur-sm border border-secondary/50 rounded-lg p-6"
            >
              <div className="flex items-start space-x-4">
                <FaFileAlt className="text-2xl text-secondary mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    META Frontend Developer Professional Certificate (Coursera)
                  </h4>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary">
            Experience
          </h3>
          <div className="space-y-6">
            <motion.div
              variants={cardVariants}
              className="bg-primary/40 backdrop-blur-sm border border-secondary/50 rounded-lg p-6"
            >
              <div className="flex items-start space-x-4">
                <FaBriefcase className="text-2xl text-secondary mt-1" />
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white">
                    Junior Developer at Akiya Research
                  </h4>
                  <p className="text-secondary font-medium">
                    (2023,Jan - 2024,Jan)
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="bg-primary/40 backdrop-blur-sm border border-secondary/50 rounded-lg p-6"
            >
              <div className="flex items-start space-x-4">
                <FaLaptopCode className="text-2xl text-secondary mt-1" />
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white">
                    Senior Frontend-Developer at pleasuredomes.ai
                  </h4>
                  <p className="text-secondary font-medium">
                    (2024, Apr - Present)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
