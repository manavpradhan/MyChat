import React from "react";
import Conversation from "./Conversation";

const Contacts = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto caret-transparent ">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />

      <Conversation />
      <Conversation />
    </div>
  );
};

export default Contacts;
