import React from "react";
import { shallow } from "enzyme";
import PokemonId from "./PokemonId";

describe("PokemonId", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokemonId />);
    expect(wrapper).toMatchSnapshot();
  });
});
