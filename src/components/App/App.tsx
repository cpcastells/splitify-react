import React from "react";
import logo from "../../../public/images/splitify-logo.svg";

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
      <div className="h-screen bg-gradient-to-b from-white to-orange-200 flex flex-col justify-start items-center px-5 pb-9">
        <p className="text-3xl font-bold underline">Hello world!</p>
      </div>
    </>
  );
};

export default App;
