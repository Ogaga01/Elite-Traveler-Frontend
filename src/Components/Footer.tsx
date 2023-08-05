import { FC } from "react";
import { Link } from "react-router-dom";
import {
  TbBrandGithubFilled,
  TbBrandLinkedin,
  TbBrandTwitterFilled,
} from "react-icons/tb";
import { PiMediumLogoFill } from "react-icons/pi";

const Footer: FC = () => {
  const iconClass = "md:text-2xl lg:text-3xl xl:text-4xl text-yellow-300";
  return (
    <footer className="bottom-0 w-full bg-slate-600 h-20">
      <ul className="flex items-center justify-between mx-auto h-full w-5/6">
        <li>
          <Link target="blank" to="https://github.com/Ogaga01">
            <TbBrandGithubFilled className={iconClass} />
          </Link>
        </li>
        <li>
          <Link target="blank" to="https://www.linkedin.com/in/ogaga-iyara/">
            <TbBrandLinkedin className={iconClass} />
          </Link>
        </li>
        <li>
          <Link target="blank" to="https://twitter.com/i_ogaga_n">
            <TbBrandTwitterFilled className={iconClass} />
          </Link>
        </li>
        <li>
          <Link target="blank" to="https://medium.com/@iyaraogaga69">
            <PiMediumLogoFill className={iconClass} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
