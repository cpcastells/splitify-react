import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import AddFriendForm from "./AddFriendForm";
import renderWithProviders from "../../utils/testUtils";

describe("Given an AddFriendForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a name input", () => {
      const expectedText = /name/i;
      const onAddFriendForm = vi.fn();

      renderWithProviders(<AddFriendForm onAddFriendForm={onAddFriendForm} />);
      const field = screen.getByLabelText(expectedText);

      expect(field).toBeInTheDocument();
    });

    test("Then it should show a image url input", () => {
      const expectedText = /image/i;
      const onAddFriendForm = vi.fn();

      renderWithProviders(<AddFriendForm onAddFriendForm={onAddFriendForm} />);
      const field = screen.getByLabelText(expectedText);

      expect(field).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Generate random Avatar'", () => {
      const expectedText = /generate random avatar/i;
      const onAddFriendForm = vi.fn();

      renderWithProviders(<AddFriendForm onAddFriendForm={onAddFriendForm} />);
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Add'", () => {
      const expectedText = /Add/i;
      const onAddFriendForm = vi.fn();

      renderWithProviders(<AddFriendForm onAddFriendForm={onAddFriendForm} />);
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a button with a close icon'", () => {
      const expectedText = /close icon/i;
      const onAddFriendForm = vi.fn();

      renderWithProviders(<AddFriendForm onAddFriendForm={onAddFriendForm} />);
      const icon = screen.getByAltText(expectedText);

      expect(icon).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user click on Generate Random Avatar button", () => {
    test("Then it should show a random url in the image input", async () => {
      const buttonText = /generate random avatar/i;
      const inputLabelText = /image/i;
      const expectedRandomWord = /pravatar/i;
      const onAddFriendForm = vi.fn();

      renderWithProviders(<AddFriendForm onAddFriendForm={onAddFriendForm} />);

      const button = screen.getByRole("button", { name: buttonText });
      await userEvent.click(button);
      const field = screen.getByLabelText(inputLabelText);

      expect(field).toBeTruthy();
      expect(field).toHaveAttribute(
        "value",
        expect.stringMatching(expectedRandomWord)
      );
    });
  });
  describe("When it is rendered and the user only fills the name field", () => {
    test("Then the Add button should be disabled", async () => {
      const buttonText = /add/i;
      const inputNameLabelText = /name/i;
      const nameText = "Juan";
      const onAddFriendForm = vi.fn();

      renderWithProviders(<AddFriendForm onAddFriendForm={onAddFriendForm} />);

      const nameField = screen.getByLabelText(inputNameLabelText);
      await userEvent.type(nameField, nameText);
      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeDisabled();
    });
  });
  describe("When it is rendered and the user fills all required fields", () => {
    test("Then the Add button should be enabled", async () => {
      const buttonText = /add/i;
      const inputImageLabelText = /image/i;
      const inputNameLabelText = /name/i;
      const imageText = "https://i.pravatar.cc/";
      const nameText = "Juan";
      const onAddFriendForm = vi.fn();

      renderWithProviders(<AddFriendForm onAddFriendForm={onAddFriendForm} />);

      const imageField = screen.getByLabelText(inputImageLabelText);
      const nameField = screen.getByLabelText(inputNameLabelText);

      await userEvent.type(imageField, imageText);
      await userEvent.type(nameField, nameText);

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeEnabled();
    });
  });
});
