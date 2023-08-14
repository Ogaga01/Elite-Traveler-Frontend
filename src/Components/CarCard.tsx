import { FC } from "react";
import { CarAPIObject } from "../types";
import { Link } from "react-router-dom";
import styles from "./../Sass/_homeCard.module.scss";

interface Props {
  props: CarAPIObject;
}

const CarCard: FC<Props> = ({ props }) => {
  const { id, image, about, name, price } = props;
  const stingID = id.toString();
  return (
    <Link to={stingID} className={styles["homeCard"]}>
      <img className={styles["homeCard__image"]} src={image} alt={name} />
      <h2 className={styles["homeCard__header"]}>{name}</h2>
      <Link
        to="/reservecar"
        className={styles["link-button"]}
        state={{ id, image, about, name, price }}
      >
        Reserve
      </Link>
    </Link>
  );
};

export default CarCard;
