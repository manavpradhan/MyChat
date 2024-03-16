import React from "react";

const Conversation = ({ contactInfo, emoji, lastIdx }) => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-orange-400 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={contactInfo.profilePic} alt="user img" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-white">{contactInfo.name}</p>
            <span className="text-xl">😎</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
