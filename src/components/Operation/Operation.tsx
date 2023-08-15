import React from "react";

const Operation = (): React.ReactElement => {
  return (
    <div className="flex justify-between gap-3 w-full font-bold">
      <div className="flex flex-col flex-grow-[2] bg-[#F9F4EE] rounded-[10px] p-[14px] shadow-md">
        <div className="flex justify-between">
          <span className="">People owe you:</span>
          <span className="text-[#197e54]">- €</span>
        </div>
        <div className="flex justify-between">
          <span>You owe:</span>
          <span className="text-[#ce0f0f]">- €</span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center flex-grow-[1] bg-[#F9F4EE] rounded-[10px] p-[14px] shadow-md">
        <span className="text-xs">Total</span>
        <span>- €</span>
      </div>
    </div>
  );
};

export default Operation;
