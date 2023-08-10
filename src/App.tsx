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
  airplanesLoader,
  carLoader,
  carsLoader,
  signinAction,
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
      },
      {
        path: "/reservecar",
        element: <ReserveCar />,
      },
      {
        path: "/reserveairplane",
        element: <ReserveAirplane />,
      },
      {
        path: "/reservations",
        element: <Reservations />,
      },
      {
        path: "/sign_in",
        element: <SignIn />,
        action: signinAction,
      },
      {
        path: "/sign_up",
        element: <SignUp />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
