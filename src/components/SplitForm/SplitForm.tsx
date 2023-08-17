import React from "react";
import dollarIcon from "/images/icons/coin.svg";
import userIcon from "/images/icons/user.svg";
import usersIcon from "/images/icons/users.svg";
import moodIcon from "/images/icons/mood-dollar.svg";
import splitIcon from "/images/icons/split.svg";

const SplitForm = (): React.ReactElement => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-start gap-[15px] bg-black bg-opacity-90 
    backdrop-blur-5 fixed px-5 pt-[60px]"
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
            type="text"
            className="w-[140px] h-12 bg-[#fffbe5] border border-[#F8D783] rounded-[10px] px-3"
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
            type="text"
            className="w-[140px] h-12 bg-[#fffbe5] border border-[#F8D783] rounded-[10px] px-3"
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
            <label htmlFor="friend-expense" className="font-bold">
              Friend&apos;s expense:
            </label>
          </div>
          <input
            id="friend-expense"
            type="text"
            className="w-[140px] h-12 bg-[#fffbe5] border border-[#F8D783] rounded-[10px] px-3"
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
            <label htmlFor="who-pay" className="font-bold">
              Friend&apos;s expense:
            </label>
          </div>
          <select
            id="who-pay"
            className="w-[140px] h-12 bg-[#fffbe5] border border-[#F8D783] rounded-[10px] px-3"
          >
            <option value="">You</option>
            <option value="">Friend</option>
          </select>
        </div>
        <div className="flex justify-between w-full  pt-[22px]">
          <button
            className="flex items-center justify-center w-[140px] h-[48px] bg-[#f8a23d] hover:bg-[#ffc64a]
             font-bold rounded-[10px] shadow-md capitalize transition-all duration-150 ease-in-out"
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
