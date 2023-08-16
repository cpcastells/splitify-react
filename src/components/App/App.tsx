import React, { useState } from "react";
import logo from "../../../public/images/splitify-logo.svg";
import Operation from "../Operation/Operation";
import ContactList from "../ContactList/ContactList";
import { initialContacts } from "../../data/contacts";
import AddFriendForm from "../AddFriendForm/AddFriendForm";
import addIcon from "../../../public/images/icons/people-add.svg";

const App = (): React.ReactElement => {
  const [isAddFriendFormOpen, setIsAddOpen] = useState(false);

  const handleOnIsAddOpen = (): void => {
    setIsAddOpen(!isAddFriendFormOpen);
  };

  return (
    <>
      <img
        src={logo}
        width={375}
        height={197}
        alt="Splitify logo"
        className="m-auto"
      />
      <div className="h-screen bg-gradient-to-b from-white to-orange-200 flex flex-col justify-start items-center gap-5 px-5 pb-9">
        <Operation />
        <ContactList contactList={initialContacts} />
        {isAddFriendFormOpen && (
          <AddFriendForm onAddFriendForm={setIsAddOpen} />
        )}
        {!isAddFriendFormOpen && (
          <button
            onClick={handleOnIsAddOpen}
            className="flex items-center  justify-center gap-3 w-full h-[48px] bg-[#f8a23d] hover:bg-[#ffc64a]
             font-bold text-white rounded-[10px] shadow-md capitalize transition-all duration-150 ease-in-out"
          >
            <img src={addIcon} width={40} height={40} alt="add icon" />
            Add friend
          </button>
        )}
      </div>
    </>
  );
};

export default App;
