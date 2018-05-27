import reducer from "./LoaderReducer";
import * as actions from "./LoaderActions";

const initialState = {
  pageLoading: false
};

describe("LoaderReducer tests", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle PAGE_LOAD_START", () => {
    expect(
      reducer(
        {},
        {
          type: actions.PAGE_LOAD_START
        }
      )
    ).toEqual({ pageLoading: true });
  });

  it("should handle PAGE_LOAD_END", () => {
    expect(
      reducer(
        {},
        {
          type: actions.PAGE_LOAD_END
        }
      )
    ).toEqual(initialState);
  });
});
