import { firestore } from "./Firebase";
import { collectIdsAndDocs } from "./Firebase/utilities";
import Cart from "./domain/Cart";

export const REQUEST_CART = "REQUEST_CART";
export const RECEIVE_CART = "RECEIVE_CART";

const requestCart = () => ({
  type: REQUEST_CART
});

const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart: cart,
  receivedAt: Date.now()
});

const fetchCart = () => {
  return async dispatch => {
    dispatch(requestCart());

    const snapshot = await firestore
      .collection("carts")
      .limit(1)
      .get();
    let cart = snapshot.docs.map(collectIdsAndDocs);
    cart = new Cart(cart[0] ?? []);
    dispatch(receiveCart(cart));
  };
};

export const requestCartIfNeeded = () => {
  return dispatch => {
    return dispatch(fetchCart());
  };
};
