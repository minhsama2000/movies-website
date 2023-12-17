import { useEffect, useState } from "react";
import "./movieList.scss";
import Movie from "../../../models/movie";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getMoviesFetch, setMovieDetail } from "../../../store/movie/state";
import { useNavigate } from "react-router-dom";

export default function MovieList() {
  const movies = useSelector((state) => state.movies.moviesHot);
  const dispatch = useDispatch();
  const navigage = useNavigate();

  useEffect(() => {
    dispatch(getMoviesFetch());
  }, [dispatch]);

  const moveToLeft = (index: number) => {
    let cards = document.getElementsByClassName("cards");
    cards[index].scrollLeft -= 140;
  };

  const moveToRight = (index: number) => {
    let cards = document.getElementsByClassName("cards");
    cards[index].scrollLeft += 140;
  };

  const toDetail = (movie: Movie) => {
    dispatch(setMovieDetail(movie));
    navigage("/detail");
  };

  return (
    <>
      {movies?.map((element: any, index: number) => (
        <div key={index} className="list_card">
          <h4>{element.type}</h4>
          <i
            onClick={() => moveToLeft(index)}
            className="bi bi-chevron-left"
          ></i>
          <i
            onClick={() => moveToRight(index)}
            className="bi bi-chevron-right"
          ></i>
          <div className="cards">
            {element?.movies?.map((item: any, index: number) => (
              <a
                key={index}
                href="#"
                onClick={() => toDetail(item)}
                className="card"
              >
                <img src={item.sposter} alt={item.name} className="poster" />
                <div className="rest_card">
                  <img src={item.bposter} alt="" />
                  <div className="cont">
                    <h4>{item.name}</h4>
                    <div className="sub">
                      <p>
                        {item.genre}, {item.date}
                      </p>
                      <h3>
                        <span>IMDB</span>
                        <i className="bi bi-star-fill"></i> {item.imdb}
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
