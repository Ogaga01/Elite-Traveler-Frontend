import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HomeObject } from "../types";
import HomeCard from "../Components/HomeCard";

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
      "https://www.airpartner.com/media/lrpgq3e0/embraer-phenom-100-1140x980.jpg",
    name: "Embrear Phenom 100",
  },
  {
    image:
      "https://www.airpartner.com/media/lrpgq3e0/embraer-phenom-100-1140x980.jpg",
    name: "Embrear Phenom 100",
  },
];

const Home: FC = () => {
  return (
    <div>
      <Carousel containerClass="w-full" responsive={responsive}>
        {homeAirplanes.map((airplane) => {
          return <HomeCard props={airplane} />;
        })}
      </Carousel>
      ;
    </div>
  );
};

export default Home;
