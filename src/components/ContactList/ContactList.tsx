import React from "react";
import Contact from "../Contact/Contact";
import { ContactData } from "../../types";

interface ContactListProps {
  contactList: ContactData[];
  onSelect: () => void;
}

const ContactList = ({
  contactList,
  onSelect,
}: ContactListProps): React.ReactElement => {
  return (
    <div className="flex flex-col gap-[35px] w-full">
      <ul className="flex flex-col gap-5">
        {contactList.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} onSelect={onSelect} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
