import { FC } from "react";
import { Link, useLoaderData } from "react-router-dom";
import styles from './../Sass/_car.module.scss'
import { CarAPIObject } from "../types";
import BackButton from "../Components/BackButton";

const Car: FC = () => {
  const car: CarAPIObject = useLoaderData() as CarAPIObject;

  const {id, name, about, price, image} = car
  return <div className={styles['car']}>
    <BackButton/>
    <div className={styles['car__container']}>
      <img src={image} className={styles['car__container--image']} />
      <div className={styles['car__container--details']}>
        <h1 className={styles['car__heading']}>{name}</h1>
        <p className={styles['car__about']}>{about}</p>
        <p className={styles['car__price']}>${price}</p>
        <Link to='/reservecar' className={styles['car__link-button']} state={{id, image, about, name, price}}>Reserve</Link>
      </div>
    </div>
  </div>;
};

export default Car;
