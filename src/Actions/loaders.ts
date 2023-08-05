import { getAirplanes, getCars } from "./actions";

export const homeLoader = async () => {
  const cars = await getCars();
  const airplanes = await getAirplanes();

  const data = {
    cars,
    airplanes,
  };
  return data;
};
