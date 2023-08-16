import { render, screen } from "@testing-library/react";
import ContactList from "./ContactList";
import { contactMockList } from "../../mocks/mocks";

describe("Given an ContactList component", () => {
  describe("When it receives a list of Friends", () => {
    const friendsList = contactMockList;

    test("Then it should show a heading with the name 'Johnny'", () => {
      const expectedText = /johnny/i;

      render(<ContactList contactList={friendsList} />);

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });

    test("Then it should renders a list of 3 friends", () => {
      render(<ContactList contactList={friendsList} />);

      const friendElements = screen.getAllByRole("listitem");

      expect(friendElements).toHaveLength(3);
    });
  });
});
