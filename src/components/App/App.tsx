import React from "react";
import logo from "../../../public/images/splitify-logo.svg";
import Operation from "../Operation/Operation";
import Contact from "../Contact/Contact";

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
        <Contact />
      </div>
    </>
  );
};

export default App;
