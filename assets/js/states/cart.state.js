import createStateContext from "./state";

const initialState = {
  status: null,
  response: null,
};

/**
 * Actions
 */
const ADD_CART_ITEM = "ADD_CART_ITEM";

const addCartItem = () => ({ type: ADD_CART_ITEM });

export { addCartItem };

/**
 * Reducer
 */
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return { ...state, status: ADD_CART_ITEM };
    default:
      return state;
  }
};

const { useStateValue, StateProvider } = createStateContext(
  reducer,
  initialState
);


const useCartState = useStateValue;

const CartState = StateProvider;

export { useCartState, CartState };
