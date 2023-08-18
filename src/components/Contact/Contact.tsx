import React from "react";
import { ContactData } from "../../types";
import { useAppDispatch } from "../../store";
import { selectContactActionCreator } from "../../store/contact/contactSlice";

interface ContactProps {
  contact: ContactData;
  onSelect: () => void;
}

const Contact = ({ contact, onSelect }: ContactProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const handleOnSelect = (): void => {
    dispatch(selectContactActionCreator(contact));
    onSelect();
  };

  return (
    <article
      className={`flex justify-between items-center w-full p-[14px] {} ${
        contact.balance < 0
          ? "bg-[#ffdbd7]"
          : contact.balance === 0
          ? "bg-[#f9f4ee]"
          : "bg-[#dbf2e3]"
      } rounded-[10px] shadow-md`}
    >
      <img
        src={contact.image}
        alt={`portrait of ${contact.name}`}
        width={120}
        height={120}
        className="rounded-full"
      />
      <div className="flex flex-col justify-between items-end">
        <h2 className="text-xl font-bold">{contact.name}</h2>
        {contact.balance < 0 ? (
          <p className="py-5 font-bold text-[#ce0f0f]">
            You owe {contact.name} {-contact.balance} €
          </p>
        ) : contact.balance === 0 ? (
          <p className="py-5">You and {contact.name} are even</p>
        ) : (
          <p className="py-5 font-bold text-[#199561]">
            {contact.name} owes you {contact.balance} €
          </p>
        )}

        <button
          className="w-[72px] h-[48px] bg-[#f8a23d] hover:bg-[#ffc64a] font-bold text-white rounded-[10px] shadow-md"
          onClick={handleOnSelect}
        >
          Select
        </button>
      </div>
    </article>
  );
};

export default Contact;
