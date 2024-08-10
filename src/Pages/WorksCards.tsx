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
      className=" w-full hover:!-translate-y-2 transition-all border-secondary relative group aspect-[5/3] border-[1px]"
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.7 }}
      variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}
    >
      <img
        src={imgSrc}
        className=" w-full h-full object-cover absolute top-0 left-0"
        alt={imgSrc}
      />
      <div className=" w-full h-full flex justify-center pointer-events-none group-hover:pointer-events-auto items-center gap-4 text-center backdrop-blur-sm bg-bg bg-opacity-70 transition-opacity relative z-20 opacity-0 group-hover:opacity-100">
        <div className=" flex flex-col h-full w-full gap-2 md:gap-7 justify-center p-3">
          <p className=" text-xl md:text-2xl font-bold text-primary">{title}</p>
          <ul className=" flex gap-1 flex-wrap justify-center">
            {techs.map((t) => {
              return (
                <li className=" text-sm md:text-base p-2 border-secondary border">
                  {t}
                </li>
              );
            })}
          </ul>
          <div className=" flex justify-center gap-3 items-center">
            {live && (
              <button
                className=" flex text-base md:text-lg justify-center items-center gap-1 p-2 border-primary border"
                onClick={() => openLinkInNewTab("live")}
              >
                <CgMediaLive />
                <p>Live</p>
              </button>
            )}
            {git && (
              <button
                className=" flex text-base md:text-lg justify-center items-center gap-1 p-2 border-primary border"
                onClick={() => openLinkInNewTab("git")}
              >
                <AiFillGithub />
                <p>GitHub</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
