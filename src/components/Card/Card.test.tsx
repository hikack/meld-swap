import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("should render Card with its content & proper className", () => {
  const text = "text";

  const { container } = render(<Card className={text}>{text}</Card>);

  const buttonContent = screen.getByText(text);
  expect(buttonContent).toBeInTheDocument();
  expect(container.firstChild).toHaveClass(text);
});
