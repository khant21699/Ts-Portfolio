import { motion } from "framer-motion";
import { Pages } from "../shared";
import BG from "../assets/BG.png";
import Dots from "../assets/Dots.png";
import Capsule from "../Components/capsule/Capsule";
import { techStackData } from "../data/techStackData";
import TechStackItem from "../Components/TechStack/TechStackItem";
import EducationItem from "../Components/Education/EducationItem";
import ExperienceItem from "../Components/Experience/ExperienceItem";

type Props = {
  setCurrentPage: (value: Pages) => void;
};

export default function AboutMe({ setCurrentPage }: Props) {
  return (
    <section
      id={Pages.AboutMe}
      className=" w-full flex flex-col items-center pt-[150px] mb:mt-0 mb-10"
    >
      <div className="w-full  gap-10">
        {/* header */}
        <div className="mb-16 flex items-center gap-10">
          <h3 className="text-[20px] text-white font-firaCode">
            <span className="text-primary">#</span>AboutMe
          </h3>
          <div className="w-3/5 h-[1px] bg-primary"></div>
        </div>
        {/* content */}
        <motion.div
          className="h-auto flex flex-col gap-5"
          onViewportEnter={() => setCurrentPage(Pages.AboutMe)}
        >
          {/* text */}
          <div className=" h-auto mb-10 mb:mb-0 text-white font-firaCode text-[20px] w-full relative">
            <img
              className=" absolute w-[100px] h-[100px] bottom-0 z-1] hidden"
              src={BG}
              alt=""
            />
            <img
              className=" absolute w-[100px] h-[100px] bottom-0 z-1 hidden mb:block right-0"
              src={Dots}
              alt=""
            />
            <motion.p
              className=" mb-5 z-2"
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Hello, I'm Khant
            </motion.p>
            <motion.p
              className=" leading-8"
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              I am a Frontend developer from Myanmar, currently based in
              Bangkok, Thailand, specialized in React.js, Next.js, Vue.js and
              typescript. I develop responsive and interactive websites from
              scratch and raise them into user-firendly web experiences.
            </motion.p>
            <motion.p
              className=" leading-8 mt-5"
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              With a passion for frontend development, I aim to deliver
              high-quality websites that go beyond expectations. I stay updated
              with the latest industry trends to create visually attractive and
              innovative web solutions.
            </motion.p>
          </div>

          <motion.div
            className="w-full flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-primary font-firaCode text-[20px]">
              My Tech Stack
            </h2>
            <ul className="w-full h-full list-none text-white font-firaCode flex flex-wrap gap-2 ">
              {techStackData.map((tech, index) => (
                <motion.div
                  key={tech.text}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <TechStackItem text={tech.text} Icon={tech.Icon} />
                </motion.div>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="w-full flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-primary font-firaCode text-[20px]">
              Education
            </h2>
            <ul className="w-full h-full list-none text-white font-firaCode flex flex-wrap gap-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <EducationItem text="BSc(Hons) in Computing (University of Gloucestershire)" />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.2 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <EducationItem text="Higher National Diploma in Software Engnieering (Pearson)" />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <EducationItem text="META Frontend Developer Professional Certificate (Coursera)" />
              </motion.div>
            </ul>
          </motion.div>

          <motion.div
            className="w-full flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-primary font-firaCode text-[20px]">
              Experience
            </h2>
            <ul className="w-full h-full list-none text-white font-firaCode flex flex-wrap gap-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ExperienceItem text="Junior Developer at Akiya Research (2023,Jan - 2024,Jan)" />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.2 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ExperienceItem text="Frontend-Developer at pleasuredomes.ai (2024, Apr - Present)" />
              </motion.div>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
