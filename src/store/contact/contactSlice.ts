import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactData, ContactStateStructure } from "../../types";
import { initialContacts } from "../../data/contacts";

export const initialContactState: ContactStateStructure = {
  friends: initialContacts,
  friend: {
    id: "",
    name: "",
    image: "",
    balance: 0,
  },
};

const contactSlice = createSlice({
  name: "contact",
  initialState: initialContactState,
  reducers: {
    addContact: (currentContactState, action: PayloadAction<ContactData>) => ({
      ...currentContactState,
      friends: [...currentContactState.friends, action.payload],
    }),
    selectContact: (
      currentContactState,
      action: PayloadAction<ContactData>
    ) => ({
      ...currentContactState,
      friend: action.payload,
    }),
    updateContact: (
      currentContactState,
      action: PayloadAction<ContactData>
    ) => ({
      ...currentContactState,
      friends: currentContactState.friends.map((contact) => {
        if (action.payload.id === contact.id) {
          return { ...contact, balance: action.payload.balance };
        }
        return contact;
      }),
    }),
  },
});

export const {
  addContact: addContactActionCreator,
  selectContact: selectContactActionCreator,
  updateContact: updateContactActionCreator,
} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
