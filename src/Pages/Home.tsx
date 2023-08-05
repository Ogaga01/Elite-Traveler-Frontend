import { FC } from "react";
import { useLoaderData } from "react-router-dom";

const Home: FC = () => {
    const cars = useLoaderData();
    console.log(cars);
  return <div className="text-lg">Capital lettar</div>;
};

export default Home;
