import { FC } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import MobileSidebar from "../Components/MobileSidebar";
import styles from "./../Sass/_appLayout.module.scss";
import Loader from "../Components/Loader";
import OutletHeader from "../Components/OutletHeader";

const AppLayout: FC = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className={styles["layout"]}>
      <MobileSidebar />
      <Sidebar />
      <div className={styles["layout__outlet"]}>
        <OutletHeader/>
        {isLoading && <Loader />}
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
