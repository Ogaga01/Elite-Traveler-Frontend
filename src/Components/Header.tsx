import { FC } from "react";
import { AiOutlineStar } from "react-icons/ai";

const Header: FC = () => {
  return (
    <header className="flex h-1/6 bg-slate-600 md:mb-28 text-3xl items-center justify-center text-yellow-300">
      <span>Elite</span>
      <span>
        <AiOutlineStar />
      </span>
      {"\n"}
      <span>Travelers</span>
    </header>
  );
};

export default Header;
