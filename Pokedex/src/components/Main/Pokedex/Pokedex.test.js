import React from "react";
import { shallow } from "enzyme";
import Pokedex from "./Pokedex";

describe("Pokedex", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokedex />);
    expect(wrapper).toMatchSnapshot();
  });
});
