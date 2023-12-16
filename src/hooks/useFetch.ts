import { useEffect, useState } from "react";
import MovieApi from "../apis/movieApi";

export default function FetchHook<T>(url: string, param: {}) {
  const [data, setData] = useState(Array<T>);
  const [error, setError] = useState(new Object());
  const { findHotMovies } = MovieApi();

  useEffect(() => {
    findHotMovies(url, param).then((res) => {
      setData(res.data);
    });
  }, [url]);

  return {
    data,
    error,
  };
}
