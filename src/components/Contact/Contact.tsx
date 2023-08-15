import React from "react";
import { ContactData } from "../../types";

interface ContactProps {
  contact: ContactData;
}

const Contact = ({
  contact: { name, image, balance },
}: ContactProps): React.ReactElement => {
  return (
    <article
      className={`flex justify-between items-center w-full p-[14px] {} ${
        balance < 0
          ? "bg-[#ffdbd7]"
          : balance === 0
          ? "bg-[#f9f4ee]"
          : "bg-[#dbf2e3]"
      } rounded-[10px] shadow-md`}
    >
      <img
        src={image}
        alt={`portrait of ${name}`}
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="flex flex-col justify-between items-end">
        <h2 className="text-xl font-bold">{name}</h2>
        {balance < 0 ? (
          <p className="py-5 font-bold text-[#ce0f0f]">
            You owe {name} {-balance}€
          </p>
        ) : balance === 0 ? (
          <p className="py-5">You and {name} are even</p>
        ) : (
          <p className="py-5 font-bold text-[#199561]">
            {name} owes you {balance}
          </p>
        )}

        <button className="w-[72px] h-[41px] bg-[#f8a23d] font-bold text-white rounded-[10px] shadow-md">
          Select
        </button>
      </div>
    </article>
  );
};

export default Contact;
