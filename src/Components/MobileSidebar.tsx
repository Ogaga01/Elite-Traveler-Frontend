import { FC, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { AiOutlineCar } from "react-icons/ai";
import { PiAirplaneTakeoff } from "react-icons/pi";
import { TbReservedLine } from "react-icons/tb";
import Header from "./Header";
import Footer from "./Footer";
import styles from './../Sass/_mobileSidebar.module.scss'

const MobileSidebar: FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };    

  return (
    <>
      <IoMdMenu
        className={styles['menu']}
        onClick={handleShow}
      />
      {show && (
        <div className={styles['sidebar']}>
          <Header />
          <nav className={styles['navbar']}>
            <ul className={styles['navbar_ul']}>
              <li className={styles['listStyle']} onClick={handleShow}>
                <NavLink className={styles['']} to="/">
                  Home
                </NavLink>
              </li>
              <li className={styles['listStyle']} onClick={handleShow}>
                <NavLink
                  className={styles['']}
                  to="/cars"
                >
                  <span>Cars</span>
                  <span>
                    <AiOutlineCar />
                  </span>
                </NavLink>
              </li>
              <li className={styles['listStyle']} onClick={handleShow}>
                <NavLink
                  className={styles['']}
                  to="/airplanes"
                >
                  <span>Airplanes</span>
                  <span>
                    <PiAirplaneTakeoff />
                  </span>
                </NavLink>
              </li>
              <li className={styles['listStyle']} onClick={handleShow}>
                <NavLink
                  className={styles['']}
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
