import { FC } from "react";
import { Link } from "react-router-dom";
import {
  TbBrandGithubFilled,
  TbBrandLinkedin,
  TbBrandTwitterFilled,
} from "react-icons/tb";
import { PiMediumLogoFill } from "react-icons/pi";
import styles from './../Sass/_footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles['footer']}>
      <ul className={styles['footer_ul']}>
        <li>
          <Link target="blank" to="https://github.com/Ogaga01">
            <TbBrandGithubFilled className={styles['icon']} />
          </Link>
        </li>
        <li>
          <Link target="blank" to="https://www.linkedin.com/in/ogaga-iyara/">
            <TbBrandLinkedin className={styles['icon']} />
          </Link>
        </li>
        <li>
          <Link target="blank" to="https://twitter.com/i_ogaga_n">
            <TbBrandTwitterFilled className={styles['icon']} />
          </Link>
        </li>
        <li>
          <Link target="blank" to="https://medium.com/@iyaraogaga69">
            <PiMediumLogoFill className={styles['icon']} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
