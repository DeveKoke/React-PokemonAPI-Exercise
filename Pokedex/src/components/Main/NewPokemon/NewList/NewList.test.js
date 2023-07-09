import React from "react";
import { shallow } from "enzyme";
import NewList from "./NewList";

describe("NewList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewList />);
    expect(wrapper).toMatchSnapshot();
  });
});
