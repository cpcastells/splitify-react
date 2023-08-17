import React from "react";
import { useAppSelector } from "../../store";

const Operation = (): React.ReactElement => {
  const { friends } = useAppSelector((state) => state.contactStore);

  const moneyPeopleOwe = friends.reduce((accumulator, contact) => {
    if (contact.balance > 0) {
      return accumulator + contact.balance;
    } else {
      return accumulator;
    }
  }, 0);

  const moneyIowe = friends.reduce((accumulator, contact) => {
    if (contact.balance < 0) {
      return accumulator + contact.balance;
    } else {
      return accumulator;
    }
  }, 0);

  return (
    <div className="flex justify-between gap-3 w-full font-bold">
      <div className="flex flex-col flex-grow-[2] bg-[#F9F4EE] rounded-[10px] p-[14px] shadow-md">
        <div className="flex justify-between">
          <span className="">People owe you:</span>
          <span className="text-[#197e54]">{moneyPeopleOwe} €</span>
        </div>
        <div className="flex justify-between">
          <span>You owe:</span>
          <span className="text-[#ce0f0f]">{moneyIowe} €</span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center flex-grow-[1] bg-[#F9F4EE] rounded-[10px] p-[14px] shadow-md">
        <span className="text-xs">Total</span>
        <span className="text-xl">{moneyPeopleOwe + moneyIowe} €</span>
      </div>
    </div>
  );
};

export default Operation;
