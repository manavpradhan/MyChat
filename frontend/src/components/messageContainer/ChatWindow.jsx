import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";

const ChatWindow = () => {
  const { loading, messages } = useGetMessages();
  // console.log(messages);

  const lastMessageBox = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageBox.current?.scrollIntoView({ behaviour: "smooth" });
    }, 100);
  }, [lastMessageBox, messages]);

  return (
    <div className="px-4 flex-1 py-10 caret-transparent overflow-auto">
      {loading && [...Array(6)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center mx-auto my-auto">
          Say Hi! to start a conversation
        </p>
      )}
      {!loading &&
        messages.length !== 0 &&
        messages.map((msg) => (
          <div key={msg._id} ref={lastMessageBox}>
            <Message messageData={msg} />
          </div>
        ))}
    </div>
  );
};

export default ChatWindow;
