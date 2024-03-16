import React from "react";
import Conversation from "./Conversation";
import useMyContacts from "../../hooks/useMyContacts.js";
import { getRandomEmoji } from "../../utils/emojis.js";

const Contacts = () => {
  const { loading, myContacts } = useMyContacts();

  console.log(myContacts);

  return (
    <div className="py-2 flex flex-col overflow-auto caret-transparent">
      {myContacts.map((contact, idx) => {
        <Conversation
          key={contact._id}
          contactInfo={contact}
          emoji={getRandomEmoji()}
          lastIdx={idx === myContacts.length - 1}
        />;
      })}

      {loading ? (
        <span className="loading loaading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Contacts;
