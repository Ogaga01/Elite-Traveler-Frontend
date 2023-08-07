import { FC } from "react";
import styles from './../Sass/_homeCard.module.scss'
import { HomeObject } from "../types";

interface Props {
  props: HomeObject;
}

const HomeCard: FC<Props> = ({ props }) => {
  const { image, name } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: "30vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: "1.5rem 3rem",
      }}
    >
      <div className={styles["homeCard"]}>
        <h2 className={styles["homeCard__heading"]}>{name}</h2>
      </div>
    </div>
  );
};

export default HomeCard;
