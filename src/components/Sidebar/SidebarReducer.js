import * as actions from "./SidebarActions";

const initialState = {
  sideBarOpen: true
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.SIDEBAR_STATUS_CHANGE:
      return {
        ...state,
        sideBarOpen: payload
      };
    default:
      return state;
  }
};

export default reducer;
