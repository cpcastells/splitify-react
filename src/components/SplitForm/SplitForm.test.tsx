import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import SplitForm from "./SplitForm";
import { contactMockList } from "../../mocks/mocks";
import renderWithProviders from "../../utils/testUtils";

describe("Given an SplitForm component", () => {
  const onCloseSplitForm = vi.fn();
  const contact = contactMockList[0];

  describe("When it is rendered", () => {
    test("Then it should show a bill value input", () => {
      const expectedText = /bill value/i;

      renderWithProviders(
        <SplitForm onCloseSplitForm={onCloseSplitForm} contact={contact} />
      );
      const field = screen.getByLabelText(expectedText);

      expect(field).toBeInTheDocument();
    });

    test("Then it should show a dollar icon", () => {
      const expectedText = /dollar icon/i;

      renderWithProviders(
        <SplitForm onCloseSplitForm={onCloseSplitForm} contact={contact} />
      );
      const field = screen.getByAltText(expectedText);

      expect(field).toBeInTheDocument();
    });

    test("Then it should show a 'your expense' input", () => {
      const expectedText = /your expense/i;

      renderWithProviders(
        <SplitForm onCloseSplitForm={onCloseSplitForm} contact={contact} />
      );
      const field = screen.getByLabelText(expectedText);

      expect(field).toBeInTheDocument();
    });

    test("Then it should show a user icon", () => {
      const expectedText = /user icon/i;

      renderWithProviders(
        <SplitForm onCloseSplitForm={onCloseSplitForm} contact={contact} />
      );
      const field = screen.getByAltText(expectedText);

      expect(field).toBeInTheDocument();
    });

    test("Then it should show a friend's expense input", () => {
      const expectedText = /friend's expense:/i;

      renderWithProviders(
        <SplitForm onCloseSplitForm={onCloseSplitForm} contact={contact} />
      );
      const field = screen.getByLabelText(expectedText);

      expect(field).toBeInTheDocument();
    });

    test("Then it should show a users icon", () => {
      const expectedText = /users icon/i;

      renderWithProviders(
        <SplitForm onCloseSplitForm={onCloseSplitForm} contact={contact} />
      );
      const field = screen.getByAltText(expectedText);

      expect(field).toBeInTheDocument();
    });

    test("Then it should show a who pays select", () => {
      const expectedText = /who is paying/i;

      renderWithProviders(
        <SplitForm onCloseSplitForm={onCloseSplitForm} contact={contact} />
      );
      const field = screen.getByLabelText(expectedText);

      expect(field).toBeInTheDocument();
    });

    test("Then it should show a who icon", () => {
      const expectedText = /mood icon/i;

      renderWithProviders(
        <SplitForm onCloseSplitForm={onCloseSplitForm} contact={contact} />
      );
      const field = screen.getByAltText(expectedText);

      expect(field).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Close'", () => {
      const expectedText = /close/i;

      renderWithProviders(
        <SplitForm onCloseSplitForm={onCloseSplitForm} contact={contact} />
      );
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Split Bill'", () => {
      const expectedText = /split bill/i;

      renderWithProviders(
        <SplitForm onCloseSplitForm={onCloseSplitForm} contact={contact} />
      );
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user click on the close button", () => {
    test("Then it should call the received action", () => {
      const expectedText = /close/i;

      renderWithProviders(
        <SplitForm onCloseSplitForm={onCloseSplitForm} contact={contact} />
      );
      const button = screen.getByRole("button", { name: expectedText });
      userEvent.click(button);

      waitFor(() => {
        expect(onCloseSplitForm).toHaveBeenCalled();
      });
    });
  });
});
