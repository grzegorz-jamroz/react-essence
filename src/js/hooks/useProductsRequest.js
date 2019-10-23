import { useReducer } from "react";
import { firestore } from "../Firebase";
import { collectIdsAndDocs } from "../Firebase/utilities";
import { convertSortBy, SORT_BY_NEWEST } from "../actions/shopFiltersActions";
import {
  reducer,
  fetching,
  success,
  error,
  initialState
} from "../reducers/statuses";

const useProductsRequest = ({ sortBy = SORT_BY_NEWEST } = {}) => {
  sortBy = convertSortBy(sortBy);
  const [state, dispatch] = useReducer(reducer, initialState);

  const requestProducts = async () => {
    dispatch(fetching());

    try {
      let query = firestore.collection("products");

      query = query.orderBy(sortBy.field, sortBy.direction);

      const snapshot = await query.get();

      const products = snapshot.docs.map(collectIdsAndDocs);
      dispatch(success(products));
    } catch (e) {
      dispatch(error(e));
    }
  };

  return [state, requestProducts];
};

export default useProductsRequest;
