import { FC, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { AiOutlineCar, AiOutlineHome } from "react-icons/ai";
import { PiAirplaneTakeoff } from "react-icons/pi";
import { TbReservedLine } from "react-icons/tb";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./../Sass/_mobileSidebar.module.scss";

const MobileSidebar: FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div>
        {!show && <IoMdMenu className={styles["menu"]} onClick={handleShow} />}
      </div>
      {show && (
        <div className={styles["sidebar"]}>
          <Header />
          <p className={styles["cancel"]} onClick={handleShow}>&times;</p>
          <nav className={styles["navbar"]}>
            <ul className={styles["navbar_ul"]}>
              <li className={styles["listStyle"]} onClick={handleShow}>
                <NavLink className={styles["listStyle_link"]} to="/">
                  <span>Home</span>
                  <span>
                    <AiOutlineHome />
                  </span>
                </NavLink>
              </li>
              <li className={styles["listStyle"]} onClick={handleShow}>
                <NavLink className={styles["listStyle_link"]} to="/cars">
                  <span>Cars</span>
                  <span>
                    <AiOutlineCar />
                  </span>
                </NavLink>
              </li>
              <li className={styles["listStyle"]} onClick={handleShow}>
                <NavLink className={styles["listStyle_link"]} to="/airplanes">
                  <span>Airplanes</span>
                  <span>
                    <PiAirplaneTakeoff />
                  </span>
                </NavLink>
              </li>
              <li className={styles["listStyle"]} onClick={handleShow}>
                <NavLink
                  className={styles["listStyle_link"]}
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
