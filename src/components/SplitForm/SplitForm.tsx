import React, { useState } from "react";
import dollarIcon from "/images/icons/coin.svg";
import userIcon from "/images/icons/user.svg";
import usersIcon from "/images/icons/users.svg";
import moodIcon from "/images/icons/mood-dollar.svg";
import splitIcon from "/images/icons/split.svg";

interface SplitFormProps {
  onCloseSplitForm: (value: boolean) => void;
}

const SplitForm = ({
  onCloseSplitForm,
}: SplitFormProps): React.ReactElement => {
  const initialForm = {
    bill: "",
    expense: "",
    whoPay: "you",
  };
  const [splitForm, setSplitForm] = useState(initialForm);
  const paidByFriend = splitForm.bill
    ? (Number(splitForm.bill) - Number(splitForm.expense)).toString()
    : "";

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setSplitForm({
      ...splitForm,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-start gap-[15px] bg-black bg-opacity-90 
    backdrop-blur-5 fixed px-5 pt-[60px] z-10"
    >
      <p className="text-xl text-white font-bold">Split a bill with</p>
      <img
        className="self-center rounded-full"
        alt="portrait of XXX"
        width={146}
        height={146}
        src="https://i.pravatar.cc/300"
      />
      <h2 className="text-[32px] text-white font-bold uppercase">jimmy</h2>
      <form className="w-full flex flex-col items-center gap-3 bg-[#ffe3c2] rounded-[10px] px-[14px] py-[35px]">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={dollarIcon}
              width={24}
              height={24}
              alt="dollar icon"
              className="mr-[14px]"
            />
            <label htmlFor="bill" className="font-bold">
              Bill value:
            </label>
          </div>
          <input
            id="bill"
            type="number"
            className="w-[140px] h-12 bg-[#fffbe5] border border-[#F8D783] rounded-[10px] px-3"
            value={splitForm.bill}
            onChange={handleOnChange}
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={userIcon}
              width={24}
              height={24}
              alt="user icon"
              className="mr-[14px]"
            />
            <label htmlFor="expense" className="font-bold">
              Your expense:
            </label>
          </div>
          <input
            id="expense"
            type="number"
            className="w-[140px] h-12 bg-[#fffbe5] border border-[#F8D783] rounded-[10px] px-3"
            value={splitForm.expense}
            onChange={handleOnChange}
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={usersIcon}
              width={24}
              height={24}
              alt="users icon"
              className="mr-[14px]"
            />
            <label htmlFor="friendExpense" className="font-bold">
              Friend&apos;s expense:
            </label>
          </div>
          <input
            id="friendExpense"
            type="text"
            className="w-[140px] h-12 bg-[#f8f2d1] border border-[#F8D783] rounded-[10px] px-3"
            value={paidByFriend}
            readOnly
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={moodIcon}
              width={24}
              height={24}
              alt="mood icon"
              className="mr-[14px]"
            />
            <label htmlFor="whoPay" className="font-bold">
              Who is paying the bill?:
            </label>
          </div>
          <select
            id="whoPay"
            className="w-[140px] h-12 bg-[#fffbe5] border border-[#F8D783] rounded-[10px] px-3"
            value={splitForm.whoPay}
            onChange={handleOnChange}
          >
            <option value="you">You</option>
            <option value="friend">Friend</option>
          </select>
        </div>
        <div className="flex justify-between w-full  pt-[22px]">
          <button
            className="flex items-center justify-center w-[140px] h-[48px] bg-[#f8a23d] hover:bg-[#ffc64a]
             font-bold rounded-[10px] shadow-md capitalize transition-all duration-150 ease-in-out"
            onClick={() => onCloseSplitForm(false)}
          >
            close
          </button>
          <button
            className="flex items-center justify-center gap-2 w-[140px] h-[48px] bg-[#f8a23d] hover:bg-[#ffc64a]
             font-bold rounded-[10px] shadow-md capitalize transition-all duration-150 ease-in-out"
          >
            <img src={splitIcon} width={29} height={31} alt="add icon" />
            split bill
          </button>
        </div>
      </form>
    </div>
  );
};

export default SplitForm;
