import {
  FETCHING,
  SUCCESS,
  ERROR
} from "../actions/cartActions";

const initialState = {
  status: null,
  cart: {},
  receivedAt: Date.now()
};

const cartReducer = (state = initialState, action) => {
  const {cart, receivedAt} = action;
  switch (action.type) {
    case FETCHING:
      return { ...initialState, status: FETCHING, receivedAt };
    case SUCCESS:
      return { ...state, status: SUCCESS, cart, receivedAt  };
    case ERROR:
      return { ...state, status: ERROR, cart, receivedAt };
    default:
      return state;
  }
};

export default cartReducer;
