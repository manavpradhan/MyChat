import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(message);
    e.preventDefault();

    if (!message) {
      toast.error("no msg in the field");
      return;
    }
    await sendMessage(message);

    toast.success("message sent");

    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border text-lg rounded-lg block w-full bg-gray-600 border-gray-600 text-white p-4 outline-none"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-8"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend className="h-7 w-7" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
