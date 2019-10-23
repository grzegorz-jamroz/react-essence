import {
  FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_ERROR,
  FETCHING_PRODUCTS_SUCCESS,
  SHOP_FILTERS_SORT_BY,
  SORT_BY_PRICE_HIGH_LOW
} from "../actions/shopFiltersActions";
import { ERROR, FETCHING, SUCCESS } from "./statuses";

const initialState = {
  productsStatus: null,
  sortBy: SORT_BY_PRICE_HIGH_LOW,
};

const shopFiltersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCHING_PRODUCTS:
      return { ...initialState, productsStatus: FETCHING };
    case FETCHING_PRODUCTS_SUCCESS:
      return { ...state, productsStatus: SUCCESS, products: payload };
    case FETCHING_PRODUCTS_ERROR:
      return { ...state, productsStatus: ERROR, products: payload };
    case SHOP_FILTERS_SORT_BY:
      return { ...state, sortBy: payload };
    default:
      return state;
  }
};

export default shopFiltersReducer;
