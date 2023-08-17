import { ContactData, ContactStateStructure } from "../../../types";
import {
  contactReducer,
  initialContactState,
  selectContactActionCreator,
} from "../contactSlice";

describe("Given a selectContact reducer", () => {
  describe("When it receives a currentState with a initial contact and a new contact as a payload", () => {
    test("Then it should return a state with the property friend updated", () => {
      const currentContactState: ContactStateStructure = initialContactState;
      const newContact: ContactData = {
        name: "John",
        id: "d3r2f",
        image: "",
        balance: 10,
      };

      const selectContactAction = selectContactActionCreator(newContact);

      const newContactState = contactReducer(
        currentContactState,
        selectContactAction
      );

      expect(newContactState.friend.name).toBe(newContact.name);
    });
  });
});
