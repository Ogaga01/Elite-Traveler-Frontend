import { redirect } from "react-router-dom";
import { SignInObject } from "../types";
import {
  getAirplane,
  getAirplanes,
  getCar,
  getCars,
  getReservedAirplanes,
  getReservedCars,
  reserveAirplane,
  reserveCar,
  signin,
  signup,
} from "./actions";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const airplaneLoader = async ({ params }: { params: any }) => {
  const { id } = params;
  const airplane = await getAirplane(id);

  return airplane;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const signinAction = async ({ request }: { request: any }) => {
  const formData = await request.formData();
  const data: SignInObject = Object.fromEntries(formData);
  await signin(data);
  return redirect("/");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const signupAction = async ({ request }: { request: any }) => {
  const formData = await request.formData();
  const data: SignInObject = Object.fromEntries(formData);
  await signup(data);
  return redirect("/");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reserveAirplaneAction = async ({ request }: { request: any }) => {
  const formData = await request.formData();
  const data: SignInObject = Object.fromEntries(formData);
  await reserveAirplane(data);
  return redirect("/reservations");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reserveCarAction = async ({ request }: { request: any }) => {
  const formData = await request.formData();
  const data: SignInObject = Object.fromEntries(formData);
  await reserveCar(data);
  return redirect("/reservations");
};

export const reservationLoader = async () => {
  const airplanes = await getAirplanes();
  const cars = await getCars();
  const reservedCars = await getReservedCars();
  const reservedAirplanes = await getReservedAirplanes();

  const data = {
    airplanes,
    cars,
    reservedCars,
    reservedAirplanes,
  };
  return data;
};
