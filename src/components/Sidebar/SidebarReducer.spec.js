import reducer from "./SidebarReducer";
import * as actions from "./SidebarActions";

const initialState = {
  sideBarOpen: true
};

describe("SidebarReducer tests", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle sidebar open", () => {
    expect(
      reducer(
        {},
        {
          type: actions.SIDEBAR_STATUS_CHANGE,
          payload: true
        }
      )
    ).toEqual(initialState);
  });

  it("should handle sidebar close", () => {
    expect(
      reducer(
        {},
        {
          type: actions.SIDEBAR_STATUS_CHANGE,
          payload: false
        }
      )
    ).toEqual({ sideBarOpen: false });
  });
});
