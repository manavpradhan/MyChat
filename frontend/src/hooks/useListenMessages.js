import React from "react";
import { SocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
  const { socket } = React.useContext(SocketContext);
  const { messages, setMessages } = useConversation();

  React.useEffect(() => {
    socket?.on("newMessage", (incMessage) => {
      setMessages([...messages, incMessage]);
    });

    return () => socket.off("newMessage");
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
