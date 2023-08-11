import { FC } from "react";
import { PlaneAPIObject } from "../types";
import { Link } from "react-router-dom";
import styles from "./../Sass/_homeCard.module.scss";

interface Props {
  props: PlaneAPIObject;
}

const AirplaneCard: FC<Props> = ({ props }) => {
  const { id, image, name, price, size, seat, crew, baggage } = props;
  const stingID = id.toString();
  return (
    <Link to={stingID} className={styles["homeCard"]}>
      <img className={styles["homeCard__image"]} src={image} alt={name} />
      <h2 className={styles["homeCard__header"]}>{name}</h2>
      <div className={styles["homeCard__to"]}>
        <Link
          to="/reserveairplane"
          className={styles["link-button"]}
          state={{ id, image, name, price, size, seat, crew, baggage }}
        >
          Reserve
        </Link>
        <p className={styles["homeCard__size"]}>{size}</p>
      </div>
    </Link>
  );
};

export default AirplaneCard;
