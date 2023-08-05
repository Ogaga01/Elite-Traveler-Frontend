import { FC, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { AiOutlineCar } from "react-icons/ai";
import { PiAirplaneTakeoff } from "react-icons/pi";
import { TbReservedLine } from "react-icons/tb";
import Header from "./Header";
import Footer from "./Footer";

const MobileSidebar: FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };
  const listStyle =
    "h-1/4 w-11/12 ml-auto text-3xl sm:text-4xl transition-all text-yellow-300 hover:text-black hover:bg-yellow-300 px-3 items-center flex";

  return (
    <>
      <IoMdMenu
        className="text-5xl mx-4 my-4 md:hidden fixed "
        onClick={handleShow}
      />
      {show && (
        <div className="absolute w-3/4 h-screen md:hidden bg-blue-400">
          <Header />
          <nav className="h-2/6 mb-72">
            <ul className="h-full">
              <li className={listStyle} onClick={handleShow}>
                <NavLink className="flex items-center space-x-4 w-full" to="/">
                  Home
                </NavLink>
              </li>
              <li className={listStyle} onClick={handleShow}>
                <NavLink
                  className="flex items-center space-x-4 w-full"
                  to="/cars"
                >
                  <span>Cars</span>
                  <span>
                    <AiOutlineCar />
                  </span>
                </NavLink>
              </li>
              <li className={listStyle} onClick={handleShow}>
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
              <li className={listStyle} onClick={handleShow}>
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
      )}
    </>
  );
};

export default MobileSidebar;
