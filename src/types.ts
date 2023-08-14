export type APIObject = {
  id: number;
  image: string;
  name: string;
};

export type CarAPIObject = {
  id: number;
  name: string;
  about: string;
  price: number;
  image: string;
};

export type PlaneAPIObject = {
  id: number;
  about: string;
  image: string;
  name: string;
  price: number;
  size: string;
  seat: number;
  crew: number;
  baggage: number;
};

export type LoaderAPIObject = {
  cars: SignInObject[];
  airplanes: SignInObject[];
  reservedCars: SignInObject[];
  reservedAirplanes: SignInObject[];
};

export type SignInObject = { [k: string]: string };
