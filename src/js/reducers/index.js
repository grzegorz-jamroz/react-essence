import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import shopFiltersReducer from "./shopFiltersReducer";

export default combineReducers({
  cartReducer,
  shopFiltersReducer
});
