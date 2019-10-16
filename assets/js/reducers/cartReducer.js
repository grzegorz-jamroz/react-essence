import {
  FETCHING,
  SUCCESS,
  ERROR,
  FETCHING_CART,
  FETCHING_CART_SUCCESS,
  FETCHING_CART_ERROR,
  UPDATE_CART,
  UPDATE_CART_ITEMS,
  REMOVE_CART_ITEM,
  ADD_CART_ITEM
} from "../actions/cartActions";

const initialState = {
  cart: {},
  cartStatus: null,
  cartItems: [],
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

    case UPDATE_CART_ITEMS:
      return { ...state, cartItems: payload, receivedAt };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.product.id !== payload),
        receivedAt
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
        receivedAt
      };

    case UPDATE_CART:
      if (cart.quantity === 0) {
        cart.total = 0;
        cart.delivery = 0;
      }
      return { ...state, cart: cart, receivedAt };

    default:
      return state;
  }
};

export default cartReducer;
