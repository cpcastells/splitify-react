import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import closeIcon from "/images/icons/close-icon.svg";
import imagePreview from "/images/image-preview.svg";
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
    setNewFriend((prevFriend) => ({
      ...prevFriend,
      [event.target.id]: event.target.value,
    }));
  };

  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setNewFriend(initialFriend);
  };

  const handleOnRandomPortrait = (): void => {
    setNewFriend({
      ...newFriend,
      image: `https://i.pravatar.cc/150?u=a0425https://i.pravatar.cc/146?u=${uuidv4()}`,
    });
  };

  const isDisabled = !newFriend.image || !newFriend.name;

  return (
    <form
      className="relative w-full p-[14px] bg-[#ffffffbe] rounded-[10px]"
      onSubmit={handleOnSubmit}
    >
      <div className="flex flex-col gap-[25px]">
        <button type="button" onClick={() => onAddFriendForm(false)}>
          <img
            src={closeIcon}
            alt="close icon"
            width={48}
            height="auto"
            className="absolute top-[14px] right-[14px]"
          />
        </button>
        {!newFriend.image && (
          <div
            className={`w-[146px] h-[146px] bg-[#fbE3c7] self-center rounded-full 
          bg-[url("/images/icons/who-icon.svg")] bg-no-repeat bg-center bg-fit `}
          ></div>
        )}
        {newFriend.image && (
          <img
            className="self-center rounded-full"
            alt="portrait"
            width={146}
            height={146}
            src={newFriend.image}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = imagePreview;
            }}
          />
        )}
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
            type="url"
            value={newFriend.image}
            onChange={handleOnChange}
            className="w-[190px] h-12 bg-[#fbE3c7] rounded-[10px] px-3"
          />
        </div>
        <button
          type="button"
          onClick={handleOnRandomPortrait}
          className="flex items-center  justify-center gap-3 w-full h-[48px] bg-[#87aaf5] 
          font-bold text-white rounded-[10px] shadow-md capitalize disabled:bg-[#fcc990]
          hover:bg-[#ffc64a] transition-all duration-150 ease-in-out active:bg-[#4f6491]"
        >
          generate random avatar
        </button>
        <button
          disabled={isDisabled}
          className="flex items-center  justify-center gap-3 w-full h-[48px] bg-[#f8a23d] hover:bg-[#ffc64a] 
          font-bold text-white rounded-[10px] shadow-md capitalize disabled:bg-[#fcc990]
          transition-all duration-150 ease-in-out"
        >
          add
        </button>
      </div>
    </form>
  );
};

export default AddFriendForm;
