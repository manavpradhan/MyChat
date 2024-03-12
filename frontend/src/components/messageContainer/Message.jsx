import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end py-3">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="user pic"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-orange-400">
        Hi! howz it going??😉
      </div>
      <div className="chat-footer flex gap-1 items-center text-xs opacity-90">
        12.40
      </div>
    </div>
  );
};

export default Message;
