import React from "react";
import { FaGraduationCap } from "react-icons/fa";

type EducationItemProps = {
  text: string;
};

const EducationItem = ({ text }: EducationItemProps) => {
  return (
    <li className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors duration-200">
      <FaGraduationCap className="w-5 h-5 text-primary" />
      <span>{text}</span>
    </li>
  );
};

export default EducationItem;
