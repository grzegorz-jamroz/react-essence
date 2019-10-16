import {
  FETCHING_CART,
  FETCHING_CART_SUCCESS,
  FETCHING_CART_ERROR,
  SET_CART_TOTAL
} from "../actions/cartActions";

const initialState = {
  status: null,
  cart: {},
  cartItems: {},
  receivedAt: Date.now()
};

const cartReducer = (state = initialState, action) => {
  const {cart, receivedAt, payload} = action;
  switch (action.type) {
    case FETCHING_CART:
      return { ...initialState, status: FETCHING_CART, receivedAt };
    case FETCHING_CART_SUCCESS:
      return { ...state, status: FETCHING_CART_SUCCESS, cart, receivedAt  };
    case FETCHING_CART_ERROR:
      return { ...state, status: FETCHING_CART_ERROR, cart, receivedAt };

    case SET_CART_TOTAL:
      const updatedCart = Object.assign({}, state.cart);
      updatedCart.total = payload;
      return { ...state, cart: updatedCart, receivedAt };
    default:
      return state;
  }
};

export default cartReducer;
