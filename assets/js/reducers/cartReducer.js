import {
  FETCHING,
  SUCCESS,
  ERROR,
  SET_CART_TOTAL
} from "../actions/cartActions";

const initialState = {
  status: null,
  cart: {},
  receivedAt: Date.now()
};

const cartReducer = (state = initialState, action) => {
  const {cart, receivedAt, payload} = action;
  switch (action.type) {
    case FETCHING:
      return { ...initialState, status: FETCHING, receivedAt };
    case SUCCESS:
      return { ...state, status: SUCCESS, cart, receivedAt  };
    case ERROR:
      return { ...state, status: ERROR, cart, receivedAt };

    case SET_CART_TOTAL:
      const updatedCart = Object.assign({}, state.cart);
      updatedCart.total = payload;
      return { ...state, status: SUCCESS, cart: updatedCart, receivedAt };
    default:
      return state;
  }
};

export default cartReducer;
