import { FC } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineCar } from "react-icons/ai";
import { PiAirplaneTakeoff } from "react-icons/pi";
import { TbReservedLine } from "react-icons/tb";
import Header from "./Header";
import Footer from "./Footer";
import styles from './../Sass/_sidebar.module.scss'

const Sidebar: FC = () => {
  return (
    <div className={styles['sidebar']}>
      <Header />
      <nav className={styles['nav']}>
        <ul className={styles['nav_ul']}>
          <li className={styles['listStyle']}>
            <NavLink className="flex items-center space-x-4 w-full" to="/">
              Home
            </NavLink>
          </li>
          <li className={styles['listStyle']}>
            <NavLink className="flex items-center space-x-4 w-full" to="/cars">
              <span>Cars</span>
              <span>
                <AiOutlineCar />
              </span>
            </NavLink>
          </li>
          <li className={styles['listStyle']}>
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
          <li className={styles['listStyle']}>
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
