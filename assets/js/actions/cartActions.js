import { firestore } from "../Firebase";
import { collectIdsAndDocs } from "../Firebase/utilities";

export const SET_CART_TOTAL = "SET_CART_TOTAL";

export const FETCHING_CART = "FETCHING_CART";
export const FETCHING_CART_SUCCESS = "FETCHING_CART_SUCCESS";
export const FETCHING_CART_ERROR = "FETCHING_CART_ERROR";

const fetchingCart = () => ({ type: FETCHING_CART, receivedAt: Date.now() });
const fetchingCartSuccess = cart => ({ type: FETCHING_CART_SUCCESS, cart, receivedAt: Date.now() });
const fetchingCartError = cart => ({ type: FETCHING_CART_ERROR, cart, receivedAt: Date.now() });

export const setCartTotal = payload => ({ type: SET_CART_TOTAL, payload, receivedAt: Date.now() });

export const fetchCart = () => {
  return async dispatch => {
    dispatch(fetchingCart());

    try {
      const snapshot = await firestore
        .collection("carts")
        .limit(1)
        .get();
      let cart = snapshot.docs.map(collectIdsAndDocs);
      cart = cart[0] ?? [];
      dispatch(fetchingCartSuccess(cart));
    } catch (e) {
      dispatch(fetchingCartError(e));
    }
  };
};

