import Movies from "../../models/movies";

type MovieAction = {
  type: string;
  movies: Movies[];
};

type DispatchType = (arg: MovieAction) => MovieAction;
