import { FC } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { PlaneAPIObject } from "../types";
import styles from "./../Sass/_car.module.scss";

const Airplane: FC = () => {
  const airplane: PlaneAPIObject = useLoaderData();

  const { id, about, image, name, price, size, seat, crew, baggage } = airplane;
  return (
    <div className={styles["car"]}>
      <div className={styles["car__container"]}>
        <img src={image} className={styles["car__container--image"]} />
        <div className={styles["car__container--details"]}>
          <h1 className={styles["car__heading"]}>{name}</h1>
          <p className={styles["car__about"]}>{about}</p>
          <p className={styles["car__price"]}>${price}</p>
          <div className={styles["car__other"]}>
            <p className={styles["car__other-p"]}>{size}</p>
            <p className={styles["car__other-p"]}>Seats: {seat}</p>
            <p className={styles["car__other-p"]}>Crew: {crew}</p>
            <p className={styles["car__other-p"]}>Baggage: {baggage}</p>
          </div>
          <Link
            to="/reserveairplane"
            className={styles["car__link-button"]}
            state={{ id, name, image, size, price, seat, crew, baggage }}
          >
            Reserve
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Airplane;
