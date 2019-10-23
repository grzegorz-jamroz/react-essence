import { useReducer } from "react";
import { firestore } from "../Firebase";
import { collectIdsAndDocs } from "../Firebase/utilities";
import {
  reducer,
  fetching,
  success,
  error,
  initialState
} from "../reducers/statuses";
import { SORT_BY_PRICE_HIGH_LOW, SORT_BY_PRICE_LOW_HIGH } from "../actions/shopFiltersActions";

const convertSortBy = sortBy => {
  switch (sortBy) {
    case SORT_BY_PRICE_HIGH_LOW:
      return { field: "unitPrice", direction: "desc" };
    case SORT_BY_PRICE_LOW_HIGH:
    default:
      return { field: "unitPrice", direction: "asc" };
  }
};

const useProductsRequest = ({ sortBy = {} } = {}) => {
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
