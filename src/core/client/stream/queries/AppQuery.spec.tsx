import { shallow } from "enzyme";
import React from "react";

import { render } from "./AppQuery";

it("renders app", () => {
  const data = {
    props: {} as any,
    error: null,
  };
  const wrapper = shallow(React.createElement(() => render(data)));
  expect(wrapper).toMatchSnapshot();
});

it("renders loading", () => {
  const data = {
    props: null,
    error: null,
  };
  const wrapper = shallow(React.createElement(() => render(data)));
  expect(wrapper).toMatchSnapshot();
});

it("renders error", () => {
  const data = {
    props: null,
    error: new Error("error"),
  };
  const wrapper = shallow(React.createElement(() => render(data)));
  expect(wrapper).toMatchSnapshot();
});