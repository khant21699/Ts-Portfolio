import { motion } from "framer-motion";
import Avatar from "../assets/Avatar.png";
import BG from "../assets/BG.png";
import Dots from "../assets/Dots.png";
import { Pages } from "../shared";

type Props = {
  setCurrentPage: (value: Pages) => void;
};

export default function HomePage({ setCurrentPage }: Props) {
  return (
    <motion.section id={Pages.Home} className=" pt-[150px] h-auto w-full">
      <motion.div onViewportEnter={() => setCurrentPage(Pages.Home)}>
        {/* banner */}
        <div className="w-full h-auto gap-5 max-md:flex-col flex">
          {/* text */}
          <div className=" flex-1 text-white text-[30px] font-firaCode">
            <div className="flex flex-col justify-center h-full">
              <p>
                Hello I'm <span className=" text-primary">Khant</span>
              </p>
              <p className=" mt-[30px]">
                I'm a <span className=" text-primary">Frontend Developer</span>
              </p>
              <p className=" text-secondary text-[20px] mt-[50px]">
                I craft responsive and interactive websites for all platforms.
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const contact = document.getElementById(Pages.Contact);
                  contact?.scrollIntoView({ behavior: "smooth" });
                }}
                className=" border-primary border-[1px] p-[10px] text-[20px] mt-[30px] w-[200px] after:absolute relative after:w-0 after:h-full hover:after:w-full  after:transition-all after:bg-primary after:left-0 after:top-0 hover:text-bg"
              >
                <span className="relative z-20"> Contact ME!!</span>
              </button>
            </div>
          </div>

          {/* photo */}
          <div className=" w-96 max-md:w-full h-auto">
            <img
              src={BG}
              alt=""
              className="w-2/5 h-2/5 hidden absolute z-1 mb:top-[70px] top-[-30px] left-0"
            />
            <img
              className="mb:w-full h-auto z-3 relative  max-md:w-full object-cover object-top"
              src={Avatar}
              alt=""
            />
            <img
              src={Dots}
              alt=""
              className="w-1/5 h-1/5 absolute z-1 top-[60%] right-[20px]"
            />
          </div>
        </div>
        {/* quote */}
        <div className="w-full flex items-center justify-center min-h-[20vh] mt-[30px]">
          <div className=" text-[35px] text-primary font-firaCode border-secondary border-[1px] p-[20px]">
            "Make it work, make it right, make it fast"
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
