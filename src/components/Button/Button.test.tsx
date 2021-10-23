import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("should render button with its content", () => {
  const text = "text";

  render(<Button>{text}</Button>);

  const buttonContent = screen.getByText(text);
  expect(buttonContent).toBeInTheDocument();
});
