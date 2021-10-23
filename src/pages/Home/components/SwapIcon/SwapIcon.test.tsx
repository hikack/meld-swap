import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SwapIcon } from "./SwapIcon";

test("should render SwapIcon and trigger onClick properly", () => {
  const FN = jest.fn();

  const { container } = render(<SwapIcon onClick={FN} />);

  fireEvent.click(container.firstChild);
  expect(FN).toHaveBeenCalledTimes(1);
});
