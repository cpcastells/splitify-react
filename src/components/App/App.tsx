import React, { useState } from "react";
import logo from "/images/splitify-logo.svg";
import addIcon from "/images/icons/people-add.svg";
import Operation from "../Operation/Operation";
import ContactList from "../ContactList/ContactList";
import AddFriendForm from "../AddFriendForm/AddFriendForm";
import SplitForm from "../SplitForm/SplitForm";
import { useAppSelector } from "../../store";

const App = (): React.ReactElement => {
  const { friends, friend } = useAppSelector((state) => state.contactStore);
  const [isAddFriendFormOpen, setIsAddOpen] = useState(false);
  const [isSplitFormOpen, setIsSplitOpen] = useState(false);

  const handleOnIsAddFormOpen = (): void => {
    setIsAddOpen(!isAddFriendFormOpen);
  };

  const handleOnIsSplitFormOpen = (): void => {
    setIsSplitOpen(!isSplitFormOpen);
  };

  return (
    <>
      {isSplitFormOpen && (
        <SplitForm onCloseSplitForm={setIsSplitOpen} contact={friend} />
      )}
      <div className="w-full max-w-lg m-auto">
        <img
          src={logo}
          width={375}
          height={197}
          alt="Splitify logo"
          className="m-auto"
        />
        <div className="min-h-screen flex flex-col justify-start items-center gap-5 px-5 pb-9">
          <Operation />
          <ContactList
            contactList={friends}
            onSelect={handleOnIsSplitFormOpen}
          />
          {isAddFriendFormOpen && (
            <AddFriendForm onAddFriendForm={setIsAddOpen} />
          )}
          {!isAddFriendFormOpen && (
            <button
              onClick={handleOnIsAddFormOpen}
              className="flex items-center justify-center gap-3 w-full h-[48px] bg-[#f8a23d] hover:bg-[#ffc64a]
             font-bold text-white rounded-[10px] shadow-md capitalize transition-all duration-150 ease-in-out"
            >
              <img src={addIcon} width={40} height={40} alt="add icon" />
              Add friend
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
