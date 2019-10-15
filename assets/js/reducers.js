import { combineReducers } from "redux";
import {
  REQUEST_CART,
  RECEIVE_CART
} from "./actions";

const initState = {
  isFetching: false,
  didInvalidate: false,
  items: []
};

const cart = (state = initState, action) => {
  switch (action.type) {
    case REQUEST_CART:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_CART:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.cart,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({ cart });

export default rootReducer;
