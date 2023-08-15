import React from "react";

const Contact = (): React.ReactElement => {
  return (
    <article className="flex justify-between items-center w-full p-[14px] bg-[#f9f4ee] rounded-[10px] shadow-md">
      <img
        src="https://cdn.discordapp.com/attachments/1114204200885301331/1141028891218170047/foto.png"
        alt="portrait of xxx"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="flex flex-col justify-between items-end">
        <h2 className="text-xl font-bold">XXX</h2>
        <p className="py-5">You and XXX are even</p>
        <button className="w-[72px] h-[41px] bg-[#f8a23d] font-bold text-white rounded-[10px] shadow-md">
          Select
        </button>
      </div>
    </article>
  );
};

export default Contact;
