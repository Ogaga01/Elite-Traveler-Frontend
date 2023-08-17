import { FC } from "react";
import styles from "./../Sass/_loader.module.scss";

const Loader: FC = () => {
  return (
    <div className={styles["backdrop"]}>
      <div className={styles["loader"]}></div>
    </div>
  );
};

export default Loader;
