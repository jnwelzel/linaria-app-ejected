import React from "react";
import { GlobalStyles } from "../src/shared/GlobalStyles";

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
