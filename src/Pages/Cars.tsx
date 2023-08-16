import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLoaderData } from "react-router-dom";
import CarCard from "../Components/CarCard";
import { CarAPIObject } from "../types";
import styles from "./../Sass/_cars.module.scss";
import BackButton from "../Components/BackButton";
import { FiChevronLeft } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";

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
  const cars: CarAPIObject[] = useLoaderData() as CarAPIObject[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ButtonGroup = ({ next, previous }: any) => {
    return (
      <div
        className="carousel-button-group mb-4  gap-4 flex justify-end 
        items-center w-full"
      >
        <button className="block p-3 bg-slate-300" onClick={() => previous()}>
          {" "}
          <FiChevronLeft />
        </button>
        <button onClick={() => next()}>
          <span className="block p-3 bg-slate-300">
            <BiChevronRight />
          </span>
        </button>
      </div>
    );
  };
  return (
    <div className={styles["car"]}>
      <BackButton />
      <Carousel
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        className={styles["carousel"]}
        responsive={responsive}
      >
        {cars.map((car: CarAPIObject) => {
          return <CarCard props={car} key={car.id} />;
        })}
      </Carousel>
      ;
    </div>
  );
};

export default Cars;
