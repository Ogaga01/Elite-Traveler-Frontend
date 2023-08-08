import { FC } from "react";
import styles from './../Sass/_outletHeader.module.scss'

const OutletHeader: FC = () => {
  return <div className={styles['header']}>
    <p className={styles['username']}>Username</p>
    <p className={styles['login']}>Login</p>
  </div>;
};

export default OutletHeader;
