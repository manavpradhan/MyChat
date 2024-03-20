import React from "react";
import useConversation from "../../zustand/useConversation";
import { SocketContext } from "../../context/SocketContext";

const Conversation = ({ contactInfo, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = React.useContext(SocketContext);

  const isSelected = selectedConversation?._id === contactInfo._id;
  const isOnline = onlineUsers.includes(contactInfo._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-orange-400 rounded p-2 py-1 cursor-pointer ease-in-out ${
          isSelected ? "bg-orange-400" : ""
        }`}
        onClick={() => setSelectedConversation(contactInfo)}
      >
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full">
            <img src={contactInfo.profilePic} alt="user img" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-white">{contactInfo.name}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
