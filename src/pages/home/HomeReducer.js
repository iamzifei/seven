import * as actions from "./HomeActions";

const initialState = {
  data: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case actions.GET_USER_SUCCESS:
      return {
        ...state,
        data
      };
    case actions.GET_USER_FAILED:
      return {
        ...state,
        error: data
      };
    default:
      return state;
  }
};

export default reducer;
