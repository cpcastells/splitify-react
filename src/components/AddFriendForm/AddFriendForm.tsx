import React from "react";
import closeIcon from "../../../public/images/icons/close-icon.svg";

interface AddFriendForm {
  onAddFriendForm: (value: boolean) => void;
}

const AddFriendForm = ({
  onAddFriendForm,
}: AddFriendForm): React.ReactElement => {
  return (
    <form className="relative w-full p-[14px] bg-[#ffffffbe] rounded-[10px]">
      <div className="flex flex-col gap-[25px]">
        <button onClick={() => onAddFriendForm(false)}>
          <img
            src={closeIcon}
            alt="close icon"
            width={48}
            height="auto"
            className="absolute top-[14px] right-[14px]"
          />
        </button>
        <div
          className={`w-[146px] h-[146px] bg-[#fbE3c7] self-center rounded-full 
          bg-[url("../../../public/images/icons/who-icon.svg")] bg-no-repeat bg-center bg-fit `}
        ></div>
        <div className="flex justify-between items-center font-bold">
          <label htmlFor="name">Friend name:</label>
          <input
            id="name"
            type="text"
            className="w-[190px] h-12 bg-[#fbE3c7] rounded-[10px]"
          />
        </div>
        <div className="flex justify-between items-center font-bold">
          <label
            htmlFor="image"
            className="flex justify-between items-center font-bold"
          >
            Image URL:
          </label>
          <input
            id="image"
            type="text"
            className="w-[190px] h-12 bg-[#fbE3c7] rounded-[10px]"
          />
        </div>
        <button className="flex items-center  justify-center gap-3 w-full h-[48px] bg-[#f8a23d] hover:bg-[#ffc64a] font-bold text-white rounded-[10px] shadow-md capitalize">
          add
        </button>
      </div>
    </form>
  );
};

export default AddFriendForm;
