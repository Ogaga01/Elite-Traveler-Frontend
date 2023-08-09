import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLoaderData } from "react-router-dom";
import CarCard from "../Components/CarCard";
import { CarAPIObject } from "../types";
import styles from './../Sass/_cars.module.scss'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Cars: FC = () => {
  const cars: CarAPIObject[] = useLoaderData();
  return (
    <div className={styles['car']}>
      <Carousel className={styles['carousel']} responsive={responsive}>
        {cars.map((car: CarAPIObject) => {
          return <CarCard props={car} />;
        })}
      </Carousel>
      ;
    </div>
  );
};

export default Cars;
