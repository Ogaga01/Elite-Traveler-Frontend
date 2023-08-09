import { getAirplanes, getCars } from "./actions";

export const carsLoader = async () => {
  const cars = await getCars();

  return cars;
};

export const airplanesLoader = async () => {
  const airplanes = await getAirplanes();

  return airplanes;
};

