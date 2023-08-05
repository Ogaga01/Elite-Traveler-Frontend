import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import Error from "./Components/Error";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import Car from "./Pages/Car";
import Airplanes from "./Pages/Airplanes";
import Airplane from "./Pages/Airplane";
import Reservations from "./Pages/Reservations";
import { homeLoader } from "./Actions/loaders";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
        errorElement: <Error />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/cars/:id",
        element: <Car />,
      },
      {
        path: "/airplanes",
        element: <Airplanes />,
      },
      {
        path: "/airplanes/:id",
        element: <Airplane />,
      },
      {
        path: "reservations",
        element: <Reservations />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
