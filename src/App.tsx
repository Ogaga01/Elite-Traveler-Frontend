import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import Error from "./Components/Error";
import Home from "./Pages/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
