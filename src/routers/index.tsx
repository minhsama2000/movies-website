import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import { routes } from "./page";
import { routerPath } from "./constant";

export const routers = createBrowserRouter([
  {
    path: routerPath.HOME,
    element: <Home />,
    children: routes,
  },
]);
