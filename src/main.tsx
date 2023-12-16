import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
// import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.min.css";

import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import movieReducer, { getMoviesFetch } from "./store/movie/state.ts";
import cartReducer from "./store/cart/state.ts";
import movieSaga from "./store/movie/saga.ts";
import cartSaga from "./store/cart/saga.ts";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    movies: movieReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([saga]),
});
saga.run(movieSaga);
saga.run(cartSaga);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
