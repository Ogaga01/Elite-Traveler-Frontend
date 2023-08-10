import { FC } from "react";
import { AiOutlineStar } from "react-icons/ai";
import styles from './../Sass/_header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles['header']}>
      <span>Elite</span>
      <span>
        <AiOutlineStar />
      </span>
      {"\n"}
      <span>Travelers</span>
    </header>
  );
};

export default Header;
