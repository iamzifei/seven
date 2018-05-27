import * as actions from "./SidebarActions";

describe("Sidebar actions test", () => {
  it("sideBarStateChange action test", () => {
    const startLoading = {
      type: actions.SIDEBAR_STATUS_CHANGE
    };
    expect(actions.sideBarStateChange()).toEqual(startLoading);
  });
});
