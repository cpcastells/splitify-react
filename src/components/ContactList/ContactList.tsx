import React from "react";
import Contact from "../Contact/Contact";
import { ContactData } from "../../types";

interface ContactListProps {
  contactList: ContactData[];
}

const ContactList = ({ contactList }: ContactListProps): React.ReactElement => {
  return (
    <div className="flex flex-col gap-[35px] w-full">
      <ul className="flex flex-col gap-5">
        {contactList.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
