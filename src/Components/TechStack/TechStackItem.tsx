import { IconType } from "react-icons";

type TechStackItemProps = {
  text: string;
  Icon: IconType;
};

const TechStackItem = ({ text, Icon }: TechStackItemProps) => {
  return (
    <li className="w-fit h-fit">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors duration-200">
        <Icon className="text-primary text-xl" />
        <span className="text-sm font-medium ">{text}</span>
      </div>
    </li>
  );
};

export default TechStackItem;
