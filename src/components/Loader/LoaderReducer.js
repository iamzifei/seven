// Import Actions
import * as actions from "./LoaderActions";

// Initial State
const initialState = {
  pageLoading: false
};

// Reducer
const Reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case actions.PAGE_LOAD_START:
      return {
        ...state,
        pageLoading: true
      };
    case actions.PAGE_LOAD_END:
      return {
        ...state,
        pageLoading: false
      };
    default:
      return state;
  }
};

export default Reducer;
