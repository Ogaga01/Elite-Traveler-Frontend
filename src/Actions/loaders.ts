import { getAirplanes, getCar, getCars } from "./actions";

export const carsLoader = async () => {
  const cars = await getCars();

  return cars;
};

export const airplanesLoader = async () => {
  const airplanes = await getAirplanes();

  return airplanes;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const carLoader = async ({ params }: { params: any }) => {
  const { id } = params;
  const car = await getCar(id);

  return car;
};
