import * as actions from "./LoaderActions";

describe("Loader actions test", () => {
  it("startLoading action test", () => {
    const startLoading = {
      type: actions.PAGE_LOAD_START
    };
    expect(actions.startLoading()).toEqual(startLoading);
  });

  it("endLoading action test", () => {
    const endLoading = {
      type: actions.PAGE_LOAD_END
    };
    expect(actions.endLoading()).toEqual(endLoading);
  });
});
