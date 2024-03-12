import React from "react";
import ChatWindow from "./ChatWindow";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[550px] flex flex-col">
      <>
        {/* {header} */}
        <div className="bg-slate-500 px-4 py-2 mb-2 caret-transparent">
          <span className="label-text">To:</span>
          <span className="font-bold text-white">John Doe</span>
        </div>

        {/* {chat window} */}
        <ChatWindow />

        {/* {message input} */}
        <MessageInput />
      </>
    </div>
  );
};

export default MessageContainer;
