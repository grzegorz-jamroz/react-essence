import { useReducer } from "react";
import { firestore } from "../Firebase";
import { collectIdsAndDocs } from "../Firebase/utilities";
import Cart from "../domain/Cart";

const initialState = {
  status: null,
  response: null,
};

/**
 * Actions
 */
const FETCHING = "FETCHING";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

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
      return { ...state, status: SUCCESS, response };
    case ERROR:
      return { ...state, status: ERROR, response };
    default:
      return state;
  }
};

const useCartRequest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const requestCart = async () => {
    dispatch(fetching());

    try {
      const snapshot = await firestore
        .collection("carts")
        .limit(1)
        .get();
      let cart = snapshot.docs.map(collectIdsAndDocs);
      dispatch(success(new Cart(cart[0] ?? [])));
    } catch (e) {
      dispatch(error(e));
    }
  };

  return [state, requestCart];
};

export default useCartRequest;
