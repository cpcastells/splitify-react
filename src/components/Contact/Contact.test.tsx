import { render, screen } from "@testing-library/react";
import Contact from "./Contact";
import { contactMockList } from "../../mocks/mocks";

describe("Given an Contact component", () => {
  describe("When it receives the data of Johnny", () => {
    test("Then it should show a heading with the name 'Johnny'", () => {
      const expectedText = /johnny/i;

      render(<Contact contact={contactMockList[0]} />);

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it receives the data of Johnny", () => {
    test("Then it should show Johnny's picture", () => {
      const expectedText = /portrait of johnny/i;

      render(<Contact contact={contactMockList[0]} />);

      const text = screen.getByAltText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
