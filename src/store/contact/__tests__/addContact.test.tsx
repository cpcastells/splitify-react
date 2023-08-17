import { initialContacts } from "../../../data/contacts";
import { ContactData, ContactStateStructure } from "../../../types";
import {
  addContactActionCreator,
  contactReducer,
  initialContactState,
} from "../contactSlice";

describe("Given a addContact reducer", () => {
  describe("When it receives a currentState with a list of contacts and a new contact as a payload", () => {
    test("Then it should return a list with one contact more", () => {
      const currentContactState: ContactStateStructure = initialContactState;
      const newContact: ContactData = {
        name: "John",
        id: "d3r2f",
        image: "",
        balance: 10,
      };

      const addContactAction = addContactActionCreator(newContact);

      const newContactState = contactReducer(
        currentContactState,
        addContactAction
      );

      expect(newContactState.friends).toHaveLength(initialContacts.length + 1);
      expect(
        newContactState.friends[newContactState.friends.length - 1].name
      ).toBe("John");
    });
  });
});
