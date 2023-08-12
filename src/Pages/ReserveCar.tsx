import { FC } from "react";
import { useLocation, Form } from "react-router-dom";
import SignIn from "./SignIn";
import styles from "./../Sass/_car.module.scss";

const ReserveCar: FC = () => {
  const location = useLocation();
  const state = location.state;
  const { id, name, about, image, price } = state;

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
          <p className={styles["car__about"]}>{about}</p>
          <p className={styles["car__price"]}>${price}</p>
        </div>
      </div>
      <Form method="POST" className={styles["form"]}>
        <div className={styles["form__div"]}>
          <label className={styles["form__div--label"]}>Start Date</label>
          <input
            className={styles["form__div--input"]}
            type="datetime-local"
            min={date}
            name="start_date"
            required
          />
        </div>
        <div className={styles["form__div"]}>
          <label className={styles["form__div--label"]}>End Date</label>
          <input
            className={styles["form__div--input"]}
            type="datetime-local"
            name="end_date"
            required
          />
        </div>
        <div className={styles["form__div"]}>
          <label className={styles["form__div--label"]}>Location</label>
          <input
            className={styles["form__div--input"]}
            type="text"
            name="location"
            required
          />
        </div>
        <input type="hidden" value={id} name="car_id" />
        <input type="hidden" value={user.id} name="user_id" />
        <input type="hidden" value={price} name="total_price" />
        <button className={styles["car__link-button"]}>
          Place Reservation
        </button>
      </Form>
    </div>
  );
};

export default ReserveCar;
