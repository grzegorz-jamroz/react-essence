import createStateContext from "./state";

const initialState = 9;

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";

const increment = () => ({
  type: INCREMENT
});
const decrement = () => ({
  type: DECREMENT
});
const add = payload => ({
  type: ADD,
  payload
});
const subtract = payload => ({
  type: SUBTRACT,
  payload
});

export { increment, decrement, add, subtract };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ADD":
      return state + action.payload;
    case "SUBTRACT":
      return state - action.payload;
    default:
      return state;
  }
};

const { useStateValue, StateProvider } = createStateContext(
  reducer,
  initialState
);

const useCartItemsQuantityState = useStateValue;
const CartItemsQuantityState = StateProvider;

export { useCartItemsQuantityState, CartItemsQuantityState };
