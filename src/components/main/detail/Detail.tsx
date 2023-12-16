import { useEffect, useState } from "react";
import "./detail.scss";
import Movie from "../../../models/movie";
import { useSelector } from "react-redux";

const movie: Movie = {
  name: "The Boys",
  imdb: 9.9,
  date: "2022",
  sposter: "images/the boys.jpg",
  bposter: "images/the boys1.jpg",
  genre: "Action",
  type: "series",
  url: "the boys.html",
  trailer: "john wick.webm",
  low: "video/theboys.webm",
  medium: "video/the boys 720ph.mp4",
  high: "video/the boys 1080ph.mp4",
  actors: [
    {
      name: "Antony Starr",
      poster: "/images/actor/Artony Starr.jpeg",
    },
    {
      name: "Karl Urban",
      poster: "/images/actor/Erin Moriaty.jpeg",
    },
    {
      name: "Jack Quaid",
      poster: "/images/actor/Hack Quald.jpeg",
    },
    {
      name: "Erin Moriarty",
      poster: "/images/actor/Karen Fukuhara.jpeg",
    },
    {
      name: "Jensen Ackles",
      poster: "/images/actor/Kari Urban.jpeg",
    },
  ],
};

export default function Detail() {
  const data = useSelector((state) => state.movies.moviesDetail);
  // const [data, setData] = useState(new Movie());
  useEffect(() => {
    // setData(movie);
  }, []);
  return (
    <>
      <div className="detail">
        <div className="movie_detail">
          <h2>{data?.name}</h2>
          <p>{data?.description}</p>
          <div className="details">
            <h6>A Netflix Original Film</h6>
            <h5 id="gen">{data?.genre}</h5>
            <h4 id="date">{data?.date}</h4>
            <h3 id="rate">
              <span>IMDB</span>
              <i className="bi bi-star-fill"></i>
              {data?.imdb}
            </h3>
          </div>
        </div>
        <div className="actors">
          <ul>
            {data?.actors?.map((item, index) => (
              <li>
                <img src={item.poster} alt="" />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
