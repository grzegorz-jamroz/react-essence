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

const useProductsRequest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const requestProducts = async () => {
    dispatch(fetching());

    try {
      const snapshot = await firestore.collection("products").get();
      const products = snapshot.docs.map(collectIdsAndDocs);
      dispatch(success(products));
    } catch (e) {
      dispatch(error(e));
    }
  };

  return [state, requestProducts];
};

export default useProductsRequest;
