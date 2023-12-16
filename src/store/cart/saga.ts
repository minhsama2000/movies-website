import { call, put, take, takeEvery } from "redux-saga/effects";
import cartApi from "../../apis/cartApi";
import { setCarts, updateTotalCart } from "./state";

const { getCarts, getCount } = cartApi();

function* fetchCarts() {
  const response = yield call(() => getCarts(1));
  yield put(setCarts(response.data.data));
  yield put(updateTotalCart(response?.data?.data?.length));
}

function* fetchCount() {
  const response = yield call(() => getCount(1));
  console.log("Fetch count", response);
  yield put(updateTotalCart(response.data.data));
}

function* cartSaga() {
  yield takeEvery("cart/getCartFetch", fetchCarts);
  yield takeEvery("cart/saveCart", fetchCount);
}

export default cartSaga;
