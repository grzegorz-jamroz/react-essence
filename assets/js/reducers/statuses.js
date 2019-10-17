export const initialState = {
  status: null,
  response: null
};

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const fetching = () => ({ type: FETCHING });
export const success = response => ({ type: SUCCESS, response });
export const error = response => ({ type: ERROR, response });

export const reducer = (state = initialState, { type, response } = {}) => {
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
