import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import Error from "./Components/Error";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import Car from "./Pages/Car";
import Airplanes from "./Pages/Airplanes";
import Airplane from "./Pages/Airplane";
import Reservations from "./Pages/Reservations";
import {
  airplaneLoader,
  airplanesLoader,
  carLoader,
  carsLoader,
  reservationLoader,
  reserveAirplaneAction,
  reserveCarAction,
  signinAction,
  signupAction,
} from "./Actions/loaders";
import ReserveCar from "./Pages/ReserveCar";
import ReserveAirplane from "./Pages/ReserveAirplane";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cars",
        element: <Cars />,
        loader: carsLoader,
        errorElement: <Error />,
      },
      {
        path: "/cars/:id",
        element: <Car />,
        loader: carLoader,
      },
      {
        path: "/airplanes",
        element: <Airplanes />,
        loader: airplanesLoader,
      },
      {
        path: "/airplanes/:id",
        element: <Airplane />,
        loader: airplaneLoader,
      },

      {
        path: "/reservecar",
        element: <ReserveCar />,
        action: reserveCarAction,
      },
      {
        path: "/reserveairplane",
        element: <ReserveAirplane />,
        action: reserveAirplaneAction,
      },
      {
        path: "/reservations",
        element: <Reservations />,
        loader: reservationLoader,
      },
      {
        path: "/sign_in",
        element: <SignIn />,
        action: signinAction,
      },
      {
        path: "/sign_up",
        element: <SignUp />,
        action: signupAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
