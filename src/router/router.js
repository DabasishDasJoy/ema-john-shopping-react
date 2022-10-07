import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Inventory from "../components/Inventory/Inventory";
import Login from "../components/Login/Login";
import Order from "../components/Order/Order";
import ReviewOrder from "../components/ReviewOrder/ReviewOrder";
import Main from "../layouts/Main";
import { productAndPrevCart } from "../loader/productsAndPreviousCartLoader";

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
        loader: productAndPrevCart,
        element: <Order></Order>,
      },
      {
        path: "/orderPreview",
        loader: productAndPrevCart,
        element: <ReviewOrder></ReviewOrder>,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
