import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime.js";
import useConversation from "../../zustand/useConversation";

const Message = ({ messageData }) => {
  const { authUser } = useContext(AuthContext);
  const { selectedConversation } = useConversation();

  const fromMe = authUser.user._id === messageData.senderId;

  const chatClassName = fromMe ? "chat-end" : "chat-start";

  const profileImg = fromMe
    ? authUser.user.profilePic
    : selectedConversation?.profilePic;

  const chatBubbleColor = fromMe ? "bg-orange-400" : "bg-gray-600";

  const formattedTime = extractTime(messageData.createdAt);

  // console.log(authUser);

  // console.log(authUser._id, messageData.senderId, fromMe);

  return (
    <div className={`chat ${chatClassName} py-3`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profileImg} alt="user pic" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${chatBubbleColor}`}>
        {messageData.message}
      </div>
      <div className="chat-footer flex gap-1 items-center text-xs opacity-90">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
