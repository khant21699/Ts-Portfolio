import React from "react";
import { MdWork } from "react-icons/md";

type ExperienceItemProps = {
  text: string;
};

const ExperienceItem = ({ text }: ExperienceItemProps) => {
  return (
    <li className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors duration-200">
      <MdWork className="w-5 h-5 text-primary" />
      <span>{text}</span>
    </li>
  );
};

export default ExperienceItem;
