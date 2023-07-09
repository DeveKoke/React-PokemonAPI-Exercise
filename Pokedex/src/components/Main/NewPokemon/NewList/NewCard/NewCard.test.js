import React from "react";
import { shallow } from "enzyme";
import NewCard from "./NewCard";

describe("NewCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
