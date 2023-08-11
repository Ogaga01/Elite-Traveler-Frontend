import { FC } from "react";
import { Form, useLocation } from "react-router-dom";
import styles from "./../Sass/_car.module.scss";
import SignIn from "./SignIn";

const ReserveAirplane: FC = () => {
  const location = useLocation();
  const state = location.state;
  const { id, name, image, price, seat, crew, baggage, size } = state;

  const date = new Date().toLocaleString();
  const person = localStorage.getItem("person");
  if (!person) return <SignIn />;

  const user = JSON.parse(person);

  return (
    <div className={styles["car"]}>
      <div className={styles["car__container"]}>
        <img src={image} className={styles["car__container--image"]} />
        <div className={styles["car__container--details"]}>
          <h1 className={styles["car__heading"]}>{name}</h1>
          <p className={styles["car__price"]}>${price}</p>
          <div className={styles["car__other"]}>
            <p className={styles["car__other-p"]}>{size}</p>
            <p className={styles["car__other-p"]}>Seats: {seat}</p>
            <p className={styles["car__other-p"]}>Crew: {crew}</p>
            <p className={styles["car__other-p"]}>Baggage: {baggage}</p>
          </div>
        </div>
      </div>
      <Form method="POST">
        <div>
          <label>Start Date</label>
          <input type="datetime-local" min={date} name="start_date" />
        </div>
        <div>
          <label>End Date</label>
          <input type="datetime-local" name="end_date" />
        </div>
        <div>
          <label>Location</label>
          <input type="text" name="location" />
        </div>
        <div>
          <label>Destination</label>
          <input type="text" name="destination" />
        </div>
        <input type="hidden" value={id} name="airplane_id" />
        <input type="hidden" value={user.id} name="user_id" />
        <input type="hidden" value={price} name="total_price" />
        <button>Place Reservation</button>
      </Form>
    </div>
  );
};

export default ReserveAirplane;
