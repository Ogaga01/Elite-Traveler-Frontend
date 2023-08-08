import { FC } from "react";
import styles from './../Sass/_loader.module.scss'


const Loader: FC = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
        <div className={styles["loader"]}></div>
      </div>
    );
  };
  
  export default Loader;
  