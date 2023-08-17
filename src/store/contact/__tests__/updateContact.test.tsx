import { initialContacts } from "../../../data/contacts";
import { ContactData, ContactStateStructure } from "../../../types";
import {
  contactReducer,
  initialContactState,
  updateContactActionCreator,
} from "../contactSlice";

describe("Given a updateContact reducer", () => {
  describe("When it receives a currentState and a contact as a payload", () => {
    test("Then it should return a list with and updated contact", () => {
      const currentContactState: ContactStateStructure = initialContactState;
      const updatedContact: ContactData = {
        id: initialContacts[0].id,
        name: "Johnny",
        image:
          "https://cdn.discordapp.com/attachments/1114204200885301331/1141028891218170047/foto.png",
        balance: 10,
      };

      const updateContactAction = updateContactActionCreator(updatedContact);

      const updatedContactState = contactReducer(
        currentContactState,
        updateContactAction
      );

      expect(updatedContactState.friends[0].balance).toBe(10);
    });
  });
});
