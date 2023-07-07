import React from "react";
import { shallow } from "enzyme";
import PokeCard from "./PokeCard";

describe("PokeCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokeCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
