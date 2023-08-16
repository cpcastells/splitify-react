import React from "react";
import Contact from "../Contact/Contact";
import addIcon from "../../../public/images/icons/people-add.svg";
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
      <button className="flex items-center  justify-center gap-3 w-full h-[48px] bg-[#f8a23d] hover:bg-[#ffc64a] font-bold text-white rounded-[10px] shadow-md capitalize">
        <img src={addIcon} width={40} height={40} alt="add icon" />
        Add friend
      </button>
    </div>
  );
};

export default ContactList;
