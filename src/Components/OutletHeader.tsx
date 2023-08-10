import { FC } from "react";
import styles from "./../Sass/_outletHeader.module.scss";
import { Link } from "react-router-dom";

const OutletHeader: FC = () => {
  return (
    <div className={styles["header"]}>
      <p className={styles["username"]}>Username</p>
      <Link className={styles["link-button"]} to="/sign_in">
        Login
      </Link>
    </div>
  );
};

export default OutletHeader;
