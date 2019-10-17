import { useReducer } from "react";
import { firestore } from "../Firebase";
import { collectIdsAndDocs } from "../Firebase/utilities";
import { FETCHING, SUCCESS, ERROR } from "../reducers/statuses";

const initialState = {
  status: null,
  categories: [],
};

/**
 * Actions
 */
const fetching = () => ({ type: FETCHING });
const success = response => ({ type: SUCCESS, response });
const error = response => ({ type: ERROR, response });

/**
 * Reducer
 */
const reducer = (state = initialState, { type, response } = {}) => {
  switch (type) {
    case FETCHING:
      return { ...initialState, status: FETCHING };
    case SUCCESS:
      return { ...state, status: SUCCESS, categories: response };
    case ERROR:
      return { ...state, status: ERROR, categories: response };
    default:
      return state;
  }
};

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
