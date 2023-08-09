import { FC } from "react";
import styles from "./../Sass/_homeCard.module.scss";
import { APIObject } from "../types";

interface Props {
  props: APIObject;
}

const HomeCard: FC<Props> = ({ props }) => {
  const { image, name } = props;
  return (
    <div className={styles["homeCard"]}>
      <img className={styles["homeCard__image"]} src={image} alt={name} />
      <h2 className={styles["homeCard__header"]}>{name}</h2>
    </div>
  );
};

export default HomeCard;
