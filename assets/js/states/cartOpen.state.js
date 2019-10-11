import createStateContext from "./state";

const initialState = false;

const TOGGLE = "TOGGLE";
const OPEN = "OPEN";
const CLOSE = "CLOSE";

const toggle = () => ({
  type: TOGGLE
});
const open = () => ({
  type: OPEN
});
const close = () => ({
  type: CLOSE
});

export { toggle, open, close };

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE:
      return !state;
    case OPEN:
      return true;
    case CLOSE:
    default:
      return false;
  }
};

const { useStateValue, StateProvider } = createStateContext(
  reducer,
  initialState
);

const useCartOpenState = useStateValue;
const CartOpenState = StateProvider;

export { useCartOpenState, CartOpenState };
