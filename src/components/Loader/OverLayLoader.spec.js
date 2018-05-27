import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import Loader from "./Loader";
import OverLayLoader from "./OverLayLoader";

describe("Overlay loader testing", () => {
  const enzymeWrapper = shallow(<OverLayLoader />);
  it("renders with right snapshot", () => {
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });

  it("renders with right class and child", () => {
    expect(enzymeWrapper.hasClass("overlay-loader")).toBe(true);
    expect(enzymeWrapper.find(Loader).length).toBe(1);
  });
});
