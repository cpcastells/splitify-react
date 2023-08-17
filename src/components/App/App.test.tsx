import { screen } from "@testing-library/react";
import App from "./App";
import renderWithProviders from "../../utils/testUtils";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the logo of Splitify", () => {
      const expectedText = /splitify logo/i;

      renderWithProviders(<App />);

      const text = screen.getByAltText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
