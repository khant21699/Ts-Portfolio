import { motion } from "framer-motion";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";

type Props = {
  title: string;
  techs: Array<string>;
  imgSrc?: string;
  live?: string;
  git?: string;
};

export default function WorksCards({ title, techs, imgSrc, live, git }: Props) {
  const openLinkInNewTab = (cond: string) => {
    try {
      if (cond === "git") {
        window.open(git, "_blank");
      } else {
        window.open(live, "_blank");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <motion.div
      className=" mb:w-1/4 w-full border-secondary border-[1px]"
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.7 }}
      variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}
    >
      <div className=" h-[200px] border-secondary border-b-[1px]">
        {imgSrc && (
          <img className=" object-cover w-full h-full" src={imgSrc} alt="" />
        )}
      </div>
      <div className=" h-[230px] ">
        <h2 className=" text-center flex flex-wrap gap-2 py-1 justify-center items-center min-h-[100px] text-[12px] border-secondary border-b-[1px] text-primary ">
          {techs.map((t) => {
            return <p className="p-3 border-secondary border-[1px]">{t}</p>;
          })}
        </h2>
        <div className=" h-[130px] flex flex-col justify-around w-full overflow-hidden">
          <h1 className="text-primary text-[23px] px-5 py-1 m-0 w-full overflow-hidden text-center">
            {title}
          </h1>
          <div className=" w-full flex  justify-around ">
            {live !== "" && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  openLinkInNewTab("live");
                }}
                className=" flex justify-center items-center border-primary border-[1px] gap-1  py-2 px-5 cursor-pointer"
              >
                <CgMediaLive color="#abb2bf" />
                Live
              </button>
            )}
            <button
              onClick={(e) => {
                e.preventDefault();
                openLinkInNewTab("git");
              }}
              className=" flex justify-center items-center border-primary border-[1px] gap-1  py-2 px-5 cursor-pointer"
            >
              <AiFillGithub color="#abb2bf" />
              GitHub
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
