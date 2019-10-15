import {
  FETCHING,
  SUCCESS, ERROR
} from "../actions/cartActions";

const initialState = {
  status: null,
  response: {},
  receivedAt: Date.now()
};

const cartReducer = (state = initialState, action) => {
  const {response, receivedAt} = action;
  switch (action.type) {
    case FETCHING:
      return { ...initialState, status: FETCHING, receivedAt };
    case SUCCESS:
      return { ...state, status: SUCCESS, response, receivedAt  };
    case ERROR:
      return { ...state, status: ERROR, response, receivedAt };
    default:
      return state;
  }
};

export default cartReducer;
