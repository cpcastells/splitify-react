import React from "react";
import logo from "../../../public/images/splitify-logo.svg";
import Operation from "../Operation/Operation";
import ContactList from "../ContactList/ContactList";
import { initialContacts } from "../../data/contacts";

const App = (): React.ReactElement => {
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
      </div>
    </>
  );
};

export default App;
