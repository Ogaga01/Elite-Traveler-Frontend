import { FC } from "react";
import { Link, useLoaderData } from "react-router-dom";
import styles from './../Sass/_cars.module.scss'
import { CarAPIObject } from "../types";

const Car: FC = () => {
  const car: CarAPIObject = useLoaderData();

  const {id, name, about, price, image} = car
  return <div className={styles['car']}>
    <div className={styles['car__container']}>
      <img src={image} />
      <div>
        <h1>{name}</h1>
        <p>{about}</p>
        <p>{price}</p>
        <Link to='/reservecar'>Reserve</Link>
      </div>
    </div>
  </div>;
};

export default Car;
