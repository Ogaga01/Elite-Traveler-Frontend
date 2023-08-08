import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HomeObject } from "../types";
import HomeCard from "../Components/HomeCard";
import styles from "./../Sass/_home.module.scss";

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

const homeAirplanes: HomeObject[] = [
  {
    image:
      "https://www.airpartner.com/media/sz2dvcns/cessna-citation-mustang-exterior-1140x980.jpg",
    name: "Cessna Citation Mustang",
  },
  {
    image:
      "https://www.airpartner.com/media/si4bd32a/hondajet-exterior-1140x980.jpg",
    name: "Honda Jet",
  },
  {
    image:
      "https://www.airpartner.com/media/lrpgq3e0/embraer-phenom-100-1140x980.jpg",
    name: "Embrear Phenom 100",
  },
  {
    image:
      "https://www.airpartner.com/media/i2qb4alc/nextant-400xt-exterior-1140x980.jpg",
    name: "Nextant 400XT",
  },
];

const homeCars: HomeObject[] = [
  {
    name: "Rolls-Royce Cullinan",
    image:
      "https://media.ed.edmunds-media.com/rolls-royce/cullinan/2020/oem/2020_rolls-royce_cullinan_4dr-suv_base_fq_oem_3_815.jpg",
  },
  {
    name: "Rolls-Royce Cullinan",
    image:
      "https://media.ed.edmunds-media.com/rolls-royce/cullinan/2020/oem/2020_rolls-royce_cullinan_4dr-suv_base_fq_oem_3_815.jpg",
  },
  {
    name: "Rolls-Royce Cullinan",
    image:
      "https://media.ed.edmunds-media.com/rolls-royce/cullinan/2020/oem/2020_rolls-royce_cullinan_4dr-suv_base_fq_oem_3_815.jpg",
  },
  {
    name: "Rolls-Royce Cullinan",
    image:
      "https://media.ed.edmunds-media.com/rolls-royce/cullinan/2020/oem/2020_rolls-royce_cullinan_4dr-suv_base_fq_oem_3_815.jpg",
  },
];

const Home: FC = () => {
  return (
    <>
      <div>
        <Carousel className={styles["carousel"]} responsive={responsive}>
          {homeAirplanes.map((airplane) => {
            return <HomeCard props={airplane} />;
          })}
        </Carousel>
        ;
      </div>
      <div>
        <Carousel className={styles["carousel"]} responsive={responsive}>
          {homeCars.map((car) => {
            return <HomeCard props={car} />;
          })}
        </Carousel>
        ;
      </div>
    </>
  );
};

export default Home;
