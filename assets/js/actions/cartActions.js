import { firestore } from "../Firebase";
import { collectIdsAndDocs } from "../Firebase/utilities";
import Cart from "../domain/Cart";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

const fetching = () => ({ type: FETCHING, receivedAt: Date.now() });
const success = response => ({ type: SUCCESS, response, receivedAt: Date.now() });
const error = response => ({ type: ERROR, response, receivedAt: Date.now() });

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

