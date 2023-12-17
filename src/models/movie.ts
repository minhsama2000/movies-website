import { Actor } from "./actor";

export default class Movie {
  name?: string;
  imdb?: number;
  date?: string;
  sposter?: string;
  bposter?: string;
  genre?: string;
  type?: string;
  url?: string;
  trailer?: string;
  low?: string;
  medium?: string;
  high?: string;
  prices?: number[];
  shortDescription?: string;
  description?: string;
  actors?: Actor[];
}
