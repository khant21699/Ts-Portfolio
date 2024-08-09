import { motion } from "framer-motion";
import { Pages } from "../shared";
import BG from "../assets/BG.png";
import Dots from "../assets/Dots.png";

type Props = {
  setCurrentPage: (value: Pages) => void;
};

export default function AboutMe({ setCurrentPage }: Props) {
  return (
    <section
      id={Pages.AboutMe}
      className="min-h-[100vh] w-full flex flex-col items-center pt-[150px] mb:mt-0 mb-10"
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
          className="h-auto mb:flex gap-5"
          onViewportEnter={() => setCurrentPage(Pages.AboutMe)}
        >
          {/* text */}
          <div className=" h-auto mb-10 mb:mb-0 mb:min-h-[60vh] text-secondary font-firaCode text-[20px] w-full mb:w-1/2  relative">
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
              I am a Frontend developer from Myanmar specialized in React.js and
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

          <div className=" h-auto min-h-[60vh] w-full mb:w-1/2 flex flex-wrap justify-center gap-5">
            {/* skills */}
            <div className="  border-secondary border-[1px] w-[250px] flex flex-col">
              <div className=" h-[50px] border-b-[1px] border-secondary flex justify-center items-center font-firaCode text-secondary">
                <h3>Skills</h3>
              </div>
              <div className=" h-[calc(100%-50px)] min-h-[200px]">
                <ul className="w-full h-full list-none text-secondary font-firaCode flex flex-col gap-2 px-3">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Javascript</li>
                  <li>Typescript</li>
                  <li>React.js</li>
                  <li>Vue.js</li>
                  <li>Tailwind Css</li>
                  <li>Redux</li>
                </ul>
              </div>
            </div>
            {/* Edu */}
            <div className="  border-secondary border-[1px] w-[250px] flex flex-col">
              <div className=" h-[50px] border-b-[1px] border-secondary flex justify-center items-center font-firaCode text-secondary">
                <h3>Education</h3>
              </div>
              <div className=" h-[calc(100%-50px)] min-h-[200px]">
                <ul className="w-full h-full list-none text-secondary font-firaCode flex flex-col gap-2 px-3">
                  <li>HND in Software Engnieering</li>
                  <li>
                    BSc(Hons) in Computing (University of Gloucestershire)
                  </li>
                </ul>
              </div>
            </div>
            {/* Exp */}
            <div className="  border-secondary border-[1px] w-[250px] flex flex-col">
              <div className=" h-[50px] border-b-[1px] border-secondary flex justify-center items-center font-firaCode text-secondary">
                <h3>Experiences</h3>
              </div>
              <div className=" h-[calc(100%-50px)] min-h-[200px]">
                <ul className="w-full h-full list-none text-secondary font-firaCode flex flex-col gap-2 px-3">
                  <li>
                    Junior Developer at Akiya Research <br />
                    (2023,Jan - 2024,Jan)
                  </li>
                  <li>
                    Frontend-Developer at{" "}
                    <a href="pleasuredomes.ai">pleasuredomes.ai</a> <br />
                    (2024, Apr - Present)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
