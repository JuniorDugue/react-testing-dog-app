import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./index";

//will run after each test
afterEach(rtl.cleanup);

test("Render the app", () => {
  const wrapper = rtl.render(<App />);
  wrapper.debug(wrapper.queryByPlaceholderText('Image Count'))
  wrapper.debug(wrapper.queryByText('The Dog Website'));
});

//go in terminal & run "npm test"
