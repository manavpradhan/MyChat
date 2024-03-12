import React from "react";
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-lg rounded-lg block w-full bg-gray-600 border-gray-600 text-white p-4 outline-none"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-8"
        >
          <BsSend className="h-7 w-7" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
