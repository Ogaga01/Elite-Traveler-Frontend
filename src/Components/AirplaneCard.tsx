import { FC } from "react";
import { PlaneAPIObject } from "../types";
import { Link } from "react-router-dom";
import styles from "./../Sass/_homeCard.module.scss";

interface Props {
  props: PlaneAPIObject;
}

const AirplaneCard: FC<Props> = ({ props }) => {
  const { id, name, image, size } = props;
  const stingID = id.toString();
  return (
    <Link to={stingID} className={styles["homeCard"]}>
      <img className={styles["homeCard__image"]} src={image} alt={name} />
      <h2 className={styles["homeCard__header"]}>{name}</h2>
      <div className={styles["homeCard__to"]}>
        <Link to="/reservecar" className={styles["link-button"]} state={id}>
          Reserve
        </Link>
        <p className={styles["homeCard__size"]}>{size}</p>
      </div>
    </Link>
  );
};

export default AirplaneCard;
