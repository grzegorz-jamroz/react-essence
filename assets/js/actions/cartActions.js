import { firestore } from "../Firebase";
import { collectIdsAndDocs } from "../Firebase/utilities";

export const SET_CART_TOTAL = "SET_CART_TOTAL";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

const fetching = () => ({ type: FETCHING, receivedAt: Date.now() });
const success = cart => ({ type: SUCCESS, cart, receivedAt: Date.now() });
const error = cart => ({ type: ERROR, cart, receivedAt: Date.now() });

export const setCartTotal = payload => ({ type: SET_CART_TOTAL, payload, receivedAt: Date.now() });

export const fetchCart = () => {
  return async dispatch => {
    dispatch(fetching());

    try {
      const snapshot = await firestore
        .collection("carts")
        .limit(1)
        .get();
      let cart = snapshot.docs.map(collectIdsAndDocs);
      cart = cart[0] ?? [];
      dispatch(success(cart));
    } catch (e) {
      dispatch(error(e));
    }
  };
};

