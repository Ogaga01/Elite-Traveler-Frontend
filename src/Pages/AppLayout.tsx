import { FC } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import MobileSidebar from "../Components/MobileSidebar";
import styles from './../Sass/_appLayout.module.scss'

const AppLayout: FC = () => {
  return (
    <div className={styles['layout']}>
      <MobileSidebar />
      <Sidebar />
      <div className={styles['layout__outlet']}>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
