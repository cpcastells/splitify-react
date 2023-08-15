import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the logo of Splitify", () => {
      const expectedText = /splitify logo/i;

      render(<App />);

      const text = screen.getByAltText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
