import { firestore } from "../Firebase";
import { collectIdsAndDocs } from "../Firebase/utilities";
import Cart from "../domain/Cart";

export const REQUEST_CART = "REQUEST_CART";
export const RECEIVE_CART = "RECEIVE_CART";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

const fetching = () => ({ status: FETCHING, type: FETCHING, receivedAt: Date.now() });
const success = response => ({ status: SUCCESS, type: SUCCESS, response, receivedAt: Date.now() });
const error = response => ({ status: ERROR, type: ERROR, response, receivedAt: Date.now() });

const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart: cart,
  receivedAt: Date.now()
});

export const fetchCart = () => {
  return async dispatch => {
    dispatch(fetching());

    try {
      const snapshot = await firestore
        .collection("carts")
        .limit(1)
        .get();
      let cart = snapshot.docs.map(collectIdsAndDocs);
      cart = new Cart(cart[0] ?? []);
      dispatch(success(cart));
    } catch (e) {
      dispatch(error(e));
    }
  };
};

