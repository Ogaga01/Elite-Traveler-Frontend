import { FC, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PlaneAPIObject } from "../types";
import Carousel from "react-multi-carousel";
import AirplaneCard from "../Components/AirplaneCard";
import styles from './../Sass/_cars.module.scss'
import BackButton from "../Components/BackButton";

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

const Airplanes: FC = () => {
  const [filterValue, setFilterValue] = useState<string>("");

  const airplanes: PlaneAPIObject[] = useLoaderData() as PlaneAPIObject[];

  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(e.target.value);
  };

  let airplaneSize = airplanes;

  if (filterValue === "very light jets") {
    airplaneSize = airplanes.filter((jet) => {
      return jet.size.toLowerCase() === filterValue;
    });
  } else if (filterValue === "light jets") {
    airplaneSize = airplanes.filter((jet) => {
      return jet.size.toLowerCase() === filterValue;
    });
  } else if (filterValue === "midsize jets") {
    airplaneSize = airplanes.filter((jet) => {
      return jet.size.toLowerCase() === filterValue;
    });
  } else if (filterValue === "super midsize jets") {
    airplaneSize = airplanes.filter((jet) => {
      return jet.size.toLowerCase() === filterValue;
    });
  } else if (filterValue === "large jets") {
    airplaneSize = airplanes.filter((jet) => {
      return jet.size.toLowerCase() === filterValue;
    });
  } else if (filterValue === "global jets") {
    airplaneSize = airplanes.filter((jet) => {
      return jet.size.toLowerCase() === filterValue;
    });
  }

  return (
    <div className={styles['car']}>
      <BackButton/>
      <div>
        <label>Sort by categories</label>
        <select name="size" onChange={handleOption}>
          <option value="all">All</option>
          <option value="very light jets">Very Light Jets</option>
          <option value="light jets">Light Jets</option>
          <option value="midsize jets">Midsize Jets</option>
          <option value="super midsize jets">Super Midsize Jets</option>
          <option value="large jets">Large Jets</option>
          <option value="global jets">Global Jets</option>
        </select>
      </div>
      <Carousel className={styles['carousel']} responsive={responsive}>
        {airplaneSize?.map((jet: PlaneAPIObject) => {
          return <AirplaneCard props={jet} key={jet.id}/>;
        })}
      </Carousel>
    </div>
  );
};

export default Airplanes;
