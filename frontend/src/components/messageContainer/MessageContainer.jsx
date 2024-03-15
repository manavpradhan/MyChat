import React, { useContext } from "react";
import ChatWindow from "./ChatWindow";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import { AuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[550px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
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
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center gap-2 px-4 text-center font-semibold sm:text-lg md:text-xl">
        <p>Hey!! {authUser.user.name} 👋</p>
        <p>Welcome!!!</p>
        <p>Select a chat to start a conversation with them...</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
