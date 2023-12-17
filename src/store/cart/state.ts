import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../models/cart";
import CartApi from "../../apis/cartApi";

const initCart: Cart[] = [];
const { save, getCarts } = CartApi();

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartTotal: 0,
    carts: initCart,
    isFetch: false,
  },
  reducers: {
    updateTotalCart: (state, action: { type: string; payload: number }) => {
      console.log("updateTotalCart")
      state.cartTotal = action?.payload;
    },
    setCarts: (state, action: { type: string; payload: Array<Cart> }) => {
      state.carts = action.payload;
    },
    getCartFetch: (state) => {
      state.isFetch = true;
    },
    saveCart: (state, action: { type: string; payload: Cart }) => {
      console.log("Fetch Cart");
      save(action.payload);
    },
  },
});

export const { updateTotalCart, getCartFetch, setCarts, saveCart } = cartSlice.actions;

export default cartSlice.reducer;
