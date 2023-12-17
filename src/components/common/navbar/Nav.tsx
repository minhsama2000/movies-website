import { useDispatch } from "react-redux";
import "./nav.scss";
import {
  setIsDisableCart,
  setIsDisableContent,
  setIsDisableVideo,
} from "../../../store/movie/state";
import { getCartFetch } from "../../../store/cart/state";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartTotal = useSelector((state) => state.cart.cartTotal);

  const routerToCart = () => {
    dispatch(setIsDisableContent(true));
    dispatch(setIsDisableVideo(true));
    dispatch(setIsDisableCart(false));
    navigate("/cart");
  };

  useEffect(() => {
    dispatch(getCartFetch());
  }, [cartTotal]);

  return (
    <>
      <nav>
        <div className="logo_ul">
          <img src="images/logo.png" alt="logo" />
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#" id="series">
                Series
              </a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
          </ul>
        </div>
        <div className="search_user">
          <input type="text" placeholder="Search..." id="search_input" />
          <img src="images/user.jpg" alt="" />
          <a onClick={routerToCart} className="cart">
            <i className="bi bi-cart-fill"></i>
            <span>{cartTotal}</span>
          </a>
          <div className="search">
            <a href="#" className="card">
              <img src="images/the boys.jpg" alt="" />
              <div className="cont">
                <h3>The Boys</h3>
                <p>
                  Action, 2021 , <span>IMDB</span>
                  <i className="bi bi-star-fill"></i> 9.6
                </p>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
