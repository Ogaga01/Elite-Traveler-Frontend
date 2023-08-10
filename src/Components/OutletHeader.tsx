import { FC } from "react";
import styles from "./../Sass/_outletHeader.module.scss";
import { Link } from "react-router-dom";
import { logout } from "../Actions/actions";

const OutletHeader: FC = () => {
  const person = localStorage.getItem("person");
  if (!person)
    return (
      <div className={styles["header"]}>
        <p className={styles["username"]}>Username</p>
        <Link className={styles["link-button"]} to="/sign_in">
          Login
        </Link>
      </div>
    );
  const user = JSON.parse(person);
  return (
    <div className={styles["header"]}>
      <p className={styles["username"]}>{user.name}</p>
      <button onClick={logout} className={styles["link-button"]}>
        Log out
      </button>
    </div>
  );
};

export default OutletHeader;
