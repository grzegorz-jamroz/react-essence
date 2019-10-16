import { firestore } from "../Firebase";
import { collectIdsAndDocs } from "../Firebase/utilities";
import Cart from "../domain/Cart";

export const UPDATE_CART_ITEMS = "UPDATE_CART_ITEMS";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export const UPDATE_CART = "UPDATE_CART";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const FETCHING_CART = "FETCHING_CART";
export const FETCHING_CART_SUCCESS = "FETCHING_CART_SUCCESS";
export const FETCHING_CART_ERROR = "FETCHING_CART_ERROR";

const fetchingCart = () => ({ type: FETCHING_CART, receivedAt: Date.now() });
const fetchingCartSuccess = cart => ({ type: FETCHING_CART_SUCCESS, payload: cart, receivedAt: Date.now() });
const fetchingCartError = cart => ({ type: FETCHING_CART_ERROR, payload: cart, receivedAt: Date.now() });

export const updateCart = cart => ({ type: UPDATE_CART, payload: cart, receivedAt: Date.now() });

export const updateCartItems = cartItems => ({ type: UPDATE_CART_ITEMS, payload: cartItems, receivedAt: Date.now() });
export const removeCartItem = itemId => ({ type: REMOVE_CART_ITEM, payload: itemId, receivedAt: Date.now() });

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
      dispatch(updateCartItems(cart.items ?? []));
      dispatch(fetchingCartSuccess(new Cart(cart)));
    } catch (e) {
      dispatch(fetchingCartError(e));
    }
  };
};

