import { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineCar } from "react-icons/ai";
import { PiAirplaneTakeoff, PiMediumLogoFill } from "react-icons/pi";
import {
  TbReservedLine,
  TbBrandGithubFilled,
  TbBrandLinkedin,
  TbBrandTwitterFilled,
} from "react-icons/tb";

const Sidebar: FC = () => {
  return (
    <div className="h-screen hidden md:static left-0 md:block bg-blue-400 md:w-1/4 lg:w-1/5">
      <header>
        Elite
        <br />
        Travelers
      </header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cars">
              Cars <AiOutlineCar />
            </NavLink>
          </li>
          <li>
            <NavLink to="/airplanes">
              Airplanes <PiAirplaneTakeoff />
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations">
              Reservations <TbReservedLine />
            </NavLink>
          </li>
        </ul>
      </nav>
      <footer>
        <ul>
          <li>
            <Link target="blank" to="https://github.com/Ogaga01">
              <TbBrandGithubFilled />
            </Link>
          </li>
          <li>
            <Link target="blank" to="https://www.linkedin.com/in/ogaga-iyara/">
              <TbBrandLinkedin />
            </Link>
          </li>
          <li>
            <Link target="blank" to="https://twitter.com/i_ogaga_n">
              <TbBrandTwitterFilled />
            </Link>
          </li>
          <li>
            <Link target="blank" to="https://medium.com/@iyaraogaga69">
              <PiMediumLogoFill />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Sidebar;
