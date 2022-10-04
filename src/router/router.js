import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Order from "../components/Order/Order";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/order",
        loader: async () => {
          return fetch("products.json");
        },
        element: <Order></Order>,
      },
    ],
  },
]);
