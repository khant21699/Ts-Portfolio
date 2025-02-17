import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiRedux } from "react-icons/si";
import { IconType } from "react-icons";

export interface TechStackItem {
  text: string;
  Icon: IconType;
}

export const techStackData: TechStackItem[] = [
  { text: "HTML", Icon: FaHtml5 },
  { text: "CSS", Icon: FaCss3Alt },
  { text: "JavaScript", Icon: FaJs },
  { text: "TypeScript", Icon: SiTypescript },
  { text: "Bootstrap", Icon: FaBootstrap },
  { text: "Tailwind CSS", Icon: SiTailwindcss },
  { text: "React.js", Icon: FaReact },
  { text: "Vue.js", Icon: FaVuejs },
  { text: "Redux", Icon: SiRedux },
  { text: "Git", Icon: FaGitAlt },
  { text: "Figma", Icon: FaFigma },
];
