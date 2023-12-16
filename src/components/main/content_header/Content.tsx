import { useEffect, useState } from "react";
import "./content.scss";
import { useSelector } from "react-redux";
import ModalPortal from "../../../ModalPortal";
import { useDispatch } from "react-redux";
import { showModal } from "../../../store/movie/state";
import Order from "../order/Order";

export default function Content({
  watchTrailler,
}: {
  watchTrailler: () => void;
}) {
  const dispatch = useDispatch();
  const isPlayVideo = useSelector((state) => state.movies.isPlayVideo);
  const isShowModal = useSelector((state) => state.movies.isShowModal);
  const data = useSelector((state) => state.movies.moviesDetail);

  useEffect(() => {}, []);

  const onShowModal = () => {
    dispatch(showModal());
  };

  const submitCheckout = () => {};

  return (
    <>
      <div className="content">
        <h1 id="title">{data.name}</h1>
        <p>{data.shortDescription}</p>
        <div className="details">
          <h6>A Netflix Original Film</h6>
          <h5 id="gen">{data.genre}</h5>
          <h4 id="date">{data.date}</h4>
          <h3 id="rate">
            <span>IMDB</span>
            <i className="bi bi-star-fill"></i>
            {data.imdb}
          </h3>
        </div>
        <div className="btns">
          <a href="#" id="play" onClick={watchTrailler}>
            {isPlayVideo ? (
              <>
                {" "}
                Play <i className="bi bi-pause-fill"></i>{" "}
              </>
            ) : (
              <>
                watch <i className="bi bi-play-fill"></i>{" "}
              </>
            )}
          </a>
          <a href="#" id="download_main" onClick={() => dispatch(showModal())}>
            <i className="bi bi-cloud-arrow-down-fill"></i>
          </a>
        </div>
      </div>
      {isShowModal ? (
        <ModalPortal
          title={"Order"}
          onSubmit={submitCheckout}
          onShowModal={onShowModal}
          child={<Order />}
          style={{ background: 'rgb(56, 52, 52);' }}
          isFooter={false}
        />
      ) : null}
    </>
  );
}
