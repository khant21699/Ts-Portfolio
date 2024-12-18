import { motion } from "framer-motion";
import { Pages } from "../shared";
import BG from "../assets/BG.png";
import Dots from "../assets/Dots.png";
import Capsule from "../Components/capsule/Capsule";

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

          <div className=" h-auto w-full grid grid-cols-3 max-md:grid-cols-1 gap-5">
            {/* skills */}
            <div className="  border-primary border-[1px] w-full  pb-2 flex flex-col">
              <div className=" h-[50px] border-b-[1px] border-primary flex justify-center items-center font-firaCode text-white">
                <h3>Skills</h3>
              </div>
              <div className=" flex-1 pt-2 min-h-[200px]">
                <ul className="w-full h-full list-none text-white font-firaCode flex flex-wrap gap-2 px-3">
                  <li className="w-fit h-fit">
                    <Capsule text="Html" />
                  </li>
                  <li className="w-fit h-fit">
                    <Capsule text="Css" />
                  </li>
                  <li className="w-fit h-fit">
                    <Capsule text="Javascript" />
                  </li>
                  <li className="w-fit h-fit">
                    <Capsule text="Typescript" />
                  </li>
                  <li className="w-fit h-fit">
                    <Capsule text="React.js" />
                  </li>
                  <li className="w-fit h-fit">
                    <Capsule text="Vue.js" />
                  </li>
                  <li className="w-fit h-fit">
                    <Capsule text="Tailwind Css" />
                  </li>
                  <li className="w-fit h-fit">
                    <Capsule text="Redux" />
                  </li>
                </ul>
              </div>
            </div>
            {/* Edu */}
            <div className="  border-primary border-[1px] w-full  pb-2 flex flex-col">
              <div className=" h-[50px] border-b-[1px] border-primary   flex justify-center items-center font-firaCode text-white">
                <h3>Education</h3>
              </div>
              <div className=" flex-1 pt-2 min-h-[200px]">
                <ul className="w-full h-full list-none text-white font-firaCode flex flex-wrap  gap-2 px-3">
                  <li className="w-fit h-fit">
                    <Capsule text="HND in Software Engnieering" />
                  </li>
                  <li className="w-fit h-fit">
                    <Capsule text="BSc(Hons) in Computing (University of Gloucestershire)" />
                  </li>
                </ul>
              </div>
            </div>
            {/* Exp */}
            <div className="  border-primary border-[1px] w-full  pb-2 flex flex-col">
              <div className=" h-[50px] border-b-[1px] border-primary flex justify-center items-center font-firaCode text-white">
                <h3>Experiences</h3>
              </div>
              <div className=" flex-1 pt-2 min-h-[200px]">
                <ul className="w-full h-full list-none text-white font-firaCode flex flex-col gap-2 px-3">
                  <li className="w-fit h-fit">
                    <Capsule text="Junior Developer at Akiya Research (2023,Jan - 2024,Jan)" />
                  </li>
                  <li className="w-fit h-fit">
                    <Capsule text="Frontend-Developer at pleasuredomes.ai (2024, Apr - Present)" />
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
