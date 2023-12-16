import MovieList from "../components/main/movieList/MovieList";
import { routerPath } from "./constant";
import Detail from "../components/main/detail/Detail";
import Cart from "../components/main/cart/Cart";

export const routes = [
  {
    path: routerPath.DETAIL,
    element: <Detail />,
  },
  {
    path: "/",
    element: <MovieList />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];
