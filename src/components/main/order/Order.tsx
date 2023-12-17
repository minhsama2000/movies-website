import { useDispatch } from "react-redux";
import "./order.scss";
import { showModal } from "../../../store/movie/state";
import { useSelector } from "react-redux";
import { Cart } from "../../../models/cart";
import Movie from "../../../models/movie";
import { saveCart } from "../../../store/cart/state";

const orders = [
  {
    id: 0,
    type: "Normal",
    describe: "The essentials to provide your best work for clients.",
    price: 13,
    currency: "$",
    benefit: {
      resolution: [480],
      isDownload: false,
      device: 1,
    },
  },
  {
    id: 2,
    type: "Popular",
    describe: "A plan that scales with your rapidly growing business.",
    price: 19,
    currency: "$",
    benefit: {
      resolution: [480, 720],
      isDownload: true,
      device: 2,
    },
  },
  {
    id: 3,
    type: "Enterprise",
    describe: "Dedicated support and infrastructure for your company.",
    price: 24,
    currency: "$",
    benefit: {
      resolution: [480, 720, 1080],
      isDownload: true,
      device: 4,
    },
  },
];

export default function Order() {
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movies.moviesDetail);
  // const { save } = CartApi();

  const handleAddCart = async (id: number) => {
    let cart: Cart = {};
    console.log(movieDetail);
    cart.movie = movieDetail as Movie;
    cart.quantity = 1;
    switch (id) {
      case 0:
        cart.price = orders[id].price;
        break;
      case 1:
        cart.price = orders[id].price;
        break;
      case 2:
        cart.price = orders[id].price;
        break;
      default:
        break;
    }
    dispatch(saveCart(cart))
    dispatch(showModal());
  };

  return (
    <>
      <div className="list-order">
        {orders.map((item, key) => (
          <div
            key={key}
            className="order"
            onClick={() => handleAddCart(item.id)}
          >
            <div className="order-detail">
              <h3>{item.type}</h3>
              <p className="describe">{item.describe}</p>
              <p className="price">
                {item.price} <span>{item.currency}</span>
              </p>
              <div className="benefit">
                <ul>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>
                      {item.benefit.resolution.map((element) => element + "p ")}
                    </span>
                  </li>
                  {item.benefit.isDownload ? (
                    <li>
                      <i className="bi bi-check"></i>
                      <span>Download</span>
                    </li>
                  ) : (
                    ""
                  )}
                  <li>
                    <i className="bi bi-check"></i>
                    <span>Device: {item.benefit.device}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
