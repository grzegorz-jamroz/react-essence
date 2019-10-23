import {
  SHOP_FILTERS_SORT_BY,
  SORT_BY_PRICE_HIGH_LOW
} from "../actions/shopFiltersActions";

const initialState = {
  sortBy: SORT_BY_PRICE_HIGH_LOW
};

const shopFiltersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOP_FILTERS_SORT_BY:
      return { ...state, sortBy: payload };
    default:
      return state;
  }
};

export default shopFiltersReducer;
