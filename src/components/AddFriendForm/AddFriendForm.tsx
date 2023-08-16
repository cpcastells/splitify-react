import React, { useState } from "react";
import closeIcon from "../../../public/images/icons/close-icon.svg";
interface AddFriendForm {
  onAddFriendForm: (value: boolean) => void;
}

const AddFriendForm = ({
  onAddFriendForm,
}: AddFriendForm): React.ReactElement => {
  const initialFriend = {
    image: "",
    name: "",
    balance: 0,
  };

  const [newFriend, setNewFriend] = useState(initialFriend);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFriend({ ...newFriend, [event.target.id]: event.target.value });
  };

  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setNewFriend(initialFriend);
  };

  const isDisabled = !newFriend.image || !newFriend.name;

  return (
    <form
      className="relative w-full p-[14px] bg-[#ffffffbe] rounded-[10px]"
      onSubmit={handleOnSubmit}
    >
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
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-bold">
            Friend name:
          </label>
          <input
            id="name"
            type="text"
            value={newFriend.name}
            onChange={handleOnChange}
            className="w-[190px] h-12 bg-[#fbE3c7] rounded-[10px] px-3"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="image" className="font-bold">
            Image URL:
          </label>
          <input
            id="image"
            type="text"
            value={newFriend.image}
            onChange={handleOnChange}
            className="w-[190px] h-12 bg-[#fbE3c7] rounded-[10px] px-3"
          />
        </div>
        <button
          disabled={isDisabled}
          className="flex items-center  justify-center gap-3 w-full h-[48px] bg-[#f8a23d] hover:bg-[#ffc64a] 
          font-bold text-white rounded-[10px] shadow-md capitalize disabled:bg-[#fcc990]"
        >
          add
        </button>
      </div>
    </form>
  );
};

export default AddFriendForm;
