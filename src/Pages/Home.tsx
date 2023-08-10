import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { APIObject } from "../types";
import HomeCard from "../Components/HomeCard";
import styles from "./../Sass/_home.module.scss";
import { Link } from "react-router-dom";

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

const homeAirplanes: APIObject[] = [
  {
    id: 1,
    image:
      "https://www.airpartner.com/media/sz2dvcns/cessna-citation-mustang-exterior-1140x980.jpg",
    name: "Cessna Citation Mustang",
  },
  {
    id: 2,
    image:
      "https://www.airpartner.com/media/si4bd32a/hondajet-exterior-1140x980.jpg",
    name: "Honda Jet",
  },
  {
    id: 3,
    image:
      "https://www.airpartner.com/media/lrpgq3e0/embraer-phenom-100-1140x980.jpg",
    name: "Embrear Phenom 100",
  },
  {
    id: 4,
    image:
      "https://www.airpartner.com/media/i2qb4alc/nextant-400xt-exterior-1140x980.jpg",
    name: "Nextant 400XT",
  },
];

const homeCars: APIObject[] = [
  {
    id: 1,
    name: "Rolls-Royce Cullinan",
    image:
      "https://media.ed.edmunds-media.com/rolls-royce/cullinan/2020/oem/2020_rolls-royce_cullinan_4dr-suv_base_fq_oem_3_815.jpg",
  },
  {
    id: 2,
    name: "Lamborghini Urus",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2023-lamborghini-urus-performante-0476-644a6d5d75484.jpg?crop=0.663xw:0.560xh;0.131xw,0.281xh&resize=1200:*",
  },
  {
    id: 3,
    name: "Bugatti Veyron",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Veyron_SS.jpg",
  },
  {
    id: 4,
    name: "Range-Rover Velar",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2024-land-rover-range-rover-101-1675357794.jpg?crop=0.775xw:0.845xh;0.140xw,0.155xh&resize=1200:*",
  },
];

const Home: FC = () => {
  return (
    <div className={styles["home"]}>
      <div className={styles["home__section"]}>
        <h1 className={styles["home__heading"]}>
          Browse Our Collection Of Private Jets
        </h1>
        <Carousel className={styles["carousel"]} responsive={responsive}>
          {homeAirplanes.map((airplane) => {
            return <HomeCard props={airplane} key={airplane.id} />;
          })}
        </Carousel>
        <Link className={styles["link-button"]} to="/airplanes">
          View All Jets
        </Link>
      </div>
      <div className={styles["home__section"]}>
        <h1 className={styles["home__heading"]}>
          Browse Our Collection Of Luxury Cars
        </h1>
        <Carousel className={styles["carousel"]} responsive={responsive}>
          {homeCars.map((car) => {
            return <HomeCard props={car} key={car.id} />;
          })}
        </Carousel>
        <Link className={styles["link-button"]} to="/cars">
          View All Cars
        </Link>
      </div>
    </div>
  );
};

export default Home;
