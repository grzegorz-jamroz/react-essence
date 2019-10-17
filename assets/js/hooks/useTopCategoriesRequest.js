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

const useTopCategoriesRequest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const requestTopCategories = async () => {
    dispatch(fetching());

    try {
      const snapshot = await firestore
        .collection("categories")
        .where("parentId", "==", "")
        .orderBy("name", "asc")
        .get();
      const categories = snapshot.docs.map(collectIdsAndDocs);

      dispatch(success(categories));
    } catch (e) {
      dispatch(error(e));
    }
  };

  return [state, requestTopCategories];
};

export default useTopCategoriesRequest;
