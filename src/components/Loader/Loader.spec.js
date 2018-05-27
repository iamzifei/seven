import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import Loader from "./Loader";

describe("Loader testing", () => {
  const enzymeWrapper = shallow(<Loader />);
  it("renders with right snapshot", () => {
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });

  it("renders with right classname", () => {
    expect(enzymeWrapper.hasClass("loader")).toBe(true);
    expect(enzymeWrapper.children("div").length).toBe(4);
    expect(enzymeWrapper.children("div.cube").length).toBe(4);
    expect(enzymeWrapper.children("div.c1").length).toBe(1);
    expect(enzymeWrapper.children("div.c2").length).toBe(1);
    expect(enzymeWrapper.children("div.c3").length).toBe(1);
    expect(enzymeWrapper.children("div.c4").length).toBe(1);
  });
});
