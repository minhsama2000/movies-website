import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setIsDisableContent,
  setIsDisableVideo,
} from "../../../store/movie/state";
import { useSelector } from "react-redux";
import "./cart.scss";
import AButton from "../../parts/Button/AButton";

const listCart = [
  {
    id: 0,
    name: "The Boys",
    price: "13",
    currency: "$",
    resolution: 480,
  },
  {
    id: 1,
    name: "The Boys",
    price: "19",
    currency: "$",
    resolution: 720,
  },
  {
    id: 2,
    name: "The Boys",
    price: "24",
    currency: "$",
    resolution: 1080,
  },
  {
    id: 3,
    name: "The Boys",
    price: "24",
    currency: "$",
    resolution: 1080,
  },
  {
    id: 4,
    name: "The Boys",
    price: "24",
    currency: "$",
    resolution: 1080,
  },
];

export default function Cart() {
  const dispatch = useDispatch();

  const isDisableContent = useSelector(
    (state) => state.movies.isDisableContent
  );
  const isDisableVideo = useSelector((state) => state.movies.isDisableVideo);

  useEffect(() => {
    return () => {
      console.log(isDisableContent, isDisableVideo);
      dispatch(setIsDisableContent(false));
      dispatch(setIsDisableVideo(false));
    };
  }, []);

  const deleteCart = () => {};

  const checkout = () => {};

  return (
    <>
      <div className="cart-container">
        <div className="carts">
          <div className="product-list">
            <table>
              <thead>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Resolution</th>
              </thead>
              <tbody>
                {listCart.map((item, index) => (
                  <tr className="cart">
                    <td>
                      <span>
                        <i className="bi bi-x"></i>
                      </span>
                    </td>
                    <td>
                      <p>{item.name}</p>
                    </td>
                    <td>
                      <p>
                        {item.currency}
                        {item.price}
                      </p>
                    </td>
                    <td>
                      <p>{item.resolution}p</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <form className="checkout">
            <ul>
              <li>
                <p>
                  Total: <span>$34</span>
                </p>
              </li>
              <li>
                <label htmlFor="fullname">Full name</label>
                <input id="fullname" type="text" />
              </li>
              <li>
                <label htmlFor="phone_number">Phone number</label>
                <input id="phone_number" type="text" />
              </li>
              <li>
                <label htmlFor="email">Email</label>
                <input id="email" type="email"/>
              </li>
              <li>
                <label htmlFor="accept_card">Accept card</label>
                <div className="icon-container">
                  <i className="fab fa-cc-visa" style={{ color: "navy" }}></i>
                  <i className="fab fa-cc-amex" style={{ color: "blue" }}></i>
                  <i
                    className="fab fa-cc-mastercard"
                    style={{ color: "red" }}
                  ></i>
                  <i
                    className="fab fa-cc-discover"
                    style={{ color: "orange" }}
                  ></i>
                </div>
              </li>
              <li>
                <AButton
                  className="button-success"
                  onHandleButton={checkout}
                  styleCustom={{}}
                  title="Checkout"
                  type="button"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}
