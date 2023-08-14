import { FC } from "react";
import SignIn from "./SignIn";
import { useLoaderData } from "react-router-dom";
import { SignInObject } from "../types";
import styles from "./../Sass/_reservations.module.scss";
import { deleteReservedAirplane, deleteReservedCar } from "../Actions/actions";
import BackButton from "../Components/BackButton";

const Reservations: FC = () => {
  const loader = useLoaderData();

  const airplanes = loader.airplanes;
  const cars = loader.cars;
  const reservedCars = loader.reservedCars;
  const reservedAirplanes = loader.reservedAirplanes;

  const person = localStorage.getItem("person");
  if (!person) return <SignIn />;

  const user = JSON.parse(person);

  const userReservedCars = reservedCars.filter((car: SignInObject) => {
    return car.user_id === user.id;
  });
  const userReservedAirplanes = reservedAirplanes.filter(
    (airplane: SignInObject) => {
      return airplane.user_id === user.id;
    }
  );

  const airplanesMapping: Record<number, string> = {};

  for (const airplane of airplanes) {
    airplanesMapping[airplane.id] = airplane.name;
  }

  const carsMapping: Record<number, string> = {};

  for (const car of cars) {
    carsMapping[car.id] = car.name;
  }

  return (
    <div className={styles["reserve"]}>
      <BackButton/>
      <div className={styles["reserve__airplanes"]}>
        <p className={styles["reserve__p"]}>All Reserved Airplanes</p>
        {userReservedAirplanes.length <= 0 ? (
          <p className={styles["reserve__p-1"]}>You Have No Airplane Reserved</p>
        ) : (
          <table className={styles["table"]}>
            <thead className={styles["table__head"]}>
              <tr>
                <th className={styles["table__head-th"]}>Airplane Name</th>
                <th className={styles["table__head-th"]}>Location</th>
                <th className={styles["table__head-th"]}>Destinaion</th>
                <th className={styles["table__head-th"]}>Start Date</th>
                <th className={styles["table__head-th"]}>End Date</th>
                <th className={styles["table__head-th"]}>Price</th>
                <th className={styles["table__head-th"]}>&nbsp;</th>
              </tr>
            </thead>
            <tbody className={styles["table__body"]}>
              {userReservedAirplanes.map((airplane: any) => {
                return (
                  <tr key={airplane.id}>
                    <td className={styles["table__body-td"]}>
                      {airplanesMapping[airplane.airplane_id]}
                    </td>
                    <td className={styles["table__body-td"]}>
                      {airplane.location}
                    </td>
                    <td className={styles["table__body-td"]}>
                      {airplane.destination}
                    </td>
                    <td className={styles["table__body-td"]}>
                      {new Date(airplane.start_date).toLocaleDateString()}
                    </td>
                    <td className={styles["table__body-td"]}>
                      {new Date(airplane.end_date).toLocaleDateString()}
                    </td>
                    <td className={styles["table__body-td"]}>
                      {airplane.total_price}
                    </td>
                    <td className={styles["table__body-td"]}>
                      {
                        <button className={styles["reserve__button"]}
                          onClick={async () =>
                            deleteReservedAirplane(airplane.id)
                          }
                        >
                          Delete
                        </button>
                      }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className={styles["reserve__cars"]}>
        <p className={styles["reserve__p"]}>All Reserved Cars</p>
        {userReservedCars.length <= 0 ? (
          <p className={styles["reserve__p-1"]}>You Have No Cars Reserved</p>
        ) : (
          <table className={styles["table"]}>
            <thead className={styles["table__head"]}>
              <tr>
                <th className={styles["table__head-th"]}>Car Name</th>
                <th className={styles["table__head-th"]}>Location</th>
                <th className={styles["table__head-th"]}>Start Date</th>
                <th className={styles["table__head-th"]}>End Date</th>
                <th className={styles["table__head-th"]}>Price</th>
                <th className={styles["table__head-th"]}>&nbsp;</th>
              </tr>
            </thead>
            <tbody className={styles["table__body"]}>
              {userReservedCars.map((car: any) => {
                return (
                  <tr key={car.id}>
                    <td className={styles["table__body-td"]}>
                      {carsMapping[car.car_id]}
                    </td>
                    <td className={styles["table__body-td"]}>{car.location}</td>
                    <td className={styles["table__body-td"]}>
                      {new Date(car.start_date).toLocaleDateString()}
                    </td>
                    <td className={styles["table__body-td"]}>
                      {new Date(car.end_date).toLocaleDateString()}
                    </td>
                    <td className={styles["table__body-td"]}>
                      {car.total_price}
                    </td>
                    <td className={styles["table__body-td"]}>
                      {
                        <button className={styles["reserve__button"]} onClick={async () => deleteReservedCar(car.id)}>
                          Delete
                        </button>
                      }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Reservations;
