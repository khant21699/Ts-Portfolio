import React from "react";
import { Pages } from "../shared";
import { MdOutlineMailOutline } from "react-icons/md";
import EmailGraphic from "../assets/EmailGraphic.svg";
import { motion } from "framer-motion";

type Props = {
  setCurrentPage: (value: Pages) => void;
};

export default function Contact({ setCurrentPage }: Props) {
  return (
    <section id={Pages.Contact} className=" min-h-[100vh] pt-[200px] mb:pb-5 ">
      <div className="mb-16 flex items-center gap-10">
        <h3 className="text-[20px] text-white font-firaCode">
          <span className="text-primary">#</span>Contact
        </h3>
        <div className="w-3/5 h-[1px] bg-primary"></div>
      </div>
      <motion.div
        className=" w-full h-full font-firaCode text-secondary"
        onViewportEnter={() => {
          setCurrentPage(Pages.Contact);
        }}
        viewport={{ amount: 0.9 }}
      >
        <h2>
          Feel free to send an email to{" "}
          <a
            className=" text-primary text-[20px] cursor-pointer"
            href="mailto:khant21699@gmail.com"
          >
            khant21699@hotmail.com
          </a>
        </h2>
        <div className="mt-5 border-primary border-[2px] p-1 max-w-full w-[700px] cursor-pointer ">
          <a href="mailto:khant21699@gmail.com">
            <img className=" w-full" src={EmailGraphic} alt="" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
