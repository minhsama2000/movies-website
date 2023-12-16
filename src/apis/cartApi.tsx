import axios from "axios";
import { Cart } from "../models/cart";

const env = {
  BASE_URL: "/minhsama/api",
  VERSION1: "/v1",
  DOMAIN: "http://localhost:8080",
};
const baseUrl = env.DOMAIN + env.BASE_URL + env.VERSION1;

export default function CartApi() {
  const getCount = async (userId: number) => {
    try {
      const res = await axios.get(`${baseUrl}/cart/count?userId=${userId}`);
      return res;
    } catch (error) {
      throw error;
    }
  };

  const getCarts = async (userId: number) => {
    try {
      const res = await axios.get(`${baseUrl}/cart/list?userId=${userId}`);
      return res;
    } catch (error) {
      throw error;
    }
  };

  const save = async (cart: Cart) => {
    console.log("Cart save: ", cart)
    try {
      await axios.post(`${baseUrl}/cart/save`, {
        ...cart,
      });
    } catch (error) {
      throw error;
    }
  };

  return {
    getCount,
    getCarts,
    save,
  };
}
