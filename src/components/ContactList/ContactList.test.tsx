import { screen } from "@testing-library/react";
import ContactList from "./ContactList";
import { contactMockList } from "../../mocks/mocks";
import { vi } from "vitest";
import renderWithProviders from "../../utils/testUtils";

describe("Given an ContactList component", () => {
  describe("When it receives a list of Friends", () => {
    const friendsList = contactMockList;
    const onSelect = vi.fn();

    test("Then it should show a heading with the name 'Johnny'", () => {
      const expectedText = /johnny/i;

      renderWithProviders(
        <ContactList contactList={friendsList} onSelect={onSelect} />
      );

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });

    test("Then it should renders a list of 3 friends", () => {
      renderWithProviders(
        <ContactList contactList={friendsList} onSelect={onSelect} />
      );

      const friendElements = screen.getAllByRole("listitem");

      expect(friendElements).toHaveLength(3);
    });
  });
});
