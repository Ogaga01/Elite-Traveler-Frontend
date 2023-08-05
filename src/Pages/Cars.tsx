import { FC } from "react";
import { useLoaderData } from "react-router-dom";

const Cars: FC = () => {
  const car = useLoaderData();
  console.log(car);
  console.log("catrs");
  return <div>Car</div>;
};

export default Cars;
