import {
  FETCHING,
  SUCCESS,
  ERROR,
  FETCHING_CART,
  FETCHING_CART_SUCCESS,
  FETCHING_CART_ERROR,
  SET_CART_TOTAL,
  SET_CART_ITEMS,
  UPDATE_CART
} from "../actions/cartActions";

const initialState = {
  cart: {},
  cartStatus: null,
  cartItems: {},
  receivedAt: Date.now()
};

const cartReducer = (state = initialState, action) => {
  const {receivedAt, payload} = action;
  const cart = Object.assign({}, state.cart);
  switch (action.type) {
    case FETCHING_CART:
      return { ...initialState, cartStatus: FETCHING, receivedAt };
    case FETCHING_CART_SUCCESS:
      return { ...state, cartStatus: SUCCESS, cart: payload, receivedAt  };
    case FETCHING_CART_ERROR:
      return { ...state, cartStatus: ERROR, cart: payload, receivedAt };

    case SET_CART_ITEMS:
      return { ...state, cartItems: payload, receivedAt };

    case UPDATE_CART:
      return { ...state, cart: payload, receivedAt };
    case SET_CART_TOTAL:
      cart.total = payload;
      return { ...state, cart: cart, receivedAt };

    default:
      return state;
  }
};

export default cartReducer;
