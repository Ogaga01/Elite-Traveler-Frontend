import { FC } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineCar } from "react-icons/ai";
import { PiAirplaneTakeoff } from "react-icons/pi";
import { TbReservedLine } from "react-icons/tb";
import Header from "./Header";
import Footer from "./Footer";

const Sidebar: FC = () => {
  const listStyle =
    "h-1/4 w-11/12 ml-auto md:text-xl lg:text-2xl xl:text-3xl transition-all text-yellow-300 hover:text-black hover:bg-yellow-300 px-3 items-center flex";
  return (
    <div className="md:h-screen hidden left-0 md:block bg-blue-400 md:w-1/4 lg:w-1/5">
      <Header />
      <nav className="h-2/6 md:mb-28">
        <ul className="h-full">
          <li className={listStyle}>
            <NavLink className="flex items-center space-x-4 w-full" to="/">
              Home
            </NavLink>
          </li>
          <li className={listStyle}>
            <NavLink className="flex items-center space-x-4 w-full" to="/cars">
              <span>Cars</span>
              <span>
                <AiOutlineCar />
              </span>
            </NavLink>
          </li>
          <li className={listStyle}>
            <NavLink
              className="flex items-center space-x-4 w-full"
              to="/airplanes"
            >
              <span>Airplanes</span>
              <span>
                <PiAirplaneTakeoff />
              </span>
            </NavLink>
          </li>
          <li className={listStyle}>
            <NavLink
              className="flex items-center space-x-4 w-full"
              to="/reservations"
            >
              <span>Reservations</span>
              <span>
                <TbReservedLine />
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
};

export default Sidebar;
